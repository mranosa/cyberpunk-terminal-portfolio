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

// Get trait description for display
export function getTraitDescription(trait: keyof BigFiveScores, score: number): string {
  const level = score >= 70 ? 'high' : score >= 40 ? 'moderate' : 'low';

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
