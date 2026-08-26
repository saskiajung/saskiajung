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
      visual: { pending: "Rack and fitting" },
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
      visual: { pending: "Moodboard and references" },
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
      visual: { pending: "On set" },
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
      visual: { pending: "Studio and prep" },
    },
  ] as Service[],
};

export const about = {
  title: "About & On Camera",
  bio: [
    "Saskia Jung is a stylist and creative director working across editorial, campaign and brand projects.",
    "Her work moves between magazine editorial and commercial campaign, shaping a look from the first reference through casting, fitting and the final edit.",
  ],
  portrait: { pending: "Portrait" } as Slot,
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
      visual: { pending: "Video still" },
    },
    {
      title: "Brand partnership",
      note: "Campaign",
      visual: { pending: "Video still" },
    },
    {
      title: "Interview",
      note: "Feature",
      visual: { pending: "Video still" },
    },
  ] as OnCameraItem[],
};
