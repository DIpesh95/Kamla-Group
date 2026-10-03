export type Vertical = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  image: string;
  stats?: { label: string; value: string }[];
};

export const verticals: Vertical[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Where it all began, in 1960.",
    summary:
      "Residential, commercial, retail, SRA and society redevelopment across Mumbai, Pune, Delhi and Goa — delivered through three distinct brands: Kamala, Orra, Sogo and Privé.",
    image: "/images/hero-times-tower.jpg",
    stats: [
      { label: "Residential projects delivered", value: "100+" },
      { label: "Development in Central Mumbai", value: "20M+ sq.ft" },
      { label: "Cities", value: "Mumbai · Pune · Delhi · Goa" },
    ],
  },
  {
    slug: "power",
    name: "Power",
    tagline: "From real estate to renewable energy.",
    summary:
      "Green Plant Energy Pvt. Ltd. (GPEL) and MPPL Renewable Energy generate biomass power from agricultural waste, turning rural Punjab and Karnataka's farm residue into firm, clean electricity.",
    image: "/images/power-plant.jpg",
    stats: [
      { label: "Biomass power capacity", value: "4.5 MW" },
      { label: "First in the world", value: "Gold Standard Carbon Credits" },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    tagline: "A new chapter in guest experience.",
    summary:
      "Kamala Hospitality's own Gstar brand and strategic tie-ups with internationally renowned hotel operators, bringing curated stays to Mumbai and Goa.",
    image: "/images/vertical-hospitality.jpg",
  },
  {
    slug: "fashion",
    name: "Fashion",
    tagline: "Gabbana — tailoring, elevated.",
    summary:
      "Exclusive studios offering fine international tailoring and fabrics — Gabbana has dressed some of India's most recognised names.",
    image: "/images/vertical-fashion.jpg",
  },
  {
    slug: "hr-solutions",
    name: "HR Solutions",
    tagline: "S2 Infotech — people, placed right.",
    summary:
      "RPO, search & selection, staff augmentation and HR process outsourcing, serving clients out of Mumbai, Gurgaon and Kolkata.",
    image: "/images/vertical-hr-solutions.jpg",
    stats: [{ label: "Professionals placed", value: "1500+" }],
  },
  {
    slug: "tours-travels",
    name: "Tours & Travels",
    tagline: "CR Travels — beyond the itinerary.",
    summary:
      "Business and leisure travel solutions backed by a dedicated team and award-winning airline partnerships.",
    image: "/images/vertical-tours-travels.jpg",
  },
];

