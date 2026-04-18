import { PortfolioTablesTabs } from "@/components/portfolio-tables-tabs";
import { SearchManagerShell } from "@/components/search-manager-shell";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_26%),linear-gradient(180deg,#fffdf8_0%,#fff7ed_52%,#fff_100%)] px-5 py-8 text-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <section>
          <SearchManagerShell />
        </section>
        <PortfolioTablesTabs />
      </div>
    </main>
  );
}
