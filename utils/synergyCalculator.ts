// Main Synergy Calculator - Combines all four systems
import { getZodiacSign, getWesternZodiacCompatibility, type ZodiacSign } from './zodiacData';
import { getChineseZodiac, getChineseZodiacCompatibility, getElementName, type ChineseZodiac, type ChineseElement } from './chineseZodiacData';
import { getMBTICompatibility, getSpecialMBTIMatch, type MBTIType } from './mbtiData';
import { calculateBigFiveCompatibility, type BigFiveScores, type TraitComparison } from './bigFiveCalculator';

// Weights for each system
const WEIGHTS = {
  bigFive: 0.35,
  mbti: 0.25,
  westernZodiac: 0.20,
  chineseZodiac: 0.20
};

// Synergy level thresholds
export type SynergyLevel = 'neural_sync' | 'high_bandwidth' | 'connected' | 'static' | 'firewall';

export interface SynergyLevelInfo {
  level: SynergyLevel;
  label: string;
  color: string;
  description: string;
}

export function getSynergyLevel(score: number): SynergyLevelInfo {
  if (score >= 90) {
    return {
      level: 'neural_sync',
      label: 'NEURAL SYNC',
      color: 'cyan',
      description: 'Exceptional alignment across all dimensions. Natural collaboration potential.'
    };
  }
  if (score >= 70) {
    return {
      level: 'high_bandwidth',
      label: 'HIGH BANDWIDTH',
      color: 'green',
      description: 'Strong compatibility with complementary strengths. Great collaboration outlook.'
    };
  }
  if (score >= 50) {
    return {
      level: 'connected',
      label: 'CONNECTED',
      color: 'yellow',
      description: 'Solid foundation for collaboration. Some areas may need conscious attention.'
    };
  }
  if (score >= 30) {
    return {
      level: 'static',
      label: 'STATIC',
      color: 'orange',
      description: 'Different styles require intentional bridging. Clear communication is key.'
    };
  }
  return {
    level: 'firewall',
    label: 'FIREWALL',
    color: 'red',
    description: 'Significant differences to navigate. Success requires mutual effort and clear roles.'
  };
}

// Input for synergy calculation
export interface SynergyInput {
  birthDate: Date;
  mbtiType: MBTIType;
  bigFive: BigFiveScores;
}

// Complete synergy result
export interface SynergyResult {
  overallScore: number;
  synergyLevel: SynergyLevelInfo;

  westernZodiac: {
    sign: ZodiacSign;
    score: number;
    weightedScore: number;
    description: string;
    strengths: string[];
    challenges: string[];
    workTips: string[];
    isSpecialMatch?: string;
  };

  chineseZodiac: {
    animal: ChineseZodiac;
    element: ChineseElement;
    elementName: string;
    score: number;
    weightedScore: number;
    description: string;
    strengths: string[];
    challenges: string[];
    workTips: string[];
    specialRelation: string | null;
    specialLabel?: string;
  };

  mbti: {
    type: MBTIType;
    typeName: string;
    score: number;
    weightedScore: number;
    description: string;
    strengths: string[];
    challenges: string[];
    workTips: string[];
    specialMatch: string | null;
    specialLabel?: string;
  };

  bigFive: {
    scores: BigFiveScores;
    score: number;
    weightedScore: number;
    traitComparisons: TraitComparison[];
    significantGaps: TraitComparison[];
    summary: string;
  };

  // Notable highlights (best/worst matches)
  highlights: {
    type: 'best' | 'worst';
    system: string;
    label: string;
    description: string;
  }[];
}

