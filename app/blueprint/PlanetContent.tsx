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

  const renderMercuryContent = () => (
    <>
      {/* Mercury Content */}
      {/* TL;DR - Planetary Destiny Snapshot */}
      <div className="border border-emerald-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-emerald-400 mb-3">
          💡 TL;DR — PLANETARY DESTINY SNAPSHOT
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="py-2 text-emerald-300 font-semibold">Planet</td>
                <td className="py-2">Mercury</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-emerald-300 font-semibold">Sign</td>
                <td className="py-2">Aquarius</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-emerald-300 font-semibold">Nakshatra</td>
                <td className="py-2">Satabhisa 2</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-emerald-300 font-semibold">House</td>
                <td className="py-2">9</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-emerald-300 font-semibold">Lordship</td>
                <td className="py-2">1, 4</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-emerald-300 font-semibold">Aspects Given</td>
                <td className="py-2">3</td>
              </tr>
              <tr>
                <td className="py-2 text-emerald-300 font-semibold">Aspected By</td>
                <td className="py-2">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mercury in Vedic Astrology */}
      <div className="border border-emerald-500/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-emerald-500 mb-3">
          🪐 MERCURY IN VEDIC ASTROLOGY — THE COSMIC MESSENGER
        </h4>
        <div className="space-y-3 text-sm text-gray-300">
          <p className="text-emerald-300 italic font-semibold">
            "Mercury does not speak to be heard — it speaks to awaken understanding."
          </p>
          <p className="leading-relaxed">
            In Vedic astrology, <span className="text-white font-semibold">Budha</span> (Mercury) is the 
            <span className="text-emerald-300 font-semibold">cosmic messenger</span>, the planet of intellect, communication, and divine discrimination. 
            Mercury represents your <span className="text-white font-semibold">buddhi</span> — the higher mind that can perceive truth beyond illusion, 
            and your capacity to <span className="text-white font-semibold">bridge worlds through language and logic</span>.
          </p>
          <p className="leading-relaxed">
            Mercury governs <span className="text-emerald-300">intelligence, speech, commerce, and connection</span>. It is the prince of the planetary cabinet, 
            eternally young, curious, and adaptable. But more profoundly, Mercury represents your 
            <span className="text-white font-semibold">capacity for synthesis</span> — your ability to unite opposites, to translate the ineffable into words, 
            to make the abstract concrete.
          </p>
          <p className="leading-relaxed">
            Unlike other planets that influence through force or feeling, Mercury shapes reality through <span className="text-white font-semibold">perception and articulation</span>. 
            It doesn't create or destroy — it <span className="text-white font-semibold">connects, translates, transmits</span>. 
            Mercury reveals where you're meant to be the messenger, where you must speak truth, where your intellectual gifts serve dharma.
          </p>
          <p className="leading-relaxed">
            Mercury gives results through <span className="text-emerald-300 font-semibold">neural networks and connections</span> — it creates understanding that 
            links disparate ideas into coherent wisdom. Its lessons come through <span className="text-white">communication challenges</span>, 
            <span className="text-white">intellectual puzzles</span>, and the <span className="text-white">mastery of discernment</span>.
          </p>
        </div>
      </div>

      {/* Mercury in Aquarius */}
      <div className="border border-blue-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-blue-400 mb-3">
          ♒ MERCURY IN AQUARIUS — THE QUANTUM MIND
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Aquarius, the water-bearer, is where <span className="text-white font-semibold">consciousness downloads from the cosmic cloud</span>. 
            This fixed air sign, ruled by Saturn (traditional) and Uranus (modern), represents <span className="text-blue-300 font-semibold">the frequency of future</span>, 
            universal brotherhood, and revolutionary insight. It is the sign of <span className="text-white">collective consciousness</span>, 
            humanitarian vision, and quantum leaps.
          </p>
          <p>
            When Mercury enters Aquarius, something extraordinary occurs: 
            <span className="text-blue-300 font-semibold">the mind becomes a receiver for galactic intelligence</span>. This placement makes you a 
            <span className="text-white font-semibold">cognitive revolutionary</span>, someone whose thoughts naturally challenge convention and 
            download solutions from dimensions beyond linear logic.
          </p>
          <p>
            Your Mercury in Aquarius makes you a <span className="text-white font-semibold">systems thinker and pattern recognizer</span>. 
            You possess the water-bearer's gift: the ability to <span className="text-blue-300">pour wisdom from higher realms</span> into practical vessels. 
            Your intellect operates on <span className="text-white">multiple frequencies simultaneously</span>, making connections others can't even imagine.
          </p>
          <p>
            The shadow work involves grounding <span className="text-blue-300 font-semibold">brilliance into application</span>. 
            Aquarius can become so fascinated with concepts that it forgets to communicate them in ways others can understand. Your spiritual evolution requires you to be 
            <span className="text-white font-semibold">the translator of tomorrow</span> — making future wisdom accessible to present minds.
          </p>
          <p className="text-white font-semibold">
            The mastery of Mercury in Aquarius is to become a <span className="text-blue-300">living WiFi router for cosmic intelligence</span> — 
            receiving universal downloads while transmitting them in frequencies humans can receive. You're learning that genius without communication 
            is just <span className="text-blue-300">unexpressed potential</span>.
          </p>
        </div>
      </div>

      {/* Satabhisa Nakshatra */}
      <div className="border border-purple-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-purple-400 mb-3">
          🏹 NAKSHATRA — SATABHISA: THE HUNDRED HEALERS
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            <span className="text-purple-300 font-semibold">Nakshatra:</span> Satabhisa, "The Hundred Physicians"<br/>
            <span className="text-purple-300 font-semibold">Symbol:</span> Empty circle / 100 flowers or stars<br/>
            <span className="text-purple-300 font-semibold">Deity:</span> Varuna (Lord of Cosmic Waters)<br/>
            <span className="text-purple-300 font-semibold">Ruling Planet:</span> Rahu<br/>
            <span className="text-purple-300 font-semibold">Pada:</span> 2 (Capricorn Navamsa)
          </p>
          <p>
            Your Mercury resides in Satabhisa, the nakshatra of <span className="text-white font-semibold">the hundred healers</span>. 
            Its symbol, the empty circle, represents <span className="text-purple-300 font-semibold">the void that contains all possibilities</span>. 
            The hundred flowers symbolize <span className="text-white">multiple solutions to every problem</span> — the healing that comes from seeing all perspectives.
          </p>
          <p>
            Ruled by Rahu, Satabhisa grants <span className="text-purple-300 font-semibold">the power to heal through unconventional wisdom</span>. 
            This is the nakshatra of <span className="text-white font-semibold">cosmic medicine</span> — you have an innate ability to diagnose 
            problems at their root, to see the hidden causes of suffering, to prescribe remedies others haven't imagined. Your Mercury carries 
            <span className="text-white">healing frequencies</span> in its very vibration.
          </p>
          <p>
            In <span className="text-purple-300 font-semibold">Pada 2</span> (Capricorn navamsa), your Mercury gains Saturn's discipline and pragmatism. 
            This is the pada of <span className="text-white font-semibold">practical mysticism</span> — you don't just receive cosmic downloads, you 
            <span className="text-white">build structures to contain them</span>. The Capricorn influence makes your genius applicable, your insights actionable, 
            your revolutionary ideas achievable. You have the mind of an <span className="text-purple-300">architect of new realities</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This is the soul of the cosmic physician who heals through revolutionary understanding, the teacher who cures ignorance with quantum wisdom, 
            the messenger who brings tomorrow's medicine to today's ailments."
          </p>
          <p>
            The Satabhisa Mercury in Pada 2 creates profound depth: you have the <span className="text-white font-semibold">innovation of Aquarius</span>, 
            the <span className="text-white font-semibold">healing power of Satabhisa</span>, and the <span className="text-white font-semibold">manifestation ability of Capricorn</span>. 
            Your medicine is the ability to <span className="text-purple-300">download solutions from the future</span> and build bridges for others to reach them.
          </p>
        </div>
      </div>

      {/* Mercury as Lord of Houses */}
      <div className="border border-cyan-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-cyan-400 mb-3">
          🏛 MERCURY AS LORD OF 1ST & 4TH HOUSES — THE KARMA OF RULE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            As ruler of your 1st house (Ascendant), Mercury governs your <span className="text-white font-semibold">identity, physical body, personality, and life path</span>. 
            As ruler of your 4th house, it also governs your <span className="text-white font-semibold">emotional foundation, home, mother, and inner peace</span>. 
            Both these essential domains express through the 9th house of higher wisdom.
          </p>
          <p>
            This creates a sacred configuration: your <span className="text-cyan-300 font-semibold">identity is your wisdom</span> (1st lord in 9th), 
            and your <span className="text-cyan-300 font-semibold">inner peace comes from higher understanding</span> (4th lord in 9th). You're designed to 
            <span className="text-white font-semibold">BE the teaching you seek</span>, to find home in philosophy, to ground yourself in universal truth.
          </p>
          <p>
            The 1st house is the house of <span className="text-cyan-300">self</span>. With its lord in the 9th, 
            your very existence is a philosophical statement. You don't just have beliefs — you <span className="text-white font-semibold">embody them</span>. 
            Your personality itself becomes a teaching tool for dharma.
          </p>
          <p>
            The 4th lord in the 9th creates <span className="text-cyan-300">emotional wisdom</span>. Your deepest comfort comes from understanding life's bigger picture. 
            You find <span className="text-white">mother in philosophy</span>, <span className="text-white">home in higher learning</span>, 
            <span className="text-white">security in spiritual truth</span>. Your emotional foundation is built on universal principles.
          </p>
          <p className="text-white font-semibold">
            Mercury as 1st and 4th lord makes you a <span className="text-cyan-300">walking university</span> — someone whose very presence teaches, 
            whose personal story becomes universal wisdom. Your dharma involves showing others that <span className="text-cyan-300">we ARE what we understand</span>.
          </p>
        </div>
      </div>

      {/* Mercury in 9th House */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          🧱 MERCURY IN 9TH HOUSE — THE WISDOM SYNTHESIZER
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            The 9th house is the <span className="text-white font-semibold">house of dharma</span> — representing 
            <span className="text-yellow-300">higher learning, philosophy, spiritual teachers, and divine grace</span>. It's where the mind touches the infinite, 
            where personal understanding becomes universal wisdom.
          </p>
          <p>
            Your Mercury here makes you a <span className="text-yellow-300 font-semibold">translator of truth</span>. You don't just study philosophy — 
            you <span className="text-white font-semibold">decode its patterns</span>. Your intellect naturally seeks the meta-narrative, the unified theory, 
            the common thread that runs through all teachings. You're the student who becomes the synthesizer.
          </p>
          <p>
            This placement demands that you <span className="text-yellow-300 font-semibold">think in dharmic terms</span>. 
            The 9th house is your <span className="text-white">wisdom laboratory</span>, your <span className="text-white">philosophical playground</span>, 
            your <span className="text-white">truth-seeking mission control</span> where you learn that knowledge without wisdom is just information.
          </p>
          <p>
            The karmic terrain involves learning to <span className="text-yellow-300">balance skepticism with faith</span>, to question without becoming cynical, 
            to believe without becoming dogmatic. The 9th house tests you through <span className="text-white">philosophical dilemmas</span>, 
            <span className="text-white">ethical choices</span>, and the <span className="text-white">integration of multiple truth systems</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This house is your initiation into cosmic intelligence — where you learn that true wisdom synthesizes all perspectives, 
            that the highest truth includes all partial truths."
          </p>
          <p className="text-white font-semibold">
            Your soul must master the art of being a <span className="text-yellow-300">wisdom weaver</span>: taking threads from science, spirituality, 
            philosophy, and experience to create tapestries of understanding others can wear. You're learning that 
            <span className="text-yellow-300">the greatest teaching is synthesis</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Given */}
      <div className="border border-green-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-green-400 mb-3">
          🪄 PLANETARY ASPECTS GIVEN — WHERE YOU APPLY ENERGY & KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-green-300 font-semibold">The 3rd House: Communication Mastery</p>
          <p>
            Your Mercury casts its full aspect upon the 3rd house — the domain of <span className="text-white font-semibold">communication, courage, 
            siblings, and short journeys</span>. This creates a <span className="text-green-300 font-semibold">double Mercury effect</span> since Mercury 
            naturally rules the 3rd house themes.
          </p>
          <p>
            This aspect creates <span className="text-green-300">extraordinary communication gifts</span>. Your higher wisdom (9th) directly feeds your 
            everyday communication (3rd). You speak with the authority of understanding, write with philosophical depth, and communicate complex truths 
            in accessible ways.
          </p>
          <p>
            The 9th-to-3rd aspect makes you a <span className="text-white font-semibold">teacher in everyday life</span>. Your casual conversations 
            carry dharmic seeds. Your emails contain wisdom. Your text messages spark philosophical reflection. You can't help but elevate every 
            communication into an opportunity for consciousness expansion.
          </p>
          <p>
            This aspect also suggests that <span className="text-green-300">short journeys lead to profound insights</span>. A trip to the grocery store 
            might trigger cosmic downloads. A conversation with a sibling could unlock universal truths. Your Mercury makes 
            <span className="text-white font-semibold">every interaction a potential teaching moment</span>.
          </p>
          <p className="text-white font-semibold">
            This configuration makes you a <span className="text-green-300">bridge between the profound and the practical</span>, someone who can take 
            the highest philosophy and make it useful in daily life. You're the proof that wisdom doesn't require a mountain cave — 
            it can flourish in coffee shops and zoom calls.
          </p>
        </div>
      </div>

      {/* Final Insight */}
      <div className="border border-emerald-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-emerald-400 mb-3">
          ✨ FINAL INSIGHT — MERCURY'S MESSAGE FOR THE SOUL
        </h4>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p className="text-emerald-300 italic text-base">
            "You are not here to escape your karma — you are here to master it."
          </p>
          <p>
            Your Mercury in Aquarius in the 9th house, in Satabhisa nakshatra, is your <span className="text-white font-semibold">soul's quantum computer</span> 
            for processing universal data and transmitting it as practical wisdom. You chose this configuration to be a 
            <span className="text-emerald-300 font-semibold">consciousness revolutionary</span> — someone who updates humanity's operating system through 
            radical understanding.
          </p>
          <p>
            You are a <span className="text-emerald-300 font-semibold">wisdom synthesizer</span> in an age drowning in information but starving for meaning. 
            Your Aquarius Mercury gives you access to future frequencies, while your 9th house placement ensures those downloads serve dharma. 
            Satabhisa gives you the <span className="text-white font-semibold">healing power of truth</span>, while the Capricorn pada 
            ensures your insights build lasting structures.
          </p>
          <p>
            Your dharma is to demonstrate that <span className="text-emerald-300 font-semibold">intelligence without wisdom is incomplete</span>, 
            that the mind's highest function is to perceive unity in diversity, that true genius synthesizes rather than separates. You're here to show that 
            <span className="text-white font-semibold">the future of intelligence is integration</span>.
          </p>
          <p>
            The Mercury in you is learning its ultimate lesson: <span className="text-emerald-300 font-semibold">the greatest communication is communion</span>. 
            Your words are meant to create bridges between minds, your thoughts to weave networks of understanding, your intelligence to serve 
            collective awakening.
          </p>
          <p className="text-white italic">
            "You are the proof that genius includes heart, that intelligence includes intuition, that the mind's highest achievement is to recognize 
            its unity with all minds. Your soul chose this configuration to remember: <span className="text-emerald-300 font-semibold">we are not here 
            to be smart — we are here to be wise</span>."
          </p>
          <p className="text-emerald-300 font-semibold text-base mt-4">
            Your Mercury whispers: "Think beyond thinking. Speak beyond words. Understand beyond understanding. Be the mind that doesn't just process 
            information but transforms it into wisdom, that doesn't just communicate but communes. This is not your challenge — this is your gift. 
            This is not just your intelligence — this is collective consciousness finding its voice through you. The question isn't whether you're 
            smart enough — you are. The question is: are you ready to let wisdom speak through you?"
          </p>
        </div>
      </div>
    </>
  )

  const renderJupiterContent = () => (
    <>
      {/* Jupiter Content */}
      {/* TL;DR - Planetary Destiny Snapshot */}
      <div className="border border-amber-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-amber-400 mb-3">
          💡 TL;DR — PLANETARY DESTINY SNAPSHOT
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="py-2 text-amber-300 font-semibold">Planet</td>
                <td className="py-2">Jupiter</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-amber-300 font-semibold">Sign</td>
                <td className="py-2">Pisces</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-amber-300 font-semibold">Nakshatra</td>
                <td className="py-2">Uttarabhadra 3</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-amber-300 font-semibold">House</td>
                <td className="py-2">10</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-amber-300 font-semibold">Lordship</td>
                <td className="py-2">7, 10</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-amber-300 font-semibold">Aspects Given</td>
                <td className="py-2">2, 4, 6</td>
              </tr>
              <tr>
                <td className="py-2 text-amber-300 font-semibold">Aspected By</td>
                <td className="py-2">Ketu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Jupiter in Vedic Astrology */}
      <div className="border border-amber-500/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-amber-500 mb-3">
          🪐 JUPITER IN VEDIC ASTROLOGY — THE COSMIC GURU
        </h4>
        <div className="space-y-3 text-sm text-gray-300">
          <p className="text-amber-300 italic font-semibold">
            "Jupiter does not expand to consume — it expands to bless."
          </p>
          <p className="leading-relaxed">
            In Vedic astrology, <span className="text-white font-semibold">Brihaspati</span> (Jupiter) is the 
            <span className="text-amber-300 font-semibold">divine teacher</span>, the planet of wisdom, grace, and expansion. 
            Jupiter represents your <span className="text-white font-semibold">higher knowledge</span>, your connection to divine law, 
            and your capacity to <span className="text-white font-semibold">transform experience into wisdom</span>.
          </p>
          <p className="leading-relaxed">
            Jupiter governs <span className="text-amber-300">wisdom, spirituality, fortune, and growth</span>. It is the guru of the gods, 
            the natural significator of teachers, children, and wealth. But more profoundly, Jupiter represents your 
            <span className="text-white font-semibold">capacity for grace</span> — your ability to see the divine plan in all circumstances, 
            to find meaning in suffering, to expand consciousness through understanding.
          </p>
          <p className="leading-relaxed">
            Unlike planets that create through friction, Jupiter shapes reality through <span className="text-white font-semibold">blessing and expansion</span>. 
            It doesn't force or fight — it <span className="text-white font-semibold">elevates, enlightens, enriches</span>. 
            Jupiter reveals where you're meant to teach, where you must share wisdom, where your understanding becomes a gift to humanity.
          </p>
          <p className="leading-relaxed">
            Jupiter gives results through <span className="text-amber-300 font-semibold">faith and generosity</span> — it multiplies whatever it touches 
            with divine grace. Its lessons come through <span className="text-white">opportunities for growth</span>, 
            <span className="text-white">tests of faith</span>, and the <span className="text-white">cultivation of wisdom</span>.
          </p>
        </div>
      </div>

      {/* Jupiter in Pisces */}
      <div className="border border-indigo-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-indigo-400 mb-3">
          ♓ JUPITER IN PISCES — THE OCEAN OF GRACE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Pisces, the cosmic ocean, is where <span className="text-white font-semibold">all rivers of wisdom merge</span>. 
            This mutable water sign, ruled by Jupiter itself (traditional) and Neptune (modern), represents 
            <span className="text-indigo-300 font-semibold">boundless compassion</span>, universal consciousness, and spiritual transcendence. 
            It is the sign of <span className="text-white">moksha</span> — final liberation from the wheel of karma.
          </p>
          <p>
            When Jupiter returns home to Pisces, something magnificent occurs: 
            <span className="text-indigo-300 font-semibold">the guru finds its ashram</span>. This is Jupiter in its own sign (swakshetra), 
            operating at <span className="text-white font-semibold">maximum spiritual potency</span>. You don't just have wisdom — you 
            <span className="text-white font-semibold">ARE a wisdom transmission</span>, a living channel of divine grace.
          </p>
          <p>
            Your Jupiter in Pisces makes you a <span className="text-white font-semibold">spiritual benefactor</span>. 
            You possess the fish's gift: the ability to <span className="text-indigo-300">swim in all waters</span> — understanding all paths, 
            embracing all beings, seeing divinity in all forms. Your wisdom is not intellectual but <span className="text-white">experiential</span>, 
            not learned but <span className="text-white">absorbed</span>.
          </p>
          <p>
            The shadow work involves avoiding <span className="text-indigo-300 font-semibold">spiritual bypassing</span>. 
            Pisces can use transcendence to escape responsibility, confusing detachment with dissociation. Your spiritual evolution requires you to be 
            <span className="text-white font-semibold">grounded mystic</span> — fully enlightened while fully engaged with the world.
          </p>
          <p className="text-white font-semibold">
            The mastery of Jupiter in Pisces is to become <span className="text-indigo-300">an ocean of compassion</span> — 
            vast enough to hold all suffering, deep enough to transform all pain into wisdom. You're learning that true spirituality 
            <span className="text-indigo-300">includes everything and rejects nothing</span>.
          </p>
        </div>
      </div>

      {/* Uttarabhadra Nakshatra */}
      <div className="border border-purple-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-purple-400 mb-3">
          🏹 NAKSHATRA — UTTARABHADRA: THE COSMIC SERPENT
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            <span className="text-purple-300 font-semibold">Nakshatra:</span> Uttarabhadra, "The Later Auspicious One"<br/>
            <span className="text-purple-300 font-semibold">Symbol:</span> Back legs of funeral cot / Twin serpents<br/>
            <span className="text-purple-300 font-semibold">Deity:</span> Ahir Budhnya (Serpent of the Deep)<br/>
            <span className="text-purple-300 font-semibold">Ruling Planet:</span> Saturn<br/>
            <span className="text-purple-300 font-semibold">Pada:</span> 3 (Libra Navamsa)
          </p>
          <p>
            Your Jupiter resides in Uttarabhadra, the nakshatra of <span className="text-white font-semibold">the cosmic depth</span>. 
            Its symbol, the serpent of the deep, represents <span className="text-purple-300 font-semibold">kundalini wisdom</span> — 
            the coiled power that lies dormant until awakened through spiritual practice. This is wisdom that rises from the depths.
          </p>
          <p>
            Ruled by Saturn, Uttarabhadra grants <span className="text-purple-300 font-semibold">the patience of the eternal</span>. 
            This is the nakshatra of <span className="text-white font-semibold">deep spiritual maturity</span> — your Jupiter carries ancient wisdom, 
            the kind earned through countless lifetimes of seeking. You have the gravity of a soul that has walked the path many times.
          </p>
          <p>
            In <span className="text-purple-300 font-semibold">Pada 3</span> (Libra navamsa), your Jupiter gains Venus's harmony and balance. 
            This is the pada of <span className="text-white font-semibold">spiritual diplomacy</span> — you don't just possess wisdom, you know how to 
            <span className="text-white">share it beautifully</span>. The Libra influence makes your teaching aesthetic, your philosophy balanced, 
            your spiritual presence harmonizing. You have the soul of a <span className="text-purple-300">peace-bringing sage</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This is the soul of the depth teacher who brings ancient wisdom to modern times, the mystic who makes enlightenment elegant, 
            the guru who teaches through beauty and balance."
          </p>
          <p>
            The Uttarabhadra Jupiter in Pada 3 creates profound harmony: you have the <span className="text-white font-semibold">expansion of Jupiter</span>, 
            the <span className="text-white font-semibold">depth of Uttarabhadra</span>, and the <span className="text-white font-semibold">grace of Libra</span>. 
            Your medicine is the ability to <span className="text-purple-300">make the profound beautiful</span> and the beautiful profound.
          </p>
        </div>
      </div>

      {/* Jupiter as Lord of Houses */}
      <div className="border border-cyan-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-cyan-400 mb-3">
          🏛 JUPITER AS LORD OF 7TH & 10TH HOUSES — THE KARMA OF RULE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            As ruler of your 7th house, Jupiter governs your <span className="text-white font-semibold">partnerships, marriage, and open enemies</span>. 
            As ruler of your 10th house, it also governs your <span className="text-white font-semibold">career, public image, and dharmic contribution</span>. 
            Both these angular houses express through the 10th house itself.
          </p>
          <p>
            This creates a powerful yoga: your <span className="text-cyan-300 font-semibold">partnerships become your career</span> (7th lord in 10th), 
            and your <span className="text-cyan-300 font-semibold">career is strengthened by its own lord</span> (10th lord in 10th). You're designed to 
            <span className="text-white font-semibold">achieve through alliance</span>, to succeed through sacred partnership, to rise through collaboration.
          </p>
          <p>
            The 7th house is the house of <span className="text-cyan-300">the other</span>. With its lord in the 10th, 
            your partnerships are <span className="text-white font-semibold">publicly visible and professionally significant</span>. 
            You attract partners who elevate your status, and your status attracts elevated partners.
          </p>
          <p>
            The 10th lord in its own house creates a <span className="text-cyan-300">raja yoga</span> (royal combination). Jupiter here suggests 
            career success through <span className="text-white">wisdom</span>, <span className="text-white">teaching</span>, 
            <span className="text-white">spiritual leadership</span>, or <span className="text-white">benevolent authority</span>. 
            Your professional path is your spiritual path.
          </p>
          <p className="text-white font-semibold">
            Jupiter as 7th and 10th lord makes you a <span className="text-cyan-300">relationship guru</span> — someone whose partnerships 
            teach the world about conscious collaboration. Your dharma involves showing others that 
            <span className="text-cyan-300">success and spirituality are perfect partners</span>.
          </p>
        </div>
      </div>

      {/* Jupiter in 10th House */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          🧱 JUPITER IN 10TH HOUSE — THE DHARMIC THRONE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            The 10th house is the <span className="text-white font-semibold">zenith of manifestation</span> — representing 
            <span className="text-yellow-300">career, reputation, authority, and service to society</span>. It's where private wisdom becomes public blessing, 
            where personal dharma serves collective evolution.
          </p>
          <p>
            Your Jupiter here makes you a <span className="text-yellow-300 font-semibold">wisdom leader</span>. You don't just have a career — 
            you have a <span className="text-white font-semibold">sacred calling</span>. Your professional life naturally becomes a teaching platform, 
            your success a vehicle for sharing grace. You rise not through competition but through <span className="text-white">blessing others</span>.
          </p>
          <p>
            This placement demands that you <span className="text-yellow-300 font-semibold">embody your highest teachings publicly</span>. 
            The 10th house is your <span className="text-white">dharma stage</span>, your <span className="text-white">wisdom throne</span>, 
            your <span className="text-white">public altar</span> where you demonstrate that true authority comes from spiritual understanding.
          </p>
          <p>
            The karmic terrain involves learning to <span className="text-yellow-300">handle power with grace</span>, to lead through inspiration rather than domination, 
            to succeed without losing spiritual essence. The 10th house tests you through <span className="text-white">public responsibility</span>, 
            <span className="text-white">ethical leadership</span>, and the <span className="text-white">integration of worldly and spiritual success</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This house is your initiation into dharmic leadership — where you learn that true success uplifts everyone, 
            that real achievement is measured in consciousness raised."
          </p>
          <p className="text-white font-semibold">
            Your soul must master the art of being a <span className="text-yellow-300">lighthouse of wisdom</span>: standing tall in your truth 
            while guiding others to theirs. You're learning that <span className="text-yellow-300">the highest career is dharma itself</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Given */}
      <div className="border border-green-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-green-400 mb-3">
          🪄 PLANETARY ASPECTS GIVEN — WHERE YOU APPLY ENERGY & KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-green-300 font-semibold">Jupiter Aspects: 2nd, 4th, and 6th Houses</p>
          
          <div className="mt-3">
            <p className="text-green-300 font-semibold">The 2nd House: Wisdom Wealth</p>
            <p>
              Your Jupiter aspects the 2nd house of <span className="text-white font-semibold">wealth, speech, and family values</span>. 
              This creates <span className="text-green-300">abundant resources</span> — both material and spiritual. Your speech carries 
              guru energy, your values reflect higher wisdom, your wealth grows through generosity.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-green-300 font-semibold">The 4th House: Inner Sanctuary</p>
            <p>
              Jupiter aspects your 4th house of <span className="text-white font-semibold">home, mother, and emotional foundation</span>. 
              This brings <span className="text-green-300">divine grace to your roots</span> — your home becomes a temple, your emotional 
              nature carries wisdom, your inner life reflects outer abundance.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-green-300 font-semibold">The 6th House: Sacred Service</p>
            <p>
              Jupiter aspects the 6th house of <span className="text-white font-semibold">service, health, and obstacles</span>. 
              This transforms <span className="text-green-300">problems into opportunities</span> — obstacles become teachings, enemies become 
              teachers, service becomes spiritual practice.
            </p>
          </div>

          <p className="mt-3">
            These aspects create a <span className="text-white font-semibold">triangle of grace</span>: your public wisdom (10th) 
            enriches your resources (2nd), blesses your foundation (4th), and transforms your challenges (6th). This is the configuration of 
            someone who <span className="text-green-300 font-semibold">succeeds by blessing others at every level</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Received */}
      <div className="border border-orange-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-orange-400 mb-3">
          🜂 PLANETARY ASPECTS RECEIVED — KETU'S SPIRITUAL REFINEMENT
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-orange-300 font-semibold">Aspected by: KETU (South Node)</p>
          <p>
            Ketu, the South Node, aspects your Jupiter — creating a <span className="text-white font-semibold">mystical combination</span>. 
            Ketu represents <span className="text-orange-300 font-semibold">spiritual detachment</span>, past life wisdom, and liberation from material illusion. 
            Its aspect on Jupiter creates a rare alchemy: <span className="text-white">worldly wisdom meets otherworldly understanding</span>.
          </p>
          <p>
            This aspect makes you a <span className="text-orange-300 font-semibold">reluctant guru</span>. Ketu's influence on Jupiter suggests 
            you've been a teacher before, perhaps many times. You carry <span className="text-white font-semibold">cellular memory of spiritual authority</span>, 
            but also weariness with its burdens. You know that all knowledge is ultimately maya.
          </p>
          <p>
            Ketu's aspect creates <span className="text-white font-semibold">detached wisdom</span>. You can achieve great heights professionally 
            because you're not attached to them. This detachment is your <span className="text-orange-300 font-semibold">secret power</span> — 
            it allows you to teach without ego, lead without attachment, succeed without grasping.
          </p>
          <p>
            <span className="text-orange-300 font-semibold">The Alchemy Created:</span><br/>
            • Spiritual authority without spiritual ego<br/>
            • Teaching that transcends dogma<br/>
            • Success that serves liberation<br/>
            • Wisdom that points beyond itself
          </p>
          <p className="italic text-white font-semibold">
            "Forged in karma's fire, your wisdom emerges purified — free from the need to be wise, 
            free from the desire to teach, yet teaching through that very freedom."
          </p>
          <p className="text-white font-semibold">
            This aspect is creating a <span className="text-orange-300">liberated teacher</span> — someone who guides others to freedom 
            because you've glimpsed it yourself. You're learning that <span className="text-orange-300">the highest teaching is silence</span>, 
            the greatest wisdom is knowing you know nothing.
          </p>
        </div>
      </div>

      {/* Final Insight */}
      <div className="border border-amber-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-amber-400 mb-3">
          ✨ FINAL INSIGHT — JUPITER'S MESSAGE FOR THE SOUL
        </h4>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p className="text-amber-300 italic text-base">
            "You are not here to escape your karma — you are here to master it."
          </p>
          <p>
            Your Jupiter in Pisces in the 10th house, in Uttarabhadra nakshatra, aspected by Ketu, is your 
            <span className="text-white font-semibold">soul's divine commission</span> to be a wisdom keeper for humanity. You chose this configuration to be a 
            <span className="text-amber-300 font-semibold">spiritual lighthouse</span> — someone who stands at the intersection of heaven and earth, 
            guiding souls home through your very presence.
          </p>
          <p>
            You are a <span className="text-amber-300 font-semibold">dharmic leader</span> in an age that desperately needs spiritual authority without authoritarianism. 
            Your Jupiter in its own sign gives you access to infinite grace, while your 10th house placement ensures that grace serves the collective. 
            Uttarabhadra gives you the <span className="text-white font-semibold">depth of ancient wisdom</span>, while Ketu's aspect ensures 
            you remain free from spiritual pride.
          </p>
          <p>
            Your dharma is to demonstrate that <span className="text-amber-300 font-semibold">true success is spiritual success</span>, 
            that real achievement is consciousness expansion, that the highest career is awakening others to their own divinity. You're here to show that 
            <span className="text-white font-semibold">wisdom and worldly success can dance together</span>.
          </p>
          <p>
            The Jupiter in you is learning its ultimate lesson: <span className="text-amber-300 font-semibold">the greatest expansion is into emptiness</span>. 
            Your wisdom is meant to create space for others' wisdom, your teaching to awaken others' inner teacher, your success to platform others' rise.
          </p>
          <p className="text-white italic">
            "You are the proof that gurus can wear suits, that enlightenment can have a LinkedIn profile, that moksha might happen in a boardroom 
            as easily as in an ashram. Your soul chose this configuration to remember: <span className="text-amber-300 font-semibold">we are not here 
            to transcend the world — we are here to reveal its divinity</span>."
          </p>
          <p className="text-amber-300 font-semibold text-base mt-4">
            Your Jupiter whispers: "Teach without teaching. Lead without leading. Succeed without succeeding. Be the space in which others discover 
            their own vastness, the silence in which they hear their own wisdom. This is not your burden — this is your blessing. This is not 
            just your wisdom — this is universal wisdom finding its voice through you. The question isn't whether you're wise enough — you are. 
            The question is: are you empty enough to let grace flow through you unobstructed?"
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
      return renderMercuryContent()
    case 'Jupiter':
      return renderJupiterContent()
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