export const verticalDetails: Record<string, string[]> = {
  "real-estate": [
    "Imposing commercial edifices in and around Lower Parel are synonymous with the expertise and excellence that brand Kamala stands for — a brand that promises honesty and transparency, made conspicuous by constructing state-of-the-art commercial towers in quick succession: Trade World A, B and C, which eventually became corporate landmarks.",
    "The shift began, and the corporate world chose Lower Parel. Today, Kamala City is an address that houses the Times of India, HDFC, Welspun and many more — apart from other corporate and residential landmarks by Kamala, in and around Mumbai.",
    "Over the years, as specialization, customization and categories seeped into realty, the Group also envisioned niche brands — Orra, Sogo and Privé — each built for a distinct clientele and a distinct part of the map: Orra for the western suburbs, Sogo for redevelopment across the central and eastern suburbs, and Privé for Goa.",
    "Being 100% debt-free, the Group's future-time focus, unparalleled vision and astute judgement has led to a series of back-to-back successes: over 100 residential projects completed and handed over in Mumbai alone, over 50 redevelopments within a year, pioneering the conversion of mill lands in Lower Parel into a corporate landmark, and over 20 million sq. ft. of development in Central Mumbai alone — with projects on a pan-India level including Mumbai, Delhi, Goa and Pune.",
  ],
  power: [
    "Power has been a landmark transformation for the Group. From real estate to electricity generation, the leap was tremendous and distinct — a profile totally cut away from the Group's original sector, charted out only by those with a clear vision and determination.",
    "Over a decade ago, Kamala Group set up MPPL Renewable Energy, successfully producing 4.5 MW of biomass power from its plant at Mallavali, Karnataka. MPPL went on to become the first company in the world to achieve Gold Standard Carbon Credits.",
    "Seeing the huge gap and clear potential in this sector, Kamala Group then launched Green Plant Energy Pvt. Ltd. (GPEL). With the decline of fossil fuels, GPEL saw potential in renewable energy, identifying Punjab as a storehouse of biomass and agro-waste.",
    "GPEL embarked on an ambitious plan to provide firm power to the rural electric network, catering to local energy needs through naturally available resources and contributing to the socio-economic development of rural communities — including plans for a Distributed Energy scheme of Modular Biomass Power Plants, and production of organic fertilizer from biomass ash and agricultural waste.",
  ],
  hospitality: [
    "The Travel and Tourism Competitiveness Report by the World Economic Forum once ranked India 11th in the Asia Pacific Region for tourism — 14th among the world's best destinations for natural resources, and 24th for cultural resources. Much before that recognition, the Kamala Group had already envisioned diversifying into hospitality.",
    "With a lucrative plan, the Group looks forward to its own chain of hotels under the Gstar brand, alongside strategic tie-ups with hotel brands of international repute for luxury deluxe properties in Lower Parel, Bandra and Dona Paula, Goa.",
    "While Gstar is managed directly by Kamala Hospitality, the larger-format hotels are planned in partnership — bringing an international standard of hospitality to some of the most sought-after addresses in Mumbai and Goa.",
  ],
  fashion: [
    "If fashion is all about making a statement, Kamala Group did it with Gabbana. The availability of international fashion in India got a major boost after the brand's introduction, bringing the best of international tailoring through exclusive outlets.",
    "Each and every Gabbana outlet is a studio — showcasing chic cuts, fine detailing, exclusivity and style, sourcing fabrics from international houses such as Zegna, Dormeuil, Scabal and Loro Piana.",
    "Small wonder, then, that Gabbana is renowned for having dressed some of India's most celebrated icons — a reputation the brand continues to build on through expansion of custom tailoring across India and abroad.",
  ],
  "hr-solutions": [
    "With a booming economy and major mergers, acquisitions and diversification across the corporate world, Kamala Group identified HR as one of the most potential sectors. S2 Infotech was incepted in 2005, positioned as a future-ready HR services provider.",
    "Currently home to over 1,500 professionals, the company specializes in RPO solutions, search, selection and staff augmentation, HR process outsourcing, and learning and development managed services.",
    "Today, S2 Infotech is an ISO 9001:2008 certified company with offices in Mumbai, Gurgaon and Kolkata — serving some of the country's most recognised corporate names.",
  ],
  "tours-travels": [
    "The journey began with the need to offer something more than just travel. While most companies focused on offering the best tour packages, Kamala Group's CR Travels added a lot more — making every tour more organized, comfortable and memorable.",
    "Managed by a dedicated team of travel professionals, the company offers a wide range of travel solutions for both business and leisure, backed by state-of-the-art technology.",
    "CR Travels has earned Top Selling Agent awards from Air India, Kingfisher and Swiss Air, and was nominated for the Best Corporate Travel Agent award by the Express Travel Awards for two consecutive years.",
  ],
};

export type RealEstateBrand = {
  slug: string;
  name: string;
  region: string;
  description: string;
  image: string;
};

