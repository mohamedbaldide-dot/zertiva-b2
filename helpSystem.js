// ============================================
// helpSystem.js - نظام المساعدة المتكامل
// ============================================

// ============================================
// جميع البيانات (HELP_DATA)
// ============================================
const HELP_DATA = {};

// ============================================
// Hören Teil 1
// ============================================
// ========== Exam 1: Die Deutsche Lufthansa (صحيح: 2,3) ==========
HELP_DATA["hoeren1_exam1_q2"] = {
    text: "Ein Bonner Sportverein zeigt der Öffentlichkeit sein Angebot.",
    meaning: "نادٍ رياضي في مدينة بون يعرض خدماته على الجمهور",
    keywords: ["Bonner = من بون", "Sportverein = نادٍ رياضي", "Öffentlichkeit = الجمهور"],
    simplified: "النادي يفتح أبوابه للجميع",
    imagine: "تخيل نادياً يوزع منشورات ويقول: تعالوا شاركونا 📣"
};
HELP_DATA["hoeren1_exam1_q3"] = {
    text: "Die Rahmenbedingungen in deutschen Pflegeheimen bedürfen dringend einer Änderung.",
    meaning: "الظروف في دور الرعاية الألمانية تحتاج إلى تغيير عاجل",
    keywords: ["Rahmenbedingungen = الظروف", "Pflegeheimen = دور الرعاية", "Änderung = تغيير"],
    simplified: "دور المسنين في ألمانيا ليست على ما يرام",
    imagine: "تخيل دار رعاية قديمة جداً تحتاج إلى صيانة وتجديد 🏚️"
};

// ========== Exam 2: Die Piloten der Lufthansa (صحيح: 3,5) ==========
HELP_DATA["hoeren1_exam2_q3"] = {
    text: "Die Gewerkschaft lehnt das Angebot der Lufthansa ab.",
    meaning: "النقابة ترفض عرض لوفتهانزا",
    keywords: ["Gewerkschaft = نقابة", "lehnt ab = ترفض", "Angebot = عرض"],
    simplified: "النقابة غير راضية عن العرض",
    imagine: "تخيل شخصاً يرفض هدية لأنه يريد أكثر 🚫"
};
HELP_DATA["hoeren1_exam2_q5"] = {
    text: "Die Verhandlungen zwischen Lufthansa und Piloten dauern an.",
    meaning: "المفاوضات بين لوفتهانزا والطيارين لا تزال مستمرة",
    keywords: ["Verhandlungen = مفاوضات", "dauern an = مستمرة"],
    simplified: "لم يتوصل الطرفان إلى اتفاق بعد",
    imagine: "تخيل شخصين يتفاوضان على طاولة طويلة 🤝"
};

// ========== Exam 3: Die Stadt Friedrichsberg (صحيح: 2,3,5) ==========
HELP_DATA["hoeren1_exam3_q2"] = {
    text: "Die Stadt ist bekannt für ihre historische Altstadt.",
    meaning: "المدينة مشهورة ببلدة القديمة التاريخية",
    keywords: ["bekannt = مشهورة", "historische Altstadt = البلدة القديمة التاريخية"],
    simplified: "السياح يزورونها لرؤية المباني القديمة",
    imagine: "تخيل بيوتاً قديمة وشوارع مرصوفة بالحصى 🏘️"
};
HELP_DATA["hoeren1_exam3_q3"] = {
    text: "Jährlich findet in Friedrichsberg ein großes Weinfest statt.",
    meaning: "يقام في فريدريشسبيرغ مهرجان نبيذ كبير سنوياً",
    keywords: ["Jährlich = سنوياً", "Weinfest = مهرجان نبيذ", "findet statt = يقام"],
    simplified: "المهرجان يجذب الكثير من الزوار كل عام",
    imagine: "تخيل أكواب نبيذ وأضواء واحتفالات 🍷🎉"
};
HELP_DATA["hoeren1_exam3_q5"] = {
    text: "Die Stadt plant den Bau eines neuen Schwimmbads.",
    meaning: "المدينة تخطط لبناء مسبح جديد",
    keywords: ["plant = تخطط", "Bau = بناء", "Schwimmbad = مسبح"],
    simplified: "سيكون هناك مسبح جديد قريباً",
    imagine: "تخيل أطفالاً يلهون في مسبح جديد 🏊‍♂️"
};

// ========== Exam 4: Erdbeben (صحيح: 1,5) ==========
HELP_DATA["hoeren1_exam4_q1"] = {
    text: "In der Türkei gab es ein schweres Erdbeben.",
    meaning: "حدث زلزال شديد في تركيا",
    keywords: ["Türkei = تركيا", "schweres Erdbeben = زلزال شديد"],
    simplified: "زلزال كبير ضرب تركيا",
    imagine: "تخيل أرضاً تهتز ومباني تتمايل 🌍💥"
};
HELP_DATA["hoeren1_exam4_q5"] = {
    text: "Experten warnen vor weiteren Nachbeben.",
    meaning: "خبراء يحذرون من توابع زلزالية إضافية",
    keywords: ["Experten = خبراء", "warnen = يحذرون", "Nachbeben = توابع زلزالية"],
    simplified: "قد تحدث هزات أرضية أخرى",
    imagine: "تخيل علامة تحذير تقول: خطر ⚠️"
};

// ========== Exam 5: Bierkonsum (صحيح: 2,4) ==========
HELP_DATA["hoeren1_exam5_q2"] = {
    text: "Immer mehr Deutsche greifen zu alkoholfreiem Bier.",
    meaning: "يتجه المزيد من الألمان نحو البيرة الخالية من الكحول",
    keywords: ["greifen zu = يتجهون إلى", "alkoholfreiem Bier = بيرة خالية من الكحول"],
    simplified: "البيرة بدون كحول أصبحت أكثر شعبية",
    imagine: "تخيل كأس بيرة مكتوب عليها 0.0% 🍺"
};
HELP_DATA["hoeren1_exam5_q4"] = {
    text: "Brauereien stellen ihr Sortiment auf gesündere Getränke um.",
    meaning: "مصانع الجعة تغير منتجاتها إلى مشروبات أكثر صحية",
    keywords: ["Brauereien = مصانع جعة", "Sortiment = تشكيلة منتجات", "umstellen = تغيير"],
    simplified: "الشركات تنتج مشروبات صحية أكثر",
    imagine: "تخيل مصنعاً ينتج عصائر بدلاً من البيرة 🏭🧃"
};

// ========== Exam 6: Bierkonsum (Mittel) (صحيح: 2,4) ==========
HELP_DATA["hoeren1_exam6_q2"] = {
    text: "Die Deutschen trinken durchschnittlich 100 Liter Bier pro Jahr.",
    meaning: "الألمان يشربون متوسط 100 لتر من البيرة سنوياً",
    keywords: ["durchschnittlich = بمعدل / متوسط", "Liter = لتر", "pro Jahr = سنوياً"],
    simplified: "كل ألماني يشرب حوالي 100 لتر بيرة في السنة",
    imagine: "تخيل مائة قنينة لتر من البيرة 🍾"
};
HELP_DATA["hoeren1_exam6_q4"] = {
    text: "Die Zahl der Biertrinker sinkt vor allem bei jungen Männern.",
    meaning: "عدد شاربي البيرة يتناقص خاصة بين الشباب الذكور",
    keywords: ["Zahl = عدد", "sinkt = يتناقص", "jungen Männern = الشباب الذكور"],
    simplified: "الشباب الذكور يشربون بيراً أقل",
    imagine: "تخيل مجموعة شباب يفضلون رياضة على البيرة 🏋️‍♂️"
};

// ========== Exam 7: Deutsches Schiff (صحيح: 1,2,5) ==========
HELP_DATA["hoeren1_exam7_q1"] = {
    text: "Ein deutsches Schiff ist vor der Küste Somalias von Piraten gekapert worden.",
    meaning: "سفينة ألمانية اختطفها قراصنة قبالة سواحل الصومال",
    keywords: ["Schiff = سفينة", "Piraten = قراصنة", "gekapert = مختطفة"],
    simplified: "قراصنة أخذوا سفينة ألمانية",
    imagine: "تخيل قراصنة بسفينة سوداء يهاجمون سفينة 🏴‍☠️"
};
HELP_DATA["hoeren1_exam7_q2"] = {
    text: "Die Besatzung besteht aus 22 Seeleuten.",
    meaning: "طاقم السفينة مكون من 22 بحاراً",
    keywords: ["Besatzung = طاقم", "Seeleuten = بحارة"],
    simplified: "22 بحاراً على متن السفينة",
    imagine: "تخيل 22 شخصاً يقفون على سطح سفينة 👨‍✈️"
};
HELP_DATA["hoeren1_exam7_q5"] = {
    text: "Ein Spezialkommando der Marine wurde in die Region geschickt.",
    meaning: "أرسلت قيادة خاصة من البحرية إلى المنطقة",
    keywords: ["Spezialkommando = قيادة خاصة", "Marine = بحرية", "geschickt = أرسلت"],
    simplified: "القوات البحرية في طريقها للمساعدة",
    imagine: "تخيل سفناً حربية تتجه نحو القراصنة ⚓"
};

// ========== Exam 8: Weniger Vögel, Viele Kunden (صحيح: 3,4,5) ==========
HELP_DATA["hoeren1_exam8_q3"] = {
    text: "Viele Vögel finden aufgrund von Insektiziden nicht genug Nahrung.",
    meaning: "كثير من الطيور لا تجد غذاءً كافياً بسبب المبيدات الحشرية",
    keywords: ["Insektiziden = مبيدات حشرية", "Nahrung = غذاء", "nicht genug = غير كاف"],
    simplified: "المبيدات تقتل الحشرات التي يأكلها الطيور",
    imagine: "تخيل طائراً يبحث عن حشرة ولا يجد 🐛❌"
};
HELP_DATA["hoeren1_exam8_q4"] = {
    text: "Umweltschützer fordern mehr Grünflächen in den Städten.",
    meaning: "نشطاء البيئة يطالبون بمساحات خضراء أكثر في المدن",
    keywords: ["Umweltschützer = نشطاء بيئة", "fordern = يطالبون", "Grünflächen = مساحات خضراء"],
    simplified: "المدن بحاجة إلى حدائق وأشجار أكثر",
    imagine: "تخيل مدينة مليئة بالأشجار والحدائق 🌳"
};
HELP_DATA["hoeren1_exam8_q5"] = {
    text: "Jeder kann einen Beitrag zum Vogelschutz leisten, indem er Nistkästen aufhängt.",
    meaning: "يمكن للجميع المساهمة في حماية الطيور بتعليق بيوت خاصة للطيور",
    keywords: ["Beitrag leisten = المساهمة", "Vogelschutz = حماية الطيور", "Nistkästen = بيوت الطيور"],
    simplified: "علّق بيتاً للطيور وساعدها",
    imagine: "تخيل بيتاً صغيراً خشبياً للطيور 🏠🕊️"
};

// ========== Exam 9: Europäische Union (صحيح: 1,2) ==========
HELP_DATA["hoeren1_exam9_q1"] = {
    text: "Die Europäische Union hat neue Sanktionen gegen Russland verhängt.",
    meaning: "الاتحاد الأوروبي فرض عقوبات جديدة ضد روسيا",
    keywords: ["Europäische Union = الاتحاد الأوروبي", "Sanktionen = عقوبات", "verhängt = فرض"],
    simplified: "العقوبات الأوروبية على روسيا مستمرة",
    imagine: "تخيل قيوداً على التجارة بين أوروبا وروسيا 🔒"
};
HELP_DATA["hoeren1_exam9_q2"] = {
    text: "Die Sanktionen betreffen vor allem den Energie- und Finanzsektor.",
    meaning: "العقوبات تطال خاصة قطاع الطاقة والقطاع المالي",
    keywords: ["betreffen = تطال", "Energiesektor = قطاع الطاقة", "Finanzsektor = قطاع مالي"],
    simplified: "العقوبات تؤثر على الطاقة والبنوك",
    imagine: "تخيل مصفاة نفط وآلة حاسبة معقودتين 🛢️📉"
};

// ========== Exam 10: Unwetterschäden (صحيح: 1,4) ==========
HELP_DATA["hoeren1_exam10_q1"] = {
    text: "Schwere Unwetter haben in Süddeutschland große Schäden verursacht.",
    meaning: "عواصف شديدة تسببت بأضرار كبيرة في جنوب ألمانيا",
    keywords: ["Unwetter = عواصف", "Schäden = أضرار", "verursacht = تسببت"],
    simplified: "العواصف دمرت أشياء كثيرة في الجنوب",
    imagine: "تخيل رياحاً قوية تقتلع الأشجار 🌪️"
};
HELP_DATA["hoeren1_exam10_q4"] = {
    text: "Die Feuerwehr war im Dauereinsatz, um die Schäden zu beseitigen.",
    meaning: "فرق الإطفاء كانت في خدمة مستمرة لإزالة الأضرار",
    keywords: ["Feuerwehr = إطفاء", "Dauereinsatz = خدمة مستمرة", "beseitigen = إزالة"],
    simplified: "رجال الإطفاء عملوا بلا توقف",
    imagine: "تخيل سيارات إطفاء تسير في كل مكان 🚒"
};

// ========== Exam 11: Nicht sicher (صحيح: 1,4) ==========
HELP_DATA["hoeren1_exam11_q1"] = {
    text: "Die Sicherheitslage in der Region ist angespannt.",
    meaning: "الوضع الأمني في المنطقة متوتر",
    keywords: ["Sicherheitslage = وضع أمني", "angespannt = متوتر"],
    simplified: "المنطقة غير آمنة حالياً",
    imagine: "تخيل جواً مشحوناً بالتوتر ⚡"
};
HELP_DATA["hoeren1_exam11_q4"] = {
    text: "Die Botschaft hat eine Reisewarnung herausgegeben.",
    meaning: "السفارة أصدرت تحذيراً من السفر",
    keywords: ["Botschaft = سفارة", "Reisewarnung = تحذير سفر", "herausgegeben = أصدرت"],
    simplified: "السفارة تحذر مواطنيها",
    imagine: "تخيل نشرة حمراء مكتوب عليها تحذير ⚠️"
};

// ========== Exam 12: Nicht sicher 2 (صحيح: 1,4) ==========
HELP_DATA["hoeren1_exam12_q1"] = {
    text: "In der Innenstadt kam es zu einer Großdemonstration.",
    meaning: "حدث تظاهرة كبيرة في وسط المدينة",
    keywords: ["Innenstadt = وسط المدينة", "Großdemonstration = تظاهرة كبيرة"],
    simplified: "آلاف الناس تظاهروا في الشوارع",
    imagine: "تخيل بحراً من الناس يهتفون 📢👥"
};
HELP_DATA["hoeren1_exam12_q4"] = {
    text: "Die Demonstration verlief friedlich.",
    meaning: "التظاهرة مرت بسلام",
    keywords: ["Demonstration = تظاهرة", "verlief = مرت", "friedlich = بسلام"],
    simplified: "لم تحدث أي مشاكل",
    imagine: "تخيل تظاهرة هادئة وكأنها نزهة ☮️"
};

// ========== Exam 13: Frau Jürgens (صحيح: 3,4,5) ==========
HELP_DATA["hoeren1_exam13_q3"] = {
    text: "Ihr Traum war es schon immer, Kinderkrankenschwester zu werden.",
    meaning: "كان حلمها دائماً أن تصبح ممرضة أطفال",
    keywords: ["Traum = حلم", "Kinderkrankenschwester = ممرضة أطفال"],
    simplified: "منذ صغرها أحبت الاعتناء بالأطفال",
    imagine: "تخيل طفلة صغيرة تلعب دور الممرضة 👧"
};
HELP_DATA["hoeren1_exam13_q4"] = {
    text: "Sie liebt ihren Beruf, auch wenn er oft anstrengend ist.",
    meaning: "تحب مهنتها حتى لو كانت مرهقة أحياناً",
    keywords: ["liebt = تحب", "Beruf = مهنة", "anstrengend = مرهق"],
    simplified: "بالرغم من التعب، هي سعيدة بعملها",
    imagine: "تخيل ممرضة متعبة لكنها مبتسمة 😊"
};
HELP_DATA["hoeren1_exam13_q5"] = {
    text: "Nach ihrer Pensionierung möchte sie ehrenamtlich im Tierheim arbeiten.",
    meaning: "بعد تقاعدها تريد العمل تطوعياً في ملجأ الحيوانات",
    keywords: ["Pensionierung = تقاعد", "ehrenamtlich = تطوعياً", "Tierheim = ملجأ حيوانات"],
    simplified: "ستعتني بالحيوانات بعد التقاعد",
    imagine: "تخيل سيدة تطعم قططاً وكلاباً في ملجأ 🐕🐈"
};

// ========== Exam 14: Die Wahlbeteiligung (صحيح: 1,3) ==========
HELP_DATA["hoeren1_exam14_q1"] = {
    text: "Die Wahlbeteiligung bei der letzten Bundestagswahl ist gestiegen.",
    meaning: "ارتفعت نسبة المشاركة في آخر انتخابات برلمانية",
    keywords: ["Wahlbeteiligung = نسبة المشاركة الانتخابية", "gestiegen = ارتفعت"],
    simplified: "ناس أكثر صوتوا هذه المرة",
    imagine: "تخيل طوابير طويلة أمام مراكز الاقتراع 🗳️"
};
HELP_DATA["hoeren1_exam14_q3"] = {
    text: "Die Wahlbeteiligung lag bei 76 Prozent.",
    meaning: "نسبة المشاركة بلغت 76 في المئة",
    keywords: ["lag bei = بلغت", "Prozent = في المئة"],
    simplified: "ثلاثة أرباع الناخبين صوتوا",
    imagine: "تخيل رسماً بيانياً يظهر 76% 📊"
};

// ========== Exam 15: Die Wetterlage in den Alpen (صحيح: 2,3) ==========
HELP_DATA["hoeren1_exam15_q2"] = {
    text: "Für das Wochenende wird Schneefall oberhalb von 1500 Metern erwartet.",
    meaning: "من المتوقع تساقط الثلوج فوق 1500 متر في عطلة نهاية الأسبوع",
    keywords: ["Wochenende = عطلة نهاية الأسبوع", "Schneefall = تساقط ثلوج", "erwartet = متوقع"],
    simplified: "الثلوج ستهطل في المرتفعات",
    imagine: "تخيل قمماً بيضاء تتساقط عليها الثلوج ❄️"
};
HELP_DATA["hoeren1_exam15_q3"] = {
    text: "Wanderer sollten sich auf plötzliche Wetterumschwünge einstellen.",
    meaning: "على المتنزهين الاستعداد لتغيرات جوية مفاجئة",
    keywords: ["Wanderer = متنزهون", "plötzliche = مفاجئة", "Wetterumschwünge = تغيرات جوية", "einstellen = الاستعداد"],
    simplified: "احمل ملابس دافئة حتى لو الجو مشمس",
    imagine: "تخيل متنزهاً يحمل مظلة وسترة معاً 🌂🧥"
};

