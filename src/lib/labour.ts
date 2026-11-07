export type RuleStatus = "In force" | "Draft" | "Not traced" | "Central sphere";

export type LabourCode = {
  name: string;
  year: string;
  covers: string;
  replaces: string;
  centralRule: string;
};

export type StateRule = {
  state: string;
  wages: RuleStatus;
  ir: RuleStatus;
  social: RuleStatus;
  osh: RuleStatus;
  note: string;
};

export const codesInForce = "21 November 2025";
export const centralRulesDate = "8 May 2026";
export const registerReviewed = "7 November 2026";

export const labourCodes: LabourCode[] = [
  {
    name: "Code on Wages",
    year: "2019",
    covers: "Minimum wages, payment of wages, deductions, bonus and equal remuneration.",
    replaces: "Four wage Acts, including Minimum Wages, Payment of Wages and Payment of Bonus.",
    centralRule: "Code on Wages (Central) Rules, 2026 — G.S.R. 343(E), 8 May 2026.",
  },
  {
    name: "Industrial Relations Code",
    year: "2020",
    covers: "Trade unions, standing orders, strikes, lay-off, retrenchment, closure and disputes.",
    replaces: "Trade Unions Act, Industrial Employment (Standing Orders) Act and Industrial Disputes Act.",
    centralRule: "Industrial Relations (Central) Rules, 2026 — G.S.R. 342(E), 8 May 2026. Model Standing Orders notified with the central rules.",
  },
  {
    name: "Code on Social Security",
    year: "2020",
    covers: "EPF, ESI, gratuity, maternity benefit, employees’ compensation, and gig and platform workers.",
    replaces: "Nine social-security Acts, including EPF, ESI, gratuity and maternity benefit.",
    centralRule: "Social Security (Central) Rules, 2026 — G.S.R. 344(E), 8 May 2026.",
  },
  {
    name: "Occupational Safety, Health and Working Conditions Code",
    year: "2020",
    covers: "Registration, hours, leave, safety, welfare, contract labour and migrant workers.",
    replaces: "Thirteen laws on factories, contract labour, migrant workers and related working conditions.",
    centralRule: "OSH (Central) Rules, 2026, notified with the other central rules on 8 May 2026.",
  },
];

/**
 * Status is what published gazettes and trackers showed when this register
 * was last reviewed. Replace a cell when a final state notification is out.
 */
export const stateRules: StateRule[] = [
  {
    state: "Jharkhand",
    wages: "Draft",
    ir: "Not traced",
    social: "Not traced",
    osh: "Not traced",
    note: "Draft Code on Wages (Jharkhand) Rules gazetted 14 July 2021. No final rules under the four Codes traced as of 30 September 2026. This is the row to edit first.",
  },
  {
    state: "Bihar",
    wages: "In force",
    ir: "In force",
    social: "In force",
    osh: "In force",
    note: "Final rules under all four Codes notified around 30 June–1 July 2026, effective 1 July 2026. Relevant for units across the border.",
  },
  {
    state: "Central sphere",
    wages: "Central sphere",
    ir: "Central sphere",
    social: "Central sphere",
    osh: "Central sphere",
    note: "Central rules of 8 May 2026 bind establishments whose appropriate government is the Centre — railways, mines, oilfields, major ports, and other central establishments. Most private factories are not in this row.",
  },
];

export const hrFeelFirst = [
  {
    title: "One definition of wages",
    text: "Basic and dearness allowance are generally expected to be at least half of remuneration. Allowances that used to sit outside ‘wages’ need a fresh test before the next settlement.",
  },
  {
    title: "Appointment letters",
    text: "The Codes expect a written appointment. A joining WhatsApp is not the record an inspector will accept.",
  },
  {
    title: "Fixed-term gratuity",
    text: "Fixed-term employees can qualify for gratuity after one year. Check the section and the contract before you accrue it.",
  },
  {
    title: "Wages on the way out",
    text: "Full and final pay has a short statutory window. Payroll and the relieving letter have to move together.",
  },
  {
    title: "Appropriate government",
    text: "Central rules and state rules are different instruments. Name the government before you download a form.",
  },
  {
    title: "Old rules, where they still fit",
    text: "Where a state has not notified final rules, the older state rules continue only so far as they do not conflict with the Code.",
  },
];
