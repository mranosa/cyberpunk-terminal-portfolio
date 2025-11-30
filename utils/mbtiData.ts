// MBTI Data - Compatibility with Ken (ENFJ)
// Based on cognitive function stacks, Socionics intertype relations, and temperament theory

export type MBTIType =
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export type Temperament = 'NT' | 'NF' | 'SJ' | 'SP';

export interface MBTIInfo {
  type: MBTIType;
  name: string;
  temperament: Temperament;
  functions: string[];
  traits: string[];
}

export const MBTI_INFO: Record<MBTIType, MBTIInfo> = {
  INTJ: {
    type: 'INTJ',
    name: 'The Architect',
    temperament: 'NT',
    functions: ['Ni', 'Te', 'Fi', 'Se'],
    traits: ['Strategic', 'Independent', 'Determined', 'Logical']
  },
  INTP: {
    type: 'INTP',
    name: 'The Logician',
    temperament: 'NT',
    functions: ['Ti', 'Ne', 'Si', 'Fe'],
    traits: ['Analytical', 'Objective', 'Reserved', 'Flexible']
  },
  ENTJ: {
    type: 'ENTJ',
    name: 'The Commander',
    temperament: 'NT',
    functions: ['Te', 'Ni', 'Se', 'Fi'],
    traits: ['Decisive', 'Ambitious', 'Strategic', 'Confident']
  },
  ENTP: {
    type: 'ENTP',
    name: 'The Debater',
    temperament: 'NT',
    functions: ['Ne', 'Ti', 'Fe', 'Si'],
    traits: ['Innovative', 'Strategic', 'Enterprising', 'Outspoken']
  },
  INFJ: {
    type: 'INFJ',
    name: 'The Advocate',
    temperament: 'NF',
    functions: ['Ni', 'Fe', 'Ti', 'Se'],
    traits: ['Insightful', 'Principled', 'Compassionate', 'Private']
  },
  INFP: {
    type: 'INFP',
    name: 'The Mediator',
    temperament: 'NF',
    functions: ['Fi', 'Ne', 'Si', 'Te'],
    traits: ['Idealistic', 'Empathetic', 'Creative', 'Reserved']
  },
  ENFJ: {
    type: 'ENFJ',
    name: 'The Protagonist',
    temperament: 'NF',
    functions: ['Fe', 'Ni', 'Se', 'Ti'],
    traits: ['Charismatic', 'Empathetic', 'Organized', 'Diplomatic']
  },
  ENFP: {
    type: 'ENFP',
    name: 'The Campaigner',
    temperament: 'NF',
    functions: ['Ne', 'Fi', 'Te', 'Si'],
    traits: ['Enthusiastic', 'Creative', 'Sociable', 'Optimistic']
  },
  ISTJ: {
    type: 'ISTJ',
    name: 'The Logistician',
    temperament: 'SJ',
    functions: ['Si', 'Te', 'Fi', 'Ne'],
    traits: ['Responsible', 'Thorough', 'Dependable', 'Traditional']
  },
  ISFJ: {
    type: 'ISFJ',
    name: 'The Defender',
    temperament: 'SJ',
    functions: ['Si', 'Fe', 'Ti', 'Ne'],
    traits: ['Supportive', 'Reliable', 'Patient', 'Observant']
  },
  ESTJ: {
    type: 'ESTJ',
    name: 'The Executive',
    temperament: 'SJ',
    functions: ['Te', 'Si', 'Ne', 'Fi'],
    traits: ['Organized', 'Logical', 'Assertive', 'Practical']
  },
  ESFJ: {
    type: 'ESFJ',
    name: 'The Consul',
    temperament: 'SJ',
    functions: ['Fe', 'Si', 'Ne', 'Ti'],
    traits: ['Caring', 'Sociable', 'Traditional', 'Loyal']
  },
  ISTP: {
    type: 'ISTP',
    name: 'The Virtuoso',
    temperament: 'SP',
    functions: ['Ti', 'Se', 'Ni', 'Fe'],
    traits: ['Practical', 'Observant', 'Analytical', 'Reserved']
  },
  ISFP: {
    type: 'ISFP',
    name: 'The Adventurer',
    temperament: 'SP',
    functions: ['Fi', 'Se', 'Ni', 'Te'],
    traits: ['Gentle', 'Sensitive', 'Helpful', 'Flexible']
  },
  ESTP: {
    type: 'ESTP',
    name: 'The Entrepreneur',
    temperament: 'SP',
    functions: ['Se', 'Ti', 'Fe', 'Ni'],
    traits: ['Energetic', 'Pragmatic', 'Observant', 'Direct']
  },
  ESFP: {
    type: 'ESFP',
    name: 'The Entertainer',
    temperament: 'SP',
    functions: ['Se', 'Fi', 'Te', 'Ni'],
    traits: ['Spontaneous', 'Energetic', 'Friendly', 'Playful']
  }
};

