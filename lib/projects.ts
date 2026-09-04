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
  color: string;
  layout: "single" | "spread";
  story: ProjectImage[];
  home: number[];
  cover: number;
};

export type MenuItem = {
  label: string;
  href: string;
  preview: { src: string; alt: string };
};

export const menu: MenuItem[] = [
  {
    label: "Selected Work",
    href: "/work",
    preview: {
      src: "/images/schoen-magazine/2026-03-30-sch-n-print-finals-selects-01",
      alt: "An editorial frame from Schön Magazine styled by Saskia Jung.",
    },
  },
  {
    label: "Creative Direction & Styling",
    href: "/creative-direction",
    preview: {
      src: "/images/deck/creative-direction-lace-up",
      alt: "A model in a white shirt and laced black skirt against dark panelling.",
    },
  },
  {
    label: "About & Vision",
    href: "/about",
    preview: {
      src: "/images/deck/portrait-saskia",
      alt: "Saskia Jung in a black blazer and sunglasses.",
    },
  },
];

export const site = {
  first: "Saskia",
  last: "Jung",
  email: "contact@saskiajung.com",
  instagram: "https://instagram.com/saskiajung_",
  backgroundColor: "#F2F0EB",
};

export const hero = {
  src: "/images/gant/gant-special-zoo-nina-raasch-13",
  alt: "A model in an oversized grey wool jacket standing in an open field beneath a pale sky.",
  color: "#201E1F",
};

