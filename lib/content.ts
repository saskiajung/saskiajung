export type Slot = {
  src?: string;
  alt?: string;
  pending: string;
};

export type Block = {
  label: string;
  items: string[];
};

export type WorkItem = {
  caption?: string;
  visual: Slot;
};

export type Practice = {
  slug: string;
  title: string;
  lead: string;
  color: string;
  blocks: Block[];
  work: WorkItem[];
};

export const showPending = true;

const deck = "/images/deck";
const one = "/images/one-magazine/snapinsta-to";

export const practices: Practice[] = [
  {
    slug: "creative-direction",
    title: "Creative Direction & Styling",
    color: "#22403C",
    lead: "Turning brand DNA into distinct visual stories, from moodboards and talent selection through to full on-set execution.",
    blocks: [
      {
        label: "Focus",
        items: [
          "Campaign concepts",
          "Lookbook direction",
          "E-commerce elevating",
          "Wardrobe sourcing",
        ],
      },
    ],
    work: [
      {
        visual: {
          pending: "Campaign frame",
          src: `${deck}/creative-direction-lace-up`,
          alt: "A model in a white shirt and laced black skirt against dark panelling.",
        },
      },
      {
        visual: {
          pending: "Campaign frame",
          src: `${deck}/creative-direction-court`,
          alt: "Two models in trench coats carrying rackets on a tennis court, in black and white.",
        },
      },
      {
        visual: {
          pending: "Campaign frame",
          src: `${deck}/creative-direction-red-dress`,
          alt: "A model in a red midi dress beside a pale concrete column.",
        },
      },
    ],
  },
  {
    slug: "on-camera",
    title: "On Camera & Brand Partnerships",
    color: "#2B3A67",
    lead: "Bridging high-fashion expertise with engaging storytelling: hosting events, curating brand-favourite picks, and guiding audiences through upcoming trends.",
    blocks: [
      {
        label: "Services",
        items: [
          "Event hosting",
          "On-camera trend commentary",
          "Live shopping and content creation",
          "Editorial and commercial styling",
        ],
      },
    ],
    work: [
      {
        caption: "Sleek and Cybex",
        visual: {
          pending: "Cover",
          src: `${deck}/on-camera-sleek-cybex`,
          alt: "A Sleek magazine cover featuring Saskia Jung in denim and a fringed skirt.",
        },
      },
      {
        caption: "Hosting event with Sellpy",
        visual: {
          pending: "Event still",
          src: `${deck}/on-camera-sellpy`,
          alt: "Saskia Jung interviewing a guest with a microphone at a Sellpy event.",
        },
      },
      {
        caption: "Hosting event with Sezane",
        visual: {
          pending: "Event still",
          src: `${deck}/on-camera-sezane`,
          alt: "A group of guests photographed together at a Sezane hosting event.",
        },
      },
      {
        caption: "Mother's Day campaign with Edited",
        visual: {
          pending: "Campaign still",
          src: `${deck}/on-camera-edited`,
          alt: "A woman and a small child in matching denim against a pale blue wall.",
        },
      },
    ],
  },
  {
    slug: "workshops",
    title: "Workshops & Mentoring",
    color: "#1F4E5F",
    lead: "Workshops and mentoring for brands, teams and emerging stylists, built around wardrobe, trend direction and set work.",
    blocks: [
      {
        label: "Formats",
        items: [
          "Interactive brand workshops",
          "Corporate styling masterclasses",
          "Executive wardrobe coaching",
          "One-to-one mentoring for emerging stylists",
        ],
      },
      {
        label: "Core topics",
        items: [
          "Personal branding through wardrobe",
          "Seasonal trend direction",
          "Professional sourcing and set work mastery",
        ],
      },
    ],
    work: [
      {
        caption: "Styling masterclass",
        visual: {
          pending: "Masterclass",
          src: `${one}-779816268-18610352413050604-8075764012483892659-n`,
          alt: "A model in a black shearling coat with long hair falling across the frame.",
        },
      },
      {
        caption: "Styled for KaDeWe",
        visual: {
          pending: "Video still",
          src: `${deck}/workshops-kadewe`,
          alt: "Saskia Jung presenting beside a rail of garments in a KaDeWe fitting space.",
        },
      },
      {
        caption: "Hosting event",
        visual: {
          pending: "Event still",
          src: `${deck}/workshops-hosting`,
          alt: "A styling rail and merchandised wall inside a Sellpy store.",
        },
      },
      {
        caption: "Styling on set",
        visual: {
          pending: "On set",
          src: `${deck}/workshops-on-set`,
          alt: "Two stylists carrying garment bags along a street on a shoot day.",
        },
      },
    ],
  },
];

export const about = {
  title: "About & Vision",
  color: "#5B2D4A",
  headline: "Modern elegance meets strategic vision",
  bio: [
    "Based in Berlin, I work at the intersection of creative direction, high-end styling, and brand storytelling.",
    "My approach combines editorial sophistication with a deep understanding of brand identity, creating visual narratives that feel effortless, contemporary, and distinct.",
  ],
  meta: ["Fashion Director", "Berlin and worldwide", "Since 2021"],
  portrait: {
    pending: "Portrait",
    src: `${deck}/portrait-saskia`,
    alt: "Saskia Jung in a black blazer and sunglasses, smiling.",
  } as Slot,
  clientsLabel: "Selected clients",
  clients: [
    "GANT",
    "KaDeWe",
    "Sezane",
    "Sellpy",
    "Edited",
    "Cybex",
    "Lala Berlin",
    "Sleek Magazine",
    "10 Magazine",
    "One Magazine",
  ],
};