// Ken is ENFJ - Compatibility scores with each type (0-100)
export const ENFJ_COMPATIBILITY: Record<MBTIType, number> = {
  INTJ: 68,   // Different but complementary
  INTP: 92,   // GOLDEN PAIR - complementary functions
  ENTJ: 78,   // Both leaders, potential friction
  ENTP: 75,   // Good energy, different decision styles
  INFJ: 90,   // Same quadra, deep understanding
  INFP: 86,   // Strong connection, shared NF values
  ENFJ: 82,   // Same type, understand each other
  ENFP: 82,   // Same temperament, great energy
  ISTJ: 35,   // CONFLICT - opposite functions
  ISFJ: 72,   // Shared Fe, different focus
  ESTJ: 38,   // High effort required
  ESFJ: 75,   // Same dominant Fe
  ISTP: 90,   // DUAL - complementary functions
  ISFP: 68,   // Different approaches
  ESTP: 35,   // Challenging pairing
  ESFP: 62    // Different wavelengths
};

// Special match types
export type SpecialMBTIMatch = 'golden_pair' | 'dual' | 'same_quadra' | 'conflict' | 'high_effort' | null;

export function getSpecialMBTIMatch(type: MBTIType): SpecialMBTIMatch {
  switch (type) {
    case 'INTP': return 'golden_pair';
    case 'ISTP': return 'dual';
    case 'INFJ': return 'same_quadra';
    case 'ISTJ':
    case 'ESTP': return 'conflict';
    case 'ESTJ': return 'high_effort';
    default: return null;
  }
}

