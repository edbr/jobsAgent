export type NeaHealthcareSector = "Digital Health" | "Life Sciences";

export type NeaHealthcareCompany = {
  company: string;
  sector: NeaHealthcareSector;
  careersUrl: string;
  sourceLabel: string;
};

export const neaHealthcareCompanies: NeaHealthcareCompany[] = [
  {
    company: "Tempus",
    sector: "Digital Health",
    careersUrl: "https://www.tempus.com/careers/",
    sourceLabel: "Company careers",
  },
  {
    company: "Strive Health",
    sector: "Digital Health",
    careersUrl: "https://strivehealth.com/careers/job/",
    sourceLabel: "Company careers",
  },
  {
    company: "Radiology Partners",
    sector: "Digital Health",
    careersUrl: "https://www.radpartners.com/join-our-team/join-our-support-team/",
    sourceLabel: "Company careers",
  },
  {
    company: "Marathon Health",
    sector: "Digital Health",
    careersUrl: "https://marathon.health/careers/",
    sourceLabel: "Company careers",
  },
  {
    company: "Curana Health",
    sector: "Digital Health",
    careersUrl: "https://curanahealth.com/join-our-team/",
    sourceLabel: "Company careers",
  },
  {
    company: "CPS Solutions",
    sector: "Digital Health",
    careersUrl: "https://cps.com/careers",
    sourceLabel: "Company careers",
  },
  {
    company: "InterMune",
    sector: "Life Sciences",
    careersUrl: "https://careers.roche.com/global/en",
    sourceLabel: "Roche careers",
  },
  {
    company: "Trillium Therapeutics",
    sector: "Life Sciences",
    careersUrl: "https://www.pfizer.com/about/careers",
    sourceLabel: "Pfizer careers",
  },
  {
    company: "NeoTract",
    sector: "Life Sciences",
    careersUrl: "https://careers.teleflex.com/",
    sourceLabel: "Teleflex careers",
  },
  {
    company: "CRISPR Therapeutics",
    sector: "Life Sciences",
    careersUrl: "https://www.crisprtx.com/",
    sourceLabel: "Company site",
  },
  {
    company: "MBX Biosciences",
    sector: "Life Sciences",
    careersUrl: "https://mbxbio.com/careers/",
    sourceLabel: "Company careers",
  },
  {
    company: "Escient Pharmaceuticals",
    sector: "Life Sciences",
    careersUrl: "https://www.escientpharma.com/careers/",
    sourceLabel: "Company careers",
  },
];
