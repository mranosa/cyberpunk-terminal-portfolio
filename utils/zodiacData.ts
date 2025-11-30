// Western Zodiac Data - Compatibility with Ken (Aries)
// Based on element, modality, and aspect relationships

export type ZodiacSign =
  | 'aries' | 'taurus' | 'gemini' | 'cancer'
  | 'leo' | 'virgo' | 'libra' | 'scorpio'
  | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces';

export interface ZodiacInfo {
  name: string;
  symbol: string;
  element: 'fire' | 'earth' | 'air' | 'water';
  modality: 'cardinal' | 'fixed' | 'mutable';
  dateRange: string;
  traits: string[];
}

export const ZODIAC_INFO: Record<ZodiacSign, ZodiacInfo> = {
  aries: {
    name: 'Aries',
    symbol: '♈',
    element: 'fire',
    modality: 'cardinal',
    dateRange: 'Mar 21 - Apr 19',
    traits: ['Bold', 'Ambitious', 'Energetic', 'Competitive']
  },
  taurus: {
    name: 'Taurus',
    symbol: '♉',
    element: 'earth',
    modality: 'fixed',
    dateRange: 'Apr 20 - May 20',
    traits: ['Reliable', 'Patient', 'Practical', 'Devoted']
  },
  gemini: {
    name: 'Gemini',
    symbol: '♊',
    element: 'air',
    modality: 'mutable',
    dateRange: 'May 21 - Jun 20',
    traits: ['Adaptable', 'Curious', 'Communicative', 'Quick-witted']
  },
  cancer: {
    name: 'Cancer',
    symbol: '♋',
    element: 'water',
    modality: 'cardinal',
    dateRange: 'Jun 21 - Jul 22',
    traits: ['Intuitive', 'Protective', 'Compassionate', 'Loyal']
  },
  leo: {
    name: 'Leo',
    symbol: '♌',
    element: 'fire',
    modality: 'fixed',
    dateRange: 'Jul 23 - Aug 22',
    traits: ['Confident', 'Creative', 'Generous', 'Charismatic']
  },
  virgo: {
    name: 'Virgo',
    symbol: '♍',
    element: 'earth',
    modality: 'mutable',
    dateRange: 'Aug 23 - Sep 22',
    traits: ['Analytical', 'Practical', 'Diligent', 'Detail-oriented']
  },
  libra: {
    name: 'Libra',
    symbol: '♎',
    element: 'air',
    modality: 'cardinal',
    dateRange: 'Sep 23 - Oct 22',
    traits: ['Diplomatic', 'Fair-minded', 'Social', 'Cooperative']
  },
  scorpio: {
    name: 'Scorpio',
    symbol: '♏',
    element: 'water',
    modality: 'fixed',
    dateRange: 'Oct 23 - Nov 21',
    traits: ['Passionate', 'Resourceful', 'Determined', 'Strategic']
  },
  sagittarius: {
    name: 'Sagittarius',
    symbol: '♐',
    element: 'fire',
    modality: 'mutable',
    dateRange: 'Nov 22 - Dec 21',
    traits: ['Optimistic', 'Adventurous', 'Philosophical', 'Freedom-loving']
  },
  capricorn: {
    name: 'Capricorn',
    symbol: '♑',
    element: 'earth',
    modality: 'cardinal',
    dateRange: 'Dec 22 - Jan 19',
    traits: ['Disciplined', 'Responsible', 'Ambitious', 'Practical']
  },
  aquarius: {
    name: 'Aquarius',
    symbol: '♒',
    element: 'air',
    modality: 'fixed',
    dateRange: 'Jan 20 - Feb 18',
    traits: ['Progressive', 'Independent', 'Humanitarian', 'Original']
  },
  pisces: {
    name: 'Pisces',
    symbol: '♓',
    element: 'water',
    modality: 'mutable',
    dateRange: 'Feb 19 - Mar 20',
    traits: ['Intuitive', 'Artistic', 'Compassionate', 'Gentle']
  }
};

