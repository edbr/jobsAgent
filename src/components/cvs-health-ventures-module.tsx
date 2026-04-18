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
import { cvsHealthVenturesCompanies } from "@/lib/cvs-health-ventures-companies";

const companyCount = cvsHealthVenturesCompanies.length;

export function CvsHealthVenturesModule() {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/78 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">
      <div className="flex flex-col gap-3 md:max-w-4xl">
        <Badge
          variant="outline"
          className="border-slate-200 bg-white/90 text-slate-700"
        >
          CVS Health Ventures portfolio
        </Badge>
        <div className="space-y-2">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            {companyCount} CVS Health Ventures portfolio companies and careers pages
          </h2>
          <p className="text-sm leading-6 text-slate-600 sm:text-base">
            This table follows the companies listed on the CVS Health Ventures
            portfolio page and links each one to a careers destination when that
            destination was easy to verify.
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
                Link type
              </TableHead>
              <TableHead className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Careers page
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cvsHealthVenturesCompanies.map((company) => (
              <TableRow
                key={company.company}
                className="border-slate-200/80 bg-white hover:bg-amber-50/30"
              >
                <TableCell className="px-4 py-3 font-medium text-slate-950">
                  {company.company}
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
        Some entries route to a company homepage, talent network, or affiliated
        job board when a dedicated careers page was not easy to confirm quickly.
      </p>
    </section>
  );
}
