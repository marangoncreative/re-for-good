export type DeedImpact = {
  label: string
  value: string
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
  summary: string
  interventions: { title: string; detail: string }[]
  impacts: DeedImpact[]
  standards: string
  blockchainNote: string
}

export const deeds: Deed[] = [
  {
    id: 'RE-LAB-2026-001',
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
    standards: 'Museum-level conservation · Full reversibility · Documentary integrity',
    blockchainNote:
      'Lifecycle, provenance, and restoration journey will soon be verifiable on-chain. This Digital Deed is the off-chain record today.',
  },
]

export function getDeed(id: string): Deed | undefined {
  return deeds.find((d) => d.id === id)
}
