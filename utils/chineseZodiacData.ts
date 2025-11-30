// Chinese Zodiac Data - Compatibility with Ken (Rabbit, born 1987)
// Based on Trine groups, Liu He (Secret Friends), Liu Chong (Clashes), and element cycles

export type ChineseZodiac =
  | 'rat' | 'ox' | 'tiger' | 'rabbit'
  | 'dragon' | 'snake' | 'horse' | 'goat'
  | 'monkey' | 'rooster' | 'dog' | 'pig';

export type ChineseElement = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

export interface ChineseZodiacInfo {
  name: string;
  chineseName: string;
  emoji: string;
  trine: 1 | 2 | 3 | 4;
  fixedElement: ChineseElement;
  polarity: 'yang' | 'yin';
  traits: string[];
}

export const CHINESE_ZODIAC_INFO: Record<ChineseZodiac, ChineseZodiacInfo> = {
  rat: {
    name: 'Rat',
    chineseName: '鼠',
    emoji: '🐀',
    trine: 1,
    fixedElement: 'water',
    polarity: 'yang',
    traits: ['Clever', 'Resourceful', 'Quick-thinking', 'Versatile']
  },
  ox: {
    name: 'Ox',
    chineseName: '牛',
    emoji: '🐂',
    trine: 2,
    fixedElement: 'earth',
    polarity: 'yin',
    traits: ['Diligent', 'Dependable', 'Strong', 'Determined']
  },
  tiger: {
    name: 'Tiger',
    chineseName: '虎',
    emoji: '🐅',
    trine: 3,
    fixedElement: 'wood',
    polarity: 'yang',
    traits: ['Brave', 'Competitive', 'Confident', 'Unpredictable']
  },
  rabbit: {
    name: 'Rabbit',
    chineseName: '兔',
    emoji: '🐇',
    trine: 4,
    fixedElement: 'wood',
    polarity: 'yin',
    traits: ['Gentle', 'Elegant', 'Diplomatic', 'Cautious']
  },
  dragon: {
    name: 'Dragon',
    chineseName: '龙',
    emoji: '🐉',
    trine: 1,
    fixedElement: 'earth',
    polarity: 'yang',
    traits: ['Confident', 'Ambitious', 'Charismatic', 'Powerful']
  },
  snake: {
    name: 'Snake',
    chineseName: '蛇',
    emoji: '🐍',
    trine: 2,
    fixedElement: 'fire',
    polarity: 'yin',
    traits: ['Wise', 'Intuitive', 'Elegant', 'Discreet']
  },
  horse: {
    name: 'Horse',
    chineseName: '马',
    emoji: '🐎',
    trine: 3,
    fixedElement: 'fire',
    polarity: 'yang',
    traits: ['Energetic', 'Independent', 'Adventurous', 'Free-spirited']
  },
  goat: {
    name: 'Goat',
    chineseName: '羊',
    emoji: '🐐',
    trine: 4,
    fixedElement: 'earth',
    polarity: 'yin',
    traits: ['Creative', 'Kind', 'Gentle', 'Artistic']
  },
  monkey: {
    name: 'Monkey',
    chineseName: '猴',
    emoji: '🐒',
    trine: 1,
    fixedElement: 'metal',
    polarity: 'yang',
    traits: ['Clever', 'Curious', 'Playful', 'Inventive']
  },
  rooster: {
    name: 'Rooster',
    chineseName: '鸡',
    emoji: '🐓',
    trine: 2,
    fixedElement: 'metal',
    polarity: 'yin',
    traits: ['Observant', 'Hardworking', 'Courageous', 'Confident']
  },
  dog: {
    name: 'Dog',
    chineseName: '狗',
    emoji: '🐕',
    trine: 3,
    fixedElement: 'earth',
    polarity: 'yang',
    traits: ['Loyal', 'Honest', 'Prudent', 'Reliable']
  },
  pig: {
    name: 'Pig',
    chineseName: '猪',
    emoji: '🐖',
    trine: 4,
    fixedElement: 'water',
    polarity: 'yin',
    traits: ['Compassionate', 'Generous', 'Diligent', 'Sincere']
  }
};

