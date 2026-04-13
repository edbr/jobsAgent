"use client";

import dynamic from "next/dynamic";

const SearchManager = dynamic(
  () => import("@/components/search-manager").then((module) => module.SearchManager),
  {
    ssr: false,
    loading: () => <div className="min-h-24 rounded-[2rem] border border-white/70 bg-white/85" />,
  }
);

export function SearchManagerShell() {
  return <SearchManager />;
}
