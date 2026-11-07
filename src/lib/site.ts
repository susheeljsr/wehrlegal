export const company = {
  name: "WeHR Legal",
  legal: "WE HR LEGAL PRIVATE LIMITED",
  mark: "विचार",
  city: "Jamshedpur",
  email: "info@wehrlegal.com",
  whatsapp: "https://wa.me/917209456587",
  linkedin: "https://www.linkedin.com/company/wehrlegal",
  facebook: "https://www.facebook.com/WeHRLegal",
  site: "https://wehrlegal.com",
};

export const keywords =
  "HR outsourcing, Consultancy, HR management, GEM Manpower Supplier, Company's HR management, Shadow HR, Jamshedpur Manpower Supplier, Jamshedpur GEM Manpower Supplier, temporary manpower provider, hiring consultant, recruitment, manpower sourcing, fractional HR, fractional CHRO, labour codes, Jharkhand labour rules, GeM manpower, government manpower, payroll compliance, industrial relations, POSH, DPIIT startup, MSME";

export const headerNav = [
  { to: "/services", label: "Services" },
  { to: "/shadow-hr", label: "Shadow HR" },
  { to: "/government", label: "Government" },
  { to: "/labour-codes", label: "Labour codes" },
  { to: "/updates", label: "Updates" },
  { to: "/vision", label: "Vision" },
  { to: "/about", label: "About" },
] as const;

export const nav = [
  { to: "/why-work-with-us", label: "Why us" },
  ...headerNav,
  { to: "/contact", label: "Contact" },
] as const;

export const credentials = [
  "DPIIT recognised startup",
  "MSME · Udyam registered",
  "GST registered",
  "GeM manpower supplier",
  "Jamshedpur base",
];

export const services = [
  {
    title: "Temporary manpower provider",
    text: "Deputed staff for a season, a shutdown, a project or a sanctioned post — with a joining file the principal employer can keep.",
  },
  {
    title: "Hiring consultant and recruitment",
    text: "Scorecards, sourcing and offers. A hiring consultant stays until joining. Recruitment covers one role or a batch.",
  },
  {
    title: "Manpower sourcing",
    text: "A living pipeline of skilled, semi-skilled and professional people for companies and government buyers.",
  },
  {
    title: "Fractional HR and Fractional CHRO",
    text: "The operating HR seat, or the chief people seat, for a set number of days — not a full-time hire.",
  },
  {
    title: "Shadow HR",
    text: "A named subject expert sits behind your business as the people function — without a full-time hire.",
  },
  {
    title: "Payroll, compliance and labour codes",
    text: "Wages, PF, ESI and registers, read against the Labour Codes and the central or state rules that actually apply.",
  },
];

export const serviceGroups = [
  {
    id: "manpower",
    kicker: "Supply",
    title: "Temporary manpower, sourcing and recruitment",
    intro:
      "WeHR Legal is a temporary manpower provider and a Jamshedpur manpower supplier. Hiring is a consultancy. Supply is a deployment. They are not the same desk.",
    items: [
      {
        title: "Temporary manpower provider",
        points: [
          "Staff for a season, shutdown, project or vacancy",
          "Screening, offer and a joining file",
          "Suitable for plants, offices and GeM orders",
        ],
      },
      {
        title: "Manpower sourcing",
        points: [
          "Ongoing pipeline, not a one-time vendor list",
          "Skilled, semi-skilled and professional roles",
          "Sourcing separated from the compliance check",
        ],
      },
      {
        title: "Hiring consultant",
        points: [
          "Role design and a written scorecard",
          "Interviews run by someone who has hired that seat",
          "Offer, joining and the first 30 days",
        ],
      },
      {
        title: "Recruitment",
        points: [
          "Single replacement or a batch",
          "Manufacturing, services and public units",
          "Drawn from the national HR and talent pool",
        ],
      },
      {
        title: "GeM manpower supplier",
        points: [
          "Contractual manpower for government and PSUs",
          "Documents a buyer can open on GeM",
          "A nodal officer, not a shared inbox",
        ],
      },
    ],
  },
  {
    id: "fractional",
    kicker: "Leadership",
    title: "Fractional HR and Fractional CHRO",
    intro:
      "Buy the seat for the days you need. Fractional HR runs the function. A Fractional CHRO sits with the promoter on structure, wages, IR and the people calls that should not wait for next year’s hire.",
    items: [
      {
        title: "Fractional HR",
        points: [
          "Policies, letters, PMS and employee cases",
          "Cover when you have no HR manager",
          "Senior cover beside the HR executive you already have",
        ],
      },
      {
        title: "Fractional CHRO",
        points: [
          "Organisation design and wage strategy",
          "IR posture and leadership hiring",
          "A fixed number of days with the promoter",
        ],
      },
      {
        title: "Shadow HR",
        points: [
          "The whole people desk, task by task",
          "Each task allotted only to a subject expert",
          "One business manager remains accountable",
        ],
      },
    ],
  },
  {
    id: "operations",
    kicker: "Company HR management",
    title: "HR outsourcing, payroll and compliance",
    intro:
      "Consultancy here is the work itself: the structure, the register, the letter. Not a slide that somebody else must implement.",
    items: [
      {
        title: "HR outsourcing",
        points: [
          "People operations on a monthly retainer",
          "Lifecycle from offer to exit",
          "Manager coaching without a full department",
        ],
      },
      {
        title: "Payroll and statutory compliance",
        points: [
          "Wage structure and payslips",
          "PF, ESI and professional tax",
          "Registers an inspector can read",
        ],
      },
      {
        title: "Company HR management",
        points: [
          "Handbooks, SOPs and letters",
          "Attendance and leave logic",
          "Performance rhythms managers actually use",
        ],
      },
      {
        title: "Industrial relations",
        points: [
          "Contractor and principal-employer oversight",
          "Grievance handling and shop-floor dialogue",
          "Union management where a union is present",
        ],
      },
      {
        title: "Legal, contracts and POSH",
        points: [
          "Employment contracts and vendor agreements",
          "Policy drafting and legal notices",
          "Internal Committee support and training",
        ],
      },
    ],
  },
] as const;