// ========== Exam 16: Wetter in den Alpen (Mittel) (صحيح: 2,3,5) ==========
HELP_DATA["hoeren1_exam16_q2"] = {
    text: "In den Tälern ist es oft neblig.",
    meaning: "غالباً ما يكون ضبابي في الوديان",
    keywords: ["Tälern = وديان", "neblig = ضبابي"],
    simplified: "لا ترى بعيداً إذا كنت في الوادي",
    imagine: "تخيل ضباباً كثيفاً يغطي كل شيء 🌫️"
};
HELP_DATA["hoeren1_exam16_q3"] = {
    text: "Auf den Gipfeln scheint häufig die Sonne.",
    meaning: "على القمم غالباً ما تشرق الشمس",
    keywords: ["Gipfeln = قمم", "scheint = تشرق", "Sonne = شمس"],
    simplified: "فوق الجبال، الجو مشمس",
    imagine: "تخيل قمة جبل مغمورة بأشعة الشمس ☀️"
};
HELP_DATA["hoeren1_exam16_q5"] = {
    text: "Touristen sollten warme Kleidung und Sonnenschutz mitnehmen.",
    meaning: "يجب على السياح أخذ ملابس دافئة وواقي شمس",
    keywords: ["warme Kleidung = ملابس دافئة", "Sonnenschutz = واقي شمس", "mitnehmen = أخذ معهم"],
    simplified: "الاستعداد للبرودة والشمس معاً",
    imagine: "تخيل حقيبة فيها كريم واقٍ وسترة ثقيلة 🧴🧥"
};

// ========== Exam 17: Insel Bali (صحيح: 4,5) ==========
HELP_DATA["hoeren1_exam17_q4"] = {
    text: "Die Balinesen sind für ihre Gastfreundschaft bekannt.",
    meaning: "سكان بالي مشهورون بكرم ضيافتهم",
    keywords: ["Balinesen = سكان بالي", "Gastfreundschaft = كرم ضيافة", "bekannt = مشهورون"],
    simplified: "الناس هناك لطفاء جداً",
    imagine: "تخيل شخصاً يرحب بك بابتسامة كبيرة وهدية 🎁"
};
HELP_DATA["hoeren1_exam17_q5"] = {
    text: "Das Reis angebaut wird auf Bali großgeschrieben.",
    meaning: "زراعة الأرز تحظى بأهمية كبيرة في بالي",
    keywords: ["Reis = أرز", "angebaut wird = يزرع", "großgeschrieben = مهم جداً"],
    simplified: "الأرز هو الغذاء الرئيسي",
    imagine: "تخيل حقولاً خضراء من الأرز في المدرجات 🌾"
};

// ========== Exam 18: Die Fluggesellschaft (صحيح: 1,3,5) ==========
HELP_DATA["hoeren1_exam18_q1"] = {
    text: "Die Fluggesellschaft Air Berlin musste Insolvenz anmelden.",
    meaning: "شركة الطيران إير برلين اضطرت للإعلان عن إفلاسها",
    keywords: ["Fluggesellschaft = شركة طيران", "Air Berlin = إير برلين", "Insolvenz = إفلاس", "anmelden = الإعلان"],
    simplified: "أير برلين أعلنت إفلاسها",
    imagine: "تخيل طائرة تعلق عليها لافتة مغلق ✈️🚫"
};
HELP_DATA["hoeren1_exam18_q3"] = {
    text: "Die Bundesregierung prüft eine mögliche Übernahme durch einen Investor.",
    meaning: "الحكومة تدرس عملية استحواذ محتملة من قبل مستثمر",
    keywords: ["Bundesregierung = حكومة", "prüft = تدرس", "Übernahme = استحواذ", "Investor = مستثمر"],
    simplified: "قد تشتري شركة أخرى شركة الطيران",
    imagine: "تخيل توقيع عقد بين طرفين 🤝"
};
HELP_DATA["hoeren1_exam18_q5"] = {
    text: "Die Zukunft der Airline ist ungewiss.",
    meaning: "مستقبل شركة الطيران غير مؤكد",
    keywords: ["Zukunft = مستقبل", "ungewiss = غير مؤكد"],
    simplified: "لا أحد يعرف ماذا سيحدث",
    imagine: "تخيل علامة استفهام كبيرة فوق طائرة ❓"
};

// ========== Exam 19: Der Fluggesellschaft (Mittel) (صحيح: 1,3,5) ==========
HELP_DATA["hoeren1_exam19_q1"] = {
    text: "Die Lufthansa hat angekündigt, ihr Streckennetz zu erweitern.",
    meaning: "أعلنت لوفتهانزا عن توسيع شبكة خطوطها",
    keywords: ["angekündigt = أعلنت", "Streckennetz = شبكة خطوط", "erweitern = توسيع"],
    simplified: "وجهات جديدة ستنضم لرحلات لوفتهانزا",
    imagine: "تخيل خريطة تضاف إليها نقاط جديدة 🗺️🆕"
};
HELP_DATA["hoeren1_exam19_q3"] = {
    text: "Die neuen Ziele sind Tokio, Singapur und Bangkok.",
    meaning: "الوجهات الجديدة هي طوكيو وسنغافورة وبانكوك",
    keywords: ["Ziele = وجهات", "Tokio = طوكيو", "Singapur = سنغافورة", "Bangkok = بانكوك"],
    simplified: "مدن آسيوية رائعة يمكنك زيارتها",
    imagine: "تخيل أعلام اليابان وسنغافورة وتايلاند 🇯🇵🇸🇬🇹🇭"
};
HELP_DATA["hoeren1_exam19_q5"] = {
    text: "Kunden können sich auf einen verbesserten Service freuen.",
    meaning: "يمكن للزبائن أن يتطلعوا إلى خدمة محسنة",
    keywords: ["Kunden = زبائن", "verbesserten = محسنة", "Service = خدمة", "freuen = يتطلعون بسعادة"],
    simplified: "الخدمة ستصبح أفضل",
    imagine: "تخيل مضيفة طيران تبتسم وتقدم قهوة ☕"
};

// ========== Exam 20: Der Bau (صحيح: 1,3,4) ==========
HELP_DATA["hoeren1_exam20_q1"] = {
    text: "In Berlin wird ein neues Gebäude für den Bundestag gebaut.",
    meaning: "في برلين يتم بناء مبنى جديد للبرلمان الألماني",
    keywords: ["Berlin = برلين", "Gebäude = مبنى", "Bundestag = البرلمان", "gebaut = يبنى"],
    simplified: "مبنى جديد للبرلمان قيد الإنشاء",
    imagine: "تخيل بناءً ضخماً تحت الإنشاء 🏗️"
};
HELP_DATA["hoeren1_exam20_q3"] = {
    text: "Das Gebäude wird nachhaltig und energieeffizient sein.",
    meaning: "المبنى سيكون مستداماً وكفوءاً في استخدام الطاقة",
    keywords: ["nachhaltig = مستدام", "energieeffizient = كفوء طاقياً"],
    simplified: "المبنى صديق للبيئة",
    imagine: "تخيل مبنى بألواح شمسية على سطحه ☀️🔋"
};
HELP_DATA["hoeren1_exam20_q4"] = {
    text: "Die Kosten für den Bau belaufen sich auf 500 Millionen Euro.",
    meaning: "تكاليف البناء تبلغ 500 مليون يورو",
    keywords: ["Kosten = تكاليف", "belaufen sich = تبلغ", "500 Millionen = 500 مليون"],
    simplified: "المشروع مكلف جداً",
    imagine: "تخيل كومة من العملات الأوروبية 💶"
};

// ========== Exam 21: 50-Euro (صحيح: 3) ==========
HELP_DATA["hoeren1_exam21_q3"] = {
    text: "Fälscher haben es dadurch schwerer.",
    meaning: "المزورون يصبح الأمر أصعب عليهم بذلك",
    keywords: ["Fälscher = مزورون", "schwerer = أصعب"],
    simplified: "لن يتمكن أحد من تزويرها بسهولة",
    imagine: "تخيل مزوراً يحاول عبثاً ويفشل 👎"
};

// ========== Exam 22: Das Schladminger (صحيح: 1,2,5) ==========
HELP_DATA["hoeren1_exam22_q1"] = {
    text: "Das Schladminger ist ein berühmter Skikurs in Österreich.",
    meaning: "دورة شلادمينغر هي دورة تزلج مشهورة في النمسا",
    keywords: ["Schladminger = شلادمينغر", "berühmter = مشهورة", "Skikurs = دورة تزلج", "Österreich = النمسا"],
    simplified: "دورة تعليم تزلج في النمسا",
    imagine: "تخيل جبال الألب والتزلج ⛷️"
};
HELP_DATA["hoeren1_exam22_q2"] = {
    text: "Anfänger und Fortgeschrittene können teilnehmen.",
    meaning: "يمكن للمبتدئين والمتقدمين المشاركة",
    keywords: ["Anfänger = مبتدئون", "Fortgeschrittene = متقدمون", "teilnehmen = المشاركة"],
    simplified: "الكل مرحب به، مبتدئ أو محترف",
    imagine: "تخيل أشخاصاً بمستويات مختلفة يتزلجون 🏔️"
};
HELP_DATA["hoeren1_exam22_q5"] = {
    text: "Am Ende des Kurses gibt es ein Rennen für alle.",
    meaning: "في نهاية الدورة هناك سباق للجميع",
    keywords: ["Ende = نهاية", "Rennen = سباق", "alle = الجميع"],
    simplified: "مسابقة ممتعة في النهاية",
    imagine: "تخيل متزلجين يتسابقون على المنحدر 🏁"
};

// ========== Exam 23: Bei den Europawahlen (Linksparteien) (صحيح: 3,5) ==========
HELP_DATA["hoeren1_exam23_q3"] = {
    text: "Die Wahlbeteiligung war höher als bei der letzten Wahl.",
    meaning: "نسبة المشاركة كانت أعلى من آخر انتخابات",
    keywords: ["Wahlbeteiligung = نسبة مشاركة", "höher = أعلى", "letzten Wahl = آخر انتخابات"],
    simplified: "ناس أكثر صوتوا هذه المرة",
    imagine: "تخيل طوابير طويلة أمام مراكز الاقتراع 🗳️"
};
HELP_DATA["hoeren1_exam23_q5"] = {
    text: "Die konservativen Parteien verloren dagegen stark.",
    meaning: "الأحزاب المحافظة على النقيض خسرت بشدة",
    keywords: ["konservativen = محافظة", "verloren = خسرت", "stark = بشدة"],
    simplified: "اليمين خسر كثيراً",
    imagine: "تخيل انهياراً في الأصوات 🔻"
};

// ========== Exam 24: Bei den Europawahlen (CDU/CSU) (صحيح: 1,3,5) ==========
HELP_DATA["hoeren1_exam24_q1"] = {
    text: "Die CDU/CSU bleibt stärkste Kraft im Europaparlament.",
    meaning: "الاتحاد الديمقراطي المسيحي يبقى القوة الأقوى في البرلمان الأوروبي",
    keywords: ["CDU/CSU = الاتحاد المسيحي", "stärkste Kraft = أقوى قوة", "Europaparlament = برلمان أوروبي"],
    simplified: "الحزب المسيحي ما زال الأول",
    imagine: "تخيل راية مكتوب عليها رقم 1 🥇"
};
HELP_DATA["hoeren1_exam24_q3"] = {
    text: "Die Wähler sind mit der Arbeit der Großen Koalition unzufrieden.",
    meaning: "الناخبون غير راضين عن عمل الائتلاف الكبير",
    keywords: ["Wähler = ناخبون", "unzufrieden = غير راضين", "Großen Koalition = ائتلاف كبير"],
    simplified: "الناس ليسوا سعداء بالحكومة الحالية",
    imagine: "تخيل حاجباً مزمومًا يعبر عن عدم الرضا 😒"
};
HELP_DATA["hoeren1_exam24_q5"] = {
    text: "Die Wahlbeteiligung lag im europäischen Durchschnitt.",
    meaning: "نسبة المشاركة كانت في المعدل الأوروبي",
    keywords: ["europäischen Durchschnitt = معدل أوروبي", "lag = كانت"],
    simplified: "النسبة لم تكن مميزة ولا سيئة",
    imagine: "تخيل رسماً بيانياً في المنتصف 📊"
};

// ========== Exam 25: Die Bundesländer (صحيح: 1,2,5) ==========
HELP_DATA["hoeren1_exam25_q1"] = {
    text: "Deutschland besteht aus 16 Bundesländern.",
    meaning: "ألمانيا تتكون من 16 ولاية",
    keywords: ["besteht aus = تتكون من", "Bundesländern = ولايات"],
    simplified: "ألمانيا مقسمة إلى 16 منطقة",
    imagine: "تخيل خريطة ألمانيا مقسمة إلى 16 قطعة 🧩"
};
HELP_DATA["hoeren1_exam25_q2"] = {
    text: "Bayern ist das flächengrößte Bundesland.",
    meaning: "بافاريا هي الولاية الأكبر مساحة",
    keywords: ["Bayern = بافاريا", "flächengrößte = الأكبر مساحة"],
    simplified: "بافاريا هي الأكبر",
    imagine: "تخيل خريطة بافاريا تغطي جزءاً كبيراً من ألمانيا 🗺️"
};
HELP_DATA["hoeren1_exam25_q5"] = {
    text: "Die Länder unterscheiden sich in Kultur und Tradition.",
    meaning: "الولايات تختلف في الثقافة والتقاليد",
    keywords: ["unterscheiden sich = تختلف", "Kultur = ثقافة", "Tradition = تقاليد"],
    simplified: "كل منطقة لها عاداتها الخاصة",
    imagine: "تخيل أشخاصاً بملابس تقليدية مختلفة 👘"
};

// ========== Exam 26: Bio-Siegels (صحيح: 1,5) ==========
HELP_DATA["hoeren1_exam26_q1"] = {
    text: "Immer mehr Lebensmittel tragen ein Bio-Siegel.",
    meaning: "المزيد من المواد الغذائية تحمل ختم عضوي",
    keywords: ["Lebensmittel = مواد غذائية", "Bio-Siegel = ختم عضوي", "tragen = تحمل"],
    simplified: "منتجات عضوية أكثر في الأسواق",
    imagine: "تخيل ختما اخضر مكتوب عليه Bio🟢"
};
HELP_DATA["hoeren1_exam26_q5"] = {
    text: "Die Nachfrage nach Bio-Produkten steigt stetig.",
    meaning: "الطلب على المنتجات العضوية يرتفع باستمرار",
    keywords: ["Nachfrage = طلب", "steigt = يرتفع", "stetig = باستمرار"],
    simplified: "الناس تريد طعاما صحيا أكثر فأكثر",
    imagine: "تخيل رسما بيانيا يرتفع لأعلى 📈"
};

// ========== Exam 27: Berufen (bonbon) (صحيح: 1,2) ==========
HELP_DATA["hoeren1_exam27_q1"] = {
    text: "Ein Bonbon ist eine kleine Süßigkeit, die man lutscht.",
    meaning: "حلوى صغيرة تمص",
    keywords: ["Bonbon = حلوى", "Süßigkeit = حلويات", "lutscht = يمص"],
    simplified: "حلوى تذوب في الفم",
    imagine: "تخيل طفلاً يمص حلوى ملونة 🍬"
};
HELP_DATA["hoeren1_exam27_q2"] = {
    text: "Es gibt Bonbons mit verschiedenen Geschmacksrichtungen.",
    meaning: "هناك حلوى بنكهات مختلفة",
    keywords: ["verschiedenen = مختلفة", "Geschmacksrichtungen = نكهات"],
    simplified: "نكهات متعددة: فراولة، نعناع، ليمون...",
    imagine: "تخيل حلوى بألوان مختلفة حسب النكهة 🌈"
};

// ============================================
// Hören Teil 2
// ============================================

// ========== Exam 1: Herr Gasser und Frau Janke (صحيح: 3,4,8,9,10) ==========
HELP_DATA["hoeren2_exam1_q3"] = {
    text: "Die Bergbauern können kaum vom Verkauf ihrer Produkte leben.",
    meaning: "مزارعو الجبال بالكاد يستطيعون العيش من بيع منتجاتهم",
    keywords: ["Bergbauern = مزارعو جبال", "kaum = بالكاد", "Verkauf = بيع", "Produkte = منتجات"],
    simplified: "مزارعو الجبال يعيشون بصعوبة من منتجاتهم",
    imagine: "تخيل مزارعاً يبيع خضرواته لكنه لا يكسب ما يكفي 🥬"
};
HELP_DATA["hoeren2_exam1_q4"] = {
    text: "Auch heute werden die steilen Hänge noch manuell bearbeitet.",
    meaning: "حتى اليوم يتم التعامل مع المنحدرات الحادة يدوياً",
    keywords: ["steilen Hänge = منحدرات حادة", "manuell = يدوياً", "bearbeitet = يتم التعامل"],
    simplified: "المنحدرات الحادة لا تزال تعالج باليد",
    imagine: "تخيل مزارعاً يعمل بيديه على منحدر شديد الانحدار ⛰️"
};
HELP_DATA["hoeren2_exam1_q8"] = {
    text: "Für Frau Janke ist der Erholungswert trotz der Anstrengung sehr hoch.",
    meaning: "بالنسبة للسيدة يانكي، قيمة الاسترخاء عالية جداً رغم التعب",
    keywords: ["Erholungswert = قيمة الاسترخاء", "Anstrengung = تعب", "trotz = رغم"],
    simplified: "الاسترخاء يستحق التعب بالنسبة لها",
    imagine: "تخيل شخصاً متعباً لكنه سعيد بما يفعله 😊"
};
HELP_DATA["hoeren2_exam1_q9"] = {
    text: "Almhelferinnen und -helfer können vielseitige Aufgaben übernehmen.",
    meaning: "مساعدو المرتفعات يمكنهم القيام بمهام متنوعة",
    keywords: ["Almhelfer = مساعد مرتفعات", "vielseitige = متنوعة", "Aufgaben = مهام"],
    simplified: "المساعدون يقومون بمهام كثيرة ومختلفة",
    imagine: "تخيل شخصاً يقوم بأعمال عديدة في الجبل 🧗"
};
HELP_DATA["hoeren2_exam1_q10"] = {
    text: "Über die Dauer des Aufenthalts kann man frei entscheiden.",
    meaning: "يمكن للمرء أن يقرر بحرية مدة الإقامة",
    keywords: ["Dauer = مدة", "Aufenthalts = إقامة", "frei entscheiden = يقرر بحرية"],
    simplified: "مدة الإقامة يحددها الشخص بنفسه",
    imagine: "تخيل شخصاً يختار كم يوماً سيبقى 📅"
};