// Main calculation function
export function calculateSynergy(input: SynergyInput): SynergyResult {
  const { birthDate, mbtiType, bigFive } = input;

  // Extract date components
  const year = birthDate.getFullYear();
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();

  // Calculate each system
  const westernSign = getZodiacSign(month, day);
  const westernCompat = getWesternZodiacCompatibility(westernSign);

  const { animal: chineseAnimal, element: chineseElement } = getChineseZodiac(year, month, day);
  const chineseCompat = getChineseZodiacCompatibility(chineseAnimal);

  const mbtiCompat = getMBTICompatibility(mbtiType);
  const mbtiSpecialMatch = getSpecialMBTIMatch(mbtiType);

  const bigFiveResult = calculateBigFiveCompatibility(bigFive);

  // Calculate weighted scores
  const westernWeighted = westernCompat.score * WEIGHTS.westernZodiac;
  const chineseWeighted = chineseCompat.score * WEIGHTS.chineseZodiac;
  const mbtiWeighted = mbtiCompat.score * WEIGHTS.mbti;
  const bigFiveWeighted = bigFiveResult.overallScore * WEIGHTS.bigFive;

  // Overall score
  const overallScore = Math.round(westernWeighted + chineseWeighted + mbtiWeighted + bigFiveWeighted);

  // Collect highlights
  const highlights: SynergyResult['highlights'] = [];

  // Best matches
  if (mbtiSpecialMatch === 'golden_pair') {
    highlights.push({
      type: 'best',
      system: 'MBTI',
      label: '🏆 GOLDEN PAIR',
      description: 'ENFJ + INTP is one of the most complementary MBTI pairings'
    });
  }
  if (mbtiSpecialMatch === 'dual') {
    highlights.push({
      type: 'best',
      system: 'MBTI',
      label: 'COMPLEMENTARY FUNCTIONS',
      description: 'Dual relationship - each fills what the other lacks'
    });
  }
  if (chineseCompat.specialRelation === 'secret_friend') {
    highlights.push({
      type: 'best',
      system: 'Chinese Zodiac',
      label: '🤝 SECRET ALLY',
      description: 'Rabbit and Dog form one of the most harmonious Chinese zodiac pairings'
    });
  }
  if (chineseCompat.specialRelation === 'trine') {
    highlights.push({
      type: 'best',
      system: 'Chinese Zodiac',
      label: 'TRINE HARMONY',
      description: 'Same trine group - natural understanding and shared values'
    });
  }
  if (westernCompat.isSpecialMatch === 'fire_synergy') {
    highlights.push({
      type: 'best',
      system: 'Western Zodiac',
      label: '🔥 FIRE SYNERGY',
      description: 'Same fire element - high energy and mutual inspiration'
    });
  }

  // Worst matches
  if (mbtiSpecialMatch === 'conflict' || mbtiSpecialMatch === 'high_effort') {
    highlights.push({
      type: 'worst',
      system: 'MBTI',
      label: '⚠️ HIGH EFFORT REQUIRED',
      description: 'Different cognitive functions - requires intentional bridging'
    });
  }
  if (chineseCompat.specialRelation === 'clash') {
    highlights.push({
      type: 'worst',
      system: 'Chinese Zodiac',
      label: '⚡ CLASH PAIRING',
      description: 'Direct opposition - requires conscious bridge-building'
    });
  }
  if (chineseCompat.specialRelation === 'punishment' || chineseCompat.specialRelation === 'harm') {
    highlights.push({
      type: 'worst',
      system: 'Chinese Zodiac',
      label: 'FRICTION ZONE',
      description: 'Traditional friction relationship - clear communication essential'
    });
  }
  if (westernCompat.isSpecialMatch === 'square_tension') {
    highlights.push({
      type: 'worst',
      system: 'Western Zodiac',
      label: 'SQUARE TENSION',
      description: 'Cardinal square - competing energies that can create productive tension'
    });
  }
  if (bigFiveResult.significantGaps.length >= 2) {
    highlights.push({
      type: 'worst',
      system: 'Big Five',
      label: 'STYLE DIFFERENCES',
      description: `Significant gaps in ${bigFiveResult.significantGaps.map(g => g.traitName.toLowerCase()).join(' and ')}`
    });
  }

  return {
    overallScore,
    synergyLevel: getSynergyLevel(overallScore),

    westernZodiac: {
      sign: westernSign,
      score: westernCompat.score,
      weightedScore: westernWeighted,
      description: westernCompat.description,
      strengths: westernCompat.strengths,
      challenges: westernCompat.challenges,
      workTips: westernCompat.workTips,
      isSpecialMatch: westernCompat.isSpecialMatch
    },

    chineseZodiac: {
      animal: chineseAnimal,
      element: chineseElement,
      elementName: getElementName(chineseElement),
      score: chineseCompat.score,
      weightedScore: chineseWeighted,
      description: chineseCompat.description,
      strengths: chineseCompat.strengths,
      challenges: chineseCompat.challenges,
      workTips: chineseCompat.workTips,
      specialRelation: chineseCompat.specialRelation,
      specialLabel: chineseCompat.specialLabel
    },

    mbti: {
      type: mbtiType,
      typeName: mbtiCompat.info.name,
      score: mbtiCompat.score,
      weightedScore: mbtiWeighted,
      description: mbtiCompat.description,
      strengths: mbtiCompat.strengths,
      challenges: mbtiCompat.challenges,
      workTips: mbtiCompat.workTips,
      specialMatch: mbtiSpecialMatch,
      specialLabel: mbtiCompat.specialLabel
    },

    bigFive: {
      scores: bigFive,
      score: bigFiveResult.overallScore,
      weightedScore: bigFiveWeighted,
      traitComparisons: bigFiveResult.traitComparisons,
      significantGaps: bigFiveResult.significantGaps,
      summary: bigFiveResult.summary
    },

    highlights
  };
}

// Generate shareable text
export function generateShareText(result: SynergyResult): string {
  return `I scored ${result.overallScore}% synergy with Ken! Level: ${result.synergyLevel.label} 🔮\n\nCheck your synergy: `;
}

// Encode result for URL sharing (basic encoding)
export function encodeResultForUrl(input: SynergyInput): string {
  const data = {
    bd: input.birthDate.toISOString().split('T')[0],
    mb: input.mbtiType,
    o: input.bigFive.openness,
    c: input.bigFive.conscientiousness,
    e: input.bigFive.extraversion,
    a: input.bigFive.agreeableness,
    n: input.bigFive.neuroticism
  };
  return btoa(JSON.stringify(data));
}

// Decode result from URL
export function decodeResultFromUrl(encoded: string): SynergyInput | null {
  try {
    const data = JSON.parse(atob(encoded));
    return {
      birthDate: new Date(data.bd),
      mbtiType: data.mb as MBTIType,
      bigFive: {
        openness: data.o,
        conscientiousness: data.c,
        extraversion: data.e,
        agreeableness: data.a,
        neuroticism: data.n
      }
    };
  } catch {
    return null;
  }
}
