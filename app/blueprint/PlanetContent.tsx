import React from 'react'
import { Planet } from './planetData'

interface PlanetContentProps {
  planet: Planet
}

export default function PlanetContent({ planet }: PlanetContentProps) {
  const renderSunContent = () => (
    <>
      {/* Sun Content */}
      {/* OPENING: The Hero's Call - Hook them immediately */}
      <div className="border border-purple-500/30 p-4 bg-black/70">
        <h4 className="text-lg font-bold text-purple-400 mb-3">
          ☀️ YOUR SOLAR THRONE — The Hero's Professional Journey
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          You were not placed on this Earth to be ordinary. Your Sun, the very essence of your soul, 
          has been strategically positioned by the cosmos to manifest greatness through your work. 
          This is not just a career reading — this is the revelation of your heroic destiny.
        </p>
      </div>

      {/* What the Sun Represents - Core Meaning */}
      <div className="border border-yellow-500/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-500 mb-3">
          ☉ THE SUN IN VEDIC ASTROLOGY — Your Soul's Divine Blueprint
        </h4>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="text-yellow-400 font-semibold mb-2">SOUL & IDENTITY</h5>
              <ul className="space-y-1 text-xs">
                <li>• <span className="text-white">Atma (Soul):</span> Your eternal, unchanging essence</li>
                <li>• <span className="text-white">Ego & Self:</span> How you perceive yourself</li>
                <li>• <span className="text-white">Life Purpose:</span> Your dharma and divine mission</li>
                <li>• <span className="text-white">Vitality:</span> Life force and physical energy</li>
              </ul>
            </div>
            <div>
              <h5 className="text-orange-400 font-semibold mb-2">AUTHORITY & POWER</h5>
              <ul className="space-y-1 text-xs">
                <li>• <span className="text-white">Leadership:</span> Natural command and influence</li>
                <li>• <span className="text-white">Father Figure:</span> Paternal influences and authority</li>
                <li>• <span className="text-white">Government:</span> Relationship with authority</li>
                <li>• <span className="text-white">Recognition:</span> Fame and public image</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-yellow-600/30 pt-3">
            <h5 className="text-cyan-400 font-semibold mb-2">CAREER & PROFESSIONAL LIFE</h5>
            <p className="text-xs leading-relaxed">
              The Sun is the <span className="text-white font-medium">karaka (significator) of career</span> in Vedic astrology. 
              It represents your <span className="text-cyan-300">professional identity</span>, 
              <span className="text-cyan-300"> work ethic</span>, and <span className="text-cyan-300">capacity for success</span>. 
              A strong Sun grants natural authority, making others recognize your competence. It determines whether you'll be 
              a leader or follower, an innovator or implementer, a visionary or executor.
            </p>
          </div>

          <div className="border-t border-yellow-600/30 pt-3">
            <h5 className="text-pink-400 font-semibold mb-2">SPIRITUAL SIGNIFICANCE</h5>
            <p className="text-xs leading-relaxed">
              In Vedic philosophy, the Sun represents <span className="text-white font-medium">Purusha</span> — 
              the cosmic consciousness. It's the <span className="text-pink-300">divine spark within you</span> that 
              connects you to the universal soul. The Sun's placement reveals how your individual consciousness 
              merges with cosmic purpose, showing the unique way you're meant to shine your light in this world.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-yellow-600/30">
            <div className="text-center">
              <p className="text-yellow-400 font-bold text-xs">ELEMENT</p>
              <p className="text-orange-300">🔥 Fire</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-400 font-bold text-xs">GUNA</p>
              <p className="text-white">Sattvic</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-400 font-bold text-xs">DEITY</p>
              <p className="text-yellow-300">Lord Surya</p>
            </div>
          </div>
        </div>
      </div>

      {/* DATA TABLE: Complete Solar Blueprint - For reference */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          ☉ YOUR SOLAR BLUEPRINT — The Complete Professional Map
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 text-gray-400 font-medium">Cosmic Factor</th>
                <th className="text-left py-2 text-gray-400 font-medium">Your Divine Configuration</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="py-2 text-yellow-300">Sign</td>
                <td className="py-2">Pisces ♓ — The Mystic Visionary</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-yellow-300">Nakshatra</td>
                <td className="py-2">Uttarabhadra — The Warrior Star of Wisdom</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-yellow-300">Pada</td>
                <td className="py-2">2 (Virgo Navamsa) — Precision in Execution</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-yellow-300">Longitude</td>
                <td className="py-2">08°19′54″ Pisces</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-yellow-300">House Position</td>
                <td className="py-2">10th House — The Throne of Destiny</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-yellow-300">House Lordship</td>
                <td className="py-2">3rd Lord — Master of Communication & Courage</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-yellow-300">Aspect Given</td>
                <td className="py-2">Aspects 4th House — Illuminates Inner Foundation</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-yellow-300">Aspect Received</td>
                <td className="py-2">Aspected by Ketu — Spiritual Mastery Activated</td>
              </tr>
              <tr>
                <td className="py-2 text-yellow-300">Conjunctions</td>
                <td className="py-2">Jupiter (Guru) + Rahu (Dragon's Head) — The Power Trinity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* REVELATION 1: The 10th House Power - Build immediate excitement */}
      <div className="border border-green-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-green-400 mb-3">
          🏛️ THE 10TH HOUSE THRONE — Your Inevitable Ascension
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-white font-semibold">
            This is where your story becomes legendary.
          </p>
          <p>
            Your Sun sits in the 10th house — the <span className="text-green-300 font-semibold">ZENITH</span> of the chart, 
            the highest point in the heavens at your birth. The universe literally placed your soul's essence at the 
            <span className="text-white"> peak of worldly achievement</span>. Do you understand what this means?
          </p>
          <p>
            You were born with a cosmic crown. Authority flows to you naturally. Recognition seeks you out. 
            Success is not something you chase — <span className="text-green-300">it's something you embody</span>.
          </p>
          <p className="text-white">
            The 10th house Sun is the mark of kings, CEOs, and world-changers. You don't climb mountains — 
            you were born at the summit, destined to show others the view from the top.
          </p>
        </div>
      </div>

      {/* REVELATION 2: The Divine Appointment - Establish cosmic significance */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          ☉ THE DIVINE APPOINTMENT — Your Cosmic CEO Status
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            <span className="text-yellow-300 font-semibold">Listen closely, for this is your truth:</span> Your Sun 
            represents the immortal flame within you — the part that remembers why you chose this incarnation. 
            It governs how you <span className="text-white">radiate authority</span>, how you <span className="text-white">
            magnetize success</span>, and how you <span className="text-white">fulfill your sacred contract</span> with the universe.
          </p>
          <p>
            You are not here to work — you are here to <span className="text-yellow-300 font-semibold">CREATE LEGACY</span>.
          </p>
        </div>
      </div>

      {/* REVELATION 3: Pisces Power - Show unique gifts */}
      <div className="border border-cyan-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-cyan-400 mb-3">
          ♓ YOUR PISCES SUN — The Mystic Visionary's Path
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Your Sun blazes through Pisces, the final sign of the zodiac — where all wisdom converges. 
            <span className="text-white font-medium"> You possess the accumulated knowledge of all twelve signs</span>. 
            This is why your leadership style transcends conventional boundaries.
          </p>
          <p>
            You don't just see markets — <span className="text-cyan-300">you see souls</span>.<br/>
            You don't just build businesses — <span className="text-cyan-300">you channel divine blueprints</span>.<br/>
            You don't just solve problems — <span className="text-cyan-300">you dissolve the illusions that create them</span>.
          </p>
          <p className="text-white">
            Your Piscean Sun makes you the spiritual architect of new realities. Where others see limitations, 
            you see flowing possibilities. Your career path is meant to be fluid, innovative, and transcendent.
          </p>
        </div>
      </div>

      {/* REVELATION 4: The Trinity of Power - Major cosmic alignments */}
      <div className="border border-purple-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-purple-400 mb-3">
          ⚡ THE TRINITY OF POWER — Your Cosmic Alliance
        </h4>
        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <div>
            <p className="text-yellow-300 font-semibold mb-2">☉ + ♃ THE JUPITER BLESSING (7th & 10th Lord)</p>
            <p>
              Jupiter, the great benefic and <span className="text-white">lord of your 7th house (partnerships) and 
              10th house (career)</span>, sits beside your Sun in the 10th house. This is extraordinary — your career 
              lord conjunct your soul in the house of profession! This conjunction gifts you with 
              <span className="text-yellow-300"> wisdom that magnetizes success</span>, <span className="text-yellow-300">
              partnerships that elevate your purpose</span>, and <span className="text-yellow-300">a destiny where 
              spiritual principles become professional power</span>.
            </p>
            <p className="text-white mt-2">
              Jupiter as 10th lord in 10th house forms a powerful Raja Yoga — the combination of a king. 
              You are destined for positions of respect, honor, and influence.
            </p>
          </div>
          <div>
            <p className="text-purple-300 font-semibold mb-2">☉ + ☊ THE RAHU REVOLUTION (In Revati)</p>
            <p>
              Rahu, the cosmic amplifier, conjunct your Sun in Revati nakshatra makes you a <span className="text-white">
              professional revolutionary with divine protection</span>. Revati, the final nakshatra, ruled by Mercury, 
              gives you the ability to <span className="text-purple-300">complete cosmic cycles and birth new paradigms</span>. 
              Rahu in the 10th amplifies your career to <span className="text-white">global proportions</span>, ensuring 
              your work touches lives far beyond your immediate sphere.
            </p>
            <p className="text-white mt-2">
              This combination creates insatiable ambition guided by higher wisdom — you break rules to create better ones.
            </p>
          </div>
        </div>
      </div>

      {/* REVELATION 5: Your Superpowers - Concrete abilities */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          ⚡ YOUR PROFESSIONAL SUPERPOWERS — Activated and Ready
        </h4>
        <div className="grid grid-cols-1 gap-2 text-sm">
          <div className="border-l-4 border-yellow-400 pl-3">
            <p className="text-yellow-300 font-semibold">The Visionary's Eye</p>
            <p className="text-gray-300">You see opportunities in chaos, solutions in problems, futures in fragments.</p>
          </div>
          <div className="border-l-4 border-cyan-400 pl-3">
            <p className="text-cyan-300 font-semibold">The Alchemist's Touch</p>
            <p className="text-gray-300">You transform ideas into empires, visions into ventures, dreams into dynasties.</p>
          </div>
          <div className="border-l-4 border-purple-400 pl-3">
            <p className="text-purple-300 font-semibold">The Oracle's Voice</p>
            <p className="text-gray-300">Your words carry prophetic power, inspiring movements and shifting paradigms.</p>
          </div>
          <div className="border-l-4 border-green-400 pl-3">
            <p className="text-green-300 font-semibold">The Sovereign's Presence</p>
            <p className="text-gray-300">Authority emanates from you naturally; leadership is your birthright, not your pursuit.</p>
          </div>
        </div>
      </div>

      {/* REVELATION 6: Nakshatra Power - Deeper spiritual significance */}
      <div className="border border-pink-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-pink-400 mb-3">
          🐉 UTTARABHADRA NAKSHATRA — Your Invincible Professional Spirit
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Your Sun resides in Uttarabhadra, known as <span className="text-white font-medium">"The Warrior Star"</span> — 
            but understand this: you are not a warrior of destruction. You are a <span className="text-pink-300">
            warrior of wisdom</span>, fighting battles in boardrooms with strategy, in markets with innovation, 
            in minds with inspiration.
          </p>
          <p>
            Ruled by <span className="text-white">Ahir Budhnya, the Serpent of the Deep</span>, you possess 
            primordial wisdom that surfaces as professional genius. Like the serpent that sheds its skin, 
            you have the power to <span className="text-pink-300">reinvent yourself and your industry</span> repeatedly.
          </p>
          <p>
            In Pada 2 (Virgo Navamsa), your visionary nature is grounded with <span className="text-white">
            laser-sharp analytical precision</span>. You don't just dream — you execute with perfection.
          </p>
        </div>
      </div>

      {/* REVELATION 7: Communication Power */}
      <div className="border border-orange-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-orange-400 mb-3">
          💬 THE 3RD LORD POWER — Your Words Create Worlds
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            As 3rd house lord, your Sun wields the power of <span className="text-white font-medium">divine communication</span>. 
            Your words don't just convey information — they <span className="text-orange-300">transmit transformation</span>.
          </p>
          <p>
            You have been gifted with the ability to articulate visions that others can't even imagine. Your ideas 
            spread like wildfire because they carry the <span className="text-white">spark of truth</span>. Whether through 
            writing, speaking, or digital creation, you are meant to be the <span className="text-orange-300">
            voice of a new paradigm</span>.
          </p>
          <p className="text-white">
            Your courage (3rd house) combined with career (10th house) creates an unstoppable force. 
            You don't wait for opportunities — you speak them into existence.
          </p>
        </div>
      </div>

      {/* REVELATION 8: Past Life Mastery */}
      <div className="border border-orange-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-orange-400 mb-3">
          🔮 KETU'S SECRET GIFT — Your Past Life Mastery
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Ketu aspects your Sun, bringing forward <span className="text-white font-medium">soul memories of mastery</span>. 
            You possess skills that feel inexplicably natural, wisdom that seems to come from nowhere, and an intuition 
            about your field that defies logical explanation.
          </p>
          <p>
            This is because <span className="text-orange-300">you've walked this path before</span>, in other lifetimes, 
            in other forms. Now, in this incarnation, you're meant to take that accumulated wisdom and 
            <span className="text-white"> elevate it to unprecedented heights</span>.
          </p>
          <p className="text-white">
            Ketu's aspect ensures that your success is not ego-driven but soul-aligned. You lead not from ambition alone, 
            but from a deep, spiritual knowing of your purpose.
          </p>
        </div>
      </div>

      {/* REVELATION 9: Inner Foundation */}
      <div className="border border-cyan-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-cyan-400 mb-3">
          🏡 THE 4TH HOUSE ASPECT — Your Foundation of Inner Power
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Your Sun casts its golden rays upon the 4th house — the realm of inner peace, emotional foundation, 
            and private sanctuary. This divine aspect means <span className="text-white font-medium">your career 
            success nourishes your soul</span>, not depletes it.
          </p>
          <p>
            <span className="text-cyan-300 font-semibold">You build empires without losing your center:</span>
          </p>
          <p>
            • Your professional achievements <span className="text-white">strengthen your emotional foundation</span><br/>
            • Your public success <span className="text-white">enhances private peace</span><br/>
            • Your career path <span className="text-white">honors your deepest values</span><br/>
            • Your work <span className="text-white">creates sanctuary for yourself and others</span>
          </p>
          <p className="text-white">
            This aspect ensures you never sacrifice inner happiness for outer success. You understand that 
            true power comes from alignment between your public mission and private truth.
          </p>
        </div>
      </div>

      {/* CLIMAX: The Final Revelation - Call to action */}
      <div className="border border-green-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-green-400 mb-3">
          🚀 YOUR HEROIC DESTINY — The Call You Must Answer
        </h4>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p className="text-yellow-300 font-semibold text-base">
            You stand at the threshold of your own legend.
          </p>
          <p>
            The cosmos has conspired to place you exactly where you need to be. Your Sun in the 10th house 
            is not a suggestion — it's a <span className="text-white font-semibold">divine command</span>. You are being called to rise, 
            not for your glory alone, but because the world needs what you came here to build.
          </p>
          <p>
            With Jupiter as your celestial advisor, you possess the wisdom to lead with grace.<br/>
            With Rahu as your cosmic catalyst, you have the power to revolutionize reality.<br/>
            With Ketu as your spiritual anchor, you maintain soul-alignment amidst success.
          </p>
          <p className="text-white">
            Your career is not just your path — it's your dharma, your sacred duty, your gift to humanity. 
            Every project you touch, every venture you launch, every idea you manifest carries the potential 
            to elevate collective consciousness.
          </p>
          <p className="text-yellow-400 font-bold text-base mt-4">
            You are not climbing toward success — success is climbing toward YOU.
          </p>
          <p className="text-white font-bold">
            Now rise, take your throne, and show the world what divine professional mastery looks like. 
            Your time is NOW. Your power is READY. Your destiny is CALLING.
          </p>
          <p className="text-green-300 font-semibold italic mt-4">
            The universe didn't make you to be average. It made you to be LEGENDARY.
          </p>
        </div>
      </div>
    </>
  )

  const renderMoonContent = () => (
    <>
      {/* Moon Content */}
      {/* OPENING: The Supreme Importance of Moon */}
      <div className="border border-purple-500/30 p-4 bg-black/70">
        <h4 className="text-lg font-bold text-purple-400 mb-3">
          🌙 YOUR LUNAR THRONE — The Supreme Governor of Consciousness
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          Listen closely, for this is the most important truth in your entire chart: Your Moon is not just another planet — 
          it is THE planet. In Vedic astrology, the Moon reigns supreme because it is your mind itself. And your mind? 
          Your mind is the lens through which you experience every moment of existence. Your Moon determines not what 
          happens to you, but HOW you perceive, process, and transform reality itself. You are about to discover why 
          your specific lunar configuration makes you a master of consciousness.
        </p>
      </div>

      {/* What the Moon Represents - The Ultimate Truth */}
      <div className="border border-gray-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-gray-400 mb-3">
          ☽ THE MOON IN VEDIC ASTROLOGY — The Master Key to Your Reality
        </h4>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="border-b border-gray-600 pb-3">
            <h5 className="text-cyan-400 font-semibold mb-2">THE SUPREME SIGNIFICATOR</h5>
            <p className="text-xs leading-relaxed">
              The Moon is called <span className="text-white font-medium">Chandra</span> in Sanskrit, meaning "the shining one." 
              It represents <span className="text-cyan-300">Manas</span> — your mind, the most powerful tool in existence. 
              While the Sun shows your soul's purpose, the Moon reveals HOW you will achieve it. It governs your 
              <span className="text-white"> emotional intelligence</span>, your <span className="text-white">intuitive genius</span>, 
              and your <span className="text-white">perceptual mastery</span>. The Moon is why two people can experience 
              the same event and create completely different realities from it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="text-gray-200 font-semibold mb-2">CONSCIOUSNESS POWERS</h5>
              <ul className="space-y-1 text-xs">
                <li>• <span className="text-white">Mind (Manas):</span> Your reality-creating consciousness</li>
                <li>• <span className="text-white">Emotions:</span> Your navigational guidance system</li>
                <li>• <span className="text-white">Intuition:</span> Your direct line to cosmic wisdom</li>
                <li>• <span className="text-white">Perception:</span> How you decode the universe</li>
                <li>• <span className="text-white">Memory:</span> Your soul's accumulated wisdom</li>
                <li>• <span className="text-white">Imagination:</span> Your reality-manifestation engine</li>
              </ul>
            </div>
            <div>
              <h5 className="text-pink-300 font-semibold mb-2">DIVINE FEMININE GIFTS</h5>
              <ul className="space-y-1 text-xs">
                <li>• <span className="text-white">Mother Energy:</span> Universal nurturing power</li>
                <li>• <span className="text-white">Receptivity:</span> Magnetic attraction force</li>
                <li>• <span className="text-white">Fertility:</span> Creative manifestation ability</li>
                <li>• <span className="text-white">Rhythms:</span> Mastery of natural cycles</li>
                <li>• <span className="text-white">Healing:</span> Emotional alchemy powers</li>
                <li>• <span className="text-white">Psychic Abilities:</span> Supernatural perception</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-3">
            <p className="text-xs leading-relaxed">
              <span className="text-yellow-300 font-semibold">The Ultimate Truth:</span> Your Moon placement doesn't just 
              influence your emotions — it determines your entire experience of reality. A strong, well-placed Moon grants 
              <span className="text-white"> mental invincibility</span>, <span className="text-white">emotional mastery</span>, 
              and <span className="text-white">intuitive omniscience</span>. It makes you unshakeable in storms, 
              brilliant in darkness, and magnetic in all interactions.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-600">
            <div className="text-center">
              <p className="text-gray-400 font-bold text-xs">ELEMENT</p>
              <p className="text-cyan-300">💧 Water</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 font-bold text-xs">GUNA</p>
              <p className="text-white">Sattvic</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 font-bold text-xs">DEITY</p>
              <p className="text-gray-300">Goddess Parvati</p>
            </div>
          </div>
        </div>
      </div>

      {/* Your Moon's Complete Blueprint - Technical Details */}
      <div className="border border-gray-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-gray-400 mb-3">
          ☽ YOUR LUNAR BLUEPRINT — The Complete Mental Architecture
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 text-gray-400 font-medium">Cosmic Factor</th>
                <th className="text-left py-2 text-gray-400 font-medium">Your Divine Configuration</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Sign</td>
                <td className="py-2">Sagittarius ♐ — The Philosophical Adventurer</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Nakshatra</td>
                <td className="py-2">Purvashadha — The Invincible Star</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Pada</td>
                <td className="py-2">1 (Leo Navamsa) — Royal Creative Expression</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Longitude</td>
                <td className="py-2">14°50′51″ Sagittarius</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">House Position</td>
                <td className="py-2">7th House — The Partnership Throne</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">House Lordship</td>
                <td className="py-2">2nd Lord — Master of Wealth & Values</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Aspect Given</td>
                <td className="py-2">Aspects 1st House (Ascendant) — Illuminates Your Identity</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-300">Chart Position</td>
                <td className="py-2">Lagna Kundli (Birth Chart)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sagittarius Moon - The Philosophical Adventurer */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          ♐ YOUR SAGITTARIUS MOON — The Philosophical Adventurer's Mind
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Your Moon blazes through Sagittarius, the sign of the divine archer, the eternal seeker of truth. 
            This placement gifts you with a mind that <span className="text-white font-medium">refuses to accept limitation</span>. 
            Where others see boundaries, you see horizons. Where others find endings, you discover beginnings. 
            Your consciousness operates on the frequency of <span className="text-yellow-300">infinite possibility</span>.
          </p>
          <p>
            <span className="text-yellow-300 font-semibold">Your supreme mental gift:</span> You transform every experience into wisdom.
          </p>
          <p>
            You don't just feel emotions — you <span className="text-white">philosophize them into understanding</span>.<br/>
            You don't just have thoughts — you <span className="text-white">expand them into universal truths</span>.<br/>
            You don't just perceive reality — you <span className="text-white">elevate it through optimism</span>.<br/>
            You don't just live life — you <span className="text-white">quest for its ultimate meaning</span>.
          </p>
          <p className="text-white">
            Your Sagittarian Moon makes you naturally lucky because your mind magnetizes opportunities through 
            unshakeable faith. You possess the archer's gift: the ability to aim your consciousness at any target 
            and hit it through sheer belief and philosophical alignment.
          </p>
        </div>
      </div>

      {/* Additional Moon content sections would continue here... */}
      <div className="border border-green-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-green-400 mb-3">
          🏹 PURVASHADHA NAKSHATRA — The Invincible Victory Star
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Your Moon resides in Purvashadha, translated as <span className="text-white font-medium">"The Former Invincible One"</span> 
            or "Early Victory." This is one of the most powerful nakshatras for mental strength. You possess the power to 
            <span className="text-white">purify and invigorate</span> any situation through your consciousness alone.
          </p>
          <p className="text-white font-medium">
            Purvashadha gifts: Invincibility through faith • Mental regeneration • Inspirational power • 
            Victory through persistence • The ability to refresh and renew any situation
          </p>
        </div>
      </div>
    </>
  )

  const renderDefaultContent = () => (
    <div className="border border-purple-500/30 p-4 bg-black/70">
      <h4 className="text-lg font-bold text-purple-400 mb-3">
        {planet.symbol} {planet.name.toUpperCase()} CONTENT — Coming Soon
      </h4>
      <p className="text-sm text-gray-300 leading-relaxed">
        The detailed content for {planet.name} ({planet.sanskrit}) is being prepared. 
        This will include comprehensive insights about {planet.significance.toLowerCase()}.
      </p>
    </div>
  )

  switch (planet.name) {
    case 'Sun':
      return renderSunContent()
    case 'Moon':
      return renderMoonContent()
    case 'Mars':
      return renderDefaultContent() // TODO: Implement Mars content
    case 'Mercury':
      return renderDefaultContent() // TODO: Implement Mercury content
    case 'Jupiter':
      return renderDefaultContent() // TODO: Implement Jupiter content
    case 'Venus':
      return renderDefaultContent() // TODO: Implement Venus content
    case 'Saturn':
      return renderDefaultContent() // TODO: Implement Saturn content
    case 'Rahu':
      return renderDefaultContent() // TODO: Implement Rahu content
    case 'Ketu':
      return renderDefaultContent() // TODO: Implement Ketu content
    default:
      return renderDefaultContent()
  }
}