export const consultancyServices = [
  ["Salary restructuring", "Review and rationalisation of salary structures."],
  ["HR policies and manuals", "Drafting and implementation of HR policies, HR manuals and SOPs."],
  ["Performance management", "Design and implementation of a performance management system."],
  ["Industrial relations", "Union management, collective bargaining and industrial dispute management."],
  ["Labour law compliance", "Compliance reviews, HR audits and risk identification under the labour codes."],
  ["Disciplinary procedures", "Charge sheets, domestic enquiries and disciplinary proceedings."],
  ["Wage agreements", "Preparation, negotiation and implementation of wage settlements."],
  ["HR systems", "Organisation structures, job descriptions and HR process improvement."],
  ["HR advisory", "Mentoring and guidance to HR heads and management teams."],
] as const;

export const seniorConsultant = {
  name: "Mukund Shrikant Katwe",
  firm: "M/s Katwe Facilitators",
  years: "39 years",
  phone: "+91 88888 37140",
  phoneHref: "tel:+918888837140",
  email: "hrxprt09@gmail.com",
  summary:
    "Senior HR and industrial-relations consultant on the WeHR bench. Plant and corporate experience, in unionised and non-unionised organisations, across manufacturing, services and other industries.",
};

export const vision = {
  vision:
    "Every organisation in the country — a Jamshedpur plant, a growing MSME, a government buyer — should be able to use senior HR, IR and legal judgement without carrying every specialist on its own payroll.",
  mission:
    "Allot recruitment, temporary manpower, payroll, compliance and people leadership only to a subject expert, through one business manager, and leave the client with a file they can defend.",
  values: [
    {
      title: "विचार",
      text: "Thought before process. A letter, a wage structure or a deployment starts with the decision, not with a template.",
    },
    {
      title: "The right expert",
      text: "A recruiter does not draft a charge-sheet. A payroll lead does not run a domestic enquiry. The subject decides who works.",
    },
    {
      title: "Confidential",
      text: "Assignments stay inside the brief. Employee cases and wage talks are not corridor conversation.",
    },
    {
      title: "Practical",
      text: "The output is something a plant can use on Monday: a register, a settlement, a scorecard, a joining file.",
    },
    {
      title: "One owner",
      text: "The business manager stays accountable. Clients do not manage a marketplace of freelancers.",
    },
    {
      title: "Law first",
      text: "Advice should survive an inspector, an auditor and, if it comes to it, a court. Speed is not a reason to guess the Code.",
    },
  ],
};

export const pool = [
  {
    title: "Practising HR managers",
    text: "People who still run hiring, payroll and employee relations — assigned only to work that matches their craft.",
  },
  {
    title: "Retired specialists",
    text: "HR professionals who built functions inside large companies, now consulting through WeHR Legal.",
  },
  {
    title: "IR and legal counsel",
    text: "Industrial relations and labour-law practitioners for disputes, contracts and statutory interpretation.",
  },
  {
    title: "A business manager",
    text: "One dedicated expert business manager owns your account. Tasks are never thrown to a generalist.",
  },
];

export const outcomes = [
  {
    title: "No domain hire for every task",
    text: "You do not recruit a payroll head, a POSH trainer and an IR officer separately. Each piece of work is allotted to the subject expert.",
  },
  {
    title: "Company HR management, without the department",
    text: "Policies, letters, attendance logic and manager coaching stay consistent even when headcount is small.",
  },
  {
    title: "Compliance you can show",
    text: "Registers, wage structure and statutory deposits are prepared so a principal employer or auditor can read them.",
  },
  {
    title: "A single point of contact",
    text: "Your business manager translates the brief. Specialists do the work. You are not managing a marketplace of freelancers.",
  },
];
