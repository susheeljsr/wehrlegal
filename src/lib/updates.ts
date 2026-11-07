export type UpdateCategory = "Labour codes" | "Payroll" | "Manpower" | "Practice";

export type HrUpdate = {
  id: string;
  date: string;
  category: UpdateCategory;
  title: string;
  summary: string;
  points: string[];
};

/** Newest first. Add the next note at the top of this list. */
export const hrUpdates: HrUpdate[] = [
  {
    id: "jharkhand-rules-draft",
    date: "2026-09-30",
    category: "Labour codes",
    title: "Jharkhand: final labour-code rules still not traced",
    summary:
      "As of published trackers reviewed to 30 September 2026, Jharkhand had a draft under the Code on Wages and no final rules under the four Codes.",
    points: [
      "Draft Code on Wages (Jharkhand) Rules were gazetted on 14 July 2021.",
      "A draft does not become the rulebook. Final notification is what HR can apply.",
      "Until then, the Codes apply, and older state rules continue where they do not conflict.",
      "The working register, with a row you can update, is on the Labour codes page.",
    ],
  },
  {
    id: "epf-ceiling-watch",
    date: "2026-09-17",
    category: "Payroll",
    title: "Check the EPF wage ceiling before the next payroll change",
    summary:
      "HR trackers reported an EPF wage ceiling of ₹25,000 from 17 September 2026, after revised EPF, pension and EDLI schemes were referenced from late June 2026.",
    points: [
      "Do not edit the payroll master from a news note. Match the EPFO circular for that month.",
      "The ceiling is not the same thing as ‘wages’ under the Code on Wages. Run both tests.",
      "WeHR Legal will replace this watch item with the circular number once you want it pinned here.",
    ],
  },
  {
    id: "central-rules",
    date: "2026-05-08",
    category: "Labour codes",
    title: "Central rules under all four Labour Codes notified",
    summary:
      "The Central Government published final rules on 8 May 2026. They apply where the Central Government is the appropriate government.",
    points: [
      "Code on Wages (Central) Rules, 2026 — G.S.R. 343(E).",
      "Industrial Relations (Central) Rules, 2026 — G.S.R. 342(E).",
      "Social Security (Central) Rules, 2026 — G.S.R. 344(E).",
      "Occupational Safety, Health and Working Conditions (Central) Rules, 2026, with the Model Standing Orders.",
      "A private factory in Jharkhand is usually in the state sphere. Do not paste central rules onto a state establishment without checking who the appropriate government is.",
    ],
  },
  {
    id: "manpower-file",
    date: "2026-01-19",
    category: "Manpower",
    title: "Temporary manpower still needs a principal-employer file",
    summary:
      "Deputing staff — for a shutdown, a season or a GeM order — does not pause statutory control. The Codes did not remove the principal employer’s duties.",
    points: [
      "Keep the contractor licence, wage register and attendance where an inspector can read them.",
      "Allot payroll and the licence check to different people. A sourcer should not close compliance.",
      "WeHR Legal supplies temporary manpower and the HR file behind it.",
    ],
  },
  {
    id: "codes-in-force",
    date: "2025-11-21",
    category: "Labour codes",
    title: "The four Labour Codes came into force",
    summary:
      "On 21 November 2025 the Codes replaced 29 central labour Acts. They apply in every state. A state cannot opt out of the Code.",
    points: [
      "Code on Wages, 2019.",
      "Industrial Relations Code, 2020.",
      "Code on Social Security, 2020.",
      "Occupational Safety, Health and Working Conditions Code, 2020.",
      "What HR feels first: one definition of wages, appointment letters, and gratuity for fixed-term employees after one year. Confirm the section before you change a settlement.",
    ],
  },
];

export function formatUpdateDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}