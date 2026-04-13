export type DailySearch = {
  category: string;
  board: string;
  focus: string;
  query: string;
};

export const legacyDefaultDailySearches: DailySearch[] = [
  {
    category: "Lever",
    board: "Lever",
    focus: "Remote product design roles",
    query: 'site:jobs.lever.co "product designer" remote',
  },
  {
    category: "Lever",
    board: "Lever",
    focus: "Design engineer roles",
    query: 'site:jobs.lever.co "design engineer"',
  },
  {
    category: "Lever",
    board: "Lever",
    focus: "Product manager roles",
    query: 'site:jobs.lever.co "product manager" remote',
  },
  {
    category: "Lever",
    board: "Lever",
    focus: "Solutions engineer roles",
    query: 'site:jobs.lever.co "solutions engineer" remote',
  },
  {
    category: "Lever",
    board: "Lever",
    focus: "Product (broad)",
    query: 'site:jobs.lever.co remote "product"',
  },
  {
    category: "Lever",
    board: "Lever",
    focus: "Design (broad)",
    query: 'site:jobs.lever.co "design" remote',
  },
  {
    category: "Greenhouse",
    board: "Greenhouse",
    focus: "Product design roles",
    query: 'site:boards.greenhouse.io "product designer" remote',
  },
  {
    category: "Greenhouse",
    board: "Greenhouse",
    focus: "Design systems roles",
    query: 'site:boards.greenhouse.io "design systems"',
  },
  {
    category: "Greenhouse",
    board: "Greenhouse",
    focus: "Product management roles",
    query: 'site:boards.greenhouse.io "product manager" remote',
  },
  {
    category: "Ashby",
    board: "Ashby",
    focus: "Product designer roles",
    query: 'site:jobs.ashbyhq.com "product designer"',
  },
  {
    category: "Ashby",
    board: "Ashby",
    focus: "AI startup design roles",
    query: 'site:jobs.ashbyhq.com "designer" ai',
  },
  {
    category: "Startup-focused",
    board: "Any",
    focus: "Early-stage startup roles",
    query: '"product designer" "series a" remote',
  },
  {
    category: "Startup-focused",
    board: "Any",
    focus: "Design engineer roles at startups",
    query: '"design engineer" startup remote',
  },
  {
    category: "LinkedIn",
    board: "LinkedIn Jobs",
    focus: "Product designer roles",
    query: 'site:linkedin.com/jobs/view "product designer" remote',
  },
  {
    category: "Built In",
    board: "Built In",
    focus: "Remote product design roles",
    query: 'site:builtin.com/jobs "product designer" remote',
  },
  {
    category: "Wellfound",
    board: "Wellfound",
    focus: "Startup product design roles",
    query: 'site:wellfound.com/jobs "product designer" remote',
  },
  {
    category: "Y Combinator",
    board: "Work at a Startup",
    focus: "Remote product design roles",
    query: 'site:ycombinator.com/jobs "product designer" remote',
  },
  {
    category: "Remote-first",
    board: "Remote.co",
    focus: "Remote product design roles",
    query: 'site:remote.co "product designer" remote',
  },
  {
    category: "Remote-first",
    board: "FlexJobs",
    focus: "Remote product management roles",
    query: 'site:flexjobs.com/jobs "product manager" remote',
  },
  {
    category: "SmartRecruiters",
    board: "SmartRecruiters",
    focus: "Design engineer roles",
    query: 'site:careers.smartrecruiters.com "design engineer"',
  },
  {
    category: "Workable",
    board: "Workable",
    focus: "Remote product design roles",
    query: 'site:apply.workable.com "product designer" remote',
  },
  {
    category: "Jobvite",
    board: "Jobvite",
    focus: "Remote product manager roles",
    query: 'site:jobs.jobvite.com "product manager" remote',
  },
  {
    category: "iCIMS",
    board: "iCIMS",
    focus: "Remote solutions engineer roles",
    query: 'site:careers.icims.com "solutions engineer" remote',
  },
  {
    category: "Workday",
    board: "Workday",
    focus: "Remote product design roles",
    query: 'site:myworkdayjobs.com "product designer" remote',
  },
  {
    category: "Hacker News",
    board: "HNHIRING",
    focus: "Startup product design roles",
    query: 'site:hnhiring.com "product designer"',
  },
];