// Professional work descriptions for ENFJ + each type
export const ENFJ_DESCRIPTIONS: Record<MBTIType, {
  description: string;
  strengths: string[];
  challenges: string[];
  workTips: string[];
  specialMatch: SpecialMBTIMatch;
  specialLabel?: string;
}> = {
  INTJ: {
    description: "ENFJ's warmth meets INTJ's strategic depth. Ken focuses on people and team dynamics while you focus on systems and long-term vision. Together you cover both the human and strategic elements. Mutual respect is key.",
    strengths: ["Vision + people balance", "INTJ provides strategy, ENFJ ensures buy-in", "Both future-oriented"],
    challenges: ["Different communication styles", "INTJ may seem cold", "ENFJ may seem unfocused"],
    workTips: ["Schedule regular check-ins", "Respect INTJ's need for deep work", "Ken handles stakeholder comms, INTJ handles architecture"],
    specialMatch: null
  },
  INTP: {
    description: "EXCEPTIONAL SYNERGY - Classic 'Golden Pair' combination! ENFJ's people leadership + INTP's analytical depth = powerful professional pairing. Ken drives vision and team morale while you ensure logical rigor and innovative solutions. Complementary blind spots make this standout.",
    strengths: ["Complementary functions", "ENFJ inspires, INTP analyzes", "Cover each other's blind spots", "Deep intellectual connection"],
    challenges: ["Different social needs", "INTP may need more alone time", "Communication pace differs"],
    workTips: ["Let INTP explore ideas freely before structure", "Ken handles external communications", "Async communication works well", "Celebrate INTP's contributions publicly"],
    specialMatch: 'golden_pair',
    specialLabel: "🏆 GOLDEN PAIR"
  },
  ENTJ: {
    description: "Two natural leaders with different styles. Ken leads through inspiration and connection; you lead through strategy and decisiveness. Potential for power dynamics, but when roles are clear, you're an unstoppable executive team.",
    strengths: ["Both big-picture thinkers", "Action-oriented", "Complementary leadership styles"],
    challenges: ["Both want to lead", "Different decision approaches", "Need clear role division"],
    workTips: ["Define distinct domains clearly", "Ken handles team culture, ENTJ handles strategy execution", "Regular alignment on priorities"],
    specialMatch: null
  },
  ENTP: {
    description: "High energy pairing with great brainstorming potential. Ken provides people focus while you provide innovative ideas. Both enjoy discussion and debate. Good for creative projects and problem-solving sessions.",
    strengths: ["Energetic collaboration", "Idea generation", "Both adaptable and quick-thinking"],
    challenges: ["Both may start more than finish", "Different decision criteria (values vs logic)", "Need external structure"],
    workTips: ["Set clear milestones", "Debate ideas but commit to decisions", "Include detail-oriented team members"],
    specialMatch: null
  },
  INFJ: {
    description: "Same Quadra (Beta NF) - Deep natural understanding and shared values. Both Ni-Fe oriented, creating intuitive alignment. Ken is more externally focused while you provide introspective depth. Powerful combination for meaningful work.",
    strengths: ["Deep intuitive understanding", "Shared values and vision", "Complementary introvert/extrovert dynamic"],
    challenges: ["Both may over-accommodate", "Need external action catalyst", "Can get stuck in planning"],
    workTips: ["Leverage shared intuition", "INFJ provides depth, ENFJ provides reach", "Set action deadlines together"],
    specialMatch: 'same_quadra',
    specialLabel: "SAME QUADRA"
  },
  INFP: {
    description: "Strong NF connection with shared idealism. Ken's organizational drive complements your creative authenticity. Both care deeply about meaningful work. You bring depth of feeling; Ken brings execution capability.",
    strengths: ["Shared idealism", "INFP creativity + ENFJ action", "Values-aligned", "Supportive dynamic"],
    challenges: ["INFP may need more autonomy", "Different pace preferences", "ENFJ may seem pushy"],
    workTips: ["Give INFP creative freedom", "Ken provides structure without micromanaging", "Respect different working styles"],
    specialMatch: null
  },
  ENFJ: {
    description: "Same type - instant understanding and shared approach. Both natural people leaders who value harmony and development. Risk of competing for the same space, but mutual appreciation is high. Great for collaborative leadership.",
    strengths: ["Instant rapport", "Shared values and methods", "Both team-focused", "Natural collaboration"],
    challenges: ["Similar blind spots", "May compete for same role", "Both may over-commit"],
    workTips: ["Define distinct responsibilities", "Support each other's initiatives", "Watch for shared blind spots"],
    specialMatch: null
  },
  ENFP: {
    description: "Same temperament (NF) with great energy and creativity. Both enthusiastic and people-oriented. Ken provides more structure while you provide more spontaneity. Fun, engaging collaboration with shared optimism.",
    strengths: ["High energy pairing", "Creative and optimistic", "Both people-focused", "Idea-rich discussions"],
    challenges: ["Both may overcommit", "Need grounding elements", "May avoid practical details"],
    workTips: ["Include practical validators", "Set concrete milestones", "Balance enthusiasm with execution"],
    specialMatch: null
  },
  ISTJ: {
    description: "CHALLENGING PAIRING - Opposite cognitive functions create fundamentally different worldviews. Ken leads with people and intuition; you lead with process and facts. Significant effort required, but diverse perspectives can be valuable.",
    strengths: ["Covers all perspectives", "ISTJ provides rigor and reliability", "ENFJ provides vision and buy-in"],
    challenges: ["Fundamentally different approaches", "Communication style mismatch", "Decision-making friction"],
    workTips: ["Be explicit about expectations", "Put agreements in writing", "Respect each other's expertise domains", "Build trust through small wins"],
    specialMatch: 'conflict',
    specialLabel: "⚠️ HIGH EFFORT REQUIRED"
  },
  ISFJ: {
    description: "Shared Fe creates natural rapport around people care. Ken focuses outward and future; you focus inward and traditions. Good balance of innovation and stability. Both value team harmony.",
    strengths: ["Shared people-focus", "ISFJ provides stability, ENFJ provides direction", "Mutual respect for harmony"],
    challenges: ["Different change appetites", "ISFJ may resist Ken's pace", "Different future-orientation"],
    workTips: ["Respect ISFJ's need for stability", "Introduce change gradually", "Leverage shared Fe understanding"],
    specialMatch: null
  },
  ESTJ: {
    description: "HIGH EFFORT PAIRING - Both are organized leaders but with very different priorities. Ken focuses on people development and values; you focus on process efficiency and results. Can create productive tension when aligned on goals.",
    strengths: ["Both action-oriented", "ESTJ execution + ENFJ vision", "Complementary when aligned"],
    challenges: ["Different leadership philosophies", "Values vs efficiency tension", "Communication style gaps"],
    workTips: ["Focus on shared goals", "ESTJ handles process, ENFJ handles people", "Regular alignment sessions", "Respect different priorities"],
    specialMatch: 'high_effort',
    specialLabel: "⚠️ HIGH EFFORT REQUIRED"
  },
  ESFJ: {
    description: "Same dominant function (Fe) creates natural understanding around people and harmony. Ken is more future-focused while you're more tradition-focused. Great for team building and stakeholder management.",
    strengths: ["Shared Fe understanding", "Both people-oriented", "Natural collaboration on team issues"],
    challenges: ["May both avoid tough decisions", "Different time orientations", "Similar blind spots"],
    workTips: ["Leverage shared people skills", "Bring in Te-types for tough calls", "Balance tradition with innovation"],
    specialMatch: null
  },
  ISTP: {
    description: "DUAL RELATIONSHIP (Socionics) - Complementary cognitive functions create excellent balance. Ken provides vision and people leadership; you provide tactical execution and practical solutions. Each fills what the other lacks.",
    strengths: ["Complementary functions", "ISTP action + ENFJ vision", "Cover each other's blind spots", "Practical + visionary balance"],
    challenges: ["Very different communication styles", "ISTP may seem detached", "Different social needs"],
    workTips: ["Respect ISTP's independent work style", "Ken handles external comms", "Value ISTP's practical contributions", "Give space while staying connected"],
    specialMatch: 'dual',
    specialLabel: "COMPLEMENTARY FUNCTIONS"
  },
  ISFP: {
    description: "Different approaches but shared interest in people and values. Ken is more outwardly structured while you're more inwardly creative. Both care about authenticity. Good for creative work with heart.",
    strengths: ["Values alignment", "ISFP creativity + ENFJ execution", "Both care about authenticity"],
    challenges: ["Different energy levels", "ISFP may need more space", "Different pace preferences"],
    workTips: ["Give ISFP creative autonomy", "Don't over-schedule ISFP", "Appreciate different expressions of care"],
    specialMatch: null
  },
  ESTP: {
    description: "CHALLENGING PAIRING - Very different orientations create significant friction. Ken focuses on people development and future vision; you focus on immediate action and practical results. Can work with clear role separation.",
    strengths: ["ESTP action + ENFJ vision", "Covers tactical and strategic", "Both energetic"],
    challenges: ["Different decision-making", "Communication style clash", "Values vs pragmatism tension"],
    workTips: ["Define clear swim lanes", "Respect different strengths", "ESTP handles immediate, ENFJ handles long-term", "Build trust through action"],
    specialMatch: 'conflict',
    specialLabel: "⚠️ HIGH EFFORT REQUIRED"
  },
  ESFP: {
    description: "Different wavelengths but both people-oriented. Ken is more planned and future-focused; you're more spontaneous and present-focused. Can bring balance if mutual respect is established.",
    strengths: ["Both sociable", "ESFP brings fun, ENFJ brings purpose", "Good client-facing combination"],
    challenges: ["Different planning approaches", "ESFP may seem unfocused", "Different depth of engagement"],
    workTips: ["Appreciate ESFP's energy", "Set flexible milestones", "Let ESFP handle spontaneous situations"],
    specialMatch: null
  }
};

// Get compatibility score and description for visitor type
export function getMBTICompatibility(visitorType: MBTIType) {
  return {
    score: ENFJ_COMPATIBILITY[visitorType],
    info: MBTI_INFO[visitorType],
    ...ENFJ_DESCRIPTIONS[visitorType]
  };
}

// Get temperament description
export function getTemperamentDescription(temperament: Temperament): string {
  switch (temperament) {
    case 'NT': return 'Rational - Strategic, logical, knowledge-seeking';
    case 'NF': return 'Idealist - Diplomatic, empathetic, identity-seeking';
    case 'SJ': return 'Guardian - Reliable, traditional, security-seeking';
    case 'SP': return 'Artisan - Adaptable, practical, experience-seeking';
  }
}
