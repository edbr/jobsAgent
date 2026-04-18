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
import { neaHealthcareCompanies, type NeaHealthcareSector } from "@/lib/nea-healthcare-companies";

const sectorOrder: NeaHealthcareSector[] = ["Digital Health", "Life Sciences"];

const sectorCounts = sectorOrder.map((sector) => ({
  sector,
  count: neaHealthcareCompanies.filter((company) => company.sector === sector).length,
}));

function SectorPill({ sector }: { sector: NeaHealthcareSector }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold",
        sector === "Digital Health"
          ? "border-sky-200 bg-sky-100 text-sky-800"
          : "border-amber-200 bg-amber-100 text-amber-800"
      )}
    >
      {sector}
    </span>
  );
}

export function NeaHealthcareModule() {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/78 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">
      <div className="flex flex-col gap-3 md:max-w-4xl">
        <Badge
          variant="outline"
          className="border-slate-200 bg-white/90 text-slate-700"
        >
          NEA healthcare portfolio
        </Badge>
        <div className="space-y-2">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            NEA healthcare portfolio companies and careers pages
          </h2>
          <p className="text-sm leading-6 text-slate-600 sm:text-base">
            This section tracks the healthcare names visibly featured on NEA&apos;s
            portfolio page. The current set includes{" "}
            {sectorCounts[0]?.count ?? 0} Digital Health companies and{" "}
            {sectorCounts[1]?.count ?? 0} Life Sciences companies.
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
              <TableHead className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Sector
              </TableHead>
              <TableHead className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Link type
              </TableHead>
              <TableHead className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Careers page
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {neaHealthcareCompanies.map((company) => (
              <TableRow
                key={company.company}
                className="border-slate-200/80 bg-white hover:bg-amber-50/30"
              >
                <TableCell className="px-4 py-3 font-medium text-slate-950">
                  {company.company}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <SectorPill sector={company.sector} />
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-slate-600">
                  {company.sourceLabel}
                </TableCell>
                <TableCell className="px-4 py-3 text-right">
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
        NEA&apos;s portfolio page says the displayed companies are illustrative rather
        than a complete list, so this table reflects the healthcare companies visibly
        shown there. A few links route to parent-company or company-home pages when a
        dedicated careers page was not easy to verify.
      </p>
    </section>
  );
}
