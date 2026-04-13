"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Search, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  defaultDailySearches,
  legacyDefaultDailySearches,
  type DailySearch,
} from "@/lib/job-data";

const STORAGE_KEY = "jobs-agent-saved-searches";

const emptyForm: DailySearch = {
  category: "",
  board: "",
  focus: "",
  query: "",
};

function createSearchKey(search: DailySearch) {
  return `${search.category}::${search.board}::${search.focus}::${search.query}`;
}

function mergeSearches(stored: DailySearch[]) {
  const merged = [...defaultDailySearches];
  const seen = new Set(defaultDailySearches.map(createSearchKey));
  const legacyKeys = new Set(legacyDefaultDailySearches.map(createSearchKey));

  for (const search of stored) {
    const key = createSearchKey(search);
    if (!seen.has(key) && !legacyKeys.has(key)) {
      seen.add(key);
      merged.push(search);
    }
  }

  return merged;
}

function getInitialSearches() {
  if (typeof window === "undefined") {
    return defaultDailySearches;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return defaultDailySearches;
  }

  try {
    const parsed = JSON.parse(stored) as DailySearch[];
    if (Array.isArray(parsed) && parsed.length > 0) {
      return mergeSearches(parsed);
    }
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
  }

  return defaultDailySearches;
}

export function SearchManager() {
  const [searches, setSearches] = useState<DailySearch[]>(getInitialSearches);
  const [form, setForm] = useState<DailySearch>(emptyForm);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(searches));
  }, [searches]);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(searches.map((item) => item.category))).sort()],
    [searches]
  );

  const filteredSearches = useMemo(() => {
    if (activeCategory === "All") {
      return searches;
    }

    return searches.filter((item) => item.category === activeCategory);
  }, [activeCategory, searches]);

  const summary = useMemo(
    () => [
      {
        title: activeCategory === "All" ? "Saved searches" : `${activeCategory} searches`,
        value: `${filteredSearches.length} active queries`,
        detail:
          activeCategory === "All"
            ? "Your list is stored in this browser so you can keep refining it over time."
            : `Showing only the searches grouped under ${activeCategory}.`,
      },
      {
        title: "Boards covered",
        value: `${new Set(filteredSearches.map((item) => item.board)).size} source groups`,
        detail: "Mix board-specific searches with broader startup sweeps to widen coverage.",
      },
      {
        title: "Daily routine",
        value: "Run once each morning and review the new openings",
        detail: "These defaults are tuned for remote U.S. roles so the results skew toward U.S.-eligible openings.",
      },
    ],
    [activeCategory, filteredSearches]
  );

  const handleChange = (field: keyof DailySearch, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const addSearch = () => {
    if (!form.category.trim() || !form.board.trim() || !form.focus.trim() || !form.query.trim()) {
      return;
    }

    const nextSearch = {
      category: form.category.trim(),
      board: form.board.trim(),
      focus: form.focus.trim(),
      query: form.query.trim(),
    };

    setSearches((current) => {
      if (current.some((item) => createSearchKey(item) === createSearchKey(nextSearch))) {
        return current;
      }

      return [...current, nextSearch];
    });
    setForm(emptyForm);
  };

  const removeSearch = (index: number) => {
    setSearches((current) => current.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <Card className="border-white/70 bg-white/85 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.6)]">
      <CardHeader>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Search className="size-5 text-orange-500" />
            Daily Google searches
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-3 sm:grid-cols-3">
          {summary.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">{item.title}</p>
              <p className="mt-2 font-semibold text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-900">Filter by category</h3>
            <p className="text-sm leading-6 text-slate-600">
              Narrow the table to one source group at a time, or keep everything visible.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <Button
                  key={category}
                  variant={isActive ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-900">Add a new saved search</h3>
            <p className="text-sm leading-6 text-slate-600">
              Add a new Google query here and it will be saved in this browser automatically.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <Input
              placeholder="Category"
              value={form.category}
              onChange={(event) => handleChange("category", event.target.value)}
            />
            <Input
              placeholder="Job board"
              value={form.board}
              onChange={(event) => handleChange("board", event.target.value)}
            />
            <Input
              placeholder="Role / focus"
              value={form.focus}
              onChange={(event) => handleChange("focus", event.target.value)}
            />
            <Input
              placeholder='Google query, e.g. site:jobs.lever.co "staff product designer" remote'
              value={form.query}
              onChange={(event) => handleChange("query", event.target.value)}
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button className="rounded-full px-6" onClick={addSearch}>
              Save search
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-slate-200">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Board</TableHead>
                <TableHead>Focus</TableHead>
                <TableHead>Query</TableHead>
                <TableHead className="w-24 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSearches.map((search, index) => (
                <TableRow key={`${search.category}-${search.focus}-${index}`}>
                  <TableCell className="font-medium">{search.category}</TableCell>
                  <TableCell>{search.board}</TableCell>
                  <TableCell>{search.focus}</TableCell>
                  <TableCell>
                    <a
                      className="inline-flex items-start gap-2 text-sm leading-6 text-sky-700 transition-colors hover:text-sky-900"
                      href={`https://www.google.com/search?q=${encodeURIComponent(search.query)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="max-w-md wrap-break-word">{search.query}</span>
                      <ExternalLink className="mt-1 size-4 shrink-0" />
                    </a>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full"
                      onClick={() => removeSearch(index)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