export const realEstateBrands: RealEstateBrand[] = [
  {
    slug: "kamala",
    name: "Kamala",
    region: "Lower Parel & Commercial Landmarks",
    description:
      "The brand that built Kamala City and the Trade World towers — turning a former mill compound in Lower Parel into one of Mumbai's most recognised corporate addresses, home to the Times of India, HDFC and more.",
    image: "/images/hero-times-tower.jpg",
  },
  {
    slug: "orra",
    name: "Orra",
    region: "Western Suburbs",
    description:
      "Positioned as one of the finest luxury brands in realty — Orra signifies richness and opulence, with towers dotting the skyline between Bandra and Borivali.",
    image: "/images/orra-tower.jpg",
  },
  {
    slug: "sogo",
    name: "Sogo",
    region: "Central & Eastern Suburbs",
    description:
      "Sogo Infrastructure focuses on redevelopment and slum rehabilitation across Chembur, Ghatkopar, Mulund, Kurla and Thane — proof that affordability never compromises quality.",
    image: "/images/sogo-tower.jpg",
  },
  {
    slug: "prive",
    name: "Privé",
    region: "Goa",
    description:
      "Goa's freshest wave of realty — ultra-luxury homes, villas, commercial landmarks and retail malls in one of India's most loved destinations.",
    image: "/images/prive-goa.jpg",
  },
];

export type Value = {
  name: string;
  description: string;
};

export const values: Value[] = [
  {
    name: "Enlightenment",
    description:
      "Not just another solitary episode in a lifetime, but a state of sustained nirvana throughout life.",
  },
  {
    name: "Fertility",
    description:
      "We believe the fertility of a thousand visions only depends on the ability to execute them.",
  },
  {
    name: "Triumph",
    description:
      "Triumph is rarely about winning, but more about the endeavour to keep the spirit of winning alive.",
  },
  {
    name: "Wealth",
    description:
      "Wealth for us is only a single thing called 'idea' that can help start revolutions, foster change.",
  },
  {
    name: "Knowledge",
    description:
      "That knowledge is collective, and it can never work in isolation.",
  },
  {
    name: "Honour",
    description:
      "Honour is not just an ornamented crown. It is respect born of selfless service and dedication.",
  },
];

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    year: "1960",
    title: "The foundation is laid",
    description:
      "Late Shri Ghamandiram Gowani founds Kamala Group, envisioning a structured, honest real estate industry in a Mumbai that had barely imagined one.",
  },
  {
    year: "1960s–70s",
    title: "Prithvi rises on Altamount Road",
    description:
      "Kamala delivers one of Mumbai's first high-rises, setting the tone for every project that follows.",
  },
  {
    year: "2000s",
    title: "Kamala Mills becomes Kamala City",
    description:
      "A first-of-its-kind conversion of mill land in Lower Parel into Trade World A, B and C and Times Tower — now home to the Times of India, HDFC, Welspun and more.",
  },
  {
    year: "2000s–2010s",
    title: "Three brands, three promises",
    description:
      "Orra (Western Suburbs luxury), Sogo (redevelopment & SRA) and Privé (Goa) launch, taking Kamala's real estate expertise beyond South Mumbai.",
  },
  {
    year: "Diversification",
    title: "Beyond real estate",
    description:
      "The Group builds new verticals from the ground up: GPEL in renewable power, Gabbana in fashion, S2 Infotech in HR solutions, CR Travels in tourism, and Gstar in hospitality.",
  },
  {
    year: "Today",
    title: "65+ years, ISO 9001 certified, 100% debt-free",
    description:
      "Over 100 residential and commercial projects delivered across Mumbai, Pune, Delhi and Goa — still built on the same three words the Group was founded on.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Kamala group has done remarkably well both in terms of quality of construction and also in management of projects.",
    name: "Commander Bijur",
    role: "Sr. V.P., Bharti Airtel",
  },
  {
    quote: "Their culture is a mix of heritage and professionalism.",
    name: "Akhila Prabhakar",
    role: "Bharti Airtel",
  },
  {
    quote: "Transparent and clear in their dealings.",
    name: "Hareesh Engineer",
    role: "Executive Director, HDFC Bank",
  },
  {
    quote:
      "Quality and integrity were the strong foundation points laid by generations which are still continued.",
    name: "Deepak Mehta",
    role: "",
  },
  {
    quote: "Completely trustworthy and reliable.",
    name: "Gopal Jain",
    role: "MD, Gaja Capital Partners",
  },
  {
    quote:
      "After the decision is taken they do not try to short shift the customer. They try to give a little more than what was promised.",
    name: "T. Koshy",
    role: "Executive Director, NSDL",
  },
  {
    quote: "Fair in dealings and they never go back on their words.",
    name: "Suresh Panwani",
    role: "Venture Capitalist",
  },
  {
    quote: "Ramesh Gowani throws challenges, dreams big and realizes it too.",
    name: "Saurabh Chatterji",
    role: "Architect",
  },
];

