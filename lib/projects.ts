export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  credit: string;
  color: string;
  layout: "single" | "spread";
  images: ProjectImage[];
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

export const hero = {
  src: "/images/gant/gant-special-zoo-nina-raasch-13",
  alt: "A model in an oversized grey wool jacket standing in an open field beneath a pale sky, shot for GANT.",
  color: "#2B3A67",
};

export const projects: Project[] = [
  {
    slug: "10-magazine",
    title: "10 Magazine",
    year: "2025",
    credit: "10 Magazine Germany",
    color: "#22403C",
    layout: "single",
    images: [
      {
        src: "/images/10magazine/10magazine-de-nina-raasch-01",
        alt: "A model in a white bandeau top and floor-length black skirt against a pale stone wall.",
      },
    ],
  },
  {
    slug: "gant-zoo",
    title: "GANT Special ZOO",
    year: "2024",
    credit: "GANT",
    color: "#2B3A67",
    layout: "spread",
    images: [
      {
        src: "/images/gant/gant-special-zoo-nina-raasch-03",
        alt: "A model in a cream shearling-collared coat over a ribbed turtleneck, against a soft teal backdrop.",
      },
      {
        src: "/images/gant/gant-special-zoo-nina-raasch-04",
        alt: "A model in a green tailored suit and high-top sneakers reclining against a deep red wall.",
      },
    ],
  },
  {
    slug: "one-magazine",
    title: "One Magazine",
    year: "2024",
    credit: "One Magazine",
    color: "#5B2D4A",
    layout: "single",
    images: [
      {
        src: "/images/one-magazine/snapinsta-to-779527761-18610352347050604-1955805883961148961-n",
        alt: "A model in a tall black brimless hat and dark top against a red painted door.",
      },
    ],
  },
  {
    slug: "sleek-magazine",
    title: "Sleek Magazine",
    year: "2025",
    credit: "Sleek Magazine",
    color: "#1F4E5F",
    layout: "spread",
    images: [
      {
        src: "/images/sleekmag/snapinsta-to-656064828-18205741060332931-5516023910985996561-n",
        alt: "A close-cropped portrait of a model with a sharp black bob, shot through sheer layered fabric.",
      },
      {
        src: "/images/sleekmag/snapinsta-to-657761369-18198249286350937-5450906341374023684-n",
        alt: "A model in an electric blue satin jacket leaning forward, hair swept across the frame.",
      },
    ],
  },
];
