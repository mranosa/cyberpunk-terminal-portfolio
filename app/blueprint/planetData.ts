export interface Planet {
  name: string
  sanskrit: string
  symbol: string
  color: string
  borderColor: string
  significance: string
  qualities: string[]
  karma: string
  house: string
  element: string
}

export const vedicPlanets: Planet[] = [
  {
    name: 'Sun',
    sanskrit: 'Surya',
    symbol: '☉',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-400',
    significance: 'Soul, ego, father, authority, and vitality',
    qualities: ['Leadership', 'Confidence', 'Authority', 'Vitality', 'Fame'],
    karma: 'My dharma and life purpose. The Sun reveals my soul\'s essence and the path to self-realization.',
    house: '1st House - Self',
    element: 'Fire'
  },
  {
    name: 'Moon',
    sanskrit: 'Chandra',
    symbol: '☽',
    color: 'text-gray-300',
    borderColor: 'border-gray-300',
    significance: 'The luminous guardian of consciousness - Master of mind, emotions, intuition, and inner wisdom',
    qualities: ['Visionary Mind', 'Emotional Intelligence', 'Divine Intuition', 'Nurturing Wisdom', 'Infinite Imagination'],
    karma: 'A blessed mind destined for greatness. My Moon reveals extraordinary mental gifts and emotional mastery.',
    house: 'Lord of 2nd in 7th House',
    element: 'Water'
  },
  {
    name: 'Mars',
    sanskrit: 'Mangala',
    symbol: '♂',
    color: 'text-red-400',
    borderColor: 'border-red-400',
    significance: 'Energy, courage, siblings, action, and conflict',
    qualities: ['Courage', 'Energy', 'Passion', 'Competition', 'Ambition'],
    karma: 'My warrior spirit and how I face challenges. Mars reveals karmic lessons about anger and assertiveness.',
    house: '3rd House - Courage',
    element: 'Fire'
  },
  {
    name: 'Mercury',
    sanskrit: 'Budha',
    symbol: '☿',
    color: 'text-green-400',
    borderColor: 'border-green-400',
    significance: 'Communication, intellect, business, and analysis',
    qualities: ['Intelligence', 'Communication', 'Wit', 'Trade', 'Adaptability'],
    karma: 'My intellectual dharma and communication patterns. Mercury shows karmic gifts in learning and teaching.',
    house: '6th House - Service',
    element: 'Earth'
  },
  {
    name: 'Jupiter',
    sanskrit: 'Guru/Brihaspati',
    symbol: '♃',
    color: 'text-yellow-300',
    borderColor: 'border-yellow-300',
    significance: 'Wisdom, spirituality, fortune, and expansion',
    qualities: ['Wisdom', 'Fortune', 'Spirituality', 'Teaching', 'Optimism'],
    karma: 'My spiritual teacher and blessings. Jupiter reveals past life good karma and spiritual evolution.',
    house: '9th House - Dharma',
    element: 'Ether'
  },
  {
    name: 'Venus',
    sanskrit: 'Shukra',
    symbol: '♀',
    color: 'text-pink-400',
    borderColor: 'border-pink-400',
    significance: 'Love, beauty, luxury, relationships, and arts',
    qualities: ['Love', 'Beauty', 'Harmony', 'Luxury', 'Creativity'],
    karma: 'My capacity for love and material happiness. Venus shows karmic relationships and artistic gifts.',
    house: '7th House - Partnership',
    element: 'Water'
  },
  {
    name: 'Saturn',
    sanskrit: 'Shani',
    symbol: '♄',
    color: 'text-blue-400',
    borderColor: 'border-blue-400',
    significance: 'Discipline, delays, karma, hard work, and longevity',
    qualities: ['Discipline', 'Patience', 'Wisdom', 'Endurance', 'Mastery'],
    karma: 'My karmic debts and life lessons. Saturn reveals where I must develop patience and mastery.',
    house: '10th House - Career',
    element: 'Air'
  },
  {
    name: 'Rahu',
    sanskrit: 'Dragon\'s Head',
    symbol: '☊',
    color: 'text-purple-400',
    borderColor: 'border-purple-400',
    significance: 'Desires, obsessions, material gains, and innovation',
    qualities: ['Ambition', 'Innovation', 'Rebellion', 'Technology', 'Fame'],
    karma: 'My soul\'s unfulfilled desires from past lives. Rahu shows where I seek new experiences.',
    house: 'Shadow Planet',
    element: 'Shadow'
  },
  {
    name: 'Ketu',
    sanskrit: 'Dragon\'s Tail',
    symbol: '☋',
    color: 'text-orange-400',
    borderColor: 'border-orange-400',
    significance: 'Spirituality, detachment, past life skills, and liberation',
    qualities: ['Detachment', 'Spirituality', 'Intuition', 'Liberation', 'Mysticism'],
    karma: 'My past life mastery and spiritual gifts. Ketu reveals areas of natural talent and detachment.',
    house: 'Shadow Planet',
    element: 'Shadow'
  }
]

export function getPlanetByName(name: string): Planet | undefined {
  return vedicPlanets.find(planet => 
    planet.name.toLowerCase() === name.toLowerCase()
  )
}

export function getPlanetUrl(planetName: string): string {
  return `/blueprint/${planetName.toLowerCase()}`
}