import React from 'react'
import { Planet } from './planetData'

interface PlanetContentProps {
  planet: Planet
}

export default function PlanetContent({ planet }: PlanetContentProps) {
  const renderSunContent = () => (
    <>
      {/* Sun Content */}
      {/* TL;DR - Planetary Destiny Snapshot */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          💡 TL;DR — PLANETARY DESTINY SNAPSHOT
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
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
              <tr>
                <td className="py-2 text-yellow-300 font-semibold">Aspected By</td>
                <td className="py-2">KETU</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sun in Vedic Astrology */}
      <div className="border border-yellow-500/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-500 mb-3">
          🪐 SUN IN VEDIC ASTROLOGY — THE SOUL'S ETERNAL FLAME
        </h4>
        <div className="space-y-3 text-sm text-gray-300">
          <p className="text-yellow-300 italic font-semibold">
            "The Sun does not shine to be seen — it shines because shining is its dharma."
          </p>
          <p className="leading-relaxed">
            In Vedic astrology, <span className="text-white font-semibold">Surya</span> (the Sun) is not merely a planet — it is the 
            <span className="text-yellow-300 font-semibold">soul's essence</span>, the divine spark of consciousness that animates your entire being. 
            The Sun represents your <span className="text-white font-semibold">Atman</span> (eternal self), your connection to cosmic consciousness, 
            and the unique ray of divine light you're meant to embody in this incarnation.
          </p>
          <p className="leading-relaxed">
            The Sun governs <span className="text-yellow-300">willpower, vitality, authority, and purpose</span>. It is the king of the planetary cabinet, 
            the natural significator of the father, government, and all forms of legitimate power. But more profoundly, it represents your 
            <span className="text-white font-semibold">dharma</span> — your cosmic duty, your soul's assignment in this lifetime.
          </p>
          <p className="leading-relaxed">
            Unlike other planets that give results through circumstances, the Sun shapes your <span className="text-white font-semibold">essential nature</span>. 
            It doesn't just influence what happens to you; it determines <span className="text-white font-semibold">who you are at the core</span>. 
            The Sun's placement reveals where you're meant to shine, lead, and illuminate the path for others.
          </p>
          <p className="leading-relaxed">
            The Sun's light is <span className="text-yellow-300 font-semibold">steady and unwavering</span> — it gives results through consistency, 
            through the gradual building of authentic power, through the patient embodiment of your truth. Its lessons often come through 
            <span className="text-white">tests of ego</span>, <span className="text-white">challenges to authority</span>, and the 
            <span className="text-white">sacred responsibility of leadership</span>.
          </p>
        </div>
      </div>

      {/* Sun in Pisces */}
      <div className="border border-cyan-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-cyan-400 mb-3">
          ♓ SUN IN PISCES — THE MYSTIC SOVEREIGN
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Pisces, the final sign of the zodiac, is where <span className="text-white font-semibold">all boundaries dissolve</span>. 
            Ruled by <span className="text-cyan-300">Jupiter</span> (traditional) and co-ruled by Neptune (modern), this mutable water sign represents the 
            <span className="text-cyan-300 font-semibold">ocean of consciousness</span> itself — vast, mysterious, all-encompassing. 
            It is the sign of <span className="text-white">moksha (liberation)</span>, where the soul remembers its divine nature.
          </p>
          <p>
            When the Sun, that symbol of individual identity and ego-consciousness, enters Pisces, something magical and challenging occurs: 
            <span className="text-cyan-300 font-semibold">the ego learns to dissolve without disappearing</span>. This is the placement of the 
            <span className="text-white font-semibold">mystic leader</span>, the <span className="text-white font-semibold">compassionate authority</span>, 
            the artist-king who rules through inspiration rather than domination.
          </p>
          <p>
            Your Sun in Pisces makes you a <span className="text-white font-semibold">spiritual warrior disguised as a dreamer</span>. The water element 
            softens the Sun's natural fire, creating a gentle steam that can heal or obscure. You possess an unusual gift: the ability to be simultaneously 
            <span className="text-cyan-300">strong and surrendered</span>, <span className="text-cyan-300">authoritative and empathetic</span>, 
            <span className="text-cyan-300">individual and universal</span>.
          </p>
          <p>
            The shadow work here involves the temptation to <span className="text-cyan-300 font-semibold">escape rather than embody</span>. 
            Pisces can use illusion as armor, preferring the safety of dreams to the vulnerability of manifestation. Your spiritual evolution requires you to be 
            <span className="text-white font-semibold">the lighthouse</span> — fully anchored in transcendent waters while providing clear guidance to those 
            still navigating the storms.
          </p>
          <p className="text-white font-semibold">
            The mastery of Sun in Pisces is to become a <span className="text-cyan-300">living bridge between worlds</span> — equally comfortable in boardrooms 
            and meditation halls, capable of translating mystical truth into practical wisdom. You're learning that true power comes not from asserting your 
            will but from <span className="text-cyan-300">aligning with divine will</span>.
          </p>
        </div>
      </div>

      {/* Uttarabhadra Nakshatra */}
      <div className="border border-pink-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-pink-400 mb-3">
          🏹 NAKSHATRA — UTTARABHADRA: THE WARRIOR OF WISDOM
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            <span className="text-pink-300 font-semibold">Nakshatra:</span> Uttarabhadra, "The Later Auspicious One"<br/>
            <span className="text-pink-300 font-semibold">Symbol:</span> Back legs of a funeral cot / Twin serpents<br/>
            <span className="text-pink-300 font-semibold">Deity:</span> Ahir Budhnya (The Serpent of the Deep)<br/>
            <span className="text-pink-300 font-semibold">Ruling Planet:</span> Saturn<br/>
            <span className="text-pink-300 font-semibold">Pada:</span> 2 (Virgo Navamsa)
          </p>
          <p>
            Your Sun resides in Uttarabhadra, a nakshatra that spans the end of Pisces. Its symbol, the 
            <span className="text-white font-semibold">back legs of a funeral cot</span>, represents the ability to bear the weight of collective karma with grace. 
            The deity <span className="text-white font-semibold">Ahir Budhnya</span>, the serpent of the deep, represents the kundalini force that lies coiled 
            in the depths of consciousness, waiting to rise.
          </p>
          <p>
            Ruled by Saturn, Uttarabhadra grants the <span className="text-pink-300 font-semibold">patience of the sage and the discipline of the monk</span>. 
            This is not the flashy spirituality of quick enlightenment but the slow, steady burn of genuine realization. Your soul carries the markings of one who 
            has walked the path many times — you have the <span className="text-white font-semibold">gravitas of ancient wisdom</span>.
          </p>
          <p>
            In <span className="text-pink-300 font-semibold">Pada 2</span> (Virgo navamsa), your Sun gains Mercury's analytical precision. This is the pada of 
            <span className="text-white font-semibold">practical mysticism</span> — you're not content with vague spiritual platitudes. You need your transcendence to be 
            <span className="text-white">useful, applicable, healing</span>. The Virgo influence makes you a spiritual perfectionist, someone who refines consciousness 
            like a master craftsman polishes a sacred stone.
          </p>
          <p className="italic text-white font-semibold">
            "This is the soul of the spiritual teacher who emphasizes practice over theory, the healer who knows that God is in the details, 
            the mystic who brings heaven to earth through meticulous dedication."
          </p>
          <p>
            The Uttarabhadra Sun in Pada 2 creates a powerful dynamic: you have the <span className="text-white font-semibold">depth of Pisces</span>, 
            the <span className="text-white font-semibold">discipline of Saturn</span>, and the <span className="text-white font-semibold">discrimination of Virgo</span>. 
            Your medicine is the ability to take the vastness of spiritual truth and distill it into <span className="text-pink-300">precise, practical wisdom</span> 
            that actually transforms lives.
          </p>
        </div>
      </div>

      {/* Sun as Lord of Houses */}
      <div className="border border-orange-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-orange-400 mb-3">
          🏛 PLANET AS LORD OF 3RD HOUSE — THE KARMA OF RULE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            As ruler of your 3rd house, the Sun governs your <span className="text-white font-semibold">courage, communication, siblings, short journeys, and efforts</span>. 
            But it expresses these themes from the 10th house — the highest point of the chart, the place of <span className="text-white font-semibold">career, 
            public image, and societal contribution</span>.
          </p>
          <p>
            This creates a profound karmic link: your <span className="text-orange-300 font-semibold">courage (3rd) becomes your career (10th)</span>. 
            Your willingness to communicate truth, to take initiative, to be the spiritual warrior in everyday life — this IS your professional path. 
            The universe has designed you to be <span className="text-white font-semibold">publicly brave</span>.
          </p>
          <p>
            The 3rd house is the house of <span className="text-orange-300">self-effort and initiative</span>. With its lord in the 10th, your efforts are meant to be 
            <span className="text-white font-semibold">visible, impactful, and socially relevant</span>. You cannot hide your light under a bushel — your dharma 
            requires you to take your message to the mountaintop.
          </p>
          <p>
            This placement also suggests that <span className="text-orange-300">siblings or close companions</span> play important roles in your career journey. 
            They may be colleagues, collaborators, or catalysts for your public work. The skills you develop through 3rd house activities — writing, speaking, 
            teaching, short travels — become the tools of your professional success.
          </p>
          <p className="text-white font-semibold">
            The Sun as 3rd lord in the 10th makes you a <span className="text-orange-300">messenger of dharma</span>. Your communications carry the weight of authority, 
            even when you speak softly. People sense that your words come from a place of genuine experience and spiritual authority.
          </p>
        </div>
      </div>

      {/* Sun in 10th House */}
      <div className="border border-green-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-green-400 mb-3">
          🧱 SUN IN 10TH HOUSE — THE PUBLIC MYSTIC
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            The 10th house is the <span className="text-white font-semibold">zenith of the chart</span> — the most visible point, representing 
            <span className="text-green-300">career, public image, authority, and contribution to society</span>. It's where we interface with the collective, 
            where our private dharma becomes public service. This is the house of <span className="text-white font-semibold">karma yoga</span> — action in the world.
          </p>
          <p>
            Your Sun here is <span className="text-green-300 font-semibold">accidentally dignified</span> — it loves the 10th house because this is where the Sun 
            naturally shines at <span className="text-white font-semibold">cosmic noon</span>. But in Pisces, this creates a unique expression: you become the 
            <span className="text-green-300 font-semibold">spiritual CEO</span>, the <span className="text-green-300 font-semibold">mystical leader</span>, 
            the <span className="text-green-300 font-semibold">compassionate authority figure</span>.
          </p>
          <p>
            This placement demands that you <span className="text-white font-semibold">embody your spiritual truth professionally</span>. 
            You cannot separate your soul's purpose from your career — they are one and the same. The 10th house is your <span className="text-green-300">temple</span>, 
            your <span className="text-green-300">throne room</span>, your <span className="text-green-300">public altar</span> where you demonstrate that 
            spirituality and success are not opposites but dance partners.
          </p>
          <p>
            The karmic terrain here involves learning to <span className="text-white font-semibold">lead without ego</span>, to have authority without authoritarianism, 
            to be visible while remaining humble. The 10th house tests you through <span className="text-green-300">public scrutiny</span>, 
            <span className="text-green-300">professional challenges</span>, and the <span className="text-green-300">weight of responsibility</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This house is your initiation chamber into spiritual leadership — where you learn that true authority comes from service, that real power 
            flows from surrender, that lasting success is measured in souls touched rather than wealth accumulated."
          </p>
          <p className="text-white font-semibold">
            Your soul must master the art of being a <span className="text-green-300">lighthouse</span>: firmly grounded in your spiritual truth while 
            providing guidance to ships navigating worldly waters. You're learning that the highest form of career is <span className="text-green-300">dharma</span>, 
            and the highest form of success is <span className="text-green-300">fulfilling your soul's purpose</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Given */}
      <div className="border border-purple-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-purple-400 mb-3">
          🪄 PLANETARY ASPECTS GIVEN — WHERE YOU APPLY ENERGY & KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-purple-300 font-semibold">The 4th House: Illuminating the Inner Sanctuary</p>
          <p>
            Your Sun casts its full aspect upon the 4th house — the domain of <span className="text-white font-semibold">home, mother, emotional security, 
            inner peace, and the heart's deepest comfort</span>.
          </p>
          <p>
            This aspect creates a powerful dynamic: your <span className="text-purple-300 font-semibold">public persona (10th) directly influences your 
            private peace (4th)</span>. There's no separation between who you are in the world and who you are at home. Your professional success 
            directly impacts your emotional security, and your inner peace radiates into your public work.
          </p>
          <p>
            The Sun's aspect to the 4th house illuminates your <span className="text-white font-semibold">emotional foundations</span>. You have the capacity 
            to bring conscious awareness to unconscious patterns, to shine light into the basement of the psyche. This can be uncomfortable — the Sun's 
            light reveals everything, including what we'd rather keep hidden.
          </p>
          <p>
            But this aspect also grants tremendous gifts:<br/>
            • Your home becomes a <span className="text-purple-300">temple of consciousness</span><br/>
            • Your relationship with your mother (or mothering) involves themes of <span className="text-purple-300">spiritual authority</span><br/>
            • You have the ability to create <span className="text-purple-300">emotional security through spiritual practice</span><br/>
            • Your inner life has a <span className="text-purple-300">regal quality</span> — even in private, you maintain dignity
          </p>
          <p>
            The 4th house also represents the <span className="text-white font-semibold">end of matters</span>, how things conclude. With the Sun's aspect here, 
            you're meant to <span className="text-purple-300 font-semibold">end your life in light</span> — to complete your journey with consciousness intact, 
            wisdom integrated, peace achieved.
          </p>
          <p className="text-white font-semibold">
            This aspect suggests that your <span className="text-purple-300">true throne is within</span>. No matter how high you rise professionally, 
            your real kingdom is the inner realm of consciousness. You're learning that external authority is just practice for mastering the 
            sovereignty of your own soul.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Received */}
      <div className="border border-orange-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-orange-400 mb-3">
          🜂 PLANETARY ASPECTS RECEIVED — KETU'S REFINING FIRE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-orange-300 font-semibold">Aspected by: KETU (South Node)</p>
          <p>
            Ketu, the South Node of the Moon, aspects your Sun — a <span className="text-white font-semibold">profound karmic signature</span>. 
            Ketu represents <span className="text-orange-300 font-semibold">past life mastery</span>, <span className="text-orange-300 font-semibold">spiritual detachment</span>, 
            and the <span className="text-orange-300 font-semibold">dissolution of ego</span>. Its aspect on your Sun creates a fascinating paradox: 
            the planet of ego receives the influence of ego's dissolution.
          </p>
          <p>
            This is not a punishment — this is <span className="text-white font-semibold">refinement</span>. Ketu's aspect on the Sun in the 10th house 
            suggests you've been in positions of power before, perhaps many times. You carry the <span className="text-orange-300 font-semibold">cellular memory of 
            leadership</span>, but also the wisdom of its limitations. You know, at a soul level, that all worldly power is temporary.
          </p>
          <p>
            Ketu's influence makes you naturally <span className="text-white font-semibold">detached from the very success you're meant to achieve</span>. 
            You can reach great heights professionally because you're not desperately grasping for them. This detachment is your 
            <span className="text-orange-300 font-semibold">secret weapon</span> — it allows you to take risks others won't, to walk away from situations that 
            compromise your integrity, to choose dharma over profit.
          </p>
          <p>
            <span className="text-orange-300 font-semibold">The Alchemy Created:</span><br/>
            • Sudden shifts in career or public image that ultimately elevate you<br/>
            • A sense of <span className="text-white">not belonging</span> that keeps you authentic<br/>
            • The need to constantly <span className="text-white">reconnect with purpose</span> when worldly achievement feels empty<br/>
            • Tests of whether you're attached to the form or the essence of your work
          </p>
          <p className="italic text-white font-semibold">
            "Coal under pressure becomes diamond. You are being pressed by Ketu not to break you, but to reveal your brilliance."
          </p>
          <p className="text-white font-semibold">
            This aspect is forging you into a <span className="text-orange-300">spiritual leader who leads by letting go</span>, who achieves by surrendering, 
            who rises by having no fear of falling. You're learning that the highest expression of the Sun — <span className="text-orange-300">pure consciousness</span> — 
            emerges only when the ego has been refined in Ketu's spiritual fire.
          </p>
        </div>
      </div>

      {/* Final Insight */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          ✨ FINAL INSIGHT — THE PLANET'S MESSAGE FOR THE SOUL
        </h4>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p className="text-yellow-300 italic text-base">
            "You are not here to escape your karma — you are here to master it."
          </p>
          <p>
            Your Sun in Pisces in the 10th house, in Uttarabhadra nakshatra, aspected by Ketu, is not a random cosmic accident. 
            This is your <span className="text-white font-semibold">soul's conscious choice</span> — a deliberately designed curriculum 
            for mastering the paradox of spiritual leadership.
          </p>
          <p>
            You chose to be a <span className="text-yellow-300 font-semibold">public mystic</span> in an age that desperately needs bridges 
            between the spiritual and material worlds. Your Pisces Sun makes you fluid enough to understand all perspectives, while your 
            10th house placement ensures you have the platform to share this understanding. Uttarabhadra gives you the 
            <span className="text-white font-semibold">patience to persist</span> when the path seems impossible, while Ketu's aspect ensures 
            you never forget that all of this is ultimately maya — divine play.
          </p>
          <p>
            Your dharma is to demonstrate that <span className="text-yellow-300 font-semibold">success and spirituality are not opposites</span>, 
            that one can be powerful and compassionate, visible and humble, authoritative and surrendered. You're here to show that the mystic 
            path doesn't require renouncing the world but rather <span className="text-white font-semibold">infusing the world with consciousness</span>.
          </p>
          <p>
            The Sun in you is learning its ultimate lesson: <span className="text-yellow-300 font-semibold">true radiance comes not from burning 
            brighter but from burning purer</span>. Your light is meant to be like the Sun on water — reflected, refracted, dancing, accessible 
            to all who thirst.
          </p>
          <p className="text-white italic">
            "You are the proof that God can wear a business suit, that heaven has a LinkedIn profile, that enlightenment might happen in 
            a boardroom as easily as in a cave. Your soul chose this configuration to remember: <span className="text-yellow-300 font-semibold">
            the spiritual path isn't about leaving the world — it's about loving it awake</span>."
          </p>
          <p className="text-yellow-300 font-semibold text-base mt-4">
            Your Sun whispers: "Shine without burning. Lead without forcing. Succeed without grasping. Be the lighthouse that stands firm 
            in transcendent waters, guiding souls home to themselves. This is not your burden — this is your blessing. This is not your 
            karma — this is your dharma. And you, beloved soul, were born ready."
          </p>
        </div>
      </div>
    </>
  )

  const renderMoonContent = () => (
    <>
      {/* Moon Content */}
      {/* TL;DR - Planetary Destiny Snapshot */}
      <div className="border border-gray-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-gray-400 mb-3">
          💡 TL;DR — PLANETARY DESTINY SNAPSHOT
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">Planet</td>
                <td className="py-2">Moon</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">Sign</td>
                <td className="py-2">Sagittarius</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">Nakshatra</td>
                <td className="py-2">Purvashadha 1</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">House</td>
                <td className="py-2">7</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">Lordship</td>
                <td className="py-2">2</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">Aspects Given</td>
                <td className="py-2">1</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-300 font-semibold">Aspected By</td>
                <td className="py-2">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Moon in Vedic Astrology */}
      <div className="border border-gray-500/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-gray-500 mb-3">
          🪐 MOON IN VEDIC ASTROLOGY — THE MIND'S ETERNAL MIRROR
        </h4>
        <div className="space-y-3 text-sm text-gray-300">
          <p className="text-gray-300 italic font-semibold">
            "The Moon does not create light — it reflects it. So too does the mind not create reality — it perceives and shapes it."
          </p>
          <p className="leading-relaxed">
            In Vedic astrology, <span className="text-white font-semibold">Chandra</span> (the Moon) represents 
            <span className="text-gray-300 font-semibold">Manas</span> — the mind itself, the most powerful instrument in creation. 
            While the Sun is your soul's essence, the Moon is your <span className="text-white font-semibold">emotional body</span>, 
            your <span className="text-white font-semibold">perceptual lens</span>, and your <span className="text-white font-semibold">karmic memory bank</span>. 
            It is the mother of the zodiac, the nurturer of consciousness, the keeper of your deepest feelings.
          </p>
          <p className="leading-relaxed">
            The Moon governs <span className="text-gray-300">emotions, intuition, memory, and receptivity</span>. It rules the 
            <span className="text-white">subconscious mind</span>, the realm where all your past impressions (samskaras) are stored. 
            The Moon is the <span className="text-white font-semibold">fastest-moving planet</span>, changing signs every 2.5 days, 
            reflecting the fluid, changeable nature of the mind and emotions.
          </p>
          <p className="leading-relaxed">
            More than any other planet, the Moon determines your <span className="text-white font-semibold">moment-to-moment experience</span> 
            of life. It shapes how you <span className="text-gray-300">feel</span>, how you <span className="text-gray-300">react</span>, 
            how you <span className="text-gray-300">nurture and seek nurturing</span>. A strong Moon grants emotional resilience, 
            intuitive wisdom, and the ability to flow with life's rhythms.
          </p>
          <p className="leading-relaxed">
            The Moon gives results through <span className="text-gray-300 font-semibold">reflection and response</span> — it shows 
            where you are most receptive, where you absorb life's experiences, and where you have the power to nurture growth. 
            Its lessons come through <span className="text-white">emotional experiences</span>, <span className="text-white">relationship dynamics</span>, 
            and the <span className="text-white">cultivation of inner peace</span>.
          </p>
          
        </div>
      </div>

      {/* Moon in Sagittarius */}
      <div className="border border-purple-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-purple-400 mb-3">
          ♐ MOON IN SAGITTARIUS — THE PHILOSOPHICAL ADVENTURER
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Sagittarius, the centaur-archer, is where <span className="text-white font-semibold">the mind seeks meaning</span>. 
            Ruled by <span className="text-purple-300">Jupiter</span>, the great benefic, this mutable fire sign represents 
            <span className="text-purple-300 font-semibold">the quest for truth</span>, the expansion of consciousness, the eternal student-teacher. 
            It is the sign of <span className="text-white">dharma itself</span> — righteous living aligned with cosmic law.
          </p>
          <p>
            When the Moon, that keeper of emotions and subconscious patterns, enters Sagittarius, something extraordinary occurs: 
            <span className="text-purple-300 font-semibold">the mind becomes a spiritual warrior</span>. This is the placement of the 
            <span className="text-white font-semibold">philosopher-poet</span>, the <span className="text-white font-semibold">wisdom keeper</span>, 
            the eternal optimist who finds meaning even in chaos.
          </p>
          <p>
            Your Moon in Sagittarius makes you <span className="text-white font-semibold">emotionally fed by adventure and truth</span>. 
            The fire element transforms the Moon's watery nature into steam — rising, expanding, reaching for heaven. You possess the gift of 
            <span className="text-purple-300">philosophical alchemy</span>: the ability to transmute any emotional experience into wisdom, 
            any pain into teaching, any joy into gratitude.
          </p>
          <p>
            The shadow work involves the tendency to <span className="text-purple-300 font-semibold">run from emotional depth through philosophy</span>. 
            Sagittarius can use wisdom as armor, preferring the safety of theory to the vulnerability of feeling. Your spiritual evolution requires you to 
            <span className="text-white font-semibold">be both the archer and the target</span> — to seek truth while being willing to be pierced by it.
          </p>
          <p className="text-white font-semibold">
            The mastery of Moon in Sagittarius is to become a <span className="text-purple-300">living bridge between earth and sky</span> — 
            grounded in emotional truth while expanded in spiritual vision. You're learning that true wisdom comes not from escaping feelings 
            but from <span className="text-purple-300">understanding their higher purpose</span>.
          </p>
        </div>
      </div>

      {/* Purvashadha Nakshatra */}
      <div className="border border-cyan-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-cyan-400 mb-3">
          🏹 NAKSHATRA — PURVASHADHA: THE INVINCIBLE STAR
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            <span className="text-cyan-300 font-semibold">Nakshatra:</span> Purvashadha, "The Former Invincible One"<br/>
            <span className="text-cyan-300 font-semibold">Symbol:</span> Elephant's tusk / Fan / Winnowing basket<br/>
            <span className="text-cyan-300 font-semibold">Deity:</span> Apah (Water Deities) / Varuna (Lord of Waters)<br/>
            <span className="text-cyan-300 font-semibold">Ruling Planet:</span> Venus<br/>
            <span className="text-cyan-300 font-semibold">Pada:</span> 1 (Leo Navamsa)
          </p>
          <p>
            Your Moon resides in Purvashadha, the nakshatra of <span className="text-white font-semibold">invincible victory</span>. 
            Its symbol, the elephant's tusk, represents <span className="text-cyan-300 font-semibold">the power to pierce through obstacles</span>. 
            The fan symbolizes <span className="text-white">the ability to winnow truth from illusion</span>, to separate the essential from the superficial.
          </p>
          <p>
            Ruled by Venus, Purvashadha grants <span className="text-cyan-300 font-semibold">the power of rejuvenation and purification</span>. 
            This is the nakshatra of <span className="text-white font-semibold">early victory</span> — you have an innate ability to succeed 
            through faith and enthusiasm. Your emotional nature carries the quality of <span className="text-white">invincibility through optimism</span>.
          </p>
          <p>
            In <span className="text-cyan-300 font-semibold">Pada 1</span> (Leo navamsa), your Moon gains the Sun's royal radiance. This is the pada of 
            <span className="text-white font-semibold">creative sovereignty</span> — you don't just feel emotions, you <span className="text-white">create with them</span>. 
            The Leo influence makes you emotionally generous, dramatically expressive, and naturally magnetic. You have the heart of a 
            <span className="text-cyan-300">spiritual performer</span> who inspires through authentic self-expression.
          </p>
          <p className="italic text-white font-semibold">
            "This is the soul of the inspirational leader who conquers through joy, the teacher who transforms through enthusiasm, 
            the healer who regenerates through faith."
          </p>
          <p>
            The Purvashadha Moon in Pada 1 creates a powerful combination: you have the <span className="text-white font-semibold">optimism of Sagittarius</span>, 
            the <span className="text-white font-semibold">invincibility of Purvashadha</span>, and the <span className="text-white font-semibold">creative fire of Leo</span>. 
            Your medicine is the ability to <span className="text-cyan-300">inspire victory in others</span> through your unshakeable faith in life's ultimate goodness.
          </p>
        </div>
      </div>

      {/* Moon as Lord of 2nd House */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          🏛 MOON AS LORD OF 2ND HOUSE — THE KARMA OF RULE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            As ruler of your 2nd house, the Moon governs your <span className="text-white font-semibold">wealth, values, speech, family heritage, 
            and accumulated resources</span>. But it expresses these themes from the 7th house — the domain of 
            <span className="text-white font-semibold">partnerships, marriage, and the other</span>.
          </p>
          <p>
            This creates a profound karmic link: your <span className="text-yellow-300 font-semibold">wealth flows through relationships</span>. 
            Your values are shaped by partnership, your resources expand through collaboration, your voice finds its power in dialogue. 
            The universe has designed you to <span className="text-white font-semibold">create abundance through union</span>.
          </p>
          <p>
            The 2nd house is the house of <span className="text-yellow-300">accumulated karma</span> — what you've brought from past lives. 
            With its lord in the 7th, your past-life wealth is <span className="text-white font-semibold">stored in your capacity for relationship</span>. 
            You've been a counselor, a diplomat, a sacred partner before. These skills are your true inheritance.
          </p>
          <p>
            This placement also suggests that your <span className="text-yellow-300">speech has partnership power</span>. When you speak, 
            you naturally create bridges, forge alliances, inspire collaboration. Your words carry the <span className="text-white font-semibold">vibration of unity</span>, 
            even when you speak alone.
          </p>
          <p className="text-white font-semibold">
            The Moon as 2nd lord in the 7th makes you a <span className="text-yellow-300">guardian of sacred exchange</span>. Your dharma involves 
            teaching others that true wealth is not what we possess alone but what we <span className="text-yellow-300">create together</span>.
          </p>
        </div>
      </div>

      {/* Moon in 7th House */}
      <div className="border border-pink-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-pink-400 mb-3">
          🧱 MOON IN 7TH HOUSE — THE PARTNERSHIP MYSTIC
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            The 7th house is the <span className="text-white font-semibold">descendant</span> — the point where we meet the other, 
            representing <span className="text-pink-300">marriage, partnerships, open enemies, and the public</span>. It's where the self 
            discovers itself through the mirror of relationship.
          </p>
          <p>
            Your Moon here makes <span className="text-pink-300 font-semibold">relationship your emotional home</span>. You don't just want 
            partnership — you <span className="text-white font-semibold">need it to feel complete</span>. But this is not weakness; this is wisdom. 
            You understand that <span className="text-white">consciousness evolves through connection</span>, that we become whole not in isolation but in union.
          </p>
          <p>
            This placement demands that you <span className="text-pink-300 font-semibold">master the art of emotional diplomacy</span>. 
            You're learning to maintain your emotional center while being deeply affected by others. The 7th house is your 
            <span className="text-white">relationship dojo</span>, your <span className="text-white">partnership temple</span>, your 
            <span className="text-white">sacred mirror</span> where you discover parts of yourself only visible through another's eyes.
          </p>
          <p>
            The karmic terrain involves learning to <span className="text-pink-300">balance autonomy with intimacy</span>, to be 
            emotionally available without losing yourself, to need without being needy. The 7th house tests you through 
            <span className="text-white">relationship dynamics</span>, <span className="text-white">projection patterns</span>, and the 
            <span className="text-white">dance of give and take</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This house is your initiation into sacred partnership — where you learn that true union requires two whole beings, 
            not two halves seeking completion."
          </p>
          <p className="text-white font-semibold">
            Your soul must master the art of being a <span className="text-pink-300">relationship alchemist</span>: transforming every partnership 
            into a spiritual opportunity, every conflict into growth, every union into evolution. You're learning that the highest form of 
            relationship is <span className="text-pink-300">conscious partnership</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Given */}
      <div className="border border-green-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-green-400 mb-3">
          🪄 PLANETARY ASPECTS GIVEN — WHERE YOU APPLY ENERGY & KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-green-300 font-semibold">The 1st House (Ascendant): Illuminating Your Identity</p>
          <p>
            Your Moon casts its full aspect upon the 1st house — your <span className="text-white font-semibold">Ascendant, 
            the dawn point of your chart</span>, representing your physical body, personality, and how you project yourself into the world.
          </p>
          <p>
            This aspect creates a powerful dynamic: your <span className="text-green-300 font-semibold">emotions directly shape your identity</span>. 
            There's no hiding how you feel — your emotional state radiates through your very being. This makes you 
            <span className="text-white font-semibold">authentically transparent</span>, incapable of sustained pretense.
          </p>
          <p>
            The Moon's aspect to the Ascendant means your <span className="text-white font-semibold">physical body responds to emotional states</span>. 
            You literally embody your feelings. This can make you <span className="text-green-300">highly intuitive about your health</span> — 
            your body tells you what your emotions need.
          </p>
          <p>
            This aspect grants tremendous gifts:<br/>
            • Your personality has <span className="text-green-300">magnetic emotional authenticity</span><br/>
            • People instinctively trust you because you cannot fake your feelings<br/>
            • Your <span className="text-green-300">emotional intelligence becomes visible charisma</span><br/>
            • You have the ability to <span className="text-green-300">emotionally attune entire rooms</span> to your frequency
          </p>
          <p>
            The 7th-to-1st axis creates the <span className="text-white font-semibold">relationship-identity dynamic</span>: who you are (1st) 
            is deeply influenced by who you're with (7th). Your partnerships literally <span className="text-green-300 font-semibold">reshape your personality</span>.
          </p>
          <p className="text-white font-semibold">
            This aspect suggests that your <span className="text-green-300">true self emerges through relationship</span>. You discover who you are 
            not in isolation but in the sacred dance of connection. Every partnership is an opportunity to birth a new aspect of yourself.
          </p>
        </div>
      </div>

      {/* Final Insight */}
      <div className="border border-gray-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-gray-400 mb-3">
          ✨ FINAL INSIGHT — THE MOON'S MESSAGE FOR THE SOUL
        </h4>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p className="text-gray-300 italic text-base">
            "You are not here to escape your karma — you are here to master it."
          </p>
          <p>
            Your Moon in Sagittarius in the 7th house, in Purvashadha nakshatra, is your <span className="text-white font-semibold">soul's conscious design</span> 
            for mastering the sacred art of conscious relationship. You chose this configuration to learn that 
            <span className="text-gray-300 font-semibold">wisdom comes through connection</span>, that truth is discovered in dialogue, 
            that the highest philosophy is love in action.
          </p>
          <p>
            You are a <span className="text-gray-300 font-semibold">relationship philosopher</span> in an age that desperately needs to understand 
            sacred partnership. Your Sagittarius Moon makes you optimistic enough to keep believing in love, while your 7th house placement 
            ensures you have the experience to make it real. Purvashadha gives you the <span className="text-white font-semibold">invincibility to persist</span> 
            when relationships challenge you, while the Leo pada ensures you never lose your sovereign self in the process.
          </p>
          <p>
            Your dharma is to demonstrate that <span className="text-gray-300 font-semibold">relationships are spiritual paths</span>, 
            that partnership is a form of yoga, that every connection is an opportunity for consciousness expansion. You're here to show that 
            we don't lose ourselves in relationship — we <span className="text-white font-semibold">discover ourselves through it</span>.
          </p>
          <p>
            The Moon in you is learning its ultimate lesson: <span className="text-gray-300 font-semibold">emotional mastery comes not from 
            controlling feelings but from understanding their sacred purpose</span>. Your emotions are meant to be bridges — connecting 
            you to others, to truth, to the divine.
          </p>
          <p className="text-white italic">
            "You are the proof that the mystic path includes sacred partnership, that enlightenment can happen in embrace as easily as in solitude. 
            Your soul chose this configuration to remember: <span className="text-gray-300 font-semibold">we are not here to transcend relationship — 
            we are here to make relationship transcendent</span>."
          </p>
          <p className="text-gray-300 font-semibold text-base mt-4">
            Your Moon whispers: "Feel without drowning. Connect without merging. Love without losing yourself. Be the philosopher who doesn't just 
            think about truth but feels it, the partner who doesn't just want love but becomes it. This is not your challenge — this is your gift. 
            This is not your karma to endure — this is your dharma to embody. And you, beloved soul, came here to show the world that the 
            greatest wisdom is an open heart."
          </p>
        </div>
      </div>
    </>
  )

  const renderMarsContent = () => (
    <>
      {/* Mars Content */}
      {/* TL;DR - Planetary Destiny Snapshot */}
      <div className="border border-red-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-red-400 mb-3">
          💡 TL;DR — PLANETARY DESTINY SNAPSHOT
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="py-2 text-red-300 font-semibold">Planet</td>
                <td className="py-2">Mars</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-red-300 font-semibold">Sign</td>
                <td className="py-2">Aries</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-red-300 font-semibold">Nakshatra</td>
                <td className="py-2">Krittika 1</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-red-300 font-semibold">House</td>
                <td className="py-2">11</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-red-300 font-semibold">Lordship</td>
                <td className="py-2">6, 11</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-red-300 font-semibold">Aspects Given</td>
                <td className="py-2">2, 5, 6</td>
              </tr>
              <tr>
                <td className="py-2 text-red-300 font-semibold">Aspected By</td>
                <td className="py-2">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mars in Vedic Astrology */}
      <div className="border border-red-500/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-red-500 mb-3">
          🪐 MARS IN VEDIC ASTROLOGY — THE COSMIC WARRIOR
        </h4>
        <div className="space-y-3 text-sm text-gray-300">
          <p className="text-red-300 italic font-semibold">
            "Mars does not fight to destroy — it fights to become."
          </p>
          <p className="leading-relaxed">
            In Vedic astrology, <span className="text-white font-semibold">Mangal</span> (Mars) is the 
            <span className="text-red-300 font-semibold">cosmic warrior</span>, the planet of action, courage, and transformation through conflict. 
            Mars represents your <span className="text-white font-semibold">vital force</span>, your ability to assert will into reality, 
            and your capacity to <span className="text-white font-semibold">cut through obstacles</span> with the precision of a sacred blade.
          </p>
          <p className="leading-relaxed">
            Mars governs <span className="text-red-300">energy, ambition, passion, and conquest</span>. It is the commander-in-chief of the planetary cabinet, 
            the natural significator of brothers, land, and physical strength. But more profoundly, Mars represents your 
            <span className="text-white font-semibold">spiritual warrior nature</span> — your ability to fight for dharma, to protect the sacred, 
            to transform raw energy into purposeful action.
          </p>
          <p className="leading-relaxed">
            Unlike planets that influence through emotion or thought, Mars shapes reality through <span className="text-white font-semibold">direct action</span>. 
            It doesn't contemplate or feel — it <span className="text-white font-semibold">moves, strikes, transforms</span>. 
            Mars reveals where you're meant to be courageous, where you must take initiative, where your warrior spirit awakens.
          </p>
          <p className="leading-relaxed">
            Mars gives results through <span className="text-red-300 font-semibold">friction and fire</span> — it creates heat that either 
            forges you into steel or consumes you in rage. Its lessons come through <span className="text-white">conflict resolution</span>, 
            <span className="text-white">tests of courage</span>, and the <span className="text-white">mastery of your own power</span>.
          </p>
        </div>
      </div>

      {/* Mars in Aries */}
      <div className="border border-orange-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-orange-400 mb-3">
          ♈ MARS IN ARIES — THE PRIMORDIAL WARRIOR
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Aries, the ram, is where <span className="text-white font-semibold">pure life force explodes into existence</span>. 
            This cardinal fire sign, ruled by Mars itself, represents <span className="text-orange-300 font-semibold">the initial spark of creation</span>, 
            the first breath of spring, the primal "I AM" that births all experience. It is the sign of 
            <span className="text-white">new beginnings</span>, raw courage, and pioneering spirit.
          </p>
          <p>
            When Mars returns home to Aries, something magnificent occurs: 
            <span className="text-orange-300 font-semibold">the warrior finds its throne</span>. This is Mars in its own sign (swakshetra), 
            operating at <span className="text-white font-semibold">maximum power and purity</span>. You don't just have Mars energy — you 
            <span className="text-white font-semibold">ARE Mars energy</span>, unfiltered and uncompromised.
          </p>
          <p>
            Your Mars in Aries makes you a <span className="text-white font-semibold">natural-born leader and initiator</span>. 
            You possess the ram's gift: the ability to <span className="text-orange-300">break through any barrier</span> with sheer force of will. 
            Your courage is not learned — it's <span className="text-white">instinctual</span>, arising from a soul that remembers its divine warrior nature.
          </p>
          <p>
            The shadow work involves mastering <span className="text-orange-300 font-semibold">the difference between assertion and aggression</span>. 
            Aries can mistake destruction for creation, confusing the thrill of conflict with the joy of achievement. Your spiritual evolution requires you to be 
            <span className="text-white font-semibold">the sacred warrior</span> — fighting for something greater than personal victory.
          </p>
          <p className="text-white font-semibold">
            The mastery of Mars in Aries is to become <span className="text-orange-300">pure directed will</span> — action without anger, 
            courage without cruelty, leadership without domination. You're learning that true strength is not in conquering others but in 
            <span className="text-orange-300">conquering your own lower nature</span>.
          </p>
        </div>
      </div>

      {/* Krittika Nakshatra */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          🏹 NAKSHATRA — KRITTIKA: THE COSMIC BLADE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            <span className="text-yellow-300 font-semibold">Nakshatra:</span> Krittika, "The Cutter"<br/>
            <span className="text-yellow-300 font-semibold">Symbol:</span> Razor, Flame, Axe<br/>
            <span className="text-yellow-300 font-semibold">Deity:</span> Agni (God of Fire) / Karttikeya (God of War)<br/>
            <span className="text-yellow-300 font-semibold">Ruling Planet:</span> Sun<br/>
            <span className="text-yellow-300 font-semibold">Pada:</span> 1 (Sagittarius Navamsa)
          </p>
          <p>
            Your Mars resides in Krittika, the nakshatra of <span className="text-white font-semibold">the cosmic blade</span>. 
            Its symbol, the razor, represents <span className="text-yellow-300 font-semibold">the power to cut through illusion</span> with surgical precision. 
            The flame symbolizes <span className="text-white">purification through fire</span> — burning away the unnecessary to reveal the essential.
          </p>
          <p>
            Ruled by the Sun, Krittika grants <span className="text-yellow-300 font-semibold">the power of spiritual surgery</span>. 
            This is the nakshatra of <span className="text-white font-semibold">divine discernment</span> — you have an innate ability to separate 
            truth from falsehood, to cut karmic cords, to perform necessary destructions that enable new growth. Your Mars carries the quality of 
            <span className="text-white">sacred fire</span> that both destroys and purifies.
          </p>
          <p>
            In <span className="text-yellow-300 font-semibold">Pada 1</span> (Sagittarius navamsa), your Mars gains Jupiter's wisdom and righteousness. 
            This is the pada of <span className="text-white font-semibold">the dharmic warrior</span> — you don't just fight, you 
            <span className="text-white">fight for truth</span>. The Sagittarius influence makes your aggression philosophical, your courage principled, 
            your battles meaningful. You have the soul of a <span className="text-yellow-300">crusader for justice</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This is the soul of the spiritual warrior who wields truth as a weapon, the revolutionary who burns down corruption to plant seeds of dharma, 
            the protector who guards the sacred flame."
          </p>
          <p>
            The Krittika Mars in Pada 1 creates divine fire: you have the <span className="text-white font-semibold">courage of Aries</span>, 
            the <span className="text-white font-semibold">precision of Krittika</span>, and the <span className="text-white font-semibold">wisdom of Sagittarius</span>. 
            Your medicine is the ability to <span className="text-yellow-300">transform conflict into consciousness</span>, to use every battle as an opportunity 
            for spiritual growth.
          </p>
        </div>
      </div>

      {/* Mars as Lord of Houses */}
      <div className="border border-cyan-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-cyan-400 mb-3">
          🏛 MARS AS LORD OF 6TH & 11TH HOUSES — THE KARMA OF RULE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            As ruler of your 6th house, Mars governs your <span className="text-white font-semibold">enemies, obstacles, service, health, and daily battles</span>. 
            As ruler of your 11th house, it also governs your <span className="text-white font-semibold">gains, friendships, networks, and highest aspirations</span>. 
            Both these domains express through the 11th house itself.
          </p>
          <p>
            This creates a powerful karmic configuration: your <span className="text-cyan-300 font-semibold">obstacles become your opportunities</span> (6th to 11th), 
            and your <span className="text-cyan-300 font-semibold">gains come through conquest</span> (11th lord in 11th). You're designed to 
            <span className="text-white font-semibold">transform enemies into allies</span>, problems into profits, conflicts into connections.
          </p>
          <p>
            The 6th house is the house of <span className="text-cyan-300">karma yoga</span> — selfless service. With its lord in the 11th, 
            your service to others becomes your path to fulfillment. You gain most when you <span className="text-white font-semibold">fight for collective benefit</span>, 
            not personal glory.
          </p>
          <p>
            The 11th lord in its own house creates a <span className="text-cyan-300">dhana yoga</span> (wealth combination). Mars here suggests gains through 
            <span className="text-white">courageous action</span>, <span className="text-white">pioneering ventures</span>, and 
            <span className="text-white">leading group efforts</span>. Your wealth comes from being the warrior who fights for the tribe.
          </p>
          <p className="text-white font-semibold">
            Mars as 6th and 11th lord makes you a <span className="text-cyan-300">karmic alchemist</span> — someone who transforms conflict into community, 
            competition into collaboration. Your dharma involves showing others that <span className="text-cyan-300">we rise by lifting others</span>.
          </p>
        </div>
      </div>

      {/* Mars in 11th House */}
      <div className="border border-purple-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-purple-400 mb-3">
          🧱 MARS IN 11TH HOUSE — THE NETWORK WARRIOR
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            The 11th house is the <span className="text-white font-semibold">house of gains</span> — representing 
            <span className="text-purple-300">friendships, networks, aspirations, and collective consciousness</span>. It's where individual effort 
            meets collective reward, where personal ambition serves universal purpose.
          </p>
          <p>
            Your Mars here makes you a <span className="text-purple-300 font-semibold">warrior for collective causes</span>. You don't fight alone — 
            you <span className="text-white font-semibold">mobilize armies</span>. Your courage inspires groups, your energy catalyzes movements, 
            your passion ignites collective action. You're the spark that lights the revolutionary fire.
          </p>
          <p>
            This placement demands that you <span className="text-purple-300 font-semibold">channel aggression into aspiration</span>. 
            The 11th house is your <span className="text-white">networking dojo</span>, your <span className="text-white">friendship battlefield</span>, 
            your <span className="text-white">collective mission field</span> where you learn that true victory is shared victory.
          </p>
          <p>
            The karmic terrain involves learning to <span className="text-purple-300">lead without dominating</span>, to inspire without intimidating, 
            to achieve without alienating. The 11th house tests you through <span className="text-white">group dynamics</span>, 
            <span className="text-white">collective goals</span>, and the <span className="text-white">balance between personal and collective gain</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This house is your initiation into collective power — where you learn that the strongest warrior is the one who makes others strong, 
            that the greatest victory is the one everyone shares."
          </p>
          <p className="text-white font-semibold">
            Your soul must master the art of being a <span className="text-purple-300">network activator</span>: using your Mars energy to 
            energize entire communities, to fight for collective dreams, to pioneer paths that others can follow. You're learning that 
            <span className="text-purple-300">true leadership creates more leaders</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Given */}
      <div className="border border-green-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-green-400 mb-3">
          🪄 PLANETARY ASPECTS GIVEN — WHERE YOU APPLY ENERGY & KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-green-300 font-semibold">Mars Aspects: 2nd, 5th, and 6th Houses</p>
          
          <div className="mt-3">
            <p className="text-green-300 font-semibold">The 2nd House: Warrior's Wealth</p>
            <p>
              Your Mars aspects the 2nd house of <span className="text-white font-semibold">wealth, speech, and family values</span>. 
              This creates <span className="text-green-300">aggressive accumulation</span> — you fight for financial security, speak with warrior force, 
              and defend family values with fierce loyalty.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-green-300 font-semibold">The 5th House: Creative Fire</p>
            <p>
              Mars aspects your 5th house of <span className="text-white font-semibold">creativity, intelligence, and children</span>. 
              This ignites <span className="text-green-300">creative courage</span> — you approach creative projects like battles to win, 
              romance with warrior passion, and protect children with fierce devotion.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-green-300 font-semibold">The 6th House: Conquering Obstacles</p>
            <p>
              Mars aspects its own 6th house of <span className="text-white font-semibold">enemies, obstacles, and service</span>. 
              This creates a <span className="text-green-300">double warrior effect</span> — you're especially powerful at defeating enemies, 
              overcoming obstacles, and transforming service into strength.
            </p>
          </div>

          <p className="mt-3">
            These aspects create a <span className="text-white font-semibold">triangle of manifestation</span>: your network energy (11th) 
            fuels your resources (2nd), ignites your creativity (5th), and conquers your obstacles (6th). This is the configuration of someone who 
            <span className="text-green-300 font-semibold">creates wealth through creative courage and collaborative conquest</span>.
          </p>
        </div>
      </div>

      {/* Final Insight */}
      <div className="border border-red-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-red-400 mb-3">
          ✨ FINAL INSIGHT — MARS'S MESSAGE FOR THE SOUL
        </h4>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p className="text-red-300 italic text-base">
            "You are not here to escape your karma — you are here to master it."
          </p>
          <p>
            Your Mars in Aries in the 11th house, in Krittika nakshatra, is your <span className="text-white font-semibold">soul's divine weapon</span> 
            for cutting through collective karma and pioneering new paths for humanity. You chose this configuration to be a 
            <span className="text-red-300 font-semibold">spiritual revolutionary</span> — someone who transforms society through sacred action.
          </p>
          <p>
            You are a <span className="text-red-300 font-semibold">network warrior</span> in an age that needs collective courage. 
            Your Aries Mars gives you the pure fire to initiate change, while your 11th house placement ensures that change serves the collective good. 
            Krittika gives you the <span className="text-white font-semibold">precision to cut through illusion</span>, while the Sagittarius pada 
            ensures your battles serve truth.
          </p>
          <p>
            Your dharma is to demonstrate that <span className="text-red-300 font-semibold">strength multiplies when shared</span>, 
            that courage is contagious, that one warrior can awaken an army of light-bearers. You're here to show that we don't need to fight 
            each other — we need to <span className="text-white font-semibold">fight together against ignorance, injustice, and illusion</span>.
          </p>
          <p>
            The Mars in you is learning its ultimate lesson: <span className="text-red-300 font-semibold">true power is not in domination but in 
            activation</span>. Your fire is meant to light other fires, your courage to awaken courage in others, your victories to create 
            platforms for collective triumph.
          </p>
          <p className="text-white italic">
            "You are the proof that the warrior path includes brotherhood, that strength includes service, that victory includes everyone. 
            Your soul chose this configuration to remember: <span className="text-red-300 font-semibold">we are not here to win alone — 
            we are here to ensure everyone wins</span>."
          </p>
          <p className="text-red-300 font-semibold text-base mt-4">
            Your Mars whispers: "Fight with love. Lead with courage. Win by lifting others. Be the warrior who doesn't just break down walls but 
            builds bridges from the rubble. This is not your burden — this is your blessing. This is not just your fight — this is humanity's 
            fight, and you were born to lead the charge. The question isn't whether you're strong enough — you are. The question is: 
            are you ready to show others their strength too?"
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
      return renderMarsContent()
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