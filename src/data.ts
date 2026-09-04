export interface Collection {
  id: string
  name: string
  tagline: string
  priceFrom: string
  accent: string
  swatch: string
  features: string[]
}

export const collections: Collection[] = [
  {
    id: 'hardwood',
    name: 'European Oak Hardwood',
    tagline: 'Timeless warmth, engineered to last generations.',
    priceFrom: '$8.90 / sq ft',
    accent: '#b3792f',
    swatch:
      'repeating-linear-gradient(100deg, #c68b46 0 14px, #b3792f 14px 28px, #a86e2a 28px 40px)',
    features: ['7.5" wide planks', 'Wire-brushed matte finish', '25-year wear warranty'],
  },
  {
    id: 'vinyl',
    name: 'Luxury Vinyl Plank',
    tagline: '100% waterproof performance with a natural look.',
    priceFrom: '$4.20 / sq ft',
    accent: '#6b7f8a',
    swatch:
      'repeating-linear-gradient(100deg, #8fa2ad 0 16px, #77909c 16px 32px, #66808c 32px 48px)',
    features: ['Waterproof core', 'Pet & scratch resistant', 'Attached acoustic pad'],
  },
  {
    id: 'tile',
    name: 'Porcelain Stone-Look Tile',
    tagline: 'The beauty of marble with the strength of porcelain.',
    priceFrom: '$5.60 / sq ft',
    accent: '#8a8577',
    swatch:
      'linear-gradient(135deg, #e9e5dc 0%, #cfc9bd 45%, #b7b0a2 60%, #d8d3c8 100%)',
    features: ['Rectified edges', 'Frost & stain proof', 'Radiant-heat compatible'],
  },
  {
    id: 'stone',
    name: 'Natural Travertine',
    tagline: 'Quarried elegance for interiors and patios alike.',
    priceFrom: '$11.40 / sq ft',
    accent: '#b08d63',
    swatch:
      'linear-gradient(135deg, #e7d7bf 0%, #d4bd97 50%, #c2a97f 75%, #ddc9a8 100%)',
    features: ['Honed & filled', 'Sealed for durability', 'Indoor / outdoor grade'],
  },
]

export interface Service {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Free In-Home Design',
    description:
      'A flooring specialist visits with samples, measures precisely, and builds a room-by-room plan.',
    icon: 'ruler',
  },
  {
    title: 'Certified Installation',
    description:
      'Our in-house crews handle demo, subfloor prep, and finish work — no third-party subcontractors.',
    icon: 'hammer',
  },
  {
    title: 'Lifetime Support',
    description:
      'Every installation is backed by our workmanship guarantee and complimentary annual check-ups.',
    icon: 'shield',
  },
]

export interface Testimonial {
  quote: string
  name: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The oak floors completely transformed our living room. The crew was meticulous and finished a day early.',
    name: 'Marcus & Lena T.',
    location: 'Riverside Heights',
  },
  {
    quote:
      'From the free consultation to the final walkthrough, iStone made a stressful renovation feel effortless.',
    name: 'Priya S.',
    location: 'Oakmont',
  },
  {
    quote:
      'We compared four companies. iStone had the best samples, fair pricing, and the only lifetime workmanship warranty.',
    name: 'Devon R.',
    location: 'Lakeshore',
  },
]

export const roomTypes = [
  'Living Room',
  'Kitchen',
  'Bedroom',
  'Bathroom',
  'Whole Home',
  'Commercial Space',
]
