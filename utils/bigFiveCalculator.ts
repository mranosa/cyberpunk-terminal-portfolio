// Big Five (OCEAN) Compatibility Calculator
// Ken's scores: O:83, C:75, E:71, A:92, N:40

export interface BigFiveScores {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

export interface TraitComparison {
  trait: keyof BigFiveScores;
  traitName: string;
  kenScore: number;
  visitorScore: number;
  gap: number;
  similarity: number;
  insight: string;
  isSignificantGap: boolean;
}

// Ken's Big Five scores
export const KEN_BIG_FIVE: BigFiveScores = {
  openness: 83,
  conscientiousness: 75,
  extraversion: 71,
  agreeableness: 92,
  neuroticism: 40
};

const TRAIT_NAMES: Record<keyof BigFiveScores, string> = {
  openness: 'Openness',
  conscientiousness: 'Conscientiousness',
  extraversion: 'Extraversion',
  agreeableness: 'Agreeableness',
  neuroticism: 'Neuroticism'
};

// Generate work-relevant insight for each trait comparison
function getTraitInsight(trait: keyof BigFiveScores, kenScore: number, visitorScore: number): string {
  const gap = Math.abs(kenScore - visitorScore);
  const kenHigher = kenScore > visitorScore;

  switch (trait) {
    case 'openness':
      if (gap < 15) return 'Both highly creative and open to new ideas';
      if (kenHigher) return 'Ken may push for unconventional approaches; ground ideas in practicality';
      return 'You may introduce fresh perspectives Ken hasn\'t considered';

    case 'conscientiousness':
      if (gap < 15) return 'Similar work organization and follow-through';
      if (kenHigher) return 'Ken is more structured; agree on deadlines early';
      return 'You bring extra rigor; Ken appreciates thoroughness';

    case 'extraversion':
      if (gap < 15) return 'Compatible energy levels for collaboration';
      if (kenHigher) return 'Different energy needs; respect quiet focus time';
      return 'You bring social energy; balance with Ken\'s collaborative style';

    case 'agreeableness':
      if (gap < 15) return 'Similar collaborative and cooperative approach';
      if (kenHigher) return 'Ken is highly accommodating; feel free to push back on ideas';
      return 'Strong harmony focus; great for team dynamics';

    case 'neuroticism':
      if (gap < 15) return 'Both relatively stable under pressure';
      if (kenHigher) return 'Ken may show more stress reactions; you can provide grounding';
      return 'You may need more support during high-pressure periods';
  }
}

// Calculate compatibility for a single trait
function calculateTraitSimilarity(kenScore: number, visitorScore: number): number {
  const gap = Math.abs(kenScore - visitorScore);
  return Math.max(0, 100 - gap);
}

// Calculate overall Big Five compatibility
export function calculateBigFiveCompatibility(visitor: BigFiveScores): {
  overallScore: number;
  traitComparisons: TraitComparison[];
  significantGaps: TraitComparison[];
  summary: string;
} {
  const traits: (keyof BigFiveScores)[] = [
    'openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'
  ];

  const traitComparisons: TraitComparison[] = traits.map(trait => {
    const kenScore = KEN_BIG_FIVE[trait];
    const visitorScore = visitor[trait];
    const gap = Math.abs(kenScore - visitorScore);
    const similarity = calculateTraitSimilarity(kenScore, visitorScore);

    return {
      trait,
      traitName: TRAIT_NAMES[trait],
      kenScore,
      visitorScore,
      gap,
      similarity,
      insight: getTraitInsight(trait, kenScore, visitorScore),
      isSignificantGap: gap > 30
    };
  });

  // Calculate overall score (average of trait similarities)
  const overallScore = Math.round(
    traitComparisons.reduce((sum, tc) => sum + tc.similarity, 0) / traits.length
  );

  // Identify significant gaps (>30 points)
  const significantGaps = traitComparisons.filter(tc => tc.isSignificantGap);

  // Generate summary
  let summary: string;
  if (significantGaps.length === 0) {
    summary = 'Strong Big Five alignment - similar work styles and approaches across all dimensions.';
  } else if (significantGaps.length === 1) {
    summary = `Good overall alignment with one area requiring awareness: ${significantGaps[0].traitName.toLowerCase()}.`;
  } else if (significantGaps.length <= 2) {
    summary = `Moderate alignment with style differences in ${significantGaps.map(g => g.traitName.toLowerCase()).join(' and ')}.`;
  } else {
    summary = 'Different work styles across multiple dimensions - requires intentional communication and role clarity.';
  }

  return {
    overallScore,
    traitComparisons,
    significantGaps,
    summary
  };
}

// Get trait level from score
export function getTraitLevel(score: number): 'high' | 'moderate' | 'low' {
  return score >= 70 ? 'high' : score >= 40 ? 'moderate' : 'low';
}

// Get trait description for display
export function getTraitDescription(trait: keyof BigFiveScores, score: number): string {
  const level = getTraitLevel(score);

  const descriptions: Record<keyof BigFiveScores, Record<string, string>> = {
    openness: {
      high: 'Creative, curious, open to new ideas',
      moderate: 'Balanced between tradition and novelty',
      low: 'Practical, conventional, prefers routine'
    },
    conscientiousness: {
      high: 'Organized, reliable, goal-oriented',
      moderate: 'Flexible with structure when needed',
      low: 'Spontaneous, adaptable, relaxed about deadlines'
    },
    extraversion: {
      high: 'Energetic, talkative, seeks social interaction',
      moderate: 'Comfortable in social and solo settings',
      low: 'Reserved, reflective, prefers quiet environments'
    },
    agreeableness: {
      high: 'Cooperative, trusting, team-oriented',
      moderate: 'Balanced between collaboration and independence',
      low: 'Competitive, skeptical, direct'
    },
    neuroticism: {
      high: 'Emotionally reactive, stress-sensitive',
      moderate: 'Average emotional stability',
      low: 'Calm, emotionally stable, resilient'
    }
  };

  return descriptions[trait][level];
}

// Detailed Big Five analysis with bullet points for rich display
export interface TraitAnalysis {
  summary: string;
  bullets: string[];
}

export const BIG_FIVE_DETAILED: Record<keyof BigFiveScores, {
  name: string;
  high: TraitAnalysis;
  moderate: TraitAnalysis;
  low: TraitAnalysis;
}> = {
  openness: {
    name: 'Openness',
    high: {
      summary: "You're highly creative, intellectually curious, and open to new experiences. You likely:",
      bullets: [
        "Enjoy exploring abstract ideas and concepts",
        "Appreciate art, music, and aesthetics",
        "Have a rich imagination and enjoy daydreaming",
        "Seek out novel experiences and unconventional ideas",
        "Are comfortable with ambiguity and change"
      ]
    },
    moderate: {
      summary: "You balance creativity with practicality, appreciating both new ideas and proven methods. You likely:",
      bullets: [
        "Can adapt to new situations while valuing stability",
        "Appreciate innovation when it serves a clear purpose",
        "Enjoy learning but prefer structured approaches",
        "Are selectively adventurous based on context"
      ]
    },
    low: {
      summary: "You prefer practical, concrete approaches and value tradition and consistency. You likely:",
      bullets: [
        "Focus on proven methods and established procedures",
        "Prefer clear, straightforward solutions",
        "Value stability and predictability in work",
        "Excel at maintaining and improving existing systems"
      ]
    }
  },
  conscientiousness: {
    name: 'Conscientiousness',
    high: {
      summary: "You're highly organized, dependable, and goal-oriented with strong self-discipline. You likely:",
      bullets: [
        "Excel at planning and meeting deadlines consistently",
        "Pay close attention to details and quality",
        "Follow through on commitments reliably",
        "Maintain organized systems and processes",
        "Set ambitious goals and work diligently toward them"
      ]
    },
    moderate: {
      summary: "You balance structure with flexibility, knowing when to plan and when to adapt. You likely:",
      bullets: [
        "Can be organized when needed but remain adaptable",
        "Meet important deadlines while staying flexible on minor ones",
        "Balance detail-orientation with big-picture thinking",
        "Adjust your approach based on the situation"
      ]
    },
    low: {
      summary: "You prefer spontaneity and flexibility over rigid structure. You likely:",
      bullets: [
        "Thrive in dynamic, changing environments",
        "Prefer to keep options open rather than commit early",
        "Excel at improvisation and quick adaptation",
        "Focus on the present moment over long-term planning"
      ]
    }
  },
  extraversion: {
    name: 'Extraversion',
    high: {
      summary: "You're energetic, sociable, and gain energy from interacting with others. You likely:",
      bullets: [
        "Enjoy working in teams and collaborative environments",
        "Are comfortable taking the lead in social situations",
        "Process ideas by talking them through with others",
        "Thrive in fast-paced, interactive settings",
        "Build networks and relationships naturally"
      ]
    },
    moderate: {
      summary: "You're adaptable socially, comfortable both in groups and working independently. You likely:",
      bullets: [
        "Can engage actively in meetings while also enjoying solo work",
        "Balance social energy with need for quiet time",
        "Collaborate well but don't require constant interaction",
        "Adjust your social engagement based on the situation"
      ]
    },
    low: {
      summary: "You prefer quieter environments and gain energy from solitary activities. You likely:",
      bullets: [
        "Excel at deep, focused individual work",
        "Think carefully before speaking in groups",
        "Prefer meaningful one-on-one conversations",
        "Need time alone to recharge after social interactions",
        "Bring thoughtfulness and depth to discussions"
      ]
    }
  },
  agreeableness: {
    name: 'Agreeableness',
    high: {
      summary: "You're highly cooperative, trusting, and focused on maintaining harmony. You likely:",
      bullets: [
        "Prioritize team cohesion and positive relationships",
        "Naturally empathize with others' perspectives",
        "Prefer collaborative problem-solving over competition",
        "Are generous with help and support for colleagues",
        "Seek win-win solutions in conflicts"
      ]
    },
    moderate: {
      summary: "You balance cooperation with assertiveness, adapting your approach to the situation. You likely:",
      bullets: [
        "Can be both collaborative and competitive as needed",
        "Assert your views while remaining open to others",
        "Trust but verify when working with new people",
        "Navigate between team harmony and individual needs"
      ]
    },
    low: {
      summary: "You're direct, competitive, and prioritize results over harmony. You likely:",
      bullets: [
        "Challenge ideas and push for the best outcomes",
        "Are comfortable with conflict when necessary",
        "Make tough decisions without excessive deliberation",
        "Focus on logic and results over feelings",
        "Provide direct, honest feedback"
      ]
    }
  },
  neuroticism: {
    name: 'Neuroticism',
    high: {
      summary: "You're emotionally sensitive and experience stress more intensely, but this drives self-awareness. You likely:",
      bullets: [
        "Are highly attuned to potential problems and risks",
        "Use anxiety as motivation for thorough preparation",
        "Notice subtle changes in team dynamics",
        "Benefit from supportive, stable work environments",
        "May need more time to recover from setbacks"
      ]
    },
    moderate: {
      summary: "You experience a normal range of emotions with reasonable stress resilience. You likely:",
      bullets: [
        "Handle most stressors effectively",
        "Experience worry in high-stakes situations but manage it",
        "Recover from setbacks at a normal pace",
        "Balance emotional awareness with stability"
      ]
    },
    low: {
      summary: "You're emotionally stable, calm under pressure, and resilient to stress. You likely:",
      bullets: [
        "Stay composed in high-pressure situations",
        "Recover quickly from setbacks and failures",
        "Provide a calming presence for your team",
        "Make decisions without being derailed by anxiety",
        "Handle criticism and feedback constructively"
      ]
    }
  }
};

// Get detailed analysis for a trait at a given score
export function getDetailedTraitAnalysis(trait: keyof BigFiveScores, score: number): TraitAnalysis {
  const level = getTraitLevel(score);
  return BIG_FIVE_DETAILED[trait][level];
}
