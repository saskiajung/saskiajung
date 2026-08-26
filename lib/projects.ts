export type ProjectImage = {
  src: string;
  alt: string;
};

export type Category = "styling" | "campaign";

export const categories: Record<Category, string> = {
  styling: "Styling & Creative Direction",
  campaign: "Commercial & Campaign",
};

export const categoriesOrder = [
  { key: "styling" as Category, label: categories.styling },
  { key: "campaign" as Category, label: categories.campaign },
];

export type Project = {
  slug: string;
  category: Category;
  title: string;
  year: string;
  credit: string;
  color: string;
  layout: "single" | "spread";
  story: ProjectImage[];
  home: number[];
  cover: number;
};

export type MenuItem = {
  label: string;
  href: string;
  children?: MenuItem[];
};

export const menu: MenuItem[] = [
  {
    label: "Selected Work",
    href: "/work",
    children: [
      { label: categoriesOrder[0].label, href: "/work?c=styling" },
      { label: categoriesOrder[1].label, href: "/work?c=campaign" },
    ],
  },
  { label: "Services & Consulting", href: "/services" },
  { label: "About & On Camera", href: "/about" },
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

const ten = "/images/10magazine/10magazine-de-nina-raasch";
const gant = "/images/gant/gant-special-zoo-nina-raasch";
const one = "/images/one-magazine/snapinsta-to";
const sleek = "/images/sleekmag/snapinsta-to";

export const projects: Project[] = [
  {
    slug: "10-magazine",
    category: "styling",
    title: "10 Magazine",
    year: "2025",
    credit: "10 Magazine Germany",
    color: "#22403C",
    layout: "single",
    home: [0],
    cover: 4,
    story: [
      {
        src: `${ten}-01`,
        alt: "A model in a white strapless top and floor-length black skirt against a panelled stone wall.",
      },
      {
        src: `${ten}-02`,
        alt: "A model in sunglasses and a studded dark top seated on a kerb, with white trainers.",
      },
      {
        src: `${ten}-03`,
        alt: "A model in a pale sleeveless top and long skirt crossing a marked street.",
      },
      {
        src: `${ten}-04`,
        alt: "A model in a dark patterned top and wide trousers standing on a pedestrian crossing.",
      },
      {
        src: `${ten}-05`,
        alt: "A model in an oversized olive coat and grey pinstripe trousers walking past a green door.",
      },
      {
        src: `${ten}-06`,
        alt: "A black and white contact sheet of frames showing hair caught in motion.",
      },
      {
        src: `${ten}-07`,
        alt: "A model in a white sleeveless top and long white skirt, arms folded, against a pale wall.",
      },
      {
        src: `${ten}-08`,
        alt: "A model in a black bra top holding a soft olive-grey shoulder bag.",
      },
      {
        src: `${ten}-09`,
        alt: "A model in a sheer top and dark trousers standing on a quiet street beside a lamp post.",
      },
      {
        src: `${ten}-10`,
        alt: "A model in long leather gloves and a studded belt, arms crossed, hair falling across the face.",
      },
      {
        src: `${ten}-11`,
        alt: "A model carrying a folded green garment over a layered coat and wide pinstripe trousers.",
      },
    ],
  },
  {
    slug: "gant-zoo",
    category: "campaign",
    title: "GANT Special ZOO",
    year: "2024",
    credit: "GANT",
    color: "#2B3A67",
    layout: "spread",
    home: [2, 3],
    cover: 9,
    story: [
      {
        src: `${gant}-01`,
        alt: "Two models in tan and grey double-breasted tailoring outside a pale building.",
      },
      {
        src: `${gant}-02`,
        alt: "Two models in grey and brown tailoring standing together in an open field.",
      },
      {
        src: `${gant}-03`,
        alt: "A model in a cream shearling-collared coat over a grey turtleneck, against a teal backdrop.",
      },
      {
        src: `${gant}-04`,
        alt: "A model in a grey-green suit and black high-top trainers reclining against a deep red ground.",
      },
      {
        src: `${gant}-05`,
        alt: "A model in a tan trench over a pale blue pinstripe shirt, one hand resting on the head.",
      },
      {
        src: `${gant}-06`,
        alt: "A model in a grey turtleneck and brown trousers leaning against a white wall.",
      },
      {
        src: `${gant}-07`,
        alt: "Two models standing on a wooden pallet, one in a white tee, one in brown tailoring.",
      },
      {
        src: `${gant}-08`,
        alt: "A model in a grey blazer holding a single stem, standing in a field.",
      },
      {
        src: `${gant}-09`,
        alt: "A model in a beige jacket and trousers beside a wall marked with a red streak.",
      },
      {
        src: `${gant}-10`,
        alt: "A model in a navy GANT 1949 sweatshirt and black beanie, shot close.",
      },
      {
        src: `${gant}-11`,
        alt: "A model in an olive jacket and brown trousers lying across asphalt, one arm outstretched.",
      },
      {
        src: `${gant}-12`,
        alt: "A model in a brown coat over a yellow collar, seated against a pale wall.",
      },
      {
        src: `${gant}-13`,
        alt: "A model in an oversized grey wool jacket standing in an open field beneath a pale sky.",
      },
    ],
  },
  {
    slug: "one-magazine",
    category: "styling",
    title: "One Magazine",
    year: "2024",
    credit: "One Magazine",
    color: "#5B2D4A",
    layout: "single",
    home: [0],
    cover: 7,
    story: [
      {
        src: `${one}-779527761-18610352347050604-1955805883961148961-n`,
        alt: "A model in a tall black brimless hat and dark top against a red painted door.",
      },
      {
        src: `${one}-779624538-18610352464050604-6744657966143841321-n`,
        alt: "A close study of white pointed heels against weathered concrete.",
      },
      {
        src: `${one}-779669259-18610352425050604-379700904525683470-n`,
        alt: "A model photographed from behind in a denim skirt, long curled hair falling loose.",
      },
      {
        src: `${one}-779669337-18610352404050604-7811910933283995580-n`,
        alt: "A model in sunglasses and a black jacket over a nude bandeau, outside a shopfront.",
      },
      {
        src: `${one}-779728996-18610352389050604-5668036846249176139-n`,
        alt: "A model in a long fringed skirt and tall boots against a pale wall.",
      },
      {
        src: `${one}-779816268-18610352413050604-8075764012483892659-n`,
        alt: "A model in a black shearling coat with long hair falling across the frame.",
      },
      {
        src: `${one}-779865305-18610352371050604-2470997872958034122-n`,
        alt: "A model in a soft grey-blue top seated, long hair over the shoulders.",
      },
      {
        src: `${one}-780140090-18610352449050604-2255341432987877733-n`,
        alt: "A model in a sheer lace top and dark pleated skirt against pale panelled doors.",
      },
    ],
  },
  {
    slug: "sleek-magazine",
    category: "styling",
    title: "Sleek Magazine",
    year: "2025",
    credit: "Sleek Magazine",
    color: "#1F4E5F",
    layout: "spread",
    home: [3, 4],
    cover: 1,
    story: [
      {
        src: `${sleek}-645988112-17887872621329248-1546588180640997126-n`,
        alt: "A model in a tan jacket and grey skirt seated on a folding chair on a pavement.",
      },
      {
        src: `${sleek}-649052056-17890853085310471-4177207046912289030-n`,
        alt: "A model in a bright blue dress stepping down a metal staircase.",
      },
      {
        src: `${sleek}-656023737-18106984879863868-8834461460961565959-n`,
        alt: "A model in a pale ribbed knit dress standing against a white tiled wall.",
      },
      {
        src: `${sleek}-656064828-18205741060332931-5516023910985996561-n`,
        alt: "A close-cropped black and white portrait of a model with a sharp bob, shot through sheer fabric.",
      },
      {
        src: `${sleek}-657761369-18198249286350937-5450906341374023684-n`,
        alt: "A model in an electric blue satin jacket leaning forward, hair swept across the frame.",
      },
    ],
  },
];
