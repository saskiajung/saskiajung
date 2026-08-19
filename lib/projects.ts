export type Project = {
  slug: string;
  title: string;
  year: string;
  credit: string;
  color: string;
  images: string[];
};

export type MenuItem = {
  label: string;
  href: string;
};

export const menu: MenuItem[] = [
  { label: "Work", href: "/work" },
  { label: "Creative Direction", href: "/creative-direction" },
  { label: "Styling", href: "/styling" },
  { label: "About", href: "/about" },
];

export const site = {
  first: "Saskia",
  last: "Jung",
  email: "contact@saskiajung.com",
  instagram: "https://instagram.com/saskiajung_",
  backgroundColor: "#E9EAEC",
};

export const projects: Project[] = [
  {
    slug: "10-magazine",
    title: "10 Magazine",
    year: "2025",
    credit: "10 Magazine Germany",
    color: "#22403C",
    images: [
      "/images/10magazine/10magazine-de-nina-raasch-01",
      "/images/10magazine/10magazine-de-nina-raasch-08",
    ],
  },
  {
    slug: "gant-zoo",
    title: "GANT Special ZOO",
    year: "2024",
    credit: "GANT",
    color: "#2B3A67",
    images: [
      "/images/gant/gant-special-zoo-nina-raasch-04",
      "/images/gant/gant-special-zoo-nina-raasch-02",
    ],
  },
  {
    slug: "one-magazine",
    title: "One Magazine",
    year: "2024",
    credit: "One Magazine",
    color: "#5B2D4A",
    images: [
      "/images/one-magazine/snapinsta-to-779527761-18610352347050604-1955805883961148961-n",
      "/images/one-magazine/snapinsta-to-779816268-18610352413050604-8075764012483892659-n",
    ],
  },
  {
    slug: "sleek-magazine",
    title: "Sleek Magazine",
    year: "2025",
    credit: "Sleek Magazine",
    color: "#1F4E5F",
    images: [
      "/images/sleekmag/snapinsta-to-645988112-17887872621329248-1546588180640997126-n",
      "/images/sleekmag/snapinsta-to-656064828-18205741060332931-5516023910985996561-n",
    ],
  },
];