// Ken is Rabbit - Compatibility scores with each animal (0-100)
export const RABBIT_COMPATIBILITY: Record<ChineseZodiac, number> = {
  rat: 50,        // Punishment relationship
  ox: 50,         // Neutral
  tiger: 60,      // Neutral-positive
  rabbit: 70,     // Same sign
  dragon: 50,     // Harm relationship
  snake: 68,      // Neutral-positive
  horse: 40,      // Neutral-negative
  goat: 90,       // Same trine (4th)
  monkey: 73,     // Neutral-positive
  rooster: 25,    // CLASH (Liu Chong)
  dog: 95,        // SECRET FRIEND (Liu He)
  pig: 90         // Same trine (4th)
};

// Special relationship types
export type SpecialRelation = 'secret_friend' | 'trine' | 'clash' | 'harm' | 'punishment' | null;

export function getSpecialRelation(animal: ChineseZodiac): SpecialRelation {
  switch (animal) {
    case 'dog': return 'secret_friend';
    case 'goat':
    case 'pig': return 'trine';
    case 'rooster': return 'clash';
    case 'dragon': return 'harm';
    case 'rat': return 'punishment';
    default: return null;
  }
}

// Professional work descriptions for Rabbit + each animal
export const RABBIT_DESCRIPTIONS: Record<ChineseZodiac, {
  description: string;
  strengths: string[];
  challenges: string[];
  workTips: string[];
  specialRelation: SpecialRelation;
  specialLabel?: string;
}> = {
  rat: {
    description: "Rabbit and Rat have a traditional 'punishment' relationship in Chinese astrology. Different operating rhythms - Rabbit is methodical while Rat is opportunistic. Requires conscious effort to bridge communication styles, but can work when expectations are clear.",
    strengths: ["Rat's resourcefulness + Rabbit's diplomacy", "Both adaptable", "Good at finding solutions"],
    challenges: ["Trust building takes time", "Different risk appetites", "Communication style gaps"],
    workTips: ["Establish clear communication protocols", "Be explicit about expectations", "Build trust through small deliverables"],
    specialRelation: 'punishment',
    specialLabel: "FRICTION ZONE"
  },
  ox: {
    description: "Rabbit's flexibility meets Ox's steadfastness. Both value reliability and can build trust over time. Ken's diplomatic approach complements your methodical execution. Good for long-term projects requiring patience.",
    strengths: ["Both reliable", "Complementary work styles", "Trust builds steadily"],
    challenges: ["Ox may seem inflexible", "Rabbit may seem indecisive", "Different paces"],
    workTips: ["Give Ox clear deadlines", "Let Rabbit handle negotiations", "Plan ahead together"],
    specialRelation: null
  },
  tiger: {
    description: "Rabbit's caution balances Tiger's boldness. Ken provides diplomatic finesse while you bring courage and competitive drive. Different approaches to risk, but together you cover all bases - bold vision with careful execution.",
    strengths: ["Action + diplomacy balance", "Tiger leads charges, Rabbit ensures buy-in", "Complementary energy"],
    challenges: ["Tiger may seem reckless to Rabbit", "Rabbit may seem slow to Tiger", "Different conflict styles"],
    workTips: ["Let Tiger handle confrontations", "Rabbit handles stakeholder relationships", "Combine boldness with tact"],
    specialRelation: null
  },
  rabbit: {
    description: "Two Rabbits bring double diplomacy and attention to harmony. Excellent for environments requiring tact, negotiation, and careful relationship management. May need external push for decisive action.",
    strengths: ["Harmonious collaboration", "Shared values", "Diplomatic powerhouse"],
    challenges: ["Both may avoid conflict", "Decision paralysis possible", "Need external drive"],
    workTips: ["Bring in a decisive third party for tough calls", "Set decision deadlines", "Don't let politeness slow progress"],
    specialRelation: null
  },
  dragon: {
    description: "Traditional 'harm' relationship - Rabbit's quiet diplomacy meets Dragon's bold charisma. Different operating styles that can create friction. When aligned on goals, Dragon provides vision while Rabbit ensures smooth execution.",
    strengths: ["Vision + execution", "Dragon inspires, Rabbit implements", "Both ambitious in different ways"],
    challenges: ["Dragon may overshadow Rabbit", "Communication style mismatch", "Power dynamics"],
    workTips: ["Define clear roles", "Dragon leads externally, Rabbit manages internally", "Regular alignment sessions"],
    specialRelation: 'harm',
    specialLabel: "REQUIRES AWARENESS"
  },
  snake: {
    description: "Both signs share elegance and intuition. Rabbit's diplomacy pairs well with Snake's strategic depth. Good for projects requiring careful planning and stakeholder management. Trust builds naturally.",
    strengths: ["Shared intuition", "Strategic alignment", "Both value thoughtful action"],
    challenges: ["Both can be guarded initially", "May move slowly", "Need action-oriented support"],
    workTips: ["Build trust through transparency", "Leverage shared intuitive understanding", "Add action-oriented team members"],
    specialRelation: null
  },
  horse: {
    description: "Rabbit's methodical pace meets Horse's restless energy. Different rhythms require patience from both sides. Ken prefers planning while you prefer action. Balance planning with spontaneity.",
    strengths: ["Energy + stability balance", "Horse drives momentum", "Rabbit ensures sustainability"],
    challenges: ["Pace mismatch", "Horse may feel restricted", "Rabbit may feel rushed"],
    workTips: ["Give Horse freedom within boundaries", "Build in sprint and plan phases", "Respect different energy styles"],
    specialRelation: null
  },
  goat: {
    description: "Fourth Trine harmony - Rabbit and Goat share the same compatibility group, creating natural understanding. Both value peace, creativity, and gentle approaches. Excellent for creative projects and environments requiring sensitivity.",
    strengths: ["Natural harmony", "Shared creative values", "Peaceful collaboration", "Intuitive understanding"],
    challenges: ["Both may avoid tough decisions", "Need external drive", "Can be too accommodating"],
    workTips: ["Bring in decisive support for hard calls", "Leverage creative synergy", "Set clear deadlines together"],
    specialRelation: 'trine',
    specialLabel: "TRINE HARMONY"
  },
  monkey: {
    description: "Rabbit's diplomacy meets Monkey's quick wit and innovation. Different approaches - Ken is methodical while you're fast and creative. Good for projects needing both careful planning and innovative solutions.",
    strengths: ["Innovation + implementation", "Monkey ideates, Rabbit refines", "Complementary thinking styles"],
    challenges: ["Different paces", "Monkey may seem chaotic", "Rabbit may seem slow"],
    workTips: ["Let Monkey explore ideas freely", "Rabbit curates and prioritizes", "Build iteration cycles"],
    specialRelation: null
  },
  rooster: {
    description: "Traditional CLASH relationship - direct opposition in the Chinese zodiac. Different communication styles create friction - Rabbit is diplomatic and indirect; Rooster is direct and critical. Requires significant effort and mutual respect.",
    strengths: ["Covers all perspectives", "Rooster provides quality focus", "Rabbit provides diplomacy"],
    challenges: ["Communication friction", "Different approaches to feedback", "Trust takes significant time"],
    workTips: ["Establish communication norms early", "Be explicit rather than implicit", "Focus on shared goals", "Use written communication for clarity"],
    specialRelation: 'clash',
    specialLabel: "⚡ CLASH PAIRING"
  },
  dog: {
    description: "SECRET FRIEND (Liu He) - One of the most harmonious pairings in Chinese astrology! Rabbit and Dog form a natural alliance built on mutual trust, loyalty, and complementary strengths. Ken's diplomacy + your loyalty = exceptional team.",
    strengths: ["Deep natural trust", "Complementary values", "Rabbit's tact + Dog's honesty", "Long-term partnership potential"],
    challenges: ["May form exclusive bond", "Both can be protective", "Include others consciously"],
    workTips: ["Leverage this natural alliance", "Model collaboration for others", "Don't become too insular"],
    specialRelation: 'secret_friend',
    specialLabel: "🤝 SECRET ALLY"
  },
  pig: {
    description: "Fourth Trine harmony - Natural allies who share gentle, kind-hearted approaches. Both value sincerity and creating harmonious environments. Excellent for building team culture and stakeholder relationships.",
    strengths: ["Shared values", "Natural trust", "Both generous and supportive", "Create positive environments"],
    challenges: ["Both may avoid conflict", "Can be too trusting", "Need external accountability"],
    workTips: ["Bring in accountability partner", "Leverage shared people skills", "Set clear boundaries with others"],
    specialRelation: 'trine',
    specialLabel: "TRINE HARMONY"
  }
};