// ========== Exam 2: Suza Hotop (صحيح: 1,3,4,8) ==========
HELP_DATA["hoeren2_exam2_q1"] = {
    text: "Für die Autorin Suza Hotop ist Schreiben Freude und Anstrengung zugleich.",
    meaning: "بالنسبة للكاتبة سوزا هوتوب، الكتابة هي متعة وجهد في نفس الوقت",
    keywords: ["Autorin = كاتبة", "Schreiben = كتابة", "Freude = متعة", "Anstrengung = جهد"],
    simplified: "الكتابة عندها ممتعة ولكنها متعبة أيضاً",
    imagine: "تخيل كاتبة تبتسم وهي متعبة من الكتابة ✍️"
};
HELP_DATA["hoeren2_exam2_q3"] = {
    text: "Am Anfang dachte Suza nicht daran, ihre Geschichte zu veröffentlichen.",
    meaning: "في البداية لم تفكر سوزا في نشر قصتها",
    keywords: ["Am Anfang = في البداية", "veröffentlichen = نشر"],
    simplified: "لم تكن تنوي النشر عندما بدأت",
    imagine: "تخيل كاتبة تكتب لنفسها فقط 📝"
};
HELP_DATA["hoeren2_exam2_q4"] = {
    text: "Zuerst stellte Suza Auszüge ihrer Geschichte ins Internet.",
    meaning: "في البداية وضعت سوزا مقتطفات من قصتها على الإنترنت",
    keywords: ["Zuerst = في البداية", "Auszüge = مقتطفات", "Internet = إنترنت"],
    simplified: "نشرت أجزاء من قصتها على الإنترنت أولاً",
    imagine: "تخيل كاتبة تنشر كتابها على الإنترنت 💻"
};
HELP_DATA["hoeren2_exam2_q8"] = {
    text: "Suza folgt beim Schreiben keinen besonderen Vorbildern.",
    meaning: "سوزا لا تتبع قدوات معينة في كتابتها",
    keywords: ["folgt = تتبع", "Vorbildern = قدوات", "besonderen = معينة"],
    simplified: "لها أسلوبها الخاص في الكتابة",
    imagine: "تخيل كاتبة تكتب بأسلوبها الفريد ✨"
};

// ========== Exam 3: Suza Hotop (Mittel) (صحيح: 1,3,4,7,8) ==========
HELP_DATA["hoeren2_exam3_q1"] = {
    text: "Für die Autorin Suza Hotop ist Schreiben Freude und Anstrengung zugleich.",
    meaning: "بالنسبة للكاتبة سوزا هوتوب، الكتابة هي متعة وجهد في نفس الوقت",
    keywords: ["Autorin = كاتبة", "Schreiben = كتابة", "Freude = متعة", "Anstrengung = جهد"],
    simplified: "الكتابة عندها ممتعة ولكنها متعبة أيضاً",
    imagine: "تخيل كاتبة تبتسم وهي متعبة من الكتابة ✍️"
};
HELP_DATA["hoeren2_exam3_q3"] = {
    text: "Am Anfang dachte Suza nicht daran, ihre Geschichte zu veröffentlichen.",
    meaning: "في البداية لم تفكر سوزا في نشر قصتها",
    keywords: ["Am Anfang = في البداية", "veröffentlichen = نشر"],
    simplified: "لم تكن تنوي النشر عندما بدأت",
    imagine: "تخيل كاتبة تكتب لنفسها فقط 📝"
};
HELP_DATA["hoeren2_exam3_q4"] = {
    text: "Zuerst stellte Suza Auszüge ihrer Geschichte ins Internet.",
    meaning: "في البداية وضعت سوزا مقتطفات من قصتها على الإنترنت",
    keywords: ["Zuerst = في البداية", "Auszüge = مقتطفات", "Internet = إنترنت"],
    simplified: "نشرت أجزاء من قصتها على الإنترنت أولاً",
    imagine: "تخيل كاتبة تنشر كتابها على الإنترنت 💻"
};
HELP_DATA["hoeren2_exam3_q7"] = {
    text: "Die Autorin plant nie ganz genau, was in der Geschichte passieren wird.",
    meaning: "الكاتبة لا تخطط أبداً بدقة لما سيحدث في القصة",
    keywords: ["plant nie = لا تخطط أبداً", "ganz genau = بدقة", "passieren = يحدث"],
    simplified: "تترك مجالاً للتغيير في قصتها",
    imagine: "تخيل كاتبة تترك قصتها تأخذ مجراها 🌊"
};
HELP_DATA["hoeren2_exam3_q8"] = {
    text: "Suza folgt beim Schreiben keinen besonderen Vorbildern.",
    meaning: "سوزا لا تتبع قدوات معينة في كتابتها",
    keywords: ["folgt = تتبع", "Vorbildern = قدوات", "besonderen = معينة"],
    simplified: "لها أسلوبها الخاص في الكتابة",
    imagine: "تخيل كاتبة تكتب بأسلوبها الفريد ✨"
};

// ========== Exam 4: Professor Steiner (صحيح: 2,6,8,9,10) ==========
HELP_DATA["hoeren2_exam4_q2"] = {
    text: "Steiner vermittelt den Studierenden nicht nur theoretisches Wissen, sondern fordert auch, dass es praktisch angewendet wird.",
    meaning: "شتاينر لا ينقل للطلاب معرفة نظرية فقط، بل يطلب أيضاً تطبيقها عملياً",
    keywords: ["vermittelt = ينقل", "theoretisches Wissen = معرفة نظرية", "praktisch angewendet = تطبيق عملي"],
    simplified: "يهتم بالتطبيق العملي وليس فقط النظري",
    imagine: "تخيل أستاذاً يطلب من طلابه التطبيق العملي 👨‍🏫"
};
HELP_DATA["hoeren2_exam4_q6"] = {
    text: "Journalisten sollten Lust haben, etwas zu entdecken.",
    meaning: "يجب أن يكون لدى الصحفيين الرغبة في اكتشاف شيء ما",
    keywords: ["Lust haben = لديه رغبة", "entdecken = اكتشاف"],
    simplified: "الصحفي الجيد يحب الاستكشاف",
    imagine: "تخيل صحفياً يبحث عن قصة جديدة 🔍"
};
HELP_DATA["hoeren2_exam4_q8"] = {
    text: "Steiner hat während seines Journalistik-Studiums für das ZDF Fußballspiele moderiert.",
    meaning: "خلال دراسته للصحافة، قدم شتاينر مباريات كرة القدم لصالح ZDF",
    keywords: ["Journalistik-Studiums = دراسة الصحافة", "moderiert = قدم", "ZDF = قناة ZDF"],
    simplified: "كان يقدم مباريات كرة القدم أثناء الدراسة",
    imagine: "تخيل طالباً يقدم مباريات على التلفزيون 📺"
};
HELP_DATA["hoeren2_exam4_q9"] = {
    text: "Steiner ist es wichtig, als Moderator den Sportlern gegenüber neutral zu bleiben.",
    meaning: "من المهم بالنسبة لشتاينر أن يبقى محايداً تجاه الرياضيين كمقدم",
    keywords: ["neutral = محايد", "Sportlern = رياضيين", "wichtig = مهم"],
    simplified: "الحيادية مهمة في عمله كمقدم",
    imagine: "تخيل مذيعاً لا ينحاز لأي فريق 🎤"
};
HELP_DATA["hoeren2_exam4_q10"] = {
    text: "Steiner rät Abiturienten dazu, verschiedene berufliche Möglichkeiten zu testen.",
    meaning: "ينصح شتاينر طلاب الثانوية العامة بتجربة خيارات مهنية مختلفة",
    keywords: ["Abiturienten = طلاب ثانوية", "berufliche Möglichkeiten = خيارات مهنية", "testen = تجربة"],
    simplified: "يجب على الخريجين تجربة مجالات مختلفة قبل الاختيار",
    imagine: "تخيل شاباً يجرب عدة وظائف قبل أن يختار 💼"
};

// ========== Exam 5: Professor Steiner (Mittel) (صحيح: 2,9,10) ==========
HELP_DATA["hoeren2_exam5_q2"] = {
    text: "Steiner möchte, dass die Studierenden das Gelernte auch in der Praxis anwenden können.",
    meaning: "يريد شتاينر أن يتمكن الطلاب من تطبيق ما تعلموه عملياً أيضاً",
    keywords: ["Studierenden = طلاب", "Praxis = تطبيق عملي", "anwenden = تطبيق"],
    simplified: "يهتم بتطبيق المعرفة عملياً",
    imagine: "تخيل أستاذاً يطلب من طلابه التطبيق العملي 👨‍🏫"
};
HELP_DATA["hoeren2_exam5_q9"] = {
    text: "Steiner ist es wichtig, als Moderator den Sportlern gegenüber neutral zu bleiben.",
    meaning: "من المهم بالنسبة لشتاينر أن يبقى محايداً تجاه الرياضيين كمقدم",
    keywords: ["neutral = محايد", "Sportlern = رياضيين", "wichtig = مهم"],
    simplified: "الحيادية مهمة في عمله كمقدم",
    imagine: "تخيل مذيعاً لا ينحاز لأي فريق 🎤"
};
HELP_DATA["hoeren2_exam5_q10"] = {
    text: "Steiner rät Abiturienten dazu, verschiedene Tests zu machen.",
    meaning: "ينصح شتاينر طلاب الثانوية العامة بإجراء اختبارات مختلفة",
    keywords: ["Abiturienten = طلاب ثانوية", "Tests = اختبارات", "zu machen = إجراء"],
    simplified: "يجب على الخريجين تجربة اختبارات مختلفة",
    imagine: "تخيل شاباً يجري اختبارات مهنية مختلفة 📝"
};

// ========== Exam 8: In dem Restaurant (صحيح: 1,3,4,7,8,9) ==========
HELP_DATA["hoeren2_exam8_q1"] = {
    text: "In dem Restaurant gab es einen Wasserschaden.",
    meaning: "كان هناك ضرر ناتج عن المياه في المطعم",
    keywords: ["Restaurant = مطعم", "Wasserschaden = ضرر مائي"],
    simplified: "تضرر المطعم بسبب المياه",
    imagine: "تخيل ماء يتسرب في مطعم 💧"
};
HELP_DATA["hoeren2_exam8_q3"] = {
    text: "Im Haus der Großeltern lebten auch andere Kinder.",
    meaning: "في بيت الأجداد عاش أيضاً أطفال آخرون",
    keywords: ["Haus der Großeltern = بيت الأجداد", "andere Kinder = أطفال آخرون", "lebten = عاشوا"],
    simplified: "كان هناك أطفال آخرون في بيت الأجداد",
    imagine: "تخيل بيتاً مليئاً بالأطفال 👧🧒"
};
HELP_DATA["hoeren2_exam8_q4"] = {
    text: "Der Stress störte den Studiogast während der Ausbildung nicht.",
    meaning: "الضغط النفسي لم يزعج ضيف الاستوديو أثناء التدريب المهني",
    keywords: ["Stress = ضغط نفسي", "störte = أزعج", "Ausbildung = تدريب مهني"],
    simplified: "الضغط لم يزعجه أثناء التدريب",
    imagine: "تخيل شخصاً هادئاً رغم الضغط 🧘"
};
HELP_DATA["hoeren2_exam8_q7"] = {
    text: "In der Essschule können Kinder kochen lernen.",
    meaning: "في مدرسة الأكل، يمكن للأطفال تعلم الطبخ",
    keywords: ["Essschule = مدرسة الأكل", "Kinder = أطفال", "kochen lernen = تعلم الطبخ"],
    simplified: "الأطفال يتعلمون الطبخ هناك",
    imagine: "تخيل أطفالاً يطبخون 👩‍🍳"
};
HELP_DATA["hoeren2_exam8_q8"] = {
    text: "Anton Laurito lehnt Fastfood nicht grundsätzlich ab.",
    meaning: "أنطون لوريتو لا يرفض الوجبات السريعة بشكل مبدئي",
    keywords: ["lehnt ab = يرفض", "Fastfood = وجبات سريعة", "grundsätzlich = بشكل مبدئي"],
    simplified: "ليس ضد الوجبات السريعة تماماً",
    imagine: "تخيل برجر وسلطة معاً 🍔"
};
HELP_DATA["hoeren2_exam8_q9"] = {
    text: "Der Koch hat eine gesunde Einstellung zum Thema Wettbewerb.",
    meaning: "الطاهي لديه موقف صحي تجاه موضوع المنافسة",
    keywords: ["gesunde Einstellung = موقف صحي", "Wettbewerb = منافسة"],
    simplified: "نظرته للمنافسة إيجابية وصحية",
    imagine: "تخيل طاهياً يبتسم رغم المنافسة 😊"
};

// ========== Exam 10: Carina (صحيح: 1,3,4,8,9,10) ==========
HELP_DATA["hoeren2_exam10_q1"] = {
    text: "Der Berufseinstieg ist in anderen Ländern nicht leicht.",
    meaning: "بدء الحياة المهنية ليس سهلاً في البلدان الأخرى",
    keywords: ["Berufseinstieg = بدء مهني", "anderen Ländern = بلدان أخرى", "nicht leicht = ليس سهلاً"],
    simplified: "بدء العمل صعب في كل مكان",
    imagine: "تخيل شخصاً يبحث عن وظيفة 🔍"
};
HELP_DATA["hoeren2_exam10_q3"] = {
    text: "Carina hat sich der Agentur mit einem Film präsentiert.",
    meaning: "قدمت كارينا نفسها للوكالة بفيلم",
    keywords: ["Agentur = وكالة", "präsentiert = قدمت", "Film = فيلم"],
    simplified: "استخدمت فيلماً لتقديم نفسها",
    imagine: "تخيل كارينا تعرض فيلماً 🎬"
};
HELP_DATA["hoeren2_exam10_q4"] = {
    text: "Carina musste für einen Film ihr Gewicht stark verändern.",
    meaning: "اضطرت كارينا لتغيير وزنها بشكل كبير من أجل فيلم",
    keywords: ["Gewicht = وزن", "stark verändern = تغيير كبير", "für einen Film = من أجل فيلم"],
    simplified: "غيرت وزنها كثيراً لدور في فيلم",
    imagine: "تخيل ممثلة تتبع حمية قاسية 🏋️"
};
HELP_DATA["hoeren2_exam10_q8"] = {
    text: "Carina findet den Wechsel zwischen Schule und Drehterminen nicht leicht.",
    meaning: "تجد كارينا التنقل بين المدرسة ومواعيد التصوير ليس سهلاً",
    keywords: ["Wechsel = تنقل", "Schule = مدرسة", "Drehterminen = مواعيد تصوير"],
    simplified: "الموازنة بين الدراسة والتمثيل صعبة",
    imagine: "تخيل كارينا تجري بين المدرسة واستوديو التصوير 🏃"
};
HELP_DATA["hoeren2_exam10_q9"] = {
    text: "Bei Dialogen darf man auch selbst etwas erfinden.",
    meaning: "في الحوارات، يمكن للمرء أيضاً أن يخترع شيئاً بنفسه",
    keywords: ["Dialogen = حوارات", "erfinden = يخترع", "selbst = بنفسه"],
    simplified: "يسمح بالارتجال في الحوارات",
    imagine: "تخيل ممثلاً يرتجل حواراً 🎤"
};
HELP_DATA["hoeren2_exam10_q10"] = {
    text: "Carina empfiehlt, sich andere Schauspieler im Theater und in Filmen anzusehen.",
    meaning: "تنصح كارينا بمشاهدة ممثلين آخرين في المسرح والأفلام",
    keywords: ["empfiehlt = تنصح", "Schauspieler = ممثلين", "Theater = مسرح"],
    simplified: "مشاهدة الممثلين الآخرين مفيدة",
    imagine: "تخيل كارينا تشاهد فيلماً 📺"
};

// ========== Exam 12: Frau Schenk (صحيح: 1,4,6,7,8) ==========
HELP_DATA["hoeren2_exam12_q1"] = {
    text: "Frau Schenk hat kurze blondierte Haare.",
    meaning: "السيدة شينك لديها شعر قصير مصبوغ بالشعر الأشقر",
    keywords: ["Frau Schenk = سيدة شينك", "kurze = قصير", "blondierte = مصبوغ أشقر"],
    simplified: "شعرها قصير وأشقر",
    imagine: "تخيل سيدة بشعر أشقر قصير 💇"
};
HELP_DATA["hoeren2_exam12_q4"] = {
    text: "Der Interviewte hat keine guten Erinnerungen an seine Aufenthalte in Jugendherbergen.",
    meaning: "الشخص الذي تمت مقابلته ليس لديه ذكريات جيدة عن إقامته في بيوت الشباب",
    keywords: ["Interviewte = تمت مقابلته", "gute Erinnerungen = ذكريات جيدة", "Jugendherbergen = بيوت شباب"],
    simplified: "ذكرياته في بيوت الشباب سيئة",
    imagine: "تخيل شخصاً يتذكر إقامة سيئة في بيت شباب 🏚️"
};
HELP_DATA["hoeren2_exam12_q6"] = {
    text: "Nur bei Schulklassen achtet man auf Geschlechtertrennung in den Schlafräumen.",
    meaning: "فقط مع الفصول الدراسية يتم الاهتمام بفصل الجنسين في غرف النوم",
    keywords: ["Schulklassen = فصول دراسية", "Geschlechtertrennung = فصل جنسين", "achtet man = يتم الاهتمام"],
    simplified: "يتم فصل الجنسين فقط للفصول المدرسية",
    imagine: "تخيل غرفاً منفصلة للبنين والبنات 🚻"
};
HELP_DATA["hoeren2_exam12_q7"] = {
    text: "Das Angebot an Speisen wird auf die Wünsche der Gäste zugeschnitten.",
    meaning: "عرض الطعام يتم تصميمه حسب رغبات الضيوف",
    keywords: ["Angebot = عرض", "Speisen = طعام", "Wünsche der Gäste = رغبات الضيوف", "zugeschnitten = مصمم"],
    simplified: "الطعام يلبي رغبات الضيوف",
    imagine: "تخيل طعاماً يختاره الضيوف بأنفسهم 🍽️"
};
HELP_DATA["hoeren2_exam12_q8"] = {
    text: "Schüler aus ländlichen Regionen sind meist unproblematische Gäste.",
    meaning: "طلاب من المناطق الريفية هم عادة ضيوف غير مشكلة",
    keywords: ["ländlichen Regionen = مناطق ريفية", "unproblematische Gäste = ضيوف غير مشكلة", "meist = عادة"],
    simplified: "طلاب الريف ضيوف جيدون عادة",
    imagine: "تخيل طلاباً مهذبين في بيت شباب 👨‍🎓"
};

// ========== Exam 14: Herr Karimov (صحيح: 2,5,8,9,10) ==========
HELP_DATA["hoeren2_exam14_q2"] = {
    text: "Die Mitglieder bekommen für ihre Hilfe ein Stunden-Guthaben.",
    meaning: "الأعضاء يحصلون على رصيد ساعات مقابل مساعدتهم",
    keywords: ["Mitglieder = أعضاء", "Hilfe = مساعدة", "Stunden-Guthaben = رصيد ساعات"],
    simplified: "المساعدة تعطي رصيداً من الساعات",
    imagine: "تخيل شخصاً يكسب ساعات مقابل العمل ⏰"
};
HELP_DATA["hoeren2_exam14_q5"] = {
    text: "Manchmal erwarten Mitglieder keine Gegenleistung für ihre Arbeit.",
    meaning: "أحياناً لا يتوقع الأعضاء مقابل لعملهم",
    keywords: ["erwarten = يتوقعون", "keine Gegenleistung = لا مقابل", "Arbeit = عمل"],
    simplified: "بعض المتطوعين لا يريدون أجراً",
    imagine: "تخيل شخصاً يساعد دون مقابل ❤️"
};
HELP_DATA["hoeren2_exam14_q8"] = {
    text: "Herr Karimov erledigt nicht so gerne Büroarbeit.",
    meaning: "السيد كريموف لا يحب القيام بالأعمال المكتبية كثيراً",
    keywords: ["erledigt = يقوم", "Büroarbeit = أعمال مكتبية", "nicht so gerne = ليس كثيراً"],
    simplified: "لا يفضل الأعمال المكتبية",
    imagine: "تخيل شخصاً يجلس خلف مكتب غير سعيد 📄"
};
HELP_DATA["hoeren2_exam14_q9"] = {
    text: "Wer sich bei der Nachbarschaftshilfe einbringen möchte, muss sich persönlich vorstellen.",
    meaning: "من يرغب في المشاركة في مساعدة الجيران، يجب أن يقدم نفسه شخصياً",
    keywords: ["Nachbarschaftshilfe = مساعدة جيران", "einbringen = مشاركة", "persönlich vorstellen = تقديم شخصي"],
    simplified: "التقديم الشخصي إلزامي للمشاركة",
    imagine: "تخيل شخصاً يقدم نفسه لجيرانه 👋"
};
HELP_DATA["hoeren2_exam14_q10"] = {
    text: "Herr Karimov brauchte vorübergehend einen Chauffeur.",
    meaning: "احتاج السيد كريموف سائقاً مؤقتاً",
    keywords: ["brauchte = احتاج", "vorübergehend = مؤقتاً", "Chauffeur = سائق"],
    simplified: "كان بحاجة إلى سائق لفترة مؤقتة",
    imagine: "تخيل شخصاً يستقل سيارة أجرة 🚗"
};