export type ProjectGroup = {
  area: string;
  projects: string[];
};

export const completedProjects: ProjectGroup[] = [
  {
    area: "South Mumbai",
    projects: [
      "Prithvi Apartments, Altamount Road",
      "One Altamount Road",
      "Hind Rajasthan, Dadar",
      "Majestic Cinema, Girgaon",
      "El-Dorado, Prabhadevi",
      "Vinayak Aangan, Prabhadevi",
      "Tytan, Nepeansea Road",
      "Satnam Sagar, Peddar Road",
      "Matru Ashish, Nepeansea Road",
      "Sky Scraper, Warden Road",
      "Necklace View, Walkeshwar",
      "Chandra Sagar, Worli",
      "Birla Academy, Tardeo",
    ],
  },
  {
    area: "Bandra & Khar",
    projects: [
      "Rose Queen, Khar",
      "Kala Mandir, Bandra",
      "Le Papillion, Bandra",
      "Neelam Apartment, Mount Mary, Bandra",
      "Nav Bahar, Bandra",
      "Shalimar Apartments, Kemps Corner",
    ],
  },
  {
    area: "Lower Parel (Kamala City)",
    projects: [
      "Times Tower, Kamala City",
      "Trade World A, B, C & E Wing",
      "Welspun House",
      "Trade View",
      "India Infoline",
      "Orbit",
      "Kewal Industrial Estate",
      "Tirupati Apartments, Mahalaxmi",
    ],
  },
  {
    area: "Western Suburbs (Orra)",
    projects: [
      "Aquamarine, Bandra (W)",
      "Roop Kala, Santacruz (W)",
      "New Apsara, Khar (W)",
      "Kripadham, Borivali (E)",
      "Nutan Yojana, Khar (W)",
      "Matrubhoomi, Goregaon (W)",
      "Basil Grove, Borivali",
      "Infinite Airtel, Santacruz",
    ],
  },
  {
    area: "Chembur, Ghatkopar & Eastern Suburbs (Sogo)",
    projects: [
      "Siddheshwar, Ghatkopar",
      "Corporate Park, Chembur",
      "Swastik Chamber, Chembur",
      "Sunflower & Sea Lord, Cuffe Parade",
    ],
  },
  {
    area: "Beyond Mumbai",
    projects: [
      "Brightton, Thane",
      "Rock N Roll Mall, Mapusa (Goa)",
      "Kamala House, Miramar (Goa)",
      "Tranquil Lakes, Dona Paula (Goa)",
      "Empire Boulevard, Bambolim (Goa)",
    ],
  },
];

export const contact = {
  mumbai: {
    label: "Mumbai — Corporate Office",
    lines: [
      "Kamala House, Kamala City,",
      "Senapati Bapat Marg,",
      "Lower Parel, Mumbai 400 013",
    ],
    phone: "022-2498 2426 / 28 / 29",
    fax: "022-4368 2400",
  },
  goa: {
    label: "Goa",
    lines: ["Kamala House, D.B. Marg,", "Opp. Magsons Super Centre,", "Miramar, Panjim, Goa 403 001"],
    phone: "0832-651 5768",
    fax: "",
  },
  email: "info@kamala.co.in",
};
