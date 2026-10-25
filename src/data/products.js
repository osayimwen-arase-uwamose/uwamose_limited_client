export const productImages = {
  retail:
    "https://lh3.googleusercontent.com/aida/AEtjO1VOIt8r3wtSQJhU-2OsTF4e_DeZ_E9wcF9yBo_vm_HtKzPtJu9WXo5ZUQVqyEfL3Rcn-RSR5qGJQjBwekP57dButNJ4Tj8aUFAl72domMlvMsSWFzqbDdXbUVbz1wuJRMfIJV4rvL1nz29F1jH_YilCk6IbLsXhZENckFYyObK75W7plDp2miVsLxGWHNqfjHrVmeqBP98JKMYniFjwlU6NrTdaWj0E9pC-6kOLC5usFK_XjBCHEE5tXAvDdLPPdWlVGyr3U5YB974",
  bulk:
    "https://lh3.googleusercontent.com/aida/AEtjO1VZQr96hAAuWRBxXuabwa6sGINXxC9wdpUscOaf4d_tGoCWQLvPyI4yjR9rn6w6bHagd8wMouYzJ5yq4O79nvpI9W_uSZ6Wdl67cPwMetqESmNXC0E8mkq7VgsP1dYF6n5QoJ0CuBaRs8iG4kjOj08a19lsESwpsg9ZDihBJwNNv86eO2umqW2oOq8xuSC4ZugrcgutT6e5anuJbzAQB4wE0DL1ukmFbER4iKluCXM1jN-p1rNZZrPgRg7qZmSA0lZe42gRA1fZSQ0",
  hero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCVXmc5MRpQrTL0dLaFquCHzRkAcW4QELO6UPw3cWLrmwB0uSht3B-yHhJkvDu3setPq8KB5zpQfr0_mBUxB62nqB6kMHMtUDmT8RTItlkr_6ya5-nbcYBPfbp8deAaWZ1UxFzmiwYXgWD97IgAzdUGx6Ri9kdc73WiEqSD5-BC9ZjpV9cjGbIXRBEhFDalNI6yVRhhXWrv1iiFTSpeV6vVKE3zcq2NFSbwTP5xiG3bONpsd4r2gJEngSAACudTrIAp9qtl8QRJijCO",
};

export const products = [
  {
    id: "plantain-flour-retail",
    title: "Pure Plantain Flour (900g Pouch)",
    format: "Retail Pack",
    packageLabel: "900g Stand-Up Pouch",
    image: productImages.retail,
    imageAlt: "Retail pack of Pure Plantain Flour in a 900g pouch",
    description:
      "Hermetically sealed retail bag with foil moisture-barrier lining. Keeps fresh and lump-free for culinary preparation, fufu/swallow, and enriched baking.",
    unitLabel: "Consumer Unit",
    availability: "Ready to Ship",
    actionLabel: "Order Retail Unit",
    icon: "shopping_bag",
    variant: "retail",
  },
  {
    id: "plantain-flour-carton",
    title: "Commercial Master Carton",
    format: "Wholesale Master Case",
    packageLabel: "12 × 900g (10.8kg)",
    image: productImages.bulk,
    imageAlt: "Commercial master carton containing twelve 900g pouches",
    description:
      "Reinforced corrugated shipping carton containing 12 individually sealed 900g sachets. Engineered for export transit, distributor stacking, and retail grocery shelves.",
    actionLabel: "Order Bulk Carton",
    icon: "inventory_2",
    variant: "bulk",
  },
];

export const benefits = [
  {
    id: "purity",
    eyebrow: "Zero Adulteration",
    title: "100% Unadulterated Purity",
    description:
      "Zero artificial additives, zero chemical bleach, and thorough multi-stage destoning ensuring absolutely zero sand residue or grittiness.",
    icon: "verified",
  },
  {
    id: "sourcing",
    eyebrow: "Ethical Supply",
    title: "Direct Harvest Sourcing",
    description:
      "Direct partnerships with contracted regional plantain farmers, ensuring ethical pricing and end-to-end harvest-to-milling traceability.",
    icon: "agriculture",
  },
  {
    id: "delivery",
    eyebrow: "Fast Fulfillment",
    title: "Swift, Reliable and Easy Delivery",
    description:
      "Prompt door-to-door dispatch and reliable freight routing ensuring your orders arrive fresh and exactly on schedule.",
    icon: "local_shipping",
  },
  {
    id: "value",
    eyebrow: "Best Value",
    title: "Affordable by All",
    description:
      "Competitive, transparent market pricing engineered to deliver premium factory-grade nutrition to every family and retailer budget.",
    icon: "payments",
    accent: true,
  },
  {
    id: "exports",
    eyebrow: "Worldwide Distribution",
    title: "Global Supply / Exports",
    description:
      "Export-compliant packaging, barcoding, and containerized distribution primed for overseas diaspora markets and international grocers.",
    icon: "public",
  },
];
