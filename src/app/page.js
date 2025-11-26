'use client';

import { useState } from 'react';
import { ChevronDown, Music, Users, Clock, BookOpen } from 'lucide-react';

export default function Home() {
  const [expandedItem, setExpandedItem] = useState(null);

  const orderOfService = [
    { num: 1, item: "Short prayer by the service conductor outside the church entrance" },
    { num: 2, item: "Lord's prayer" },
    { num: 3, item: "Processional entrance into the church with harvest song" },
    { num: 4, item: "Hymn for lighting the altar candles... Yara Sara x3" },
    { num: 5, item: "Hymn for worship while kneeling... Yaramah hi yaramah" },
    { num: 6, item: "Ringing of the bell thrice, reciting Holy x3 to the Lord of Host" },
    { num: 7, item: "Hymn Oh Christ my King" },
    { num: 8, item: "Eyiba thrice Psalm 51, Jehovah ramah Psalm 24" },
    { num: 9, item: "Gloria" },
    { num: 10, item: "Prayer of forgiveness of sin and sanctification by service conductor" },
    { num: 11, item: "Lord's prayer by the congregation" },
    { num: 12, item: "Hymn 58" },
    { num: 13, item: "Eyibah thrice Psalm 118" },
    { num: 14, item: "Gloria" },
    { num: 15, item: "Prayer of thanksgiving" },
    { num: 16, item: "Hymn 376" },
    { num: 17, item: "Jehovah lass Psalm 72" },
    { num: 18, item: "Three members prayer", details: [
      "MALE - C/E/B OMOSEHIN AKIN: pray for spiritual power & progress",
      "FEMALE - S/E/S BENJAMIN BUKOLA: pray for victory & protection for the nation",
      "MALE - Sup EVANG SANMI CRAIG: pray for bless & God's favor"
    ]},
    { num: 19, item: "Hymn 731" },
    { num: 20, item: "Silent prayer" },
    { num: 21, item: "Elibamah yabah thrice Psalm 20" },
    { num: 22, item: "Prayer by the service conductor" },
    { num: 23, item: "Hymn 713" },
    { num: 24, item: "First lesson - (Nehemiah 10: 32-39)", details: [
      "ENGLISH: C/E/B EZEAKA EMMANUEL",
      "YORUBA: H/E AKINTOYE NOAH"
    ]},
    { num: 25, item: "Gloria" },
    { num: 26, item: "Hymn 696" },
    { num: 27, item: "Second lesson - (Luke 12: 13-21)", details: [
      "ENGLISH: S/L OGUNYEMI DAMILARE",
      "YORUBA: S/M/S/E OPEYEMI OLUWASHINA"
    ]},
    { num: 28, item: "Gloria" },
    { num: 29, item: "Hymn 605" },
    { num: 30, item: "Announcement by Church Secretary" },
    { num: 31, item: "Gift of harvest by Shepherd V/S/E A.O. Ajide" },
    { num: 32, item: "The Creed" },
    { num: 33, item: "Prayer by the Sermoner" },
    { num: 34, item: "Sermon Rev. E.M.F Oshoffa" },
    { num: 35, item: "Prayer after sermon" },
    { num: 36, item: "Collection and other collections Tithe" },
    { num: 37, item: "Recognition of guest" },
    { num: 38, item: "Thanksgiving" },
    { num: 39, item: "Closing hymn 426" },
    { num: 40, item: "Closing prayer by M/C OLOWO" },
    { num: 41, item: "Lord's prayer. Gloria" },
    { num: 42, item: "Benediction by the pastor Rev E.M.F Oshoffa" },
    { num: 43, item: "Seven halleluyah to the four corners of the earth" },
    { num: 44, item: "Exit hymn by Choir" },
    { num: 45, item: "Prayer by the service conductor" },
    { num: 46, item: "Benediction by the service conductor" },
    { num: 47, item: "Seven halleluyah to the four corners of the earth" }
  ];

  const hymns = [
    { number: 58, title: "Hymn 58", content: "E korin, k'e gborin soke,\nS'Oba Oluwa mi,\nK'Oba mimo ko gba wa la,\nNinu Ijo Mimo yi,\nK'Oba mimo, ko gba wa la,\nKo fun wa l'aranse,\nKopa wa mo kuro ninu ese,\nKo wa dariji wa. Amin" },
    { number: 376, title: "Hymn 376 - Jesu Olubaso okan mi", content: "1. Jesu Olubaso okan mi,\nOre ti ko le ko mi sile,\nOba ti nso ekun d'ayo,\nOlutunu okan mi.\n\nChorus: Jehovah Nissi Oluwa,\nOpagun mi, mo dupe,\nFun 'dasi 'le Ijo Mimo,\nTo s'oju emi mi.\n\n2. L'arin ota, l'arin idamu,\nO ko fi mi, fun iji aiye,\nA! Oluwa mi, mo dupe, mo dupe, mo dupe.\n\nChorus: Jehovah Nissi Oluwa,\nOpagun mi, mo dupe,\nFun 'dasi 'le Ijo Mimo,\nTo s'oju emi mi. Amin" },
    { number: 731, title: "Hymn 731 - E gbe ori nyin si oke", content: "E gbe ori nyin si oke e,\n\nAni eyin, enu ona,\n\nKi a si gbe nyin si oke e,\n\nEyin 'lekun aiyeraye.\n\nChorus: K'oba ogo wo inu ile,\nWo 'nu ile mimo Re wa,\nTa ha ni Oba Ogo na?\nJehovah ni Oba Ogo,\nTa ha ni Oba Ogo na?\nJesu Kristi Olugbala.\n\n2. E se l'Oba eyin enia Re,\n\nKi gbogbo araiye se l'Oba,\n\nKi e si ma fi i ayo sin,\n\nF'ayo fi sin tokan tokan.\n\nChorus: K'oba ogo wo inu ile,\nWo 'nu ile mimo Re wa,\nTa ha ni Oba Ogo na?\nJehovah ni Oba Ogo,\nTa ha ni Oba Ogo na?\nJesu Kristi Olugbala.\n\n3. Agbara Emi Mimo se tan,\n\nLati wa gunwa ninu wa,\n\nE fi okan mimo ke pe e,\n\nKe pe ninu 'le mimo Re.\n\nChorus: K'oba ogo wo inu ile,\nWo 'nu ile mimo Re wa,\nTa ha ni Oba Ogo na?\nJehovah ni Oba Ogo,\nTa ha ni Oba Ogo na?\nJesu Kristi Olugbala.\n\n4. E fi iwa mimo ati ife,\n\nSin Oba wa 'rinu rode,\n\nOlumoran okan araiye,\n\nYio si gbo ohun igbe wa.\n\nChorus: K'oba ogo wo inu ile,\nWo 'nu ile mimo Re wa,\nTa ha ni Oba Ogo na?\nJehovah ni Oba Ogo,\nTa ha ni Oba Ogo na?\nJesu Kristi Olugbala. Amin" },
    { number: 713, title: "Hymn 713 - B'agogo Orun balu", content: "B'agogo Orun balu,\n\nAwa Omo Ijo Mimo,\n\nA o duro, a o duro,\n\nNiwaju Re, niwaju Re.\n\nChorus: A o duro, niwaju Re,\nA o b'awon angeli korin,\nOgo, ogo f'Oba wa,\nHalleluya, Halleluya,\nA o duro, o, niwaju Re.\n\n2.   Ijo Mimo e mura,\n\nE damure nyin giri,\n\nNitori, nitori,\n\nBi Jesu bade, awa o duro,\n\nChorus: A o duro, niwaju Re,\nA o b'awon angeli korin,\nOgo, ogo f'Oba wa,\nHalleluya, Halleluya,\nA o duro, o, niwaju Re.\n\nAmin" },
    { number: 696, title: "Hymn 696 - E wo ile wura naa", content: "1. E wo ile wura naa\nTa pese fun ijo mimo\nIle alayo ile ologo\nIbi isimi aiyeraiye \n\nChorus : E mura a, e mura E mura a, fun le ologo E mura a, e mura E mura fun 'le alayo \n\n2. Ipe na ndun kikan\nAwon maleka nyo\nLati pade awon ayanfe re\nTo sin pelu ife mimo\nChorus \n\n3. Enyin omo ijo mimo\nE wa ninu isona\nOpo yio jogun aiye yi\nYio si padanu 'joba orun\nChorus \n\n4. Opo ni a bukun fun\nNinu ijo mimo\nNwon yio jogun aiye yi\nNwon yio jogun ijoba orun\nChorus\n\n5. Enyin egbe akorin\nE di amure nyin\nK'a le korin lojo na Nile wura, nile ologo \n\nChorus : E mura a, e mura E mura a, fun le ologo E mura a, e mura E mura fun 'le alayo \n\nAmin." },
    { number: 605, title: "Hymn 605 - Ka sowopo ka joyin Baba", content: "1.   Ka sowopo ka joyin Baba,\n\nKa sowopo ka joyin Baba.\n\nChorus: Fun 'jo ikehin to sokale,\nKe Hossanah, Ko Hossanah,\nSo Olorun meta lokan.\n\n2.   Wa gba adura Olujo Mimo,\n\nWa gba adura Olujo Mimo.\n\nChorus: Fun 'jo ikehin to sokale,\nKe Hossanah, Ko Hossanah,\nSo Olorun meta lokan.\n\n3.   Wa gba wa la, Olujo Mimo,\n\nWa gba wa la, Olujo Mimo.\n\nChorus: Fun 'jo ikehin to sokale,\nKe Hossanah, Ko Hossanah,\nSo Olorun meta lokan.\n\n4.   Wa bukun wa, Olujo Mimo,\n\nWa bukun wa, Olujo Mimo.\n\nChorus: Fun 'jo ikehin to sokale,\nKe Hossanah, Ko Hossanah,\nSo Olorun meta lokan.\n\n5.   Wa gbe wa ga, Olujo Mimo,\n\nWa gbe wa ga, Olujo Mimo.\n\nChorus: Fun 'jo ikehin to sokale,\nKe Hossanah, Ko Hossanah,\nSo Olorun meta lokan.\n\nAmin" },
    { number: 426, title: "Hymn 426 - El Beraca, Bered Eli", content: "El Beraca, Bered Eli,\n\nOluwa mi, Oba, Olubukun ikore,\n\nWa ro Ojo Ibukun mana Re sori wa loni,\n\nJehovah Elyon, Oluwa Olola giga julo,\n\nWa fi Ola ainipekun Re, gbe wa ga,\n\nGbomo Re ga, larin ajoyo wa t'oni,\n\nEl Morijah Oluwa Oba Olupese,\n\nJowo wa pese fun gbogbo aini wa,\n\nKi gbogbo iro 'nu wa le di ayo,\n\nAti ki gbogbo egan wa le di ogo,\n\nEyin angeli mimo t'Orun,\n\nE ba wa ko orin iyin,\n\nKa wa le mu ohun rere lo sile wa,\n\nKristi alase l'aiye l'orun,\n\nS'ami si fun wa,\n\nAmin, amin, amin, amin, amin, amin. Amin" }
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 relative"
      style={{
        backgroundImage: 'url(/bgg.jpeg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        opacity: 1
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 opacity-85 pointer-events-none"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
      {/* Header */}
      <div className="backdrop-blur-md bg-gradient-to-r from-white/40 via-white/30 to-white/40 border-b border-white/30 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-6">
            <Music className="w-14 h-14 text-blue-600 drop-shadow-lg" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 text-gray-900 drop-shadow-md">Harvest Thanksgiving Service</h1>
          <p className="text-gray-800 text-xl font-semibold mb-2 drop-shadow">ORDER OF SERVICE & PROGRAMME OF EVENT</p>
          <p className="text-gray-700 mt-4 text-base font-medium drop-shadow">Service Conductor: <span className="font-bold">H/S/E ADEBAYO</span></p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Order of Service Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Clock className="w-8 h-8 text-blue-700 drop-shadow" />
            <h2 className="text-4xl font-bold text-gray-900">Order of Service</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {orderOfService.map((item) => (
              <div
                key={item.num}
                className="backdrop-blur-xl bg-white/50 rounded-2xl shadow-lg p-5 border border-white/50 hover:bg-white/60 hover:border-white/70 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold text-base leading-relaxed">{item.item}</p>
                    {item.details && (
                      <button
                        onClick={() => setExpandedItem(expandedItem === item.num ? null : item.num)}
                        className="mt-3 flex items-center gap-2 text-blue-800 hover:text-blue-900 text-sm font-bold transition-colors"
                      >
                        <ChevronDown
                          className="w-4 h-4 transition-transform"
                          style={{
                            transform: expandedItem === item.num ? 'rotate(180deg)' : 'rotate(0)'
                          }}
                        />
                        Details
                      </button>
                    )}
                    {expandedItem === item.num && item.details && (
                      <div className="mt-3 ml-3 pl-3 border-l-3 border-blue-400 space-y-2">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-gray-800 font-medium">{detail}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hymns Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Music className="w-8 h-8 text-blue-700 drop-shadow" />
            <h2 className="text-4xl font-bold text-gray-900">Hymns</h2>
          </div>
          
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-6">
            {hymns.map((hymn) => (
              <div
                key={hymn.number}
                className="inline-block w-full mb-6 backdrop-blur-xl bg-white/50 rounded-2xl shadow-lg p-6 border border-white/50 hover:bg-white/60 hover:border-white/70 transition-all duration-300"
                style={{ breakInside: 'avoid', WebkitColumnBreakInside: 'avoid', pageBreakInside: 'avoid' }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-blue-800">{hymn.title}</h3>
                <p className="text-gray-800 whitespace-pre-line text-sm leading-relaxed font-medium">{hymn.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Participants */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-8 h-8 text-blue-700 drop-shadow" />
            <h2 className="text-4xl font-bold text-gray-900">Key Participants</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            <div className="backdrop-blur-xl bg-white/50 rounded-2xl shadow-lg p-6 border border-white/50 hover:bg-white/60 hover:border-white/70 transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-3 text-lg text-blue-800">Sermon</h3>
              <p className="text-gray-800 font-semibold">Rev. E.M.F Oshoffa</p>
            </div>
            <div className="backdrop-blur-xl bg-white/50 rounded-2xl shadow-lg p-6 border border-white/50 hover:bg-white/60 hover:border-white/70 transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-3 text-lg text-blue-800">Benediction</h3>
              <p className="text-gray-800 font-semibold">Rev E.M.F Oshoffa</p>
            </div>
            <div className="backdrop-blur-xl bg-white/50 rounded-2xl shadow-lg p-6 border border-white/50 hover:bg-white/60 hover:border-white/70 transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-3 text-lg text-blue-800">Gift of Harvest</h3>
              <p className="text-gray-800 font-semibold">Shepherd V/S/E A.O. Ajide</p>
            </div>
          </div>
        </div>

        {/* Bible Lessons */}
        <div className="backdrop-blur-xl bg-white/50 rounded-2xl shadow-lg p-8 border border-white/50 mb-16">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-8 h-8 text-blue-700 drop-shadow" />
            <h2 className="text-4xl font-bold text-gray-900">Bible Lessons</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/30 rounded-xl p-6">
              <h3 className="font-bold text-xl text-blue-800 mb-4">First Lesson</h3>
              <p className="text-gray-800 mb-3 font-semibold"><span className="font-bold text-blue-700">Text:</span> Nehemiah 10:32-39</p>
              <p className="text-gray-800 mb-2 font-semibold"><span className="font-bold text-blue-700">English:</span> C/E/B EZEAKA EMMANUEL</p>
              <p className="text-gray-800 font-semibold"><span className="font-bold text-blue-700">Yoruba:</span> H/E AKINTOYE NOAH</p>
            </div>
            <div className="bg-white/30 rounded-xl p-6">
              <h3 className="font-bold text-xl text-blue-800 mb-4">Second Lesson</h3>
              <p className="text-gray-800 mb-3 font-semibold"><span className="font-bold text-blue-700">Text:</span> Luke 12:13-21</p>
              <p className="text-gray-800 mb-2 font-semibold"><span className="font-bold text-blue-700">English:</span> S/L OGUNYEMI DAMILARE</p>
              <p className="text-gray-800 font-semibold"><span className="font-bold text-blue-700">Yoruba:</span> S/M/S/E OPEYEMI OLUWASHINA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="backdrop-blur-md bg-gradient-to-r from-white/40 via-white/30 to-white/40 border-t border-white/30 py-10 text-center mt-16">
        <p className="text-gray-800 text-lg font-semibold drop-shadow">May the blessings of the harvest season be upon all who gather</p>
        <p className="text-gray-700 text-base font-medium mt-3 drop-shadow">Halleluyah to the four corners of the earth</p>
      </div>
      </div>
    </div>
  );
}