export const projects: Project[] = [
  {
    slug: "yoox",
    category: "campaign",
    title: "YOOX",
    color: "#201e1f",
    layout: "spread",
    home: [0, 1],
    cover: 1,
    story: [
      {
        src: "/images/yoox/yoox-leave-your-mark-photo-christopher-1-1",
        alt: "YOOX campaign styled by Saskia Jung.",
      },
      {
        src: "/images/yoox/yoox-leave-your-mark-photo-christopher-2",
        alt: "YOOX campaign styled by Saskia Jung.",
      },
      {
        src: "/images/yoox/yoox-leave-your-mark-photo-christopher-4",
        alt: "YOOX campaign styled by Saskia Jung.",
      },
      {
        src: "/images/yoox/yoox-leave-your-mark-photo-claudia-2",
        alt: "YOOX campaign styled by Saskia Jung.",
      },
      {
        src: "/images/yoox/yoox-leave-your-mark-photo-jamila-3",
        alt: "YOOX campaign styled by Saskia Jung.",
      },
      {
        src: "/images/yoox/yoox-leave-your-mark-photo-jamila2-1",
        alt: "YOOX campaign styled by Saskia Jung.",
      },
      {
        src: "/images/yoox/yoox-leave-your-mark-photo-leo1",
        alt: "YOOX campaign styled by Saskia Jung.",
      },
      {
        src: "/images/yoox/yoox-leave-your-mark-photo-leo3",
        alt: "YOOX campaign styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "adidas-training",
    category: "campaign",
    title: "adidas Training",
    color: "#5f55b3",
    layout: "spread",
    home: [0, 1],
    cover: 1,
    story: [
      {
        src: "/images/adidas-training/adidas-training-partnerpages-ss25-day01-massy-look-03-0208-bw",
        alt: "adidas Training campaign styled by Saskia Jung.",
      },
      {
        src: "/images/adidas-training/adidas-training-partnerpages-ss25-day01-sisters-look-03-0328",
        alt: "adidas Training campaign styled by Saskia Jung.",
      },
      {
        src: "/images/adidas-training/adidas-training-partnerpages-ss25-day02-massy-look-01-0094-col",
        alt: "adidas Training campaign styled by Saskia Jung.",
      },
      {
        src: "/images/adidas-training/adidas-training-partnerpages-ss25-day02-sisters-look-01-1113",
        alt: "adidas Training campaign styled by Saskia Jung.",
      },
      {
        src: "/images/adidas-training/adidas-training-partnerpages-ss25-day02-sohee-look-03-0029",
        alt: "adidas Training campaign styled by Saskia Jung.",
      },
      {
        src: "/images/adidas-training/adidas-training-partnerpages-ss25-launch-massy-alt-look-02-01",
        alt: "adidas Training campaign styled by Saskia Jung.",
      },
      {
        src: "/images/adidas-training/adidas-training-partnerpages-ss25-launch-sisters-alt-look-01-02",
        alt: "adidas Training campaign styled by Saskia Jung.",
      },
      {
        src: "/images/adidas-training/adidas-training-partnerpages-ss25-launch-sisters-alt-look-03-01-tif",
        alt: "adidas Training campaign styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "schoen-magazine",
    category: "styling",
    title: "Schön Magazine",
    color: "#201e1f",
    layout: "spread",
    home: [0, 1],
    cover: 1,
    story: [
      {
        src: "/images/schoen-magazine/2026-03-30-sch-n-print-finals-selects-01",
        alt: "Schön Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/schoen-magazine/2026-03-30-sch-n-print-finals-selects-08",
        alt: "Schön Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/schoen-magazine/2026-03-30-sch-n-print-finals-selects-16",
        alt: "Schön Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/schoen-magazine/2026-03-30-sch-n-print-finals-selects-18-1",
        alt: "Schön Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/schoen-magazine/2026-03-30-sch-n-print-finals-selects-20-1",
        alt: "Schön Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/schoen-magazine/2026-03-30-sch-n-print-outtakes-03-1",
        alt: "Schön Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/schoen-magazine/2026-03-30-sch-n-print-outtakes-05",
        alt: "Schön Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/schoen-magazine/2026-03-30-sch-n-print-outtakes-09",
        alt: "Schön Magazine editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "one-magazine",
    category: "styling",
    title: "One Magazine",
    color: "#5f55b3",
    layout: "spread",
    home: [0, 1],
    cover: 1,
    story: [
      {
        src: "/images/one-magazine/elenabreuer-one-magazine",
        alt: "One Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/one-magazine/elenabreuer-one-magazine1",
        alt: "One Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/one-magazine/elenabreuer-one-magazine11",
        alt: "One Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/one-magazine/elenabreuer-one-magazine13",
        alt: "One Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/one-magazine/elenabreuer-one-magazine3",
        alt: "One Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/one-magazine/elenabreuer-one-magazine4",
        alt: "One Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/one-magazine/elenabreuer-one-magazine6",
        alt: "One Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/one-magazine/elenabreuer-one-magazine8",
        alt: "One Magazine editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "le-mile",
    category: "styling",
    title: "Le Mile",
    color: "#201e1f",
    layout: "spread",
    home: [0, 1],
    cover: 1,
    story: [
      {
        src: "/images/le-mile/le-mile-analog-previews-4502-v2",
        alt: "Le Mile editorial styled by Saskia Jung.",
      },
      {
        src: "/images/le-mile/le-mile-analog-to-edit-4501-v3",
        alt: "Le Mile editorial styled by Saskia Jung.",
      },
      {
        src: "/images/le-mile/le-mile-x-lisa2600-to-edit-v2",
        alt: "Le Mile editorial styled by Saskia Jung.",
      },
      {
        src: "/images/le-mile/le-mile-x-lisa2784-to-edit-v2",
        alt: "Le Mile editorial styled by Saskia Jung.",
      },
      {
        src: "/images/le-mile/le-mile-x-lisa2829-to-edit-1-c-v1",
        alt: "Le Mile editorial styled by Saskia Jung.",
      },
      {
        src: "/images/le-mile/le-mile-x-lisa3045-to-edit-v2",
        alt: "Le Mile editorial styled by Saskia Jung.",
      },
      {
        src: "/images/le-mile/le-mile-x-lisa3336-to-edit-v2",
        alt: "Le Mile editorial styled by Saskia Jung.",
      },
      {
        src: "/images/le-mile/le-mile-x-lisa3660-to-edit-v2",
        alt: "Le Mile editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "comma",
    category: "campaign",
    title: "Comma",
    color: "#5f55b3",
    layout: "spread",
    home: [0, 1],
    cover: 1,
    story: [
      {
        src: "/images/comma/502-503-comma-womensday-look-3-0141",
        alt: "Comma campaign styled by Saskia Jung.",
      },
      {
        src: "/images/comma/503-comma-womensday-look-11-0062",
        alt: "Comma campaign styled by Saskia Jung.",
      },
      {
        src: "/images/comma/503-comma-womensday-look-12-0054",
        alt: "Comma campaign styled by Saskia Jung.",
      },
      {
        src: "/images/comma/503-comma-womensday-look-12-0103",
        alt: "Comma campaign styled by Saskia Jung.",
      },
      {
        src: "/images/comma/503-comma-womensday-look-12-0103-1",
        alt: "Comma campaign styled by Saskia Jung.",
      },
      {
        src: "/images/comma/503-comma-womensday-look-2-0309",
        alt: "Comma campaign styled by Saskia Jung.",
      },
      {
        src: "/images/comma/503-comma-womensday-look-5-0098",
        alt: "Comma campaign styled by Saskia Jung.",
      },
      {
        src: "/images/comma/503-comma-womensday-look-5-0368-1",
        alt: "Comma campaign styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "ic-berlin",
    category: "campaign",
    title: "ic! berlin",
    color: "#201e1f",
    layout: "spread",
    home: [0, 1],
    cover: 1,
    story: [
      {
        src: "/images/ic-berlin/ic-berlinxmercedes-benz-nina-raasch-02-srgb-2000px",
        alt: "ic! berlin campaign styled by Saskia Jung.",
      },
      {
        src: "/images/ic-berlin/ic-berlinxmercedes-benz-nina-raasch-04-srgb-2000px",
        alt: "ic! berlin campaign styled by Saskia Jung.",
      },
      {
        src: "/images/ic-berlin/ic-berlinxmercedes-benz-nina-raasch-07-srgb-2000px",
        alt: "ic! berlin campaign styled by Saskia Jung.",
      },
      {
        src: "/images/ic-berlin/ic-berlinxmercedes-benz-nina-raasch-16-srgb-2000px",
        alt: "ic! berlin campaign styled by Saskia Jung.",
      },
      {
        src: "/images/ic-berlin/ic-berlinxmercedes-benz-nina-raasch-20-srgb-2000px-outtake-social-use-only",
        alt: "ic! berlin campaign styled by Saskia Jung.",
      },
      {
        src: "/images/ic-berlin/ic-berlinxmercedes-benz-nina-raasch-21-srgb-2000px-outtake-social-use-only",
        alt: "ic! berlin campaign styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "matthias-ogger",
    category: "styling",
    title: "Matthias Ogger",
    color: "#5f55b3",
    layout: "spread",
    home: [0, 1],
    cover: 1,
    story: [
      {
        src: "/images/matthias-ogger/260326-matthias-leidinger-leni-01",
        alt: "Matthias Ogger editorial styled by Saskia Jung.",
      },
      {
        src: "/images/matthias-ogger/260326-matthias-leidinger-leni-03",
        alt: "Matthias Ogger editorial styled by Saskia Jung.",
      },
      {
        src: "/images/matthias-ogger/260326-matthias-leidinger-leni-04",
        alt: "Matthias Ogger editorial styled by Saskia Jung.",
      },
      {
        src: "/images/matthias-ogger/260326-matthias-leidinger-leni-05",
        alt: "Matthias Ogger editorial styled by Saskia Jung.",
      },
      {
        src: "/images/matthias-ogger/260326-matthias-leidinger-leni-08",
        alt: "Matthias Ogger editorial styled by Saskia Jung.",
      },
      {
        src: "/images/matthias-ogger/260326-matthias-leidinger-leni-15",
        alt: "Matthias Ogger editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "10-magazine",
    category: "styling",
    title: "10 Magazine",
    color: "#201e1f",
    layout: "spread",
    home: [0, 1],
    cover: 1,
    story: [
      {
        src: "/images/10-magazine/10magazine-de-nina-raasch-01",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/10-magazine/10magazine-de-nina-raasch-02",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/10-magazine/10magazine-de-nina-raasch-03",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/10-magazine/10magazine-de-nina-raasch-04",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/10-magazine/10magazine-de-nina-raasch-05",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/10-magazine/10magazine-de-nina-raasch-06",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/10-magazine/10magazine-de-nina-raasch-07",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/10-magazine/10magazine-de-nina-raasch-08",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/10-magazine/10magazine-de-nina-raasch-09",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/10-magazine/10magazine-de-nina-raasch-10",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/10-magazine/10magazine-de-nina-raasch-11",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/10-magazine/bildschirmfoto-2026-08-25-um-17-20-35",
        alt: "10 Magazine editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "trust-management",
    category: "styling",
    title: "Trust Management",
    color: "#5f55b3",
    layout: "spread",
    home: [0, 1],
    cover: 1,
    story: [
      {
        src: "/images/trust-management/bildschirmfoto-2026-08-25-um-17-51-34",
        alt: "Trust Management editorial styled by Saskia Jung.",
      },
      {
        src: "/images/trust-management/bildschirmfoto-2026-08-25-um-17-51-41",
        alt: "Trust Management editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "wrpd-magazine",
    category: "styling",
    title: "WRPD Magazine",
    color: "#201e1f",
    layout: "spread",
    home: [0, 1],
    cover: 1,
    story: [
      {
        src: "/images/wrpd-magazine/bildschirmfoto-2026-08-25-um-17-27-59",
        alt: "WRPD Magazine editorial styled by Saskia Jung.",
      },
      {
        src: "/images/wrpd-magazine/bildschirmfoto-2026-08-25-um-17-50-35",
        alt: "WRPD Magazine editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "adidas",
    category: "campaign",
    title: "adidas",
    color: "#5f55b3",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/adidas/bildschirmfoto-2026-08-25-um-18-05-17",
        alt: "adidas campaign styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "hugo-boss",
    category: "campaign",
    title: "Hugo Boss",
    color: "#201e1f",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/hugo-boss/bildschirmfoto-2026-08-25-um-17-57-31",
        alt: "Hugo Boss campaign styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "hugo-boss-zalando",
    category: "campaign",
    title: "Hugo Boss x Zalando",
    color: "#5f55b3",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/hugo-boss-zalando/bildschirmfoto-2026-09-03-um-16-35-05",
        alt: "Hugo Boss x Zalando campaign styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "ivy-oak",
    category: "campaign",
    title: "Ivy Oak",
    color: "#201e1f",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/ivy-oak/bildschirmfoto-2026-08-25-um-17-57-40",
        alt: "Ivy Oak campaign styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "pandora",
    category: "campaign",
    title: "Pandora",
    color: "#5f55b3",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/pandora/bildschirmfoto-2026-08-25-um-17-54-07",
        alt: "Pandora campaign styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "vagabond",
    category: "campaign",
    title: "Vagabond",
    color: "#201e1f",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/vagabond/bildschirmfoto-2026-08-25-um-17-57-53",
        alt: "Vagabond campaign styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "venczel",
    category: "campaign",
    title: "Venczel",
    color: "#5f55b3",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/venczel/bildschirmfoto-2026-08-25-um-18-07-27",
        alt: "Venczel campaign styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "cap74024",
    category: "styling",
    title: "CAP74024",
    color: "#201e1f",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/cap74024/bildschirmfoto-2026-08-25-um-17-48-30",
        alt: "CAP74024 editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "metal-magazine",
    category: "styling",
    title: "Metal Magazine",
    color: "#5f55b3",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/metal-magazine/bildschirmfoto-2026-08-25-um-17-44-25",
        alt: "Metal Magazine editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "nr-magazine",
    category: "styling",
    title: "NR Magazine",
    color: "#201e1f",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/nr-magazine/bildschirmfoto-2026-08-25-um-17-45-05",
        alt: "NR Magazine editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "puss-puss-magazine",
    category: "styling",
    title: "Puss Puss Magazine",
    color: "#5f55b3",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/puss-puss-magazine/bildschirmfoto-2026-08-25-um-17-46-56",
        alt: "Puss Puss Magazine editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "songzio",
    category: "styling",
    title: "Songzio",
    color: "#201e1f",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/songzio/bildschirmfoto-2026-08-25-um-17-56-51",
        alt: "Songzio editorial styled by Saskia Jung.",
      },
    ],
  },
  {
    slug: "zoo-magatine",
    category: "styling",
    title: "Zoo Magazine",
    color: "#5f55b3",
    layout: "single",
    home: [0],
    cover: 0,
    story: [
      {
        src: "/images/zoo-magatine/bildschirmfoto-2026-08-25-um-17-57-01",
        alt: "Zoo Magazine editorial styled by Saskia Jung.",
      },
    ],
  },
];
