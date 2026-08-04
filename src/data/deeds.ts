export type DeedImpact = {
  label: string
  value: string
  note: string
}

export type DeedEconomy = {
  fee: string
  costs: string
  netCash: string
  retained: string
  stock: string
  note: string
}

export type Deed = {
  id: string
  title: string
  subtitle: string
  material: string
  workshop: string
  date: string
  status: 'Certified' | 'In progress'
  image: string
  images?: string[]
  imageLabels?: string[]
  summary: string
  interventions: { title: string; detail: string }[]
  impacts: DeedImpact[]
  economy?: DeedEconomy
  standards: string
  blockchainNote: string
  link?: { label: string; href: string }
}

export const deeds: Deed[] = [
  {
    id: 'RE-LAB-2026-001',
    title: '7 Hills of Roma',
    subtitle: 'Limited-edition chess set · 7 of 7',
    material: 'Pinus pinea · recycled Roman plastic · Roman travertine',
    workshop: 'RE Lab × Ridaje Roma',
    date: '2026',
    status: 'Certified',
    image: '/assets/chess-hero.png',
    images: [
      '/assets/chess-1.jpg',
      '/assets/chess-2.jpg',
      '/assets/chess-3.jpg',
      '/assets/chess-4.jpg',
    ],
    summary:
      'Fallen Pinus pinea of Rome, Rome’s plastic waste, and Roman travertine transformed into a limited chess set for the Seven Hills — only seven editions exist.',
    interventions: [
      {
        title: 'Pinus pinea wood',
        detail: 'Fallen umbrella pines of Rome shaped into wooden pieces — urban timber given a second life.',
      },
      {
        title: 'Recycled Roman plastic',
        detail: 'Local plastic waste reformed into chess pieces instead of entering landfill streams.',
      },
      {
        title: 'Roman travertine',
        detail: 'Travertine stone of Rome integrated as a material of place, weight, and permanence.',
      },
      {
        title: 'Seven Hills edition',
        detail: 'Seven unique editions — one for each of the legendary hills of Rome.',
      },
      {
        title: 'Collaborative craft',
        detail: 'Produced with Ridaje Roma — local craft meeting regenerative design.',
      },
    ],
    impacts: [
      {
        label: 'Circular economy',
        value: '3 waste streams upcycled',
        note: 'Fallen trees, plastic waste, and stone offcuts turned into a collectible cultural object.',
      },
      {
        label: 'Carbon (estimate)',
        value: '~15–30 kg CO₂e avoided',
        note: 'Vs. virgin materials + landfill fate for plastic and unused timber. Full LCA forthcoming.',
      },
      {
        label: 'Cultural heritage',
        value: 'Seven Hills of Rome',
        note: 'Materials and narrative rooted in the city — a playable homage to Roman identity.',
      },
      {
        label: 'Local regeneration',
        value: 'Rome → Rome',
        note: 'Materials sourced and transformed in Rome, keeping value in the local circular economy.',
      },
    ],
    standards: 'Circular design · Local materials · Limited edition of 7 · Documented provenance',
    blockchainNote:
      'Every material and process will soon be trackable on-chain. This Digital Deed is the off-chain record of provenance today.',
    link: {
      label: 'Purchase edition',
      href: 'https://www.vinted.it/items/9043786790-27-of-7-hills-of-rome-collectable-chess-set?referrer=catalog',
    },
  },
  {
    id: 'RE-LAB-2026-002',
    title: 'Solid Sycamore Side Table',
    subtitle: 'Family heirloom restoration',
    material: 'Solid sycamore (Platanus)',
    workshop: 'RE Lab · Rome',
    date: '2026',
    status: 'Certified',
    image: '/assets/sycamore-before-after.png',
    summary:
      'A worn solid-sycamore side table restored with museum-level, fully reversible methods — extending a family heirloom’s life instead of replacing it.',
    interventions: [
      {
        title: 'Structural & mechanical care',
        detail: 'Replaced worn screws, realigned the door, and reinforced the hinge pin.',
      },
      {
        title: 'Custom wood filling',
        detail: 'Bridged cracks with filler made from the object’s own original sawdust.',
      },
      {
        title: 'Reversible finish',
        detail: 'Removed the aged coat and applied four coats of traditional shellac.',
      },
      {
        title: 'Documentary integrity',
        detail: 'Left historical markings, labels, and inner text untouched.',
      },
      {
        title: 'Preserved patina',
        detail: 'Reinforced structural splits while keeping authentic marks of age.',
      },
    ],
    impacts: [
      {
        label: 'Circular economy',
        value: 'Landfill diverted',
        note: 'Existing piece kept in use; no new furniture purchase required.',
      },
      {
        label: 'Carbon (estimate)',
        value: '~25–40 kg CO₂e avoided',
        note: 'Vs. producing and shipping a comparable new wooden side table. Full LCA forthcoming.',
      },
      {
        label: 'Cultural heritage',
        value: 'Provenance intact',
        note: 'Family heirloom + original labels and markings preserved for future generations.',
      },
      {
        label: 'Conservation ethics',
        value: 'Fully reversible',
        note: 'Museum-standard intervention — safely restorable again decades from now.',
      },
    ],
    economy: {
      fee: '€200 cash received',
      costs: '€140 materials + machine & hand tools',
      netCash: '~€60 on this job',
      retained: 'Machine and hand tools kept in the workshop',
      stock: 'Materials left for ~3 further jobs of the same type',
      note:
        'Small paid restoration logged as-is: cash fee, out-of-pocket costs, tools as retained capital, leftover stock as repeat capacity. Not a formal invoice — workshop ledger for transparency.',
    },
    standards: 'Museum-level conservation · Full reversibility · Documentary integrity',
    blockchainNote:
      'Lifecycle, provenance, and restoration journey will soon be verifiable on-chain. This Digital Deed is the off-chain record today.',
  },
  {
    id: 'RE-LAB-2026-003',
    title: 'Veracura Hub Modular Tables',
    subtitle: 'Construction waste → 3 modular tables · mosaic next',
    material: 'Reclaimed site timber & OSB · upcycled plastic mosaic (upcoming)',
    workshop: 'RE Lab · Veracura Hub',
    date: '2026',
    status: 'In progress',
    image: '/assets/veracura-before-after.png',
    images: [
      '/assets/veracura-before.png',
      '/assets/veracura-after.png',
    ],
    imageLabels: ['Before', 'After'],
    summary:
      'Three 125×125 cm modular tables built on-site from Veracura Hub construction timber — waste transformed where it was created, so disposal energy, new-product carbon, and long-haul furniture logistics were all avoided. Upcycled-plastic mosaic surface still to come.',
    interventions: [
      {
        title: 'On-site transformation',
        detail: 'Waste was converted into furniture at the same hub — no haul-away for disposal, no inbound shipment of new tables.',
      },
      {
        title: 'Site salvage',
        detail: 'Beams, OSB panels, and scrap timber from the Veracura construction site kept out of the waste stream.',
      },
      {
        title: 'Three modular tables',
        detail: 'Built three matching 125×125 cm modules that can stand alone or join into one long surface.',
      },
      {
        title: 'Structural reuse',
        detail: 'Reclaimed heavy timber became cross-braced legs; OSB panels became tabletops.',
      },
      {
        title: 'Upcycled plastic mosaic (next)',
        detail: 'Tabletops will receive a mosaic from upcycled plastic — suitable waste feedstock is currently being sourced.',
      },
    ],
    impacts: [
      {
        label: 'Avoided disposal energy',
        value: 'No haul-away / landfill load',
        note: 'Timber stayed on site — energy for collection, transport, and waste processing was not spent.',
      },
      {
        label: 'Carbon (estimate)',
        value: '~160–280 kg CO₂e avoided',
        note: 'Combined estimate: (~40–70) disposal & waste logistics + (~90–150) embodied carbon of three new tables + (~30–60) inbound manufacturing & delivery. Full LCA forthcoming.',
      },
      {
        label: 'Avoided new production',
        value: '3 tables not manufactured elsewhere',
        note: 'No virgin furniture production chain — materials and craft stayed inside the hub’s own cycle.',
      },
      {
        label: 'Local regeneration',
        value: 'Hub waste → Hub furniture',
        note: 'Zero long-distance material loop: transformed where the waste was generated, used where it is needed.',
      },
    ],
    standards: 'On-site circular design · Site-sourced materials · Modular reuse · Documented before/after',
    blockchainNote:
      'Provenance of salvaged materials, on-site transformation, and the mosaic chapter will soon be verifiable on-chain. This Digital Deed tracks the project as it evolves.',
  },
]

export function getDeed(id: string): Deed | undefined {
  return deeds.find((d) => d.id === id)
}