// Chinese New Year dates (1920-2030) for accurate zodiac calculation
// Format: 'YYYY': 'MM-DD' (the date CNY falls on)
export const CNY_DATES: Record<number, string> = {
  1920: '02-20', 1921: '02-08', 1922: '01-28', 1923: '02-16', 1924: '02-05',
  1925: '01-24', 1926: '02-13', 1927: '02-02', 1928: '01-23', 1929: '02-10',
  1930: '01-30', 1931: '02-17', 1932: '02-06', 1933: '01-26', 1934: '02-14',
  1935: '02-04', 1936: '01-24', 1937: '02-11', 1938: '01-31', 1939: '02-19',
  1940: '02-08', 1941: '01-27', 1942: '02-15', 1943: '02-05', 1944: '01-25',
  1945: '02-13', 1946: '02-02', 1947: '01-22', 1948: '02-10', 1949: '01-29',
  1950: '02-17', 1951: '02-06', 1952: '01-27', 1953: '02-14', 1954: '02-03',
  1955: '01-24', 1956: '02-12', 1957: '01-31', 1958: '02-18', 1959: '02-08',
  1960: '01-28', 1961: '02-15', 1962: '02-05', 1963: '01-25', 1964: '02-13',
  1965: '02-02', 1966: '01-21', 1967: '02-09', 1968: '01-30', 1969: '02-17',
  1970: '02-06', 1971: '01-27', 1972: '02-15', 1973: '02-03', 1974: '01-23',
  1975: '02-11', 1976: '01-31', 1977: '02-18', 1978: '02-07', 1979: '01-28',
  1980: '02-16', 1981: '02-05', 1982: '01-25', 1983: '02-13', 1984: '02-02',
  1985: '02-20', 1986: '02-09', 1987: '01-29', 1988: '02-17', 1989: '02-06',
  1990: '01-27', 1991: '02-15', 1992: '02-04', 1993: '01-23', 1994: '02-10',
  1995: '01-31', 1996: '02-19', 1997: '02-07', 1998: '01-28', 1999: '02-16',
  2000: '02-05', 2001: '01-24', 2002: '02-12', 2003: '02-01', 2004: '01-22',
  2005: '02-09', 2006: '01-29', 2007: '02-18', 2008: '02-07', 2009: '01-26',
  2010: '02-14', 2011: '02-03', 2012: '01-23', 2013: '02-10', 2014: '01-31',
  2015: '02-19', 2016: '02-08', 2017: '01-28', 2018: '02-16', 2019: '02-05',
  2020: '01-25', 2021: '02-12', 2022: '02-01', 2023: '01-22', 2024: '02-10',
  2025: '01-29', 2026: '02-17', 2027: '02-06', 2028: '01-26', 2029: '02-13',
  2030: '02-03'
};

