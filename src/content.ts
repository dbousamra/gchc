// Site content for GC HeartCare.
// Single source of truth for copy used across sections.

/** Resolve a path in /public against the Vite base (works for any `base`). */
export const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

export const IMAGES = {
  logo: asset("logo.png"),
  cardiologist: asset("img-cardiologist.jpg"),
  heart: asset("img-heart.jpg"),
  clinic: asset("img-clinic.jpg"),
};

// Google Maps embed (keyless `output=embed` form) for the practice address.
export const MAP_EMBED =
  "https://www.google.com/maps?q=Gold+Coast+Private+Hospital,+14+Hill+Street,+Southport+QLD+4215&output=embed";

export const PRACTICE = {
  name: "GC HeartCare",
  tagline: "Care when you need it most",
  phone: "(07) 5613 2363",
  phoneHref: "tel:+61756132363",
  email: "reception@gcheartcare.com",
  emailHref: "mailto:reception@gcheartcare.com",
  hours: "9:00am – 4:00pm, Monday to Friday",
  address: {
    line1: "Suite 12, Gold Coast Private Hospital",
    line2: "14 Hill Street, Southport QLD 4215",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Gold+Coast+Private+Hospital+14+Hill+Street+Southport+QLD+4215",
  },
};

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Care", href: "#services" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Our Team", href: "#team" },
  { label: "For Patients", href: "#patients" },
  { label: "Referrers", href: "#referrers" },
  { label: "Contact", href: "#contact" },
];

export type IconName =
  | "echo"
  | "stress"
  | "ecg"
  | "device"
  | "monitor"
  | "angio"
  | "cardioversion"
  | "consult";

export type Service = {
  icon: IconName;
  title: string;
  body: string;
};

export type ServiceGroup = {
  key: string;
  title: string;
  blurb: string;
  items: Service[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    key: "diagnose",
    title: "Diagnose & investigate",
    blurb: "Non-invasive imaging and testing to see clearly what your heart is doing.",
    items: [
      {
        icon: "consult",
        title: "Clinical consultation",
        body: "Specialist assessment, cardiovascular risk evaluation and an evidence-based plan tailored to you.",
      },
      {
        icon: "echo",
        title: "Echocardiography",
        body: "Transthoracic, transoesophageal and stress echo: detailed ultrasound imaging of the heart's structure and function.",
      },
      {
        icon: "stress",
        title: "Stress testing",
        body: "Exercise stress tests and stress echocardiography to assess how your heart performs under exertion.",
      },
      {
        icon: "ecg",
        title: "ECG & Holter monitoring",
        body: "Electrocardiograms and extended Holter recordings to capture and diagnose rhythm disturbances.",
      },
      {
        icon: "angio",
        title: "Diagnostic angiography",
        body: "Imaging of the coronary arteries to investigate chest pain, angina and coronary artery disease.",
      },
    ],
  },
  {
    key: "treat",
    title: "Treat & manage",
    blurb: "Procedures and ongoing specialist care to restore and protect your rhythm.",
    items: [
      {
        icon: "device",
        title: "Pacemakers & defibrillators",
        body: "Implantation, programming and ongoing testing of pacemakers, defibrillators and loop recorders.",
      },
      {
        icon: "cardioversion",
        title: "Cardioversion",
        body: "Carefully managed electrical treatment to restore a normal rhythm in atrial fibrillation and flutter.",
      },
      {
        icon: "monitor",
        title: "Heart failure & arrhythmia care",
        body: "Ongoing management of heart failure, cardiomyopathy, angina and complex rhythm disorders.",
      },
    ],
  },
];

// Flattened list (used by the hero marquee strip).
export const SERVICES: Service[] = SERVICE_GROUPS.flatMap((g) => g.items);

export type Doctor = {
  name: string;
  initials: string;
  avatar: string; // placeholder portrait — replace with a real headshot
  role: string;
  quals: string[];
  bio: string;
  focus: string[];
};