// ========== Exam 15: Nadine (صحيح: 2,3,5,6,8,10) ==========
HELP_DATA["hoeren2_exam15_q2"] = {
    text: "Sie hatte vor der Weltreise einige Zweifel und Bedenken.",
    meaning: "كان لديها بعض الشكوك والمخاوف قبل رحلة العالم",
    keywords: ["Zweifel = شكوك", "Bedenken = مخاوف", "vor der Weltreise = قبل الرحلة"],
    simplified: "كانت قلقة قبل الرحلة",
    imagine: "تخيل شخصاً يفكر قبل السفر 🤔"
};
HELP_DATA["hoeren2_exam15_q3"] = {
    text: "Die Journalistin ist während ihrer Reise auch geflogen.",
    meaning: "الصحفية سافرت أيضاً بالطائرة خلال رحلتها",
    keywords: ["Journalistin = صحفية", "während = خلال", "geflogen = سافرت جواً"],
    simplified: "استخدمت الطائرة في رحلتها",
    imagine: "تخيل شخصاً على متن طائرة ✈️"
};
HELP_DATA["hoeren2_exam15_q5"] = {
    text: "Ihre Freunde waren unterschiedlicher Meinung über ihr Vorhaben.",
    meaning: "أصدقاؤها كانوا有不同的 آراء حول خطتها",
    keywords: ["unterschiedlicher Meinung = آراء مختلفة", "Vorhaben = خطة", "Freunde = أصدقاء"],
    simplified: "الأصدقاء اختلفوا في آرائهم",
    imagine: "تخيل أصدقاء يتناقشون 🗣️"
};
HELP_DATA["hoeren2_exam15_q6"] = {
    text: "In Tadschikistan hat sie eine Zeit lang andere Motorradfahrer begleitet.",
    meaning: "في طاجيكستان، رافقت راكبي دراجات نارية آخرين لبعض الوقت",
    keywords: ["Tadschikistan = طاجيكستان", "Motorradfahrer = راكبي دراجات", "begleitet = رافقت"],
    simplified: "رافقت راكبي دراجات في طاجيكستان",
    imagine: "تخيل دراجات نارية تسير معاً 🏍️"
};
HELP_DATA["hoeren2_exam15_q8"] = {
    text: "Nadine Wagner hat auf der Reise gelegentlich gearbeitet.",
    meaning: "نادين فاغنر عملت أحياناً خلال الرحلة",
    keywords: ["gelegentlich = أحياناً", "gearbeitet = عملت", "auf der Reise = في الرحلة"],
    simplified: "كانت تعمل أحياناً لتغطية نفقاتها",
    imagine: "تخيل شخصاً يعمل أثناء السفر 💻"
};
HELP_DATA["hoeren2_exam15_q10"] = {
    text: "Nach ihrer Rückkehr musste sie nicht lange nach einer neuen Arbeit suchen.",
    meaning: "بعد عودتها، لم تضطر للبحث طويلاً عن عمل جديد",
    keywords: ["Rückkehr = عودة", "neue Arbeit = عمل جديد", "nicht lange suchen = لم تبحث طويلاً"],
    simplified: "وجدت عملاً بسرعة بعد العودة",
    imagine: "تخيل شخصاً يجد وظيفة بسرعة 🎯"
};

// ========== Exam 18: Roland (Spielen) (صحيح: 2,3,4,7,9,10) ==========
HELP_DATA["hoeren2_exam18_q2"] = {
    text: "Viktoria Köln möchte nicht nur gegen Mannschaften aus der Verbandsliga spielen.",
    meaning: "فيكتوريا كولن لا تريد اللعب فقط ضد فرق من دوري المقاطعات",
    keywords: ["Verbandsliga = دوري المقاطعات", "Mannschaften = فرق", "spielen = اللعب"],
    simplified: "تريد مواجهة فرق أقوى",
    imagine: "تخيل مباراة كرة قدم 🏟️"
};
HELP_DATA["hoeren2_exam18_q3"] = {
    text: "Zu Beginn dieser Saison hat ein Spieler Viktoria Köln verlassen.",
    meaning: "في بداية هذا الموسم، غادر لاعب فيكتوريا كولن",
    keywords: ["Beginn = بداية", "Saison = موسم", "verlassen = غادر"],
    simplified: "لاعب واحد غادر الفريق",
    imagine: "تخيل لاعباً يغادر النادي 🚶"
};
HELP_DATA["hoeren2_exam18_q4"] = {
    text: "Neue Spieler kommen bei Viktoria Köln immer aus der eigenen Jugendmannschaft.",
    meaning: "اللاعبون الجدد في فيكتوريا كولن يأتون دائماً من فريق الشباب الخاص بهم",
    keywords: ["neue Spieler = لاعبون جدد", "eigenen Jugendmannschaft = فريق شباب خاص", "kommen = يأتون"],
    simplified: "يتم ضم لاعبين من شباب النادي",
    imagine: "تخيل لاعباً شاباً ينضم للفريق 🧒"
};
HELP_DATA["hoeren2_exam18_q7"] = {
    text: "Roland Wünschmann kann seinen Beruf und sein Ehrenamt als Fußballtrainer problemlos miteinander vereinbaren.",
    meaning: "يمكن لرولاند فونشمان التوفيق بين مهنته وعمله التطوعي كمدرب كرة قدم دون مشاكل",
    keywords: ["Ehrenamt = عمل تطوعي", "vereinbaren = التوفيق", "problemlos = دون مشاكل"],
    simplified: "الموازنة بين العمل والتطوع سهلة بالنسبة له",
    imagine: "تخيل شخصاً يدير وقتين ⏰"
};
HELP_DATA["hoeren2_exam18_q9"] = {
    text: "Der Vereinsvorstand schätzt Herrn Wünschmanns Arbeit.",
    meaning: "مجلس إدارة النادي يقدر عمل السيد فونشمان",
    keywords: ["Vereinsvorstand = مجلس إدارة النادي", "schätzt = يقدر", "Arbeit = عمل"],
    simplified: "عمله يحظى بالتقدير",
    imagine: "تخيل تصفيق 👏"
};
HELP_DATA["hoeren2_exam18_q10"] = {
    text: "Roland Wünschmann ist mit der bisherigen Nachwuchsförderung des Vereins zufrieden.",
    meaning: "رولاند فونشمان راضٍ عن دعم الشباب في النادي حتى الآن",
    keywords: ["Nachwuchsförderung = دعم الشباب", "zufrieden = راضٍ", "bisherigen = حتى الآن"],
    simplified: "راضٍ عن دعم النادي للشباب",
    imagine: "تخيل لاعباً شاباً يتدرب 👟"
};

// ========== Exam 19: Roland (aufsteigen) (صحيح: 3,4,7,9) ==========
HELP_DATA["hoeren2_exam19_q3"] = {
    text: "Zu Beginn dieser Saison hat ein Spieler Viktoria Köln verlassen.",
    meaning: "في بداية هذا الموسم، غادر لاعب فيكتوريا كولن",
    keywords: ["Beginn = بداية", "Saison = موسم", "verlassen = غادر"],
    simplified: "لاعب واحد غادر الفريق",
    imagine: "تخيل لاعباً يغادر النادي 🚶"
};
HELP_DATA["hoeren2_exam19_q4"] = {
    text: "Neue Spieler kommen bei Viktoria Köln immer aus der eigenen Jugendmannschaft.",
    meaning: "اللاعبون الجدد في فيكتوريا كولن يأتون دائماً من فريق الشباب الخاص بهم",
    keywords: ["neue Spieler = لاعبون جدد", "eigenen Jugendmannschaft = فريق شباب خاص", "kommen = يأتون"],
    simplified: "يتم ضم لاعبين من شباب النادي",
    imagine: "تخيل لاعباً شاباً ينضم للفريق 🧒"
};
HELP_DATA["hoeren2_exam19_q7"] = {
    text: "Roland Wünschmann kann seinen Beruf und sein Ehrenamt als Fußballtrainer miteinander vereinbaren.",
    meaning: "يمكن لرولاند فونشمان التوفيق بين مهنته وعمله التطوعي كمدرب كرة قدم",
    keywords: ["Ehrenamt = عمل تطوعي", "vereinbaren = التوفيق", "miteinander = معاً"],
    simplified: "يستطيع التوفيق بين العمل والتطوع",
    imagine: "تخيل شخصاً يدير وقتين ⏰"
};
HELP_DATA["hoeren2_exam19_q9"] = {
    text: "Der Vereinsvorstand schätzt Herrn Wünschmanns Arbeit.",
    meaning: "مجلس إدارة النادي يقدر عمل السيد فونشمان",
    keywords: ["Vereinsvorstand = مجلس إدارة النادي", "schätzt = يقدر", "Arbeit = عمل"],
    simplified: "عمله يحظى بالتقدير",
    imagine: "تخيل تصفيق 👏"
};

// ========== Exam 20: Roland (einer höheren Lige) (صحيح: 2,3,5,8,9) ==========
HELP_DATA["hoeren2_exam20_q2"] = {
    text: "Viktoria Köln spielt seit Beginn der Saison in einer höheren Lige.",
    meaning: "فيكتوريا كولن تلعب في دوري أعلى منذ بداية الموسم",
    keywords: ["Beginn der Saison = بداية الموسم", "höheren Lige = دوري أعلى", "spielt = تلعب"],
    simplified: "الفريق صعد إلى دوري أعلى",
    imagine: "تخيل فريقاً يلعب في دوري ممتاز ⬆️"
};
HELP_DATA["hoeren2_exam20_q3"] = {
    text: "Die meisten Spieler der Mannschaft haben schon in der letzten Saison bei Viktoria Köln gespielt.",
    meaning: "معظم لاعبي الفريق لعبوا بالفعل في الموسم الماضي مع فيكتوريا كولن",
    keywords: ["meisten Spieler = معظم اللاعبين", "letzten Saison = الموسم الماضي", "gespielt = لعبوا"],
    simplified: "التشكيلة الأساسية بقيت كما هي",
    imagine: "تخيل فريقاً متماسكاً 🤝"
};
HELP_DATA["hoeren2_exam20_q5"] = {
    text: "Die Mannschaft von Viktoria Köln möchte in dieser Saison neue Spieltaktiken ausprobieren.",
    meaning: "فريق فيكتوريا كولن يريد تجربة تكتيكات لعب جديدة هذا الموسم",
    keywords: ["Spieltaktiken = تكتيكات لعب", "ausprobieren = تجربة", "dieser Saison = هذا الموسم"],
    simplified: "سيجربون أساليب جديدة في اللعب",
    imagine: "تخيل مدرباً يخطط لتكتيك جديد 📋"
};
HELP_DATA["hoeren2_exam20_q8"] = {
    text: "Roland Wünschmanns Frau engagiert sich für denselben Verein.",
    meaning: "زوجة رولاند فونشمان تشارك في نفس النادي",
    keywords: ["Frau = زوجة", "engagiert sich = تشارك", "denselben Verein = نفس النادي"],
    simplified: "الزوجة تشارك أيضاً في النادي",
    imagine: "تخيل زوجين يعملان معاً 👫"
};
HELP_DATA["hoeren2_exam20_q9"] = {
    text: "Herr Wünschmann und der Vereinsvorstand sind meistens einer Meinung.",
    meaning: "السيد فونشمان ومجلس إدارة النادي متفقان في الرأي غالباً",
    keywords: ["Vereinsvorstand = مجلس إدارة النادي", "einer Meinung = في رأي واحد", "meistens = غالباً"],
    simplified: "هناك توافق بينهما في الرأي",
    imagine: "تخيل شخصين يتصافحان 🤝"
};

// ========== Exam 22: Herr Scherer (صحيح: 3,4,10) ==========
HELP_DATA["hoeren2_exam22_q3"] = {
    text: "Herr Scherer hat wechselnde Arbeitszeiten.",
    meaning: "السيد شيرر لديه ساعات عمل متغيرة",
    keywords: ["wechselnde = متغيرة", "Arbeitszeiten = ساعات عمل", "hat = لديه"],
    simplified: "ساعات عمله ليست ثابتة",
    imagine: "تخيل ساعة متغيرة ⏰"
};
HELP_DATA["hoeren2_exam22_q4"] = {
    text: "Verspätungen gehen häufig auf das Konto undisziplinierter Fahrgäste.",
    meaning: "التأخيرات تعود غالباً إلى الركاب غير المنضبطين",
    keywords: ["Verspätungen = تأخيرات", "undisziplinierter Fahrgäste = ركاب غير منضبطين", "gehen auf das Konto = تعود إلى"],
    simplified: "الركاب غير المنضبطين يسببون التأخير",
    imagine: "تخيل حافلة متأخرة 🚌"
};
HELP_DATA["hoeren2_exam22_q10"] = {
    text: "Herr Scherer hat bei der Post 15 Jahre in Nachtschicht gearbeitet.",
    meaning: "عمل السيد شيرر في البريد لمدة 15 سنة في الوردية الليلية",
    keywords: ["Post = بريد", "15 Jahre = 15 سنة", "Nachtschicht = وردية ليلية"],
    simplified: "عمل في الوردية الليلية في البريد",
    imagine: "تخيل شخصاً يعمل ليلاً 🌙"
};

// ========== Exam 23: Beim Wettkampf (صحيح: 1,2,4,6) ==========
HELP_DATA["hoeren2_exam23_q1"] = {
    text: "Beim Wettkampf auf Sylt gibt es mehr Zuschauer als bei anderen Surf-Wettkämpfen.",
    meaning: "في المسابقة في زيلت، هناك مشجعون أكثر من مسابقات ركوب الأمواج الأخرى",
    keywords: ["Wettkampf = مسابقة", "Sylt = زيلت", "mehr Zuschauer = مشجعون أكثر"],
    simplified: "زيلت تجذب جمهوراً أكبر",
    imagine: "تخيل جمهوراً يهتف 📣"
};
HELP_DATA["hoeren2_exam23_q2"] = {
    text: "Die Wind-Bedingungen sind auf Sylt sehr unberechenbar.",
    meaning: "ظروف الرياح في زيلت لا يمكن التنبؤ بها جداً",
    keywords: ["Wind-Bedingungen = ظروف رياح", "unberechenbar = لا يمكن التنبؤ", "auf Sylt = في زيلت"],
    simplified: "الرياح متقلبة في زيلت",
    imagine: "تخيل أمواجاً قوية 🌊"
};
HELP_DATA["hoeren2_exam23_q4"] = {
    text: "Im Freestyle hat er schon starke Gegner, die viel jünger sind als er.",
    meaning: "في الفري ستايل لديه خصوم أقوياء أصغر منه سناً بكثير",
    keywords: ["Freestyle = فري ستايل", "starke Gegner = خصوم أقوياء", "viel jünger = أصغر بكثير"],
    simplified: "لديه منافسون أصغر منه سناً",
    imagine: "تخيل متسابقين شباب 🏄"
};
HELP_DATA["hoeren2_exam23_q6"] = {
    text: "Sein Hobby ist, solche Strände zu suchen, wo sich im Windsurfen noch niemand ausprobiert hat.",
    meaning: "هوايته هي البحث عن شواطئ لم يجرب أحد فيها ركوب الأمواج بالرياح بعد",
    keywords: ["Hobby = هواية", "Strände = شواطئ", "ausprobiert hat = جرب"],
    simplified: "يحب استكشاف شواطئ جديدة",
    imagine: "تخيل شاطئاً جديداً 🏖️"
};

// ========== Exam 24: Vanessa (صحيح: 2,3,4,6,8,10) ==========
HELP_DATA["hoeren2_exam24_q2"] = {
    text: "Mit den Arbeitsbedingungen in der Werbeagentur war Vanessa unzufrieden.",
    meaning: "كانت فانيسا غير راضية عن ظروف العمل في وكالة الإعلانات",
    keywords: ["Arbeitsbedingungen = ظروف عمل", "Werbeagentur = وكالة إعلانات", "unzufrieden = غير راضية"],
    simplified: "ظروف العمل لم ترضها",
    imagine: "تخيل شخصاً غير سعيد في مكتبه 😞"
};
HELP_DATA["hoeren2_exam24_q3"] = {
    text: "Wenn Vanessa unter Menschen ist, schadet das manchmal ihrer Konzentration.",
    meaning: "عندما تكون فانيسا بين الناس، فإن ذلك يضر أحياناً بتركيزها",
    keywords: ["unter Menschen = بين الناس", "schadet = يضر", "Konzentration = تركيز"],
    simplified: "التواجد بين الناس يؤثر على تركيزها",
    imagine: "تخيل شخصاً في مكان مزدحم 🚇"
};
HELP_DATA["hoeren2_exam24_q4"] = {
    text: "Die Sicherheit, die eine feste Stelle bietet, bedeutet Vanessa nicht viel.",
    meaning: "الأمان الذي توفره وظيفة دائمة لا يعني الكثير بالنسبة لفانيسا",
    keywords: ["Sicherheit = أمان", "feste Stelle = وظيفة دائمة", "bedeutet nicht viel = لا يعني الكثير"],
    simplified: "الأمان الوظيفي ليس مهماً لها",
    imagine: "تخيل شخصاً يفضل الحرية 🕊️"
};
HELP_DATA["hoeren2_exam24_q6"] = {
    text: "Dass sie immer wieder neue Auftraggeber suchen muss, hat für Vanessa auch Vorteile.",
    meaning: "أن عليها البحث مراراً عن عملاء جدد، له أيضاً مزايا بالنسبة لفانيسا",
    keywords: ["Auftraggeber = عملاء", "suchen = البحث", "Vorteile = مزايا"],
    simplified: "البحث عن عملاء جدد له جوانب إيجابية",
    imagine: "تخيل شخصاً يتواصل مع عملاء جدد 📞"
};
HELP_DATA["hoeren2_exam24_q8"] = {
    text: "Es fiel Vanessa leicht, sich von persönlichen Gegenständen zu trennen.",
    meaning: "كان من السهل على فانيسا التخلي عن الأشياء الشخصية",
    keywords: ["fiel leicht = كان سهلاً", "sich zu trennen = التخلي عن", "persönlichen Gegenständen = أشياء شخصية"],
    simplified: "لم تجد صعوبة في التخلي عن ممتلكاتها",
    imagine: "تخيل شخصاً يتخلص من أشياء قديمة 🗑️"
};
HELP_DATA["hoeren2_exam24_q10"] = {
    text: "Auch wer ortsunabhängig arbeitet, sollte nicht zu oft den Ort wechseln.",
    meaning: "حتى من يعمل بشكل مستقل عن المكان، لا ينبغي أن يغير المكان كثيراً",
    keywords: ["ortsunabhängig = مستقل عن المكان", "zu oft = كثيراً", "Ort wechseln = تغيير المكان"],
    simplified: "تغيير المكان بكثرة ليس فكرة جيدة",
    imagine: "تخيل شخصاً ينتقل كثيراً 🚚"
};