export const defaultDailySearches: DailySearch[] = [
  {
    category: "Lever",
    board: "Lever",
    focus: "Remote US product design roles",
    query: 'site:jobs.lever.co "product designer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Lever",
    board: "Lever",
    focus: "Remote US design engineer roles",
    query: 'site:jobs.lever.co "design engineer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Lever",
    board: "Lever",
    focus: "Remote US product manager roles",
    query: 'site:jobs.lever.co "product manager" remote ("United States" OR USA OR US)',
  },
  {
    category: "Lever",
    board: "Lever",
    focus: "Remote US solutions engineer roles",
    query: 'site:jobs.lever.co "solutions engineer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Lever",
    board: "Lever",
    focus: "Remote US product roles",
    query: 'site:jobs.lever.co remote product ("United States" OR USA OR US)',
  },
  {
    category: "Lever",
    board: "Lever",
    focus: "Remote US design roles",
    query: 'site:jobs.lever.co design remote ("United States" OR USA OR US)',
  },
  {
    category: "Greenhouse",
    board: "Greenhouse",
    focus: "Remote US product design roles",
    query: 'site:boards.greenhouse.io "product designer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Greenhouse",
    board: "Greenhouse",
    focus: "Remote US design systems roles",
    query: 'site:boards.greenhouse.io "design systems" remote ("United States" OR USA OR US)',
  },
  {
    category: "Greenhouse",
    board: "Greenhouse",
    focus: "Remote US product management roles",
    query: 'site:boards.greenhouse.io "product manager" remote ("United States" OR USA OR US)',
  },
  {
    category: "Ashby",
    board: "Ashby",
    focus: "Remote US product designer roles",
    query: 'site:jobs.ashbyhq.com "product designer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Ashby",
    board: "Ashby",
    focus: "Remote US AI startup design roles",
    query: 'site:jobs.ashbyhq.com designer ai remote ("United States" OR USA OR US)',
  },
  {
    category: "Startup-focused",
    board: "Any",
    focus: "Remote US early-stage product design roles",
    query: '"product designer" "series a" remote ("United States" OR USA OR US)',
  },
  {
    category: "Startup-focused",
    board: "Any",
    focus: "Remote US startup design engineer roles",
    query: '"design engineer" startup remote ("United States" OR USA OR US)',
  },
  {
    category: "LinkedIn",
    board: "LinkedIn Jobs",
    focus: "Remote US product designer roles",
    query: 'site:linkedin.com/jobs/view "product designer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Built In",
    board: "Built In",
    focus: "Remote US product design roles",
    query: 'site:builtin.com/jobs "product designer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Wellfound",
    board: "Wellfound",
    focus: "Remote US startup product design roles",
    query: 'site:wellfound.com/jobs "product designer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Y Combinator",
    board: "Work at a Startup",
    focus: "Remote US product design roles",
    query: 'site:ycombinator.com/jobs "product designer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Remote-first",
    board: "Remote.co",
    focus: "Remote US product design roles",
    query: 'site:remote.co "product designer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Remote-first",
    board: "FlexJobs",
    focus: "Remote US product management roles",
    query: 'site:flexjobs.com/jobs "product manager" remote ("United States" OR USA OR US)',
  },
  {
    category: "SmartRecruiters",
    board: "SmartRecruiters",
    focus: "Remote US design engineer roles",
    query: 'site:careers.smartrecruiters.com "design engineer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Workable",
    board: "Workable",
    focus: "Remote US product design roles",
    query: 'site:apply.workable.com "product designer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Jobvite",
    board: "Jobvite",
    focus: "Remote US product manager roles",
    query: 'site:jobs.jobvite.com "product manager" remote ("United States" OR USA OR US)',
  },
  {
    category: "iCIMS",
    board: "iCIMS",
    focus: "Remote US solutions engineer roles",
    query: 'site:careers.icims.com "solutions engineer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Workday",
    board: "Workday",
    focus: "Remote US product design roles",
    query: 'site:myworkdayjobs.com "product designer" remote ("United States" OR USA OR US)',
  },
  {
    category: "Hacker News",
    board: "HNHIRING",
    focus: "Remote US startup product design roles",
    query: 'site:hnhiring.com "product designer" remote ("United States" OR USA OR US)',
  },
];
