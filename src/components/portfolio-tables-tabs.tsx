"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { CvsHealthVenturesModule } from "@/components/cvs-health-ventures-module";
import { NeaHealthcareModule } from "@/components/nea-healthcare-module";
import { RemoteUsHiringModule } from "@/components/remote-us-hiring-module";
import { ValspringHealthcareModule } from "@/components/valspring-healthcare-module";

const tabs = [
  {
    id: "remote-us",
    label: "Remote U.S.",
    description: "General remote hiring list across product, design, and engineering.",
    content: <RemoteUsHiringModule />,
  },
  {
    id: "valspring",
    label: "Valspring",
    description: "Healthcare portfolio companies from Valspring and their careers links.",
    content: <ValspringHealthcareModule />,
  },
  {
    id: "nea",
    label: "NEA",
    description: "Healthcare portfolio companies shown on NEA's portfolio page.",
    content: <NeaHealthcareModule />,
  },
  {
    id: "cvs-health-ventures",
    label: "CVS Ventures",
    description: "Portfolio companies from CVS Health Ventures and their careers links.",
    content: <CvsHealthVenturesModule />,
  },
] as const;

export function PortfolioTablesTabs() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("remote-us");

  const activePanel = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section className="flex flex-col gap-4">
      <div className="rounded-[2rem] border border-white/70 bg-white/78 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]"
                      : "border-slate-200 bg-white/90 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  )}
                  aria-pressed={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <p className="text-sm leading-6 text-slate-600">
            {activePanel.description}
          </p>
        </div>
      </div>

      <div key={activePanel.id}>{activePanel.content}</div>
    </section>
  );
}