// ========== Exam 25: Zu Beginn (صحيح: 1,2,3,4,6,8,9) ==========
HELP_DATA["hoeren2_exam25_q1"] = {
    text: "Zu Beginn der Sendung hatte der Reporter ein exklusives Frühstücksrezept erwartet.",
    meaning: "في بداية البرنامج، توقع المراسل وصفة إفطار حصرية",
    keywords: ["Beginn = بداية", "Sendung = برنامج", "Frühstücksrezept = وصفة إفطار"],
    simplified: "توقع وصفة إفطار خاصة",
    imagine: "تخيل طبق إفطار 🍳"
};
HELP_DATA["hoeren2_exam25_q2"] = {
    text: "Ole hat sich vor 17 Jahren selbstständig gemacht.",
    meaning: "أولى أسس عمله الخاص منذ 17 عاماً",
    keywords: ["vor 17 Jahren = منذ 17 عاماً", "selbstständig gemacht = أسس عمله الخاص"],
    simplified: "بدأ عمله الخاص منذ 17 عاماً",
    imagine: "تخيل رجل أعمال 💼"
};
HELP_DATA["hoeren2_exam25_q3"] = {
    text: "Davor hatte er eine Lehre als Koch absolviert.",
    meaning: "قبل ذلك، أكمل تدريباً مهنياً كطاهي",
    keywords: ["Davor = قبل ذلك", "Lehre = تدريب مهني", "als Koch = كطاهي"],
    simplified: "تدرب كطاهٍ من قبل",
    imagine: "تخيل طاهياً يرتدي قبعة 👨‍🍳"
};
HELP_DATA["hoeren2_exam25_q4"] = {
    text: "Er bevorzugt Gerichte ohne Fleisch.",
    meaning: "يفضل الأطباق الخالية من اللحوم",
    keywords: ["bevorzugt = يفضل", "Gerichte = أطباق", "ohne Fleisch = بدون لحم"],
    simplified: "لا يحب أكل اللحوم",
    imagine: "تخيل طبق نباتي 🥗"
};
HELP_DATA["hoeren2_exam25_q6"] = {
    text: "Er kocht für Musiker, die auf Tournee sind.",
    meaning: "يطبخ للموسيقيين الذين في جولة",
    keywords: ["kocht = يطبخ", "Musiker = موسيقيين", "auf Tournee = في جولة"],
    simplified: "يطبخ للفنانين المتجولين",
    imagine: "تخيل طباخاً لحفلة موسيقية 🎵"
};
HELP_DATA["hoeren2_exam25_q8"] = {
    text: "Ole nimmt eine komplette Kücheneinrichtung mit auf Tournee.",
    meaning: "أولى يأخذ معدات مطبخ كاملة معه في الجولة",
    keywords: ["komplette Kücheneinrichtung = معدات مطبخ كاملة", "nimmt mit = يأخذ مع", "auf Tournee = في الجولة"],
    simplified: "يأخذ معه كل ما يحتاجه للطبخ",
    imagine: "تخيل مطبخاً متنقلاً 🚐"
};
HELP_DATA["hoeren2_exam25_q9"] = {
    text: "Er macht sich über den Sender lustig, weil der Reporter bei englischen Wörtern nachfragt.",
    meaning: "يسخر من المحطة لأن المراسل يسأل عن الكلمات الإنجليزية",
    keywords: ["macht sich lustig = يسخر", "Sender = محطة", "nachfragt = يسأل"],
    simplified: "يسخر من المراسل لجهله بالإنجليزية",
    imagine: "تخيل شخصاً يضحك 😂"
};

// ========== Exam 26: Die TU Dresden (صحيح: 3,5,7,8,10) ==========
HELP_DATA["hoeren2_exam26_q3"] = {
    text: "Ältere Studierende kümmern sich um neue Studierende.",
    meaning: "الطلاب الأكبر سناً يعتنون بالطلاب الجدد",
    keywords: ["Ältere Studierende = طلاب أكبر سناً", "kümmern sich = يعتنون", "neue Studierende = طلاب جدد"],
    simplified: "هناك نظام دعم للطلاب الجدد",
    imagine: "تخيل طلاباً يتعاونون 🤝"
};
HELP_DATA["hoeren2_exam26_q5"] = {
    text: "Jens ist nicht sicher, ob er nach dem Studium einen interessanten Job bekommt.",
    meaning: "ينس غير متأكد مما إذا كان سيحصل على وظيفة شيقة بعد الدراسة",
    keywords: ["nicht sicher = غير متأكد", "interessanten Job = وظيفة شيقة", "nach dem Studium = بعد الدراسة"],
    simplified: "قلق من مستقبله المهني",
    imagine: "تخيل شخصاً يبحث عن عمل 🔍"
};
HELP_DATA["hoeren2_exam26_q7"] = {
    text: "Mit dem Semesterticket dürfen Studierende öffentliche Verkehrsmittel in Dresden nutzen.",
    meaning: "بتذكرة الفصل الدراسي، يُسمح للطلاب باستخدام وسائل النقل العام في دريسدن",
    keywords: ["Semesterticket = تذكرة فصل دراسي", "öffentliche Verkehrsmittel = وسائل نقل عام", "nutzen = استخدام"],
    simplified: "التذكرة تشمل وسائل النقل العام",
    imagine: "تخيل بطاقة مواصلات 🎫"
};
HELP_DATA["hoeren2_exam26_q8"] = {
    text: "Für Studienanfänger gibt es die Möglichkeit, bestimmte Grundkenntnisse aufzufrischen.",
    meaning: "للطلاب الجدد هناك إمكانية لتحديث معارف أساسية معينة",
    keywords: ["Studienanfänger = طلاب جدد", "Grundkenntnisse = معارف أساسية", "aufzufrischen = تحديث"],
    simplified: "يوجد دورات لتقوية الأساسيات",
    imagine: "تخيل طالباً يذاكر 📖"
};
HELP_DATA["hoeren2_exam26_q10"] = {
    text: "An der TU Dresden kann man auch außergewöhnliche Sportarten treiben.",
    meaning: "في جامعة دريسدن التقنية يمكن ممارسة رياضات غير عادية أيضاً",
    keywords: ["außergewöhnliche Sportarten = رياضات غير عادية", "kann man = يمكن للمرء", "treiben = ممارسة"],
    simplified: "يوجد رياضات متنوعة",
    imagine: "تخيل طالباً يمارس رياضة ⚽"
};

// ============================================
// Hören Teil 3
// ============================================

// ========== Exam 1: Telefon (صحيح: 1) ==========
HELP_DATA["hoeren3_exam1_q1"] = {
    text: "Bei der Deutschen Telefon KG bekommen Sie nur Auskunft zu Telefonapparaten dieses Unternehmens.",
    meaning: "في شركة Deutsche Telefon KG تحصل فقط على معلومات حول أجهزة الهاتف الخاصة بهذه الشركة",
    keywords: ["Deutsche Telefon KG = شركة الهاتف الألمانية", "Auskunft = معلومات", "Telefonapparaten = أجهزة هاتف"],
    simplified: "الخدمة مخصصة لمنتجات الشركة فقط",
    imagine: "تخيل شخصاً يتصل لسؤال عن هاتف 📞"
};

// ========== Exam 2: Musikfestivals (صحيح: 1,3) ==========
HELP_DATA["hoeren3_exam2_q1"] = {
    text: "Während des Musikfestivals 'Sound of Frankfurt' gibt es verbilligte Fahrkarten für alle öffentlichen Verkehrsmittel.",
    meaning: "خلال مهرجان 'صوت فرانكفورت' الموسيقي، هناك تذاكر مخفضة لجميع وسائل النقل العام",
    keywords: ["Musikfestivals = مهرجان موسيقي", "verbilligte Fahrkarten = تذاكر مخفضة", "öffentlichen Verkehrsmittel = وسائل نقل عام"],
    simplified: "تذاكر النقل العام تصبح أرخص خلال المهرجان",
    imagine: "تخيل بطاقة مواصلات مخفضة 🎫"
};
HELP_DATA["hoeren3_exam2_q3"] = {
    text: "Am Wochenende können Sie sich in Naumburg über die Bekämpfung von Krankheiten bei Apfelbäumen informieren.",
    meaning: "في عطلة نهاية الأسبوع يمكنك في Naumburg الاستعلام عن مكافحة أمراض أشجار التفاح",
    keywords: ["Wochenende = عطلة نهاية الأسبوع", "Naumburg = ناومبورغ", "Krankheiten = أمراض", "Apfelbäumen = أشجار تفاح"],
    simplified: "يوجد حدث توعوي عن أمراض التفاح في ناومبورغ",
    imagine: "تخيل تفاحة مصابة بمرض 🍎"
};

// ========== Exam 3: Musikfestivals (Mittel) (صحيح: 1,3) ==========
HELP_DATA["hoeren3_exam3_q1"] = {
    text: "Geschäftsreisende werden gebeten, Mietwagen unter der Nummer 3223 zu buchen.",
    meaning: "يُطلب من رجال الأعمال المسافرين حجز السيارات المستأجرة عبر الرقم 3223",
    keywords: ["Geschäftsreisende = مسافرو أعمال", "Mietwagen = سيارات مستأجرة", "Nummer 3223 = رقم 3223"],
    simplified: "رقم خاص لحجز السيارات لرجال الأعمال",
    imagine: "تخيل شخصاً يحجز سيارة عبر الهاتف 🚗"
};
HELP_DATA["hoeren3_exam3_q3"] = {
    text: "Am Wochenende können Sie sich in Naumburg über die Bekämpfung von Krankheiten bei Apfelbäumen informieren.",
    meaning: "في عطلة نهاية الأسبوع يمكنك في Naumburg الاستعلام عن مكافحة أمراض أشجار التفاح",
    keywords: ["Wochenende = عطلة نهاية الأسبوع", "Naumburg = ناومبورغ", "Krankheiten = أمراض", "Apfelbäumen = أشجار تفاح"],
    simplified: "يوجد حدث توعوي عن أمراض التفاح في ناومبورغ",
    imagine: "تخيل تفاحة مصابة بمرض 🍎"
};

// ========== Exam 4: Fahrschule (صحيح: 1,4) ==========
HELP_DATA["hoeren3_exam4_q1"] = {
    text: "Bei der Fahrschule kann man sich über das Internet anmelden.",
    meaning: "في مدرسة تعليم القيادة يمكن التسجيل عبر الإنترنت",
    keywords: ["Fahrschule = مدرسة قيادة", "über das Internet = عبر الإنترنت", "anmelden = التسجيل"],
    simplified: "التسجيل متاح أونلاين",
    imagine: "تخيل شخصاً يسجل في مدرسة قيادة عبر الكمبيوتر 💻"
};
HELP_DATA["hoeren3_exam4_q4"] = {
    text: "Bei dem Flug nach Mallorca ändert sich die Abflugzeit.",
    meaning: "في الرحلة إلى مايوركا، يتغير موعد الإقلاع",
    keywords: ["Flug = رحلة", "Mallorca = مايوركا", "Abflugzeit = موعد إقلاع", "ändert sich = يتغير"],
    simplified: "وقت إقلاع الرحلة إلى مايوركا تغير",
    imagine: "تخيل ساعة طائرة تتغير 🕛✈️"
};

// ========== Exam 5: Im Süden Deutschlands regnen (صحيح: 1,4) ==========
HELP_DATA["hoeren3_exam5_q1"] = {
    text: "Im Süden Deutschlands wird es nachmittags regnen.",
    meaning: "في جنوب ألمانيا ستمطر بعد الظهر",
    keywords: ["Süden Deutschlands = جنوب ألمانيا", "nachmittags = بعد الظهر", "regnen = تمطر"],
    simplified: "الأمطار مساءً في جنوب ألمانيا",
    imagine: "تخيل مطراً يهطل بعد الظهر 🌧️"
};
HELP_DATA["hoeren3_exam5_q4"] = {
    text: "Wenn Sie über Ihre Autoversicherung sprechen wollen, müssen Sie die 1 wählen.",
    meaning: "إذا كنت تريد التحدث عن تأمين سيارتك، يجب أن تطلب الرقم 1",
    keywords: ["Autoversicherung = تأمين سيارة", "sprechen = التحدث", "die 1 wählen = طلب الرقم 1"],
    simplified: "الرقم 1 خاص بتأمين السيارات",
    imagine: "تخيل لوحة مفاتيح هاتف 🔢"
};

// ========== Exam 6: Im Süden Deutschlands Schnee (صحيح: 1,5) ==========
HELP_DATA["hoeren3_exam6_q1"] = {
    text: "Morgen muss man im Süden Deutschlands mit Schnee rechnen.",
    meaning: "غداً يجب توقع الثلوج في جنوب ألمانيا",
    keywords: ["Morgen = غداً", "Süden Deutschlands = جنوب ألمانيا", "Schnee = ثلج", "rechnen = توقع"],
    simplified: "ثلوج متوقعة غداً في الجنوب",
    imagine: "تخيل ثلوجاً تتساقط ❄️"
};
HELP_DATA["hoeren3_exam6_q5"] = {
    text: "Die historische elektrische Eisenbahn wird im Dezember wie gewohnt fahren.",
    meaning: "السكة الحديدية الكهربائية التاريخية ستعمل كالمعتاد في ديسمبر",
    keywords: ["historische elektrische Eisenbahn = سكة حديد كهربائية تاريخية", "Dezember = ديسمبر", "wie gewohnt = كالمعتاد"],
    simplified: "القطار الكهربائي القديم يعمل في ديسمبر",
    imagine: "تخيل قطاراً قديماً 🚂"
};

// ========== Exam 7: Internet prüfen (صحيح: 1,5) ==========
HELP_DATA["hoeren3_exam7_q1"] = {
    text: "Sie können im Internet prüfen, ob Ihre aktuelle Bestellung schon unterwegs ist.",
    meaning: "يمكنك التحقق عبر الإنترنت ما إذا كان طلبك الحالي قد تم شحنه",
    keywords: ["Internet = إنترنت", "prüfen = التحقق", "Bestellung = طلب", "unterwegs = في الطريق"],
    simplified: "تتبع الطلب متاح عبر الإنترنت",
    imagine: "تخيل شخصاً يتتبع طلباً على الكمبيوتر 📦"
};
HELP_DATA["hoeren3_exam7_q5"] = {
    text: "Wer ein wichtiges Anliegen hat, soll eine andere Nummer wählen.",
    meaning: "من لديه أمر مهم، يجب أن يتصل برقم آخر",
    keywords: ["wichtiges Anliegen = أمر مهم", "andere Nummer = رقم آخر", "wählen = الاتصال"],
    simplified: "رقم خاص للحالات المهمة",
    imagine: "تخيل شخصاً يتصل برقم طوارئ 📞"
};

// ========== Exam 8: Ehrenamts (صحيح: 1,5) ==========
HELP_DATA["hoeren3_exam8_q1"] = {
    text: "Man kann am 'Tag des Ehrenamts' probeweise mithelfen.",
    meaning: "يمكن للمرء المساعدة تجريبياً في 'يوم التطوع'",
    keywords: ["Tag des Ehrenamts = يوم التطوع", "probeweise = تجريبياً", "mithelfen = المساعدة"],
    simplified: "فرصة لتجربة العمل التطوعي",
    imagine: "تخيل شخصاً يتطوع للمساعدة 🤝"
};
HELP_DATA["hoeren3_exam8_q5"] = {
    text: "Wenn man das Training ausprobieren möchte, muss man vorher Bescheid sagen.",
    meaning: "إذا أراد المرء تجربة التدريب، يجب أن يخبر مسبقاً",
    keywords: ["Training = تدريب", "ausprobieren = تجربة", "vorher Bescheid sagen = إخبار مسبقاً"],
    simplified: "التسجيل المسبق مطلوب لتجربة التدريب",
    imagine: "تخيل شخصاً يسجل في دورة تدريبية 📝"
};

// ========== Exam 9: Ehrenamts (Mittel) (صحيح: 1,5) ==========
HELP_DATA["hoeren3_exam9_q1"] = {
    text: "Man kann am 'Tag des Ehrenamts' probeweise mithelfen.",
    meaning: "يمكن للمرء المساعدة تجريبياً في 'يوم التطوع'",
    keywords: ["Tag des Ehrenamts = يوم التطوع", "probeweise = تجريبياً", "mithelfen = المساعدة"],
    simplified: "فرصة لتجربة العمل التطوعي",
    imagine: "تخيل شخصاً يتطوع للمساعدة 🤝"
};
HELP_DATA["hoeren3_exam9_q5"] = {
    text: "Wenn man das Training ausprobieren möchte, sollte man vorher Bescheid sagen.",
    meaning: "إذا أراد المرء تجربة التدريب، يجب أن يخبر مسبقاً",
    keywords: ["Training = تدريب", "ausprobieren = تجربة", "vorher Bescheid sagen = إخبار مسبقاً"],
    simplified: "التسجيل المسبق مطلوب لتجربة التدريب",
    imagine: "تخيل شخصاً يسجل في دورة تدريبية 📝"
};

// ========== Exam 10: Demonstration (صحيح: 2,5) ==========
HELP_DATA["hoeren3_exam10_q2"] = {
    text: "In der kommenden Saison wird eine Symphonie von Mahler aufgeführt.",
    meaning: "في الموسم القادم سيتم تقديم سيمفونية لمالر",
    keywords: ["kommenden Saison = الموسم القادم", "Symphonie = سيمفونية", "Mahler = مالر", "aufgeführt = تقديم"],
    simplified: "حفل سيمفونية لمالر قادم",
    imagine: "تخيل أوركسترا تعزف 🎵"
};
HELP_DATA["hoeren3_exam10_q5"] = {
    text: "Für die Vermittlung einer Mitfahrgelegenheit per E-Mail erhebt 'fahre mit' keine Gebühren.",
    meaning: "لتوفير فرصة مشاركة سيارة عبر البريد الإلكتروني، لا تفرض 'fahre mit' أي رسوم",
    keywords: ["Mitfahrgelegenheit = مشاركة سيارة", "per E-Mail = عبر البريد الإلكتروني", "keine Gebühren = لا رسوم"],
    simplified: "خدمة مشاركة السيارة مجانية عبر البريد",
    imagine: "تخيل سيارة وأشخاص يسافرون معاً 🚗👥"
};

