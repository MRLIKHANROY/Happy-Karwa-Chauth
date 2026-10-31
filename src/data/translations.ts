export type SupportedLanguage = 'en' | 'bn' | 'hi' | 'pa' | 'gu' | 'mr';

export interface LanguageMeta {
  code: SupportedLanguage;
  nativeName: string;
  englishName: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'en', nativeName: 'English', englishName: 'English' },
  { code: 'bn', nativeName: 'বাংলা', englishName: 'Bengali' },
  { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi' },
  { code: 'pa', nativeName: 'ਪੰਜਾਬੀ', englishName: 'Punjabi' },
  { code: 'gu', nativeName: 'ગુજરાતી', englishName: 'Gujarati' },
  { code: 'mr', nativeName: 'मराठी', englishName: 'Marathi' },
];

export interface CardDefaultRows {
  headerLine: string;
  greetingLine: string;
  titleLine: string;
  bodyMessage: string;
  closingLine: string;
  signatureLine: string;
  footerLine: string;
}

export interface SiteTranslation {
  brandTitle: string;
  langBarLabel: string;
  navCountdown: string;
  navPujaVidhi: string;
  navSamagri: string;
  navRituals: string;
  navWishes: string;
  navShareCta: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  heroMantraMeaning: string;
  btnLiveCountdown: string;
  btnSamagriChecklist: string;
  btnLightDiyas: string;
  btnDimDiyas: string;
  statusDiyasLit: string;
  statusDiyasDimmed: string;
  btnRingBell: string;
  btnPausePetals: string;
  btnPlayPetals: string;
  countdownKicker: string;
  countdownTitle: string;
  countdownSubtitle: string;
  selectYearLabel: string;
  selectCityLabel: string;
  unitDays: string;
  unitHours: string;
  unitMinutes: string;
  unitSeconds: string;
  unitAgo: string;
  unitLeft: string;
  yearStatusPast: string;
  yearStatusComing: string;
  statusPassedBadge: string;
  statusUpcomingBadge: string;
  pujaVidhiKicker: string;
  pujaVidhiTitle: string;
  pujaVidhiSubtitle: string;
  samagriKicker: string;
  samagriTitle: string;
  samagriSubtitle: string;
  sargiKicker: string;
  sargiTitle: string;
  sargiSubtitle: string;
  ritualsKicker: string;
  ritualsTitle: string;
  ritualsSubtitle: string;
  wishesKicker: string;
  wishesTitle: string;
  wishesSubtitle: string;
  studioHeading: string;
  btnDownloadCard: string;
  btnCopyCardText: string;
  btnShareCard: string;
  faqKicker: string;
  faqTitle: string;
  faqSubtitle: string;
  cardDefaults: CardDefaultRows;
}