export const DOCTORS: Doctor[] = [
  {
    name: "Dr John Bou-Samra",
    initials: "JB",
    avatar: asset("avatars/bou-samra.jpg"),
    role: "Cardiologist & Physician",
    quals: ["MBBS", "FRACP", "FCSANZ", "FASE"],
    bio: "Dr Bou-Samra has provided high-quality specialist cardiology care to patients on the Gold Coast since 1994. He completed his medical degree at the University of Queensland and advanced cardiology training at The Prince Charles Hospital, Brisbane, and remains actively involved in the mentorship of medical students and future specialists.",
    focus: [
      "Advanced heart failure",
      "Cardiomyopathy",
      "Pacing & defibrillators",
      "Echocardiography",
      "General cardiology",
    ],
  },
  {
    name: "Professor Kuljit Singh",
    initials: "KS",
    avatar: asset("avatars/kuljit-singh.jpg"),
    role: "Interventional Cardiologist",
    quals: ["MBBS", "PhD", "FRACP"],
    bio: "An academic coronary and structural interventional cardiologist, Professor Singh trained in Adelaide and as a fellow at the Ottawa Heart Institute in Canada. He established the TAVI program at Gold Coast University Hospital and holds Associate Professor appointments at Griffith and Bond Universities, with more than fifty publications in high-impact journals.",
    focus: [
      "TAVI & structural heart",
      "Complex coronary intervention",
      "Coronary physiology & imaging",
      "Rotational atherectomy",
    ],
  },
  {
    name: "Dr Tony Vo",
    initials: "TV",
    avatar: asset("avatars/tony-vo.jpg"),
    role: "Interventional Cardiologist",
    quals: ["MBBS", "FRACP"],
    bio: "Dr Vo is a specialist and interventional cardiologist providing inpatient and outpatient care at Gold Coast University Hospital and Gold Coast Private Hospital. He completed his medical degree at the University of Melbourne and his interventional fellowship on the Gold Coast, performing both coronary and structural procedures.",
    focus: [
      "Coronary intervention",
      "Structural heart procedures",
      "PFO & ASD closure",
      "General cardiology",
    ],
  },
  {
    name: "Dr Naim Mridha",
    initials: "NM",
    avatar: asset("avatars/naim-mridha.jpg"),
    role: "Interventional Cardiologist",
    quals: ["MBBS", "FRACP"],
    bio: "A lifelong Gold Coast local, Dr Mridha trained across The Royal Brisbane & Women's Hospital and Gold Coast University Hospital before completing a two-year interventional fellowship at The Prince Charles Hospital. He is a Senior Lecturer at Griffith University and is passionate about giving back to the community that shaped him.",
    focus: [
      "Coronary angiography",
      "Coronary intervention",
      "Intracoronary imaging (IVUS/OCT)",
      "Coronary physiology",
    ],
  },
];

export type TeamMember = {
  name: string;
  initials: string;
  avatar: string; // placeholder portrait — replace with a real headshot
  role: string;
  bio: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Christen Courtland",
    initials: "CC",
    avatar: asset("avatars/christen-courtland.jpg"),
    role: "Accredited Cardiac Sonographer",
    bio: "BExSc, DMU (Cardiac) and an ASAR member since 2001. With nearly two decades of cardiac ultrasound experience across private and hospital settings, Christen actively mentors echocardiography students and healthcare professionals.",
  },
  {
    name: "Kirsty Collins",
    initials: "KC",
    avatar: asset("avatars/kirsty-collins.jpg"),
    role: "Accredited Cardiac Sonographer",
    bio: "Grad Dip HlthSc, DMU (Cardiac) and an ASAR member since 2003. Kirsty's expertise spans transthoracic, stress and dobutamine stress echocardiography, along with contrast and strain imaging.",
  },
];

export const BRING_LIST = [
  "A referral from your doctor",
  "A list of your current medications",
  "Any relevant previous tests or results",
  "Your Medicare or DVA card",
  "Your private health insurance card",
];

export const STATS = [
  { n: "1994", t: "Caring for the Gold Coast" },
  { n: "4", t: "Specialist cardiologists" },
];