// ========== Exam 11: Wochenanfang (صحيح: 1,2,3) ==========
HELP_DATA["hoeren3_exam11_q1"] = {
    text: "Am Wochenanfang soll man einen Aufenthalt im Freien vermeiden.",
    meaning: "في بداية الأسبوع يجب تجنب البقاء في الهواء الطلق",
    keywords: ["Wochenanfang = بداية الأسبوع", "Aufenthalt im Freien = البقاء في الهواء الطلق", "vermeiden = تجنب"],
    simplified: "لا تخرج كثيراً في بداية الأسبوع",
    imagine: "تخيل شخصاً يبقى في المنزل 🏠"
};
HELP_DATA["hoeren3_exam11_q2"] = {
    text: "Abends ist das Risiko, einen Wildunfall zu haben, am größten.",
    meaning: "مساءً، خطر حوادث الطرق مع الحيوانات البرية يكون في أعلى مستوياته",
    keywords: ["Abends = مساءً", "Risiko = خطر", "Wildunfall = حادث مع حيوانات برية", "am größten = الأعلى"],
    simplified: "احذر الحيوانات البرية على الطرق مساءً",
    imagine: "تخيل غزالاً يعبر الطريق 🦌"
};
HELP_DATA["hoeren3_exam11_q3"] = {
    text: "Man kann bei dem Fest an verschiedenen Orten Musik hören.",
    meaning: "يمكن في المهرجان الاستماع إلى الموسيقى في أماكن مختلفة",
    keywords: ["Fest = مهرجان", "verschiedenen Orten = أماكن مختلفة", "Musik hören = الاستماع إلى الموسيقى"],
    simplified: "الموسيقى في عدة أماكن خلال المهرجان",
    imagine: "تخيل مهرجاناً موسيقياً 🎤"
};

// ========== Exam 12: Im August (صحيح: 3,4) ==========
HELP_DATA["hoeren3_exam12_q3"] = {
    text: "In weniger dringlichen Fällen soll man eine Nachricht hinterlassen.",
    meaning: "في الحالات الأقل إلحاحاً، يجب ترك رسالة",
    keywords: ["weniger dringlichen Fällen = حالات أقل إلحاحاً", "Nachricht = رسالة", "hinterlassen = ترك"],
    simplified: "اترك رسالة للحالات غير العاجلة",
    imagine: "تخيل شخصاً يترك رسالة على جهاز الرد 📝"
};
HELP_DATA["hoeren3_exam12_q4"] = {
    text: "Am Mittwoch und Donnerstag können Sie Sachspenden vorbeibringen.",
    meaning: "يوم الأربعاء والخميس يمكنك إحضار تبرعات عينية",
    keywords: ["Mittwoch = الأربعاء", "Donnerstag = الخميس", "Sachspenden = تبرعات عينية", "vorbeibringen = إحضار"],
    simplified: "أيام الأربعاء والخميس مخصصة للتبرعات",
    imagine: "تخيل صندوق تبرعات 📦"
};

// ========== Exam 13: Fundbüro (صحيح: 1,2,5) ==========
HELP_DATA["hoeren3_exam13_q1"] = {
    text: "Sie müssen nicht persönlich beim Fundbüro nachfragen.",
    meaning: "لا تحتاج إلى الاستفسار شخصياً في مكتب المفقودات",
    keywords: ["persönlich = شخصياً", "Fundbüro = مكتب مفقودات", "nachfragen = الاستفسار"],
    simplified: "يمكن الاستفسار عن المفقودات دون حضور شخصي",
    imagine: "تخيل شخصاً يتصل بمكتب المفقودات 📞"
};
HELP_DATA["hoeren3_exam13_q2"] = {
    text: "Die Wettervorhersage können Sie nach den Mittagsnachrichten hören.",
    meaning: "يمكنك سماع توقعات الطقس بعد نشرة أخبار الظهيرة",
    keywords: ["Wettervorhersage = توقعات طقس", "Mittagsnachrichten = أخبار الظهيرة", "hören = سماع"],
    simplified: "توقعات الطقس بعد أخبار الظهر",
    imagine: "تخيل مذيع طقس على التلفاز 🌡️"
};
HELP_DATA["hoeren3_exam13_q5"] = {
    text: "Während der Sperrung kann man die üblichen Bushaltestellen benutzen.",
    meaning: "خلال فترة الإغلاق، يمكن استخدام محطات الحافلات المعتادة",
    keywords: ["Sperrung = إغلاق", "üblichen Bushaltestellen = محطات حافلات معتادة", "benutzen = استخدام"],
    simplified: "محطات الحافلات تعمل كالمعتاد رغم الإغلاق",
    imagine: "تخيل حافلة في محطتها 🚌"
};

// ========== Exam 14: Ausgang 26 (صحيح: 1,4,5) ==========
HELP_DATA["hoeren3_exam14_q1"] = {
    text: "Sie sollen zum Ausgang 26 kommen.",
    meaning: "يجب أن تأتي إلى المخرج 26",
    keywords: ["Ausgang 26 = مخرج 26", "kommen = المجيء"],
    simplified: "اتجه إلى المخرج 26",
    imagine: "تخيل لافتة في مطار تشير إلى مخرج 26 ✈️"
};
HELP_DATA["hoeren3_exam14_q4"] = {
    text: "Sie können sich am Sonntag um ein Uhr bewerben.",
    meaning: "يمكنك التقديم يوم الأحد الساعة الواحدة",
    keywords: ["Sonntag = الأحد", "um ein Uhr = الساعة الواحدة", "bewerben = التقديم"],
    simplified: "موعد التقديم يوم الأحد الساعة 1",
    imagine: "تخيل ساعة تشير إلى الواحدة 🕐"
};
HELP_DATA["hoeren3_exam14_q5"] = {
    text: "In der Bäckerstraße dürfen Sie nicht fahren.",
    meaning: "لا يسمح لك بالقيادة في شارع بيكر",
    keywords: ["Bäckerstraße = شارع بيكر", "dürfen nicht = لا يسمح", "fahren = القيادة"],
    simplified: "شارع بيكر ممنوع للقيادة",
    imagine: "تخيل لافتة ممنوع الدخول 🚫"
};

// ========== Exam 15: Ausgang 26 (Mittel) (صحيح: 1,2,5) ==========
HELP_DATA["hoeren3_exam15_q1"] = {
    text: "In der Bäckerstraße dürfen Sie nicht fahren.",
    meaning: "لا يسمح لك بالقيادة في شارع بيكر",
    keywords: ["Bäckerstraße = شارع بيكر", "dürfen nicht = لا يسمح", "fahren = القيادة"],
    simplified: "شارع بيكر ممنوع للقيادة",
    imagine: "تخيل لافتة ممنوع الدخول 🚫"
};
HELP_DATA["hoeren3_exam15_q2"] = {
    text: "Sie können sich am Sonntag um ein Uhr bewerben.",
    meaning: "يمكنك التقديم يوم الأحد الساعة الواحدة",
    keywords: ["Sonntag = الأحد", "um ein Uhr = الساعة الواحدة", "bewerben = التقديم"],
    simplified: "موعد التقديم يوم الأحد الساعة 1",
    imagine: "تخيل ساعة تشير إلى الواحدة 🕐"
};
HELP_DATA["hoeren3_exam15_q5"] = {
    text: "Sie sollen zum Ausgang 26 kommen.",
    meaning: "يجب أن تأتي إلى المخرج 26",
    keywords: ["Ausgang 26 = مخرج 26", "kommen = المجيء"],
    simplified: "اتجه إلى المخرج 26",
    imagine: "تخيل لافتة في مطار تشير إلى مخرج 26 ✈️"
};

// ========== Exam 16: Blutspenden (صحيح: 1,3,4,5) ==========
HELP_DATA["hoeren3_exam16_q1"] = {
    text: "Ihre Tochter kann am Freitag verschiedene Sportarten testen.",
    meaning: "ابنتك يمكنها يوم الجمعة تجربة رياضات مختلفة",
    keywords: ["Tochter = ابنة", "Freitag = الجمعة", "verschiedene Sportarten = رياضات مختلفة", "testen = تجربة"],
    simplified: "يوم الجمعة مخصص لتجربة الرياضات للفتيات",
    imagine: "تخيل طفلة تمارس الرياضة 👧⚽"
};
HELP_DATA["hoeren3_exam16_q3"] = {
    text: "Heute müssen Sie auf den Bus ausweichen.",
    meaning: "اليوم يجب عليك استخدام الحافلة بدلاً من ذلك",
    keywords: ["heute = اليوم", "Bus = حافلة", "ausweichen = التحويل إلى"],
    simplified: "وسيلة النقل البديلة اليوم هي الحافلة",
    imagine: "تخيل حافلة 🚌"
};
HELP_DATA["hoeren3_exam16_q4"] = {
    text: "Sie müssen das Bad früher verlassen.",
    meaning: "يجب عليك مغادرة الحمام مبكراً",
    keywords: ["Bad = حمام", "früher = مبكراً", "verlassen = مغادرة"],
    simplified: "الحمام سيغلق باكراً",
    imagine: "تخيل شخصاً يغادر الحمام 🚿"
};
HELP_DATA["hoeren3_exam16_q5"] = {
    text: "Für einen Termin müssen Sie anrufen.",
    meaning: "لحجز موعد يجب عليك الاتصال",
    keywords: ["Termin = موعد", "anrufen = الاتصال", "müssen = يجب"],
    simplified: "الاتصال الهاتفي مطلوب لحجز المواعيد",
    imagine: "تخيل شخصاً يتصل على الهاتف 📞"
};

// ========== Exam 17: Reitturnier (صحيح: 1,3) ==========
HELP_DATA["hoeren3_exam17_q1"] = {
    text: "Besucher des Reitturniers sollten möglichst Parkplätze außerhalb des Turniergeländes nutzen.",
    meaning: "زوار مسابقة الفروسية يجب عليهم استخدام مواقف السيارات خارج أرض المسابقة قدر الإمكان",
    keywords: ["Reitturnier = مسابقة فروسية", "Parkplätze = مواقف سيارات", "außerhalb = خارج", "Turniergeländes = أرض المسابقة"],
    simplified: "المواقف خارج مكان المسابقة أفضل",
    imagine: "تخيل ساحة لركوب الخيل 🐎"
};
HELP_DATA["hoeren3_exam17_q3"] = {
    text: "Bei der Berliner Museumsnacht können Sie mit einer Sonderbuslinie bequem erreichen.",
    meaning: "في ليلة المتاحف في برلين، يمكنك الوصول بسهولة عبر خط حافلات خاص",
    keywords: ["Berliner Museumsnacht = ليلة متاحف برلين", "Sonderbuslinie = خط حافلات خاص", "bequem = بسهولة"],
    simplified: "حافلة خاصة ليلة المتاحف",
    imagine: "تخيل حافلة سياحية 🚌"
};

// ========== Exam 18: Delikatessen (صحيح: 2,3,4) ==========
HELP_DATA["hoeren3_exam18_q2"] = {
    text: "Bis zum Start können Sie mit Ihrem Handy telefonieren.",
    meaning: "حتى وقت البدء، يمكنك التحدث بهاتفك المحمول",
    keywords: ["Start = بداية", "Handy = هاتف محمول", "telefonieren = التحدث"],
    simplified: "استخدام الهاتف مسموح حتى البداية",
    imagine: "تخيل شخصاً يتحدث بهاتفه 📱"
};
HELP_DATA["hoeren3_exam18_q3"] = {
    text: "Vorführungen mit Tieren werden nicht geboten.",
    meaning: "لا يتم تقديم عروض مع الحيوانات",
    keywords: ["Vorführungen = عروض", "Tieren = حيوانات", "nicht geboten = لا يتم تقديمها"],
    simplified: "لا توجد عروض حيوانات",
    imagine: "تخيل علامة ممنوع استخدام الحيوانات 🚫🐘"
};
HELP_DATA["hoeren3_exam18_q4"] = {
    text: "Am Wochenende können Sie Musik im Schloss Mirabell hören.",
    meaning: "في عطلة نهاية الأسبوع يمكنك سماع الموسيقى في قصر ميرابيل",
    keywords: ["Wochenende = عطلة نهاية الأسبوع", "Musik = موسيقى", "Schloss Mirabell = قصر ميرابيل", "hören = سماع"],
    simplified: "حفلات موسيقية في قصر ميرابيل نهاية الأسبوع",
    imagine: "تخيل قصراً وموسيقى 🏰🎵"
};

// ========== Exam 19: Für ein Konzert (Bus gratis) (صحيح: 2,4) ==========
HELP_DATA["hoeren3_exam19_q2"] = {
    text: "Man kann mit dem Bus gratis zum Fest fahren.",
    meaning: "يمكن الذهاب إلى المهرجان بالحافلة مجاناً",
    keywords: ["Bus = حافلة", "gratis = مجاناً", "Fest = مهرجان", "fahren = الذهاب"],
    simplified: "الحافلة مجانية للذهاب إلى المهرجان",
    imagine: "تخيل حافلة مكتوب عليها مجاني 🚌✨"
};
HELP_DATA["hoeren3_exam19_q4"] = {
    text: "Das Busunternehmen Schneider kündigt neue Fernbusverbindungen an.",
    meaning: "شركة الحافلات شنايدر تعلن عن خطوط حافلات مسافات طويلة جديدة",
    keywords: ["Busunternehmen = شركة حافلات", "Schneider = شنايدر", "Fernbusverbindungen = خطوط حافلات مسافات طويلة", "kündigt an = تعلن"],
    simplified: "خطوط حافلات جديدة للسفر الطويل",
    imagine: "تخيل حافلة تسافر لمسافة بعيدة 🚌🛣️"
};

// ========== Exam 20: Für ein Konzert (in der ganzen Stadt) (صحيح: 1,3) ==========
HELP_DATA["hoeren3_exam20_q1"] = {
    text: "Für ein Konzert morgen Abend kann man noch im Internet Karten kaufen.",
    meaning: "لحفل موسيقي غداً مساءً، لا يزال بإمكانك شراء التذاكر عبر الإنترنت",
    keywords: ["Konzert = حفل موسيقي", "morgen Abend = غداً مساءً", "Internet = إنترنت", "Karten kaufen = شراء تذاكر"],
    simplified: "تذاكر الحفل لا تزال متاحة أونلاين",
    imagine: "تخيل شراء تذكرة عبر الإنترنت 🎫💻"
};
HELP_DATA["hoeren3_exam20_q3"] = {
    text: "Bei dem Filmfestival werden internationale Kinderfilme gezeigt.",
    meaning: "في مهرجان الأفلام، تُعرض أفلام أطفال دولية",
    keywords: ["Filmfestival = مهرجان أفلام", "internationale Kinderfilme = أفلام أطفال دولية", "gezeigt = تُعرض"],
    simplified: "أفلام أطفال من جميع أنحاء العالم في المهرجان",
    imagine: "تخيل أطفالاً يشاهدون الفيلم 🎬👧"
};

// ========== Exam 21: In Raum C23 (صحيح: 2) ==========
HELP_DATA["hoeren3_exam21_q2"] = {
    text: "Wenn Ihre Software nicht funktioniert, erhalten Sie über das Internet Unterstützung.",
    meaning: "إذا كان برنامجك لا يعمل، يمكنك الحصول على الدعم عبر الإنترنت",
    keywords: ["Software = برنامج", "funktioniert nicht = لا يعمل", "Internet = إنترنت", "Unterstützung = دعم"],
    simplified: "الدعم التقني متاح عبر الإنترنت",
    imagine: "تخيل شخصاً يتلقى دعماً تقنياً 💻🔧"
};

// ========== Exam 22: Trainingsausfahrten (صحيح: 2,4) ==========
HELP_DATA["hoeren3_exam22_q2"] = {
    text: "Auf dem Blumenmarkt in Groningen kann man auch Gartenzubehör kaufen.",
    meaning: "في سوق الزهور في جرونينجن، يمكن أيضاً شراء لوازم الحدائق",
    keywords: ["Blumenmarkt = سوق زهور", "Groningen = جرونينجن", "Gartenzubehör = لوازم حدائق", "kaufen = شراء"],
    simplified: "سوق الزهور يوفر أيضاً مستلزمات البستنة",
    imagine: "تخيل سوقاً لبيع الزهور وأدوات البستنة 🌷"
};
HELP_DATA["hoeren3_exam22_q4"] = {
    text: "Ein Markt wird Ende Juli für Kinder bis 16 Jahre in Stuttgart veranstaltet, wo sie ihre alten Bücher und Spielzeuge verkaufen können.",
    meaning: "سوق يقام في نهاية يوليو للأطفال حتى 16 سنة في شتوتغارت، حيث يمكنهم بيع كتبهم وألعابهم القديمة",
    keywords: ["Markt = سوق", "Ende Juli = نهاية يوليو", "Kinder bis 16 Jahre = أطفال حتى 16 سنة", "Stuttgart = شتوتغارت", "alte Bücher und Spielzeuge = كتب وألعاب قديمة"],
    simplified: "سوق للأطفال لبيع أغراضهم القديمة في شتوتغارت",
    imagine: "تخيل طفلاً يبيع لعبة قديمة 🧸"
};

// ========== Exam 23: Das Geschäft (صحيح: 1,5) ==========
HELP_DATA["hoeren3_exam23_q1"] = {
    text: "Das Geschäft für österreichische Spezialitäten befindet sich in Check-in 2.",
    meaning: "متجر المنتجات النمساوية الخاصة يقع في منطقة تسجيل الوصول 2",
    keywords: ["österreichische Spezialitäten = منتجات نمساوية خاصة", "Check-in 2 = تسجيل الوصول 2", "befindet sich = يقع"],
    simplified: "المتجر النمساوي في صالة رقم 2",
    imagine: "تخيل متجراً في المطار 🏪✈️"
};
HELP_DATA["hoeren3_exam23_q5"] = {
    text: "Der Bürgermeister eröffnet das Fest.",
    meaning: "رئيس البلدية يفتتح المهرجان",
    keywords: ["Bürgermeister = رئيس بلدية", "eröffnet = يفتتح", "Fest = مهرجان"],
    simplified: "المهرجان يفتتحه رئيس البلدية",
    imagine: "تخيل شخصياً يقطع شريط الافتتاح ✂️🎀"
};

// ========== Exam 24: Nach einer Großdemonstration (صحيح: 2) ==========
HELP_DATA["hoeren3_exam24_q2"] = {
    text: "Wer bei der Wanderung keinen Rucksack mitnehmen will, kann unterwegs etwas zu essen und zu trinken bekommen.",
    meaning: "من لا يريد حمل حقيبة ظهر أثناء التنزه، يمكنه الحصول على طعام وشراب في الطريق",
    keywords: ["Wanderung = تنزه", "Rucksack = حقيبة ظهر", "mitnehmen = حمل", "essen und trinken = طعام وشراب"],
    simplified: "طعام وشراب متوفر في الطريق للتنزه",
    imagine: "تخيل شخصاً يتناول وجبة خفيفة أثناء التنزه 🥪"
};

