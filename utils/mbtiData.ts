// MBTI Data - Compatibility with Ken (ENFJ-A)
// Based on cognitive function stacks, Socionics intertype relations, and temperament theory
// Includes Identity dimension (-A/-T) from 16personalities framework

export type MBTIBaseType =
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

// Keep MBTIType as alias for backwards compatibility
export type MBTIType = MBTIBaseType;

// Identity dimension: Assertive (-A) or Turbulent (-T)
// This is the 5th personality dimension from 16personalities, mapping to Neuroticism in Big Five
export type MBTIIdentity = 'A' | 'T';

// Full MBTI type with identity (e.g., "ENFJ-A", "INTP-T")
export type MBTIFullType = `${MBTIBaseType}-${MBTIIdentity}`;

export type Temperament = 'NT' | 'NF' | 'SJ' | 'SP';

// Identity (Assertive vs Turbulent) information
export interface IdentityInfo {
  code: MBTIIdentity;
  label: string;
  traits: string[];
  description: string;
  workStyle: string;
  stressResponse: string;
}

export const IDENTITY_INFO: Record<MBTIIdentity, IdentityInfo> = {
  A: {
    code: 'A',
    label: 'Assertive',
    traits: ['Self-assured', 'Stress-resilient', 'Confident', 'Decisive', 'Even-tempered'],
    description: 'Self-assured and resistant to stress. Refuses to worry too much and moves forward with confidence.',
    workStyle: 'Makes decisions quickly and confidently. Maintains composure under pressure and focuses on solutions rather than dwelling on problems.',
    stressResponse: 'Remains calm and collected. Less likely to experience anxiety or second-guess decisions.'
  },
  T: {
    code: 'T',
    label: 'Turbulent',
    traits: ['Perfectionist', 'Self-aware', 'Detail-oriented', 'Achievement-driven', 'Thorough'],
    description: 'Success-driven with high standards. Self-conscious and sensitive to stress, but uses it as fuel for improvement.',
    workStyle: 'Strives for excellence and catches details others might miss. Highly motivated to improve and willing to put in extra effort.',
    stressResponse: 'More affected by stress but channels it into motivation. May dwell on outcomes but uses reflection for growth.'
  }
};

// Ken's identity is Assertive
export const KEN_IDENTITY: MBTIIdentity = 'A';
export const KEN_FULL_TYPE: MBTIFullType = 'ENFJ-A';

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

// Get identity compatibility description (Ken is Assertive)
export function getIdentityCompatibility(visitorIdentity: MBTIIdentity): {
  match: 'same' | 'different';
  description: string;
  workDynamic: string;
} {
  if (visitorIdentity === 'A') {
    return {
      match: 'same',
      description: 'Both Assertive - Shared confidence and stress resilience creates a decisive, action-oriented dynamic.',
      workDynamic: 'Quick decision-making, minimal second-guessing. May need to ensure thoroughness in detail work.'
    };
  } else {
    return {
      match: 'different',
      description: 'Assertive + Turbulent - Complementary balance of confidence and perfectionism.',
      workDynamic: 'Ken provides steady confidence while you catch details and drive improvement. Good balance of speed and quality.'
    };
  }
}

// Format full MBTI type string
export function formatFullMBTIType(baseType: MBTIBaseType, identity: MBTIIdentity): MBTIFullType {
  return `${baseType}-${identity}` as MBTIFullType;
}

// Detailed MBTI analysis with bullet points for rich display
export interface MBTIDetailedAnalysis {
  summary: string;
  bullets: string[];
  cognitiveStack: string;
  professionalStrengths: string[];
}

