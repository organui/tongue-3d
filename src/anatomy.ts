export type Structure = {
  id: string
  fma: string
  name: string
  sourceName: string
  group:
    'Tongue' | 'Extrinsic muscles' | 'Floor of mouth' | 'Nearby structures' | 'Nerves' | 'Vessels'
  // Official 4.3 IS-A concepts this group draws its source meshes from.
  concepts: string[]
  // FJ element files; each element belongs to exactly one structure.
  elements: string[]
  color: string
  description: string
  note: string
}

export const anatomySource = 'https://www.ncbi.nlm.nih.gov/books/NBK507782/'
export const structures: Structure[] = [
  {
    id: 'tongue',
    fma: 'FMA54640',
    name: 'Tongue',
    sourceName: 'tongue',
    group: 'Tongue',
    concepts: ['FMA54640'],
    elements: ['FJ2761'],
    color: '#d98a8a',
    description:
      'A muscular organ on the floor of the mouth. It shapes food for swallowing, carries the taste buds and forms the sounds of speech.',
    note: 'The source gives the tongue as one simplified outer surface. Its intrinsic muscles, papillae and the oral and pharyngeal parts are not separate meshes.',
  },
  {
    id: 'genioglossus',
    fma: 'FMA46702',
    name: 'Genioglossus',
    sourceName: 'left and right genioglossus',
    group: 'Extrinsic muscles',
    concepts: ['FMA46702', 'FMA46698'],
    elements: ['FJ2738', 'FJ2750'],
    color: '#b8564c',
    description:
      'A fan-shaped muscle from the inside of the chin into the body of the tongue. It pushes the tongue forward and out.',
    note: 'Left and right muscles are grouped as one selectable set. Most of it runs inside the tongue, so it is shown through the tongue surface.',
  },
  {
    id: 'hyoglossus',
    fma: 'FMA46704',
    name: 'Hyoglossus',
    sourceName: 'left and right hyoglossus',
    group: 'Extrinsic muscles',
    concepts: ['FMA46704', 'FMA46703'],
    elements: ['FJ2739', 'FJ2751'],
    color: '#c9725f',
    description:
      'A thin, flat muscle rising from the hyoid bone into the side of the tongue. It pulls the tongue down and back.',
    note: 'Left and right muscles are grouped as one selectable set. The styloglossus and palatoglossus have no mesh in the source and are omitted.',
  },
  {
    id: 'geniohyoid',
    fma: 'FMA46327',
    name: 'Geniohyoid',
    sourceName: 'left and right geniohyoid',
    group: 'Floor of mouth',
    concepts: ['FMA46327', 'FMA46326'],
    elements: ['FJ1559', 'FJ1580'],
    color: '#a8645a',
    description:
      'A narrow muscle running from the chin to the hyoid bone just below the genioglossus. It pulls the hyoid forward.',
    note: 'Left and right muscles are grouped as one selectable set.',
  },
  {
    id: 'mylohyoid',
    fma: 'FMA46322',
    name: 'Mylohyoid',
    sourceName: 'left and right mylohyoid',
    group: 'Floor of mouth',
    concepts: ['FMA46322', 'FMA46321'],
    elements: ['FJ1562', 'FJ1583'],
    color: '#c2867a',
    description:
      'A sheet of muscle that forms the floor of the mouth beneath the tongue. It raises the floor of the mouth when swallowing.',
    note: 'Left and right muscles are grouped as one selectable set. The mandible they attach to is omitted.',
  },
  {
    id: 'hyoid-bone',
    fma: 'FMA52749',
    name: 'Hyoid bone',
    sourceName: 'hyoid bone',
    group: 'Nearby structures',
    concepts: ['FMA52749'],
    elements: ['FJ2772'],
    color: '#e8dcc2',
    description:
      'A U-shaped bone in the upper neck that anchors the tongue and the floor of the mouth. It does not touch any other bone.',
    note: 'Included for orientation.',
  },
  {
    id: 'epiglottis',
    fma: 'FMA55130',
    name: 'Epiglottis',
    sourceName: 'epiglottis',
    group: 'Nearby structures',
    concepts: ['FMA55130'],
    elements: ['FJ2770'],
    color: '#b9c4a0',
    description:
      'A leaf-shaped flap of cartilage behind the root of the tongue. It tips back over the larynx when you swallow.',
    note: 'Included for orientation. The rest of the larynx is omitted.',
  },
  {
    id: 'submandibular-glands',
    fma: 'FMA59803',
    name: 'Submandibular glands',
    sourceName: 'left and right submandibular gland',
    group: 'Nearby structures',
    concepts: ['FMA59803', 'FMA59802'],
    elements: ['FJ2766', 'FJ2768'],
    color: '#dcb67e',
    description:
      'Salivary glands beneath the jaw on each side. Their ducts open under the tongue, beside its frenulum.',
    note: 'Left and right glands are grouped as one selectable set. The source surfaces are simplified.',
  },
  {
    id: 'sublingual-glands',
    fma: 'FMA59805',
    name: 'Sublingual glands',
    sourceName: 'left and right sublingual gland',
    group: 'Nearby structures',
    concepts: ['FMA59805', 'FMA59804'],
    elements: ['FJ2765', 'FJ2767'],
    color: '#e3c79a',
    description:
      'The smallest of the main salivary glands. They lie in the floor of the mouth, under the front of the tongue.',
    note: 'Left and right glands are grouped as one selectable set. The source surfaces are simplified.',
  },
  {
    id: 'hypoglossal-nerves',
    fma: 'FMA80483',
    name: 'Hypoglossal nerves',
    sourceName: 'trunks of left and right hypoglossal nerve',
    group: 'Nerves',
    concepts: ['FMA80483', 'FMA80482'],
    elements: ['FJ3941', 'FJ4027'],
    color: '#e6c84f',
    description:
      'The twelfth cranial nerves. They run down from the skull and forward into the tongue, and move almost all of its muscles.',
    note: 'Left and right trunks are grouped as one selectable set. They reach well behind and above the tongue.',
  },
  {
    id: 'lingual-nerves',
    fma: 'FMA80512',
    name: 'Lingual nerves',
    sourceName: 'trunks of left and right lingual nerve',
    group: 'Nerves',
    concepts: ['FMA80512', 'FMA80511'],
    elements: ['FJ3949', 'FJ3984'],
    color: '#c9a93a',
    description:
      'Branches of the mandibular nerve that carry touch, temperature and, through the chorda tympani, taste from the front two thirds of the tongue.',
    note: 'Left and right trunks are grouped as one selectable set.',
  },
  {
    id: 'lingual-artery',
    fma: 'FMA66447',
    name: 'Lingual artery',
    sourceName: 'trunk and third part of right lingual artery, right sublingual artery',
    group: 'Vessels',
    concepts: ['FMA66447', 'FMA49535', 'FMA49544'],
    elements: ['FJ5117', 'FJ5074', 'FJ5190'],
    color: '#a94a46',
    description:
      'A branch of the external carotid artery and the main blood supply of the tongue. It runs forward above the hyoid bone and gives off the sublingual artery.',
    note: 'Only the right side is in the source, so only it is shown.',
  },
  {
    id: 'lingual-veins',
    fma: 'FMA52565',
    name: 'Lingual veins',
    sourceName: 'right lingual, deep lingual and sublingual veins',
    group: 'Vessels',
    concepts: ['FMA52565', 'FMA50831', 'FMA50837'],
    elements: ['FJ4996', 'FJ5075', 'FJ5191'],
    color: '#6d8db0',
    description:
      'Drain the tongue toward the internal jugular vein. The deep lingual vein can be seen through the thin skin under the tongue.',
    note: 'Only the right side is in the source, so only it is shown.',
  },
]
export const groups = [
  'Tongue',
  'Extrinsic muscles',
  'Floor of mouth',
  'Nearby structures',
  'Nerves',
  'Vessels',
] as const
export const byId = Object.fromEntries(structures.map((s) => [s.id, s]))
export type View = 'Left lateral' | 'Anterior' | 'Superior'
// The tongue reads best from the side, where its shape and the muscles
// fanning into it are both visible.
export const defaultView: View = 'Left lateral'
export const tour: { id: string; title: string; text: string; view: View; isolate?: boolean }[] = [
  {
    id: 'tongue',
    title: 'More than a taste organ',
    text: 'The tongue fills the floor of the mouth and reaches back toward the throat. Rotate the model to see how far its root extends behind the mouth.',
    view: 'Left lateral',
  },
  {
    id: 'genioglossus',
    title: 'Anchored to the chin',
    text: 'The genioglossus fans out from the inside of the chin into the tongue. It is isolated here; restore all to see the tongue around it.',
    view: 'Left lateral',
    isolate: true,
  },
  {
    id: 'hyoid-bone',
    title: 'A floating bone',
    text: 'The hyoid bone is held in place only by muscles and ligaments. The hyoglossus rises from it into the side of the tongue.',
    view: 'Anterior',
  },
  {
    id: 'hypoglossal-nerves',
    title: 'One nerve for movement',
    text: 'Each hypoglossal nerve runs down from the skull and curves forward into the tongue to drive its muscles.',
    view: 'Left lateral',
  },
  {
    id: 'epiglottis',
    title: 'Where the tongue meets the throat',
    text: 'Behind the root of the tongue, the epiglottis tips back to cover the airway when you swallow.',
    view: 'Superior',
  },
]

export type Emphasis = 'normal' | 'selected' | 'ghosted'
// With nothing selected every structure keeps its own color. A selection
// keeps its structure solid and ghosts the rest so it stays visible even
// when it sits behind or inside other geometry (genioglossus, lingual veins).
export function emphasis(id: string, selected: string | null): Emphasis {
  if (!selected) return 'normal'
  return id === selected ? 'selected' : 'ghosted'
}