// Ken is Aries - Compatibility scores with each sign (0-100)
export const ARIES_COMPATIBILITY: Record<ZodiacSign, number> = {
  aries: 70,      // Same sign - intense but competitive
  taurus: 55,     // Semi-sextile - different pace
  gemini: 85,     // Sextile - air fuels fire
  cancer: 65,     // Square - competing cardinal energy
  leo: 93,        // Trine - fire harmony
  virgo: 70,      // Quincunx - requires adjustment
  libra: 78,      // Opposition - polarity attraction
  scorpio: 50,    // Quincunx - intense friction
  sagittarius: 92,// Trine - fire harmony
  capricorn: 50,  // Square - cardinal clash
  aquarius: 90,   // Sextile - air fuels fire
  pisces: 72      // Semi-sextile - gentle complement
};

// Professional work descriptions for Aries + each sign
export const ARIES_DESCRIPTIONS: Record<ZodiacSign, {
  description: string;
  strengths: string[];
  challenges: string[];
  workTips: string[];
  isSpecialMatch?: 'fire_synergy' | 'square_tension' | 'opposition';
}> = {
  aries: {
    description: "Two Aries working together brings explosive energy and rapid execution. Both are natural initiators who thrive on challenge and competition. The key is channeling competitive instincts toward shared goals rather than each other.",
    strengths: ["Fast decision-making", "High energy projects", "Bold initiatives", "Crisis response"],
    challenges: ["Power struggles", "Impatience with process", "Both want to lead"],
    workTips: ["Define clear ownership areas", "Celebrate wins together", "Take turns leading different initiatives"]
  },
  taurus: {
    description: "Aries' speed meets Taurus' steadiness. This pairing balances bold ideas with practical execution. Ken pushes for action while you ensure nothing is overlooked. Different paces require mutual patience.",
    strengths: ["Vision + execution balance", "Aries starts, Taurus finishes", "Complementary risk tolerance"],
    challenges: ["Pace differences", "Aries may seem impulsive to Taurus", "Taurus may seem slow to Aries"],
    workTips: ["Agree on timelines upfront", "Let Taurus handle quality control", "Aries drives momentum, Taurus ensures sustainability"]
  },
  gemini: {
    description: "Dynamic duo for brainstorming and innovation. Gemini's quick wit and adaptability perfectly complement Aries' drive and initiative. Ideas flow freely and execution happens fast. Great for creative projects.",
    strengths: ["Rapid ideation", "Excellent communication", "Flexible problem-solving", "High energy collaboration"],
    challenges: ["Both may start more than they finish", "Need grounding from others", "Can get distracted"],
    workTips: ["Set concrete milestones", "Document decisions", "Bring in detail-oriented team members for follow-through"]
  },
  cancer: {
    description: "Cardinal square creates productive tension. Both are initiators with different approaches - Aries charges forward while Cancer protects and nurtures. Ken's directness may feel harsh; your caution may feel slow. But together you cover all bases.",
    strengths: ["Covers both action and people needs", "Balanced decision-making", "Aries pushes, Cancer considers impact"],
    challenges: ["Communication style mismatch", "Different conflict approaches", "Aries may overlook emotional factors"],
    workTips: ["Ken should soften direct feedback", "You should voice concerns earlier, not later", "Schedule regular check-ins to align"],
    isSpecialMatch: 'square_tension'
  },
  leo: {
    description: "Two fire signs creating explosive chemistry! Both bring high energy, ambition, and natural leadership. Expect dynamic brainstorming sessions and bold project initiatives. Best when roles are clearly defined to avoid stepping on each other's toes.",
    strengths: ["Mutual inspiration", "High visibility projects", "Charismatic presentation", "Confident execution"],
    challenges: ["Both want spotlight", "Ego management", "Need clear role division"],
    workTips: ["Define distinct domains of ownership", "Publicly celebrate each other's wins", "Let Leo handle stakeholder charm, Aries handles action"],
    isSpecialMatch: 'fire_synergy'
  },
  virgo: {
    description: "Aries brings vision and momentum; Virgo brings precision and quality. Ken will push for speed while you ensure excellence. This can create friction, but the end result is often exceptional - bold ideas executed flawlessly.",
    strengths: ["Quality + speed balance", "Aries sees forest, Virgo sees trees", "Complementary blind spots"],
    challenges: ["Virgo's critique may feel like slowdown", "Aries' rush may feel reckless", "Different standards for 'done'"],
    workTips: ["Agree on quality standards upfront", "Build in review time", "Aries prototypes, Virgo refines"]
  },
  libra: {
    description: "Aries-Libra axis creates natural polarity attraction. Ken leads with action; you lead with diplomacy. Together you balance assertiveness with harmony. Great for projects requiring both drive and stakeholder management.",
    strengths: ["Action + diplomacy balance", "Good cop/bad cop dynamic", "Covers internal and external needs"],
    challenges: ["Decision-making style differs", "Aries may seem aggressive", "Libra may seem indecisive"],
    workTips: ["Let Libra handle negotiations", "Let Aries handle tough calls", "Consult each other before major moves"],
    isSpecialMatch: 'opposition'
  },
  scorpio: {
    description: "Intense pairing with deep potential. Both bring passion and determination, but express it differently. Aries is openly assertive; Scorpio is strategically focused. Trust is essential - once established, this becomes a powerful alliance.",
    strengths: ["Strategic depth + action speed", "Both committed when aligned", "Handle high-stakes well"],
    challenges: ["Trust takes time", "Power dynamics", "Both can be stubborn"],
    workTips: ["Build trust through small wins first", "Be transparent about intentions", "Respect each other's methods"]
  },
  sagittarius: {
    description: "Fire trine creates natural harmony and shared enthusiasm. Both love adventure, challenges, and forward momentum. Expect optimistic energy and ambitious goal-setting. Perfect for innovation, exploration, and big-picture projects.",
    strengths: ["Shared optimism", "Adventure-ready", "Big thinking", "Fast-moving partnership"],
    challenges: ["May overlook details", "Both restless", "Need grounding elements"],
    workTips: ["Include detail-oriented team members", "Document the vision", "Channel enthusiasm into concrete plans"],
    isSpecialMatch: 'fire_synergy'
  },
  capricorn: {
    description: "Cardinal square creates tension but also results. Both are ambitious achievers who want to lead. Aries charges impulsively; Capricorn plans methodically. Competition for authority is common, but when aligned, you're unstoppable.",
    strengths: ["Both highly driven", "Action meets strategy", "Results-oriented"],
    challenges: ["Authority struggles", "Different timelines", "Aries wants fast, Capricorn wants thorough"],
    workTips: ["Define clear decision rights", "Respect different approaches to same goal", "Focus on shared ambition"],
    isSpecialMatch: 'square_tension'
  },
  aquarius: {
    description: "Excellent innovation partnership. Aries brings initiative and drive; Aquarius brings originality and vision. Both value independence and aren't afraid to challenge convention. Great for disruption, transformation, and new ventures.",
    strengths: ["Innovation champions", "Both independent thinkers", "Change-ready", "Unconventional solutions"],
    challenges: ["Both can be stubborn about ideas", "May clash on approach", "Need practical anchors"],
    workTips: ["Debate ideas openly", "Test hypotheses quickly", "Include practical validators"]
  },
  pisces: {
    description: "Aries' fire meets Pisces' water in a steam-generating combination. Ken provides direction and drive; you provide intuition and creativity. Different wavelengths require patience, but the combination of action and vision is powerful.",
    strengths: ["Vision + execution", "Creativity + initiative", "Intuition + action"],
    challenges: ["Communication styles differ", "Aries may seem harsh", "Pisces may seem vague"],
    workTips: ["Give Pisces creative freedom", "Ken should check in on emotional climate", "Translate intuition into action items"]
  }
};

// Determine zodiac sign from birth date
export function getZodiacSign(month: number, day: number): ZodiacSign {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
  return 'pisces'; // Feb 19 - Mar 20
}

// Get compatibility score and description for visitor sign
export function getWesternZodiacCompatibility(visitorSign: ZodiacSign) {
  return {
    score: ARIES_COMPATIBILITY[visitorSign],
    info: ZODIAC_INFO[visitorSign],
    ...ARIES_DESCRIPTIONS[visitorSign]
  };
}