export const MBTI_DETAILED: Record<MBTIBaseType, MBTIDetailedAnalysis> = {
  INTJ: {
    summary: "The Architect - Strategic masterminds who see possibilities others miss. You likely:",
    bullets: [
      "Excel at long-term strategic planning and system design",
      "Have high standards and expect competence from yourself and others",
      "Prefer working independently on complex problems",
      "Value efficiency and logical solutions over tradition",
      "Are determined to achieve your goals regardless of obstacles"
    ],
    cognitiveStack: "Ni-Te-Fi-Se: Lead with vision, execute with logic",
    professionalStrengths: ["Strategic planning", "Systems architecture", "Independent research", "Process optimization"]
  },
  INTP: {
    summary: "The Logician - Analytical innovators who love solving complex problems. You likely:",
    bullets: [
      "Enjoy diving deep into theoretical and abstract concepts",
      "Analyze problems from multiple angles before deciding",
      "Value precision and accuracy in your work",
      "Prefer intellectual autonomy and self-directed learning",
      "Generate creative solutions through logical analysis"
    ],
    cognitiveStack: "Ti-Ne-Si-Fe: Lead with logic, explore with intuition",
    professionalStrengths: ["Problem-solving", "Technical analysis", "Research", "Innovation"]
  },
  ENTJ: {
    summary: "The Commander - Natural leaders who drive toward ambitious goals. You likely:",
    bullets: [
      "Take charge and organize people toward objectives",
      "Make quick, confident decisions under pressure",
      "Set high standards and expect results",
      "Excel at strategic thinking and resource allocation",
      "Challenge inefficiency and drive continuous improvement"
    ],
    cognitiveStack: "Te-Ni-Se-Fi: Lead with efficiency, guided by vision",
    professionalStrengths: ["Executive leadership", "Strategic execution", "Team building", "Crisis management"]
  },
  ENTP: {
    summary: "The Debater - Innovative thinkers who love exploring new possibilities. You likely:",
    bullets: [
      "Generate creative ideas and challenge conventional thinking",
      "Enjoy intellectual debates and exploring multiple perspectives",
      "Adapt quickly to changing situations and new information",
      "Excel at entrepreneurial and startup environments",
      "See connections others miss and identify opportunities"
    ],
    cognitiveStack: "Ne-Ti-Fe-Si: Lead with possibilities, analyze with logic",
    professionalStrengths: ["Innovation", "Entrepreneurship", "Strategic consulting", "Problem reframing"]
  },
  INFJ: {
    summary: "The Advocate - Insightful idealists guided by strong values. You likely:",
    bullets: [
      "Have deep insight into people's motivations and emotions",
      "Are driven by a desire to help others and make a difference",
      "Think deeply about meaning, purpose, and the future",
      "Prefer meaningful work that aligns with your values",
      "Balance idealism with practical implementation"
    ],
    cognitiveStack: "Ni-Fe-Ti-Se: Lead with vision, connect with empathy",
    professionalStrengths: ["Counseling", "Strategic HR", "Writing", "Mission-driven leadership"]
  },
  INFP: {
    summary: "The Mediator - Creative idealists guided by personal values. You likely:",
    bullets: [
      "Are deeply committed to your personal values and authenticity",
      "Express yourself creatively through art, writing, or other mediums",
      "Empathize deeply with others' experiences and emotions",
      "Seek meaningful work that makes a positive difference",
      "Value depth and genuine connection over surface-level interaction"
    ],
    cognitiveStack: "Fi-Ne-Si-Te: Lead with values, explore with imagination",
    professionalStrengths: ["Creative work", "Counseling", "Writing", "Values-based advocacy"]
  },
  ENFJ: {
    summary: "The Protagonist - Charismatic leaders who inspire others toward shared goals. You likely:",
    bullets: [
      "Have a natural ability to understand and motivate people",
      "Lead through inspiration and genuine care for others",
      "Excel at building consensus and resolving conflicts",
      "Organize people and resources toward meaningful objectives",
      "Balance vision with practical action steps"
    ],
    cognitiveStack: "Fe-Ni-Se-Ti: Lead with harmony, guided by intuition",
    professionalStrengths: ["Team leadership", "Mentoring", "Conflict resolution", "Change management"]
  },
  ENFP: {
    summary: "The Campaigner - Enthusiastic innovators who inspire creativity in others. You likely:",
    bullets: [
      "Generate enthusiasm and energy for new ideas",
      "Connect easily with diverse people and perspectives",
      "See potential and possibilities in people and situations",
      "Champion causes you believe in with passion",
      "Bring creativity and optimism to every project"
    ],
    cognitiveStack: "Ne-Fi-Te-Si: Lead with possibility, guided by values",
    professionalStrengths: ["Creative direction", "Marketing", "Coaching", "Culture building"]
  },
  ISTJ: {
    summary: "The Logistician - Reliable executors who uphold standards and traditions. You likely:",
    bullets: [
      "Follow through on commitments with exceptional reliability",
      "Maintain high standards for quality and accuracy",
      "Value established procedures and proven methods",
      "Excel at organizing information and maintaining systems",
      "Provide stability and dependability to any team"
    ],
    cognitiveStack: "Si-Te-Fi-Ne: Lead with experience, execute with logic",
    professionalStrengths: ["Quality assurance", "Compliance", "Project management", "Operations"]
  },
  ISFJ: {
    summary: "The Defender - Dedicated protectors who care deeply about others. You likely:",
    bullets: [
      "Remember details about people and their needs",
      "Provide reliable, consistent support to your team",
      "Value tradition while caring for practical needs",
      "Work diligently behind the scenes to help others succeed",
      "Create warm, supportive environments for collaboration"
    ],
    cognitiveStack: "Si-Fe-Ti-Ne: Lead with care, grounded in experience",
    professionalStrengths: ["Team support", "Healthcare", "Customer service", "Administrative excellence"]
  },
  ESTJ: {
    summary: "The Executive - Efficient organizers who get things done. You likely:",
    bullets: [
      "Take charge and organize resources for maximum efficiency",
      "Value clear hierarchies and defined responsibilities",
      "Make decisions quickly based on facts and logic",
      "Hold yourself and others to high standards of performance",
      "Implement systems that ensure consistent results"
    ],
    cognitiveStack: "Te-Si-Ne-Fi: Lead with efficiency, grounded in experience",
    professionalStrengths: ["Operations management", "Process implementation", "Team direction", "Quality control"]
  },
  ESFJ: {
    summary: "The Consul - Caring organizers who create harmony and support others. You likely:",
    bullets: [
      "Create warm, supportive environments for your team",
      "Remember and honor commitments to others",
      "Organize events and activities that bring people together",
      "Provide practical help and emotional support",
      "Value tradition and maintain important relationships"
    ],
    cognitiveStack: "Fe-Si-Ne-Ti: Lead with harmony, grounded in tradition",
    professionalStrengths: ["Event coordination", "HR", "Customer relations", "Team building"]
  },
  ISTP: {
    summary: "The Virtuoso - Practical problem-solvers who master tools and systems. You likely:",
    bullets: [
      "Troubleshoot and fix problems efficiently",
      "Stay calm and logical in crisis situations",
      "Prefer hands-on work over theoretical discussion",
      "Learn by doing and experimenting",
      "Value efficiency and practical solutions"
    ],
    cognitiveStack: "Ti-Se-Ni-Fe: Lead with logic, grounded in action",
    professionalStrengths: ["Technical troubleshooting", "Crisis response", "Engineering", "Tactical execution"]
  },
  ISFP: {
    summary: "The Adventurer - Gentle artists who express themselves through action. You likely:",
    bullets: [
      "Express your values through your work and actions",
      "Are sensitive to beauty and aesthetics in your environment",
      "Prefer flexibility and dislike rigid schedules",
      "Show care through practical help and actions",
      "Value authenticity and personal freedom"
    ],
    cognitiveStack: "Fi-Se-Ni-Te: Lead with values, expressed through action",
    professionalStrengths: ["Design", "Healthcare", "Artistic creation", "Hands-on care"]
  },
  ESTP: {
    summary: "The Entrepreneur - Bold pragmatists who thrive in action. You likely:",
    bullets: [
      "Respond quickly and effectively to immediate challenges",
      "Read situations and people with accuracy",
      "Take calculated risks for potential rewards",
      "Prefer action over extended planning",
      "Negotiate and persuade with natural charisma"
    ],
    cognitiveStack: "Se-Ti-Fe-Ni: Lead with action, analyze on the fly",
    professionalStrengths: ["Sales", "Crisis management", "Negotiation", "Entrepreneurship"]
  },
  ESFP: {
    summary: "The Entertainer - Spontaneous performers who bring joy to their work. You likely:",
    bullets: [
      "Bring energy and enthusiasm to any environment",
      "Connect easily with people from all backgrounds",
      "Prefer hands-on experience over theoretical planning",
      "Adapt quickly to changing situations",
      "Make work fun and engaging for everyone"
    ],
    cognitiveStack: "Se-Fi-Te-Ni: Lead with experience, guided by values",
    professionalStrengths: ["Performance", "Event hosting", "Sales", "Customer engagement"]
  }
};

// Parse full MBTI type string
export function parseFullMBTIType(fullType: string): { baseType: MBTIBaseType; identity: MBTIIdentity } | null {
  const match = fullType.match(/^([A-Z]{4})-([AT])$/);
  if (!match) return null;

  const baseType = match[1] as MBTIBaseType;
  const identity = match[2] as MBTIIdentity;

  // Validate base type
  if (!MBTI_INFO[baseType]) return null;

  return { baseType, identity };
}
