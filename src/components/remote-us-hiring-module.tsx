import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { remoteUsHiringCompanies, type HiringFunction } from "@/lib/remote-companies";

const functionColumns: HiringFunction[] = ["Product", "Design", "Engineering"];
const companyCount = remoteUsHiringCompanies.length;

function HiringIndicator({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-6 min-w-6 items-center justify-center rounded-full border text-xs font-semibold",
        active
          ? "border-emerald-200 bg-emerald-100 text-emerald-800"
          : "border-slate-200 bg-slate-100 text-slate-400"
      )}
    >
      {active ? "Yes" : "-"}
    </span>
  );
}

export function RemoteUsHiringModule() {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/78 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">
      <div className="flex flex-col gap-3 md:max-w-4xl">
        <Badge
          variant="outline"
          className="border-slate-200 bg-white/90 text-slate-700"
        >
          Remote U.S. hiring table
        </Badge>
        <div className="space-y-2">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            {companyCount} companies hiring remote in the U.S. for product, design,
            and engineering
          </h2>
          <p className="text-sm leading-6 text-slate-600 sm:text-base">
            A denser shortlist built for scanning. Each row links to a live careers page
            or live opening, with columns showing where the current evidence landed.
          </p>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/90">
        <Table>
          <TableHeader className="bg-slate-50/90">
            <TableRow className="border-slate-200 hover:bg-slate-50/90">
              <TableHead className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Company
              </TableHead>
              {functionColumns.map((column) => (
                <TableHead
                  key={column}
                  className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
                >
                  {column}
                </TableHead>
              ))}
              <TableHead className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Example opening
              </TableHead>
              <TableHead className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Link
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {remoteUsHiringCompanies.map((company) => (
              <TableRow key={company.company} className="border-slate-200/80 bg-white hover:bg-amber-50/30">
                <TableCell className="px-4 py-3 align-top whitespace-normal">
                  <div className="font-medium text-slate-950">{company.company}</div>
                  <div className="mt-1 text-xs text-slate-500">{company.sourceLabel}</div>
                </TableCell>
                {functionColumns.map((column) => (
                  <TableCell key={column} className="px-3 py-3 text-center align-middle">
                    <HiringIndicator active={company.hiringFor.includes(column)} />
                  </TableCell>
                ))}
                <TableCell className="px-4 py-3 align-top whitespace-normal text-sm leading-6 text-slate-700">
                  {company.exampleRole}
                </TableCell>
                <TableCell className="px-4 py-3 text-right align-top">
                  <Link
                    href={company.careersUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900"
                  >
                    Open
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="mt-5 text-xs leading-5 text-slate-500">
        Hiring moves fast, so this table points to live boards or live job pages rather
        than trying to freeze every detail in the UI.
      </p>
    </section>
  );
}
