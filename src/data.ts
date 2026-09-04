export interface Service {
  icon: string
  title: string
  description: string
  price: string
}

export interface GalleryItem {
  label: string
  gradient: string
}

export interface Step {
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const services: Service[] = [
  {
    icon: '🪨',
    title: 'Natural Stone',
    description:
      'Marble, granite, travertine and slate, hand-selected and sealed for a lifetime of timeless character.',
    price: 'from $12 / sq ft',
  },
  {
    icon: '🧱',
    title: 'Porcelain & Tile',
    description:
      'Large-format porcelain and designer tile for kitchens, bathrooms and living spaces that stay pristine.',
    price: 'from $8 / sq ft',
  },
  {
    icon: '🌳',
    title: 'Hardwood',
    description:
      'Engineered and solid hardwood in oak, walnut and maple, finished on-site for a seamless look.',
    price: 'from $10 / sq ft',
  },
  {
    icon: '📐',
    title: 'Design Consultation',
    description:
      'In-home measuring, 3D visualisation and material curation with a dedicated flooring designer.',
    price: 'complimentary',
  },
  {
    icon: '🛠️',
    title: 'Expert Installation',
    description:
      'Certified installers, dust-controlled removal and precise subfloor prep for a flawless finish.',
    price: 'quoted per project',
  },
  {
    icon: '✨',
    title: 'Restoration & Care',
    description:
      'Polishing, honing and resealing that brings tired stone and hardwood floors back to life.',
    price: 'from $3 / sq ft',
  },
]

export const gallery: GalleryItem[] = [
  {
    label: 'Carrara Marble',
    gradient: 'linear-gradient(135deg, #e9e5df, #cfc9bf)',
  },
  {
    label: 'Smoked Oak',
    gradient: 'linear-gradient(135deg, #8a5a34, #5c3a20)',
  },
  {
    label: 'Slate Grey Porcelain',
    gradient: 'linear-gradient(135deg, #556067, #2f373c)',
  },
  {
    label: 'Golden Travertine',
    gradient: 'linear-gradient(135deg, #d9b378, #b48645)',
  },
  {
    label: 'Herringbone Walnut',
    gradient: 'linear-gradient(135deg, #6b4423, #3f2712)',
  },
  {
    label: 'Statuario White',
    gradient: 'linear-gradient(135deg, #f4f2ee, #dad5cc)',
  },
  {
    label: 'Basalt Black',
    gradient: 'linear-gradient(135deg, #33383d, #16191c)',
  },
  {
    label: 'Honeyed Maple',
    gradient: 'linear-gradient(135deg, #d7a75c, #a9753a)',
  },
]

export const steps: Step[] = [
  {
    title: 'Consultation',
    description:
      'We visit your space, understand your style and take precise measurements.',
  },
  {
    title: 'Design & Quote',
    description:
      'Curated material samples and a transparent, itemised quote within 48 hours.',
  },
  {
    title: 'Installation',
    description:
      'Certified crews prepare, lay and finish your floor with meticulous care.',
  },
  {
    title: 'Aftercare',
    description:
      'A final walkthrough, care guide and our 10-year workmanship warranty.',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'iStone transformed our lobby with Carrara marble. The craftsmanship is impeccable and the crew was spotless.',
    name: 'Amara Bello',
    role: 'Hotel Operations Director',
  },
  {
    quote:
      'From the 3D preview to installation day, everything was on time and on budget. Our oak floors are stunning.',
    name: 'James Whitfield',
    role: 'Homeowner, Riverside',
  },
  {
    quote:
      'They restored a 90-year-old travertine floor we thought was beyond saving. Truly master craftsmen.',
    name: 'Priya Nadkarni',
    role: 'Interior Designer',
  },
]