// ========== Exam 25: Das Fest (ohne Frankfurt) (صحيح: 1,3) ==========
HELP_DATA["hoeren3_exam25_q1"] = {
    text: "Heute kann man vormittags das Fest besuchen.",
    meaning: "اليوم يمكن زيارة المهرجان في فترة ما قبل الظهر",
    keywords: ["heute = اليوم", "vormittags = قبل الظهر", "Fest = مهرجان", "besuchen = زيارة"],
    simplified: "المهرجان مفتوح صباح اليوم",
    imagine: "تخيل شمس الصباح 🌅"
};
HELP_DATA["hoeren3_exam25_q3"] = {
    text: "Jugendliche Eintrittskarten kosten 13,50 €.",
    meaning: "تذاكر الدخول للشباب تكلف 13.50 يورو",
    keywords: ["Jugendliche = شباب", "Eintrittskarten = تذاكر دخول", "kosten = تكلف", "13,50 € = 13.50 يورو"],
    simplified: "سعر تذكرة الشباب 13.50 يورو",
    imagine: "تخيل عملات يورو 💶"
};

// ========== Exam 26: Das Fest (mit Frankfurt) (صحيح: 1,3,5) ==========
HELP_DATA["hoeren3_exam26_q1"] = {
    text: "Heute kann man vormittags das Fest besuchen.",
    meaning: "اليوم يمكن زيارة المهرجان في فترة ما قبل الظهر",
    keywords: ["heute = اليوم", "vormittags = قبل الظهر", "Fest = مهرجان", "besuchen = زيارة"],
    simplified: "المهرجان مفتوح صباح اليوم",
    imagine: "تخيل شمس الصباح 🌅"
};
HELP_DATA["hoeren3_exam26_q3"] = {
    text: "Eintrittskarten für Jugendliche kosten 13,50 €.",
    meaning: "تذاكر الدخول للشباب تكلف 13.50 يورو",
    keywords: ["Jugendliche = شباب", "Eintrittskarten = تذاكر دخول", "kosten = تكلف", "13,50 € = 13.50 يورو"],
    simplified: "سعر تذكرة الشباب 13.50 يورو",
    imagine: "تخيل عملات يورو 💶"
};
HELP_DATA["hoeren3_exam26_q5"] = {
    text: "Am Sonntag können Kinder ein Theaterstück anschauen.",
    meaning: "يوم الأحد يمكن للأطفال مشاهدة مسرحية",
    keywords: ["Sonntag = الأحد", "Kinder = أطفال", "Theaterstück = مسرحية", "anschauen = مشاهدة"],
    simplified: "مسرحية للأطفال يوم الأحد",
    imagine: "تخيل أطفالاً في المسرح 🎭"
};

// ========== Exam 27: Radio Konzert (صحيح: 1,3) ==========
HELP_DATA["hoeren3_exam27_q1"] = {
    text: "Beim Klassik-Radio kann man Karten für ein Konzert in Frankfurt gewinnen.",
    meaning: "في راديو الموسيقى الكلاسيكية، يمكن ربح تذاكر لحفل موسيقي في فرانكفورت",
    keywords: ["Klassik-Radio = راديو كلاسيك", "Karten = تذاكر", "Konzert = حفل", "Frankfurt = فرانكفورت", "gewinnen = ربح"],
    simplified: "اربح تذاكر لحفل في فرانكفورت عبر الراديو",
    imagine: "تخيل مذياعاً وتذكرة حفل 📻🎫"
};
HELP_DATA["hoeren3_exam27_q3"] = {
    text: "Der Radiosender Bayern 1 informiert auf seiner Website über das Sommernachtsfest.",
    meaning: "محطة إذاعة بايرن 1 تقدم معلومات على موقعها الإلكتروني عن مهرجان ليلة الصيف",
    keywords: ["Radiosender = محطة إذاعية", "Bayern 1 = بايرن 1", "Website = موقع إلكتروني", "Sommernachtsfest = مهرجان ليلة الصيف"],
    simplified: "معلومات عن المهرجان على موقع بايرن 1",
    imagine: "تخيل موقعاً إلكترونياً لمهرجان 💻🎉"
};




// ============================================
// lesen1.js - جميع شروحات Lesen Teil 1
// ============================================


// ============================================
// Exam 1: Jugend Forscht
// ============================================

HELP_DATA["lesen1_exam1_q1"] = {
    text: "Text 1: Die Zahlen wirken auf dem ersten Blick dramatisch... eine gelbe Zucchini wird gerne mal als Banane bezeichnet.",
    meaning: "الأرقام تبدو درامية للوهلة الأولى - كوسا صفراء تُسمى بالخطأ موزة",
    keywords: ["Erdbeeren = فراولة", "Tomaten = طماطم", "Praxis = ممارسة", "Küche = مطبخ"],
    simplified: "التعرف على الفراولة والطماطم - تنقصهم الممارسة في المطبخ",
    imagine: "🧠👁️ تخيل طفل ينظر إلى فراولة (Erdbeeren) ويقول 'طماطم' (Tomaten) لأن الممارسة (Praxis) في المطبخ تنقصه 🍓→🍅"
};

HELP_DATA["lesen1_exam1_q2"] = {
    text: "Text 2: Immer mehr Mädchen leiden an schweren Essstörungen... Mit einer harmlosen Diät fängt es meist an, mit einer schweren Krankheit kann es enden.",
    meaning: "المزيد من الفتيات يعانين من اضطرابات أكل حادة - يبدأ عادة بحمية بسيطة وقد ينتهي بمرض خطير",
    keywords: ["Diät = حمية", "Krankheit = مرض", "Schlankheitswahn = هوس النحافة"],
    simplified: "فتيات حمية مرض - هوس النحافة نتائجه",
    imagine: "🧠👁️ تخيل فتاة تتبع حمية (Diät) لكي تصبح نحيفة، ولكن هوس النحافة (Schlankheitswahn) جلب لها المرض (Krankheit) 👧→🤒"
};

HELP_DATA["lesen1_exam1_q3"] = {
    text: "Text 3: Energiesparlampen, umweltfreundliche Elektrogeräte... Die Gewinner bereiten sich nun auf den Landeswettbewerb 'Jugend forscht' vor.",
    meaning: "لمبات موفرة، أجهزة كهربائية صديقة للبيئة - الفائزون يستعدون للمسابقة المحلية 'شباب يبحثون'",
    keywords: ["Jugend = شباب", "forsch = يبحث", "Wettbewerb = مسابقة", "Umwelt = بيئة"],
    simplified: "شباب يبحثون بيئة تقنية - مسابقة مشاريع طلاب",
    imagine: "🧠👁️ تخيل شباب (Jugend) يشاركون في مسابقة (Wettbewerb) علمية بعروضهم البحثية 🧑‍🔬🏆"
};

HELP_DATA["lesen1_exam1_q4"] = {
    text: "Text 4: 13,5 Meter lang und leuchtend gelb... Mit ihren Untersuchungen wollen sie die Aufmerksamkeit auf die Verschmutzung der Nordsee mit winzigen Plastikteilchen lenken.",
    meaning: "طوله 13.5 متر ولونه أصفر لامع - بأبحاثهم يريدون لفت الانتباه إلى تلوث بحر الشمال بجزيئات البلاستيك الصغيرة",
    keywords: ["Meer = بحر", "Plastik = بلاستيك", "Projekt = مشروع", "Nordsee = بحر الشمال", "Schüler = طلاب"],
    simplified: "بحث بحر بلاستيك - طلاب بحر الشمال مشروع",
    imagine: "🧠👁️ تخيل طلاب (Schüler) يجمعون البلاستيك (Plastik) من البحر (Meer) ضمن مشروع (Projekt) بحثي 🚤🫗🔬"
};

HELP_DATA["lesen1_exam1_q5"] = {
    text: "Text 5: Mobbing ist kein neues Phänomen... Die Schikanen geschehen oft zu subtil und meist außerhalb des Unterrichts, während der Pausen oder auf dem Schulweg.",
    meaning: "التنمر ليس ظاهرة جديدة - المضايقات تحدث بمهارة وخلال الفسحة أو في طريق المدرسة",
    keywords: ["Mobbing = تنمر", "Schule = مدرسة", "Isolation = عزلة", "Angst = خوف"],
    simplified: "تنمر مدرسة عنف - طلاب عزلة خوف",
    imagine: "🧠👁️ تخيل طالب يتعرض للتنمر (Mobbing) في المدرسة (Schule) ويعيش في عزلة (Isolation) وحزن 😞😔"
};

// ============================================
// Exam 2: Sport ist gesund
// ============================================

HELP_DATA["lesen1_exam2_q1"] = {
    text: "Text 1: An der Ostküste Attikas in Griechenland lag in der Antike der Ort Marathon... Der Marathonlauf gilt als einziger Leistungssport, der bis ins hohe Alter ausgeübt werden kann.",
    meaning: "على الساحل الشرقي لأتيكا في اليونان قديماً كان موقع ماراثون - سباق الماراثون يعتبر الرياضة التنافسية الوحيدة التي يمكن ممارستها حتى سن متقدم",
    keywords: ["Marathon = ماراثون", "Leistungssport = رياضة تنافسية"],
    simplified: "ماراثون - رياضة تنافسية",
    imagine: "🧠👁️ تخيل جد كبير في السن (Großvater) يركض ماراثون (Marathon) ويصل إلى خط النهاية 🏃‍♂️👴🏁"
};

HELP_DATA["lesen1_exam2_q2"] = {
    text: "Text 2: Warum soll sich der Mensch nun auf Straßen und Wegen fortbewegen?... Im Trend liegt jetzt der Jogging-Stroller, ein Kinderwagen mit nur noch drei bereiften Rädern.",
    meaning: "لماذا يتحرك الإنسان على الطرق والمسالك؟ - الآن في الموضة عربة جري (Jogging-Stroller) وهي عربة أطفال بثلاث عجلات فقط",
    keywords: ["Babys = أطفال", "Jogging = جري"],
    simplified: "أطفال - جري",
    imagine: "🧠👁️ تخيل أب وأم يركضان (Jogging) ويدفعان عربة أطفال (Babys) أمامهما 🏃‍♂️🏃‍♀️🚼"
};

HELP_DATA["lesen1_exam2_q3"] = {
    text: "Text 3: Schweizer Forscher haben herausgefunden, dass nur 6 Minuten Hochleistungstraining pro Woche... ausreichen, um den Körper fit zu halten.",
    meaning: "باحثون سويسريون اكتشفوا أن 6 دقائق فقط من التدريب عالي الأداء أسبوعياً تكفي للحفاظ على لياقة الجسم",
    keywords: ["Fitness = لياقة", "Training = تدريب"],
    simplified: "لياقة - تدريب",
    imagine: "🧠👁️ تخيل شخصاً يتدرب (Training) 6 دقائق فقط ويصبح ذا لياقة (Fitness) عالية 💪⏱️"
};

HELP_DATA["lesen1_exam2_q4"] = {
    text: "Text 4: Mehr Bewegung als Ausgleich für zu langes Sitzen im Büro... gibt es jedoch bei den die Ausdauer trainierenden Sportarten wie dem Joggen einige Grundregeln, die beachtet werden müssen.",
    meaning: "حركة أكثر كتعويض للجلوس الطويل في المكتب - هناك قواعد أساسية يجب مراعاتها في رياضات التحمل مثل الجري",
    keywords: ["Sport = رياضة", "Regeln = قواعد"],
    simplified: "رياضة - قواعد",
    imagine: "🧠👁️ تخيل رياضياً يقيس نبضه (Puls) لكي يتبع القواعد (Regeln) بشكل صحيح ❤️✅"
};

HELP_DATA["lesen1_exam2_q5"] = {
    text: "Text 5: Viele frischgebackene Eltern stehen einem riesigen Angebot an Kinderwagen gegenüber... Vom TÜV geprüfte Kinderwagen erhalten ein Prüfzeichen.",
    meaning: "كثير من الآباء الجدد يواجهون عرضاً ضخماً من عربات الأطفال - عربات الأطفال المفحوصة من TÜV تحصل على علامة فحص",
    keywords: ["Babys = أطفال", "Sicherheit = أمان"],
    simplified: "أطفال - أمان",
    imagine: "🧠👁️ تخيل عربة أطفال (Kinderwagen) عليها ختم TÜV والطفل (Baby) سعيد 🚼✅😊"
};

// ============================================
// Exam 3: Sport ist gesund (التعديل 1)
// ============================================

HELP_DATA["lesen1_exam3_q1"] = {
    text: "Text 1: An der Ostküste Attikas in Griechenland lag in der Antike der Ort Marathon... Der Marathonlauf gilt als einziger Leistungssport, der bis ins hohe Alter ausgeübt werden kann.",
    meaning: "على الساحل الشرقي لأتيكا في اليونان قديماً كان موقع ماراثون - سباق الماراثون يعتبر الرياضة التنافسية الوحيدة التي يمكن ممارستها حتى سن متقدم",
    keywords: ["Marathon = ماراثون", "Leistungssport = رياضة تنافسية"],
    simplified: "ماراثون - رياضة تنافسية",
    imagine: "🧠👁️ تخيل جد كبير في السن (Großvater) يركض ماراثون (Marathon) ويصل إلى خط النهاية 🏃‍♂️👴🏁"
};

HELP_DATA["lesen1_exam3_q2"] = {
    text: "Text 2: Warum soll sich der Mensch nun auf Straßen und Wegen fortbewegen?... Im Trend liegt jetzt der Jogging-Stroller, ein Kinderwagen mit nur noch drei bereiften Rädern.",
    meaning: "لماذا يتحرك الإنسان على الطرق والمسالك؟ - الآن في الموضة عربة جري (Jogging-Stroller) وهي عربة أطفال بثلاث عجلات فقط",
    keywords: ["Babys = أطفال", "Jogging = جري"],
    simplified: "أطفال - جري",
    imagine: "🧠👁️ تخيل أب وأم يركضان (Jogging) ويدفعان عربة أطفال (Babys) أمامهما 🏃‍♂️🏃‍♀️🚼"
};

HELP_DATA["lesen1_exam3_q3"] = {
    text: "Text 3: Schweizer Forscher haben herausgefunden, dass nur 6 Minuten Hochleistungstraining pro Woche... ausreichen, um den Körper fit zu halten.",
    meaning: "باحثون سويسريون اكتشفوا أن 6 دقائق فقط من التدريب عالي الأداء أسبوعياً تكفي للحفاظ على لياقة الجسم",
    keywords: ["Fitness = لياقة", "Training = تدريب"],
    simplified: "لياقة - تدريب",
    imagine: "🧠👁️ تخيل شخصاً يتدرب (Training) 6 دقائق فقط ويصبح ذا لياقة (Fitness) عالية 💪⏱️"
};

HELP_DATA["lesen1_exam3_q4"] = {
    text: "Text 4: Mehr Bewegung als Ausgleich für zu langes Sitzen im Büro... gibt es jedoch bei den die Ausdauer trainierenden Sportarten wie dem Joggen einige Grundregeln, die beachtet werden müssen.",
    meaning: "حركة أكثر كتعويض للجلوس الطويل في المكتب - هناك قواعد أساسية يجب مراعاتها في رياضات التحمل مثل الجري",
    keywords: ["Sport = رياضة", "Regeln = قواعد"],
    simplified: "رياضة - قواعد",
    imagine: "🧠👁️ تخيل رياضياً يقيس نبضه (Puls) لكي يتبع القواعد (Regeln) بشكل صحيح ❤️✅"
};

HELP_DATA["lesen1_exam3_q5"] = {
    text: "Text 5: Viele frischgebackene Eltern stehen einem riesigen Angebot an Kinderwagen gegenüber... Vom TÜV geprüfte Kinderwagen erhalten ein Prüfzeichen.",
    meaning: "كثير من الآباء الجدد يواجهون عرضاً ضخماً من عربات الأطفال - عربات الأطفال المفحوصة من TÜV تحصل على علامة فحص",
    keywords: ["Babys = أطفال", "Sicherheit = أمان"],
    simplified: "أطفال - أمان",
    imagine: "🧠👁️ تخيل عربة أطفال (Kinderwagen) عليها ختم TÜV والطفل (Baby) سعيد 🚼✅😊"
};

// ============================================
// Exam 4: Tanzkurs
// ============================================

HELP_DATA["lesen1_exam4_q1"] = {
    text: "Text 1: Der Begriff Extremsport wird oft subjektiv verwendet... Viele Extremsportler ignorieren die Gefahren, was zu schweren Unfällen führt und sie häufig genug das Leben kostet.",
    meaning: "مصطلح الرياضة الخطيرة يُستخدم غالباً بشكل شخصي - كثير من ممارسي الرياضات الخطيرة يتجاهلون المخاطر مما يؤدي إلى حوادث خطيرة وتكلفهم حياتهم",
    keywords: ["Extremsport = رياضة خطيرة", "Adrenalin = أدرينالين"],
    simplified: "رياضة خطيرة - أدرينالين",
    imagine: "🧠👁️ تخيل شخصاً يقفز من جسر بالحبال (Bungee) وتدفق الأدرينالين (Adrenalin) في جسده 🪢💓"
};

HELP_DATA["lesen1_exam4_q2"] = {
    text: "Text 2: Musik, Sport, ehrenamtliches Engagement - die Teilnahme von Jugendlichen an diesen sogenannten bildungsorientierten Freizeitaktivitäten hat in den vergangenen zehn Jahren deutlich zugenommen.",
    meaning: "الموسيقى والرياضة والعمل التطوعي - مشاركة الشباب في هذه الأنشطة الترفيهية التعليمية زادت بشكل واضح في السنوات العشر الماضية",
    keywords: ["Jugendliche = شباب", "Aktivitäten = أنشطة"],
    simplified: "شباب - أنشطة",
    imagine: "🧠👁️ تخيل شباباً (Jugendliche) يمارسون أنشطة (Aktivitäten) مفيدة مثل الموسيقى والرياضة بدلاً من الجلوس على الهاتف 🎸🏀📱"
};

HELP_DATA["lesen1_exam4_q3"] = {
    text: "Text 3: In Firmen gibt es sie schon, jetzt wollen auch Schulen Entspannungskurse anbieten... Gerade Entspannungspausen seien aber wichtig, erklären Pädagogen und auch Neurowissenschaftler.",
    meaning: "في الشركات توجد بالفعل، الآن المدارس تريد تقديم دورات استرخاء - فترات الاسترخاء مهمة جداً كما يوضح المعلمون وعلماء الأعصاب",
    keywords: ["Schüler = طلاب", "Entspannung = استرخاء"],
    simplified: "طلاب - استرخاء",
    imagine: "🧠👁️ تخيل طالباً (Schüler) مرهقاً (gestresst) وبعد الاسترخاء (Entspannung) يستطيع التركيز بشكل أفضل 🧘‍♂️😌"
};

HELP_DATA["lesen1_exam4_q4"] = {
    text: "Text 4: Tanja Kleist ist von modernem Tanz absolut begeistert... Für ihre Hip-Hop-Tanzgruppe sucht Frau Kleist neue tanzbegeisterte Teilnehmerinnen und Teilnehmer...",
    meaning: "تانيا كلايست متحمسة جداً للرقص الحديث - السيدة كلايست تبحث عن مشاركات ومشاركين جدد متحمسين للرقص لمجموعة الهيب هوب الخاصة بها",
    keywords: ["Tanzkurs = درس رقص", "Teilnehmer = مشاركين"],
    simplified: "درس رقص - مشاركين",
    imagine: "🧠👁️ تخيل إعلاناً يقول درس رقص (Tanzkurs) مجاني وكل المشاركين (Teilnehmer) قادمون للرقص 💃🕺"
};

