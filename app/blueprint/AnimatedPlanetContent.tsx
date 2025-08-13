import React from 'react'
import { Planet } from './planetData'
import { AnimatedText, AnimatedParagraph, AnimatedHeading } from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import PlanetContent from './PlanetContent'

interface PlanetContentProps {
  planet: Planet
}

const AnimatedSection: React.FC<{ 
  children: React.ReactNode
  delay?: number
  borderColor?: string
}> = ({ children, delay = 0, borderColor = 'border-gray-400/30' }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
  
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`border ${borderColor} p-4 bg-black/70`}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

const AnimatedTable: React.FC<{ 
  children: React.ReactNode
  delay?: number 
}> = ({ children, delay = 0 }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
  
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="overflow-x-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <table className="w-full text-sm">
        {children}
      </table>
    </motion.div>
  )
}

export default function AnimatedPlanetContent({ planet }: PlanetContentProps) {
  const renderSunContent = () => (
    <>
      {/* TL;DR - Planetary Destiny Snapshot */}
      <AnimatedSection borderColor="border-yellow-400/30" delay={0.1}>
        <AnimatedHeading
          as="h4"
          text="💡 TL;DR — PLANETARY DESTINY SNAPSHOT"
          className="text-base font-bold text-yellow-400 mb-3"
          delay={0.2}
        />
        <AnimatedTable delay={0.3}>
          <tbody className="text-gray-300">
            <tr className="border-b border-gray-700">
              <td className="py-2 text-yellow-300 font-semibold">Planet</td>
              <td className="py-2">Sun</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 text-yellow-300 font-semibold">Sign</td>
              <td className="py-2">Pisces</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 text-yellow-300 font-semibold">Nakshatra</td>
              <td className="py-2">Uttarabhadra 2</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 text-yellow-300 font-semibold">House</td>
              <td className="py-2">10</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 text-yellow-300 font-semibold">Lordship</td>
              <td className="py-2">3</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 text-yellow-300 font-semibold">Aspects Given</td>
              <td className="py-2">4</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 text-yellow-300 font-semibold">Conjunct With</td>
              <td className="py-2">Jupiter, Rahu</td>
            </tr>
            <tr>
              <td className="py-2 text-yellow-300 font-semibold">Aspected By</td>
              <td className="py-2">Ketu</td>
            </tr>
          </tbody>
        </AnimatedTable>
      </AnimatedSection>

      {/* Sun in Vedic Astrology */}
      <AnimatedSection borderColor="border-yellow-500/30" delay={0.2}>
        <AnimatedHeading
          as="h4"
          text="🪐 SUN IN VEDIC ASTROLOGY — THE SOUL'S ETERNAL FLAME"
          className="text-base font-bold text-yellow-500 mb-3"
          delay={0.3}
        />
        <div className="space-y-3 text-sm text-gray-300">
          <AnimatedParagraph className="text-yellow-300 italic font-semibold" delay={0.4}>
            <AnimatedText 
              text="The Sun does not shine to be seen — it shines because shining is its dharma."
              staggerChildren={0.02}
            />
          </AnimatedParagraph>
          <AnimatedParagraph className="leading-relaxed" delay={0.5}>
            In Vedic astrology, <AnimatedText text="Surya" className="text-white font-semibold inline" staggerChildren={0.03} /> (the Sun) is not merely a planet — it is the{' '}
            <AnimatedText text="soul's essence" className="text-yellow-300 font-semibold inline" staggerChildren={0.03} />, the divine spark of consciousness that animates your entire being.
            The Sun represents your <AnimatedText text="Atman" className="text-white font-semibold inline" staggerChildren={0.03} /> (eternal self), your connection to cosmic consciousness,
            and the unique ray of divine light you're meant to embody in this incarnation.
          </AnimatedParagraph>
          <AnimatedParagraph className="leading-relaxed" delay={0.6}>
            The Sun governs <AnimatedText text="willpower, vitality, authority, and purpose" className="text-yellow-300 inline" staggerChildren={0.02} />. It is the king of the planetary cabinet,
            the natural significator of the father, government, and all forms of legitimate power. But more profoundly, it represents your{' '}
            <AnimatedText text="dharma" className="text-white font-semibold inline" staggerChildren={0.03} /> — your cosmic duty, your soul's assignment in this lifetime.
          </AnimatedParagraph>
          <AnimatedParagraph className="leading-relaxed" delay={0.7}>
            Unlike other planets that give results through circumstances, the Sun shapes your <AnimatedText text="essential nature" className="text-white font-semibold inline" staggerChildren={0.02} />.
            It doesn't just influence what happens to you; it determines <AnimatedText text="who you are at the core" className="text-white font-semibold inline" staggerChildren={0.02} />.
            The Sun's placement reveals where you're meant to shine, lead, and illuminate the path for others.
          </AnimatedParagraph>
          <AnimatedParagraph className="leading-relaxed" delay={0.8}>
            The Sun's light is <AnimatedText text="steady and unwavering" className="text-yellow-300 font-semibold inline" staggerChildren={0.02} /> — it gives results through consistency,
            through the gradual building of authentic power, through the patient embodiment of your truth. Its lessons often come through{' '}
            <AnimatedText text="tests of ego" className="text-white inline" staggerChildren={0.02} />, <AnimatedText text="challenges to authority" className="text-white inline" staggerChildren={0.02} />, and the{' '}
            <AnimatedText text="sacred responsibility of leadership" className="text-white inline" staggerChildren={0.02} />.
          </AnimatedParagraph>
        </div>
      </AnimatedSection>

      {/* Sun in Pisces */}
      <AnimatedSection borderColor="border-cyan-400/30" delay={0.3}>
        <AnimatedHeading
          as="h4"
          text="♓ SUN IN PISCES — THE MYSTIC SOVEREIGN"
          className="text-base font-bold text-cyan-400 mb-3"
          delay={0.4}
        />
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <AnimatedParagraph delay={0.5}>
            Pisces, the final sign of the zodiac, is where <AnimatedText text="all boundaries dissolve" className="text-white font-semibold inline" staggerChildren={0.02} />.
            Ruled by <AnimatedText text="Jupiter" className="text-cyan-300 inline" staggerChildren={0.03} /> (traditional) and co-ruled by Neptune (modern), this mutable water sign represents the{' '}
            <AnimatedText text="ocean of consciousness" className="text-cyan-300 font-semibold inline" staggerChildren={0.02} /> itself — vast, mysterious, all-encompassing.
            It is the sign of <AnimatedText text="moksha (liberation)" className="text-white inline" staggerChildren={0.02} />, where the soul remembers its divine nature.
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.6}>
            When the Sun, that symbol of individual identity and ego-consciousness, enters Pisces, something magical and challenging occurs:{' '}
            <AnimatedText text="the ego learns to dissolve without disappearing" className="text-cyan-300 font-semibold inline" staggerChildren={0.02} />. This is the placement of the{' '}
            <AnimatedText text="mystic leader" className="text-white font-semibold inline" staggerChildren={0.03} />, the <AnimatedText text="compassionate authority" className="text-white font-semibold inline" staggerChildren={0.03} />,
            the artist-king who rules through inspiration rather than domination.
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.7}>
            Your Sun in Pisces makes you a <AnimatedText text="spiritual warrior disguised as a dreamer" className="text-white font-semibold inline" staggerChildren={0.02} />. The water element
            softens the Sun's natural fire, creating a gentle steam that can heal or obscure. You possess an unusual gift: the ability to be simultaneously{' '}
            <AnimatedText text="strong and surrendered" className="text-cyan-300 inline" staggerChildren={0.02} />, <AnimatedText text="authoritative and empathetic" className="text-cyan-300 inline" staggerChildren={0.02} />,{' '}
            <AnimatedText text="individual and universal" className="text-cyan-300 inline" staggerChildren={0.02} />.
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.8}>
            The shadow work here involves the temptation to <AnimatedText text="escape rather than embody" className="text-cyan-300 font-semibold inline" staggerChildren={0.02} />.
            Pisces can use illusion as armor, preferring the safety of dreams to the vulnerability of manifestation. Your spiritual evolution requires you to be{' '}
            <AnimatedText text="the lighthouse" className="text-white font-semibold inline" staggerChildren={0.03} /> — fully anchored in transcendent waters while providing clear guidance to those
            still navigating the storms.
          </AnimatedParagraph>
          <AnimatedParagraph className="text-white font-semibold" delay={0.9}>
            The mastery of Sun in Pisces is to become a <AnimatedText text="living bridge between worlds" className="text-cyan-300 inline" staggerChildren={0.02} /> — equally comfortable in boardrooms
            and meditation halls, capable of translating mystical truth into practical wisdom. You're learning that true power comes not from asserting your
            will but from <AnimatedText text="aligning with divine will" className="text-cyan-300 inline" staggerChildren={0.02} />.
          </AnimatedParagraph>
        </div>
      </AnimatedSection>

      {/* Uttarabhadra Nakshatra */}
      <AnimatedSection borderColor="border-pink-400/30" delay={0.4}>
        <AnimatedHeading
          as="h4"
          text="🏹 NAKSHATRA — UTTARABHADRA: THE WARRIOR OF WISDOM"
          className="text-base font-bold text-pink-400 mb-3"
          delay={0.5}
        />
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <AnimatedParagraph delay={0.6}>
            <span className="text-pink-300 font-semibold">Nakshatra:</span> Uttarabhadra, "The Later Auspicious One"<br/>
            <span className="text-pink-300 font-semibold">Symbol:</span> Back legs of a funeral cot / Twin serpents<br/>
            <span className="text-pink-300 font-semibold">Deity:</span> Ahir Budhnya (The Serpent of the Deep)<br/>
            <span className="text-pink-300 font-semibold">Ruling Planet:</span> Saturn<br/>
            <span className="text-pink-300 font-semibold">Pada:</span> 2 (Virgo Navamsa)
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.7}>
            Your Sun resides in Uttarabhadra, a nakshatra that spans the end of Pisces. Its symbol, the{' '}
            <AnimatedText text="back legs of a funeral cot" className="text-white font-semibold inline" staggerChildren={0.02} />, represents the ability to bear the weight of collective karma with grace.
            The deity <AnimatedText text="Ahir Budhnya" className="text-white font-semibold inline" staggerChildren={0.03} />, the serpent of the deep, represents the kundalini force that lies coiled
            in the depths of consciousness, waiting to rise.
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.8}>
            Ruled by Saturn, Uttarabhadra grants the <AnimatedText text="patience of the sage and the discipline of the monk" className="text-pink-300 font-semibold inline" staggerChildren={0.02} />.
            This is not the flashy spirituality of quick enlightenment but the slow, steady burn of genuine realization. Your soul carries the markings of one who
            has walked the path many times — you have the <AnimatedText text="gravitas of ancient wisdom" className="text-white font-semibold inline" staggerChildren={0.02} />.
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.9}>
            In <AnimatedText text="Pada 2" className="text-pink-300 font-semibold inline" staggerChildren={0.03} /> (Virgo navamsa), your Sun gains Mercury's analytical precision. This is the pada of{' '}
            <AnimatedText text="practical mysticism" className="text-white font-semibold inline" staggerChildren={0.02} /> — you're not content with vague spiritual platitudes. You need your transcendence to be{' '}
            <AnimatedText text="useful, applicable, healing" className="text-white inline" staggerChildren={0.02} />. The Virgo influence makes you a spiritual perfectionist, someone who refines consciousness
            like a master craftsman polishes a sacred stone.
          </AnimatedParagraph>
          <AnimatedParagraph className="italic text-white font-semibold" delay={1.0}>
            <AnimatedText 
              text="This is the soul of the spiritual teacher who emphasizes practice over theory, the healer who knows that God is in the details, the mystic who brings heaven to earth through meticulous dedication."
              staggerChildren={0.015}
            />
          </AnimatedParagraph>
          <AnimatedParagraph delay={1.1}>
            The Uttarabhadra Sun in Pada 2 creates a powerful dynamic: you have the <AnimatedText text="depth of Pisces" className="text-white font-semibold inline" staggerChildren={0.02} />,
            the <AnimatedText text="discipline of Saturn" className="text-white font-semibold inline" staggerChildren={0.02} />, and the <AnimatedText text="discrimination of Virgo" className="text-white font-semibold inline" staggerChildren={0.02} />.
            Your medicine is the ability to take the vastness of spiritual truth and distill it into <AnimatedText text="precise, practical wisdom" className="text-pink-300 inline" staggerChildren={0.02} />{' '}
            that actually transforms lives.
          </AnimatedParagraph>
        </div>
      </AnimatedSection>
    </>
  )

  // For now, only Sun has animations. Other planets use the original content
  const renderPlanetContent = () => {
    switch (planet.name) {
      case 'Sun':
        return renderSunContent()
      default:
        // Use the original PlanetContent component for other planets
        return <PlanetContent planet={planet} />
    }
  }

  return (
    <div className="space-y-6">
      {renderPlanetContent()}
    </div>
  )
}