export const SITE_TRANSLATIONS: Record<SupportedLanguage, SiteTranslation> = {
  en: {
    brandTitle: 'Happy Karwa Chauth',
    langBarLabel: 'Language',
    navCountdown: 'Countdown',
    navPujaVidhi: 'Puja Vidhi',
    navSamagri: 'Samagri',
    navRituals: 'Rituals',
    navWishes: 'Wishes Cards',
    navShareCta: 'Share Blessing',
    heroKicker: 'Kartik Krishna Paksha Chaturthi · Sacred Vrat & Moonrise Guide',
    heroTitle:
      'Happy Karwa Chauth — A Celebration of Love, Devotion & Togetherness',
    heroSubtitle:
      'From the pre-dawn blessing of Sargi to beholding the moon through the Chhalni with a lit diya—explore verified Panchang timings, complete Puja Vidhi, Samagri checklist, and custom greeting cards.',
    heroMantraMeaning:
      'May the sacred observance of Karak Chaturthi nurture harmony, good health, mutual respect, and lifelong companionship in every home.',
    btnLiveCountdown: 'Live Moonrise Countdown',
    btnSamagriChecklist: 'Samagri Checklist',
    btnLightDiyas: 'Light Diyas',
    btnDimDiyas: 'Dim Diyas',
    statusDiyasLit: 'Sacred Diyas Lit',
    statusDiyasDimmed: 'Diyas in Soft Glow',
    btnRingBell: 'Ring Bell',
    btnPausePetals: 'Pause Petals',
    btnPlayPetals: 'Play Petals',
    countdownKicker: '01 · Verified Indian Panchang & Chandrodaya Muhurat',
    countdownTitle: 'Live Karwa Chauth Moonrise & Festival Countdown',
    countdownSubtitle:
      'Select your festival year and city below to view verified Indian Standard Time (IST) Panchang timings alongside your local timezone.',
    selectYearLabel: 'Select Verified Festival Year',
    selectCityLabel: 'Select City for Moonrise Timing',
    unitDays: 'Days',
    unitHours: 'Hours',
    unitMinutes: 'Minutes',
    unitSeconds: 'Seconds',
    unitAgo: 'Ago',
    unitLeft: 'Left',
    yearStatusPast: 'Past',
    yearStatusComing: 'Coming',
    statusPassedBadge: 'Festival Concluded · Elapsed (Ago)',
    statusUpcomingBadge: 'Upcoming Festival · Remaining (Left)',
    pujaVidhiKicker: '02 · Sacred Ritual Chronicle',
    pujaVidhiTitle: 'Karwa Chauth Puja Vidhi — Step-by-Step Guide',
    pujaVidhiSubtitle:
      'Follow the six chronological stages of the traditional Karwa Chauth observance—from pre-dawn Sargi Sankalp to evening Katha and Moonrise Arghya.',
    samagriKicker: '03 · Interactive Preparation Tracker',
    samagriTitle: 'Karwa Chauth Puja Samagri Checklist',
    samagriSubtitle:
      'Tap any item card below to check off your sacred vessels, offerings, and Solah Shringar items, or add custom family items.',
    sargiKicker: '04 · Pre-Dawn Blessing & Mindful Nutrition',
    sargiTitle: 'Sargi & Vrat Preparation Guide',
    sargiSubtitle:
      'Partaken during Brahma Muhurta before sunrise, the Sargi thali is a cherished expression of maternal affection and balanced day-long energy.',
    ritualsKicker: '05 · Chandrodaya Darshan & Sacred Symbolism',
    ritualsTitle: 'Chand Dekhne & Traditional Chhalni Ritual Guide',
    ritualsSubtitle:
      'Click any of the 4 sacred moments below to see the interactive visual simulation of the moonrise ceremony.',
    wishesKicker: '06 · Heartfelt Blessings & Keepsake Studio',
    wishesTitle: 'Karwa Chauth Wishes & Shareable Greeting Cards',
    wishesSubtitle:
      'Edit every line of your greeting card below, switch between Horizontal and Vertical formats, and download or share in your preferred language.',
    studioHeading: 'Customize Every Row of Your Card',
    btnDownloadCard: 'Download Card',
    btnCopyCardText: 'Copy Card Text',
    btnShareCard: 'Share Card',
    faqKicker: '07 · Cultural Context & Guidance',
    faqTitle: 'Frequently Asked Questions (FAQ)',
    faqSubtitle:
      'Authentic answers on Panchang timings, cloudy-sky moonrise traditions, and health-conscious fasting practices.',
    cardDefaults: {
      headerLine: 'SHUBH KARWA CHAUTH · SACRED BLESSINGS',
      greetingLine: 'Dearest Priya,',
      titleLine: 'Under the Silver Autumn Moon',
      bodyMessage:
        'As the full moon illuminates your chhalni tonight, I am grateful for every smile, every quiet prayer, and the warmth you bring into our home.',
      closingLine: 'Happy Karwa Chauth, my love.',
      signatureLine: 'With love & prayers — Aarav',
      footerLine: 'Kartik Krishna Chaturthi · Shubh Chandrodaya',
    },
  },

  bn: {
    brandTitle: 'শুভ করওয়া চৌথ',
    langBarLabel: 'ভাষা',
    navCountdown: 'কাউন্টডাউন',
    navPujaVidhi: 'পূজা বিধি',
    navSamagri: 'পূজা সামগ্রী',
    navRituals: 'চন্দ্র দর্শন',
    navWishes: 'শুভেচ্ছা কার্ড',
    navShareCta: 'শুভেচ্ছা পাঠান',
    heroKicker: 'কার্তিক কৃষ্ণপক্ষ চতুর্থী · পবিত্র ব্রত ও চন্দ্রোদয় নির্দেশিকা',
    heroTitle: 'শুভ করওয়া চৌথ — ভালোবাসা, শ্রদ্ধা ও অটুট বন্ধনের পবিত্র উৎসব',
    heroSubtitle:
      'ভোরের পবিত্র সারগি থেকে শুরু করে রাতে চালুনি ও প্রদীপের আলোয় চাঁদ দেখার পুণ্য মুহূর্ত—সঠিক পঞ্জিকা সময়, সম্পূর্ণ পূজা বিধি, সামগ্রী তালিকা এবং নিজের ভাষায় শুভেচ্ছা কার্ড তৈরি করুন।',
    heroMantraMeaning:
      'করক চতুর্থীর এই পবিত্র ব্রত প্রতিটি পরিবারে সুখ, সুস্বাস্থ্য, সম্প্রীতি এবং আজীবন ভালোবাসার বন্ধন অটুট রাখুক।',
    btnLiveCountdown: 'চন্দ্রোদয় কাউন্টডাউন দেখুন',
    btnSamagriChecklist: 'পূজা সামগ্রী চেকলিস্ট',
    btnLightDiyas: 'প্রদীপ জ্বালান',
    btnDimDiyas: 'প্রদীপ কমান',
    statusDiyasLit: 'মঙ্গল প্রদীপ জ্বলছে',
    statusDiyasDimmed: 'প্রদীপ মৃদু আলোয় আছে',
    btnRingBell: 'ঘণ্টা বাজান',
    btnPausePetals: 'পাপড়ি থামান',
    btnPlayPetals: 'পাপড়ি চালান',
    countdownKicker: '০১ · ভারতীয় পঞ্জিকা ও চন্দ্রোদয় মুহূর্ত',
    countdownTitle: 'করওয়া চৌথ চন্দ্রোদয় ও উৎসবের লাইভ কাউন্টডাউন',
    countdownSubtitle:
      'নিচে আপনার বছর এবং শহর নির্বাচন করে সঠিক ভারতীয় সময় (IST) ও আপনার স্থানীয় সময়ে পূজার মুহূর্ত এবং চাঁদ ওঠার সময় দেখে নিন।',
    selectYearLabel: 'উৎসবের বছর নির্বাচন করুন',
    selectCityLabel: 'চাঁদ ওঠার সময়ের জন্য শহর নির্বাচন করুন',
    unitDays: 'দিন',
    unitHours: 'ঘণ্টা',
    unitMinutes: 'মিনিট',
    unitSeconds: 'সেকেন্ড',
    unitAgo: 'আগে (Ago)',
    unitLeft: 'বাকি (Left)',
    yearStatusPast: 'গত (Past)',
    yearStatusComing: 'আসন্ন (Coming)',
    statusPassedBadge: 'উৎসব সম্পন্ন হয়েছে · যত সময় কেটে গেছে (Ago)',
    statusUpcomingBadge: 'আসন্ন উৎসব · যত সময় বাকি আছে (Left)',
    pujaVidhiKicker: '০২ · সম্পূর্ণ পূজা পদ্ধতি',
    pujaVidhiTitle: 'করওয়া চৌথ পূজা বিধি — ধাপে ধাপে নির্দেশিকা',
    pujaVidhiSubtitle:
      'ভোরের সারগি ও সংকল্প থেকে শুরু করে সন্ধ্যার ব্রতকথা এবং রাতে চন্দ্রার্ঘ্য ও পারণ পর্যন্ত ৬টি পবিত্র ধাপ।',
    samagriKicker: '০৩ · পূজার প্রস্তুতি তালিকা',
    samagriTitle: 'করওয়া চৌথ পূজা সামগ্রী চেকলিস্ট',
    samagriSubtitle:
      'যেকোনো সামগ্রীর ওপর ক্লিক করে টিক দিন এবং আপনার পরিবারের প্রয়োজনীয় নতুন সামগ্রীও তালিকায় যুক্ত করুন।',
    sargiKicker: '০৪ · ভোরের সারগি ও স্বাস্থ্যবিধি',
    sargiTitle: 'সারগি ও ব্রত পালনের নির্দেশিকা',
    sargiSubtitle:
      'সূর্যোদয়ের পূর্বে ব্রাহ্ম মুহূর্তে গৃহীত সারগি থালি শাশুড়ি মায়ের আশীর্বাদ এবং সারাদিনের শক্তির উৎস।',
    ritualsKicker: '০৫ · চন্দ্রোদয় দর্শন ও চালুনি বিধি',
    ritualsTitle: 'চাঁদ দেখা ও ঐতিহ্যবাহী চালুনি বিধির নিয়ম',
    ritualsSubtitle:
      'নিচের ৪টি পবিত্র মুহূর্তে ক্লিক করে চালুনি ও প্রদীপের মাধ্যমে চাঁদ দেখার দৃশ্যটি সরাসরি দেখুন।',
    wishesKicker: '০৬ · শুভেচ্ছা বার্তা ও কাস্টম কার্ড স্টুডিও',
    wishesTitle: 'করওয়া চৌথের শুভেচ্ছা ও শেয়ার করার গ্রিটিং কার্ড',
    wishesSubtitle:
      'কার্ডের প্রতিটি লাইন নিজের মতো পরিবর্তন করুন, লম্বালম্বি (Vertical) বা আড়াআড়ি (Horizontal) সাইজ বেছে নিন এবং PNG কার্ড ডাউনলোড বা শেয়ার করুন।',
    studioHeading: 'কার্ডের প্রতিটি লাইন পরিবর্তন করুন',
    btnDownloadCard: 'কার্ড ডাউনলোড করুন',
    btnCopyCardText: 'টেক্সট কপি করুন',
    btnShareCard: 'কার্ড শেয়ার করুন',
    faqKicker: '০৭ · সাধারণ জিজ্ঞাসা ও উত্তর',
    faqTitle: 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (FAQ)',
    faqSubtitle:
      'পঞ্জিকার সময়, মেঘলা আকাশে চাঁদ না দেখা গেলে করণীয় এবং ব্রতের স্বাস্থ্যবিধি সম্পর্কিত তথ্য।',
    cardDefaults: {
      headerLine: 'শুভ করওয়া চৌথ · মঙ্গল আশীর্বাদ',
      greetingLine: 'প্রিয়তমা প্রিয়া,',
      titleLine: 'শরতের পূর্ণ চাঁদের স্নিগ্ধ আলোয়',
      bodyMessage:
        'আজকের এই পবিত্র রাতে প্রদীপের আলো ও চাঁদের স্নিগ্ধ কিরণ আমাদের জীবনকে ভালোবাসা, শান্তি এবং অটুট বিশ্বাসে ভরিয়ে তুলুক। তোমার প্রতিটি প্রার্থনা ও হাসির জন্য আমি চিরকৃতজ্ঞ।',
      closingLine: 'শুভ করওয়া চৌথ, আমার ভালোবাসা।',
      signatureLine: 'ভালোবাসা ও প্রার্থনায় — আরভ',
      footerLine: 'কার্তিক কৃষ্ণ চতুর্থী · শুভ চন্দ্রোদয়',
    },
  },

  hi: {
    brandTitle: 'शुभ करवा चौथ',
    langBarLabel: 'भाषा',
    navCountdown: 'काउंटडाउन',
    navPujaVidhi: 'पूजा विधि',
    navSamagri: 'पूजा सामग्री',
    navRituals: 'चन्द्र दर्शन',
    navWishes: 'शुभकामनाएँ',
    navShareCta: 'शुभकामना भेजें',
    heroKicker: 'कार्तिक कृष्ण पक्ष चतुर्थी · पावन व्रत एवं चन्द्रोदय मार्गदर्शिका',
    heroTitle: 'शुभ करवा चौथ — समर्पण, स्नेह और अखण्ड सौभाग्य का पावन पर्व',
    heroSubtitle:
      'भोर की पावन सरगी से लेकर रात्रि में छलनी और दीपक की ज्योति से चन्द्र दर्शन तक—प्रमाणित पंचांग समय, संपूर्ण पूजा विधि, सामग्री सूची और शुभकामना कार्ड।',
    heroMantraMeaning:
      'करक चतुर्थी का यह पावन व्रत प्रत्येक घर-परिवार में सुख, उत्तम स्वास्थ्य, सामंजस्य और अटूट प्रेम का संचार करे।',
    btnLiveCountdown: 'चन्द्रोदय काउंटडाउन देखें',
    btnSamagriChecklist: 'पूजा सामग्री सूची',
    btnLightDiyas: 'दीपक जलाएँ',
    btnDimDiyas: 'दीपक मंद करें',
    statusDiyasLit: 'पावन दीपक प्रज्वलित हैं',
    statusDiyasDimmed: 'दीपक मंद आभा में हैं',
    btnRingBell: 'घंटी बजाएँ',
    btnPausePetals: 'पंखुड़ियाँ रोकें',
    btnPlayPetals: 'पंखुड़ियाँ चलाएँ',
    countdownKicker: '०१ · प्रमाणित भारतीय पंचांग एवं चन्द्रोदय मुहूर्त',
    countdownTitle: 'करवा चौथ चन्द्रोदय एवं पर्व काउंटडाउन',
    countdownSubtitle:
      'नीचे वर्ष और अपना शहर चुनें तथा भारतीय मानक समय (IST) व अपने स्थानीय समय के अनुसार पूजा मुहूर्त और चाँद निकलने का समय देखें।',
    selectYearLabel: 'पर्व का वर्ष चुनें',
    selectCityLabel: 'चन्द्रोदय समय के लिए शहर चुनें',
    unitDays: 'दिन',
    unitHours: 'घंटे',
    unitMinutes: 'मिनट',
    unitSeconds: 'सेकंड',
    unitAgo: 'पूर्व (Ago)',
    unitLeft: 'शेष (Left)',
    yearStatusPast: 'बीता (Past)',
    yearStatusComing: 'आगामी (Coming)',
    statusPassedBadge: 'पर्व संपन्न · बीता हुआ समय (Ago)',
    statusUpcomingBadge: 'आगामी पर्व · शेष समय (Left)',
    pujaVidhiKicker: '०२ · पावन पूजा क्रम',
    pujaVidhiTitle: 'करवा चौथ पूजा विधि — चरणबद्ध मार्गदर्शिका',
    pujaVidhiSubtitle:
      'प्रातःकाल सरगी संकल्प से लेकर सायंकालीन व्रत कथा और रात्रि चन्द्र अर्घ्य व पारण तक के ६ पावन चरण।',
    samagriKicker: '०३ · पूजा थाली तैयारी सूची',
    samagriTitle: 'करवा चौथ पूजा सामग्री चेकलिस्ट',
    samagriSubtitle:
      'पूजा सामग्री तैयार करते समय किसी भी कार्ड पर क्लिक करके टिक करें या अपनी पारिवारिक सामग्री जोड़ें।',
    sargiKicker: '०४ · प्रातःकालीन सरगी एवं स्वास्थ्य',
    sargiTitle: 'सरगी एवं व्रत तैयारी मार्गदर्शिका',
    sargiSubtitle:
      'सूर्योदय से पूर्व ब्रह्म मुहूर्त में ग्रहण की जाने वाली सरगी सासू माँ के स्नेह और दिन भर की ऊर्जा का प्रतीक है।',
    ritualsKicker: '०५ · चन्द्रोदय दर्शन एवं छलनी विधि',
    ritualsTitle: 'चाँद देखने एवं पारंपरिक छलनी पूजा की विधि',
    ritualsSubtitle:
      'नीचे दिए गए ४ पावन चरणों पर क्लिक करके छलनी और दीपक से चन्द्र दर्शन का सजीव चित्रण देखें।',
    wishesKicker: '०६ · शुभकामना संदेश एवं ग्रीटिंग कार्ड स्टूडियो',
    wishesTitle: 'करवा चौथ शुभकामनाएँ एवं शेयर करने योग्य कार्ड',
    wishesSubtitle:
      'कार्ड की प्रत्येक पंक्ति को अपनी पसंद से बदलें, Vertical (खड़ा) या Horizontal (आड़ा) आकार चुनें और अपनी भाषा में PNG कार्ड डाउनलोड करें।',
    studioHeading: 'कार्ड की प्रत्येक पंक्ति को संपादित करें',
    btnDownloadCard: 'कार्ड डाउनलोड करें',
    btnCopyCardText: 'टेक्स्ट कॉपी करें',
    btnShareCard: 'कार्ड शेयर करें',
    faqKicker: '०७ · महत्वपूर्ण प्रश्नोत्तर',
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
    faqSubtitle:
      'पंचांग मुहूर्त, बादल छाए रहने पर चन्द्र अर्घ्य नियम और स्वास्थ्य संबंधी उपयोगी जानकारी।',
    cardDefaults: {
      headerLine: 'शुभ करवा चौथ · मंगलमय आशीर्वाद',
      greetingLine: 'प्रिय प्रिया,',
      titleLine: 'चौथ के चाँद की पावन चाँदनी में',
      bodyMessage:
        'जैसे ही आज रात पूनम-सा दमकता चौथ का चाँद आपकी छलनी और दीपक की लौ से जगमगाए, हमारा घर-आँगन सदा प्रेम, विश्वास और सुख-शांति से महकता रहे।',
      closingLine: 'करवा चौथ की हार्दिक शुभकामनाएँ!',
      signatureLine: 'स्नेह और प्रार्थनाओं सहित — आरव',
      footerLine: 'कार्तिक कृष्ण चतुर्थी · पावन चन्द्रोदय पर्व',
    },
  },

  pa: {
    brandTitle: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ',
    langBarLabel: 'ਭਾਸ਼ਾ',
    navCountdown: 'ਕਾਊਂਟਡਾਊਨ',
    navPujaVidhi: 'ਪੂਜਾ ਵਿਧੀ',
    navSamagri: 'ਪੂਜਾ ਸਮੱਗਰੀ',
    navRituals: 'ਚੰਦਰ ਦਰਸ਼ਨ',
    navWishes: 'ਸ਼ੁਭਕਾਮਨਾਵਾਂ',
    navShareCta: 'ਵਧਾਈ ਭੇਜੋ',
    heroKicker: 'ਕੱਤਕ ਕ੍ਰਿਸ਼ਨ ਪੱਖ ਚਤੁਰਥੀ · ਪਵਿੱਤਰ ਵਰਤ ਅਤੇ ਚੰਦਰਮਾ ਦਰਸ਼ਨ ਗਾਈਡ',
    heroTitle: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ — ਪਿਆਰ, ਸ਼ਰਧਾ ਅਤੇ ਅਟੁੱਟ ਸਾਥ ਦਾ ਪਵਿੱਤਰ ਤਿਉਹਾਰ',
    heroSubtitle:
      'ਸਵੇਰ ਦੀ ਸਰਗੀ ਦੀਆਂ ਅਸੀਸਾਂ ਤੋਂ ਲੈ ਕੇ ਰਾਤ ਨੂੰ ਛਾਨਣੀ ਅਤੇ ਦੀਵੇ ਦੀ ਲੋਅ ਵਿੱਚ ਚੰਨ ਵੇਖਣ ਤੱਕ—ਸਹੀ ਪੰਚਾਂਗ ਸਮਾਂ, ਪੂਜਾ ਵਿਧੀ ਅਤੇ ਵਧਾਈ ਕਾਰਡ।',
    heroMantraMeaning:
      'ਕਰਵਾ ਚੌਥ ਦਾ ਇਹ ਪਵਿੱਤਰ ਵਰਤ ਹਰ ਪਰਿਵਾਰ ਵਿੱਚ ਖੁਸ਼ਹਾਲੀ, ਚੰਗੀ ਸਿਹਤ, ਸਤਿਕਾਰ ਅਤੇ ਸਦੀਵੀ ਪਿਆਰ ਬਣਾਈ ਰੱਖੇ।',
    btnLiveCountdown: 'ਚੰਨ ਚੜ੍ਹਨ ਦਾ ਸਮਾਂ ਵੇਖੋ',
    btnSamagriChecklist: 'ਪੂਜਾ ਸਮੱਗਰੀ ਸੂਚੀ',
    btnLightDiyas: 'ਦੀਵੇ ਜਗਾਓ',
    btnDimDiyas: 'ਦੀਵੇ ਮੱਧਮ ਕਰੋ',
    statusDiyasLit: 'ਪਵਿੱਤਰ ਦੀਵੇ ਜਗ ਰਹੇ ਹਨ',
    statusDiyasDimmed: 'ਦੀਵੇ ਮੱਧਮ ਲੋਅ ਵਿੱਚ ਹਨ',
    btnRingBell: 'ਘੰਟੀ ਵਜਾਓ',
    btnPausePetals: 'ਪੱਤੀਆਂ ਰੋਕੋ',
    btnPlayPetals: 'ਪੱਤੀਆਂ ਚਲਾਓ',
    countdownKicker: '01 · ਪ੍ਰਮਾਣਿਤ ਪੰਚਾਂਗ ਅਤੇ ਚੰਦਰਮਾ ਮੁਹੂਰਤ',
    countdownTitle: 'ਕਰਵਾ ਚੌਥ ਚੰਦਰਮਾ ਅਤੇ ਤਿਉਹਾਰ ਕਾਊਂਟਡਾਊਨ',
    countdownSubtitle:
      'ਹੇਠਾਂ ਆਪਣਾ ਸਾਲ ਅਤੇ ਸ਼ਹਿਰ ਚੁਣੋ ਅਤੇ ਪੂਜਾ ਮੁਹੂਰਤ ਤੇ ਚੰਨ ਚੜ੍ਹਨ ਦਾ ਸਹੀ ਸਮਾਂ ਵੇਖੋ।',
    selectYearLabel: 'ਤਿਉਹਾਰ ਦਾ ਸਾਲ ਚੁਣੋ',
    selectCityLabel: 'ਚੰਨ ਚੜ੍ਹਨ ਦੇ ਸਮੇਂ ਲਈ ਸ਼ਹਿਰ ਚੁਣੋ',
    unitDays: 'ਦਿਨ',
    unitHours: 'ਘੰਟੇ',
    unitMinutes: 'ਮਿੰਟ',
    unitSeconds: 'ਸਕਿੰਟ',
    unitAgo: 'ਪਹਿਲਾਂ (Ago)',
    unitLeft: 'ਬਾਕੀ (Left)',
    yearStatusPast: 'ਬੀਤਿਆ (Past)',
    yearStatusComing: 'ਆਉਣ ਵਾਲਾ (Coming)',
    statusPassedBadge: 'ਤਿਉਹਾਰ ਸੰਪੰਨ · ਬੀਤਿਆ ਸਮਾਂ (Ago)',
    statusUpcomingBadge: 'ਆਉਣ ਵਾਲਾ ਤਿਉਹਾਰ · ਬਾਕੀ ਸਮਾਂ (Left)',
    pujaVidhiKicker: '02 · ਪਵਿੱਤਰ ਪੂਜਾ ਵਿਧੀ',
    pujaVidhiTitle: 'ਕਰਵਾ ਚੌਥ ਪੂਜਾ ਵਿਧੀ — ਕਦਮ-ਦਰ-ਕਦਮ ਗਾਈਡ',
    pujaVidhiSubtitle:
      'ਸਵੇਰ ਦੀ ਸਰਗੀ ਤੋਂ ਲੈ ਕੇ ਸ਼ਾਮ ਦੀ ਕਥਾ ਅਤੇ ਰਾਤ ਨੂੰ ਚੰਨ ਨੂੰ ਅਰਘ ਦੇਣ ਤੱਕ ਦੇ 6 ਪੜਾਅ।',
    samagriKicker: '03 · ਪੂਜਾ ਥਾਲੀ ਦੀ ਤਿਆਰੀ',
    samagriTitle: 'ਕਰਵਾ ਚੌਥ ਪੂਜਾ ਸਮੱਗਰੀ ਚੈੱਕਲਿਸਟ',
    samagriSubtitle:
      'ਆਪਣੀ ਪੂਜਾ ਸਮੱਗਰੀ ਤਿਆਰ ਕਰਦੇ ਸਮੇਂ ਕਿਸੇ ਵੀ ਆਈਟਮ ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਟਿੱਕ ਲਗਾਓ।',
    sargiKicker: '04 · ਸਰਗੀ ਅਤੇ ਵਰਤ ਦੀ ਤਿਆਰੀ',
    sargiTitle: 'ਸਰਗੀ ਅਤੇ ਵਰਤ ਗਾਈਡ',
    sargiSubtitle:
      'ਸੂਰਜ ਚੜ੍ਹਨ ਤੋਂ ਪਹਿਲਾਂ ਲਈ ਜਾਣ ਵਾਲੀ ਸਰਗੀ ਸੱਸ ਮਾਂ ਦੇ ਪਿਆਰ ਅਤੇ ਦਿਨ ਭਰ ਦੀ ਊਰਜਾ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।',
    ritualsKicker: '05 · ਚੰਨ ਵੇਖਣ ਅਤੇ ਛਾਨਣੀ ਦੀ ਰਸਮ',
    ritualsTitle: 'ਚੰਨ ਵੇਖਣ ਅਤੇ ਛਾਨਣੀ ਰਸਮ ਦੀ ਗਾਈਡ',
    ritualsSubtitle:
      'ਹੇਠਾਂ ਦਿੱਤੇ 4 ਪੜਾਵਾਂ ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਛਾਨਣੀ ਰਾਹੀਂ ਚੰਨ ਵੇਖਣ ਦੀ ਰਸਮ ਵੇਖੋ।',
    wishesKicker: '06 · ਵਧਾਈ ਸੰਦੇਸ਼ ਅਤੇ ਕਾਰਡ ਸਟੂਡੀਓ',
    wishesTitle: 'ਕਰਵਾ ਚੌਥ ਦੀਆਂ ਵਧਾਈਆਂ ਅਤੇ ਗ੍ਰੀਟਿੰਗ ਕਾਰਡ',
    wishesSubtitle:
      'ਕਾਰਡ ਦੀ ਹਰ ਲਾਈਨ ਨੂੰ ਆਪਣੀ ਮਰਜ਼ੀ ਨਾਲ ਬਦਲੋ ਅਤੇ Vertical ਜਾਂ Horizontal ਸਾਈਜ਼ ਵਿੱਚ ਡਾਊਨਲੋਡ ਕਰੋ।',
    studioHeading: 'ਕਾਰਡ ਦੀ ਹਰ ਲਾਈਨ ਬਦਲੋ',
    btnDownloadCard: 'ਕਾਰਡ ਡਾਊਨਲੋਡ ਕਰੋ',
    btnCopyCardText: 'ਟੈਕਸਟ ਕਾਪੀ ਕਰੋ',
    btnShareCard: 'ਕਾਰਡ ਸ਼ੇਅਰ ਕਰੋ',
    faqKicker: '07 · ਜ਼ਰੂਰੀ ਸਵਾਲ-ਜਵਾਬ',
    faqTitle: 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ (FAQ)',
    faqSubtitle: 'ਪੰਚਾਂਗ ਸਮੇਂ ਅਤੇ ਵਰਤ ਦੇ ਨਿਯਮਾਂ ਬਾਰੇ ਪੂਰੀ ਜਾਣਕਾਰੀ।',
    cardDefaults: {
      headerLine: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ · ਪਿਆਰ ਭਰੀਆਂ ਅਸੀਸਾਂ',
      greetingLine: 'ਪਿਆਰੀ ਪ੍ਰਿਆ,',
      titleLine: 'ਚੌਥ ਦੇ ਚੰਨ ਦੀ ਠੰਢੀ ਚਾਨਣੀ ਹੇਠ',
      bodyMessage:
        'ਚੌਥ ਦਾ ਚੰਨ ਅਤੇ ਦੀਵੇ ਦੀ ਲੋਅ ਸਾਡੇ ਘਰ ਵਿੱਚ ਹਮੇਸ਼ਾ ਪਿਆਰ, ਖੁਸ਼ੀਆਂ ਅਤੇ ਤੰਦਰੁਸਤੀ ਬਣਾਈ ਰੱਖੇ।',
      closingLine: 'ਕਰਵਾ ਚੌਥ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!',
      signatureLine: 'ਪਿਆਰ ਅਤੇ ਦੁਆਵਾਂ ਨਾਲ — ਆਰਵ',
      footerLine: 'ਕੱਤਕ ਕ੍ਰਿਸ਼ਨ ਚਤੁਰਥੀ · ਸ਼ੁਭ ਚੰਦਰ ਦਰਸ਼ਨ',
    },
  },

  gu: {
    brandTitle: 'શુભ કરવા ચોથ',
    langBarLabel: 'ભાષા',
    navCountdown: 'કાઉન્ટડાઉન',
    navPujaVidhi: 'પૂજા વિધિ',
    navSamagri: 'પૂજા સામગ્રી',
    navRituals: 'ચંદ્ર દર્શન',
    navWishes: 'શુભેચ્છાઓ',
    navShareCta: 'શુભેચ્છા મોકલો',
    heroKicker: 'કાર્તિક કૃષ્ણ પક્ષ ચતુર્થી · પવિત્ર વ્રત અને ચંદ્રોદય માર્ગદર્શિકા',
    heroTitle: 'શુભ કરવા ચોથ — પ્રેમ, સમર્પણ અને અખંડ સૌભાગ્યનું પવિત્ર પર્વ',
    heroSubtitle:
      'વહેલી સવારની સરગીના આશીર્વાદથી લઈને રાત્રે ચારણી અને દીવાની જ્યોતથી ચંદ્ર દર્શન સુધી—પ્રમાણિત પંચાંગ સમય, પૂજા વિધિ અને શુભેચ્છા કાર્ડ.',
    heroMantraMeaning:
      'કરક ચતુર્થીનું આ પવિત્ર વ્રત દરેક પરિવારમાં સુખ, ઉત્તમ સ્વાસ્થ્ય અને અટૂટ પ્રેમ જાળવી રાખે.',
    btnLiveCountdown: 'ચંદ્રોદય કાઉન્ટડાઉન જુઓ',
    btnSamagriChecklist: 'પૂજા સામગ્રી યાદી',
    btnLightDiyas: 'દીવા પ્રગટાવો',
    btnDimDiyas: 'દીવા मंद કરો',
    statusDiyasLit: 'પવિત્ર દીવા પ્રગટેલા છે',
    statusDiyasDimmed: 'દીવા આછી જ્યોતમાં છે',
    btnRingBell: 'ઘંટડી વગાડો',
    btnPausePetals: 'પાંખડીઓ રોકો',
    btnPlayPetals: 'પાંખડીઓ શરૂ કરો',
    countdownKicker: '01 · પ્રમાણિત પંચાંગ અને ચંદ્રોદય મુહૂર્ત',
    countdownTitle: 'કરવા ચોથ ચંદ્રોદય અને પર્વ કાઉન્ટડાઉન',
    countdownSubtitle:
      'નીચે વર્ષ અને તમારું શહેર પસંદ કરીને પૂજા મુહૂર્ત અને ચંદ્ર ઉદયનો સાચો સમય જુઓ.',
    selectYearLabel: 'પર્વનું વર્ષ પસંદ કરો',
    selectCityLabel: 'ચંદ્રોદય સમય માટે શહેર પસંદ કરો',
    unitDays: 'દિવસ',
    unitHours: 'કલાક',
    unitMinutes: 'મિનિટ',
    unitSeconds: 'સેકન્ડ',
    unitAgo: 'પહેલાં (Ago)',
    unitLeft: 'બાકી (Left)',
    yearStatusPast: 'વીતેલું (Past)',
    yearStatusComing: 'આગામી (Coming)',
    statusPassedBadge: 'પર્વ સંપન્ન · વીતેલો સમય (Ago)',
    statusUpcomingBadge: 'આગામી પર્વ · બાકી સમય (Left)',
    pujaVidhiKicker: '02 · પવિત્ર પૂજા ક્રમ',
    pujaVidhiTitle: 'કરવા ચોથ પૂજા વિધિ — સંપૂર્ણ માર્ગદર્શિકા',
    pujaVidhiSubtitle:
      'સવારની સરગી સંકલ્પથી લઈને સાંજની વ્રત કથા અને રાત્રિ ચંદ્ર અર્ઘ્ય સુધીના 6 ચરણ.',
    samagriKicker: '03 · પૂજા થાળી તૈયારી',
    samagriTitle: 'કરવા ચોથ પૂજા સામગ્રી ચેકલિસ્ટ',
    samagriSubtitle:
      'કોઈપણ સામગ્રી પર ક્લિક કરીને ટિક કરો અથવા તમારી કૌટુંબિક સામગ્રી ઉમેરો.',
    sargiKicker: '04 · સરગી અને સ્વાસ્થ્ય માર્ગદર્શન',
    sargiTitle: 'સરગી અને વ્રત તૈયારી માર્ગદર્શિકા',
    sargiSubtitle:
      'સૂર્યોદય પહેલાં લેવામાં આવતી સરગી સાસુમાના આશીર્વાદ અને દિવસભરની ઊર્જાનું પ્રતીક છે.',
    ritualsKicker: '05 · ચંદ્ર દર્શન અને ચારણી વિધિ',
    ritualsTitle: 'ચંદ્ર દર્શન અને પરંપરાગત ચારણી વિધિ',
    ritualsSubtitle:
      'નીચેના 4 પવિત્ર ચરણો પર ક્લિક કરીને ચારણી અને દીવાથી ચંદ્ર દર્શનનું દૃશ્ય જુઓ.',
    wishesKicker: '06 · શુભેચ્છા સંદેશ અને કાર્ડ સ્ટુડિયો',
    wishesTitle: 'કરવા ચોથની શુભેચ્છાઓ અને ગ્રીટિંગ કાર્ડ્સ',
    wishesSubtitle:
      'કાર્ડની દરેક લાઇન બદલો અને Vertical કે Horizontal સાઇઝમાં PNG કાર્ડ ડાઉનਲોડ કરો.',
    studioHeading: 'કાર્ડની દરેક લાઇન સંપાદિત કરો',
    btnDownloadCard: 'કાર્ડ ડાઉનલોડ કરો',
    btnCopyCardText: 'ટેક્સ્ટ કોપી કરો',
    btnShareCard: 'કાર્ડ શેર કરો',
    faqKicker: '07 · મહત્વપૂર્ણ પ્રશ્નોત્તરી',
    faqTitle: 'વારંવાર પૂછાતા પ્રશ્નો (FAQ)',
    faqSubtitle: 'પંચાંગ સમય અને વ્રતના નિયમો વિશે પ્રમાણિત માહિતી.',
    cardDefaults: {
      headerLine: 'શુભ કરવા ચોથ · મંગલ આશીર્વાદ',
      greetingLine: 'પ્રિય પ્રિયા,',
      titleLine: 'ચોથના ચંદ્રની શીતળ ચાંદનીમાં',
      bodyMessage:
        'આજની આ પવિત્ર રાત્રે દીવાનો પ્રકાશ અને ચંદ્રની શીતળતા આપણા જીવનમાં પ્રેમ, શાંતિ અને અખંડ આનંદ ભરી દે.',
      closingLine: 'કરવા ચોથની હાર્દિક શુભેચ્છાઓ!',
      signatureLine: 'પ્રેમ અને પ્રાર્થના સહ — આરવ',
      footerLine: 'કાર્તિક કૃષ્ણ ચતુર્થી · પવિત્ર ચંદ્રોદય',
    },
  },

  mr: {
    brandTitle: 'शुभ करवा चौथ',
    langBarLabel: 'भाषा',
    navCountdown: 'काउंटडाउन',
    navPujaVidhi: 'पूजा विधी',
    navSamagri: 'पूजा साहित्य',
    navRituals: 'चंद्र दर्शन',
    navWishes: 'शुभेच्छा',
    navShareCta: 'शुभेच्छा पाठवा',
    heroKicker: 'कार्तिक कृष्ण पक्ष चतुर्थी · पावन व्रत आणि चंद्रोदय मार्गदर्शिका',
    heroTitle: 'शुभ करवा चौथ — प्रेम, भक्ती आणि अखंड सौभाग्याचा पावन सण',
    heroSubtitle:
      'पहाटेच्या सरगीच्या आशीर्वादापासून ते रात्री चाळणी आणि दिव्याच्या ज्योतीने चंद्र दर्शनापर्यंत—अचूक पंचांग वेळ, संपूर्ण पूजा विधी आणि शुभेच्छा कार्ड्स.',
    heroMantraMeaning:
      'करक चतुर्थीचे हे पावन व्रत प्रत्येक कुटुंबात सुख, उत्तम आरोग्य आणि अखंड जिव्हाळा टिकवून ठेवो.',
    btnLiveCountdown: 'चंद्रोदय काउंटडाउन पहा',
    btnSamagriChecklist: 'पूजा साहित्य यादी',
    btnLightDiyas: 'दिवे प्रज्वलित करा',
    btnDimDiyas: 'दिवे मंद करा',
    statusDiyasLit: 'पावन दिवे प्रज्वलित आहेत',
    statusDiyasDimmed: 'दिवे मंद प्रकाशात आहेत',
    btnRingBell: 'घंटी वाजवा',
    btnPausePetals: 'पाकळ्या थांबवा',
    btnPlayPetals: 'पाकळ्या सुरू करा',
    countdownKicker: '०१ · प्रमाणित पंचांग आणि चंद्रोदय मुहूर्त',
    countdownTitle: 'करवा चौथ चंद्रोदय आणि सण काउंटडाउन',
    countdownSubtitle:
      'खालील वर्ष आणि शहर निवडून भारतीय प्रमाणवेळ (IST) व तुमच्या स्थानिक वेळेनुसार पूजा मुहूर्त आणि चंद्रोदय वेळ पहा.',
    selectYearLabel: 'सणाचे वर्ष निवडा',
    selectCityLabel: 'चंद्रोदय वेळेसाठी शहर निवडा',
    unitDays: 'दिवस',
    unitHours: 'तास',
    unitMinutes: 'मिनिटे',
    unitSeconds: 'सेकंद',
    unitAgo: 'पूर्वी (Ago)',
    unitLeft: 'बाकी (Left)',
    yearStatusPast: 'मागील (Past)',
    yearStatusComing: 'येणारे (Coming)',
    statusPassedBadge: 'सण संपन्न · उलटून गेलेला वेळ (Ago)',
    statusUpcomingBadge: 'येणारा सण · उरलेला वेळ (Left)',
    pujaVidhiKicker: '०२ · पावन पूजा क्रम',
    pujaVidhiTitle: 'करवा चौथ पूजा विधी — टप्प्याटप्प्याने माहिती',
    pujaVidhiSubtitle:
      'पहाटेच्या सरगी संकल्पापासून ते सायंकाळची कथा आणि रात्री चंद्र अर्घ्य व पारणापर्यंतचे ६ टप्पे.',
    samagriKicker: '०३ · पूजा थाळी तयारी यादी',
    samagriTitle: 'करवा चौथ पूजा साहित्य चेकलिस्ट',
    samagriSubtitle:
      'कोणत्याही साहित्यावर क्लिक करून टिक करा किंवा तुमचे कौटुंबिक पूजा साहित्य जोडा.',
    sargiKicker: '०४ · पहाटेची सरगी आणि आरोग्य',
    sargiTitle: 'सरगी आणि व्रत तयारी मार्गदर्शिका',
    sargiSubtitle:
      'सूर्योदयापूर्वी घेतली जाणारी सरगी सासूबाईंचे प्रेम आणि दिवसभराच्या ऊर्जेचे प्रतीक आहे.',
    ritualsKicker: '०५ · चंद्रोदय दर्शन आणि चाळणी विधी',
    ritualsTitle: 'चंद्र दर्शन आणि पारंपरिक चाळणी विधी',
    ritualsSubtitle:
      'खालील ४ टप्प्यांवर क्लिक करून चाळणी आणि दिव्यातून चंद्र दर्शनाचे सजीव चित्र पहा.',
    wishesKicker: '०६ · शुभेच्छा संदेश आणि ग्रीटिंग कार्ड स्टुडिओ',
    wishesTitle: 'करवा चौथ शुभेच्छा आणि शेअर करण्यायोग्य कार्ड्स',
    wishesSubtitle:
      'कार्डची प्रत्येक ओळ तुमच्या आवडीनुसार बदला आणि Vertical किंवा Horizontal आकारात PNG कार्ड डाउनलोड करा.',
    studioHeading: 'कार्डची प्रत्येक ओळ संपादित करा',
    btnDownloadCard: 'कार्ड डाउनलोड करा',
    btnCopyCardText: 'टेक्स्ट कॉपी करा',
    btnShareCard: 'कार्ड शेअर करा',
    faqKicker: '०७ · महत्त्वाचे प्रश्नोत्तरे',
    faqTitle: 'नेहमी विचारले जाणारे प्रश्न (FAQ)',
    faqSubtitle: 'पंचांग वेळ आणि व्रताच्या नियमांबद्दल सविस्तर माहिती.',
    cardDefaults: {
      headerLine: 'शुभ करवा चौथ · मंगलमय आशीर्वाद',
      greetingLine: 'प्रिय प्रिया,',
      titleLine: 'चतुर्थीच्या चंद्राच्या शीतल प्रकाशात',
      bodyMessage:
        'आजच्या या पावन रात्री दिव्याचा प्रकाश आणि चंद्राची शीतलता आपल्या आयुष्यात प्रेम, शांती आणि अखंड आनंद घेऊन येवो.',
      closingLine: 'करवा चौथच्या हार्दिक शुभेच्छा!',
      signatureLine: 'प्रेम आणि प्रार्थनेसह — आरव',
      footerLine: 'कार्तिक कृष्ण चतुर्थी · पावन चंद्रोदय सोहळा',
    },
  },
};
