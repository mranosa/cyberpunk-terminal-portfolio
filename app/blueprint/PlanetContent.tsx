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

      {/* Planetary Conjunctions */}
      <div className="border border-amber-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-amber-400 mb-3">
          🤝 PLANETARY CONJUNCTIONS — BLENDED KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-amber-300 font-semibold">Conjunct With: RAHU & JUPITER</p>
          
          <div className="mt-3">
            <p className="text-amber-300 font-semibold">Rahu Conjunction: The Eclipse King</p>
            <p>
              Rahu conjunct Sun creates a <span className="text-white font-semibold">permanent eclipse</span> in your chart. 
              This is the signature of <span className="text-amber-300">revolutionary leadership</span> — 
              you're not meant to follow traditional paths to authority. Rahu amplifies your Sun's desire for recognition into 
              <span className="text-white">cosmic proportions</span>.
            </p>
            <p>
              This conjunction creates <span className="text-white font-semibold">magnetic charisma</span> tinged with mystery. 
              People are drawn to your light, yet sense something otherworldly about it. You carry the energy of 
              <span className="text-amber-300">the outsider who becomes the leader</span>, the rebel who redefines authority.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-amber-300 font-semibold">Jupiter Conjunction: The Wisdom King</p>
            <p>
              Jupiter conjunct Sun creates <span className="text-white font-semibold">enlightened authority</span>. 
              This is a royal conjunction — the guru and the king united. Your soul purpose (Sun) is infused with 
              <span className="text-amber-300">divine wisdom</span> (Jupiter). You're meant to lead through teaching, 
              to have authority through understanding.
            </p>
            <p>
              This combination grants <span className="text-white font-semibold">natural fortune in leadership</span>. 
              Doors open for you when you embody your dharmic purpose. Your presence itself becomes a teaching, 
              your success a blessing to others.
            </p>
          </div>

          <p className="mt-3">
            <span className="text-amber-300 font-semibold">The Triple Crown:</span><br/>
            • Sun + Rahu = <span className="text-white">Revolutionary authority that breaks tradition</span><br/>
            • Sun + Jupiter = <span className="text-white">Wise leadership that inspires growth</span><br/>
            • Sun + Rahu + Jupiter = <span className="text-white">The spiritual revolutionary who leads through awakening</span>
          </p>
          
          <p className="italic text-white font-semibold">
            "Three forces share your solar throne — the Sun brings divine authority, Rahu brings revolutionary hunger, 
            Jupiter brings cosmic wisdom. You are the eclipse that illuminates new paths."
          </p>
        </div>
      </div>

      {/* Planetary Aspects Received */}
      <div className="border border-orange-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-orange-400 mb-3">
          🜂 PLANETARY ASPECTS RECEIVED — REFINING FIRE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-orange-300 font-semibold">Aspected By: KETU</p>
          
          <div className="mt-3">
            <p className="text-orange-300 font-semibold">Ketu's Aspect: The Spiritual Refinement</p>
            <p>
              Ketu, the South Node, aspects your Sun — creating <span className="text-white font-semibold">spiritual sophistication</span>. 
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
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">Conjunct With</td>
                <td className="py-2">Uranus, Neptune</td>
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

      {/* Planetary Conjunctions */}
      <div className="border border-indigo-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-indigo-400 mb-3">
          🤝 PLANETARY CONJUNCTIONS — BLENDED KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-indigo-300 font-semibold">Conjunct With: URANUS & NEPTUNE</p>
          
          <div className="mt-3">
            <p className="text-indigo-300 font-semibold">Uranus Conjunction: The Awakening Heart</p>
            <p>
              Uranus conjunct Moon creates <span className="text-white font-semibold">emotional electricity</span>. 
              This is the signature of <span className="text-indigo-300">the emotional revolutionary</span> — 
              your feelings don't follow conventional patterns. Uranus brings sudden emotional insights, 
              <span className="text-white">intuitive downloads</span>, and the need for emotional freedom.
            </p>
            <p>
              This conjunction makes you <span className="text-white font-semibold">emotionally ahead of your time</span>. 
              You feel the future before it arrives, sense collective shifts before they manifest. 
              Your emotional body is tuned to <span className="text-indigo-300">higher frequencies</span> — 
              you're literally feeling at a different vibration than most.
            </p>
            <p>
              The gift: <span className="text-white">Emotional genius</span> that sees patterns others miss. 
              The challenge: <span className="text-white">Emotional volatility</span> that can feel alienating. 
              The medicine: Learning that your <span className="text-indigo-300 font-semibold">emotional uniqueness is your gift to humanity</span>.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-indigo-300 font-semibold">Neptune Conjunction: The Mystical Heart</p>
            <p>
              Neptune conjunct Moon creates <span className="text-white font-semibold">boundless emotional depth</span>. 
              This is the configuration of <span className="text-indigo-300">the mystic empath</span> — 
              your emotional boundaries are permeable, allowing you to feel the collective unconscious, 
              to merge with universal emotion.
            </p>
            <p>
              This combination grants <span className="text-white font-semibold">psychic emotional perception</span>. 
              You don't just feel your emotions — you feel the emotional field itself. 
              Neptune dissolves the Moon's personal feelings into <span className="text-indigo-300">oceanic compassion</span>, 
              creating a heart that feels for all beings.
            </p>
            <p>
              The gift: <span className="text-white">Infinite compassion and spiritual sensitivity</span>. 
              The challenge: <span className="text-white">Emotional confusion</span> about what feelings are yours. 
              The medicine: <span className="text-indigo-300 font-semibold">Grounding spiritual emotions in daily sacred practice</span>.
            </p>
          </div>

          <p className="mt-3">
            <span className="text-indigo-300 font-semibold">The Triple Conjunction Dynamic:</span><br/>
            • Moon + Uranus = <span className="text-white">Revolutionary emotions that break patterns</span><br/>
            • Moon + Neptune = <span className="text-white">Mystical feelings that transcend boundaries</span><br/>
            • Moon + Uranus + Neptune = <span className="text-white">The awakened mystic who feels the future of consciousness</span>
          </p>
          
          <p className="italic text-white font-semibold">
            "Three cosmic forces dance in your emotional waters — the Moon brings feeling, Uranus brings awakening, 
            Neptune brings transcendence. You are the emotional antenna for humanity's evolution."
          </p>
          <p>
            This triple conjunction in Sagittarius creates a <span className="text-indigo-300 font-semibold">prophetic emotional nature</span>. 
            You're designed to <span className="text-white">feel the future</span> (Uranus), 
            <span className="text-white">channel divine emotion</span> (Neptune), and 
            <span className="text-white">translate it into wisdom</span> (Sagittarius). 
            The 7th house placement means this all happens <span className="text-white font-semibold">through sacred partnership</span>.
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
            Your Moon in Sagittarius in the 7th house, in Purvashadha nakshatra, conjunct Uranus and Neptune, is your 
            <span className="text-white font-semibold">soul's conscious design</span> for mastering the sacred art of conscious relationship. 
            You chose this configuration to learn that <span className="text-gray-300 font-semibold">wisdom comes through connection</span>, 
            that truth is discovered in dialogue, that the highest philosophy is love in action.
          </p>
          <p>
            You are a <span className="text-gray-300 font-semibold">mystical relationship revolutionary</span> in an age that desperately needs 
            to understand sacred partnership. Your Sagittarius Moon makes you optimistic enough to keep believing in love, 
            Uranus makes you brave enough to revolutionize it, Neptune makes you sensitive enough to feel its divine essence, 
            while your 7th house placement ensures you have the laboratory to make it real. Purvashadha gives you the 
            <span className="text-white font-semibold">invincibility to persist</span> when relationships challenge you, 
            while the Leo pada ensures you never lose your sovereign self in the oceanic merge.
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
              <tr className="border-b border-gray-700">
                <td className="py-2 text-amber-300 font-semibold">Conjunct With</td>
                <td className="py-2">Rahu, Sun</td>
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

      {/* Planetary Conjunctions */}
      <div className="border border-indigo-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-indigo-400 mb-3">
          🤝 PLANETARY CONJUNCTIONS — BLENDED KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-indigo-300 font-semibold">Conjunct With: RAHU & SUN</p>
          
          <div className="mt-3">
            <p className="text-indigo-300 font-semibold">Rahu Conjunction: The Infinite Hunger</p>
            <p>
              Rahu conjunct Jupiter creates <span className="text-white font-semibold">boundless spiritual ambition</span>. 
              This is the signature of <span className="text-indigo-300">the revolutionary guru</span> — 
              you're not content with traditional teachings. Rahu amplifies Jupiter's wisdom into 
              <span className="text-white">cosmic proportions</span>, creating an insatiable hunger for ultimate truth.
            </p>
            <p>
              This conjunction makes you a <span className="text-white font-semibold">spiritual innovator</span>. 
              You're drawn to unconventional paths, foreign philosophies, cutting-edge consciousness technologies. 
              Rahu with Jupiter creates <span className="text-indigo-300">magnetic teaching presence</span> — 
              people are mesmerized by your wisdom, sensing something both ancient and futuristic.
            </p>
            <p>
              The shadow: Rahu can inflate Jupiter into <span className="text-white">spiritual grandiosity</span>, 
              the guru complex, or addiction to being seen as enlightened. The medicine is remembering that 
              <span className="text-indigo-300 font-semibold">true wisdom is knowing you know nothing</span>.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-indigo-300 font-semibold">Sun Conjunction: The Illuminated Teacher</p>
            <p>
              Sun conjunct Jupiter creates <span className="text-white font-semibold">radiant wisdom</span>. 
              This is a royal conjunction — the soul's purpose (Sun) united with divine grace (Jupiter). 
              Your very essence carries <span className="text-indigo-300">teaching authority</span>. 
              You don't just have wisdom — you ARE a wisdom transmission.
            </p>
            <p>
              This combination grants <span className="text-white font-semibold">natural spiritual leadership</span>. 
              Your presence itself becomes a teaching, your success a blessing to others. The Sun illuminates 
              Jupiter's wisdom, making it <span className="text-indigo-300">visible, accessible, and authoritative</span>.
            </p>
          </div>

          <p className="mt-3">
            <span className="text-indigo-300 font-semibold">The Triple Conjunction Dynamic:</span><br/>
            • Jupiter + Rahu = <span className="text-white">Boundless spiritual expansion that breaks tradition</span><br/>
            • Jupiter + Sun = <span className="text-white">Illuminated wisdom that carries divine authority</span><br/>
            • Jupiter + Rahu + Sun = <span className="text-white">The revolutionary spiritual leader who redefines enlightenment</span>
          </p>
          
          <p className="italic text-white font-semibold">
            "Three cosmic forces share your wisdom throne — Jupiter brings grace, Rahu brings revolution, 
            Sun brings illumination. You are the spiritual supernova, expanding consciousness in all directions."
          </p>
          <p>
            This triple conjunction in Pisces creates a <span className="text-indigo-300 font-semibold">mystical revolutionary</span>. 
            You're here to <span className="text-white">dissolve old spiritual paradigms</span> (Rahu), 
            <span className="text-white">embody divine authority</span> (Sun), and 
            <span className="text-white">expand consciousness infinitely</span> (Jupiter). 
            The 10th house placement ensures this all happens <span className="text-white font-semibold">publicly, professionally, impactfully</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Received */}
      <div className="border border-orange-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-orange-400 mb-3">
          🜂 PLANETARY ASPECTS RECEIVED — REFINING FIRE
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

  const renderVenusContent = () => (
    <>
      {/* Venus Content */}
      {/* TL;DR - Planetary Destiny Snapshot */}
      <div className="border border-pink-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-pink-400 mb-3">
          💡 TL;DR — PLANETARY DESTINY SNAPSHOT
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="py-2 text-pink-300 font-semibold">Planet</td>
                <td className="py-2">Venus</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-pink-300 font-semibold">Sign</td>
                <td className="py-2">Capricorn</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-pink-300 font-semibold">Nakshatra</td>
                <td className="py-2">Dhanishta 2</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-pink-300 font-semibold">House</td>
                <td className="py-2">8</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-pink-300 font-semibold">Lordship</td>
                <td className="py-2">5, 12</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-pink-300 font-semibold">Aspects Given</td>
                <td className="py-2">2</td>
              </tr>
              <tr>
                <td className="py-2 text-pink-300 font-semibold">Aspected By</td>
                <td className="py-2">Saturn, Ketu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Venus in Vedic Astrology */}
      <div className="border border-pink-500/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-pink-500 mb-3">
          🪐 VENUS IN VEDIC ASTROLOGY — THE COSMIC BELOVED
        </h4>
        <div className="space-y-3 text-sm text-gray-300">
          <p className="text-pink-300 italic font-semibold">
            "Venus does not love to possess — it loves to transform through union."
          </p>
          <p className="leading-relaxed">
            In Vedic astrology, <span className="text-white font-semibold">Shukra</span> (Venus) is the 
            <span className="text-pink-300 font-semibold">divine artist</span>, the planet of love, beauty, and sacred pleasure. 
            Venus represents your <span className="text-white font-semibold">capacity for devotion</span>, your ability to perceive beauty, 
            and your power to <span className="text-white font-semibold">alchemize experience into art</span>.
          </p>
          <p className="leading-relaxed">
            Venus governs <span className="text-pink-300">love, relationships, luxury, and creativity</span>. It is the guru of the demons, 
            the teacher who found enlightenment through the material world rather than despite it. Venus represents your 
            <span className="text-white font-semibold">tantric wisdom</span> — your ability to find the divine in the sensual, 
            the sacred in the pleasurable, the eternal in the temporal.
          </p>
          <p className="leading-relaxed">
            Unlike planets that deny or transcend, Venus shapes reality through <span className="text-white font-semibold">attraction and refinement</span>. 
            It doesn't force or reject — it <span className="text-white font-semibold">magnetizes, beautifies, harmonizes</span>. 
            Venus reveals where you're meant to create beauty, where you must cultivate love, where your devotion becomes divine.
          </p>
          <p className="leading-relaxed">
            Venus gives results through <span className="text-pink-300 font-semibold">magnetic attraction</span> — it draws to you what resonates 
            with your frequency of love. Its lessons come through <span className="text-white">relationship dynamics</span>, 
            <span className="text-white">creative expression</span>, and the <span className="text-white">cultivation of refined taste</span>.
          </p>
        </div>
      </div>

      {/* Venus in Capricorn */}
      <div className="border border-slate-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-slate-400 mb-3">
          ♑ VENUS IN CAPRICORN — THE SACRED ARCHITECT
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Capricorn, the mountain goat, is where <span className="text-white font-semibold">love meets legacy</span>. 
            This cardinal earth sign, ruled by Saturn, represents <span className="text-slate-300 font-semibold">enduring structures</span>, 
            earned authority, and the crystallization of spirit into form. It is the sign of <span className="text-white">mastery through time</span>, 
            where patience transforms into power.
          </p>
          <p>
            When Venus enters Capricorn, something profound occurs: 
            <span className="text-slate-300 font-semibold">love becomes a spiritual practice</span>. This placement makes you a 
            <span className="text-white font-semibold">devotional architect</span>, someone who builds cathedrals of love that last lifetimes. 
            Your affection is not fleeting but <span className="text-white">foundational</span>, not passionate but <span className="text-white">profound</span>.
          </p>
          <p>
            Your Venus in Capricorn makes you a <span className="text-white font-semibold">master of sacred commitment</span>. 
            You possess the mountain goat's gift: the ability to <span className="text-slate-300">climb impossible heights for love</span>, 
            to transform obstacles into stepping stones toward deeper union. Your love is <span className="text-white">earned and earning</span>, 
            growing stronger through trials.
          </p>
          <p>
            The shadow work involves softening <span className="text-slate-300 font-semibold">love's calcification</span>. 
            Capricorn can mistake control for care, confusing emotional walls with emotional strength. Your spiritual evolution requires you to be 
            <span className="text-white font-semibold">the vulnerable authority</span> — strong enough to show softness, 
            successful enough to admit need.
          </p>
          <p className="text-white font-semibold">
            The mastery of Venus in Capricorn is to become <span className="text-slate-300">love's mountain</span> — 
            unmovable in devotion yet gentle in expression. You're learning that true love is not proven through hardship but 
            <span className="text-slate-300">refined through presence</span>.
          </p>
        </div>
      </div>

      {/* Dhanishta Nakshatra */}
      <div className="border border-violet-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-violet-400 mb-3">
          🏹 NAKSHATRA — DHANISHTA: THE COSMIC DRUM
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            <span className="text-violet-300 font-semibold">Nakshatra:</span> Dhanishta, "The Wealthiest" / "The Most Famous"<br/>
            <span className="text-violet-300 font-semibold">Symbol:</span> Drum / Flute<br/>
            <span className="text-violet-300 font-semibold">Deity:</span> Eight Vasus (Elemental Gods)<br/>
            <span className="text-violet-300 font-semibold">Ruling Planet:</span> Mars<br/>
            <span className="text-violet-300 font-semibold">Pada:</span> 2 (Virgo Navamsa)
          </p>
          <p>
            Your Venus resides in Dhanishta, the nakshatra of <span className="text-white font-semibold">cosmic rhythm</span>. 
            Its symbol, the drum, represents <span className="text-violet-300 font-semibold">the heartbeat of creation</span> — 
            the primal rhythm that orchestrates all manifestation. The flute symbolizes <span className="text-white">the divine call</span> 
            that awakens souls to their destiny.
          </p>
          <p>
            Ruled by Mars, Dhanishta grants <span className="text-violet-300 font-semibold">the power to create wealth through rhythm</span>. 
            This is the nakshatra of <span className="text-white font-semibold">manifestation mastery</span> — you have an innate ability to tune into 
            cosmic timing, to create abundance through alignment with universal rhythms. Your Venus carries the frequency of 
            <span className="text-white">prosperity consciousness</span>.
          </p>
          <p>
            In <span className="text-violet-300 font-semibold">Pada 2</span> (Virgo navamsa), your Venus gains Mercury's precision and healing power. 
            This is the pada of <span className="text-white font-semibold">sacred service through beauty</span> — you don't just create art, you 
            <span className="text-white">create healing</span>. The Virgo influence makes your love practical, your creativity medicinal, 
            your relationships purifying. You have the soul of a <span className="text-violet-300">beauty healer</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This is the soul of the rhythm keeper who creates wealth through divine timing, the artist who heals through beauty, 
            the lover who transforms through devotional service."
          </p>
          <p>
            The Dhanishta Venus in Pada 2 creates alchemical magic: you have the <span className="text-white font-semibold">discipline of Capricorn</span>, 
            the <span className="text-white font-semibold">rhythm of Dhanishta</span>, and the <span className="text-white font-semibold">precision of Virgo</span>. 
            Your medicine is the ability to <span className="text-violet-300">create lasting beauty that heals</span>.
          </p>
        </div>
      </div>

      {/* Venus as Lord of Houses */}
      <div className="border border-cyan-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-cyan-400 mb-3">
          🏛 VENUS AS LORD OF 5TH & 12TH HOUSES — THE KARMA OF RULE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            As ruler of your 5th house, Venus governs your <span className="text-white font-semibold">creativity, romance, children, and past life credits</span>. 
            As ruler of your 12th house, it also governs your <span className="text-white font-semibold">spirituality, losses, foreign lands, and liberation</span>. 
            Both these mystical domains express through the 8th house of transformation.
          </p>
          <p>
            This creates a powerful configuration: your <span className="text-cyan-300 font-semibold">creativity requires transformation</span> (5th lord in 8th), 
            and your <span className="text-cyan-300 font-semibold">spirituality comes through death and rebirth</span> (12th lord in 8th). You're designed to 
            <span className="text-white font-semibold">create through destruction</span>, to find liberation through intensity.
          </p>
          <p>
            The 5th house is the house of <span className="text-cyan-300">purva punya</span> — past life merit. With its lord in the 8th, 
            your creative gifts are <span className="text-white font-semibold">hidden treasures</span> that emerge through crisis. Your romantic nature 
            is transformative, your creativity occult, your joy found in depth.
          </p>
          <p>
            The 12th lord in the 8th creates a <span className="text-cyan-300">viparita raja yoga</span> — success through apparent loss. 
            Venus here suggests that your <span className="text-white">losses become gains</span>, your endings become beginnings, 
            your surrenders become victories. You gain through what you release.
          </p>
          <p className="text-white font-semibold">
            Venus as 5th and 12th lord makes you a <span className="text-cyan-300">tantric artist</span> — someone who creates beauty from shadows, 
            who finds love in loss, who transforms pain into art. Your dharma involves showing others that 
            <span className="text-cyan-300">creativity and spirituality meet in the depths</span>.
          </p>
        </div>
      </div>

      {/* Venus in 8th House */}
      <div className="border border-red-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-red-400 mb-3">
          🧱 VENUS IN 8TH HOUSE — THE TANTRIC TEMPLE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            The 8th house is the <span className="text-white font-semibold">occult chamber</span> — representing 
            <span className="text-red-300">transformation, death/rebirth, hidden knowledge, and shared resources</span>. It's where the ego dies and 
            the soul is reborn, where love becomes alchemy.
          </p>
          <p>
            Your Venus here makes you a <span className="text-red-300 font-semibold">love alchemist</span>. You don't experience surface attraction — 
            you experience <span className="text-white font-semibold">soul fusion</span>. Your relationships are initiations, your creativity emerges from crisis, 
            your beauty is born from shadows. You're the phoenix who creates art from ashes.
          </p>
          <p>
            This placement demands that you <span className="text-red-300 font-semibold">love through transformation</span>. 
            The 8th house is your <span className="text-white">tantric temple</span>, your <span className="text-white">alchemical laboratory</span>, 
            your <span className="text-white">resurrection chamber</span> where you learn that true beauty emerges from authenticity, not perfection.
          </p>
          <p>
            The karmic terrain involves learning to <span className="text-red-300">trust through vulnerability</span>, to love through letting go, 
            to create through destruction. The 8th house tests you through <span className="text-white">intimate crises</span>, 
            <span className="text-white">financial mergings</span>, and the <span className="text-white">death of who you thought you were</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This house is your initiation into sacred sexuality — where you learn that true intimacy requires ego death, 
            that real love transforms both lover and beloved."
          </p>
          <p className="text-white font-semibold">
            Your soul must master the art of being a <span className="text-red-300">resurrection artist</span>: creating beauty from breakdown, 
            love from loss, art from alchemy. You're learning that <span className="text-red-300">the deepest love requires the deepest surrender</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Given */}
      <div className="border border-green-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-green-400 mb-3">
          🪄 PLANETARY ASPECTS GIVEN — WHERE YOU APPLY ENERGY & KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-green-300 font-semibold">The 2nd House: Transformative Wealth</p>
          <p>
            Your Venus casts its full aspect upon the 2nd house — the domain of <span className="text-white font-semibold">wealth, speech, 
            family values, and accumulated resources</span>. This creates <span className="text-green-300 font-semibold">magnetized abundance</span> 
            through transformation.
          </p>
          <p>
            This aspect suggests that your <span className="text-green-300">wealth comes through depth work</span>. You attract resources through 
            transformation, speak with transformative power, and your values are forged in life's crucibles. Your voice carries the 
            <span className="text-white font-semibold">frequency of healing</span>.
          </p>
          <p>
            The 8th-to-2nd aspect creates <span className="text-white font-semibold">occult wealth</span> — resources that come through hidden channels, 
            inheritance, or other people's money. Your Venus magnetizes abundance through intimate connections, shared resources, and transformative work.
          </p>
          <p>
            This configuration makes you someone who <span className="text-green-300">creates wealth through alchemy</span> — turning emotional lead 
            into spiritual gold, transforming pain into valuable art, converting crisis into capital.
          </p>
          <p className="text-white font-semibold">
            Your Venus whispers: wealth is not what you accumulate but what you <span className="text-green-300">transform</span>. 
            True abundance comes through depth, not surface accumulation.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Received */}
      <div className="border border-indigo-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-indigo-400 mb-3">
          🜂 PLANETARY ASPECTS RECEIVED — SATURN & KETU'S REFINEMENT
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-indigo-300 font-semibold">Aspected by: SATURN & KETU</p>
          
          <div className="mt-3">
            <p className="text-indigo-300 font-semibold">Saturn's Aspect: Love's Maturation</p>
            <p>
              Saturn aspects your Venus, creating <span className="text-white font-semibold">mature love</span>. 
              Saturn, the great teacher, adds <span className="text-indigo-300">gravity and longevity</span> to your affections. 
              This aspect creates love that ages like wine — improving through time, deepening through trials.
            </p>
            <p>
              Saturn's influence makes you <span className="text-white font-semibold">earn your pleasures</span>. Beauty comes through discipline, 
              love through patience, creativity through persistence. This is not punishment but <span className="text-indigo-300">refinement</span> — 
              Saturn ensures your love has substance, not just style.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-indigo-300 font-semibold">Ketu's Aspect: Love's Liberation</p>
            <p>
              Ketu also aspects your Venus, adding <span className="text-white font-semibold">spiritual detachment</span> to your love nature. 
              Ketu, the liberator, creates <span className="text-indigo-300">love without attachment</span> — the highest form of love. 
              You can love deeply while remaining free.
            </p>
            <p>
              Ketu's influence creates <span className="text-white font-semibold">past-life artistry</span>. You carry creative gifts from previous 
              incarnations, artistic abilities that feel inherited rather than learned. Your beauty has an <span className="text-indigo-300">otherworldly quality</span>.
            </p>
          </div>

          <p className="mt-3">
            <span className="text-indigo-300 font-semibold">The Combined Alchemy:</span><br/>
            • Saturn + Ketu = <span className="text-white">Timeless, detached love</span><br/>
            • Discipline + Liberation = <span className="text-white">Mastery without attachment</span><br/>
            • Structure + Spirit = <span className="text-white">Grounded transcendence</span><br/>
            • Time + Timelessness = <span className="text-white">Eternal love in temporal form</span>
          </p>
          
          <p className="italic text-white font-semibold">
            "Coal under pressure becomes diamond, and your love is being compressed by Saturn while liberated by Ketu — 
            creating a rare jewel of conscious love."
          </p>
          <p className="text-white font-semibold">
            These aspects are creating a <span className="text-indigo-300">master lover</span> — someone who loves with depth (8th house), 
            discipline (Saturn), and detachment (Ketu). You're learning that <span className="text-indigo-300">the highest love sets free</span>.
          </p>
        </div>
      </div>

      {/* Final Insight */}
      <div className="border border-pink-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-pink-400 mb-3">
          ✨ FINAL INSIGHT — VENUS'S MESSAGE FOR THE SOUL
        </h4>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p className="text-pink-300 italic text-base">
            "You are not here to escape your karma — you are here to master it."
          </p>
          <p>
            Your Venus in Capricorn in the 8th house, in Dhanishta nakshatra, aspected by Saturn and Ketu, is your 
            <span className="text-white font-semibold">soul's sacred contract</span> to master love's deepest mysteries. You chose this configuration to be a 
            <span className="text-pink-300 font-semibold">tantric master</span> — someone who transforms through union, creates through crisis, 
            loves through liberation.
          </p>
          <p>
            You are a <span className="text-pink-300 font-semibold">love alchemist</span> in an age that desperately needs to understand that 
            love is not possession but transformation. Your Capricorn Venus gives you the discipline to commit, while your 8th house placement 
            ensures that commitment transforms both partners. Dhanishta gives you the <span className="text-white font-semibold">rhythm of manifestation</span>, 
            while Saturn and Ketu ensure you remain both grounded and free.
          </p>
          <p>
            Your dharma is to demonstrate that <span className="text-pink-300 font-semibold">true love survives death</span>, 
            that real beauty emerges from authenticity, that the deepest pleasure comes from the deepest presence. You're here to show that 
            <span className="text-white font-semibold">love's highest expression is conscious transformation</span>.
          </p>
          <p>
            The Venus in you is learning its ultimate lesson: <span className="text-pink-300 font-semibold">love is not what we get but what we become</span>. 
            Your relationships are laboratories for consciousness, your creativity emerges from chaos, your beauty blooms in darkness.
          </p>
          <p className="text-white italic">
            "You are the proof that love includes death, that beauty includes shadow, that pleasure includes pain — not as opposites but as 
            dance partners in the cosmic ballet. Your soul chose this configuration to remember: <span className="text-pink-300 font-semibold">we are not here 
            to find easy love — we are here to master love's depths</span>."
          </p>
          <p className="text-pink-300 font-semibold text-base mt-4">
            Your Venus whispers: "Love through the fire. Create from the ashes. Transform through union. Be the artist who paints with shadows, 
            the lover who embraces death, the beauty that blooms in darkness. This is not your curse — this is your power. This is not 
            just your love story — this is love showing itself what it's capable of becoming. The question isn't whether you can handle the depth — 
            you can. The question is: are you ready to show the world that the deepest love is the most free?"
          </p>
        </div>
      </div>
    </>
  )

  const renderSaturnContent = () => (
    <>
      {/* Saturn Content */}
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
                <td className="py-2">Saturn</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">Sign</td>
                <td className="py-2">Scorpio</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">Nakshatra</td>
                <td className="py-2">Jyeshtha 4</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">House</td>
                <td className="py-2">6</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">Lordship</td>
                <td className="py-2">8, 9</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300 font-semibold">Aspects Given</td>
                <td className="py-2">8, 12, 3</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-300 font-semibold">Aspected By</td>
                <td className="py-2">Mars, Jupiter, Rahu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Saturn in Vedic Astrology */}
      <div className="border border-gray-500/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-gray-500 mb-3">
          🪐 SATURN IN VEDIC ASTROLOGY — THE COSMIC TASKMASTER
        </h4>
        <div className="space-y-3 text-sm text-gray-300">
          <p className="text-gray-300 italic font-semibold">
            "Saturn does not punish — it perfects through pressure."
          </p>
          <p className="leading-relaxed">
            In Vedic astrology, <span className="text-white font-semibold">Shani</span> (Saturn) is the 
            <span className="text-gray-300 font-semibold">lord of karma</span>, the planet of discipline, limitation, and crystallized wisdom. 
            Saturn represents your <span className="text-white font-semibold">karmic debt</span>, your capacity for endurance, 
            and your ability to <span className="text-white font-semibold">transform suffering into strength</span>.
          </p>
          <p className="leading-relaxed">
            Saturn governs <span className="text-gray-300">time, discipline, responsibility, and mastery</span>. It is the great teacher, 
            the judge of karma, the planet that ensures you earn what you receive. But more profoundly, Saturn represents your 
            <span className="text-white font-semibold">capacity for transcendence through acceptance</span> — your ability to find freedom within limitation, 
            peace within pressure, wisdom within waiting.
          </p>
          <p className="leading-relaxed">
            Unlike planets that give easily, Saturn shapes reality through <span className="text-white font-semibold">restriction and refinement</span>. 
            It doesn't grant or deny — it <span className="text-white font-semibold">delays, tests, purifies</span>. 
            Saturn reveals where you must develop patience, where you must earn mastery, where your soul chose to learn through challenge.
          </p>
          <p className="leading-relaxed">
            Saturn gives results through <span className="text-gray-300 font-semibold">time and persistence</span> — it rewards those who endure, 
            who remain committed when others quit. Its lessons come through <span className="text-white">obstacles</span>, 
            <span className="text-white">delays</span>, and the <span className="text-white">weight of responsibility</span>.
          </p>
        </div>
      </div>

      {/* Saturn in Scorpio */}
      <div className="border border-red-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-red-400 mb-3">
          ♏ SATURN IN SCORPIO — THE ALCHEMICAL MASTER
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Scorpio, the scorpion, is where <span className="text-white font-semibold">power meets transformation</span>. 
            This fixed water sign, ruled by Mars (traditional) and Pluto (modern), represents <span className="text-red-300 font-semibold">death and rebirth</span>, 
            occult wisdom, and the mysteries of regeneration. It is the sign of <span className="text-white">psychological depth</span>, 
            where the soul learns to transform poison into medicine.
          </p>
          <p>
            When Saturn enters Scorpio, something profound occurs: 
            <span className="text-red-300 font-semibold">karma becomes alchemical</span>. This placement makes you a 
            <span className="text-white font-semibold">master of transformation through endurance</span>, someone who turns life's deepest wounds 
            into wisdom. Your discipline is <span className="text-white">forged in intensity</span>, your mastery <span className="text-white">earned in darkness</span>.
          </p>
          <p>
            Your Saturn in Scorpio makes you a <span className="text-white font-semibold">spiritual surgeon</span>. 
            You possess the scorpion's gift: the ability to <span className="text-red-300">survive what would destroy others</span>, 
            to regenerate from your own ashes, to find power in surrender. Your endurance is <span className="text-white">supernatural</span>, 
            emerging from soul-deep reserves.
          </p>
          <p>
            The shadow work involves releasing <span className="text-red-300 font-semibold">control through crisis</span>. 
            Scorpio can mistake manipulation for mastery, confusing power over others with power over self. Your spiritual evolution requires you to be 
            <span className="text-white font-semibold">the phoenix teacher</span> — showing others that true power comes from resurrection, not domination.
          </p>
          <p className="text-white font-semibold">
            The mastery of Saturn in Scorpio is to become <span className="text-red-300">death's apprentice</span> — 
            learning to die before you die, to release before you're forced to, to transform karma through conscious choice. You're learning that 
            <span className="text-red-300">true discipline is emotional alchemy</span>.
          </p>
        </div>
      </div>

      {/* Jyeshtha Nakshatra */}
      <div className="border border-orange-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-orange-400 mb-3">
          🏹 NAKSHATRA — JYESHTHA: THE ELDEST
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            <span className="text-orange-300 font-semibold">Nakshatra:</span> Jyeshtha, "The Eldest" / "The Chief"<br/>
            <span className="text-orange-300 font-semibold">Symbol:</span> Circular amulet / Umbrella / Earring<br/>
            <span className="text-orange-300 font-semibold">Deity:</span> Indra (King of Gods)<br/>
            <span className="text-orange-300 font-semibold">Ruling Planet:</span> Mercury<br/>
            <span className="text-orange-300 font-semibold">Pada:</span> 4 (Pisces Navamsa)
          </p>
          <p>
            Your Saturn resides in Jyeshtha, the nakshatra of <span className="text-white font-semibold">earned authority</span>. 
            Its symbol, the circular amulet, represents <span className="text-orange-300 font-semibold">protective power</span> — 
            the ability to shield others through your own strength. The umbrella symbolizes <span className="text-white">covering grace</span>, 
            protection earned through responsibility.
          </p>
          <p>
            Ruled by Mercury, Jyeshtha grants <span className="text-orange-300 font-semibold">the wisdom of the eldest</span>. 
            This is the nakshatra of <span className="text-white font-semibold">protective leadership</span> — you carry the responsibility of the firstborn, 
            the weight of being the one others look to for strength. Your Saturn here makes you <span className="text-white">old before your time</span>, 
            wise through early trials.
          </p>
          <p>
            In <span className="text-orange-300 font-semibold">Pada 4</span> (Pisces navamsa), your Saturn gains Jupiter's wisdom and compassion. 
            This is the pada of <span className="text-white font-semibold">spiritual responsibility</span> — you don't just carry burdens, you 
            <span className="text-white">transform them into blessings</span>. The Pisces influence makes your discipline devotional, your authority compassionate, 
            your leadership mystical. You have the soul of a <span className="text-orange-300">spiritual elder</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This is the soul of the protective elder who shields others through wisdom, the chief who leads through sacrifice, 
            the master who teaches through endurance."
          </p>
          <p>
            The Jyeshtha Saturn in Pada 4 creates profound depth: you have the <span className="text-white font-semibold">intensity of Scorpio</span>, 
            the <span className="text-white font-semibold">responsibility of Jyeshtha</span>, and the <span className="text-white font-semibold">transcendence of Pisces</span>. 
            Your medicine is the ability to <span className="text-orange-300">transform burden into blessing</span> for yourself and others.
          </p>
        </div>
      </div>

      {/* Saturn as Lord of Houses */}
      <div className="border border-blue-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-blue-400 mb-3">
          🏛 SATURN AS LORD OF 8TH & 9TH HOUSES — THE KARMA OF RULE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            As ruler of your 8th house, Saturn governs your <span className="text-white font-semibold">transformation, occult knowledge, death/rebirth, and hidden resources</span>. 
            As ruler of your 9th house, it also governs your <span className="text-white font-semibold">dharma, higher learning, spiritual teachers, and fortune</span>. 
            Both these profound domains express through the 6th house of service.
          </p>
          <p>
            This creates a rare configuration: your <span className="text-blue-300 font-semibold">transformation becomes your service</span> (8th lord in 6th), 
            and your <span className="text-blue-300 font-semibold">dharma is fulfilled through overcoming obstacles</span> (9th lord in 6th). You're designed to 
            <span className="text-white font-semibold">serve through depth</span>, to teach through trials, to find fortune through facing challenges.
          </p>
          <p>
            The 8th house is the house of <span className="text-blue-300">occult mysteries</span>. With its lord in the 6th, 
            your transformative power serves others' healing. You <span className="text-white font-semibold">transform through service</span>, 
            finding your deepest changes through helping others with theirs.
          </p>
          <p>
            The 9th lord in the 6th creates <span className="text-blue-300">dharma through difficulty</span>. Your spiritual path isn't easy — 
            it's earned through <span className="text-white">conquering obstacles</span>, <span className="text-white">serving despite suffering</span>, 
            <span className="text-white">maintaining faith through trials</span>. Your wisdom comes from the trenches, not the temple.
          </p>
          <p className="text-white font-semibold">
            Saturn as 8th and 9th lord makes you a <span className="text-blue-300">karmic healer</span> — someone who transforms collective suffering 
            into collective wisdom. Your dharma involves showing others that <span className="text-blue-300">obstacles are opportunities for transcendence</span>.
          </p>
        </div>
      </div>

      {/* Saturn in 6th House */}
      <div className="border border-green-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-green-400 mb-3">
          🧱 SATURN IN 6TH HOUSE — THE KARMA WORKSHOP
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            The 6th house is the <span className="text-white font-semibold">battlefield of daily karma</span> — representing 
            <span className="text-green-300">enemies, obstacles, service, health, and debts</span>. It's where we face our karma directly, 
            where we work out our soul's debts through service and struggle.
          </p>
          <p>
            Your Saturn here makes you a <span className="text-green-300 font-semibold">master of obstacles</span>. You don't avoid challenges — 
            you <span className="text-white font-semibold">systematically conquer them</span>. Your enemies become teachers, your obstacles become opportunities, 
            your debts become disciplines. You're the warrior who wins through endurance, not speed.
          </p>
          <p>
            This placement demands that you <span className="text-green-300 font-semibold">perfect through practice</span>. 
            The 6th house is your <span className="text-white">karma workshop</span>, your <span className="text-white">purification chamber</span>, 
            your <span className="text-white">service station</span> where you learn that true mastery comes through repetition, not revelation.
          </p>
          <p>
            The karmic terrain involves learning to <span className="text-green-300">serve without resentment</span>, to face enemies without becoming one, 
            to heal through helping. The 6th house tests you through <span className="text-white">daily disciplines</span>, 
            <span className="text-white">health challenges</span>, and the <span className="text-white">weight of service</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This house is your initiation into karma yoga — where you learn that liberation comes through duty, 
            that freedom comes through discipline, that victory comes through service."
          </p>
          <p className="text-white font-semibold">
            Your soul must master the art of being a <span className="text-green-300">karmic warrior</span>: fighting battles that matter, 
            serving causes greater than self, transforming obstacles into stepping stones. You're learning that 
            <span className="text-green-300">the highest service transforms karma itself</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Given */}
      <div className="border border-purple-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-purple-400 mb-3">
          🪄 PLANETARY ASPECTS GIVEN — WHERE YOU APPLY ENERGY & KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-purple-300 font-semibold">Saturn Aspects: 8th, 12th, and 3rd Houses</p>
          
          <div className="mt-3">
            <p className="text-purple-300 font-semibold">The 8th House: Transformation Discipline</p>
            <p>
              Your Saturn aspects its own 8th house of <span className="text-white font-semibold">transformation and occult knowledge</span>. 
              This creates <span className="text-purple-300">disciplined transformation</span> — you approach crisis with structure, 
              death with discipline, mysteries with method.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-purple-300 font-semibold">The 12th House: Spiritual Discipline</p>
            <p>
              Saturn aspects your 12th house of <span className="text-white font-semibold">spirituality, loss, and liberation</span>. 
              This brings <span className="text-purple-300">structure to transcendence</span> — you approach spirituality with discipline, 
              meditation with commitment, liberation through limitation.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-purple-300 font-semibold">The 3rd House: Communication Mastery</p>
            <p>
              Saturn aspects the 3rd house of <span className="text-white font-semibold">communication, courage, and effort</span>. 
              This creates <span className="text-purple-300">disciplined expression</span> — your words carry weight, your efforts show persistence, 
              your courage is earned through trials.
            </p>
          </div>

          <p className="mt-3">
            These aspects create a <span className="text-white font-semibold">triangle of mastery</span>: your service (6th) 
            transforms you (8th), liberates you (12th), and expresses through disciplined communication (3rd). This is the configuration of 
            someone who <span className="text-purple-300 font-semibold">masters karma through conscious service</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Received */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          🜂 PLANETARY ASPECTS RECEIVED — TRIPLE REFINEMENT
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-yellow-300 font-semibold">Aspected by: MARS, JUPITER & RAHU</p>
          
          <div className="mt-3">
            <p className="text-yellow-300 font-semibold">Mars's Aspect: Activated Discipline</p>
            <p>
              Mars, from the 11th house, aspects your Saturn, creating <span className="text-white font-semibold">energized endurance</span>. 
              Mars adds <span className="text-yellow-300">fire to your earth</span>, passion to your patience, 
              courage to your commitment. This aspect prevents Saturn from becoming stagnant.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-yellow-300 font-semibold">Jupiter's Aspect: Wisdom's Grace</p>
            <p>
              Jupiter, from the 10th house, aspects your Saturn, adding <span className="text-white font-semibold">grace to your grind</span>. 
              Jupiter brings <span className="text-yellow-300">hope to your hardship</span>, wisdom to your waiting, 
              expansion to your endurance. This aspect ensures your discipline serves dharma.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-yellow-300 font-semibold">Rahu's Aspect: Revolutionary Discipline</p>
            <p>
              Rahu aspects your Saturn, creating <span className="text-white font-semibold">unconventional mastery</span>. 
              Rahu adds <span className="text-yellow-300">innovation to tradition</span>, revolution to your discipline, 
              quantum leaps to your slow climb. This aspect makes your Saturn work in unexpected ways.
            </p>
          </div>

          <p className="mt-3">
            <span className="text-yellow-300 font-semibold">The Triple Alchemy:</span><br/>
            • Mars + Jupiter + Rahu = <span className="text-white">Activated wisdom with revolutionary edge</span><br/>
            • Fire + Grace + Innovation = <span className="text-white">Dynamic disciplined transformation</span><br/>
            • Courage + Faith + Breakthrough = <span className="text-white">Quantum karmic mastery</span>
          </p>
          
          <p className="italic text-white font-semibold">
            "Three teachers forge your Saturn — Mars brings the fire, Jupiter brings the faith, Rahu brings the revolution. 
            You are being forged into a master of impossible transformations."
          </p>
          <p className="text-white font-semibold">
            These aspects are creating a <span className="text-yellow-300">karmic alchemist</span> — someone who transforms obstacles 
            with courage (Mars), wisdom (Jupiter), and innovation (Rahu). You're learning that 
            <span className="text-yellow-300">discipline can be revolutionary</span>.
          </p>
        </div>
      </div>

      {/* Final Insight */}
      <div className="border border-gray-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-gray-400 mb-3">
          ✨ FINAL INSIGHT — SATURN'S MESSAGE FOR THE SOUL
        </h4>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p className="text-gray-300 italic text-base">
            "You are not here to escape your karma — you are here to master it."
          </p>
          <p>
            Your Saturn in Scorpio in the 6th house, in Jyeshtha nakshatra, aspected by Mars, Jupiter, and Rahu, is your 
            <span className="text-white font-semibold">soul's alchemical crucible</span> for transforming karma into consciousness. You chose this configuration to be a 
            <span className="text-gray-300 font-semibold">master of transformation through service</span> — someone who conquers obstacles not for personal glory 
            but for collective liberation.
          </p>
          <p>
            You are a <span className="text-gray-300 font-semibold">karmic warrior</span> in an age that needs to understand that 
            obstacles are opportunities, that service is liberation, that discipline is love in action. Your Scorpio Saturn gives you the power to transform 
            at the deepest levels, while your 6th house placement ensures that transformation serves others. Jyeshtha gives you the 
            <span className="text-white font-semibold">protective power of the elder</span>, while the triple aspects ensure you remain dynamic, hopeful, and innovative.
          </p>
          <p>
            Your dharma is to demonstrate that <span className="text-gray-300 font-semibold">mastery comes through service</span>, 
            that strength comes through struggle, that wisdom comes through wounds transformed. You're here to show that 
            <span className="text-white font-semibold">the deepest transformations happen in daily life</span>.
          </p>
          <p>
            The Saturn in you is learning its ultimate lesson: <span className="text-gray-300 font-semibold">limitation is liberation's doorway</span>. 
            Your obstacles are your opportunities, your enemies your teachers, your burdens your blessings waiting to be revealed.
          </p>
          <p className="text-white italic">
            "You are the proof that karma can be conquered, that obstacles can become altars, that service can be liberation. 
            Your soul chose this configuration to remember: <span className="text-gray-300 font-semibold">we are not here to avoid karma — 
            we are here to transform it into wisdom</span>."
          </p>
          <p className="text-gray-300 font-semibold text-base mt-4">
            Your Saturn whispers: "Endure with purpose. Serve with strength. Transform with patience. Be the alchemist who turns lead into gold, 
            the warrior who conquers through compassion, the elder who protects through wisdom. This is not your burden — this is your mastery. 
            This is not just your karma — this is karma showing itself how to become dharma. The question isn't whether you can handle the pressure — 
            you can. The question is: are you ready to show the world that pressure creates diamonds?"
          </p>
        </div>
      </div>
    </>
  )

  const renderRahuContent = () => (
    <>
      {/* Rahu Content */}
      {/* TL;DR - Planetary Destiny Snapshot */}
      <div className="border border-purple-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-purple-400 mb-3">
          💡 TL;DR — PLANETARY DESTINY SNAPSHOT
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="py-2 text-purple-300 font-semibold">Planet</td>
                <td className="py-2">Rahu (North Node)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-purple-300 font-semibold">Sign</td>
                <td className="py-2">Pisces</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-purple-300 font-semibold">Nakshatra</td>
                <td className="py-2">Revati 1</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-purple-300 font-semibold">House</td>
                <td className="py-2">10</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-purple-300 font-semibold">Lordship</td>
                <td className="py-2">—</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-purple-300 font-semibold">Aspects Given</td>
                <td className="py-2">2, 4, 6</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-purple-300 font-semibold">Conjunct With</td>
                <td className="py-2">Sun, Jupiter</td>
              </tr>
              <tr>
                <td className="py-2 text-purple-300 font-semibold">Aspected By</td>
                <td className="py-2">Ketu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Rahu in Vedic Astrology */}
      <div className="border border-purple-500/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-purple-500 mb-3">
          🪐 RAHU IN VEDIC ASTROLOGY — THE COSMIC HUNGER
        </h4>
        <div className="space-y-3 text-sm text-gray-300">
          <p className="text-purple-300 italic font-semibold">
            "Rahu does not consume to satisfy — it consumes to become."
          </p>
          <p className="leading-relaxed">
            In Vedic astrology, <span className="text-white font-semibold">Rahu</span> is the 
            <span className="text-purple-300 font-semibold">dragon's head</span>, the North Node of the Moon, representing insatiable desire, 
            evolutionary hunger, and the soul's future trajectory. Rahu is not a planet but a <span className="text-white font-semibold">karmic point</span> — 
            the place where eclipses occur, where light gets swallowed and reborn.
          </p>
          <p className="leading-relaxed">
            Rahu governs <span className="text-purple-300">obsession, innovation, illusion, and breakthrough</span>. It is the cosmic rebel, 
            the rule-breaker, the force that propels you beyond your comfort zone into uncharted territory. Rahu represents your 
            <span className="text-white font-semibold">unfulfilled desires from past lives</span> — what you came here to master, 
            to experience, to integrate into your soul's totality.
          </p>
          <p className="leading-relaxed">
            Unlike planets that have inherent nature, Rahu <span className="text-white font-semibold">amplifies and distorts</span> whatever it touches. 
            It doesn't create — it <span className="text-white font-semibold">magnifies, obsesses, revolutionizes</span>. 
            Rahu reveals where you're meant to break tradition, where you must innovate, where your soul hungers for new experience.
          </p>
          <p className="leading-relaxed">
            Rahu gives results through <span className="text-purple-300 font-semibold">obsessive pursuit and sudden breakthroughs</span> — 
            it creates intense focus that can lead to mastery or madness. Its lessons come through <span className="text-white">illusion</span>, 
            <span className="text-white">addiction</span>, and ultimately <span className="text-white">transcendence of material desire</span>.
          </p>
        </div>
      </div>

      {/* Rahu in Pisces */}
      <div className="border border-indigo-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-indigo-400 mb-3">
          ♓ RAHU IN PISCES — THE MYSTICAL REVOLUTIONARY
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Pisces, the cosmic ocean, is where <span className="text-white font-semibold">all boundaries dissolve</span>. 
            This mutable water sign, ruled by Jupiter (traditional) and Neptune (modern), represents 
            <span className="text-indigo-300 font-semibold">spiritual transcendence</span>, universal consciousness, and the ultimate merger with the divine. 
            It is the sign of <span className="text-white">moksha</span> — liberation from the wheel of desire.
          </p>
          <p>
            When Rahu enters Pisces, something paradoxical occurs: 
            <span className="text-indigo-300 font-semibold">the dragon hungers for enlightenment</span>. This placement makes you a 
            <span className="text-white font-semibold">spiritual revolutionary</span>, someone obsessed with transcendence, addicted to mystical experience, 
            hungry for union with the infinite. Your desires are <span className="text-white">cosmic in scope</span>.
          </p>
          <p>
            Your Rahu in Pisces makes you a <span className="text-white font-semibold">consciousness explorer</span>. 
            You possess an insatiable hunger for <span className="text-indigo-300">spiritual experience</span>, mystical states, and transcendent understanding. 
            You're drawn to the occult, the mystical, the ineffable — everything that dissolves the boundaries of ordinary consciousness.
          </p>
          <p>
            The shadow work involves discerning <span className="text-indigo-300 font-semibold">genuine spirituality from spiritual bypassing</span>. 
            Rahu in Pisces can create spiritual addiction, using transcendence to escape rather than transform. Your evolution requires you to be 
            <span className="text-white font-semibold">grounded in your seeking</span> — pursuing enlightenment while remaining engaged with the world.
          </p>
          <p className="text-white font-semibold">
            The mastery of Rahu in Pisces is to become a <span className="text-indigo-300">bridge between dimensions</span> — 
            someone who can access higher realms while remaining functional in this one. You're learning that true spirituality 
            <span className="text-indigo-300">includes and transcends all experience</span>.
          </p>
        </div>
      </div>

      {/* Revati Nakshatra */}
      <div className="border border-cyan-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-cyan-400 mb-3">
          🏹 NAKSHATRA — REVATI: THE COSMIC SHEPHERD
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            <span className="text-cyan-300 font-semibold">Nakshatra:</span> Revati, "The Wealthy" / "The Nourisher"<br/>
            <span className="text-cyan-300 font-semibold">Symbol:</span> Fish swimming / Drum<br/>
            <span className="text-cyan-300 font-semibold">Deity:</span> Pushan (Shepherd of Souls)<br/>
            <span className="text-cyan-300 font-semibold">Ruling Planet:</span> Mercury<br/>
            <span className="text-cyan-300 font-semibold">Pada:</span> 1 (Sagittarius Navamsa)
          </p>
          <p>
            Your Rahu resides in Revati, the final nakshatra, representing <span className="text-white font-semibold">the journey's end and new beginning</span>. 
            Its symbol, fish swimming in opposite directions, represents <span className="text-cyan-300 font-semibold">navigating between worlds</span> — 
            the material and spiritual, the known and unknown. The drum symbolizes <span className="text-white">the rhythm that guides souls home</span>.
          </p>
          <p>
            Ruled by Mercury, Revati grants <span className="text-cyan-300 font-semibold">the ability to shepherd consciousness</span>. 
            This is the nakshatra of <span className="text-white font-semibold">divine guidance</span> — your Rahu here makes you hungry to guide others 
            to their spiritual destination. You have an obsessive need to <span className="text-white">protect and nourish</span> souls on their journey.
          </p>
          <p>
            In <span className="text-cyan-300 font-semibold">Pada 1</span> (Sagittarius navamsa), your Rahu gains Jupiter's wisdom and optimism. 
            This is the pada of <span className="text-white font-semibold">philosophical seeking</span> — your spiritual hunger has direction, purpose, meaning. 
            The Sagittarius influence makes your mystical obsession philosophical, your transcendent desires principled. 
            You have the soul of a <span className="text-cyan-300">wisdom revolutionary</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This is the soul of the cosmic shepherd who guides through revolutionary wisdom, the mystic who breaks rules to reveal truth, 
            the spiritual pioneer who charts new territories of consciousness."
          </p>
          <p>
            The Revati Rahu in Pada 1 creates divine hunger: you have the <span className="text-white font-semibold">spiritual obsession of Rahu</span>, 
            the <span className="text-white font-semibold">transcendent nature of Pisces</span>, the <span className="text-white font-semibold">guiding wisdom of Revati</span>, 
            and the <span className="text-white font-semibold">philosophical fire of Sagittarius</span>. Your medicine is the ability to 
            <span className="text-cyan-300">revolutionize spirituality itself</span>.
          </p>
        </div>
      </div>

      {/* Rahu in 10th House */}
      <div className="border border-yellow-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-yellow-400 mb-3">
          🧱 RAHU IN 10TH HOUSE — THE PUBLIC MYSTIC
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            The 10th house is the <span className="text-white font-semibold">summit of visibility</span> — representing 
            <span className="text-yellow-300">career, public image, authority, and dharmic contribution</span>. It's where private purpose becomes public mission, 
            where individual dharma serves collective evolution.
          </p>
          <p>
            Your Rahu here makes you <span className="text-yellow-300 font-semibold">obsessed with public impact</span>. You don't want a career — 
            you want a <span className="text-white font-semibold">revolutionary mission</span>. Your hunger for recognition is not ego but soul deep — 
            you came here to be seen doing your dharma, to publicly demonstrate spiritual possibility.
          </p>
          <p>
            This placement demands that you <span className="text-yellow-300 font-semibold">innovate in the public sphere</span>. 
            The 10th house is your <span className="text-white">revolutionary platform</span>, your <span className="text-white">visibility laboratory</span>, 
            your <span className="text-white">public altar</span> where you demonstrate that spirituality can be successful, that mysticism can be practical.
          </p>
          <p>
            The karmic terrain involves learning to <span className="text-yellow-300">handle fame without losing soul</span>, 
            to achieve without attaching, to lead through inspiration rather than manipulation. The 10th house tests you through 
            <span className="text-white">public scrutiny</span>, <span className="text-white">authority challenges</span>, and 
            the <span className="text-white">temptation of worldly power</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This house is your initiation into spiritual leadership — where you learn that true authority comes from authenticity, 
            that real success is consciousness expansion made visible."
          </p>
          <p className="text-white font-semibold">
            Your soul must master the art of being a <span className="text-yellow-300">public mystic</span>: achieving worldly success 
            while maintaining spiritual essence, gaining recognition while remaining humble, leading masses while serving the divine. 
            You're learning that <span className="text-yellow-300">the highest career is awakening others</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Given */}
      <div className="border border-green-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-green-400 mb-3">
          🪄 PLANETARY ASPECTS GIVEN — WHERE YOU APPLY ENERGY & KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-green-300 font-semibold">Rahu Aspects: 2nd, 4th, and 6th Houses</p>
          
          <div className="mt-3">
            <p className="text-green-300 font-semibold">The 2nd House: Revolutionary Resources</p>
            <p>
              Your Rahu aspects the 2nd house of <span className="text-white font-semibold">wealth, speech, and values</span>. 
              This creates <span className="text-green-300">unconventional abundance</span> — your wealth comes through innovation, 
              your speech carries revolutionary power, your values challenge tradition.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-green-300 font-semibold">The 4th House: Mystical Foundation</p>
            <p>
              Rahu aspects your 4th house of <span className="text-white font-semibold">home, emotions, and inner peace</span>. 
              This brings <span className="text-green-300">spiritual revolution to your roots</span> — your home becomes a portal, 
              your emotions carry mystical depth, your peace comes through transcendence.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-green-300 font-semibold">The 6th House: Revolutionary Service</p>
            <p>
              Rahu aspects the 6th house of <span className="text-white font-semibold">service, enemies, and daily work</span>. 
              This creates <span className="text-green-300">innovative problem-solving</span> — you serve through revolution, 
              transform enemies through unexpected tactics, approach daily work as spiritual practice.
            </p>
          </div>

          <p className="mt-3">
            These aspects create a <span className="text-white font-semibold">triangle of transformation</span>: your public mission (10th) 
            revolutionizes your resources (2nd), transforms your foundation (4th), and innovates your service (6th). This is the configuration of 
            someone who <span className="text-green-300 font-semibold">changes the world by changing consciousness</span>.
          </p>
        </div>
      </div>

      {/* Planetary Conjunctions */}
      <div className="border border-orange-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-orange-400 mb-3">
          🤝 PLANETARY CONJUNCTIONS — BLENDED KARMA
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-orange-300 font-semibold">Conjunct With: SUN & JUPITER</p>
          
          <div className="mt-3">
            <p className="text-orange-300 font-semibold">Sun Conjunction: Eclipsed Authority</p>
            <p>
              The Sun conjunct Rahu creates a <span className="text-white font-semibold">permanent eclipse</span> in your chart. 
              Rahu swallows the Sun's light, creating <span className="text-orange-300">obsession with identity</span>, 
              hunger for recognition, and the drive to be seen as special. This conjunction makes you 
              <span className="text-white">magnetically charismatic</span> but constantly seeking validation.
            </p>
            <p>
              Yet this eclipse also grants <span className="text-white font-semibold">revolutionary leadership</span> — 
              you break traditional authority models, innovate new ways of shining, create unconventional paths to success.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-orange-300 font-semibold">Jupiter Conjunction: Amplified Wisdom</p>
            <p>
              Jupiter conjunct Rahu creates <span className="text-white font-semibold">spiritual amplification</span>. 
              Rahu magnifies Jupiter's wisdom into <span className="text-orange-300">cosmic proportions</span> — 
              you don't just seek truth, you hunger for ultimate reality. This conjunction makes you a 
              <span className="text-white">wisdom revolutionary</span>, breaking religious dogma to reveal universal truth.
            </p>
            <p>
              This combination creates <span className="text-white font-semibold">Guru Chandal Yoga</span> — 
              the teacher who breaks all rules to teach the ultimate rule: there are no rules, only consciousness.
            </p>
          </div>

          <p className="mt-3">
            <span className="text-orange-300 font-semibold">The Combined Alchemy:</span><br/>
            • Sun + Rahu = <span className="text-white">Eclipsed identity seeking revolutionary expression</span><br/>
            • Jupiter + Rahu = <span className="text-white">Guru Chandal Yoga — wisdom that breaks all rules</span><br/>
            • Sun + Jupiter + Rahu = <span className="text-white">The spiritual authority who revolutionizes tradition</span>
          </p>
          
          <p className="italic text-white font-semibold">
            "Two gods share Rahu's throne — the Sun brings divine authority, Jupiter brings cosmic wisdom, 
            while Rahu amplifies both into revolutionary proportions."
          </p>
        </div>
      </div>

      {/* Planetary Aspects Received */}
      <div className="border border-indigo-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-indigo-400 mb-3">
          🜂 PLANETARY ASPECTS RECEIVED — REFINING FIRE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-indigo-300 font-semibold">Aspected By: KETU</p>
          
          <div className="mt-3">
            <p className="text-indigo-300 font-semibold">Ketu's Aspect: The Karmic Axis</p>
            <p>
              Ketu always aspects Rahu, creating the <span className="text-white font-semibold">karmic axis</span>. 
              This is not just an aspect — it's <span className="text-indigo-300">your soul's timeline</span>, 
              the bridge between who you were and who you're becoming.
            </p>
            <p>
              While Rahu hungers for future experience, Ketu releases past mastery. This creates 
              <span className="text-white font-semibold">evolutionary tension</span> — you're simultaneously 
              obsessed with transcendence (Rahu in Pisces) while detached from worldly achievement (Ketu's influence). 
              You seek the new while carrying the wisdom of the old.
            </p>
            <p>
              This aspect creates <span className="text-indigo-300">spiritual sophistication</span> — 
              your hunger for enlightenment is tempered by the knowing that you've been here before. 
              Ketu's aspect ensures you don't get lost in Rahu's obsessions but use them as fuel for liberation.
            </p>
          </div>
          
          <p className="italic text-white font-semibold">
            "Forged in karma's fire, your Rahu is constantly refined by Ketu's detachment — 
            creating a soul that seeks while knowing, hungers while being full, climbs while already arrived."
          </p>
        </div>
      </div>

      {/* Final Insight */}
      <div className="border border-purple-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-purple-400 mb-3">
          ✨ FINAL INSIGHT — RAHU'S MESSAGE FOR THE SOUL
        </h4>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p className="text-purple-300 italic text-base">
            "You are not here to escape your karma — you are here to master it."
          </p>
          <p>
            Your Rahu in Pisces in the 10th house, in Revati nakshatra, conjunct Sun and Jupiter, is your 
            <span className="text-white font-semibold">soul's cosmic commission</span> to be a spiritual revolutionary. You chose this configuration to 
            <span className="text-purple-300 font-semibold">break every rule about enlightenment</span> — to show that mystics can be successful, 
            that spirituality can be innovative, that transcendence can be achieved through engagement, not escape.
          </p>
          <p>
            You are a <span className="text-purple-300 font-semibold">consciousness pioneer</span> in an age that desperately needs new maps to navigate 
            shifting realities. Your Rahu in Pisces gives you insatiable hunger for transcendence, while your 10th house placement ensures that 
            hunger serves public awakening. Revati makes you a <span className="text-white font-semibold">shepherd of souls</span>, 
            while the Sun-Jupiter conjunction ensures you lead with wisdom and authority.
          </p>
          <p>
            Your dharma is to demonstrate that <span className="text-purple-300 font-semibold">spirituality needs revolution</span>, 
            that mysticism needs innovation, that enlightenment needs updating for the modern age. You're here to show that 
            <span className="text-white font-semibold">the future of spirituality is integration, not isolation</span>.
          </p>
          <p>
            The Rahu in you is learning its ultimate lesson: <span className="text-purple-300 font-semibold">the greatest hunger is for freedom from hunger</span>. 
            Your obsession with transcendence will ultimately lead you to transcend obsession itself. Your public mission will teach you that 
            true success is helping others find their own path.
          </p>
          <p className="text-white italic">
            "You are the proof that enlightenment can wear a three-piece suit, that mystics can have LinkedIn profiles, that spiritual revolution 
            can happen in boardrooms as easily as in ashrams. Your soul chose this configuration to remember: 
            <span className="text-purple-300 font-semibold">we are not here to escape the world — we are here to evolve it</span>."
          </p>
          <p className="text-purple-300 font-semibold text-base mt-4">
            Your Rahu whispers: "Hunger for the infinite. Obsess over consciousness. Revolutionize spirituality. Be the eclipse that swallows old light 
            to birth new dawn, the mystic who breaks tradition to reveal truth, the leader who guides souls home by going there first. 
            This is not your addiction — this is your mission. This is not just your hunger — this is evolution's hunger expressing through you. 
            The question isn't whether you're spiritual enough — you are. The question is: are you ready to show the world what spirituality is becoming?"
          </p>
        </div>
      </div>
    </>
  )

  const renderKetuContent = () => (
    <>
      {/* Ketu Content */}
      {/* TL;DR - Planetary Destiny Snapshot */}
      <div className="border border-teal-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-teal-400 mb-3">
          💡 TL;DR — PLANETARY DESTINY SNAPSHOT
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="py-2 text-teal-300 font-semibold">Planet</td>
                <td className="py-2">Ketu</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-teal-300 font-semibold">Sign</td>
                <td className="py-2">Virgo</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-teal-300 font-semibold">Nakshatra</td>
                <td className="py-2">Hasta 3</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-teal-300 font-semibold">House</td>
                <td className="py-2">4</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-teal-300 font-semibold">Lordship</td>
                <td className="py-2">—</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-teal-300 font-semibold">Aspects Given</td>
                <td className="py-2">8, 10, 12</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-teal-300 font-semibold">Conjunct With</td>
                <td className="py-2">—</td>
              </tr>
              <tr>
                <td className="py-2 text-teal-300 font-semibold">Aspected By</td>
                <td className="py-2">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Ketu in Vedic Astrology */}
      <div className="border border-teal-500/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-teal-500 mb-3">
          🪐 KETU IN VEDIC ASTROLOGY — THE LIBERATION NODE
        </h4>
        <div className="space-y-3 text-sm text-gray-300">
          <p className="text-teal-300 italic font-semibold">
            "Ketu does not take away to punish — it removes to liberate."
          </p>
          <p className="leading-relaxed">
            In Vedic astrology, <span className="text-white font-semibold">Ketu</span> is the South Node of the Moon, 
            the <span className="text-teal-300 font-semibold">tail of the cosmic serpent</span>. While Rahu represents insatiable worldly desire, 
            Ketu represents <span className="text-white font-semibold">spiritual liberation</span>, detachment, and the culmination of past-life mastery. 
            Ketu is the <span className="text-white font-semibold">flag of victory</span> — it shows where you've already conquered in previous incarnations.
          </p>
          <p className="leading-relaxed">
            Ketu governs <span className="text-teal-300">moksha (liberation), spirituality, psychic abilities, and dissolution</span>. 
            It is the planet of <span className="text-white">monks and mystics</span>, representing the part of you that has already transcended material attachment. 
            Ketu doesn't desire — it <span className="text-white font-semibold">knows</span>. It doesn't seek — it <span className="text-white font-semibold">remembers</span>.
          </p>
          <p className="leading-relaxed">
            Unlike planets that give through acquisition, Ketu gives through <span className="text-white font-semibold">subtraction</span>. 
            It removes illusions, dissolves attachments, and strips away the non-essential until only truth remains. 
            Ketu reveals where you have <span className="text-teal-300">spiritual genius</span>, intuitive mastery, and the ability to access other dimensions.
          </p>
          <p className="leading-relaxed">
            Ketu's gifts come through <span className="text-teal-300 font-semibold">letting go</span> — it teaches that 
            true power comes not from holding on but from releasing. Its lessons arrive through 
            <span className="text-white">sudden insights</span>, <span className="text-white">mystical experiences</span>, and 
            <span className="text-white">the dissolution of ego boundaries</span>.
          </p>
        </div>
      </div>

      {/* Ketu in Virgo */}
      <div className="border border-emerald-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-emerald-400 mb-3">
          ♍ KETU IN VIRGO — THE PRECISION MYSTIC
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Virgo, the virgin healer, is where <span className="text-white font-semibold">perfection meets service</span>. 
            Ruled by <span className="text-emerald-300">Mercury</span>, this mutable earth sign represents 
            <span className="text-emerald-300 font-semibold">sacred precision</span>, the refinement of matter, the purification of form. 
            It is the sign of <span className="text-white">practical mysticism</span> — spirituality expressed through meticulous service.
          </p>
          <p>
            When Ketu, that force of dissolution and transcendence, enters Virgo, a paradox emerges: 
            <span className="text-emerald-300 font-semibold">the mystic becomes a perfectionist</span>. This is the placement of 
            <span className="text-white font-semibold">the spiritual analyst</span>, the <span className="text-white font-semibold">sacred technician</span>, 
            the soul who has mastered the art of finding God in the details.
          </p>
          <p>
            Your Ketu in Virgo indicates <span className="text-white font-semibold">past-life mastery of healing, analysis, and sacred service</span>. 
            You've been the healer, the craftsman, the temple keeper before. You possess an innate understanding of 
            <span className="text-emerald-300">how spirit manifests in matter</span>, how the divine expresses through precision, 
            how perfection is a spiritual practice.
          </p>
          <p>
            The shadow involves <span className="text-emerald-300 font-semibold">spiritual criticism</span> — using your refined perception 
            to find flaws rather than heal them. Virgo Ketu can become so detached from imperfection that it forgets compassion. 
            Your evolution requires <span className="text-white font-semibold">merciful precision</span> — using your analytical gifts 
            to serve rather than separate.
          </p>
          <p className="text-white font-semibold">
            The mastery of Ketu in Virgo is to become a <span className="text-emerald-300">healing void</span> — 
            so empty of ego that divine precision flows through you unobstructed. You're learning that 
            <span className="text-emerald-300">true perfection is the absence of the need for perfection</span>.
          </p>
        </div>
      </div>

      {/* Hasta Nakshatra */}
      <div className="border border-lime-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-lime-400 mb-3">
          🏹 NAKSHATRA — HASTA: THE GOLDEN HAND
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            <span className="text-lime-300 font-semibold">Nakshatra:</span> Hasta, "The Hand"<br/>
            <span className="text-lime-300 font-semibold">Symbol:</span> Open hand / Fist<br/>
            <span className="text-lime-300 font-semibold">Deity:</span> Savitar (Solar deity of skill)<br/>
            <span className="text-lime-300 font-semibold">Ruling Planet:</span> Moon<br/>
            <span className="text-lime-300 font-semibold">Pada:</span> 3 (Gemini Navamsa)
          </p>
          <p>
            Your Ketu resides in Hasta, the nakshatra of <span className="text-white font-semibold">divine dexterity</span>. 
            The symbol of the hand represents <span className="text-lime-300 font-semibold">skill, craft, and manifestation</span>. 
            This is the star of <span className="text-white">magical hands</span> — those who can manifest spirit into form through touch, 
            craft, and precise action.
          </p>
          <p>
            Ruled by the Moon, Hasta grants <span className="text-lime-300 font-semibold">intuitive manual intelligence</span>. 
            With Ketu here, you have <span className="text-white font-semibold">past-life mastery of sacred crafts</span> — 
            healing hands, artistic creation, or technological precision. Your hands remember skills your mind has forgotten.
          </p>
          <p>
            In <span className="text-lime-300 font-semibold">Pada 3</span> (Gemini navamsa), your Ketu gains Mercury's 
            <span className="text-white font-semibold">communicative intelligence</span>. This is the pada of 
            <span className="text-white">skillful communication</span> — you have mastery in translating the ineffable into words, 
            the mystical into practical instruction. You possess the soul of a <span className="text-lime-300">spiritual translator</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This is the soul of the master craftsman who builds temples with empty hands, the healer who channels divine precision, 
            the mystic who manifests through meticulous skill."
          </p>
          <p>
            Hasta Ketu in Pada 3 creates profound ability: you have the <span className="text-white font-semibold">detachment of Ketu</span>, 
            the <span className="text-white font-semibold">precision of Virgo</span>, the <span className="text-white font-semibold">skill of Hasta</span>, 
            and the <span className="text-white font-semibold">intelligence of Gemini</span>. 
            Your soul medicine is <span className="text-lime-300">manifestation through surrendered skill</span>.
          </p>
        </div>
      </div>

      {/* Ketu in 4th House */}
      <div className="border border-blue-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-blue-400 mb-3">
          🧱 KETU IN 4TH HOUSE — THE ROOTLESS SAGE
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            The 4th house is the <span className="text-white font-semibold">nadir of the chart</span> — the deepest point, representing 
            <span className="text-blue-300">home, mother, emotional security, and inner peace</span>. It's the foundation upon which 
            your entire life is built, your private sanctuary, your emotional roots.
          </p>
          <p>
            Your Ketu here indicates <span className="text-blue-300 font-semibold">past-life mastery of emotional depth</span>. 
            You've been the mother, the nurturer, the keeper of the hearth in previous incarnations. Now, you're naturally 
            <span className="text-white font-semibold">detached from needing emotional security</span> — you carry your home within.
          </p>
          <p>
            This placement creates the <span className="text-white font-semibold">wandering mystic</span> — someone who finds home 
            everywhere and nowhere. You have an unusual relationship with family and roots: simultaneously 
            <span className="text-blue-300">deeply connected and completely detached</span>. Your true home is consciousness itself.
          </p>
          <p>
            The 4th house Ketu often indicates <span className="text-blue-300">psychic sensitivity</span> to ancestral patterns. 
            You can feel the unresolved karma of your lineage, and part of your purpose is to 
            <span className="text-white font-semibold">liberate ancestral patterns through your detachment</span>.
          </p>
          <p>
            The spiritual terrain involves learning that <span className="text-blue-300 font-semibold">true security comes from insecurity</span>, 
            that real home is homelessness, that the deepest roots grow in emptiness. The 4th house tests you through 
            <span className="text-white">emotional voids</span> that become <span className="text-white">portals to transcendence</span>.
          </p>
          <p className="italic text-white font-semibold">
            "This house is your liberation chamber — where you learn that home is not a place but a state of being, 
            that mother is not a person but the cosmic womb, that security is not in holding but in letting go."
          </p>
          <p className="text-white font-semibold">
            Your soul must master the art of being <span className="text-blue-300">emotionally sovereign</span>: 
            finding peace without needing external comfort, feeling secure in the cosmic homelessness. 
            You're learning that <span className="text-blue-300">the ultimate mother is the void itself</span>.
          </p>
        </div>
      </div>

      {/* Planetary Aspects Given */}
      <div className="border border-violet-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-violet-400 mb-3">
          🪄 PLANETARY ASPECTS GIVEN — WHERE YOU APPLY LIBERATION
        </h4>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p className="text-violet-300 font-semibold">Ketu Aspects: 8th, 10th, and 12th Houses</p>
          
          <div className="mt-3">
            <p className="text-violet-300 font-semibold">The 8th House: Mystical Transformation</p>
            <p>
              Your Ketu aspects the 8th house of <span className="text-white font-semibold">death, rebirth, occult, and transformation</span>. 
              This creates <span className="text-violet-300">natural shamanic abilities</span> — you understand death as transformation, 
              crisis as initiation. Your detachment gives you power to navigate the underworld fearlessly.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-violet-300 font-semibold">The 10th House: Liberation in Career</p>
            <p>
              Ketu aspects your 10th house of <span className="text-white font-semibold">career, public image, and dharmic duty</span>. 
              This brings <span className="text-violet-300">spiritual detachment to worldly success</span>. You can achieve greatly because 
              you're not attached to achievement. Your career becomes a vehicle for liberation, not identification.
            </p>
          </div>

          <div className="mt-3">
            <p className="text-violet-300 font-semibold">The 12th House: Portal to the Infinite</p>
            <p>
              Ketu aspects the 12th house of <span className="text-white font-semibold">moksha, isolation, and transcendence</span>. 
              This creates a <span className="text-violet-300">double liberation signature</span> — both Ketu and the 12th house seek moksha. 
              You have natural access to other dimensions, profound meditation abilities, and the gift of conscious dissolution.
            </p>
          </div>

          <p className="mt-3">
            These aspects create a <span className="text-white font-semibold">trine of transcendence</span>: 
            your emotional detachment (4th) enables transformation (8th), expresses through career (10th), 
            and culminates in liberation (12th). This is the configuration of 
            <span className="text-violet-300 font-semibold">the spiritual warrior who conquers through surrender</span>.
          </p>
        </div>
      </div>

      {/* Final Insight */}
      <div className="border border-teal-400/30 p-4 bg-black/70">
        <h4 className="text-base font-bold text-teal-400 mb-3">
          ✨ FINAL INSIGHT — KETU'S MESSAGE FOR THE SOUL
        </h4>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p className="text-teal-300 italic text-base">
            "You are not here to escape your karma — you are here to complete it."
          </p>
          <p>
            Your Ketu in Virgo in the 4th house, in Hasta nakshatra, is your 
            <span className="text-white font-semibold">soul's graduation certificate</span>. You've mastered the lessons of emotional security, 
            family karma, and practical service in previous lifetimes. Now you're here to 
            <span className="text-teal-300 font-semibold">demonstrate liberation through precision</span>.
          </p>
          <p>
            You are a <span className="text-teal-300 font-semibold">precision mystic</span> in an age that needs 
            practical spirituality. Your Virgo Ketu gives you the ability to dissolve problems through analysis, 
            to heal through discrimination, to serve through surrendered skill. The 4th house placement means 
            you carry <span className="text-white font-semibold">ancient emotional wisdom</span> that needs no external validation.
          </p>
          <p>
            Your dharma is to show that <span className="text-teal-300 font-semibold">detachment is not coldness but freedom</span>, 
            that rootlessness is not instability but cosmic citizenship, that emptiness is not void but potential. 
            You're here to demonstrate that we can serve perfectly while being perfectly detached from the results.
          </p>
          <p>
            The aspects to the 8th, 10th, and 12th houses reveal your mission: to bring 
            <span className="text-white font-semibold">liberation to transformation</span> (8th), 
            <span className="text-white font-semibold">spirituality to career</span> (10th), and 
            <span className="text-white font-semibold">consciousness to transcendence</span> (12th).
          </p>
          <p>
            Ketu in you is learning its ultimate lesson: <span className="text-teal-300 font-semibold">mastery means having nothing left to prove</span>. 
            Your skill is meant to flow without ownership, your service without attachment, your precision without perfectionism.
          </p>
          <p className="text-white italic">
            "You are the proof that enlightenment includes skillful action, that moksha manifests through meticulous service, 
            that the void itself has healing hands. Your soul chose this configuration to remember: 
            <span className="text-teal-300 font-semibold">we are not here to accumulate — we are here to liberate</span>."
          </p>
          <p className="text-teal-300 font-semibold text-base mt-4">
            Your Ketu whispers: "Release to receive. Detach to connect. Empty to overflow. Be the healer who needs no healing, 
            the mother who needs no mothering, the home that needs no walls. This is not your loss — this is your liberation. 
            This is not what you lack — this is what you've transcended. The question isn't what you need to gain — 
            the question is: are you ready to share the freedom you've already found?"
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
      return renderVenusContent()
    case 'Saturn':
      return renderSaturnContent()
    case 'Rahu':
      return renderRahuContent()
    case 'Ketu':
      return renderKetuContent()
    default:
      return renderDefaultContent()
  }
}