// Zodiac cycle starting from Rat (year 4 in cycle = Rat)
const ZODIAC_ORDER: ChineseZodiac[] = [
  'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
  'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'
];

// Element cycle (2 years per element)
const ELEMENT_ORDER: ChineseElement[] = ['wood', 'fire', 'earth', 'metal', 'water'];

// Determine Chinese zodiac from birth date
export function getChineseZodiac(year: number, month: number, day: number): {
  animal: ChineseZodiac;
  element: ChineseElement;
} {
  // Check if birth date is before CNY of that year
  const cnyDate = CNY_DATES[year];
  let adjustedYear = year;

  if (cnyDate) {
    const [cnyMonth, cnyDay] = cnyDate.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const cnyDateObj = new Date(year, cnyMonth - 1, cnyDay);

    if (birthDate < cnyDateObj) {
      adjustedYear = year - 1;
    }
  }

  // Calculate animal (12-year cycle, offset from year 4 = Rat)
  const animalIndex = ((adjustedYear - 4) % 12 + 12) % 12;
  const animal = ZODIAC_ORDER[animalIndex];

  // Calculate element (10-year cycle, 2 years per element)
  const elementIndex = Math.floor(((adjustedYear - 4) % 10 + 10) % 10 / 2);
  const element = ELEMENT_ORDER[elementIndex];

  return { animal, element };
}

// Get compatibility score and description for visitor animal
export function getChineseZodiacCompatibility(visitorAnimal: ChineseZodiac) {
  const description = RABBIT_DESCRIPTIONS[visitorAnimal];
  return {
    score: RABBIT_COMPATIBILITY[visitorAnimal],
    info: CHINESE_ZODIAC_INFO[visitorAnimal],
    ...description
  };
}

// Get element name formatted
export function getElementName(element: ChineseElement): string {
  return element.charAt(0).toUpperCase() + element.slice(1);
}