HELP_DATA["lesen1_exam4_q5"] = {
    text: "Text 5: Montags Tennis, dienstags Klavierunterricht, mittwochs Jazztanz in der Gruppe und donnerstags Treffen der Astronomie-Gruppe... Ob der Freizeitstress für alle Beteiligten wirklich gut ist?",
    meaning: "الاثنين تنس، الثلاثاء درس بيانو، الأربعاء رقص جاز جماعي، الخميس لقاء مجموعة فلك - هل ضغط وقت الفراغ مفيد حقاً لكل المعنيين؟",
    keywords: ["Langeweile = ملل", "Termine = مواعيد"],
    simplified: "ملل - مواعيد",
    imagine: "🧠👁️ تخيل طفلاً لديه مواعيد (Termine) كثيرة كل يوم، لأن الآباء يخافون من أن يشعر الطفل بالملل (Langeweile) 📅😫😰"
};

// ============================================
// Exam 5: Tanzkurs (التعديل 1)
// ============================================

HELP_DATA["lesen1_exam5_q1"] = {
    text: "Text 1: Der Begriff Extremsport wird oft subjektiv verwendet... Viele Extremsportler ignorieren die Gefahren, was zu schweren Unfällen führt und sie häufig genug das Leben kostet.",
    meaning: "مصطلح الرياضة الخطيرة يُستخدم غالباً بشكل شخصي - كثير من ممارسي الرياضات الخطيرة يتجاهلون المخاطر مما يؤدي إلى حوادث خطيرة وتكلفهم حياتهم",
    keywords: ["Extremsport = رياضة خطيرة", "Adrenalin = أدرينالين"],
    simplified: "رياضة خطيرة - أدرينالين",
    imagine: "🧠👁️ تخيل شخصاً يقفز من جسر بالحبال (Bungee) وتدفق الأدرينالين (Adrenalin) في جسده 🪢💓"
};

HELP_DATA["lesen1_exam5_q2"] = {
    text: "Text 2: Musik, Sport, ehrenamtliches Engagement - die Teilnahme von Jugendlichen an diesen sogenannten bildungsorientierten Freizeitaktivitäten hat in den vergangenen zehn Jahren deutlich zugenommen.",
    meaning: "الموسيقى والرياضة والعمل التطوعي - مشاركة الشباب في هذه الأنشطة الترفيهية التعليمية زادت بشكل واضح في السنوات العشر الماضية",
    keywords: ["Jugendliche = شباب", "Aktivitäten = أنشطة"],
    simplified: "شباب - أنشطة",
    imagine: "🧠👁️ تخيل شباباً (Jugendliche) يمارسون أنشطة (Aktivitäten) مفيدة مثل الموسيقى والرياضة بدلاً من الجلوس على الهاتف 🎸🏀📱"
};

HELP_DATA["lesen1_exam5_q3"] = {
    text: "Text 3: In Firmen gibt es sie schon, jetzt wollen auch Schulen Entspannungskurse anbieten... Gerade Entspannungspausen seien aber wichtig, erklären Pädagogen und auch Neurowissenschaftler.",
    meaning: "في الشركات توجد بالفعل، الآن المدارس تريد تقديم دورات استرخاء - فترات الاسترخاء مهمة جداً كما يوضح المعلمون وعلماء الأعصاب",
    keywords: ["Schüler = طلاب", "Entspannung = استرخاء"],
    simplified: "طلاب - استرخاء",
    imagine: "🧠👁️ تخيل طالباً (Schüler) مرهقاً (gestresst) وبعد الاسترخاء (Entspannung) يستطيع التركيز بشكل أفضل 🧘‍♂️😌"
};

HELP_DATA["lesen1_exam5_q4"] = {
    text: "Text 4: Tanja Kleist ist von modernem Tanz absolut begeistert... Für ihre Hip-Hop-Tanzgruppe sucht Frau Kleist neue tanzbegeisterte Teilnehmerinnen und Teilnehmer...",
    meaning: "تانيا كلايست متحمسة جداً للرقص الحديث - السيدة كلايست تبحث عن مشاركات ومشاركين جدد متحمسين للرقص لمجموعة الهيب هوب الخاصة بها",
    keywords: ["Tanzkurs = درس رقص", "Teilnehmer = مشاركين"],
    simplified: "درس رقص - مشاركين",
    imagine: "🧠👁️ تخيل إعلاناً يقول درس رقص (Tanzkurs) مجاني وكل المشاركين (Teilnehmer) قادمون للرقص 💃🕺"
};

HELP_DATA["lesen1_exam5_q5"] = {
    text: "Text 5: Montags Tennis, dienstags Klavierunterricht, mittwochs Jazztanz in der Gruppe und donnerstags Treffen der Astronomie-Gruppe... Ob der Freizeitstress für alle Beteiligten wirklich gut ist?",
    meaning: "الاثنين تنس، الثلاثاء درس بيانو، الأربعاء رقص جاز جماعي، الخميس لقاء مجموعة فلك - هل ضغط وقت الفراغ مفيد حقاً لكل المعنيين؟",
    keywords: ["Langeweile = ملل", "Termine = مواعيد"],
    simplified: "ملل - مواعيد",
    imagine: "🧠👁️ تخيل طفلاً لديه مواعيد (Termine) كثيرة كل يوم، لأن الآباء يخافون من أن يشعر الطفل بالملل (Langeweile) 📅😫😰"
};
// ============================================
// نظام الطبقة المساعدة (منطق التشغيل)
// يدعم: hören1, hören2, hören3, lesen1 (5 امتحانات)
// ============================================

let helpLayerActive = false;
let originalContentBackup = null;

// الأسئلة الصحيحة لكل امتحان (جميع الأجزاء)
function getCorrectQuestions(skill, examId) {
    const correctMap = {
        // Hören Teil 1 (27 امتحان)
        'hoeren1_exam1': [2, 3], 'hoeren1_exam2': [3, 5], 'hoeren1_exam3': [2, 3, 5],
        'hoeren1_exam4': [1, 5], 'hoeren1_exam5': [2, 4], 'hoeren1_exam6': [2, 4],
        'hoeren1_exam7': [1, 2, 5], 'hoeren1_exam8': [3, 4, 5], 'hoeren1_exam9': [1, 2],
        'hoeren1_exam10': [1, 4], 'hoeren1_exam11': [1, 4], 'hoeren1_exam12': [1, 4],
        'hoeren1_exam13': [3, 4, 5], 'hoeren1_exam14': [1, 3], 'hoeren1_exam15': [2, 3],
        'hoeren1_exam16': [2, 3, 5], 'hoeren1_exam17': [4, 5], 'hoeren1_exam18': [1, 3, 5],
        'hoeren1_exam19': [1, 3, 5], 'hoeren1_exam20': [1, 3, 4], 'hoeren1_exam21': [3],
        'hoeren1_exam22': [1, 2, 5], 'hoeren1_exam23': [3, 5], 'hoeren1_exam24': [1, 3, 5],
        'hoeren1_exam25': [1, 2, 5], 'hoeren1_exam26': [1, 5], 'hoeren1_exam27': [1, 2],
        
        // Hören Teil 2 (31 امتحان)
        'hoeren2_exam1': [3, 4, 8, 9, 10], 'hoeren2_exam2': [1, 3, 4, 8],
        'hoeren2_exam3': [1, 3, 4, 7, 8], 'hoeren2_exam4': [2, 6, 8, 9, 10],
        'hoeren2_exam5': [2, 9, 10], 'hoeren2_exam6': [3, 4, 7], 'hoeren2_exam7': [3, 4, 7],
        'hoeren2_exam8': [1, 3, 4, 7, 8, 9], 'hoeren2_exam9': [1, 3, 4, 5, 8],
        'hoeren2_exam10': [1, 3, 4, 8, 9, 10], 'hoeren2_exam11': [1, 3, 4, 8, 9, 10],
        'hoeren2_exam12': [1, 4, 6, 7, 8], 'hoeren2_exam13': [1, 4, 6, 7, 8],
        'hoeren2_exam14': [2, 5, 8, 9, 10], 'hoeren2_exam15': [2, 3, 5, 6, 8, 10],
        'hoeren2_exam16': [2, 4, 5, 8, 10], 'hoeren2_exam17': [2, 4, 5, 8, 10],
        'hoeren2_exam18': [2, 3, 4, 7, 9, 10], 'hoeren2_exam19': [3, 4, 7, 9],
        'hoeren2_exam20': [2, 3, 5, 8, 9], 'hoeren2_exam21': [3, 5, 9],
        'hoeren2_exam22': [3, 4, 10], 'hoeren2_exam23': [1, 2, 4, 6],
        'hoeren2_exam24': [2, 3, 4, 6, 8, 10], 'hoeren2_exam25': [1, 2, 3, 4, 6, 8, 9],
        'hoeren2_exam26': [3, 5, 7, 8, 10], 'hoeren2_exam27': [2, 3, 4, 6, 8],
        'hoeren2_exam28': [1, 2, 4, 6, 8, 10], 'hoeren2_exam29': [4, 5, 9, 10],
        'hoeren2_exam30': [2, 3, 6, 7, 10], 'hoeren2_exam31': [2, 4, 5, 8, 9],
        
        // Hören Teil 3 (27 امتحان)
        'hoeren3_exam1': [1], 'hoeren3_exam2': [1, 3], 'hoeren3_exam3': [1, 3],
        'hoeren3_exam4': [1, 4], 'hoeren3_exam5': [1, 4], 'hoeren3_exam6': [1, 5],
        'hoeren3_exam7': [1, 5], 'hoeren3_exam8': [1, 5], 'hoeren3_exam9': [1, 5],
        'hoeren3_exam10': [2, 5], 'hoeren3_exam11': [1, 2, 3], 'hoeren3_exam12': [3, 4],
        'hoeren3_exam13': [1, 2, 5], 'hoeren3_exam14': [1, 4, 5], 'hoeren3_exam15': [1, 2, 5],
        'hoeren3_exam16': [1, 3, 4, 5], 'hoeren3_exam17': [1, 3], 'hoeren3_exam18': [2, 3, 4],
        'hoeren3_exam19': [2, 4], 'hoeren3_exam20': [1, 3], 'hoeren3_exam21': [2],
        'hoeren3_exam22': [2, 4], 'hoeren3_exam23': [1, 5], 'hoeren3_exam24': [2],
        'hoeren3_exam25': [1, 3], 'hoeren3_exam26': [1, 3, 5], 'hoeren3_exam27': [1, 3],
        
        // Lesen Teil 1 (5 امتحانات فقط - Exam 1 إلى 5)
        'lesen1_exam1': [1, 2, 3, 4, 5],
        'lesen1_exam2': [1, 2, 3, 4, 5],
        'lesen1_exam3': [1, 2, 3, 4, 5],
        'lesen1_exam4': [1, 2, 3, 4, 5],
        'lesen1_exam5': [1, 2, 3, 4, 5]
    };
    return correctMap[`${skill}_exam${examId}`] || [];
}

// الحصول على رقم الامتحان الحالي
function getCurrentExamId() {
    if (window.currentExamId && window.currentExamId > 0) return window.currentExamId;
    const title = document.getElementById('examTitle')?.textContent || '';
    const match = title.match(/Exam\s+(\d+)/i);
    if (match) return parseInt(match[1]);
    const numMatch = title.match(/\d+/);
    if (numMatch) return parseInt(numMatch[0]);
    return 1;
}

// الحصول على نوع المهارة الحالي
function getCurrentSkill() {
    if (document.getElementById('hoeren1')?.style.display === 'block') return 'hoeren1';
    if (document.getElementById('hoeren2')?.style.display === 'block') return 'hoeren2';
    if (document.getElementById('hoeren3')?.style.display === 'block') return 'hoeren3';
    if (document.getElementById('teil1')?.style.display === 'block') return 'lesen1';
    return 'hoeren1';
}

// الحصول على القسم النشط
function getActiveSection() {
    if (document.getElementById('hoeren1')?.style.display === 'block') return document.getElementById('hoeren1');
    if (document.getElementById('hoeren2')?.style.display === 'block') return document.getElementById('hoeren2');
    if (document.getElementById('hoeren3')?.style.display === 'block') return document.getElementById('hoeren3');
    if (document.getElementById('teil1')?.style.display === 'block') return document.getElementById('teil1');
    return null;
}

// البحث عن البيانات في HELP_DATA
function getHelpData(skill, examId, questionNumber) {
    if (typeof HELP_DATA === 'undefined') return null;
    
    // النمط الأساسي: skill_examX_qY
    const key = `${skill}_exam${examId}_q${questionNumber}`;
    if (HELP_DATA[key]) return HELP_DATA[key];
    
    // محاولة البحث بطرق أخرى
    for (let k in HELP_DATA) {
        if (k.includes(`exam${examId}`) && (k.includes(`q${questionNumber}`) || k.includes(`_${questionNumber}`))) {
            return HELP_DATA[k];
        }
    }
    return null;
}

// إنشاء بطاقة شرح واحدة
function createHelpCard(questionNumber) {
    const examId = getCurrentExamId();
    const skill = getCurrentSkill();
    const data = getHelpData(skill, examId, questionNumber);
    
    const card = document.createElement('div');
    card.style.cssText = 'background:white;border-radius:12px;padding:20px;margin-bottom:15px;box-shadow:0 2px 8px rgba(0,0,0,0.08);border:1px solid #e0e0e0';
    
    if (data) {
        let keywordsHtml = '';
        if (data.keywords && data.keywords.length) {
            keywordsHtml = '<div style="margin:12px 0"><span style="color:#007bff;font-weight:bold">📌 كلمات مهمة :</span><br>';
            data.keywords.forEach(k => {
                keywordsHtml += `<span style="display:inline-block;background:#e3f2fd;padding:5px 12px;border-radius:20px;font-size:13px;margin:3px">${k}</span>`;
            });
            keywordsHtml += '</div>';
        }
        card.innerHTML = `
            <div style="font-weight:bold;color:#2c3e66;border-right:4px solid #007bff;padding-right:12px;margin-bottom:15px;font-size:17px">
                ${questionNumber}️⃣ ${data.text || ''}
            </div>
            <div style="margin-bottom:10px"><span style="color:#0056b3;font-weight:bold">📖 المعنى :</span> <span style="color:#333">${data.meaning || 'لا يوجد'}</span></div>
            ${keywordsHtml}
            <div style="margin-bottom:10px"><span style="color:#0056b3;font-weight:bold">✨ تبسيط :</span> <span style="color:#333">${data.simplified || data.meaning || 'لا يوجد'}</span></div>
            <div><span style="color:#0056b3;font-weight:bold">🎭 تخيل :</span> <span style="color:#333">${data.imagine || 'تخيل الجملة في سياقها'}</span></div>
        `;
    } else {
        card.innerHTML = `<div style="text-align:center;padding:20px;color:#999">❓ لا يوجد شرح للسؤال ${questionNumber}</div>`;
    }
    return card;
}

// إنشاء طبقة المساعدة (تعرض فقط الأسئلة الصحيحة)
function createHelpLayer() {
    const container = document.createElement('div');
    container.id = 'helpLayerContainer';
    container.style.cssText = 'background:#f8f9fa;border-radius:16px;padding:20px;margin:20px 0';
    
    const skill = getCurrentSkill();
    const examId = getCurrentExamId();
    const correctQuestions = getCorrectQuestions(skill, examId);
    
    if (correctQuestions.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:#666">📚 لا توجد أسئلة صحيحة مسجلة في هذا الامتحان</div>';
        return container;
    }
    
    // ترتيب الأرقام تصاعدياً
    correctQuestions.sort((a, b) => a - b);
    
    correctQuestions.forEach(q => {
        container.appendChild(createHelpCard(q));
    });
    return container;
}

// إخفاء محتوى الامتحان
function hideExamContent() {
    const hidden = [];
    const section = getActiveSection();
    if (!section) return hidden;
    
    const allChildren = [...section.children];
    for (let child of allChildren) {
        if (child.id !== 'helpLayerContainer' && child.style.display !== 'none') {
            child.style.display = 'none';
            hidden.push(child);
        }
    }
    return hidden;
}

// إخفاء أزرار التصحيح وإعادة التعيين
function hideButtons() {
    const hidden = [];
    document.querySelectorAll('button').forEach(btn => {
        const text = btn.textContent;
        if (text.includes('✅') || text.includes('تصحيح') || text.includes('Prüfen') || text.includes('↺') || text.includes('إعادة')) {
            if (btn.style.display !== 'none' && btn.id !== 'globalHelpButton') {
                btn.style.display = 'none';
                hidden.push(btn);
            }
        }
    });
    return hidden;
}

// إظهار العناصر المخفية
function showElements(elements) {
    if (!elements) return;
    elements.forEach(el => { if (el) el.style.display = ''; });
}

// تبديل وضع المساعدة
function toggleHelp() {
    const existing = document.getElementById('helpLayerContainer');
    const section = getActiveSection();
    
    if (helpLayerActive) {
        if (existing) existing.remove();
        if (originalContentBackup) {
            showElements(originalContentBackup.questions);
            showElements(originalContentBackup.buttons);
            originalContentBackup = null;
        }
        helpLayerActive = false;
    } else {
        const hiddenQuestions = hideExamContent();
        const hiddenButtons = hideButtons();
        originalContentBackup = { questions: hiddenQuestions, buttons: hiddenButtons };
        const helpLayer = createHelpLayer();
        if (section && helpLayer.children.length > 0) section.appendChild(helpLayer);
        helpLayerActive = true;
    }
}

// إضافة زر المساعدة
function addHelpButton() {
    if (document.getElementById('globalHelpButton')) return;
    const nav = document.getElementById('examNavButtons');
    if (!nav) return;
    
    const btn = document.createElement('button');
    btn.id = 'globalHelpButton';
    btn.textContent = '🧠 مساعدة ذكية للنجاح';
    btn.style.cssText = 'background:linear-gradient(135deg,#007bff,#0056b3);color:white;border:none;border-radius:30px;padding:8px 20px;font-size:14px;font-weight:bold;cursor:pointer;margin-left:10px;box-shadow:0 2px 5px rgba(0,0,0,0.2);transition:all 0.3s';
    btn.onmouseenter = () => { btn.style.transform = 'scale(1.02)'; btn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'; };
    btn.onmouseleave = () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)'; };
    btn.onclick = (e) => { e.stopPropagation(); toggleHelp(); };
    nav.appendChild(btn);
}

// مراقبة تغيير الامتحان لإغلاق المساعدة تلقائياً
function setupExamChangeListener() {
    let lastExamId = getCurrentExamId();
    let lastSkill = getCurrentSkill();
    setInterval(() => {
        const currentId = getCurrentExamId();
        const currentSkill = getCurrentSkill();
        if (currentId !== lastExamId || currentSkill !== lastSkill) {
            lastExamId = currentId;
            lastSkill = currentSkill;
            if (helpLayerActive) toggleHelp();
            console.log(`🔄 تغير الامتحان إلى: ${currentSkill}_exam${currentId}`);
        }
    }, 500);
}

// بدء التشغيل
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        addHelpButton();
        setupExamChangeListener();
    });
} else {
    addHelpButton();
    setupExamChangeListener();
}

console.log('✅ helpSystem.js تم التحميل بنجاح (يدعم hören1, hören2, hören3, lesen1)');