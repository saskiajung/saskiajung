export type Slot = {
  src?: string;
  alt?: string;
  pending: string;
};

export type Service = {
  name: string;
  lead: string;
  includes: string[];
  visual: Slot;
};

export type OnCameraItem = {
  title: string;
  note: string;
  visual: Slot;
};

export const showPending = true;

const ten = "/images/10magazine/10magazine-de-nina-raasch";
const gant = "/images/gant/gant-special-zoo-nina-raasch";
const one = "/images/one-magazine/snapinsta-to";
const sleek = "/images/sleekmag/snapinsta-to";

export const services = {
  title: "Services & Consulting",
  lead: "Styling and creative direction for editorial, campaign and brand work, from first concept through to the final edit.",
  items: [
    {
      name: "Styling",
      lead: "Editorial, campaign and lookbook styling, from concept through to shoot day.",
      includes: [
        "Editorial and campaign styling",
        "Casting support and fittings",
        "Wardrobe sourcing, call-in and returns",
        "On-set direction",
      ],
      visual: {
        pending: "Rack and fitting",
        src: `${ten}-11`,
        alt: "A model carrying a folded green garment over a layered coat and wide pinstripe trousers.",
      },
    },
    {
      name: "Creative Direction",
      lead: "Concept, casting and art direction for shoots and brand campaigns.",
      includes: [
        "Concept development and moodboards",
        "Casting and team assembly",
        "Art direction on set",
        "Image selection and final edit",
      ],
      visual: {
        pending: "Moodboard and references",
        src: `${ten}-06`,
        alt: "A black and white contact sheet of frames showing hair caught in motion.",
      },
    },
    {
      name: "Project Work",
      lead: "End-to-end engagements scoped per project, from brief to delivery.",
      includes: [
        "Seasonal campaign build",
        "Lookbook and collection shoots",
        "Production and team coordination",
        "Delivery and asset handover",
      ],
      visual: {
        pending: "On set",
        src: `${gant}-07`,
        alt: "Two models standing on a wooden pallet, one in a white tee, one in brown tailoring.",
      },
    },
    {
      name: "Consulting & Advisory",
      lead: "Advisory for brands building or refining a visual identity.",
      includes: [
        "Brand and collection consulting",
        "Seasonal planning",
        "Team briefing and training",
        "Ongoing creative advisory",
      ],
      visual: {
        pending: "Studio and prep",
        src: `${gant}-06`,
        alt: "A model in a grey turtleneck and brown trousers leaning against a white wall.",
      },
    },
  ] as Service[],
};

export const about = {
  title: "About & On Camera",
  bio: [
    "Saskia Jung is a stylist and creative director working across editorial, campaign and brand projects.",
    "Her work moves between magazine editorial and commercial campaign, shaping a look from the first reference through casting, fitting and the final edit.",
  ],
  portrait: {
    pending: "Portrait",
    src: `${one}-779865305-18610352371050604-2470997872958034122-n`,
    alt: "A model in a soft grey-blue top seated, long hair over the shoulders.",
  } as Slot,
  clientsLabel: "Selected clients",
  clients: [
    "GANT",
    "Lala Berlin",
    "10 Magazine",
    "One Magazine",
    "Sleek Magazine",
  ],
  onCameraLabel: "On Camera",
  onCameraLead:
    "Hosting, presenting and brand partnerships in front of the camera.",
  onCamera: [
    {
      title: "Presenting",
      note: "Showreel",
      visual: {
        pending: "Video still",
        src: `${sleek}-656064828-18205741060332931-5516023910985996561-n`,
        alt: "A close-cropped black and white portrait of a model with a sharp bob.",
      },
    },
    {
      title: "Brand partnership",
      note: "Campaign",
      visual: {
        pending: "Video still",
        src: `${sleek}-657761369-18198249286350937-5450906341374023684-n`,
        alt: "A model in an electric blue satin jacket leaning forward, hair swept across the frame.",
      },
    },
    {
      title: "Interview",
      note: "Feature",
      visual: {
        pending: "Video still",
        src: `${one}-779669337-18610352404050604-7811910933283995580-n`,
        alt: "A model in sunglasses and a black jacket over a nude bandeau, outside a shopfront.",
      },
    },
  ] as OnCameraItem[],
};
