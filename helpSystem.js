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
// Exam 6: Impfung
// ============================================

HELP_DATA["lesen1_exam6_q1"] = {
    text: "Text 1: Immer wieder überspringen Krankheitserreger aus dem Tierreich die Artengrenze und werden auch dem Menschen gefährlich... Die Experten empfehlen, Adenoviren künftig sorgfältiger zu beobachten.",
    meaning: "مراراً وتكراراً تقفز مسببات الأمراض من مملكة الحيوان الحدود بين الأنواع وتصبح خطيرة على الإنسان أيضاً - الخبراء يوصون بمراقبة الفيروسات الغدية بعناية أكبر مستقبلاً",
    keywords: ["Impfung = تطعيم", "Viren = فيروسات", "Übertragung = انتقال"],
    simplified: "تطعيم - انتقال فيروسات بين البشر والحيوانات",
    imagine: "🧠👁️ تخيل طبيباً يأخذ تطعيماً (Impfung) بينما ينتقل فيروس (Virus) من حيوان إلى إنسان 🦠🐒→👨‍⚕️"
};

HELP_DATA["lesen1_exam6_q2"] = {
    text: "Text 2: Virologen ist es gelungen, den Vogelgrippe-Erreger hochansteckend zu machen... Das Ministerium stützt seine Entscheidung auf die Empfehlungen des unabhängigen Expertengremiums NSABB.",
    meaning: "علماء الفيروسات نجحوا في جعل مسبب إنفلونزا الطيور شديد العدوى - الوزارة تستند في قرارها على توصيات لجنة الخبراء المستقلة NSABB",
    keywords: ["Forschungsergebnisse = نتائج أبحاث", "Veröffentlichung = نشر"],
    simplified: "نتائج الأبحاث - قرار منع نشر معلومات خطيرة",
    imagine: "🧠👁️ تخيل عالماً يحمل نتائج أبحاثه (Forschungsergebnisse) ولكن الحكومة تمنع النشر (Veröffentlichung) خوفاً من الإرهابيين 🔬🚫📰"
};

HELP_DATA["lesen1_exam6_q3"] = {
    text: "Text 3: Ein neuer Impfstoff gegen Grippe könnte in Zukunft sämtliche Varianten der Krankheit abdecken und damit die jährliche Spritze überflüssig machen.",
    meaning: "لقاح جديد ضد الإنفلونزا يمكنه في المستقبل تغطية جميع أنواع المرض وبالتالي يجعل الحقنة السنوية غير ضرورية",
    keywords: ["Grippeschutz = حماية من إنفلونزا", "Impfstoff = لقاح"],
    simplified: "الحماية من الأنفلونزا - لقاح جديد لجميع الفيروسات",
    imagine: "🧠👁️ تخيل حقنة سحرية واحدة تحمي من كل أنواع الإنفلونزا (Grippeschutz) بدون حاجة لتطعيم (Impfstoff) سنوي 💉✨"
};

HELP_DATA["lesen1_exam6_q4"] = {
    text: "Text 4: Breitet sich die Grippe in einer Schule aus, sind es besonders geschlechtshomogene Gruppen, in denen das Virus schnell neue Opfer findet.",
    meaning: "عندما تنتشر الإنفلونزا في مدرسة، تكون المجموعات المتجانسة جنسياً هي الأماكن التي يجد فيها الفيروس ضحايا جدداً بسرعة",
    keywords: ["Grippeviren = فيروسات إنفلونزا", "Gruppen = مجموعات"],
    simplified: "فيروسات الأنفلونزا - تنتشر بين نفس الجنس",
    imagine: "🧠👁️ تخيل فيروس الإنفلونزا (Grippeviren) ينتقل بين الأولاد فقط وبين البنات فقط 👦→👦 👧→👧"
};

HELP_DATA["lesen1_exam6_q5"] = {
    text: "Text 5: Da sich Influenzaviren immer wieder verändern, unternimmt die Weltgesundheitsorganisation WHO jedes Jahr Anstrengungen... Eine neue Studie liefert Anhaltspunkte dafür, dass die tatsächliche Wirksamkeit von Grippeimpfungen geringer ist.",
    meaning: "بما أن فيروسات الإنفلونزا تتغير باستمرار، تبذل منظمة الصحة العالمية WHO جهوداً كل عام - دراسة جديدة تقدم دلائل على أن الفعالية الفعلية لتطعيمات الإنفلونزا أقل",
    keywords: ["Grippeimpfung = تطعيم إنفلونزا", "Wirksamkeit = فعالية"],
    simplified: "تطعيم الأنفلونزا - فعاليته أقل مما كنا نظن",
    imagine: "🧠👁️ تخيل شخصاً يأخذ تطعيم الأنفلونزا (Grippeimpfung) لكن المرض يصيبه رغم ذلك، لأن الفعالية (Wirksamkeit) أقل من 60% 😷❌"
};

// ============================================
// Exam 7: Insel
// ============================================

HELP_DATA["lesen1_exam7_q1"] = {
    text: "Text 1: Die Shengsi-Inseln liegen im Ostchinesischen Meer... Das Dorf aber, das sie zurückgelassen haben, ist in kürzester Zeit von der Natur zurückerobert worden.",
    meaning: "جزر شينغشي تقع في بحر الصين الشرقي - لكن القرية التي تركوها استعادتها الطبيعة في وقت قصير جداً",
    keywords: ["Insel = جزيرة", "Natur = طبيعة", "verlassen = مهجورة"],
    simplified: "جزر مهجورة - الطبيعة تستعيد أراضيها",
    imagine: "🧠👁️ تخيل جزيرة (Insel) مهجورة، والطبيعة (Natur) تغطي المنازل بالنباتات 🏝️🌿🏚️"
};

HELP_DATA["lesen1_exam7_q2"] = {
    text: "Text 2: Der Reiseveranstalter TOURIMARS hat kürzlich eine Befragung durchgeführt... Gerade noch in die Top Ten schaffte es auch die französische Mittelmeerinsel Korsika.",
    meaning: "منظم الرحلات TOURIMARS أجرى مؤخراً استبياناً - جزيرة كورسيكا الفرنسية في البحر المتوسط تمكنت بالكاد من دخول المراكز العشرة الأولى",
    keywords: ["Reiseziele = وجهات سفر", "Inseln = جزر", "beliebteste = الأكثر شعبية"],
    simplified: "أشهر الجزر الأوروبية - قائمة بأفضل 10 جزر",
    imagine: "🧠👁️ تخيل قائمة بأفضل الجزر الأوروبية (Top 10 Inseln) والسياح يصوتون 🏆📋"
};

HELP_DATA["lesen1_exam7_q3"] = {
    text: "Text 3: Das ostfriesische Memmert ist für seltene Vögel reserviert... Im Auftrag des Landes Niedersachsen ist der Inselvogt zuständig für den Schutz von Natur und Vögeln auf Memmert.",
    meaning: "جزيرة ميميرت في فريزيا الشرقية محجوزة للطيور النادرة - بناءً على طلب ولاية ساكسونيا السفلى، حارس الجزيرة مسؤول عن حماية الطبيعة والطيور في ميميرت",
    keywords: ["Vögel = طيور", "Naturschutz = حماية الطبيعة", "Insel = جزيرة"],
    simplified: "جزيرة - ملجأ للطيور النادرة",
    imagine: "🧠👁️ تخيل جزيرة (Insel) محمية، والطيور النادرة (seltene Vögel) تعشش بأمان 🏝️🕊️"
};

HELP_DATA["lesen1_exam7_q4"] = {
    text: "Text 4: Die südamerikanischen Galapagosinseln locken nicht mit weißen Sandstränden und Palmen... Auf den unbewohnten Galapagosinseln verhalten sich die Tiere so, als ob es keine Menschen gäbe.",
    meaning: "جزر غالاباغوس في أمريكا الجنوبية لا تجذب بالرمال البيضاء والنخيل - في جزر غالاباغوس غير المأهولة، تتصرف الحيوانات وكأنه لا يوجد بشر",
    keywords: ["Tiere = حيوانات", "Paradies = جنة", "unberührt = بكر"],
    simplified: "جزر غالاباغوس - جنة الحيوانات البرية",
    imagine: "🧠👁️ تخيل جزراً (Inseln) حيث تقترب من الحيوانات (Tiere) دون خوف، وكأنك في جنة (Paradies) 🏝️🦎🐢"
};

HELP_DATA["lesen1_exam7_q5"] = {
    text: "Text 5: Dass Elefanten in Thailand teurer sein können als ein 3er-BMW in München, liegt an ihrem enormen wirtschaftlichen Potenzial: Sie sind eine der Hauptattraktionen der thailändischen Tourismusindustrie.",
    meaning: "أن الأفيال في تايلاند يمكن أن تكون أغلى من BMW الفئة الثالثة في ميونيخ، يعود إلى إمكاناتها الاقتصادية الهائلة - فهي واحدة من مناطق الجذب الرئيسية لصناعة السياحة التايلاندية",
    keywords: ["Elefanten = أفيال", "Tourismus = سياحة", "Tierschutz = حماية الحيوان"],
    simplified: "الأفيال - جذب سياحي مثير للجدل",
    imagine: "🧠👁️ تخيل سائحاً يركب فيلاً (Elefant) بينما ناشط حماية الحيوان (Tierschützer) يحتج 🐘🚫"
};

// ============================================
// Exam 8: Bilder
// ============================================

HELP_DATA["lesen1_exam8_q1"] = {
    text: "Text 1: Der Buchtitel erinnert an eine Horrorgeschichte: 'Die Nacht'... Paul Bogart erläutert, warum künstliches Licht so weit verbreitet ist, und betrachtet dies sehr kritisch.",
    meaning: "عنوان الكتاب يذكر بقصة رعب: 'الليل' - بول بوغارت يشرح لماذا الضوء الاصطناعي منتشر جداً وينظر إلى هذا بشكل نقدي جداً",
    keywords: ["Licht = ضوء", "Finsternis = ظلام", "kritisch = نقدي"],
    simplified: "الضوء الاصطناعي - يفسد الظلام الطبيعي",
    imagine: "🧠👁️ تخيل سماء ليلية مظلمة مليئة بالنجوم، وفجأة تضيء مدينة بأكملها 💡🌃"
};

HELP_DATA["lesen1_exam8_q2"] = {
    text: "Text 2: Fotos machen ist heute nicht schwer... Dietmar Spehrs neuer Fotografie-Ratgeber ist dabei ein gutes Hilfsmittel.",
    meaning: "التقاط الصور اليوم ليس صعباً - دليل ديتمار شبير الجديد للتصوير الفوتوغرافي هو أداة جيدة لذلك",
    keywords: ["Fotografie = تصوير", "Ratgeber = دليل", "Technik = تقنية"],
    simplified: "دليل تصوير - للمبتدئين والمحترفين",
    imagine: "🧠👁️ تخيل شخصاً يقرأ دليل تصوير (Fotografie-Ratgeber) ويتعلم كيف يلتقط صوراً رائعة 📸📖"
};

HELP_DATA["lesen1_exam8_q3"] = {
    text: "Text 3: Bilder der Fotografin Annie Leibovitz sind ab kommendem Samstag im Kunsthaus Wien zu sehen... Um die Fotografien besser kennenzulernen, können Besucher einen ca. 1,5 Stunden langen Film über die Karriere von Annie Leibovitz sehen.",
    meaning: "صور المصورة آني ليبوفيتز ستعرض ابتداء من السبت القادم في بيت الفن في فيينا - للتعرف على الصور بشكل أفضل، يمكن للزوار مشاهدة فيلم مدته حوالي 1.5 ساعة عن مسيرة آني ليبوفيتز",
    keywords: ["Fotografin = مصورة", "Ausstellung = معرض", "Portraits = صور شخصية"],
    simplified: "معرض صور آني ليبوفيتز - صور شخصية للمشاهير",
    imagine: "🧠👁️ تخيل معرضاً (Ausstellung) مليئاً بصور المشاهير (Prominente) والمصورين 🖼️📸"
};

HELP_DATA["lesen1_exam8_q4"] = {
    text: "Text 4: Die Abkürzung TWAN klingt nach einem neuen Computerprogramm, aber tatsächlich steht sie für eine neue fotografische Methode, die der Iraner Babak Amin Tafreshi entwickelt hat.",
    meaning: "الاختصار TWAN يبدو كبرنامج كمبيوتر جديد، لكنه في الواقع يمثل طريقة تصوير جديدة طورها الإيراني باباك أمين تافريشي",
    keywords: ["Sterne = نجوم", "Fotografie = تصوير", "Landschaft = منظر طبيعي"],
    simplified: "تصوير النجوم - طريقة جديدة مذهلة",
    imagine: "🧠👁️ تخيل صوراً مذهلة للنجوم (Sterne) والسماء ليلاً فوق مناظر طبيعية جميلة ✨📷🌌"
};

HELP_DATA["lesen1_exam8_q5"] = {
    text: "Text 5: Er gehörte zu den ganz Großen seines Fachs: Andreas Feininger... Eigentlich war Andreas Feininger gelernter Architekt.",
    meaning: "كان من كبار مجاله: أندرياس فاينينغر - في الأصل كان أندرياس فاينينغر مهندساً معمارياً",
    keywords: ["Fotograf = مصور", "Karriere = مسيرة مهنية", "Architekt = مهندس معماري"],
    simplified: "أندرياس فاينينغر - من مهندس إلى مصور مشهور",
    imagine: "🧠👁️ تخيل مصوراً (Fotograf) شهيراً بدأ حياته كمهندس معماري (Architekt) 🏗️→📸"
};

// ============================================
// Exam 9: Grundschule
// ============================================

HELP_DATA["lesen1_exam9_q1"] = {
    text: "Text 1: Berlin wird in 10 Jahren rund 5.000 Lehrkräfte weniger brauchen als derzeit... Nach Meinung der GEW steuert die Hauptstadt bei der Personalausstattung der Schulen auf ein Fiasko zu.",
    meaning: "برلين ستحتاج إلى حوالي 5000 معلم أقل مما تحتاجه حالياً بعد 10 سنوات - حسب رأي نقابة GEW، العاصمة تتجه نحو كارثة في تزويد المدارس بالكوادر",
    keywords: ["Lehrermangel = نقص معلمين", "GEW = نقابة", "Bildung = تعليم"],
    simplified: "نقص المعلمين في برلين - أزمة قادمة",
    imagine: "🧠👁️ تخيل مدرسة (Schule) بدون معلمين (Lehrer) كافيين، والفصول الدراسية مزدحمة 🏫😰📚"
};

HELP_DATA["lesen1_exam9_q2"] = {
    text: "Text 2: Wer sich in Berlin um eine Stelle als Lehrer bewirbt, muss hart im Nehmen sein... Maria Schütz, die ihr Examen mit der Note 1,5 bestanden hat und unbedingt in Berlin unterrichten wollte, hat mit ihrer Bewerbung leidvolle Erfahrungen hinter sich.",
    meaning: "من يتقدم لوظيفة معلم في برلين، يجب أن يكون قوياً - ماريا شوتس التي اجتازت امتحانها بدرجة 1.5 وكانت تريد التدريس في برلين بشدة، خاضت تجارب مؤلمة مع طلب التوظيف الخاص بها",
    keywords: ["Lehrer = معلم", "Berlin = برلين", "Abwanderung = هجرة"],
    simplified: "المعلمون يغادرون برلين - ظروف العمل الصعبة",
    imagine: "🧠👁️ تخيل معلماً (Lehrer) يحمل حقيبته ويترك برلين (Berlin) إلى مدينة أخرى 🚶‍♂️🎒"
};

HELP_DATA["lesen1_exam9_q3"] = {
    text: "Text 3: Eltern klagen über Stundenausfall und Schulleiter über fehlende Bewerber... Der Verband Bildung und Erziehung (VBE) rechnet in den nächsten 15 Jahren mit einem 'gewaltigen Lehrermangel' in Deutschland.",
    meaning: "الآباء يشكون من تساقط الساعات ومديرو المدارس من نقص المتقدمين - اتحاد التربية والتعليم (VBE) يتوقع 'نقصاً هائلاً في المعلمين' في ألمانيا خلال الـ 15 سنة القادمة",
    keywords: ["Lehrermangel = نقص معلمين", "Deutschland = ألمانيا", "Prognose = توقع"],
    simplified: "نقص معلمين في ألمانيا - أزمة وطنية",
    imagine: "🧠👁️ تخيل خريطة ألمانيا (Deutschland) وعلامات تحذير على المدارس بسبب نقص المعلمين (Lehrermangel) 🗺️⚠️🏫"
};

HELP_DATA["lesen1_exam9_q4"] = {
    text: "Text 4: Bildungspolitiker und Lehrervertreter wollen Abiturienten scharenweise in den Lehrerberuf locken... Die Arbeitsgruppe Bildungsforschung/Bildungsplanung unter der Leitung des Wissenschaftlers Klaus Klemm kommt in ihrem Bericht zu einem ganz anderen Ergebnis.",
    meaning: "سياسيو التعليم وممثلو المعلمين يريدون جذب خريجي الثانوية العامة بأعداد كبيرة لمهنة التدريس - مجموعة أبحاث التعليم تحت قيادة العالم كلاوس كليم تصل في تقريرها إلى نتيجة مختلفة تماماً",
    keywords: ["Bildungsforscher = باحث تربوي", "Lehrermangel = نقص معلمين", "Studie = دراسة"],
    simplified: "جدل حول نقص المعلمين - دراسات متضاربة",
    imagine: "🧠👁️ تخيل باحثين (Forscher) يقدمون دراسات (Studien) مختلفة حول أزمة المعلمين 📊🔍"
};

HELP_DATA["lesen1_exam9_q5"] = {
    text: "Text 5: Mädchen haben tendenziell bessere Noten und stellen 56 Prozent der Abiturienten... An der Grundschule sind Männer eine Rarität.",
    meaning: "الفتيات تميل درجاتهن للارتفاع ويشكلن 56 في المئة من خريجي الثانوية العامة - الرجال في المدرسة الابتدائية هم نادرون",
    keywords: ["männliche Lehrkräfte = معلمون ذكور", "Grundschule = مدرسة ابتدائية", "selten = نادر"],
    simplified: "قلة المعلمين الرجال في المدارس الابتدائية",
    imagine: "🧠👁️ تخيل مدرسة ابتدائية (Grundschule) يغلب عليها المعلمات النساء، والرجال (Männer) قليلون جداً 👩‍🏫👨‍🏫"
};

// ============================================
// Exam 10: Österreich - Naschmarkt
// ============================================

HELP_DATA["lesen1_exam10_q1"] = {
    text: "Text 1: Das Lesemagazin MENU hat eine Umfrage zu den populärsten Märkten in Österreich durchgeführt... Das große Interesse an der Abstimmung zeigt laut MENU, wie sehr die Konsumentinnen und Konsumenten Märkte schätzen.",
    meaning: "مجلة القراءة MENU أجرت استبياناً حول أشهر الأسواق في النمسا - الاهتمام الكبير بالتصويت يظهر حسب MENU مدى تقدير المستهلكين للأسواق",
    keywords: ["Märkte = أسواق", "Österreich = النمسا", "beliebteste = الأكثر شعبية"],
    simplified: "أشهر أسواق النمسا - استبيان ونتائج",
    imagine: "🧠👁️ تخيل قائمة بأشهر الأسواق (Märkte) في النمسا (Österreich) والسياح يتسوقون 🛍️🇦🇹"
};

HELP_DATA["lesen1_exam10_q2"] = {
    text: "Text 2: Sie sind der Meinung, dass Ihre Qualifikationen ausreichen, um Karriere zu machen?... Selbstmarketing beginnt schon bei der Bewerbung und dem Vorstellungsgespräch und setzt sich im Job fort.",
    meaning: "هل ترى أن مؤهلاتك كافية لصنع مستقبل مهني؟ - التسويق الذاتي يبدأ من التقديم والمقابلة ويستمر في الوظيفة",
    keywords: ["Selbstmarketing = تسويق ذاتي", "Karriere = مهنة", "Bewerbung = تقديم"],
    simplified: "التسويق الذاتي - مفتاح النجاح في العمل",
    imagine: "🧠👁️ تخيل شخصاً يقدم نفسه (Selbstmarketing) في مقابلة عمل (Vorstellungsgespräch) بثقة 💼✨"
};

HELP_DATA["lesen1_exam10_q3"] = {
    text: "Text 3: Der Wiener Naschmarkt gehört zu Österreichs beliebtesten Märkten... Nun erzählt ein neuer Reiseführer die Geschichte des Naschmarktes, reich illustriert mit alten Aufnahmen.",
    meaning: "سوق ناشماركت في فيينا هو من أشهر أسواق النمسا - دليل سفر جديد يروي تاريخ سوق ناشماركت بصور قديمة غنية",
    keywords: ["Naschmarkt = سوق ناشماركت", "Wien = فيينا", "Geschichte = تاريخ"],
    simplified: "سوق ناشماركت في فيينا - تاريخ وصور قديمة",
    imagine: "🧠👁️ تخيل سوقاً تاريخياً (historischer Markt) في فيينا (Wien) مليئاً بالزوار والتاريخ 🏪📜"
};

HELP_DATA["lesen1_exam10_q4"] = {
    text: "Text 4: Wer bloggt, zeigt neben Fachkompetenz auch Kreativität... Experten raten daher, in Bewerbungsunterlagen gezielt darauf hinzuweisen.",
    meaning: "من يدوّن، يظهر إلى جانب الكفاءة المهنية أيضاً إبداعاً - الخبراء ينصحون بالإشارة إلى ذلك بشكل موجه في مستندات التقديم",
    keywords: ["Bloggen = تدوين", "Karriere = مهنة", "Bewerbung = تقديم"],
    simplified: "التدوين لتعزيز المسيرة المهنية",
    imagine: "🧠👁️ تخيل شاباً يكتب تدوينة (Blog) عن اهتماماته، وصاحب عمل ينظر إليها بعناية 💻📝👔"
};

HELP_DATA["lesen1_exam10_q5"] = {
    text: "Text 5: Bis Herbst soll ein neues Marktkonzept für den altehrwürdigen Salzburger Grünmarkt vorliegen... In diesem Zusammenhang wurde auch die beliebte Foodbloggerin Jasmin May engagiert.",
    meaning: "بحلول الخريف يجب أن يكون هناك مفهوم جديد للسوق الخضراء العريقة في سالزبورغ - في هذا السياق تم أيضاً الاستعانة بمدونة الطعام الشهيرة ياسمين ماي",
    keywords: ["Marktkonzept = مفهوم السوق", "Salzburg = سالزبورغ", "Erneuerung = تجديد"],
    simplified: "تطوير سوق سالزبورغ القديم - خطة جديدة",
    imagine: "🧠👁️ تخيل سوقاً قديماً (alter Markt) في سالزبورغ (Salzburg) يتم تجديده وتطويره 🏪🔨✨"
};

// ============================================
// Exam 11: Insekten
// ============================================

HELP_DATA["lesen1_exam11_q1"] = {
    text: "Text 1: Die anhaltenden außergewöhnlich hohen Temperaturen haben im Süden Frankreichs eine Tierplage bisher unbekannten Ausmaßes ausgelöst... Der Einsatz von Gift gegen die Heuschrecken ist sehr riskant.",
    meaning: "درجات الحرارة المرتفعة بشكل استثنائي المستمرة تسببت في جنوب فرنسا في انتشار آفة حيوانية بشكل غير مسبوق - استخدام السم ضد الجراد خطير جداً",
    keywords: ["Heuschrecken = جراد", "Landwirte = مزارعون", "Gift = سم"],
    simplified: "الجراد - كارثة على المحاصيل",
    imagine: "🧠👁️ تخيل سحابة من الجراد (Heuschrecken) تأكل كل شيء أخضر 🌾🦗💨"
};

HELP_DATA["lesen1_exam11_q2"] = {
    text: "Text 2: Für immer wird eine der größten Umweltkatastrophen mit dem Namen des damals in Basel ansässigen Chemiekonzerns Sandoz verbunden bleiben... Heute spricht die Internationale Kommission zum Schutz des Rheins wieder von 'guter Wasserqualität'.",
    meaning: "إلى الأبد ستبقى واحدة من أكبر الكوارث البيئية مرتبطة باسم مجموعة ساندوز الكيميائية في بازل آنذاك - اليوم اللجنة الدولية لحماية نهر الراين تتحدث مرة أخرى عن 'نوعية مياه جيدة'",
    keywords: ["Rhein = راين", "Fischsterben = نفوق أسماك", "Umweltkatastrophe = كارثة بيئية"],
    simplified: "كارثة الراين - نفوق الأسماك عام 1986",
    imagine: "🧠👁️ تخيل نهراً (Fluss) مليئاً بالأسماك الميتة بسبب حادث كيميائي ☠️🐟💀"
};

HELP_DATA["lesen1_exam11_q3"] = {
    text: "Text 3: Der Klimawandel bringt es in Verbindung mit der Globalisierung mit sich, dass auch in Deutschland Tiere heimisch werden, die hier zuvor nicht beobachtet wurden... Eine Forschergruppe identifizierte jetzt einige bisher nur in Afrika und Asien vorkommende Erreger.",
    meaning: "تغير المناخ مع العولمة يجلب حيوانات تصبح موطنية في ألمانيا لم تكن تُشاهد هنا من قبل - فريق بحثي حدد الآن بعض مسببات الأمراض التي كانت موجودة سابقاً فقط في أفريقيا وآسيا",
    keywords: ["Mücken = بعوض", "Krankheiten = أمراض", "Klimawandel = تغير مناخ"],
    simplified: "البعوض الاستوائي - أمراض جديدة تصل إلى ألمانيا",
    imagine: "🧠👁️ تخيل بعوضة (Mücke) غريبة تحمل أمراضاً جديدة إلى ألمانيا 🦟⚠️🇩🇪"
};

HELP_DATA["lesen1_exam11_q4"] = {
    text: "Text 4: Forscher haben bei Versuchen im Bronx Zoo in New York eine neue Erkenntnis über Elefanten erlangt: Sie können sich selbst im Spiegel erkennen... Den Grund für das Scheitern früherer Tests mit Elefanten sieht ein Wissenschaftler im Versuchsaufbau.",
    meaning: "باحثون توصلوا في تجارب في حديقة حيوانات برونكس في نيويورك إلى معرفة جديدة عن الأفيال: يمكنها التعرف على نفسها في المرآة - عالم يرى سبب فشل الاختبارات السابقة مع الأفيال في طريقة تصميم التجربة",
    keywords: ["Elefanten = أفيال", "Spiegel = مرآة", "Selbsterkennung = تمييز الذات"],
    simplified: "الأفيال تعرف نفسها في المرآة - اكتشاف جديد",
    imagine: "🧠👁️ تخيل فيلاً (Elefant) ينظر في المرآة ويلاحظ بقعة على رأسه 🐘🪞😮"
};

HELP_DATA["lesen1_exam11_q5"] = {
    text: "Text 5: Heute und morgen tagt in Göteborg die Internationale Nordseekonferenz (INK)... Der WWF befürchtet, dass die Berücksichtigung ökologischer Belange der Nordsee künftig im europäischen Rahmen vernachlässigt werde: 'Es sieht nicht gut aus für die Nordsee'.",
    meaning: "اليوم وغداً تنعقد في غوتنبرغ مؤتمر بحر الشمال الدولي... الصندوق العالمي للطبيعة يخشى من إهمال الاهتمامات البيئية لبحر الشمال في المستقبل في الإطار الأوروبي: 'المستقبل لا يبدو جيداً لبحر الشمال'",
    keywords: ["Nordsee = بحر الشمال", "WWF = صندوق عالمي للطبيعة", "Umweltschutz = حماية بيئة"],
    simplified: "مستقبل بحر الشمال - مخاوف بيئية",
    imagine: "🧠👁️ تخيل بحر الشمال (Nordsee) وعلامات استفهام فوقه بسبب التلوث 🌊❓😟"
};

// ============================================
// Exam 12: Insekten (التعديل 1)
// ============================================

HELP_DATA["lesen1_exam12_q1"] = {
    text: "Text 1: Heute und morgen tagt in Göteborg die Internationale Nordseekonferenz (INK)... Der WWF befürchtet, dass die Berücksichtigung ökologischer Belange der Nordsee künftig im europäischen Rahmen vernachlässigt werde.",
    meaning: "اليوم وغداً تنعقد في غوتنبرغ مؤتمر بحر الشمال الدولي - الصندوق العالمي للطبيعة يخشى من إهمال الاهتمامات البيئية لبحر الشمال مستقبلاً",
    keywords: ["Nordsee = بحر الشمال", "WWF = صندوق عالمي للطبيعة", "Umweltschutz = حماية بيئة"],
    simplified: "مستقبل بحر الشمال غير جيد",
    imagine: "🧠👁️ تخيل بحر الشمال (Nordsee) وسمكة حزينة بسبب التلوث 🌊🐟😔"
};

HELP_DATA["lesen1_exam12_q2"] = {
    text: "Text 2: Für immer wird eine der größten Umweltkatastrophen mit dem Namen des damals in Basel ansässigen Chemiekonzerns Sandoz verbunden bleiben. 1986 führte ein Brand... zu einer Verunreinigung des Rheins mit 20 Tonnen hochgiftiger Pestizide.",
    meaning: "إلى الأبد ستبقى واحدة من أكبر الكوارث البيئية مرتبطة باسم مجموعة ساندوز الكيميائية - حريق عام 1986 أدى إلى تلوث الراين بـ 20 طناً من المبيدات شديدة السمية",
    keywords: ["Rhein = راين", "Fischsterben = نفوق أسماك", "1986 = 1986"],
    simplified: "كارثة الراين 1986 - نفوق الأسماك",
    imagine: "🧠👁️ تخيل نهر الراين (Rhein) وسنوات 1986 مكتوبة على لوحة تذكارية 🏞️📅💀"
};

HELP_DATA["lesen1_exam12_q3"] = {
    text: "Text 3: Der Klimawandel bringt es in Verbindung mit der Globalisierung mit sich, dass auch in Deutschland Tiere heimisch werden, die hier zuvor nicht beobachtet wurden. Zu diesen Neuankömmlingen gehören auch exotische Stechmücken.",
    meaning: "تغير المناخ مع العولمة يجلب حيوانات تصبح موطنية في ألمانيا - من بين هذه الوافدين الجدد البعوض الاستوائي",
    keywords: ["Mücken = بعوض", "Krankheiten = أمراض", "Klimawandel = تغير مناخ"],
    simplified: "بعوض استوائي - أمراض جديدة",
    imagine: "🧠👁️ تخيل بعوضة استوائية كبيرة (exotische Mücke) تحلق فوق ألمانيا 🇩🇪🦟"
};

HELP_DATA["lesen1_exam12_q4"] = {
    text: "Text 4: Forscher haben bei Versuchen im Bronx Zoo in New York eine neue Erkenntnis über Elefanten erlangt: Sie können sich selbst im Spiegel erkennen.",
    meaning: "باحثون توصلوا إلى معرفة جديدة عن الأفيال: يمكنها التعرف على نفسها في المرآة",
    keywords: ["Elefanten = أفيال", "Spiegel = مرآة", "Selbsterkennung = تمييز الذات"],
    simplified: "الأفيال تعرف نفسها في المرآة",
    imagine: "🧠👁️ تخيل فيلاً (Elefant) واقفاً أمام مرآة (Spiegel) 🐘🪞"
};

HELP_DATA["lesen1_exam12_q5"] = {
    text: "Text 5: Die anhaltenden außergewöhnlich hohen Temperaturen haben in Südfrankreich eine Tierplage bisher unbekannten Ausmaßes ausgelöst... Die Landwirte der Region sind bereits verzweifelt, denn ihre gesamte Ernte ist verloren.",
    meaning: "درجات الحرارة المرتفعة تسببت في جنوب فرنسا في انتشار آفة حيوانية غير مسبوقة - مزارعو المنطقة يائسون لأن محصولهم بالكامل ضاع",
    keywords: ["Heuschrecken = جراد", "Landwirte = مزارعون", "Ernte = محصول"],
    simplified: "الجراد يدمر المحاصيل في فرنسا",
    imagine: "🧠👁️ تخيل حقلاً (Feld) يتحول إلى صحراء بسبب الجراد (Heuschrecken) 🌾→🏜️"
};

// ============================================
// Exam 13: das Benzin
// ============================================

HELP_DATA["lesen1_exam13_q1"] = {
    text: "Text 1: Aussteigen, tanken, wegfahren: Wenn die Benzinpreise steigen, ist wieder Hochsaison bei den Benzindieben... Vergessen gilt nicht, es gibt immer eine Anzeige. Und dann wird es richtig teuer.",
    meaning: "تنزل، تتزود بالبنزين، تنطلق - عندما ترتفع أسعار البنزين، يبدأ موسم سراق البنزين... النسيان ليس عذراً، هناك دائماً مخالفة - وسيصبح الأمر مكلفاً حقاً",
    keywords: ["Benzinpreise = أسعار بنزين", "Diebe = لصوص", "Tankstelle = محطة وقود"],
    simplified: "أسعار البنزين المرتفعة - حيل سائقي السيارات",
    imagine: "🧠👁️ تخيل شخصاً يتزود بالبنزين (tanken) ويهرب دون دفع 🚗⛽💨"
};

HELP_DATA["lesen1_exam13_q2"] = {
    text: "Text 2: Viele Autofahrer, die in einen Unfall verwickelt sind, sind so aufgeregt, dass sie vergessen, was zu tun ist. Der Versicherungsexperte Klaus Lenhoff gibt die wichtigsten Tipps...",
    meaning: "كثير من سائقي السيارات المتورطين في حادث يكونون متوترين جداً لدرجة أنهم ينسون ما يجب فعله - خبير التأمينات كلاوس لينهوف يقدم أهم النصائح",
    keywords: ["Unfall = حادث", "Erste Hilfe = إسعاف أولي", "Tipps = نصائح"],
    simplified: "نصائح الإسعافات الأولية - أهم إرشادات خبراء التأمين",
    imagine: "🧠👁️ تخيل سيارة محطمة (Unfall) ورجل إسعاف يقدم المساعدة 🚗💥🚑"
};

HELP_DATA["lesen1_exam13_q3"] = {
    text: "Text 3: Hast du schon mal mit dem Gedanken gespielt, Pilotin zu werden? Nicht? Dann geht es euch wahrscheinlich wie den meisten Mädchen oder Frauen...",
    meaning: "هل فكرتِ من قبل في أن تصبحي طيارة؟ لا؟ إذن أنتِ على الأرجح مثل معظم الفتيات أو النساء",
    keywords: ["Pilotin = طيارة", "Frau = امرأة", "Traum = حلم"],
    simplified: "امرأة في السماء - قصة طيارة",
    imagine: "🧠👁️ تخيل امرأة (Frau) تقود طائرة (Flugzeug) في السماء ✈️👩‍✈️"
};

HELP_DATA["lesen1_exam13_q4"] = {
    text: "Text 4: Der Schweizer Louis Palmer hat eine Weltumrundung mit seinem 'Solartaxi' fast abgeschlossen... Nun habe ich fast den ganzen Planeten umrundet, ohne einen Tropfen Benzin zu brauchen.",
    meaning: "السويسري لويس بالمر أنهى تقريباً جولة حول العالم بسيارته الأجرة الشمسية - الآن قدت تقريباً حول الكوكب بأكمله دون قطرة بنزين واحدة",
    keywords: ["Solartaxi = سيارة أجرة شمسية", "Weltumrundung = حول العالم", "Benzin = بنزين"],
    simplified: "حول العالم بدون قطرة بنزين - سيارة شمسية",
    imagine: "🧠👁️ تخيل سيارة شمسية (Solartaxi) تسافر حول العالم 🌍☀️🚗"
};

HELP_DATA["lesen1_exam13_q5"] = {
    text: "Text 5: Die Bundesregierung und ihre Spitzenbeamten sind auf Dienstreisen gern mit dem Flugzeug unterwegs... Der Vergleich mit anderen Jahren zeigt aber, dass sich die meisten Politiker bemühen, immer häufiger vom Flugzeug auf die Bahn umzusteigen.",
    meaning: "الحكومة الاتحادية وكبار موظفيها يفضلون السفر بالطائرة في رحلات العمل - المقارنة مع سنوات أخرى تظهر أن معظم السياسيين يحاولون التحول من الطائرة إلى القطار بشكل متزايد",
    keywords: ["Fliegen = طيران", "fahren = قيادة", "Politiker = سياسيون"],
    simplified: "الطيران بدلاً من القيادة - سياسيون يفضلون الطائرة",
    imagine: "🧠👁️ تخيل سياسياً (Politiker) يركب طائرة (Flugzeug) بدلاً من القطار (Zug) ✈️🚂"
};

// ============================================
// Exam 14: Kaffee
// ============================================

HELP_DATA["lesen1_exam14_q1"] = {
    text: "Text 1: Das erste Kaffeehaus in Leipzig, 'Zum arabischen Coffee-Baum', öffnete 1685 seine Pforten... Kaffeesachsen wurden früher die Bewohner des Landes zwischen Leipzig und polnischer Grenze scherzhaft von den anderen Deutschen genannt.",
    meaning: "أول مقهى في لايبزيغ، 'شجرة القهوة العربية'، فتح أبوابه عام 1685 - سكان المنطقة بين لايبزيغ والحدود البولندية كانوا يُسمون سابقاً بمزاح 'ساكسون القهوة' من قبل الألمان الآخرين",
    keywords: ["Kaffee = قهوة", "Sachsen = ساكسونيا", "ohne Kaffee = بدون قهوة"],
    simplified: "بدون قهوة لا شيء يمشي - ساكسونيا وعشق القهوة",
    imagine: "🧠👁️ تخيل شخصاً ساكسونياً (Sachse) يقول 'لا حياة بدون قهوة' ☕"
};

HELP_DATA["lesen1_exam14_q2"] = {
    text: "Text 2: Eppingen liegt etwa auf halbem Weg zwischen Karlsruhe und Heilbronn im Kraichgau... Die Altstadt des Städtchens ist ein einziges Museum: Über 100 Fachwerkhäuser...",
    meaning: "إبينغن تقع في منتصف الطريق بين كارلسروه وهايلبرون في كرايشغاو - البلدة القديمة للمدينة الصغيرة هي متحف واحد: أكثر من 100 منزل نصف خشبي",
    keywords: ["Kleinstadt = مدينة صغيرة", "Geheimtipp = نصيحة سرية", "Fachwerkhäuser = منازل نصف خشبية"],
    simplified: "مدينة صغيرة جذابة - نصيحة سياحية سرية",
    imagine: "🧠👁️ تخيل مدينة صغيرة (Kleinstadt) جميلة ومنازلها خشبية قديمة 🏘️✨"
};

HELP_DATA["lesen1_exam14_q3"] = {
    text: "Text 3: Das Kloster Maulbronn wurde 1147 von Zisterziensermönchen gegründet... Maulbronn war besonders wegen seiner Klosterschule bekannt, die von namhaften Persönlichkeiten besucht wurde: Johannes Kepler und Hermann Hesse.",
    meaning: "دير مولبرون تأسس عام 1147 على يد رهبان السيسترسي - كان مولبرون مشهوراً خاصة بمدرسته الديرية التي ارتادها شخصيات مشهورة: يوهانس كيبلر وهيرمان هيسه",
    keywords: ["Kloster = دير", "Schule = مدرسة", "berühmte Schüler = طلاب مشهورون"],
    simplified: "صرامة ديرية لطلاب مشهورين - قصة كيبلر وهيسه",
    imagine: "🧠👁️ تخيل ديراً (Kloster) صارماً وطلاباً (Schüler) يدرسون بجد 📚🏰"
};

HELP_DATA["lesen1_exam14_q4"] = {
    text: "Text 4: Auf einer Anhöhe oberhalb des Bodensees liegt, ca. 10 km vom See entfernt... das ehemalige Zisterzienserkloster Salem. Im Feuerwehrmuseum findet der interessierte Besucher alte Feuerwehrwagen...",
    meaning: "على تلة فوق بحيرة بودن، تبعد حوالي 10 كيلومترات عن البحيرة... دير سالم السيسترسي السابق - في متحف الإطفاء يجد الزائر المهتم عربات إطفاء قديمة",
    keywords: ["Kloster = دير", "Feuerwache = محطة إطفاء", "Feuerwehrwagen = عربة إطفاء"],
    simplified: "دير قديم كمركز إطفاء - متاحف في دير سالم",
    imagine: "🧠👁️ تخيل ديراً قديماً (Kloster) تحول إلى متحف إطفاء 🔥🚒🏰"
};

HELP_DATA["lesen1_exam14_q5"] = {
    text: "Text 5: Vermutlich vor fast 900 Jahren, irgendwann im dreizehnten Jahrhundert, sollen die Menschen herausgefunden haben, was es mit dem Kaffee auf sich hat. Eine Legende erzählt von einem jemenitischen Ziegenhirten...",
    meaning: "يفترض أنه قبل حوالي 900 سنة، في وقت ما في القرن الثالث عشر، اكتشف الناس ماهية القهوة - أسطورة تحكي عن راعي ماعز يمني",
    keywords: ["Kaffee = قهوة", "Entdeckung = اكتشاف", "Legende = أسطورة"],
    simplified: "اكتشاف وانتشار القهوة - أسطورة الراعي اليمني",
    imagine: "🧠👁️ تخيل راعي ماعز يمني يكتشف حبوب البن (Kaffeebohnen) 🐐☕"
};

// ============================================
// Exam 15: Programmierer
// ============================================

HELP_DATA["lesen1_exam15_q1"] = {
    text: "Text 1: Martina Lux hat ein Hobby, mit dem sie im Kreis ihrer Freundinnen ziemlich allein steht: Sie programmiert in ihrer Freizeit... Bei 'Jugend programmiert' traf Martina von letztem Freitag bis Sonntag mit gleichgesinnten Jungen und Mädchen zusammen.",
    meaning: "مارتينا لوكس لديها هواية تجعلها وحيدة بين صديقاتها: إنها تبرمج في وقت فراغها - في 'شباب يبرمجون' التقت مارتينا من الجمعة الماضية حتى الأحد مع أولاد وبنات متشابهين في التفكير",
    keywords: ["Programmierer = مبرمج", "Jugendliche = شباب", "Workshop = ورشة عمل"],
    simplified: "نهاية أسبوع تدريب لمطوري برامج صغار",
    imagine: "🧠👁️ تخيل شاباً يبرمج (programmiert) على حاسوبه 💻👨‍💻"
};

HELP_DATA["lesen1_exam15_q2"] = {
    text: "Text 2: 'Jugend forscht' ist ein bundesweiter Nachwuchswettbewerb... Im Rahmen von 'Jugend forscht' wird sogar eine Reise zur Nobelpreisverleihung in Stockholm angeboten.",
    meaning: "'شباب يبحثون' هو مسابقة وطنية للمواهب الشابة - ضمن 'شباب يبحثون' يتم عرض رحلة إلى حفل توزيع جوائز نوبل في ستوكهولم",
    keywords: ["Jugend forscht = شباب يبحثون", "Gewinne = جوائز", "Nobelpreis = نوبل"],
    simplified: "جوائز مثيرة للمواهب العلمية الشابة - رحلة إلى نوبل",
    imagine: "🧠👁️ تخيل شاباً يحصل على جائزة (Preis) في حفل نوبل 🏆🎓"
};

HELP_DATA["lesen1_exam15_q3"] = {
    text: "Text 3: Die Industriellenvereinigung beklagt in einer jüngsten Pressemitteilung den deutlichen Mangel an Fachkräften in den Naturwissenschaften und technischen Berufen... ruft dazu auf, insbesondere Mädchen und junge Frauen für solche Berufe zu gewinnen.",
    meaning: "اتحاد الصناعيين يشتكي في بيان صحفي حديث من النقص الواضح في الكوادر المتخصصة في العلوم والمهن التقنية - يدعو بشكل خاص لكسب الفتيات والشابات لمثل هذه المهن",
    keywords: ["Fachkräftemangel = نقص كوادر", "Frauen = نساء", "technische Berufe = مهن تقنية"],
    simplified: "مطالب ببذل المزيد من الجهود لجذب الكوادر النسائية",
    imagine: "🧠👁️ تخيل مهندسة (Ingenieurin) تعمل في مختبر تقني 👩‍🔬💡"
};

HELP_DATA["lesen1_exam15_q4"] = {
    text: "Text 4: Im Kulturzentrum war gestern Abend Tobias Meyer zu Gast... Berufsorientierung als eine Entwicklung, die eng mit den persönlichen und sozialen Beziehungen eines jungen Menschen zusammenhängt.",
    meaning: "في المركز الثقافي كان توبياس ماير ضيفاً مساء الأمس - التوجيه المهني كتطوير مرتبط ارتباطاً وثيقاً بالعلاقات الشخصية والاجتماعية للشاب",
    keywords: ["Berufswahl = اختيار مهنة", "Jugendliche = شباب", "Umfeld = محيط"],
    simplified: "اختيار المهنة - الشباب يتأثرون بشدة ببيئتهم الاجتماعية",
    imagine: "🧠👁️ تخيل شاباً (Jugendlicher) يحاول اختيار مهنة (Beruf) بين خيارات كثيرة 🤔💼"
};

HELP_DATA["lesen1_exam15_q5"] = {
    text: "Text 5: Wie eine repräsentative Umfrage unter Studenten kürzlich zeigte, erfreut sich die Automobilindustrie nach wie vor großer Beliebtheit bei Studierenden der Fachgebiete Wirtschaft und Technik.",
    meaning: "كما أظهر استبيان تمثيلي بين الطلاب مؤخراً، لا تزال صناعة السيارات تحظى بشعبية كبيرة بين طلاب الاقتصاد والتقنية",
    keywords: ["Automobilindustrie = صناعة سيارات", "Studenten = طلاب", "Zukunft = مستقبل"],
    simplified: "خريجو التخصصات التقنية يرون مستقبلهم في صناعة السيارات",
    imagine: "🧠👁️ تخيل مهندس شاب (junger Ingenieur) يعمل في مصنع سيارات 🚗🔧"
};

// ============================================
// Exam 16: Programmierer (التعديل 1)
// ============================================

HELP_DATA["lesen1_exam16_q1"] = {
    text: "Text 1: Martina Lux hat ein Hobby, mit dem sie im Kreis ihrer Freundinnen ziemlich allein steht: Sie programmiert in ihrer Freizeit... In 15 Gruppen entwickelten die jungen Nachwuchsprogrammierer ihre Projekte.",
    meaning: "مارتينا لوكس لديها هواية تجعلها وحيدة بين صديقاتها: إنها تبرمج في وقت فراغها - في 15 مجموعة طور المبرمجون الشباب مشاريعهم",
    keywords: ["Förderwochenende = نهاية أسبوع دعم", "Softwareentwickler = مطورو برامج", "Workshop = ورشة عمل"],
    simplified: "نهاية أسبوع تدريب لمطوري البرامج الشباب",
    imagine: "🧠👁️ تخيل مجموعة من الشباب يتعلمون البرمجة (programmieren) معاً 👥💻"
};

HELP_DATA["lesen1_exam16_q2"] = {
    text: "Text 2: 'Jugend forscht' ist ein bundesweiter Nachwuchswettbewerb... Im Rahmen von 'Jugend forscht' wird sogar eine Reise zur Nobelpreisverleihung in Stockholm angeboten.",
    meaning: "'شباب يبحثون' هو مسابقة وطنية للمواهب الشابة - ضمن 'شباب يبحثون' يتم عرض رحلة إلى حفل توزيع جوائز نوبل في ستوكهولم",
    keywords: ["Jugend forscht = شباب يبحثون", "Gewinne = جوائز", "Nobelpreis = نوبل"],
    simplified: "جوائز مثيرة للمواهب العلمية الشابة",
    imagine: "🧠👁️ تخيل شاباً واقفاً على منصة التتويج 🏆🥇"
};

HELP_DATA["lesen1_exam16_q3"] = {
    text: "Text 3: Die Industriellenvereinigung beklagt in einer jüngsten Pressemitteilung den deutlichen Mangel an Fachkräften in den Naturwissenschaften und technischen Berufen... ruft dazu auf, insbesondere Mädchen und junge Frauen für solche Berufe zu gewinnen.",
    meaning: "اتحاد الصناعيين يشتكي من النقص الواضح في الكوادر المتخصصة - يدعو بشكل خاص لكسب الفتيات والشابات لمثل هذه المهن",
    keywords: ["Fachkräftemangel = نقص كوادر", "Frauen = نساء", "Nachwuchs = كوادر شابة"],
    simplified: "مطالب بجهود أكبر لجذب الكوادر النسائية",
    imagine: "🧠👁️ تخيل فتاة (Mädchen) تدرس الهندسة في الجامعة 👩‍🎓🔬"
};

HELP_DATA["lesen1_exam16_q4"] = {
    text: "Text 4: Im Kulturzentrum war gestern Abend Tobias Meyer zu Gast... Berufsorientierung als eine Entwicklung, die eng mit den persönlichen und sozialen Beziehungen eines jungen Menschen zusammenhängt.",
    meaning: "في المركز الثقافي كان توبياس ماير ضيفاً - التوجيه المهني كتطوير مرتبط ارتباطاً وثيقاً بالعلاقات الشخصية والاجتماعية للشاب",
    keywords: ["Berufswahl = اختيار مهنة", "Umfeld = محيط", "Jugendliche = شباب"],
    simplified: "اختيار المهنة يتأثر بالبيئة الاجتماعية",
    imagine: "🧠👁️ تخيل شاباً يتحدث مع والده عن اختيار المهنة (Berufswahl) 👨‍👦💭"
};

HELP_DATA["lesen1_exam16_q5"] = {
    text: "Text 5: Wie eine repräsentative Umfrage unter Studenten kürzlich zeigte, erfreut sich die Automobilindustrie nach wie vor großer Beliebtheit bei Studierenden der Fachgebiete Wirtschaft und Technik.",
    meaning: "كما أظهر استبيان حديث، لا تزال صناعة السيارات تحظى بشعبية كبيرة بين طلاب الاقتصاد والتقنية",
    keywords: ["Automobilindustrie = صناعة سيارات", "Studenten = طلاب", "Fahrzeugbranche = قطاع المركبات"],
    simplified: "خريجو التقنية يرون مستقبلهم في قطاع السيارات",
    imagine: "🧠👁️ تخيل طالباً (Student) يحلم بسيارة أحلامه 💭🚗"
};

// ============================================
// Exam 17: Programmierer (التعديل 2)
// ============================================

HELP_DATA["lesen1_exam17_q1"] = {
    text: "Text 1: Martina Lux hat ein Hobby, mit dem sie im Kreis ihrer Freundinnen ziemlich allein steht: Sie programmiert in ihrer Freizeit... In 15 Gruppen entwickelten die jungen Nachwuchsprogrammierer ihre Projekte.",
    meaning: "مارتينا لوكس لديها هواية تجعلها وحيدة بين صديقاتها: إنها تبرمج في وقت فراغها - في 15 مجموعة طور المبرمجون الشباب مشاريعهم",
    keywords: ["Förderwochenende = نهاية أسبوع دعم", "Softwareentwickler = مطورو برامج", "Programmierer = مبرمجون"],
    simplified: "دعم لمطوري البرامج الشباب في نهاية الأسبوع",
    imagine: "🧠👁️ تخيل شاباً يبرمج (programmiert) بحماس 💻🔥"
};

HELP_DATA["lesen1_exam17_q2"] = {
    text: "Text 2: 'Jugend forscht' ist ein bundesweiter Nachwuchswettbewerb... Im Rahmen von 'Jugend forscht' wird sogar eine Reise zur Nobelpreisverleihung in Stockholm angeboten.",
    meaning: "'شباب يبحثون' هو مسابقة وطنية للمواهب الشابة - ضمن 'شباب يبحثون' يتم عرض رحلة إلى حفل توزيع جوائز نوبل في ستوكهولم",
    keywords: ["Jugend forscht = شباب يبحثون", "Nobelpreis = نوبل", "Stockholm = ستوكهولم"],
    simplified: "رحلة إلى حفل نوبل للمواهب الشابة",
    imagine: "🧠👁️ تخيل شاباً يسافر إلى ستوكهولم (Stockholm) لحفل نوبل ✈️🏆"
};

HELP_DATA["lesen1_exam17_q3"] = {
    text: "Text 3: Die Industriellenvereinigung beklagt in einer jüngsten Pressemitteilung den deutlichen Mangel an Fachkräften in den Naturwissenschaften und technischen Berufen... ruft dazu auf, insbesondere Mädchen und junge Frauen für solche Berufe zu gewinnen.",
    meaning: "اتحاد الصناعيين يشتكي من النقص الواضح في الكوادر المتخصصة - يدعو لكسب الفتيات والشابات للمهن التقنية",
    keywords: ["Fachkräftemangel = نقص كوادر", "Mädchen = فتيات", "Frauen = نساء"],
    simplified: "جهود مطلوبة لجذب النساء للمهن التقنية",
    imagine: "🧠👁️ تخيل فتاة (Mädchen) تعمل في مختبر كمبيوتر 🖥️👩‍💻"
};

HELP_DATA["lesen1_exam17_q4"] = {
    text: "Text 4: Im Kulturzentrum war gestern Abend Tobias Meyer zu Gast... Berufsorientierung als eine Entwicklung, die eng mit den persönlichen und sozialen Beziehungen eines jungen Menschen zusammenhängt.",
    meaning: "في المركز الثقافي كان توبياس ماير ضيفاً - التوجيه المهني كتطوير مرتبط بالعلاقات الشخصية والاجتماعية للشاب",
    keywords: ["Berufsorientierung = توجيه مهني", "Jugendliche = شباب", "Diskussion = نقاش"],
    simplified: "مناقشة حول التوجيه المهني في المدارس",
    imagine: "🧠👁️ تخيل مجموعة من الشباب يتناقشون (diskutieren) حول المستقبل 🗣️👥"
};

HELP_DATA["lesen1_exam17_q5"] = {
    text: "Text 5: Wie eine repräsentative Umfrage unter Studenten kürzlich zeigte, erfreut sich die Automobilindustrie nach wie vor großer Beliebtheit bei Studierenden der Fachgebiete Wirtschaft und Technik.",
    meaning: "كما أظهر استبيان حديث، لا تزال صناعة السيارات تحظى بشعبية كبيرة بين طلاب الاقتصاد والتقنية",
    keywords: ["Automobilindustrie = صناعة سيارات", "Fahrzeugbranche = قطاع مركبات", "Studenten = طلاب"],
    simplified: "خريجو التقنية يفضلون قطاع السيارات",
    imagine: "🧠👁️ تخيل طالباً (Student) يتفقد سيارة جديدة في معرض 🚗🏭"
};

// ============================================
// Exam 18: Trampolin
// ============================================

HELP_DATA["lesen1_exam18_q1"] = {
    text: "Text 1: Die meisten Menschen verbinden den Begriff 'Barrierefreiheit' mit dem Zugang zu Gebäuden oder Transportmitteln... Die APA hat einen Nachrichtendienst in einfacher und leicht verständlicher Sprache ins Leben gerufen.",
    meaning: "معظم الناس يربطون مصطلح 'إمكانية الوصول' بالوصول إلى المباني أو وسائل النقل - APA أطلقت خدمة إخبارية بلغة بسيطة وسهلة الفهم",
    keywords: ["Informationen = معلومات", "verstehen = فهم", "Sprache = لغة"],
    simplified: "المعلومات بسهولة - خدمة إخبارية بلغة مبسطة",
    imagine: "🧠👁️ تخيل شخصاً يقرأ أخباراً (Nachrichten) بلغة سهلة 📰😊"
};

HELP_DATA["lesen1_exam18_q2"] = {
    text: "Text 2: Die WHO warnt vor den Folgen ungesunder Werbung im Internet... Kinder und Jugendliche treffen häufig auf Anzeigen für ungesunde Lebensmittel wie Süßigkeiten oder salzige und fettreiche Snacks.",
    meaning: "منظمة الصحة العالمية تحذر من عواقب الإعلانات غير الصحية على الإنترنت - الأطفال والمراهقون يواجهون غالباً إعلانات عن أطعمة غير صحية مثل الحلويات والوجبات الخفيفة المالحة والغنية بالدهون",
    keywords: ["Medienkonsum = استهلاك إعلامي", "Jugendliche = مراهقون", "ungesund = غير صحي"],
    simplified: "استهلاك الإعلام يعزز نمط حياة غير صحي",
    imagine: "🧠👁️ تخيل طفلاً يأكل وجبات سريعة (Fast Food) أمام التلفاز 📺🍔😟"
};

HELP_DATA["lesen1_exam18_q3"] = {
    text: "Text 3: Schülerinnen und Schüler sollen im Schulunterricht auch den Umgang mit Nachrichten lernen... Das Ziel ist, jungen Menschen den kritischen Umgang mit den Inhalten und der Präsentation von Nachrichten beizubringen.",
    meaning: "يجب على التلاميذ تعلم التعامل مع الأخبار أيضاً في الدروس المدرسية - الهدف هو تعليم الشباب التعامل النقدي مع محتوى وعرض الأخبار",
    keywords: ["Nachrichten = أخبار", "Unterricht = درس", "Schüler = تلاميذ"],
    simplified: "العمل مع الأخبار في الفصل الدراسي",
    imagine: "🧠👁️ تخيل تلاميذ (Schüler) يناقشون الأخبار (Nachrichten) في الفصل 🏫📺"
};

HELP_DATA["lesen1_exam18_q4"] = {
    text: "Text 4: Mit dem Trampolin den Körper in Schwung bringen - für viele Menschen ist das Sprunggerät eine gute Möglichkeit... Orthopäden weisen auf die extrem hohe Unfallgefahr hin. Sie möchte dazu aufrufen, einige Sicherheitsregeln zu befolgen.",
    meaning: "تحريك الجسم بالترامبولين - بالنسبة لكثير من الناس، جهاز القفز هذا وسيلة جيدة - أطباء العظام يشيرون إلى خطر الحوادث المرتفع جداً - يدعون إلى اتباع بعض قواعد الأمان",
    keywords: ["Trampolin = ترامبولين", "Sicherheit = أمان", "Unfall = حادث"],
    simplified: "خبراء يحذرون من الاستخدام الخاطئ لأجهزة القفز",
    imagine: "🧠👁️ تخيل طفلاً يقفز على الترامبولين (Trampolin) بدون شبكة أمان ⚠️🤸"
};

HELP_DATA["lesen1_exam18_q5"] = {
    text: "Text 5: Die Klage, dass Jugendliche und junge Erwachsene kein Interesse mehr an Nachrichten haben, ist unbegründet... Den klassischen Medien wie Nachrichtensendungen oder Tageszeitungen wird eher geglaubt. Soziale Netzwerke können herkömmliche Nachrichtenquellen nicht ersetzen.",
    meaning: "الشكوى من أن الشباب ليس لديهم اهتمام بالأخبار لا أساس لها من الصحة - وسائل الإعلام التقليدية مثل النشرات الإخبارية أو الصحف اليومية تحظى بتصديق أكبر - الشبكات الاجتماعية لا يمكنها استبدال مصادر الأخبار التقليدية",
    keywords: ["Nachrichten = أخبار", "traditionelle Medien = وسائل تقليدية", "Jugendliche = شباب"],
    simplified: "وسائل الإعلام التقليدية لا تزال مطلوبة",
    imagine: "🧠👁️ تخيل شاباً يقرأ جريدة (Zeitung) بدلاً من هاتفه 📰👦"
};

// ============================================
// Exam 19: Bonbons
// ============================================

HELP_DATA["lesen1_exam19_q1"] = {
    text: "Text 1: Bonbons machen Kinder glücklich... Schon vor über 1.000 Jahren gab es im antiken China, in Griechenland und im Römischen Reich Süßwaren aus Honig, Blüten und Früchten... das einzige Bonbon-Museum Deutschlands.",
    meaning: "الحلوى تسعد الأطفال - منذ أكثر من 1000 سنة كانت هناك حلويات من العسل والزهور والفواكه في الصين القديمة واليونان والإمبراطورية الرومانية - متحف الحلوى الوحيد في ألمانيا",
    keywords: ["Bonbons = حلوى", "Tradition = تقليد", "Museum = متحف"],
    simplified: "حلويات ذات تقاليد عريقة - متحف الحلوى في ألمانيا",
    imagine: "🧠👁️ تخيل متحفاً (Museum) مليئاً بالحلوى القديمة 🍬🏛️"
};

HELP_DATA["lesen1_exam19_q2"] = {
    text: "Text 2: Am Frankfurter Hauptbahnhof steht ein Retomat - ein Automat, in dem abgelaufene Schokoriegel, Chips, Nüsse und andere Leckereien verkauft werden... kurz vor oder nach dem Ablauf des Mindesthaltbarkeitsdatums, sind aber trotzdem noch gut.",
    meaning: "في محطة فرانكفورت الرئيسية يوجد ريتومات - آلة تبيع ألواح شوكولاتة منتهية الصلاحية، رقائق، مكسرات وأطعمة شهية أخرى - قبل أو بعد انتهاء تاريخ الصلاحية بقليل، لكنها لا تزال صالحة",
    keywords: ["Naschen = تناول وجبات خفيفة", "wegwerfen = رمي", "Retomat = آلة إعادة"],
    simplified: "تناول الطعام بدلاً من الرمي - آلة لبيع الأطعمة منتهية الصلاحية",
    imagine: "🧠👁️ تخيل آلة بيع (Automat) في محطة القطار تبيع أطعمة منتهية الصلاحية 🚂🥫"
};

HELP_DATA["lesen1_exam19_q3"] = {
    text: "Text 3: Mehrere Badebecken sowie Räume für Schwitz- und Dampfbäder machten sie zu ganz besonderen Prestigebauten... Für viele Menschen im alten Rom gehörte ein Besuch in einer Therme zu den beliebtesten Freizeitaktivitäten.",
    meaning: "العديد من أحواض الاستحمام وغرف الساونا والبخار جعلتها مباني فخمة جداً - بالنسبة لكثير من الناس في روما القديمة، كانت زيارة الحمامات الساخنة من أكثر الأنشطة الترفيهية شعبية",
    keywords: ["Thermalbad = حمام ساخن", "Rom = روما", "Wellness = عافية"],
    simplified: "الماء، الدفء، العافية - متع الاستحمام القديمة",
    imagine: "🧠👁️ تخيل رومانياً قديماً يسترخي في حمام ساخن (Thermalbad) 🏛️🛁"
};

HELP_DATA["lesen1_exam19_q4"] = {
    text: "Text 4: Viele glauben, dass Süßigkeiten die Stimmung aufhellen, die Konzentration verbessern... Wissenschaftler haben erforscht, wie Zucker auf unser Gemüt wirkt. Sie stellten praktisch keinen positiven Einfluss des Zuckerkonsums auf die Laune fest - im Gegenteil.",
    meaning: "كثيرون يعتقدون أن الحلويات تحسن المزاج وتحسن التركيز - الباحثون درسوا تأثير السكر على حالتنا المزاجية - وجدوا عملياً لا تأثير إيجابي لاستهلاك السكر على المزاج - بل العكس",
    keywords: ["Zucker = سكر", "glücklich = سعيد", "Stimmung = مزاج"],
    simplified: "خطأ: الحلويات لا تجعلنا سعداء - دراسة تكشف الحقيقة",
    imagine: "🧠👁️ تخيل شخصاً يأكل حلواً (Bonbon) لكن وجهه حزين 😞🍬"
};

HELP_DATA["lesen1_exam19_q5"] = {
    text: "Text 5: Wellness und der Besuch von Kurorten und Thermalbädern haben seit Jahrhunderten Tradition in Ungarn... 123 Thermalquellen finden sich allein in Budapest, das berühmt für seine Bäder ist.",
    meaning: "العافية وزيارة المنتجعات والحمامات الساخنة لها تقاليد منذ قرون في المجر - 123 ينبوعاً حاراً توجد في بودابست وحدها، المشهورة بحماماتها",
    keywords: ["Thermalbad = حمام ساخن", "Budapest = بودابست", "Wellness = عافية"],
    simplified: "في مدينة الينابيع الدافئة - بودابست والحمامات الساخنة",
    imagine: "🧠👁️ تخيل مدينة بودابست (Budapest) و حماماً ساخناً تاريخياً 🇭🇺🛁"
};

// ============================================
// Exam 20: Umwelt
// ============================================

HELP_DATA["lesen1_exam20_q1"] = {
    text: "Text 1: Mitglieder des 'Tauschrings Harmsdorf e.V.' leben vor, wie man nachhaltig mit Ressourcen umgehen kann... 'Tauschen, nicht wegwerfen!' ist das Motto dieser Initiative.",
    meaning: "أعضاء 'حلقة مقايضة هارمسدورف' يعيشون نموذجاً في كيفية التعامل المستدام مع الموارد - 'قايض، لا ترمي!' هو شعار هذه المبادرة",
    keywords: ["Tauschen = مقايضة", "Gegenstände = أشياء", "gebraucht = مستعمل"],
    simplified: "أصحاب جدد لأشياء لم تعد مستعملة",
    imagine: "🧠👁️ تخيل أشخاصاً يتبادلون (tauschen) الأشياء بدلاً من رميها 🔄🎁"
};

HELP_DATA["lesen1_exam20_q2"] = {
    text: "Text 2: 'Man gönnt sich ja sonst nichts.' Und schon ist die Einkaufstüte voll und das Konto leer... Die Ernüchterung folgt oft schnell: Wer später merkt, wie teuer das alles war, schüttet Stresshormone aus.",
    meaning: "'المرء لا يدلل نفسه بأي شيء آخر' - وبسرعة تصبح حقيبة التسوق ممتلئة والحساب فارغاً - تليها خيبة الأمل بسرعة: من يكتشف لاحقاً كم كان كل شيء مكلفاً، يفرز هرمونات التوتر",
    keywords: ["Einkauf = تسوق", "Freude = فرحة", "kurze Zeit = وقت قصير"],
    simplified: "أكياس التسوق الممتلئة لا تسعد إلا لفترة قصيرة",
    imagine: "🧠👁️ تخيل شخصاً يحمل أكياس تسوق (Einkaufstüten) كثيرة لكن وجهه متعب 🛍️😩"
};

HELP_DATA["lesen1_exam20_q3"] = {
    text: "Text 3: Geklickt, gekauft, zurückgeschickt: Kunden nutzen im Online-Handel gerne die Möglichkeit, Waren kostenlos zurückzusenden... Die Kosten für die Retouren trägt der Anbieter.",
    meaning: "نقر، شراء، إرجاع - العملاء في التجارة الإلكترونية يستخدمون بسعادة إمكانية إرجاع البضائع مجاناً - تكاليف الإرجاع يتحملها المزود",
    keywords: ["Rücksendungen = إرجاع", "Online-Handel = تجارة إلكترونية", "Händler = تجار"],
    simplified: "الإرجاع يفسد أعمال تجار الإنترنت",
    imagine: "🧠👁️ تخيل طروداً (Pakete) تعود أدراجها إلى المتجر 📦🔄😤"
};

HELP_DATA["lesen1_exam20_q4"] = {
    text: "Text 4: In sogenannten Repair-Cafés können defekte Gegenstände unter fachkundiger Anleitung wieder instandgesetzt werden... 'Damit schonen wir die Umwelt und den Geldbeutel'",
    meaning: "في ما يسمى بمقاهي الإصلاح، يمكن إصلاح الأشياء المعطلة بتوجيه من خبراء - 'بهذا نحمي البيئة والمحفظة'",
    keywords: ["Reparatur = إصلاح", "Geräte = أجهزة", "kaputt = معطل"],
    simplified: "معاً ننقذ الأجهزة المعطلة",
    imagine: "🧠👁️ تخيل أشخاصاً يصلحون (reparieren) جهازاً قديماً معاً 🔧🤝"
};

HELP_DATA["lesen1_exam20_q5"] = {
    text: "Text 5: Eine Studie zeigt: Großzügigkeit macht glücklich... Eine Verknüpfung zwischen großzügigem Verhalten und Glücksgefühl zeige sich auch im Gehirn.",
    meaning: "دراسة تظهر: الكرم يجعل سعيداً - علاقة بين السلوك الكريم والشعور بالسعادة تظهر أيضاً في الدماغ",
    keywords: ["Engagement = تطوع", "Glück = سعادة", "Großzügigkeit = كرم"],
    simplified: "من يبدي تطوعاً يزيد شعوره بالسعادة",
    imagine: "🧠👁️ تخيل شخصاً سعيداً (glücklich) لأنه ساعد آخرين ❤️😊"
};

// ============================================
// Exam 21-45 بنفس النظام...
// ============================================
// (سيتم إكمال باقي الامتحانات بنفس الأسلوب)

// ============================================
// تصدير للاستخدام
// ============================================

// ============================================
// lesen1.js - جميع شروحات Lesen Teil 1 (مكتمل)
// ============================================


// ============================================
// Exam 21: Licht
// ============================================

HELP_DATA["lesen1_exam21_q1"] = {
    text: "Text 1: Heute machen die elektrische Beleuchtung... die Nacht fast zum Tag. Vor der Erfindung der Elektrizität war das anders... Museum für Dorfkultur zeigt, wie sich das Landleben früher nach Einbruch der Dunkelheit abspielte.",
    meaning: "اليوم تجعل الإضاءة الكهربائية الليل كالنهار تقريباً - قبل اختراع الكهرباء كان الأمر مختلفاً - متحف الثقافة الريفية يعرض كيف كانت الحياة الريفية قديماً بعد حلول الظلام",
    keywords: ["Lichtquellen = مصادر ضوء", "vergangene Zeiten = أوقات ماضية", "Nacht = ليل"],
    simplified: "ماذا تفعل عندما يحل الليل؟ - مصادر ضوء الأزمنة الغابرة",
    imagine: "🧠👁️ تخيل شخصاً يضيء شمعة (Kerze) في الليل 🕯️🌙"
};

HELP_DATA["lesen1_exam21_q2"] = {
    text: "Text 2: Jahrelang zog es vor allem junge Berufstätige in die Großstädte... Doch seit einiger Zeit beobachten Forscher eine gegenläufige Bewegung: Immer mehr Menschen kehren den Metropolen den Rücken und lassen sich im Umland nieder.",
    meaning: "لسنوات كانت المدن الكبرى تجذب خاصة الشباب العاملين - لكن منذ بعض الوقت يلاحظ الباحثون حركة معاكسة: المزيد من الناس يغادرون المدن الكبرى ويستقرون في الضواحي",
    keywords: ["Stadtbewohner = سكان مدينة", "Landleben = حياة ريفية", "entdecken = يكتشفون"],
    simplified: "سكان المدن يكتشفون الحياة الريفية",
    imagine: "🧠👁️ تخيل شخصاً ينتقل من المدينة (Stadt) إلى الريف (Land) 🏙️→🌾"
};

HELP_DATA["lesen1_exam21_q3"] = {
    text: "Text 3: Satellitenbilder der Erde bei Nacht zeigen ein strahlendes Lichtermeer... Seit der Erfindung der Glühbirne steht Licht für Wohlstand und Fortschritt. Die Städte sind nachts hell erleuchtet - nicht immer jedoch zum Wohle von Mensch und Umwelt.",
    meaning: "صور الأقمار الصناعية للأرض ليلاً تظهر بحراً من الضوء - منذ اختراع المصباح الكهربائي، الضوء يعني الازدهار والتقدم - المدن مضاءة ليلاً - ليس دائماً لصالح الإنسان والبيئة",
    keywords: ["künstliches Licht = ضوء اصطناعي", "Auswirkungen = تأثيرات", "Umwelt = بيئة"],
    simplified: "تأثيرات الضوء الاصطناعي على الإنسان والبيئة",
    imagine: "🧠👁️ تخيل مدينة مضاءة (erleuchtete Stadt) بالكامل ليلاً 💡🌃"
};

HELP_DATA["lesen1_exam21_q4"] = {
    text: "Text 4: Vor zehn Jahren lebten Dirk und Antje Sebens noch in Mannheim... Dann kauften sie sich ein altes Forsthaus im Wald. Heute versuchen die beiden, so autark wie möglich zu leben. Die Solaranlage auf dem Dach liefert Strom, eigenes Holz die Wärme.",
    meaning: "قبل عشر سنوات كان ديرك وأنتي سيبنس يعيشان في مانهايم - ثم اشتريا منزلاً قديمًا في الغابة - اليوم يحاولان العيش بشكل مكتفٍ ذاتياً قدر الإمكان - الألواح الشمسية على السطح توفر الكهرباء، والحطب الخاص يوفر الدفء",
    keywords: ["Wald = غابة", "neues Zuhause = منزل جديد", "autark = مكتفٍ ذاتياً"],
    simplified: "الغابة كمنزل جديد - حياة مكتفية ذاتياً",
    imagine: "🧠👁️ تخيل عائلة تعيش في كوخ بالغابة (Wald) 🏡🌲"
};

HELP_DATA["lesen1_exam21_q5"] = {
    text: "Text 5: Wer verbringt nicht gerne sein Wochenende fernab der Stadt? Im Grünen... Forscher haben errechnet, dass wir bis zu 87 Prozent der Emissionen einsparen können, wenn wir in verkehrstechnisch günstiger Lage wohnen, also am besten in der Stadt.",
    meaning: "من لا يحب قضاء عطلته الأسبوعية بعيداً عن المدينة؟ في الخضرة... الباحثون حسبوا أنه يمكننا توفير ما يصل إلى 87% من الانبعاثات إذا سكنّا في موقع مناسب من حيث المواصلات، أي الأفضل في المدينة",
    keywords: ["Stadtbewohner = سكان مدينة", "umweltfreundlicher = صديق للبيئة", "leben = يعيشون"],
    simplified: "سكان المدن يعيشون بطريقة أكثر صداقة للبيئة",
    imagine: "🧠👁️ تخيل شخصاً في المدينة يركب دراجة (Fahrrad) بدلاً من السيارة 🚲🌱"
};

// ============================================
// Exam 22: Licht (التعديل 1)
// ============================================

HELP_DATA["lesen1_exam22_q1"] = {
    text: "Text 1: Das Museum für Dorfkultur zeigt, wie sich das Landleben früher nach Einbruch der Dunkelheit gestaltete... wie mühsam es war, das Feuer ständig am Brennen zu halten, oder wie schwierig es war, in dunklen Räumen zu arbeiten.",
    meaning: "متحف الثقافة الريفية يعرض كيف كانت الحياة الريفية قديماً بعد حلول الظلام - كم كان متعباً إبقاء النار مشتعلة باستمرار، أو كم كان صعباً العمل في الغرف المظلمة",
    keywords: ["Lichtquellen = مصادر ضوء", "vergangene Zeiten = أوقات ماضية", "Nacht = ليل", "Feuer = نار"],
    simplified: "ماذا تفعل عندما يحل الليل؟ - تحديات الإضاءة قديماً",
    imagine: "🧠👁️ تخيل شخصاً يشعل ناراً (Feuer) ليرى في الظلام 🔥🌙"
};

HELP_DATA["lesen1_exam22_q2"] = {
    text: "Text 2: Jahrelang zog es vor allem junge Berufstätige in die großen Städte... Immer mehr Menschen verlassen die Metropolen und ziehen zurück in ländliche Regionen. Sie schätzen die Ruhe, die Nähe zur Natur, die Hilfsbereitschaft der Nachbarn und die niedrigeren Mieten.",
    meaning: "لسنوات كانت المدن الكبرى تجذب الشباب العاملين - المزيد من الناس يغادرون المدن الكبرى ويعودون إلى المناطق الريفية - يقدرون الهدوء والقرب من الطبيعة ومساعدة الجيران والإيجارات المنخفضة",
    keywords: ["Stadtbewohner = سكان مدينة", "Landleben = حياة ريفية", "entdecken = يكتشفون", "Ruhe = هدوء"],
    simplified: "سكان المدن يكتشفون سحر الريف",
    imagine: "🧠👁️ تخيل عائلة تستمتع بالهدوء (Ruhe) في الريف 🌄😌"
};

HELP_DATA["lesen1_exam22_q3"] = {
    text: "Text 3: Satellitenbilder der Erde bei Nacht zeigen ein strahlendes Lichtermeer... Wissenschaftler sprechen bereits von einer massiven 'Lichtverschmutzung'. Weltweit gehen Forscher der Frage nach, wie sich die Lichtflut auf den gesamten Organismus auswirkt.",
    meaning: "صور الأقمار الصناعية للأرض ليلاً تظهر بحراً من الضوء - العلماء يتحدثون بالفعل عن 'تلوث ضوئي' هائل - باحثون حول العالم يبحثون كيف يؤثر فيضان الضوء على الكائن الحي بأكمله",
    keywords: ["künstliches Licht = ضوء اصطناعي", "Auswirkungen = تأثيرات", "Lichtverschmutzung = تلوث ضوئي"],
    simplified: "تأثيرات الضوء الاصطناعي - التلوث الضوئي",
    imagine: "🧠👁️ تخيل سماء مضيئة جداً لدرجة أنه لا يمكن رؤية النجوم (Sterne) 🌃🚫✨"
};

HELP_DATA["lesen1_exam22_q4"] = {
    text: "Text 4: Vor zehn Jahren lebten Dirk und Antje Seebens noch in Mannheim... Dann kauften sie sich ein Wochenendhaus im Wald. Besonders gefiel ihnen, dass es dort weder Strom noch fließendes Wasser gab. Das war für sie ein Abenteuer.",
    meaning: "قبل عشر سنوات كان ديرك وأنتي سيبنس يعيشان في مانهايم - ثم اشتريا منزلاً لقضاء عطلة نهاية الأسبوع في الغابة - أعجبهما بشكل خاص أنه لا يوجد كهرباء ولا ماء جارٍ هناك - كان ذلك مغامرة بالنسبة لهما",
    keywords: ["Wald = غابة", "neues Zuhause = منزل جديد", "Abenteuer = مغامرة"],
    simplified: "الغابة كملاذ جديد من المدينة",
    imagine: "🧠👁️ تخيل زوجين يبنيان كوخاً (Hütte) في الغابة 🏡🌲🪵"
};

HELP_DATA["lesen1_exam22_q5"] = {
    text: "Text 5: Forscher haben errechnet, dass wir bis zu 87 Prozent der Emissionen aus unserer Alltagsmobilität einsparen können, wenn wir in verkehrstechnisch günstiger Lage wohnen, also am besten in der Stadt mit Einkaufsmöglichkeiten und einem Carsharing-Standort vor der Tür.",
    meaning: "الباحثون حسبوا أنه يمكننا توفير ما يصل إلى 87% من انبعاثات تنقلاتنا اليومية إذا سكنّا في موقع مناسب من حيث المواصلات، أي الأفضل في المدينة مع إمكانيات التسوق وموقع لمشاركة السيارات أمام الباب",
    keywords: ["Stadtbewohner = سكان مدينة", "umweltfreundlicher = صديق للبيئة", "Carsharing = مشاركة سيارات"],
    simplified: "الحياة في المدينة أكثر صداقة للبيئة",
    imagine: "🧠👁️ تخيل محطة مشاركة سيارات (Carsharing-Station) في المدينة 🚗🤝"
};

// ============================================
// Exam 23: Kartoffel
// ============================================

HELP_DATA["lesen1_exam23_q1"] = {
    text: "Text 1: Über zehntausend wissenschaftliche Studien wurden im Auftrag der WHO durchgeführt... Das Risiko eines Herzinfarkts kann man durch täglichen Verzehr eines Apfels und tägliches zwanzigminütiges Radfahren erheblich reduzieren.",
    meaning: "تم إجراء أكثر من عشرة آلاف دراسة علمية بتكليف من منظمة الصحة العالمية - يمكن تقليل خطر النوبة القلبية بشكل كبير بتناول تفاحة يومياً وركوب الدراجة عشرين دقيقة يومياً",
    keywords: ["gesundes Leben = حياة صحية", "Krankheiten = أمراض", "WHO = منظمة الصحة العالمية"],
    simplified: "الحياة الصحية تحمي من أمراض الحضارة",
    imagine: "🧠👁️ تخيل شخصاً يأكل تفاحة (Apfel) ويمارس الرياضة 🍎🚴"
};

HELP_DATA["lesen1_exam23_q2"] = {
    text: "Text 2: Am Mittelmeer und in Mexiko wächst die Aloe-Vera-Pflanze... In der Wundheilung ist Aloegel sehr effektiv. Kosmetisch wird es für Cremes benutzt, die Hauterkrankungen lindern, Feuchtigkeit spenden und die Haut straffen.",
    meaning: "في البحر الأبيض المتوسط والمكسيك تنبت نبتة الألوة فيرا - جل الألوة فعال جداً في التئام الجروح - تجميلياً يستخدم في كريمات تخفف أمراض الجلد وترطب وتشد البشرة",
    keywords: ["Aloe Vera = ألوة فيرا", "Haut = بشرة", "Kosmetik = تجميل"],
    simplified: "مواد نباتية لصحة الجلد - الألوة فيرا للعناية بالبشرة",
    imagine: "🧠👁️ تخيل نبتة ألوة فيرا (Aloe Vera) وكريم مرطب 🪴🧴"
};

HELP_DATA["lesen1_exam23_q3"] = {
    text: "Text 3: Eine der ältesten bekannten Gemüsesorten ist der Spargel... Heute schätzen wir am Spargel besonders, dass er nicht dick macht. Die körperlich hart arbeitende Bevölkerung früherer Zeiten schätzte ihn deshalb nicht sehr, weil er kaum Energie lieferte.",
    meaning: "أحد أقدم أنواع الخضروات المعروفة هو الهليون - اليوم نقدر في الهليون بشكل خاص أنه لا يسمن - السكان الذين يعملون بأعمال بدنية شاقة في الأزمنة الغابرة لم يقدرونه كثيراً لأنه يقدم القليل من الطاقة",
    keywords: ["Spargel = هليون", "schlank = نحيف", "Gemüse = خضار"],
    simplified: "خضار نحيف للنحيفين - الهليون لا يسمن",
    imagine: "🧠👁️ تخيل طبق هليون (Spargel) لذيذاً ومناسباً للحمية 🥦✅"
};

HELP_DATA["lesen1_exam23_q4"] = {
    text: "Text 4: Schlank sein ist 'in'... Eine neue Theorie unterscheidet Nahrungsmittel in Fetthorter und Fettburner. Frisches Gemüse, Obst, Fisch und Geflügel versorgen den Körper mit Energie und helfen ihm, die Nahrungsstoffe optimal zu verwerten.",
    meaning: "النحافة 'موضة' - نظرية جديدة تفرق الأطعمة إلى مخزنة للدهون وحارقة للدهون - الخضروات الطازجة والفواكه والسمك والدواجن تمد الجسم بالطاقة وتساعده في الاستفادة المثلى من العناصر الغذائية",
    keywords: ["Ernährung = تغذية", "Figur = قوام", "Diät = حمية"],
    simplified: "قوام رائع من خلال تغذية متوازنة",
    imagine: "🧠👁️ تخيل شخصاً يأكل سلطة (Salat) ويحافظ على قوامه 🥗💪"
};

HELP_DATA["lesen1_exam23_q5"] = {
    text: "Text 5: Als typisch deutsch gilt sie, doch rund um den Globus ist sie eines der Basislebensmittel... Hunderte verschiedener Sorten gibt es auf der Welt, doch ihr Ursprung liegt in Südamerika. Gemeint ist die überaus populäre Kartoffel.",
    meaning: "تُعتبر بطيبة ألمانية، لكن حول العالم هي واحدة من الأغذية الأساسية - هناك مئات الأصناف المختلفة في العالم، لكن أصلها في أمريكا الجنوبية - المقصود هو البطاطا الشعبية جداً",
    keywords: ["Kartoffel = بطاطا", "Nahrungsmittel = غذاء", "Wildpflanze = نبتة برية"],
    simplified: "من النبتة البرية إلى غذاء عالمي - قصة البطاطا",
    imagine: "🧠👁️ تخيل حبة بطاطا (Kartoffel) تسافر من أمريكا إلى العالم 🥔✈️🌍"
};

// ============================================
// Exam 24: Kartoffel (التعديل 1)
// ============================================

HELP_DATA["lesen1_exam24_q1"] = {
    text: "Text 1: Über zehntausend wissenschaftliche Studien wurden im Auftrag der WHO durchgeführt... Das Risiko eines Herzinfarkts kann man durch täglichen Verzehr eines Apfels und tägliches Radfahren reduzieren.",
    meaning: "تم إجراء أكثر من عشرة آلاف دراسة بتكليف من منظمة الصحة العالمية - يمكن تقليل خطر النوبة القلبية بتناول تفاحة يومياً وركوب الدراجة يومياً",
    keywords: ["WHO = منظمة الصحة العالمية", "Krebs = سرطان", "Herzinfarkt = نوبة قلبية"],
    simplified: "منظمة الصحة العالمية تبحث علاقة السرطان والنوبات القلبية",
    imagine: "🧠👁️ تخيل باحثين (Forscher) يدرسون أمراض القلب 📊"
};

HELP_DATA["lesen1_exam24_q2"] = {
    text: "Text 2: Am Mittelmeer und in Mexiko wächst die Aloe-Vera-Pflanze... In der Wundheilung ist Aloegel sehr effektiv. Kosmetisch wird es für Cremes benutzt, die Hauterkrankungen lindern.",
    meaning: "في البحر الأبيض المتوسط والمكسيك تنبت الألوة فيرا - جل الألوة فعال جداً في التئام الجروح - يستخدم في كريمات تخفف أمراض الجلد",
    keywords: ["Aloe Vera = ألوة فيرا", "Haut = بشرة", "Cremes = كريمات"],
    simplified: "المواد النباتية لصحة البشرة",
    imagine: "🧠👁️ تخيل نبتة ألوة فيرا (Aloe Vera) على نافذة المنزل 🪴🏠"
};

HELP_DATA["lesen1_exam24_q3"] = {
    text: "Text 3: Eine der ältesten bekannten Gemüsesorten ist der Spargel... Heute schätzen wir am Spargel besonders, dass er nicht dick macht.",
    meaning: "أحد أقدم أنواع الخضروات المعروفة هو الهليون - اليوم نقدر في الهليون بشكل خاص أنه لا يسمن",
    keywords: ["Spargel = هليون", "schlank = نحيف", "Energie = طاقة"],
    simplified: "خضار نحيف لأجسام نحيفة - الهليون",
    imagine: "🧠👁️ تخيل طبق هليون أخضر (grüner Spargel) 🥦💚"
};

HELP_DATA["lesen1_exam24_q4"] = {
    text: "Text 4: Schlank sein ist 'in'... Eine neue Theorie unterscheidet Nahrungsmittel in Fetthorter und Fettburner.",
    meaning: "النحافة 'موضة' - نظرية جديدة تفرق الأطعمة إلى مخزنة للدهون وحارقة للدهون",
    keywords: ["Ernährung = تغذية", "Figur = قوام", "Fett = دهون"],
    simplified: "قوام رائع بتغذية متوازنة",
    imagine: "🧠👁️ تخيل شخصاً يختار طعاماً صحياً (gesundes Essen) 🥑✅"
};

HELP_DATA["lesen1_exam24_q5"] = {
    text: "Text 5: Als typisch deutsch gilt sie, doch rund um den Globus ist sie eines der Basislebensmittel... Ihr Ursprung liegt in Südamerika. Gemeint ist die überaus populäre Kartoffel.",
    meaning: "تُعتبر بطيبة ألمانية، لكن حول العالم هي واحدة من الأغذية الأساسية - أصلها في أمريكا الجنوبية - المقصود هو البطاطا الشعبية جداً",
    keywords: ["Kartoffel = بطاطا", "Wildpflanze = نبتة برية", "Nahrungsmittel = غذاء"],
    simplified: "من النبتة البرية إلى طعام عالمي",
    imagine: "🧠👁️ تخيل حقلاً (Feld) من البطاطا 🥔🌾"
};

// ============================================
// Exam 25: Bienen
// ============================================

HELP_DATA["lesen1_exam25_q1"] = {
    text: "Text 1: Kaffee verleiht neuen Schwung... Forscher haben herausgefunden, dass Koffein selektiv das Erkennungsvermögen für positive Begriffe schärft.",
    meaning: "القهوة تمنح نشاطاً جديداً - الباحثون اكتشفوا أن الكافيين يحسن بشكل انتقائي القدرة على التعرف على الكلمات الإيجابية",
    keywords: ["Kaffee = قهوة", "Koffein = كافيين", "Wahrnehmung = إدراك"],
    simplified: "مادة منبهة تزيد من إدراك كلمات معينة",
    imagine: "🧠👁️ تخيل فنجان قهوة (Kaffee) وعقلاً منبهاً ☕🧠✨"
};

HELP_DATA["lesen1_exam25_q2"] = {
    text: "Text 2: Sie bestäuben nicht nur viele Pflanzen, sondern haben die Entwicklung dieser Pflanzen erst ermöglicht... In Amerika wurde die bisher älteste Biene entdeckt. Sie lag seit 100 Millionen Jahren in Bernstein.",
    meaning: "لا يقومون بتلقيح النباتات فقط، بل جعلوا تطور هذه النباتات ممكناً - في أمريكا تم اكتشاف أقدم نحلة حتى الآن - كانت محفوظة في كهرمان منذ 100 مليون سنة",
    keywords: ["Bienen = نحل", "Pflanzen = نباتات", "Entwicklung = تطور"],
    simplified: "النباتات والحشرات - تطور مشترك",
    imagine: "🧠👁️ تخيل نحلة (Biene) محفوظة في كهرمان (Bernstein) 🐝🧡"
};

HELP_DATA["lesen1_exam25_q3"] = {
    text: "Text 3: Bienen, die Pollen von Kaffee oder anderen koffeinhaltigen Pflanzen sammeln, erinnern sich mit der richtigen Dosis Koffein bis zu dreimal länger an den Duft einer Futterpflanze.",
    meaning: "النحل الذي يجمع حبوب اللقاح من القهوة أو النباتات الأخرى المحتوية على الكافيين، يتذكر مع الجرعة المناسبة من الكافيين رائحة نبات العلف لمدة تصل إلى ثلاثة أضعاف",
    keywords: ["Koffein = كافيين", "Gedächtnis = ذاكرة", "Bienen = نحل"],
    simplified: "الكافيين في رحيق الأزهار يحسن أداء الذاكرة",
    imagine: "🧠👁️ تخيل نحلة (Biene) تتذكر رائحة زهرة благодаря الكافيين 🐝☕🧠"
};

HELP_DATA["lesen1_exam25_q4"] = {
    text: "Text 4: Jahr für Jahr überstehen zwischen zehn und 15 Prozent aller Bienenvölker die Winterruhe zwischen November und Februar nicht.",
    meaning: "عاماً بعد عام، ما بين 10 و15 في المئة من جميع مستعمرات النحل لا تنجو من سبات الشتاء بين نوفمبر وفبراير",
    keywords: ["Bienensterben = موت النحل", "Winter = شتاء", "Imker = مربي نحل"],
    simplified: "معرفة جديدة عن موت النحل حول العالم",
    imagine: "🧠👁️ تخيل نحلة (Biene) ميتة في الشتاء ❄️🐝💀"
};

HELP_DATA["lesen1_exam25_q5"] = {
    text: "Text 5: Viele Insekten unserer Regionen sind 'gefriertolerant'. Sie stellen im Herbst ihren Organismus um und versetzen ihr Blut mit einem Cocktail aus Gefrierschutzmitteln.",
    meaning: "كثير من حشرات منطقتنا 'تتحمل التجميد' - يغيرون كائناتهم في الخريف ويخلطون دمهم بكوكتيل من مضادات التجمد",
    keywords: ["Insekten = حشرات", "Winter = شتاء", "Überleben = بقاء"],
    simplified: "طرق للبقاء في موسم البرد - حيل الحشرات",
    imagine: "🧠👁️ تخيل حشرة (Insekt) مجمدة لكنها حية ❄️🐜"
};

// ============================================
// Exam 26: Spiele
// ============================================

HELP_DATA["lesen1_exam26_q1"] = {
    text: "Text 1: In der Kösener Puppenfabrik werden noch wie früher Plüschtiere einzeln angefertigt... Sie werden nicht in Fließbandproduktion hergestellt, sondern einzeln zusammengenäht, manche aus über 100 Teilen.",
    meaning: "في مصنع كوسين للدمى لا تزال حيوانات البلوفر تُصنع يدوياً كما في الماضي - لا تُنتج على خط إنتاج، بل تُخاط بشكل فردي، بعضها من أكثر من 100 قطعة",
    keywords: ["Kuscheltiere = حيوانات قطنية", "Handarbeit = يدوي", "Kinderzimmer = غرفة أطفال"],
    simplified: "عمل يدوي طبيعي لغرفة الأطفال",
    imagine: "🧠👁️ تخيل شخصاً يخيط دباً قطنيًا (Teddybär) يدوياً 🧸🪡"
};

HELP_DATA["lesen1_exam26_q2"] = {
    text: "Text 2: Die Modelleisenbahn hat auch im Computerzeitalter ihre Anziehungskraft nicht verloren... 1891 rollte die erste Uhrwerkeisenbahn über die Gleise, und mit ihr begann der Aufstieg der Firma Märklin.",
    meaning: "قطار النموذج لم يفقد جاذبيته حتى في عصر الكمبيوتر - عام 1891 تدحرج أول قطار يعمل بنظام الساعة على القضبان، وبه بدأ صعود شركة ماركلين",
    keywords: ["Modelleisenbahn = قطار نموذج", "Geschichte = تاريخ", "Spielzeug = لعبة"],
    simplified: "قطارات صغيرة ذات تاريخ طويل",
    imagine: "🧠👁️ تخيل قطار نموذج (Modelleisenbahn) قديماً يعمل 🚂🕰️"
};

HELP_DATA["lesen1_exam26_q3"] = {
    text: "Text 3: Gedruckten Büchern wurde vor einigen Jahren von Experten ein schnelles Ende vorausgesagt... Vieles deutet darauf hin, dass sich Sachen, die man selbst in die Hand nehmen kann, doch nicht so leicht von digitalen Inhalten verdrängen lassen.",
    meaning: "خبراء توقعوا نهاية سريعة للكتب المطبوعة قبل بضع سنوات - الكثير يشير إلى أن الأشياء التي يمكنك وضع يديك عليها لا يمكن استبدالها بسهولة بالمحتوى الرقمي",
    keywords: ["Bücher = كتب", "anfassen = لمس", "digital = رقمي"],
    simplified: "أشياء يمكن لمسها تبقى محبوبة",
    imagine: "🧠👁️ تخيل شخصاً يقرأ كتاباً (Buch) ورقيًا 📖❤️"
};

HELP_DATA["lesen1_exam26_q4"] = {
    text: "Text 4: Immer neue Spielekonsolen, Spielformate und Apps drängen auf den elektronischen Spielemarkt - und dennoch haben Brettspiele nie an Bedeutung verloren... Das gemeinsame Spiel steht im Vordergrund: Familie und Freunde kommen an einem Tisch zusammen.",
    meaning: "أجهزة ألعاب جديدة وتطبيقات تغزو سوق الألعاب الإلكترونية - ومع ذلك لم تفقد ألعاب الطاولة أهميتها أبداً - اللعب المشترك هو المهم: العائلة والأصدقاء يجتمعون على طاولة واحدة",
    keywords: ["Spiele = ألعاب", "Miteinander = معاً", "Familie = عائلة"],
    simplified: "الألعاب القديمة تقوي العلاقات",
    imagine: "🧠👁️ تخيل عائلة (Familie) تلعب لعبة طاولة معاً 🎲👨‍👩‍👧‍👦"
};

HELP_DATA["lesen1_exam26_q5"] = {
    text: "Text 5: Die Schränke und Spielzeugkisten der lieben Kleinen sind voll mit Puppen, Kuscheltieren und Autos... Wenn ein Kind zu viel Spielzeug hat, wird sich seine Konzentration verringern.",
    meaning: "خزائن وصناديق ألعاب الصغار مليئة بالدمى والحيوانات القطنية والسيارات - عندما يكون لدى الطفل ألعاب كثيرة، سينخفض تركيزه",
    keywords: ["Spielsachen = ألعاب", "Überfluss = وفرة", "Kinderzimmer = غرفة أطفال"],
    simplified: "وفرة في غرفة الأطفال - كثرة الألعاب تؤثر سلباً",
    imagine: "🧠👁️ تخيل غرفة أطفال مليئة جداً بالألعاب (Spielsachen) 🧸🚗🎀😵"
};

// ============================================
// Exam 27: Geld
// ============================================

HELP_DATA["lesen1_exam27_q1"] = {
    text: "Text 1: Spardosen sind Sammelbehälter, Dekoration oder Kinderspielzeug - und zwar seit Jahrhunderten... Das Spardosen-Museum zeigt 1200 Exemplare aus dem Mittelalter bis zum 20. Jahrhundert.",
    meaning: "حافظات الادخار هي أوعية تجميع، ديكور أو ألعاب أطفال - ولقرون - متحف حافظات الادخار يعرض 1200 قطعة من العصور الوسطى حتى القرن العشرين",
    keywords: ["Spardosen = حافظات ادخار", "Ausstellung = معرض", "Geld = مال"],
    simplified: "أوعية جمع كأشياء عرض - حافظات الادخار في متحف",
    imagine: "🧠👁️ تخيل متحفاً مليئاً بحافظات ادخار (Spardosen) قديمة 🏺💰"
};

HELP_DATA["lesen1_exam27_q2"] = {
    text: "Text 2: Im Museum machen die Besucher eine Tour durch eine fiktive Stadt... Bei den Stationen 'Bank' und 'Börse' lernen sie das Prinzip kennen: Vertrauen in den Wert des Geldes.",
    meaning: "في المتحف، يقوم الزوار بجولة في مدينة خيالية - في محطتي 'البنك' و'البورصة' يتعلمون المبدأ: الثقة في قيمة المال",
    keywords: ["Rundgang = جولة", "Finanzwissen = معرفة مالية", "Geld = مال"],
    simplified: "جولة تعليمية في عالم المال - متحف المال",
    imagine: "🧠👁️ تخيل شخصاً يتجول (Rundgang) في متحف المال 🏛️💶"
};

HELP_DATA["lesen1_exam27_q3"] = {
    text: "Text 3: Der englische Journalist John Lanchester nimmt neugierige Laien bei der Hand... Geld habe eine eigene Sprache, erklärt Lanchester. Wer diese nicht lerne, könne nicht mitreden.",
    meaning: "الصحفي الإنجليزي جون لانشستر يأخذ بيد الهواة الفضوليين - للمال لغته الخاصة، يشرح لانشستر - من لا يتعلمها، لا يمكنه المشاركة في الحديث",
    keywords: ["Finanz-ABC = أبجديات المال", "Anfänger = مبتدئون", "Geld = مال"],
    simplified: "أبجديات المال للمبتدئين",
    imagine: "🧠👁️ تخيل كتاباً (Buch) عن أبجديات المال 📘💶"
};

HELP_DATA["lesen1_exam27_q4"] = {
    text: "Text 4: Eine neue Untersuchung bestätigt: Die Höhe des Einkommens allein macht nicht glücklich... Wie zufrieden ein Arbeitnehmer ist, hängt davon ab, wie emotional stabil, belastbar und selbstsicher er ist.",
    meaning: "دراسة جديدة تؤكد: مقدار الدخل وحده لا يسعد - مدى رضا الموظف يعتمد على مدى استقراره العاطفي وقدرته على التحمل وثقته بنفسه",
    keywords: ["Gehalt = راتب", "zufrieden = راضٍ", "Arbeit = عمل"],
    simplified: "النشاط المثير أهم من الراتب العالي",
    imagine: "🧠👁️ تخيل شخصاً سعيداً في عمله رغم الراتب البسيط 💼😊"
};

HELP_DATA["lesen1_exam27_q5"] = {
    text: "Text 5: Über Geld sprechen viele Deutsche nicht gerne... Es ist heutzutage üblich, dass Kinder spielerisch ein Gefühl für Geld entwickeln: Zwei Drittel der Vier- bis Fünfjährigen bekommen Taschengeld.",
    meaning: "كثير من الألمان لا يتحدثون عن المال بسرور - أصبح من المعتاد اليوم أن يطور الأطفال شعوراً بالمال من خلال اللعب: ثلثا الأطفال من عمر 4 إلى 5 سنوات يحصلون على مصروف الجيب",
    keywords: ["Geld = مال", "Kinder = أطفال", "sparen = ادخار"],
    simplified: "كيف يتعلم الأطفال التعامل مع المال",
    imagine: "🧠👁️ تخيل طفلاً يحصل على مصروف جيب (Taschengeld) 🧒💰"
};

// ============================================
// Exam 28: Kinder und Schulen
// ============================================

HELP_DATA["lesen1_exam28_q1"] = {
    text: "Text 1: In Großbritannien besucht die Klassenlehrerin die Familie zu Hause... In den USA bekommen Kinder vor dem ersten Schultag kleine Geschenke... In Russland wird ein großes Familienfest gefeiert.",
    meaning: "في بريطانيا، تزور معلمة الفصل العائلة في المنزل - في أمريكا، يحصل الأطفال على هدايا صغيرة قبل أول يوم دراسي - في روسيا، يحتفل بعيد عائلي كبير",
    keywords: ["Schulanfang = بداية المدرسة", "Traditionen = تقاليد", "Schultüte = مخروط المدرسة"],
    simplified: "تقاليد بداية العام الدراسي حول العالم",
    imagine: "🧠👁️ تخيل أطفالاً يحملون أكياس المدرسة (Schultüten) 🎒🎁"
};

HELP_DATA["lesen1_exam28_q2"] = {
    text: "Text 2: Antonija Tomic erzählt in 'Schulanfang in der Rabenschule' die Geschichte des kleinen Raben Raban... Ein Erstlesebuch, das gerade erschienen ist.",
    meaning: "أنتونيا توميتش تحكي في 'بداية المدرسة في مدرسة الغربان' قصة الغراب الصغير رابان - كتاب للقراءة الأولى صدر حديثاً",
    keywords: ["Buch = كتاب", "Leseanfänger = مبتدئو القراءة", "Schulanfang = بداية المدرسة"],
    simplified: "كتاب جديد لصغار مبتدئي القراءة",
    imagine: "🧠👁️ تخيل طفلاً يقرأ كتاباً (Buch) عن الغراب رابان 📖🐦‍⬛"
};

HELP_DATA["lesen1_exam28_q3"] = {
    text: "Text 3: Auf den Straßen sind ab Schulbeginn wieder viele Kinder unterwegs. Autofahrer sind zu erhöhter Aufmerksamkeit aufgefordert, besonders beim Überholen an Haltestellen...",
    meaning: "على الطرق، هناك الكثير من الأطفال مرة أخرى مع بداية المدرسة - سائقي السيارات مطالبون بزيادة الانتباه، خاصة عند التجاوز في محطات الوقوف",
    keywords: ["Schulanfänger = مبتدئو المدرسة", "Verkehr = مرور", "Haltestellen = محطات"],
    simplified: "تدريب سلوك المرور مع مبتدئي المدرسة",
    imagine: "🧠👁️ تخيل طفلاً يعبر الطريق (Straße) بحذر 🚸🚦"
};

HELP_DATA["lesen1_exam28_q4"] = {
    text: "Text 4: In Deutschland herrscht Schulpflicht. Der genaue Zeitpunkt des Schuleintritts wurde flexibler gestaltet. Das optimale Alter für den Schuleintritt ist umstritten.",
    meaning: "في ألمانيا، التعليم إلزامي - تم تصميم التوقيت الدقيق لدخول المدرسة بشكل أكثر مرونة - العمر الأمثل لدخول المدرسة هو موضع خلاف",
    keywords: ["Einschulung = دخول المدرسة", "Alter = عمر", "Schule = مدرسة"],
    simplified: "العمر المناسب لدخول المدرسة",
    imagine: "🧠👁️ تخيل طفلاً في أول يوم دراسي (erster Schultag) 📚👧"
};

HELP_DATA["lesen1_exam28_q5"] = {
    text: "Text 5: Ein Großteil des Busverkehrs dient dem Schulverkehr. Fahrten in den Fahrplänen mit 'S' gekennzeichnet sind 'nur an Schultagen'. Sie gelten nicht an Ferientagen.",
    meaning: "جزء كبير من حركة الحافلات مخصص للنقل المدرسي - الرحلات المميزة بـ 'S' في جداول المواعيد هي 'فقط أيام الدراسة' - لا تسري في أيام العطل",
    keywords: ["Schulferien = عطل مدرسية", "Fahrten = رحلات", "Bus = حافلة"],
    simplified: "عدد أقل من الرحلات في العطل المدرسية",
    imagine: "🧠👁️ تخيل حافلة مدرسية (Schulbus) فارغة في العطلة 🚌❄️"
};

// ============================================
// Exam 29: Kindertelefon
// ============================================

HELP_DATA["lesen1_exam29_q1"] = {
    text: "Text 1: Die meisten Schnurlos-Telefone strahlen auch dann, wenn man gar nicht telefoniert... Hersteller bieten Geräte an, die als 'bedingt strahlungsarm' eingestuft werden.",
    meaning: "معظم الهواتف اللاسلكية تشع حتى عندما لا تتحدث - الشركات المصنعة تقدم أجهزة تصنف على أنها 'منخفضة الإشعاع بشكل مشروط'",
    keywords: ["schnurlose Geräte = أجهزة لاسلكية", "Strahlenbelastung = تلوث إشعاعي", "Telefonieren = التحدث"],
    simplified: "أجهزة حديثة تقلل التلوث الإشعاعي",
    imagine: "🧠👁️ تخيل هاتفاً لاسلكياً (schnurloses Telefon) وموجات أقل 📞📡✅"
};

HELP_DATA["lesen1_exam29_q2"] = {
    text: "Text 2: Motorolas CEO Edward Zander will den Eltern Kontrolle über ihre Kinder geben: Sie sollen jederzeit wissen, wo sie (oder deren Mobiltelefon) sind und was sie damit tun.",
    meaning: "رئيس موتورولا إدوارد زاندر يريد إعطاء الآباء سيطرة على أطفالهم: يجب أن يعرفوا في أي وقت أين هم (أو هاتفهم المحمول) وماذا يفعلون به",
    keywords: ["Kinder = أطفال", "Überwachung = مراقبة", "Handy = هاتف محمول"],
    simplified: "مراقبة الأطفال عبر الهاتف المحمول للآباء",
    imagine: "🧠👁️ تخيل أباً يتتبع موقع ابنه عبر الهاتف 📱📍👨‍👦"
};

HELP_DATA["lesen1_exam29_q3"] = {
    text: "Text 3: Wer unter Palmen liegt, greift gern zum Handy. Doch trotz neuer Preisobergrenzen bleibt das ein teurer Spaß! Die Verbraucherzentrale erklärt, wie Sie richtig wählen. Bis 30. Juli müssen alle europäischen Mobilfunkanbieter den neuen 'Eurotarif' anbieten.",
    meaning: "من يرغب في الاسترخاء تحت أشجار النخيل، يمسك بهاتفه المحمول بسرور - لكن رغم حدود الأسعار الجديدة، يبقى ذلك متعة مكلفة! - مركز المستهلك يشرح كيف تختار بشكل صحيح - حتى 30 يوليو، يجب على جميع مقدمي خدمات الهاتف المحمول الأوروبيين تقديم 'التعريفة الأوروبية' الجديدة",
    keywords: ["Handy = هاتف محمول", "Ausland = خارج البلاد", "Tarif = تعريفة"],
    simplified: "الهاتف في الخارج - انتبه واحتال!",
    imagine: "🧠👁️ تخيل شخصاً يتصل من الشاطئ (Strand) ويتفاجأ بالفواتير 🏖️📱💸"
};

HELP_DATA["lesen1_exam29_q4"] = {
    text: "Text 4: Die meisten Urlauber fotografieren gerne Sehenswürdigkeiten mit ihren Liebsten. Schaut man sich die Bilder später an, sind sie oft eine Variation des ewig Gleichen. Schon mit normalen Digitalkameras lassen sich wunderbare Bilder schießen - mit ein paar Tricks.",
    meaning: "معظم السياح يصورون المعالم السياحية مع أحبائهم - عندما تنظر إلى الصور لاحقاً، غالباً ما تكون متكررة - حتى مع الكاميرات الرقمية العادية يمكن التقاط صور رائعة - مع بعض الخدع",
    keywords: ["Urlaubsbilder = صور العطل", "Fotografieren = تصوير", "Tipps = نصائح"],
    simplified: "نصائح محترفة لصور عطل أفضل",
    imagine: "🧠👁️ تخيل شخصاً يلتقط صورة (Foto) رائعة على الشاطئ 📸🏖️"
};

HELP_DATA["lesen1_exam29_q5"] = {
    text: "Text 5: Es gibt in Deutschland wohl kaum eine bessere Chance für die Einführung von Handy-TV als die Fußball-WM 2006. Doch ein rechtzeitiger Start ist ungewiss... In Korea gehört der mobile Fernsehgenuss zum Alltag.",
    meaning: "لا توجد فرصة أفضل في ألمانيا لتقديم تلفزيون الهاتف المحمول من كأس العالم لكرة القدم 2006 - لكن البداية في الوقت المناسب غير مؤكدة - في كوريا، المتعة التلفزيونية المتنقلة جزء من الحياة اليومية",
    keywords: ["Handy-TV = تلفزيون محمول", "WM 2006 = كأس العالم 2006", "Alltag = حياة يومية"],
    simplified: "التلفزيون المحمول في كأس العالم 2006",
    imagine: "🧠👁️ تخيل شخصاً يشاهد مباراة (Fußballspiel) على هاتفه 📱⚽📺"
};

// ============================================
// Exam 30: Alpen
// ============================================

HELP_DATA["lesen1_exam30_q1"] = {
    text: "Text 1: Für Raucher wird es an der Universität in Köln ab dem kommenden Wintersemester eng. Das Rauchverbot gilt nun in allen Gebäuden einschließlich der Toiletten.",
    meaning: "سيكون الوضع صعباً للمدخنين في جامعة كولن بدءاً من الفصل الشتوي القادم - حظر التدخين يسري الآن في جميع المباني بما في ذلك دورات المياه",
    keywords: ["Rauchverbot = حظر تدخين", "Uni-Campus = حرم جامعي", "rauchfreie Zone = منطقة خالية من التدخين"],
    simplified: "حرم جامعي بلا تدخين - منطقة خالية من الدخان",
    imagine: "🧠👁️ تخيل لافتة 'ممنوع التدخين' (Rauchverbot) في الجامعة 🚭🏫"
};

HELP_DATA["lesen1_exam30_q2"] = {
    text: "Text 2: Urlaub in den Bergen ist sehr gesund. Besonders die Höhenlagen um die 2.000 Meter wirken sich messbar positiv auf die Gesundheit aus. Die 'dünnere Luft' bewirkt eine Senkung des Blutdrucks und eine verbesserte Leistungsfähigkeit des Herzens.",
    meaning: "العطلة في الجبال صحية جداً - خاصة المرتفعات حوالي 2000 متر تؤثر إيجابياً بشكل ملحوظ على الصحة - 'الهواء الرقيق' يسبب انخفاض ضغط الدم وتحسين كفاءة القلب",
    keywords: ["Höhenluft = هواء المرتفعات", "Herz = قلب", "gesund = صحي"],
    simplified: "هواء المرتفعات - مفيد للقلب",
    imagine: "🧠👁️ تخيل شخصاً يتنفس هواءً نقيًا (frische Luft) في الجبال ⛰️💨😊"
};

HELP_DATA["lesen1_exam30_q3"] = {
    text: "Text 3: Schlechte Haut, übler Atem, leere Brieftasche... junge Raucher begreifen oft zu spät, dass Rauchen nicht hält, was sie damit verbinden: Freiheit und Attraktivität.",
    meaning: "بشرة سيئة، رائحة نفس كريهة، محفظة فارغة... المدخنون الشباب يدركون متأخرين أن التدخين لا يفي بما يربطونه به: الحرية والجاذبية",
    keywords: ["Zigaretten = سجائر", "Alleinsein = وحدة", "Jugendliche = شباب"],
    simplified: "السجائر ضد الوحدة - وهم الشباب",
    imagine: "🧠👁️ تخيل شاباً وحيداً (allein) يدخن سيجارة 🚬😔"
};

HELP_DATA["lesen1_exam30_q4"] = {
    text: "Text 4: Sport im Hochgebirge? Da denkt man zuallererst an Wintersport... Doch auch im Sommer kann man sich vielfältig sportlich betätigen: Wandern, Klettern oder Schwimmen in Bergseen.",
    meaning: "رياضة في المرتفعات؟ في البداية نفكر في الرياضات الشتوية... لكن في الصيف أيضاً يمكن ممارسة الرياضات بشكل متنوع: المشي لمسافات طويلة، التسلق أو السباحة في البحيرات الجبلية",
    keywords: ["Freizeitsport = رياضة ترفيهية", "Alpen = الألب", "Sommer = صيف"],
    simplified: "رياضة ترفيهية في الألب - ليس فقط في الشتاء",
    imagine: "🧠👁️ تخيل شخصاً يتسلق (klettern) جبلاً في الصيف 🧗‍♂️⛰️☀️"
};

HELP_DATA["lesen1_exam30_q5"] = {
    text: "Text 5: Sportvereine spielen eine immer wichtigere soziale Rolle für junge Leute... Jugendliche, die in Sportvereinen Mitglied sind, rauchen deutlich weniger als ihre Altersgenossen, die nicht im Verein sind.",
    meaning: "الأندية الرياضية تلعب دوراً اجتماعياً متزايد الأهمية للشباب - المراهقون الأعضاء في الأندية الرياضية يدخنون أقل بكثير من أقرانهم غير الأعضاء في النادي",
    keywords: ["Junge Sportler = رياضيون شباب", "suchtanfällig = عرضة للإدمان", "Verein = نادي"],
    simplified: "رياضيون شباب - أقل عرضة للإدمان",
    imagine: "🧠👁️ تخيل شاباً رياضياً (Sportler) يقف بجانب ملعب 🏃‍♂️⚽💪"
};

// ============================================
// Exam 31: Alpen (التعديل 1)
// ============================================

HELP_DATA["lesen1_exam31_q1"] = {
    text: "Text 1: Das bundesweite Projekt 'Aufklärung gegen Tabak' wurde von einem Medizinstudenten ins Leben gerufen. Rund 500 Studenten machen mit Schülern die Gefahren des Rauchens auf.",
    meaning: "المشروع الوطني 'التوعية ضد التبغ' أسسه طالب طب - حوالي 500 طالب يوعون تلاميذ المدارس بمخاطر التدخين",
    keywords: ["Studenten = طلاب", "engagieren sich = يشاركون", "Rauchen = تدخين"],
    simplified: "طلاب يشاركون في مكافحة التدخين",
    imagine: "🧠👁️ تخيل طلاباً (Studenten) يتحدثون عن أضرار التدخين 🎓🚭"
};

HELP_DATA["lesen1_exam31_q2"] = {
    text: "Text 2: Urlaub in den Bergen ist sehr gesund. Besonders die Höhenlagen um die 2.000 Meter wirken sich positiv auf die Gesundheit aus. Die 'dünnere Luft' bewirkt eine Senkung des Blutdrucks.",
    meaning: "العطلة في الجبال صحية جداً - خاصة المرتفعات حوالي 2000 متر تؤثر إيجابياً على الصحة - 'الهواء الرقيق' يسبب انخفاض ضغط الدم",
    keywords: ["Höhenluft = هواء المرتفعات", "Herz = قلب", "gesund = صحي"],
    simplified: "هواء المرتفعات مفيد للقلب",
    imagine: "🧠👁️ تخيل شخصاً يستنشق الهواء في الجبل 🏔️💚"
};

HELP_DATA["lesen1_exam31_q3"] = {
    text: "Text 3: Schlechte Haut, übler Atem, leere Brieftasche... junge Raucher begreifen oft zu spät, dass Rauchen nicht hält, was sie damit verbinden.",
    meaning: "بشرة سيئة، رائحة نفس كريهة، محفظة فارغة - المدخنون الشباب يدركون متأخرين أن التدخين لا يفي بما يربطونه به",
    keywords: ["Zigaretten = سجائر", "Jugendliche = شباب", "Geld = مال"],
    simplified: "الفتيات تنفق مالاً أكثر على السجائر من الأولاد",
    imagine: "🧠👁️ تخيل فتاة (Mädchen) تشتري سجائر بدلاً من أشياء أخرى 👧🚬💸"
};

HELP_DATA["lesen1_exam31_q4"] = {
    text: "Text 4: Sport im Hochgebirge? Da denkt man an Wintersport. Doch auch im Sommer kann man sich sportlich betätigen: Wandern, Klettern oder Schwimmen in Bergseen.",
    meaning: "رياضة في المرتفعات؟ نفكر في الرياضات الشتوية - لكن في الصيف أيضاً يمكن ممارسة الرياضة: المشي، التسلق، السباحة في البحيرات الجبلية",
    keywords: ["Freizeitsport = رياضة ترفيهية", "Alpen = الألب", "Sommer = صيف"],
    simplified: "رياضة ترفيهية في الألب",
    imagine: "🧠👁️ تخيل عائلة تمشي (wandern) في الجبال 🚶‍♀️🚶‍♂️🏔️"
};

HELP_DATA["lesen1_exam31_q5"] = {
    text: "Text 5: Sportvereine spielen eine immer wichtigere soziale Rolle für junge Leute... Jugendliche in Sportvereinen sind geselliger, weniger gewalttätig, leben gesundheitsbewusster, rauchen deutlich weniger.",
    meaning: "الأندية الرياضية تلعب دوراً اجتماعياً متزايد الأهمية للشباب - المراهقون في الأندية الرياضية أكثر اجتماعية، أقل عنفاً، يعيشون بوعي صحي أكبر، يدخنون أقل بكثير",
    keywords: ["Vereine = أندية", "Jugendliche = شباب", "positiv = إيجابي"],
    simplified: "الأندية تؤثر إيجابياً على الشباب",
    imagine: "🧠👁️ تخيل شباباً في نادٍ رياضي (Sportverein) يلعبون معاً 👥⚽🤝"
};

// ============================================
// Exam 32: Alpen (التعديل 2)
// ============================================

HELP_DATA["lesen1_exam32_q1"] = {
    text: "Text 1: Das bundesweite Projekt 'Aufklärung gegen Tabak' wurde von einem Medizinstudenten ins Leben gerufen. Rund 500 Studenten machen mit Schülern die Gefahren des Rauchens auf.",
    meaning: "المشروع الوطني 'التوعية ضد التبغ' أسسه طالب طب - حوالي 500 طالب يوعون التلاميذ بمخاطر التدخين",
    keywords: ["Studenten = طلاب", "engagieren sich = يشاركون", "Rauchen = تدخين"],
    simplified: "طلاب متطوعون ضد التدخين",
    imagine: "🧠👁️ تخيل طالباً يشرح أضرار التدخين لطلاب المدارس 🎓📢"
};

HELP_DATA["lesen1_exam32_q2"] = {
    text: "Text 2: Urlaub in den Bergen ist sehr gesund. Besonders die Höhenlagen um die 2.000 Meter wirken sich messbar positiv auf die Gesundheit aus.",
    meaning: "العطلة في الجبال صحية جداً - خاصة المرتفعات حوالي 2000 متر تؤثر إيجابياً بشكل ملحوظ على الصحة",
    keywords: ["Höhenluft = هواء المرتفعات", "Gesundheit = صحة", "Alpen = الألب"],
    simplified: "هواء المرتفعات يعزز الصحة",


    imagine: "🧠👁️ تخيل شخصاً سعيداً في جبال الألب (Alpen) 🏔️😊"
};

HELP_DATA["lesen1_exam32_q3"] = {
    text: "Text 3: Schlechte Haut, übler Atem, leere Brieftasche... junge Raucher begreifen oft zu spät, dass Rauchen nicht hält, was sie damit verbinden.",
    meaning: "بشرة سيئة، رائحة نفس كريهة، محفظة فارغة - المدخنون الشباب يدركون متأخرين أن التدخين لا يفي بما يربطونه به",
    keywords: ["Zigaretten = سجائر", "Mädchen = فتيات", "Geld = مال"],
    simplified: "الفتيات ينفقن مالاً أكثر على السجائر من الأولاد",
    imagine: "🧠👁️ تخيل فتاة ترمي نقوداً (Geld) في سلة 🗑️💸"
};

HELP_DATA["lesen1_exam32_q4"] = {
    text: "Text 4: Sport im Hochgebirge? Da denkt man an Wintersport. Doch auch im Sommer kann man sich sportlich betätigen: Wandern, Klettern oder Schwimmen in Bergseen.",
    meaning: "رياضة في المرتفعات؟ نفكر في الرياضات الشتوية - لكن في الصيف أيضاً يمكن ممارسة الرياضة: المشي، التسلق، السباحة في البحيرات الجبلية",
    keywords: ["Hochgebirge = مرتفعات", "Skiparadies = جنة تزلج", "Sport = رياضة"],
    simplified: "المرتفعات العالية كجنة للتزلج",
    imagine: "🧠👁️ تخيل متزلجاً (Skifahrer) على جبل ثلجي ⛷️❄️"
};

HELP_DATA["lesen1_exam32_q5"] = {
    text: "Text 5: Jugendliche in Sportvereinen sind geselliger, weniger gewalttätig, leben gesundheitsbewusster, rauchen deutlich weniger.",
    meaning: "المراهقون في الأندية الرياضية أكثر اجتماعية، أقل عنفاً، يعيشون بوعي صحي أكبر، يدخنون أقل بكثير",
    keywords: ["Vereine = أندية", "Jugendliche = شباب", "positiv = إيجابي"],
    simplified: "الأندية الرياضية لها تأثير إيجابي على الشباب",
    imagine: "🧠👁️ تخيل مجموعة من الشباب الرياضيين (Sportler) 🏃‍♂️🏃‍♀️👏"
};

// ============================================
// تصدير للاستخدام
// ============================================


console.log('✅ lesen1.js تم التحميل بنجاح - Exams 1-32');

// ============================================
// lesen1.js - جميع شروحات Lesen Teil 1 (مكتمل)
// ============================================



// ============================================
// Exam 33: Suchtmittel - Nase
// ============================================

HELP_DATA["lesen1_exam33_q1"] = {
    text: "Text 1: Eine Frau mit schiefer Nase mag sich weder im Profil noch frontal zeigen. 'Die Nase sitzt mitten im Gesicht', so der plastische Chirurg. Keinem unter 18 würde er die Nase operieren - es sei denn, sie ist durch einen Unfall verunstaltet.",
    meaning: "امرأة ذات أنف معوج لا تحب أن تظهر من الجانب أو من الأمام - 'الأنف في منتصف الوجه' كما يقول جراح التجميل - لن يجري عملية تجميل أنف لمن هم دون 18 إلا إذا كان مشوهاً بسبب حادث",
    keywords: ["Nasenkorrektur = تجميل أنف", "Schönheitsoperation = عملية تجميل", "Chirurg = جراح"],
    simplified: "عمليات تجميل الأنف - ليس بأي ثمن",
    imagine: "🧠👁️ تخيل طبيباً (Arzt) يتحدث مع مريضة عن تجميل الأنف 👨‍⚕️👃"
};

HELP_DATA["lesen1_exam33_q2"] = {
    text: "Text 2: Der Riechsinn ist unser ursprünglichster Sinn. Wer ihn schärfen will, ist im 'Erfahrungsfeld der Sinne' an der richtigen Adresse. 'Es entsteht eine neue Welt, wenn man sich mit der Nase beschäftigt'.",
    meaning: "حاسة الشم هي أقدم حواسنا - من يريد شحذها فهو في المكان المناسب في 'حقل تجربة الحواس' - 'ينشأ عالم جديد عندما تتعامل مع الأنف'",
    keywords: ["Geruchssinn = حاسة الشم", "Nase = أنف", "erfahren = تجربة"],
    simplified: "تجربة العالم من جديد من خلال حاسة الشم",
    imagine: "🧠👁️ تخيل شخصاً يشم زهرة (Blume) ويختبر عالماً جديداً 🌸👃✨"
};

HELP_DATA["lesen1_exam33_q3"] = {
    text: "Text 3: Der sechs Jahre alte Schäferhund Falko sucht für den Zoll nach Kokain, Haschisch und Heroin. Hunde riechen bis zu eine Million Mal besser als Menschen. Spürhunde erkennen auch die Richtung eines Geruchs.",
    meaning: "الكلب الراعي فالكو البالغ ست سنوات يبحث عن الكوكايين والحشيش والهيروين للجمارك - الكلاب تشم أفضل من البشر بمليون مرة - كلاب التتبع تتعرف أيضاً على اتجاه الرائحة",
    keywords: ["Drogenspürhunde = كلاب تتبع مخدرات", "Zoll = جمارك", "riechen = شم"],
    simplified: "كلاب بأربع أرجل ضد تهريب المخدرات",
    imagine: "🧠👁️ تخيل كلب بوليسي (Polizeihund) يشم حقيبة 🐕‍🦺👃💼"
};

HELP_DATA["lesen1_exam33_q4"] = {
    text: "Text 4: Beim Menschen ist das Sehen der Sinn Nummer eins, gefolgt vom Hören und an dritter Stelle dem Riechen. Hunde sind Riechweltmeister. Die längste Nase der Welt hat der Elefant. Sie ist zum Werkzeug geworden.",
    meaning: "عند الإنسان، البصر هو الحاسة رقم واحد، يليه السمع ثم الشم في المركز الثالث - الكلاب هي أبطال العالم في الشم - أطول أنف في العالم هو للفيل - لقد أصبح أداة",
    keywords: ["Elefanten = أفيال", "Riechorgane = أعضاء شم", "unterschiedlich = مختلفة"],
    simplified: "أعضاء شم حيوانية - متفاوتة في القدرات",
    imagine: "🧠👁️ تخيل فيلاً (Elefant) بأنف طويل جداً 🐘👃"
};

HELP_DATA["lesen1_exam33_q5"] = {
    text: "Text 5: Niesen ist eine Reaktion auf die Umwelt. Mal kitzelt Staub die Nase, mal reizt ein chemischer Stoff unser Riechorgan. Es kommt zu einem explosionsartigen Ausstoßen der Luft durch die Nase - dem Niesen.",
    meaning: "العطس هو رد فعل على البيئة - أحياناً يدغدغ الغبار الأنف، وأحياناً تهيج مادة كيميائية عضو الشم لدينا - يحدث طرد انفجاري للهواء عبر الأنف - العطس",
    keywords: ["Niesen = عطس", "Nase = أنف", "Reinigung = تنظيف"],
    simplified: "التنظيف الذاتي لعضو الشم لدينا",
    imagine: "🧠👁️ تخيل شخصاً يعطس (niest) بشدة 🤧💨"
};

// ============================================
// Exam 34: الانتخابات والمرأة الروسية
// ============================================

HELP_DATA["lesen1_exam34_q1"] = {
    text: "Text 1: Nadeschda Suslowa wurde 1843 als Tochter eines Bauern geboren. Sie wollte Ärztin werden. In Russland war ihr nicht erlaubt, eine Hochschule zu besuchen, also ging sie ins Ausland. Sie war die erste promovierte Ärztin in der Schweiz und in Russland.",
    meaning: "ناديشدا سوسلوفا ولدت عام 1843 ابنة مزارع - أرادت أن تصبح طبيبة - في روسيا لم يُسمح لها بزيارة الجامعة، فذهبت إلى الخارج - كانت أول طبيبة حاصلة على دكتوراه في سويسرا وروسيا",
    keywords: ["Pionierin = رائدة", "Frauenausbildung = تعليم النساء", "Ärztin = طبيبة"],
    simplified: "رائدة في تعليم المرأة الأكاديمية",
    imagine: "🧠👁️ تخيل امرأة (Frau) ترتدي قبعة التخرج 🎓👩‍🎓"
};

HELP_DATA["lesen1_exam34_q2"] = {
    text: "Text 2: Dass Frauen wählen und gewählt werden dürfen, ist heute selbstverständlich. Doch das war nicht immer so. Olympe de Gouges forderte zu Zeiten der Französischen Revolution die Gleichstellung der Frau.",
    meaning: "أنه يُسمح للنساء بالانتخاب والترشح، أمر طبيعي اليوم - لكن لم يكن كذلك دائماً - أوليمب دو غوغ طالبت بمساواة المرأة في أوقات الثورة الفرنسية",
    keywords: ["Frauenstimmrecht = حق تصويت النساء", "Revolution = ثورة", "Frankreich = فرنسا"],
    simplified: "تطور حق تصويت النساء - نساء في الثورة الفرنسية",
    imagine: "🧠👁️ تخيل امرأة ترفع لافتة تطالب بالمساواة ✊👩"
};

HELP_DATA["lesen1_exam34_q3"] = {
    text: "Text 3: Das Wahlverhalten von Frauen hat sich verändert. In den 50er Jahren wählten verheiratete Frauen oft wie ihre Männer. Heute wählen Männer und Frauen unterschiedlich. Frauen bringen für grüne Parteien mehr Sympathie auf.",
    meaning: "سلوك التصويت للنساء تغير - في الخمسينيات، كانت المتزوجات يصوتن غالباً مثل أزواجهن - اليوم الرجال والنساء يصوتون بشكل مختلف - النساء يظهرن تعاطفاً أكبر مع الأحزاب الخضراء",
    keywords: ["Wahlurne = صندوق اقتراع", "Frauen = نساء", "geschlechtsspezifisch = حسب الجنس"],
    simplified: "قرارات خاصة بالجنس عند صندوق الاقتراع",
    imagine: "🧠👁️ تخيل امرأة ورجلاً يصوتان بشكل مختلف 🗳️👩‍🦰👨‍🦱"
};

HELP_DATA["lesen1_exam34_q4"] = {
    text: "Text 4: In den vergangenen Jahrzehnten hat sich das Geschlechterverhältnis bei Studierenden stark verändert. Weibliche Studierende absolvieren das Studium schneller und schließen es häufiger erfolgreich ab.",
    meaning: "في العقود الماضية، تغيرت نسبة الجنسين بين الطلاب بشكل كبير - الطالبات يكملن الدراسة بشكل أسرع وينجحن في إكمالها بشكل أكثر تواتراً",
    keywords: ["Studentinnen = طالبات", "Noten = درجات", "Studium = دراسة"],
    simplified: "طالبات في المسار السريع - المرأة تحقق نتائج أفضل",
    imagine: "🧠👁️ تخيل طالبة (Studentin) تذاكر بنجاح 📚👩‍🎓✨"
};

HELP_DATA["lesen1_exam34_q5"] = {
    text: "Text 5: 'Suffragetten' nannte man die Frauen, die sich in Großbritannien für das allgemeine Frauenwahlrecht einsetzten. Emmeline Pankhurst und ihre Töchter griffen zu immer härteren Mitteln, bis hin zu Brand- und Bombenanschlägen.",
    meaning: "سافرجيت كان اسم النساء اللواتي ناضلن من أجل حق الاقتراع العام للنساء في بريطانيا - إيميلين بانكهورست وبناتها لجأن إلى وسائل أكثر قسوة، وصولاً إلى الحرائق والتفجيرات",
    keywords: ["Vorkämpferinnen = رائدات", "Frauenwahlrecht = حق تصويت النساء", "Großbritannien = بريطانيا"],
    simplified: "رائدات من أجل حق تصويت النساء",
    imagine: "🧠👁️ تخيل نساء يتظاهرن (demonstrieren) من أجل حقوقهن 👭✊"
};

// ============================================
// Exam 35: kein Zeit
// ============================================

HELP_DATA["lesen1_exam35_q1"] = {
    text: "Text 1: Die Krüger sind eine ganz normale Familie. Vater Bernd arbeitet 40 Stunden, Mutter Yvonne hat einen Teilzeitjob. Nach ihrer Arbeit holt sie die Kinder ab, geht einkaufen, putzt, kocht, bringt die Kinder zum Training. Für Sport bleibt keine Zeit.",
    meaning: "عائلة كروغر عائلة طبيعية جداً - الأب بيرند يعمل 40 ساعة، الأم إيفون لديها وظيفة بدوام جزئي - بعد عملها، تستلم الأطفال، تتسوق، تنظف، تطبخ، توصل الأطفال للتدريب - لا يبقى وقت للرياضة",
    keywords: ["Zeitprobleme = مشاكل وقت", "Familie = عائلة", "keine Zeit = لا وقت"],
    simplified: "مشاكل الوقت في العائلة - لا وقت للأطفال أيضاً",
    imagine: "🧠👁️ تخيل أماً مشغولة جداً (sehr beschäftigt) لا تجد وقتاً ⏰😫"
};

HELP_DATA["lesen1_exam35_q2"] = {
    text: "Text 2: Der Wunsch nach Zweisamkeit hat sich zu einem guten Geschäft entwickelt. Neben seriösen Firmen finden sich auf dem Markt auch schwarze Schafe. Tricks beginnen bereits bei den Anzeigen.",
    meaning: "الرغبة في العلاقة الحميمة تطورت إلى عمل جيد - إلى جانب الشركات الموثوقة، توجد أيضاً خروف سوداء في السوق - الحيل تبدأ بالفعل من الإعلانات",
    keywords: ["Kontaktagenturen = وكالات تعارف", "zweifelhaft = مشبوه", "Vorsicht = حذر"],
    simplified: "احذر من وكالات التعارف المشبوهة!",
    imagine: "🧠👁️ تخيل علامة تحذير (Warnung) على وكالة تعارف ⚠️💔"
};

HELP_DATA["lesen1_exam35_q3"] = {
    text: "Text 3: Die Partnerschaft verläuft in Phasen. Fast jede Liebe beginnt mit einer Hochphase der Verliebtheit. Danach folgt eine Phase des satten Glücks. Später tritt der Alltag ein, mit Stress- und Streitphasen.",
    meaning: "العلاقة تمر بمراحل - كل حب تقريباً يبدأ بمرحلة ذروة من الولع - بعدها تأتي مرحلة السعادة الكاملة - لاحقاً تدخل الحياة اليومية، بمراحل التوتر والخلاف",
    keywords: ["Liebe = حب", "wachsen = ينمو", "Beziehung = علاقة"],
    simplified: "الحب مدى الحياة يحتاج إلى وقت لينمو",
    imagine: "🧠👁️ تخيل زوجين يكبران معاً في الحب 👫💕"
};

HELP_DATA["lesen1_exam35_q4"] = {
    text: "Text 4: Knapp 13 Millionen Single-Haushalte gibt es in Deutschland, meist unfreiwillig. Fast jeder, der alleine lebt, wünscht sich den richtigen Partner. Doch wie und wo ist er oder sie zu finden?",
    meaning: "ما يقرب من 13 مليون أسرة فردية تعيش في ألمانيا، معظمها غير طوعي - تقريباً كل من يعيش بمفرده يتمنى الشريك المناسب - لكن كيف وأين يمكن العثور عليه أو عليها؟",
    keywords: ["Partnersuche = بحث عن شريك", "Single = أعزب", "finden = يجد"],
    simplified: "من يبحث يجد - نصائح للبحث عن شريك",
    imagine: "🧠👁️ تخيل شخصاً وحيداً (einsamer Mensch) يبحث عن الحب 🔍❤️"
};

HELP_DATA["lesen1_exam35_q5"] = {
    text: "Text 5: Wenn die Kinder ausziehen, verändert sich viel. Neben der Freude, endlich wieder Zeit und Raum für sich zu haben, entsteht auch eine Leere. Erika Paxmann war traurig, als die Kinder auszogen.",
    meaning: "عندما يغادر الأطفال المنزل، يتغير الكثير - إلى جانب الفرحة بوجود وقت ومساحة للذات أخيراً، ينشأ أيضاً فراغ - إريكا باكسمان كانت حزينة عندما غادر الأطفال",
    keywords: ["Kinder aus Haus = أطفال خارج المنزل", "Eltern = والدان", "Zeit = وقت"],
    simplified: "عندما يغادر الأطفال المنزل - حياة جديدة للآباء",
    imagine: "🧠👁️ تخيل أبوين ينظران إلى غرفة فارغة بعد خروج الأبناء 🏠😢"
};

// ============================================
// Exam 36: kein Zeit (التعديل 1)
// ============================================

HELP_DATA["lesen1_exam36_q1"] = {
    text: "Text 1: Die Krüger sind eine ganz normale Familie. Vater Bernd arbeitet 40 Stunden, Mutter Yvonne hat einen Teilzeitjob. Bernd Krüger kann sich nicht erinnern, wann er das letzte Buch gelesen hat.",
    meaning: "عائلة كروغر عائلة طبيعية جداً - الأب بيرند يعمل 40 ساعة، الأم إيفون لديها وظيفة بدوام جزئي - بيرند كروغر لا يتذكر متى قرأ آخر كتاب",
    keywords: ["Zeitprobleme = مشاكل وقت", "Familie = عائلة", "Termindruck = ضغط مواعيد"],
    simplified: "ضغط المواعيد حتى عند الأطفال",
    imagine: "🧠👁️ تخيل طفلاً (Kind) بجدول مليء بالمواعيد 📅😵"
};

HELP_DATA["lesen1_exam36_q2"] = {
    text: "Text 2: Neben seriösen Firmen finden sich auf dem Markt auch schwarze Schafe. Bei solchen Anbietern beginnen die Tricks bereits bei den Anzeigen. Wer die angegebene Telefonnummer wählt, stellt fest, dass es eine Partnervermittlungsagentur ist.",
    meaning: "إلى جانب الشركات الموثوقة، توجد أيضاً خروف سوداء في السوق - عند هؤلاء المزودين، تبدأ الحيل بالفعل من الإعلانات - من يتصل بالرقم المذكور يكتشف أنها وكالة تعارف",
    keywords: ["Kontaktagenturen = وكالات تعارف", "Vorsicht = حذر", "Telefon = هاتف"],
    simplified: "احذر من وكالات التعارف المشبوهة!",
    imagine: "🧠👁️ تخيل شخصاً يتصل (anrufen) ويكتشف أنه وقع في فخ 📞😠"
};

HELP_DATA["lesen1_exam36_q3"] = {
    text: "Text 3: Wie entsteht eine langfristige Beziehung? Die Partnerschaft verläuft in Phasen. Fast jede Liebe beginnt mit einer Hochphase der Verliebtheit. Danach folgt eine Phase des satten Glücks.",
    meaning: "كيف تنشأ علاقة طويلة الأمد؟ العلاقة تمر بمراحل - كل حب تقريباً يبدأ بمرحلة ذروة من الولع - بعدها تأتي مرحلة السعادة الكاملة",
    keywords: ["Liebe = حب", "wachsen = ينمو", "Beziehung = علاقة"],
    simplified: "الحب يحتاج وقتاً لينمو",
    imagine: "🧠👁️ تخيل زهرة (Blume) تنمو مع الوقت 🌱❤️"
};

HELP_DATA["lesen1_exam36_q4"] = {
    text: "Text 4: Knapp 13 Millionen Single-Haushalte gibt es in Deutschland. Fast jeder, der alleine lebt, wünscht sich den richtigen Partner. Oftmals stecken Singles in einer schwierigen Situation.",
    meaning: "ما يقرب من 13 مليون أسرة فردية في ألمانيا - تقريباً كل من يعيش بمفرده يتمنى الشريك المناسب - غالباً ما يقع العزاب في موقف صعب",
    keywords: ["Singles = عزاب", "Partnersuche = بحث عن شريك", "Alleinsein = وحدة"],
    simplified: "بحث نشط عن شريك للتغلب على الوحدة",
    imagine: "🧠👁️ تخيل شخصاً وحيداً يبحث عن شريك على هاتفه 📱😔"
};

HELP_DATA["lesen1_exam36_q5"] = {
    text: "Text 5: Wenn die Kinder ausziehen, verändert sich viel. Neben der Freude, endlich wieder Zeit und Raum für sich zu haben, entsteht auch eine Leere. Erika Paxmann war traurig, als die Kinder auszogen.",
    meaning: "عندما يغادر الأطفال المنزل، يتغير الكثير - إلى جانب الفرحة بوجود وقت للذات، ينشأ أيضاً فراغ - إريكا باكسمان كانت حزينة عندما غادر الأطفال",
    keywords: ["Kinder aus Haus = أطفال خارج المنزل", "Eltern = والدان", "traurig = حزين"],
    simplified: "عندما يغادر الأطفال - حياة جديدة مع حنين",
    imagine: "🧠👁️ تخيل أباً ينظر من النافذة (Fenster) بعد خروج الأبناء 👴😔"
};

// ============================================
// Exam 37: Limonade
// ============================================

HELP_DATA["lesen1_exam37_q1"] = {
    text: "Text 1: Möchten Sie Kraft, Jugend und Gesundheit aus der Flasche? Das Deutsche Institut für Ernährungsforschung hält es für Unsinn, Wasser mit Sauerstoff anzureichern. Der Körper nimmt Sauerstoff über die Atemluft auf. Gehen Sie an die frische Luft!",
    meaning: "هل تريد القوة والشباب والصحة من الزجاجة؟ معهد التغذية الألماني يعتبر إضافة الأكسجين للماء هراءً - الجسم يمتص الأكسجين عبر هواء التنفس - اذهب إلى الهواء الطلق!",
    keywords: ["frische Luft = هواء نقي", "Kraft = قوة", "Sauerstoff = أكسجين"],
    simplified: "الهواء النقي كمصدر حقيقي للطاقة",
    imagine: "🧠👁️ تخيل شخصاً يتنفس هواءً نقيًا (frische Luft) بقوة 💪🌬️"
};

HELP_DATA["lesen1_exam37_q2"] = {
    text: "Text 2: Wenn es regnet, versickert das Regenwasser im Boden und wird gefiltert. Aus dem Regenwasser wird Trinkwasser. Nitrat gelangt durch übermäßige Düngung in das Trinkwasser und bedroht die Gesundheit.",
    meaning: "عندما تمطر، يتسرب مطر الماء في الأرض ويتم ترشيحه - من ماء المطر يصبح ماء شرب - النترات تصل إلى ماء الشرب عبر التسميد المفرط وتهدد الصحة",
    keywords: ["Regenwasser = مطر", "Mineralwasser = ماء معدني", "Nitrat = نترات"],
    simplified: "من المطر إلى ماء معدني - النترات تهدد الصحة",
    imagine: "🧠👁️ تخيل قطرة مطر (Regentropfen) تتحول إلى ماء شرب 💧☁️"
};

HELP_DATA["lesen1_exam37_q3"] = {
    text: "Text 3: Nach den Unwettern der letzten Sommer sprechen Meteorologen von einer dramatischen Klimaveränderung. Stabile Sommer mit Sonnenschein pur sollen passé sein, stattdessen kurze Sonnenscheinperioden mit Unwettern.",
    meaning: "بعد العواصف في الصيف الماضي، خبراء الأرصاد يتحدثون عن تغير مناخي كبير - فصول الصيف المستقرة مع أشعة الشمس الصافية يجب أن تصبح من الماضي، بدلاً من ذلك فترات شمس قصيرة مع عواصف",
    keywords: ["Sommer = صيف", "Sonne = شمس", "Klimawandel = تغير مناخي"],
    simplified: "في المستقبل، الصيف لا يعني بالضرورة شمساً",
    imagine: "🧠👁️ تخيل شمساً (Sonne) وعاصفة (Unwetter) معاً ☀️🌩️"
};

HELP_DATA["lesen1_exam37_q4"] = {
    text: "Text 4: Wozu noch Kästen mit Mineralwasserflaschen schleppen? Leitungswasser in Deutschland ist von guter Qualität. Mit einer Sodamaschine lassen sich Sprudel und Limonaden selbst herstellen.",
    meaning: "لماذا لا نزال نحمل صناديق زجاجات المياه المعدنية؟ ماء الصنبور في ألمانيا ذو جودة جيدة - بآلة الصودا يمكن صنع المياه الغازية والليمونادة في المنزل",
    keywords: ["Sprudel = مياه غازية", "hausgemacht = منزلي", "Wasserhahn = صنبور ماء"],
    simplified: "مياه غازية منزلية - زمن حمل الزجاجات ولى",
    imagine: "🧠👁️ تخيل آلة صودا (Sodamaschine) على طاولة المطبخ 🥤🏠"
};

HELP_DATA["lesen1_exam37_q5"] = {
    text: "Text 5: 'Wasser ist zum Waschen da' lautete ein Schlager der 1950er. Wasser zu trinken schien damals nicht in die neue Wohlstandswelt zu passen. Heute raten Ärzte: 'Trinken Sie täglich mindestens 2,5 Liter Wasser'.",
    meaning: "'الماء للغسيل' كان عنوان أغنية في الخمسينيات - شرب الماء بدا آنذاك غير مناسب لعالم الثراء الجديد - اليوم ينصح الأطباء: 'اشرب يومياً 2.5 لتراً على الأقل من الماء'",
    keywords: ["Wasser = ماء", "trinken = شرب", "Gesundheit = صحة"],
    simplified: "اشرب الكثير من الماء - احصل على الصحة",
    imagine: "🧠👁️ تخيل شخصاً يشرب كوب ماء (Wasserglas) 🥤💧"
};

// ============================================
// Exam 38: Limonade (التعديل 1)
// ============================================

HELP_DATA["lesen1_exam38_q1"] = {
    text: "Text 1: Sauerstoff-Mineralwasser - das Deutsche Institut für Ernährungsforschung hält es für Unsinn. Der Körper nimmt Sauerstoff hauptsächlich über die Atemluft auf, höchstens 0,3% über den Magen-Darm-Trakt.",
    meaning: "ماء معدني بالأكسجين - معهد التغذية الألماني يعتبره هراءً - الجسم يمتص الأكسجين بشكل رئيسي عبر هواء التنفس، على الأكثر 0.3% عبر الجهاز الهضمي",
    keywords: ["Sauerstoff = أكسجين", "Sprudel = مياه غازية", "fit = لياقة"],
    simplified: "أكسجين أكثر في المياه الغازية يجعلك لائقاً؟ لا!",
    imagine: "🧠👁️ تخيل زجاجة ماء (Wasserflasche) مكتوب عليها أكسجين O2 💧❌"
};

HELP_DATA["lesen1_exam38_q2"] = {
    text: "Text 2: Regenwasser versickert im Boden, wird gefiltert und gereinigt, wird zu Trinkwasser, sammelt sich in Sandstein. Nitrat gelangt durch übermäßige Düngung in das Trinkwasser und bedroht die Gesundheit.",
    meaning: "ماء المطر يتسرب في الأرض، يتم ترشيحه وتنقيته، يصبح ماء شرب، يتجمع في الحجر الرملي - النترات تصل إلى ماء الشرب عبر التسميد المفرط وتهدد الصحة",
    keywords: ["Regen = مطر", "Mineralwasser = ماء معدني", "Nitrat = نترات"],
    simplified: "من المطر إلى ماء معدني - خطر النترات",
    imagine: "🧠👁️ تخيل مصنع مياه (Wasserwerk) يحول المطر إلى ماء شرب 🏭💧"
};

HELP_DATA["lesen1_exam38_q3"] = {
    text: "Text 3: Meteorologen sprechen von dramatischer Klimaveränderung. Stabile Sommer mit Sonnenschein pur sollen passé sein. Kurze Sonnenscheinperioden werden sich mit Unwetterfronten abwechseln.",
    meaning: "خبراء الأرصاد يتحدثون عن تغير مناخي كبير - فصول الصيف المستقرة مع أشعة الشمس الصافية يجب أن تصبح من الماضي - فترات شمس قصيرة سوف تتناوب مع جبهات عواصف",
    keywords: ["Sommer = صيف", "Sonne = شمس", "Unwetter = عواصف"],
    simplified: "لا شمس بالضرورة في الصيف بالمستقبل",
    imagine: "🧠👁️ تخيل شاطئاً (Strand) تبدو عليه الشمس ثم فجأة عاصفة 🏖️☀️→⛈️"
};

HELP_DATA["lesen1_exam38_q4"] = {
    text: "Text 4: Leitungswasser in deutschen Wohnungen ist von guter bis sehr guter Qualität. Mit einer Sodamaschine lassen sich Sprudel und Limonaden selbst herstellen.",
    meaning: "ماء الصنبور في الشقق الألمانية ذو جودة جيدة إلى جيدة جداً - بآلة الصودا يمكن صنع المياه الغازية والليمونادة في المنزل",
    keywords: ["Sprudel = مياه غازية", "hausgemacht = منزلي", "Limonade = ليمونادة"],
    simplified: "ليمونادة من صنبور الماء - زمن حمل الزجاجات انتهى",
    imagine: "🧠👁️ تخيل ليمونادة (Limonade) تُصنع من ماء الصنبور 🍋💧"
};

HELP_DATA["lesen1_exam38_q5"] = {
    text: "Text 5: 'Wasser ist zum Waschen da' lautete ein Schlager der 1950er. Heute raten Ärzte: 'Trinken Sie täglich mindestens 2,5 Liter Wasser'. Mineralwasser gleicht Mineral- und Flüssigkeitsverlust aus, fördert die Verdauung, ohne Zucker und Kalorien.",
    meaning: "'الماء للغسيل' كان عنوان أغنية في الخمسينيات - اليوم ينصح الأطباء: 'اشرب يومياً 2.5 لتراً من الماء' - المياه المعدنية تعوض فقدان المعادن والسوائل، تعزز الهضم، بدون سكر وسعرات",
    keywords: ["Wasser = ماء", "trinken = شرب", "Gesundheit = صحة"],
    simplified: "اشرب الماء بكثرة - احصل على الصحة",
    imagine: "🧠👁️ تخيل شخصاً يشرب الماء ويبتسم (lächelt) 😊💧"
};

// ============================================
// Exam 39: Limonade (التعديل 2)
// ============================================

HELP_DATA["lesen1_exam39_q1"] = {
    text: "Text 1: Sauerstoff-Mineralwasser - das Deutsche Institut für Ernährungsforschung hält es für Unsinn. Eine Umfrage unter Schüler zeigte: Es schmeckt nicht anders als andere Mineralwässer.",
    meaning: "ماء معدني بالأكسجين - معهد التغذية الألماني يعتبره هراءً - استبيان بين الطلاب أظهر: طعمه لا يختلف عن المياه المعدنية الأخرى",
    keywords: ["Sauerstoff = أكسجين", "Sprudel = مياه غازية", "fit = لياقة"],
    simplified: "أكسجين أكثر في المشروبات الغازية - لا يجعلك لائقاً",
    imagine: "🧠👁️ تخيل زجاجة ماء غازي (Sprudel) مكتوب عليها أكسجين 🥤❌💪"
};

HELP_DATA["lesen1_exam39_q2"] = {
    text: "Text 2: Regenwasser versickert im Boden, wird gefiltert, wird zu Trinkwasser. Durch Brunnen kann Mineralwasser gewonnen werden. Nitrat gelangt durch Düngung in das Trinkwasser.",
    meaning: "ماء المطر يتسرب في الأرض، يتم ترشيحه، يصبح ماء شرب - عبر الآبار يمكن استخراج ماء معدني - النترات تصل إلى ماء الشرب عبر التسميد",
    keywords: ["Regen = مطر", "Mineralwasser = ماء معدني", "Nitrat = نترات"],
    simplified: "من المطر إلى ماء معدني - النترات تهدد الصحة",
    imagine: "🧠👁️ تخيل بئراً (Brunnen) في الأرض 💧⛲"
};

HELP_DATA["lesen1_exam39_q3"] = {
    text: "Text 3: Meteorologen sprechen von dramatischer Klimaveränderung. Stabile Sommer mit Sonnenschein pur sollen passé sein. Kurze Sonnenscheinperioden wechseln sich mit Unwettern ab. Überschwemmungen sind die Folge.",
    meaning: "خبراء الأرصاد يتحدثون عن تغير مناخي كبير - فصول الصيف المستقرة مع أشعة الشمس الصافية يجب أن تصبح من الماضي - فترات شمس قصيرة تتناوب مع عواصف - الفيضانات هي النتيجة",
    keywords: ["Sommer = صيف", "Sonne = شمس", "Überschwemmungen = فيضانات"],
    simplified: "الفيضانات بدلاً من الشمس في الصيف",
    imagine: "🧠👁️ تخيل شاطئاً (Strand) مغموراً بالمياه 🌊🏖️"
};

HELP_DATA["lesen1_exam39_q4"] = {
    text: "Text 4: Mit einer Sodamaschine lassen sich Sprudel und Limonaden selbst herstellen, ganz nach individuellem Geschmack: mal mit mehr, mal mit weniger Prickeln, mal süßer, mal fruchtiger.",
    meaning: "بآلة صودا يمكن صنع المياه الغازية والليمونادة في المنزل، حسب الرغبة: أحياناً بفوران أكثر، أحياناً أقل، أحياناً أحلى، أحياناً بطعم فاكهة أكثر",
    keywords: ["Sprudel = مياه غازية", "hausgemacht = منزلي", "Limonade = ليمونادة"],
    simplified: "مياه غازية منزلية بدلاً من حمل الزجاجات",
    imagine: "🧠👁️ تخيل شخصاً يصنع مشروباً غازياً (Sprudel) في المنزل 🥤🏠"
};

HELP_DATA["lesen1_exam39_q5"] = {
    text: "Text 5: In den 1950ern galten süße Limonaden als besser als Wasser. Heute raten Ärzte: Trinken Sie täglich mindestens 2,5 Liter Wasser. Mineralwasser gleicht Mineralverlust aus, fördert die Verdauung, ohne Zucker und Kalorien.",
    meaning: "في الخمسينيات، كانت الليمونادة الحلوة تعتبر أفضل من الماء - اليوم ينصح الأطباء: اشرب 2.5 لتراً من الماء يومياً - المياه المعدنية تعوض فقدان المعادن وتعزز الهضم، بدون سكر وسعرات",
    keywords: ["Wasser = ماء", "trinken = شرب", "Gesundheit = صحة"],
    simplified: "اشرب ماءً كثيراً - اشحن صحتك",
    imagine: "🧠👁️ تخيل شخصاً سعيداً يشرب الماء (Wasser) 😊💧"
};

// ============================================
// Exam 40: Auf dem Weg
// ============================================

HELP_DATA["lesen1_exam40_q1"] = {
    text: "Text 1: Wir bieten Bewegungsförderung mit und auf Pferden zur Stärkung der körperlichen und geistigen Fitness. Ponys und Pferde stehen im Mittelpunkt. Sie zu beobachten, füttern, streicheln, putzen, führen oder reiten - das fasziniert Teenies.",
    meaning: "نقدم تعزيز الحركة مع وعلى الخيول لتقوية اللياقة البدنية والعقلية - المهور والخيول في المركز - مراقبتها، إطعامها، مداعبتها، تنظيفها، قيادتها أو ركوبها - هذا يسحر المراهقين",
    keywords: ["Pferde = خيول", "lernen = تعلم", "Spaß = متعة"],
    simplified: "متعة تعلمية حيوانية للجميع",
    imagine: "🧠👁️ تخيل طفلاً يلعب مع حصان (Pferd) 🐴👧"
};

HELP_DATA["lesen1_exam40_q2"] = {
    text: "Text 2: Die Schwimm- und Sportfreunde 1905 e.V. stellten Schwimmer für die Nationalmannschaft, die bei Weltmeisterschaften oder Olympischen Spielen starteten. Seit 2010 stellen sich wieder Erfolge auf Landes- und Bundesebene ein.",
    meaning: "أصدقاء السباحة والرياضة 1905 قدموا سباحين للمنتخب الوطني الذين شاركوا في بطولات العالم أو الألعاب الأولمبية - منذ 2010، تعود النجاحات على مستوى الولايات والمستوى الاتحادي",
    keywords: ["Wettkämpfe = مسابقات", "international = دولي", "Schwimmer = سباحون"],
    simplified: "في الطريق إلى المسابقات الدولية",
    imagine: "🧠👁️ تخيل سباحاً (Schwimmer) يفوز بميدالية 🏊‍♂️🥇"
};

HELP_DATA["lesen1_exam40_q3"] = {
    text: "Text 3: Wer selbst im Rentenalter noch einen durchtrainierten Körper haben möchte, sollte schon in jungen Jahren das Ausdauertraining nicht vernachlässigen. Auch bei Rückenschmerzen hilft das Fitnessstudio.",
    meaning: "من يريد الحفاظ على جسم ممشوق حتى سن التقاعد، يجب ألا يهمل تدريبات التحمل منذ الشباب - صالة الألعاب الرياضية تساعد أيضاً في آلام الظهر",
    keywords: ["Gesundheit = صحة", "Rente = تقاعد", "fit = لائق"],
    simplified: "لائق وصحي حتى بعد التقاعد",
    imagine: "🧠👁️ تخيل شخصاً كبيراً (alter Mensch) يمارس الرياضة 👴💪"
};

HELP_DATA["lesen1_exam40_q4"] = {
    text: "Text 4: Das Trampolin bietet die Möglichkeit, auch bei körperlichen Einschränkungen ein Trainingsprogramm zu absolvieren. Neben Gewichtsabnahme werden Muskeln gelockert, Verspannungen lösen sich.",
    meaning: "الترامبولين يوفر إمكانية إكمال برنامج تدريبي حتى مع القيود الجسدية - بالإضافة إلى فقدان الوزن، تسترخي العضلات، وتتحلل التوترات",
    keywords: ["Verspannungen = توترات", "lösen = حل", "Wassergymnastik = تمارين مائية"],
    simplified: "حل التوترات من خلال التمارين المائية",
    imagine: "🧠👁️ تخيل شخصاً يمارس تمارين في الماء 💧🤸"
};

HELP_DATA["lesen1_exam40_q5"] = {
    text: "Text 5: Sporttauchen wird in den Vereinen und Tauchschulen des Verbandes Deutscher Sporttaucher angeboten. Ziel des Tauchtrainings ist das Lernen der richtigen Technik für das Atmen und das Beherrschen der Techniken für das Abtauchen.",
    meaning: "الغوص الرياضي يُقدم في أندية ومدارس الغوص لاتحاد الغواصين الرياضيين الألمان - هدف تدريب الغوص هو تعلم التقنية الصحيحة للتنفس وإتقان تقنيات الغوص",
    keywords: ["Tauchen = غوص", "Wasser = ماء", "Sport = رياضة"],
    simplified: "مارس الرياضة مثل سمكة تحت الماء",
    imagine: "🧠👁️ تخيل غواصاً (Taucher) تحت الماء 🤿🐟"
};

// ============================================
// Exam 41: Schlafzug
// ============================================

HELP_DATA["lesen1_exam41_q1"] = {
    text: "Text 1: Der längste dokumentierte Winterschlaf einer Fledermausart in Nordamerika dauerte 344 Tage. In der kalten Jahreszeit ziehen sich viele Tiere zurück und verfallen in den Winterschlaf. Herzschlag und Atmung verlangsamen sich, die Körpertemperatur fällt.",
    meaning: "أطول سبات شتوي موثق لنوع من الخفافيش في أمريكا الشمالية استمر 344 يوماً - في موسم البرد، تتراجع العديد من الحيوانات وتدخل في سبات شتوي - نبضات القلب والتنفس تبطئ، درجة حرارة الجسم تنخفض",
    keywords: ["Winterschlaf = سبات شتوي", "Tiere = حيوانات", "Energie = طاقة"],
    simplified: "سلوك توفير الطاقة عند الحيوانات",
    imagine: "🧠👁️ تخيل دباً (Bär) نائماً في الشتاء 🐻❄️💤"
};

HELP_DATA["lesen1_exam41_q2"] = {
    text: "Text 2: Ein Schulprojekt in Dänemark untersuchte die Auswirkungen von Tageslicht auf Kinder. Schüler in Räumen mit großen Fenstern erzielten bessere Testergebnisse. Natürliches Licht wirkt sich positiv auf die Konzentrationsfähigkeit aus.",
    meaning: "مشروع مدرسي في الدنمارك درس تأثير ضوء النهار على الأطفال - التلاميذ في غرف بنوافذ كبيرة حققوا نتائج اختبار أفضل - للضوء الطبيعي تأثير إيجابي على القدرة على التركيز",
    keywords: ["Licht = ضوء", "Lernerfolg = نجاح تعليمي", "Schule = مدرسة"],
    simplified: "الضوء الجيد يعزز نجاح التعلم",
    imagine: "🧠👁️ تخيل فصلاً دراسياً (Klassenzimmer) مليئاً بالضوء ☀️📚"
};

HELP_DATA["lesen1_exam41_q3"] = {
    text: "Text 3: Schon die alten Römer wussten, dass ausreichend Schlaf entscheidend für die Leistungsfähigkeit ist. Ein geregelter Schlafrhythmus ist von zentraler Bedeutung für unsere Gesundheit. Schlafstörungen können das Immunsystem schwächen.",
    meaning: "حتى الرومان القدماء عرفوا أن النوم الكافي حاسم للأداء - إيقاع النوم المنتظم له أهمية مركزية لصحتنا - اضطرابات النوم يمكن أن تضعف جهاز المناعة",
    keywords: ["Schlaf = نوم", "klug = ذكي", "Gesundheit = صحة"],
    simplified: "بالنوم تصبح أذكى",
    imagine: "🧠👁️ تخيل شخصاً نائماً (schlafend) وعقلاً منبهاً 🛌🧠✨"
};

HELP_DATA["lesen1_exam41_q4"] = {
    text: "Text 4: In den letzten Jahren hat sich das nächtliche Wandern zu einem Trend entwickelt. Wer nachts wandert, baut Stress ab, trainiert Konzentration und Sinne und erlebt die Natur intensiver. Bewegung im Dunkeln senkt den Stresshormonspiegel.",
    meaning: "في السنوات الأخيرة، تطور المشي ليلاً إلى موضة - من يمشي ليلاً، يقلل التوتر، يدرب التركيز والحواس، ويختبر الطبيعة بشكل أكثر كثافة - الحركة في الظلام تخفض مستوى هرمونات التوتر",
    keywords: ["wandern = مشي", "Dunkeln = ظلام", "Nacht = ليل"],
    simplified: "المشي في الظلام – نصائح لجولات ليلية",
    imagine: "🧠👁️ تخيل شخصاً يمشي (wandert) ليلاً في الطبيعة 🌙🥾"
};

HELP_DATA["lesen1_exam41_q5"] = {
    text: "Text 5: Die Weltgesundheitsorganisation (WHO) weist darauf hin, wie stark Tageslicht unsere innere Uhr beeinflusst. Arbeitnehmer, die ihre Arbeitszeiten am natürlichen Tagesrhythmus orientieren, leiden weniger unter Schlafproblemen.",
    meaning: "منظمة الصحة العالمية تشير إلى مدى تأثير ضوء النهار على ساعتنا الداخلية - الموظفون الذين يوجهون ساعات عملهم وفقاً للإيقاع الطبيعي للنهار يعانون أقل من مشاكل النوم",
    keywords: ["Arbeitszeiten = ساعات عمل", "Licht = ضوء", "Wohlbefinden = رفاهية"],
    simplified: "الضوء الطبيعي وتأثيره على رفاهيتنا",
    imagine: "🧠👁️ تخيل شخصاً يعمل في ضوء الشمس (Sonnenlicht) ☀️💼"
};

// ============================================
// Exam 42: Schlafzug (التعديل 1)
// ============================================

HELP_DATA["lesen1_exam42_q1"] = {
    text: "Text 1: Viele Tiere können im Winter auf Sparflamme schalten: Igel, Eichhörnchen gehen in den Winterschlaf. Der Winterschlaf ist ein Energiesparprogramm. Wichtig ist, Tiere im Winterschlaf nicht zu stören.",
    meaning: "العديد من الحيوانات يمكنها العمل على لهب منخفض في الشتاء: القنافذ والسناجب تدخل في سبات شتوي - السبات الشتوي هو برنامج لتوفير الطاقة - من المهم عدم إزعاج الحيوانات في السبات الشتوي",
    keywords: ["Tiere = حيوانات", "Energiesparmodus = وضع توفير طاقة", "Winter = شتاء"],
    simplified: "الحيوانات في وضع توفير الطاقة",
    imagine: "🧠👁️ تخيل قنفذاً (Igel) نائماً في أوراق الشجر 🦔🍂💤"
};

HELP_DATA["lesen1_exam42_q2"] = {
    text: "Text 2: Eine Studie der Pariser Sorbonne zeigte, dass Tageslicht die Leistungsfähigkeit verbessern kann. Wenn Schüler in Klassenräumen mit größeren Fenstern arbeiteten, steigerte sich ihre Leistung deutlich. Sonnenlicht ist zu bevorzugen.",
    meaning: "دراسة من جامعة السوربون في باريس أظهرت أن ضوء النهار يمكن أن يحسن الأداء - عندما عمل التلاميذ في فصول دراسية بنوافذ أكبر، تحسن أداؤهم بشكل ملحوظ - ضوء الشمس هو المفضل",
    keywords: ["Licht = ضوء", "Lernen = تعلم", "Erfolg = نجاح"],
    simplified: "الضوء الصحيح يعزز التعلم",
    imagine: "🧠👁️ تخيل طالباً يدرس في ضوء الشمس (Sonne) ☀️📖"
};

HELP_DATA["lesen1_exam42_q3"] = {
    text: "Text 3: Müdigkeit und Schlafbedürfnis richten sich danach, wie viele Stunden es hell ist. Melatonin steuert den Wach- und Schlafrhythmus. Licht blockiert seine Produktion. Menschen im Mittelalter folgten dem natürlichen Programm des Körpers.",
    meaning: "التعب والحاجة للنوم يعتمدان على عدد ساعات النهار - الميلاتونين يتحكم في إيقاع اليقظة والنوم - الضوء يمنع إنتاجه - الناس في العصور الوسطى اتبعوا البرنامج الطبيعي للجسم",
    keywords: ["Wintermüdigkeit = تعب شتوي", "Licht = ضوء", "Ursachen = أسباب"],
    simplified: "ما الذي يسبب تعبنا الشتوي؟",
    imagine: "🧠👁️ تخيل شخصاً متعباً (müde) في الشتاء ❄️😴"
};

HELP_DATA["lesen1_exam42_q4"] = {
    text: "Text 4: Wer sich viel merken möchte, sollte auf regelmäßige Schlafzeiten achten. Im Schlaf prägen sich neue Informationen besser ein. Schlafverhalten beeinflusst die geistige Leistungsfähigkeit stark.",
    meaning: "من يريد تذكر الكثير، يجب أن ينتبه لأوقات نوم منتظمة - أثناء النوم، تترسخ المعلومات الجديدة بشكل أفضل - سلوك النوم يؤثر بشكل كبير على الأداء العقلي",
    keywords: ["Schlaf = نوم", "klug = ذكي", "Gedächtnis = ذاكرة"],
    simplified: "بالنوم تصبح أذكى - فائدة النوم للعقل",
    imagine: "🧠👁️ تخيل شخصاً نائماً (schlafend) وحروفاً تتطاير إلى دماغه 🛌🔤"
};

HELP_DATA["lesen1_exam42_q5"] = {
    text: "Text 5: Bewegung an der frischen Luft hilft gegen den 'Winterblues'. 91% der Befragten fühlten sich danach besser. Das Sonnenlicht hebt die Stimmung. Wandern oder Spazierengehen im Winter hilft besonders gut gegen schlechte Laune.",
    meaning: "الحركة في الهواء الطلق تساعد ضد 'كآبة الشتاء' - 91% من المستطلعين شعروا بتحسن بعدها - ضوء الشمس يحسن المزاج - المشي لمسافات طويلة أو النزهات في الشتاء تساعد بشكل خاص ضد المزاج السيئ",
    keywords: ["Bewegung = حركة", "gute Laune = مزاج جيد", "Winter = شتاء"],
    simplified: "الحركة تخلق مزاجاً جيداً",
    imagine: "🧠👁️ تخيل شخصاً سعيداً يمشي (spazieren) في الثلج ❄️🚶‍♂️😊"
};

// ============================================
// Exam 43: Löwen
// ============================================

HELP_DATA["lesen1_exam43_q1"] = {
    text: "Text 1: Der Berliner Zoo gehört zu den bekanntesten Tierparks in Deutschland. Besonders beliebt sind die Löwen. Viele Familien kommen am Wochenende, um die Tiere zu beobachten. Der Zoo bietet Führungen und Workshops an.",
    meaning: "حديقة حيوان برلين هي من أشهر حدائق الحيوان في ألمانيا - الأسود محبوبة بشكل خاص - كثير من العائلات تأتي في عطلة نهاية الأسبوع لمراقبة الحيوانات - حديقة الحيوان تقدم جولات إرشادية وورش عمل",
    keywords: ["Löwen = أسود", "Zoo = حديقة حيوان", "beliebt = محبوب"],
    simplified: "الأسود محبوبة جداً بين الزوار - جولات وورش عمل",
    imagine: "🧠👁️ تخيل عائلة تنظر إلى أسد (Löwe) في حديقة الحيوان 🦁🏞️"
};

HELP_DATA["lesen1_exam43_q2"] = {
    text: "Text 2: In Südafrika gab es Konflikte zwischen Löwen und Menschen. Die Regierung hat beschlossen, große Reservate einzurichten. Diese Schutzgebiete sollen verhindern, dass Löwen aussterben, und gleichzeitig mehr Touristen anziehen.",
    meaning: "في جنوب أفريقيا كانت هناك صراعات بين الأسود والبشر - الحكومة قررت إنشاء محميات كبيرة - هذه المناطق المحمية يجب أن تمنع انقراض الأسود وفي نفس الوقت تجذب المزيد من السياح",
    keywords: ["Schutzgebiete = مناطق محمية", "Arten = أنواع", "bedroht = مهدد"],
    simplified: "جهود لحماية الأنواع المهددة - مناطق محمية جديدة",
    imagine: "🧠👁️ تخيل أسداً (Löwe) في منطقة محمية 🦁🛡️"
};

HELP_DATA["lesen1_exam43_q3"] = {
    text: "Text 3: In den USA ist ein großer Safari-Park die Hauptattraktion. Die Löwen sind dort die Hauptattraktion. Der Park bietet spezielle Übernachtungspakete in Lodges an, von denen man die Tiere direkt beobachten kann.",
    meaning: "في الولايات المتحدة، حديقة سفاري كبيرة هي الجذب الرئيسي - الأسود هي الجذب الرئيسي هناك - الحديقة تقدم باقات إقامة خاصة في نزل يمكن من خلالها مراقبة الحيوانات مباشرة",
    keywords: ["Safari-Parks = حدائق سفاري", "Touristen = سياح", "Löwen = أسود"],
    simplified: "الأسود تجلب السياح إلى حدائق السفاري الأمريكية",
    imagine: "🧠👁️ تخيل أسداً (Löwe) في سفاري والسياح يصورونه 📸🦁"
};

HELP_DATA["lesen1_exam43_q4"] = {
    text: "Text 4: In einigen asiatischen Ländern investieren wohlhabende Familien viel Geld, um exotische Tiere wie Löwen und Leoparden zu halten. Tierschutzorganisationen kritisieren diese Praxis scharf.",
    meaning: "في بعض الدول الآسيوية، تستثمر العائلات الثرية أموالاً كثيرة لاقتناء حيوانات غريبة مثل الأسود والفهود - منظمات حماية الحيوان تنتقد هذه الممارسة بشدة",
    keywords: ["exotische Tiere = حيوانات غريبة", "Familien = عائلات", "Asien = آسيا"],
    simplified: "عائلات غنية تربي حيوانات غريبة في آسيا",
    imagine: "🧠👁️ تخيل عائلة غنية (reiche Familie) وبجوارها أسد 🦁💰"
};

HELP_DATA["lesen1_exam43_q5"] = {
    text: "Text 5: Die internationale Tierschutzorganisation 'Save the Wildlife' hat eine Informationskampagne gestartet. In mehreren Städten finden Workshops statt. Neue Schutzgebiete sollen entstehen. Die Organisation fordert eine bessere Ausbildung von Rangern.",
    meaning: "منظمة حماية الحيوان الدولية 'أنقذوا الحياة البرية' بدأت حملة توعية - في عدة مدن تقام ورش عمل - مناطق محمية جديدة ستنشأ - المنظمة تطالب بتدريب أفضل لحراس المتنزهات",
    keywords: ["Tierschutz = حماية الحيوان", "Planung = تخطيط", "Bemühungen = جهود"],
    simplified: "خطط لحماية الحيوان - جهود متزايدة",
    imagine: "🧠👁️ تخيل حارس منتزه (Ranger) يحمي حيواناً 🦸‍♂️🦁"
};

// ============================================
// تصدير للاستخدام
// ============================================


console.log('✅ lesen1.js تم التحميل بنجاح - Exams 33-43');

// ============================================
// lesen1.js - جميع شروحات Lesen Teil 1 (مكتمل)
// ============================================


// ============================================
// Exam 44: Fisch
// ============================================

HELP_DATA["lesen1_exam44_q1"] = {
    text: "Text 1: Willkommen in der Wüste. Die Sonne brennt gnadenlos... Denn so hart und lebensfeindlich die Bedingungen in der Wüste auch sind – es gibt einige Überlebenskünstler... Von ihnen können Wissenschaftler jede Menge lernen. Bioniker erforschen die Wüstennatur.",
    meaning: "مرحباً بكم في الصحراء - الشمس تحرق بلا رحمة - بقسوة وظروف معادية للحياة كما هي في الصحراء - هناك بعض فناني البقاء على قيد الحياة - من يمكن للعلماء تعلم الكثير - باحثو المحاكاة الحيوية يدرسون طبيعة الصحراء",
    keywords: ["Wüste = صحراء", "Leben = حياة", "extrem = شديد"],
    simplified: "الموئل المتطرف - الحياة في الصحراء",
    imagine: "🧠👁️ تخيل صحراء (Wüste) شاسعة تحت أشعة الشمس الحارقة 🏜️☀️"
};

HELP_DATA["lesen1_exam44_q2"] = {
    text: "Text 2: Bioniker entwickeln technische Anlagen nach dem Vorbild der Natur – der Begriff Bionik setzt sich zusammen aus 'Biologie' und 'Technik'. Ihre Aufgabe: Pflanzen und Tiere genau beobachten, kleinste Details entdecken und deren Geheimnisse lüften.",
    meaning: "باحثو المحاكاة الحيوية يطورون أجهزة تقنية على غرار الطبيعة - مصطلح المحاكاة الحيوية يتكون من 'بيولوجيا' و 'تقنية' - مهمتهم: مراقبة النباتات والحيوانات بدقة، اكتشاف أصغر التفاصيل وكشف أسرارها",
    keywords: ["Bionik = محاكاة حيوية", "Technik = تقنية", "Natur = طبيعة"],
    simplified: "كيف تُستخدم التقنية في الطبيعة",
    imagine: "🧠👁️ تخيل مهندساً (Ingenieur) يدرس طائراً لصنع طائرة ✈️🐦"
};

HELP_DATA["lesen1_exam44_q3"] = {
    text: "Text 3: Der Sandfisch ist eigentlich keine Fisch, sondern eine kleine Echse. Er kann ausgezeichnet im Sand der Sahara schwimmen. Unter dem Mikroskop fanden Wissenschaftler winzige Grate auf seiner Haut, die verhindern, dass Sand hängen bleibt.",
    meaning: "سمكة الرمل ليست سمكة في الحقيقة، بل سحلية صغيرة - يمكنها السباحة بشكل ممتاز في رمال الصحراء الكبرى - تحت المجهر، وجد العلماء حوافاً صغيرة على جلدها تمنع التصاق الرمال",
    keywords: ["Fisch = سمكة", "Sand = رمل", "schwimmen = سباحة"],
    simplified: "سمكة في الكثبان الرملية",
    imagine: "🧠👁️ تخيل سمكة (Fisch) تسبح في الرمال 🐟🏜️"
};

HELP_DATA["lesen1_exam44_q4"] = {
    text: "Text 4: Der Nebeltrinker-Käfer lebt in der Namib-Wüste. Er macht einen Kopfstand und wartet auf Nebel. Die Flüssigkeit kondensiert an seinem Körper und läuft direkt in sein Maul. In Chile wurden Nebelnetze errichtet – bis zu 11.000 Liter frisches Wasser pro Nebeltag.",
    meaning: "خنفساء شرب الضباب تعيش في صحراء ناميب - تقوم بالوقوف على الرأس وتنتظر الضباب - السائل يتكثف على جسدها ويجري مباشرة إلى فمها - في تشيلي تم نصب شباك ضباب – حتى 11000 لتر من الماء العذب في يوم ضبابي",
    keywords: ["Nebel = ضباب", "Wasser = ماء", "Trinkwasser = ماء شرب"],
    simplified: "ماء شرب من الضباب – حلول من الطبيعة",
    imagine: "🧠👁️ تخيل شبكة (Netz) تجمع قطرات الماء من الضباب 🌫️💧"
};

HELP_DATA["lesen1_exam44_q5"] = {
    text: "Text 5: Die Rollerspinne lebt in der Namib-Wüste. Ihre Fluchtmethode: Beine anwinkeln und wie ein Rad die Sanddünen hinunterrollen. An der TU Berlin soll ein Mars-Auto entstehen, das im unwegsamen Gelände fahren kann.",
    meaning: "عنكبوت التدحرج يعيش في صحراء ناميب - طريقة هروبه: ثني الأرجل والتدحرج مثل عجلة أسفل الكثبان الرملية - في جامعة برلين التقنية، ستنشأ سيارة مريخ يمكنها القيادة في التضاريس الوعرة",
    keywords: ["Flucht = هروب", "rasant = سريع", "Spinne = عنكبوت"],
    simplified: "هروب سريع – دروس من الطبيعة للمركبات",
    imagine: "🧠👁️ تخيل عنكبوتاً (Spinne) يتدحرج مثل العجلة 🕷️🌀"
};

// ============================================
// Exam 45: Frauen im Arbeitsmarkt
// ============================================

HELP_DATA["lesen1_exam45_q1"] = {
    text: "Text 1: Ein hochwertiger Schulabschluss gilt als Schlüssel zum Berufsein- und -aufstieg. Mehr als die Hälfte aller Absolventen ist weiblich. Trotz besserer Qualifikation haben Frauen aber das Nachsehen.",
    meaning: "شهادة مدرسية عالية الجودة تعتبر مفتاح الدخول والارتقاء المهني - أكثر من نصف جميع الخريجين هم من الإناث - رغم المؤهلات الأفضل، إلا أن النساء هن الأقل حظاً",
    keywords: ["Frauen = نساء", "Arbeitsmarkt = سوق عمل", "Chancen = فرص"],
    simplified: "فرص أقل للنساء في سوق العمل",
    imagine: "🧠👁️ تخيل امرأة (Frau) تحمل شهادة ولكن باب العمل مغلق 🎓🚪😔"
};

HELP_DATA["lesen1_exam45_q2"] = {
    text: "Text 2: Psychiater der Universität Florida haben das schnelle Essen als mögliche Ursache für Fettleibigkeit entdeckt. Das Sprichwort 'Iss langsam, Kind!' ist tatsächlich eine Weisheit.",
    meaning: "أطباء نفسيون من جامعة فلوريدا اكتشفوا أن الأكل السريع هو سبب محتمل للسمنة - المقولة 'كل ببطء، يا طفل!' هي حكمة بالفعل",
    keywords: ["schnell essen = أكل سريع", "dick = سمين", "Studie = دراسة"],
    simplified: "الأكل السريع يسبب السمنة",
    imagine: "🧠👁️ تخيل شخصاً يأكل بسرعة (schnell essen) 🍔⚡"
};

HELP_DATA["lesen1_exam45_q3"] = {
    text: "Text 3: Unter 0 810 810 27 werden gratis Informationen über gesunde Ernährung angeboten. Die Verantwortlichen reagieren auf den Trend, dass die Zahl der dicken Kinder immer mehr zunimmt.",
    meaning: "على الرقم 0 810 810 27 تُقدم معلومات مجانية عن التغذية الصحية - المسؤولون يتفاعلون مع اتجاه تزايد عدد الأطفال البدناء",
    keywords: ["Ernährungstipps = نصائح غذائية", "Telefon = هاتف", "kostenlos = مجاني"],
    simplified: "نصائح غذائية مجانية عبر الهاتف",
    imagine: "🧠👁️ تخيل شخصاً يتصل (anrufen) للحصول على نصائح غذائية 📞🥗"
};

HELP_DATA["lesen1_exam45_q4"] = {
    text: "Text 4: Das Arbeitsamt Berlin hat 'Alternative zum Studium' neu aufgelegt. Die Broschüren zeigen neue Ausbildungsmöglichkeiten für junge Frauen und Männer nach der Schule außerhalb der Universitäten.",
    meaning: "مكتب العمل في برلين أعاد إصدار 'بديل للدراسة الجامعية' - الكتيبات تظهر إمكانيات تدريب جديدة للشابات والشبان بعد المدرسة خارج الجامعات",
    keywords: ["Ausbildungsmöglichkeiten = إمكانيات تدريب", "Schule = مدرسة", "Broschüre = كتيب"],
    simplified: "ماذا تفعل بعد المدرسة؟ خيارات تدريب جديدة",
    imagine: "🧠👁️ تخيل شاباً يقرأ كتيباً (Broschüre) عن التدريب المهني 📘👨‍🎓"
};

HELP_DATA["lesen1_exam45_q5"] = {
    text: "Text 5: Junge Frauen in der Schweiz sollen mehr Chancen für eine offene Berufswahl haben. Mit einer Motivationskampagne wollen die Fachleute zum Umdenken anregen. 'Von wem würden Sie lieber Ihr Auto reparieren lassen?'",
    meaning: "الشابات في سويسرا يجب أن يحصلن على فرص أكثر لاختيار مهنة مفتوح - بحملة تحفيزية، يريد الخبراء تحفيز إعادة التفكير - 'من تفضل أن يصلح سيارتك؟'",
    keywords: ["Frauen = نساء", "Männerberufe = مهن رجالية", "Initiative = مبادرة"],
    simplified: "مبادرة: تحفيز النساء للمهن الرجالية",
    imagine: "🧠👁️ تخيل امرأة (Frau) تعمل ميكانيكية سيارات 🔧👩‍🔧"
};

// ============================================
// Exam 46: Baby TV (Exam 49 في الملفات)
// ============================================

HELP_DATA["lesen1_exam46_q1"] = {
    text: "Text 1: Fernsehen ist der Sprachentwicklung bei Kleinkindern nicht förderlich. Teletubbys sind keine guten Sprachlehrer für Babys. Babys, die Wörter direkt lernten, reagierten bei der dritten Wiederholung. Die jungen TV-Seher waren meist ratlos.",
    meaning: "التلفاز ليس مفيداً لتطور اللغة عند الأطفال الصغار - التليتبيز ليسوا معلمي لغة جيدين للأطفال الرضع - الأطفال الذين تعلموا الكلمات مباشرة تفاعلوا في التكرار الثالث - صغار مشاهدو التلفاز كانوا غالباً في حيرة",
    keywords: ["Baby-TV = تلفاز الأطفال", "schlechte Noten = درجات سيئة", "Sprache = لغة"],
    simplified: "درجات سيئة لتلفاز الأطفال",
    imagine: "🧠👁️ تخيل طفلاً رضيعاً (Baby) يشاهد التلفاز 📺👶"
};

HELP_DATA["lesen1_exam46_q2"] = {
    text: "Text 2: Pharmakologen stellten fest, dass in gut 13 Prozent der Fälle das verschriebene Medikament nicht für Kinder zugelassen war. In Kinderkliniken sind etwa 50 Prozent der Medikamente nicht speziell für Kinder konzipiert.",
    meaning: "علماء الصيدلة وجدوا أنه في أكثر من 13 في المئة من الحالات، الدواء الموصوف لم يكن مرخصاً للأطفال - في عيادات الأطفال، حوالي 50 في المئة من الأدوية ليست مصممة خصيصاً للأطفال",
    keywords: ["Medikamente = أدوية", "Kinder = أطفال", "Zertifizierung = ترخيص"],
    simplified: "توجيهات جديدة لترخيص أدوية الأطفال",
    imagine: "🧠👁️ تخيل طبيباً (Arzt) يصف دواءً لطفل 💊👨‍⚕️👶"
};

HELP_DATA["lesen1_exam46_q3"] = {
    text: "Text 3: Alternative Heilverfahren können bei leichten Erkrankungen hilfreich sein. Akupunkteure, Aromatherapeuten, Homöopathen verstehen ihre Methoden als Ergänzung der herkömmlichen Medizin. In der Kinderheilkunde sind die Verfahren beliebt.",
    meaning: "العلاجات البديلة يمكن أن تكون مفيدة في الأمراض الخفيفة - أخصائيو الوخز بالإبر، العلاج بالروائح، المعالجة المثلية يفهمون طرقهم كمكمل للطب التقليدي - هذه الإجراءات محبوبة في طب الأطفال",
    keywords: ["Heilverfahren = علاجات", "alternativ = بديل", "Kinderheilkunde = طب أطفال"],
    simplified: "العلاجات البديلة: كيف فعالة حقاً؟",
    imagine: "🧠👁️ تخيل طفلاً يتلقى علاجاً بديلاً (alternative Heilung) 🌿👶"
};

HELP_DATA["lesen1_exam46_q4"] = {
    text: "Text 4: Die Schwestern Henrike Rodemeier und Gesine Wischmann betreiben Deutschlands einzige Ginseng-Farm. Die eine ist Agraringenieurin, die andere entwickelte eine Ginseng-Kosmetiklinie. Den Anfang machte ihr Vater vor 24 Jahren.",
    meaning: "الأختان هنريكه رودماير وغازين فيشمان تديران مزرعة الجينسنغ الوحيدة في ألمانيا - إحداهما مهندسة زراعية، والأخرى طورت خط مستحضرات تجميل من الجينسنغ - البداية كانت من قبل والدهما قبل 24 عاماً",
    keywords: ["Ginseng = جينسنغ", "Kosmetik = تجميل", "Geschwister = أخوات"],
    simplified: "مستحضرات تجميل طبيعية من صنع أختين",
    imagine: "🧠👁️ تخيل امرأتين (Frauen) تعملان في مزرعة جينسنغ 🌿👩‍🌾"
};

HELP_DATA["lesen1_exam46_q5"] = {
    text: "Text 5: 10 bis 20 Prozent aller Schulkinder und Jugendlichen sind übergewichtig, Tendenz steigend. Übergewicht kann zu Folgeerkrankungen führen. Das D.I.E.T. rät Eltern, ihren Kindern von klein auf eine gesunde Kost zu bieten.",
    meaning: "10 إلى 20 في المئة من جميع أطفال المدارس والمراهقين يعانون من زيادة الوزن، والاتجاه في ازدياد - السمنة يمكن أن تؤدي إلى أمراض لاحقة - معهد التغذية ينصح الآباء بتقديم طعام صحي لأطفالهم منذ الصغر",
    keywords: ["Übergewicht = سمنة", "Kinder = أطفال", "Risikofaktor = عامل خطر"],
    simplified: "الأطفال والمراهقون: السمنة كعامل خطر",
    imagine: "🧠👁️ تخيل طفلاً (Kind) يأكل طعاماً صحياً 🥗👶"
};

// ============================================
// Exam 47: Bäder (Exam 50 في الملفات)
// ============================================

HELP_DATA["lesen1_exam47_q1"] = {
    text: "Text 1: Im Herzen Deutschlands liegen wunderbare Landschaften, mit einem milden Klima – keine typischen Touristenziele. Von Gießen ausgehend kann man im hessischen Waldeck-Frankenberg viele Geheimtipps entdecken. Der Edersee gehört zu den 'blauen Augen' des Kreises.",
    meaning: "في قلب ألمانيا توجد مناظر طبيعية رائعة، بمناخ معتدل - ليست وجهات سياحية نموذجية - انطلاقاً من غيسن يمكن اكتشاف العديد من النصائح السرية في فالدك-فرانكنبرغ في هيسن - بحيرة إيدر هي واحدة من 'العيون الزرقاء' للمنطقة",
    keywords: ["Bäder = حمامات", "Seen = بحيرات", "Natur = طبيعة"],
    simplified: "حمامات وبحيرات وطبيعة – جنة هيسن السحرية",
    imagine: "🧠👁️ تخيل بحيرة (See) جميلة في هيسن 🏞️🇩🇪"
};

HELP_DATA["lesen1_exam47_q2"] = {
    text: "Text 2: Melanie Schille verstärkt die Strandwache an der Nordseeküste. Mit 'Magnus', einem Pferd, patrouilliert sie am Strand. 'Wir sorgen für mehr Sicherheit am Strand', suchen im Watt nach Vermissten, klären über Gefahren auf, verhindern Diebstähle.",
    meaning: "ميلاني شيل تعزز حراسة الشاطئ على ساحل بحر الشمال - مع 'ماغنوس'، وهو حصان، تقوم بدوريات على الشاطئ - 'نحن نقدم المزيد من الأمان على الشاطئ'، نبحث عن المفقودين في منطقة المد والجزر، نوضح المخاطر، نمنع السرقات",
    keywords: ["Strand = شاطئ", "Sicherheit = أمان", "Urlauber = سياح"],
    simplified: "في الخدمة على الشاطئ - المزيد من الأمان للسياح",
    imagine: "🧠👁️ تخيل حارس شاطئ (Strandwache) على حصان 🐎🏖️"
};

HELP_DATA["lesen1_exam47_q3"] = {
    text: "Text 3: Ein neuer Urlaubstrend: In Schweden kann man selbst ein Floß bauen. Das dauert drei bis sechs Stunden, anschließend macht man darauf Urlaub. 'Sich auf dem Fluss treiben lassen und in der Wildnis leben – dieses Gefühl ist super!'",
    meaning: "موجة سياحية جديدة: في السويد يمكن بناء طوف بنفسك - يستغرق ذلك ثلاث إلى ست ساعات، ثم تقوم بقضاء عطلة عليه - 'الانجراف على النهر والعيش في البرية – هذا الشعور رائع!'",
    keywords: ["Floß = طوف", "Natur = طبيعة", "Urlaub = عطلة"],
    simplified: "الحرية والطبيعة – بعد ستة أسابيع من العمل الشاق",
    imagine: "🧠👁️ تخيل شخصاً يبني طوافة (Floß) بنفسه 🪵🛶"
};

HELP_DATA["lesen1_exam47_q4"] = {
    text: "Text 4: Sebastian Keller (18) arbeitet in einem Altenwohnheim, Rebecca (12) und Christiane (13) putzen den Eingang des Hamburger 'Michels', Friderike (17) füttert Tiere auf einem Bio-Bauernhof. Sie stehen für 100.000 Jugendliche, die beim 'Sozialen Tag' mitgemacht haben.",
    meaning: "سباستيان كيلر (18) يعمل في دار للمسنين - ريبيكا (12) وكريستياني (13) تنظفان مدخل كنيسة 'ميشيل' في هامبورغ - فريدريكه (17) تطعم الحيوانات في مزرعة عضوية - يمثلون 100,000 شاب شاركوا في 'اليوم الاجتماعي'",
    keywords: ["Jugendliche = شباب", "arbeiten = يعملون", "Sozialer Tag = اليوم الاجتماعي"],
    simplified: "شباب يعملون من أجل شباب آخرين",
    imagine: "🧠👁️ تخيل شباباً (Jugendliche) يتطوعون في عمل خيري 👥❤️"
};

HELP_DATA["lesen1_exam47_q5"] = {
    text: "Text 5: Thomas Meurer und Wiebke Fuchs freuten sich auf ihre Flusskreuzfahrt mit der 'MS Eurostar' von Potsdam nach Prag. Doch aus der Kreuzfahrt wurde eine Bustour. 'Der Fluss hatte einfach zu wenig Wasser, da konnten wir nicht weiterfahren!'",
    meaning: "توماس مويرر وويبكه فوكس كانا متحمسين لرحلتهما النهرية على متن 'إم إس يوروستار' من بوتسدام إلى براغ - لكن الرحلة النهرية تحولت إلى جولة بالحافلة - 'النهر كان لديه القليل من الماء، لم نتمكن من مواصلة الرحلة!'",
    keywords: ["Fluss = نهر", "Kreuzfahrt = رحلة بحرية", "Niedrigwasser = مياه منخفضة"],
    simplified: "بسبب انخفاض المياه – من النهر إلى الطريق",
    imagine: "🧠👁️ تخيل سفينة (Schiff) عالقة بسبب انخفاض الماء 🚢💧⚠️"
};

// ============================================
// تصدير للاستخدام
// ============================================


console.log('✅ lesen1.js تم التحميل بنجاح - Exams 44-47 (كاملاً)');



// ============================================
// lesen3.js - جميع شروحات Lesen Teil 3
// ============================================
// ============================================
// lesen2.js - جميع شروحات Lesen Teil 2
// ============================================


// ============================================
// Exam 1 (exam1.json) - Krista
// ============================================

HELP_DATA["lesen2_exam1_q1"] = {
    text: "sind in der Milchproduktion beliebter als andere Rinderrassen.",
    meaning: "هي الأكثر شعبية في إنتاج الحليب مقارنة بسلالات الأبقار الأخرى.",
    keywords: ["Milchproduktion = إنتاج الحليب", "beliebter = أكثر شعبية"],
    simplified: "أبقار هولشتاين هي الأكثر استخداماً في إنتاج الحليب",
    imagine: "🐄🥛 بقرة تنتج الحليب بغزارة والأبقار الأخرى تنظر إليها"
};

HELP_DATA["lesen2_exam1_q2"] = {
    text: "hat bereits einige Preise gewonnen.",
    meaning: "فازت بالفعل بالعديد من الجوائز.",
    keywords: ["Preise = جوائز", "gewonnen = فازت"],
    simplified: "كريستا فازت بجوائز كثيرة",
    imagine: "🏆🐮 بقرة تقف على منصة التتويج وتحمل كأساً"
};

HELP_DATA["lesen2_exam1_q3"] = {
    text: "wurde Krista operiert.",
    meaning: "خضعت كريستا لعملية جراحية.",
    keywords: ["operiert = عملية جراحية", "wurde = خضعت"],
    simplified: "كريستا خضعت لعملية جراحية",
    imagine: "🏥🐄 أطباء بيطريون يجريون عملية لبقرة"
};

HELP_DATA["lesen2_exam1_q4"] = {
    text: "sind eine Folge des Verbraucherverhaltens.",
    meaning: "هي نتيجة لسلوك المستهلك.",
    keywords: ["Verbraucherverhaltens = سلوك المستهلك", "Folge = نتيجة"],
    simplified: "سلوك المستهلك سبب مشاكل مزارع الحليب",
    imagine: "🛒💰 متسوق يختار دائماً أرخص منتج حليب"
};

HELP_DATA["lesen2_exam1_q5"] = {
    text: "begeistert Kinobetreiber bislang nicht.",
    meaning: "لم يتحمس لها مشغلو دور السينما حتى الآن.",
    keywords: ["Kinobetreiber = مشغلو سينما", "begeistert = متحمس"],
    simplified: "أصحاب دور السينما غير متحمسين للفيلم",
    imagine: "🎬😐 رجل يقول: فيلم عن بقرة؟ لا شكراً"
};

// ============================================
// Exam 2 (exam2.json) - Krista (معدل)
// ============================================

HELP_DATA["lesen2_exam2_q1"] = {
    text: "dominieren als Rinderrasse die Milchviehwirtschaft",
    meaning: "تهيمن كسلالة أبقار على اقتصاد أبقار الحليب",
    keywords: ["dominieren = تهيمن", "Milchviehwirtschaft = اقتصاد أبقار الحليب"],
    simplified: "أبقار هولشتاين هي المسيطرة في إنتاج الحليب",
    imagine: "🐄👑 بقرة ترتدي تاجاً والمزارعون ينحنون لها"
};

HELP_DATA["lesen2_exam2_q2"] = {
    text: "hat bereits einige Preise gewonnen.",
    meaning: "فازت بالفعل بالعديد من الجوائز.",
    keywords: ["Preise = جوائز", "gewonnen = فازت"],
    simplified: "كريستا فازت بجوائز كثيرة",
    imagine: "🏆🐮 بقرة تضع كأساً فوق رأسها"
};

HELP_DATA["lesen2_exam2_q3"] = {
    text: "wurde Krista ärztlich behandelt.",
    meaning: "خضعت كريستا لعلاج طبي.",
    keywords: ["ärztlich = طبياً", "behandelt = عولجت"],
    simplified: "كريستا تلقت علاجاً طبياً",
    imagine: "🩺🐄 طبيب بيطري يسمع نبض قلب بقرة"
};

HELP_DATA["lesen2_exam2_q4"] = {
    text: "sind eine Folge des Verbraucherverhaltens.",
    meaning: "هي نتيجة لسلوك المستهلك.",
    keywords: ["Verbraucherverhaltens = سلوك المستهلك", "Folge = نتيجة"],
    simplified: "سلوك المستهلك سبب مشاكل مزارع الحليب",
    imagine: "🛒💰 متسوق يمد يده إلى حليب رخيص"
};

HELP_DATA["lesen2_exam2_q5"] = {
    text: "begeistert Kinobetreiber bislang nicht.",
    meaning: "لم يتحمس لها مشغلو دور السينما حتى الآن.",
    keywords: ["Kinobetreiber = مشغلو سينما", "begeistert = متحمس"],
    simplified: "أصحاب دور السينما غير متحمسين",
    imagine: "🎬😕 مدير سينما يتثاءب"

};

// ============================================
// Exam 3 (exam3.json) - Der Ein-Personen-Karneval
// ============================================

HELP_DATA["lesen2_exam3_q1"] = {
    text: "führt in Unna einen kleinen Karnevalsumzug durch.",
    meaning: "يقوم في أونا بموكب كرنفال صغير.",
    keywords: ["Karnevalsumzug = موكب كرنفال", "Unna = أونا"],
    simplified: "هيلموت شيرر يقود موكب كرنفال صغير في مدينة أونا",
    imagine: "🎭👨‍🦳 رجل يجر عربة صغيرة في شارع خالٍ"
};

HELP_DATA["lesen2_exam3_q2"] = {
    text: "stellt er sozialkritische Themen auf witzige Art und Weise dar.",
    meaning: "يقدم مواضيع نقد اجتماعي بطريقة فكاهية.",
    keywords: ["sozialkritische Themen = مواضيع نقد اجتماعي", "witzige Art = طريقة فكاهية"],
    simplified: "يعرض هيرلموت قضايا اجتماعية ناقدة بشكل كوميدي",
    imagine: "🎪📢 رجل يضحك الجمهور ويوجه رسالة ناقدة"
};

HELP_DATA["lesen2_exam3_q3"] = {
    text: "hatte zunächst wenig Verständnis für Helmut Scherer.",
    meaning: "لم يكن لديها فهم كبير لهيلموت شيرر في البداية.",
    keywords: ["wenig Verständnis = فهم قليل", "zunächst = في البداية"],
    simplified: "سكان أونا لم يفهموا هيلموت شيرر في البداية",
    imagine: "🤷‍♀️🤷‍♂️ سكان ينظرون إلى رجل غريب ويهزون رؤوسهم"
};

HELP_DATA["lesen2_exam3_q4"] = {
    text: "ist heute eine gute Reklame für die Stadt Unna.",
    meaning: "هو اليوم إعلان جيد لمدينة أونا.",
    keywords: ["Reklame = إعلان", "Stadt Unna = مدينة أونا"],
    simplified: "أصغر موكب كرنفال أصبح دعاية جيدة لأونا",
    imagine: "📢🎉 مدينة تفتخر برجل كرنفال وحيد"
};

HELP_DATA["lesen2_exam3_q5"] = {
    text: "hat an Karnevalsumzügen in mehreren Städten teilgenommen.",
    meaning: "شارك في مواكب كرنفال في عدة مدن.",
    keywords: ["teilgenommen = شارك", "mehreren Städten = عدة مدن"],
    simplified: "هيلموت شارك في كرنفالات مدن متعددة",
    imagine: "🎭🚂 رجل يسافر بعربته إلى مدن مختلفة"
};

// ============================================
// Exam 4 (exam4.json) - Der Ein-Personen-Karneval (معدل)
// ============================================

HELP_DATA["lesen2_exam4_q1"] = {
    text: "veranstaltet an Karneval allein einen Umzug.",
    meaning: "ينظم بمفرده موكباً في الكرنفال.",
    keywords: ["allein = بمفرده", "Umzug = موكب"],
    simplified: "هيلموت شيرر ينظم موكب كرنفال وحيداً",
    imagine: "🎭🚶‍♂️ رجل يمشي وحده في الشارع بملابس مهرج"
};

HELP_DATA["lesen2_exam4_q2"] = {
    text: "stellt er sozialkritische Themen auf witzige Art und Weise dar.",
    meaning: "يقدم مواضيع نقد اجتماعي بطريقة فكاهية.",
    keywords: ["sozialkritische Themen = مواضيع نقد اجتماعي", "witzige Art = طريقة فكاهية"],
    simplified: "يعرض قضايا اجتماعية ناقدة بشكل كوميدي",
    imagine: "🎪📢 رجل يضحك الجمهور ويوجه رسالة ناقدة"
};

HELP_DATA["lesen2_exam4_q3"] = {
    text: "hatte zunächst wenig Verständnis für Helmut Scherer.",
    meaning: "لم يكن لديها فهم كبير لهيلموت شيرر في البداية.",
    keywords: ["wenig Verständnis = فهم قليل", "zunächst = في البداية"],
    simplified: "سكان أونا لم يفهموا هيلموت في البداية",
    imagine: "🤷‍♀️🤷‍♂️ سكان ينظرون إلى رجل غريب ويهزون رؤوسهم"
};

HELP_DATA["lesen2_exam4_q4"] = {
    text: "ist heute eine gute Reklame für die Stadt Unna.",
    meaning: "هو اليوم إعلان جيد لمدينة أونا.",
    keywords: ["Reklame = إعلان", "Stadt Unna = مدينة أونا"],
    simplified: "أصغر موكب كرنفال أصبح دعاية جيدة لأونا",
    imagine: "📢🎉 مدينة تفتخر برجل كرنفال وحيد"
};

HELP_DATA["lesen2_exam4_q5"] = {
    text: "hat an Karnevalsumzügen in mehreren Städten teilgenommen.",
    meaning: "شارك في مواكب كرنفال في عدة مدن.",
    keywords: ["teilgenommen = شارك", "mehreren Städten = عدة مدن"],
    simplified: "هيلموت شارك في كرنفالات مدن متعددة",
    imagine: "🎭🚂 رجل يسافر بعربته إلى مدن مختلفة"
};

// ============================================
// Exam 5 (exam5.json) - ein leben für den Kaffee
// ============================================

HELP_DATA["lesen2_exam5_q1"] = {
    text: "gibt es nur noch wenige traditionelle Kaffeeröstereien.",
    meaning: "لا يوجد سوى عدد قليل من محامص القهوة التقليدية.",
    keywords: ["traditionelle Kaffeeröstereien = محامص قهوة تقليدية", "wenige = قليل"],
    simplified: "عدد محامص القهوة التقليدية قلّ جداً في ألمانيا",
    imagine: "🏭☕ مصنع قهوة قديم وحيد في شارع كانت فيه مصانع كثيرة"
};

HELP_DATA["lesen2_exam5_q2"] = {
    text: "steht eher die Qualität des Kaffees als der Preis im Vordergrund.",
    meaning: "جودة القهوة أهم من السعر.",
    keywords: ["Qualität = جودة", "Preis = سعر", "Vordergrund = الأولوية"],
    simplified: "محمصة مونشهاوزن تفضل الجودة على السعر",
    imagine: "☕💎 شخص يختار قهوة أغلى ثمناً لكنها أجود"
};

HELP_DATA["lesen2_exam5_q3"] = {
    text: "müssen nach dem Rösten handverlesen werden, um eine gleichbleibend hohe Qualität zu gewährleisten.",
    meaning: "يجب فرزها يدوياً بعد التحميص لضمان جودة عالية ثابتة.",
    keywords: ["handverlesen = فرز يدوي", "gleichbleibend = ثابت", "Qualität = جودة"],
    simplified: "حبوب القهوة تُفرز باليد بعد التحميص للحفاظ على الجودة",
    imagine: "🫘✋ شخص يفرز حبوب القهوة بيديه واحدة تلو الأخرى"
};

HELP_DATA["lesen2_exam5_q4"] = {
    text: "zusätzlich online vermarktet.",
    meaning: "يتم تسويقها أيضاً عبر الإنترنت.",
    keywords: ["online = عبر الإنترنت", "vermarktet = يتم تسويقها"],
    simplified: "حبوب القهوة تُباع أيضاً على الإنترنت",
    imagine: "💻☕ شاشة كمبيوتر تعرض صور قهوة وسلة شراء"
};

HELP_DATA["lesen2_exam5_q5"] = {
    text: "die Kaffeerösterei in ein Museum umwandeln.",
    meaning: "تحويل محمصة القهوة إلى متحف.",
    keywords: ["Museum = متحف", "umwandeln = تحويل"],
    simplified: "مالكات المحمصة يخططن لتحويلها إلى متحف",
    imagine: "🏛️☕ مبنى قديم مكتوب عليه متحف القهوة وزبائن يشربون قهوة"
};

// ============================================
// Exam 6 (exam6.json) - ein leben für den Kaffee (معدل 1)
// ============================================

HELP_DATA["lesen2_exam6_q1"] = {
    text: "nur noch eine geringe Zahl von Kaffeeröstereien.",
    meaning: "فقط عدد قليل من محامص القهوة.",
    keywords: ["geringe Zahl = عدد قليل", "Kaffeeröstereien = محامص قهوة"],
    simplified: "عدد محامص القهوة التقليدية أصبح قليلاً جداً",
    imagine: "🏭☕ محمصة قهوة وحيدة في مدينة كبيرة"
};

HELP_DATA["lesen2_exam6_q2"] = {
    text: "steht eher die Qualität des Kaffees als der Preis im Vordergrund.",
    meaning: "جودة القهوة أهم من السعر.",
    keywords: ["Qualität = جودة", "Preis = سعر", "Vordergrund = الأولوية"],
    simplified: "محمصة مونشهاوزن تفضل الجودة على السعر",
    imagine: "☕💎 شخص يختار قهوة أغلى ثمناً لكنها أجود"
};

HELP_DATA["lesen2_exam6_q3"] = {
    text: "müssen nach dem Rösten handverlesen werden, um eine gleichbleibend hohe Qualität zu gewährleisten.",
    meaning: "يجب فرزها يدوياً بعد التحميص لضمان جودة عالية ثابتة.",
    keywords: ["handverlesen = فرز يدوي", "gleichbleibend = ثابت", "Qualität = جودة"],
    simplified: "حبوب القهوة تُفرز باليد بعد التحميص للحفاظ على الجودة",
    imagine: "🫘✋ شخص يفرز حبوب القهوة بيديه واحدة تلو الأخرى"
};

HELP_DATA["lesen2_exam6_q4"] = {
    text: "in unterschiedlichen Geschmacksrichtungen verkauft",
    meaning: "تُباع بنكهات مختلفة",
    keywords: ["Geschmacksrichtungen = نكهات", "verkauft = تباع"],
    simplified: "حبوب القهوة تُباع بنكهات متنوعة",
    imagine: "☕🍫☕🍯 أكواب قهوة بنكهات مختلفة"
};

HELP_DATA["lesen2_exam6_q5"] = {
    text: "die Kaffeerösterei in ein Museum umwandeln.",
    meaning: "تحويل محمصة القهوة إلى متحف.",
    keywords: ["Museum = متحف", "umwandeln = تحويل"],
    simplified: "مالكات المحمصة يخططن لتحويلها إلى متحف",
    imagine: "🏛️☕ مبنى قديم مكتوب عليه متحف القهوة وزبائن يشربون قهوة"
};

// ============================================
// Exam 7 (exam7.json) - ein leben für den Kaffee (معدل 2)
// ============================================

HELP_DATA["lesen2_exam7_q1"] = {
    text: "gibt es nur noch wenige traditionelle Kaffeeröstereien.",
    meaning: "لا يوجد سوى عدد قليل من محامص القهوة التقليدية.",
    keywords: ["traditionelle Kaffeeröstereien = محامص قهوة تقليدية", "wenige = قليل"],
    simplified: "عدد محامص القهوة التقليدية قلّ جداً في ألمانيا",
    imagine: "🏭☕ مصنع قهوة قديم وحيد في شارع كانت فيه مصانع كثيرة"
};

HELP_DATA["lesen2_exam7_q2"] = {
    text: "stehen die Güte und Beschaffenheit des Kaffees im Vordergrund",
    meaning: "جودة وطبيعة القهوة هي الأولوية",
    keywords: ["Güte = جودة", "Beschaffenheit = طبيعة", "Vordergrund = الأولوية"],
    simplified: "الجودة والطبيعة أهم شيء في محمصة مونشهاوزن",
    imagine: "☕🔍 شخص يفحص حبوب القهوة بعدسة مكبرة"
};

HELP_DATA["lesen2_exam7_q3"] = {
    text: "müssen nach dem Rösten handverlesen werden, um eine gleichbleibend hohe Qualität zu gewährleisten.",
    meaning: "يجب فرزها يدوياً بعد التحميص لضمان جودة عالية ثابتة.",
    keywords: ["handverlesen = فرز يدوي", "gleichbleibend = ثابت", "Qualität = جودة"],
    simplified: "حبوب القهوة تُفرز باليد بعد التحميص للحفاظ على الجودة",
    imagine: "🫘✋ شخص يفرز حبوب القهوة بيديه واحدة تلو الأخرى"
};

HELP_DATA["lesen2_exam7_q4"] = {
    text: "zusätzlich online vermarktet.",
    meaning: "يتم تسويقها أيضاً عبر الإنترنت.",
    keywords: ["online = عبر الإنترنت", "vermarktet = يتم تسويقها"],
    simplified: "حبوب القهوة تُباع أيضاً على الإنترنت",
    imagine: "💻☕ شاشة كمبيوتر تعرض صور قهوة وسلة شراء"
};

HELP_DATA["lesen2_exam7_q5"] = {
    text: "die Kaffeerösterei zu Bildungszwecken zur Verfügung stellen",
    meaning: "تقديم محمصة القهوة للأغراض التعليمية",
    keywords: ["Bildungszwecken = أغراض تعليمية", "zur Verfügung stellen = تقديم"],
    simplified: "تحويل المحمصة إلى مكان تعليمي عن القهوة",
    imagine: "📚☕ طلاب يجلسون في محمصة قديمة ويتعلمون عن القهوة"
};

// ============================================
// Exam 8 (exam8.json) - Kreditkarte
// ============================================

HELP_DATA["lesen2_exam8_q1"] = {
    text: "gibt es für Jugendliche schon bei zahlreichen Geldinstituten.",
    meaning: "توجد للشباب بالفعل في العديد من المؤسسات المالية.",
    keywords: ["Jugendliche = شباب", "Geldinstituten = مؤسسات مالية"],
    simplified: "بطاقة الدفع المسبق موجودة للشباب في عدة بنوك",
    imagine: "💳🧑 بطاقة بلاستيكية بجانب مراهق يبتسم"
};

HELP_DATA["lesen2_exam8_q2"] = {
    text: "weil die Ausgaben durch das Guthaben begrenzt sind",
    meaning: "لأن المصاريف محدودة بالرصيد",
    keywords: ["Ausgaben = مصاريف", "Guthaben = رصيد", "begrenzt = محدودة"],
    simplified: "التحكم في التكاليف لأن الرصيد محدد",
    imagine: "💰🔒 محفظة مقفلة بقفل ويمكن فتحها بقدر محدود"
};

HELP_DATA["lesen2_exam8_q3"] = {
    text: "Jugendliche ohne festes Einkommen",
    meaning: "الشباب بدون دخل ثابت",
    keywords: ["Jugendliche = شباب", "kein festes Einkommen = لا دخل ثابت"],
    simplified: "بطاقة الدفع المسبق مناسبة للشباب بلا دخل ثابت",
    imagine: "💳🧑 مراهق يمسك بطاقة ومحفظته فارغة"
};

HELP_DATA["lesen2_exam8_q4"] = {
    text: "kosten ähnlich viel wie klassische Kreditkarten",
    meaning: "تكلف تقريباً مثل بطاقات الائتمان التقليدية",
    keywords: ["kosten = تكلف", "ähnlich = تقريباً", "klassische Kreditkarten = بطاقات ائتمان تقليدية"],
    simplified: "أسعار بطاقات الدفع المسبق مثل بطاقات الائتمان العادية",
    imagine: "💳💰 بطاقتان جنباً إلى جنب وسعرهما متساوٍ"
};

HELP_DATA["lesen2_exam8_q5"] = {
    text: "Erwachsene ab 21 Jahren eine höhere Jahresgebühr als Jugendliche",
    meaning: "البالغون من 21 سنة فما فوق رسوم سنوية أعلى من الشباب",
    keywords: ["Erwachsene = بالغون", "Jahresgebühr = رسوم سنوية", "höhere = أعلى"],
    simplified: "الكبار يدفعون رسوم سنوية أكثر من الشباب",
    imagine: "👨💳👦 رجل يدفع نقوداً أكثر من مراهق"
};

// ============================================
// Exam 9 (exam9.json) - Gedächtnis
// ============================================

HELP_DATA["lesen2_exam9_q1"] = {
    text: "junge und alte Menschen gleichermaßen",
    meaning: "الشباب وكبار السن على حد سواء",
    keywords: ["junge = شباب", "alte Menschen = كبار السن", "gleichermaßen = على حد سواء"],
    simplified: "ندوات ميلاني هوفمان يحضرها الشباب والكبار معاً",
    imagine: "👦🧓👧🧓 مجموعة من الشباب والكبار يجلسون في قاعة"
};

HELP_DATA["lesen2_exam9_q2"] = {
    text: "sich von den vielen Informationen überfordert fühlen",
    meaning: "يشعرون بالإرهاق من كثرة المعلومات",
    keywords: ["überfordert = مرهق", "vielen Informationen = معلومات كثيرة"],
    simplified: "المشاركون يشعرون بالإرهاق من كثرة المعلومات",
    imagine: "📚😫 شخص واقف أمام جبل من الكتب ولا يعرف من أين يبدأ"
};

HELP_DATA["lesen2_exam9_q3"] = {
    text: "vergisst die meisten Informationen innerhalb kürzester Zeit",
    meaning: "ينسى معظم المعلومات في أقصر وقت",
    keywords: ["vergisst = ينسى", "kürzester Zeit = أقصر وقت"],
    simplified: "الإنسان ينسى معظم المعلومات بسرعة",
    imagine: "🧠💨 شخص يقرأ شيئاً ثم يخرج من أذنه الأخرى"
};

HELP_DATA["lesen2_exam9_q4"] = {
    text: "emotional aufgeladene Situationen merken",
    meaning: "تذكر المواقف المشحونة عاطفياً",
    keywords: ["emotional = عاطفي", "aufgeladene Situationen = مواقف مشحونة"],
    simplified: "المواقف العاطفية تبقى في الذاكرة أكثر",
    imagine: "😢❤️ شخص يتذكر لحظة بكاء أو فرح بقوة"
};

HELP_DATA["lesen2_exam9_q5"] = {
    text: "verbindet Informationen mit Bildern",
    meaning: "تربط المعلومات بالصور",
    keywords: ["verbindet = تربط", "Informationen = معلومات", "Bildern = صور"],
    simplified: "سوما هارتمان تربط المعلومات بصور لتتذكرها",
    imagine: "🧠🖼️ شخص يربط رقم 2 بصورة بجعة"
};

// ============================================
// Exam 10 (exam10.json) - Gedächtnis (معدل)
// ============================================

HELP_DATA["lesen2_exam10_q1"] = {
    text: "sowohl aus jungen als auch alten Menschen",
    meaning: "من الشباب وكبار السن على حد سواء",
    keywords: ["jungen = شباب", "alten Menschen = كبار السن", "sowohl...als auch = كلاهما"],
    simplified: "ندوات سوزانا وينكلر يحضرها الشباب والكبار معاً",
    imagine: "👦🧓👧🧓 مجموعة من الشباب والكبار يجلسون في قاعة"
};

HELP_DATA["lesen2_exam10_q2"] = {
    text: "sich von den vielen Informationen überfordert fühlen",
    meaning: "يشعرون بالإرهاق من كثرة المعلومات",
    keywords: ["überfordert = مرهق", "vielen Informationen = معلومات كثيرة"],
    simplified: "المشاركون يشعرون بالإرهاق من كثرة المعلومات",
    imagine: "📚😫 شخص واقف أمام جبل من الكتب ولا يعرف من أين يبدأ"
};

HELP_DATA["lesen2_exam10_q3"] = {
    text: "vergisst die meisten Informationen innerhalb kürzester Zeit",
    meaning: "ينسى معظم المعلومات في أقصر وقت",
    keywords: ["vergisst = ينسى", "kürzester Zeit = أقصر وقت"],
    simplified: "الإنسان ينسى معظم المعلومات بسرعة",
    imagine: "🧠💨 شخص يقرأ شيئاً ثم يخرج من أذنه الأخرى"
};

HELP_DATA["lesen2_exam10_q4"] = {
    text: "intensive Gefühle merken",
    meaning: "تذكر المشاعر القوية",
    keywords: ["intensive Gefühle = مشاعر قوية", "merken = تذكر"],
    simplified: "المشاعر القوية تبقى في الذاكرة أكثر",
    imagine: "😢❤️ شخص يتذكر لحظة بكاء أو فرح بقوة"
};

HELP_DATA["lesen2_exam10_q5"] = {
    text: "verbindet Informationen mit Bildern",
    meaning: "تربط المعلومات بالصور",
    keywords: ["verbindet = تربط", "Informationen = معلومات", "Bildern = صور"],
    simplified: "جيني هيلفر تربط المعلومات بصور لتتذكرها",
    imagine: "🧠🖼️ شخص يربط رقم 2 بصورة بجعة"
};

// ============================================
// Exam 11 (exam11.json) - Kaufentscheidungen
// ============================================

HELP_DATA["lesen2_exam11_q1"] = {
    text: "welche Einflüsse bestimmte Faktoren auf das Kaufverhalten haben",
    meaning: "ما هي تأثيرات عوامل معينة على سلوك الشراء",
    keywords: ["Einflüsse = تأثيرات", "Kaufverhalten = سلوك الشراء"],
    simplified: "دراسات عن تأثير العوامل على قرارات الشراء",
    imagine: "🧠🛒 شخص أمام رف متجر ويحلل خياراته بجدية"
};

HELP_DATA["lesen2_exam11_q2"] = {
    text: "das Empfinden von Kälte zum Kauf romantischer Filme animiert",
    meaning: "الشعور بالبرد يحفز على شراء أفلام رومانسية",
    keywords: ["Empfinden von Kälte = الشعور بالبرد", "romantischer Filme = أفلام رومانسية"],
    simplified: "البرد يجعلك ترغب في مشاهدة أفلام رومانسية",
    imagine: "❄️📀 رجل يرتجف من البرد ويمد يده إلى فيلم رومانسي"
};

HELP_DATA["lesen2_exam11_q3"] = {
    text: "ob die Reihenfolge von Produktinformationen das Kaufverhalten beeinflusst",
    meaning: "هل ترتيب معلومات المنتج يؤثر على سلوك الشراء",
    keywords: ["Reihenfolge = ترتيب", "Produktinformationen = معلومات المنتج", "Kaufverhalten = سلوك الشراء"],
    simplified: "ترتيب المعلومات يؤثر على قرار الشراء",
    imagine: "📝🔢 شخص يقرأ عرضاً: 10 قطع بسعر 5 يورو أو 5 يورو لـ 10 قطع"
};

HELP_DATA["lesen2_exam11_q4"] = {
    text: "nutzt unter Zeitdruck vor allem die erste Information einer Botschaft",
    meaning: "يستخدم تحت ضغط الوقت أول معلومة في الرسالة",
    keywords: ["Zeitdruck = ضغط وقت", "erste Information = أول معلومة", "Botschaft = رسالة"],
    simplified: "تحت الضغط، الدماغ يصدق أول معلومة يسمعها",
    imagine: "⏰🧠 شخص ينظر سريعاً إلى رقم أول ويقرر الشراء"
};

HELP_DATA["lesen2_exam11_q5"] = {
    text: "Mengenangabe vor dem Preis genannt wird",
    meaning: "ذكر الكمية قبل السعر",
    keywords: ["Mengenangabe = ذكر الكمية", "Preis = سعر", "genannt = مذكور"],
    simplified: "ذكر الكمية قبل السعر يجعل العروض أكثر إغراءً",
    imagine: "🏷️🔢 كيس كبير كُتب عليه: 10 كيلوغرام - 20 يورو"
};

// ============================================
// Exam 12 (exam12.json) - Kellnern - Nebenjob
// ============================================

HELP_DATA["lesen2_exam12_q1"] = {
    text: "lässt sich gut mit dem Studium vereinbaren",
    meaning: "يمكن التوفيق بينه وبين الدراسة بسهولة",
    keywords: ["Studium = دراسة", "vereinbaren = التوفيق بين"],
    simplified: "عمل النادل يتناسب مع وقت الدراسة",
    imagine: "🍽️📚 نادل يذاكر في أثناء استراحة العمل"
};

HELP_DATA["lesen2_exam12_q2"] = {
    text: "sollte nicht aus der Ruhe zu bringen sein",
    meaning: "يجب ألا يفقد أعصابه بسهولة",
    keywords: ["aus der Ruhe bringen = يفقد أعصابه", "nicht = لا"],
    simplified: "النادل يجب أن يكون هادئ الأعصاب",
    imagine: "😤🍽️ زبون غاضب والنادل يبتسم ببقاء"
};

HELP_DATA["lesen2_exam12_q3"] = {
    text: "weil er mit dem Verdienst ganz zufrieden ist",
    meaning: "لأنه راضٍ تماماً عن دخله",
    keywords: ["Verdienst = دخل", "zufrieden = راضٍ"],
    simplified: "يان سعيد بدخله كساعي دراجة",
    imagine: "🚴‍♂️💰 شاب على دراجة يحسب نقوده ويبتسم"
};

HELP_DATA["lesen2_exam12_q4"] = {
    text: "dass er durch seinen Job keine Ausgaben für ein Fitnessstudio hat",
    meaning: "بسبب وظيفته ليس لديه مصاريف لنادي رياضي",
    keywords: ["Ausgaben = مصاريف", "Fitnessstudio = نادي رياضي"],
    simplified: "يان لا يحتاج نادياً رياضياً لأنه يتحرك كثيراً في العمل",
    imagine: "🚴‍♂️💪 شاب يركض بعربة ويقول: هذا ناديي الرياضي"
};

HELP_DATA["lesen2_exam12_q5"] = {
    text: "sich beim Einkauf an einen festen Ablauf halten",
    meaning: "تلتزم بتسلسل ثابت أثناء التسوق",
    keywords: ["festen Ablauf = تسلسل ثابت", "Einkauf = تسوق"],
    simplified: "ستيفاني تتبع خطوات محددة كمتسوقة اختبارية",
    imagine: "🛍️📋 امرأة تتسوق ومعها قائمة مهام تتبعها بدقة"
};

// ============================================
// Exam 13 (exam13.json) - die Ernährung
// ============================================

HELP_DATA["lesen2_exam13_q1"] = {
    text: "lassen das Frühstück aus Zeitmangel ausfallen",
    meaning: "يحذفون وجبة الإفطار لضيق الوقت",
    keywords: ["Zeitmangel = ضيق وقت", "ausfallen = يحذفون"],
    simplified: "بعض الأهل لا يعطون أطفالهم فطوراً لعدم وجود وقت",
    imagine: "⏰🍳 أم تنظر إلى ساعتها بسرعة وتخرج بدون فطور"
};

HELP_DATA["lesen2_exam13_q2"] = {
    text: "erhöht die Leistungen des Kindes",
    meaning: "يزيد من أداء الطفل",
    keywords: ["Leistungen = أداء", "erhöht = يزيد"],
    simplified: "الفطور الصحي يزيد تركيز الطفل وأداءه",
    imagine: "🥛🍌 طفل يأكل فطوراً ويبتسم بقوة في المدرسة"
};

HELP_DATA["lesen2_exam13_q3"] = {
    text: "wird in verschiedenen Geschmacksrichtungen angeboten",
    meaning: "تُقدم بنكهات مختلفة",
    keywords: ["Geschmacksrichtungen = نكهات", "angeboten = تُقدم"],
    simplified: "الحليب متوفر بنكهات متعددة كالفراولة والكاكاو",
    imagine: "🥛🍓🥛🍫 زجاجات حليب بألوان مختلفة"
};

HELP_DATA["lesen2_exam13_q4"] = {
    text: "denken von alleine nicht immer daran, genug zu trinken",
    meaning: "لا يتذكرون دائماً شرب كمية كافية من الماء",
    keywords: ["trinken = يشرب", "denken daran = يتذكر"],
    simplified: "الأطفال ينسون شرب الماء أثناء اللعب أو الدراسة",
    imagine: "🧒🎮👧 طفل يلعب ويبدو عطشاناً لكنه ينسى الشرب"
};

HELP_DATA["lesen2_exam13_q5"] = {
    text: "sollte in der Schule angeboten werden",
    meaning: "يجب أن يُقدم في المدرسة",
    keywords: ["Schule = مدرسة", "angeboten = يُقدم"],
    simplified: "يجب توفير وجبة غداء مناسبة في المدرسة",
    imagine: "🏫🍲 طفلة تحمل صينية طعام في كافتيريا المدرسة"
};

// ============================================
// Exam 14 (exam14.json) - Geschichte des Hauspersonals
// ============================================

HELP_DATA["lesen2_exam14_q1"] = {
    text: "damit sie lernten, einen Haushalt zu führen",
    meaning: "لكي تتعلم كيفية إدارة منزل",
    keywords: ["Haushalt führen = إدارة منزل", "lernten = تتعلم"],
    simplified: "الآباء أرسلوا بناتهم خادمات ليتعلمن التدبير المنزلي",
    imagine: "🧹👧 فتاة صغيرة تمسك مكنسة وتنظر إلى أمها"
};

HELP_DATA["lesen2_exam14_q2"] = {
    text: "alleine",
    meaning: "بمفردهن",
    keywords: ["alleine = بمفردها"],
    simplified: "الفتيات كن يجدن العمل بأنفسهن دون مساعدة",
    imagine: "🚉👧 فتاة واقعة في محطة قطار وتبدو ضائعة وحيدة"
};

HELP_DATA["lesen2_exam14_q3"] = {
    text: "auch bei den weniger reichen Leuten",
    meaning: "أيضاً عند الناس الأقل غنىً",
    keywords: ["weniger reichen = أقل غنىً", "Leuten = ناس"],
    simplified: "الخادمات كن موجودات حتى في البيوت المتوسطة",
    imagine: "🏠🧹 سيدة في منزل بسيط وخادمة بجانبها"
};

HELP_DATA["lesen2_exam14_q4"] = {
    text: "mussten länger arbeiten als Fabrikarbeiter",
    meaning: "كان عليهن العمل لفترة أطول من عمال المصانع",
    keywords: ["länger arbeiten = العمل لفترة أطول", "Fabrikarbeiter = عمال مصانع"],
    simplified: "الخادمات كن يعملن ساعات أطول من عمال المصانع",
    imagine: "⏰🧹 خادمة تعمل ليلاً وعامل مصنع نائم"
};

HELP_DATA["lesen2_exam14_q5"] = {
    text: "fast kein Geld",
    meaning: "تقريباً لا نقود",
    keywords: ["kein Geld = لا نقود", "fast = تقريباً"],
    simplified: "الخادمات كن يأخذن أجراً قليلاً جداً",
    imagine: "💰❌ يد فارغة بدون نقود"
};

// ============================================
// Exam 15 (exam15.json) - Österreich, das Land der Poolbesitzer
// ============================================

HELP_DATA["lesen2_exam15_q1"] = {
    text: "mehr Leute einen Pool bauen, weil Pools billiger geworden sind",
    meaning: "المزيد من الناس يبنون أحواض سباحة لأنها أصبحت أرخص",
    keywords: ["billiger = أرخص", "Pool bauen = بناء حوض سباحة"],
    simplified: "انتشار أحواض السباحة في النمسا بسبب انخفاض الأسعار",
    imagine: "🏊‍♂️💰 حوض سباحة جديد ولافتة مكتوب عليها سعر مخفض"
};

HELP_DATA["lesen2_exam15_q2"] = {
    text: "steht ein Pool nicht an erster Stelle auf der Wunschliste",
    meaning: "حوض السباحة ليس في المرتبة الأولى في قائمة الرغبات",
    keywords: ["erster Stelle = المرتبة الأولى", "Wunschliste = قائمة رغبات"],
    simplified: "حوض السباحة ليس أول ما يريده النمساويون",
    imagine: "📝1️⃣2️⃣ قائمة: شرفة، مرآب، حديقة، ثم حوض سباحة"
};

HELP_DATA["lesen2_exam15_q3"] = {
    text: "ihr Pool ein Anziehungspunkt für Freunde geworden ist",
    meaning: "حوض السباحة الخاص بها أصبح نقطة جذب للأصدقاء",
    keywords: ["Anziehungspunkt = نقطة جذب", "Freunde = أصدقاء"],
    simplified: "حوض ريجا جذب الأصدقاء والأقارب للزيارة",
    imagine: "🏊‍♀️👫 أصدقاء حول حوض سباحة يضحكون ويلهون"
};

HELP_DATA["lesen2_exam15_q4"] = {
    text: "brauchen keine chemischen Reinigungsmittel",
    meaning: "لا تحتاج إلى مواد تنظيف كيميائية",
    keywords: ["chemischen Reinigungsmittel = مواد تنظيف كيميائية", "brauchen = تحتاج"],
    simplified: "أحواض السباحة الطبيعية لا تحتاج لكيماويات للتنظيف",
    imagine: "🌿🏊‍♂️ حوض سباحة نظيف بالماء والنباتات فقط"
};

HELP_DATA["lesen2_exam15_q5"] = {
    text: "wird manchmal Wasser zum Befüllen von Pools gestohlen",
    meaning: "يتم أحياناً سرقة الماء لملء أحواض السباحة",
    keywords: ["gestohlen = مسروق", "Befüllen = ملء"],
    simplified: "بعض الناس يسرقون المياه من صنابير الشوارع لملء أحواضهم",
    imagine: "🚰🔓 رجل يملأ حوض سباحة من صنبور حريق الشارع بسرعة"
};

// ============================================
// Exam 16 (exam16.json) - Großraumbüros
// ============================================

HELP_DATA["lesen2_exam16_q1"] = {
    text: "belegt, dass die Mitarbeiter sich über Lärm im Großraumbüro beklagen",
    meaning: "تثبت أن الموظفين يتذمرون من الضوضاء في المكاتب المفتوحة",
    keywords: ["Lärm = ضوضاء", "beklagen = يتذمرون", "Großraumbüro = مكتب مفتوح"],
    simplified: "الدراسة أثبتت أن المكاتب المفتوحة مزعجة للموظفين",
    imagine: "🔊👂 شخص يضع يديه على أذنيه في مكتب مليء بالضوضاء"
};

HELP_DATA["lesen2_exam16_q2"] = {
    text: "sind kostengünstiger zu beheizen",
    meaning: "تكلفة تدفئتها أقل",
    keywords: ["kostengünstiger = أقل تكلفة", "beheizen = تدفئة"],
    simplified: "المكاتب المفتوحة أرخص في التدفئة",
    imagine: "🔥🏢 تدفئة مركزية واحدة تدفئ كل المكتب"
};

HELP_DATA["lesen2_exam16_q3"] = {
    text: "bevorzugen Einzelbüros",
    meaning: "يفضلون المكاتب الفردية",
    keywords: ["bevorzugen = يفضلون", "Einzelbüros = مكاتب فردية"],
    simplified: "الموظفون الألمان يفضلون مكاتب منفردة خاصة",
    imagine: "🚪🏢 شخص يغلق باب مكتبه ويرتاح"
};

HELP_DATA["lesen2_exam16_q4"] = {
    text: "wird in London oft unter mehreren Mitarbeitern aufgeteilt",
    meaning: "تُقسم غالباً بين عدة موظفين في لندن",
    keywords: ["aufgeteilt = مقسمة", "mehreren Mitarbeitern = عدة موظفين"],
    simplified: "مساحة العمل في لندن تُقسم بين عدة موظفين",
    imagine: "📏👥 عدة أشخاص يجلسون حول مكتب واحد صغير"
};

HELP_DATA["lesen2_exam16_q5"] = {
    text: "gibt es vor allem in Banken und Telekommunikationsunternehmen",
    meaning: "توجد خاصة في البنوك وشركات الاتصالات",
    keywords: ["Banken = بنوك", "Telekommunikationsunternehmen = شركات اتصالات"],
    simplified: "المكاتب المفتوحة موجودة بكثرة في البنوك وشركات الاتصالات",
    imagine: "🏢📱 مكتب مليء بموظفين يتحدثون على الهواتف"
};

// ============================================
// Exam 17 (exam17.json) - Korbjagd zu Pferde
// ============================================

HELP_DATA["lesen2_exam17_q1"] = {
    text: "bilden die deutsche Nationalmannschaft",
    meaning: "يشكلون المنتخب الألماني",
    keywords: ["Nationalmannschaft = منتخب وطني", "bilden = يشكلون"],
    simplified: "لاعبو فيسبادن هم المنتخب الألماني في الرمي بالخيل",
    imagine: "🏆🐎 فريق يرفع علم ألمانيا على صهوات الخيل"
};

HELP_DATA["lesen2_exam17_q2"] = {
    text: "sind so gedreht, dass ihre Öffnungen nach der Seite zeigen",
    meaning: "ملفوفة بحيث تكون فتحاتها جانبية",
    keywords: ["gedreht = ملفوفة", "Öffnungen = فتحات", "Seite = جانب"],
    simplified: "سلال كرة السلة في الرمي بالخيل موضوعة بشكل أفقي",
    imagine: "🏀➡️🥅 سلة موضوعة جانبياً بدلاً من أفقياً"
};

HELP_DATA["lesen2_exam17_q3"] = {
    text: "kann sein eigenes Pferd einsetzen",
    meaning: "يمكنه استخدام حصانه الخاص",
    keywords: ["eigenes Pferd = حصان خاص", "einsetzen = استخدام"],
    simplified: "المشارك في الدورة يمكنه استخدام حصانه الخاص إن أراد",
    imagine: "🐎✅ رجل يربت على رأس حصانه ويقول: هذا حصاني"
};

HELP_DATA["lesen2_exam17_q4"] = {
    text: "darf der Ball in die Hand genommen werden",
    meaning: "يمكن أخذ الكرة باليد",
    keywords: ["Ball = كرة", "Hand = يد", "genommen = مأخوذ"],
    simplified: "في الرمي بالخيل، يمكن للاعب الإمساك بالكرة بيده",
    imagine: "🤾‍♂️🐎 لاعب على حصان يمسك كرة بيده"
};

HELP_DATA["lesen2_exam17_q5"] = {
    text: "die Reiter oft mehr Stress zu empfinden scheinen als die Tiere",
    meaning: "يبدو أن الفرسان يعانون من إجهاد أكثر من الحيوانات",
    keywords: ["Stress = إجهاد", "Reiter = فرسان", "Tiere = حيوانات"],
    simplified: "التدريب مرهق للفرسان أكثر من الخيول",
    imagine: "😓🐴 فارس يتصبب عرقاً والحصان يبدو مرتاحاً"
};

// ============================================
// Exam 18 (exam18.json) - Mehrsprachige Erziehung
// ============================================

HELP_DATA["lesen2_exam18_q1"] = {
    text: "kommunikativer",
    meaning: "أكثر تواصلاً",
    keywords: ["kommunikativer = أكثر تواصلاً"],
    simplified: "الأطفال متعددي اللغة أكثر قدرة على التواصل",
    imagine: "🗣️👧👦 طفل وطفلة يتحدثان بلغات مختلفة ويفهمان بعضهما"
};

HELP_DATA["lesen2_exam18_q2"] = {
    text: "das Kind einen emotionalen Bezug zur Sprache hat",
    meaning: "الطفل لديه ارتباط عاطفي باللغة",
    keywords: ["emotionalen Bezug = ارتباط عاطفي", "Sprache = لغة"],
    simplified: "التعليم متعدد اللغات ينجح إذا أحب الطفل اللغة",
    imagine: "❤️📖 طفل يحضن كتاباً بلغة أجنبية ويبتسم"
};

HELP_DATA["lesen2_exam18_q3"] = {
    text: "sollte im Kindergarten mit der Sprachvermittlung begonnen werden",
    meaning: "يجب البدء بتعليم اللغة في الروضة",
    keywords: ["Kindergarten = روضة", "Sprachvermittlung = تعليم اللغة"],
    simplified: "تعليم الطفل لغة ثانية يُفضل أن يبدأ في عمر الروضة",
    imagine: "🏫👧 أطفال يجلسون في روضة ويغنون بلغة أجنبية"
};

HELP_DATA["lesen2_exam18_q4"] = {
    text: "bei systematischer Vermittlung der Sprache",
    meaning: "مع التعليم المنتظم للغة",
    keywords: ["systematischer = منتظم", "Vermittlung = تعليم"],
    simplified: "تعلم اللغة الثانية يحتاج إلى نظام وتنظيم",
    imagine: "📅📚 جدول منتظم يحتوي أياماً للغة الأولى وأياماً للغة الثانية"
};

HELP_DATA["lesen2_exam18_q5"] = {
    text: "schadet dies der Entwicklung der Zweitsprache nicht",
    meaning: "هذا لا يضر بتطور اللغة الثانية",
    keywords: ["schadet = يضر", "Entwicklung = تطور", "Zweitsprache = لغة ثانية"],
    simplified: "الاتصال القليل باللغة الثانية لا يضر بتعلمها",
    imagine: "⏰🧠 اتصال قصير لكنه كافٍ لتنمية مهارات اللغة"
};

// ============================================
// Exam 19 (exam19.json) - Mehrsprachige Erziehung (معدل)
// ============================================

HELP_DATA["lesen2_exam19_q1"] = {
    text: "mehr Offenheit und Flexibilität in ihrem Verhalten zeigen",
    meaning: "يظهرون انفتاحاً ومرونة أكثر في سلوكهم",
    keywords: ["Offenheit = انفتاح", "Flexibilität = مرونة", "Verhalten = سلوك"],
    simplified: "الأطفال متعددي اللغة أكثر انفتاحاً ومرونة",
    imagine: "🌍👧 طفلة تتحدث مع آخر من ثقافة مختلفة بثقة"
};

HELP_DATA["lesen2_exam19_q2"] = {
    text: "äußert Kritik an bestimmten Erziehungsabsichten der Eltern",
    meaning: "تعبر عن انتقاد لبعض نوايا التربية عند الآباء",
    keywords: ["Kritik = انتقاد", "Erziehungsabsichten = نوايا تربوية", "Eltern = آباء"],
    simplified: "سوزان هيلت تنتقد الآباء الذين يربون أبناءهم بلغات لأسباب فكرية فقط",
    imagine: "👩‍🏫🗣️ معلمة تتحدث إلى آباء وتشرح لهم"
};

HELP_DATA["lesen2_exam19_q3"] = {
    text: "reicht es, im Grundschulalter mit der Zweitsprache zu beginnen",
    meaning: "يكفي البدء باللغة الثانية في سن المدرسة الابتدائية",
    keywords: ["Grundschulalter = سن المدرسة الابتدائية", "Zweitsprache = لغة ثانية"],
    simplified: "يمكن تعليم الطفل لغة ثانية حتى لو بدأ في المدرسة الابتدائية",
    imagine: "📚👦 طفل في الصف الأول يدرس لغة جديدة"
};

HELP_DATA["lesen2_exam19_q4"] = {
    text: "man die zweite oder dritte Sprache wiederholt und ungezwungen spricht",
    meaning: "يتحدث اللغة الثانية أو الثالثة بشكل متكرر وطبيعي",
    keywords: ["wiederholt = بشكل متكرر", "ungezwungen = بشكل طبيعي"],
    simplified: "التعليم متعدد اللغات ينجح عندما تُستخدم اللغة بشكل طبيعي",
    imagine: "💬👩‍👦 أم تتحدث مع طفلها بلغة أجنبية في الحياة اليومية"
};

HELP_DATA["lesen2_exam19_q5"] = {
    text: "wird auf jeden Fall eine Neigung zum Sprachlernen bestehen bleiben",
    meaning: "ستبقى على الأقل رغبة في تعلم اللغة موجودة",
    keywords: ["Neigung = رغبة", "Sprachlernen = تعلم لغة", "bestehen bleiben = تبقى موجودة"],
    simplified: "الاتصال القليل باللغة الثانية يحفز الرغبة في تعلم اللغات",
    imagine: "💪🧠 طفل يسمع كلمات بلغة جديدة ويصبح فضولياً لتعلمها"
};

// ============================================
// Exam 20 (exam20.json) - Verpackungen im Supermarkt: Geht's auch ohne?
// ============================================

HELP_DATA["lesen2_exam20_q1"] = {
    text: "von den Kunden meist vollständig verbraucht",
    meaning: "يتم استهلاكها بالكامل من قبل العملاء غالباً",
    keywords: ["verbraucht = مستهلك", "vollständig = بالكامل", "Kunden = عملاء"],
    simplified: "السلع غير المغلفة يستهلكها العملاء بالكامل ولا يهدرونها",
    imagine: "🍎🛍️ تفاحة توضع مباشرة في السلة بدون تغليف وتُؤكل كلها"
};

HELP_DATA["lesen2_exam20_q2"] = {
    text: "möchte mehr umweltfreundliche Verpackungen verwenden",
    meaning: "يريد استخدام تغليف أكثر صديقاً للبيئة",
    keywords: ["umweltfreundliche = صديق للبيئة", "Verpackungen = تغليف", "verwenden = استخدام"],
    simplified: "صاحب السوبرماركت ديتر هيبر يريد تقليل التغليف البلاستيكي",
    imagine: "🛒♻️ رجل يمسك بشبكة قابلة لإعادة الاستخدام بدلاً من كيس بلاستيكي"
};

HELP_DATA["lesen2_exam20_q3"] = {
    text: "könnte eine praktikable Möglichkeit sein, Müll zu vermeiden",
    meaning: "قد تكون وسيلة عملية لتجنب النفايات",
    keywords: ["praktikable Möglichkeit = وسيلة عملية", "Müll vermeiden = تجنب النفايات"],
    simplified: "استخدام علب الطعام الخاصة في السوبرماركت يقلل النفايات",
    imagine: "🥫♻️ شخص يضع علبته الخاصة على منصة المحاسب"
};

HELP_DATA["lesen2_exam20_q4"] = {
    text: "rief allgemeine Zustimmung hervor",
    meaning: "أثار موافقة عامة",
    keywords: ["Zustimmung = موافقة", "allgemeine = عامة"],
    simplified: "عروض هيبر لتقليل البلاستيك لاقت قبولاً من الجميع",
    imagine: "👏🛒 عملاء يصفقون وهم يرون تغليفاً أقل في المتجر"
};

HELP_DATA["lesen2_exam20_q5"] = {
    text: "sich nur langsam durchsetzen",
    meaning: "سوف تنتشر ببطء فقط",
    keywords: ["langsam = ببطء", "durchsetzen = تنتشر"],
    simplified: "التسوق بدون تغليف سيستغرق وقتاً طويلاً ليشيع",
    imagine: "🐢🛍️ سلحفاة تدفع عربة تسوق ببطء نحو قسم الخضار"
};

// ============================================
// Exam 21 (exam21.json) - Der Puppenmacher
// ============================================

HELP_DATA["lesen2_exam21_q1"] = {
    text: "von einem französischen Schneider erfunden",
    meaning: "اخترعها خياط فرنسي",
    keywords: ["französischen Schneider = خياط فرنسي", "erfunden = اخترع"],
    simplified: "أول دمية عرض ملابس اخترعها خياط فرنسي",
    imagine: "✂️👗 خياط فرنسي يقف بجانب دمية خشبية"
};

HELP_DATA["lesen2_exam21_q2"] = {
    text: "darf Herr Bauerfeind keinen normalen Nagellack auftragen",
    meaning: "لا يُسمح للسيد باورفايند بوضع طلاء أظافر عادي",
    keywords: ["Nagellack = طلاء أظافر", "auftragen = وضع"],
    simplified: "باورفايند لا يستخدم طلاء الأظافر العادي لأنه يذيب الدهان",
    imagine: "💅🚫 زجاجة طلاء أظافر مكتوب عليها ممنوع"
};

HELP_DATA["lesen2_exam21_q3"] = {
    text: "konnte seine erste Schaufensterpuppe nicht auf einmal zahlen",
    meaning: "لم يستطع دفع ثمن أول دمية عرض له دفعة واحدة",
    keywords: ["erste = أول", "Schaufensterpuppe = دمية عرض", "auf einmal = دفعة واحدة"],
    simplified: "باورفايند اشترى أول دمية بالأقساط",
    imagine: "💳📆 رجل يوقع عقد أقساط لشراء دمية"
};

HELP_DATA["lesen2_exam21_q4"] = {
    text: "handelt mit Schaufensterpuppen anderer Produzenten",
    meaning: "يتاجر بدمى عرض من منتجين آخرين",
    keywords: ["handelt = يتاجر", "anderer Produzenten = منتجين آخرين"],
    simplified: "باورفايند يبيع دمى عرض لشركات أخرى أيضاً",
    imagine: "🤝💼 رجل يصافح آخر بجانب دمى عرض"
};

HELP_DATA["lesen2_exam21_q5"] = {
    text: "können mit umweltfreundlichen Farben bemalt werden",
    meaning: "يمكن دهنها بألوان صديقة للبيئة",
    keywords: ["umweltfreundlichen = صديق للبيئة", "Farben = ألوان", "bemalt = مدهونة"],
    simplified: "دمى العرض يمكن تلوينها بألوان غير ضارة بالبيئة",
    imagine: "🎨♻️ فرشاة دهان ودمية وألوان مكتوب عليها صديقة للبيئة"
};

// ============================================
// Exam 22 (exam22.json) - Der Puppenmacher (معدل)
// ============================================

HELP_DATA["lesen2_exam22_q1"] = {
    text: "von einem französischen Schneider erfunden",
    meaning: "اخترعها خياط فرنسي",
    keywords: ["französischen Schneider = خياط فرنسي", "erfunden = اخترع"],
    simplified: "أول دمية عرض ملابس اخترعها خياط فرنسي",
    imagine: "✂️👗 خياط فرنسي يقف بجانب دمية خشبية"
};

HELP_DATA["lesen2_exam22_q2"] = {
    text: "darf er keinen normalen Nagel lack auftragen",
    meaning: "لا يسمح له بوضع طلاء أظافر عادي",
    keywords: ["Nagel lack = طلاء أظافر", "auftragen = وضع"],
    simplified: "باورفايند لا يستخدم طلاء الأظافر العادي لأنه يذيب الدهان",
    imagine: "💅🚫 زجاجة طلاء أظافر مكتوب عليها ممنوع"
};

HELP_DATA["lesen2_exam22_q3"] = {
    text: "konnte seine erste Schaufensterpuppe nicht auf einmal zahlen",
    meaning: "لم يستطع دفع ثمن أول دمية عرض له دفعة واحدة",
    keywords: ["erste = أول", "Schaufensterpuppe = دمية عرض", "auf einmal = دفعة واحدة"],
    simplified: "باورفايند اشترى أول دمية بالأقساط",
    imagine: "💳📆 رجل يوقع عقد أقساط لشراء دمية"
};

HELP_DATA["lesen2_exam22_q4"] = {
    text: "handelt mit Schaufensterpuppen anderer Produzenten",
    meaning: "يتاجر بدمى عرض من منتجين آخرين",
    keywords: ["handelt = يتاجر", "anderer Produzenten = منتجين آخرين"],
    simplified: "باورفايند يبيع دمى عرض لشركات أخرى أيضاً",
    imagine: "🤝💼 رجل يصافح آخر بجانب دمى عرض"
};

HELP_DATA["lesen2_exam22_q5"] = {
    text: "können mit umweltfreundlichen Farben bemalt werden",
    meaning: "يمكن دهنها بألوان صديقة للبيئة",
    keywords: ["umweltfreundlichen = صديق للبيئة", "Farben = ألوان", "bemalt = مدهونة"],
    simplified: "دمى العرض يمكن تلوينها بألوان غير ضارة بالبيئة",
    imagine: "🎨♻️ فرشاة دهان ودمية وألوان مكتوب عليها صديقة للبيئة"
};

// ============================================
// Exam 23 (exam23.json) - Lehrkräftepreis
// ============================================

HELP_DATA["lesen2_exam23_q1"] = {
    text: "erhielt kurz vor Eintritt in den Ruhestand einen Preis",
    meaning: "حصلت على جائزة قبل دخولها التقاعد بفترة قصيرة",
    keywords: ["Ruhestand = تقاعد", "Preis = جائزة", "kurz vor = قبل فترة قصيرة"],
    simplified: "بريجيت فولمر حصلت على جائزة قبل التقاعد",
    imagine: "🏆👩‍🏫 معلمة تبتسم وتحمل جائزة وحقيبة تقاعد بجانبها"
};

HELP_DATA["lesen2_exam23_q2"] = {
    text: "womöglich nicht genug für ihren Lebensunterhalt verdienen könne",
    meaning: "ربما لا تستطيع كسب ما يكفي لقوت يومها",
    keywords: ["Lebensunterhalt = قوت يوم", "verdienen = تكسب", "nicht genug = لا يكفي"],
    simplified: "والدا فولمر خافا ألا تكسب ما يكفي من المال",
    imagine: "💰😟 والدان ينظران إلى ابنتهما بقلق والنقود قليلة"
};

HELP_DATA["lesen2_exam23_q3"] = {
    text: "die Schüler sich im Unterricht schlecht benehmen würden",
    meaning: "الطلاب سيتصرفون بسوء في الفصل",
    keywords: ["schlecht benehmen = تصرف سيء", "Unterricht = فصل"],
    simplified: "فولمر خافت من أن يكون الطلاب مشاغبين معها",
    imagine: "😠👦 طالب شقي يرمي ورقة في الفصل والمعلمة تنظر بقلق"
};

HELP_DATA["lesen2_exam23_q4"] = {
    text: "wollten ihr für die gelungene Prüfungsvorbereitung Anerkennung zeigen",
    meaning: "أرادوا إظهار تقديرهم لها لتحضيرها الناجح للامتحانات",
    keywords: ["Anerkennung = تقدير", "Prüfungsvorbereitung = تحضير امتحانات", "gelungene = ناجح"],
    simplified: "الطلاب رشحوا المعلمة فولمر تقديراً لإعدادهم الجيد للامتحانات",
    imagine: "📝👩‍🏫 طلاب يصفقون لمعلمتهم بعد امتحان ناجح"
};

HELP_DATA["lesen2_exam23_q5"] = {
    text: "mit ehemaligen Schülern ein Projekt zu planen",
    meaning: "للتخطيط لمشروع مع طلاب سابقين",
    keywords: ["ehemaligen Schülern = طلاب سابقين", "Projekt = مشروع", "planen = تخطيط"],
    simplified: "فولمر متحمسة للسفر إلى اليونان مع طلابها السابقين",
    imagine: "✈️🇬🇷 معلمة وطلاب سابقون يخططون لرحلة إلى اليونان"
};

// ============================================
// Exam 24 (exam24.json) - Wer parkt, muss zahlen
// ============================================

HELP_DATA["lesen2_exam24_q1"] = {
    text: "in der Schweiz und in Schweden",
    meaning: "في سويسرا والسويد",
    keywords: ["Schweiz = سويسرا", "Schweden = السويد"],
    simplified: "أول مواقف السيارات في أوروبا كانت في سويسرا والسويد",
    imagine: "🇨🇭🇸🇪 علم سويسرا والسويد وموقف سيارات قديم"
};

HELP_DATA["lesen2_exam24_q2"] = {
    text: "Bedürftige zu unterstützen",
    meaning: "لدعم المحتاجين",
    keywords: ["Bedürftige = محتاجين", "unterstützen = دعم"],
    simplified: "رسوم المواقف في دويسبورغ استخدمت لمساعدة الفقراء والمرضى",
    imagine: "🤲💰 يد تضع نقوداً في صندوق التبرعات"
};

HELP_DATA["lesen2_exam24_q3"] = {
    text: "konnten nur Münzen annehmen",
    meaning: "كانت تقبل العملات المعدنية فقط",
    keywords: ["Münzen = عملات معدنية", "annehmen = تقبل"],
    simplified: "أول مواقف السيارات كانت تقبل القطع النقدية فقط",
    imagine: "💰🚫 ورقة نقدية ترفضها آلة موقف سيارات قديمة"
};

HELP_DATA["lesen2_exam24_q4"] = {
    text: "sind flexibel im Hinblick auf die Art der Bezahlung",
    meaning: "مرنة فيما يتعلق بطريقة الدفع",
    keywords: ["flexibel = مرنة", "Art der Bezahlung = طريقة الدفع"],
    simplified: "أجهزة مواقف السيارات الجديدة تقبل عملات وبطاقات",
    imagine: "💳💰 آلة موقف سيارات تقبل نقوداً وبطاقة"
};

HELP_DATA["lesen2_exam24_q5"] = {
    text: "werden die höchsten Parkgebühren verlangt",
    meaning: "تُطلب أعلى رسوم مواقف",
    keywords: ["höchsten = أعلى", "Parkgebühren = رسوم مواقف"],
    simplified: "دوسلدورف وبرلين أغلى مدينتين للمواقف في ألمانيا",
    imagine: "💰🚗 مدينتان على خريطة ألمانيا مكتوب عليهما غالي"
};

// ============================================
// Exam 25 (exam25.json) - Wer parkt, muss zahlen (معدل)
// ============================================

HELP_DATA["lesen2_exam25_q1"] = {
    text: "in der Schweiz und in Schweden",
    meaning: "في سويسرا والسويد",
    keywords: ["Schweiz = سويسرا", "Schweden = السويد"],
    simplified: "أول مواقف السيارات في أوروبا كانت في سويسرا والسويد",
    imagine: "🇨🇭🇸🇪 علم سويسرا والسويد وموقف سيارات قديم"
};

HELP_DATA["lesen2_exam25_q2"] = {
    text: "Bedürftige zu unterstützen",
    meaning: "لدعم المحتاجين",
    keywords: ["Bedürftige = محتاجين", "unterstützen = دعم"],
    simplified: "رسوم المواقف في دويسبورغ استخدمت لمساعدة الفقراء والمرضى",
    imagine: "🤲💰 يد تضع نقوداً في صندوق التبرعات"
};

HELP_DATA["lesen2_exam25_q3"] = {
    text: "funktionierten nur mit Münzen",
    meaning: "كانت تعمل بالعملات المعدنية فقط",
    keywords: ["funktionierten = تعمل", "Münzen = عملات معدنية"],
    simplified: "أول مواقف السيارات كانت تعمل بالقطع النقدية فقط",
    imagine: "💰🚫 ورقة نقدية ترفضها آلة موقف سيارات قديمة"
};

HELP_DATA["lesen2_exam25_q4"] = {
    text: "versorgen sich selbst mit Strom",
    meaning: "تزود نفسها بالكهرباء بنفسها",
    keywords: ["Strom = كهرباء", "versorgen = تزود", "selbst = بنفسها"],
    simplified: "أجهزة مواقف السيارات الجديدة تعمل بالطاقة الشمسية",
    imagine: "☀️🔋 آلة موقف سيارات بألواح شمسية فوقها"
};

HELP_DATA["lesen2_exam25_q5"] = {
    text: "werden die höchsten Parkgebühren verlangt",
    meaning: "تُطلب أعلى رسوم مواقف",
    keywords: ["höchsten = أعلى", "Parkgebühren = رسوم مواقف"],
    simplified: "دوسلدورف وبرلين أغلى مدينتين للمواقف في ألمانيا",
    imagine: "💰🚗 مدينتان على خريطة ألمانيا مكتوب عليهما غالي"
};

// ============================================
// Exam 26 (exam26.json) - Familienglück oder Generationskonflikte?
// ============================================

HELP_DATA["lesen2_exam26_q1"] = {
    text: "als Kind glücklich waren",
    meaning: "كانوا سعداء في طفولتهم",
    keywords: ["Kind = طفل", "glücklich = سعيد"],
    simplified: "نصف كبار السن فقط قالوا إنهم كانوا سعداء في طفولتهم",
    imagine: "👴😐 رجل كبير ينظر إلى صورة طفولته ولا يبتسم كثيراً"
};

HELP_DATA["lesen2_exam26_q2"] = {
    text: "verstehen sich mit ihren Eltern gut",
    meaning: "علاقتهم مع والديهم جيدة",
    keywords: ["verstehen sich = يتفاهمون", "Eltern = والدان"],
    simplified: "معظم المراهقين لديهم علاقة جيدة مع آبائهم",
    imagine: "👨‍👩‍👧‍👦❤️ عائلة تجلس معاً وتضحك"
};

HELP_DATA["lesen2_exam26_q3"] = {
    text: "kaum Unterschiede in der Lebensart",
    meaning: "تقريباً لا فروق في نمط الحياة",
    keywords: ["Unterschiede = فروق", "Lebensart = نمط حياة"],
    simplified: "اليوم، الآباء والأبناء متشابهون في أسلوب الحياة",
    imagine: "👕👖 أب وابنه يرتديان ملابس متشابهة"
};

HELP_DATA["lesen2_exam26_q4"] = {
    text: "Geräte die Hausarbeit leichter machen",
    meaning: "الأجهزة تجعل الأعمال المنزلية أسهل",
    keywords: ["Geräte = أجهزة", "Hausarbeit = أعمال منزلية", "leichter = أسهل"],
    simplified: "الأم لديها وقت أكثر لأطفالها بفضل الأجهزة الحديثة",
    imagine: "🧺🤖 غسالة صحون وغسالة ملابس تعملان والأم جالسة مع أطفالها"
};

HELP_DATA["lesen2_exam26_q5"] = {
    text: "entsteht oft ein falsches Bild der Familie",
    meaning: "تتكون غالباً صورة خاطئة عن الأسرة",
    keywords: ["falsches Bild = صورة خاطئة", "Familie = أسرة"],
    simplified: "الإعلام يقدم صورة سلبية عن الأسرة غير واقعية",
    imagine: "📺😟 تلفاز يعرض أخباراً عن مشاكل عائلية والعائلة الحقيقية سعيدة بجانبه"
};

// ============================================
// Exam 27 (exam27.json) - Traumfrau und Traummann gesucht
// ============================================

HELP_DATA["lesen2_exam27_q1"] = {
    text: "die Lebensumstände es erschweren, den Partner oder die Partnerin fürs Leben zu finden",
    meaning: "ظروف الحياة تجعل من الصعب العثور على شريك الحياة",
    keywords: ["Lebensumstände = ظروف حياة", "erschweren = تجعل صعباً", "Partner finden = العثور على شريك"],
    simplified: "كثرة العمل والتنقل تجعل العثور على شريك للحياة صعباً",
    imagine: "💼🏃‍♂️ رجل يحمل حقيبة ويسافر بين المدن وينظر إلى هاتفه حزيناً"
};

HELP_DATA["lesen2_exam27_q2"] = {
    text: "in den Medien",
    meaning: "في وسائل الإعلام",
    keywords: ["Medien = إعلام"],
    simplified: "العزاب اليوم يبحثون عن شريك عبر الإنترنت والصحف",
    imagine: "📱💕 شخص يمرر أصابعه على تطبيق مواعدة"
};

HELP_DATA["lesen2_exam27_q3"] = {
    text: "jeden Tag Heiratswünsche gesendet",
    meaning: "تُرسل رغبات زواج كل يوم",
    keywords: ["Heiratswünsche = رغبات زواج", "gesendet = مرسلة"],
    simplified: "في الراديو، ناس يعبرون عن رغبتهم بالزواج يومياً",
    imagine: "📻💍 ميكروفون وشخص يقول أنا أريد الزواج"
};

HELP_DATA["lesen2_exam27_q4"] = {
    text: "beschreiben sich Partnersuchende oft im Rahmen konventioneller Rollenerwartungen",
    meaning: "الباحثون عن شريك يصفون أنفسهم غالباً في إطار التوقعات التقليدية للأدوار",
    keywords: ["konventioneller Rollenerwartungen = توقعات تقليدية للأدوار", "beschreiben = يصفون"],
    simplified: "النساء يصفن جمالهن والرجال يقدمون الأمان والوظيفة",
    imagine: "💃👔 امرأة تتحدث عن جمالها ورجل يتحدث عن منصبه"
};

HELP_DATA["lesen2_exam27_q5"] = {
    text: "zunächst eine Selbstanalyse vornehmen",
    meaning: "إجراء تحليل ذاتي أولاً",
    keywords: ["Selbstanalyse = تحليل ذاتي", "vornehmen = إجراء"],
    simplified: "يجب على الباحث عن شريك أن يعرف نفسه أولاً قبل البحث",
    imagine: "🪞🤔 شخص يقف أمام المرآة ويسأل نفسه من أنا"
};

// ============================================
// Exam 28 (exam28.json) - Traumfrau und Traummann gesucht (معدل)
// ============================================

HELP_DATA["lesen2_exam28_q1"] = {
    text: "die Lebensumstände es erschweren, den Partner oder die Partnerin fürs Leben zu finden",
    meaning: "ظروف الحياة تجعل من الصعب العثور على شريك الحياة",
    keywords: ["Lebensumstände = ظروف حياة", "erschweren = تجعل صعباً", "Partner finden = العثور على شريك"],
    simplified: "كثرة العمل والتنقل تجعل العثور على شريك للحياة صعباً",
    imagine: "💼🏃‍♂️ رجل يحمل حقيبة ويسافر بين المدن وينظر إلى هاتفه حزيناً"
};

HELP_DATA["lesen2_exam28_q2"] = {
    text: "in den Medien",
    meaning: "في وسائل الإعلام",
    keywords: ["Medien = إعلام"],
    simplified: "العزاب اليوم يبحثون عن شريك عبر الإنترنت والصحف",
    imagine: "📱💕 شخص يمرر أصابعه على تطبيق مواعدة"
};

HELP_DATA["lesen2_exam28_q3"] = {
    text: "jeden Tag Heiratswünsche gesendet",
    meaning: "تُرسل رغبات زواج كل يوم",
    keywords: ["Heiratswünsche = رغبات زواج", "gesendet = مرسلة"],
    simplified: "في الراديو، ناس يعبرون عن رغبتهم بالزواج يومياً",
    imagine: "📻💍 ميكروفون وشخص يقول أنا أريد الزواج"
};

HELP_DATA["lesen2_exam28_q4"] = {
    text: "klassische Rollenbilder bei der Selbstdarstellung in Kontaktanzeigen weiterhin stark verbreitet sind",
    meaning: "صور الأدوار التقليدية في التعبير عن الذات في إعلانات التعارف لا تزال منتشرة بقوة",
    keywords: ["klassische Rollenbilder = صور أدوار تقليدية", "Selbstdarstellung = تعبير عن الذات", "Kontaktanzeigen = إعلانات تعارف"],
    simplified: "الرجال يعرضون الأمان والنساء يعرضن الجمال في الإعلانات",
    imagine: "📰👔👗 إعلان: رجل ناجح يبحث عن امرأة جميلة"
};

HELP_DATA["lesen2_exam28_q5"] = {
    text: "zunächst eine Selbstanalyse vornehmen",
    meaning: "إجراء تحليل ذاتي أولاً",
    keywords: ["Selbstanalyse = تحليل ذاتي", "vornehmen = إجراء"],
    simplified: "يجب على الباحث عن شريك أن يعرف نفسه أولاً قبل البحث",
    imagine: "🪞🤔 شخص يقف أمام المرآة ويسأل نفسه من أنا"
};

// ============================================
// Exam 29 (exam29.json) - Wie Babys lernen
// ============================================

HELP_DATA["lesen2_exam29_q1"] = {
    text: "kaum auf ihre Umwelt reagieren",
    meaning: "يكادون لا يتفاعلون مع بيئتهم",
    keywords: ["kaum = بالكاد", "Umwelt = بيئة", "reagieren = يتفاعلون"],
    simplified: "كان يُعتقد قديماً أن الأطفال لا يشعرون بالألم",
    imagine: "👶😐 طفل رضيع لا يتفاعل مع من حوله"
};

HELP_DATA["lesen2_exam29_q2"] = {
    text: "im Kleinkindalter besonders wichtig",
    meaning: "مهمة بشكل خاص في سن الطفولة المبكرة",
    keywords: ["Kleinkindalter = سن الطفولة المبكرة", "besonders wichtig = مهمة بشكل خاص"],
    simplified: "البيئة مهمة جداً لتطور ذكاء الطفل الصغير",
    imagine: "🌳👶 طفل يلعب في الطبيعة مع أمه"
};

HELP_DATA["lesen2_exam29_q3"] = {
    text: "mehr altersgerechte Erfahrungen sie machen können",
    meaning: "كلما زادت الخبرات المناسبة لعمرهم",
    keywords: ["altersgerechte = مناسبة للعمر", "Erfahrungen = خبرات"],
    simplified: "الأطفال يتطورون بشكل أفضل عندما يمرون بتجارب مناسبة لعمرهم",
    imagine: "🧩👧 طفلة تركّب أحجية تناسب عمرها"
};

HELP_DATA["lesen2_exam29_q4"] = {
    text: "für die geistige Entwicklung eher ungeeignet",
    meaning: "غير مناسبة للتطور العقلي إلى حد ما",
    keywords: ["geistige Entwicklung = تطور عقلي", "ungeeignet = غير مناسب"],
    simplified: "التلفاز والألعاب الإلكترونية ليست مفيدة لتطور دماغ الطفل",
    imagine: "📺🧠 شاشة تلفاز ودماغ صغير خلفها يتباطأ"
};

HELP_DATA["lesen2_exam29_q5"] = {
    text: "fördert die Intelligenz des Babys am besten",
    meaning: "ينمي ذكاء الرضيع بشكل أفضل",
    keywords: ["fördert = ينمي", "Intelligenz = ذكاء", "am besten = بشكل أفضل"],
    simplified: "التفاعل مع الناس هو أفضل شيء لذكاء الطفل",
    imagine: "👩‍👧❤️ أم تحتضن طفلها وتتحدث معه"
};

// ============================================
// Exam 30 (exam30.json) - Volkskrankheit Rückenschmerz
// ============================================

HELP_DATA["lesen2_exam30_q1"] = {
    text: "kann durch eine Vielzahl von Faktoren ausgelöst werden",
    meaning: "يمكن أن تسببها عوامل متعددة",
    keywords: ["Vielzahl = تعدد", "Faktoren = عوامل", "ausgelöst = مسبب"],
    simplified: "آلام الظهر تنتج عن أسباب كثيرة مختلفة",
    imagine: "🔍🦴 أنواع كثيرة من الآلام تظهر على عمود فقري"
};

HELP_DATA["lesen2_exam30_q2"] = {
    text: "entstehen, weil angespannte Muskeln auf nahegelegene Nervenenden drücken",
    meaning: "تنشأ لأن العضلات المشدودة تضغط على نهايات عصبية قريبة",
    keywords: ["angespannte Muskeln = عضلات مشدودة", "Nervenenden = نهايات عصبية", "drücken = تضغط"],
    simplified: "آلام الظهر سببها عضلات متوترة تضغط على أعصاب",
    imagine: "💪⚡ عضلة مشدودة تضغط على عصب"
};

HELP_DATA["lesen2_exam30_q3"] = {
    text: "können zu Depressionen führen",
    meaning: "يمكن أن تؤدي إلى الاكتئاب",
    keywords: ["Depressionen = اكتئاب", "führen = تؤدي"],
    simplified: "آلام الظهر المزمنة قد تسبب الاكتئاب",
    imagine: "😢🦴 شخص حزين بسبب آلام ظهره المزمنة"
};

HELP_DATA["lesen2_exam30_q4"] = {
    text: "können durch verschiedene Erkrankungen hervorgerufen werden",
    meaning: "يمكن أن تنتج عن أمراض مختلفة",
    keywords: ["Erkrankungen = أمراض", "hervorgerufen = منتجة"],
    simplified: "تآكل العظام قد ينتج عن مرض هشاشة العظام",
    imagine: "🦴🦠 هيكل عظمي به ثقوب بسبب المرض"
};

HELP_DATA["lesen2_exam30_q5"] = {
    text: "sollte nicht zu lange mit dem Arztbesuch warten",
    meaning: "لا يجب الانتظار طويلاً قبل زيارة الطبيب",
    keywords: ["Arztbesuch = زيارة طبيب", "nicht zu lange = ليس طويلاً", "warten = انتظار"],
    simplified: "من يعاني من آلام ظهر متكررة يجب أن يذهب للطبيب",
    imagine: "🏥🦴 رجل يمسك ظهره ويدخل عيادة الطبيب"
};

// ============================================
// Exam 31 (exam31.json) - Volkskrankheit Rückenschmerz (معدل)
// ============================================

HELP_DATA["lesen2_exam31_q1"] = {
    text: "ist bei Frauen deutlich stärker ausgeprägt als bei Männern",
    meaning: "أكثر انتشاراً عند النساء بشكل ملحوظ من الرجال",
    keywords: ["Frauen = نساء", "deutlich stärker = بشكل أقوى", "Männern = رجال"],
    simplified: "آلام الظهر أكثر شيوعاً عند النساء منها عند الرجال",
    imagine: "👩🦴👨 إحصاء: نساء كثيرات ورجال أقل"
};

HELP_DATA["lesen2_exam31_q2"] = {
    text: "entstehen, weil angespannte Muskeln auf nahegelegene Nervenenden drücken",
    meaning: "تنشأ لأن العضلات المشدودة تضغط على نهايات عصبية قريبة",
    keywords: ["angespannte Muskeln = عضلات مشدودة", "Nervenenden = نهايات عصبية", "drücken = تضغط"],
    simplified: "آلام الظهر سببها عضلات متوترة تضغط على أعصاب",
    imagine: "💪⚡ عضلة مشدودة تضغط على عصب"
};

HELP_DATA["lesen2_exam31_q3"] = {
    text: "können unterschiedliche Auslöser haben",
    meaning: "يمكن أن يكون لها محفزات مختلفة",
    keywords: ["unterschiedliche = مختلفة", "Auslöser = محفزات"],
    simplified: "انزلاقات الغضاريف قد تنتج عن أسباب عديدة",
    imagine: "🔍🦴 قائمة بأسباب مختلفة لانزلاق الغضروف"
};

HELP_DATA["lesen2_exam31_q4"] = {
    text: "können durch verschiedene Erkrankungen hervorgerufen werden",
    meaning: "يمكن أن تنتج عن أمراض مختلفة",
    keywords: ["Erkrankungen = أمراض", "hervorgerufen = منتجة"],
    simplified: "تآكل العظام قد ينتج عن مرض هشاشة العظام",
    imagine: "🦴🦠 هيكل عظمي به ثقوب بسبب المرض"
};

HELP_DATA["lesen2_exam31_q5"] = {
    text: "sollte nicht zu lange mit dem Arztbesuch warten",
    meaning: "لا يجب الانتظار طويلاً قبل زيارة الطبيب",
    keywords: ["Arztbesuch = زيارة طبيب", "nicht zu lange = ليس طويلاً", "warten = انتظار"],
    simplified: "من يعاني من آلام ظهر متكررة يجب أن يذهب للطبيب",
    imagine: "🏥🦴 رجل يمسك ظهره ويدخل عيادة الطبيب"
};

// ============================================
// Exam 32 (exam32.json) - Die ganze Welt auf dem eigenen PC
// ============================================

HELP_DATA["lesen2_exam32_q1"] = {
    text: "von einigen Ländern ein genaueres Abbild bietet als früher",
    meaning: "تقدم صورة أكثر دقة لبعض الدول أكثر من السابق",
    keywords: ["genaueres Abbild = صورة أكثر دقة", "bietet = تقدم"],
    simplified: "النسخة الجديدة من غوغل إيرث تُظهر دولاً بدقة أعلى",
    imagine: "🌍🔍 خريطة العالم بتكبير عالٍ وتفاصيل أكثر"
};

HELP_DATA["lesen2_exam32_q2"] = {
    text: "sind alle nicht ganz neu",
    meaning: "كلها ليست جديدة تماماً",
    keywords: ["nicht ganz neu = ليست جديدة تماماً"],
    simplified: "صور غوغل إيرث قديمة بعدة شهور",
    imagine: "📸🗓️ صورة قديمة على شاشة الكمبيوتر"
};

HELP_DATA["lesen2_exam32_q3"] = {
    text: "Menschen aus vielen Berufsgruppen",
    meaning: "أشخاص من مجموعات مهنية عديدة",
    keywords: ["Berufsgruppen = مجموعات مهنية", "vielen = عديدة"],
    simplified: "اليوم كثير من الناس من مختلف المهن يستخدمون غوغل إيرث",
    imagine: "👨‍⚕️👩‍💻👨‍🏫 أشخاص من مهن مختلفة أمام شاشة غوغل إيرث"
};

HELP_DATA["lesen2_exam32_q4"] = {
    text: "persönliche Daten öffentlich verfügbar sind",
    meaning: "البيانات الشخصية متاحة للعموم",
    keywords: ["persönliche Daten = بيانات شخصية", "öffentlich = عموم", "verfügbar = متاحة"],
    simplified: "غوغل إيرث تعرض عناوين مجرمين وأسماءهم",
    imagine: "🔓👤 اسم وصورة شخص على خريطة علنية"
};

HELP_DATA["lesen2_exam32_q5"] = {
    text: "man sich damit orientieren kann",
    meaning: "يمكن للمرء أن يتوجه بواسطتها",
    keywords: ["orientieren = يتوجه", "kann = يمكن"],
    simplified: "غوغل إيرث مفيدة جداً للتخطيط للرحلات والتنقل",
    imagine: "🧭🗺️ شخص يخطط لرحلة باستخدام غوغل إيرث"
};

// ============================================
// Exam 33 (exam33.json) - Die deutschen und ihre Ernährung
// ============================================

HELP_DATA["lesen2_exam33_q1"] = {
    text: "gesund sein sollte",
    meaning: "يجب أن يكون صحياً",
    keywords: ["gesund = صحي", "sollte = يجب"],
    simplified: "معظم الألمان يفضلون الطعام الصحي على اللذيذ",
    imagine: "🥗✅ شخص يختار سلطة خضراء على برغر"
};

HELP_DATA["lesen2_exam33_q2"] = {
    text: "war früher wichtiger",
    meaning: "كان أكثر أهمية في السابق",
    keywords: ["früher = سابقاً", "wichtiger = أكثر أهمية"],
    simplified: "الاهتمام بالسعرات الحرارية كان أهم في الماضي",
    imagine: "📉🍰 رسم بياني ينخفض: الاهتمام بالسعرات قلت"
};

HELP_DATA["lesen2_exam33_q3"] = {
    text: "zu viele ungesunde Lebensmittel auf dem Markt sind",
    meaning: "يوجد الكثير من الأطعمة غير الصحية في السوق",
    keywords: ["ungesunde Lebensmittel = أطعمة غير صحية", "Markt = سوق"],
    simplified: "الخبراء يقولون إن المشكلة ليست في وعي الناس بل في توفر الأطعمة غير الصحية",
    imagine: "🛒🍟🍫🍔 متجر مليء بالأطعمة غير الصحية"
};

HELP_DATA["lesen2_exam33_q4"] = {
    text: "passiert bei älteren Menschen fast nie",
    meaning: "لا يحدث عند كبار السن تقريباً أبداً",
    keywords: ["älteren Menschen = كبار السن", "fast nie = تقريباً أبداً"],
    simplified: "كبار السن لا يرمون الطعام أبداً تقريباً",
    imagine: "👴🍝 جد يمسك طبقاً ويأكل كل حبة"
};

HELP_DATA["lesen2_exam33_q5"] = {
    text: "ist nicht in allen Altersgruppen gleich",
    meaning: "ليس متساوياً في كل الفئات العمرية",
    keywords: ["Altersgruppen = فئات عمرية", "nicht gleich = غير متساو"],
    simplified: "استهلاك اللحوم يختلف بين جيل الشباب وكبار السن",
    imagine: "🥩👦👴 شاب يأكل برغراً وجد يأكل خضروات"
};

// ============================================
// Exam 34 (exam34.json) - Weniger Euro-Blüten in Deutschland
// ============================================

HELP_DATA["lesen2_exam34_q1"] = {
    text: "gefälschten 50-Euro-Scheine ist in Deutschland besonders hoch",
    meaning: "تزوير أوراق 50 يورو مرتفع بشكل خاص في ألمانيا",
    keywords: ["gefälschten = مزورة", "50-Euro-Scheine = أوراق 50 يورو", "besonders hoch = مرتفع بشكل خاص"],
    simplified: "فئة 50 يورو هي الأكثر تزويراً في ألمانيا",
    imagine: "💶🔍 ورقة 50 يورو مع علامة استفهام"
};

HELP_DATA["lesen2_exam34_q2"] = {
    text: "die Ermittler gründlicher suchen",
    meaning: "المحققون يبحثون بشكل أكثر شمولاً",
    keywords: ["Ermittler = محققون", "gründlicher = بشكل أكثر شمولاً", "suchen = يبحثون"],
    simplified: "زيادة اكتشاف العملات المزيفة بسبب تحسن عمل الشرطة",
    imagine: "👮‍♂️🔎 شرطي يفحص عملة بعدسة مكبرة"
};

HELP_DATA["lesen2_exam34_q3"] = {
    text: "von Kassierern in Banken und Läden entdeckt",
    meaning: "يكتشفها الصرافون في البنوك والمتاجر",
    keywords: ["Kassierern = صرافون", "Banken = بنوك", "entdeckt = مكتشفة"],
    simplified: "معظم الأوراق المزيفة يكتشفها الصرافون وليس الناس العاديون",
    imagine: "💶👩‍💼 صرافة تفحص ورقة نقدية بعناية"
};

HELP_DATA["lesen2_exam34_q4"] = {
    text: "die Wahrscheinlichkeit sehr niedrig ist",
    meaning: "الاحتمال منخفض جداً",
    keywords: ["Wahrscheinlichkeit = احتمال", "niedrig = منخفض"],
    simplified: "احتمال أن تصادف نقوداً مزيفة قليل جداً",
    imagine: "🎲1️⃣ حجر نرد يظهر الرقم 1 فقط"
};

HELP_DATA["lesen2_exam34_q5"] = {
    text: "beim Druck Farben verwendet werden, die man nicht kopieren kann",
    meaning: "في الطباعة تُستخدم ألوان لا يمكن نسخها",
    keywords: ["Druck = طباعة", "Farben = ألوان", "nicht kopieren = لا يمكن نسخ"],
    simplified: "تقنيات جديدة في طباعة اليورو تجعل التزوير أصعب",
    imagine: "🖨️🚫 طابعة وفوقها علامة X حمراء"
};

// ============================================
// Exam 35 (exam35.json) - Nachtzug
// ============================================

HELP_DATA["lesen2_exam35_q1"] = {
    text: "man dort leicht mit Mitreisenden ins Gespräch kommt",
    meaning: "يمكن للمرء التحدث بسهولة مع المسافرين الآخرين",
    keywords: ["Mitreisenden = مسافرين آخرين", "ins Gespräch kommt = يبدأ محادثة"],
    simplified: "مارا تحب القطار الليلي لأنها تتعرف على ناس جدد",
    imagine: "🚂💬 أشخاص يتحدثون ويضحكون في عربة قطار ليلي"
};

HELP_DATA["lesen2_exam35_q2"] = {
    text: "verzichteten aus wirtschaftlichen Gründen zeitweise auf eigene Nachtzüge",
    meaning: "تخلوا لأسباب اقتصادية مؤقتاً عن قطاراتهم الليلية",
    keywords: ["wirtschaftlichen Gründen = أسباب اقتصادية", "zeitweise = مؤقتاً", "verzichteten = تخلوا"],
    simplified: "شركة السكك الحديدية الألمانية تخلت عن قطاراتها الليلية بسبب الخسائر",
    imagine: "📉🚂 رسم بياني ينخفض وقطار يقف"
};

HELP_DATA["lesen2_exam35_q3"] = {
    text: "hat den jüngsten Sohn der Familie begeistert",
    meaning: "ألهبت حماسة الابن الأصغر للعائلة",
    keywords: ["jüngsten Sohn = الابن الأصغر", "begeistert = ألهبت حماسة"],
    simplified: "القطار الليلي أثار حماسة ابن عائلة فينترفيلد الصغير",
    imagine: "👦🚂🎉 ولد صغير يقفز فرحاً بجانب القطار"
};

HELP_DATA["lesen2_exam35_q4"] = {
    text: "er mit dem Flugzeug deutlich Zeit spart",
    meaning: "يختصر الكثير من الوقت بالطائرة",
    keywords: ["Zeit spart = يختصر وقتاً", "deutlich = الكثير", "Flugzeug = طائرة"],
    simplified: "يوناس فالك يفضل الطائرة على القطار لتوفير الوقت",
    imagine: "✈️⏰ طائرة وساعة تدور بسرعة"
};

HELP_DATA["lesen2_exam35_q5"] = {
    text: "Fliegen schneller und auf vielen Strecken sogar günstiger ist",
    meaning: "الطيران أسرع وحتى أرخص على العديد من المسارات",
    keywords: ["schneller = أسرع", "günstiger = أرخص", "Strecken = مسارات"],
    simplified: "الطائرة أسرع وأرخص أحياناً من القطار",
    imagine: "✈️💰 طائرة ونقود وعلامة توفير"
};

// ============================================
// Exam 36 (exam36.json) - Nachtzug (معدل)
// ============================================

HELP_DATA["lesen2_exam36_q1"] = {
    text: "man dort leicht mit anderen Fahrgästen ins Gespräch kommt",
    meaning: "يمكن للمرء التحدث بسهولة مع الركاب الآخرين",
    keywords: ["Fahrgästen = ركاب", "ins Gespräch kommt = يبدأ محادثة"],
    simplified: "صوفيا تحب القطار الليلي للحديث مع المسافرين",
    imagine: "🚂💬 ركاب قطار ليلي يتحدثون معاً"
};

HELP_DATA["lesen2_exam36_q2"] = {
    text: "verzichtet aus ökonomischen Gründen auf eigene Nachtzüge",
    meaning: "تتخلى لأسباب اقتصادية عن قطاراتها الليلية الخاصة",
    keywords: ["ökonomischen Gründen = أسباب اقتصادية", "verzichtet = تتخلى", "eigene Nachtzüge = قطارات ليلية خاصة"],
    simplified: "شركة السكك الحديدية الألمانية تخلت عن القطارات الليلية لخسائرها",
    imagine: "📉🚂 رسم بياني ينخفض وقطار يتوقف"
};

HELP_DATA["lesen2_exam36_q3"] = {
    text: "hat Tom Schneiders Sohn begeistert",
    meaning: "ألهبت حماسة توم شنايدر ابنه",
    keywords: ["Sohn = ابن", "begeistert = ألهبت حماسة"],
    simplified: "القطار الليلي أثار حماسة ابن توم شنايدر",
    imagine: "👦🚂🎉 ولد صغير يقفز فرحاً بجانب القطار"
};

HELP_DATA["lesen2_exam36_q4"] = {
    text: "er mit dem Flugzeug Zeit spart",
    meaning: "يختصر الوقت بالطائرة",
    keywords: ["Zeit spart = يختصر وقتاً", "Flugzeug = طائرة"],
    simplified: "فلوريان كيرش يفضل الطائرة على القطار",
    imagine: "✈️⏰ طائرة وساعة"
};

HELP_DATA["lesen2_exam36_q5"] = {
    text: "den Fahrgästen viel Privatsphäre bieten",
    meaning: "توفير خصوصية كبيرة للركاب",
    keywords: ["Fahrgästen = ركاب", "Privatsphäre = خصوصية", "bieten = توفير"],
    simplified: "شركة فرنسية ناشئة تصمم قطارات ليلية مع خصوصية أكبر",
    imagine: "🚂🔒 عربة قطار بستائر ومقاعد مغلقة"
};

// ============================================
// Exam 37 (exam37.json) - Wie zwei US-Teenager Millionäre wurden
// ============================================

HELP_DATA["lesen2_exam37_q1"] = {
    text: "durch eine einfache Idee und mit der finanziellen Hilfe ihres Bruders reich geworden",
    meaning: "أصبحوا أغنياء بفضل فكرة بسيطة وبمساعدة مالية من أخيهم",
    keywords: ["einfache Idee = فكرة بسيطة", "finanziellen Hilfe = مساعدة مالية", "Bruders = أخيهم", "reich geworden = أصبحوا أغنياء"],
    simplified: "كاترين وديفيد أصبحا مليونيرين بفضل فكرة وأخيهما جيفري",
    imagine: "💡💰 فكرة مصباح وأخ يضع نقوداً في يديهما"
};

HELP_DATA["lesen2_exam37_q2"] = {
    text: "sowohl in den USA als auch in Deutschland erfolgreich",
    meaning: "ناجحة في كل من الولايات المتحدة وألمانيا",
    keywords: ["USA = الولايات المتحدة", "Deutschland = ألمانيا", "erfolgreich = ناجحة"],
    simplified: "مواقع التواصل الاجتماعي ناجحة في أمريكا وألمانيا",
    imagine: "🇺🇸📱🇩🇪 شاشة هاتف وعلم أمريكا وألمانيا"
};

HELP_DATA["lesen2_exam37_q3"] = {
    text: "alle für die Schüler wichtigen Sachen auf dieser Seite genauso passieren, als wäre es in der eigenen Schule",
    meaning: "جميع الأشياء المهمة للطلاب تحدث على هذا الموقع تماماً كما لو كانت في المدرسة نفسها",
    keywords: ["Schüler = طلاب", "Seite = موقع", "eigenen Schule = المدرسة نفسها"],
    simplified: "موقع مايريربوك يعيد أجواء المدرسة الثانوية على الإنترنت",
    imagine: "🏫💻 مدرسة افتراضية على شاشة الكمبيوتر"
};

HELP_DATA["lesen2_exam37_q4"] = {
    text: "um ihre Freizeit virtuell verbringen zu können",
    meaning: "لقضاء وقت فراغهم بشكل افتراضي",
    keywords: ["Freizeit = وقت فراغ", "virtuell = افتراضياً", "verbringen = قضاء"],
    simplified: "الشباب الأمريكي يستخدمون الإنترنت لقضاء وقت فراغهم",
    imagine: "🛋️📱 مراهق جالس على أريكة أمام هاتفه"
};

HELP_DATA["lesen2_exam37_q5"] = {
    text: "noch immer an ihrer Seite angemeldet",
    meaning: "لا تزال مسجلة الدخول إلى موقعها",
    keywords: ["Seite = موقع", "angemeldet = مسجلة دخول"],
    simplified: "كاترين لا تزال عضوة في مايريربوك رغم أنها تخرجت",
    imagine: "👩‍🎓💻 خريجة تبتسم أمام شاشة الكمبيوتر"
};

// ============================================
// Exam 38 (exam38.json) - (ملف غير موجود في ملفاتك، سأتخطاه)
// ============================================

// ============================================
// sprach1.js - جميع شروحات Sprachbausteine Teil 1
// ============================================


// ============================================
// Exam 1 (exam1.json) - Filme - Fernsehprogramme
// ============================================

// a → 6: Geschichte des geteilten Berlins
HELP_DATA["lesen3_exam1_a"] = {
    text: "Ullrich Kasten und Hans-Hermann Hertle schildern - Eine Bekannte interessiert sich für die Geschichte des bis 1989 geteilten Berlins.",
    meaning: "أولريش كاستن وهانز-هيرمان هيرتل يصفان - إحدى المعارف مهتمة بتاريخ برلين المقسمة حتى عام 1989.",
    keywords: ["schildern = يصفان", "geteilten Berlins = برلين المقسمة"],
    imagine: "🧠🚧 امرأة تشاهد فيلماً بالأبيض والأسود عن جدار برلين وتدمع عيناها."
};

// b → 2: Musiksendung mit Klaviermusik
HELP_DATA["lesen3_exam1_b"] = {
    text: "Ob Klassik, Rock'n'Roll oder Jazz - Sie suchen eine Musiksendung. Sie mögen besonders Klaviermusik.",
    meaning: "سواء كلاسيكي أو روك أند رول أو جاز - أنت تبحث عن برنامج موسيقي. أنت تحب موسيقى البيانو بشكل خاص.",
    keywords: ["Klassik = كلاسيكي", "Musiksendung = برنامج موسيقي"],
    imagine: "🧠🎹 شخص يغير القنوات فيتوقف عند عازف بيانو ماهر."
};

// d → 7: spannende und spaßige Agentenfilme
HELP_DATA["lesen3_exam1_d"] = {
    text: "Aus Sorge um die nationale Sicherheit - Sie sehen gern spannende, aber auch spaßige Agentenfilme.",
    meaning: "خوفاً على الأمن القومي - أنت تحب مشاهدة أفلام التجسس المثيرة والممتعة.",
    keywords: ["Sicherheit = أمن", "Agentenfilme = أفلام تجسس"],
    imagine: "🧠🕵️ عبقري مجنون وعصابات تلاحقه وطبيب نفسي غريب."
};

// e → 5: Familienkomödien mit frechen Kindern
HELP_DATA["lesen3_exam1_e"] = {
    text: "Er schreit wie am Spieß - Sie mögen Familienkomödien, besonders mit frechen Kindern.",
    meaning: "هو يصرخ بصوت عالٍ - أنت تحب الكوميديا العائلية، خاصة مع الأطفال الشقاة.",
    keywords: ["schreit = يصرخ", "Familienkomödien = كوميديا عائلية"],
    imagine: "🧠👶 طفل شقي يضع القطة في كيس قمامة وأمه تضحك."
};

// f → 8: Großstadtjugendliche am Rand der Gesellschaft
HELP_DATA["lesen3_exam1_f"] = {
    text: "Hier in Berlin bei meinen Freunden - Sie würden gern etwas über Großstadtjugendliche erfahren, die am Rand der Gesellschaft leben.",
    meaning: "هنا في برلين عند أصدقائي - ترغب في معرفة شيء عن شباب المدن الكبرى الذين يعيشون على هامش المجتمع.",
    keywords: ["Berlin = برلين", "Großstadtjugendliche = شباب المدن الكبرى"],
    imagine: "🧠🏚️ مراهق ينام في محطة مترو ويسأل المارة عن المال."
};

// g → 9: bergsteigen und Risiken
HELP_DATA["lesen3_exam1_g"] = {
    text: "Mit Sandalen und T-Shirt - Sie möchten im nächsten Urlaub bergsteigen und sich über die Risiken informieren.",
    meaning: "بالصنادل والتي شيرت - ترغب في تسلق الجبال في الإجازة القادمة وتريد التعرف على المخاطر.",
    keywords: ["Sandalen = صنادل", "bergsteigen = يتسلق الجبال"],
    imagine: "🧠🏔️ رجل يقف على قمة جبل والرياح تعصف به فيسقط."
};

// h → 3: Action und Spaß
HELP_DATA["lesen3_exam1_h"] = {
    text: "'Schwere Jungs' bildet den Auftakt - Sie mögen Filme mit viel Action und viel Spaß.",
    meaning: "'شباب ثقال' تفتتح - أنت تحب الأفلام التي تحتوي على الكثير من الأكشن والكثير من المرح.",
    keywords: ["Action = أكشن", "Spaß = مرح"],
    imagine: "🧠💥 لصان يهربان من السجن ويتنكران كرهبان ويضربان الجميع."
};

// i → 1: Wintersportveranstaltungen
HELP_DATA["lesen3_exam1_i"] = {
    text: "Nach den Weltcup-Siegen - Bekannte interessieren sich für Wintersportveranstaltungen.",
    meaning: "بعد انتصارات كأس العالم - معارف مهتمون بفعاليات الرياضات الشتوية.",
    keywords: ["Weltcup = كأس العالم", "Wintersport = رياضة شتوية"],
    imagine: "🧠⛷️ شاب يقفز من ارتفاع 120 متراً والجمهور يصفق."
};

// l → 0: Film nach Werk eines Schriftstellers
HELP_DATA["lesen3_exam1_l"] = {
    text: "Man sollte meinen, Schauspieler Hendrik Höfgen - Ein Bekannter möchte einen Film sehen, der nach dem Werk eines Schriftstellers gedreht wurde.",
    meaning: "قد يعتقد المرء أن الممثل هندريك هوفجن - أحد المعارف يريد مشاهدة فيلم تم إنتاجه بناءً على عمل كاتب.",
    keywords: ["Schauspieler = ممثل", "Schriftstellers = كاتب"],
    imagine: "🧠🎭 ممثل يبيع روحه للنازيين من أجل السلطة."
};

// ============================================
// Exam 2 (exam2.json) - Filme - Fernsehprogramme (معدل)
// ============================================

// a → 6: informative Beiträge zur neueren Geschichte
HELP_DATA["lesen3_exam2_a"] = {
    text: "Ullrich Kasten und Hans-Hermann Hertle schildern - Eine Bekannte interessiert sich für informative Beiträge zur neueren Geschichte.",
    meaning: "أولريش كاستن وهانز-هيرمان هيرتل يصفان - إحدى المعارف مهتمة بالمساهمات الإعلامية عن التاريخ المعاصر.",
    keywords: ["schildern = يصفان", "neueren Geschichte = التاريخ المعاصر"],
    imagine: "🧠📺 امرأة تسجل فيلماً وثائقياً عن تاريخ ألمانيا."
};

// b → 2: Musiksendung mit Klaviermusik
HELP_DATA["lesen3_exam2_b"] = {
    text: "Ob Klassik, Rock'n'Roll oder Jazz - Sie suchen eine abwechslungsreiche Musiksendung mit Klaviermusik.",
    meaning: "سواء كلاسيكي أو روك أند رول أو جاز - أنت تبحث عن برنامج موسيقي متنوع مع موسيقى البيانو.",
    keywords: ["Klassik = كلاسيكي", "Musiksendung = برنامج موسيقي"],
    imagine: "🧠🎹 شخص يبحث عن قناة تعزف موسيقى البيانو."
};

// d → 7: spannende und spaßige Agentenfilme
HELP_DATA["lesen3_exam2_d"] = {
    text: "Aus Sorge um die nationale Sicherheit - Sie sehen gern spannende, aber auch spaßige Agentenfilme.",
    meaning: "خوفاً على الأمن القومي - أنت تحب مشاهدة أفلام التجسس المثيرة والممتعة.",
    keywords: ["Sicherheit = أمن", "Agentenfilme = أفلام تجسس"],
    imagine: "🧠🕵️ رجل يجلس أمام التلفاز يشاهد فيلم تجسس ويضحك."
};

// e → 5: Familienkomödien mit frechen Kindern
HELP_DATA["lesen3_exam2_e"] = {
    text: "Er schreit wie am Spieß - Sie mögen Familienkomödien, besonders mit frechen Kindern.",
    meaning: "هو يصرخ بصوت عالٍ - أنت تحب الكوميديا العائلية، خاصة مع الأطفال الشقاة.",
    keywords: ["schreit = يصرخ", "Familienkomödien = كوميديا عائلية"],
    imagine: "🧠👶 أب يحاول تهدئة طفله المشاغب والجميع يضحك."
};

// f → 8: Großstadtjugendliche am Rand der Gesellschaft
HELP_DATA["lesen3_exam2_f"] = {
    text: "Hier in Berlin bei meinen Freunden - Sie würden gern etwas über Großstadtjugendliche erfahren, die am Rand der Gesellschaft leben.",
    meaning: "هنا في برلين عند أصدقائي - ترغب في معرفة شيء عن شباب المدن الكبرى الذين يعيشون على هامش المجتمع.",
    keywords: ["Berlin = برلين", "Großstadtjugendliche = شباب المدن الكبرى"],
    imagine: "🧠🏙️ شاب بلا مأوى يجلس أمام متجر ويطلب المال."
};

// g → 9: bergsteigen und Risiken
HELP_DATA["lesen3_exam2_g"] = {
    text: "Mit Sandalen und T-Shirt - Sie möchten im nächsten Urlaub bergsteigen und sich über die Risiken informieren.",
    meaning: "بالصنادل والتي شيرت - ترغب في تسلق الجبال في الإجازة القادمة وتريد التعرف على المخاطر.",
    keywords: ["Sandalen = صنادل", "bergsteigen = يتسلق الجبال"],
    imagine: "🧠🏔️ رجل يتدلى من جرف والثلوج تتساقط حوله."
};

// h → 3: Action und Spaß
HELP_DATA["lesen3_exam2_h"] = {
    text: "'Schwere Jungs' bildet den Auftakt - Sie mögen Filme mit viel Action und viel Spaß.",
    meaning: "'شباب ثقال' تفتتح - أنت تحب الأفلام التي تحتوي على الكثير من الأكشن والكثير من المرح.",
    keywords: ["Action = أكشن", "Spaß = مرح"],
    imagine: "🧠💥 شخصان يتشاجران ثم يصبحان صديقين في النهاية."
};

// i → 1: sportliche Wettkämpfe
HELP_DATA["lesen3_exam2_i"] = {
    text: "Nach den Weltcup-Siegen - Ihre Bekannten verfolgen gern sportliche Wettkämpfe.",
    meaning: "بعد انتصارات كأس العالم - معارفك يتابعون بحماس المنافسات الرياضية.",
    keywords: ["Weltcup = كأس العالم", "sportliche Wettkämpfe = منافسات رياضية"],
    imagine: "🧠🏆 أصدقاء مجتمعون أمام التلفاز يصفقون للفريق الفائز."
};

// l → 0: Film nach Werk eines Schriftstellers
HELP_DATA["lesen3_exam2_l"] = {
    text: "Man sollte meinen, Schauspieler Hendrik Höfgen - Ein Bekannter möchte einen Film sehen, der nach dem Werk eines Schriftstellers gedreht wurde.",
    meaning: "قد يعتقد المرء أن الممثل هندريك هوفجن - أحد المعارف يريد مشاهدة فيلم تم إنتاجه بناءً على عمل كاتب.",
    keywords: ["Schauspieler = ممثل", "Schriftstellers = كاتب"],
    imagine: "🧠🎭 رجل يقرأ عنوان الفيلم ويقول هذا مقتبس من رواية مشهورة."
};

// ============================================
// Exam 3 (exam3.json) - Im Katalog eines Buchversands
// ============================================

// a → 5: äußeres Erscheinungsbild optimieren
HELP_DATA["lesen3_exam3_a"] = {
    text: "Die Nachfrage nach individueller Farb- und Stilberatung - Eine Bekannte möchte ihr äußeres Erscheinungsbild optimieren.",
    meaning: "الطلب على استشارات الألوان والأنماط الفردية - إحدى المعارف تريد تحسين مظهرها الخارجي.",
    keywords: ["Farbberatung = استشارة ألوان", "Erscheinungsbild = المظهر"],
    imagine: "🧠💄 امرأة تقف أمام المرآة وتسأل أي لون يناسبني؟"
};

// b → 3: besser und systematischer lernen
HELP_DATA["lesen3_exam3_b"] = {
    text: "Die meisten Menschen kennen keine Strategien - Eine Studentin sucht Informationen, wie sie besser und systematischer lernen kann.",
    meaning: "معظم الناس لا يعرفون استراتيجيات - طالبة تبحث عن معلومات لتتعلم بشكل أفضل وأكثر منهجية.",
    keywords: ["Strategien = استراتيجيات", "systematischer lernen = تتعلم بشكل منهجي"],
    imagine: "🧠📚 طالبة جالسة في المكتبة وكتاب عن كيفية الدراسة أمامها."
};

// c → 7: gesellschaftliche Normen und Verhaltensregeln
HELP_DATA["lesen3_exam3_c"] = {
    text: "Dieses erstmals 1788 erschienene Buch - Ein Bekannter schreibt an einer Hausarbeit über gesellschaftliche Normen und Verhaltensregeln verschiedener Jahrhunderte.",
    meaning: "هذا الكتاب الذي صدر أول مرة عام 1788 - أحد المعارف يكتب بحثاً عن الأعراف الاجتماعية وقواعد السلوك عبر القرون.",
    keywords: ["erschienene Buch = الكتاب الصادر", "Verhaltensregeln = قواعد سلوك"],
    imagine: "🧠📜 شاب يقرأ كتاباً قديماً جداً ويأخذ ملاحظات لبحثه."
};

// e → 9: Angst vor Publikum zu sprechen
HELP_DATA["lesen3_exam3_e"] = {
    text: "Jeder Mensch kann seine kommunikativen Möglichkeiten entdecken - Eine Bekannte ist sehr verunsichert, weil sie auf Konferenzen immer wieder Angst hat, frei zu sprechen.",
    meaning: "كل إنسان يمكنه اكتشاف قدراته التواصلية - إحدى المعارف تشعر بالقلق لأنها تخاف من التحدث بحرية في المؤتمرات.",
    keywords: ["kommunikativen Möglichkeiten = قدرات تواصلية", "Angst = خوف"],
    imagine: "🧠🎤 امرأة تقف خلف المنصة ويديها ترتجفان خوفاً."
};

// h → 4: Botschaften durch Gestik und Mimik
HELP_DATA["lesen3_exam3_h"] = {
    text: "Der Körper lügt nicht, Gesten und Gebärden - Ein Bekannter möchte wissen, welche Botschaften durch Gestik und Mimik transportiert werden.",
    meaning: "الجسد لا يكذب، الإيماءات والحركات - أحد المعارف يريد معرفة الرسائل التي تنقلها الإيماءات وتعبيرات الوجه.",
    keywords: ["Gesten = إيماءات", "Mimik = تعابير وجه"],
    imagine: "🧠🙌 رجل جالس في مقهى يتأمل حركات أيدي الناس."
};

// i → 6: unsicher bei Vorstellungsgespräch
HELP_DATA["lesen3_exam3_i"] = {
    text: "Rolph Barth 'Basiswissen: Bewerbungstraining' - Ein Bekannter ist sich noch unsicher, wie er sich bei einem Vorstellungsgespräch am besten präsentiert.",
    meaning: "رولف بارث 'المعرفة الأساسية: تدريب التقديم' - أحد المعارف لا يزال غير متأكد كيف يقدم نفسه بشكل جيد في مقابلة عمل.",
    keywords: ["Bewerbungstraining = تدريب تقديم", "Vorstellungsgespräch = مقابلة عمل"],
    imagine: "🧠💼 شاب يجلس أمام المرآة يتمرن على كلماته لمقابلة العمل."
};

// l → 1: unter Stress und Zeitdruck
HELP_DATA["lesen3_exam3_l"] = {
    text: "Viele Menschen wissen nicht mehr, wo Ihnen der Kopf steht - Ein befreundetes Ehepaar steht andauernd unter Stress und möchte wieder mehr Zeit für sich und andere haben.",
    meaning: "كثير من الناس لا يعرفون أين رؤوسهم - زوجان صديقان يعيشان تحت ضغط مستمر ويريدان المزيد من الوقت لأنفسهما وللآخرين.",
    keywords: ["Stress = ضغط", "Zeit = وقت"],
    imagine: "🧠⏰ رجل وامرأة ينظران إلى الساعة ووجوههما مرهقة."
};

// ============================================
// Exam 4 (exam4.json) - kein Zeit
// ============================================

// a → 4: altersgerechtes Theaterstück für 12-jährige Tochter
HELP_DATA["lesen3_exam4_a"] = {
    text: "In Pollekes elfjährigem Leben scheint im Augenblick etwas falsch zu laufen - Sie möchten mit Ihrer zwölfjährigen Tochter ein altersgerechtes Theaterstück sehen.",
    meaning: "في حياة بوليكي البالغة من العمر 11 عاماً - ترغب في مشاهدة مسرحية مناسبة لعمر ابنتك ذات الـ 12 سنة.",
    keywords: ["elfjährigem = 11 عاماً", "altersgerechtes = مناسب للعمر"],
    imagine: "🧠🎭 أم وابنتها جالستان في المسرح وتضحكان معاً."
};

// b → 5: Kinderfilm für kleinen Neffen
HELP_DATA["lesen3_exam4_b"] = {
    text: "Rasmus und der Landstreicher nach dem Kinderbuch von Astrid Lindgren - Sie möchten zusammen mit Ihrem kleinen Neffen einen Kinderfilm sehen.",
    meaning: "راسموس والمتشرد حسب كتاب أستريد ليندغرين للأطفال - ترغب في مشاهدة فيلم أطفال مع ابن أختك الصغير.",
    keywords: ["Kinderbuch = كتاب أطفال", "Kinderfilm = فيلم أطفال"],
    imagine: "🧠🎬 خالة وابن أختها الصغير جالسان أمام التلفاز يضحكان."
};

// e → 0: Biographien großer Musiker
HELP_DATA["lesen3_exam4_e"] = {
    text: "Beethovens Bonn - Ihre Schwester interessiert sich für die Biographien großer Musiker.",
    meaning: "بون بيتهوفن - أختك مهتمة بالسير الذاتية للموسيقيين العظماء.",
    keywords: ["Beethovens = بيتهوفن", "Biographien = سير ذاتية"],
    imagine: "🧠🎵 امرأة تقرأ كتاباً عن حياة بيتهوفن والدموع في عينيها."
};

// f → 6: Stadtbesichtigung mit etwas Sport
HELP_DATA["lesen3_exam4_f"] = {
    text: "Radtour am Rhein - Sie wollen eine Stadtbesichtigung mit ein wenig Sport verbinden.",
    meaning: "جولة بالدراجة على نهر الراين - تريد ربط زيارة المدينة بقليل من الرياضة.",
    keywords: ["Radtour = جولة دراجة", "Sport = رياضة"],
    imagine: "🧠🚲 شخص يركب دراجة وينظر إلى المباني القديمة."
};

// h → 8: andere lustige Seite von Weihnachten
HELP_DATA["lesen3_exam4_h"] = {
    text: "Drei Flöhe und das Jesuskind - Sie wollen mit Ihren Kindern eine etwas andere, eher lustige Seite von Weihnachten erleben.",
    meaning: "ثلاثة براغيث وطفل يسوع - تريد أن تعيش مع أطفالك جانباً مختلفاً ومضحكاً من عيد الميلاد.",
    keywords: ["Flöhe = براغيث", "lustige Seite = جانب مضحك"],
    imagine: "🧠🎄 عائلة جالسة حول شجرة عيد الميلاد وكلهم يضحكون."
};

// i → 3: alte und neue Weihnachtslieder hören
HELP_DATA["lesen3_exam4_i"] = {
    text: "Weihnachtsshow 'Stille Nacht' trifft 'Last Christmas' - Sie möchten alte und neue Weihnachtslieder hören.",
    meaning: "عرض عيد الميلاد 'ليلة صامتة' يقابل 'الكريسماس الماضي' - تريد سماع أغاني عيد الميلاد القديمة والجديدة.",
    keywords: ["Weihnachtsshow = عرض عيد ميلاد", "Weihnachtslieder = أغاني عيد ميلاد"],
    imagine: "🧠🎄 شخص يجلس في قاعة حفلات ويغني مع الفرقة."
};

// j → 1: Auftritte von herausragenden Musikern
HELP_DATA["lesen3_exam4_j"] = {
    text: "Jazz vom Feinsten - Sie lieben Auftritte von herausragenden Musikern.",
    meaning: "جاز من الدرجة الأولى - أنت تحب عروض الموسيقيين المتميزين.",
    keywords: ["Jazz = جاز", "Auftritte = عروض"],
    imagine: "🧠🎺 شخص جالس في ملهى ليلي وعازف ترومبيت على المسرح."
};

// k → 9: herzhaft lachen mit Bekannten
HELP_DATA["lesen3_exam4_k"] = {
    text: "10 Jahre FÜR DIE KATZ - Sie wollen mit Bekannten ausgehen um mal wieder herzhaft lachen.",
    meaning: "10 سنوات 'من أجل القطة' - تريد الخروج مع معارفك لكي تضحك بحرارة مرة أخرى.",
    keywords: ["Jahre = سنوات", "lachen = يضحك"],
    imagine: "🧠😂 مجموعة من الأصدقاء جالسون في كباريه ويضحكون بصوت عالٍ."
};

// l → 2: essen gehen und buntes künstlerisches Programm
HELP_DATA["lesen3_exam4_l"] = {
    text: "Das Weihnachtsvarieté - Sie möchten im Dezember essen gehen und ein buntes, künstlerisches Programm genießen.",
    meaning: "فاريتيه عيد الميلاد - ترغب في تناول الطعام في ديسمبر والاستمتاع ببرنامج فني ملون.",
    keywords: ["Weihnachtsvarieté = فاريتيه عيد الميلاد", "künstlerisches Programm = برنامج فني"],
    imagine: "🧠🎪 شخص جالس في مطعم ويشاهد بهلوانياً على المسرح."
};

// ============================================
// Exam 5 (exam5.json) - kein Zeit (معدل)
// ============================================

// a → 4: altersgerechtes Theaterstück für zwölfjährige Tochter
HELP_DATA["lesen3_exam5_a"] = {
    text: "In Pollekes elfjährigem Leben - Sie möchten mit Ihrer zwölfjährigen Tochter ein altersgerechtes Theaterstück sehen.",
    meaning: "في حياة بوليكي البالغة من العمر 11 عاماً - ترغب في مشاهدة مسرحية مناسبة لعمر ابنتك ذات الـ 12 سنة.",
    keywords: ["elfjährigem = 11 عاماً", "Theaterstück = مسرحية"],
    imagine: "🧠🎭 أم تحتضن ابنتها أثناء مشاهدة مسرحية كوميدية."
};

// b → 5: Kinderfilm für kleinen Sohn
HELP_DATA["lesen3_exam5_b"] = {
    text: "Rasmus und der Landstreicher - Sie suchen einen Kinderfilm für Ihren kleinen Sohn.",
    meaning: "راسموس والمتشرد - تبحث عن فيلم أطفال لابنك الصغير.",
    keywords: ["Landstreicher = متشرد", "Kinderfilm = فيلم أطفال"],
    imagine: "🧠👦 أب جالس مع ابنه يشاهدان فيلماً عن المغامرات."
};

// e → 0: Biographien großer Musiker
HELP_DATA["lesen3_exam5_e"] = {
    text: "Beethovens Bonn - Ihre Schwester interessiert sich für die Biographien großer Musiker.",
    meaning: "بون بيتهوفن - أختك مهتمة بالسير الذاتية للموسيقيين العظماء.",
    keywords: ["Beethovens = بيتهوفن", "großer Musiker = موسيقيين عظماء"],
    imagine: "🧠🎵 امرأة تضع سماعات أذنها وتستمع إلى سيمفونية أثناء القراءة."
};

// f → 6: Bonn zeigen für sportliche Sprachkursteilnehmer
HELP_DATA["lesen3_exam5_f"] = {
    text: "Radtour am Rhein - Sie suchen für sportliche Sprachkursteilnehmer eine Möglichkeit, Bonn zu zeigen.",
    meaning: "جولة بالدراجة على نهر الراين - تبحث عن طريقة لإظهار بون لمشتركي دورة اللغة الرياضيين.",
    keywords: ["Radtour = جولة دراجة", "Bonn = بون"],
    imagine: "🧠🚲 مجموعة من الطلاب الأجانب يركبون الدراجات في شوارع بون."
};

// h → 8: andere lustige Seite von Weihnachten
HELP_DATA["lesen3_exam5_h"] = {
    text: "Drei Flöhe und das Jesuskind - Sie wollen mit Ihren Kindern eine etwas andere, eher lustige Seite von Weihnachten erleben.",
    meaning: "ثلاثة براغيث وطفل يسوع - تريد أن تعيش مع أطفالك جانباً مختلفاً ومضحكاً من عيد الميلاد.",
    keywords: ["Flöhe = براغيث", "lustige Seite = جانب مضحك"],
    imagine: "🧠🎄 أطفال يضحكون وهم يشاهدون مسرحية عن البراغيث الثلاثة."
};

// i → 3: alte und neue Weihnachtslieder hören
HELP_DATA["lesen3_exam5_i"] = {
    text: "Weihnachtsshow 'Stille Nacht' trifft 'Last Christmas' - Sie möchten alte und neue Weihnachtslieder hören.",
    meaning: "عرض عيد الميلاد 'ليلة صامتة' يقابل 'الكريسماس الماضي' - تريد سماع أغاني عيد الميلاد القديمة والجديدة.",
    keywords: ["Weihnachtsshow = عرض عيد ميلاد", "Weihnachtslieder = أغاني عيد ميلاد"],
    imagine: "🧠🎵 عائلة مجتمعة حول المدفأة وهم يغنون مع التلفاز."
};

// j → 1: Auftritte von herausragenden Musikern
HELP_DATA["lesen3_exam5_j"] = {
    text: "Jazz vom Feinsten - Sie lieben Auftritte von herausragenden Musikern.",
    meaning: "جاز من الدرجة الأولى - أنت تحب عروض الموسيقيين المتميزين.",
    keywords: ["Jazz = جاز", "herausragenden Musikern = موسيقيين متميزين"],
    imagine: "🧠🎷 شخص يغلق عينيه ويستمتع بموسيقى الجاز في النادي."
};

// k → 9: herzhaft lachen mit Bekannten
HELP_DATA["lesen3_exam5_k"] = {
    text: "10 Jahre FÜR DIE KATZ - Sie wollen mit Bekannten ausgehen um mal wieder herzhaft lachen.",
    meaning: "10 سنوات 'من أجل القطة' - تريد الخروج مع معارفك لكي تضحك بحرارة مرة أخرى.",
    keywords: ["Jahre = سنوات", "lachen = يضحك"],
    imagine: "🧠😂 أشخاص يجلسون في كباريه ويصفقون لممثل كوميدي."
};

// ============================================
// Exam 6 (exam6.json) - Musik - spielt Gitarre
// ============================================

// b → 2: Stelle im Bereich Messeorganisation
HELP_DATA["lesen3_exam6_b"] = {
    text: "Die Veranstaltungsprofis - Ein Bekannter hat bei der Messe Frankfurt gearbeitet und sucht eine andere Stelle in diesem Bereich.",
    meaning: "محترفو الفعاليات - أحد المعارف عمل في معرض فرانكفورت ويبحث عن وظيفة أخرى في هذا المجال.",
    keywords: ["Veranstaltungsprofis = محترفو الفعاليات", "Messeorganisation = تنظيم معارض"],
    imagine: "🧠🏢 رجل يجلس أمام حاسوبه يبحث عن عمل في مجال المعارض."
};

// c → 1: mehrtägige Musikveranstaltung mit fünf Freunden
HELP_DATA["lesen3_exam6_c"] = {
    text: "Gemeinsam mehr erleben - Ein Kollege möchte mit fünf Freunden eine mehrtägige Musikveranstaltung besuchen.",
    meaning: "نعيش المزيد معاً - أحد الزملاء يريد زيارة فعالية موسيقية لعدة أيام مع خمسة أصدقاء.",
    keywords: ["Gemeinsam = معاً", "Musikveranstaltung = فعالية موسيقية"],
    imagine: "🧠🎸 خمسة أصدقاء يرقصون في مهرجان موسيقي تحت السماء المفتوحة."
};

// d → 7: im Bereich Musik einen Job
HELP_DATA["lesen3_exam6_d"] = {
    text: "Musikfestival Taubertal - Sie mögen Musik und möchten in diesem Bereich einen Job.",
    meaning: "مهرجان تاوبرتال الموسيقي - أنت تحب الموسيقى وتريد وظيفة في هذا المجال.",
    keywords: ["Musikfestival = مهرجان موسيقي", "Job = وظيفة"],
    imagine: "🧠💼 شاب واقف خلف الكواليس في مهرجان موسيقي ويعمل."
};

// e → 3: Eintrittskarten für Musikveranstaltung schenken
HELP_DATA["lesen3_exam6_e"] = {
    text: "Alle Veranstaltungen aus einer Hand - Sie möchten einer Freundin Eintrittskarten für eine Musikveranstaltung schenken.",
    meaning: "جميع الفعاليات من مصدر واحد - تريد إهداء صديقتك تذاكر لحضور فعالية موسيقية.",
    keywords: ["Veranstaltungen = فعاليات", "Eintrittskarten = تذاكر دخول"],
    imagine: "🧠🎁 امرأة تضع تذكرتين في ظرف وتبتسم لصديقتها."
};

// g → 6: Jubiläumsfeier organisieren
HELP_DATA["lesen3_exam6_g"] = {
    text: "Wir organisieren Veranstaltungen - Ein Bekannter muss eine Jubiläumsfeier organisieren und sucht Unterstützung.",
    meaning: "نحن ننظم الفعاليات - أحد المعارف يجب أن ينظم حفل ذكرى سنوية ويبحث عن دعم.",
    keywords: ["organisieren = ينظم", "Jubiläumsfeier = حفل ذكرى سنوية"],
    imagine: "🧠🎈 رجل يتحدث مع منظم حفلات وكلاهما يضعان خططاً."
};

// i → 5: sechsjährige Tochter mit anderen Kindern Musik machen
HELP_DATA["lesen3_exam6_i"] = {
    text: "I Gitarre, Violine & Co. - Die sechsjährige Tochter eines Nachbarn würde gerne mit anderen Kindern Musik machen.",
    meaning: "أيها الغيتار والكمان وشركاه - ابنة الجيران ذات الست سنوات تريد صنع موسيقى مع أطفال آخرين.",
    keywords: ["Gitarre = غيتار", "Musik machen = صنع موسيقى"],
    imagine: "🧠👧 طفلة صغيرة تضرب على الدف وهي تضحك مع أصدقائها."
};

// k → 9: mit Gruppe auftreten
HELP_DATA["lesen3_exam6_k"] = {
    text: "Rhein/Ruhr-Festival - Eine Bekannte ist Musikerin und sucht Möglichkeiten, mit ihrer Gruppe aufzutreten.",
    meaning: "مهرجان الراين/الرور - إحدى المعارف موسيقية وتبحث عن فرص لتقديم عروض مع فرقتها.",
    keywords: ["Festival = مهرجان", "aufzutreten = تقدم عروض"],
    imagine: "🧠🎤 امرأة واقفة على المسرح وفرقتها خلفها والجمهور يصفق."
};

// l → 0: ein weiteres Instrument lernen
HELP_DATA["lesen3_exam6_l"] = {
    text: "Musiker gesucht - Ein Bekannter spielt Gitarre und möchte ein weiteres Instrument lernen.",
    meaning: "مطلوب موسيقيون - أحد المعارف يعزف الغيتار ويريد تعلم آلة موسيقية أخرى.",
    keywords: ["Musiker = موسيقي", "Instrument lernen = يتعلم آلة موسيقية"],
    imagine: "🧠🎸🎹 شاب يجلس أمام بيانو ويحاول تعلم العزف عليه."
};

// ============================================
// Exam 7 (exam7.json) - المرأة الحامل
// ============================================

// a → 0: Vorstellungsgespräch und Schwangerschaft
HELP_DATA["lesen3_exam7_a"] = {
    text: "Bewerber sollten Bewerbungsgespräche nicht dem Zufall überlassen - Ihre Schwägerin erwartet ein Kind. Sie ist nicht sicher, ob Sie in einem Vorstellungsgespräch darauf hinweisen muss.",
    meaning: "يجب على المتقدمين عدم ترك مقابلات العمل للصدفة - زوجة أخيك تنتظر طفلاً. إنها غير متأكدة مما إذا كان يجب أن تذكر ذلك في مقابلة العمل.",
    keywords: ["Bewerbungsgespräche = مقابلات عمل", "Schwangerschaft = حمل"],
    imagine: "🧠🤰 امرأة حامل جالسة أمام لجنة مقابلة وهي تفكر ماذا ستقول."
};

// d → 8: Nervosität bei Referaten
HELP_DATA["lesen3_exam7_d"] = {
    text: "Robert Sonntag, Autor des Buches 'Hilfe, ich muss reden' - Eine Freundin, 20 Jahre alt, muss oft vor Arbeitskollegen Referate halten. Ihr Hauptproblem ist ihre Nervosität.",
    meaning: "روبرت سونتاغ، مؤلف كتاب 'النجدة، يجب أن أتكلم' - صديقة تبلغ من العمر 20 عاماً، تقدم عروضاً أمام زملاء العمل. مشكلتها الرئيسية هي عصبيتها.",
    keywords: ["reden = يتكلم", "Nervosität = عصبية"],
    imagine: "🧠🎤 شابة تقف خلف المنصة ويديها ترتجفان والعرق على جبينها."
};

// f → 5: Rede bei Goldener Hochzeit
HELP_DATA["lesen3_exam7_f"] = {
    text: "Nichts ist auf privaten Feierlichkeiten schlimmer als langatmige Ansprachen - Ein älteres Ehepaar hat Goldene Hochzeit. Die Tochter möchte eine Rede halten und braucht dafür eine Anleitung.",
    meaning: "لا شيء أسوأ في الاحتفالات الخاصة من الخطب الطويلة - زوجان كبيران في السن يحتفلان باليوبيل الذهبي. الابنة تريد إلقاء كلمة وتحتاج إرشاداً لذلك.",
    keywords: ["Ansprachen = خطب", "Rede = كلمة"],
    imagine: "🧠👩 ابنة واقفة أمام والديها وورقة في يدها وهي ترتجف."
};

// g → 2: Ausbildung und später studieren
HELP_DATA["lesen3_exam7_g"] = {
    text: "Ein Auszubildender bei einer Bank oder Sparkasse bekommt 690 Euro - Eine Bekannte möchte eine Ausbildung machen und vielleicht später einmal studieren.",
    meaning: "المتدرب في بنك أو بنك ادخار يحصل على 690 يورو - إحدى المعارف تريد القيام بتدريب مهني وربما الدراسة لاحقاً.",
    keywords: ["Auszubildender = متدرب", "Ausbildung = تدريب مهني"],
    imagine: "🧠📚 امرأة شابة جالسة في قاعة محاضرات وتحلم بالمستقبل."
};

// h → 7: Kleidung für Vorstellungsgespräch
HELP_DATA["lesen3_exam7_h"] = {
    text: "Wer zu seinem Vorstellungsgespräch eingeladen wird, sollte auf korrekte Kleidung achten - Eine Freundin sucht einen Ausbildungsplatz. Sie ist zu einem Bewerbungsgespräch eingeladen und weiß nicht, was sie zu diesem Anlass anziehen soll.",
    meaning: "من يُدعى لمقابلة عمل يجب أن ينتبه للملابس الصحيحة - صديقة تبحث عن مكان تدريب. دُعيت لمقابلة عمل ولا تعرف ماذا ترتدي لهذه المناسبة.",
    keywords: ["Vorstellungsgespräch = مقابلة عمل", "Kleidung = ملابس"],
    imagine: "🧠👗 امرأة تقف أمام المرآة وتغير ملابسها ولا تعرف ماذا تختار."
};

// i → 3: Freund surft zu viel im Internet
HELP_DATA["lesen3_exam7_i"] = {
    text: "Für junge Leute kann das Internet zu einer Droge werden - Ein Freund surft täglich viele Stunden im Internet. Sie finden das zu viel und wollen ihm einen Rat geben.",
    meaning: "بالنسبة للشباب، يمكن أن يصبح الإنترنت مخدراً - صديق يتصفح الإنترنت ساعات طويلة يومياً. تجد أن هذا كثير وتريد تقديم نصيحة له.",
    keywords: ["Internet = إنترنت", "surft = يتصفح"],
    imagine: "🧠💻 شاب جالس أمام الكمبيوتر وعيناه مثبتتان على الشاشة ولا يتحرك."
};

// k → 4: schulische Leistungen für Bankausbildung
HELP_DATA["lesen3_exam7_k"] = {
    text: "'GRUNDSÄTZLICH HAT JEDER DIE MÖGLICHKEIT, BEI UNS EINE AUSBILDUNG ZU MACHEN' - Ein Freund möchte wissen, welche schulischen Leistungen bei der Vergabe von Ausbildungsplätzen im Bankgewerbe besonders wichtig sind.",
    meaning: "'من حيث المبدأ، كل شخص لديه الفرصة للقيام بتدريب مهني عندنا' - صديق يريد معرفة أي التحصيل الدراسي مهم بشكل خاص عند تخصيص أماكن التدريب في القطاع المصرفي.",
    keywords: ["AUSBILDUNG = تدريب مهني", "Bankgewerbe = قطاع مصرفي"],
    imagine: "🧠📜 شاب جالس في مكتبة ويقرأ أوراقاً عن متطلبات البنوك."
};

// l → 9: Sohn surft und vernachlässigt Schule
HELP_DATA["lesen3_exam7_l"] = {
    text: "Viele junge Leute flüchten sich in die virtuelle Scheinwelt - Eine befreundete Frau möchte ihren Sohn davon abhalten, ständig im Internet zu surfen, weil seine schulischen Leistungen rapide nachlassen.",
    meaning: "كثير من الشباب يهربون إلى العالم الافتراضي الوهمي - امرأة صديقة تريد منع ابنها من التصفح المستمر للإنترنت لأن أداءه الدراسي يتراجع بسرعة.",
    keywords: ["virtuelle Scheinwelt = عالم افتراضي وهمي", "surfen = يتصفح"],
    imagine: "🧠👩 أم تقف بجانب ابنها وتطلب منه إغلاق الكمبيوتر والذهاب للدراسة."
};

// ============================================
// Exam 8 (exam8.json) - المرأة الحامل (معدل)
// ============================================

// a → 0: Schwangerschaft im Vorstellungsgespräch
HELP_DATA["lesen3_exam8_a"] = {
    text: "Das Vorstellungsgespräch ist eine wichtige Hürde - Ihre Schwägerin erwartet ein Kind. Sie ist nicht sicher, ob Sie in einem Vorstellungsgespräch darauf hinweisen muss.",
    meaning: "مقابلة العمل عائق مهم - زوجة أخيك تنتظر طفلاً. إنها غير متأكدة مما إذا كان يجب أن تذكر ذلك في مقابلة العمل.",
    keywords: ["Vorstellungsgespräch = مقابلة عمل", "Schwangerschaft = حمل"],
    imagine: "🧠🤰 امرأة حامل تمسك بيدها على بطنها وهي تتحدث مع مدير الموارد البشرية."
};

// d → 2: Nervosität bei Referaten
HELP_DATA["lesen3_exam8_d"] = {
    text: "Robert Sonntag, Autor des Buches 'Hilfe, ich muss reden' - Eine Freundin, 20 Jahre alt, muss oft vor Arbeitskollegen Referate halten. Ihr Hauptproblem ist ihre Nervosität.",
    meaning: "روبرت سونتاغ، مؤلف كتاب 'النجدة، يجب أن أتكلم' - صديقة تبلغ 20 عاماً، تقدم عروضاً أمام زملاء العمل. مشكلتها الرئيسية هي عصبيتها.",
    keywords: ["reden = يتكلم", "Nervosität = عصبية"],
    imagine: "🧠🎤 شابة تقف أمام زملائها وكلماتها تتلعثم من الخوف."
};

// f → 8: Rede bei Goldener Hochzeit
HELP_DATA["lesen3_exam8_f"] = {
    text: "Nichts ist auf privaten Feierlichkeiten schlimmer als langatmige Ansprachen - Ein älteres Ehepaar hat Goldene Hochzeit. Die Tochter möchte eine Rede halten und braucht dafür eine Anleitung.",
    meaning: "لا شيء أسوأ في الاحتفالات الخاصة من الخطب الطويلة - زوجان كبيران يحتفلان باليوبيل الذهبي. الابنة تريد إلقاء كلمة وتحتاج إرشاداً.",
    keywords: ["Ansprachen = خطب", "Rede = كلمة"],
    imagine: "🧠👩 ابنة تمسك بورقة وهي تقف أمام والديها المسنين."
};

// g → 4: Ausbildung und später studieren
HELP_DATA["lesen3_exam8_g"] = {
    text: "Ein Auszubildender bei einer Bank oder Sparkasse bekommt 690 Euro - Eine Bekannte möchte eine Ausbildung machen und vielleicht später einmal studieren.",
    meaning: "المتدرب في بنك أو بنك ادخار يحصل على 690 يورو - إحدى المعارف تريد القيام بتدريب مهني وربما الدراسة لاحقاً.",
    keywords: ["Auszubildender = متدرب", "Ausbildung = تدريب مهني"],
    imagine: "🧠🎓 امرأة شابة تمسك شهادة وهي تبتسم."
};

// h → 3: Kleidung für Vorstellungsgespräch
HELP_DATA["lesen3_exam8_h"] = {
    text: "Wer zu seinem Vorstellungsgespräch eingeladen wird, sollte auf korrekte Kleidung achten - Eine Freundin sucht einen Ausbildungsplatz. Sie ist zu einem Bewerbungsgespräch eingeladen und weiß nicht, was sie zu diesem Anlass anziehen soll.",
    meaning: "من يُدعى لمقابلة عمل يجب أن ينتبه للملابس الصحيحة - صديقة تبحث عن مكان تدريب. دُعيت لمقابلة عمل ولا تعرف ماذا ترتدي.",
    keywords: ["Vorstellungsgespräch = مقابلة عمل", "Kleidung = ملابس"],
    imagine: "🧠👔 امرأة تنظر إلى خزانة ملابسها وتفكر ماذا تلبس."
};

// i → 5: Freund surft zu viel im Internet
HELP_DATA["lesen3_exam8_i"] = {
    text: "Für junge Leute kann das Internet zu einer Droge werden - Ein Freund surft täglich viele Stunden im Internet. Sie finden das zu viel und wollen ihm einen Rat geben.",
    meaning: "بالنسبة للشباب، يمكن أن يصبح الإنترنت مخدراً - صديق يتصفح الإنترنت ساعات طويلة يومياً. تجد أن هذا كثير وتريد تقديم نصيحة له.",
    keywords: ["Internet = إنترنت", "Droge = مخدر"],
    imagine: "🧠💻 شاب يجلس بمفرده في غرفة مظلمة ووجهه مضاء بشاشة الكمبيوتر."
};

// k → 6: schulische Leistungen für Bankausbildung
HELP_DATA["lesen3_exam8_k"] = {
    text: "'GRUNDSÄTZLICH HAT JEDER DIE MÖGLICHKEIT, BEI UNS EINE AUSBILDUNG ZU MACHEN' - Ein Freund möchte wissen, welche schulischen Leistungen bei der Vergabe von Ausbildungsplätzen im Bankgewerbe besonders wichtig sind.",
    meaning: "'من حيث المبدأ، كل شخص لديه الفرصة للقيام بتدريب مهني عندنا' - صديق يريد معرفة أي تحصيل دراسي مهم في تخصيص أماكن التدريب في القطاع المصرفي.",
    keywords: ["AUSBILDUNG = تدريب مهني", "schulischen Leistungen = تحصيل دراسي"],
    imagine: "🧠📊 شاب ينظر إلى شهادة مدرسية ويحسب الدرجات بعناية."
};

// l → 9: Sohn surft und vernachlässigt Schule
HELP_DATA["lesen3_exam8_l"] = {
    text: "Viele junge Leute flüchten sich in die virtuelle Scheinwelt - Eine Bekannte sucht Rat bei Ihnen, weil ihr Sohn ständig im Internet surft und dabei die Schule vernachlässigt.",
    meaning: "كثير من الشباب يهربون إلى العالم الافتراضي الوهمي - إحدى المعارف تطلب نصيحتك لأن ابنها يتصفح الإنترنت باستمرار ويهمل المدرسة.",
    keywords: ["virtuelle Scheinwelt = عالم افتراضي وهمي", "Schule = مدرسة"],
    imagine: "🧠👩 أم تتصل بك هاتفياً وهي قلقة على ابنها."
};

// ============================================
// Exam 9 (exam9.json) - Unterstützung in Mathematik
// ============================================

// b → 3: Wohnung in anderer Stadt für Ausbildung suchen
HELP_DATA["lesen3_exam9_b"] = {
    text: "Neues Ziel, neues Glück! - Sie möchten in einer anderen Stadt eine Ausbildung machen und suchen dort eine Wohnung.",
    meaning: "هدف جديد، حظ جديد! - تريد القيام بتدريب مهني في مدينة أخرى وتبحث عن شقة هناك.",
    keywords: ["Ziel = هدف", "Wohnung = شقة"],
    imagine: "🧠🏠 شاب ينظر إلى شقة فارغة ويبتسم لأنها سكنه الجديد."
};

// d → 2: Sprachkurs in einem anderen Land
HELP_DATA["lesen3_exam9_d"] = {
    text: "Andere Länder, andere Sprachen - Sie möchten einen Sprachkurs in einem anderen Land machen.",
    meaning: "بلدان أخرى، لغات أخرى - تريد القيام بدورة لغة في بلد آخر.",
    keywords: ["Länder = بلدان", "Sprachkurs = دورة لغة"],
    imagine: "🧠✈️ شخص يحمل حقيبة سفر ويقف أمام طائرة متوجهاً لتعلم اللغة."
};

// e → 7: festen Lernpartner für Sprache suchen
HELP_DATA["lesen3_exam9_e"] = {
    text: "Was bedeutet 'Tandemlernen'? - Sie wollen gerne noch eine Sprache lernen und suchen einen festen Lernpartner.",
    meaning: "ماذا يعني 'التعلم الثنائي'؟ - تريد تعلم لغة أخرى وتبحث عن شريك تعلم دائم.",
    keywords: ["Tandemlernen = تعلم ثنائي", "Lernpartner = شريك تعلم"],
    imagine: "🧠👥 شخصان جالسان في مقهى يتحدثان ويتبادلان تعلم اللغات."
};

// g → 8: Umzug ohne Zeit sich darum zu kümmern
HELP_DATA["lesen3_exam9_g"] = {
    text: "Umzug mal anders - Sie wollen umziehen, haben aber eigentlich gar keine Zeit, sich darum zu kümmern.",
    meaning: "نقل منزل بشكل مختلف - تريد الانتقال ولكن ليس لديك وقت للاهتمام بذلك.",
    keywords: ["Umzug = نقل منزل", "Zeit = وقت"],
    imagine: "🧠📦 شخص واقف أمام صناديق كثيرة ولا يعرف من أين يبدأ."
};

// h → 1: Physik studieren und informieren
HELP_DATA["lesen3_exam9_h"] = {
    text: "Alle Informationen auf einer Seite - Sie möchten Physik studieren und möchten sich zunächst informieren.",
    meaning: "جميع المعلومات في صفحة واحدة - تريد دراسة الفيزياء وتريد الاستعلام أولاً.",
    keywords: ["Informationen = معلومات", "studieren = يدرس"],
    imagine: "🧠🔬 شاب يجلس أمام حاسوبه يبحث عن تخصص الفيزياء."
};

// i → 4: günstige Umzugshelfer wegen Ausbildung
HELP_DATA["lesen3_exam9_i"] = {
    text: "Hilfe gesucht? Studierende und Auszubildende - Sie ziehen wegen einer Ausbildung um und suchen so günstig wie möglich Umzugshelfer.",
    meaning: "مطلوب مساعدة؟ طلاب ومتدربون - تنتقل بسبب التدريب المهني وتبحث عن مساعدين لنقل المنزل بأقل تكلفة ممكنة.",
    keywords: ["Auszubildende = متدربون", "Umzugshelfer = مساعدو نقل"],
    imagine: "🧠🛋️ شخصان يحملان أريكة ثقيلة ويصعدان الدرج."
};

// j → 5: neue Leute kennenlernen nach Umzug
HELP_DATA["lesen3_exam9_j"] = {
    text: "Neu in der Stadt? - Sie sind gerade umgezogen und möchten neue Leute kennenlernen.",
    meaning: "جديد في المدينة؟ - انتقلت للتو وترغب في التعرف على أشخاص جدد.",
    keywords: ["Neu = جديد", "kennenlernen = يتعرف على"],
    imagine: "🧠👋 شاب يقف في حفلة ويمد يده لشخص غريب ليتعرف عليه."
};

// l → 0: Unterstützung in Mathematik in kleiner Gruppe
HELP_DATA["lesen3_exam9_l"] = {
    text: "Aller Anfang ist schwer - Sie brauchen Unterstützung in Mathematik und möchten in einer kleinen Gruppe lernen.",
    meaning: "كل بداية صعبة - تحتاج دعماً في الرياضيات وتريد التعلم في مجموعة صغيرة.",
    keywords: ["Mathematik = رياضيات", "kleinen Gruppe = مجموعة صغيرة"],
    imagine: "🧠📐 ثلاثة طلاب يجلسون حول طاولة ويحلون مسألة رياضية معاً."
};

// ============================================
// Exam 10 (exam10.json) - Ganztagesausflug
// ============================================

// a → 7: neu in der Stadt und Stadtteil kennenlernen
HELP_DATA["lesen3_exam10_a"] = {
    text: "Neues Angebot der VHS - Sie sind neu in der Stadt und möchten Ihren Stadtteil kennenlernen.",
    meaning: "عرض جديد من مدرسة الشعب - أنت جديد في المدينة وتريد التعرف على منطقتك.",
    keywords: ["Angebot = عرض", "Stadtteil = منطقة في المدينة"],
    imagine: "🧠🏘️ شخص يمشي في شارع جديد وينظر إلى المباني من حوله."
};

// c → 3: Interesse an Technikgeschichte
HELP_DATA["lesen3_exam10_c"] = {
    text: "Kurzreise nach München - Sie interessieren sich für Technikgeschichte.",
    meaning: "رحلة قصيرة إلى ميونخ - أنت مهتم بتاريخ التقنية.",
    keywords: ["Kurzreise = رحلة قصيرة", "Technikgeschichte = تاريخ التقنية"],
    imagine: "🧠🏛️ شخص واقف أمام طائرة قديمة في متحف وينظر إليها بانبهار."
};

// d → 0: Ganztagesausflug mit Bewegung
HELP_DATA["lesen3_exam10_d"] = {
    text: "Entspannung am Wasser - Sie möchten einen Ganztagesausflug machen und sich dabei bewegen.",
    meaning: "استرخاء على الماء - تريد القيام برحلة ليوم كامل والتحرك أثناءها.",
    keywords: ["Entspannung = استرخاء", "bewegen = يتحرك"],
    imagine: "🧠🚣 شخص يجدف في بحيرة والشمس مشرقة."
};

// f → 2: Hilfe bei Kindergeburtstag
HELP_DATA["lesen3_exam10_f"] = {
    text: "Schiffe versenken, Marmorkuchen und selbstgebastelte Papierhüte - Ihr Sohn möchte einen Kindergeburtstag feiern und braucht Hilfe bei der Organisation.",
    meaning: "إغراق السفن، كعكة الرخام والقبعات الورقية المصنوعة يدوياً - ابنك يريد الاحتفال بعيد ميلاد أطفال ويحتاج مساعدة في التنظيم.",
    keywords: ["Kindergeburtstag = عيد ميلاد أطفال", "Organisation = تنظيم"],
    imagine: "🧠🎈 أم تنفخ بالونات وتعلق الزينة لطفلها."
};

// h → 8: mehr über Geschichte deutscher Städte erfahren
HELP_DATA["lesen3_exam10_h"] = {
    text: "Nur auf Reisen lernt der Mensch - Ein Freund möchte mehr über die Geschichte deutscher Städte erfahren.",
    meaning: "فقط بالسفر يتعلم الإنسان - صديق يريد معرفة المزيد عن تاريخ المدن الألمانية.",
    keywords: ["Reisen = سفر", "Geschichte = تاريخ"],
    imagine: "🧠🏰 رجل يقف أمام كاتدرائية قديمة ويقرأ اللوحة التعريفية."
};

// j → 4: Schiffsreise machen
HELP_DATA["lesen3_exam10_j"] = {
    text: "Deutschland aus einer anderen Perspektive - Ein Freund möchte gerne eine Schiffsreise machen.",
    meaning: "ألمانيا من منظور آخر - صديق يريد القيام برحلة بحرية.",
    keywords: ["Perspektive = منظور", "Schiffsreise = رحلة بحرية"],
    imagine: "🧠🛳️ رجل يقف على سطح سفينة وينظر إلى البحر."
};

// k → 5: helfen Stadtteil zu gestalten
HELP_DATA["lesen3_exam10_k"] = {
    text: "Unser Stadtteil ist lebendig - Sie möchten helfen, Ihren Stadtteil zu gestalten.",
    meaning: "منطقتنا حية - تريد المساعدة في تشكيل منطقتك.",
    keywords: ["Stadtteil = منطقة", "gestalten = يشكل"],
    imagine: "🧠🖌️ شخص يحمل فرشاة دهان ويرسم جداراً برسومات جميلة."
};

// l → 9: mit 6-jähriger Nichte ins Museum
HELP_DATA["lesen3_exam10_l"] = {
    text: "Technik - spannend und verständlich - Sie möchten etwas mit Ihrer 6-jährigen Nichte unternehmen, die gerne ins Museum geht.",
    meaning: "التقنية - مثيرة ومفهومة - تريد القيام بنشاط مع ابنة أختك ذات الـ 6 سنوات التي تحب الذهاب إلى المتحف.",
    keywords: ["Technik = تقنية", "Museum = متحف"],
    imagine: "🧠🔬 طفلة صغيرة تضع يديها على زجاج واجهة عرض متحف."
};

// ============================================
// Exam 11 (exam11.json) - Ihren Eltern zur Silberhochzeit
// ============================================

// a → 0: Schiffsreise auf dem Meer schenken
HELP_DATA["lesen3_exam11_a"] = {
    text: "Norwegen: Kirkenes-Bergen - Sie möchten Ihren Eltern zur Silberhochzeit eine besondere Schiffsreise auf dem Meer schenken.",
    meaning: "النرويج: كيركينس-برغن - تريد إهداء والديك رحلة بحرية خاصة بمناسبة الذكرى الفضية لزواجهما.",
    keywords: ["Schiffsreise = رحلة بحرية", "Silberhochzeit = ذكرى فضية"],
    imagine: "🧠🛳️ زوجان كبيران يقفان على سطح سفينة وينظران إلى غروب الشمس."
};

// b → 1: Silvester und Neujahr nicht im Gebirge
HELP_DATA["lesen3_exam11_b"] = {
    text: "Winterurlaub am Meer - Ihre Freundin möchte mit ihrem Mann Silvester und Neujahr im Urlaub feiern, aber nicht schon wieder im Gebirge.",
    meaning: "عطلة شتوية على البحر - صديقتك تريد الاحتفال بعيد رأس السنة مع زوجها في إجازة، ولكن ليس مرة أخرى في الجبال.",
    keywords: ["Winterurlaub = عطلة شتوية", "Gebirge = جبال"],
    imagine: "🧠🏖️ زوجان يجلسان على كرسي على شاطئ البحر والثلوج خلفهما."
};

// c → 2: besinnliches Wochenende in den Bergen
HELP_DATA["lesen3_exam11_c"] = {
    text: "Meditation im Schnee - Ein Bekannter möchte im Winter ein besinnliches Wochenende in den Bergen verbringen, denn er mag es, durch die verschneite Natur zu laufen.",
    meaning: "تأمل في الثلج - أحد المعارف يريد قضاء نهاية أسبوع تأملية في الجبال شتاءً، لأنه يحب المشي في الطبيعة المغطاة بالثلوج.",
    keywords: ["Meditation = تأمل", "verschneite Natur = طبيعة مغطاة بالثلوج"],
    imagine: "🧠❄️ رجل يمشي بمفرده في الغابة والثلوج تتساقط حوله."
};

// d → 4: organisierte Urlaubsreise mit Fahrrad
HELP_DATA["lesen3_exam11_d"] = {
    text: "Fluss- und Radreise durch Belgien - Sie wollen wie jedes Jahr in der zweiten Jahreshälfte eine organisierte Urlaubsreise in Europa machen und sich dabei viel mit dem Fahrrad fortbewegen.",
    meaning: "رحلة نهرية وبالدراجة عبر بلجيكا - ترغب كل عام في النصف الثاني من السنة في القيام برحلة عطلات منظمة في أوروبا والتنقل كثيراً بالدراجة.",
    keywords: ["Radreise = رحلة دراجة", "organisierte Urlaubsreise = رحلة عطلات منظمة"],
    imagine: "🧠🚴 مجموعة من الأشخاص يركبون الدراجات في طريق ريفي جميل."
};

// g → 3: Vorschläge für Ein-Tages-Ausflüge
HELP_DATA["lesen3_exam11_g"] = {
    text: "Tagestouren in Rheinhessen und im Rheingau - Eine Bekannte aus dem Rhein-Main-Gebiet sucht Vorschläge für Ein-Tages-Ausflüge, denn sie übernachtet nicht gern in fremden Betten.",
    meaning: "جولات ليوم واحد في راينهسن وراينغاو - إحدى المعارف من منطقة راين-ماين تبحث عن اقتراحات لرحلات ليوم واحد، لأنها لا تحب المبيت في أسرة غريبة.",
    keywords: ["Tagestouren = جولات يوم", "Ausflüge = رحلات"],
    imagine: "🧠🗺️ امرأة تنظر إلى خريطة وتخطط ليومها بدون حقيبة سفر."
};

// h → 5: netter Abend mit Essen und Unterhaltung
HELP_DATA["lesen3_exam11_h"] = {
    text: "Abend im Palladio - Sie möchten einen netten Abend mit Freunden bei gutem Essen und außergewöhnlichem Unterhaltungsprogramm verleben.",
    meaning: "مساء في بالاديو - تريد قضاء أمسية لطيفة مع الأصدقاء مع طعام جيد وبرنامج ترفيهي استثنائي.",
    keywords: ["Abend = مساء", "Unterhaltungsprogramm = برنامج ترفيهي"],
    imagine: "🧠🍽️ مجموعة من الأصدقاء جالسون على طاولة ومهرج يقف أمامهم."
};

// i → 6: festliche Räumlichkeiten für Hochzeitsfeier
HELP_DATA["lesen3_exam11_i"] = {
    text: "Kloster Eberbach - Sie suchen für eine prunkvolle Hochzeitsfeier geeignete festliche Räumlichkeiten in einer stimmungsvollen klösterlichen Umgebung für zirka 50 Personen.",
    meaning: "دير إيبرباخ - تبحث عن أماكن احتفالية مناسبة لحفل زفاف فاخر في بيئة دير مميزة لحوالي 50 شخصاً.",
    keywords: ["Kloster = دير", "Hochzeitsfeier = حفل زفاف"],
    imagine: "🧠🏰 عروس وعريس يقفان أمام مبنى دير قديم ويبتسمان."
};

// j → 7: nützliche Informationen für neue Umgebung
HELP_DATA["lesen3_exam11_j"] = {
    text: "Viel Lob von der Lokalpresse für einen neuen Stadt-Führer - Sie sind neu in Frankfurt a. M. und suchen deshalb nach nützlichen Informationen und praktischen Tipps, um sich schnell in der neuen Umgebung einzuleben.",
    meaning: "مديح كبير من الصحافة المحلية لدليل مدينة جديد - أنت جديد في فرانكفورت ماين وتبحث عن معلومات مفيدة ونصائح عملية للتأقلم بسرعة في البيئة الجديدة.",
    keywords: ["Stadt-Führer = دليل مدينة", "neuen Umgebung = بيئة جديدة"],
    imagine: "🧠🗺️ شخص واقف في شارع مزدحم ويمسك خريطة بين يديه."
};

// ============================================
// Exam 12 (exam12.json) - Rechtsanwalt
// ============================================

// a → 3: durch Europa reisen und privat übernachten
HELP_DATA["lesen3_exam12_a"] = {
    text: "Urlaub auf dem Sofa - Sie möchten durch Europa reisen und privat übernachten.",
    meaning: "عطلة على الأريكة - ترغب في السفر عبر أوروبا والمبيت في منازل خاصة.",
    keywords: ["Urlaub = عطلة", "privat übernachten = المبيت بشكل خاص"],
    imagine: "🧠🛋️ شخص يجلس على أريكة في منزل غريب ويبتسم."
};

// b → 8: Möbel sehen nicht mehr gut aus
HELP_DATA["lesen3_exam12_b"] = {
    text: "Alte Möbel aufarbeiten - Ihre Möbel sehen nicht mehr so gut aus. Daran möchten Sie etwas ändern.",
    meaning: "ترميم الأثاث القديم - أثاثك لم يعد يبدو جيداً. تريد تغيير ذلك.",
    keywords: ["Möbel = أثاث", "aufarbeiten = يرمم"],
    imagine: "🧠🪑 رجل يجلس على كرسي قديم وينظر إليه بحزن."
};

// c → 4: Bilder vermarkten
HELP_DATA["lesen3_exam12_c"] = {
    text: "Kunstmarkt - Eine Bekannte malt sehr gut und sucht eine Gelegenheit, anderen ihre Bilder zu zeigen oder sie zu verkaufen.",
    meaning: "سوق فني - إحدى المعارف ترسم جيداً وتبحث عن فرصة لعرض لوحاتها على الآخرين أو بيعها.",
    keywords: ["Kunstmarkt = سوق فني", "Bilder = لوحات"],
    imagine: "🧠🎨 امرأة تعلق لوحتها على حائط في معرض فني."
};

// e → 1: Alternative zu Hotels mit Internet und Frühstück
HELP_DATA["lesen3_exam12_e"] = {
    text: "Unser neues Wohnkonzept - Ihr Bekannter ist beruflich oft unterwegs und sucht eine Alternative zu Hotels. Es soll dort aber Internetzugang und Frühstück geben.",
    meaning: "مفهوم سكننا الجديد - قريبك يسافر كثيراً للعمل ويبحث عن بديل للفنادق. يجب أن يتوفر هناك إنترنت وفطور.",
    keywords: ["Wohnkonzept = مفهوم سكن", "Frühstück = فطور"],
    imagine: "🧠💼 رجل يجلس على مكتب ويضع حاسوبه المحمول بجانبه."
};

// f → 6: Streit mit Vermieter wegen Nebenkosten
HELP_DATA["lesen3_exam12_f"] = {
    text: "Ihr gutes Recht - Sie haben Streit mit Ihrem Vermieter wegen der Nebenkosten und möchten sich beraten lassen.",
    meaning: "حقك الجيد - لديك خلاف مع مالك العقار بسبب التكاليف الإضافية وتريد الحصول على استشارة.",
    keywords: ["Recht = حق", "Vermieter = مالك عقار"],
    imagine: "🧠📃 رجل جالس في مكتب محامٍ ويشرح مشكلته."
};

// g → 9: günstig übernachten mit Freunden in Deutschland
HELP_DATA["lesen3_exam12_g"] = {
    text: "Günstig wohnen in über 70 Städten in Deutschland - Sie möchten mit Freunden durch Deutschland reisen und dabei günstig übernachten.",
    meaning: "سكن اقتصادي في أكثر من 70 مدينة في ألمانيا - تريد السفر مع أصدقائك عبر ألمانيا والمبيت بتكلفة منخفضة.",
    keywords: ["Günstig = اقتصادي", "übernachten = يبيت"],
    imagine: "🧠🏠 أربعة أصدقاء يقفون أمام فندق صغير ويحملون حقائبهم."
};

// h → 5: im Urlaub nicht verreisen aber etwas unternehmen
HELP_DATA["lesen3_exam12_h"] = {
    text: "Zuhause bleiben und trotzdem was erleben - Sie möchten im Urlaub zwar nicht verreisen, aber trotzdem etwas unternehmen.",
    meaning: "البقاء في المنزل ومع ذلك تجربة شيء ما - لا تريد السفر في الإجازة ولكن مع ذلك تريد القيام بنشاط ما.",
    keywords: ["Zuhause = منزل", "unternehmen = يقوم بنشاط"],
    imagine: "🧠🏠 شخص جالس على أريكته ويخطط ليومه في المدينة عبر الهاتف."
};

// j → 7: ausprobieren ob Zeichnen Spaß macht
HELP_DATA["lesen3_exam12_j"] = {
    text: "Kunst und Kultur für Einsteiger - Sie möchten ausprobieren, ob Ihnen Zeichnen Spaß macht.",
    meaning: "الفن والثقافة للمبتدئين - تريد تجربة ما إذا كان الرسم ممتعاً بالنسبة لك.",
    keywords: ["Kunst = فن", "Zeichnen = رسم"],
    imagine: "🧠✏️ شخص يمسك قلماً ويرسم على ورقة ويبتسم."
};

// k → 0: Arbeitsstelle gekündigt, Rat vom Anwalt
HELP_DATA["lesen3_exam12_k"] = {
    text: "Ihr kompetenter Partner für Rechtsberatung - Einem Bekannten wurde die Arbeitsstelle gekündigt. Er möchte bei einem Anwalt um Rat fragen.",
    meaning: "شريكك المختص للاستشارات القانونية - صديق تم فصله من العمل. يريد طلب المشورة من محام.",
    keywords: ["Rechtsberatung = استشارة قانونية", "Anwalt = محام"],
    imagine: "🧠⚖️ رجل جالس أمام محام وكلاهما ينظران إلى أوراق."
};

// ============================================
// Exam 13 (exam13.json) - Rechtsanwalt (معدل)
// ============================================

// a → 3: durch Europa reisen und privat übernachten
HELP_DATA["lesen3_exam13_a"] = {
    text: "Urlaub auf dem Sofa - Sie möchten durch Europa reisen und privat übernachten.",
    meaning: "عطلة على الأريكة - ترغب في السفر عبر أوروبا والمبيت في منازل خاصة.",
    keywords: ["Urlaub = عطلة", "privat übernachten = مبيت خاص"],
    imagine: "🧠🛌 شخص نائم على أريكة في منزل غريب."
};

// b → 8: Wohnungseinrichtung ändern
HELP_DATA["lesen3_exam13_b"] = {
    text: "Alte Möbel aufarbeiten - Ihre Wohnungseinrichtung sieht nicht mehr so gut aus. Daran möchten Sie etwas ändern.",
    meaning: "ترميم الأثاث القديم - تأثيث منزلك لم يعد يبدو جيداً. تريد تغيير ذلك.",
    keywords: ["Möbel = أثاث", "Wohnungseinrichtung = تأثيث منزل"],
    imagine: "🧠🛋️ امرأة تنظر إلى غرفة معيشتها وتفكر في تجديدها."
};

// c → 4: Bilder vermarkten
HELP_DATA["lesen3_exam13_c"] = {
    text: "Kunstmarkt - Eine Bekannte malt sehr gut und sucht eine Gelegenheit, ihre Bilder zu vermarkten.",
    meaning: "سوق فني - إحدى المعارف ترسم جيداً وتبحث عن فرصة لتسويق لوحاتها.",
    keywords: ["Kunstmarkt = سوق فني", "vermarkten = يسوق"],
    imagine: "🧠🖼️ امرأة تعلن عن لوحاتها على موقع إلكتروني."
};

// e → 1: Alternative zu Hotels mit Frühstück und Internet
HELP_DATA["lesen3_exam13_e"] = {
    text: "Unser neues Wohnkonzept - Ihr Bekannter ist beruflich oft unterwegs und sucht eine Alternative zu Hotels. Auf Frühstück und Internet möchte er aber nicht verzichten.",
    meaning: "مفهوم سكننا الجديد - قريبك يسافر كثيراً للعمل ويبحث عن بديل للفنادق. لكنه لا يريد الاستغناء عن الفطور والإنترنت.",
    keywords: ["Wohnkonzept = مفهوم سكن", "Frühstück = فطور"],
    imagine: "🧠🍳 رجل جالس على طاولة أمامه قهوة وكرواسون وحاسوب محمول."
};

// f → 6: Auskunft wegen Nebenkostenstreit
HELP_DATA["lesen3_exam13_f"] = {
    text: "Ihr gutes Recht - Sie haben Streit mit Ihrem Vermieter wegen der Nebenkosten und brauchen eine Auskunft.",
    meaning: "حقك الجيد - لديك خلاف مع مالك العقار بسبب التكاليف الإضافية وتحتاج إلى معلومات.",
    keywords: ["Recht = حق", "Auskunft = معلومات"],
    imagine: "🧠📞 شخص يتحدث هاتفياً مع مستشار قانوني ووجهه متوتر."
};

// g → 9: günstig übernachten mit Freunden in Deutschland
HELP_DATA["lesen3_exam13_g"] = {
    text: "Günstig wohnen in über 70 Städten in Deutschland - Sie möchten mit Freunden durch Deutschland reisen und dabei günstig übernachten.",
    meaning: "سكن اقتصادي في أكثر من 70 مدينة في ألمانيا - تريد السفر مع أصدقائك في ألمانيا والمبيت بتكلفة منخفضة.",
    keywords: ["Günstig = اقتصادي", "übernachten = يبيت"],
    imagine: "🧠🏘️ ثلاثة أصدقاء يقفون أمام نزل شبابي ويرتدون حقائب الظهر."
};

// h → 5: im Urlaub etwas unternehmen ohne zu verreisen
HELP_DATA["lesen3_exam13_h"] = {
    text: "Zuhause bleiben und trotzdem was erleben - Sie möchten im Urlaub zwar nicht verreisen, aber trotzdem etwas unternehmen.",
    meaning: "البقاء في المنزل ومع ذلك تجربة شيء ما - لا تريد السفر في الإجازة ولكن مع ذلك تريد القيام بنشاط ما.",
    keywords: ["Zuhause = منزل", "erleben = يجرب"],
    imagine: "🧠🏠 شخص يشاهد التلفاز ويخطط ليوم غد في المدينة."
};

// j → 7: Kreativität mit Stiften und Farben
HELP_DATA["lesen3_exam13_j"] = {
    text: "Kunst und Kultur für Einsteiger - Sie möchten ausprobieren, ob Sie kreativ mit Stiften, Pinseln und Farben umgehen können.",
    meaning: "الفن والثقافة للمبتدئين - تريد تجربة ما إذا كان يمكنك التعامل بشكل إبداعي مع الأقلام والفرش والألوان.",
    keywords: ["Kultur = ثقافة", "kreativ = مبدع"],
    imagine: "🧠🖌️ شخص يحمل فرشاة ويخلط الألوان على لوحة."
};

// k → 0: Arbeitsstelle verloren, Anwaltsberatung
HELP_DATA["lesen3_exam13_k"] = {
    text: "Ihr kompetenter Partner für Rechtsberatung - Ein Bekannter hat seine Arbeitsstelle verloren. Er möchte sich von einem Anwalt beraten lassen.",
    meaning: "شريكك المختص للاستشارات القانونية - أحد المعارف فقد وظيفته. يريد الحصول على استشارة من محام.",
    keywords: ["Rechtsberatung = استشارة قانونية", "Arbeitsstelle = وظيفة"],
    imagine: "🧠💼 رجال يجلسون حول طاولة ومحام يتحدث مع شخص فقد وظيفته."
};

// ============================================
// Exam 14 (exam14.json) - Au-pair Mädchen
// ============================================

// a → 8: Geld nach Kanada überweisen, Kosten wissen
HELP_DATA["lesen3_exam14_a"] = {
    text: "Infos zur Auslandsüberweisung - Sie wollen Geld nach Kanada überweisen. Sie möchten wissen, wie viel Sie für die Überweisung bezahlen müssen.",
    meaning: "معلومات حول التحويل الخارجي - تريد تحويل أموال إلى كندا. تريد معرفة كم ستدفع مقابل التحويل.",
    keywords: ["Auslandsüberweisung = تحويل خارجي", "bezahlen = يدفع"],
    imagine: "🧠💸 شخص جالس أمام حاسبه وينظر إلى رسوم التحويل المصرفي."
};

// b → 9: Zeugnisse für Bewerbung in Frankreich übersetzen
HELP_DATA["lesen3_exam14_b"] = {
    text: "Französische Muttersprachler bieten Übersetzungen - Ein Freund aus Salzburg will sich in Frankreich bewerben. Er möchte seine Zeugnisse übersetzen lassen.",
    meaning: "ناطقون أصليون بالفرنسية يقدمون ترجمات - صديق من سالزبورغ يريد التقدم لوظيفة في فرنسا. يريد ترجمة شهاداته.",
    keywords: ["Übersetzungen = ترجمات", "Zeugnisse = شهادات"],
    imagine: "🧠📄 رجل يحمل شهادة ويجلس أمام مترجم."
};

// c → 1: Auslandsaufenthalt informieren
HELP_DATA["lesen3_exam14_c"] = {
    text: "Als Austauschschüler/in verbringst du einige Monate im Ausland - Ihre 14-jährige Nichte möchte sich über einen Auslandsaufenthalt informieren.",
    meaning: "كطالب تبادل تقضي بضعة أشهر في الخارج - ابنة أختك ذات الـ 14 سنة تريد الاستعلام عن البقاء في الخارج.",
    keywords: ["Austauschschüler = طالب تبادل", "Auslandsaufenthalt = بقاء في الخارج"],
    imagine: "🧠✈️ فتاة مراهقة تجلس أمام حاسوبها وتتصفح برامج التبادل الطلابي."
};

// d → 5: Webseite ins Englische übersetzen lassen
HELP_DATA["lesen3_exam14_d"] = {
    text: "Als gebürtige Engländerin biete ich Übersetzungen - Sie sollen die neue Webseite Ihrer Firma ins Englische übersetzen lassen.",
    meaning: "كإنجليزية الأصل أقدم ترجمات - يجب عليك ترجمة موقع شركتك الجديد إلى الإنجليزية.",
    keywords: ["Übersetzungen = ترجمات", "Webseite = موقع إلكتروني"],
    imagine: "🧠💻 شخص ينظر إلى شاشة حاسوب ويقرر ترجمة الموقع."
};

// e → 7: Bankkonto für Tochter die studiert
HELP_DATA["lesen3_exam14_e"] = {
    text: "Mit einem Konto bei der RUFA profitieren Sie - Im Herbst beginnt Ihre Tochter ein Studium. Sie möchte ein Bankkonto eröffnen.",
    meaning: "مع حساب في RUFA ستستفيد - ابنتك ستبدأ الدراسة الجامعية في الخريف. تريد فتح حساب بنكي.",
    keywords: ["Konto = حساب", "Studium = دراسة جامعية"],
    imagine: "🧠👩‍🎓 أم وابنتها تجلسان أمام موظف بنك ويفتحان حساباً."
};

// f → 4: kinderlose Familie möchte jungen Menschen aufnehmen
HELP_DATA["lesen3_exam14_f"] = {
    text: "Wir laden Sie ein, internationale Schüler bei Ihnen aufzunehmen - Ihre kinderlose Nachbarsfamilie möchte für einige Zeit einen jungen Menschen aufnehmen.",
    meaning: "ندعوك لاستقبال طلاب دوليين في منزلك - عائلة جيرانك التي ليس لديها أطفال تريد استقبال شاب لفترة من الوقت.",
    keywords: ["aufzunehmen = يستقبل", "jungen Menschen = شاب"],
    imagine: "🧠🏠 زوجان يجلسان على أريكة ويتحدثان مع شاب عن العيش معهما."
};

// g → 3: französische Übersetzerin sucht gelegentliche Arbeit
HELP_DATA["lesen3_exam14_g"] = {
    text: "Französisch ist Ihre Muttersprache? - Eine französische Bekannte ist Übersetzerin und möchte gelegentlich arbeiten.",
    meaning: "الفرنسية هي لغتك الأم؟ - إحدى المعارف الفرنسية تعمل مترجمة وتريد العمل بين الحين والآخر.",
    keywords: ["Muttersprache = لغة أم", "Übersetzerin = مترجمة"],
    imagine: "🧠📝 امرأة تجلس أمام حاسوبها وتترجم مستنداً."
};

// k → 6: Rezepte aus anderen Ländern
HELP_DATA["lesen3_exam14_k"] = {
    text: "Spezialitäten aus der Küche - Sie kochen gerne und suchen nach Rezepten aus anderen Ländern.",
    meaning: "تخصصات من المطبخ - أنت تحب الطبخ وتبحث عن وصفات من بلدان أخرى.",
    keywords: ["Spezialitäten = تخصصات", "Rezepte = وصفات"],
    imagine: "🧠🍳 شخص يقف في المطبخ وينظر إلى كتاب وصفات عالمية."
};

// ============================================
// Exam 15 (exam15.json) - Hautprobleme
// ============================================

// a → 2: Bekannte hat Fieber und möchte keine Tabletten
HELP_DATA["lesen3_exam15_a"] = {
    text: "Ratgeber 'Was bei Erkältung hilft' - Ihre Bekannte hat Fieber, möchte aber keine Tabletten nehmen.",
    meaning: "دليل 'ما يساعد في حالة البرد' - إحدى معارفك لديها حمى ولكنها لا تريد تناول أدوية.",
    keywords: ["Ratgeber = دليل", "Fieber = حمى"],
    imagine: "🧠🤒 امرأة جالسة على سرير وميزان حرارة في فمها."
};

// c → 6: Besuch und Sonntagvormittag unternehmen
HELP_DATA["lesen3_exam15_c"] = {
    text: "Kochen und waschen um 1900 - Sie bekommen Besuch und möchten am Sonntagvormittag etwas Interessantes unternehmen.",
    meaning: "الطهي والغسل حوالي عام 1900 - سيأتيك ضيوف وتريد القيام بنشاط ممتع صباح الأحد.",
    keywords: ["Kochen = طهي", "Sonntagvormittag = صباح الأحد"],
    imagine: "🧠🏛️ شخصان يقفان أمام لوحة في متحف وينظران إليها."
};

// e → 3: älteres Ehepaar möchte Computer lernen
HELP_DATA["lesen3_exam15_e"] = {
    text: "Nachhilfe - Das Ehepaar, das unter Ihnen wohnt, möchte etwas über Computer lernen.",
    meaning: "دروس خصوصية - الزوجان اللذان يسكنان أسفل منزلك يريدان تعلم شيء عن الكمبيوتر.",
    keywords: ["Nachhilfe = دروس خصوصية", "Computer = كمبيوتر"],
    imagine: "🧠💻 زوجان كبيران يجلسان أمام كمبيوتر وابنتهما تشرح لهما."
};

// f → 9: Versicherung für Neuwagen abschließen
HELP_DATA["lesen3_exam15_f"] = {
    text: "Vienna CONEKT - Sie möchten eine Versicherung für Ihren Neuwagen abschließen und sofort wissen, was es kostet.",
    meaning: "فيينا كونيكت - تريد إبرام تأمين لسيارتك الجديدة ومعرفة التكلفة فوراً.",
    keywords: ["Versicherung = تأمين", "Neuwagen = سيارة جديدة"],
    imagine: "🧠🚗 شخص جالس أمام حاسبه ويحسب سعر التأمين لسيارته الجديدة."
};

// g → 8: Haustier kostet viel Geld, Kosten sparen
HELP_DATA["lesen3_exam15_g"] = {
    text: "Sofort-Versicherung - Sie haben ein Haustier, das im letzten Jahr viel Geld für den Tierarzt gekostet hat. Sie suchen eine Möglichkeit, Kosten zu sparen.",
    meaning: "تأمين فوري - لديك حيوان أليف كلفك الكثير من المال للطبيب البيطري العام الماضي. تبحث عن طريقة لتوفير التكاليف.",
    keywords: ["Versicherung = تأمين", "Haustier = حيوان أليف"],
    imagine: "🧠🐕 شخص يحمل كلبه ويدخل عيادة الطبيب البيطري."
};

// i → 5: Nachbarin erkältet, natürliche Mittel halfen nicht
HELP_DATA["lesen3_exam15_i"] = {
    text: "Omnitamol 500 Tabletten - Ihre Nachbarin ist seit einer Woche erkältet. Natürliche Heilmittel haben nicht geholfen.",
    meaning: "أومنيتامول 500 قرص - جارتك مصابة بالبرد منذ أسبوع. العلاجات الطبيعية لم تساعد.",
    keywords: ["Tabletten = أقراص", "erkältet = مصاب بالبرد"],
    imagine: "🧠🤧 امرأة تجلس على أريكة وتضع منديلاً على أنفها."
};

// j → 0: Kollege hat Hautprobleme
HELP_DATA["lesen3_exam15_j"] = {
    text: "Neue Kleidung kann krank machen - Ein Kollege hat seit ein paar Tagen Hautprobleme und weiß nicht, was die Ursache sein könnte.",
    meaning: "الملابس الجديدة يمكن أن تسبب المرض - زميل يعاني من مشاكل جلدية منذ بضعة أيام ولا يعرف ما هو السبب.",
    keywords: ["Kleidung = ملابس", "Hautprobleme = مشاكل جلدية"],
    imagine: "🧠👕 رجل ينظر إلى قميص جديد ويدي على صدره يحك."
};

// k → 1: mit 7-jähriger Tochter etwas unternehmen
HELP_DATA["lesen3_exam15_k"] = {
    text: "Erkältungszeit = Theaterzeit - Sie möchten etwas mit Ihrer 7-jährigen Tochter unternehmen.",
    meaning: "وقت البرد = وقت المسرح - تريد القيام بنشاط مع ابنتك ذات الـ 7 سنوات.",
    keywords: ["Theaterzeit = وقت مسرح", "Tochter = ابنة"],
    imagine: "🧠🎭 أب وابنته الصغيرة جالسان في مسرح العرائس."
};

// l → 4: Informationen über Zahnversicherung ohne Telefon
HELP_DATA["lesen3_exam15_l"] = {
    text: "Zusatz-Versicherung - Sie wollen Informationen über eine Zahnversicherung, ohne telefonieren zu müssen.",
    meaning: "تأمين إضافي - تريد معلومات عن تأمين الأسنان دون الحاجة للاتصال الهاتفي.",
    keywords: ["Zusatz-Versicherung = تأمين إضافي", "Zahnversicherung = تأمين أسنان"],
    imagine: "🧠🦷 شخص يجلس أمام حاسوبه ويبحث عن تأمين أسنان على الإنترنت."
};

// ============================================
// Exam 16 (exam16.json) - Eine Bekannte ist schwanger
// ============================================

// a → 8: schwangere Freundin mit Schmerzen helfen
HELP_DATA["lesen3_exam16_a"] = {
    text: "Wenn eine schwangere Frau erkrankt - Eine Freundin bekommt ein Baby. Sie hat oft Schmerzen. Welche Möglichkeit gibt es, ihr zu helfen?",
    meaning: "عندما تمرض امرأة حامل - صديقة تنتظر طفلاً. غالباً ما تشعر بألم. ما هي الطريقة لمساعدتها؟",
    keywords: ["schwangere = حامل", "Schmerzen = آلام"],
    imagine: "🧠🤰 امرأة حامل تضع يدها على ظهرها وهي تتألم."
};

// c → 3: pflanzliche Ernährung vor schweren Krankheiten
HELP_DATA["lesen3_exam16_c"] = {
    text: "Die regelmäßige Ernährung mit Tomaten - Sie möchten durch pflanzliche Ernährung Ihren Körper vor schweren Krankheiten schützen.",
    meaning: "التغذية المنتظمة بالطماطم - تريد حماية جسمك من الأمراض الخطيرة من خلال التغذية النباتية.",
    keywords: ["Ernährung = تغذية", "Krankheiten = أمراض"],
    imagine: "🧠🍅 شخص يأكل سلطة طماطم وهو يبتسم."
};

// d → 1: Bekannten über Risiken der Sonnenstrahlung informieren
HELP_DATA["lesen3_exam16_d"] = {
    text: "Dass zu langes In-der-Sonne-Liegen nicht gut ist - Ein Bekannter fliegt im Urlaub ans Meer. Sie möchten ihn über mögliche Risiken der Sonnenstrahlung informieren.",
    meaning: "أن الاستلقاء الطويل تحت الشمس ليس جيداً - أحد المعارف يسافر إلى البحر لقضاء إجازة. تريد إبلاغه بالمخاطر المحتملة للإشعاع الشمسي.",
    keywords: ["Sonne = شمس", "Risiken = مخاطر"],
    imagine: "🧠☀️ رجل يستلقي على كرسي على الشاطئ وشخص آخر يحذره."
};

// e → 4: schwangere Bekannte sucht Ernährungstipps
HELP_DATA["lesen3_exam16_e"] = {
    text: "In der Schwangerschaft haben Frauen erhöhten Bedarf - Eine Bekannte, die ein Kind erwartet, sucht Ernährungstipps.",
    meaning: "في الحمل، لدى النساء حاجة متزايدة - إحدى المعارف التي تنتظر طفلاً تبحث عن نصائح غذائية.",
    keywords: ["Schwangerschaft = حمل", "Ernährungstipps = نصائح غذائية"],
    imagine: "🧠🍎 امرأة حامل تقف أمام ثلاجة وتختار الفواكه."
};

// g → 6: Freundin will hochhackige Schuhe wegwerfen
HELP_DATA["lesen3_exam16_g"] = {
    text: "Damenschuhe mit hohen Absätzen schaden der Gesundheit - Ihre Freundin denkt darüber nach, alle hochhackigen Schuhe wegzuwerfen, weil sie negative Auswirkungen auf ihre Gelenke befürchtet.",
    meaning: "أحذية النساء ذات الكعب العالي تضر بالصحة - صديقتك تفكر في التخلص من جميع أحذيتها ذات الكعب العالي لأنها تخشى آثاراً سلبية على مفاصلها.",
    keywords: ["hohen Absätzen = كعب عالي", "Gesundheit = صحة"],
    imagine: "🧠👠 امرأة تحمل حذاءً بكعب عال وتنظر إليه بحيرة."
};

// i → 9: Bekannter hat Kopfschmerzen ohne Tabletten
HELP_DATA["lesen3_exam16_i"] = {
    text: "Die Fußreflexzonenmassage - Ein Bekannter hat oft Kopfschmerzen. Er möchte jedoch keine Tabletten nehmen.",
    meaning: "تدليك مناطق الانعكاس في القدم - أحد المعارف يعاني من صداع متكرر. لكنه لا يريد تناول أدوية.",
    keywords: ["Kopfschmerzen = صداع", "Tabletten = أقراص"],
    imagine: "🧠🤕 رجل يجلس ويداه على رأسه ومتألم."
};

// l → 2: modische Schuhe kaufen, Preis unsicher
HELP_DATA["lesen3_exam16_l"] = {
    text: "Gute Schuhe müssen nicht unbedingt teuer sein - Ein Bekannter möchte sich modische Schuhe kaufen. Er weiß aber nicht, ob er sich das leisten kann.",
    meaning: "الأحذية الجيدة ليست بالضرورة باهظة الثمن - أحد المعارف يريد شراء أحذية عصرية. لكنه لا يعرف ما إذا كان بإمكانه تحمل تكلفتها.",
    keywords: ["Schuhe = أحذية", "teuer = غالي"],
    imagine: "🧠👞 رجل يقف في متجر أحذية وينظر إلى الأسعار ويتأوه."
};

// ============================================
// Exam 17 (exam17.json) - Die Tochter einer Bekannten wird vier Jahre alt
// ============================================

// a → 8: Ausstellung mit Sohn der Tiere mag
HELP_DATA["lesen3_exam17_a"] = {
    text: "Expedition ins Reich der Schneeleoparden - Sie möchten mit Ihrem zwölfjährigen Sohn eine Ausstellung besuchen. Er interessiert sich für Tiere.",
    meaning: "رحلة إلى عالم الفهود الثلجية - تريد زيارة معرض مع ابنك ذي الـ 12 سنة. إنه مهتم بالحيوانات.",
    keywords: ["Schneeleoparden = فهود ثلجية", "Tiere = حيوانات"],
    imagine: "🧠🐆 ولد يقف أمام هيكل عظمي لأسد في متحف."
};

// b → 5: Freundin sucht Anregungen für alte Kleidung
HELP_DATA["lesen3_exam17_b"] = {
    text: "Alte Jeans, Blusen oder Kleider - Eine Freundin hat viele Kleidungsstücke, die sie nicht mehr trägt. Sie sucht Anregungen, was sie damit machen könnte.",
    meaning: "جينز قديم، بلوزات أو فساتين - صديقة لديها العديد من قطع الملابس التي لم تعد ترتديها. تبحث عن أفكار عما يمكنها فعله بها.",
    keywords: ["Alte Jeans = جينز قديم", "Kleidungsstücke = قطع ملابس"],
    imagine: "🧠👗 امرأة تنظر إلى كومة من الملابس القديمة وتفكر."
};

// d → 0: Buch für vierjährige Tochter
HELP_DATA["lesen3_exam17_d"] = {
    text: "Es ist ein sonniger Herbsttag - Die Tochter einer Bekannten wird vier Jahre alt. Sie möchten ihr etwas zum Geburtstag mitbringen.",
    meaning: "إنه يوم خريفي مشمس - ابنة إحدى المعارف ستبلغ الرابعة. تريد إحضار شيء لها بمناسبة عيد الميلاد.",
    keywords: ["Herbsttag = يوم خريفي", "Geburtstag = عيد ميلاد"],
    imagine: "🧠🎁 امرأة تحمل هدية مغلفة واقفة أمام باب منزل."
};

// f → 4: Winterurlaub mit Bewegung an frischer Luft
HELP_DATA["lesen3_exam17_f"] = {
    text: "Märchenlandschaft aus Schnee und Eis - Ein Freund würde gerne im Winter verreisen. Er möchte viel Zeit an der frischen Luft verbringen und sich bewegen.",
    meaning: "منظر طبيعي خرافي من الثلج والجليد - صديق يريد السفر في الشتاء. يريد قضاء وقت طويل في الهواء الطلق والتحرك.",
    keywords: ["Schnee = ثلج", "frischen Luft = هواء نقي"],
    imagine: "🧠❄️ رجل يمشي في الغابة والثلوج تغطي الأرض."
};

// h → 1: Grundlagen der Fotografie lernen
HELP_DATA["lesen3_exam17_h"] = {
    text: "Atemberaubende Fotos leicht gemacht - Ein Bekannter hat sich einen Fotoapparat gekauft und möchte die Grundlagen der Fotografie erlernen.",
    meaning: "صور مذهلة بسهولة - أحد المعارف اشترى كاميرا ويريد تعلم أساسيات التصوير الفوتوغرافي.",
    keywords: ["Fotos = صور", "Fotografie = تصوير فوتوغرافي"],
    imagine: "🧠📷 رجل يحمل كاميرا وينظر من خلال العدسة."
};

// j → 3: neue kreative Techniken für fortgeschrittene Fotografin
HELP_DATA["lesen3_exam17_j"] = {
    text: "Tolle Aufnahmen in einer spektakulären Landschaft - Eine Bekannte kann gut fotografieren und hat bereits einige Kurse gemacht. Sie würde gerne neue kreative Techniken kennenlernen.",
    meaning: "لقطات رائعة في منظر طبيعي مذهل - إحدى المعارف تجيد التصوير وقد أخذت بعض الدورات. تريد تعلم تقنيات إبداعية جديدة.",
    keywords: ["Aufnahmen = لقطات", "kreative Techniken = تقنيات إبداعية"],
    imagine: "🧠📸 امراة تحمل كاميرا وتلتقط صورة لغروب الشمس."
};

// ============================================
// Exam 18 (exam18.json) - Tierdokumentationen
// ============================================

// a → 4: Sohn 10 Jahre, besondere Feier
HELP_DATA["lesen3_exam18_a"] = {
    text: "Auf den Spuren der Wildkatze - Ihr Sohn wird nächste Woche zehn Jahre alt. Sie möchten ihn mit einer besonderen Feier überraschen.",
    meaning: "على خطى القطة البرية - ابنك سيبلغ العاشرة الأسبوع القادم. تريد مفاجأته بحفل خاص.",
    keywords: ["Wildkatze = قطة برية", "Feier = حفل"],
    imagine: "🧠🎂 أم تحمل كعكة وتدخل الغرفة وابنها يبتسم."
};

// c → 0: wissen wie Tierdokumentationen entstehen
HELP_DATA["lesen3_exam18_c"] = {
    text: "Am 1. August zeigen wir den Film 'Der Natur auf der Spur' - Ein Bekannter interessiert sich für Tierdokumentationen und würde gerne wissen, wie solche Filme entstehen.",
    meaning: "في 1 أغسطس نعرض فيلم 'على خطى الطبيعة' - أحد المعارف مهتم بالأفلام الوثائقية عن الحيوانات ويريد معرفة كيف تُصنع مثل هذه الأفلام.",
    keywords: ["Film = فيلم", "Tierdokumentationen = أفلام وثائقية عن الحيوانات"],
    imagine: "🧠🎥 رجل يقف خلف كاميرا ويصور حماراً وحشياً."
};

// f → 6: Tochter malt, möchte Fähigkeiten verbessern
HELP_DATA["lesen3_exam18_f"] = {
    text: "Du bist gern kreativ - Ihre zehnjährige Tochter zeichnet viel und möchte ihre Fähigkeiten weiter verbessern.",
    meaning: "أنت تحب الإبداع - ابنتك ذات العشر سنوات ترسم كثيراً وتريد تحسين مهاراتها.",
    keywords: ["kreativ = مبدع", "zeichnet = ترسم"],
    imagine: "🧠🎨 طفلة تجلس أمام لوحة وترسم زهرة."
};

// g → 2: Ausstellung mit Gemälden
HELP_DATA["lesen3_exam18_g"] = {
    text: "Mit einem scharfen Blick fürs Detail - Ihr Onkel möchte sich eine Ausstellung mit Gemälden ansehen.",
    meaning: "بنظرة حادة للتفاصيل - عمك يريد مشاهدة معرض للوحات.",
    keywords: ["Detail = تفصيل", "Ausstellung = معرض"],
    imagine: "🧠🖼️ رجل كبير يقف أمام لوحة ويحدق فيها."
};

// i → 5: Nichte interessiert für heimische Tierwelt
HELP_DATA["lesen3_exam18_i"] = {
    text: "Noch nicht lange ist es her, dass Wildkatzen verbreitet waren - Ihre 16-jährige Nichte interessiert sich für heimische Tierwelt und würde sich gerne einen Film ansehen.",
    meaning: "ليس منذ زمن طويل كانت القطط البرية منتشرة - ابنة أختك ذات الـ 16 سنة مهتمة بالحياة البرية المحلية وتود مشاهدة فيلم.",
    keywords: ["Wildkatzen = قطط برية", "Film = فيلم"],
    imagine: "🧠🐺 فتاة جالسة أمام التلفاز تشاهد فيلماً عن الذئاب."
};

// k → 9: abends mit Freunden draußen sportlich sein
HELP_DATA["lesen3_exam18_k"] = {
    text: "Heiße Rhythmen und kühle Drinks - Sie würden gerne abends etwas mit Freunden draußen unternehmen und dabei sportlich aktiv sein.",
    meaning: "إيقاعات ساخنة ومشروبات باردة - ترغب في القيام بنشاط مع الأصدقاء في الخارج مساءً وأن تكون نشيطاً بدنياً.",
    keywords: ["Rhythmen = إيقاعات", "sportlich = رياضي"],
    imagine: "🧠🏃 مجموعة من الأصدقاء يلعبون كرة القدم في ملعب ليلي."
};

// ============================================
// Exam 19 (exam19.json) - Aufräumen
// ============================================

// a → 0: Schränke voll, kaum Platz, Ideen ändern
HELP_DATA["lesen3_exam19_a"] = {
    text: "Das große Aufräumbuch - Alle Ihre Schränke sind voll mit Sachen und Sie haben kaum mehr Platz in der Wohnung. Sie suchen Ideen, wie Sie das ändern können.",
    meaning: "كتاب التنظيم الكبير - جميع خزائنك مليئة بالأشياء ولا يوجد لديك مساحة تقريباً في الشقة. تبحث عن أفكار لتغيير ذلك.",
    keywords: ["Aufräumbuch = كتاب تنظيم", "Platz = مساحة"],
    imagine: "🧠📦 رجل يقف أمام خزانة مفتوحة وملابس تسقط منه."
};

// b → 3: neue hochwertige Couch
HELP_DATA["lesen3_exam19_b"] = {
    text: "Einrichtungshaus Unterberg - Ihr Bruder sucht ein hochwertiges neues Sofa.",
    meaning: "متجر أثاث أونتربرغ - أخوك يبحث عن أريكة جديدة عالية الجودة.",
    keywords: ["Einrichtungshaus = متجر أثاث", "Sofa = أريكة"],
    imagine: "🧠🛋️ رجل يجلس على أريكة في المتجر ويختبرها."
};

// d → 8: Ausstellung auch für Kinder interessant
HELP_DATA["lesen3_exam19_d"] = {
    text: "Helden der Kindheit - Sie möchten eine Ausstellung besuchen, die auch für Ihre Kinder interessant ist.",
    meaning: "أبطال الطفولة - تريد زيارة معرض مثير للاهتمام أيضاً لأطفالك.",
    keywords: ["Helden = أبطال", "Kinder = أطفال"],
    imagine: "🧠🏛️ أب وابنه يقفان أمام تمثال لشخصية كرتونية."
};

// e → 2: Tipps zu Einrichtung und Wandfarben
HELP_DATA["lesen3_exam19_e"] = {
    text: "Henrike Derendorf: Das neue Wohnbuch - Eine Bekannte zieht um und sucht Tipps zu Einrichtung und Wandfarben.",
    meaning: "هنريك ديريندورف: كتاب السكن الجديد - إحدى المعارف تنتقل وتبحث عن نصائح حول التأثيث وألوان الجدران.",
    keywords: ["Wohnbuch = كتاب سكن", "Einrichtung = تأثيث"],
    imagine: "🧠🎨 امرأة تحمل دهاناً وتنظر إلى جدار أبيض."
};

// g → 6: Schwester will Hund in Mietwohnung halten
HELP_DATA["lesen3_exam19_g"] = {
    text: "Katze, Papagei, Meerschweinchen - was ist erlaubt? - Ihre Schwester möchte wissen, ob sie in ihre Mietwohnung einen Hund halten darf.",
    meaning: "قطة، ببغاء، خنزير غينيا - ما هو مسموح؟ - أختك تريد معرفة ما إذا كان بإمكانها تربية كلب في شقتها المستأجرة.",
    keywords: ["erlaubt = مسموح", "Hund = كلب"],
    imagine: "🧠🐕 امرأة تقف أمام باب شقتها وكلب يعوي بجانبها."
};

// i → 9: Kinderbuch über Tiere für siebenjährigen Sohn
HELP_DATA["lesen3_exam19_i"] = {
    text: "Rat mal, wo die Tiere wohnen! - Sie suchen ein Kinderbuch für Ihren siebenjährigen Sohn. Er möchte gerne mehr über Tiere erfahren.",
    meaning: "خمن أين تعيش الحيوانات! - تبحث عن كتاب أطفال لابنك ذي السبع سنوات. يريد معرفة المزيد عن الحيوانات.",
    keywords: ["Tiere = حيوانات", "Kinderbuch = كتاب أطفال"],
    imagine: "🧠📖 أب يقرأ كتاباً لابنه عن الحيوانات والولد يشير إلى صورة أسد."
};

// j → 1: Ausflug mit Familie, Tiere beobachten
HELP_DATA["lesen3_exam19_j"] = {
    text: "Tiere hautnah erleben - Eine Bekannte möchte mit ihrer Familie einen Ausflug machen und dabei am liebsten Tiere beobachten.",
    meaning: "تجربة الحيوانات عن قرب - إحدى المعارف تريد القيام برحلة مع عائلتها وتفضل مراقبة الحيوانات.",
    keywords: ["Tiere = حيوانات", "Ausflug = رحلة"],
    imagine: "🧠🦌 عائلة تقف سياج حديقة حيوانات وتنظر إلى زرافة."
};

// l → 4: Vater interessiert für alte wertvolle Möbel
HELP_DATA["lesen3_exam19_l"] = {
    text: "Wohnen in der Gründerzeit - Ihr Vater interessiert sich für alte wertvolle Möbel.",
    meaning: "السكن في فترة التأسيس - والدك مهتم بالأثاث القديم الثمين.",
    keywords: ["Gründerzeit = فترة التأسيس", "wertvolle Möbel = أثاث ثمين"],
    imagine: "🧠🪑 رجل كبير يجلس على كرسي قديم ويمسح الغبار عنه."
};

// ============================================
// Exam 20 (exam20.json) - Erholung und Reisen
// ============================================

// a → 8: liebt Bergwelt, kann keine steilen Wege gehen
HELP_DATA["lesen3_exam20_a"] = {
    text: "Urlaubsregion Allgäuer Alpen - Ein Bekannter liebt die Bergwelt, kann aber keine steilen und anstrengenden Wege mehr gehen.",
    meaning: "منطقة عطلات ألجاو الألبية - أحد المعارف يحب عالم الجبال ولكنه لم يعد يستطيع المشي في الطرق شديدة الانحدار والمتعبة.",
    keywords: ["Allgäuer Alpen = جبال الألب ألجاو", "Bergwelt = عالم الجبال"],
    imagine: "🧠🏔️ رجل كبير يقف أمام جبل وينظر إلى القمة ويتنهد."
};

// d → 2: mehrtägige Fußwanderung mit kultureller Vergangenheit
HELP_DATA["lesen3_exam20_d"] = {
    text: "Auf den Spuren des römischen Dichters Ausonius - Eine Bekannte möchte eine mehrtägige Fußwanderung machen und dabei etwas über die kulturelle Vergangenheit der Region erfahren.",
    meaning: "على خطى الشاعر الروماني أوسونيوس - إحدى المعارف تريد القيام برحلة مشي لعدة أيام ومعرفة شيء عن الماضي الثقافي للمنطقة.",
    keywords: ["Wanderweg = طريق مشي", "kulturelle Vergangenheit = ماض ثقافي"],
    imagine: "🧠🥾 امرأة تمشي على طريق ترابي وتحمل خريطة."
};

// f → 7: Hobbyzoologin interessiert für Lebensraum Küste
HELP_DATA["lesen3_exam20_f"] = {
    text: "Durch das Watt - Eine Bekannte ist Hobbyzoologin und interessiert sich für den Lebensraum 'Küste'.",
    meaning: "عبر منطقة المد والجزر - إحدى المعارف عالمة حيوانات هاوية ومهتمة بموطن 'الساحل'.",
    keywords: ["Watt = منطقة مد وجزر", "Küste = ساحل"],
    imagine: "🧠🌊 امرأة تمشي حافية القدمين على الرمال وتنظر إلى السرطانات الصغيرة."
};

// g → 0: miterleben wie Filmszenen gedreht werden
HELP_DATA["lesen3_exam20_g"] = {
    text: "Achtung, Kamera läuft! - Ein Bekannter möchte miterleben, wie spektakuläre Filmszenen gedreht werden.",
    meaning: "انتباه، الكاميرا تدور! - أحد المعارف يريد أن يشهد كيفية تصوير مشاهد سينمائية مثيرة.",
    keywords: ["Kamera = كاميرا", "Filmszenen = مشاهد سينمائية"],
    imagine: "🧠🎬 رجل يقف خلف الكاميرا ويشاهد ممثلين يقفزون."
};

// i → 5: Familie mit Kindern aktiven lustigen Tag verbringen
HELP_DATA["lesen3_exam20_i"] = {
    text: "Spiel und Spaß am Bodensee - Eine Familie möchte mit ihren Kindern einen aktiven und lustigen Tag verbringen.",
    meaning: "لعب ومتعة في بحيرة بودن - عائلة تريد قضاء يوم نشط وممتع مع أطفالها.",
    keywords: ["Spaß = مرح", "Familie = عائلة"],
    imagine: "🧠🎢 أطفال يركبون لعبة دوارة وأبوهم يصورهم."
};

// j → 6: neues Kniegelenk, sucht geeignete Kur
HELP_DATA["lesen3_exam20_j"] = {
    text: "Bad Elster - heilendes Wasser aus sprudelnden Quellen - Ein Bekannter hat ein neues Kniegelenk bekommen und sucht eine geeignete Kur.",
    meaning: "باد إلستر - ماء شاف من ينابيع فوارة - أحد المعارف حصل على مفصل ركبة جديد ويبحث عن علاج مناسب في منتجع صحي.",
    keywords: ["heilendes Wasser = ماء شاف", "Kur = علاج"],
    imagine: "🧠🏥 رجل يجلس في حوض ماء ساخن ويرفع ركبته ببطء."
};

// l → 3: sich in Kurort von Hektik erholen
HELP_DATA["lesen3_exam20_l"] = {
    text: "Bad Homburg - in einzigartiger Badekultur entspannen wie Könige - Eine Bekannte möchte sich in einem Kurort von der Hektik des Alltags erholen.",
    meaning: "باد هومبورغ - الاسترخاء في ثقافة استحمام فريدة مثل الملوك - إحدى المعارف تريد الاسترخاء في منتجع صحي من ضغوط الحياة اليومية.",
    keywords: ["Badekultur = ثقافة استحمام", "Kurort = منتجع صحي"],
    imagine: "🧠🧖‍♀️ امرأة مغمضة عينيها ووجهها مغطى بالطين."
};


// ============================================
// Exam 21 (exam21.json) - Sport
// ============================================

// a → 2: psychische Aspekte des Klettersports
HELP_DATA["lesen3_exam21_a"] = {
    text: "Die Österreicherin Gerlinde Kaltenbrunner - Sie möchten mehr über die psychischen Aspekte des Klettersports erfahren.",
    meaning: "النمساوية غيرلينده كالتنبرونر - تريد معرفة المزيد عن الجوانب النفسية لرياضة التسلق.",
    keywords: ["Bergsteigerin = متسلقة جبال", "psychischen Aspekte = جوانب نفسية"],
    imagine: "🧠🧗‍♀️ امرأة تقف على قمة جبل وتنظر إلى الأسفل بثبات."
};

// c → 7: gesundheitliche Auswirkungen von Sport
HELP_DATA["lesen3_exam21_c"] = {
    text: "Neue Studie erschienen - Sie suchen Informationen zu den gesundheitlichen Auswirkungen von Sport.",
    meaning: "دراسة جديدة صدرت - تبحث عن معلومات حول تأثيرات الرياضة على الصحة.",
    keywords: ["Studie = دراسة", "gesundheitlichen Auswirkungen = تأثيرات صحية"],
    imagine: "🧠📊 عالم يجلس أمام حاسوب وينظر إلى رسم بياني."
};

// e → 5: Freund besonderes Sporterlebnis schenken
HELP_DATA["lesen3_exam21_e"] = {
    text: "Nervenkitzel pur: Bungee-Jumping - Sie möchten einem Freund ein besonderes Sporterlebnis schenken.",
    meaning: "إثارة خالصة: القفز بالحبال - تريد إهداء صديقك تجربة رياضية مميزة.",
    keywords: ["Bungee-Jumping = قفز بالحبال", "Sporterlebnis = تجربة رياضية"],
    imagine: "🧠🪢 رجل يقف على حافة جسر وينظر إلى الأسفل."
};

// g → 1: Videos von besonderen Rettungseinsätzen
HELP_DATA["lesen3_exam21_g"] = {
    text: "Spektakuläre Feuerwehrübung - Sie interessieren sich für Videos von besonderen Rettungseinsätzen.",
    meaning: "تمرين إطفاء مذهل - أنت مهتم بمقاطع فيديو لعمليات إنقاذ خاصة.",
    keywords: ["Feuerwehrübung = تمرين إطفاء", "Rettungseinsätzen = عمليات إنقاذ"],
    imagine: "🧠🚒 رجل يشاهد مقطع فيديو على هاتفه عن رجال إطفاء."
};

// h → 0: bei Sportveranstaltung mitarbeiten
HELP_DATA["lesen3_exam21_h"] = {
    text: "Helfer und Helferinnen gesucht - Ein Freund von Ihnen möchte gerne bei einer Sportveranstaltung mitarbeiten.",
    meaning: "مطلوب مساعدين ومساعدات - صديق لك يريد العمل في حدث رياضي.",
    keywords: ["Helfer = مساعدين", "Sportveranstaltung = حدث رياضي"],
    imagine: "🧠🏃 رجل يقف على خط النهاية ويوزع الماء على العدائين."
};

// j → 3: Stadt schöner machen mithelfen
HELP_DATA["lesen3_exam21_j"] = {
    text: "Aktion 'Sauberes Grün' - Sie möchten mithelfen, Ihre Stadt schöner zu machen.",
    meaning: "حملة 'أخضر نظيف' - تريد المساعدة في جعل مدينتك أجمل.",
    keywords: ["Sauberes = نظيف", "Stadt = مدينة"],
    imagine: "🧠🗑️ شخص يلتقط القمامة من الأرض ويضعها في كيس."
};

// k → 6: sechzehnjährige Cousine mit kleinen Kindern
HELP_DATA["lesen3_exam21_k"] = {
    text: "Tag der offenen Tür in der städtischen Bücherei - Ihre sechzehnjährige Cousine beschäftigt sich gerne mit kleinen Kindern.",
    meaning: "يوم مفتوح في المكتبة البلدية - ابنة عمك ذات الـ 16 سنة تحب التعامل مع الأطفال الصغار.",
    keywords: ["Bücherei = مكتبة", "kleinen Kindern = أطفال صغار"],
    imagine: "🧠📖 فتاة مراهقة تجلس على الأرض وتقرأ قصة لأطفال."
};

// l → 9: kleiner Bruder will Feuerwehrauto sehen
HELP_DATA["lesen3_exam21_l"] = {
    text: "150 Jahre Stadtfeuerwehr - Ihr kleiner Bruder möchte einmal ein Feuerwehrauto aus der Nähe sehen.",
    meaning: "150 سنة لإطفاء المدينة - أخوك الصغير يريد رؤية سيارة إطفاء عن قرب.",
    keywords: ["Stadtfeuerwehr = إطفاء المدينة", "Feuerwehrauto = سيارة إطفاء"],
    imagine: "🧠🚒 ولد صغير يقف بجانب سيارة إطفاء حمراء ويلمسها."
};

// ============================================
// Exam 22 (exam22.json) - Sport (معدل)
// ============================================

// a → 3: psychische Aspekte des Klettersports
HELP_DATA["lesen3_exam22_a"] = {
    text: "Die Österreicherin Gerlinde Kaltenbrunner - Sie möchten mehr über die psychischen Aspekte des Klettersports erfahren.",
    meaning: "النمساوية غيرلينده كالتنبرونر - تريد معرفة المزيد عن الجوانب النفسية لرياضة التسلق.",
    keywords: ["Österreicherin = نمساوية", "Klettersports = رياضة التسلق"],
    imagine: "🧠⛰️ امرأة تمسك بحبل وتتسلق جرفاً صخرياً."
};

// c → 0: gesundheitliche Auswirkungen von Sport
HELP_DATA["lesen3_exam22_c"] = {
    text: "Neue Studie erschienen - Sie suchen Informationen zu den gesundheitlichen Auswirkungen von Sport.",
    meaning: "دراسة جديدة صدرت - تبحث عن معلومات حول تأثيرات الرياضة على الصحة.",
    keywords: ["Studie = دراسة", "gesundheitlichen = صحية"],
    imagine: "🧠📈 طبيب ينظر إلى رسم بياني لضربات القلب."
};

// e → 4: Freund besonderes Sporterlebnis schenken
HELP_DATA["lesen3_exam22_e"] = {
    text: "Nervenkitzel pur: Bungee-Jumping - Sie möchten einem Freund ein besonderes Sporterlebnis schenken.",
    meaning: "إثارة خالصة: القفز بالحبال - تريد إهداء صديقك تجربة رياضية مميزة.",
    keywords: ["Nervenkitzel = إثارة", "Sporterlebnis = تجربة رياضية"],
    imagine: "🧠🪢 شاب يربط الحبل حول قدميه وهو يبتسم بحماس."
};

// g → 2: Videos von besonderen Rettungseinsätzen
HELP_DATA["lesen3_exam22_g"] = {
    text: "Spektakuläre Feuerwehrübung - Sie interessieren sich für Videos von besonderen Rettungseinsätzen.",
    meaning: "تمرين إطفاء مذهل - أنت مهتم بمقاطع فيديو لعمليات إنقاذ خاصة.",
    keywords: ["Feuerwehrübung = تمرين إطفاء", "Rettungseinsätzen = إنقاذ"],
    imagine: "🧠🔥 رجل يشاهد رجال إطفاء وهم يخمدون حريقاً."
};

// h → 9: bei Sportveranstaltung mitarbeiten
HELP_DATA["lesen3_exam22_h"] = {
    text: "Helfer und Helferinnen gesucht - Ein Freund von Ihnen möchte gerne bei einer Sportveranstaltung mitarbeiten.",
    meaning: "مطلوب مساعدين ومساعدات - صديق لك يريد العمل في حدث رياضي.",
    keywords: ["Helfer = مساعدين", "Sportveranstaltung = حدث رياضي"],
    imagine: "🧠🏅 رجل يقف على جانب مضمار السباق ويشجع العدائين."
};

// j → 5: Stadt schöner machen
HELP_DATA["lesen3_exam22_j"] = {
    text: "Aktion 'Sauberes Grün' - Sie möchten dazu beitragen, Ihre Stadt schöner zu machen.",
    meaning: "حملة 'أخضر نظيف' - تريد المساهمة في جعل مدينتك أجمل.",
    keywords: ["Aktion = حملة", "Sauberes = نظيف"],
    imagine: "🧠🌳 أشخاص يزرعون شجرة صغيرة في الحديقة."
};

// k → 6: Cousine mit kleinen Kindern
HELP_DATA["lesen3_exam22_k"] = {
    text: "Tag der offenen Tür in der städtischen Bücherei - Ihre sechzehnjährige Cousine beschäftigt sich gerne mit kleinen Kindern.",
    meaning: "يوم مفتوح في المكتبة البلدية - ابنة عمك ذات الـ 16 سنة تحب التعامل مع الأطفال الصغار.",
    keywords: ["Bücherei = مكتبة", "Cousine = ابنة عم"],
    imagine: "🧠👧 فتاة تحمل طفلاً صغيراً على ذراعيها وهو يضحك."
};

// l → 8: kleiner Bruder will Feuerwehrauto sehen
HELP_DATA["lesen3_exam22_l"] = {
    text: "150 Jahre Stadtfeuerwehr - Ihr kleiner Bruder möchte einmal ein Feuerwehrauto aus der Nähe sehen.",
    meaning: "150 سنة لإطفاء المدينة - أخوك الصغير يريد رؤية سيارة إطفاء عن قرب.",
    keywords: ["Stadtfeuerwehr = إطفاء المدينة", "Feuerwehrauto = سيارة إطفاء"],
    imagine: "🧠👦 ولد صغير يضع يده على سيارة إطفاء حمراء وعيناه واسعتان."
};

// ============================================
// Exam 23 (exam23.json) - Wein und Insekten
// ============================================

// a → 2: wissen wie das Wetter in Italien ist
HELP_DATA["lesen3_exam23_a"] = {
    text: "Auf unserer Homepage finden Sie Wetterberichte - Eine Bekannte fährt in Urlaub und möchte wissen, wie das Wetter in Italien ist.",
    meaning: "على موقعنا تجد تقارير الطقس - إحدى المعارف تسافر في إجازة وتريد معرفة كيف سيكون الطقس في إيطاليا.",
    keywords: ["Wetterberichte = تقارير طقس", "Urlaub = إجازة"],
    imagine: "🧠☀️ امرأة تنظر إلى هاتفها لتتأكد من طقس الغد."
};

// c → 5: Bio-Weine und Reisen mit Arbeiten verbinden
HELP_DATA["lesen3_exam23_c"] = {
    text: "Wir bauen seit vier Generationen Wein an - Ihre Freundin interessiert sich für Bio-Weine und möchte Reisen und Arbeiten verbinden.",
    meaning: "نزرع الكرم منذ أربعة أجيال - صديقتك مهتمة بالنبيذ العضوي وتريد الجمع بين السفر والعمل.",
    keywords: ["Wein = نبيذ", "Reisen = سفر"],
    imagine: "🧠🍇 امرأة تقطف عنباً في كرم وتضعها في سلة."
};

// d → 6: Lebensbedingungen bei extremer Kälte
HELP_DATA["lesen3_exam23_d"] = {
    text: "23. November: Vortrag Zeinab Schmidt-Hussain - Sie möchten gerne mehr über die Lebensbedingungen bei extremer Kälte erfahren.",
    meaning: "23 نوفمبر: محاضرة زينب شميدت حسين - ترغب في معرفة المزيد عن ظروف المعيشة في البرد القارس.",
    keywords: ["Vortrag = محاضرة", "extremen Kälte = برد قارس"],
    imagine: "🧠❄️ شخص يقف في الثلج ويتجمد أنفاسه."
};

// e → 8: günstigen Wein für Familienfest bestellen
HELP_DATA["lesen3_exam23_e"] = {
    text: "Sie sind auf der Suche nach dem besten Preis-Leistungs-Verhältnis - Sie sollen im Internet günstigen Wein für ein Familienfest bestellen.",
    meaning: "أنت تبحث عن أفضل نسبة سعر إلى جودة - يجب عليك طلب نبيذ رخيص عبر الإنترنت لعطلة عائلية.",
    keywords: ["Preis-Leistungs-Verhältnis = نسبة سعر إلى جودة", "Familienfest = عطلة عائلية"],
    imagine: "🧠🍷 شخص يجلس أمام حاسبه ويطلب زجاجات نبيذ عبر الإنترنت."
};

// h → 3: auf Reise an Weinproben teilnehmen
HELP_DATA["lesen3_exam23_h"] = {
    text: "Für Liebhaber französischer Weine - Freunde von Ihnen möchten auf einer Reise im Ausland an Weinproben teilnehmen.",
    meaning: "لعشاق النبيذ الفرنسي - أصدقاؤك يريدون المشاركة في تذوق النبيذ في رحلة إلى الخارج.",
    keywords: ["Weine = نبيذ", "Weinproben = تذوق نبيذ"],
    imagine: "🧠🍷🍇 أصدقاء يجلسون حول طاولة ويشربون كؤوساً صغيرة."
};

// i → 7: lehrreichen Nachmittag für Kindergeburtstag
HELP_DATA["lesen3_exam23_i"] = {
    text: "Das Städtische Museum beherbergt eine Insektensammlung - Sie planen für den Kindergeburtstag Ihrer Tochter einen lehrreichen Nachmittag.",
    meaning: "المتحف البلدي يضم مجموعة حشرات - تخطط ليوم تعليمي لحفلة عيد ميلاد ابنتك بعد الظهر.",
    keywords: ["Insektensammlung = مجموعة حشرات", "Kindergeburtstag = عيد ميلاد أطفال"],
    imagine: "🧠🐞 أطفال يقفون حول علبة زجاجية بها حشرات."
};

// j → 1: Sturm hat Auto beschädigt
HELP_DATA["lesen3_exam23_j"] = {
    text: "Der Sturm deckt das Dach Ihres Wohnhauses ab - Ein Sturm hat Ihr Auto beschädigt. Sie möchten wissen, was Sie nun machen sollen.",
    meaning: "العاصفة تكشف سطح منزلك - عاصفة تسببت في تلف سيارتك. تريد معرفة ما الذي يجب عليك فعله الآن.",
    keywords: ["Sturm = عاصفة", "Auto = سيارة"],
    imagine: "🧠🚗💨 رجل يقف أمام سيارته وشجرة ساقطة بجانبها."
};

// l → 0: illustriertes Buch für Insektenarten
HELP_DATA["lesen3_exam23_l"] = {
    text: "Insektenwelten - der neue Insektenführer - Ein Nachbar sucht ein illustriertes Buch, um Insektenarten erkennen zu können.",
    meaning: "عوالم الحشرات - دليل الحشرات الجديد - جار يبحث عن كتاب مصور للتعرف على أنواع الحشرات.",
    keywords: ["Insektenführer = دليل حشرات", "Insektenarten = أنواع حشرات"],
    imagine: "🧠🐜 رجل يحمل عدسة مكبرة وينظر إلى خنفساء."
};

// ============================================
// Exam 24 (exam24.json) - Reiseführer
// ============================================

// a → 0: Angebote für Kinder in Ausstellung
HELP_DATA["lesen3_exam24_a"] = {
    text: "Baden wie vor 2000 Jahren - Ein Bekannter möchte mit seiner zehnjährigen Tochter eine Ausstellung besuchen, es sollte auch Angebote für Kinder geben.",
    meaning: "الاستحمام كما قبل 2000 سنة - أحد المعارف يريد زيارة معرض مع ابنته ذات العشر سنوات، ويجب أن تكون هناك عروض للأطفال أيضاً.",
    keywords: ["Baden = استحمام", "Ausstellung = معرض"],
    imagine: "🧠🏛️ أب وابنته يقفان أمام نموذج لحمام روماني قديم."
};

// c → 3: Vortrag zu historischem Thema
HELP_DATA["lesen3_exam24_c"] = {
    text: "Die Geschichte des Essens: Dessert - Ihr Bruder möchte einen Vortrag zu einem historischen Thema hören.",
    meaning: "تاريخ الطعام: الحلوى - أخوك يريد الاستماع إلى محاضرة عن موضوع تاريخي.",
    keywords: ["Geschichte = تاريخ", "Vortrag = محاضرة"],
    imagine: "🧠🍰 شاب جالس في قاعة محاضرات ويأخذ ملاحظات."
};

// f → 8: wissen wie Pflegeprodukte hergestellt werden
HELP_DATA["lesen3_exam24_f"] = {
    text: "Ein Blick hinter die Kulissen - Sie möchten wissen, wie Pflegeprodukte hergestellt werden.",
    meaning: "نظرة خلف الكواليس - تريد معرفة كيفية صنع منتجات العناية.",
    keywords: ["Kulissen = كواليس", "Pflegeprodukte = منتجات عناية"],
    imagine: "🧠🏭 شخص يقف في مصنع وينظر إلى آلات كبيرة."
};

// h → 7: besondere Stadtführung im Urlaub
HELP_DATA["lesen3_exam24_h"] = {
    text: "Rom bei Nacht - Sie möchten im Urlaub an einer besonderen Stadtführung teilnehmen.",
    meaning: "روما ليلاً - ترغب في المشاركة في جولة مدينة خاصة أثناء الإجازة.",
    keywords: ["Rom = روما", "Stadtführung = جولة مدينة"],
    imagine: "🧠🌙 شخصان يمشيان في شارع مضاء بالفوانيس."
};

// i → 8:?? i لها correct: null
// لا توجد إجابة صحيحة

// k → 1: als Stadtführerin arbeiten ohne Erfahrung
HELP_DATA["lesen3_exam24_k"] = {
    text: "Werden Sie Botschafter unserer Stadt! - Eine Freundin würde gerne als Stadtführerin arbeiten, hat aber noch keine Berufserfahrung.",
    meaning: "كن سفيراً لمدينتنا! - صديقة تريد العمل كمرشدة سياحية في المدينة، ولكن ليس لديها خبرة مهنية بعد.",
    keywords: ["Botschafter = سفير", "Stadtführerin = مرشدة مدينة"],
    imagine: "🧠🧭 امرأة تقف أمام مجموعة سياح وهم يلتقطون الصور."
};

// l → 9: leichte Unterhaltung und lachen
HELP_DATA["lesen3_exam24_l"] = {
    text: "Zwei Meister am Herd - Sie mögen leichte Unterhaltung und würden gerne mal wieder richtig lachen.",
    meaning: "سيدان في المطبخ - تحب الترفيه الخفيف وتريد الضحك بصوت عالٍ مرة أخرى.",
    keywords: ["Unterhaltung = ترفيه", "lachen = يضحك"],
    imagine: "🧠😂 شخص يجلس في سينما ويضحك بشدة حتى تدمع عيناه."
};

// ============================================
// Exam 25 (exam25.json) - Gartenbau
// ============================================

// a → 3: Architektur und Spaziergang mit Bauwerken
HELP_DATA["lesen3_exam25_a"] = {
    text: "Die 'Gärten der Welt' sind zehn Themengärten - Ihr Nachbar beschäftigt sich gerne mit Architektur. Er möchte an einem freien Nachmittag spazierengehen und dabei interessante Bauwerke ansehen.",
    meaning: "'حدائق العالم' هي عشرة حدائق ذات مواضيع - جارك مهتم بالهندسة المعمارية. يريد القيام بنزهة بعد ظهر يوم حر ورؤية المباني المثيرة للاهتمام.",
    keywords: ["Gärten = حدائق", "Architektur = عمارة"],
    imagine: "🧠🏛️ رجل يمشي بجانب مبنى قديم وينظر إلى تفاصيله."
};

// b → 9: abenteuerlichen Nachmittag mit Sohn
HELP_DATA["lesen3_exam25_b"] = {
    text: "Nach rechts, nach links oder geradeaus? - Sie möchten mit Ihrem zehnjährigen Sohn in der freien Natur einen abenteuerlichen und unterhaltsamen Nachmittag verbringen.",
    meaning: "إلى اليمين، إلى اليسار أو بشكل مستقيم؟ - تريد قضاء فترة بعد ظهر مليئة بالمغامرة والمرح مع ابنك ذي العشر سنوات في الطبيعة المفتوحة.",
    keywords: ["Irrgarten = متاهة", "Abenteuer = مغامرة"],
    imagine: "🧠🌳🌿 أب وابنه يمشيان بين أشجار طويلة ويبحثان عن مخرج."
};

// d → 8: exotische Vögel beobachten
HELP_DATA["lesen3_exam25_d"] = {
    text: "Palmen in der Großstadt - Ihre Tante möchte exotische Vögel beobachten.",
    meaning: "النخيل في المدينة الكبيرة - خالتك تريد مراقبة الطيور الغريبة.",
    keywords: ["Palmen = نخيل", "exotische Vögel = طيور غريبة"],
    imagine: "🧠🐦🦜 امرأة تحمل منظاراً وتنظر إلى ببغاء ملون."
};

// f → 6: Bilder mit Naturmotiven ansehen
HELP_DATA["lesen3_exam25_f"] = {
    text: "Erholung vom Alltagsstress - Ihre Nichte studiert Kunst und möchte sich Bilder mit Naturmotiven ansehen.",
    meaning: "الاسترخاء من ضغوط الحياة اليومية - ابنة أختك تدرس الفن وتريد مشاهدة لوحات ذات طابع طبيعي.",
    keywords: ["Erholung = استرخاء", "Naturmotiven = طابع طبيعي"],
    imagine: "🧠🖼️🌻 فتاة تقف أمام لوحة لزهور عباد الشمس."
};

// h → 1: Bücher über Gartengestaltung sammeln
HELP_DATA["lesen3_exam25_h"] = {
    text: "Meisterwerke der Gartenarchitektur - Ein Kollege sammelt Bücher über Gartengestaltung in unterschiedlichen Ländern und Epochen.",
    meaning: "روائع العمارة الحدائقية - زميل يجمع كتباً عن تصميم الحدائق في بلدان وعصور مختلفة.",
    keywords: ["Gartenarchitektur = عمارة حدائقية", "Gartengestaltung = تصميم حدائق"],
    imagine: "🧠📚🏰 رجل يقلب صفحات كتاب فيه صور لحدائق قديمة."
};

// i → 5: Garten neu gestalten mit Tipps aus der Praxis
HELP_DATA["lesen3_exam25_i"] = {
    text: "Einen Garten ganz nach den eigenen Vorstellungen anlegen - Ihre Mutter möchte den Garten neu gestalten und sucht Tipps aus der Praxis.",
    meaning: "إنشاء حديقة حسب رغباتك الخاصة - والدتك تريد إعادة تصميم الحديقة وتبحث عن نصائح عملية.",
    keywords: ["Garten = حديقة", "Tipps = نصائح"],
    imagine: "🧠🌱👩 امرأة تجلس على العشب وتقرأ كتاباً عن الزراعة."
};

// ============================================
// Exam 26 (exam26.json) - Haushaltshilfe
// ============================================

// b → 9: weniger Plastik im Haushalt
HELP_DATA["lesen3_exam26_b"] = {
    text: "Die Produktion und der Verbrauch von Kunststoff steigen - Sie möchten in Ihrem Haushalt weniger Plastik verwenden.",
    meaning: "إنتاج واستهلاك البلاستيك في ازدياد - تريد استخدام بلاستيك أقل في منزلك.",
    keywords: ["Kunststoff = بلاستيك", "Haushalt = منزل"],
    imagine: "🧠🛍️🚫 شخص يحمل كيس قماش بدلاً من كيس بلاستيكي."
};

// c → 3: einen Tag in Bäckerei arbeiten
HELP_DATA["lesen3_exam26_c"] = {
    text: "BÄCKEREI - KONDITOREI BROTECKE - Eine Freundin möchte einmal einen Tag lang in einer Bäckerei arbeiten.",
    meaning: "مخبز - حلويات بروتيكه - صديقة تريد العمل في مخبز ليوم واحد.",
    keywords: ["BÄCKEREI = مخبز", "arbeiten = يعمل"],
    imagine: "🧠🥖👩 امرأة تقف في مخبز وتعجن العجين."
};

// d → 0: Haushaltshilfe die im Garten hilft
HELP_DATA["lesen3_exam26_d"] = {
    text: "Brauchen Sie Unterstützung im Haushalt? - Ein Bekannter sucht eine Haushaltshilfe, die manchmal im Garten hilft.",
    meaning: "هل تحتاجين إلى مساعدة في المنزل؟ - أحد المعارف يبحث عن مساعدة منزلية تساعد أحياناً في الحديقة.",
    keywords: ["Unterstützung = مساعدة", "Garten = حديقة"],
    imagine: "🧠🧹🌿 رجل يقف أمام منزله وامرأة تحمل مقص أشجار بجانبه."
};

// f → 1: Schaufenster gestalten lernen
HELP_DATA["lesen3_exam26_f"] = {
    text: "Intensivkurs zur Dekorateurin/zum Dekorateur - Eine Bekannte möchte lernen, wie man Schaufenster gestaltet.",
    meaning: "دورة مكثفة لتصبح ديكورية/ديكوري - إحدى المعارف تريد تعلم كيفية تصميم واجهات المتاجر.",
    keywords: ["Dekorateurin = ديكورية", "Schaufenster = واجهات متاجر"],
    imagine: "🧠🪞👗 امرأة تقف أمام نافذة متجر وتعلق الملابس."
};

// g → 5: Mutter braucht Hilfe im Haushalt und Kochen
HELP_DATA["lesen3_exam26_g"] = {
    text: "Rebecca, 38. Ich bin auf der Suche nach Familien - Ihre Mutter braucht jemanden, der im Haushalt hilft und manchmal kocht.",
    meaning: "ريبيكا، 38. أنا أبحث عن عائلات - والدتك تحتاج إلى شخص يساعد في المنزل ويطبخ أحياناً.",
    keywords: ["Haushalt = منزل", "kocht = يطبخ"],
    imagine: "🧠🍲👵 امرأة تجلس على كرسي وشخص آخر يحضر لها الطعام في المطبخ."
};

// i → 2: Party für siebenjährige Tochter organisieren
HELP_DATA["lesen3_exam26_i"] = {
    text: "TORTEN UND MEHR... - Eine Freundin möchte eine besondere Party für ihre siebenjährige Tochter organisieren.",
    meaning: "كعك والمزيد... - صديقة تريد تنظيم حفلة خاصة لابنتها ذات السبع سنوات.",
    keywords: ["TORTEN = كعك", "Party = حفلة"],
    imagine: "🧠🎂🎈 امرأة تنفخ بالوناً وطفلة صغيرة بجانبها تبتسم."
};

// j → 8: Geburtstagstorte ohne Laktose
HELP_DATA["lesen3_exam26_j"] = {
    text: "LIZZIS BACKSTUBE - Sie möchten für Ihren Sohn eine Geburtstagstorte bestellen. Ihr Sohn verträgt keine Laktose.",
    meaning: "ليزيز باكشتوبه - تريد طلب كعكة عيد ميلاد لابنك. ابنك لا يتحمل اللاكتوز.",
    keywords: ["BACKSTUBE = مخبز صغير", "Geburtstagstorte = كعكة عيد ميلاد"],
    imagine: "🧠🎂❌ أم تنظر إلى كعكة جميلة وتسأل: هل فيها حليب؟"
};

// k → 4: Lesen zum Beruf machen
HELP_DATA["lesen3_exam26_k"] = {
    text: "Während der dreijährigen Ausbildung zur Buchhändlerin - Ihr Neffe liest gerne und möchte sein Hobby zu seinem Beruf machen.",
    meaning: "خلال التدريب المهني لمدة ثلاث سنوات ليصبح بائع كتب - ابن أختك يحب القراءة ويريد تحويل هوايته إلى مهنته.",
    keywords: ["Buchhändlerin = بائعة كتب", "Hobby = هواية"],
    imagine: "🧠📚👦 شاب يقف في مكتبة ويمسك كتاباً بين يديه ويبتسم."
};

// ============================================
// Exam 27 (exam27.json) - Einwanderung
// ============================================

// a → 0: Dokumentarfilm über Einwanderung nach Australien
HELP_DATA["lesen3_exam27_a"] = {
    text: "14.01. - 10:00 Uhr (VOX) McLeods Töchter - Sie möchten sich einen Dokumentarfilm über die Einwanderung nach Australien und über den damit verbundenen Prozess ansehen.",
    meaning: "14.01 - 10:00 صباحاً (VOX) بنات ماكلاود - تريد مشاهدة فيلم وثائقي عن الهجرة إلى أستراليا والعملية المرتبطة بها.",
    keywords: ["Einwanderung = هجرة", "Australien = أستراليا"],
    imagine: "🧠🦘📺 شخص يشاهد تلفازاً وفيه طائرة تهبط في مطار سيدني."
};

// b → 1: Au-pair oder Austauschschülerin werden
HELP_DATA["lesen3_exam27_b"] = {
    text: "14.01. - 16:00 Uhr (VOX) auf und davon - Ein junges Mädchen möchte später als Au-pair oder Austauschschülerin ins Ausland gehen und deshalb interessiert es sich für das Thema.",
    meaning: "14.01 - 16:00 (VOX) انطلق وابتعد - فتاة صغيرة تريد الذهاب إلى الخارج لاحقاً كفتاة سفر (أو باي) أو طالبة تبادل ولذلك فهي مهتمة بالموضوع.",
    keywords: ["Au-pair = فتاة سفر", "Austauschschülerin = طالبة تبادل"],
    imagine: "🧠👧✈️ فتاة مراهقة تجلس أمام حاسوبها وتتصفح برامج التبادل الثقافي."
};

// c → 3: Aufdeckung von Verbrechen früher
HELP_DATA["lesen3_exam27_c"] = {
    text: "SPIEGEL TV Thema: Die Chemie des Todes - Ein Mann interessiert sich für die Aufdeckung von Verbrechen, die früher nicht gelöst werden konnten.",
    meaning: "موضوع قناة شبيغل تي في: كيمياء الموت - رجل مهتم بكشف الجرائم التي لم يتم حلها سابقاً.",
    keywords: ["Verbrechen = جرائم", "aufdecken = يكشف"],
    imagine: "🧠🔬🧪 عالم يرتدي معطفاً أبيض وينظر إلى عينة تحت المجهر."
};

// d → 4: Krimis rekonstruiert aus echten Fällen
HELP_DATA["lesen3_exam27_d"] = {
    text: "16.01.2008 - 22:50 Uhr BBC Exklusiv - Sie schwärmen für Krimis, die auf Grund tatsächlicher Fälle rekonstruiert wurden.",
    meaning: "16.01.2008 - 22:50 بي بي سي حصري - أنت متحمس لأفلام الجريمة التي تم إعادة بنائها بناءً على قضايا حقيقية.",
    keywords: ["Krimis = أفلام جريمة", "tatsächlicher Fälle = قضايا حقيقية"],
    imagine: "🧠🔍🕵️ رجل يجلس على أريكته ويشاهد فيلماً عن تحقيق جنائي."
};

// e → 6: Gartenmagazin über Anbau von Gemüse
HELP_DATA["lesen3_exam27_e"] = {
    text: "Jamie At Home (RTL2) Samstags - Sie suchen ein Gartenmagazin, aus dem Sie alles über den Anbau von Gemüse- und Obstsorten erfahren können.",
    meaning: "جيمي في المنزل (RTL2) أيام السبت - تبحث عن مجلة بستنة تتعرف من خلالها على كل شيء عن زراعة الخضروات والفواكه.",
    keywords: ["Gartenmagazin = مجلة بستنة", "Anbau = زراعة"],
    imagine: "🧠🌽🍅 رجل يقف في حديقة منزله ويقطف طماطماً حمراء."
};

// f → 7: Quizsendung mit Familienmitgliedern
HELP_DATA["lesen3_exam27_f"] = {
    text: "Die Wahrheit und nichts als die Wahrheit - Sie möchten sich eine Quizsendung ansehen, an der Familienmitglieder teilnehmen.",
    meaning: "الحقيقة ولا شيء غير الحقيقة - تريد مشاهدة برنامج مسابقات يشارك فيه أفراد العائلة.",
    keywords: ["Quizsendung = برنامج مسابقات", "Familienmitglieder = أفراد عائلة"],
    imagine: "🧠📺🤔 عائلة جالسة على أريكة تشاهد برنامج مسابقات وتصرخ بالإجابات."
};

// h → 8: Reisefilm wie Traumschiff
HELP_DATA["lesen3_exam27_h"] = {
    text: "ML Mona Lisa (ZDF) - Traumurlaub ganz anders - Eine Bekannte von Ihnen sucht einen Reisefilm, ähnlich dem 'Traumschiff', in dem es während eines Reiseaufenthaltes alles über den Aufenthaltsort gezeigt wird.",
    meaning: "إم إل موناليزا (ZDF) - عطلة أحلام مختلفة تماماً - إحدى معارفك تبحث عن فيلم سفر شبيه بـ 'سفينة الأحلام' يُعرض فيه كل شيء عن مكان الإقامة أثناء الرحلة.",
    keywords: ["Reisefilm = فيلم سفر", "Traumschiff = سفينة أحلام"],
    imagine: "🧠🛳️🏝️ امرأة تشاهد التلفاز وترى سفينة سياحية كبيرة على الشاشة."
};

// k → 9: Bauernleben und passende Sendung
HELP_DATA["lesen3_exam27_k"] = {
    text: "Bauer sucht Frau Episode: Folge 3 - Ein Mann interessiert sich für das Bauernleben und sucht deshalb eine passende Sendung.",
    meaning: "مزارع يبحث عن زوجة الحلقة 3 - رجل مهتم بحياة المزارعين ولذلك يبحث عن برنامج مناسب.",
    keywords: ["Bauer = مزارع", "Bauernleben = حياة مزارع"],
    imagine: "🧠🐄🚜 رجل يجلس أمام التلفاز ويشاهد مزارعاً يحلب بقرة."
};

// ============================================
// Exam 28 (exam28.json) - Musikinstrumente
// ============================================

// b → 1: deutsche Geschäftsbriefe schreiben
HELP_DATA["lesen3_exam28_b"] = {
    text: "Deutsch im Beruf - An Ihrem Arbeitsplatz müssen Sie viele deutsche Geschäftsbriefe schreiben, sind aber oft unsicher und suchen einen entsprechenden Kurs.",
    meaning: "الألمانية في العمل - في مكان عملك، يجب أن تكتب العديد من الرسائل التجارية الألمانية، ولكنك غالباً ما تكون غير متأكد وتبحث عن دورة تدريبية مناسبة.",
    keywords: ["Geschäftsbriefe = رسائل تجارية", "Kurs = دورة"],
    imagine: "🧠✉️💼 رجل يجلس أمام حاسوبه وينظر إلى شاشة فارغة ولا يعرف ماذا يكتب."
};

// d → 2: Pressearbeit für Verein lernen
HELP_DATA["lesen3_exam28_d"] = {
    text: "Grundlagen der Pressearbeit für Vereine - Ihr Freund ist Vorsitzender eines Golfclubs und muss immer wieder Informationen an die Medien geben. Er möchte diese Aufgabe professionell erledigen.",
    meaning: "أساسيات العمل الصحفي للأندية - صديقك هو رئيس نادي غولف وعليه أن يقدم معلومات لوسائل الإعلام مراراً وتكراراً. يريد القيام بهذه المهمة بشكل احترافي.",
    keywords: ["Pressearbeit = عمل صحفي", "Verein = نادي"],
    imagine: "🧠🎤⛳ رجل يقف أمام صحفيين ويجيب على أسئلتهم بثقة."
};

// f → 5: Freundin zögert Entscheidungen zu treffen
HELP_DATA["lesen3_exam28_f"] = {
    text: "Entscheidungen leichter fällen - Ihre Freundin zögert häufig, sich auf eine Sache festzulegen. Hat sie schließlich einen Entschluss gefasst, bereut sie diesen bisweilen.",
    meaning: "اتخاذ القرارات بسهولة - صديقتك تتردد غالباً في الالتزام بشيء ما. وعندما تتخذ قراراً أخيراً، فإنها تندم عليه أحياناً.",
    keywords: ["Entscheidungen = قرارات", "zögert = تتردد"],
    imagine: "🧠🤔💭 امرأة تقف أمام بابين ولا تعرف أيهما تختار."
};

// g → 4: gesundheitliche Berufsausbildung mit Menschen
HELP_DATA["lesen3_exam28_g"] = {
    text: "Physiotherapie - Sie suchen eine gesundheitliche Berufsausbildung, und Sie interessieren sich für alles, wo Sie viel mit Menschen zu tun haben.",
    meaning: "علاج طبيعي - تبحث عن تدريب مهني صحي، وأنت مهتم بكل ما تتعامل فيه كثيراً مع الناس.",
    keywords: ["Physiotherapie = علاج طبيعي", "Berufsausbildung = تدريب مهني"],
    imagine: "🧠💪🤝 امرأة تساعد رجلاً كبيراً على المشي مرة أخرى."
};

// i → 7: wissenschaftliche Arbeitstechniken im Studium
HELP_DATA["lesen3_exam28_i"] = {
    text: "Referate und Hausarbeiten erfolgreich meistern - Sie beginnen gerade mit Ihrem Studium, beherrschen die wissenschaftlichen Arbeitstechniken noch nicht.",
    meaning: "إتقان العروض التقديمية والواجبات المنزلية بنجاح - أنت بدأت دراستك الجامعية للتو، ولم تتقن بعد تقنيات العمل العلمي.",
    keywords: ["Referate = عروض تقديمية", "wissenschaftlichen Arbeitstechniken = تقنيات العمل العلمي"],
    imagine: "🧠📚📝 شاب يجلس أمام كومة من الكتب ولا يعرف من أين يبدأ."
};

// j → 9: Vorbereitung auf Vorstellungsgespräch
HELP_DATA["lesen3_exam28_j"] = {
    text: "Souverän in Vorstellungsgesprächen - Sie haben sich auf eine Arbeitsstelle beworben und wollen sich gut vorbereiten, falls man Sie persönlich kennen lernen möchte.",
    meaning: "بثقة في مقابلات العمل - تقدمت لوظيفة وتريد الاستعداد جيداً في حال أرادوا مقابلتك شخصياً.",
    keywords: ["Vorstellungsgesprächen = مقابلات عمل", "vorbereiten = تستعد"],
    imagine: "🧠👔💼 شاب يقف أمام المرآة ويتمرن على الكلام."
};

// k → 3: Fähigkeit zur bildlichen Darstellung entwickeln
HELP_DATA["lesen3_exam28_k"] = {
    text: "Zeichnen für Anfänger - Eine Bekannte wird zur Erzieherin ausgebildet. Sie sucht einen Kurs, in dem sie die Fähigkeit zur bildlichen Darstellung entwickeln kann.",
    meaning: "الرسم للمبتدئين - إحدى المعارف تتدرب لتصبح مربية أطفال. تبحث عن دورة يمكنها من خلالها تطوير القدرة على التصوير البصري.",
    keywords: ["Zeichnen = رسم", "bildlichen Darstellung = تصوير بصري"],
    imagine: "🧠✏️🎨 امرأة ترسم شكلاً بسيطاً للأطفال بيدها."
};

// l → 6: Rezepte aus fernöstlicher Küche
HELP_DATA["lesen3_exam28_l"] = {
    text: "Traditionelle thailändische Speisen - Sie wollen aus der fernöstlichen Küche Rezepte kennenlernen.",
    meaning: "أطباق تايلاندية تقليدية - تريد التعرف على وصفات من المطبخ الشرق أقصى.",
    keywords: ["thailändische = تايلاندية", "Rezepte = وصفات"],
    imagine: "🧠🥢🍚 شخص يقف في المطبخ ويخلط الخضروات في مقلاة."
};

// ============================================
// Exam 29 (exam29.json) - Musikinstrumente (معدل)
// ============================================

// b → 1: deutsche Geschäftsbriefe schreiben
HELP_DATA["lesen3_exam29_b"] = {
    text: "Deutsch im Beruf - An Ihrem Arbeitsplatz müssen Sie viele deutsche Geschäftsbriefe schreiben, sind aber oft unsicher und suchen einen entsprechenden Kurs.",
    meaning: "الألمانية في العمل - في مكان عملك، يجب أن تكتب العديد من الرسائل التجارية الألمانية، ولكنك غالباً ما تكون غير متأكد وتبحث عن دورة تدريبية مناسبة.",
    keywords: ["Deutsch = ألمانية", "Geschäftsbriefe = رسائل تجارية"],
    imagine: "🧠📝✉️ موظف جالس أمام مكتبه وينظر إلى حاسوبه بتوتر."
};

// d → 2: Pressearbeit für Verein machen
HELP_DATA["lesen3_exam29_d"] = {
    text: "Grundlagen der Pressearbeit für Vereine - Ihr Freund ist Vorsitzender eines Golfclubs und muss immer wieder Informationen an die Medien geben. Er möchte diese Aufgabe professionell erledigen.",
    meaning: "أساسيات العمل الصحفي للأندية - صديقك هو رئيس نادي غولف وعليه أن يقدم معلومات لوسائل الإعلام مراراً وتكراراً. يريد القيام بهذه المهمة بشكل احترافي.",
    keywords: ["Pressearbeit = عمل صحفي", "Golfclubs = نادي غولف"],
    imagine: "🧠📸🎙️ رجل واقف أمام كاميرا التلفاز ويتحدث بثقة."
};

// f → 5: Freundin zögert Entscheidungen
HELP_DATA["lesen3_exam29_f"] = {
    text: "Entscheidungen leichter fällen - Ihre Freundin zögert häufig, sich auf eine Sache festzulegen. Hat sie schließlich einen Entschluss gefasst, bereut sie diesen bisweilen.",
    meaning: "اتخاذ القرارات بسهولة - صديقتك تتردد غالباً في الالتزام بشيء ما. وعندما تتخذ قراراً أخيراً، فإنها تندم عليه أحياناً.",
    keywords: ["Entscheidungen = قرارات", "zögert = تتردد"],
    imagine: "🧠🤷‍♀️😖 امرأة تنظر إلى قائمتي طعام ولا تعرف ماذا تطلب."
};

// g → 4: gesundheitliche Berufsausbildung
HELP_DATA["lesen3_exam29_g"] = {
    text: "Physiotherapie - Sie suchen eine gesundheitliche Berufsausbildung, und Sie interessieren sich für alles, wo Sie viel mit Menschen zu tun haben.",
    meaning: "علاج طبيعي - تبحث عن تدريب مهني صحي، وأنت مهتم بكل ما تتعامل فيه كثيراً مع الناس.",
    keywords: ["Physiotherapie = علاج طبيعي", "gesundheitliche = صحي"],
    imagine: "🧠🩺🤲 شخص يدلك كتف شخص آخر بلطف."
};

// i → 7: wissenschaftliche Arbeitstechniken im Studium
HELP_DATA["lesen3_exam29_i"] = {
    text: "Referate und Hausarbeiten erfolgreich meistern - Sie beginnen gerade mit Ihrem Studium, beherrschen die wissenschaftlichen Arbeitstechniken noch nicht.",
    meaning: "إتقان العروض التقديمية والواجبات المنزلية بنجاح - أنت بدأت دراستك الجامعية للتو، ولم تتقن بعد تقنيات العمل العلمي.",
    keywords: ["Studium = دراسة جامعية", "Arbeitstechniken = تقنيات العمل"],
    imagine: "🧠📖😟 طالب يجلس في مكتبة مزدحمة ولا يعرف كيف يبدأ بحثه."
};

// j → 9: Vorstellungsgespräch vorbereiten
HELP_DATA["lesen3_exam29_j"] = {
    text: "Souverän in Vorstellungsgesprächen - Sie haben sich auf eine Arbeitsstelle beworben und wollen sich gut vorbereiten, falls man Sie persönlich kennen lernen möchte.",
    meaning: "بثقة في مقابلات العمل - تقدمت لوظيفة وتريد الاستعداد جيداً في حال أرادوا مقابلتك شخصياً.",
    keywords: ["Vorstellungsgesprächen = مقابلات عمل", "beworben = تقدمت"],
    imagine: "🧠💼🪞 شاب يقف أمام المرآة ويربط ربطة عنقه بعناية."
};

// k → 3: bildliche Darstellung für Erzieherin
HELP_DATA["lesen3_exam29_k"] = {
    text: "Zeichnen für Anfänger - Eine Bekannte wird zur Erzieherin ausgebildet. Sie sucht einen Kurs, in dem sie die Fähigkeit zur bildlichen Darstellung entwickeln kann.",
    meaning: "الرسم للمبتدئين - إحدى المعارف تتدرب لتصبح مربية أطفال. تبحث عن دورة يمكنها من خلالها تطوير القدرة على التصوير البصري.",
    keywords: ["Erzieherin = مربية أطفال", "bildlichen Darstellung = تصوير بصري"],
    imagine: "🧠👧🐶 امرأة ترسم كلباً صغيراً على السبورة أمام أطفال صغار."
};

// l → 6: fernöstliche Küche
HELP_DATA["lesen3_exam29_l"] = {
    text: "Traditionelle thailändische Speisen - Sie wollen aus der fernöstlichen Küche Rezepte kennenlernen.",
    meaning: "أطباق تايلاندية تقليدية - تريد التعرف على وصفات من المطبخ الشرق أقصى.",
    keywords: ["thailändische = تايلاندية", "fernöstlichen Küche = مطبخ شرق أقصى"],
    imagine: "🧠🍜🥢 شخص يأكل من وعاء نودلز بعيدان صينية."
};

// ============================================
// Exam 30 (exam30.json) - Arbeitsorganisation
// ============================================

// a → 2: Beziehung zur Mutter des Mannes verbessern
HELP_DATA["lesen3_exam30_a"] = {
    text: "Schwiegermütter - Schwiegertöchter Problem oder Chance - Eine Bekannte möchte ihre Beziehung zur Mutter des Mannes verändern.",
    meaning: "الحموات والكنات مشكلة أم فرصة - إحدى المعارف تريد تغيير علاقتها بزوجة والد زوجها (أم الزوج).",
    keywords: ["Schwiegermütter = حموات", "Beziehung = علاقة"],
    imagine: "🧠👩‍👩‍👧 امرأة وامرأة أكبر منها تجلسان على أريكة وتتحدثان بجفاء."
};

// b → 3: Konfliktgespräche mit Frauen
HELP_DATA["lesen3_exam30_b"] = {
    text: "Mit Männern Gespräche führen - Ein Freund möchte etwas über Konfliktgespräche mit Frauen erfahren.",
    meaning: "قيادة المحادثات مع الرجال - صديق يريد معرفة شيء عن محادثات الصراع مع النساء.",
    keywords: ["Gespräche = محادثات", "Konfliktgespräche = محادثات صراع"],
    imagine: "🧠🗣️💬 رجل وامرأة يقفان وجهاً لوجه ويبدوان غاضبين."
};

// c → 8: Strategien lernen um Ziele zu erreichen
HELP_DATA["lesen3_exam30_c"] = {
    text: "Kommunikation - Eine Freundin möchte Strategien erlernen, wie man wirkungsvoller argumentiert und dadurch leichter seine Ziele erreicht.",
    meaning: "التواصل - صديقة تريد تعلم استراتيجيات للمناقشة بشكل أكثر فعالية وبالتالي تحقيق أهدافها بسهولة أكبر.",
    keywords: ["Kommunikation = تواصل", "argumentiert = يناقش"],
    imagine: "🧠💪🎯 امرأة واقفة أمام جمهور وتتحدث بحماس."
};

// e → 0: Arbeitsbereich strukturieren und Aufgaben erledigen
HELP_DATA["lesen3_exam30_e"] = {
    text: "Zeitmanagement - Eine Kollegin kann ihren Arbeitsbereich nicht gut strukturieren und hat deshalb Probleme, ihre Aufgaben rechtzeitig zu erledigen.",
    meaning: "إدارة الوقت - زميلة لا تستطيع تنظيم مجال عملها بشكل جيد ولذلك تواجه مشاكل في إنجاز مهامها في الوقت المحدد.",
    keywords: ["Zeitmanagement = إدارة وقت", "Aufgaben = مهام"],
    imagine: "🧠📋😫 امرأة تجلس أمام مكتب مليء بالأوراق ووجهها متعب."
};

// h → 9: Hundepension, Hunde missverstehen
HELP_DATA["lesen3_exam30_h"] = {
    text: "Mit Hunden sprechen - Ein Bekannter hat eine Hundepension. Er glaubt, dass er die ihm anvertrauten Tiere oft missversteht.",
    meaning: "التحدث مع الكلاب - أحد المعارف لديه فندق للكلاب. يعتقد أنه كثيراً ما يسيء فهم الحيوانات الموضوعة تحت رعايته.",
    keywords: ["Hunden = كلاب", "missversteht = يسيء الفهم"],
    imagine: "🧠🐕😕 رجل ينظر إلى كلب ينبح عليه ولا يفهم ماذا يريد."
};

// j → 1: kranker Hund braucht Hilfe
HELP_DATA["lesen3_exam30_j"] = {
    text: "Hilfe mein Haustier ist krank! - Ein Bekannter hat einen kranken Hund und sucht tierärztliche Hilfe.",
    meaning: "النجدة حيواني الأليف مريض! - أحد المعارف لديه كلب مريض ويبحث عن مساعدة بيطرية.",
    keywords: ["Haustier = حيوان أليف", "tierärztliche Hilfe = مساعدة بيطرية"],
    imagine: "🧠🐕🩺 رجل يحمل كلبه المتعب بين ذراعيه ويجري إلى العيادة."
};

// k → 5: Freundin schiebt Dinge auf
HELP_DATA["lesen3_exam30_k"] = {
    text: "Überwinde deinen inneren Schweinehund - Eine Freundin schiebt Dinge, die ihr keinen Spaß machen, immer vor sich her.",
    meaning: "تغلب على كسلك الداخلي - صديقة تؤجل الأشياء التي لا تستمتع بها دائماً.",
    keywords: ["Schweinehund = كسل", "schiebt auf = تؤجل"],
    imagine: "🧠📱😴 امرأة جالسة على أريكة وتمسح بهاتفها والأطباق المتسخة أمامها."
};

// ============================================
// Exam 31 (exam31.json) - Hunde
// ============================================

// a → 9: jungen Hund für Familie suchen
HELP_DATA["lesen3_exam31_a"] = {
    text: "Vier herzerliebste Mopswelpen - Sie suchen nach einem jungen Hund für Ihre Familie.",
    meaning: "أربعة من أجمل جراء الموبس - تبحث عن كلب صغير لعائلتك.",
    keywords: ["Mopswelpen = جراء موبس", "jungen Hund = كلب صغير"],
    imagine: "🧠🐶👨‍👩‍👧 عائلة تقف وأب يميل على صندوق فيه كلاب صغيرة تلهث."
};

// c → 3: Mitglied in Gesangverein werden
HELP_DATA["lesen3_exam31_c"] = {
    text: "Auenbacher Bach-Verein - Ihr Mann singt gerne und möchte Mitglied in einem Gesangverein werden.",
    meaning: "جوقة أوينباخر باخ - زوجك يحب الغناء ويريد أن يصبح عضواً في جوقة غنائية.",
    keywords: ["Verein = نادي/جوقة", "Gesangverein = جوقة غنائية"],
    imagine: "🧠🎤🎵 رجل يقف بين مجموعة من الناس وهم يغنون معاً وابتسامة على وجهه."
};

// f → 2: günstige Bücher für achtjährige Tochter
HELP_DATA["lesen3_exam31_f"] = {
    text: "Nach 30 Jahren am Völkerpark schließen wir unseren Laden - Eine Freundin möchte günstige Bücher für ihre achtjährige Tochter kaufen.",
    meaning: "بعد 30 عاماً في فولكربارك نغلق متجرنا - صديقة تريد شراء كتب رخيصة لابنتها ذات الثماني سنوات.",
    keywords: ["Bücher = كتب", "günstige = رخيصة"],
    imagine: "🧠👧📖 امرأة تقف أمام كومة كبيرة من الكتب وتختار مجموعة منها."
};

// g → 5: sich mit Menschen aus anderen Ländern treffen
HELP_DATA["lesen3_exam31_g"] = {
    text: "Neugründung eines interkulturellen Vereins - Ihre Familie möchte sich mit Menschen aus anderen Ländern treffen.",
    meaning: "تأسيس جديد لنادٍ متعدد الثقافات - عائلتك تريد مقابلة أشخاص من بلدان أخرى.",
    keywords: ["interkulturellen = متعدد الثقافات", "Menschen = أشخاص"],
    imagine: "🧠🌍🤝 عائلة تجلس حول طاولة كبيرة مع أشخاص من دول مختلفة."
};

// h → 6: sich informieren bevor Tochter Hund bekommt
HELP_DATA["lesen3_exam31_h"] = {
    text: "Sie möchten einen Hund kaufen? - Ihre Tochter wünscht sich einen Hund. Sie möchten sich zuerst informieren.",
    meaning: "هل تريد شراء كلب؟ - ابنتك تتمنى كلباً. تريد الاستعلام أولاً.",
    keywords: ["Hund = كلب", "informieren = تستعلم"],
    imagine: "🧠📱🤔 أم تجلس أمام حاسوبها وتقرأ عن تربية الكلاب وابنتها الصغيرة تجلس بجانبها متحمسة."
};

// i → 8: Kulturverein gründen
HELP_DATA["lesen3_exam31_i"] = {
    text: "Sportvereine, Musikvereine, Tanzvereine - Sie möchten einen Kulturverein gründen und sich informieren.",
    meaning: "أندية رياضية، أندية موسيقية، أندية رقص - تريد تأسيس نادٍ ثقافي والاستعلام.",
    keywords: ["Verein = نادي", "Kulturverein = نادي ثقافي"],
    imagine: "🧠📝🏛️ مجموعة من الناس جالسين حول طاولة وهم يخططون لتأسيس نادٍ على الورق."
};

// l → 1: Hundekorb für kleinen Hund
HELP_DATA["lesen3_exam31_l"] = {
    text: "Hundezubehör günstig abzugeben - Ein Freund braucht nur noch einen Hundekorb für seinen kleinen Hund.",
    meaning: "مستلزمات كلاب للبيع بسعر رخيص - صديق يحتاج فقط إلى سلة كلب لكلبه الصغير.",
    keywords: ["Hundezubehör = مستلزمات كلاب", "Hundekorb = سلة كلب"],
    imagine: "🧠🐕🛏️ رجل واقف في متجر ويضع يده على سلة ناعمة صغيرة اللون."
};

// ============================================
// Exam 32 (exam32.json) - schnelle Wasserfahrzeuge
// ============================================

// a → 4: Tageswanderungen in Gesellschaft
HELP_DATA["lesen3_exam32_a"] = {
    text: "Auf den Höhen des Rheins - Ein befreundetes Ehepaar macht gern Tageswanderungen in Gesellschaft.",
    meaning: "على مرتفعات نهر الراين - زوجان صديقان يحبان القيام برحلات مشي ليوم واحد برفقة آخرين.",
    keywords: ["Wanderungen = رحلات مشي", "Gesellschaft = برفقة"],
    imagine: "🧠🥾👫 رجل وامرأة يمشيان مع مجموعة من الناس على طريق جبلي ويضحكون."
};

// b → 7: alte Fahrzeuge und Tagesfahrt
HELP_DATA["lesen3_exam32_b"] = {
    text: "Eine Rheinfahrt, die ist lustig - Ihr Bruder interessiert sich für alte Fahrzeuge und möchte eine Tagesfahrt machen.",
    meaning: "رحلة على نهر الراين، إنها ممتعة - أخوك مهتم بالمركبات القديمة ويريد القيام برحلة ليوم واحد.",
    keywords: ["Rheinfahrt = رحلة نهر الراين", "alte Fahrzeuge = مركبات قديمة"],
    imagine: "🧠🚢🧑 رجل يقف على متن سفينة بخارية قديمة وينظر إلى عجلة القيادة."
};

// c → 5: gute Laufschuhe kaufen
HELP_DATA["lesen3_exam32_c"] = {
    text: "Der Wanderladen am Rathausplatz 4 - Eine Bekannte möchte gute Laufschuhe kaufen.",
    meaning: "متجر المشي لمسافات طويلة في ساحة البلدية 4 - إحدى المعارف تريد شراء أحذية جري جيدة.",
    keywords: ["Wanderladen = متجر مشي", "Laufschuhe = أحذية جري"],
    imagine: "🧠👟🏃‍♀️ امرأة تجلس على كرسي في متجر وتجرب حذاءاً رياضياً."
};

// f → 6: Geschichte der Erde
HELP_DATA["lesen3_exam32_f"] = {
    text: "Der Rhein und seine Geschichte - Ein Bekannter interessiert sich für die Geschichte der Erde und möchte sich weiterbilden.",
    meaning: "نهر الراين وتاريخه - أحد المعارف مهتم بتاريخ الأرض ويريد مواصلة تعليمه.",
    keywords: ["Geschichte = تاريخ", "Erde = أرض"],
    imagine: "🧠🗺️🌍 رجل جالس في محاضرة وينظر إلى شاشة عليها صورة ديناصور."
};

// h →?? h لها correct: null

// i → 3: Kinder lernen Umgang mit Tieren
HELP_DATA["lesen3_exam32_i"] = {
    text: "Ein Zoo für Jung und Alt - Ihre Nachbarn möchten, dass ihre 7- und 9-jährigen Töchter mehr über den Umgang مع Tieren lernen.",
    meaning: "حديقة حيوانات للصغار والكبار - جيرانك يريدون أن تتعلم بناتهم البالغات 7 و 9 سنوات المزيد عن التعامل مع الحيوانات.",
    keywords: ["Zoo = حديقة حيوانات", "Tieren = حيوانات"],
    imagine: "🧠🐐👧 بنتان صغيرتان تقفان أمام عنزة وتمسكان يديهما لتلمسها."
};

// k → 1: barfuß am Meer spazieren gehen
HELP_DATA["lesen3_exam32_k"] = {
    text: "Wattwanderung - Ein Bekannter möchte barfuß am Meer spazieren gehen.",
    meaning: "المشي في منطقة المد والجزر - أحد المعارف يريد المشي حافي القدمين على شاطئ البحر.",
    keywords: ["Wattwanderung = مشي في المد", "barfuß = حافي القدمين"],
    imagine: "🧠👣🌊 رجل يمشي على رمال مبللة وقدماه تترك أثراً خلفها."
};

// l → 0: schnelle Wasserfahrzeuge
HELP_DATA["lesen3_exam32_l"] = {
    text: "Die Nordseeküste wirbt für sich am Rhein - Ein Kollege interessiert sich für schnelle Wasserfahrzeuge.",
    meaning: "ساحل بحر الشمال يعلن عن نفسه على نهر الراين - زميل مهتم بالمركبات المائية السريعة.",
    keywords: ["Nordseeküste = ساحل بحر الشمال", "Wasserfahrzeuge = مركبات مائية"],
    imagine: "🧠🚤💨 رجل يقف على رصيف الميناء وينظر إلى قارب سريع يمر أمامه بسرعة."
};

// ============================================
// Exam 33 (exam33.json) - ein paar Tage in Berlin
// ============================================

// a → 7: unterhaltsamen Film anschauen
HELP_DATA["lesen3_exam33_a"] = {
    text: "Das Comedy Filmfest tourt auch dieses Jahr - Sie möchten mit Freunden einen unterhaltsamen Film anschauen.",
    meaning: "مهرجان الأفلام الكوميدية يجول هذا العام أيضاً - تريد مشاهدة فيلم ترفيهي مع أصدقائك.",
    keywords: ["Comedy = كوميديا", "unterhaltsamen Film = فيلم ترفيهي"],
    imagine: "🧠🍿😄 مجموعة من الأصدقاء يجلسون في صالة سينما ويأكلون الفشار ويضحكون."
};

// c → 9: mehrtägige Stadttour mit Freunden
HELP_DATA["lesen3_exam33_c"] = {
    text: "Berlin erleben - Sie würden gerne mit Freunden eine mehrtägige Stadttour machen und suchen ein Angebot.",
    meaning: "جوهرة برلين - ترغب في القيام بجولة مدينة لعدة أيام مع الأصدقاء وتبحث عن عرض.",
    keywords: ["Berlin = برلين", "Stadttour = جولة مدينة"],
    imagine: "🧠🏙️🗺️ ثلاثة أصدقاء يقفون أمام بوابة براندنبورغ ويمسكون خريطة."
};

// d → 1: bei einem Film mitspielen
HELP_DATA["lesen3_exam33_d"] = {
    text: "Berlin Gendarmenmarkt - Eine Bekannte träumt davon, selbst einmal bei einem Film mitzuspielen.",
    meaning: "برلين جندارمنماركت - إحدى المعارف تحلم بالتمثيل في فيلم مرة واحدة.",
    keywords: ["Film = فيلم", "mitzuspielen = تمثيل"],
    imagine: "🧠🎬🎭 امرأة تقف أمام كاميرا وتشير بيديها بشكل درامي."
};

// f → 0: verschiedene Kunstausstellungen in Berlin
HELP_DATA["lesen3_exam33_f"] = {
    text: "Eine Karte, 30 Häuser - Ein Bekannter hält sich einige Tage in Berlin auf und möchte in dieser Zeit verschiedene Kunstausstellungen besuchen.",
    meaning: "بطاقة واحدة، 30 متحفاً - أحد المعارف يقضي بضعة أيام في برلين ويريد زيارة معارض فنية مختلفة خلال هذا الوقت.",
    keywords: ["Karte = بطاقة", "Kunstausstellungen = معارض فنية"],
    imagine: "🧠🎨🖼️ رجل يقف أمام لوحة لبيكاسو في متحف وينظر إليها بتمعن."
};

// h → 3: Nebenjob viel Zeit draußen
HELP_DATA["lesen3_exam33_h"] = {
    text: "Stadtführungen in Berlin - Eine Freundin sucht einen Nebenjob, bei dem sie gerne viel Zeit im Freien verbringen würde.",
    meaning: "جولات سياحية في برلين - صديقة تبحث عن وظيفة جانبية تقضي فيها وقتاً طويلاً في الهواء الطلق.",
    keywords: ["Stadtführungen = جولات سياحية", "Nebenjob = وظيفة جانبية"],
    imagine: "🧠🧢🌞 امرأة واقفة تحت الشمس وتمسك بلافتة سياحية بيدها."
};

// i → 8: Kostüm für Mottoparty
HELP_DATA["lesen3_exam33_i"] = {
    text: "Feiern wie in den Goldenen Zwanzigern - Sie sind zu einer Kostüm-Party eingeladen und brauchen dafür etwas zum Anziehen.",
    meaning: "الاحتفال كما في العشرينيات الذهبية - أنت مدعو إلى حفلة أزياء تنكرية وتحتاج إلى شيء لترتديه.",
    keywords: ["Kostüm-Party = حفلة أزياء", "Anziehen = يرتدي"],
    imagine: "🧠👗💃 امرأة تقف أمام المرآة مرتدية فستاناً قديماً من العشرينيات وقبعة ريش."
};

// j → 6: besondere Stadtführung buchen
HELP_DATA["lesen3_exam33_j"] = {
    text: "Das etwas gemütlichere Berlin - Sie haben vor, eine besondere Stadtführung durch Berlin zu reservieren.",
    meaning: "برلين الأكثر راحة بعض الشيء - تخطط لحجز جولة مدينة مميزة في برلين.",
    keywords: ["Stadtführung = جولة مدينة", "reservieren = تحجز"],
    imagine: "🧠📞🗺️ شخص يتصل هاتفياً ويبتسم أثناء حجز جولته في برلين."
};

// k → 4: Nebenjob in den Sommermonaten
HELP_DATA["lesen3_exam33_k"] = {
    text: "Sie lieben Filme? Dann machen Sie doch das Kino zu Ihrem Arbeitsplatz - Ihr Cousin ist Student und möchte in den Sommermonaten einer Nebentätigkeit nachgehen.",
    meaning: "هل تحب الأفلام؟ إذن اجعل السينما مكان عملك - ابن عمك طالب ويريد القيام بعمل جانبي خلال أشهر الصيف.",
    keywords: ["Kino = سينما", "Nebentätigkeit = عمل جانبي"],
    imagine: "🧠🍿🎬 شاب يقف خلف كاونتر السينما ويبيع التذاكر ويبتسم."
};

// ============================================
// Exam 34 (exam34.json) - ein paar Tage in Berlin (معدل)
// ============================================

// a → 7: Film mit Freunden für gute Unterhaltung
HELP_DATA["lesen3_exam34_a"] = {
    text: "Das Comedy Filmfest tourt auch dieses Jahr - Sie planen, mit Ihren Freunden einen Film zu schauen, der gute Unterhaltung bietet.",
    meaning: "مهرجان الأفلام الكوميدية يجول هذا العام أيضاً - تخطط لمشاهدة فيلم مع أصدقائك يقدم ترفيهاً جيداً.",
    keywords: ["Comedy = كوميديا", "Unterhaltung = ترفيه"],
    imagine: "🧠🍿🎭 أربعة أصدقاء يجلسون على أريكة في المنزل ويشاهدون فيلماً مضحكاً."
};

// c → 9: mehrtägige Städtereise mit Freunden
HELP_DATA["lesen3_exam34_c"] = {
    text: "Berlin erleben - Sie planen eine mehrtägige Städtereise mit Freunden und möchten dafür ein geeignetes Angebot finden.",
    meaning: "جوهرة برلين - تخطط لرحلة مدينة لعدة أيام مع الأصدقاء وتريد العثور على عرض مناسب.",
    keywords: ["Städtereise = رحلة مدينة", "Freunden = أصدقاء"],
    imagine: "🧠✈️🏨 ثلاثة أصدقاء يحملون حقائب السفر ويقفون أمام فندق."
};

// d → 1: Rolle in einem Film spielen
HELP_DATA["lesen3_exam34_d"] = {
    text: "Berlin Gendarmenmarkt - Eine Freundin von mir wünscht sich, irgendwann selbst eine Rolle in einem Film zu spielen.",
    meaning: "برلين جندارمنماركت - صديقتي تتمنى أن تلعب دوراً في فيلم يوماً ما.",
    keywords: ["Rolle = دور", "Film = فيلم"],
    imagine: "🧠🎬🌟 امرأة تقف أمام مرآة كبيرة وتتدرب على أداء دورها بحماس."
};

// f → 0: verschiedene Kunstausstellungen in Berlin
HELP_DATA["lesen3_exam34_f"] = {
    text: "Eine Karte, 30 Häuser - Ein Bekannter hält sich einige Tage in Berlin auf und möchte in dieser Zeit verschiedene Kunstausstellungen besuchen.",
    meaning: "بطاقة واحدة، 30 متحفاً - أحد المعارف يقضي بضعة أيام في برلين ويريد زيارة معارض فنية مختلفة خلال هذا الوقت.",
    keywords: ["Kunstausstellungen = معارض فنية", "Berlin = برلين"],
    imagine: "🧠🖼️🏛️ رجل واقف في متحف طويل وينظر إلى تمثال رخامي كبير."
};

// h → 3: Nebenjob mit viel Zeit im Freien
HELP_DATA["lesen3_exam34_h"] = {
    text: "Stadtführungen in Berlin - Eine Freundin sucht einen Nebenjob, bei dem sie gerne viel Zeit im Freien verbringen würde.",
    meaning: "جولات سياحية في برلين - صديقة تبحث عن وظيفة جانبية تقضي فيها وقتاً طويلاً في الهواء الطلق.",
    keywords: ["Stadtführungen = جولات سياحية", "Freien = الهواء الطلق"],
    imagine: "🧠🧥❄️ امرأة تقف في طقس بارد وتشرح التاريخ لمجموعة من السياح."
};

// i → 8: Kostüm für Party
HELP_DATA["lesen3_exam34_i"] = {
    text: "Feiern wie in den Goldenen Zwanzigern - Sie gehen auf eine Kostümfeier und suchen dafür ein geeignetes Kostüm.",
    meaning: "الاحتفال كما في العشرينيات الذهبية - ستذهب إلى حفلة أزياء تنكرية وتبحث عن زي مناسب لذلك.",
    keywords: ["Kostümfeier = حفلة أزياء", "Kostüm = زي"],
    imagine: "🧠🕵️‍♂️👒 رجل أمام المرآة يرتدي قبعة رجل نبيل قديمة ومعطفاً طويلاً."
};

// j → 6: besondere Stadtführung reservieren
HELP_DATA["lesen3_exam34_j"] = {
    text: "Das etwas gemütlichere Berlin - Sie haben vor, eine besondere Stadtführung durch Berlin zu reservieren.",
    meaning: "برلين الأكثر راحة بعض الشيء - تخطط لحجز جولة مدينة مميزة في برلين.",
    keywords: ["Stadtführung = جولة مدينة", "reservieren = تحجز"],
    imagine: "🧠💻🗺️ شخص جالس أمام حاسوب وينقر على زر الحجز عبر الإنترنت لرحلة في برلين."
};

// k → 4: Student sucht Nebenjob in den Sommerferien
HELP_DATA["lesen3_exam34_k"] = {
    text: "Sie lieben Filme? Dann machen Sie doch das Kino zu Ihrem Arbeitsplatz - Ihr Cousin ist Student und möchte in den Sommermonaten einer Nebentätigkeit nachgehen.",
    meaning: "هل تحب الأفلام؟ إذن اجعل السينما مكان عملك - ابن عمك طالب ويريد القيام بعمل جانبي خلال أشهر الصيف.",
    keywords: ["Student = طالب", "Nebentätigkeit = عمل جانبي"],
    imagine: "🧠🎬👨‍🎓 شاب يرتدي قميص السينما الرسمي ويكنس أرضية القاعة."
};

// ============================================
// Exam 35 (exam35.json) - Autos
// ============================================

// a → 2: Wissen über Finanzen erweitern
HELP_DATA["lesen3_exam35_a"] = {
    text: "Alles rund um das Thema Geld - Ihr Bruder möchte in einem Kurs sein Wissen über Finanzen erweitern.",
    meaning: "كل شيء حول موضوع المال - أخوك يريد توسيع معرفته حول التمويل من خلال دورة تدريبية.",
    keywords: ["Geld = مال", "Finanzen = تمويل"],
    imagine: "🧠💰📊 رجل جالس في قاعة تدريب وينظر إلى سبورة مكتوب عليها أرقام."
};

// d → 5: Informationen über Kühlschrankmodelle
HELP_DATA["lesen3_exam35_d"] = {
    text: "Energiesparen leicht gemacht - Ihr Nachbar braucht einen neuen Kühlschrank und möchte sich über verschiedene Modelle informieren.",
    meaning: "توفير الطاقة بسهولة - جارك يحتاج إلى ثلاجة جديدة ويريد الاستعلام عن موديلات مختلفة.",
    keywords: ["Energiesparen = توفير طاقة", "Kühlschrank = ثلاجة"],
    imagine: "🧠❄️🔌 رجل يقف أمام صف من الثلاجات البيضاء ويقرأ بطاقات الأسعار."
};

// e → 8: auf PKW verzichten, Tipps suchen
HELP_DATA["lesen3_exam35_e"] = {
    text: "Entspannt unterwegs in der Stadt und auf dem Land - Sie möchten auf Ihren PKW verzichten und suchen Tipps.",
    meaning: "متنقلاً براحة في المدينة والريف - تريد الاستغناء عن سيارتك الخاصة وتبحث عن نصائح.",
    keywords: ["PKW = سيارة خاصة", "verzichten = تستغني"],
    imagine: "🧠🚲🌳 شخص يجلس على مقعد في الحديقة ويقرأ كتيباً عن وسائل النقل البديلة."
};

// f → 0: wertvolle alte Fahrzeuge
HELP_DATA["lesen3_exam35_f"] = {
    text: "Entdeckungsreise in die Welt der Technik - Ein Bekannter interessiert sich für wertvolle alte Fahrzeuge.",
    meaning: "رحلة استكشافية إلى عالم التقنية - أحد المعارف مهتم بالمركبات القديمة الثمينة.",
    keywords: ["Entdeckungsreise = رحلة استكشافية", "alte Fahrzeuge = مركبات قديمة"],
    imagine: "🧠🚗🔧 رجل ينحني أمام سيارة كلاسيكية حمراء وينظر إلى محركها."
};

// i → 3: mit schnellem Sportwagen fahren
HELP_DATA["lesen3_exam35_i"] = {
    text: "Rasantes Abenteuer für Autofans - Ihr Cousin würde gerne mal mit einem schnellen Sportwagen fahren.",
    meaning: "مغامرة سريعة لعشاق السيارات - ابن عمك يود القيادة بسيارة رياضية سريعة مرة واحدة.",
    keywords: ["Sportwagen = سيارة رياضية", "schnellen = سريعة"],
    imagine: "🧠🏎️💨 رجل جالس داخل سيارة فيراري حمراء ويداه على المقود وابتسامة عريضة."
};

// j → 6: Alternative zu öffentlichen Verkehrsmitteln
HELP_DATA["lesen3_exam35_j"] = {
    text: "Unkompliziert und spontan unterwegs sein - Ihre Schwester hat kein Auto. Für gelegentliche Fahrten sucht sie eine Alternative zu öffentlichen Verkehrsmitteln.",
    meaning: "التنقل بدون تعقيد وعفوية - أختك ليس لديها سيارة. للرحلات العرضية تبحث عن بديل لوسائل النقل العامة.",
    keywords: ["Alternative = بديل", "öffentlichen Verkehrsmitteln = وسائل نقل عامة"],
    imagine: "🧠📱🚗 امرأة تنظر إلى هاتفها وتضغط أيقونة سيارة مشاركة في التطبيق."
};

// k → 9: Stromverbrauch der Geräte wissen
HELP_DATA["lesen3_exam35_k"] = {
    text: "Versteckte Kosten? - Sie hatten eine hohe Stromrechnung und möchten wissen, wie viel Energie die Geräte in Ihrem Haushalt verbrauchen.",
    meaning: "تكاليف خفية؟ - كان لديك فاتورة كهرباء مرتفعة وتريد معرفة كمية الطاقة التي تستهلكها الأجهزة في منزلك.",
    keywords: ["Stromrechnung = فاتورة كهرباء", "Energie = طاقة"],
    imagine: "🧠💡🔌 رجل يقف أمام غسالة صحون ويضع جهاز قياس كهرباء صغيراً فيها بتركيز."
};

// l → 7: neue Haushaltsgeräte, nicht genug Geld
HELP_DATA["lesen3_exam35_l"] = {
    text: "Warum noch länger warten? - Sie brauchen bald neue Haushaltsgeräte, haben aber noch nicht genug Geld gespart.",
    meaning: "لماذا الانتظار أكثر؟ - ستحتاج قريباً إلى أجهزة منزلية جديدة، ولكنك لم تدخر ما يكفي من المال بعد.",
    keywords: ["Haushaltsgeräte = أجهزة منزلية", "Geld = مال"],
    imagine: "🧠🛒😟 امرأة تقف أمام غسالة جديدة في المتجر وتنظر إلى سعرها ويبدو عليها الحزن."
};

// ============================================
// Exam 36 (exam36.json) - Möbel für die neue Wohnung
// ============================================

// a → 5: Arbeiten hinter den Kulissen einer Show
HELP_DATA["lesen3_exam36_a"] = {
    text: "25 Jahre in Hamburg - Ihre Cousine schaut sich gerne Bühnenshows an und möchte wissen, welche Arbeiten hinter den Kulissen erledigt werden.",
    meaning: "25 عاماً في هامبورغ - ابنة عمتك تحب مشاهدة العروض المسرحية وتريد معرفة الأعمال التي تتم خلف الكواليس.",
    keywords: ["Bühnenshows = عروض مسرحية", "Kulissen = كواليس"],
    imagine: "🧠🎭🎪 امرأة تقف خلف الستارة وتنظر إلى العمال وهم يركضون يحملون الأزياء."
};

// c → 1: guten Kleidungsstil entwickeln
HELP_DATA["lesen3_exam36_c"] = {
    text: "Der perfekte Kleiderschrank - Eine Freundin hat viele Sachen zum Anziehen, die sie nie trägt. Sie möchte einen guten Kleidungsstil entwickeln.",
    meaning: "خزانة الملابس المثالية - صديقة لديها العديد من الأشكال التي لا ترتديها أبداً. تريد تطوير أسلوب ملابس جيد.",
    keywords: ["Kleiderschrank = خزانة ملابس", "Kleidungsstil = أسلوب ملابس"],
    imagine: "🧠👗👉 امرأة تقف أمام خزانة ملابسها ويديها على وركها تفكر."
};

// e → 2: Kleidung selbst herstellen und verkaufen
HELP_DATA["lesen3_exam36_e"] = {
    text: "www.selbstgemacht-info.net - Eine Nachbarin ist sehr kreativ und stellt Kleidung selbst her. Sie überlegt, ob sie diese auch verkaufen könnte.",
    meaning: "www.selbstgemacht-info.net - جارتك مبدعة جداً وتصنع الملابس بنفسها. تفكر فيما إذا كان بإمكانها بيعها أيضاً.",
    keywords: ["selbstgemacht = مصنوع يدوياً", "verkaufen = تبيع"],
    imagine: "🧠🪡👗 امرأة جالسة أمام ماكينة خياطة قديمة وتنظر إلى فستان جميل انتهت منه للتو."
};

// f → 0: viel Platz für Kleidung in neuer Wohnung
HELP_DATA["lesen3_exam36_f"] = {
    text: "Ihr Kleiderschrank platzt aus allen Nähten? - Eine Bekannte sucht Möbel für ihre neue Wohnung und wünscht sich viel Platz für ihre Kleidung.",
    meaning: "خزانة ملابسك تنفجر من كل الدرزات؟ - إحدى المعارف تبحث عن أثاث لشقتها الجديدة وتتمنى مساحة كبيرة لملابسها.",
    keywords: ["Kleiderschrank = خزانة ملابس", "Platz = مساحة"],
    imagine: "🧠📏👠 امرأة تقف في غرفة نوم فارغة وتفكر أين ستضع خزانة ملابسها الكبيرة."
};

// h → 3: auf der Bühne stehen (Casting)
HELP_DATA["lesen3_exam36_h"] = {
    text: "Regionale Musicalstars gesucht - Ihr 18-jähriger Bruder singt gerne in seiner Freizeit und träumt davon, mal auf der Bühne zu stehen.",
    meaning: "مطلوب نجوم مسرحيات غنائية محليين - أخوك البالغ 18 عاماً يحب الغناء في أوقات فراغه ويحلم بالوقوف على خشبة المسرح يوماً ما.",
    keywords: ["Musicalstars = نجوم مسرحيات غنائية", "Bühne = خشبة مسرح"],
    imagine: "🧠🎙️🎤 شاب واقف على خشبة المسرح ويغني بأعلى صوته والجمهور يصفق بشدة."
};

// i → 7: Praktikum als Moderedakteurin
HELP_DATA["lesen3_exam36_i"] = {
    text: "Mode, Stars, Lifestyle - Ihre Tochter ist Studentin und würde gerne Moderedakteurin werden. Sie möchte erste Erfahrungen in diesem Beruf sammeln.",
    meaning: "موضة، نجوم، نمط حياة - ابنتك طالبة جامعية وتود أن تصبح محررة أزياء. تريد اكتساب الخبرات الأولى في هذه المهنة.",
    keywords: ["Moderedakteurin = محررة أزياء", "Erfahrungen = خبرات"],
    imagine: "🧠👩‍💻📸 شابة تجلس أمام حاسوبها المحمول وتكتب مقالاً عن أحدث صيحات الموضة."
};

// j → 6: Zeitschriften von früher (Ausstellung)
HELP_DATA["lesen3_exam36_j"] = {
    text: "Streifzug durch die Modewelt - Ihre Schwester studiert Geschichte und interessiert sich für Zeitschriften von früher.",
    meaning: "جولة في عالم الموضة - أختك تدرس التاريخ ومهتمة بالمجلات القديمة.",
    keywords: ["Modewelt = عالم موضة", "Zeitschriften = مجلات"],
    imagine: "🧠📰👗 امرأة جالسة في أرشيف وتقلب صفحات مجلة أزياء قديمة جداً."
};

// l →?? l لها correct: null

// ============================================
// Exam 1 (exam1.json) - Hallo Ferdinand
// ============================================

HELP_DATA["sprach1_exam1_1"] = {
    text: "um meine Miete bezahlen zu können",
    meaning: "لكي أتمكن من دفع إيجاري",
    keywords: ["um...zu = لكي", "Miete = إيجار", "bezahlen = يدفع"],
    simplified: "لكي أتمكن من دفع الإيجار",
    imagine: "🏠💰 شخص يدفع نقوداً لمالك المنزل"
};

HELP_DATA["sprach1_exam1_2"] = {
    text: "ob ich das sonst durchhalten würde",
    meaning: "ما إذا كنت سأستمر بدونه",
    keywords: ["ob = ما إذا", "durchhalten = يستمر", "sonst = بدونه"],
    simplified: "لا أعرف إن كنت سأستمر بدونه",
    imagine: "🤔💪 شخص يتساءل هل سيكمل الطريق"
};

HELP_DATA["sprach1_exam1_3"] = {
    text: "aber andererseits ist dauernd was los",
    meaning: "لكن من ناحية أخرى هناك دائماً شيء يحدث",
    keywords: ["aber = لكن", "andererseits = من ناحية أخرى", "dauernd = دائماً"],
    simplified: "مرهق لكن فيه حركة دائماً",
    imagine: "😫🎉 شخص متعب لكنه يضحك مع أصدقائه"
};

HELP_DATA["sprach1_exam1_4"] = {
    text: "unbedingt Kellnerin werden",
    meaning: "بالتأكيد أصبح نادلة",
    keywords: ["unbedingt = بالتأكيد", "Kellnerin = نادلة", "werden = أصبح"],
    simplified: "أردت بشدة أن أصبح نادلة في سن الثامنة",
    imagine: "👧🍽️ طفلة صغيرة تحمل صينية وتضحك"
};

HELP_DATA["sprach1_exam1_5"] = {
    text: "Wenn ich mich nicht täusche",
    meaning: "إن لم أكن مخطئاً",
    keywords: ["mich täusche = أخطئ", "wenn = إذا", "nicht = لا"],
    simplified: "إن لم أكن مخطئاً، ستتخرج بعد ستة أشهر",
    imagine: "🤔📅 شخص يحسب الأشهر على أصابعه"
};

HELP_DATA["sprach1_exam1_6"] = {
    text: "als wir noch in der Schule gegangen sind",
    meaning: "عندما كنا لا نزال نذهب إلى المدرسة",
    keywords: ["als = عندما", "Schule = مدرسة", "gegangen = ذهبنا"],
    simplified: "عندما كنا في المدرسة",
    imagine: "🏫👧🧒 طفلان يمشيان إلى المدرسة"
};

HELP_DATA["sprach1_exam1_7"] = {
    text: "Pläne für die kommenden Wochenenden",
    meaning: "خطط لعطل نهاية الأسبوع القادمة",
    keywords: ["kommenden = القادمة", "Wochenenden = عطل نهاية الأسبوع", "Pläne = خطط"],
    simplified: "خطط لعطل نهاية الأسبوع المقبلة",
    imagine: "📅🗓️ شخص يضع علامة على تقويم الأسبوع القادم"
};

HELP_DATA["sprach1_exam1_8"] = {
    text: "hättest du Lust dazu",
    meaning: "هل لديك رغبة في ذلك",
    keywords: ["Lust = رغبة", "dazu = في ذلك", "hättest = هل لديك"],
    simplified: "هل ترغب في ذلك؟",
    imagine: "🤝❓ شخص يمد يده لآخر يسأله"
};

HELP_DATA["sprach1_exam1_9"] = {
    text: "nicht nur sehr leckere Kuchen, sondern auch einige kleine Gerichte",
    meaning: "ليس فقط كعكات شهية جداً، بل أيضاً بعض الأطباق الصغيرة",
    keywords: ["sondern = بل", "nicht nur = ليس فقط", "auch = أيضاً"],
    simplified: "ليس فقط كعكاً لذيذاً بل أيضاً أطباقاً صغيرة",
    imagine: "🍰🥗 شخص يأكل كعكة وطبقاً صغيراً معاً"
};

HELP_DATA["sprach1_exam1_10"] = {
    text: "Wäre das was für dich?",
    meaning: "هل هذا شيء يناسبك؟",
    keywords: ["für = لـ/يناسب", "dich = لك", "wäre = هل يكون"],
    simplified: "هل هذا مناسب لك؟",
    imagine: "☕❓ شخص يشير إلى كوب قهوة ويسأل صديقه"
};

// ============================================
// Exam 2 (exam2.json) - Hallo Ferdinand (معدل)
// ============================================

HELP_DATA["sprach1_exam2_1"] = {
    text: "um meine Miete bezahlen zu können",
    meaning: "لكي أتمكن من دفع إيجاري",
    keywords: ["um...zu = لكي", "Miete = إيجار", "bezahlen = يدفع"],
    simplified: "لكي أتمكن من دفع الإيجار",
    imagine: "🏠💰 شخص يدفع نقوداً لمالك المنزل"
};

HELP_DATA["sprach1_exam2_2"] = {
    text: "wie ich das sonst durchhalten würde",
    meaning: "كيف سأستمر بدونه",
    keywords: ["wie = كيف", "durchhalten = يستمر", "sonst = بدونه"],
    simplified: "لا أعرف كيف سأستمر بدونه",
    imagine: "🤔💪 شخص يتساءل كيف سيكمل الطريق"
};

HELP_DATA["sprach1_exam2_3"] = {
    text: "doch andererseits ist dauernd was los",
    meaning: "لكن من ناحية أخرى هناك دائماً شيء يحدث",
    keywords: ["doch = لكن", "andererseits = من ناحية أخرى", "dauernd = دائماً"],
    simplified: "مرهق لكن فيه حركة دائماً",
    imagine: "😫🎉 شخص متعب لكنه يضحك مع أصدقائه"
};

HELP_DATA["sprach1_exam2_4"] = {
    text: "unbedingt Kellnerin werden",
    meaning: "بالتأكيد أصبح نادلة",
    keywords: ["unbedingt = بالتأكيد", "Kellnerin = نادلة", "werden = أصبح"],
    simplified: "أردت بشدة أن أصبح نادلة في سن الثامنة",
    imagine: "👧🍽️ طفلة صغيرة تحمل صينية وتضحك"
};

HELP_DATA["sprach1_exam2_5"] = {
    text: "Wenn ich mich nicht täusche",
    meaning: "إن لم أكن مخطئاً",
    keywords: ["mich = نفسي", "täusche = أخطئ", "nicht = لا"],
    simplified: "إن لم أكن مخطئاً، ستتخرج بعد ستة أشهر",
    imagine: "🤔📅 شخص يحسب الأشهر على أصابعه"
};

HELP_DATA["sprach1_exam2_6"] = {
    text: "als wir noch in der Schule gegangen sind",
    meaning: "عندما كنا لا نزال نذهب إلى المدرسة",
    keywords: ["als = عندما", "Schule = مدرسة", "gegangen = ذهبنا"],
    simplified: "عندما كنا في المدرسة",
    imagine: "🏫👧🧒 طفلان يمشيان إلى المدرسة"
};

HELP_DATA["sprach1_exam2_7"] = {
    text: "Pläne für die kommenden Wochenenden",
    meaning: "خطط لعطل نهاية الأسبوع القادمة",
    keywords: ["kommenden = القادمة", "Wochenenden = عطل نهاية الأسبوع", "Pläne = خطط"],
    simplified: "خطط لعطل نهاية الأسبوع المقبلة",
    imagine: "📅🗓️ شخص يضع علامة على تقويم الأسبوع القادم"
};

HELP_DATA["sprach1_exam2_8"] = {
    text: "hättest du Lust dazu",
    meaning: "هل لديك رغبة في ذلك",
    keywords: ["Lust = رغبة", "dazu = في ذلك", "hättest = هل لديك"],
    simplified: "هل ترغب في ذلك؟",
    imagine: "🤝❓ شخص يمد يده لآخر يسأله"
};

HELP_DATA["sprach1_exam2_9"] = {
    text: "nicht nur sehr leckere Kuchen, ebenso auch einige kleine Gerichte",
    meaning: "ليس فقط كعكات شهية جداً، وكذلك أيضاً بعض الأطباق الصغيرة",
    keywords: ["ebenso = وكذلك", "nicht nur = ليس فقط", "auch = أيضاً"],
    simplified: "ليس فقط كعكاً لذيذاً بل أيضاً أطباقاً صغيرة",
    imagine: "🍰🥗 شخص يأكل كعكة وطبقاً صغيراً معاً"
};

HELP_DATA["sprach1_exam2_10"] = {
    text: "Wäre das was einfach dich?",
    meaning: "هل هذا شيء مناسب لك ببساطة؟",
    keywords: ["einfach = ببساطة", "dich = لك", "wäre = هل يكون"],
    simplified: "هل هذا مناسب لك ببساطة؟",
    imagine: "☕❓ شخص يشير إلى كوب قهوة ويسأل صديقه"
};

// ============================================
// Exam 3 (exam3.json) - Liebe Vanessa
// ============================================

HELP_DATA["sprach1_exam3_1"] = {
    text: "über den ich mich total gefreut habe",
    meaning: "الذي فرحت به كثيراً",
    keywords: ["über den = الذي", "mich gefreut = فرحت", "total = كثيراً"],
    simplified: "الذي فرحت به كثيراً",
    imagine: "📨😊 شخص يفتح رسالة ويبتسم"
};

HELP_DATA["sprach1_exam3_2"] = {
    text: "nichts mehr von mir gehört hast",
    meaning: "لم تسمع مني شيئاً بعد الآن",
    keywords: ["nichts mehr = لا شيء بعد الآن", "gehört = سمعت", "von mir = مني"],
    simplified: "لم تسمع مني شيئاً منذ ثلاث سنوات",
    imagine: "📞😐 شخص ينظر إلى هاتفه ولا توجد مكالمات"
};

HELP_DATA["sprach1_exam3_3"] = {
    text: "Du weißt doch selbst",
    meaning: "أنت تعلمين بنفسك",
    keywords: ["doch = بالتأكيد", "selbst = بنفسك", "weißt = تعلمين"],
    simplified: "أنت تعلمين بنفسك كم هو مرهق",
    imagine: "🤷‍♀️🤦‍♀️ امرأة ترفع يديها وتقول أنت تعلمين"
};

HELP_DATA["sprach1_exam3_4"] = {
    text: "Wie ist es übrigens",
    meaning: "كيف الحال بالمناسبة",
    keywords: ["Wie = كيف", "übrigens = بالمناسبة", "ist es = هو"],
    simplified: "كيف الحال بالمناسبة في عائلتك؟",
    imagine: "🤔❓ امرأة تسأل صديقتها"
};

HELP_DATA["sprach1_exam3_5"] = {
    text: "am Fuß der Alpen",
    meaning: "عند سفح جبال الألب",
    keywords: ["Fuß = سفح", "der Alpen = جبال الألب", "am = عند"],
    simplified: "عند سفح جبال الألب",
    imagine: "⛰️🏔️ جبال عالية وقرية صغيرة عند أسفلها"
};

HELP_DATA["sprach1_exam3_6"] = {
    text: "haben ständig die Füße weh getan",
    meaning: "كانت أقدامهم تؤلمهم باستمرار",
    keywords: ["weh getan = آلمت", "Füße = أقدام", "ständig = باستمرار"],
    simplified: "أقدامهم كانت تؤلمهم دائماً",
    imagine: "🦶😖 شخص يمسك بقدميه ويتألم"
};

HELP_DATA["sprach1_exam3_7"] = {
    text: "bis sie vor Erschöpfung umfallen",
    meaning: "حتى يسقطوا من الإرهاق",
    keywords: ["umfallen = يسقط", "Erschöpfung = إرهاق", "bis = حتى"],
    simplified: "حتى يسقطوا من الإرهاق",
    imagine: "😫🧑‍🦯 شخص يسقط على الأرض بعد مشي طويل"
};

HELP_DATA["sprach1_exam3_8"] = {
    text: "Stell dir vor",
    meaning: "تخيل لنفسك",
    keywords: ["Stell dir = تخيل لنفسك", "vor = إلى الأمام"],
    simplified: "تخيل لنفسك كل الناس يمشون حفاة",
    imagine: "🤔🩴 شخص يتخيل مشهداً غريباً"
};

HELP_DATA["sprach1_exam3_9"] = {
    text: "jede Menge Hindernisse",
    meaning: "الكثير من العقبات",
    keywords: ["jede Menge = الكثير من", "Hindernisse = عقبات", "gibt es = هناك"],
    simplified: "هناك الكثير من العقبات أمام الحفرة",
    imagine: "⛳🏌️ جولف وعقبات كثيرة أمام الحفرة"
};

HELP_DATA["sprach1_exam3_10"] = {
    text: "wollten gar nicht mehr damit aufhören",
    meaning: "لم يريدوا التوقف أبداً",
    keywords: ["damit = بهذا", "aufhören = يتوقف", "gar nicht = أبداً"],
    simplified: "لم يريدوا التوقف عن اللعب",
    imagine: "👦👧🏌️ أطفال يلعبون ويضحكون ولا يريدون المغادرة"
};

// ============================================
// Exam 4 (exam4.json) - Hallo Judith / Lina
// ============================================

HELP_DATA["sprach1_exam4_1"] = {
    text: "Hoffentlich rufst du heute schon deine E-Mails ab",
    meaning: "آمل أن تتصفح رسائلك الإلكترونية اليوم",
    keywords: ["Hoffentlich = آمل", "E-Mails = رسائل إلكترونية", "abrufst = تتصفح"],
    simplified: "أتمنى أن تقرئي رسائلك اليوم",
    imagine: "📧🙏 شخص يتوسل أن يقرأ الآخر بريده"
};

HELP_DATA["sprach1_exam4_2"] = {
    text: "Wir möchten nämlich unserer Kollegin Elena",
    meaning: "نحن نريد بالتحديد زميلتنا إيلينا",
    keywords: ["nämlich = بالتحديد", "Kollegin = زميلة", "möchten = نريد"],
    simplified: "نريد بالتحديد زميلتنا إيلينا",
    imagine: "👩‍💼🎁 فريق عمل يفكر في هدية لزميلتهم"
};

HELP_DATA["sprach1_exam4_3"] = {
    text: "ist ja schon übermorgen abends",
    meaning: "هي بالفعل بعد غد مساءً",
    keywords: ["schon = بالفعل", "übermorgen = بعد غد", "abends = مساءً"],
    simplified: "حفلتها بعد غد مساءً",
    imagine: "📅🎉 تقويم يشير إلى يوم بعد غد"
};

HELP_DATA["sprach1_exam4_4"] = {
    text: "Bist du damit einverstanden",
    meaning: "هل أنت موافقة على ذلك؟",
    keywords: ["damit = على ذلك", "einverstanden = موافقة", "bist du = هل أنت"],
    simplified: "هل توافقين على ذلك؟",
    imagine: "🤝✅ شخص يسأل الآخر هل توافق"
};

HELP_DATA["sprach1_exam4_5"] = {
    text: "Als wir das letzte Mal gesammelt hatten",
    meaning: "عندما جمعنا آخر مرة",
    keywords: ["Als = عندما", "letzte Mal = آخر مرة", "gesammelt = جمعنا"],
    simplified: "عندما جمعنا التبرعات آخر مرة",
    imagine: "💰📦 شخص يجمع نقوداً في صندوق"
};

HELP_DATA["sprach1_exam4_6"] = {
    text: "gehen dann nachmittags miteinander in der Stadt einkaufen",
    meaning: "نذهب بعد الظهر معاً للتسوق في المدينة",
    keywords: ["miteinander = معاً", "einkaufen = للتسوق", "nachmittags = بعد الظهر"],
    simplified: "نذهب معاً للتسوق بعد الظهر",
    imagine: "🛍️👭 صديقتان تتسوقان معاً"
};

HELP_DATA["sprach1_exam4_7"] = {
    text: "könntest du dann übermorgen noch kurz vor der Feier unterschreiben",
    meaning: "يمكنك التوقيع بعد غد قبل الحفل بفترة قصيرة",
    keywords: ["kurz = لفترة قصيرة", "unterschreiben = التوقيع", "vor der Feier = قبل الحفل"],
    simplified: "يمكنك التوقيع قبل الحفل بفترة قصيرة",
    imagine: "✍️📝 شخص يوقع على بطاقة قبل الحفلة"
};

HELP_DATA["sprach1_exam4_8"] = {
    text: "weshalb ich sehr viel zu tun hatte",
    meaning: "لذلك كان لدي الكثير لأفعله",
    keywords: ["weshalb = لذلك", "viel zu tun = الكثير لأفعله", "hatte = كان"],
    simplified: "لذلك كان لدي عمل كثير",
    imagine: "📋😫 شخص أمامه كومة من الأوراق"
};

HELP_DATA["sprach1_exam4_9"] = {
    text: "vollkommen neue Entwicklungen",
    meaning: "تطورات جديدة تماماً",
    keywords: ["vollkommen = تماماً", "neue = جديدة", "Entwicklungen = تطورات"],
    simplified: "تطورات جديدة كلياً في الشركة",
    imagine: "🏢✨ شركة تتغير وتتطور"
};

HELP_DATA["sprach1_exam4_10"] = {
    text: "Ich wünsche dir heute einen angenehmen Tag",
    meaning: "أتمنى لك يوماً لطيفاً اليوم",
    keywords: ["angenehmen = لطيفاً", "Tag = يوماً", "wünsche = أتمنى"],
    simplified: "أتمنى لك يوماً لطيفاً",
    imagine: "☀️😊 شخص يقول لآخر أتمنى لك يوماً جميلاً"
};

// ============================================
// Exam 5 (exam5.json) - Liebe Karin
// ============================================

HELP_DATA["sprach1_exam5_1"] = {
    text: "das studieren, was du möchtest",
    meaning: "تدرس ما تريدينه",
    keywords: ["was = ما", "möchtest = تريدين", "studieren = تدرس"],
    simplified: "تدرسين ما تريدينه أخيراً",
    imagine: "📚😊 فتاة تدرس كتباً بفرح"
};

HELP_DATA["sprach1_exam5_2"] = {
    text: "Wie ist es denn so an der Uni dort?",
    meaning: "كيف الحال في الجامعة هناك؟",
    keywords: ["denn = إذاً", "so = هكذا", "Uni = جامعة"],
    simplified: "كيف الحياة في الجامعة هناك؟",
    imagine: "🏫❓ شخص يسأل عن صديقته في الجامعة"
};

HELP_DATA["sprach1_exam5_3"] = {
    text: "Musst du zuhause auch noch viel lernen?",
    meaning: "هل يجب عليك أن تتعلمي كثيراً أيضاً في المنزل؟",
    keywords: ["zuhause = في المنزل", "noch = أيضاً", "viel lernen = تعلمي كثيراً"],
    simplified: "هل لديك واجبات كثيرة في المنزل أيضاً؟",
    imagine: "🏠📚 طالبة تذاكر على مكتبها في المنزل"
};

HELP_DATA["sprach1_exam5_4"] = {
    text: "Deshalb würde ich deine Einladung wirklich gerne annehmen",
    meaning: "لذلك أرغب حقاً في قبول دعوتك",
    keywords: ["annehmen = قبول", "Einladung = دعوة", "gerne = أرغب"],
    simplified: "أرغب حقاً في قبول دعوتك لزيارتك",
    imagine: "✉️👍 شخص يقرأ دعوة ويبتسم"
};

HELP_DATA["sprach1_exam5_5"] = {
    text: "weil ich mich viel um Jonas kümmern muss",
    meaning: "لأنه يجب علي أن أعتني بيوناس كثيراً",
    keywords: ["kümmern = أعتني", "um = بـ", "viel = كثيراً"],
    simplified: "لأني أعتني كثيراً بيوناس الصغير",
    imagine: "👶🍼 امرأة تحمل طفلاً بين يديها"
};

HELP_DATA["sprach1_exam5_6"] = {
    text: "Aber sobald frei hat, komme ich mal für ein, zwei Tage zu dir",
    meaning: "بمجرد أن يكون لديه إجازة، سآتي إليك ليوم أو يومين",
    keywords: ["sobald = بمجرد", "frei hat = لديه إجازة", "komme ich = سآتي"],
    simplified: "بمجرد أن يأخذ إجازة، سآتي إليك",
    imagine: "🗓️✈️ شخص ينظر إلى التقويم ويخطط لرحلة"
};

HELP_DATA["sprach1_exam5_7"] = {
    text: "In einer Wohngemeinschaft zu leben, ist bestimmt toll, auch wenn es mal Streit gibt",
    meaning: "العيش في مجتمع سكني هو بالتأكيد رائع، حتى لو حدث شجار أحياناً",
    keywords: ["auch wenn = حتى لو", "Streit = شجار", "toll = رائع"],
    simplified: "العيش المشترك رائع حتى لو اختلفتم أحياناً",
    imagine: "🏠👥 شبان يعيشون معاً ويضحكون رغم الاختلافات"
};

HELP_DATA["sprach1_exam5_8"] = {
    text: "Das freut mich wirklich für dich!",
    meaning: "هذا يسرني حقاً لأجلك!",
    keywords: ["freut mich = يسرني", "für dich = لأجلك", "wirklich = حقاً"],
    simplified: "أنا حقاً سعيدة لأجلك!",
    imagine: "😊🎉 شخص يفرح لنجاح صديقه"
};

HELP_DATA["sprach1_exam5_9"] = {
    text: "Wir hatten neulich mal überlegt, in eine größere Wohnung zu ziehen",
    meaning: "كنا نفكر مؤخراً في الانتقال إلى شقة أكبر",
    keywords: ["neulich = مؤخراً", "überlegt = فكرنا", "größere Wohnung = شقة أكبر"],
    simplified: "كنا نفكر مؤخراً في الانتقال لشقة أكبر",
    imagine: "🏠📦 عائلة تنظر إلى شقة جديدة خالية"
};

HELP_DATA["sprach1_exam5_10"] = {
    text: "und wir wollen uns nicht viel zumuten",
    meaning: "ولا نريد أن نرهق أنفسنا كثيراً",
    keywords: ["wollen = نريد", "zumuten = نرهق", "viel = كثيراً"],
    simplified: "لا نريد أن نضغط على أنفسنا كثيراً",
    imagine: "😌🚫 شخص يرفع يده رافضاً فكرة مرهقة"
};

// ============================================
// Exam 6 (exam6.json) - Liebe Karin (معدل)
// ============================================

HELP_DATA["sprach1_exam6_1"] = {
    text: "Endlich kannst du auch das studieren, was du möchtest",
    meaning: "أخيراً يمكنك دراسة ما تريدينه",
    keywords: ["was = ما", "möchtest = تريدين", "endlich = أخيراً"],
    simplified: "تدرسين ما تريدينه أخيراً",
    imagine: "📚😊 فتاة تدرس كتباً بفرح"
};

HELP_DATA["sprach1_exam6_2"] = {
    text: "Wie ist es denn so an der Uni dort?",
    meaning: "كيف الحال في الجامعة هناك؟",
    keywords: ["denn = إذاً", "so = هكذا", "Uni = جامعة"],
    simplified: "كيف الحياة في الجامعة هناك؟",
    imagine: "🏫❓ شخص يسأل عن صديقته في الجامعة"
};

HELP_DATA["sprach1_exam6_3"] = {
    text: "Musst du zuhause auch noch viel lernen?",
    meaning: "هل يجب عليك أن تتعلمي كثيراً أيضاً في المنزل؟",
    keywords: ["zuhause = في المنزل", "noch = أيضاً", "viel lernen = تعلمي كثيراً"],
    simplified: "هل لديك واجبات كثيرة في المنزل أيضاً؟",
    imagine: "🏠📚 طالبة تذاكر على مكتبها في المنزل"
};

HELP_DATA["sprach1_exam6_4"] = {
    text: "Jobbst du eigentlich noch nebenbei?",
    meaning: "هل تعملين بوظيفة جانبية أيضاً؟",
    keywords: ["nebenbei = جانبية", "jobbst = تعملين", "eigentlich = أيضاً"],
    simplified: "هل لديك عمل جانبي أيضاً؟",
    imagine: "💼👩‍💻 فتاة تعمل على حاسوبها بجانب الدراسة"
};

HELP_DATA["sprach1_exam6_5"] = {
    text: "Deshalb würde ich deine Einladung wirklich gerne annehmen",
    meaning: "لذلك أرغب حقاً في قبول دعوتك",
    keywords: ["annehmen = قبول", "Einladung = دعوة", "gerne = أرغب"],
    simplified: "أرغب حقاً في قبول دعوتك لزيارتك",
    imagine: "✉️👍 شخص يقرأ دعوة ويبتسم"
};

HELP_DATA["sprach1_exam6_6"] = {
    text: "Aber sobald frei hat, komme ich mal für ein, zwei Tage zu dir",
    meaning: "بمجرد أن يكون لديه إجازة، سآتي إليك ليوم أو يومين",
    keywords: ["sobald = بمجرد", "frei hat = لديه إجازة", "komme ich = سآتي"],
    simplified: "بمجرد أن يأخذ إجازة، سآتي إليك",
    imagine: "🗓️✈️ شخص ينظر إلى التقويم ويخطط لرحلة"
};

HELP_DATA["sprach1_exam6_7"] = {
    text: "In einer Wohngemeinschaft zu leben, ist bestimmt toll, auch wenn es mal Streit gibt",
    meaning: "العيش في مجتمع سكني هو بالتأكيد رائع، حتى لو حدث شجار أحياناً",
    keywords: ["auch wenn = حتى لو", "Streit = شجار", "toll = رائع"],
    simplified: "العيش المشترك رائع حتى لو اختلفتم أحياناً",
    imagine: "🏠👥 شبان يعيشون معاً ويضحكون رغم الاختلافات"
};

HELP_DATA["sprach1_exam6_8"] = {
    text: "dass ihr euch alle gut versteht",
    meaning: "أنكم جميعاً تتفاهمون جيداً",
    keywords: ["ihr = أنتم", "gut versteht = تتفاهمون جيداً", "alle = جميعاً"],
    simplified: "أنكم جميعاً تتفاهمون بشكل جيد",
    imagine: "🤝😊 مجموعة من الأصدقاء يضحكون معاً"
};

HELP_DATA["sprach1_exam6_9"] = {
    text: "Wir hatten neulich mal überlegt, in eine größere Wohnung zu ziehen",
    meaning: "كنا نفكر مؤخراً في الانتقال إلى شقة أكبر",
    keywords: ["neulich = مؤخراً", "überlegt = فكرنا", "größere Wohnung = شقة أكبر"],
    simplified: "كنا نفكر مؤخراً في الانتقال لشقة أكبر",
    imagine: "🏠📦 عائلة تنظر إلى شقة جديدة خالية"
};

HELP_DATA["sprach1_exam6_10"] = {
    text: "und wir wollen uns nicht viel zumuten",
    meaning: "ولا نريد أن نرهق أنفسنا كثيراً",
    keywords: ["wollen = نريد", "zumuten = نرهق", "viel = كثيراً"],
    simplified: "لا نريد أن نضغط على أنفسنا كثيراً",
    imagine: "😌🚫 شخص يرفع يده رافضاً فكرة مرهقة"
};

// ============================================
// Exam 7 (exam7.json) - Hallo Leon
// ============================================

HELP_DATA["sprach1_exam7_1"] = {
    text: "Betreff: Grüße aus Berlin",
    meaning: "الموضوع: تحيات من برلين",
    keywords: ["Grüße = تحيات", "aus = من", "Berlin = برلين"],
    simplified: "تحياتي من برلين",
    imagine: "🏙️✉️ شخص يكتب رسالة من برلين"
};

HELP_DATA["sprach1_exam7_2"] = {
    text: "Jetzt berichte ich dir, was alles los war",
    meaning: "الآن سأخبرك ماذا كان يحدث",
    keywords: ["was = ماذا", "los war = كان يحدث", "berichte = أخبر"],
    simplified: "سأخبرك بكل ما حدث",
    imagine: "📝🗣️ شخص يكتب رسالة ويشرح ما حدث"
};

HELP_DATA["sprach1_exam7_3"] = {
    text: "weil drei Kollegen im Urlaub sind",
    meaning: "لأن ثلاثة زملاء في إجازة",
    keywords: ["weil = لأن", "Kollegen = زملاء", "Urlaub = إجازة"],
    simplified: "لأن ثلاثة زملاء في عطلة",
    imagine: "🏖️🙋 ثلاثة أشخاص على الشاطئ وزملاؤهم في المكتب متعبون"
};

HELP_DATA["sprach1_exam7_4"] = {
    text: "Hoffentlich wird das in Zukunft besser organisiert",
    meaning: "آمل أن يتم تنظيم هذا بشكل أفضل في المستقبل",
    keywords: ["wird = سيكون", "besser = أفضل", "organisiert = منظم"],
    simplified: "أتمنى أن يتم التخطيط بشكل أفضل مستقبلاً",
    imagine: "📅🤔 شخص يخطط بجدية على تقويم"
};

HELP_DATA["sprach1_exam7_5"] = {
    text: "Eigentlich war ich an dem Abend schon kaputt und wäre am liebsten zuhause geblieben",
    meaning: "كنت مرهقاً ذلك المساء وفضلت البقاء في المنزل",
    keywords: ["wäre geblieben = كنت سأبقى", "am liebsten = أفضل", "kaputt = مرهق"],
    simplified: "كنت مرهقاً وفضلت البقاء في المنزل",
    imagine: "🛋️😴 شخص مستلقٍ على الأريكة متعب"
};

HELP_DATA["sprach1_exam7_6"] = {
    text: "Da konnte ich ja schlecht auf dem Sofa sitzen bleiben!",
    meaning: "لم أستطع البقاء جالساً على الأريكة!",
    keywords: ["konnte = استطعت", "schlecht = صعب", "bleiben = أبقى"],
    simplified: "لم أستطع البقاء على الأريكة!",
    imagine: "🛋️🚫 شخص يقف بسرعة من على الأريكة"
};

HELP_DATA["sprach1_exam7_7"] = {
    text: "denn es war einfach nur super!",
    meaning: "لأنه كان رائعاً ببساطة!",
    keywords: ["denn = لأن", "super = رائع", "einfach = ببساطة"],
    simplified: "لأن الحفل كان رائعاً جداً!",
    imagine: "🎶🎸😍 شخص في حفل موسيقي مصاب بالدهشة"
};

HELP_DATA["sprach1_exam7_8"] = {
    text: "Beides war zwar schön, aber auch anstrengend",
    meaning: "كلاهما كان جميلاً ولكنه مرهق أيضاً",
    keywords: ["Beides = كلاهما", "schön = جميل", "anstrengend = مرهق"],
    simplified: "كلاهما كان جميلاً ولكنه متعب",
    imagine: "😊😫 شخص يبتسم ويتثاءب في نفس الوقت"
};

HELP_DATA["sprach1_exam7_9"] = {
    text: "Ich bin froh, dass wir für die kommenden Wochenenden noch keine Pläne haben",
    meaning: "أنا سعيد لأنه ليس لدينا خطط لعطل نهاية الأسبوع القادمة",
    keywords: ["noch = لا يزال", "keine Pläne = لا خطط", "froh = سعيد"],
    simplified: "سعيد لأنه لا توجد خطط لعطل نهاية الأسبوع",
    imagine: "🗓️😌 شخص ينظر إلى تقويم فارغ ويستريح"
};

HELP_DATA["sprach1_exam7_10"] = {
    text: "ich freue mich auf deine nächste E-Mail!",
    meaning: "أنا متحمس لرسالتك الإلكترونية القادمة!",
    keywords: ["freue mich auf = متحمس لـ", "nächste = القادمة", "E-Mail = بريد إلكتروني"],
    simplified: "أنا متشوق لرسالتك القادمة!",
    imagine: "✉️🎉 شخص يشير إلى شاشة البريد الإلكتروني بسعادة"
};

// ============================================
// Exam 8 (exam8.json) - Sehr geehrter Herr Martini
// ============================================

HELP_DATA["sprach1_exam8_1"] = {
    text: "zu der Studienreise Ihrer Schulklasse nach Frankfurt am Main",
    meaning: "بشأن رحلة الدراسة لصفك المدرسي إلى فرانكفورت",
    keywords: ["zu = بشأن", "Studienreise = رحلة دراسة", "Schulklasse = صف مدرسي"],
    simplified: "بخصوص رحلة صفك الدراسية إلى فرانكفورت",
    imagine: "🚌🏫 مجموعة من الطلاب في حافلة متجهة إلى رحلة"
};

HELP_DATA["sprach1_exam8_2"] = {
    text: "im kommenden Oktober",
    meaning: "في شهر أكتوبر القادم",
    keywords: ["kommenden = القادم", "Oktober = أكتوبر", "im = في"],
    simplified: "في أكتوبر القادم",
    imagine: "📅🍁 تقويم يظهر شهر أكتوبر بورقة صفراء"
};

HELP_DATA["sprach1_exam8_3"] = {
    text: "Die Familien werden von uns sorgfältig nach strengen Kriterien ausgewählt",
    meaning: "يتم اختيار العائلات من قبلنا بعناية وفق معايير صارمة",
    keywords: ["nach = وفق", "strengen = صارمة", "ausgewählt = مختارة"],
    simplified: "يتم اختيار العائلات بمعايير صارمة",
    imagine: "📋✅ شخص يضع علامات اختيار على قائمة معايير"
};

HELP_DATA["sprach1_exam8_4"] = {
    text: "Unsere Gastfamilien bieten Halbpension an",
    meaning: "عائلاتنا المضيفة تقدم خدمة نصف إقامة",
    keywords: ["bieten = تقدم", "Halbpension = نصف إقامة", "Gastfamilien = عائلات مضيفة"],
    simplified: "العائلات المضيفة توفر الفطور والعشاء",
    imagine: "🍳🍲 طاولة عليها فطور وعشاء"
};

HELP_DATA["sprach1_exam8_5"] = {
    text: "so dass der Weg von der Unterkunft zum Unterricht innerhalb von maximal 10 Minuten zu Fuß zurückgelegt werden kann",
    meaning: "بحيث يمكن قطع المسافة من السكن إلى الدرس سيراً على الأقدام في غضون 10 دقائق كحد أقصى",
    keywords: ["so dass = بحيث", "maximal = كحد أقصى", "zurückgelegt = مقطوعة"],
    simplified: "بحيث لا تستغرق المسافة من السكن إلى المدرسة أكثر من 10 دقائق سيراً",
    imagine: "🚶‍♂️⏱️ شخص يمشي والساعة تشير إلى 10 دقائق"
};

HELP_DATA["sprach1_exam8_6"] = {
    text: "Gemeinsam mit Schülerinnen und Schülern der Partnerschule wird das Freizeit- und Kulturprogramm durchgeführt",
    meaning: "يتم تنفيذ برنامج الأنشطة والثقافة بمشاركة طلاب المدرسة الشريكة",
    keywords: ["Gemeinsam mit = بمشاركة", "Partnerschule = مدرسة شريكة", "durchgeführt = يتم تنفيذه"],
    simplified: "برنامج الأنشطة يتم بالتعاون مع طلاب المدرسة الشريكة",
    imagine: "👥🎨 طلاب ألمان وإيطاليون يرسمون معاً"
};

HELP_DATA["sprach1_exam8_7"] = {
    text: "Dazu gehört z. B. der Besuch der Gemäldegalerie",
    meaning: "من ذلك مثلاً زيارة معرض اللوحات",
    keywords: ["Besuch = زيارة", "Gemäldegalerie = معرض لوحات", "gehört = يتضمن"],
    simplified: "من ضمن الأنشطة مثلاً زيارة معرض اللوحات",
    imagine: "🖼️🏛️ شخص واقف أمام لوحة فنية جميلة"
};

HELP_DATA["sprach1_exam8_8"] = {
    text: "Auch ein Besuch beim Hessischen Rundfunk ist geplant",
    meaning: "من المخطط أيضاً زيارة إذاعة هيسن",
    keywords: ["geplant = مخطط", "Besuch = زيارة", "Rundfunk = إذاعة"],
    simplified: "من المخطط أيضاً زيارة استوديوهات الإذاعة",
    imagine: "🎙️📻 شخص يتحدث أمام ميكروفون في الإذاعة"
};

HELP_DATA["sprach1_exam8_9"] = {
    text: "an denen die verschiedenen Aspekte und Unterschiede der deutschen und der italienischen Kultur besprochen werden sollen",
    meaning: "حيث سيتم مناقشة الجوانب المختلفة والاختلافات بين الثقافة الألمانية والإيطالية",
    keywords: ["besprochen = مناقشة", "Aspekte = جوانب", "Unterschiede = اختلافات"],
    simplified: "حيث يتم مناقشة أوجه التشابه والاختلاف بين الثقافتين",
    imagine: "🗣️🇩🇪🇮🇹 طلاب ألمان وإيطاليون يتحدثون معاً"
};

HELP_DATA["sprach1_exam8_10"] = {
    text: "dass Sie und Ihre Klasse einen erlebnisreichen und unvergesslichen Aufenthalt in Frankfurt haben werden",
    meaning: "أنك أنت وصفك الدراسي ستقضون إقامة مليئة بالتجارب التي لا تُنسى في فرانكفورت",
    keywords: ["haben werden = سيكون لديكم", "erlebnisreichen = مليء بالتجارب", "unvergesslichen = لا يُنسى"],
    simplified: "أتمنى لكم إقامة لا تنسى في فرانكفورت",
    imagine: "🏙️✨ مجموعة من الطلاب ينظرون إلى أفق مدينة فرانكفورت"
};

// ============================================
// Exam 9 (exam9.json) - Sehr geehrter Herr Martini (معدل)
// ============================================

HELP_DATA["sprach1_exam9_1"] = {
    text: "zu der Studienreise Ihrer Schulklasse nach Frankfurt am Main",
    meaning: "بشأن رحلة الدراسة لصفك المدرسي إلى فرانكفورت",
    keywords: ["Ihrer = صفك", "Studienreise = رحلة دراسة", "Schulklasse = صف مدرسي"],
    simplified: "بخصوص رحلة صفك الدراسية إلى فرانكفورت",
    imagine: "🚌🏫 مجموعة من الطلاب في حافلة متجهة إلى رحلة"
};

HELP_DATA["sprach1_exam9_2"] = {
    text: "im kommenden Oktober",
    meaning: "في شهر أكتوبر القادم",
    keywords: ["kommenden = القادم", "Oktober = أكتوبر", "im = في"],
    simplified: "في أكتوبر القادم",
    imagine: "📅🍁 تقويم يظهر شهر أكتوبر بورقة صفراء"
};

HELP_DATA["sprach1_exam9_3"] = {
    text: "Die Familien werden von uns sorgfältig nach strengen Kriterien ausgewählt",
    meaning: "يتم اختيار العائلات من قبلنا بعناية وفق معايير صارمة",
    keywords: ["nach = وفق", "strengen = صارمة", "ausgewählt = مختارة"],
    simplified: "يتم اختيار العائلات بمعايير صارمة",
    imagine: "📋✅ شخص يضع علامات اختيار على قائمة معايير"
};

HELP_DATA["sprach1_exam9_4"] = {
    text: "Unsere Gastfamilien bieten Halbpension an",
    meaning: "عائلاتنا المضيفة تقدم خدمة نصف إقامة",
    keywords: ["bieten = تقدم", "Halbpension = نصف إقامة", "Gastfamilien = عائلات مضيفة"],
    simplified: "العائلات المضيفة توفر الفطور والعشاء",
    imagine: "🍳🍲 طاولة عليها فطور وعشاء"
};

HELP_DATA["sprach1_exam9_5"] = {
    text: "so dass der Weg von der Unterkunft zum Unterricht innerhalb von maximal 10 Minuten zu Fuß zurückgelegt werden kann",
    meaning: "بحيث يمكن قطع المسافة من السكن إلى الدرس سيراً على الأقدام في غضون 10 دقائق كحد أقصى",
    keywords: ["so dass = بحيث", "maximal = كحد أقصى", "zurückgelegt = مقطوعة"],
    simplified: "بحيث لا تستغرق المسافة من السكن إلى المدرسة أكثر من 10 دقائق سيراً",
    imagine: "🚶‍♂️⏱️ شخص يمشي والساعة تشير إلى 10 دقائق"
};

HELP_DATA["sprach1_exam9_6"] = {
    text: "Gemeinsam mit Schülerinnen und Schülern der Partnerschule wird das Freizeit- und Kulturprogramm durchgeführt",
    meaning: "يتم تنفيذ برنامج الأنشطة والثقافة بمشاركة طلاب المدرسة الشريكة",
    keywords: ["Gemeinsam mit = بمشاركة", "Partnerschule = مدرسة شريكة", "durchgeführt = يتم تنفيذه"],
    simplified: "برنامج الأنشطة يتم بالتعاون مع طلاب المدرسة الشريكة",
    imagine: "👥🎨 طلاب ألمان وإيطاليون يرسمون معاً"
};

HELP_DATA["sprach1_exam9_7"] = {
    text: "Dazu gehört z. B. der Besuch der Gemäldegalerie",
    meaning: "من ذلك مثلاً زيارة معرض اللوحات",
    keywords: ["der Besuch = الزيارة", "Gemäldegalerie = معرض لوحات", "gehört = يتضمن"],
    simplified: "من ضمن الأنشطة مثلاً زيارة معرض اللوحات",
    imagine: "🖼️🏛️ شخص واقف أمام لوحة فنية جميلة"
};

HELP_DATA["sprach1_exam9_8"] = {
    text: "Auch ein Besuch beim Hessischen Rundfunk ist geplant",
    meaning: "من المخطط أيضاً زيارة إذاعة هيسن",
    keywords: ["ist geplant = مخطط", "Besuch = زيارة", "Rundfunk = إذاعة"],
    simplified: "من المخطط أيضاً زيارة استوديوهات الإذاعة",
    imagine: "🎙️📻 شخص يتحدث أمام ميكروفون في الإذاعة"
};

HELP_DATA["sprach1_exam9_9"] = {
    text: "an denen die verschiedenen Aspekte und Unterschiede der deutschen und der italienischen Kultur besprochen werden sollen",
    meaning: "حيث سيتم مناقشة الجوانب المختلفة والاختلافات بين الثقافة الألمانية والإيطالية",
    keywords: ["besprochen = مناقشة", "Aspekte = جوانب", "Unterschiede = اختلافات"],
    simplified: "حيث يتم مناقشة أوجه التشابه والاختلاف بين الثقافتين",
    imagine: "🗣️🇩🇪🇮🇹 طلاب ألمان وإيطاليون يتحدثون معاً"
};

HELP_DATA["sprach1_exam9_10"] = {
    text: "dass Sie und Ihre Klasse einen erlebnisreichen und unvergesslichen Aufenthalt in Frankfurt haben werden",
    meaning: "أنك أنت وصفك الدراسي ستقضون إقامة مليئة بالتجارب التي لا تُنسى في فرانكفورت",
    keywords: ["haben werden = سيكون لديكم", "erlebnisreichen = مليء بالتجارب", "unvergesslichen = لا يُنسى"],
    simplified: "أتمنى لكم إقامة لا تنسى في فرانكفورت",
    imagine: "🏙️✨ مجموعة من الطلاب ينظرون إلى أفق مدينة فرانكفورت"
};

// ============================================
// Exam 10 (exam10.json) - Liebe Maria, lieber Timur
// ============================================

HELP_DATA["sprach1_exam10_1"] = {
    text: "nachdem wir gestren aus dem Urlaub zurückgekommen waren",
    meaning: "بعد أن عدنا من العطلة بالأمس",
    keywords: ["waren zurückgekommen = كنا عدنا", "Urlaub = عطلة", "nachdem = بعد أن"],
    simplified: "بعد أن عدنا من الإجازة أمس",
    imagine: "✈️🏠 أشخاص يخرجون من المطار وهم يحملون حقائبهم"
};

HELP_DATA["sprach1_exam10_2"] = {
    text: "Da gibt es nicht viel zu überlegen",
    meaning: "ليس هناك الكثير للتفكير فيه",
    keywords: ["Da = هناك", "nicht viel = ليس كثيراً", "zu überlegen = للتفكير"],
    simplified: "ليس هناك الكثير للنقاش فيه، بالطبع سنأتي",
    imagine: "💭❌ شخص يهز رأسه وكأنه يقول لا داعي للتفكير"
};

HELP_DATA["sprach1_exam10_3"] = {
    text: "wir freuen uns sehr auf euch",
    meaning: "نحن متحمسون جداً لرؤيتكم",
    keywords: ["freuen uns = نحن متحمسون", "auf euch = لرؤيتكم", "sehr = جداً"],
    simplified: "نحن متشوقون جداً للقائكم",
    imagine: "👫🎉 زوجان يقفزان فرحاً لرؤية أصدقائهما"
};

HELP_DATA["sprach1_exam10_4"] = {
    text: "sowohl in der Türkei als auch in Österreich zu feiern",
    meaning: "لإقامة الاحتفال سواء في تركيا أو في النمسا",
    keywords: ["sowohl...als auch = سواء...أو", "feiern = إقامة احتفال", "Türkei = تركيا"],
    simplified: "للاحتفال في تركيا وكذلك في النمسا",
    imagine: "🇹🇷🎉🇦🇹 علم تركيا وعلم النمسا ونجوم احتفال بينهما"
};

HELP_DATA["sprach1_exam10_5"] = {
    text: "so können alle Freunde und Verwandten dabei sein",
    meaning: "بحيث يمكن لجميع الأصدقاء والأقارب الحضور",
    keywords: ["Verwandten = أقارب", "dabei sein = الحضور", "alle = جميع"],
    simplified: "بحيث يتمكن كل الأصدقاء والأقارب من المجيء",
    imagine: "👨‍👩‍👧‍👦🎊 عائلة وأصدقاء كبار يستعدون لحفل زفاف"
};

HELP_DATA["sprach1_exam10_6"] = {
    text: "wir hoffen dass wir einige unserer alten Freunde wiedersehen werden",
    meaning: "نأمل أن نرى بعض أصدقائنا القدامى مرة أخرى",
    keywords: ["unserer = لنا", "alten Freunde = أصدقاء قدامى", "wiedersehen = نرى مرة أخرى"],
    simplified: "نأمل أن نلتقي ببعض أصدقائنا القدامى",
    imagine: "👥🤝 أصدقاء قديمون يعانقون بعضهم البعض بحرارة"
};

HELP_DATA["sprach1_exam10_7"] = {
    text: "die wir dort als Jugendliche gemeinsam verbracht haben",
    meaning: "التي قضيناها هناك معاً كمراهقين",
    keywords: ["als = كـ", "Jugendliche = مراهقين", "verbracht = قضينا"],
    simplified: "التي قضيناها معاً هناك عندما كنا مراهقين",
    imagine: "👫🎶 شباب صغار يرقصون في حفلة ولا ينامون طوال الليل"
};

HELP_DATA["sprach1_exam10_8"] = {
    text: "nun überlegen wir, ob wir nicht gleich ein Hotelzimmer für einige Tage buchen sollten",
    meaning: "الآن نفكر فيما إذا كنا لا يجب أن نحجز غرفة فندق لعدة أيام",
    keywords: ["ob = فيما إذا", "buchen = نحجز", "einige Tage = عدة أيام"],
    simplified: "الآن نفكر إذا كنا سنحجز غرفة فندق لبضعة أيام",
    imagine: "🏨🤔 زوجان ينظران إلى صور غرف فندق على الهاتف"
};

HELP_DATA["sprach1_exam10_9"] = {
    text: "Ihr habt ja sicher mit den Vorbereitungen alle Hände voll zu tun",
    meaning: "أنتم بالتأكيد مشغولون جداً بالتحضيرات",
    keywords: ["zu tun = مشغولون", "Vorbereitungen = تحضيرات", "sicher = بالتأكيد"],
    simplified: "أنتم بالتأكيد مشغولون جداً بالتجهيزات",
    imagine: "💍🎂 عروسين يحملان الكثير من الصناديق ويتنقلان من مكان لآخر"
};

HELP_DATA["sprach1_exam10_10"] = {
    text: "am Sonntag hätten wir die Gelegenheit, vor der Abreise noch gemütlich zusammen zu frühstücken",
    meaning: "يوم الأحد سنتاح لنا الفرصة لتناول الفطور معاً براحة قبل المغادرة",
    keywords: ["hätten wir = سنتاح لنا", "Gelegenheit = فرصة", "gemütlich = براحة"],
    simplified: "سيصبح لدينا وقت يوم الأحد لتناول فطور مريح معاً",
    imagine: "🍳🥞🍹 أصدقاء يجلسون حول طاولة إفطار"
};

// ============================================
// Exam 11 (exam11.json) - Lieber Justus
// ============================================

HELP_DATA["sprach1_exam11_1"] = {
    text: "über die ich mich wirklich sehr gefreut habe",
    meaning: "التي فرحت بها حقاً كثيراً",
    keywords: ["über die = التي", "mich gefreut = فرحت", "sehr = كثيراً"],
    simplified: "التي أسعدتني كثيراً",
    imagine: "💌😊 شخص يقرأ بطاقة ويبتسم"
};

HELP_DATA["sprach1_exam11_2"] = {
    text: "Ich wusste gar nicht, dass ihr gerne wandern geht",
    meaning: "لم أكن أعلم مطلقاً أنكم تحبون المشي لمسافات طويلة",
    keywords: ["gar nicht = مطلقاً", "wusste = علمت", "wandern = المشي لمسافات طويلة"],
    simplified: "لم أكن أعلم أنكم تحبون التنزه",
    imagine: "🥾🤔 رجل ينظر إلى خريطة طريق متعرجة"
};

HELP_DATA["sprach1_exam11_3"] = {
    text: "aber mir hat das damals nicht besonders gefallen",
    meaning: "لكني لم أحب ذلك آنذاك بشكل خاص",
    keywords: ["besonders = بشكل خاص", "damals = آنذاك", "gefallen = أعجبني"],
    simplified: "لكن الأمر لم يعجبني عندما كنت صغيراً",
    imagine: "🚶‍♂️😒 طفل يمشي على طريق رملي ووجهه عابس"
};

HELP_DATA["sprach1_exam11_4"] = {
    text: "schließlich habe ich schon im Alltag genug Stress",
    meaning: "ففي النهاية لدي ما يكفي من التوتر في حياتي اليومية",
    keywords: ["schließlich = في النهاية", "Alltag = الحياة اليومية", "Stress = إجهاد"],
    simplified: "لدي ما يكفي من المشاكل في روتيني اليومي",
    imagine: "😩💆‍♂️ رجل يضع يديه على وجهه تحت ضغط"
};

HELP_DATA["sprach1_exam11_q5"] = {
    text: "die Firma sogar noch weiter entfernt als deine alte?",
    meaning: "الشركة أبعد حتى من شركتك القديمة؟",
    keywords: ["entfernt = بعيدة", "weiter = أكثر", "Firma = شركة"],
    simplified: "هل مكان العمل الجديد أبعد من القديم؟",
    imagine: "📍🗺️ رجل يقيس على خريطة مسافة طويلة"
};

HELP_DATA["sprach1_exam11_q6"] = {
    text: "Ich denke im Moment auch darüber nach, die Stelle zu wechseln",
    meaning: "أفكر حالياً أيضاً في تغيير وظيفتي",
    keywords: ["wechseln = تغيير", "Stelle = وظيفة", "denke nach = أفكر"],
    simplified: "أفكر أيضاً في تغيير وظيفتي الحالية",
    imagine: "👔🤔 مستندات ووظيفة جديدة على مكتب"
};

HELP_DATA["sprach1_exam11_7"] = {
    text: "Ehrlich gesagt langweile ich mich in den letzten Monaten immer häufiger",
    meaning: "بصراحة، أشعر بالملل بشكل متكرر في الأشهر الأخيرة",
    keywords: ["Ehrlich gesagt = بصراحة", "langweile = أشعر بالملل", "immer häufiger = بشكل متكرر"],
    simplified: "بصراحة، أشعر بالملل أكثر فأكثر مؤخراً",
    imagine: "😑⏱️ شخص ينظر إلى الساعة وهو يشعر بالملل في العمل"
};

HELP_DATA["sprach1_exam11_8"] = {
    text: "Deshalb mache ich ab dem kommenden Monat erst mal eine Weiterbildung",
    meaning: "لذلك سأبدأ دورة تدريبية بدءاً من الشهر القادم أولاً",
    keywords: ["kommenden = القادم", "Weiterbildung = دورة تدريبية", "ab = بدءاً من"],
    simplified: "سأبدأ برنامجاً تدريبياً الشهر القادم أولاً",
    imagine: "📚🖊️ رجل يكتب بصورة ملهمة وكومة كتب أمامه"
};

HELP_DATA["sprach1_exam11_9"] = {
    text: "Schließlich wird es auch immer schwieriger, je älter man ist",
    meaning: "ففي النهاية، الأمر يصبح أصعب كلما تقدمنا في السن",
    keywords: ["Schließlich = في النهاية", "schwieriger = أصعب", "je älter = كلما تقدم السن"],
    simplified: "من الأصعب العثور على عمل عندما يتقدم المرء في السن",
    imagine: "📉👴 رسم بياني يظهر انخفاضاً مع تقدم العمر"
};

HELP_DATA["sprach1_exam11_10"] = {
    text: "Wie wäre es, wenn wir uns demnächst treffen würden?",
    meaning: "ما رأيك أن نلتقي قريباً؟",
    keywords: ["Wie wäre es = ما رأيك", "demnächst = قريباً", "treffen = نلتقي"],
    simplified: "هل لديك رغبة في لقاء قريباً؟",
    imagine: "🤝👋 شخصان يصافحان بعضهما البعض ويبتسمان"
};

// ============================================
// Exam 12 (exam12.json) - Lieber Justus (معدل)
// ============================================

HELP_DATA["sprach1_exam12_1"] = {
    text: "über die ich mich wirklich sehr gefreut habe",
    meaning: "التي فرحت بها حقاً كثيراً",
    keywords: ["über die = التي", "mich gefreut = فرحت", "sehr = كثيراً"],
    simplified: "التي أسعدتني كثيراً",
    imagine: "💌😊 شخص يقرأ بطاقة ويبتسم"
};

HELP_DATA["sprach1_exam12_2"] = {
    text: "Ich wusste ersten nicht, dass ihr gerne wandern geht",
    meaning: "لم أكن أعلم في البداية أنكم تحبون المشي لمسافات طويلة",
    keywords: ["ersten = في البداية", "wusste = علمت", "wandern = المشي لمسافات طويلة"],
    simplified: "لم أكن أعلم في البداية أنكم تحبون التنزه",
    imagine: "🥾🤔 رجل ينظر إلى خريطة طريق متعرجة"
};

HELP_DATA["sprach1_exam12_3"] = {
    text: "aber mir hat das damals nicht besonders gefallen",
    meaning: "لكني لم أحب ذلك آنذاك بشكل خاص",
    keywords: ["besonders = بشكل خاص", "damals = آنذاك", "gefallen = أعجبني"],
    simplified: "لكن الأمر لم يعجبني عندما كنت صغيراً",
    imagine: "🚶‍♂️😒 طفل يمشي على طريق رملي ووجهه عابس"
};

HELP_DATA["sprach1_exam12_4"] = {
    text: "schließen habe ich schon im Alltag genug Stress",
    meaning: "ففي النهاية لدي ما يكفي من التوتر في حياتي اليومية",
    keywords: ["schließen = في النهاية", "Alltag = الحياة اليومية", "Stress = إجهاد"],
    simplified: "لدي ما يكفي من المشاكل في روتيني اليومي",
    imagine: "😩💆‍♂️ رجل يضع يديه على وجهه تحت ضغط"
};

HELP_DATA["sprach1_exam12_5"] = {
    text: "die Firma sogar noch weiter entfernt als deine alte?",
    meaning: "الشركة أبعد حتى من شركتك القديمة؟",
    keywords: ["entfernt = بعيدة", "weiter = أكثر", "Firma = شركة"],
    simplified: "هل مكان العمل الجديد أبعد من القديم؟",
    imagine: "📍🗺️ رجل يقيس على خريطة مسافة طويلة"
};

HELP_DATA["sprach1_exam12_6"] = {
    text: "Ich denke im Moment auch darüber nach, die Stelle zu wechseln",
    meaning: "أفكر حالياً أيضاً في تغيير وظيفتي",
    keywords: ["wechseln = تغيير", "Stelle = وظيفة", "denke nach = أفكر"],
    simplified: "أفكر أيضاً في تغيير وظيفتي الحالية",
    imagine: "👔🤔 مستندات ووظيفة جديدة على مكتب"
};

HELP_DATA["sprach1_exam12_7"] = {
    text: "Ehrlich zu sagen langweile ich mich in den letzten Monaten immer häufiger",
    meaning: "بصراحة، أشعر بالملل بشكل متكرر في الأشهر الأخيرة",
    keywords: ["zu sagen = القول", "langweile = أشعر بالملل", "immer häufiger = بشكل متكرر"],
    simplified: "بصراحة، أشعر بالملل أكثر فأكثر مؤخراً",
    imagine: "😑⏱️ شخص ينظر إلى الساعة وهو يشعر بالملل في العمل"
};

HELP_DATA["sprach1_exam12_8"] = {
    text: "ab dem kommenden Monat eine Weiterbildung",
    meaning: "ابتداء من الشهر القادم دورة تدريبية",
    keywords: ["kommenden = القادم", "Weiterbildung = دورة تدريبية", "ab = ابتداء من"],
    simplified: "سأبدأ برنامجاً تدريبياً الشهر القادم",
    imagine: "📚🖊️ رجل يكتب بصورة ملهمة وكومة كتب أمامه"
};

HELP_DATA["sprach1_exam12_9"] = {
    text: "je älter man ist, desto schwieriger wird es",
    meaning: "كلما تقدم المرء في السن، زادت الصعوبة",
    keywords: ["je älter = كلما تقدم السن", "schwieriger = أكثر صعوبة", "desto = كلما"],
    simplified: "من الأصعب العثور على عمل كلما تقدم المرء في السن",
    imagine: "📉👴 رسم بياني يظهر انخفاضاً مع تقدم العمر"
};

HELP_DATA["sprach1_exam12_10"] = {
    text: "Wie wäre es, wenn wir uns demnächst treffen würden?",
    meaning: "ما رأيك أن نلتقي قريباً؟",
    keywords: ["Wie wäre es = ما رأيك", "demnächst = قريباً", "treffen = نلتقي"],
    simplified: "هل لديك رغبة في لقاء قريباً؟",
    imagine: "🤝👋 شخصان يصافحان بعضهما البعض ويبتسمان"
};

// ============================================
// Exam 13 (exam13.json) - Lieber Thomas
// ============================================

HELP_DATA["sprach1_exam13_1"] = {
    text: "obwohl ich mir das bisher nie zugetraut hatte",
    meaning: "على الرغم من أنني لم أجرؤ على ذلك أبداً من قبل",
    keywords: ["obwohl = على الرغم من", "nie = أبداً", "zugetraut = تجرأت"],
    simplified: "بالرغم من أنني لم أعتقد أنني سأفعل هذا أبداً",
    imagine: "🎿😰 شخص خائف على قمة جبل ثلجي"
};

HELP_DATA["sprach1_exam13_2"] = {
    text: "hatte sie schon einen individuellen Skikurs für mich gebucht",
    meaning: "كانت قد حجزت دورة تزلج خاصة لي",
    keywords: ["hatte gebucht = كانت قد حجزت", "individuellen = خاصة", "Skikurs = دورة تزلج"],
    simplified: "لقد حجزت دروس تزلج خاصة بي",
    imagine: "📅📞 فتاة تتحدث على الهاتف وتكتب في دفتر ملاحظات"
};

HELP_DATA["sprach1_exam13_3"] = {
    text: "Ich wollte es mir schon anders überlegen",
    meaning: "كنت أرغب بالفعل في تغيير رأيي",
    keywords: ["wollte = أردت", "anders überlegen = تغيير رأيي", "schon = بالفعل"],
    simplified: "كنت أرغب بالفعل في العدول عن الفكرة",
    imagine: "🤔😬 رجل يضع يده على ذقنه وهو ينظر إلى الأسفل"
};

HELP_DATA["sprach1_exam13_4"] = {
    text: "aber Lisa wollte nichts davon hören",
    meaning: "لكن ليزا لم ترغب في سماع أي شيء عن ذلك",
    keywords: ["davon = عن ذلك", "hören = تسمع", "nichts = لا شيء"],
    simplified: "لكن ليزا رفضت الاستماع عن التفكير في التخلي عن الأمر",
    imagine: "🙉💪 ليزا تضع أصابعها في أذنيها بقوة"
};

HELP_DATA["sprach1_exam13_5"] = {
    text: "Einerseits war ich ziemlich aufgeregt",
    meaning: "من جهة كنت متوترة بعض الشيء",
    keywords: ["Einerseits = من جهة", "ziemlich = بعض الشيء", "aufgeregt = متوترة"],
    simplified: "من ناحية كنت متوترة جداً",
    imagine: "😰⛷️ فتاة ترتدي معدات التزلج ووجهها متوتر"
};

HELP_DATA["sprach1_exam13_6"] = {
    text: "Sie hat mich abgeholt und mir dabei geholfen",
    meaning: "جاءت لاصطحابي وساعدتني في ذلك",
    keywords: ["dabei = في ذلك", "abgeholt = اصطحبت", "geholfen = ساعدت"],
    simplified: "لقد أتت لاصطحابي وساعدتني في هذا الأمر",
    imagine: "🤝👩‍🏫 امرأة تمد يدها لتساعد صديقتها"
};

HELP_DATA["sprach1_exam13_7"] = {
    text: "Schuhe, Skier, Stöcke und einen Helm für mich auszusuchen",
    meaning: "لاختيار أحذية وزلاجات وعصي وخوذة لي",
    keywords: ["auszusuchen = لاختيار", "Schuhe = أحذية", "Skier = زلاجات"],
    simplified: "لمساعدتي في اختيار كافة المعدات التي أحتاجها",
    imagine: "🎿👢👟 مجموعة من معدات التزلج موضوعة على الرف"
};

HELP_DATA["sprach1_exam13_8"] = {
    text: "grundlegende Dinge erklärt",
    meaning: "شرحت لي الأمور الأساسية",
    keywords: ["grundlegende = أساسية", "Dinge = أمور", "erklärt = شرحت"],
    simplified: "شرحت لي أساسيات التزلج",
    imagine: "📋🗣️ امرأة تشرح صورة لشخص يتزلج"
};

HELP_DATA["sprach1_exam13_9"] = {
    text: "Die Kinder im Zwergerlkurs scheinen im Gegensatz zu mir überhaupt keine Angst zu haben",
    meaning: "يبدو أن الأطفال في دورة الأقزام على عكس مني لا يخافون إطلاقاً",
    keywords: ["im Gegensatz zu = على عكس", "überhaupt = إطلاقاً", "Angst = خوف"],
    simplified: "يبدو أن الأطفال الصغار في دورة تعليم التزلج لا يشعرون بالخوف أبداً على عكسي",
    imagine: "👧🎿 طفلة تبتعد وهي تنزلق بسهولة على المنحدر"
};

HELP_DATA["sprach1_exam13_10"] = {
    text: "Ich weiß gar nicht, wie ich das schaffen soll",
    meaning: "لا أعرف مطلقاً كيف سأتمكن من فعل هذا",
    keywords: ["wie = كيف", "schaffen = أتمكن", "gar nicht = مطلقاً"],
    simplified: "أنا لا أفهم كيف سأتمكن من فعل هذا أصلاً",
    imagine: "😩🤷‍♀️ فتاة تنظر إلى منحدر ثلجي مرتفع وقد استسلمت"
};

// ============================================
// Exam 14 (exam14.json) - Sehr geehrte Frau Goronska
// ============================================

HELP_DATA["sprach1_exam14_1"] = {
    text: "davon in Deutschland und zwei in Österreich",
    meaning: "منها في ألمانيا واثنتان في النمسا",
    keywords: ["davon = منها", "Deutschland = ألمانيا", "Österreich = النمسا"],
    simplified: "ثماني مدارس في ألمانيا واثنتان في النمسا",
    imagine: "🏫🇩🇪🏫🇦🇹 مدارس على خريطة بين دولتين"
};

HELP_DATA["sprach1_exam14_2"] = {
    text: "an denen Sie ausnahmslos sowohl Ihr Deutsch verbessern als auch an einem anspruchsvollen Kultur- und Freizeitprogramm teilnehmen können",
    meaning: "حيث يمكنك دون استثناء تحسين لغتك الألمانية وكذلك المشاركة في برنامج ثقافي وترفيهي مكثف",
    keywords: ["denen = حيث", "ausnahmslos = دون استثناء", "sowohl...als auch = سواء...أو"],
    simplified: "حيث يمكنكم تحسين لغتكم الألمانية والمشاركة في الأنشطة الثقافية في نفس الوقت",
    imagine: "📚🎭 طالب في فصل دراسي ومرحلة مسرح في الخلف"
};

HELP_DATA["sprach1_exam14_3"] = {
    text: "an fünf Tagen pro Woche statt",
    meaning: "تقام خمسة أيام في الأسبوع",
    keywords: ["an = في", "fünf Tagen = خمسة أيام", "statt = تقام"],
    simplified: "تقام حصص اللغة خمسة أيام أسبوعياً",
    imagine: "📅⏰ تقويم به خمسة أيام مميزة"
};

HELP_DATA["sprach1_exam14_4"] = {
    text: "Mittwochs ist kein Nachmittagsunterricht",
    meaning: "لا توجد حصص بعد الظهر يوم الأربعاء",
    keywords: ["Mittwochs = أيام الأربعاء", "kein = لا يوجد", "Nachmittagsunterricht = حصص بعد الظهر"],
    simplified: "لا توجد دروس بعد الظهر يوم الأربعاء",
    imagine: "📅😴 تقويم عليه علامة إجازة يوم الأربعاء"
};

HELP_DATA["sprach1_exam14_5"] = {
    text: "Zu Beginn jedes Kurses wird ein Einstufungstest durchgeführt",
    meaning: "في بداية كل دورة يتم إجراء اختبار تحديد مستوى",
    keywords: ["jedes Kurses = كل دورة", "Einstufungstest = اختبار تحديد مستوى", "durchgeführt = يتم إجراؤه"],
    simplified: "في بداية كل صف، سنجري اختباراً لتحديد مستواك",
    imagine: "📝✍️ شخص يكتب في اختبار وأستاذ ينظر إليه"
};

HELP_DATA["sprach1_exam14_6"] = {
    text: "mit dessen Hilfe wir herausfinden, welcher Kurs für Sie der geeignete ist",
    meaning: "بمساعدة هذا (الاختبار) نكتشف الدورة المناسبة لك",
    keywords: ["dessen = هذا", "herausfinden = نكتشف", "geeignete = المناسبة"],
    simplified: "هذا سيساعدنا في معرفة الصف المناسب لمستواك",
    imagine: "📈📝 ورق اختبار وعلامة استفهام"
};

HELP_DATA["sprach1_exam14_7"] = {
    text: "wenn Sie den Test bestehen",
    meaning: "إذا نجحت في الامتحان",
    keywords: ["wenn = إذا", "bestehen = نجحت", "Test = امتحان"],
    simplified: "ستحصل على شهادة معتمدة دولياً إذا نجحت في الاختبار",
    imagine: "📜🎓 يد تحمل شهادة واختام براقة"
};

HELP_DATA["sprach1_exam14_8"] = {
    text: "Ihnen vor Ort angeboten werden",
    meaning: "تُعرض لك في المكان نفسه",
    keywords: ["Ihnen = لك", "vor Ort = في المكان نفسه", "angeboten = معروضة"],
    simplified: "سيتم شرح الخيارات المتاحة لك عند وصولك",
    imagine: "📍🗣️ امرأة تشرح شيئاً لسائحين"
};

HELP_DATA["sprach1_exam14_9"] = {
    text: "Im Unterkunftspreis ist jeweils Halbpension eingeschlossen",
    meaning: "سعر الإقامة يشمل نصف إقامة في كل حالة",
    keywords: ["ist eingeschlossen = مشمول", "Halbpension = نصف إقامة", "Unterkunftspreis = سعر الإقامة"],
    simplified: "سعر الغرفة يشمل وجبتين في اليوم",
    imagine: "🍽️🛏️ سرير مع طاولة عليها طبق فطور ومائدة عشاء صغيرة"
};

HELP_DATA["sprach1_exam14_10"] = {
    text: "eine Diät halten müssen",
    meaning: "يجب أن تتبع نظاماً غذائياً خاصاً",
    keywords: ["eine Diät = نظاماً غذائياً", "halten = تتبع", "müssen = يجب أن"],
    simplified: "يرجى إخبارنا إذا كنتم بحاجة لنظام غذائي خاص",
    imagine: "🥗🍚 طبق طعام صحي مع خضروات وحبوب"
};

// ============================================
// Exam 15 (exam15.json) - Liebe Agnieszka
// ============================================

HELP_DATA["sprach1_exam15_1"] = {
    text: "dass ich dir das letzte Mal geschrieben habe",
    meaning: "أنني كتبت لك آخر مرة",
    keywords: ["her = الأن", "geschrieben = كتبت", "letzte Mal = آخر مرة"],
    simplified: "منذ أن كتبت لك آخر مرة",
    imagine: "📅✍️ ماضٍ منذ نصف عام"
};

HELP_DATA["sprach1_exam15_2"] = {
    text: "ist unsere Lehrerin, Frau Reuter, erkrankt",
    meaning: "معلمتنا، السيدة روتر، مرضت",
    keywords: ["erkrankt = مرضت", "Lehrerin = معلمة", "Reuter = روتر"],
    simplified: "لقد مرضت معلمتنا فجأة",
    imagine: "🤒👩‍🏫 معلمة ترتدي منديلاً حول رقبتها"
};

HELP_DATA["sprach1_exam15_3"] = {
    text: "als unsere Prüfung schon längst vorbei ist",
    meaning: "بينما تنتهي امتحاناتنا منذ وقت طويل",
    keywords: ["als = بينما", "längst = منذ وقت طويل", "vorbei = منتهية"],
    simplified: "وسوف تعود فقط بعد أن ننتهي من الامتحانات",
    imagine: "📅🎓 تقويم به علامة اكتمال وانتهاء"
};

HELP_DATA["sprach1_exam15_4"] = {
    text: "ist zwar sehr nett",
    meaning: "هي لطيفة جداً بالفعل",
    keywords: ["zwar = بالفعل", "sehr nett = لطيفة جداً", "ist = هي"],
    simplified: "بديلة المعلمة لطيفة",
    imagine: "😊👩‍🏫 معلمة جديدة تبتعد قليلاً"
};

HELP_DATA["sprach1_exam15_5"] = {
    text: "Und dann werde ich alle Bücher und Hefte in die Ecke legen",
    meaning: "وبعد ذلك سأضع جميع الكتب والدفاتر في الزاوية",
    keywords: ["werde = سأ", "alle Bücher = جميع الكتب", "in die Ecke = في الزاوية"],
    simplified: "سأضع كل كتبي في زاوية",
    imagine: "📚🗑️ شخص يرمي كتباً في الزاوية"
};

HELP_DATA["sprach1_exam15_6"] = {
    text: "Darauf freue ich mich schon riesig",
    meaning: "أنا متحمسة جداً لذلك بالفعل",
    keywords: ["Darauf = لذلك", "freue ich mich = أنا متحمسة", "riesig = جداً"],
    simplified: "أنا متحمسة حقاً لذلك بالفعل",
    imagine: "🎉💃 امرأة تقفز فرحاً"
};

HELP_DATA["sprach1_exam15_7"] = {
    text: "Was hältst du dazu?",
    meaning: "ما رأيك في ذلك؟",
    keywords: ["hältst du = رأيك", "dazu = في ذلك", "Was = ما"],
    simplified: "ما رأيك في رأيي؟",
    imagine: "🤔❓ رأس يدور وعلامة استفهام"
};

HELP_DATA["sprach1_exam15_8"] = {
    text: "oder tanzen sie dir noch immer auf der Nase herum",
    meaning: "أم لا يزالون يستغلونك/يتلاعبون بك",
    keywords: ["dir = بك", "herumtanzen = يتلاعبون", "noch immer = لا يزالون"],
    simplified: "هل ما زالوا يعصون أوامرك",
    imagine: "🤹‍♀️👶 طفل صغير يقفز على شخص بالغ"
};

HELP_DATA["sprach1_exam15_9"] = {
    text: "Es ist bestimmt nicht so leicht, einen zweijährigen Jungen und ein vierjähriges Mädchen den ganzen Tag zu beschäftigen",
    meaning: "ليس من السهل بالتأكيد إبقاء طفل عمره سنتان وفتاة عمرها أربع سنوات مشغولين طوال اليوم",
    keywords: ["zu beschäftigen = إبقاء مشغولين", "den ganzen Tag = طوال اليوم", "nicht so leicht = ليس سهلاً"],
    simplified: "من الصعب جداً رعاية طفلين صغيرين طوال اليوم",
    imagine: "👶🧒 اثنان من الأطفال يتجولان حول امرأة مرهقة"
};

HELP_DATA["sprach1_exam15_10"] = {
    text: "wie du mit den Kindern zurechtkommst",
    meaning: "كيف تتعاملين مع الأطفال بنجاح",
    keywords: ["wie = كيف", "zurechtkommst = تتعاملين بنجاح", "Kindern = أطفال"],
    simplified: "لقد اكتشفت كيفية التعامل مع الأطفال",
    imagine: "🤝🧸 امرأة تلعب بهدوء مع طفل صغير"
};

// ============================================
// Exam 16 (exam16.json) - Liebe Anna
// ============================================

HELP_DATA["sprach1_exam16_1"] = {
    text: "Jetzt ist schon bald ein halbes Jahr vergangen",
    meaning: "لقد مر الآن ما يقرب من نصف عام",
    keywords: ["vergangen = مر", "halb = نصف", "bald = قريباً"],
    simplified: "لقد مضى الآن حوالي ستة أشهر",
    imagine: "📅 مع مرور الوقت"
};

HELP_DATA["sprach1_exam16_2"] = {
    text: "ist unsere Lehrerin, Frau Reuter, plötzlich erkrankt",
    meaning: "مرضت معلمتنا، السيدة روتر، فجأة",
    keywords: ["plötzlich = فجأة", "erkrankt = مرضت", "Lehrerin = معلمة"],
    simplified: "مرضت معلمتنا فجأة",
    imagine: "🤒👩‍🏫 معلمة تسعل"
};

HELP_DATA["sprach1_exam16_3"] = {
    text: "wenn unsere Prüfung schon längst vorbei ist",
    meaning: "عندما تنتهي امتحاناتنا منذ فترة طويلة",
    keywords: ["wenn = عندما", "längst = منذ فترة طويلة", "vorbei = منتهية"],
    simplified: "لن تعود حتى انتهاء الامتحانات",
    imagine: "📅🎓 تقويم يشير إلى الانتهاء"
};

HELP_DATA["sprach1_exam16_4"] = {
    text: "ist zwar sehr nett",
    meaning: "لطيفة جداً بالفعل",
    keywords: ["zwar = بالفعل", "sehr nett = لطيفة جداً", "ist = هي"],
    simplified: "معلمتنا البديلة لطيفة جداً",
    imagine: "😊👩‍🏫 معلمة لطيفة"
};

HELP_DATA["sprach1_exam16_5"] = {
    text: "werde ich alle Bücher und Hefte in die Ecke legen",
    meaning: "كنت سأضع كل الكتب والدفاتر في الزاوية",
    keywords: ["werde = سأ", "alle Bücher = كل الكتب", "in die Ecke = في الزاوية"],
    simplified: "سأضع كل كتبي في الزاوية بعد الامتحان",
    imagine: "📚🗑️ كتب ترمى جانباً"
};

HELP_DATA["sprach1_exam16_6"] = {
    text: "Darauf freue ich mich schon riesig",
    meaning: "أنا متحمسة جداً لذلك بالفعل",
    keywords: ["Darauf = لذلك", "freue ich mich = أنا متحمسة", "riesig = جداً"],
    simplified: "أتطلع لذلك بشدة بالفعل",
    imagine: "🎉💃 امرأة تقفز فرحاً"
};

HELP_DATA["sprach1_exam16_7"] = {
    text: "Was hältst du davon?",
    meaning: "ما رأيك في ذلك؟",
    keywords: ["davon = في ذلك", "hältst du = رأيك", "Was = ما"],
    simplified: "ما هو رأيك؟",
    imagine: "🤔❓ شخص يفكر"
};

HELP_DATA["sprach1_exam16_8"] = {
    text: "tanzen sie dir immer noch auf der Nase herum",
    meaning: "هل ما زالوا يستغلونك",
    keywords: ["auf = على", "herumtanzen = يتلاعبون", "dir = بك"],
    simplified: "هل ما زالوا يعصونك",
    imagine: "🤹‍♀️👶 طفل يلعب"
};

HELP_DATA["sprach1_exam16_9"] = {
    text: "einen zweijährigen Jungen und ein vierjähriges Mädchen den ganzen Tag zu beschäftigen",
    meaning: "إبقاء طفل عمره سنتان وفتاة عمرها أربع سنوات مشغولين طوال اليوم",
    keywords: ["zu beschäftigen = إبقاء مشغولين", "den ganzen Tag = طوال اليوم", "nicht so leicht = ليس سهلاً"],
    simplified: "رعاية طفلين صغيرين صعب جداً",
    imagine: "👶🧒 أطفال مشاغبون"
};

HELP_DATA["sprach1_exam16_10"] = {
    text: "wie du mit den Kindern zurechtkommst",
    meaning: "كيف تتعاملين مع الأطفال بنجاح",
    keywords: ["wie = كيف", "zurechtkommst = تتعاملين بنجاح", "Kindern = أطفال"],
    simplified: "لقد اكتشفت كيفية التعامل معهم",
    imagine: "🤝🧸 تتعامل بشكل جيد مع الأطفال"
};

// ============================================
// Exam 17 (exam17.json) - Sehr geehrter Herr Dr. Moosberger
// ============================================

HELP_DATA["sprach1_exam17_1"] = {
    text: "Mit allergrößtem Interesse",
    meaning: "باهتمام بالغ للغاية",
    keywords: ["allergrößtem = بالغ", "Interesse = اهتمام", "Mit = بـ"],
    simplified: "باهتمام كبير جداً قرأت إعلانك",
    imagine: "📰👀 شخص يقرأ جريدة ويمسك قلماً"
};

HELP_DATA["sprach1_exam17_2"] = {
    text: "in dem Sie eine Teilzeit-Mitarbeiterin suchen",
    meaning: "الذي تبحث فيه عن موظفة بدوام جزئي",
    keywords: ["in dem = الذي", "Teilzeit-Mitarbeiterin = موظفة بدوام جزئي", "suchen = تبحث"],
    simplified: "بحثك عن موظفة بدوام جزئي",
    imagine: "📋✍️ إعلان وظيفة يقرأ على جهاز لوحي"
};

HELP_DATA["sprach1_exam17_3"] = {
    text: "in einem so renommierten Geschäft wie dem Ihren",
    meaning: "في متجر مرموق مثل متجركم",
    keywords: ["so = مثل هذا", "renommierten = مرموق", "Geschäft = متجر"],
    simplified: "فرصة عمل في متجر عريق مثلكم",
    imagine: "🏛️✨ واجهة متجر أنيقة وزبون يعجب"
};

HELP_DATA["sprach1_exam17_4"] = {
    text: "eine verantwortungsvolle Aufgabe übernehmen zu können",
    meaning: "أن أتمكن من تولي مهمة تتطلب مسؤولية عالية",
    keywords: ["übernehmen = تولي", "verantwortungsvolle Aufgabe = مهمة تتطلب مسؤولية", "zu können = القدرة على"],
    simplified: "القبول بمهمة تتطلب مهارات عالية",
    imagine: "📁👔 محفظة جلدية بحجم شخص"
};

HELP_DATA["sprach1_exam17_5"] = {
    text: "begann ich eine dreijährige Schreinerlehre",
    meaning: "بدأت تدريباً مهنياً لمدة ثلاث سنوات كنجار",
    keywords: ["begann = بدأت", "dreijährige = لمدة ثلاث سنوات", "Schreinerlehre = تدريب نجارة"],
    simplified: "التحقت بدورة تدريب مهني في النجارة",
    imagine: "🪚🔨 طاولة عمل خشبية مزودة بمشابك وأدوات"
};

HELP_DATA["sprach1_exam17_6"] = {
    text: "arbeitete ich ein Jahr lang bei Stutz & Partner",
    meaning: "عملت لمدة عام في شركة شتوتز وشركاه",
    keywords: ["ein Jahr lang = لمدة عام", "arbeitete = عملت", "Stutz & Partner = شتوتز وشركاه"],
    simplified: "عملت في شركة تصميم أثاث لمدة سنة",
    imagine: "🪑🏢 موظف في مكتب تصميم أثاث عصري"
};

HELP_DATA["sprach1_exam17_7"] = {
    text: "und entdeckte meine Liebe zu antiquarischen Möbelstücken",
    meaning: "واكتشفت حبي للأثاث العتيق",
    keywords: ["entdeckte = اكتشفت", "Liebe = حب", "antiquarischen = عتيق"],
    simplified: "هناك تعرفت على شغفي بالأثاث القديم",
    imagine: "🚪🪑 غرفة مليئة بالكراسي القديمة الجميلة"
};

HELP_DATA["sprach1_exam17_8"] = {
    text: "Während meiner Berufstätigkeit und meines Studiums",
    meaning: "خلال فترة عملي ودراستي",
    keywords: ["Während = خلال", "Berufstätigkeit = عملي", "Studiums = دراستي"],
    simplified: "أثناء مسيرتي العملية ودراستي",
    imagine: "🎓💼 قبعة تخرج وحقيبة عمل جنباً إلى جنب"
};

HELP_DATA["sprach1_exam17_9"] = {
    text: "sowohl in Nord- als auch in Südeuropa",
    meaning: "سواء في شمال أو جنوب أوروبا",
    keywords: ["sowohl...als auch = سواء...أو", "Nord = شمال", "Südeuropa = جنوب أوروبا",],
    simplified: "في جميع أنحاء أوروبا من الشمال إلى الجنوب",
    imagine: "🗺️🧭 خريطة أوروبا عليها أسهم تشير إلى كل مكان"
};

HELP_DATA["sprach1_exam17_10"] = {
    text: "auf Ihre Anzeige zu antworten",
    meaning: "للاعلان على إعلانكم",
    keywords: ["antworten = الإعلان", "Anzeige = إعلان", "auf = على"],
    simplified: "أرد الرد على إعلان فرصة العمل",
    imagine: "📨✍️ ظرف مغلق عليه ختم شمعي"
};

// ============================================
// Exam 18 (exam18.json) - Sehr geehrter Herr Dr. Dobromil
// ============================================

HELP_DATA["sprach1_exam18_1"] = {
    text: "Mit allergrößten Interesse",
    meaning: "باهتمام بالغ",
    keywords: ["allergrößten = بالغ", "Interesse = اهتمام", "Mit = بـ"],
    simplified: "باهتمام كبير جداً",
    imagine: "📰👀 شخص يقرأ جريدة"
};

HELP_DATA["sprach1_exam18_2"] = {
    text: "an dem Sie eine Teilzeit-Mitarbeiterin suchen",
    meaning: "الذي تبحث فيه عن موظفة بدوام جزئي",
    keywords: ["an dem = الذي", "Teilzeit-Mitarbeiterin = موظفة بدوام جزئي", "suchen = تبحث"],
    simplified: "إعلانك عن وظيفة بدوام جزئي",
    imagine: "📋✍️ إعلان وظيفة"
};

HELP_DATA["sprach1_exam18_3"] = {
    text: "den Ihren",
    meaning: "متجركم",
    keywords: ["Ihren = متجركم", "den = متجر", "Ihren = لكم"],
    simplified: "متجركم العريق",
    imagine: "🏛️✨ واجهة متجر كلاسيكية"
};

HELP_DATA["sprach1_exam18_4"] = {
    text: "eine verantwortungsvolle Aufgabe übernehmen zu können",
    meaning: "أن أتمكن من تولي مهمة تتطلب مسؤولية",
    keywords: ["übernehmen = تولي", "verantwortungsvolle Aufgabe = مهمة تتطلب مسؤولية", "zu können = القدرة على"],
    simplified: "تولي منصب صعب",
    imagine: "📁👔 حقيبة أعمال"
};

HELP_DATA["sprach1_exam18_5"] = {
    text: "bei der Firma Eichelbohrer & Co",
    meaning: "في شركة آيخلبورير وشركاه",
    keywords: ["bei = في", "Firma = شركة", "Eichelbohrer & Co = آيخلبورير وشركاه"],
    simplified: "بدأت تدريب النجارة في شركة متخصصة",
    imagine: "🏢🔨 شركة بها نجارين وحرفيين"
};

HELP_DATA["sprach1_exam18_6"] = {
    text: "ein Jahr lang",
    meaning: "لمدة عام",
    keywords: ["Jahr = عام", "lang = لمدة", "ein = واحد"],
    simplified: "عملت لمدة اثني عشر شهراً متصلة",
    imagine: "📅🔄 عقارب الساعة تدور"
};

HELP_DATA["sprach1_exam18_7"] = {
    text: "entdeckte meine Liebe zu antiquarischen Möbelstücken",
    meaning: "اكتشفت حبي للأثاث العتيق",
    keywords: ["entdeckte = اكتشفت", "Liebe = حب", "antiquarischen = عتيق"],
    simplified: "هناك تعرفت على شغفي بالأثاث القديم",
    imagine: "🔍🪑 غرفة بها كراسي عتيقة"
};

HELP_DATA["sprach1_exam18_8"] = {
    text: "was Möbelstile und die Herstellungskunst",
    meaning: "ما يتعلق بأساليب الأثاث وفن الصناعة",
    keywords: ["was = ما", "Möbelstile = أساليب الأثاث", "Herstellungskunst = فن الصناعة"],
    simplified: "المتعلقة بأنماط الأثاث والحرف اليدوية",
    imagine: "🖼️📜 رسم تفصيلي لمقعد كلاسيكي"
};

HELP_DATA["sprach1_exam18_9"] = {
    text: "sowohl in Nord- und in Südeuropa",
    meaning: "سواء في شمال أو جنوب أوروبا",
    keywords: ["sowohl = سواء", "Nord = شمال", "Südeuropa = جنوب أوروبا"],
    simplified: "في جميع أنحاء أوروبا",
    imagine: "🗺️✨ خريطة أوروبا"
};

HELP_DATA["sprach1_exam18_10"] = {
    text: "auf Ihre Anzeige zu antworten",
    meaning: "للرد على إعلانكم",
    keywords: ["antworten = الرد", "Anzeige = إعلان", "auf = على"],
    simplified: "الرد على فرصة العمل",
    imagine: "📨✍️ ظرف به ختم شمعي أحمر"
};

// ============================================
// Exam 19 (exam19.json) - Liebe Lina, lieber Florian
// ============================================

HELP_DATA["sprach1_exam19_1"] = {
    text: "Ihr sollt doch endlich unser neues Heim kennenlernen",
    meaning: "يجب أن تروا منزلنا الجديد أخيراً",
    keywords: ["sollt = يجب", "endlich = أخيراً", "kennenlernen = تتعرفون"],
    simplified: "حان وقت رؤية منزلنا الجديد",
    imagine: "🏠🚪 أشخاص يفتحون باب منزل لضيوف"
};

HELP_DATA["sprach1_exam19_2"] = {
    text: "euch für das verlängerte Wochenende Anfang Juni einladen",
    meaning: "ندعوكم لعطلة نهاية الأسبوع الممتدة في بداية يونيو",
    keywords: ["euch = لكم", "einladen = ندعو", "verlängerte Wochenende = عطلة نهاية أسبوع ممتدة"],
    simplified: "نود أن تأتوا عندنا في عطلة نهاية الأسبوع الطويلة",
    imagine: "📅🎉 تقويم مميز في بداية يونيو"
};

HELP_DATA["sprach1_exam19_3"] = {
    text: "bei uns",
    meaning: "عندنا",
    keywords: ["bei = عند", "uns = نحن", "bei uns = عندنا"],
    simplified: "يمكنكم المبيت في منزلنا بالطبع",
    imagine: "🛌🏠 سرير مريح وأضواء دافئة"
};

HELP_DATA["sprach1_exam19_4"] = {
    text: "einiges zu bieten",
    meaning: "لديها الكثير لتقدمه",
    keywords: ["einiges = الكثير", "zu bieten = لتقدمه", "hat = لديها"],
    simplified: "المدينة لديها العديد من المعالم",
    imagine: "🏰🎨 برج قديم ومتحف"
};

HELP_DATA["sprach1_exam19_5"] = {
    text: "auf den Turm der Stadtpfarrkirche steigen",
    meaning: "لصعود برج كنيسة الرعية",
    keywords: ["Turm = برج", "steigen = صعود", "Stadtpfarrkirche = كنيسة الرعية"],
    simplified: "يمكننا صعود برج الكنيسة الرئيسي",
    imagine: "🔔⛪ برج كنيسة مرتفع"
};

HELP_DATA["sprach1_exam19_6"] = {
    text: "sind auch die wunderbare Schlossbibliothek zu besichtigen",
    meaning: "يمكن أيضاً زيارة مكتبة القصر الرائعة",
    keywords: ["sind = هناك", "wunderbare = رائعة", "Schlossbibliothek = مكتبة قصر"],
    simplified: "كما يمكننا أيضاً مشاهدة مكتبة القصر",
    imagine: "📚🏰 مكتبة مليئة بالكتب عند مدخل قصر"
};

HELP_DATA["sprach1_exam19_7"] = {
    text: "wo man an den alten Bauten den Wandel der Industrie nachvollziehen kann",
    meaning: "حيث يمكن للمرء تتبع التغير الصناعي من خلال المباني القديمة",
    keywords: ["wo = حيث", "alten Bauten = المباني القديمة", "Wandel = التغير"],
    simplified: "المباني القديمة تحكي قصة التحول الصناعي",
    imagine: "🏭📜 مصنع قديم مع لافتات تاريخية"
};

HELP_DATA["sprach1_exam19_8"] = {
    text: "Dabei erfährt man alles über die Eisenindustrie",
    meaning: "في ذلك نتعلم كل شيء عن صناعة الحديد",
    keywords: ["Dabei = في ذلك", "erfährt = نتعلم", "Eisenindustrie = صناعة الحديد"],
    simplified: "سنكتشف كيف ازدهرت المدينة بفضل صناعة الحديد",
    imagine: "⚙️🏭 عجلات مسننة وسندان"
};

HELP_DATA["sprach1_exam19_9"] = {
    text: "an diesem Wochenende",
    meaning: "في عطلة نهاية الأسبوع هذه",
    keywords: ["diesem = هذه", "Wochenende = عطلة نهاية الأسبوع", "an = في"],
    simplified: "ستقام أيام الأدب السنوية في ذلك الوقت",
    imagine: "📚🗓️ تقويم مميز بكومة كتب"
};

HELP_DATA["sprach1_exam19_10"] = {
    text: "Auch die Umgebung kann sich sehen lassen",
    meaning: "المنطقة المحيطة رائعة أيضاً",
    keywords: ["kann = يمكن", "sehen lassen = تتفاخر", "Umgebung = المنطقة المحيطة"],
    simplified: "المناطق الطبيعية من حولكم جميلة جداً",
    imagine: "🏞️🌳 غابة كثيفة وسماء زرقاء صافية"
};

// ============================================
// Exam 20 (exam20.json) - Liebes Julian
// ============================================

HELP_DATA["sprach1_exam20_1"] = {
    text: "konntest dich gut erholen",
    meaning: "يمكن أن تسترخي جيداً",
    keywords: ["konntest = يمكن أن", "dich erholen = تسترخي", "gut = جيداً"],
    simplified: "لقد استطعت الراحة والاستجمام",
    imagine: "🏖️😎 على كرسي استرخاء تحت مظلة"
};

HELP_DATA["sprach1_exam20_2"] = {
    text: "Ich würde ja auch gerne mal wieder ans Meer fahren",
    meaning: "أود أيضاً الذهاب إلى البحر مرة أخرى",
    keywords: ["würde = أود", "gerne = من دواعي سروري", "ans Meer = إلى البحر"],
    simplified: "أنا أيضاً أحلم يوماً برحلة بحرية",
    imagine: "🌊🏖️ أحلام يقظة أمام البحر"
};

HELP_DATA["sprach1_exam20_3"] = {
    text: "Zeit für Urlaub",
    meaning: "وقت للإجازة",
    keywords: ["Zeit = وقت", "für = لـ", "Urlaub = إجازة"],
    simplified: "ليس لدي الوقت الكافي لأخذ إجازة الآن",
    imagine: "⏳💼 ساعة رمل وطائرة متجهة بعيداً"
};

HELP_DATA["sprach1_exam20_4"] = {
    text: "Nach so vielen Jahren",
    meaning: "بعد كل هذه السنوات",
    keywords: ["vielen = العديد", "Jahren = سنوات", "nach = بعد"],
    simplified: "بعد كل هذا الوقت الذي قضيته في برلين",
    imagine: "🗓️🏙️ سنوات طويلة وسماء مدينة"
};

HELP_DATA["sprach1_exam20_5"] = {
    text: "gefallen mir besonders die schönen Fachwerkhäuser",
    meaning: "تعجبني بشكل خاص المنازل نصف الخشبية الجميلة",
    keywords: ["gefallen = تعجبني", "besonders = بشكل خاص", "Fachwerkhäuser = منازل نصف خشبية"],
    simplified: "ما يلفت انتباهي كثيراً هو جمال وأصالة البيوت الخشبية",
    imagine: "🏚️❤️ منزل خشبي جميل على طريق مرصوف بالحصى"
};

HELP_DATA["sprach1_exam20_6"] = {
    text: "denn dort gibt es viele kleine Läden",
    meaning: "لأن هناك العديد من المحلات الصغيرة",
    keywords: ["denn = لأن", "dort = هناك", "kleine Läden = محلات صغيرة"],
    simplified: "منطقة المشاة مليئة بالمتاجر والمقاهي الصغيرة اللطيفة",
    imagine: "🛍️☕ شارع تسوق نابض بالحياة"
};

HELP_DATA["sprach1_exam20_7"] = {
    text: "Wenn du willst",
    meaning: "إذا أردت",
    keywords: ["Wenn = إذا", "du = أنت", "willst = تريد"],
    simplified: "يمكنني إرشادك في جولة بالمدينة إذا أحببت",
    imagine: "🗺️🤝 شخص يمد يده لشخص آخر أمام متجر سفر"
};

HELP_DATA["sprach1_exam20_8"] = {
    text: "Wann ist bei mir der Umzugsstress vorbei",
    meaning: "متى سينتهي وقت الانتقال المزدحم بالنسبة لي؟",
    keywords: ["Umzugsstress = وقت الانتقال المزدحم", "vorbei = منتهي", "bei mir = بالنسبة لي"],
    simplified: "لقد انتهى معظم ضغط الانتقال الآن",
    imagine: "📦🏠 صناديق فارغة وزوجان مرتاحان يجلسان على أريكة"
};

HELP_DATA["sprach1_exam20_9"] = {
    text: "eine große Anzahl nicht ausgeräumter Kisten",
    meaning: "عدد كبير من الصناديق غير المرتبة",
    keywords: ["große Anzahl = عدد كبير", "nicht ausgeräumter = غير مرتبة", "Kisten = صناديق"],
    simplified: "العديد من الصناديق التي لم تُفرغ بعد في غرفة المعيشة",
    imagine: "📦📦 غرفة معيشة مليئة بالصناديق"
};

HELP_DATA["sprach1_exam20_10"] = {
    text: "weil sie geräumig und zentral gelegen ist",
    meaning: "لأنها فسيحة وتقع في موقع مركزي",
    keywords: ["weil = لأن", "geräumig = فسيحة", "zentral gelegen = موقع مركزي"],
    simplified: "لقد كنت محظوظاً بشقتي الجديدة لأنها واسعة وقريبة من كل شيء",
    imagine: "🏠🔑 زوجان يفتحان باب شقة واسعة ومشرقة"
};


// ============================================
// sprach1.js - جميع شروحات Sprachbausteine Teil 1
// ============================================


// ============================================
// Exam 21 (exam21.json) - Liebe Meike
// ============================================

HELP_DATA["sprach1_exam21_1"] = {
    text: "mit deiner neuen Arbeit zufrieden bist",
    meaning: "أنت راضية عن عملك الجديد",
    keywords: ["neuen = الجديد", "Arbeit = عمل", "zufrieden = راضية"],
    simplified: "تشعرين بالرضا عن وظيفتك الجديدة",
    imagine: "👩‍💼😊 امرأة تبتسم أمام مكتبها"
};

HELP_DATA["sprach1_exam21_2"] = {
    text: "Seit ich einen neuen Chef habe",
    meaning: "منذ أن أصبح لدي مدير جديد",
    keywords: ["Seit = منذ", "neuen Chef = مدير جديد", "habe = لدي"],
    simplified: "منذ قدوم المدير الجديد تغيرت الأمور",
    imagine: "👨‍💼😠 رجل جالس في مكتب بوجه عابس"
};

HELP_DATA["sprach1_exam21_3"] = {
    text: "Daher habe ich oft darüber nachgedacht",
    meaning: "لذلك فكرت كثيراً في ذلك",
    keywords: ["Darüber = في ذلك", "nachgedacht = فكرت", "oft = كثيراً"],
    simplified: "لذلك كنت أفكر كثيراً في الأمر",
    imagine: "🤔💭 شخص جالس يفكر ويداه تحت ذقنه"
};

HELP_DATA["sprach1_exam21_4"] = {
    text: "Ich habe mich an einer Fernuniversität eingeschrieben",
    meaning: "لقد سجلت نفسي في جامعة مفتوحة",
    keywords: ["mich = نفسي", "eingeschrieben = سجلت", "Fernuniversität = جامعة مفتوحة"],
    simplified: "لقد سجلت في جامعة التعليم عن بُعد",
    imagine: "💻🎓 شخص يضغط على زر التسجيل على شاشة الكمبيوتر"
};

HELP_DATA["sprach1_exam21_5"] = {
    text: "Obwohl ich zuerst einige Bedenken hatte",
    meaning: "على الرغم من أن لدي بعض المخاوف في البداية",
    keywords: ["Obwohl = على الرغم من", "Bedenken = مخاوف", "zuerst = في البداية"],
    simplified: "رغم أنني كنت قلقة في البداية",
    imagine: "😟❓ امرأة تفكر وتبدو قلقة"
};

HELP_DATA["sprach1_exam21_6"] = {
    text: "ob ich nebenberuflich ein Studium schaffen könnte",
    meaning: "ما إذا كنت سأنجح في الدراسة إلى جانب العمل",
    keywords: ["könnte = يمكنني", "nebenberuflich = إلى جانب العمل", "Studium = دراسة"],
    simplified: "هل سأتمكن من الدراسة والعمل معاً",
    imagine: "📚💼 شخص يحاول التوفيق بين الكتب والحقيبة"
};

HELP_DATA["sprach1_exam21_7"] = {
    text: "wie war ich wirklich sehr nervös",
    meaning: "كنت متوترة جداً حقاً",
    keywords: ["wie = كيف", "nervös = متوترة", "wirklich = حقاً"],
    simplified: "كنت متوترة جداً بصدق",
    imagine: "😰🙏 شخص يقرص أصابعه بتوتر"
};

HELP_DATA["sprach1_exam21_8"] = {
    text: "wie viel Zeit die Vorbereitungen in Anspruch nehmen",
    meaning: "كم من الوقت تستغرقه التحضيرات",
    keywords: ["nehmen = تستغرق", "Vorbereitungen = تحضيرات", "Zeit = وقت"],
    simplified: "لقد قللت من تقدير الوقت اللازم للتحضير",
    imagine: "⏰😲 شخص ينظر إلى الساعة مندهشاً"
};

HELP_DATA["sprach1_exam21_9"] = {
    text: "Für mich ist es aber eine große Hilfe",
    meaning: "لكن بالنسبة لي إنها مساعدة كبيرة",
    keywords: ["mich = لي", "große Hilfe = مساعدة كبيرة", "ist = هي"],
    simplified: "بالنسبة لي إنه لمساعدة عظيمة",
    imagine: "🤝🙏 شخص يشكر آخر"
};

HELP_DATA["sprach1_exam21_10"] = {
    text: "in denen man rund um die Uhr Fragen stellen kann",
    meaning: "حيث يمكن للمرء طرح الأسئلة على مدار الساعة",
    keywords: ["denen = حيث", "rund um die Uhr = على مدار الساعة", "Fragen stellen = طرح أسئلة"],
    simplified: "مجموعات المحادثة متاحة للاستفسارات في أي وقت",
    imagine: "💬🕒 فقاعات دردشة وساعة في كل مكان"
};

// ============================================
// Exam 22 (exam22.json) - Liebe Corinna (معدل)
// ============================================

HELP_DATA["sprach1_exam22_1"] = {
    text: "dass ich dir seit Ewigkeiten nicht mehr geschrieben habe",
    meaning: "أنني لم أكتب لك منذ وقت طويل جداً",
    keywords: ["dass = أن", "Ewigkeiten = وقت طويل", "nicht mehr = لا...بعد الآن"],
    simplified: "لم أكتب لك منذ زمن طويل",
    imagine: "📬😔 بريد دون رسائل جديدة"
};

HELP_DATA["sprach1_exam22_2"] = {
    text: "mich mit etwas Anderem zu beschäftigen als mit der neuen Arbeit",
    meaning: "لأنشغل بأي شيء آخر غير العمل الجديد",
    keywords: ["beschäftigen = أنشغل", "Anderem = شيء آخر", "neuen Arbeit = العمل الجديد"],
    simplified: "الانشغال بأي شيء آخر غير الوظيفة الجديدة",
    imagine: "📋🚫 شخص يرفض ملفات ويشير إلى ساعته"
};

HELP_DATA["sprach1_exam22_3"] = {
    text: "Die gibt es doch wie Sand am Meer",
    meaning: "إنهم موجودون مثل الرمل على البحر",
    keywords: ["doch = في الواقع", "Sand am Meer = الرمل على البحر", "wie = مثل"],
    simplified: "هناك عدد لا يحصى منهم",
    imagine: "🏖️🌊 شاطئ به رمل لا يُعد"
};

HELP_DATA["sprach1_exam22_4"] = {
    text: "insbesondere an die Obstbauern der näheren Umgebung",
    meaning: "خاصة لمزارعي الفاكهة في المنطقة المجاورة",
    keywords: ["insbesondere = خاصة", "Obstbauern = مزارعي فاكهة", "näheren Umgebung = المنطقة المجاورة"],
    simplified: "خاصة للمزارعين المحليين",
    imagine: "🌳🍎 بستان تفاح يقطف ثماره"
};

HELP_DATA["sprach1_exam22_5"] = {
    text: "acht Stunden am Tag überwiegend im Freien zu arbeiten",
    meaning: "العمل في الهواء الطلق معظم اليوم لمدة ثماني ساعات",
    keywords: ["überwiegend = معظم", "im Freien = في الهواء الطلق", "acht Stunden = ثماني ساعات"],
    simplified: "العمل في الخارج لمدة ثماني ساعات كاملة",
    imagine: "☀️👒 شخص يعمل في الحديقة تحت الشمس"
};

HELP_DATA["sprach1_exam22_6"] = {
    text: "fast eine dreiviertel Stunde",
    meaning: "حوالي خمسة وأربعين دقيقة",
    keywords: ["fast = حوالي", "dreiviertel Stunde = ثلاثة أرباع الساعة"],
    simplified: "ما يقرب من خمسة وأربعين دقيقة",
    imagine: "⏰🚆 ساعة محطة قطار"
};

HELP_DATA["sprach1_exam22_7"] = {
    text: "nur wenig Lust, etwas zu unternehmen",
    meaning: "لا رغبة لدي للقيام بأي شيء",
    keywords: ["wenig = قليل", "Lust = رغبة", "zu unternehmen = للقيام به"],
    simplified: "لا أملك أي رغبة في فعل أي شيء",
    imagine: "🛋️😐 شخص مستلقٍ على أريكته يشعر بالملل"
};

HELP_DATA["sprach1_exam22_8"] = {
    text: "Sie kommt wieder",
    meaning: "سوف تعود",
    keywords: ["kommt = تعود", "wieder = مجدداً", "Sie = هي"],
    simplified: "ستعود رغبتي مجدداً",
    imagine: "🔄😊 دائرة من الأسهم تشير إلى العودة"
};

HELP_DATA["sprach1_exam22_9"] = {
    text: "Oder lässt du dir noch ein bisschen Zeit damit?",
    meaning: "أم أنك ستمنح نفسك بعض الوقت للقيام بذلك؟",
    keywords: ["lässt = تمنح", "Zeit = وقت", "bisschen = بعض"],
    simplified: "هل تمنح نفسك قسطاً من الوقت؟",
    imagine: "⏳🙋 شخص ينتظر"
};

HELP_DATA["sprach1_exam22_10"] = {
    text: "Fang so früh wie möglich mit den Bewerbungen an",
    meaning: "ابدأ بتقديم الطلبات في أقرب وقت ممكن",
    keywords: ["möglich = ممكن", "früh = مبكراً", "Bewerbungen = طلبات"],
    simplified: "قدم طلباتك في أقرب فرصة",
    imagine: "📝✍️ شخص يكتب في نموذج بسرعة"
};

// ============================================
// Exam 23 (exam23.json) - Liebe Corinna
// ============================================

HELP_DATA["sprach1_exam23_1"] = {
    text: "dass ich dir seit Ewigkeiten nicht mehr geschrieben habe",
    meaning: "أنني لم أكتب لك منذ وقت طويل جداً",
    keywords: ["dass = أن", "Ewigkeiten = وقت طويل", "nicht mehr = لا...بعد الآن"],
    simplified: "لم أكتب لك منذ زمن طويل",
    imagine: "📬😔 بريد دون رسائل جديدة"
};

HELP_DATA["sprach1_exam23_2"] = {
    text: "mich mit etwas Anderem zu beschäftigen als mit der neuen Arbeit",
    meaning: "لأنشغل بأي شيء آخر غير العمل الجديد",
    keywords: ["beschäftigen = أنشغل", "Anderem = شيء آخر", "neuen Arbeit = العمل الجديد"],
    simplified: "الانشغال بأي شيء آخر غير الوظيفة الجديدة",
    imagine: "📋🚫 شخص يرفض ملفات ويشير إلى ساعته"
};

HELP_DATA["sprach1_exam23_3"] = {
    text: "Die gibt es doch wie Sand am Meer",
    meaning: "إنهم موجودون مثل الرمل على البحر",
    keywords: ["doch = في الواقع", "Sand am Meer = الرمل على البحر", "wie = مثل"],
    simplified: "هناك عدد لا يحصى منهم",
    imagine: "🏖️🌊 شاطئ به رمل لا يُعد"
};

HELP_DATA["sprach1_exam23_4"] = {
    text: "insbesondere an die Obstbauern der näheren Umgebung",
    meaning: "خاصة لمزارعي الفاكهة في المنطقة المجاورة",
    keywords: ["insbesondere = خاصة", "Obstbauern = مزارعي فاكهة", "näheren Umgebung = المنطقة المجاورة"],
    simplified: "خاصة للمزارعين المحليين",
    imagine: "🌳🍎 بستان تفاح يقطف ثماره"
};

HELP_DATA["sprach1_exam23_5"] = {
    text: "acht Stunden am Tag überwiegend im Freien zu arbeiten",
    meaning: "العمل في الهواء الطلق معظم اليوم لمدة ثماني ساعات",
    keywords: ["überwiegend = معظم", "im Freien = في الهواء الطلق", "acht Stunden = ثماني ساعات"],
    simplified: "العمل في الخارج لمدة ثماني ساعات كاملة",
    imagine: "☀️👒 شخص يعمل في الحديقة تحت الشمس"
};

HELP_DATA["sprach1_exam23_6"] = {
    text: "muss ich fast eine dreiviertel Stunde mit dem Zug fahren",
    meaning: "يجب أن أستقل القطار لمدة حوالي خمسة وأربعين دقيقة",
    keywords: ["muss = يجب", "Zug = قطار", "dreiviertel Stunde = ثلاثة أرباع الساعة"],
    simplified: "أحتاج إلى الساعة بالقطار كل يوم",
    imagine: "🚆😪 شخص متعب يستقل القطار"
};

HELP_DATA["sprach1_exam23_7"] = {
    text: "nur wenig Lust, etwas zu unternehmen",
    meaning: "لا رغبة لدي للقيام بأي شيء",
    keywords: ["wenig = قليل", "Lust = رغبة", "zu unternehmen = للقيام به"],
    simplified: "لا أملك أي رغبة في فعل أي شيء",
    imagine: "🛋️😐 شخص مستلقٍ على أريكته يشعر بالملل"
};

HELP_DATA["sprach1_exam23_8"] = {
    text: "Sie kommt wieder",
    meaning: "سوف تعود",
    keywords: ["kommt = تعود", "wieder = مجدداً", "Sie = هي"],
    simplified: "ستعود رغبتي مجدداً",
    imagine: "🔄😊 دائرة من الأسهم تشير إلى العودة"
};

HELP_DATA["sprach1_exam23_9"] = {
    text: "Oder lässt du dir noch ein bisschen Zeit damit?",
    meaning: "أم أنك ستمنح نفسك بعض الوقت للقيام بذلك؟",
    keywords: ["lässt = تمنح", "Zeit = وقت", "bisschen = بعض"],
    simplified: "هل تمنح نفسك قسطاً من الوقت؟",
    imagine: "⏳🙋 شخص ينتظر"
};

HELP_DATA["sprach1_exam23_10"] = {
    text: "Fang so früh wie möglich mit den Bewerbungen an",
    meaning: "ابدأ بتقديم الطلبات في أقرب وقت ممكن",
    keywords: ["möglich = ممكن", "früh = مبكراً", "Bewerbungen = طلبات"],
    simplified: "قدم طلباتك في أقرب فرصة",
    imagine: "📝✍️ شخص يكتب في نموذج بسرعة"
};

// ============================================
// Exam 24 (exam24.json) - Liebe Ida
// ============================================

HELP_DATA["sprach1_exam24_1"] = {
    text: "auf die neue Stelle und das Leben in der Stadt gefreut",
    meaning: "سعيدة بالوظيفة الجديدة والحياة في المدينة",
    keywords: ["auf = على", "neue Stelle = وظيفة جديدة", "gefreut = سعيدة"],
    simplified: "لم أكن متحمسة للوظيفة والحياة الجديدة في البداية",
    imagine: "🏢😕 امرأة تنظر إلى مبنى جديد بقلق"
};

HELP_DATA["sprach1_exam24_2"] = {
    text: "Ich hätte ja auch täglich mit dem Zug fahren können",
    meaning: "كان بإمكاني أيضاً ركوب القطار يومياً",
    keywords: ["hätte = كان بإمكاني", "Zug = قطار", "täglich = يومياً"],
    simplified: "كان ممكناً أن أستقل القطار يومياً بدلاً من ذلك",
    imagine: "🚆🤔 شخص ينظر إلى قطار"
};

HELP_DATA["sprach1_exam24_3"] = {
    text: "mich in meiner neuen Wohnung auch gar nicht richtig wohlgefühlt",
    meaning: "لم أشعر بالراحة في شقتي الجديدة على الإطلاق",
    keywords: ["mich = نفسي", "wohlgefühlt = شعرت بالراحة", "gar nicht = على الإطلاق"],
    simplified: "لم أشعر بالارتياح في المكان الجديد",
    imagine: "🏠😞 امرأة تجلس على أريكة فارغة"
};

HELP_DATA["sprach1_exam24_4"] = {
    text: "Nachdem ich meine Umzugskartons ausgepackt hatte",
    meaning: "بعد أن فتحت صناديق الانتقال الخاصة بي",
    keywords: ["ausgepackt hatte = كنت قد فتحت", "Umzugskartons = صناديق الانتقال"],
    simplified: "بعد أن أنهيت تفريغ الصناديق أخيراً",
    imagine: "📦🔓 شخص يفتح صندوقاً"
};

HELP_DATA["sprach1_exam24_5"] = {
    text: "Das liegt vor allem daran, dass ich eine neue Freundin gefunden habe",
    meaning: "السبب الرئيسي يعود إلى أنني وجدت صديقة جديدة",
    keywords: ["daran = في ذلك", "neue Freundin = صديقة جديدة", "gefunden = وجدت"],
    simplified: "أصبحت أستمتع بفرانكفورت بفضل صديقتي الجديدة",
    imagine: "👭😊 اثنتان من النساء تحتضنان بعضهما"
};

HELP_DATA["sprach1_exam24_6"] = {
    text: "Als wir miteinander ins Gespräch kamen",
    meaning: "عندما بدأنا التحدث مع بعضنا البعض",
    keywords: ["miteinander = معاً", "ins Gespräch = في الحديث", "kamen = بدأنا"],
    simplified: "ذات يوم بدأنا نتحدث بشكل عفوي",
    imagine: "💬👥 شخصان يتحدثان والفقاعات تملأ الشاشة"
};

HELP_DATA["sprach1_exam24_7"] = {
    text: "Mein Leben sieht nun also ganz anders aus als noch vor drei Monaten",
    meaning: "لذا تبدو حياتي الآن مختلفة تماماً عما كانت عليه قبل ثلاثة أشهر",
    keywords: ["als = مقارنة بـ", "ganz anders = مختلفة تماماً", "drei Monaten = ثلاثة أشهر"],
    simplified: "الأمور تغيرت بشكل كبير عن ما كانت عليه في السابق",
    imagine: "📅➡️📅 تقويم قديم وآخر جديد بوجه مبتسم"
};

HELP_DATA["sprach1_exam24_8"] = {
    text: "obwohl ich oft Überstunden machen muss",
    meaning: "على الرغم من أنني غالباً ما أضطر للعمل الإضافي",
    keywords: ["obwohl = على الرغم من", "Überstunden = ساعات عمل إضافية", "oft = غالباً"],
    simplified: "أنا سعيدة حتى لو اضطررت للبقاء لساعات متأخرة",
    imagine: "🕘😅 امرأة تعمل لوقت متأخر"
};

HELP_DATA["sprach1_exam24_9"] = {
    text: "bei uns in der Abteilung",
    meaning: "في قسمنا",
    keywords: ["bei = في", "uns = قسمنا", "Abteilung = قسم"],
    simplified: "الجو العام لطيف بين زملاء العمل الذين أعمل معهم",
    imagine: "👥🏢 فريق عمل يبدو سعيداً ومرتاحاً"
};

HELP_DATA["sprach1_exam24_10"] = {
    text: "wie es Dir eigentlich geht",
    meaning: "كيف حالك حقاً",
    keywords: ["eigentlich = حقاً", "geht = حالك", "Dir = لك"],
    simplified: "ولكن لم أسألك بعد عن أحوالك أنتِ",
    imagine: "📱❓ شخص يقرأ رسالة ويبدو فضولياً"
};

// ============================================
// Exam 25 (exam25.json) - Liebe Paola
// ============================================

HELP_DATA["sprach1_exam25_1"] = {
    text: "dass wir sie bald kennenlernen",
    meaning: "أن نتعرف عليها قريباً",
    keywords: ["sie = لها", "bald = قريباً", "kennenlernen = نتعرف"],
    simplified: "لا نطاق رؤية الصغيرة قريباً",
    imagine: "👶💕 قلب يخرج من صورة طفل"
};

HELP_DATA["sprach1_exam25_2"] = {
    text: "Deshalb warten wir lieber noch etwas",
    meaning: "لذلك سننتظر قليلاً بدلاً من ذلك",
    keywords: ["Deshalb = لذلك", "warten = ننتظر", "lieber = بدلاً من ذلك"],
    simplified: "من الأفضل لنا أن نمنحكم بعض الوقت أولاً",
    imagine: "⏰🤱 أيدي تشير إلى عدم التسرع مع طفل ينام"
};

HELP_DATA["sprach1_exam25_3"] = {
    text: "wann euch ein Treffen lieb wäre",
    meaning: "متى ترغبون في اللقاء",
    keywords: ["wann = متى", "Treffen = لقاء", "lieb wäre = ترغبون"],
    simplified: "أخبرونا بالوقت المناسب لزيارتكم",
    imagine: "📅✉️ تقويم وظرف بريد"
};

HELP_DATA["sprach1_exam25_4"] = {
    text: "auf jeden Fall bereit",
    meaning: "جاهزة بالتأكيد",
    keywords: ["auf = على", "jeden Fall = كل الأحوال", "bereit = جاهزة"],
    simplified: "لقد جهزنا شيئاً صغيراً لها بالفعل",
    imagine: "🎁👶 صندوق هدايا عليه شريط"
};

HELP_DATA["sprach1_exam25_5"] = {
    text: "Seit diesem Jahr sind hier im Ort Grundschule und Kindergarten in demselben Gebäudekomplex untergebracht",
    meaning: "منذ هذا العام، تقع المدرسة الابتدائية ورياض الأطفال في نفس المجمع",
    keywords: ["Seit = منذ", "diesem Jahr = هذا العام", "Grundschule = مدرسة ابتدائية"],
    simplified: "المدرسة ورياض الأطفال أصبحتا الآن في مبنى واحد موحد",
    imagine: "🏫🏢 مبنى كبير به أطفال في الخارج"
};

HELP_DATA["sprach1_exam25_6"] = {
    text: "ob ich nicht wieder anfangen soll, halbtags zu arbeiten",
    meaning: "ما إذا كان ينبغي لي أن أعمل بدوام جزئي مرة أخرى",
    keywords: ["ob = ما إذا", "anfangen = أبدأ", "halbtags = دوام جزئي"],
    simplified: "أفكر في العودة إلى العمل",
    imagine: "💼🤔 امرأة تنظر إلى حاسوب محمول"
};

HELP_DATA["sprach1_exam25_7"] = {
    text: "ich kann mir gar nicht vorstellen",
    meaning: "لا أستطيع أن أتخيل ذلك على الإطلاق",
    keywords: ["vorstellen = أتخيل", "gar nicht = على الإطلاق", "kann = أستطيع"],
    simplified: "من الصعب جداً بالنسبة لي أن أتخيل كيف سأفعل ذلك",
    imagine: "🤷‍♀️💭 امرأة ترفع يديها بإحباط"
};

HELP_DATA["sprach1_exam25_8"] = {
    text: "Was hältst du davon?",
    meaning: "ما رأيك في ذلك؟",
    keywords: ["davon = في ذلك", "hältst du = رأيكِ", "Was = ما"],
    simplified: "ما رأيكِ؟",
    imagine: "❓🤔 فتاتان تتحدثان وعلامة استفهام بينهما"
};

HELP_DATA["sprach1_exam25_9"] = {
    text: "bei der meine Ausbildung als Krankenschwester von Vorteil wäre",
    meaning: "حيث يكون تدريبي كممرضة مفيداً",
    keywords: ["als = كـ", "Krankenschwester = ممرضة", "von Vorteil = مفيد"],
    simplified: "وظيفة تستفيد من خبرتي ومهاراتي",
    imagine: "🩺💼 سماعة طبيب وحقيبة"
};

HELP_DATA["sprach1_exam25_10"] = {
    text: "Wie dem auch sei",
    meaning: "مهما يكن الأمر",
    keywords: ["sei = يكن", "auch = أيضاً", "Wie dem = مهما"],
    simplified: "على أية حال",
    imagine: "🤷‍♀️✨ امرأة ترفع يديها كعلامة على القبول"
};

// ============================================
// Exam 26 (exam26.json) - Liebe Jutta
// ============================================

HELP_DATA["sprach1_exam26_1"] = {
    text: "ich hatte aber dafür einen triftigen Grund",
    meaning: "لكن كان لدي سبب وجيه لذلك",
    keywords: ["dafür = لذلك", "triftigen Grund = سبب وجيه", "hatte = كان لدي"],
    simplified: "كان لدي عذر مقبول تماماً",
    imagine: "📋✅ قائمة مكتوب عليها أسباب وجيهة"
};

HELP_DATA["sprach1_exam26_2"] = {
    text: "Ich habe das Schreiben wegen meiner Krankheit vernachlässigt",
    meaning: "لقد أهملت الكتابة بسبب مرضي",
    keywords: ["wegen = بسبب", "Krankheit = مرض", "vernachlässigt = أهملت"],
    simplified: "لم أتمكن من الكتابة لأنني لم أكن بصحة جيدة",
    imagine: "🤒✍️ شخص مريض يحاول الكتابة"
};

HELP_DATA["sprach1_exam26_3"] = {
    text: "ich habe die richtige Untersuchung immer wieder verschoben",
    meaning: "لقد أجلت إجراء الفحص المناسب مراراً وتكراراً",
    keywords: ["verschoben = أجلت", "Untersuchung = فحص", "richtige = المناسب"],
    simplified: "ظللت أؤجل الذهاب لإجراء الفحوصات اللازمة",
    imagine: "📅🏥 تقويم ومستشفى"
};

HELP_DATA["sprach1_exam26_4"] = {
    text: "Schließlich konnte ich nicht mehr richtig schlafen",
    meaning: "في النهاية لم أعد أستطيع النوم جيداً",
    keywords: ["nicht mehr = لم أعد", "schlafen = أنام", "richtig = جيداً"],
    simplified: "أصبحت الأرق رفيق الليالي بالنسبة لي",
    imagine: "🛌😖 شخص مستلقٍ على السرير وعيناه مفتوحتان"
};

HELP_DATA["sprach1_exam26_5"] = {
    text: "Mein Arzt hat mich ins Krankenhaus zu einigen Untersuchungen eingewiesen",
    meaning: "أحالني طبيبي إلى المستشفى لإجراء بعض الفحوصات",
    keywords: ["eingewiesen = أحال", "Arzt = طبيب", "Krankenhaus = مستشفى"],
    simplified: "نصحني الطبيب بالذهاب إلى المستشفى لإجراء أشعة وفحوصات",
    imagine: "👨‍⚕️🏨 طبيب يكتب تقريراً"
};

HELP_DATA["sprach1_exam26_6"] = {
    text: "ein paar Kilo Übergewicht habe",
    meaning: "لدي بضعة كيلوغرامات من الوزن الزائد",
    keywords: ["Übergewicht = وزن زائد", "Kilo = كيلوغرامات", "paar = بضعة"],
    simplified: "الوزن الزائد يضغط على العمود الفقري",
    imagine: "⚖️📈 موازين تشير إلى رقم مرتفع"
};

HELP_DATA["sprach1_exam26_7"] = {
    text: "Ich gehe jetzt einige Monate lang zur Behandlung",
    meaning: "سأذهب لتلقي العلاج لعدة أشهر الآن",
    keywords: ["zur = إلى", "Behandlung = علاج", "Monate = أشهر"],
    simplified: "أخطط للعلاج الطبيعي للأشهر المقبلة",
    imagine: "🏥💆‍♀️ امرأة في مركز علاج طبيعي"
};

HELP_DATA["sprach1_exam26_8"] = {
    text: "Einige Behandlungen sind schon hinter mir",
    meaning: "لقد أكملت بالفعل بعض جلسات العلاج",
    keywords: ["hinter = خلف", "mir = لي", "sind = هي"],
    simplified: "لقد خضعت لبعض العلاجات بالفعل",
    imagine: "📋☑️ قائمة مهام"
};

HELP_DATA["sprach1_exam26_9"] = {
    text: "der mir unter anderem auch geraten hat, mich mehr zu bewegen",
    meaning: "والذي نصحني أيضاً، من بين أمور أخرى، بممارسة المزيد من الحركة",
    keywords: ["unter anderem = من بين أمور أخرى", "geraten = نصح", "bewegen = أتحرك"],
    simplified: "أوصاني خبير طبي بأن أصبح أكثر نشاطاً",
    imagine: "🏃‍♀️🗣️ طبيب ينصح امرأة"
};

HELP_DATA["sprach1_exam26_10"] = {
    text: "was mir gar nicht schaden würde",
    meaning: "وهو أمر لن يضرني بالتأكيد",
    keywords: ["gar nicht = بالتأكيد لا", "schaden = يضر", "würde = سيكون"],
    simplified: "لن يؤثر ذلك سلباً على صحتي على الإطلاق",
    imagine: "💪✅ شخص يرفع عضلة وعلامة صح"
};

// ============================================
// Exam 27 (exam27.json) - Liebe Familie Geissler
// ============================================

HELP_DATA["sprach1_exam27_1"] = {
    text: "auf meine Bewerbung als Au-pair-Mädchen",
    meaning: "على طلبي كفتاة أوبير",
    keywords: ["auf = على", "Bewerbung = طلب", "Au-pair-Mädchen = فتاة أوبير"],
    simplified: "ردكم على طلبي للعمل كفتاة أوبير",
    imagine: "📄✉️ رسالة مكتوب عليها Au-pair"
};

HELP_DATA["sprach1_exam27_2"] = {
    text: "schließe ich meine Schulausbildung ab",
    meaning: "أنهي تعليمي المدرسي",
    keywords: ["schließe...ab = أنهي", "Schulausbildung = تعليم مدرسي", "ich = أنا"],
    simplified: "سأتخرج من المدرسة قريباً",
    imagine: "🎓📜 يد تحمل شهادة"
};

HELP_DATA["sprach1_exam27_3"] = {
    text: "möchte auch noch mein Deutsch ein bisschen verbessern",
    meaning: "أريد أيضاً تحسين لغتي الألمانية قليلاً",
    keywords: ["ein bisschen = قليلاً", "verbessern = تحسين", "Deutsch = الألمانية"],
    simplified: "أخطط لتحسين مهاراتي في اللغة الألمانية",
    imagine: "🇩🇪📚 علم ألمانيا وكتاب"
};

HELP_DATA["sprach1_exam27_4"] = {
    text: "einen Sprachkurs an einer Sommerschule in meiner Heimat machen",
    meaning: "القيام بدورة لغة في مدرسة صيفية في بلدي",
    keywords: ["machen = القيام", "Sprachkurs = دورة لغة", "Sommerschule = مدرسة صيفية"],
    simplified: "سألتحق بدورة لغة في الصيف",
    imagine: "🏖️📝 كراسة شاطئية"
};

HELP_DATA["sprach1_exam27_5"] = {
    text: "Ich habe noch eine Frage an Sie",
    meaning: "لدي سؤال لكم",
    keywords: ["an = إلى", "Frage = سؤال", "Sie = لكم"],
    simplified: "أود أن أستفسر عن شيء ما",
    imagine: "❓👪 عائلة تنتظر السؤال"
};

HELP_DATA["sprach1_exam27_6"] = {
    text: "Kann ich mir diese Sachen bei irgendjemandem ausleihen?",
    meaning: "هل يمكنني استعارة هذه الأشياء من شخص ما؟",
    keywords: ["irgendjemandem = شخص ما", "ausleihen = استعارة", "Sachen = أشياء"],
    simplified: "هل من الممكن استئجار المعدات؟",
    imagine: "🎿❓ زلاجات وعلامة استفهام"
};

HELP_DATA["sprach1_exam27_7"] = {
    text: "dass Sie mich am Flughafen abholen kommen",
    meaning: "أنكم ستأتون لاستقبالي من المطار",
    keywords: ["dass = أن", "abholen = استقبال", "Flughafen = مطار"],
    simplified: "شكراً لاستعدادكم لاستقبالي عند وصولي",
    imagine: "🛬👋 طائرة تهبط"
};

HELP_DATA["sprach1_exam27_8"] = {
    text: "Ich habe meinen Flug nach Frankfurt schon gebucht",
    meaning: "لقد قمت بالفعل بحجز رحلتي إلى فرانكفورت",
    keywords: ["schon = بالفعل", "gebucht = حجزت", "Flug = رحلة"],
    simplified: "رحلة الطائرة محجوزة بالفعل",
    imagine: "🛫🎟️ بطاقة طيران"
};

HELP_DATA["sprach1_exam27_9"] = {
    text: "Ich schlage vor, dass wir uns erst gegen 7:30 Uhr in einem Café treffen",
    meaning: "أقترح أن نلتقي في مقهى حوالي الساعة 7:30 صباحاً",
    keywords: ["vor = قبل", "Café = مقهى", "treffen = نلتقي"],
    simplified: "يمكننا اللقاء في وقت لاحق لتجنب الانتظار الطويل",
    imagine: "☕🕢 فنجان قهوة وساعة"
};

HELP_DATA["sprach1_exam27_10"] = {
    text: "damit die Kinder schon ein bisschen mehr von mir sehen",
    meaning: "حتى يرى الأطفال المزيد عني قليلاً",
    keywords: ["mehr = المزيد", "sehen = يرى", "Kinder = أطفال"],
    simplified: "أرفق بعض الصور ليعرفني أطفالكم أكثر",
    imagine: "📸👧 صورة فتاة"
};

// ============================================
// Exam 28 (exam28.json) - Liebe Andrea
// ============================================

HELP_DATA["sprach1_exam28_1"] = {
    text: "dass ich erst jetzt antworte",
    meaning: "أنني أجيب الآن فقط",
    keywords: ["erst = فقط", "jetzt = الآن", "antworte = أجيب"],
    simplified: "تأخر ردي بسبب عطل فني",
    imagine: "⏰💻 ساعة ومشكلة تقنية"
};

HELP_DATA["sprach1_exam28_2"] = {
    text: "Jetzt funktioniert alles bestens",
    meaning: "الآن كل شيء يعمل بشكل ممتاز",
    keywords: ["bestens = ممتاز", "funktioniert = يعمل", "alles = كل شيء"],
    simplified: "لقد عاد الكمبيوتر للعمل بكفاءة كاملة",
    imagine: "💻✅ كمبيوتر سعيد"
};

HELP_DATA["sprach1_exam28_3"] = {
    text: "du musst bald wieder mal bei uns kommen",
    meaning: "يجب أن تأتي إلى منزلنا مرة أخرى قريباً",
    keywords: ["bei = في منزل", "uns = نحن", "kommen = تأتي"],
    simplified: "تفضلي بزيارتنا مجدداً",
    imagine: "🏠👭 أصدقاء أمام منزل"
};

HELP_DATA["sprach1_exam28_4"] = {
    text: "aber du bist ziemlich spät dran mit deiner Suche",
    meaning: "لكنك متأخرة جداً في بحثك",
    keywords: ["aber = لكن", "ziemlich = جداً", "spät = متأخرة"],
    simplified: "بدأتِ البحث في وقت متأخر بعض الشيء",
    imagine: "⏰🏃‍♀️ سباق مع الوقت"
};

HELP_DATA["sprach1_exam28_5"] = {
    text: "Man braucht keine besondere Berufserfahrung",
    meaning: "لا حاجة لخبرة مهنية خاصة",
    keywords: ["besondere = خاصة", "Berufserfahrung = خبرة مهنية", "keine = لا حاجة"],
    simplified: "المؤهلات المطلوبة بسيطة جداً",
    imagine: "📜🆓 شهادة وختم مجاني"
};

HELP_DATA["sprach1_exam28_6"] = {
    text: "eine weitere Fremdsprache wäre noch besser",
    meaning: "لغة أجنبية إضافية ستكون أفضل",
    keywords: ["weitere = إضافية", "Fremdsprache = لغة أجنبية", "besser = أفضل"],
    simplified: "إتقان لغة أخرى يُعتبر ميزة إضافية",
    imagine: "🌍💬 الأرض والكلمات"
};

HELP_DATA["sprach1_exam28_7"] = {
    text: "Du musst dich allerdings sehr bald bewerben",
    meaning: "لكن يجب عليك تقديم طلبك قريباً جداً",
    keywords: ["bewerben = تقديم طلب", "sehr bald = قريباً جداً", "musst = يجب عليك"],
    simplified: "الموعد النهائي لتقديم الطلبات يقترب",
    imagine: "📝⏰ قلم وساعة"
};

HELP_DATA["sprach1_exam28_8"] = {
    text: "Leider kenne ich die Hotelbesitzer nicht persönlich",
    meaning: "لسوء الحظ، لا أعرف أصحاب الفندق شخصياً",
    keywords: ["Leider = لسوء الحظ", "persönlich = شخصياً", "kenne = أعرف"],
    simplified: "لا توجد علاقة شخصية يمكن أن تساعدني في التوصية بك",
    imagine: "🏨😔 فندق ووجه حزين"
};

HELP_DATA["sprach1_exam28_9"] = {
    text: "Ich werde übrigens wieder im Kinder-Feriencamp arbeiten",
    meaning: "بالمناسبة، سأعمل مرة أخرى في مخيم العطلات الصيفي للأطفال",
    keywords: ["übrigens = بالمناسبة", "wieder = مرة أخرى", "Kinder-Feriencamp = مخيم عطلات أطفال"],
    simplified: "لم أغير خطتي لهذا الصيف وسأعمل في نفس المخيم",
    imagine: "🏕️👦 مخيم أطفال"
};

HELP_DATA["sprach1_exam28_10"] = {
    text: "aber dann habe ich mich doch entschieden hier zu bleiben",
    meaning: "لكنني في النهاية قررت البقاء هنا",
    keywords: ["entschieden = قررت", "hier = هنا", "bleiben = البقاء"],
    simplified: "لقد غيرت رأيي وفضلت البقاء",
    imagine: "🤷‍♀️🗺️ اختيار"
};

// ============================================
// Exam 29 (exam29.json) - Liebe Andrea (معدل)
// ============================================

HELP_DATA["sprach1_exam29_1"] = {
    text: "dass ich erst jetzt antworte",
    meaning: "أنني أجيب الآن فقط",
    keywords: ["erst = فقط", "jetzt = الآن", "antworte = أجيب"],
    simplified: "تأخر ردي بسبب عطل فني",
    imagine: "⏰💻 ساعة ومشكلة تقنية"
};

HELP_DATA["sprach1_exam29_2"] = {
    text: "Jetzt funktioniert alles bestens",
    meaning: "الآن كل شيء يعمل بشكل ممتاز",
    keywords: ["bestens = ممتاز", "funktioniert = يعمل", "alles = كل شيء"],
    simplified: "لقد عاد الكمبيوتر للعمل بكفاءة كاملة",
    imagine: "💻✅ كمبيوتر سعيد"
};

HELP_DATA["sprach1_exam29_3"] = {
    text: "du musst bald wieder mal bei uns kommen",
    meaning: "يجب أن تأتي إلى منزلنا مرة أخرى قريباً",
    keywords: ["bei = في منزل", "uns = نحن", "kommen = تأتي"],
    simplified: "تفضلي بزيارتنا مجدداً",
    imagine: "🏠👭 أصدقاء أمام منزل"
};

HELP_DATA["sprach1_exam29_4"] = {
    text: "aber du bist ziemlich spät dran mit deiner Suche",
    meaning: "لكنك متأخرة جداً في بحثك",
    keywords: ["ziemlich = جداً", "spät = متأخرة", "Suche = بحث"],
    simplified: "بدأتِ البحث في وقت متأخر بعض الشيء",
    imagine: "⏰🏃‍♀️ سباق مع الوقت"
};

HELP_DATA["sprach1_exam29_5"] = {
    text: "Man braucht keine besondere Berufserfahrung",
    meaning: "لا حاجة لخبرة مهنية خاصة",
    keywords: ["besondere = خاصة", "Berufserfahrung = خبرة مهنية", "keine = لا حاجة"],
    simplified: "المؤهلات المطلوبة بسيطة جداً",
    imagine: "📜🆓 شهادة وختم مجاني"
};

HELP_DATA["sprach1_exam29_6"] = {
    text: "eine weitere Fremdsprache wäre noch besser",
    meaning: "لغة أجنبية إضافية ستكون أفضل",
    keywords: ["weitere = إضافية", "Fremdsprache = لغة أجنبية", "besser = أفضل"],
    simplified: "إتقان لغة أخرى يُعتبر ميزة إضافية",
    imagine: "🌍💬 الأرض والكلمات"
};

HELP_DATA["sprach1_exam29_7"] = {
    text: "Du musst dich allerdings sehr bald bewerben",
    meaning: "لكن يجب عليك تقديم طلبك قريباً جداً",
    keywords: ["bewerben = تقديم طلب", "sehr bald = قريباً جداً", "musst = يجب عليك"],
    simplified: "الموعد النهائي لتقديم الطلبات يقترب",
    imagine: "📝⏰ قلم وساعة"
};

HELP_DATA["sprach1_exam29_8"] = {
    text: "sonst hätte ich mich natürlich sofort für dich eingesetzt",
    meaning: "وإلا لكنت دعمتك فوراً",
    keywords: ["sonst = وإلا", "eingesetzt = دعمت", "sofort = فوراً"],
    simplified: "لولا ذلك، لساعدتك بكل تأكيد",
    imagine: "🤝💪 يد تدعم"
};

HELP_DATA["sprach1_exam29_9"] = {
    text: "Ich werde übrigens wieder im Kinder-Feriencamp arbeiten",
    meaning: "بالمناسبة، سأعمل مرة أخرى في مخيم العطلات الصيفي للأطفال",
    keywords: ["übrigens = بالمناسبة", "wieder = مرة أخرى", "Kinder-Feriencamp = مخيم عطلات أطفال"],
    simplified: "لم أغير خطتي لهذا الصيف وسأعمل في نفس المخيم",
    imagine: "🏕️👦 مخيم أطفال"
};

HELP_DATA["sprach1_exam29_10"] = {
    text: "aber dann habe ich mich doch entschieden hier zu bleiben",
    meaning: "لكنني في النهاية قررت البقاء هنا",
    keywords: ["entschieden = قررت", "hier = هنا", "bleiben = البقاء"],
    simplified: "لقد غيرت رأيي وفضلت البقاء",
    imagine: "🤷‍♀️🗺️ اختيار"
};

// ============================================
// Exam 30 (exam30.json) - Hallo Maria
// ============================================

HELP_DATA["sprach1_exam30_1"] = {
    text: "schicke ich dir noch rasch einige Zeilen",
    meaning: "سأرسل لك بضعة أسطر بسرعة",
    keywords: ["rasch = بسرعة", "Zeilen = أسطر", "schicke = سأرسل"],
    simplified: "فكرت أن أكتب لك قبل العودة للروتين",
    imagine: "✍️📨 يكتب"
};

HELP_DATA["sprach1_exam30_2"] = {
    text: "wegen deiner Grippe nicht dabei sein konntest",
    meaning: "بسبب إصابتك بالإنفلونزا لم تستطيعي الحضور",
    keywords: ["wegen = بسبب", "Grippe = إنفلونزا", "dabei sein = الحضور"],
    simplified: "كنا نفتقدك حقاً خاصة عندما علمنا أنك مريضة",
    imagine: "🤧💊 أنسجة وأدوية"
};

HELP_DATA["sprach1_exam30_3"] = {
    text: "Außer auf Michael sind alle mit dem Zug angereist",
    meaning: "باستثناء مايكل، سافر الجميع بالقطار",
    keywords: ["Außer = باستثناء", "Zug = قطار", "angereist = سافر"],
    simplified: "لقد سافرنا جميعاً بالقطار ما عدا هو",
    imagine: "🚆👋 قطار يسير"
};

HELP_DATA["sprach1_exam30_4"] = {
    text: "Nachdem wir unser Gepäck abgestellt hatten",
    meaning: "بعد أن وضعنا أمتعتنا جانباً",
    keywords: ["abgestellt hatten = كنا قد وضعنا جانباً", "Gepäck = أمتعة", "Nachdem = بعد أن"],
    simplified: "بمجرد وضع الحقائب قمنا بجولة",
    imagine: "🧳🚪 حقائب عند الباب"
};

HELP_DATA["sprach1_exam30_5"] = {
    text: "hat sich als ausgezeichnete Fremdenführerin erwiesen",
    meaning: "أثبتت أنها مرشدة سياحية ممتازة",
    keywords: ["als = كـ", "ausgezeichnete = ممتازة", "Fremdenführerin = مرشدة سياحية"],
    simplified: "عرفت ليلو كل شيء عن المنطقة وأرشدتنا بمهارة",
    imagine: "🗺️👩‍🏫 مرشدة سياحية"
};

HELP_DATA["sprach1_exam30_6"] = {
    text: "Am Abend stand dann die Felsenbühne auf dem Programm",
    meaning: "في المساء كانت المسرح الصخري ضمن جدول الأعمال",
    keywords: ["auf = على", "Programm = جدول أعمال", "Felsenbühne = مسرح صخري"],
    simplified: "لقد شاهدنا عرضاً مسرحياً مميزاً في المساء",
    imagine: "⛰️🎭 مسرح في الجبال"
};

HELP_DATA["sprach1_exam30_7"] = {
    text: "Die Wanderung am nächsten Tag war ganz schön anstrengend",
    meaning: "كانت رحلة اليوم التالي مرهقة حقاً",
    keywords: ["ganz schön = حقاً", "anstrengend = مرهقة", "Wanderung = رحلة"],
    simplified: "التسلق كان متعباً ولكنه يستحق العناء",
    imagine: "🥾😓 حذاء المشي"
};

HELP_DATA["sprach1_exam30_8"] = {
    text: "Obwohl alle ziemlich erschöpft waren",
    meaning: "على الرغم من أن الجميع كانوا مرهقين جداً",
    keywords: ["Obwohl = على الرغم من", "erschöpft = مرهقين", "ziemlich = جداً"],
    simplified: "لم نستطع النوم مبكراً رغم التعب الشديد",
    imagine: "😴💬 شخص نائم بجانب آخر"
};

HELP_DATA["sprach1_exam30_9"] = {
    text: "waren wir uns einig, dass wir bald wieder zusammen einen Ausflug machen sollten",
    meaning: "اتفقنا على أن ننظم رحلة أخرى معاً قريباً",
    keywords: ["sollten = يجب أن", "Ausflug = رحلة", "zusammen = معاً"],
    simplified: "لقد خططنا لاجتماع قادم بالفعل",
    imagine: "🗓️🤝 أيادي مصافحة"
};

HELP_DATA["sprach1_exam30_10"] = {
    text: "Ich hoffe, dass es dir inzwischen schon wieder besser geht",
    meaning: "آمل أن تكوني قد تعافيتِ الآن",
    keywords: ["inzwischen = الآن", "besser = أفضل", "geht = تشعرين"],
    simplified: "أتمنى أن تكوني قد استعدت عافيتك تماماً",
    imagine: "💪😊 يد تعرض عضلة ووجه مبتسم"
};

// ============================================
// Exam 31 (exam31.json) - Sehr geehrte Frau Szabo
// ============================================

HELP_DATA["sprach1_exam31_1"] = {
    text: "an unseren Deutschkursen",
    meaning: "بدوراتنا الألمانية",
    keywords: ["an = بدورات", "Deutschkursen = دورات ألمانية", "unseren = دوراتنا"],
    simplified: "اهتمامكم بدوراتنا الألمانية",
    imagine: "🇩🇪📚 علم ألماني وكتاب"
};

HELP_DATA["sprach1_exam31_2"] = {
    text: "in Höhe von € 200,-",
    meaning: "بقيمة 200 يورو",
    keywords: ["Höhe = قيمة", "von = بقيمة", "€ 200,- = 200 يورو"],
    simplified: "دفعة أولى قدرها 200 يورو",
    imagine: "💰📄 ورقة نقدية يورو"
};

HELP_DATA["sprach1_exam31_3"] = {
    text: "Zwecks besserer Einschätzung Ihrer Vorkenntnisse",
    meaning: "لغرض تقدير أفضل لمعرفتك المسبقة",
    keywords: ["Zwecks = لغرض", "Einschätzung = تقدير", "Vorkenntnisse = معرفة مسبقة"],
    simplified: "لتقييم مستواك بشكل أفضل",
    imagine: "📝🔍 ورقة امتحان وعدسة مكبرة"
};

HELP_DATA["sprach1_exam31_4"] = {
    text: "anschließen",
    meaning: "يُلحق",
    keywords: ["anschließen = يلحق", "mündlicher Test = اختبار شفوي", "wird sich = سيكون"],
    simplified: "سيتم إجراء اختبار شفوي",
    imagine: "🗣️📝 فقاعة كلام وورقة"
};

HELP_DATA["sprach1_exam31_5"] = {
    text: "bezüglich Ihrer Freizeitinteressen",
    meaning: "بخصوص اهتماماتك في أوقات الفراغ",
    keywords: ["bezüglich = بخصوص", "Freizeitinteressen = اهتمامات أوقات الفراغ", "Ihrer = اهتماماتك"],
    simplified: "استبيان حول هواياتك",
    imagine: "🎨⚽ رسم وكرات قدم"
};

HELP_DATA["sprach1_exam31_6"] = {
    text: "so angenehm wie möglich",
    meaning: "بأكثر شكل مريح قدر الإمكان",
    keywords: ["angenehm = مريح", "möglich = ممكن", "wie = قدر"],
    simplified: "نجعل إقامتك ممتعة قدر الإمكان",
    imagine: "😊🏨 وجه مبتسم وفندق"
};

HELP_DATA["sprach1_exam31_7"] = {
    text: "einer Privatunterkunft",
    meaning: "سكن خاص",
    keywords: ["einer = سكن", "Privatunterkunft = سكن خاص", "deutschen Gastfamilie = عائلة مضيفة ألمانية"],
    simplified: "الإقامة مع عائلة ألمانية",
    imagine: "🏠👨‍👩‍👧👦 منزل وعائلة"
};

HELP_DATA["sprach1_exam31_8"] = {
    text: "Sobald Ihre Anmeldung bei uns eingegangen ist",
    meaning: "بمجرد استلام طلب التسجيل الخاص بك",
    keywords: ["Sobald = بمجرد", "Anmeldung = طلب تسجيل", "eingegangen = مستلم"],
    simplified: "عند وصول طلبك إلينا",
    imagine: "📬✉️ صندوق بريد ورسالة"
};

HELP_DATA["sprach1_exam31_9"] = {
    text: "damit Sie den Weg zu uns ohne Umstände finden",
    meaning: "لتجد الطريق إلينا بسهولة",
    keywords: ["damit = لكي", "ohne Umstände = بسهولة", "finden = تجد"],
    simplified: "لتعثر على طريقك بدون متاعب",
    imagine: "🗺️📍 خريطة وعلامة موقع"
};

HELP_DATA["sprach1_exam31_10"] = {
    text: "Für weitere Fragen",
    meaning: "للاستفسارات الأخرى",
    keywords: ["Für = لـ", "weitere = أخرى", "Fragen = استفسارات"],
    simplified: "لأي استفسارات إضافية",
    imagine: "❓☎️ علامة استفهام وسماعة هاتف"
};

// ============================================
// Exam 32 (exam32.json) - Sehr geehrte Frau Szabo (معدل)
// ============================================

HELP_DATA["sprach1_exam32_1"] = {
    text: "anbei erhalten Sie das angeforderte Anmeldeformular",
    meaning: "مرفق تجدون نموذج التسجيل المطلوب",
    keywords: ["anbei = مرفق", "erhalten = تجدون", "Anmeldeformular = نموذج تسجيل"],
    simplified: "نموذج التسجيل مرفق بهذه الرسالة",
    imagine: "📎📄 مشبك ورق مع ورقة"
};

HELP_DATA["sprach1_exam32_2"] = {
    text: "in Höhe von € 200,-",
    meaning: "بقيمة 200 يورو",
    keywords: ["Höhe = قيمة", "von = بقيمة", "€ 200,- = 200 يورو"],
    simplified: "دفعة أولى قدرها 200 يورو",
    imagine: "💰📄 ورقة نقدية يورو"
};

HELP_DATA["sprach1_exam32_3"] = {
    text: "Zur genaueren Einschätzung Ihrer Vorkenntnisse",
    meaning: "لتقييم أكثر دقة لمعرفتك المسبقة",
    keywords: ["Zur = لـ", "genaueren = أكثر دقة", "Einschätzung = تقييم"],
    simplified: "لتحديد مستواك بدقة",
    imagine: "📊📝 رسم بياني وورقة"
};

HELP_DATA["sprach1_exam32_4"] = {
    text: "wird sich ... ein mündlicher Test stattfinden",
    meaning: "سيتم إجراء اختبار شفوي",
    keywords: ["stattfinden = يتم إجراء", "mündlicher Test = اختبار شفوي", "wird sich = سيكون"],
    simplified: "سيكون هناك اختبار تحدث",
    imagine: "🗣️👂 شخص يتحدث وآخر يستمع"
};

HELP_DATA["sprach1_exam32_5"] = {
    text: "bezüglich Ihrer Freizeitinteressen",
    meaning: "بخصوص اهتماماتك في أوقات الفراغ",
    keywords: ["bezüglich = بخصوص", "Freizeitinteressen = اهتمامات أوقات الفراغ", "Ihrer = اهتماماتك"],
    simplified: "استبيان حول هواياتك",
    imagine: "🎨⚽ رسم وكرات قدم"
};

HELP_DATA["sprach1_exam32_6"] = {
    text: "möglichst angenehm zu gestalten",
    meaning: "لجعلها مريحة قدر الإمكان",
    keywords: ["möglichst = قدر الإمكان", "angenehm = مريحة", "zu gestalten = لجعل"],
    simplified: "نسعى لتوفير إقامة ممتعة",
    imagine: "😊🏨 وجه مبتسم وفندق"
};

HELP_DATA["sprach1_exam32_7"] = {
    text: "einer Privatunterkunft",
    meaning: "سكن خاص",
    keywords: ["einer = سكن", "Privatunterkunft = سكن خاص", "deutschen Gastfamilie = عائلة مضيفة ألمانية"],
    simplified: "الإقامة مع عائلة ألمانية",
    imagine: "🏠👨‍👩‍👧‍👦 منزل وعائلة"
};

HELP_DATA["sprach1_exam32_8"] = {
    text: "Sobald Ihre Anmeldung bei uns eingegangen ist",
    meaning: "بمجرد استلام طلب التسجيل الخاص بك",
    keywords: ["Sobald = بمجرد", "Anmeldung = طلب تسجيل", "eingegangen = مستلم"],
    simplified: "عند وصول طلبك إلينا",
    imagine: "📬✉️ صندوق بريد ورسالة"
};

HELP_DATA["sprach1_exam32_9"] = {
    text: "damit Sie den Weg zu uns ohne Umstände finden",
    meaning: "لتجد الطريق إلينا بسهولة",
    keywords: ["damit = لكي", "ohne Umstände = بسهولة", "finden = تجد"],
    simplified: "لتعثر على طريقك بدون متاعب",
    imagine: "🗺️📍 خريطة وعلامة موقع"
};

HELP_DATA["sprach1_exam32_10"] = {
    text: "Für weitere Fragen",
    meaning: "للاستفسارات الأخرى",
    keywords: ["Für = لـ", "weitere = أخرى", "Fragen = استفسارات"],
    simplified: "لأي استفسارات إضافية",
    imagine: "❓☎️ علامة استفهام وسماعة هاتف"
};

// ============================================
// Exam 33 (exam33.json) - Lieber Igor
// ============================================

HELP_DATA["sprach1_exam33_1"] = {
    text: "über die ich mich sehr gefreut habe",
    meaning: "التي سررت بها كثيراً",
    keywords: ["über = التي", "mich gefreut = سررت", "sehr = كثيراً"],
    simplified: "التي أسعدتني كثيراً",
    imagine: "💌😊 رسالة ووجه مبتسم"
};

HELP_DATA["sprach1_exam33_2"] = {
    text: "außerdem noch billiger",
    meaning: "وأيضاً أرخص",
    keywords: ["außerdem = أيضاً", "billiger = أرخص", "noch = أيضاً"],
    simplified: "والقطار أكثر اقتصاداً أيضاً",
    imagine: "🚆💰 قطار وعلامة توفير"
};

HELP_DATA["sprach1_exam33_3"] = {
    text: "können wir ... Zug fahren",
    meaning: "يمكننا ركوب القطار",
    keywords: ["fahren = ركوب", "Zug = قطار", "können = يمكننا"],
    simplified: "السفر بالقطار في 30 دولة أوروبية",
    imagine: "🚆🗺️ قطار وخريطة أوروبا"
};

HELP_DATA["sprach1_exam33_4"] = {
    text: "Da wir noch keine 26 Jahre alt sind",
    meaning: "بما أننا لم نبلغ 26 عاماً بعد",
    keywords: ["Da = بما أن", "noch = بعد", "26 Jahre alt = 26 عاماً"],
    simplified: "لأننا دون سن 26 عاماً، التذكرة ستكون رخيصة",
    imagine: "🎫👦 تذكرة وشخص شاب"
};

HELP_DATA["sprach1_exam33_5"] = {
    text: "Der Preis hängt davon ab",
    meaning: "السعر يعتمد على ذلك",
    keywords: ["hängt ab = يعتمد", "davon = على ذلك", "Preis = سعر"],
    simplified: "السعر يتوقف على مدة الرحلة",
    imagine: "💰⏳ نقود وساعة"
};

HELP_DATA["sprach1_exam33_6"] = {
    text: "Ich habe auch schon mit meiner Tante in Marseille gesprochen",
    meaning: "لقد تحدثت أيضاً مع عمتي في مرسيليا",
    keywords: ["gesprochen = تحدثت", "Tante = عمة", "Marseille = مرسيليا"],
    simplified: "اتصلت بعمتي التي تقيم في مرسيليا",
    imagine: "📞👩‍🦳 مكالمة هاتفية وامرأة"
};

HELP_DATA["sprach1_exam33_7"] = {
    text: "dass wir einige Tage bei ihr verbringen",
    meaning: "أن نقضي بضعة أيام عندها",
    keywords: ["dass = أن", "verbringen = نقضي", "einige Tage = بضعة أيام"],
    simplified: "اقترحت عمتي أن نزورها لبضعة أيام",
    imagine: "🏠💕 منزل وقلب"
};

HELP_DATA["sprach1_exam33_8"] = {
    text: "sich freuen, mit uns um die Häuser zu ziehen",
    meaning: "يسعدون بالخروج معنا",
    keywords: ["sich freuen = يسعدون", "um die Häuser ziehen = الخروج", "mit uns = معنا"],
    simplified: "سيكون ابن عمي سعيداً برفقتنا",
    imagine: "🎉👬 احتفال وصديقان"
};

HELP_DATA["sprach1_exam33_9"] = {
    text: "deine Sprachkenntnisse",
    meaning: "مهاراتك اللغوية",
    keywords: ["deine = مهاراتك", "Sprachkenntnisse = مهارات لغوية", "der = الـ"],
    simplified: "لا تقلق بشأن الحاجز اللغوي",
    imagine: "🗣️💬 فقاعات كلام"
};

HELP_DATA["sprach1_exam33_10"] = {
    text: "jedenfalls schon sehr auf unsere gemeinsame Reise",
    meaning: "على أية حال على رحلتنا المشتركة",
    keywords: ["jedenfalls = على أية حال", "gemeinsame = مشتركة", "Reise = رحلة"],
    simplified: "أتطلع لرحلتنا سوياً بكل تأكيد",
    imagine: "✈️😊 طائرة ووجه مبتسم"
};

// ============================================
// Exam 34 (exam34.json) - Liebe Lara
// ============================================

HELP_DATA["sprach1_exam34_1"] = {
    text: "deinen Brief antworte",
    meaning: "أرد على رسالتك",
    keywords: ["deinen Brief = رسالتك", "antworte = أرد", "auf = على"],
    simplified: "تأخرت في الرد على رسالتك",
    imagine: "✉️⏰ رسالة وساعة"
};

HELP_DATA["sprach1_exam34_2"] = {
    text: "weil du wirklich tolle Neuigkeiten mitzuteilen hast",
    meaning: "لأن لديك أخبار رائعة لتخبريها",
    keywords: ["weil = لأن", "tolle Neuigkeiten = أخبار رائعة", "mitzuteilen = لتخبريها"],
    simplified: "لأن لديك أخباراً سعيدة تودين مشاركتها",
    imagine: "📢🎉 مكبر صوت وزينة احتفال"
};

HELP_DATA["sprach1_exam34_3"] = {
    text: "Ich weiß noch gut",
    meaning: "ما زلت أذكر جيداً",
    keywords: ["noch = ما زلت", "gut = جيداً", "weiß = أذكر"],
    simplified: "ما زلت أذكر كيف كنا نحلم بالسفر",
    imagine: "💭🌍 حلم وخريطة"
};

HELP_DATA["sprach1_exam34_4"] = {
    text: "Für deinen Neubeginn wünschen Peter und ich dir alles Gute",
    meaning: "بمناسبة بدايتك الجديدة، نتمنى لك كل التوفيق أنا وبيتر",
    keywords: ["Für = بمناسبة", "Neubeginn = بداية جديدة", "alles Gute = كل التوفيق"],
    simplified: "نتمنى لك التوفيق في فصلك الجديد",
    imagine: "🍀✨ برسيم رباعي ونجوم"
};

HELP_DATA["sprach1_exam34_5"] = {
    text: "auf seiner neuen Stelle",
    meaning: "في منصبه الجديد",
    keywords: ["neuen = الجديد", "Stelle = منصب", "seiner = منصبه"],
    simplified: "روبرت سعيد بعمله الجديد",
    imagine: "👔💼 ربطة عنق وحقيبة"
};

HELP_DATA["sprach1_exam34_6"] = {
    text: "Du weißt ja, was das heißt",
    meaning: "أنت تعلمين ماذا يعني ذلك",
    keywords: ["ja = بالطبع", "weißt = تعلمين", "das heißt = يعني ذلك"],
    simplified: "أنت تعرفين كيف يكون المراهقون في هذا العمر",
    imagine: "🙄😏 تعبير وجه ساخر"
};

HELP_DATA["sprach1_exam34_7"] = {
    text: "Darauf sind wir natürlich stolz",
    meaning: "نحن فخورون بذلك طبعاً",
    keywords: ["Darauf = بذلك", "stolz = فخورون", "natürlich = طبعاً"],
    simplified: "بالطبع هذا يجعلنا فخورين جداً",
    imagine: "🏆😊 كأس ووجه مبتسم"
};

HELP_DATA["sprach1_exam34_8"] = {
    text: "Es wäre schön, wenn wir uns vor deiner Abreise noch einmal treffen würden",
    meaning: "سيكون من الرائع لو نلتقي مرة أخرى قبل مغادرتك",
    keywords: ["wäre = سيكون", "schön = رائعاً", "treffen = نلتقي"],
    simplified: "أتمنى لو نستطيع الاجتماع قبل رحيلك",
    imagine: "🤝😊 مصافحة ووجه مبتسم"
};

HELP_DATA["sprach1_exam34_9"] = {
    text: "trotz der Umzugsvorbereitungen noch Zeit",
    meaning: "بالرغم من تحضيرات الانتقال بعض الوقت",
    keywords: ["trotz = بالرغم من", "Umzugsvorbereitungen = تحضيرات انتقال", "Zeit = وقت"],
    simplified: "أتمنى أن تجدي وقتاً رغم انشغالك بالتجهيز",
    imagine: "📦⚡ صناديق وبرق"
};

HELP_DATA["sprach1_exam34_10"] = {
    text: "damit wir etwas abmachen können",
    meaning: "لكي نتمكن من ترتيب شيء",
    keywords: ["damit = لكي", "abmachen = نرتب", "können = نتمكن"],
    simplified: "لنتمكن من تحديد موعد اللقاء",
    imagine: "📅🗓️ تقويم وموعد"
};

// ============================================
// Exam 35 (exam35.json) - Lieber David
// ============================================

HELP_DATA["sprach1_exam35_1"] = {
    text: "noch schöner ist es",
    meaning: "الأجمل أيضاً أنه",
    keywords: ["noch = أيضاً", "schöner = أجمل", "ist es = أنه"],
    simplified: "الجميل جداً أنك تريد زيارتنا رغم المسافة",
    imagine: "🚗❤️ سيارة وقلب"
};

HELP_DATA["sprach1_exam35_2"] = {
    text: "obwohl Du in München zu tun hast und wir in Köln wohnen",
    meaning: "على الرغم من أن لديك ما تفعله في ميونخ ونحن نعيش في كولونيا",
    keywords: ["obwohl = على الرغم من", "München = ميونخ", "Köln = كولونيا"],
    simplified: "رغم أن عملك في ميونخ ونحن بعيدون في كولونيا",
    imagine: "📍🗺️ علامتا موقع بعيدتان على خريطة ألمانيا"
};

HELP_DATA["sprach1_exam35_3"] = {
    text: "anschauen",
    meaning: "نشاهد",
    keywords: ["anschauen = نشاهد", "Kölner Dom = كاتدرائية كولونيا", "kannst = يمكنك"],
    simplified: "يمكنك زيارة الكاتدرائية الشهيرة والمعالم السياحية الأخرى",
    imagine: "⛪👀 كاتدرائية وعينان"
};

HELP_DATA["sprach1_exam35_4"] = {
    text: "sollten wir genug Zeit für Gespräche haben",
    meaning: "يجب أن يكون لدينا وقت كافٍ للحديث",
    keywords: ["sollten = يجب", "Zeit = وقت", "Gespräche = للحديث"],
    simplified: "نتأكد من تخصيص وقت كافٍ للدردشة",
    imagine: "💬🕰️ فقاعات كلام وساعة"
};

HELP_DATA["sprach1_exam35_5"] = {
    text: "ankommen wirst",
    meaning: "ستصل",
    keywords: ["ankommen = تصل", "wirst = سوف", "Hauptbahnhof = محطة القطار الرئيسية"],
    simplified: "أخبرنا بموعد وصولك إلى المحطة الرئيسية",
    imagine: "🚆🕞 قطار وثلاثة أرباع ساعة"
};

HELP_DATA["sprach1_exam35_6"] = {
    text: "falls wir uns verspäten sollten",
    meaning: "في حال تأخرنا",
    keywords: ["falls = في حال", "uns verspäten = نتأخر", "sollten = قد"],
    simplified: "انتظرنا في الرصيف في حال وصلنا متأخرين قليلاً",
    imagine: "⏰🏃‍♂️ ساعة وشخص يجري"
};

HELP_DATA["sprach1_exam35_7"] = {
    text: "seitdem für ihn, wenn er zu Besuch kommt",
    meaning: "منذ ذلك الحين نستخدمه لزياراته",
    keywords: ["seitdem = منذ ذلك الحين", "für ihn = لزياراته", "zu Besuch = ضيفاً"],
    simplified: "الغرفة أصبحت جاهزة لاستقبال الضيوف",
    imagine: "🛏️🚪 سرير وباب مفتوح"
};

HELP_DATA["sprach1_exam35_8"] = {
    text: "Erinnerungen auffrischen",
    meaning: "نتذكر الأيام الخوالي",
    keywords: ["auffrischen = نستعيد", "Erinnerungen = ذكريات", "alte = قديمة"],
    simplified: "لنحضر ذكرياتنا الجميلة معاً",
    imagine: "📸🤝 ألبوم صور وأيدي متشابكة"
};

HELP_DATA["sprach1_exam35_9"] = {
    text: "als wir bei Dir zu Besuch waren",
    meaning: "عندما زرناك",
    keywords: ["als = عندما", "bei Dir = عندك", "zu Besuch = للزيارة"],
    simplified: "التقطنا الكثير من الصور في آخر زيارة لنا",
    imagine: "📸👨‍👩‍👧 كاميرا وعائلة"
};

HELP_DATA["sprach1_exam35_10"] = {
    text: "lass Dich überraschen...",
    meaning: "دع نفسك تفاجأ...",
    keywords: ["lass = دع", "Dich = نفسك", "überraschen = تفاجأ"],
    simplified: "لن نخبرك بكل شيء الآن وسنترك لك المفاجأة",
    imagine: "🎁🤫 هدية وإصبع على الفم"
};

// ============================================
// Exam 36 (exam36.json) - Sehr geehrter Herr Wenzel
// ============================================

HELP_DATA["sprach1_exam36_1"] = {
    text: "für Ihre Anfrage",
    meaning: "على استفساركم",
    keywords: ["für = على", "Ihre Anfrage = استفساركم", "Dank = شكر"],
    simplified: "شكراً لاهتمامكم",
    imagine: "🙏📨 أيادٍ مضمومة ورسالة"
};

HELP_DATA["sprach1_exam36_2"] = {
    text: "jeweils am ersten Montag",
    meaning: "في أول اثنين من كل شهر",
    keywords: ["jeweils = في", "ersten Montag = أول اثنين", "am = من"],
    simplified: "تقام الأمسيات الثقافية كل يوم اثنين أول الشهر",
    imagine: "📅🗓️ تقويم يشير إلى يوم اثنين"
};

HELP_DATA["sprach1_exam36_3"] = {
    text: "gewidmet",
    meaning: "مخصص",
    keywords: ["gewidmet = مخصص", "kulturellen Aspekt = موضوع ثقافي", "ist = يكون"],
    simplified: "يتم تخصيص كل أمسية لموضوع ثقافي معين",
    imagine: "🎭📖 أقنعة وكتب"
};

HELP_DATA["sprach1_exam36_4"] = {
    text: "vorbereitende Treffen",
    meaning: "لقاءات تحضيرية",
    keywords: ["vorbereitende = تحضيرية", "Treffen = لقاءات", "mehrere = عدة"],
    simplified: "لدينا عدة لقاءات تمهيدية قبل العروض المسرحية",
    imagine: "🤝📋 مصافحة وقائمة مهام"
};

HELP_DATA["sprach1_exam36_5"] = {
    text: "die meisten unserer Mitglieder",
    meaning: "معظم أعضائنا",
    keywords: ["die meisten = معظم", "Mitglieder = أعضاء", "unserer = أعضائنا"],
    simplified: "رحلاتنا الدراسية تحظى باهتمام الكثيرين",
    imagine: "🚌👥 حافلة ومجموعة أشخاص"
};

HELP_DATA["sprach1_exam36_6"] = {
    text: "entlang der Route deutscher Dichter",
    meaning: "على طول طريق الشعراء الألمان",
    keywords: ["entlang = على طول", "Route = طريق", "deutscher Dichter = شعراء ألمان"],
    simplified: "رحلات تمتد من فرانكفورت إلى فايمر",
    imagine: "🗺️✍️ خريطة وقلم"
};

HELP_DATA["sprach1_exam36_7"] = {
    text: "Auf den Spuren Tschaikowskis nach Russland",
    meaning: "على خطى تشايكوفسكي إلى روسيا",
    keywords: ["Auf den Spuren = على خطى", "Tschaikowskis = تشايكوفسكي", "Russland = روسيا"],
    simplified: "رحلة استثنائية هذا العام على خطى الملحن العظيم",
    imagine: "🎵🇷🇺 روسيا وموسيقى تشايكوفسكي"
};

HELP_DATA["sprach1_exam36_8"] = {
    text: "mit deren Hilfe Sie Ihr kulturelles Wissen erweitern können",
    meaning: "يمكنكم توسيع معرفتكم الثقافية بمساعدتهم",
    keywords: ["deren = بمساعدتهم", "erweitern = توسيع", "kulturelles Wissen = معرفة ثقافية"],
    simplified: "مرشدونا الخبراء سيساعدونكم على فهم الثقافة المحلية",
    imagine: "🎓🧠 قبعة تخرج ودماغ"
};

HELP_DATA["sprach1_exam36_9"] = {
    text: "sofern dies organisatorisch möglich ist",
    meaning: "إذا كان ذلك ممكناً تنظيمياً",
    keywords: ["sofern = إذا", "organisatorisch = تنظيمياً", "möglich = ممكناً"],
    simplified: "بإمكانكم استبدال التذاكر بشرط توفر البدائل",
    imagine: "🎟️🔄 تذكرتان وكلمة تبادل"
};

HELP_DATA["sprach1_exam36_10"] = {
    text: "erreichbar",
    meaning: "يمكن الوصول إليها",
    keywords: ["erreichbar = يمكن الوصول إليها", "Geschäftsstelle = مقر المكتب", "ist = يكون"],
    simplified: "مكتبنا متاح للجميع طوال أيام الأسبوع",
    imagine: "🏢☎️ مبنى وسماعة هاتف"
};

// ============================================
// Exam 37 (exam37.json) - Liebe Autorinnen und Autoren
// ============================================

HELP_DATA["sprach1_exam37_1"] = {
    text: "Wie ihr alle wisst",
    meaning: "كما تعلمون جميعاً",
    keywords: ["Wie = كما", "ihr = أنتم", "wisst = تعلمون"],
    simplified: "وكما تعلمون جميعاً",
    imagine: "👥📢 مجموعة تتحدث ومكبر صوت"
};

HELP_DATA["sprach1_exam37_2"] = {
    text: "alle Texte und Bilder vorliegen",
    meaning: "كل النصوص والصور تكون متوفرة",
    keywords: ["vorliegen = متوفرة", "Texte = نصوص", "Bilder = صور"],
    simplified: "لن تتمكن كلوديا من البدء بالتصميم قبل استلام كامل المواد",
    imagine: "📄🖼️ ورقة وصورة"
};

HELP_DATA["sprach1_exam37_3"] = {
    text: "im Interesse der Autorinnen und Autoren",
    meaning: "بمصلحة الكاتبات والكتاب أنفسهم",
    keywords: ["im Interesse = بمصلحة", "Autorinnen = كاتبات", "Autoren = كتاب"],
    simplified: "الجميع يستفيد من التصميم الجيد",
    imagine: "🎨✍️ لوحة فنية وقلم"
};

HELP_DATA["sprach1_exam37_4"] = {
    text: "Liefert also bitte eure Beiträge rechtzeitig ab",
    meaning: "لذا يرجى تسليم مساهماتكم في الوقت المحدد",
    keywords: ["abliefern = تسليم", "Beiträge = مساهمات", "rechtzeitig = في الوقت المحدد"],
    simplified: "لذا، نرجو منكم تسليم موادكم في الموعد المحدد",
    imagine: "🗓️✍️ تقويم وقلم"
};

HELP_DATA["sprach1_exam37_5"] = {
    text: "bei euch",
    meaning: "لديكم",
    keywords: ["bei = لدى", "euch = أنتم", "Copyright = حقوق النشر"],
    simplified: "حقوق الطبع والنشر تبقى ملكاً لكم بالطبع",
    imagine: "©️🖼️ رمز حقوق الطبع وصورة"
};

HELP_DATA["sprach1_exam37_6"] = {
    text: "stark zurückgegangen",
    meaning: "انخفضت بشكل كبير",
    keywords: ["stark = بشكل كبير", "zurückgegangen = انخفضت", "Verkaufszahlen = أرقام المبيعات"],
    simplified: "مبيعات الجريدة تراجعت هذا العام",
    imagine: "📉📰 رسم بياني ينخفض وجريدة"
};

HELP_DATA["sprach1_exam37_7"] = {
    text: "euch alle noch einmal herzlich darum bitten",
    meaning: "نطلب منكم جميعاً مرة أخرى بإخلاص",
    keywords: ["darum = بذلك", "bitten = نطلب", "herzlich = بإخلاص"],
    simplified: "نرجو منكم مرة أخرى تركيز جهودكم",
    imagine: "🙏✨ أيادٍ مضمومة ونجوم"
};

HELP_DATA["sprach1_exam37_8"] = {
    text: "ansprechen",
    meaning: "تخاطبهم وتهمهم",
    keywords: ["ansprechen = تخاطب", "Mitglieder = أعضاء", "unsere = القارئين"],
    simplified: "اختيار مواضيع تعني حقاً أعضاء النادي",
    imagine: "🎯👥 هدف ومجموعة أشخاص"
};

HELP_DATA["sprach1_exam37_9"] = {
    text: "dass man große Themen wie Politik oder Gesellschaft nicht behandeln kann",
    meaning: "لا يمكن معالجة مواضيع كبيرة مثل السياسة أو المجتمع",
    keywords: ["dass = أن", "behandeln = معالجة", "große Themen = مواضيع كبيرة"],
    simplified: "لا نعني أنه يجب تجنب القضايا الكبرى تماماً،",
    imagine: "🗳️🌍 صناديق اقتراع وكرة أرضية"
};

HELP_DATA["sprach1_exam37_10"] = {
    text: "als unabhängige Zeitung",
    meaning: "كصحيفة مستقلة",
    keywords: ["als = كـ", "unabhängige = مستقلة", "Zeitung = صحيفة"],
    simplified: "نحن فخورون بكوننا صحيفة ناطقة باسم قرائنا",
    imagine: "🗞️✊ جريدة وقبضة مرفوعة"
};

// ============================================
// Exam 38 (exam38.json) - Liebe Clara
// ============================================

HELP_DATA["sprach1_exam38_1"] = {
    text: "voneinander gehört haben",
    meaning: "سمعنا بعضنا عن بعض",
    keywords: ["voneinander = بعضنا عن بعض", "gehört = سمع", "haben = سمعنا"],
    simplified: "مضى وقت طويل منذ آخر مرة سمعنا فيها أخبار بعضنا البعض",
    imagine: "📞🕰️ سماعة هاتف وساعة قديمة"
};

HELP_DATA["sprach1_exam38_2"] = {
    text: "durch Europa",
    meaning: "عبر أوروبا",
    keywords: ["durch = عبر", "Europa = أوروبا", "Rundreise = جولة"],
    simplified: "أجوب أوروبا في رحلة واسعة",
    imagine: "🗺️🚂 خريطة وقطار"
};

HELP_DATA["sprach1_exam38_3"] = {
    text: "wie du weißt",
    meaning: "كما تعلمين",
    keywords: ["wie = كما", "du = أنت", "weißt = تعلمين"],
    simplified: "وكما تعرفين",
    imagine: "🤷‍♀️❓ امرأة ترفع حاجبيها"
};

HELP_DATA["sprach1_exam38_4"] = {
    text: "war zuerst nicht gerade von dieser Idee begeistert",
    meaning: "لم يكن متحمساً لهذه الفكرة تماماً في البداية",
    keywords: ["war = كان", "begeistert = متحمساً", "nicht gerade = لم يكن"],
    simplified: "لم يرق لمديري الأمر في البداية حقاً",
    imagine: "👨‍💼😒 رجل أعمال معبس الوجه"
};

HELP_DATA["sprach1_exam38_5"] = {
    text: "es in der Firma ohnehin etwas ruhiger",
    meaning: "إن الأمور في الشركة هادئة نوعاً ما على أية حال",
    keywords: ["es = الأمور", "ruhiger = هادئة", "ohnehin = على أية حال"],
    simplified: "أشهر الصيف هادئة نسبياً في العمل أصلاً",
    imagine: "☀️🏢 مكتب هادئ ورجل أعمال متعب"
};

HELP_DATA["sprach1_exam38_6"] = {
    text: "erste Station",
    meaning: "المحطة الأولى",
    keywords: ["erste = الأولى", "Station = محطة", "war = كانت"],
    simplified: "أمستردام كانت المحطة الأولى للرحلة",
    imagine: "🚉🟢 محطة قطار ورمز البداية"
};

HELP_DATA["sprach1_exam38_7"] = {
    text: "daran denken",
    meaning: "أفكر في العودة إلى العمل",
    keywords: ["daran = في ذلك", "denken = أفكر", "zurück = العودة"],
    simplified: "أكره حتى التفكير في العودة إلى العمل يوماً ما",
    imagine: "💼😖 حقيبة ووجه متألم"
};

HELP_DATA["sprach1_exam38_8"] = {
    text: "muss",
    meaning: "يجب أن أعود",
    keywords: ["muss = يجب", "zurück = أعود", "irgendwann = يوماً ما"],
    simplified: "أدري أنني مضطرة للعودة إلى العمل في النهاية",
    imagine: "🏢🔗 مكتب وسلسلة"
};

HELP_DATA["sprach1_exam38_9"] = {
    text: "mir der Gedanke gekommen",
    meaning: "خطرت لي الفكرة",
    keywords: ["mir = لي", "Gedanke = فكرة", "gekommen = خطرت"],
    simplified: "فكرت في تغيير حياتي بالكامل",
    imagine: "💡🤔 مصباح وشخص يفكر"
};

HELP_DATA["sprach1_exam38_10"] = {
    text: "auch etwas ganz Neues anfangen könnte",
    meaning: "يمكنني البدء بشيء جديد تماماً",
    keywords: ["könnte = يمكنني", "Neues = شيء جديد", "anfangen = البدء"],
    simplified: "لربما حان الوقت لتغيير مساري المهني",
    imagine: "🔄💼 تغيير وحقيبة"
};

// ============================================
// Exam 39 (exam39.json) - Sehr geehrte Frau Melchior
// ============================================

HELP_DATA["sprach1_exam39_1"] = {
    text: "in dem Sie um nähere Informationen zu der geplanten Dresden-Reise gebeten haben",
    meaning: "الذي طلبت فيه معلومات مفصلة عن رحلة دريسدن المخطط لها",
    keywords: ["in dem = الذي", "gebeten = طلبت", "nähere Informationen = معلومات مفصلة"],
    simplified: "شكراً لاستفساركم عن رحلة دريسدن",
    imagine: "✉️❓ رسالة وعلامة استفهام"
};

HELP_DATA["sprach1_exam39_2"] = {
    text: "Da unser Programmheft erst in zwei Wochen fertig ist",
    meaning: "بما أن كتيب البرنامج الخاص بنا لن يكتمل إلا بعد أسبوعين",
    keywords: ["Da = بما أن", "Programmheft = كتيب برنامج", "fertig = كامل"],
    simplified: "كتيب الرحلة سيكون جاهزاً خلال أسبوعين، لكن إليكم ملخص مسبق",
    imagine: "📖⏰ كتاب وساعة"
};

HELP_DATA["sprach1_exam39_3"] = {
    text: "Untergebracht sind Sie im Hotel Corona",
    meaning: "ستقيمون في فندق كورونا",
    keywords: ["Untergebracht = مقيمون", "Hotel Corona = فندق كورونا", "sind = ستكون"],
    simplified: "الفندق الذي ستقيمون فيه يقع في وسط المدينة",
    imagine: "🏨📍 فندق وعلامة موقع"
};

HELP_DATA["sprach1_exam39_4"] = {
    text: "sich in der Stadtmitte befindet",
    meaning: "يقع في وسط المدينة",
    keywords: ["sich befindet = يقع", "Stadtmitte = وسط المدينة", "in der = في"],
    simplified: "موقعه ممتاز بالقرب من كل المعالم السياحية",
    imagine: "🗺️📍 خريطة وعلامة موقع"
};

HELP_DATA["sprach1_exam39_5"] = {
    text: "gezeigt werden",
    meaning: "سيتم عرضها",
    keywords: ["gezeigt = عرض", "werden = سيتم", "Sehenswürdigkeiten = معالم سياحية"],
    simplified: "سترون أجمل معالم دريسدن",
    imagine: "🏛️👀 مبنى تاريخي وعينان"
};

HELP_DATA["sprach1_exam39_6"] = {
    text: "der Semper-Oper",
    meaning: "أوبرا سمبر",
    keywords: ["der = أوبرا", "Semper-Oper = أوبرا سمبر", "Besuch = زيارة"],
    simplified: "المسرح المخطط له في الليلة نفسها",
    imagine: "🎭✨ مسرح ونجوم"
};

HELP_DATA["sprach1_exam39_7"] = {
    text: "für seine exotischen Pflanzen berühmt ist",
    meaning: "تشتهر بنباتاتها الغريبة",
    keywords: ["für = بنباتاتها", "exotischen Pflanzen = نباتات غريبة", "berühmt = مشهورة"],
    simplified: "الحديقة مشهورة عالمياً بأزهارها وأنواعها النادرة",
    imagine: "🌺🏞️ زهرة جميلة ومنظر طبيعي"
};

HELP_DATA["sprach1_exam39_8"] = {
    text: "steht zu Ihrer freien Verfügung",
    meaning: "يكون تحت تصرفكم الحر",
    keywords: ["steht = يكون", "freien Verfügung = تصرف حر", "Ihrer = تحت تصرفكم"],
    simplified: "اليوم الأخير من الرحلة سيكون مخصصاً لاستكشاف المدينة بأنفسكم",
    imagine: "🗓️🙌 تقويم وأيادي مفتوحة"
};

HELP_DATA["sprach1_exam39_9"] = {
    text: "teilnehmen",
    meaning: "المشاركة",
    keywords: ["teilnehmen = المشاركة", "Fahrt = رحلة", "möchten = ترغبون"],
    simplified: "قد تفضلون استكشاف المناطق الطبيعية بدلاً من التسوق",
    imagine: "🏞️🚗 منظر طبيعي وسيارة"
};

HELP_DATA["sprach1_exam39_10"] = {
    text: "verschaffen",
    meaning: "تعطيكم لمحة عامة",
    keywords: ["verschaffen = تعطيكم", "Überblick = لمحة عامة", "Reise = الرحلة"],
    simplified: "آمل أن تكون هذه المعلومات كافية لمساعدتكم على التخطيط",
    imagine: "📋👀 قائمة وعينان"
};

// ============================================
// Exam 40 (exam40.json) - Liebe Sandra
// ============================================

HELP_DATA["sprach1_exam40_1"] = {
    text: "dass ich Urlaub auf einer Nordseeinsel mache",
    meaning: "أنني أقضي عطلتي في جزيرة بحر الشمال",
    keywords: ["Urlaub = عطلة", "Nordseeinsel = جزيرة بحر الشمال", "mache = أقضي"],
    simplified: "قد تتفاجئين لأنني اخترت الشمال بدلاً من الجنوب",
    imagine: "🏝️🤔 جزيرة وعلامة استفهام"
};

HELP_DATA["sprach1_exam40_2"] = {
    text: "das Richtige für mich sein könnte",
    meaning: "قد يكون الشيء المناسب لي",
    keywords: ["könnte = قد يكون", "Richtige = المناسب", "für mich = لي"],
    simplified: "صدقاً، لم أتوقع أن أحب إجازة هادئة بهذا الشكل",
    imagine: "😊🏖️ وجه مبتسم وشاطئ"
};

HELP_DATA["sprach1_exam40_3"] = {
    text: "von der Hektik des Alltags erholen möchte",
    meaning: "أريد أن أسترد عافيتي من صخب الحياة اليومية",
    keywords: ["erholen = أسترد عافيتي", "Hektik = صخب", "Alltags = الحياة اليومية"],
    simplified: "إذا أردت الهروب من ضغوط الروتين، فهذا هو المكان المناسب",
    imagine: "😤➡️😌 وجه متوتر يتحول إلى آخر مرتاح"
};

HELP_DATA["sprach1_exam40_4"] = {
    text: "als sehr angenehm empfinde",
    meaning: "أشعر أنه مريح جداً",
    keywords: ["als = أنه", "angenehm = مريح", "empfinde = أشعر"],
    simplified: "أحب الطقس هنا لأنه لطيف وليس حاراً أبداً",
    imagine: "🌡️😊 ميزان حرارة ووجه مبتسم"
};

HELP_DATA["sprach1_exam40_5"] = {
    text: "aus zwei Inseln",
    meaning: "من جزيرتين",
    keywords: ["aus = من", "zwei Inseln = جزيرتين", "besteht = تتكون"],
    simplified: "هيلغولاند ليست جزيرة واحدة بل جزيرتان منفصلتان",
    imagine: "🏝️🏝️ جزيرتان"
};

HELP_DATA["sprach1_exam40_6"] = {
    text: "die per Fähre zu erreichen ist",
    meaning: "يمكن الوصول إليها بالعبّارة",
    keywords: ["ist = يمكن", "erreichen = الوصول", "Fähre = عبارة"],
    simplified: "تربط العبارات بين الجزيرة الرئيسية والجزيرة الرملية الصغيرة",
    imagine: "⛴️🏝️ عبارة وجزيرة"
};

HELP_DATA["sprach1_exam40_7"] = {
    text: "lebenden Tiere",
    meaning: "الحيوانات الحية",
    keywords: ["lebenden = الحية", "Tiere = حيوانات", "wild = برية"],
    simplified: "ترى الفقمات وهي تسبح بحرية في مياهها الصافية",
    imagine: "🦭🌊 فقمة وماء"
};

HELP_DATA["sprach1_exam40_8"] = {
    text: "wenige Stunden auf der Insel",
    meaning: "بضع ساعات على الجزيرة",
    keywords: ["wenige = بضع", "Stunden = ساعات", "Insel = جزيرة"],
    simplified: "معظم الزوار يقضون بضع ساعات فقط ثم يغادرون",
    imagine: "🕒🏝️ ساعة وجزيرة"
};

HELP_DATA["sprach1_exam40_9"] = {
    text: "Sobald die Tagesausflügler wieder abgefahren sind",
    meaning: "بمجرد مغادرة زوار اليوم الواحد",
    keywords: ["Sobald = بمجرد", "Tagesausflügler = زوار اليوم الواحد", "abgefahren = مغادرة"],
    simplified: "بمجرد رحيل الحشود، يصبح كل شيء هادئاً وساحراً",
    imagine: "🚤🌅 قارب وغروب شمس"
};

HELP_DATA["sprach1_exam40_10"] = {
    text: "dass du gern umziehen würdest",
    meaning: "أنك ترغبين في الانتقال",
    keywords: ["würdest = ترغبين", "umziehen = الانتقال", "gern = بكل سرور"],
    simplified: "هل فكرتِ أكثر في السكن الجديد الذي تحدثتِ عنه؟",
    imagine: "🏠❓ منزل وعلامة استفهام"
};

// ============================================
// sprach2.js - جميع شروحات Sprachbausteine Teil 2
// ============================================



// ============================================
// Exam 1 (exam1.json) - Das Fahrrad
// ============================================

HELP_DATA["sprach2_exam1_1"] = {
    text: "kaum einem anderen Land gibt es so viele Automobilfabriken",
    meaning: "بالكاد توجد في أي دولة أخرى مصانع سيارات بقدر ما في ألمانيا",
    keywords: ["kaum = بالكاد", "Automobilfabriken = مصانع سيارات"],
    simplified: "لا توجد دولة بها مصانع سيارات بقدر ألمانيا تقريباً",
    imagine: "🏭🚗 مصانع سيارات في كل مكان على الخريطة الألمانية"
};

HELP_DATA["sprach2_exam1_2"] = {
    text: "auf ein anderes Verkehrsmittel umzusteigen",
    meaning: "التحول إلى وسيلة نقل أخرى",
    keywords: ["auf = إلى", "umzusteigen = التحول", "Verkehrsmittel = وسيلة نقل"],
    simplified: "للانتقال إلى وسيلة مواصلات أخرى",
    imagine: "🚲➡️🚗 دراجة وسيارة وسهم"
};

HELP_DATA["sprach2_exam1_3"] = {
    text: "an den im Stau wartenden Fahrzeugen vorbeizufahren",
    meaning: "المرور بجانب السيارات المنتظرة في الازدحام المروري",
    keywords: ["vorbei = بجانب", "Stau = ازدحام", "vorbeizufahren = المرور"],
    simplified: "تمر بجانب السيارات المتوقفة في الزحام",
    imagine: "🚲🚗🚗🚗 دراجة تتجاوز سيارات واقفة"
};

HELP_DATA["sprach2_exam1_4"] = {
    text: "Wer Fahrrad fährt statt zu sitzen",
    meaning: "من يركب دراجة بدلاً من الجلوس",
    keywords: ["statt = بدلاً من", "Fahrrad fährt = يركب دراجة", "zu sitzen = من الجلوس"],
    simplified: "ركوب الدراجة أفضل من الجلوس خلف المقود",
    imagine: "🚴‍♂️🪑 دراجة ومقعد سيارة"
};

HELP_DATA["sprach2_exam1_5"] = {
    text: "innerhalb geschlossener Räume aufhalten",
    meaning: "يتواجدون داخل أماكن مغلقة",
    keywords: ["innerhalb = داخل", "geschlossener Räume = أماكن مغلقة", "aufhalten = يتواجدون"],
    simplified: "يقضون معظم وقتهم في مكاتب و مصانع مغلقة",
    imagine: "🏢🚪 مبنى به أبواب ونوافذ مغلقة"
};

HELP_DATA["sprach2_exam1_6"] = {
    text: "sich die meiste Zeit innerhalb geschlossener Räume aufhalten müssen",
    meaning: "يضطرون لقضاء معظم وقتهم في أماكن مغلقة",
    keywords: ["müssen = يضطرون", "meiste Zeit = معظم الوقت", "aufhalten = قضاء"],
    simplified: "ممن يضطرون لقضاء وقتهم بالداخل",
    imagine: "💼😞 عامل مجبر على البقاء في مكتب ضيق"
};

HELP_DATA["sprach2_exam1_7"] = {
    text: "Ein breites Angebot an Zubehör",
    meaning: "عرض واسع من الإكسسوارات",
    keywords: ["Angebot = عرض", "an = من", "Zubehör = إكسسوارات"],
    simplified: "متاجر تبيع إكسسوارات الدراجات",
    imagine: "🚲🔧 دراجة وأدوات جانبية"
};

HELP_DATA["sprach2_exam1_8"] = {
    text: "die das Fahrrad fast so sicher wie einen Panzer machen sollen",
    meaning: "يجب أن تجعل الدراجة آمنة مثل الدبابة",
    keywords: ["sollen = يجب أن", "sicher = آمنة", "Panzer = دبابة"],
    simplified: "معدات مصممة لتوفير حماية قصوى للدراج",
    imagine: "🛡️🚲 دراجة ودرع"
};

HELP_DATA["sprach2_exam1_9"] = {
    text: "dann sind die Autoschlangen wieder länger",
    meaning: "عندها تصبح طوابير السيارات أطول",
    keywords: ["dann = عندها", "Autoschlangen = طوابير سيارات", "länger = أطول"],
    simplified: "حينها ستعود الاختناقات المرورية",
    imagine: "🚗🚗🚗طابور سيارات طويل تحت المطر"
};

HELP_DATA["sprach2_exam1_10"] = {
    text: "denn einen praktischen Wetterschutz für Radfahrer haben die Geschäfte noch nicht im Angebot",
    meaning: "فالمتاجر لا تقدم بعد حماية عملية من الطقس لراكبي الدراجات",
    keywords: ["denn = لأن", "Wetterschutz = حماية من الطقس", "Angebot = متوفرة"],
    simplified: "لأنه لا توجد معاطف مطر جيدة لركوب الدراجة بعد",
    imagine: "☔🚲 مطر ودراجة بدون مظلة"
};

// ============================================
// Exam 2 (exam2.json) - Das Fahrrad (معدل)
// ============================================

HELP_DATA["sprach2_exam2_1"] = {
    text: "kaum einem anderen Land gibt es so viele Automobilfabriken",
    meaning: "بالكاد توجد في أي دولة أخرى مصانع سيارات بقدر ما في ألمانيا",
    keywords: ["kaum = بالكاد", "Automobilfabriken = مصانع سيارات"],
    simplified: "لا توجد دولة بها مصانع سيارات بقدر ألمانيا تقريباً",
    imagine: "🏭🚗 مصانع سيارات في كل مكان على الخريطة الألمانية"
};

HELP_DATA["sprach2_exam2_2"] = {
    text: "auf ein anderes Verkehrsmittel umzusteigen",
    meaning: "التحول إلى وسيلة نقل أخرى",
    keywords: ["auf = إلى", "umzusteigen = التحول", "Verkehrsmittel = وسيلة نقل"],
    simplified: "للانتقال إلى وسيلة مواصلات أخرى",
    imagine: "🚲➡️🚗 دراجة وسيارة وسهم"
};

HELP_DATA["sprach2_exam2_3"] = {
    text: "auf den zumeist gut ausgebauten Fahrradwegen",
    meaning: "على مسارات الدراجات الممهدة غالباً بشكل جيد",
    keywords: ["zumeist = غالباً", "gut ausgebauten = ممهدة بشكل جيد", "Fahrradwegen = مسارات دراجات"],
    simplified: "على ممرات الدراجات الجيدة",
    imagine: "🛣️🚲 ممر اسفلتي واضح مخصص للدراجات"
};

HELP_DATA["sprach2_exam2_4"] = {
    text: "Wer Fahrrad fährt statt zu sitzen",
    meaning: "من يركب دراجة بدلاً من الجلوس",
    keywords: ["statt = بدلاً من", "Fahrrad fährt = يركب دراجة", "zu sitzen = من الجلوس"],
    simplified: "ركوب الدراجة أفضل من الجلوس خلف المقود",
    imagine: "🚴‍♂️🪑 دراجة ومقعد سيارة"
};

HELP_DATA["sprach2_exam2_5"] = {
    text: "innerhalb geschlossener Räume aufhalten",
    meaning: "يتواجدون داخل أماكن مغلقة",
    keywords: ["innerhalb = داخل", "geschlossener Räume = أماكن مغلقة", "aufhalten = يتواجدون"],
    simplified: "يقضون معظم وقتهم في مكاتب و مصانع مغلقة",
    imagine: "🏢🚪 مبنى به أبواب ونوافذ مغلقة"
};

HELP_DATA["sprach2_exam2_6"] = {
    text: "sich die meiste Zeit innerhalb geschlossener Räume aufhalten müssen",
    meaning: "يضطرون لقضاء معظم وقتهم في أماكن مغلقة",
    keywords: ["müssen = يضطرون", "meiste Zeit = معظم الوقت", "aufhalten = قضاء"],
    simplified: "ممن يضطرون لقضاء وقتهم بالداخل",
    imagine: "💼😞 عامل مجبر على البقاء في مكتب ضيق"
};

HELP_DATA["sprach2_exam2_7"] = {
    text: "Ein breites Angebot an Zubehör",
    meaning: "عرض واسع من الإكسسوارات",
    keywords: ["Angebot = عرض", "an = من", "Zubehör = إكسسوارات"],
    simplified: "متاجر تبيع إكسسوارات الدراجات",
    imagine: "🚲🔧 دراجة وأدوات جانبية"
};

HELP_DATA["sprach2_exam2_8"] = {
    text: "die das Fahrrad fast so sicher wie einen Panzer machen sollen",
    meaning: "يجب أن تجعل الدراجة آمنة مثل الدبابة",
    keywords: ["sollen = يجب أن", "sicher = آمنة", "Panzer = دبابة"],
    simplified: "معدات مصممة لتوفير حماية قصوى للدراج",
    imagine: "🛡️🚲 دراجة ودرع"
};

HELP_DATA["sprach2_exam2_9"] = {
    text: "dann sind die Autoschlangen wieder länger",
    meaning: "عندها تصبح طوابير السيارات أطول",
    keywords: ["dann = عندها", "Autoschlangen = طوابير سيارات", "länger = أطول"],
    simplified: "حينها ستعود الاختناقات المرورية",
    imagine: "🚗🚗🚗طابور سيارات طويل تحت المطر"
};

HELP_DATA["sprach2_exam2_10"] = {
    text: "denn einen praktischen Wetterschutz für Radfahrer haben die Geschäfte noch nicht im Angebot",
    meaning: "فالمتاجر لا تقدم بعد حماية عملية من الطقس لراكبي الدراجات",
    keywords: ["denn = لأن", "Wetterschutz = حماية من الطقس", "Angebot = متوفرة"],
    simplified: "لأنه لا توجد معاطف مطر جيدة لركوب الدراجة بعد",
    imagine: "☔🚲 مطر ودراجة بدون مظلة"
};

// ============================================
// Exam 3 (exam3.json) - Man(n) kocht selbst
// ============================================

HELP_DATA["sprach2_exam3_1"] = {
    text: "Denn immer mehr Männer in Deutschland greifen jetzt selbst zum Kochtopf",
    meaning: "لأن المزيد من الرجال في ألمانيا يستخدمون قدر الطبخ بأنفسهم الآن",
    keywords: ["Denn = لأن", "Kochtopf = قدر طبخ", "greifen = يستخدمون"],
    simplified: "الرجال الآن يطبخون بأنفسهم أكثر من السابق",
    imagine: "👨‍🍳🍳 رجل يرتدي مئزراً ويقف أمام الموقد"
};

HELP_DATA["sprach2_exam3_2"] = {
    text: "Ein Grund für diese Entwicklung",
    meaning: "سبب لهذا التطور",
    keywords: ["Grund = سبب", "für = لـ", "Entwicklung = تطور"],
    simplified: "أحد أسباب هذا التحول",
    imagine: "📈❓ سؤال وعلامة استفهام"
};

HELP_DATA["sprach2_exam3_3"] = {
    text: "welch ein Unterschied besteht zwischen den Ansprüchen",
    meaning: "يا له من فرق بين المتطلبات",
    keywords: ["zwischen = بين", "Ansprüchen = متطلبات", "Unterschied = فرق"],
    simplified: "الفرق كبير جداً بين ما تتطلبه ربة المنزل والطاهي المنزلي",
    imagine: "⚖️👩‍🍳👨‍🍳 ميزان بين امرأة ورجل تطبخ في المطبخ"
};

HELP_DATA["sprach2_exam3_4"] = {
    text: "Nicht irgendein Topf darf es für den selbsternannten Drei-Sterne-Küchenchef sein",
    meaning: "ليس أي قدر مناسب لطاهي النجوم الثلاثة المزعوم",
    keywords: ["irgendein = أي", "Topf = قدر", "Drei-Sterne-Küchenchef = طاهي ثلاث نجوم"],
    simplified: "طباخو المنازل يطلبون أواني طبخ فاخرة",
    imagine: "🍲✨ قدر لامع ومكلف"
};

HELP_DATA["sprach2_exam3_5"] = {
    text: "Die zweite Voraussetzung dafür, dass die Gerichte auch gelingen",
    meaning: "الشرط الثاني لذلك، أن تنجح الأطباق",
    keywords: ["dafür = لذلك", "Voraussetzung = شرط", "gelingen = تنجح"],
    simplified: "لكي تنجح الوصفة يجب توفر شرطين",
    imagine: "📋✅ لائحة مكتوب عليها شرط 1, شرط 2"
};

HELP_DATA["sprach2_exam3_6"] = {
    text: "Jetzt hängt es nur noch davon ab, was der Hobbykoch aus den Kochideen der Buchautoren macht",
    meaning: "الأمر يعتمد الآن فقط على ما يفعله الطباخ المنزلي بأفكار الطبخ لدى الكتاب",
    keywords: ["davon = على ذلك", "hängt ab = يعتمد", "Hobbykoch = طباخ منزلي"],
    simplified: "الأمر يعتمد على مهارة الطباخ باستخدام الوصفات",
    imagine: "👩‍🍳📖 طباخ ينظر إلى كتاب طبخ"
};

HELP_DATA["sprach2_exam3_7"] = {
    text: "Helfen die Bücher nicht weiter",
    meaning: "إن لم تكن الكتب كافية",
    keywords: ["weiter = أكثر", "helfen = تساعد", "Bücher = كتب"],
    simplified: "إذا لم تنجح الكتب في مساعدتك",
    imagine: "📚🤷 شخص أمام كومة كتب يشعر بالضياع"
};

HELP_DATA["sprach2_exam3_8"] = {
    text: "Das führt dazu, dass man(n) zu Hause immer öfter international kocht",
    meaning: "هذا يؤدي إلى أن المرء يطبخ بشكل دولي في المنزل غالباً",
    keywords: ["dazu = إلى ذلك", "führt = يؤدي", "international kocht = يطبخ دولياً"],
    simplified: "هذا يجعل الطهاة الهواة يجربون وصفات من مختلف المطابخ العالمية",
    imagine: "🌍🍲 أطباق من حول العالم"
};

HELP_DATA["sprach2_exam3_9"] = {
    text: "dass es viel zu aufwändig ist, für sich alleine zu kochen",
    meaning: "أنه من المعقد جداً الطبخ بمفردك",
    keywords: ["dass = أن", "aufwändig = معقد", "alleine = بمفردك"],
    simplified: "الطبخ لشخص واحد معقد للغاية",
    imagine: "🍲😓 طباخ يواجه صعوبة في تحضير وجبة لشخص واحد"
};

HELP_DATA["sprach2_exam3_10"] = {
    text: "Das Interessante daran ist, dass dabei unsere männlichen Chefköche feststellen müssen",
    meaning: "المثير للاهتمام في ذلك هو أن طهاةنا الذكور يجب أن يدركوا",
    keywords: ["daran = في ذلك", "Interessante = مثير للاهتمام", "feststellen = يدركوا"],
    simplified: "والجزء المضحك أن الرجال يكتشفون أن النساء طهاة ماهرات أيضاً",
    imagine: "👩‍🍳😊👨‍🍳 امرأة تطبخ والرجل مندهش"
};

// ============================================
// Exam 4 (exam4.json) - Jugend diskutiert - mach mit!
// ============================================

HELP_DATA["sprach2_exam4_1"] = {
    text: "Den Wettbewerb 'Jugend diskutiert' gibt es bereits seit Herbst 2002",
    meaning: "مسابقة 'شباب يناقشون' موجودة منذ خريف 2002",
    keywords: ["seit = منذ", "Wettbewerb = مسابقة", "Herbst = خريف"],
    simplified: "المسابقة مستمرة منذ عدة سنوات",
    imagine: "📅🏆 تقويم وكأس"
};

HELP_DATA["sprach2_exam4_2"] = {
    text: "Wie immer bereiten sich die Teilnehmer dann im Unterricht auf 'Jugend diskutiert' vor",
    meaning: "كالعادة، يستعد المشاركون في الفصل للمسابقة",
    keywords: ["Wie = كما", "immer = دائماً", "bereiten vor = يستعدون"],
    simplified: "المشاركون يستعدون في المدرسة كالعادة",
    imagine: "🏫📚 مدرسة وكتب"
};

HELP_DATA["sprach2_exam4_3"] = {
    text: "Du fragst dich, warum du teilnehmen solltest?",
    meaning: "تتساءل لماذا يجب أن تشارك؟",
    keywords: ["warum = لماذا", "teilnehmen = تشارك", "fragst dich = تتساءل"],
    simplified: "قد تتساءل عن فائدة مشاركتك",
    imagine: "❓🤔 علامة استفهام وشخص يفكر"
};

HELP_DATA["sprach2_exam4_4"] = {
    text: "Außerdem bietet dir 'Jugend diskutiert' die Chance, im Wettstreit mit anderen weiterzukommen",
    meaning: "بالإضافة إلى ذلك، تمنحك المسابقة فرصة التقدم بالتنافس مع الآخرين",
    keywords: ["Außerdem = بالإضافة إلى ذلك", "Chance = فرصة", "Wettstreit = تنافس"],
    simplified: "المنافسة نفسها تمنحك فرصة ثمينة للتطور",
    imagine: "🏃‍♂️🏆 سباق وشارة فوز"
};

HELP_DATA["sprach2_exam4_5"] = {
    text: "die dann an Regionalwettbewerben teilnehmen",
    meaning: "الذين سيشاركون بعدها في مسابقات المناطق",
    keywords: ["an = في", "Regionalwettbewerben = مسابقات مناطقية", "teilnehmen = يشاركون"],
    simplified: "الطلاب الفائزون يتأهلون للمرحلة التالية",
    imagine: "🗺️📍 مراحل على خريطة"
};

HELP_DATA["sprach2_exam4_6"] = {
    text: "Als Preise kann man professionelle Trainings gewinnen",
    meaning: "يمكن الفوز بتدريبات احترافية كجوائز",
    keywords: ["Als = مثل", "Preise = جوائز", "Trainings = تدريبات"],
    simplified: "الجوائز هي فرص تدريبية احترافية",
    imagine: "🎁🏋️ هدية وحقيبة رياضية"
};

HELP_DATA["sprach2_exam4_7"] = {
    text: "Bei 'Jugend diskutiert' kannst du viel lernen",
    meaning: "في 'شباب يناقشون' يمكنك تعلم الكثير",
    keywords: ["Bei = في", "lernen = تعلم", "viel = الكثير"],
    simplified: "المشاركة في المسابقة تعلمك العديد من المهارات",
    imagine: "🧠📖 عقل وكتاب"
};

HELP_DATA["sprach2_exam4_8"] = {
    text: "Du gewinnst mehr Selbstbewusstsein, weil du lernst, wie man das Wort ergreift",
    meaning: "تكتسب ثقة أكبر بالنفس لأنك تتعلم كيف تأخذ الكلمة",
    keywords: ["weil = لأن", "Selbstbewusstsein = ثقة بالنفس", "Wort ergreift = تأخذ الكلمة"],
    simplified: "ممارسة النقاشات تزيد من ثقتك بنفسك",
    imagine: "💪🗣️ شخص يتحدث بثقة وذراع قوية"
};

HELP_DATA["sprach2_exam4_9"] = {
    text: "Die Sichtweisen der anderen zeigen dir darüber hinaus, was du vielleicht selbst noch nicht gesehen hast",
    meaning: "وجهات نظر الآخرين تريك أيضاً ما قد لا تكون قد لاحظته بنفسك",
    keywords: ["was = ما", "Sichtweisen = وجهات نظر", "gesehen = لاحظته"],
    simplified: "الاستماع لزملائك يمنحك أفكاراً جديدة",
    imagine: "👥🔭 شخصان ينظران من منظار"
};

HELP_DATA["sprach2_exam4_10"] = {
    text: "Wer das alles im Unterricht gelernt hat, kann gemeinsam mit anderen viel bewegen!",
    meaning: "من تعلم كل هذا في الفصل، يمكنه تحقيق الكثير مع الآخرين!",
    keywords: ["Wer = من", "gelernt = تعلم", "bewegen = يحقق"],
    simplified: "المهارات المكتسبة تمنحك القدرة على إحداث تغيير",
    imagine: "🤝🌍 أيادٍ متشابكة وكوكب أرض"
};

// ============================================
// Exam 5 (exam5.json) - Theater für Kinder und Jugendliche
// ============================================

HELP_DATA["sprach2_exam5_1"] = {
    text: "sondern auch die Körpererfahrung von Kindern",
    meaning: "بل أيضاً التجربة الجسدية للأطفال",
    keywords: ["sondern = بل", "Körpererfahrung = تجربة جسدية", "Kindern = أطفال"],
    simplified: "المسرح يطور الإبداع والوعي الجسدي للأطفال",
    imagine: "🎭💪 أقنعة وعضلات"
};

HELP_DATA["sprach2_exam5_2"] = {
    text: "arbeitet seit vielen Jahren in der Jugendförderung",
    meaning: "يعمل منذ سنوات عديدة في تعزيز الشباب",
    keywords: ["seit = منذ", "Jugendförderung = تعزيز الشباب", "arbeitet = يعمل"],
    simplified: "النادي الخيري له تاريخ في دعم الشباب",
    imagine: "🧒📅 سنوات ووجه طفل"
};

HELP_DATA["sprach2_exam5_3"] = {
    text: "die wegen familiärer und anderer Probleme Hilfe benötigen",
    meaning: "الذين يحتاجون مساعدة بسبب مشاكل عائلية وأخرى",
    keywords: ["wegen = بسبب", "familiärer = عائلية", "Hilfe = مساعدة"],
    simplified: "الأطفال الذين يعانون من مشاكل في المنزل يجدون مساعدتهم هنا",
    imagine: "🏠💔 منزل وقلب حزين"
};

HELP_DATA["sprach2_exam5_4"] = {
    text: "ab dem kommenden Jahr die Welt des Theaters kennenlernen",
    meaning: "ابتداءً من العام القادم سيتعرفون على عالم المسرح",
    keywords: ["ab = ابتداءً من", "kommenden Jahr = العام القادم", "kennenlernen = يتعرفون"],
    simplified: "بدءاً من العام الجديد سيتعلمون عن المسرح",
    imagine: "📅🎭 تقويم وأقنعة مسرحية"
};

HELP_DATA["sprach2_exam5_5"] = {
    text: "Am Ende des Projekts werden die Nachwuchsschauspieler bei einem Theaterfestival auftreten",
    meaning: "في نهاية المشروع، سوف يمثل الممثلون الشباب في مهرجان مسرحي",
    keywords: ["Am = في", "Ende = نهاية", "auftreten = يمثلون"],
    simplified: "سيظهر الأطفال على خشبة المسرح في مهرجان",
    imagine: "🎭🌟 مسرح وأضواء"
};

HELP_DATA["sprach2_exam5_6"] = {
    text: "Allen Mitarbeitern ist es wichtig, dass die Kinder auf der Bühne Anerkennung für ihre Leistung bekommen",
    meaning: "كل الموظفين يعتبرون من المهم أن يحصل الأطفال على تقدير لعملهم على المسرح",
    keywords: ["es = ذلك", "wichtig = مهم", "Anerkennung = تقدير"],
    simplified: "فريق العمل يؤمن بأن التقدير المستحق للأطفال أمر حيوي",
    imagine: "👏🎭 تصفيق ووجه سعيد"
};

HELP_DATA["sprach2_exam5_7"] = {
    text: "da bei der Stadt keine Gelder vorhanden waren",
    meaning: "لأنه لم تكن هناك أموال متوفرة في المدينة",
    keywords: ["da = لأن", "Gelder = أموال", "vorhanden = متوفرة"],
    simplified: "كان هذا مستحيلاً لولا الدعم المالي لأن المدينة لم تقدم أي تمويل",
    imagine: "💰🚫 نقود وعلامة ممنوع"
};

HELP_DATA["sprach2_exam5_8"] = {
    text: "Der Verein kümmert sich auch darum, die Projekte bekannt zu machen",
    meaning: "النادي يهتم أيضاً بنشر المشاريع",
    keywords: ["darum = بذلك", "bekannt zu machen = بنشر", "kümmert sich = يهتم"],
    simplified: "النادي مسؤول عن الترويج للمشاريع",
    imagine: "📢🎭 مكبر صوت ومسرح"
};

HELP_DATA["sprach2_exam5_9"] = {
    text: "Man hofft, auf diese Weise noch mehr Unterstützer zu finden",
    meaning: "يأملون بهذه الطريقة إيجاد المزيد من الداعمين",
    keywords: ["auf = بهذه", "Weise = طريقة", "Unterstützer = داعمين"],
    simplified: "آملين كسب دعم أكبر من المجتمع عبر الإعلانات",
    imagine: "🤝👥 أيدي متشابكة ومجموعة أشخاص"
};

HELP_DATA["sprach2_exam5_10"] = {
    text: "Aktuell sammelt das Jugendzentrum Spenden, um weitere Projekte finanzieren zu können",
    meaning: "المركز الشبابي يجمع تبرعات حالياً لتمويل مشاريع أخرى",
    keywords: ["um = لـ", "zu finanzieren = لتمويل", "Projekte = مشاريع"],
    simplified: "تبرعاتنا الآن تستخدم لدعم مشاريع مستقبلية",
    imagine: "💰🎭 نقود وأقنعة مسرح"
};

// ============================================
// Exam 6 (exam6.json) - Umgang مع Haustieren
// ============================================

HELP_DATA["sprach2_exam6_1"] = {
    text: "seltener krank als Kinder in Haushalten ohne Tiere",
    meaning: "يمرضون أقل من الأطفال في بيوت بلا حيوانات",
    keywords: ["als = من", "seltener = أقل", "krank = يمرضون"],
    simplified: "وجود حيوان أليف يرتبط بمرض أقل للطفل",
    imagine: "🐱👶 طفل وقطة"
};

HELP_DATA["sprach2_exam6_2"] = {
    text: "Die Studie wurde in der vergangenen Woche veröffentlicht",
    meaning: "الدراسة نُشرت في الأسبوع الماضي",
    keywords: ["vergangenen = الماضي", "Woche = أسبوع", "veröffentlicht = نُشرت"],
    simplified: "النتائج نُشرت مؤخراً",
    imagine: "📰🗓️ جريدة وتقويم"
};

HELP_DATA["sprach2_exam6_3"] = {
    text: "Es wurden zwar keine Erklärungen geliefert",
    meaning: "لم يتم تقديم تفسيرات ومع ذلك...",
    keywords: ["zwar = ومع ذلك", "Erklärungen = تفسيرات", "geliefert = تقديم"],
    simplified: "لن يقدم البحث سبباً علمياً محدداً",
    imagine: "❓🔍 تجربة وعلامة استفهام"
};

HELP_DATA["sprach2_exam6_4"] = {
    text: "Hunde haben nämlich durch die täglichen Spaziergänge draußen viel Kontakt zu möglichen Krankheitserregern",
    meaning: "الكلاب تحديداً لديها اتصال كثير بمسببات الأمراض المحتملة أثناء المشي اليومي في الخارج",
    keywords: ["durch = عبر", "Spaziergänge = نزهات", "Kontakt = اتصال"],
    simplified: "خلال نزهاتهم اليومية، تتعرض الكلاب للجراثيم",
    imagine: "🐕🌿 كلب في الخارج بجانب نباتات"
};

HELP_DATA["sprach2_exam6_5"] = {
    text: "haben demnach dieselbe Wirkung auf die Gesundheit der Kinder",
    meaning: "وبالتالي لديهم نفس التأثير على صحة الأطفال",
    keywords: ["dieselbe = نفس", "Wirkung = تأثير", "Gesundheit = صحة"],
    simplified: "القطط التي تخرج للخارج لها فائدة مماثلة",
    imagine: "🐈🍃 قطة تختبئ في الأدغال"
};

HELP_DATA["sprach2_exam6_6"] = {
    text: "wurden in Finnland 397 Babys über den Zeitraum beobachtet",
    meaning: "تمت مراقبة 397 طفلاً في فنلندا على مدى فترة زمنية",
    keywords: ["wurden = تم", "beobachtet = مراقبة", "Zeitraum = فترة زمنية"],
    simplified: "شملت الدراسة 397 طفلاً فنلندياً",
    imagine: "👶📋 أطفال وأوراق"
};

HELP_DATA["sprach2_exam6_7"] = {
    text: "ein um 30 % geringeres Risiko für Erkrankungen der Atemwege",
    meaning: "خطر أقل بنسبة 30٪ لأمراض الجهاز التنفسي",
    keywords: ["geringeres = أقل", "Risiko = خطر", "Atemwege = تنفسي"],
    simplified: "انخفاض خطر إصابة الأطفال بالربو والتهاب الشعب الهوائية",
    imagine: "📉😷 رسم بياني ينخفض وقناع"
};

HELP_DATA["sprach2_exam6_8"] = {
    text: "Ohrenentzündungen weniger auftraten",
    meaning: "التهابات الأذن حدثت بشكل أقل",
    keywords: ["weniger = أقل", "auftraten = حدثت", "Ohrenentzündungen = التهابات أذن"],
    simplified: "أظهرت الدراسة نتائج مفاجئة حول التهابات الأذن",
    imagine: "👂🦷 أذن وأسنان"
};

HELP_DATA["sprach2_exam6_9"] = {
    text: "dass die Gesundheit von Kindern in Gesellschaft von Tieren deutlich besser sei",
    meaning: "صحة الأطفال بصحبة الحيوانات أفضل بكثير",
    keywords: ["deutlich = بكثير", "besser = أفضل", "Gesellschaft = صحبة"],
    simplified: "العلاقة بين الحيوانات الأليفة وصحة الطفل قوية جداً",
    imagine: "🐕❤️👶 كلب وقلب وطفل"
};

HELP_DATA["sprach2_exam6_10"] = {
    text: "Frühere Untersuchungen hatten das genaue Gegenteil ergeben",
    meaning: "دراسات سابقة أظهرت العكس تماماً",
    keywords: ["Gegenteil = عكس", "genaue = تماماً", "früheren = سابقة"],
    simplified: "نتائج اليوم معاكسة تماماً للدراسات السابقة الأمريكية",
    imagine: "🔄❌ سهم معاكس وعلامة منع"
};

// ============================================
// Exam 7 (exam7.json) - Liebesgrüße aus der Kühltruhe
// ============================================

HELP_DATA["sprach2_exam7_1"] = {
    text: "Anhand des Inhalts des Tiefkühlfachs den Charakter seines Besitzers erkennen",
    meaning: "من خلال محتويات الفريزر يمكن التعرف على شخصية صاحبها",
    keywords: ["Anhand = من خلال", "Inhalts = محتويات", "Tiefkühlfachs = فريزر"],
    simplified: "ماذا يخبرك محتوى ثلاجة الرجل عن شخصيته؟",
    imagine: "🧊❄️ فريزر مفتوح وطعام مجمد"
};

HELP_DATA["sprach2_exam7_2"] = {
    text: "unterscheiden fünf Kategorien von Single-Männern",
    meaning: "يميزون خمس فئات من الرجال العزاب",
    keywords: ["von = من", "Kategorien = فئات", "Single-Männern = رجال عزاب"],
    simplified: "العلماء يصنفون الرجال حسب نوع وجباتهم المجمدة",
    imagine: "🧑‍🤝‍🧑📋 رجال وأوراق تصنيف"
};

HELP_DATA["sprach2_exam7_3"] = {
    text: "den spontanen Typ, den Bequemen, den Kreativen, sowie den Cocktail- und den Gourmet-Typen",
    meaning: "النوع العفوي، المريح، المبدع، بالإضافة إلى الكوكتيل والذواقة",
    keywords: ["sowie = وكذلك", "spontanen = عفوي", "Gourmet = ذواقة"],
    simplified: "الأنواع الخمسة للرجال تشمل الذواقة والمبدع والعفوي وغيرهم",
    imagine: "👨‍🍳👨‍💼🍸 رجال مع كوكتيل وطعام"
};

HELP_DATA["sprach2_exam7_4"] = {
    text: "aus denen er eine Mahlzeit zusammenstellen kann",
    meaning: "يمكنه من خلالها تحضير وجبة",
    keywords: ["aus = من خلالها", "denen = التي", "zusammenstellen = تحضير"],
    simplified: "يخلطون الخضار واللحوم المجمدة لصنع وجبات بسيطة",
    imagine: "🍲🥦🥩 قدر به خضار و لحم"
};

HELP_DATA["sprach2_exam7_5"] = {
    text: "Der Nachteil liegt auf der Hand",
    meaning: "العيب واضح للجميع",
    keywords: ["auf = على", "Hand = يد", "liegt = يقع"],
    simplified: "عيبه أنه نادر الوجود",
    imagine: "🤲👀 يد مفتوحة وعينان"
};

HELP_DATA["sprach2_exam7_6"] = {
    text: "Ihnen ist es sogar zu anstrengend, zwei Tüten zu öffnen statt nur einer",
    meaning: "حتى فتح كيسين بدلاً من واحد مرهق جداً بالنسبة لهم",
    keywords: ["anstrengend = مرهق", "Tüten = أكياس", "öffnen = فتح"],
    simplified: "حتى رفع أكياس متعددة من الفريزر يتطلب مجهوداً كبيراً بالنسبة لهم",
    imagine: "🛍️😓 أكياس بقالة ووجه متعب"
};

HELP_DATA["sprach2_exam7_7"] = {
    text: "Folglich kaufen diese Männer am häufigsten komplette Gerichte",
    meaning: "وبالتالي يشتري هؤلاء الرجال الأطباق الكاملة غالباً",
    keywords: ["Folglich = وبالتالي", "komplette Gerichte = أطباق كاملة", "kaufen = يشترون"],
    simplified: "يختارون الوجبات الجاهزة الكاملة توفيراً للوقت",
    imagine: "🍽️📺 طبق جاهز وتلفاز"
};

HELP_DATA["sprach2_exam7_8"] = {
    text: "Zumindest Frauen sehen das wohl eher skeptisch",
    meaning: "على الأقل النساء ينظرن إلى ذلك بتشكك إلى حد ما",
    keywords: ["eher = إلى حد ما", "skeptisch = بتشكك", "Frauen = نساء"],
    simplified: "النساء متشككات نوعاً ما في هذه الفكرة",
    imagine: "🤨👩 امرأة ترفع حاجبها بتشكك"
};

HELP_DATA["sprach2_exam7_9"] = {
    text: "Doch egal, zu welcher Kategorie ein Mann gehört",
    meaning: "ولكن بغض النظر عن الفئة التي ينتمي إليها الرجل",
    keywords: ["zu = إلى", "Kategorie = فئة", "gehört = ينتمي"],
    simplified: "بغض النظر عن النوع",
    imagine: "🧑‍🤝‍🧑🤷 أشخاص لا يهم تصنيفهم"
};

HELP_DATA["sprach2_exam7_10"] = {
    text: "andere wohl eher keine Lust",
    meaning: "والبعض الآخر ربما ليس لديه رغبة",
    keywords: ["wohl = ربما", "eher = إلى حد ما", "Lust = رغبة"],
    simplified: "ينقصهم الحافز للطهي",
    imagine: "🍳🤷 طباخ ومطبخ نائم"
};

// ============================================
// Exam 8 (exam8.json) - Liebesgrüße aus der Kühltruhe (معدل)
// ============================================

HELP_DATA["sprach2_exam8_1"] = {
    text: "Einer Studie zufolge kann man anhand des Inhalts den Charakter erkennen",
    meaning: "وفقاً لدراسة، يمكن من خلال المحتوى التعرف على الشخصية",
    keywords: ["zufolge = وفقاً لـ", "Studie = دراسة", "anhand = من خلال"],
    simplified: "نوع الطعام المجمد يفضح شخصيتك",
    imagine: "🧊🔬 فريزر ومجهر"
};

HELP_DATA["sprach2_exam8_2"] = {
    text: "unterscheiden fünf Kategorien von Single-Männern",
    meaning: "يميزون خمس فئات من الرجال العزاب",
    keywords: ["von = من", "Kategorien = فئات", "Single-Männern = رجال عزاب"],
    simplified: "العلماء يصنفون الرجال حسب نوع وجباتهم المجمدة",
    imagine: "🧑‍🤝‍🧑📋 رجال وأوراق تصنيف"
};

HELP_DATA["sprach2_exam8_3"] = {
    text: "den spontanen Typ, den Bequemen, den Kreativen, sowie den Cocktail- und den Gourmet-Typen",
    meaning: "النوع العفوي، المريح، المبدع، بالإضافة إلى الكوكتيل والذواقة",
    keywords: ["sowie = وكذلك", "spontanen = عفوي", "Gourmet = ذواقة"],
    simplified: "الأنواع الخمسة للرجال تشمل الذواقة والمبدع والعفوي وغيرهم",
    imagine: "👨‍🍳👨‍💼🍸 رجال مع كوكتيل وطعام"
};

HELP_DATA["sprach2_exam8_4"] = {
    text: "aus denen er eine Mahlzeit zusammenstellen kann",
    meaning: "يمكنه من خلالها تحضير وجبة",
    keywords: ["denen = التي", "zusammenstellen = تحضير", "Mahlzeit = وجبة"],
    simplified: "يخلطون الخضار واللحوم المجمدة لصنع وجبات بسيطة",
    imagine: "🍲🥦🥩 قدر به خضار و لحم"
};

HELP_DATA["sprach2_exam8_5"] = {
    text: "Hauptgewinn für jede Frau ist aber der Gourmet-Typ",
    meaning: "لكن الجائزة الكبرى لكل امرأة هو نوع الذواقة",
    keywords: ["jede = كل", "Frau = امرأة", "Gourmet-Typ = نوع الذواقة"],
    simplified: "وبالنسبة للمرأة، صائد الجوائز الكبرى هو الشيف المنزلي",
    imagine: "👩‍🍳🏆 طباخة وكأس"
};

HELP_DATA["sprach2_exam8_6"] = {
    text: "Ihnen ist es sogar zu anstrengend, zwei Tüten zu öffnen statt nur einer",
    meaning: "حتى فتح كيسين بدلاً من واحد مرهق جداً بالنسبة لهم",
    keywords: ["anstrengend = مرهق", "Tüten = أكياس", "öffnen = فتح"],
    simplified: "حتى رفع أكياس متعددة من الفريزر يتطلب مجهوداً كبيراً بالنسبة لهم",
    imagine: "🛍️😓 أكياس بقالة ووجه متعب"
};

HELP_DATA["sprach2_exam8_7"] = {
    text: "folglich kaufen diese Männer am häufigsten komplette Gerichte",
    meaning: "وبالتالي يشتري هؤلاء الرجال الأطباق الكاملة غالباً",
    keywords: ["folglich = وبالتالي", "komplette Gerichte = أطباق كاملة", "kaufen = يشترون"],
    simplified: "يختارون الوجبات الجاهزة الكاملة توفيراً للوقت",
    imagine: "🍽️📺 طبق جاهز وتلفاز"
};

HELP_DATA["sprach2_exam8_8"] = {
    text: "ob sie so das Herz einer Frau erobern können?",
    meaning: "هل يمكنهم بهذه الطريقة كسب قلب امرأة؟",
    keywords: ["ob = هل", "Herz = قلب", "erobern = يكسبون"],
    simplified: "هذا التساؤل يراود الجميع: هل هذه هي الطريقة للسعادة؟",
    imagine: "💭❤️ فقاعة تفكير وقلب"
};

HELP_DATA["sprach2_exam8_9"] = {
    text: "zu welcher Kategorie ein Mann gehört",
    meaning: "إلى أي فئة ينتمي الرجل",
    keywords: ["zu = إلى", "Kategorie = فئة", "gehört = ينتمي"],
    simplified: "لا يهم النوع، فالجميع متفق على شيء واحد",
    imagine: "🧑‍🤝‍🤝🏻 رجال بجميع أنواعهم"
};

HELP_DATA["sprach2_exam8_10"] = {
    text: "Einige haben vermutlich wenig Zeit zum Kochen",
    meaning: "البعض ربما يملك وقتاً قليلاً للطهي",
    keywords: ["vermutlich = ربما", "wenig = قليلاً", "Kochen = للطهي"],
    simplified: "قد تكون ضغوط العمل سبباً لشراء الأغذية المجمدة",
    imagine: "💼⏰ حقيبة عمل وساعة تدور"
};

// ============================================
// Exam 9 (exam9.json) - Online-Sprachkurse
// ============================================

HELP_DATA["sprach2_exam9_1"] = {
    text: "und sogar mit Smartphones kann man Sprachen lernen",
    meaning: "وحتى بالهواتف الذكية يمكن تعلم اللغات",
    keywords: ["sogar = حتى", "Smartphones = هواتف ذكية", "Sprachen = لغات"],
    simplified: "التكنولوجيا وسّعت خيارات تعلم اللغة",
    imagine: "📱🌍 هاتف وكرة أرضية"
};

HELP_DATA["sprach2_exam9_2"] = {
    text: "eine Tandem-Partnerschaft mit einem Muttersprachler",
    meaning: "شراكة تبادل لغوي مع متحدث أصلي",
    keywords: ["mit = مع", "Tandem-Partnerschaft = شراكة تبادل لغوي", "Muttersprachler = متحدث أصلي"],
    simplified: "التعلم الثنائي يتطلب متحدثاً باللغة الأم",
    imagine: "🗣️👥 شخصان يتحدثان"
};

HELP_DATA["sprach2_exam9_3"] = {
    text: "nicht nur lesen, sondern gleichzeitig auch hören",
    meaning: "ليس فقط القراءة، بل الاستماع في نفس الوقت",
    keywords: ["sondern = بل", "gleichzeitig = في نفس الوقت", "hören = الاستماع"],
    simplified: "تطبيقات تعلم اللغة تجمع بين البصر والسمع",
    imagine: "👂👀 أذن وعين"
};

HELP_DATA["sprach2_exam9_4"] = {
    text: "ohne dass ein ganzer Kurs zuhört",
    meaning: "بدون أن يستمع فصل كامل",
    keywords: ["ohne = بدون", "Kurs = فصل", "zuhört = يستمع"],
    simplified: "التطبيقات توفر مساحة للتدريب دون خجل",
    imagine: "🎧😶 سماعات وصوت هادئ"
};

HELP_DATA["sprach2_exam9_5"] = {
    text: "lieber mehrmals täglich in Fünf-Minuten-Blöcken wiederholen, anstatt sie in einer Stunde alle auf einmal zu lernen",
    meaning: "من الأفضل التكرار عدة مرات يومياً على فترات خمس دقائق بدلاً من تعلمها كلها دفعة واحدة في ساعة",
    keywords: ["anstatt = بدلاً من", "wiederholen = تكرار", "Fünf-Minuten-Blöcken = فترات خمس دقائق"],
    simplified: "التكرار القصير والمنتظم أفضل من المذاكرة الطويلة",
    imagine: "⏲️📖 ساعة رمل وكتاب"
};

HELP_DATA["sprach2_exam9_6"] = {
    text: "sind besonders gut zum Vokabellernen geeignet",
    meaning: "مناسبة بشكل خاص لتعلم المفردات",
    keywords: ["besonders = بشكل خاص", "Vokabellernen = تعلم مفردات", "geeignet = مناسبة"],
    simplified: "تطبيقات الهاتف رائعة لتكرار الكلمات الجديدة",
    imagine: "📱🔤 هاتف وحروف"
};

HELP_DATA["sprach2_exam9_7"] = {
    text: "aber Satzbau oder andere Grammatikthemen werden allenfalls kurz angesprochen",
    meaning: "لكن بناء الجملة وموضوعات النحو الأخرى بالكاد يتم التطرق إليها",
    keywords: ["aber = لكن", "Satzbau = بناء جملة", "kurz angesprochen = التطرق إليها"],
    simplified: "الجانب العملي مثل تركيب الجمل مهمل في هذه التطبيقات",
    imagine: "🏗️❌ بناء وهدم"
};

HELP_DATA["sprach2_exam9_8"] = {
    text: "Dafür sollte man besser in einen Kurs gehen oder einen Tandem-Partner suchen",
    meaning: "بدلاً من ذلك، من الأفضل الذهاب إلى دورة تدريبية أو البحث عن شريك تبادل لغوي",
    keywords: ["sollte = يجب", "Kurs = دورة", "Tandem-Partner = شريك تبادل لغوي"],
    simplified: "للوصول لمستوى متقدم، النصيحة هي الانضمام لفصل أو البحث عن شريك",
    imagine: "👩‍🏫🤝 معلمة ومصافحة"
};

HELP_DATA["sprach2_exam9_9"] = {
    text: "um einen passenden Tandem-Partner zu finden",
    meaning: "للعثور على شريك تبادل لغوي مناسب",
    keywords: ["um = لـ", "zu finden = للعثور على", "passenden Tandem-Partner = شريك تبادل لغوي مناسب"],
    simplified: "الإنترنت هو أسرع طريق للعثور على شريك",
    imagine: "🌐💻 إنترنت وحاسوب"
};

HELP_DATA["sprach2_exam9_10"] = {
    text: "schon werden alle Treffer angezeigt",
    meaning: "سيتم عرض جميع النتائج على الفور",
    keywords: ["schon = على الفور", "Treffer = نتائج", "angezeigt = عرض"],
    simplified: "فقط بضع نقرات ستحصل على قائمة بالمرشحين",
    imagine: "🔍✅ بحث وعلامة صح"
};

// ============================================
// Exam 10 (exam10.json) - Deutschland – ein Paradies für Kinder?
// ============================================

HELP_DATA["sprach2_exam10_1"] = {
    text: "Verglichen mit der Bevölkerungszahl von ungefähr 80 Millionen",
    meaning: "مقارنة بعدد السكان البالغ حوالي 80 مليوناً",
    keywords: ["mit = مع", "Bevölkerungszahl = عدد السكان", "verglichen = مقارنة"],
    simplified: "ما يقرب من طفل لكل أربعة أشخاص",
    imagine: "👶🧑🧑🧑 أربعة أشخاص وطفل"
};

HELP_DATA["sprach2_exam10_2"] = {
    text: "drei Jahre bei dem Kind zu Hause zu bleiben",
    meaning: "البقاء مع الطفل في المنزل لمدة ثلاث سنوات",
    keywords: ["bei = مع", "Kind = طفل", "zu Hause = في المنزل"],
    simplified: "يبقى الأبوان مع المولود لمدة تصل إلى ثلاث سنوات",
    imagine: "👨‍👩‍👧🏠 عائلة في المنزل"
};

HELP_DATA["sprach2_exam10_3"] = {
    text: "Das hat den Vorteil, dass der zu Hause bleibende Elternteil seinen Arbeitsplatz nicht verliert",
    meaning: "هذا له ميزة أن الوالد الذي يبقى في المنزل لا يفقد وظيفته",
    keywords: ["Das = هذا", "Vorteil = ميزة", "Arbeitsplatz = وظيفة"],
    simplified: "يتم حماية الوظيفة أثناء الإجازة الوالدية",
    imagine: "🛡️💼 درع وشنطة عمل"
};

HELP_DATA["sprach2_exam10_4"] = {
    text: "Dies scheinen die Hauptgründe dafür zu sein",
    meaning: "هذه تبدو الأسباب الرئيسية لذلك",
    keywords: ["dafür = لذلك", "Hauptgründe = أسباب رئيسية", "scheinen = تبدو"],
    simplified: "وهذا يفسر أسباب تراجع معدلات المواليد",
    imagine: "📉👶 رسم بياني يهبط وطفل"
};

HELP_DATA["sprach2_exam10_5"] = {
    text: "sondern stören mit ihrem Lachen und lauten Sprechen die anderen (kinderlosen) Gäste",
    meaning: "بل يزعجون الضيوف الآخرين (بدون أطفال) بضحكاتهم وكلامهم العالي",
    keywords: ["sondern = بل", "stören = يزعجون", "kinderlosen = بدون أطفال"],
    simplified: "الآباء مهمشون في المطاعم لأن أطفالهم يُنظر إليهم على أنهم مصدر إزعاج",
    imagine: "🍽️😠👶 أطفال يصدرون ضوضاء ورواد غاضبون"
};

HELP_DATA["sprach2_exam10_6"] = {
    text: "Obwohl diese selbst häufig lautstark telefonieren, stört das niemanden",
    meaning: "على الرغم من أنهم أنفسهم يتحدثون بصوت عالٍ على الهاتف، لا أحد يزعجهم ذلك",
    keywords: ["Obwohl = على الرغم من", "lautstark = بصوت عالٍ", "niemanden = لا أحد"],
    simplified: "الكبار يمارسون سلوكاً مشابهاً دون توبيخ",
    imagine: "📱🗣️ شخص يتحدث بهاتفه بصوت عالٍ"
};

HELP_DATA["sprach2_exam10_7"] = {
    text: "weil die Kinder die Ruhe der benachbarten (kinderlosen) Hausbewohner stören",
    meaning: "لأن الأطفال يزعجون هدوء سكان المنازل المجاورة (بدون أطفال)",
    keywords: ["weil = لأن", "Kinder = أطفال", "Ruhe = هدوء"],
    simplified: "الجيران يتذمرون من ضجيج الأطفال ويقاضون الحضانة",
    imagine: "⚖️🏢 محكمة ومبنى"
};

HELP_DATA["sprach2_exam10_8"] = {
    text: "dass mit einem Kinderwagen kein Durchkommen ist",
    meaning: "أنه لا يمكن المرور بعربة الأطفال",
    keywords: ["dass = أن", "Kinderwagen = عربة أطفال", "Durchkommen = مرور"],
    simplified: "ممرات القطار لا تستوعب عربات الأطفال",
    imagine: "🚆🚫 قطار وعربة أطفال"
};

HELP_DATA["sprach2_exam10_9"] = {
    text: "Anspruch auf einen Platz",
    meaning: "الحق في مقعد",
    keywords: ["auf = في", "Platz = مقعد", "Anspruch = حق"],
    simplified: "الركاب البالغون يطالبون بمقاعدهم بحجة التعب",
    imagine: "🪑👩 أم واقفة"
};

HELP_DATA["sprach2_exam10_10"] = {
    text: "spricht man in Deutschland gerne von 'Problemen'",
    meaning: "يتحدث المرء في ألمانيا بسهولة عن 'مشاكل'",
    keywords: ["von = عن", "Problemen = مشاكل", "spricht = يتحدث"],
    simplified: "الإعلام يصف الأطفال بأنهم مشكلة",
    imagine: "📺😟 تلفاز ووجه قلق"
};

// ============================================
// Exam 11 (exam11.json) - Deutschland – ein Paradies für Kinder? (معدل 1)
// ============================================

HELP_DATA["sprach2_exam11_1"] = {
    text: "steht ein Betreuungsplatz in einer Kindertagesstätte zur Verfügung",
    meaning: "يتوفر مكان رعاية في روضة أطفال",
    keywords: ["zur = لـ", "Verfügung = التوفر", "Betreuungsplatz = مكان رعاية"],
    simplified: "أماكن الحضانة لا تكفي سوى عُشر الأطفال",
    imagine: "🏫👶 روضة أطفال وطفل صغير"
};

HELP_DATA["sprach2_exam11_2"] = {
    text: "drei Jahre bei dem Kind zu Hause zu bleiben",
    meaning: "البقاء مع الطفل في المنزل لمدة ثلاث سنوات",
    keywords: ["bei = مع", "Kind = طفل", "zu Hause = في المنزل"],
    simplified: "يبقى الأبوان مع المولود لمدة تصل إلى ثلاث سنوات",
    imagine: "👨‍👩‍👧🏠 عائلة في المنزل"
};

HELP_DATA["sprach2_exam11_3"] = {
    text: "Das hat den Vorteil, dass der zu Hause bleibende Elternteil seinen Arbeitsplatz nicht verliert",
    meaning: "هذا له ميزة أن الوالد الذي يبقى في المنزل لا يفقد وظيفته",
    keywords: ["Das = هذا", "Vorteil = ميزة", "Arbeitsplatz = وظيفة"],
    simplified: "يتم حماية الوظيفة أثناء الإجازة الوالدية",
    imagine: "🛡️💼 درع وشنطة عمل"
};

HELP_DATA["sprach2_exam11_4"] = {
    text: "Dennoch wird die Elternzeit für viele Eltern in finanzieller Hinsicht zu einem gravierenden Problem",
    meaning: "ومع ذلك، تصبح إجازة الأبوة مشكلة خطيرة لكثير من الآباء من الناحية المالية",
    keywords: ["Dennoch = ومع ذلك", "Elternzeit = إجازة أبوة", "Problem = مشكلة"],
    simplified: "اقتصادياً، قد تكون الإجازة الوالدية مرهقة للعائلات",
    imagine: "💰😟 نقود ووجه قلق"
};

HELP_DATA["sprach2_exam11_5"] = {
    text: "Dies scheinen die Hauptgründe dafür zu sein",
    meaning: "هذه تبدو الأسباب الرئيسية لذلك",
    keywords: ["dafür = لذلك", "Hauptgründe = أسباب رئيسية", "scheinen = تبدو"],
    simplified: "وهذا يفسر أسباب تراجع معدلات المواليد",
    imagine: "📉👶 رسم بياني يهبط وطفل"
};

HELP_DATA["sprach2_exam11_6"] = {
    text: "sondern stören mit ihrem Lachen und lauten Sprechen die anderen (kinderlosen) Gäste",
    meaning: "بل يزعجون الضيوف الآخرين (بدون أطفال) بضحكاتهم وكلامهم العالي",
    keywords: ["sondern = بل", "stören = يزعجون", "kinderlosen = بدون أطفال"],
    simplified: "الآباء مهمشون في المطاعم لأن أطفالهم يُنظر إليهم على أنهم مصدر إزعاج",
    imagine: "🍽️😠👶 أطفال يصدرون ضوضاء ورواد غاضبون"
};

HELP_DATA["sprach2_exam11_7"] = {
    text: "stört das niemanden",
    meaning: "لا يزعج ذلك أحداً",
    keywords: ["niemanden = لا أحد", "stört = يزعج", "das = ذلك"],
    simplified: "الكبار يمارسون سلوكاً مشابهاً دون توبيخ",
    imagine: "📱🗣️ شخص يتحدث بهاتفه بصوت عالٍ"
};

HELP_DATA["sprach2_exam11_8"] = {
    text: "weil die Kinder die Ruhe der benachbarten (kinderlosen) Hausbewohner stören",
    meaning: "لأن الأطفال يزعجون هدوء سكان المنازل المجاورة (بدون أطفال)",
    keywords: ["weil = لأن", "Kinder = أطفال", "Ruhe = هدوء"],
    simplified: "الجيران يتذمرون من ضجيج الأطفال ويقاضون الحضانة",
    imagine: "⚖️🏢 محكمة ومبنى"
};

HELP_DATA["sprach2_exam11_9"] = {
    text: "dass mit einem Kinderwagen kein Durchkommen ist",
    meaning: "أنه لا يمكن المرور بعربة الأطفال",
    keywords: ["dass = أن", "Kinderwagen = عربة أطفال", "Durchkommen = مرور"],
    simplified: "ممرات القطار لا تستوعب عربات الأطفال",
    imagine: "🚆🚫 قطار وعربة أطفال"
};

HELP_DATA["sprach2_exam11_10"] = {
    text: "Anspruch auf einen Platz",
    meaning: "الحق في مقعد",
    keywords: ["auf = في", "Platz = مقعد", "Anspruch = حق"],
    simplified: "الركاب البالغون يطالبون بمقاعدهم بحجة التعب",
    imagine: "🪑👩 أم واقفة"
};

// ============================================
// Exam 12 (exam12.json) - Deutschland – ein Paradies für Kinder? (معدل 2)
// ============================================

HELP_DATA["sprach2_exam12_1"] = {
    text: "steht ein Betreuungsplatz in einer Kindertagesstätte zur Verfügung",
    meaning: "يتوفر مكان رعاية في روضة أطفال",
    keywords: ["zur = لـ", "Verfügung = التوفر", "Betreuungsplatz = مكان رعاية"],
    simplified: "أماكن الحضانة لا تكفي سوى عُشر الأطفال",
    imagine: "🏫👶 روضة أطفال وطفل صغير"
};

HELP_DATA["sprach2_exam12_2"] = {
    text: "Dennoch wird die Elternzeit für viele Eltern in finanzieller Hinsicht zu einem gravierenden Problem",
    meaning: "ومع ذلك، تصبح إجازة الأبوة مشكلة خطيرة لكثير من الآباء من الناحية المالية",
    keywords: ["Dennoch = ومع ذلك", "Elternzeit = إجازة أبوة", "Problem = مشكلة"],
    simplified: "اقتصادياً، قد تكون الإجازة الوالدية مرهقة للعائلات",
    imagine: "💰😟 نقود ووجه قلق"
};

HELP_DATA["sprach2_exam12_3"] = {
    text: "Kind und Karriere zu vereinbaren ist daher für die meisten Mütter so gut wie unmöglich",
    meaning: "لذلك يكاد يكون من المستحيل التوفيق بين الطفل والمهنة بالنسبة لمعظم الأمهات",
    keywords: ["vereinbaren = التوفيق", "Karriere = مهنة", "unmöglich = مستحيل"],
    simplified: "المرأة الألمانية تواجه صعوبة بالغة في الجمع بين العمل والأمومة",
    imagine: "👩‍💼👶 امرأة عاملة وطفل"
};

HELP_DATA["sprach2_exam12_4"] = {
    text: "stört das niemanden",
    meaning: "لا يزعج ذلك أحداً",
    keywords: ["niemanden = لا أحد", "stört = يزعج", "das = ذلك"],
    simplified: "الكبار يمارسون سلوكاً مشابهاً دون توبيخ",
    imagine: "📱🗣️ شخص يتحدث بهاتفه بصوت عالٍ"
};

HELP_DATA["sprach2_exam12_5"] = {
    text: "weil die Kinder die Ruhe der benachbarten (kinderlosen) Hausbewohner stören",
    meaning: "لأن الأطفال يزعجون هدوء سكان المنازل المجاورة (بدون أطفال)",
    keywords: ["weil = لأن", "Kinder = أطفال", "Ruhe = هدوء"],
    simplified: "الجيران يتذمرون من ضجيج الأطفال ويقاضون الحضانة",
    imagine: "⚖️🏢 محكمة ومبنى"
};

HELP_DATA["sprach2_exam12_6"] = {
    text: "Spielplätze werden von Gerichts wegen geschlossen",
    meaning: "يتم إغلاق الملاعب بأمر من المحكمة",
    keywords: ["werden = يتم", "geschlossen = إغلاق", "Gerichts = محكمة"],
    simplified: "الأنشطة الترفيهية للأطفال محظورة الآن في بعض المناطق",
    imagine: "🚫🛝 لافتة ممنوع وأرجوحة"
};

HELP_DATA["sprach2_exam12_7"] = {
    text: "dass mit einem Kinderwagen kein Durchkommen ist",
    meaning: "أنه لا يمكن المرور بعربة الأطفال",
    keywords: ["dass = أن", "Kinderwagen = عربة أطفال", "Durchkommen = مرور"],
    simplified: "ممرات القطار لا تستوعب عربات الأطفال",
    imagine: "🚆🚫 قطار وعربة أطفال"
};

HELP_DATA["sprach2_exam12_8"] = {
    text: "haben sich schon andere Reisende breitgemacht",
    meaning: "مسافرون آخرون استولوا بالفعل على المكان",
    keywords: ["sich = أنفسهم", "breitgemacht = استولوا", "Reisende = مسافرون"],
    simplified: "المقاعد المخصصة للأمهات تحتلها شخصيات أخرى",
    imagine: "👤🪑 رجل جالس في مقعد مخصص للأم"
};

HELP_DATA["sprach2_exam12_9"] = {
    text: "Anspruch auf einen Platz",
    meaning: "الحق في مقعد",
    keywords: ["auf = في", "Platz = مقعد", "Anspruch = حق"],
    simplified: "الركاب البالغون يطالبون بمقاعدهم بحجة التعب",
    imagine: "🪑👩 أم واقفة"
};

HELP_DATA["sprach2_exam12_10"] = {
    text: "Man meint dabei die Kinder",
    meaning: "بذلك يقصدون الأطفال",
    keywords: ["dabei = بذلك", "meint = يقصدون", "Kinder = أطفال"],
    simplified: "وسائل الإعلام تصف الأطفال في سياق المشاكل",
    imagine: "📺👶 تلفاز وطفل"
};

// ============================================
// Exam 13 (exam13.json) - Das Schicksal des Braunbären
// ============================================

HELP_DATA["sprach2_exam13_1"] = {
    text: "während der vergangen 12000 Jahre",
    meaning: "خلال الـ 12000 سنة الماضية",
    keywords: ["während = خلال", "vergangen = الماضية", "Jahre = سنوات"],
    simplified: "التغير المناخي على مدى 12 ألف سنة أثر على الدببة",
    imagine: "🐻📆 دب وتقويم"
};

HELP_DATA["sprach2_exam13_2"] = {
    text: "Dadurch wurde der Lebensraum der Tiere verkleinert",
    meaning: "وبذلك تضاءلت مساحة موطن الحيوانات",
    keywords: ["Dadurch = وبذلك", "Lebensraum = موطن", "verkleinert = تضاءلت"],
    simplified: "تقلص موطن الدببة البنية مع ارتفاع درجات الحرارة",
    imagine: "🗺️📉 خريطة منطقتها تتناقص"
};

HELP_DATA["sprach2_exam13_3"] = {
    text: "dass das Verschwinden der Braunbären mit der Landnutzung durch den Menschen zusammenhängt",
    meaning: "اختفاء الدببة البنية مرتبط باستخدام الأراضي من قبل البشر",
    keywords: ["dass = أن", "Verschwinden = اختفاء", "Landnutzung = استخدام الأراضي"],
    simplified: "من الثابت علمياً أن الزراعة أثرت على الدببة",
    imagine: "🚜🐻 جرار ودب"
};

HELP_DATA["sprach2_exam13_4"] = {
    text: "Wintertemperatur ist in weiten Teilen Europas um zwei bis vier Grad angestiegen",
    meaning: "ارتفعت درجة حرارة الشتاء في معظم أنحاء أوروبا بمقدار درجتين إلى أربع درجات",
    keywords: ["um = بمقدار", "angestiegen = ارتفعت", "Wintertemperatur = درجة حرارة الشتاء"],
    simplified: "الشتاء الأكثر دفئاً يقلل من سبات الدببة",
    imagine: "🌡️📈 ميزان حرارة مرتفع"
};

HELP_DATA["sprach2_exam13_5"] = {
    text: "bekamen die Braunbären weniger Nachkommen",
    meaning: "أنجبت الدببة البنية عدداً أقل من الأشبال",
    keywords: ["Nachkommen = ذرية", "weniger = أقل", "bekamen = أنجبت"],
    simplified: "ضعف التكاثر أدى إلى تقلص أعدادها",
    imagine: "🐻❌🐻‍❄️ دبان مع خط متقاطع"
};

HELP_DATA["sprach2_exam13_6"] = {
    text: "Der Grund dafür ist",
    meaning: "السبب في ذلك هو",
    keywords: ["dafür = في ذلك", "Grund = سبب", "ist = هو"],
    simplified: "الإجابة تكمن في علم وظائف الأعضاء وعلاقته بالطقس",
    imagine: "🔍🐻 بحث ودب"
};

HELP_DATA["sprach2_exam13_7"] = {
    text: "denn sie bringen im Winter ihre Jungen zur Welt",
    meaning: "لأنها تلد صغارها في الشتاء",
    keywords: ["denn = لأن", "Winter = شتاء", "Jungen = صغارها"],
    simplified: "الدببة تحتاج لطاقة إضافية للولادة في الشتاء",
    imagine: "🥶🐻 والدة دب في عرين ثلجي"
};

HELP_DATA["sprach2_exam13_8"] = {
    text: "begünstigten auch die menschlichen Eingriffe",
    meaning: "شجعت أيضاً التدخلات البشرية",
    keywords: ["Eingriffe = تدخلات", "menschlichen = بشرية", "begünstigten = شجعت"],
    simplified: "الطقس الأكثر دفئاً ساعد المزارعين على التوسع في موطن الدببة",
    imagine: "🚜🌲 جرار وأشجار مقطوعة"
};

HELP_DATA["sprach2_exam13_9"] = {
    text: "Am Ende der letzten Eiszeit war der Braunbär noch überall in Europa heimisch",
    meaning: "في نهاية العصر الجليدي الأخير، كان الدب البني لا يزال موطنه في كل مكان في أوروبا",
    keywords: ["noch = لا يزال", "Eiszeit = عصر جليدي", "heimisch = موطنه"],
    simplified: "الدببة كانت منتشرة في كل أوروبا ذات يوم",
    imagine: "🗺️🐻 خريطة بأوروبا مملوءة بدببة"
};

HELP_DATA["sprach2_exam13_10"] = {
    text: "ging es mit dem Braunbären aber vor etwa 2000 Jahren bergab",
    meaning: "لكن أوضاع الدب البني تدهورت منذ حوالي 2000 عام",
    keywords: ["ging = تدهورت", "bergab = إلى الأسفل", "Braunbären = دب بني"],
    simplified: "منذ ألفي عام، بدأ عدد الدببة في التناقص السريع",
    imagine: "📉🐻 رسم بياني هابط مع دب"
};

// ============================================
// Exam 14 (exam14.json) - Das Schicksal des Braunbären (معدل)
// ============================================

HELP_DATA["sprach2_exam14_1"] = {
    text: "während der vergangen 12000 Jahre",
    meaning: "خلال الـ 12000 سنة الماضية",
    keywords: ["während = خلال", "vergangen = الماضية", "Jahre = سنوات"],
    simplified: "التغير المناخي على مدى 12 ألف سنة أثر على الدببة",
    imagine: "🐻📆 دب وتقويم"
};

HELP_DATA["sprach2_exam14_2"] = {
    text: "Dadurch wurde der Lebensraum der Tiere verkleinert",
    meaning: "وبذلك تضاءلت مساحة موطن الحيوانات",
    keywords: ["Dadurch = وبذلك", "Lebensraum = موطن", "verkleinert = تضاءلت"],
    simplified: "تقلص موطن الدببة البنية مع ارتفاع درجات الحرارة",
    imagine: "🗺️📉 خريطة منطقتها تتناقص"
};

HELP_DATA["sprach2_exam14_3"] = {
    text: "dass das Verschwinden der Braunbären mit der Landnutzung durch den Menschen zusammenhängt",
    meaning: "اختفاء الدببة البنية مرتبط باستخدام الأراضي من قبل البشر",
    keywords: ["dass = أن", "Verschwinden = اختفاء", "Landnutzung = استخدام الأراضي"],
    simplified: "من الثابت علمياً أن الزراعة أثرت على الدببة",
    imagine: "🚜🐻 جرار ودب"
};

HELP_DATA["sprach2_exam14_4"] = {
    text: "Wintertemperatur ist in weiten Teilen Europas um zwei bis vier Grad angestiegen",
    meaning: "ارتفعت درجة حرارة الشتاء في معظم أنحاء أوروبا بمقدار درجتين إلى أربع درجات",
    keywords: ["um = بمقدار", "angestiegen = ارتفعت", "Wintertemperatur = درجة حرارة الشتاء"],
    simplified: "الشتاء الأكثر دفئاً يقلل من سبات الدببة",
    imagine: "🌡️📈 ميزان حرارة مرتفع"
};

HELP_DATA["sprach2_exam14_5"] = {
    text: "bekamen die Braunbären weniger Nachkommen",
    meaning: "أنجبت الدببة البنية عدداً أقل من الأشبال",
    keywords: ["Nachkommen = ذرية", "weniger = أقل", "bekamen = أنجبت"],
    simplified: "ضعف التكاثر أدى إلى تقلص أعدادها",
    imagine: "🐻❌🐻‍❄️ دبان مع خط متقاطع"
};

HELP_DATA["sprach2_exam14_6"] = {
    text: "Der Grund dafür ist",
    meaning: "السبب في ذلك هو",
    keywords: ["dafür = في ذلك", "Grund = سبب", "ist = هو"],
    simplified: "الإجابة تكمن في علم وظائف الأعضاء وعلاقته بالطقس",
    imagine: "🔍🐻 بحث ودب"
};

HELP_DATA["sprach2_exam14_7"] = {
    text: "denn sie bringen im Winter ihre Jungen zur Welt",
    meaning: "لأنها تلد صغارها في الشتاء",
    keywords: ["denn = لأن", "Winter = شتاء", "Jungen = صغارها"],
    simplified: "الدببة تحتاج لطاقة إضافية للولادة في الشتاء",
    imagine: "🥶🐻 والدة دب في عرين ثلجي"
};

HELP_DATA["sprach2_exam14_8"] = {
    text: "begünstigten auch die menschlichen Eingriffe",
    meaning: "شجعت أيضاً التدخلات البشرية",
    keywords: ["Eingriffe = تدخلات", "menschlichen = بشرية", "begünstigten = شجعت"],
    simplified: "الطقس الأكثر دفئاً ساعد المزارعين على التوسع في موطن الدببة",
    imagine: "🚜🌲 جرار وأشجار مقطوعة"
};

HELP_DATA["sprach2_exam14_9"] = {
    text: "Am Ende der letzten Eiszeit war der Braunbär noch überall in Europa heimisch",
    meaning: "في نهاية العصر الجليدي الأخير، كان الدب البني لا يزال موطنه في كل مكان في أوروبا",
    keywords: ["noch = لا يزال", "Eiszeit = عصر جليدي", "heimisch = موطنه"],
    simplified: "الدببة كانت منتشرة في كل أوروبا ذات يوم",
    imagine: "🗺️🐻 خريطة بأوروبا مملوءة بدببة"
};

HELP_DATA["sprach2_exam14_10"] = {
    text: "ging es mit dem Braunbären aber vor etwa 2000 Jahren bergab",
    meaning: "لكن أوضاع الدب البني تدهورت منذ حوالي 2000 عام",
    keywords: ["ging = تدهورت", "bergab = إلى الأسفل", "Braunbären = دب بني"],
    simplified: "منذ ألفي عام، بدأ عدد الدببة في التناقص السريع",
    imagine: "📉🐻 رسم بياني هابط مع دب"
};

// ============================================
// Exam 15 (exam15.json) - Was steckt hinter Bio?
// ============================================

HELP_DATA["sprach2_exam15_1"] = {
    text: "ob Bio-Produkte nun auch wirklich die gesünderen sind",
    meaning: "هل المنتجات العضوية هي حقاً الأكثر صحة",
    keywords: ["ob = هل", "Bio-Produkte = منتجات عضوية", "gesünderen = أكثر صحة"],
    simplified: "هل الأطعمة العضوية تستحق السعر الأعلى؟",
    imagine: "❓🥦 علامة استفهام وبروكلي"
};

HELP_DATA["sprach2_exam15_2"] = {
    text: "Außerdem sind Bio-Produkte teurer",
    meaning: "بالإضافة إلى ذلك، المنتجات العضوية أغلى ثمناً",
    keywords: ["Außerdem = بالإضافة إلى ذلك", "teurer = أغلى ثمناً", "Bio-Produkte = منتجات عضوية"],
    simplified: "التكلفة الأعلى تثير الشكوك حول الجودة",
    imagine: "💰❓ نقود وعلامة استفهام"
};

HELP_DATA["sprach2_exam15_3"] = {
    text: "Sie enthalten weniger Nitrat, mehr Nährstoffe",
    meaning: "تحتوي على نترات أقل ومغذيات أكثر",
    keywords: ["enthalten = تحتوي", "Nitrat = نترات", "Nährstoffe = مغذيات"],
    simplified: "الخضروات العضوية أكثر فائدة غنائية",
    imagine: "🥬💪 خضار وعضلات"
};

HELP_DATA["sprach2_exam15_4"] = {
    text: "Bei vielen Verbrauchern steht hinter ihrem Einkaufsverhalten ein ökologisches Bewusstsein",
    meaning: "خلف سلوك الشراء لدى العديد من المستهلكين وعي بيئي",
    keywords: ["hinter = خلف", "Einkaufsverhalten = سلوك شراء", "ökologisches Bewusstsein = وعي بيئي"],
    simplified: "العديد من العملاء يشترون عضوياً لدافع بيئي",
    imagine: "🛒🌍 سلة تسوق وكوكب أرض"
};

HELP_DATA["sprach2_exam15_5"] = {
    text: "Sie entlastet unsere Umwelt",
    meaning: "إنها تخفف العبء على بيئتنا",
    keywords: ["entlastet = تخفف العبء", "Umwelt = بيئة", "unsere = بيئتنا"],
    simplified: "المنتج العضوي يعني كوكباً أكثر صحة",
    imagine: "🌿❤️ نبات قلب"
};

HELP_DATA["sprach2_exam15_6"] = {
    text: "kommen aus ökologischer Landwirtschaft",
    meaning: "تأتي من الزراعة العضوية",
    keywords: ["aus = من", "ökologischer Landwirtschaft = زراعة عضوية", "kommen = تأتي"],
    simplified: "الأطعمة العضوية تُزرع بنظام بيئي متوازن",
    imagine: "🌱🚜 مزرعة عضوية"
};

HELP_DATA["sprach2_exam15_7"] = {
    text: "auf Wochenmärkten oder in Bio-Supermärkten",
    meaning: "في أسواق الأسبوع أو متاجر الأغذية العضوية الكبرى",
    keywords: ["auf = في", "Wochenmärkten = أسواق أسبوعية", "Bio-Supermärkten = متاجر عضوية"],
    simplified: "يمكن العثور على المنتجات العضوية في الأسواق الخارجية ومتاجر التجزئة المتخصصة",
    imagine: "🏪🥬 متجر وخضار"
};

HELP_DATA["sprach2_exam15_8"] = {
    text: "dürfen weder Kunstdünger noch chemische Schädlingsbekämpfungsmittel verwendet werden",
    meaning: "لا يجوز استخدام الأسمدة الاصطناعية ولا مبيدات الآفات الكيميائية",
    keywords: ["verwendet = استخدام", "Kunstdünger = أسمدة اصطناعية", "Schädlingsbekämpfungsmittel = مبيدات آفات"],
    simplified: "الزراعة العضوية تمنع استخدام المواد الكيميائية الصناعية",
    imagine: "🚫🧪 علامة منع وأنبوب اختبار"
};

HELP_DATA["sprach2_exam15_9"] = {
    text: "dürfen wirklich nur Bio-Lebensmittel benutzt werden",
    meaning: "يُسمح باستخدام الأطعمة العضوية فقط حقاً",
    keywords: ["wirklich = حقاً", "Bio-Lebensmittel = أطعمة عضوية", "benutzt = استخدام"],
    simplified: "الوصفة العضوية الحقيقية تتطلب مكونات عضوية معتمدة",
    imagine: "✅🍪 كعكة وعلامة صح"
};

HELP_DATA["sprach2_exam15_10"] = {
    text: "die garantieren, dass die Produkte wirklich 'bio' sind",
    meaning: "التي تضمن أن المنتجات عضوية حقاً",
    keywords: ["dass = أن", "garantieren = تضمن", "Produkte = منتجات"],
    simplified: "العلامات تمنح المستهلك الثقة بأن المنتج يتبع معايير صارمة",
    imagine: "🔖✅ ملصق وعلامة صح"
};
// ============================================
// Exam 16 (exam16.json) - Was genau sind eigentlich Bio-Lebensmittel (معدل)
// ============================================

HELP_DATA["sprach2_exam16_1"] = {
    text: "ob Bio-Produkte denn wirklich gesünder sind als herkömmliche Produkte",
    meaning: "هل المنتجات العضوية حقاً أكثر صحة من المنتجات التقليدية",
    keywords: ["ob = هل", "wirklich = حقاً", "gesünder = أكثر صحة"],
    simplified: "يتساءل الناس إذا كانت الأغذية العضوية تستحق السعر الأعلى",
    imagine: "❓🥦 علامة استفهام مع بروكلي عضوي"
};

HELP_DATA["sprach2_exam16_2"] = {
    text: "Außerdem sind Bio-Produkte teurer",
    meaning: "بالإضافة إلى ذلك، المنتجات العضوية أغلى ثمناً",
    keywords: ["Außerdem = بالإضافة إلى ذلك", "teurer = أغلى", "Bio-Produkte = منتجات عضوية"],
    simplified: "التكلفة المرتفعة تجعل المستهلكين يفكرون مرتين",
    imagine: "💰❓ نقود مع علامة استفهام"
};

HELP_DATA["sprach2_exam16_3"] = {
    text: "Sie enthalten weniger Nitrat, mehr Nährstoffe",
    meaning: "تحتوي على نترات أقل ومغذيات أكثر",
    keywords: ["enthalten = تحتوي", "Nitrat = نترات", "Nährstoffe = مغذيات"],
    simplified: "المنتجات العضوية أكثر فائدة وغنى بالعناصر الغذائية",
    imagine: "🥬📈 خضار مع رسم بياني مرتفع"
};

HELP_DATA["sprach2_exam16_4"] = {
    text: "steht ein ökologisches Bewusstsein hinter ihrem Einkaufsverhalten",
    meaning: "يوجد وعي بيئي وراء سلوكهم الشرائي",
    keywords: ["hinter = خلف", "ökologisches Bewusstsein = وعي بيئي", "Einkaufsverhalten = سلوك شرائي"],
    simplified: "الكثير من الناس يشترون عضوياً بدافع حماية الطبيعة",
    imagine: "🛒🌍 عربة تسوق مع كرة أرضية"
};

HELP_DATA["sprach2_exam16_5"] = {
    text: "weil sie unsere Umwelt entlastet",
    meaning: "لأنها تخفف العبء على بيئتنا",
    keywords: ["entlastet = تخفف العبء", "Umwelt = بيئة", "unsere = بيئتنا"],
    simplified: "الزراعة العضوية أفضل للبيئة",
    imagine: "🌿💚 نبات مع قلب أخضر"
};

HELP_DATA["sprach2_exam16_6"] = {
    text: "kommen aus ökologischer Landwirtschaft",
    meaning: "تأتي من الزراعة العضوية",
    keywords: ["aus = من", "ökologischer Landwirtschaft = زراعة عضوية", "kommen = تأتي"],
    simplified: "المنتج العضوي مصدره مزارع مستدامة",
    imagine: "🚜🌾 جرار زراعي مع حقل أخضر"
};

HELP_DATA["sprach2_exam16_7"] = {
    text: "auf Wochenmärkten oder in Bio-Supermärkten",
    meaning: "في أسواق الأسبوع أو متاجر الأغذية العضوية",
    keywords: ["auf = في", "Wochenmärkten = أسواق أسبوعية", "Bio-Supermärkten = متاجر عضوية"],
    simplified: "تتوفر المنتجات العضوية في أماكن متعددة",
    imagine: "🏪🥬 متجر صغير مع خضار"
};

HELP_DATA["sprach2_exam16_8"] = {
    text: "dürfen weder Kunstdünger noch chemische Schädlingsbekämpfungsmittel verwendet werden",
    meaning: "لا يجوز استخدام الأسمدة الاصطناعية ولا مبيدات الآفات الكيميائية",
    keywords: ["verwendet = استخدام", "Kunstdünger = أسمدة اصطناعية", "Schädlingsbekämpfungsmittel = مبيدات آفات"],
    simplified: "الزراعة العضوية تحظر الكيماويات الضارة",
    imagine: "🚫🧪 علامة منع مع أنبوب اختبار"
};

HELP_DATA["sprach2_exam16_9"] = {
    text: "dürfen wirklich nur Bio-Lebensmittel benutzt werden",
    meaning: "يُسمح باستخدام الأطعمة العضوية فقط حقاً",
    keywords: ["wirklich = حقاً", "Bio-Lebensmittel = أطعمة عضوية", "benutzt = استخدام"],
    simplified: "الكعكة العضوية تتطلب مكونات عضوية معتمدة",
    imagine: "✅🍰 كعكة مع علامة صح"
};

HELP_DATA["sprach2_exam16_10"] = {
    text: "dass die Produkte wirklich 'bio' sind",
    meaning: "أن المنتجات عضوية حقاً",
    keywords: ["dass = أن", "wirklich = حقاً", "bio = عضوية"],
    simplified: "الختم الرسمي يضمن لك الجودة العضوية",
    imagine: "🔖✅ ملصق مع علامة صح"
};

// ============================================
// Exam 17 (exam17.json) - Sicherer Schulweg
// ============================================

HELP_DATA["sprach2_exam17_1"] = {
    text: "deshalb ist es wichtig, dass Eltern sich den besten Schulweg überlegen",
    meaning: "لذلك من المهم أن يفكر الآباء في أفضل طريق للمدرسة",
    keywords: ["deshalb = لذلك", "wichtig = مهم", "Schulweg = طريق المدرسة"],
    simplified: "لذلك يجب على الآباء مساعدة أطفالهم في اختيار الطريق الآمن",
    imagine: "👩‍👧‍👦🗺️ أم مع طفل وخريطة"
};

HELP_DATA["sprach2_exam17_2"] = {
    text: "Nicht immer ist der kürzeste Weg auch der ungefährlichste",
    meaning: "ليس دائماً أقصر طريق هو الأكثر أماناً",
    keywords: ["Nicht = ليس", "kürzeste = أقصر", "ungefährlichste = أآمن"],
    simplified: "الطريق القصير قد لا يكون الخيار الأكثر أماناً للأطفال",
    imagine: "⚠️🗺️ طريق قصير مع علامة خطر"
};

HELP_DATA["sprach2_exam17_3"] = {
    text: "sich voll auf das Kind konzentrieren",
    meaning: "التركيز بشكل كامل على الطفل",
    keywords: ["konzentrieren = التركيز", "voll = كامل", "Kind = طفل"],
    simplified: "يجب أن يكرس الآباء وقتهم الكامل للتدريب",
    imagine: "🧠👧 عقل مع طفلة صغيرة"
};

HELP_DATA["sprach2_exam17_4"] = {
    text: "sich auch selbst daran halten",
    meaning: "الالتزام بها بأنفسهم أيضاً",
    keywords: ["selbst = بأنفسهم", "halten = الالتزام", "daran = بها"],
    simplified: "يجب أن يكون الآباء قدوة حسنة لأطفالهم",
    imagine: "👨‍👦✨ أب مع طفل ونجوم"
};

HELP_DATA["sprach2_exam17_5"] = {
    text: "Manchmal ist es hilfreich, wenn die Großen sich von ihren Kindern erzählen lassen",
    meaning: "أحياناً من المفيد أن يستمع الكبار لأطفالهم",
    keywords: ["hilfreich = مفيد", "Großen = كبار", "erzählen = يروي"],
    simplified: "الأطفال يرون الشارع بشكل مختلف، لذا من المفيد الاستماع لهم",
    imagine: "👧🗣️👩 طفلة تتحدث وأم تستمع"
};

HELP_DATA["sprach2_exam17_6"] = {
    text: "Schritt für Schritt verlängern",
    meaning: "تمديدها خطوة بخطوة",
    keywords: ["Schritt = خطوة", "für = بخطوة", "verlängern = تمديد"],
    simplified: "تدريجياً يمكن زيادة المسافة التي يقطعها الطفل بمفرده",
    imagine: "➡️➡️ أسهم متتالية"
};

HELP_DATA["sprach2_exam17_7"] = {
    text: "die wichtigsten Regeln für das Verhalten im Straßenverkehr",
    meaning: "أهم القواعد للسلوك في حركة المرور",
    keywords: ["Verhalten = سلوك", "Straßenverkehr = حركة المرور", "Regeln = قواعد"],
    simplified: "مراجعة قواعد السلامة على الطريق مع الأطفال",
    imagine: "🚦📋 إشارة مرور مع قائمة"
};

HELP_DATA["sprach2_exam17_8"] = {
    text: "kritische Situationen besprechen",
    meaning: "مناقشة المواقف الحرجة",
    keywords: ["kritische = حرجة", "Situationen = مواقف", "besprechen = مناقشة"],
    simplified: "التحدث عن أسوأ السيناريوهات المحتملة",
    imagine: "⚠️💭 خطر مع فقاعة تفكير"
};

HELP_DATA["sprach2_exam17_9"] = {
    text: "lernt das Kind, sich selbstbewusst im Straßenverkehr zu verhalten",
    meaning: "يتعلم الطفل التصرف بثقة في حركة المرور",
    keywords: ["selbstbewusst = بثقة", "verhalten = التصرف", "Straßenverkehr = حركة المرور"],
    simplified: "الممارسة تبني ثقة الطفل بنفسه على الطريق",
    imagine: "🧒💪 طفل يظهر عضلاته"
};

HELP_DATA["sprach2_exam17_10"] = {
    text: "selbstständig Lösungen zu finden",
    meaning: "إيجاد حلول بشكل مستقل",
    keywords: ["selbstständig = بشكل مستقل", "Lösungen = حلول", "finden = إيجاد"],
    simplified: "الهدف النهائي هو تعليم الطفل كيف يحل مشاكله بنفسه",
    imagine: "🧒🔍 طفل يبحث في خريطة"
};

// ============================================
// Exam 18 (exam18.json) - Der Hund als intelligentes Wesen
// ============================================

HELP_DATA["sprach2_exam18_1"] = {
    text: "was ihre Intelligenz betrifft",
    meaning: "فيما يتعلق بذكائهم",
    keywords: ["was = ما", "Intelligenz = ذكاء", "betrifft = يتعلق"],
    simplified: "كان يُعتقد أن الكلاب ذكاءها محدود",
    imagine: "🐕❓ كلب وعلامة استفهام"
};

HELP_DATA["sprach2_exam18_2"] = {
    text: "jetzt haben wissenschaftliche Experimente die Hundeehre gerettet",
    meaning: "الآن الأنشطة العلمية أنقذت سمعة الكلاب",
    keywords: ["jetzt = الآن", "Experimente = تجارب", "gerettet = أنقذت"],
    simplified: "أثبتت التجارب أن الكلاب أذكى مما كنا نظن",
    imagine: "🔬🐕 مختبر وكلب"
};

HELP_DATA["sprach2_exam18_3"] = {
    text: "an der Universität Wien",
    meaning: "في جامعة فيينا",
    keywords: ["an = في", "Universität = جامعة", "Wien = فيينا"],
    simplified: "العلماء في جامعات النمسا درسوا قدرات الكلاب",
    imagine: "🏛️🎓 مبنى جامعي وقبعة تخرج"
};

HELP_DATA["sprach2_exam18_4"] = {
    text: "aus verschiedenen Bildern das richtige auswählen",
    meaning: "اختيار الصورة الصحيحة من بين صور مختلفة",
    keywords: ["aus = من", "verschiedenen = مختلفة", "richtige = الصحيحة"],
    simplified: "تم تدريب الكلب على التمييز بين الصور",
    imagine: "🖼️🐕 كلب ينظر إلى صور"
};

HELP_DATA["sprach2_exam18_5"] = {
    text: "darauf entweder einen Menschen oder eine Landschaft erkennen",
    meaning: "عليها التعرف إما على شخص أو منظر طبيعي",
    keywords: ["darauf = عليها", "entweder = إما", "erkennen = التعرف"],
    simplified: "الكلب يتعلم الفرق بين صورة إنسان وصورة طبيعة",
    imagine: "👤🖼️🐕 شخص وصورة وكلب"
};

HELP_DATA["sprach2_exam18_6"] = {
    text: "so dass der Hund mit der Schnauze auf das jeweils richtige Bild tippen konnte",
    meaning: "بحيث يمكن للكلب النقر بخطمه على الصورة الصحيحة",
    keywords: ["so dass = بحيث", "Schnauze = خطم", "tippen = النقر"],
    simplified: "الشاشة تعمل باللمس لتسجيل اختيارات الكلب",
    imagine: "🐕👆 كلب يضغط على شاشة بخطمه"
};

HELP_DATA["sprach2_exam18_7"] = {
    text: "nicht nur mit einer ähnlichen Begeisterung am Bildschirm hing",
    meaning: "لم يكن فقط بحماس مماثل أمام الشاشة",
    keywords: ["nicht nur = ليس فقط", "Begeisterung = حماس", "hing = التصق"],
    simplified: "الكلب تفاعل بحماس كبير أثناء التجربة",
    imagine: "🐕🖥️ كلب متحمس أمام الكمبيوتر"
};

HELP_DATA["sprach2_exam18_8"] = {
    text: "von denen eins Futter enthielt",
    meaning: "أحدهما يحتوي على طعام",
    keywords: ["denen = أحدهما", "eins = واحد", "Futter = طعام"],
    simplified: "وعاءان، واحد فقط به طعام مخفي",
    imagine: "🥣❓ وعاء وعلامة استفهام"
};

HELP_DATA["sprach2_exam18_9"] = {
    text: "dass bestimmte Muster menschlicher Gestik und Mimik von den Hunden sehr treffsicher interpretiert werden können",
    meaning: "أن الكلاب تستطيع تفسير أنماط معينة من الإيماءات وتعبيرات الوجه البشرية بدقة عالية",
    keywords: ["dass = أن", "Gestik = إيماءات", "Mimik = تعابير وجه"],
    simplified: "الكلب يفهم الإشارات البشرية دون تدريب",
    imagine: "🐕👀 كلب ينظر إلى شخص يشير"
};

HELP_DATA["sprach2_exam18_10"] = {
    text: "brachten keine vergleichbaren Resultate",
    meaning: "لم تحقق نتائج مماثلة",
    keywords: ["keine = لا", "vergleichbaren = مماثلة", "Resultate = نتائج"],
    simplified: "الذئاب لم تظهر نفس المستوى من الفهم",
    imagine: "🐺❌ ذئب وعلامة منع"
};

// ============================================
// Exam 19 (exam19.json) - Die wichtigsten Regeln auf der Skipiste
// ============================================

HELP_DATA["sprach2_exam19_1"] = {
    text: "muss auch mit rechtlichen Folgen rechnen",
    meaning: "يجب أن يتوقع عواقب قانونية أيضاً",
    keywords: ["rechnen = يتوقع", "rechtlichen Folgen = عواقب قانونية", "mit = مع"],
    simplified: "الإهمال على المنحدرات قد يؤدي إلى عقوبات",
    imagine: "⚖️⛷️ ميزان عدالة مع زلاجات"
};

HELP_DATA["sprach2_exam19_2"] = {
    text: "gültig",
    meaning: "ساري المفعول",
    keywords: ["gültig = ساري المفعول", "Strafgesetzbuch = قانون العقوبات", "ist = هو"],
    simplified: "القانون يطبق على الطرقات والمنحدرات الثلجية على حد سواء",
    imagine: "📜✅ مستند قانوني مع علامة صح"
};

HELP_DATA["sprach2_exam19_3"] = {
    text: "sieht das Gesetz Freiheitsstrafen bis zu 6 Monaten vor",
    meaning: "ينص القانون على عقوبات سجن تصل إلى 6 أشهر",
    keywords: ["vor = ينص", "Freiheitsstrafen = عقوبات سجن", "Gesetz = قانون"],
    simplified: "الإصابات الخطيرة قد تؤدي إلى السجن",
    imagine: "⚖️🔒 ميزان عدالة مع قفل"
};

HELP_DATA["sprach2_exam19_4"] = {
    text: "sollte diese Regeln kennen",
    meaning: "يجب أن يعرف هذه القواعد",
    keywords: ["sollte = يجب", "kennen = يعرف", "Regeln = قواعد"],
    simplified: "كل متزلج مطالب بمعرفة قانون المنحدرات",
    imagine: "📋⛷️ لائحة مع زلاجة"
};

HELP_DATA["sprach2_exam19_5"] = {
    text: "so verhalten, dass er keinen anderen gefährdet",
    meaning: "يتصرف بحيث لا يعرض الآخرين للخطر",
    keywords: ["so = بحيث", "verhalten = يتصرف", "gefährdet = يعرض للخطر"],
    simplified: "السلوك الآمن يمنع الحوادث على المنحدر",
    imagine: "⚠️🚫 علامة خطر وعلامة ممنوع"
};

HELP_DATA["sprach2_exam19_6"] = {
    text: "der eigenen Geschwindigkeit dem Gelände anpassen",
    meaning: "تكييف السرعة مع地形 (التضاريس)",
    keywords: ["anpassen = تكييف", "Geschwindigkeit = سرعة", "Gelände = تضاريس"],
    simplified: "يجب أن تتناسب سرعتك مع مستوى مهارتك والطقس",
    imagine: "🏔️📉 جبل ومقياس سرعة"
};

HELP_DATA["sprach2_exam19_7"] = {
    text: "allerdings immer in einem Abstand",
    meaning: "لكن دائماً بمسافة",
    keywords: ["allerdings = لكن", "immer = دائماً", "Abstand = مسافة"],
    simplified: "التجاوز مسموح به لكن بحذر وبمسافة كافية",
    imagine: "➡️⬅️ سهمان متقابلان"
};

HELP_DATA["sprach2_exam19_8"] = {
    text: "dürfen nur den Rand der Abfahrtstrecke benutzen",
    meaning: "يُسمح لهم باستخدام حافة مسار النزول فقط",
    keywords: ["Rand = حافة", "Abfahrtstrecke = مسار نزول", "benutzen = استخدام"],
    simplified: "المشي صعوداً على حافة المنحدر فقط",
    imagine: "⬆️⛷️ سهم لأعلى مع زلاجة"
};

HELP_DATA["sprach2_exam19_9"] = {
    text: "müssen eine solche Stelle so schnell wie möglich freimachen",
    meaning: "يجب إخلاء مثل هذا المكان في أسرع وقت ممكن",
    keywords: ["Stelle = مكان", "freimachen = إخلاء", "schnell = بسرعة"],
    simplified: "المناطق الخطرة يجب إخلاؤها فوراً لتجنب الاصطدامات",
    imagine: "⚠️🏔️ علامة خطر مع جبل"
};

HELP_DATA["sprach2_exam19_10"] = {
    text: "seine Personalien angeben",
    meaning: "تقديم بياناته الشخصية",
    keywords: ["angeben = تقديم", "Personalien = بيانات شخصية", "seine = بياناته"],
    simplified: "جميع المتزلجين مطالبون بتبادل المعلومات بعد حادث",
    imagine: "📝🆔 نموذج مع هوية شخصية"
};

// ============================================
// Exam 20 (exam20.json) - Kaffee und Kuchen – ein Stück Tradition
// ============================================

HELP_DATA["sprach2_exam20_1"] = {
    text: "trifft man sich am Sonntagnachmittag zu Kaffee und Kuchen",
    meaning: "يجتمع الناس بعد ظهر الأحد لتناول القهوة والكعك",
    keywords: ["zu = لتناول", "Kaffee = قهوة", "Kuchen = كعك"],
    simplified: "طقس ألماني أصيل: القهوة والكعك يوم الأحد",
    imagine: "☕🍰 كوب قهوة مع قطعة كعكة"
};

HELP_DATA["sprach2_exam20_2"] = {
    text: "Wie lange es den Brauch gibt, ist jedoch nicht bekannt",
    meaning: "لكن ليس معروفاً منذ متى يوجد هذا التقليد",
    keywords: ["Wie = منذ متى", "lange = طويلاً", "Brauch = تقليد"],
    simplified: "التقليد قديم جداً لدرجة أن تاريخ بدايته غير معروف",
    imagine: "❓📅 علامة استفهام مع تقويم"
};

HELP_DATA["sprach2_exam20_3"] = {
    text: "Sicher ist nur, dass sich dieses Getränk im 17. Jahrhundert in Europa verbreitete",
    meaning: "المؤكد فقط أن هذا المشروب انتشر في أوروبا في القرن السابع عشر",
    keywords: ["Sicher = مؤكد", "Getränk = مشروب", "verbreitete = انتشر"],
    simplified: "القهوة وصلت إلى أوروبا في القرن السابع عشر",
    imagine: "☕🚢 فنجان قهوة مع سفينة"
};

HELP_DATA["sprach2_exam20_4"] = {
    text: "Damals entstanden zahlreiche Kaffeehäuser",
    meaning: "في ذلك الوقت ظهرت العديد من المقاهي",
    keywords: ["Damals = في ذلك الوقت", "entstanden = ظهرت", "Kaffeehäuser = مقاهي"],
    simplified: "انتشرت ثقافة المقاهي في أوروبا",
    imagine: "🏛️☕ مقهى تاريخي مع فنجان قهوة"
};

HELP_DATA["sprach2_exam20_5"] = {
    text: "sondern man konnte in Gesellschaft sein",
    meaning: "بل كان المرء برفقة الآخرين",
    keywords: ["sondern = بل", "Gesellschaft = برفقة", "konnte = كان"],
    simplified: "المقهى لم يكن للطعام فقط، بل للتجمعات الاجتماعية",
    imagine: "👥☕ مجموعة من الناس في مقهى"
};

HELP_DATA["sprach2_exam20_6"] = {
    text: "wurde 1732 die berühmte Kaffeekantate von Johann Sebastian Bach uraufgeführt",
    meaning: "في عام 1732 تم عرض كانتاتا القهوة الشهيرة ليوهان سيباستيان باخ لأول مرة",
    keywords: ["von = بواسطة", "uraufgeführt = عرض لأول مرة", "Kaffeekantate = كانتاتا القهوة"],
    simplified: "باخ نفسه كرم القهوة بالموسيقى",
    imagine: "🎵☕ موسيقى مع فنجان قهوة"
};

HELP_DATA["sprach2_exam20_7"] = {
    text: "das sich nur Adelige und wohlhabende Bürger leisten konnten",
    meaning: "الذي لم يستطع تحمله سوى النبلاء والمواطنين الأثرياء",
    keywords: ["konnten = استطاعوا", "leisten = تحمل", "Adelige = نبلاء"],
    simplified: "القهوة كانت يوماً سلعة فاخرة للأغنياء",
    imagine: "👑☕ تاج مع فنجان قهوة"
};

HELP_DATA["sprach2_exam20_8"] = {
    text: "und ist es bis heute geblieben",
    meaning: "وبقي كذلك حتى اليوم",
    keywords: ["bis = حتى", "heute = اليوم", "geblieben = بقي"],
    simplified: "حافظت القهوة على مكانتها كمشروب مفضل",
    imagine: "🥇☕ ميدالية ذهبية مع فنجان قهوة"
};

HELP_DATA["sprach2_exam20_9"] = {
    text: "Spezialitäten aus aller Welt",
    meaning: "أطباق خاصة من جميع أنحاء العالم",
    keywords: ["aus = من", "aller Welt = جميع أنحاء العالم", "Spezialitäten = أطباق خاصة"],
    simplified: "تنوع القهوة العالمية يزين القوائم الآن",
    imagine: "🌍☕ كرة أرضية مع فنجان قهوة"
};

HELP_DATA["sprach2_exam20_10"] = {
    text: "setzten ihm immer häufiger Konkurrenz",
    meaning: "قدمت له منافسة بشكل متزايد",
    keywords: ["immer = بشكل متزايد", "häufiger = أكثر", "Konkurrenz = منافسة"],
    simplified: "أجهزة صنع القهوة الحديثة تنافس الآلة التقليدية",
    imagine: "☕⚙️ فنجان قهوة مع تروس"
};

// ============================================
// Exam 21 (exam21.json) - Fische sind schlauer, als wir denken
// ============================================

HELP_DATA["sprach2_exam21_1"] = {
    text: "genau das Gegenteil ist der Fall",
    meaning: "العكس تماماً هو الصحيح",
    keywords: ["genau = تماماً", "Gegenteil = عكس", "Fall = حالة"],
    simplified: "الحقيقة المعاكسة تماماً هي الصحيحة",
    imagine: "🐟❌ سمكة وعلامة منع"
};

HELP_DATA["sprach2_exam21_2"] = {
    text: "sie sind zu erstaunlichen kognitiven Leistungen fähig",
    meaning: "هم قادرون على قدرات إدراكية مذهلة",
    keywords: ["fähig = قادرون", "erstaunlichen = مذهلة", "kognitiven Leistungen = قدرات إدراكية"],
    simplified: "الأسماك تظهر مهارات عقلية مدهشة",
    imagine: "🧠🐟 دماغ مع سمكة"
};

HELP_DATA["sprach2_exam21_3"] = {
    text: "entwickelten sie hochspezialisierte Sinnesfähigkeiten",
    meaning: "طوروا قدرات حسية عالية التخصص",
    keywords: ["entwickelten = طوروا", "hochspezialisierte = عالية التخصص", "Sinnesfähigkeiten = قدرات حسية"],
    simplified: "مرور الوقت ساعد الأسماك على تطوير حواس فريدة",
    imagine: "👂🐟 أذن مع سمكة"
};

HELP_DATA["sprach2_exam21_4"] = {
    text: "lernen durch Beobachtung",
    meaning: "التعلم عن طريق الملاحظة",
    keywords: ["Beobachtung = ملاحظة", "lernen = تعلم", "durch = عن طريق"],
    simplified: "بعض أنواع الأسماك تتعلم بمشاهدة الآخرين",
    imagine: "👀🐟 عينان مع سمكة"
};

HELP_DATA["sprach2_exam21_5"] = {
    text: "wurde Fischen noch nicht einmal zugetraut, dass sie hören können",
    meaning: "لم يكن يُعتقد حتى أن الأسماك قادرة على السمع",
    keywords: ["noch nicht einmal = حتى لم", "zugetraut = يُعتقد", "hören = السمع"],
    simplified: "حتى الثلاثينيات، ظن الباحثون أن السمكة لا تسمع",
    imagine: "🔇🐟 سمكة وعلامة كتم صوت"
};

HELP_DATA["sprach2_exam21_6"] = {
    text: "bewies er übrigens auch als Erster",
    meaning: "أثبت بالمناسبة أيضاً أنه الأول",
    keywords: ["übrigens = بالمناسبة", "bewies = أثبت", "Erster = الأول"],
    simplified: "العالم نفسه اكتشف قدرة الأسماك على رؤية الألوان",
    imagine: "🔬🐟 عالم مع سمكة"
};

HELP_DATA["sprach2_exam21_7"] = {
    text: "Doch warum wurden die Fähigkeiten der Fische so lange unterschätzt?",
    meaning: "لكن لماذا تم الاستهانة بقدرات الأسماك كل هذه المدة؟",
    keywords: ["Doch = لكن", "unterschätzt = الاستهانة", "Fähigkeiten = قدرات"],
    simplified: "هل نحن متحيزون ضد الأسماك لمجرد أنها تعيش في الماء؟",
    imagine: "❓🐟 علامة استفهام مع سمكة"
};

HELP_DATA["sprach2_exam21_8"] = {
    text: "Für intelligent halten wir oft nur Tiere, die uns ähnlich sind",
    meaning: "نعتبر غالباً الحيوانات التي تشبهنا فقط ذكية",
    keywords: ["Für = نعتبر", "intelligent = ذكية", "ähnlich = تشبهنا"],
    simplified: "نحن البشر نميل للاعتقاد بأن ذكاء الكائنات يقاس بمدى قربها منا",
    imagine: "🧬🐕 دبل helix"
};

HELP_DATA["sprach2_exam21_9"] = {
    text: "als Tiere an Land",
    meaning: "من الحيوانات على اليابسة",
    keywords: ["als = من", "Tiere = حيوانات", "Land = يابسة"],
    simplified: "الأسماك تعيش في بيئة مختلفة تماماً عن الحيوانات البرية",
    imagine: "🌊🐟 ماء مع سمكة"
};

HELP_DATA["sprach2_exam21_10"] = {
    text: "wer mehr über Fische herausfinden wolle",
    meaning: "من يريد معرفة المزيد عن الأسماك",
    keywords: ["wer = من", "herausfinden = معرفة", "mehr = المزيد"],
    simplified: "نصيحة العالم: راقب سمكة واحدة في حوض للتعرف على شخصيتها",
    imagine: "🐟🔍 سمكة وعدسة مكبرة"
};

// ============================================
// Exam 22 (exam22.json) - Schwarzarbeit kann teuer werden
// ============================================

HELP_DATA["sprach2_exam22_1"] = {
    text: "anstatt – wie durch das illegale Arbeitsverhältnis erhofft – Geld zu sparen",
    meaning: "بدلاً من توفير المال كما كان مأمولاً من خلال علاقة العمل غير القانونية",
    keywords: ["anstatt = بدلاً من", "sparen = توفير", "illegale = غير قانونية"],
    simplified: "بدلاً من التوفير، قد يدفع العميل ثمناً باهظاً",
    imagine: "💰🚫 نقود وعلامة منع"
};

HELP_DATA["sprach2_exam22_2"] = {
    text: "ist nicht jede Gelegenheit so günstig, wie sie anfangs scheint",
    meaning: "ليست كل فرصة رخيصة كما تبدو في البداية",
    keywords: ["jede = كل", "Gelegenheit = فرصة", "günstig = رخيصة"],
    simplified: "الصفقات الرخيصة قد تأتي بنتائج عكسية",
    imagine: "🏷️⚠️ بطاقة سعر مع علامة خطر"
};

HELP_DATA["sprach2_exam22_3"] = {
    text: "ein finanzielles Argument gegen illegale Arbeiter",
    meaning: "حجة مالية ضد العمال غير القانونيين",
    keywords: ["gegen = ضد", "finanzielles Argument = حجة مالية", "illegale Arbeiter = عمال غير قانونيين"],
    simplified: "توظيف عامل غير قانوني قد يحرمك من خصومات ضريبية",
    imagine: "💸⚖️ نقود مع ميزان عدالة"
};

HELP_DATA["sprach2_exam22_4"] = {
    text: "Abgesehen davon, dass es strafbar ist",
    meaning: "بصرف النظر عن كونه يعاقب عليه القانون",
    keywords: ["Abgesehen = بصرف النظر", "davon = عن ذلك", "strafbar = يعاقب عليه"],
    simplified: "العمل تحت الطاولة له عواقب أسوأ من مجرد الغرامات",
    imagine: "🚫👷 علامة منع مع عامل بناء"
};

HELP_DATA["sprach2_exam22_5"] = {
    text: "Das Finanzamt will eine ordentliche Rechnung sehen",
    meaning: "مكتب الضرائب يريد أن يرى فاتورة منظمة",
    keywords: ["will = يريد", "ordentliche Rechnung = فاتورة منظمة", "Finanzamt = مكتب الضرائب"],
    simplified: "بدون فاتورة، لا خصم ضريبي",
    imagine: "📄🏢 ورقة مع مبنى"
};

HELP_DATA["sprach2_exam22_6"] = {
    text: "mängelfreie Bauten bilden eher die Ausnahme",
    meaning: "الأبنية الخالية من العيوب تشكل الاستثناء إلى حد ما",
    keywords: ["bilden = تشكل", "Ausnahme = استثناء", "eher = إلى حد ما"],
    simplified: "العمل غير الرسمي غالباً ما يكون دون المستوى المطلوب",
    imagine: "🏚️🔨 منزل متداعٍ مع مطرقة"
};

HELP_DATA["sprach2_exam22_7"] = {
    text: "Verbraucher leer ausgehen",
    meaning: "يخسر المستهلكون",
    keywords: ["ausgehen = يخسرون", "leer = خاليين", "Verbraucher = مستهلكون"],
    simplified: "إذا انكسر شيء ما، لن تتمكن من استرداد أموالك",
    imagine: "💸😞 نقود مع وجه حزين"
};

HELP_DATA["sprach2_exam22_8"] = {
    text: "hat für solche Fälle eine Haftpflichtversicherung",
    meaning: "لديه تأمين ضد المسؤولية لمثل هذه الحالات",
    keywords: ["solche = مثل هذه", "Fälle = حالات", "Haftpflichtversicherung = تأمين مسؤولية"],
    simplified: "الحرفي القانوني مؤمن ضد الحوادث",
    imagine: "🛡️🔧 درع مع أداة"
};

HELP_DATA["sprach2_exam22_9"] = {
    text: "bekommen es gleich mehrere Behörden mit",
    meaning: "تتعامل معه عدة جهات حكومية مرة واحدة",
    keywords: ["bekommen = تتعامل", "mehrere = عدة", "Behörden = جهات حكومية"],
    simplified: "بمجرد اكتشاف الأمر، سيكون لديك مشاكل مع عدة هيئات",
    imagine: "🏛️🏛️🏛️ ثلاثة مبان حكومية"
};

HELP_DATA["sprach2_exam22_10"] = {
    text: "braucht der Auftraggeber höchstens einen Anwalt",
    meaning: "يحتاج العميل على الأكثر إلى محامٍ",
    keywords: ["höchstens = على الأكثر", "Anwalt = محامٍ", "braucht = يحتاج"],
    simplified: "ستحتاج إلى مساعدة قانونية، وهذا سيكلفك أكثر",
    imagine: "⚖️👨‍⚖️ ميزان عدالة مع قاضي"
};

// ============================================
// Exam 23 (exam23.json) - Schwarzarbeit kann teuer werden (معدل 1)
// ============================================

HELP_DATA["sprach2_exam23_1"] = {
    text: "anstatt – wie durch das illegale Arbeitsverhältnis erhofft – Geld zu sparen",
    meaning: "بدلاً من توفير المال كما كان مأمولاً من خلال علاقة العمل غير القانونية",
    keywords: ["anstatt = بدلاً من", "sparen = توفير", "illegale = غير قانونية"],
    simplified: "بدلاً من التوفير، قد يدفع العميل ثمناً باهظاً",
    imagine: "💰🚫 نقود وعلامة منع"
};

HELP_DATA["sprach2_exam23_2"] = {
    text: "ist nicht jede Gelegenheit so günstig, wie sie anfangs scheint",
    meaning: "ليست كل فرصة رخيصة كما تبدو في البداية",
    keywords: ["jede = كل", "Gelegenheit = فرصة", "günstig = رخيصة"],
    simplified: "الصفقات الرخيصة قد تأتي بنتائج عكسية",
    imagine: "🏷️⚠️ بطاقة سعر مع علامة خطر"
};

HELP_DATA["sprach2_exam23_3"] = {
    text: "ein finanzielles Argument gegen illegale Arbeiter",
    meaning: "حجة مالية ضد العمال غير القانونيين",
    keywords: ["gegen = ضد", "finanzielles Argument = حجة مالية", "illegale Arbeiter = عمال غير قانونيين"],
    simplified: "توظيف عامل غير قانوني قد يحرمك من خصومات ضريبية",
    imagine: "💸⚖️ نقود مع ميزان عدالة"
};

HELP_DATA["sprach2_exam23_4"] = {
    text: "Abgesehen davon, dass es strafbar ist",
    meaning: "بصرف النظر عن كونه يعاقب عليه القانون",
    keywords: ["Abgesehen = بصرف النظر", "davon = عن ذلك", "strafbar = يعاقب عليه"],
    simplified: "العمل تحت الطاولة له عواقب أسوأ من مجرد الغرامات",
    imagine: "🚫👷 علامة منع مع عامل بناء"
};

HELP_DATA["sprach2_exam23_5"] = {
    text: "Das Finanzamt will eine ordentliche Rechnung sehen",
    meaning: "مكتب الضرائب يريد أن يرى فاتورة منظمة",
    keywords: ["will = يريد", "ordentliche Rechnung = فاتورة منظمة", "Finanzamt = مكتب الضرائب"],
    simplified: "بدون فاتورة، لا خصم ضريبي",
    imagine: "📄🏢 ورقة مع مبنى"
};

HELP_DATA["sprach2_exam23_6"] = {
    text: "mängelfreie Bauten wechseln eher die Ausnahme",
    meaning: "الأبنية الخالية من العيوب تشكل الاستثناء إلى حد ما",
    keywords: ["wechseln = تشكل", "Ausnahme = استثناء", "eher = إلى حد ما"],
    simplified: "العمل غير الرسمي غالباً ما يكون دون المستوى المطلوب",
    imagine: "🏚️🔨 منزل متداعٍ مع مطرقة"
};

HELP_DATA["sprach2_exam23_7"] = {
    text: "Verbraucher leer ausgehen",
    meaning: "يخسر المستهلكون",
    keywords: ["ausgehen = يخسرون", "leer = خاليين", "Verbraucher = مستهلكون"],
    simplified: "إذا انكسر شيء ما، لن تتمكن من استرداد أموالك",
    imagine: "💸😞 نقود مع وجه حزين"
};

HELP_DATA["sprach2_exam23_8"] = {
    text: "hat für solche Fälle eine Haftpflichtversicherung",
    meaning: "لديه تأمين ضد المسؤولية لمثل هذه الحالات",
    keywords: ["solche = مثل هذه", "Fälle = حالات", "Haftpflichtversicherung = تأمين مسؤولية"],
    simplified: "الحرفي القانوني مؤمن ضد الحوادث",
    imagine: "🛡️🔧 درع مع أداة"
};

HELP_DATA["sprach2_exam23_9"] = {
    text: "bekommen es gleich mehrere Behörden mit",
    meaning: "تتعامل معه عدة جهات حكومية مرة واحدة",
    keywords: ["bekommen = تتعامل", "mehrere = عدة", "Behörden = جهات حكومية"],
    simplified: "بمجرد اكتشاف الأمر، سيكون لديك مشاكل مع عدة هيئات",
    imagine: "🏛️🏛️🏛️ ثلاثة مبان حكومية"
};

HELP_DATA["sprach2_exam23_10"] = {
    text: "braucht der Auftraggeber höchstens einen Anwalt",
    meaning: "يحتاج العميل على الأكثر إلى محامٍ",
    keywords: ["höchstens = على الأكثر", "Anwalt = محامٍ", "braucht = يحتاج"],
    simplified: "ستحتاج إلى مساعدة قانونية، وهذا سيكلفك أكثر",
    imagine: "⚖️👨‍⚖️ ميزان عدالة مع قاضي"
};

// ============================================
// Exam 24 (exam24.json) - Schwarzarbeit kann teuer werden (معدل 2)
// ============================================

HELP_DATA["sprach2_exam24_1"] = {
    text: "anstatt – wie durch das illegale Arbeitsverhältnis erhofft – Geld zu sparen",
    meaning: "بدلاً من توفير المال كما كان مأمولاً من خلال علاقة العمل غير القانونية",
    keywords: ["anstatt = بدلاً من", "sparen = توفير", "illegale = غير قانونية"],
    simplified: "بدلاً من التوفير، قد يدفع العميل ثمناً باهظاً",
    imagine: "💰🚫 نقود وعلامة منع"
};

HELP_DATA["sprach2_exam24_2"] = {
    text: "ist nicht jede Gelegenheit so günstig, wie sie anfangs scheint",
    meaning: "ليست كل فرصة رخيصة كما تبدو في البداية",
    keywords: ["jede = كل", "Gelegenheit = فرصة", "günstig = رخيصة"],
    simplified: "الصفقات الرخيصة قد تأتي بنتائج عكسية",
    imagine: "🏷️⚠️ بطاقة سعر مع علامة خطر"
};

HELP_DATA["sprach2_exam24_3"] = {
    text: "ein finanzielles Argument gegen illegale Arbeiter",
    meaning: "حجة مالية ضد العمال غير القانونيين",
    keywords: ["gegen = ضد", "finanzielles Argument = حجة مالية", "illegale Arbeiter = عمال غير قانونيين"],
    simplified: "توظيف عامل غير قانوني قد يحرمك من خصومات ضريبية",
    imagine: "💸⚖️ نقود مع ميزان عدالة"
};

HELP_DATA["sprach2_exam24_4"] = {
    text: "Abgesehen davon, dass es strafbar ist",
    meaning: "بصرف النظر عن كونه يعاقب عليه القانون",
    keywords: ["Abgesehen = بصرف النظر", "davon = عن ذلك", "strafbar = يعاقب عليه"],
    simplified: "العمل تحت الطاولة له عواقب أسوأ من مجرد الغرامات",
    imagine: "🚫👷 علامة منع مع عامل بناء"
};

HELP_DATA["sprach2_exam24_5"] = {
    text: "Das Finanzamt will eine ordentliche Rechnung sehen",
    meaning: "مكتب الضرائب يريد أن يرى فاتورة منظمة",
    keywords: ["will = يريد", "ordentliche Rechnung = فاتورة منظمة", "Finanzamt = مكتب الضرائب"],
    simplified: "بدون فاتورة، لا خصم ضريبي",
    imagine: "📄🏢 ورقة مع مبنى"
};

HELP_DATA["sprach2_exam24_6"] = {
    text: "mängelfreie Bauten wechseln eher die Ausnahme",
    meaning: "الأبنية الخالية من العيوب تشكل الاستثناء إلى حد ما",
    keywords: ["wechseln = تشكل", "Ausnahme = استثناء", "eher = إلى حد ما"],
    simplified: "العمل غير الرسمي غالباً ما يكون دون المستوى المطلوب",
    imagine: "🏚️🔨 منزل متداعٍ مع مطرقة"
};

HELP_DATA["sprach2_exam24_7"] = {
    text: "Verbraucher leer ausgehen",
    meaning: "يخسر المستهلكون",
    keywords: ["ausgehen = يخسرون", "leer = خاليين", "Verbraucher = مستهلكون"],
    simplified: "إذا انكسر شيء ما، لن تتمكن من استرداد أموالك",
    imagine: "💸😞 نقود مع وجه حزين"
};

HELP_DATA["sprach2_exam24_8"] = {
    text: "hat für solche Fälle eine Haftpflichtversicherung",
    meaning: "لديه تأمين ضد المسؤولية لمثل هذه الحالات",
    keywords: ["solche = مثل هذه", "Fälle = حالات", "Haftpflichtversicherung = تأمين مسؤولية"],
    simplified: "الحرفي القانوني مؤمن ضد الحوادث",
    imagine: "🛡️🔧 درع مع أداة"
};

HELP_DATA["sprach2_exam24_9"] = {
    text: "bekommen es gleich mehrere Behörden mit",
    meaning: "تتعامل معه عدة جهات حكومية مرة واحدة",
    keywords: ["bekommen = تتعامل", "mehrere = عدة", "Behörden = جهات حكومية"],
    simplified: "بمجرد اكتشاف الأمر، سيكون لديك مشاكل مع عدة هيئات",
    imagine: "🏛️🏛️🏛️ ثلاثة مبان حكومية"
};

HELP_DATA["sprach2_exam24_10"] = {
    text: "braucht der Auftraggeber höchstens einen Anwalt",
    meaning: "يحتاج العميل على الأكثر إلى محامٍ",
    keywords: ["höchstens = على الأكثر", "Anwalt = محامٍ", "braucht = يحتاج"],
    simplified: "ستحتاج إلى مساعدة قانونية، وهذا سيكلفك أكثر",
    imagine: "⚖️👨‍⚖️ ميزان عدالة مع قاضي"
};

// ============================================
// Exam 25 (exam25.json) - Teamarbeit als Schlüssel zum Erfolg
// ============================================

HELP_DATA["sprach2_exam25_1"] = {
    text: "konnte eindrücklich nachweisen",
    meaning: "تمكن من إثبات بشكل مقنع",
    keywords: ["nachweisen = إثبات", "eindrücklich = بشكل مقنع", "konnte = تمكن"],
    simplified: "الباحثون أثبتوا أن الشمبانزي يعمل ضمن فريق",
    imagine: "🐒🤝 قرد يصافح"
};

HELP_DATA["sprach2_exam25_2"] = {
    text: "dass auch Schimpansen zu echter Teamarbeit fähig sind",
    meaning: "أن الشمبانزي أيضاً قادر على العمل الجماعي الحقيقي",
    keywords: ["zu = قادر على", "echter Teamarbeit = عمل جماعي حقيقي", "fähig = قادر"],
    simplified: "الشمبانزي يفهم أهمية التعاون لحل المشاكل",
    imagine: "🐒🔧 قرد يحل مشكلة"
};

HELP_DATA["sprach2_exam25_3"] = {
    text: "Dazu bekam einer der beiden Affen zwei Werkzeuge",
    meaning: "لهذا الغرض، حصل أحد القردين على أداتين",
    keywords: ["Dazu = لهذا الغرض", "bekam = حصل", "Werkzeuge = أدوات"],
    simplified: "التجربة صممت لاختبار التعاون",
    imagine: "🔧🔧 أداتان"
};

HELP_DATA["sprach2_exam25_4"] = {
    text: "musste er aber eines davon an seine Artgenossen weitergeben",
    meaning: "لكنه كان عليه أن يعطي واحدة منهما لأفراد جنسه",
    keywords: ["davon = منهما", "weitergeben = يعطي", "Artgenossen = أفراد جنسه"],
    simplified: "لا يمكنه الحصول على الطعام دون مساعدة شريكه",
    imagine: "🤲🍇 يد تعطي عنباً"
};

HELP_DATA["sprach2_exam25_5"] = {
    text: "sei es sogar das richtige Werkzeug gewesen",
    meaning: "تبين أنها كانت الأداة الصحيحة",
    keywords: ["sei = كانت", "richtige = الصحيحة", "Werkzeug = أداة"],
    simplified: "في معظم الأوقات، اختار القرد الأداة المناسبة للمهمة",
    imagine: "✅🔧 علامة صح مع أداة"
};

HELP_DATA["sprach2_exam25_6"] = {
    text: "ob diese Eigenschaft nur beim Menschen vorhanden ist",
    meaning: "ما إذا كانت هذه الخاصية موجودة فقط لدى البشر",
    keywords: ["nur = فقط", "Eigenschaft = خاصية", "vorhanden = موجودة"],
    simplified: "هل التعاون الاستراتيجي حكر على البشر؟",
    imagine: "🧬❓ حمض نووي مع علامة استفهام"
};

HELP_DATA["sprach2_exam25_7"] = {
    text: "damit die Trauben auf den Boden fielen und die Affen sie fressen konnten",
    meaning: "لكي يسقط العنب على الأرض وتتمكن القرود من أكله",
    keywords: ["konnten = تمكنت", "fressen = أكل", "fielen = سقط"],
    simplified: "الهدف النهائي هو الحصول على العنب",
    imagine: "🍇🐒 عنب مع قرد"
};

HELP_DATA["sprach2_exam25_8"] = {
    text: "liefert erste Hinweise darauf",
    meaning: "يقدم أولى الدلائل على ذلك",
    keywords: ["liefert = يقدم", "erste = أولى", "Hinweise = دلائل"],
    simplified: "الدراسة تقدم دليلاً جديداً على مهارات الشمبانزي الاجتماعية",
    imagine: "📊🐒 رسم بياني مع قرد"
};

HELP_DATA["sprach2_exam25_9"] = {
    text: "auf die Handlungen ihres Partners Acht geben können",
    meaning: "يمكنهم الانتباه إلى تصرفات شريكهم",
    keywords: ["Acht geben = الانتباه", "Handlungen = تصرفات", "Partners = شريكهم"],
    simplified: "الشمبانزي يراقب ما يفعله الآخر",
    imagine: "👀🐒 قرد يراقب"
};

HELP_DATA["sprach2_exam25_10"] = {
    text: "Genau wie den Menschen sei es den Affen möglich",
    meaning: "تماماً مثل البشر، القردة قادرة",
    keywords: ["wie = مثل", "Menschen = البشر", "möglich = قادرة"],
    simplified: "التعاون الاستراتيجي ليس حكراً على البشر",
    imagine: "🔄🐒 استنساخ مع قرد"
};

// ============================================
// Exam 26 (exam26.json) - Teamarbeit als Schlüssel zum Erfolg (معدل)
// ============================================

HELP_DATA["sprach2_exam26_1"] = {
    text: "konnte eindrücklich nachweisen",
    meaning: "تمكن من إثبات بشكل مقنع",
    keywords: ["nachweisen = إثبات", "eindrücklich = بشكل مقنع", "konnte = تمكن"],
    simplified: "الباحثون أثبتوا أن الشمبانزي يعمل ضمن فريق",
    imagine: "🐒🤝 قرد يصافح"
};

HELP_DATA["sprach2_exam26_2"] = {
    text: "dass auch Schimpansen zu echter Teamarbeit fähig sind",
    meaning: "أن الشمبانزي أيضاً قادر على العمل الجماعي الحقيقي",
    keywords: ["zu = قادر على", "echter Teamarbeit = عمل جماعي حقيقي", "fähig = قادر"],
    simplified: "الشمبانزي يفهم أهمية التعاون لحل المشاكل",
    imagine: "🐒🔧 قرد يحل مشكلة"
};

HELP_DATA["sprach2_exam26_3"] = {
    text: "Dazu bekam einer der beiden Affen zwei Werkzeuge",
    meaning: "لهذا الغرض، حصل أحد القردين على أداتين",
    keywords: ["Dazu = لهذا الغرض", "bekam = حصل", "Werkzeuge = أدوات"],
    simplified: "التجربة صممت لاختبار التعاون",
    imagine: "🔧🔧 أداتان"
};

HELP_DATA["sprach2_exam26_4"] = {
    text: "musste er aber eines davon an seine Artgenossen weitergeben",
    meaning: "لكنه كان عليه أن يعطي واحدة منهما لأفراد جنسه",
    keywords: ["davon = منهما", "weitergeben = يعطي", "Artgenossen = أفراد جنسه"],
    simplified: "لا يمكنه الحصول على الطعام دون مساعدة شريكه",
    imagine: "🤲🍇 يد تعطي عنباً"
};

HELP_DATA["sprach2_exam26_5"] = {
    text: "sei es sogar das richtige Werkzeug gewesen",
    meaning: "تبين أنها كانت الأداة الصحيحة",
    keywords: ["sei = كانت", "richtige = الصحيحة", "Werkzeug = أداة"],
    simplified: "في معظم الأوقات، اختار القرد الأداة المناسبة للمهمة",
    imagine: "✅🔧 علامة صح مع أداة"
};

HELP_DATA["sprach2_exam26_6"] = {
    text: "ob diese Eigenschaft nur beim Menschen vorhanden ist",
    meaning: "ما إذا كانت هذه الخاصية موجودة فقط لدى البشر",
    keywords: ["nur = فقط", "Eigenschaft = خاصية", "vorhanden = موجودة"],
    simplified: "هل التعاون الاستراتيجي حكر على البشر؟",
    imagine: "🧬❓ حمض نووي مع علامة استفهام"
};

HELP_DATA["sprach2_exam26_7"] = {
    text: "damit die Trauben auf den Boden fielen und die Affen sie fressen konnten",
    meaning: "لكي يسقط العنب على الأرض وتتمكن القرود من أكله",
    keywords: ["konnten = تمكنت", "fressen = أكل", "fielen = سقط"],
    simplified: "الهدف النهائي هو الحصول على العنب",
    imagine: "🍇🐒 عنب مع قرد"
};

HELP_DATA["sprach2_exam26_8"] = {
    text: "liefert erste Hinweise darauf",
    meaning: "يقدم أولى الدلائل على ذلك",
    keywords: ["liefert = يقدم", "erste = أولى", "Hinweise = دلائل"],
    simplified: "الدراسة تقدم دليلاً جديداً على مهارات الشمبانزي الاجتماعية",
    imagine: "📊🐒 رسم بياني مع قرد"
};

HELP_DATA["sprach2_exam26_9"] = {
    text: "auf die Handlungen ihres Partners Acht geben können",
    meaning: "يمكنهم الانتباه إلى تصرفات شريكهم",
    keywords: ["Acht geben = الانتباه", "Handlungen = تصرفات", "Partners = شريكهم"],
    simplified: "الشمبانزي يراقب ما يفعله الآخر",
    imagine: "👀🐒 قرد يراقب"
};

HELP_DATA["sprach2_exam26_10"] = {
    text: "Genau wie den Menschen sei es den Affen möglich",
    meaning: "تماماً مثل البشر، القردة قادرة",
    keywords: ["wie = مثل", "Menschen = البشر", "möglich = قادرة"],
    simplified: "التعاون الاستراتيجي ليس حكراً على البشر",
    imagine: "🔄🐒 استنساخ مع قرد"
};

// ============================================
// Exam 27 (exam27.json) - Wie Handschrift wieder cool wird (معدل)
// ============================================

HELP_DATA["sprach2_exam27_1"] = {
    text: "weil Schreiben mit der Hand ungewohnt ist",
    meaning: "لأن الكتابة باليد غير معتادة",
    keywords: ["weil = لأن", "ungewohnt = غير معتادة", "Schreiben = الكتابة"],
    simplified: "نادراً ما يستخدم الأطفال أيديهم للكتابة، فيصابون بالتعب بسرعة",
    imagine: "✍️😖 كتابة ووجه متألم"
};

HELP_DATA["sprach2_exam27_2"] = {
    text: "haben damit in der Schule immer mehr Probleme",
    meaning: "يعانون من مشاكل متزايدة في المدرسة",
    keywords: ["immer = متزايدة", "mehr = أكثر", "Probleme = مشاكل"],
    simplified: "ضعف قوة اليد يسبب صعوبات في أداء الواجبات المدرسية",
    imagine: "📝😞 قلم ووجه حزين"
};

HELP_DATA["sprach2_exam27_3"] = {
    text: "der mit Handschrift zu tun hat",
    meaning: "الذي له علاقة بالكتابة اليدوية",
    keywords: ["tun = علاقة", "Handschrift = كتابة يدوية", "hat = له"],
    simplified: "هناك اتجاه جديد يركز على الرسم بالحروف",
    imagine: "🖌️✨ فرشاة ونجوم"
};

HELP_DATA["sprach2_exam27_4"] = {
    text: "wie es früher unterrichtet und von einigen auch gefürchtet wurde",
    meaning: "كما تم تدريسه قديماً وكان يخشاه البعض أيضاً",
    keywords: ["wurde = كان", "unterrichtet = مدروساً", "gefürchtet = يخشاه"],
    simplified: "الخط الكلاسيكي الجميل لم يعد يُمارس أو يُدرس",
    imagine: "✒️😟 قلم حبر قديم ووجه قلق"
};

HELP_DATA["sprach2_exam27_5"] = {
    text: "Die Verbindung von Schrift und Bild",
    meaning: "الربط بين الكتابة والصورة",
    keywords: ["von = بين", "Schrift = كتابة", "Bild = صورة"],
    simplified: "تقنية Lettering تدمج بين الرسم والكتابة",
    imagine: "🖼️✍️ صورة وقلم"
};

HELP_DATA["sprach2_exam27_6"] = {
    text: "Erfahrungen damit hat auch die Wiener Designerin gemacht",
    meaning: "لديها خبرة بذلك أيضاً مصممة فيينا",
    keywords: ["damit = بذلك", "Erfahrungen = خبرة", "gemacht = لديها"],
    simplified: "مصممة محترفة تقدم ورشاً لتعليم Lettering للأطفال والكبار",
    imagine: "👩‍🎨🎨 فنانة ولوحة"
};

HELP_DATA["sprach2_exam27_7"] = {
    text: "Auf spielerische Weise vermittelt die Künstlerin das Thema Schrift",
    meaning: "بطريقة مرحة تنقل الفنانة موضوع الكتابة",
    keywords: ["spielerische = مرحة", "vermittelt = تنقل", "Künstlerin = فنانة"],
    simplified: "التعلم عبر اللعب يجعل الكتابة اليدوية ممتعة مرة أخرى",
    imagine: "🎨🧸 لوحة وألعاب"
};

HELP_DATA["sprach2_exam27_8"] = {
    text: "dass Kinder die Freude am Schreiben wieder entdecken",
    meaning: "أن يعيد الأطفال اكتشاف متعة الكتابة",
    keywords: ["dass = أن", "entdecken = اكتشاف", "Freude = متعة"],
    simplified: "شغف الفنانة هو إعادة الحماس للكتابة لدى الصغار",
    imagine: "😊✍️ وجه مبتسم مع قلم"
};

HELP_DATA["sprach2_exam27_9"] = {
    text: "coole Einladungen und Logos zu gestalten",
    meaning: "تصميم دعوات وشعارات رائعة",
    keywords: ["gestalten = تصميم", "Einladungen = دعوات", "Logos = شعارات"],
    simplified: "التطبيق العملي للـ Lettering مفيد للحفلات والعلامات التجارية",
    imagine: "💌🎨 بطاقة دعوة وفرشاة"
};

HELP_DATA["sprach2_exam27_10"] = {
    text: "bis ihnen das flüssig von der Hand geht",
    meaning: "حتى يصبح الأمر طليقاً لديهم",
    keywords: ["geht = يصبح", "flüssig = طليقاً", "Hand = يد"],
    simplified: "التدريب على أجزاء الحرف يبني الطلاقة أولاً",
    imagine: "✍️💧 قلم وقطرة ماء"
};

// ============================================
// Exam 28 (exam28.json) - Wie Handschrift wieder cool wird
// ============================================

HELP_DATA["sprach2_exam28_1"] = {
    text: "weil Handschrift ungewohnt ist",
    meaning: "لأن الكتابة اليدوية غير معتادة",
    keywords: ["weil = لأن", "ungewohnt = غير معتادة", "Handschrift = كتابة يدوية"],
    simplified: "نادراً ما يستخدم الأطفال أيديهم للكتابة، فيصابون بالتعب بسرعة",
    imagine: "✍️😖 كتابة ووجه متألم"
};

HELP_DATA["sprach2_exam28_2"] = {
    text: "haben mit dem Schreiben in der Schule immer mehr Probleme",
    meaning: "يعانون من مشاكل متزايدة في الكتابة بالمدرسة",
    keywords: ["immer = متزايدة", "mehr = أكثر", "Probleme = مشاكل"],
    simplified: "ضعف قوة اليد يسبب صعوبات في أداء الواجبات المدرسية",
    imagine: "📝😞 قلم ووجه حزين"
};

HELP_DATA["sprach2_exam28_3"] = {
    text: "der mit Handschrift zu tun hat",
    meaning: "الذي له علاقة بالكتابة اليدوية",
    keywords: ["tun = علاقة", "Handschrift = كتابة يدوية", "hat = له"],
    simplified: "هناك اتجاه جديد يركز على الرسم بالحروف",
    imagine: "🖌️✨ فرشاة ونجوم"
};

HELP_DATA["sprach2_exam28_4"] = {
    text: "Erfahrungen damit hat die Wiener Designerin gemacht",
    meaning: "لديها خبرة بذلك مصممة فيينا",
    keywords: ["damit = بذلك", "Erfahrungen = خبرة", "gemacht = لديها"],
    simplified: "مصممة محترفة تقدم ورشاً لتعليم الكتابة الجميلة",
    imagine: "👩‍🎨🖌️ فنانة وفرشاة"
};

HELP_DATA["sprach2_exam28_5"] = {
    text: "Auf spielerische Weise vermittelt die Künstlerin das Thema Schrift",
    meaning: "بطريقة مرحة تنقل الفنانة موضوع الكتابة",
    keywords: ["spielerische = مرحة", "vermittelt = تنقل", "Künstlerin = فنانة"],
    simplified: "التعلم عبر اللعب يجعل الكتابة اليدوية ممتعة مرة أخرى",
    imagine: "🎨🧸 لوحة وألعاب"
};

HELP_DATA["sprach2_exam28_6"] = {
    text: "dass Kinder die Freude am Schreiben wiederentdecken",
    meaning: "أن يعيد الأطفال اكتشاف متعة الكتابة",
    keywords: ["dass = أن", "wiederentdecken = إعادة اكتشاف", "Freude = متعة"],
    simplified: "شغف الفنانة هو إعادة الحماس للكتابة لدى الصغار",
    imagine: "😊✍️ وجه مبتسم مع قلم"
};

HELP_DATA["sprach2_exam28_7"] = {
    text: "die eigene Handschrift zu beurteilen und zu gestalten",
    meaning: "تقييم وتصميم خط اليد الخاص بهم",
    keywords: ["gestalten = تصميم", "beurteilen = تقييم", "eigene Handschrift = خط يدهم الخاص"],
    simplified: "المراهقون يمكنهم تحسين وتطوير خطهم",
    imagine: "📝🔍 قلم وعدسة مكبرة"
};

HELP_DATA["sprach2_exam28_8"] = {
    text: "bis ihnen das flüssig von der Hand geht",
    meaning: "حتى يصبح الأمر طليقاً لديهم",
    keywords: ["geht = يصبح", "flüssig = طليقاً", "Hand = يد"],
    simplified: "التدريب على أجزاء الحرف يبني الطلاقة أولاً",
    imagine: "✍️💧 قلم وقطرة ماء"
};

HELP_DATA["sprach2_exam28_9"] = {
    text: "Die Verbindung von Schrift und Bild",
    meaning: "الربط بين الكتابة والصورة",
    keywords: ["von = بين", "Schrift = كتابة", "Bild = صورة"],
    simplified: "تقنية Lettering تدمج بين الرسم والكتابة",
    imagine: "🖼️✍️ صورة وقلم"
};

HELP_DATA["sprach2_exam28_10"] = {
    text: "wie es früher unterrichtet und von einigen auch gefürchtet wurde",
    meaning: "كما تم تدريسه قديماً وكان يخشاه البعض أيضاً",
    keywords: ["wurde = كان", "unterrichtet = مدروساً", "gefürchtet = يخشاه"],
    simplified: "الخط الكلاسيكي الجميل لم يعد يُمارس أو يُدرس",
    imagine: "✒️😟 قلم حبر قديم ووجه قلق"
};

// ============================================
// Exam 29 (exam29.json) - Ausbildung mit über 30
// ============================================

HELP_DATA["sprach2_exam29_1"] = {
    text: "Denn sie hat sich für einen beruflichen Neustart entschieden",
    meaning: "لأنها قررت بداية مهنية جديدة",
    keywords: ["Denn = لأن", "Neustart = بداية جديدة", "beruflichen = مهنية"],
    simplified: "قررت تغيير حياتها المهنية بالكامل",
    imagine: "🔄💼 عكس مسار مع حقيبة عمل"
};

HELP_DATA["sprach2_exam29_2"] = {
    text: "möchte in den Streifendienst gehen",
    meaning: "ترغب في الذهاب إلى خدمة الدوريات",
    keywords: ["möchte = ترغب", "Streifendienst = خدمة دوريات", "gehen = الذهاب"],
    simplified: "تحلم بالعمل على أرض الواقع كضابطة شرطة",
    imagine: "👮‍♀️🚓 ضابطة شرطة"
};

HELP_DATA["sprach2_exam29_3"] = {
    text: "da es heute in vielen Branchen aber an Nachwuchs fehlt",
    meaning: "لأنه في كثير من القطاعات اليوم هناك نقص في الكوادر الشابة",
    keywords: ["da = لأن", "Nachwuchs = كوادر شابة", "fehlt = نقص"],
    simplified: "يبحث أصحاب العمل الآن عن أي شخص مؤهل، بغض النظر عن العمر",
    imagine: "👥🔍 بحث عن موظفين"
};

HELP_DATA["sprach2_exam29_4"] = {
    text: "geben sie öfter auch Älteren eine Chance",
    meaning: "يعطون فرصة أيضاً لكبار السن",
    keywords: ["Chance = فرصة", "Älteren = كبار السن", "geben = يعطون"],
    simplified: "فرص العمل متاحة الآن لمن تجاوزوا الثلاثين",
    imagine: "📄✅ استمارة طلب وظيفة"
};

HELP_DATA["sprach2_exam29_5"] = {
    text: "warum sein Arbeitgeber gerne Ältere ausbildet",
    meaning: "لماذا يُدرب صاحب عمله كبار السن بكل سرور",
    keywords: ["warum = لماذا", "ausbildet = يُدرب", "gerne = بكل سرور"],
    simplified: "شرطة برلين تشرح فوائد توظيف المتدربين الأكبر سناً",
    imagine: "👮‍♂️📋 شرطي مع قائمة"
};

HELP_DATA["sprach2_exam29_6"] = {
    text: "außerdem bereit, Verantwortung zu übernehmen",
    meaning: "بالإضافة إلى ذلك هم على استعداد لتحمل المسؤولية",
    keywords: ["übernehmen = تحمل", "Verantwortung = مسؤولية", "bereit = على استعداد"],
    simplified: "كبار السن موثوقون وجادون في عملهم",
    imagine: "🎯✅ هدف مع علامة صح"
};

HELP_DATA["sprach2_exam29_7"] = {
    text: "könnten die Jüngeren unterstützen",
    meaning: "يمكنهم دعم الصغار",
    keywords: ["könnten = يمكنهم", "unterstützen = دعم", "Jüngeren = الصغار"],
    simplified: "الموظفون الأكبر سناً هم مرشدون ممتازون",
    imagine: "👨‍🏫🤝 مرشد يوجه"
};

HELP_DATA["sprach2_exam29_8"] = {
    text: "stehen",
    meaning: "متاحين للعمل",
    keywords: ["stehen = متاحين", "Verfügung = للعمل", "zur = لـ"],
    simplified: "العيب الوحيد هو أنهم قد يتقاعدون مبكراً",
    imagine: "🕒➡️🚪 وقت المغادرة"
};

HELP_DATA["sprach2_exam29_9"] = {
    text: "Trotzdem haben ältere Azubis in vielen Bereichen Möglichkeiten",
    meaning: "مع ذلك، لدى المتدربين الأكبر سناً فرص في العديد من المجالات",
    keywords: ["Trotzdem = مع ذلك", "Möglichkeiten = فرص", "ältere Azubis = متدربين أكبر سناً"],
    simplified: "الخيارات الوظيفية متاحة رغم العمر",
    imagine: "🗂️✨ ملفات ونجوم"
};

HELP_DATA["sprach2_exam29_10"] = {
    text: "sondern es wird der individuelle Bedarf ermittelt",
    meaning: "بل يتم تحديد الاحتياج الفردي",
    keywords: ["sondern = بل", "individuelle = فردي", "Bedarf = احتياج"],
    simplified: "الدعم الحكومي يعتمد على احتياجاتك وليس عمرك",
    imagine: "🎯📊 استهداف وبيانات"
};

// ============================================
// Exam 30 (exam30.json) - Verlernen die Deutschen die Höflichkeit?
// ============================================

HELP_DATA["sprach2_exam30_1"] = {
    text: "stimmen dieser Behauptung zu",
    meaning: "يوافقون على هذا الادعاء",
    keywords: ["stimmen = يوافقون", "Behauptung = ادعاء", "zu = على"],
    simplified: "ثلاثة أرباع الألمان يشعرون أن الأدب في تراجع",
    imagine: "📉👋 رسم بياني هابط ومصافحة"
};

HELP_DATA["sprach2_exam30_2"] = {
    text: "meinen einer Umfrage zufolge 75 Prozent der Befragten",
    meaning: "يعتقد 75 بالمئة من المشاركين وفقاً لاستبيان",
    keywords: ["meinen = يعتقدون", "Umfrage = استبيان", "zufolge = وفقاً لـ"],
    simplified: "الجيل الأكبر يعتقد أن الشباب أقل احتراماً",
    imagine: "📋👥 قائمة استبيان مع مجموعة أشخاص"
};

HELP_DATA["sprach2_exam30_3"] = {
    text: "der Wunsch nach gewissen Höflichkeitsformen",
    meaning: "الرغبة في بعض أشكال الأدب",
    keywords: ["nach = في", "gewissen = بعض", "Höflichkeitsformen = أشكال أدب"],
    simplified: "الصغار والكبار متفقون على ضرورة وجود بعض قواعد المجاملة",
    imagine: "🤝✅ مصافحة مع علامة صح"
};

HELP_DATA["sprach2_exam30_4"] = {
    text: "für ein höfliches Miteinander",
    meaning: "للتفاعل المهذب معاً",
    keywords: ["miteinander = معاً", "höfliches = مهذب", "für = لـ"],
    simplified: "القواعد الواضحة تجعل العلاقات الاجتماعية أسهل للجميع",
    imagine: "👥🤝 مجموعة محددة"
};

HELP_DATA["sprach2_exam30_5"] = {
    text: "sucht man sie oft vergeblich",
    meaning: "غالباً ما يبحث عنها المرء دون جدوى",
    keywords: ["vergeblich = دون جدوى", "sucht = يبحث", "oft = غالباً"],
    simplified: "من الصعب معرفة متى تنادي شخصاً بـ 'أنت' أو 'حضرتك'",
    imagine: "🔍❓ بحث وعلامة استفهام"
};

HELP_DATA["sprach2_exam30_6"] = {
    text: "Gut die Hälfte der Deutschen gibt zu",
    meaning: "نصف الألمان يعترفون",
    keywords: ["Gut die Hälfte = نصف", "gibt zu = يعترفون", "Deutschen = الألمان"],
    simplified: "نصف الألمان مرتبكون بشأن آداب التحية",
    imagine: "🗣️😕 حوار ووجه حائر"
};

HELP_DATA["sprach2_exam30_7"] = {
    text: "als normal oder sogar angenehm empfinden mögen",
    meaning: "قد يعتبرونها طبيعية أو حتى لطيفة",
    keywords: ["mögen = قد", "angenehm = لطيفة", "normal = طبيعية"],
    simplified: "الشباب لا يمانعون النادل الذي يناديهم بـ 'أنت'",
    imagine: "👨‍🍳👋 نادل يلوح"
};

HELP_DATA["sprach2_exam30_8"] = {
    text: "besonders Ältere stören sich am ungefragten Duzen",
    meaning: "كبار السن تحديداً ينزعجون من مخاطبة 'أنت' غير المرغوب فيها",
    keywords: ["stören = ينزعجون", "gefragten Duzen = مخاطبة 'أنت'", "Ältere = كبار السن"],
    simplified: "الكثير من الناس فوق سن الخمسين يكرهون أن يناديهم الغرباء بـ 'أنت'",
    imagine: "👴😠 رجل كبير غاضب"
};

HELP_DATA["sprach2_exam30_9"] = {
    text: "dass Männer Frauen die Tür aufhalten und ihnen den Vortritt lassen",
    meaning: "أن يمسك الرجال الباب للنساء ويتركونهم يتقدمون",
    keywords: ["lassen = يتركون", "Vortritt = يتقدمون", "aufhalten = يمسكون"],
    simplified: "بعض قواعد المجاملة التقليدية لا تزال حية",
    imagine: "🚪👨‍🦰👩 رجل يمسك باباً لامرأة"
};

HELP_DATA["sprach2_exam30_10"] = {
    text: "wenn man weiß, was sich gehört",
    meaning: "إذا كان المرء يعرف ما هو مناسب",
    keywords: ["sich = ما", "gehört = مناسب", "weiß = يعرف"],
    simplified: "من الغريب أن ندرك كل هذه القواعد ولكننا لا نطبقها",
    imagine: "📖🤷 كتاب وعلامة استفهام"
};
// ============================================
// Exam 31 (exam31.json) - Joggen: Mehr als nur Laufen
// ============================================

HELP_DATA["sprach2_exam31_1"] = {
    text: "Das moderne Leben ist bequem geworden",
    meaning: "أصبحت الحياة الحديثة مريحة",
    keywords: ["bequem = مريحة", "Leben = حياة", "moderne = حديثة"],
    simplified: "الحياة الحديثة تجعلنا نتحرك أقل ونعتمد على الراحة أكثر",
    imagine: "🛋️📺 أريكة وتلفاز"
};

HELP_DATA["sprach2_exam31_2"] = {
    text: "Herz-Kreislauf-Erkrankungen sind in den westlichen Industrieländern mittlerweile die Todesursache Nummer Eins",
    meaning: "أمراض القلب والأوعية الدموية هي الآن السبب الأول للوفاة في الدول الصناعية الغربية",
    keywords: ["sind = هي", "Todesursache = سبب وفاة", "Herz-Kreislauf-Erkrankungen = أمراض قلب"],
    simplified: "أمراض القلب أصبحت القاتل الأول في الغرب الصناعي",
    imagine: "❤️📈 قلب مع رسم بياني مرتفع"
};

HELP_DATA["sprach2_exam31_3"] = {
    text: "Wichtig ist immer richtig zu trainieren",
    meaning: "من المهم دائماً أن تتدرب بشكل صحيح",
    keywords: ["immer = دائماً", "richtig = بشكل صحيح", "trainieren = تتدرب"],
    simplified: "التدريب السليم أهم من مجرد التحرك",
    imagine: "🏋️✅ تمارين رياضية وعلامة صح"
};

HELP_DATA["sprach2_exam31_4"] = {
    text: "Ausdauertraining unter Verbrennung von Sauerstoff",
    meaning: "تدريب التحمل مع حرق الأكسجين",
    keywords: ["unter = مع", "Verbrennung = حرق", "Sauerstoff = أكسجين"],
    simplified: "الجري يحسن كفاءة استخدام جسمك للأكسجين",
    imagine: "💨🔥 هواء ونار"
};

HELP_DATA["sprach2_exam31_5"] = {
    text: "Dabei sollte der Puls kontrolliert werden",
    meaning: "يجب أن يُراقب النبض أثناء ذلك",
    keywords: ["sollte = يجب", "kontrolliert = يُراقب", "Puls = نبض"],
    simplified: "الحفاظ على معدل ضربات قلب صحيح يمنع الإصابات ويزيد من حرق الدهون",
    imagine: "💓📊 نبضات قلب ورسم بياني"
};

HELP_DATA["sprach2_exam31_6"] = {
    text: "dass mehr Menschen den Schritt in ein aktiveres Leben wagen sollten",
    meaning: "أنه يجب على المزيد من الناس أن يخطوا خطوة نحو حياة أكثر نشاطاً",
    keywords: ["dass = أنه", "Schritt = خطوة", "aktiveres Leben = حياة أكثر نشاطاً"],
    simplified: "يجب على الجميع تحدي الكسل وقلة الحركة",
    imagine: "🚶‍♂️💪 رجل يمشي وذراع قوي"
};

HELP_DATA["sprach2_exam31_7"] = {
    text: "Rund 40 Prozent aller Deutschen bringen zu viel auf die Waage",
    meaning: "حوالي 40 بالمئة من كل الألمان يعانون من الوزن الزائد",
    keywords: ["aller = كل", "Deutschen = الألمان", "zu viel auf die Waage = وزن زائد"],
    simplified: "نصف الألمان تقريباً يعانون من السمنة",
    imagine: "⚖️🍔 ميزان وبرغر"
};

HELP_DATA["sprach2_exam31_8"] = {
    text: "nicht selten mit einem Herzinfarkt",
    meaning: "ليس نادراً بنوبة قلبية",
    keywords: ["einem = بنوبة", "Herzinfarkt = نوبة قلبية", "mit = بـ"],
    simplified: "قلة الحركة تؤدي إلى أمراض القلب والسكري",
    imagine: "❤️⚠️ قلب وعلامة خطر"
};

HELP_DATA["sprach2_exam31_9"] = {
    text: "auch, und immer häufiger bei Frauen",
    meaning: "أيضاً، وبشكل متزايد لدى النساء",
    keywords: ["bei = لدى", "häufiger = بشكل متزايد", "Frauen = نساء"],
    simplified: "النساء الآن أكثر عرضة من أي وقت مضى للإصابة بأمراض القلب",
    imagine: "👩❤️ امرأة وقلب"
};

HELP_DATA["sprach2_exam31_10"] = {
    text: "wie Milch und Milchprodukte, pflanzliche Lebensmittel",
    meaning: "مثل الحليب ومنتجات الألبان والأطعمة النباتية",
    keywords: ["wie = مثل", "Milch = حليب", "pflanzliche Lebensmittel = أطعمة نباتية"],
    simplified: "النظام الغذائي الصحي يعمل جنباً إلى جنب مع التمارين الرياضية",
    imagine: "🥛🥗 حليب وسلطة"
};

// ============================================
// Exam 32 (exam32.json) - Der klügste Freund des Menschen
// ============================================

HELP_DATA["sprach2_exam32_1"] = {
    text: "gilt der Hund zwar als treuer Begleiter",
    meaning: "يُعتبر الكلب بالفعل رفيقاً مخلصاً",
    keywords: ["zwar = بالفعل", "treuer Begleiter = رفيق مخلص", "gilt = يُعتبر"],
    simplified: "منذ زمن طويل، الكلب هو أفضل صديق للإنسان",
    imagine: "🐕🤝 كلب ومصافحة"
};

HELP_DATA["sprach2_exam32_2"] = {
    text: "durchgeführt wurden",
    meaning: "تم تنفيذها",
    keywords: ["wurden = تم", "durchgeführt = تنفيذ", "Untersuchungen = دراسات"],
    simplified: "الدراسة أجريت في جامعات مرموقة",
    imagine: "🔬🏛️ مختبر ومبنى جامعي"
};

HELP_DATA["sprach2_exam32_3"] = {
    text: "lesen kommunikative Informationen besonders an den Augen ab",
    meaning: "يقرؤون المعلومات التواصلية خاصة من العيون",
    keywords: ["ab = من", "Augen = عيون", "lesen = يقرؤون"],
    simplified: "الكلاب بارعة في قراءة انتباهك من خلال عينيك",
    imagine: "🐕👀 كلب وعينان"
};

HELP_DATA["sprach2_exam32_4"] = {
    text: "sie reagieren auch auf die Stimme und die Körpersprache",
    meaning: "يتفاعلون أيضاً مع الصوت ولغة الجسد",
    keywords: ["auf = مع", "Stimme = صوت", "Körpersprache = لغة جسد"],
    simplified: "يستجيب الكلب لنبرة صوتك وحركات جسدك",
    imagine: "🗣️🐕 كلام وكلب"
};

HELP_DATA["sprach2_exam32_5"] = {
    text: "Ganz besonders der Blickkontakt sei für Hunde ein wichtiges Instrument",
    meaning: "الاتصال البصري مهم بشكل خاص للكلاب كأداة مهمة",
    keywords: ["sei = يكون", "wichtiges Instrument = أداة مهمة", "Blickkontakt = اتصال بصري"],
    simplified: "الكلاب تستخدم التواصل البصري لجمع المعلومات عن البشر",
    imagine: "👀🐕 عينان مع كلب"
};

HELP_DATA["sprach2_exam32_6"] = {
    text: "War der Behälter nach dem Öffnen leer",
    meaning: "إذا كانت الحاوية فارغة بعد الفتح",
    keywords: ["War = كان", "leer = فارغة", "Öffnen = فتح"],
    simplified: "تفهم الكلاب مفهوم الأشياء المخفية",
    imagine: "📦🤔 صندوق وعلامة استفهام"
};

HELP_DATA["sprach2_exam32_7"] = {
    text: "er leitet sie um Hindernisse herum",
    meaning: "يقودهم حول العوائق",
    keywords: ["um = حول", "Hindernisse = عوائق", "herum = حول"],
    simplified: "كلب الدليل حذق في إيجاد مسارات آمنة",
    imagine: "🦯🐕 عصا وكلب"
};

HELP_DATA["sprach2_exam32_8"] = {
    text: "geht man davon aus",
    meaning: "يُفترض",
    keywords: ["davon = ذلك", "aus = من", "geht aus = يُفترض"],
    simplified: "الدراسات الجينية تكشف أصل الكلاب",
    imagine: "🧬🐕 حمض نووي وكلب"
};

HELP_DATA["sprach2_exam32_9"] = {
    text: "können also stolz darauf sein",
    meaning: "يمكنهم بالتالي أن يفخروا بذلك",
    keywords: ["darauf = بذلك", "stolz = فخورين", "sein = يكونوا"],
    simplified: "أصحاب الكلاب اليوم لديهم سبب حقيقي للفخر",
    imagine: "🏆🐕 كأس وكلب"
};

HELP_DATA["sprach2_exam32_10"] = {
    text: "nicht nur einen anhänglichen, sondern auch einen intelligenten Begleiter",
    meaning: "ليس فقط رفيقاً مخلصاً، بل أيضاً رفيقاً ذكياً",
    keywords: ["sondern = بل", "intelligent = ذكياً", "anhänglichen = مخلصاً"],
    simplified: "الكلب ليس وفيّاً فحسب، بل هو رفيق ذكي",
    imagine: "🧠🐕 دماغ وكلب"
};

// ============================================
// Exam 33 (exam33.json) - Der klügste Freund des Menschen (معدل)
// ============================================

HELP_DATA["sprach2_exam33_1"] = {
    text: "gilt der Hund zwar als treuer Begleiter",
    meaning: "يُعتبر الكلب بالفعل رفيقاً مخلصاً",
    keywords: ["zwar = بالفعل", "treuer Begleiter = رفيق مخلص", "gilt = يُعتبر"],
    simplified: "منذ زمن طويل، الكلب هو أفضل صديق للإنسان",
    imagine: "🐕🤝 كلب ومصافحة"
};

HELP_DATA["sprach2_exam33_2"] = {
    text: "durchgeführt wurden",
    meaning: "تم تنفيذها",
    keywords: ["wurden = تم", "durchgeführt = تنفيذ", "Untersuchungen = دراسات"],
    simplified: "الدراسة أجريت في جامعات مرموقة",
    imagine: "🔬🏛️ مختبر ومبنى جامعي"
};

HELP_DATA["sprach2_exam33_3"] = {
    text: "lesen kommunikative Informationen besonders an den Augen ab",
    meaning: "يقرؤون المعلومات التواصلية خاصة من العيون",
    keywords: ["ab = من", "Augen = عيون", "lesen = يقرؤون"],
    simplified: "الكلاب بارعة في قراءة انتباهك من خلال عينيك",
    imagine: "🐕👀 كلب وعينان"
};

HELP_DATA["sprach2_exam33_4"] = {
    text: "sie reagieren auch auf die Stimme und die Körpersprache",
    meaning: "يتفاعلون أيضاً مع الصوت ولغة الجسد",
    keywords: ["auf = مع", "Stimme = صوت", "Körpersprache = لغة جسد"],
    simplified: "يستجيب الكلب لنبرة صوتك وحركات جسدك",
    imagine: "🗣️🐕 كلام وكلب"
};

HELP_DATA["sprach2_exam33_5"] = {
    text: "Ganz besonders der Blickkontakt sei für Hunde ein wichtiges Instrument",
    meaning: "الاتصال البصري مهم بشكل خاص للكلاب كأداة مهمة",
    keywords: ["sei = يكون", "wichtiges Instrument = أداة مهمة", "Blickkontakt = اتصال بصري"],
    simplified: "الكلاب تستخدم التواصل البصري لجمع المعلومات عن البشر",
    imagine: "👀🐕 عينان مع كلب"
};

HELP_DATA["sprach2_exam33_6"] = {
    text: "War der Behälter nach dem Öffnen leer",
    meaning: "إذا كانت الحاوية فارغة بعد الفتح",
    keywords: ["War = كان", "leer = فارغة", "Öffnen = فتح"],
    simplified: "تفهم الكلاب مفهوم الأشياء المخفية",
    imagine: "📦🤔 صندوق وعلامة استفهام"
};

HELP_DATA["sprach2_exam33_7"] = {
    text: "er leitet sie um Hindernisse herum",
    meaning: "يقودهم حول العوائق",
    keywords: ["um = حول", "Hindernisse = عوائق", "herum = حول"],
    simplified: "كلب الدليل حذق في إيجاد مسارات آمنة",
    imagine: "🦯🐕 عصا وكلب"
};

HELP_DATA["sprach2_exam33_8"] = {
    text: "geht man davon aus",
    meaning: "يُفترض",
    keywords: ["davon = ذلك", "aus = من", "geht aus = يُفترض"],
    simplified: "الدراسات الجينية تكشف أصل الكلاب",
    imagine: "🧬🐕 حمض نووي وكلب"
};

HELP_DATA["sprach2_exam33_9"] = {
    text: "können also stolz darauf sein",
    meaning: "يمكنهم بالتالي أن يفخروا بذلك",
    keywords: ["darauf = بذلك", "stolz = فخورين", "sein = يكونوا"],
    simplified: "أصحاب الكلاب اليوم لديهم سبب حقيقي للفخر",
    imagine: "🏆🐕 كأس وكلب"
};

HELP_DATA["sprach2_exam33_10"] = {
    text: "nicht nur einen anhänglichen, sondern auch einen intelligenten Begleiter",
    meaning: "ليس فقط رفيقاً مخلصاً، بل أيضاً رفيقاً ذكياً",
    keywords: ["sondern = بل", "intelligent = ذكياً", "anhänglichen = مخلصاً"],
    simplified: "الكلب ليس وفيّاً فحسب، بل هو رفيق ذكي",
    imagine: "🧠🐕 دماغ وكلب"
};

// ============================================
// Exam 34 (exam34.json) - Manipulierte Bilder
// ============================================

HELP_DATA["sprach2_exam34_1"] = {
    text: "mit einer Flut von Fotos konfrontiert",
    meaning: "نواجه طوفاناً من الصور",
    keywords: ["Flut = طوفان", "Fotos = صور", "konfrontiert = نواجه"],
    simplified: "كمية هائلة من الصور تغمرنا يومياً",
    imagine: "🌊📸 أمواج وكاميرا"
};

HELP_DATA["sprach2_exam34_2"] = {
    text: "machen es sogar für Laien recht einfach",
    meaning: "تجعلها سهلة جداً حتى للهواة",
    keywords: ["recht = جداً", "einfach = سهلة", "Laien = هواة"],
    simplified: "أدوات التعديل متاحة بسهولة للجميع",
    imagine: "🖥️✏️ شاشة حاسوب وقلم رصاص"
};

HELP_DATA["sprach2_exam34_3"] = {
    text: "aber die Möglichkeiten der Bildbearbeitung lassen sich natürlich auch für Betrügereien missbrauchen",
    meaning: "لكن إمكانيات تحرير الصور يمكن إساءة استخدامها بالطبع في الاحتيال",
    keywords: ["aber = لكن", "Betrügereien = احتيال", "missbrauchen = إساءة استخدام"],
    simplified: "التقنية سلاح ذو حدين، فقد تستخدم لخداع الناس",
    imagine: "🎭🖼️ قناع وصورة"
};

HELP_DATA["sprach2_exam34_4"] = {
    text: "stellt sich die Frage",
    meaning: "يطرح السؤال",
    keywords: ["stellt = يطرح", "Frage = سؤال", "sich = نفسه"],
    simplified: "الباحثون تساءلوا عن مدى سهولة اكتشاف الصور المعدلة",
    imagine: "❓🤔 علامة استفهام وشخص يفكر"
};

HELP_DATA["sprach2_exam34_5"] = {
    text: "Diesen Fragen sind Forscher nachgegangen",
    meaning: "الباحثون تحققوا من هذه الأسئلة",
    keywords: ["Diesen = هذه", "nachgegangen = تحققوا", "Fragen = أسئلة"],
    simplified: "أُجريت دراسة لاختبار مهارة الناس في كشف التزوير",
    imagine: "🔬🧪 مختبر وأنابيب اختبار"
};

HELP_DATA["sprach2_exam34_6"] = {
    text: "Die meisten Teilnehmer waren nur eher zufällig in der Lage, ein manipuliertes Bild zu identifizieren",
    meaning: "معظم المشاركين كانوا قادرين فقط وبشكل عشوائي على تحديد الصورة المتلاعب بها",
    keywords: ["meisten = معظم", "zufällig = بشكل عشوائي", "identifizieren = تحديد"],
    simplified: "الغالبية العظمى فشلت في اكتشاف التلاعبات حتى الواضحة",
    imagine: "🖼️❓ صورة وعلامة استفهام"
};

HELP_DATA["sprach2_exam34_7"] = {
    text: "konnten sie tatsächlich korrekt bestimmen",
    meaning: "تمكنوا من تحديدها بشكل صحيح",
    keywords: ["korrekt = بشكل صحيح", "bestimmen = تحديد", "konnten = تمكنوا"],
    simplified: "نسبة صغيرة فقط خمنت المكان الصحيح للتعديل",
    imagine: "📍✅ تحديد وعلامة صح"
};

HELP_DATA["sprach2_exam34_8"] = {
    text: "unlogische Abweichungen",
    meaning: "انحرافات غير منطقية",
    keywords: ["unlogische = غير منطقية", "Abweichungen = انحرافات", "andere = أخرى"],
    simplified: "حتى الأخطاء الواضحة في الفيزياء لم تلفت انتباه المشاهدين",
    imagine: "🔍❌ بحث وعلامة خطأ"
};

HELP_DATA["sprach2_exam34_9"] = {
    text: "nicht zwischen echten und gefälschten Details auf Fotos unterscheiden",
    meaning: "لا يستطيعون التمييز بين التفاصيل الحقيقية والمزيفة في الصور",
    keywords: ["unterscheiden = التمييز", "echten = حقيقية", "gefälschten = مزيفة"],
    simplified: "نحن نصدق ما نراه، حتى عندما يكون مزيفاً",
    imagine: "👀✅ عينان وعلامة صح"
};

HELP_DATA["sprach2_exam34_10"] = {
    text: "Die Ergebnisse dokumentierten somit, dass wir recht leicht auf Fake-Fotos reinfallen können",
    meaning: "النتائج وثقت بالتالي أننا نقع بسهولة في فخ الصور المزيفة",
    keywords: ["somit = بالتالي", "dokumentierten = وثقت", "reinfallen = نقع في فخ"],
    simplified: "النتائج تؤكد ضعف الإنسان أمام التزييف البصري",
    imagine: "📸🎭 كاميرا وقناع"
};

// ============================================
// Exam 35 (exam35.json) - Maßgeschneidert nach Bodyscanning
// ============================================

HELP_DATA["sprach2_exam35_1"] = {
    text: "darüber geärgert",
    meaning: "منزعج من ذلك",
    keywords: ["darüber = من ذلك", "geärgert = منزعج", "haben = كان"],
    simplified: "شعور الجميع عند تجربة ملابس لا تناسبهم",
    imagine: "👗😞 فستان ووجه حزين"
};

HELP_DATA["sprach2_exam35_2"] = {
    text: "fast nur noch in den falschen Größen",
    meaning: "تقريباً فقط بمقاسات خاطئة",
    keywords: ["nur = فقط", "falschen = خاطئة", "Größen = مقاسات"],
    simplified: "يبدو أن مقاسات الملابس الجاهزة لا تناسب أحداً",
    imagine: "📏❌ شريط قياس وعلامة خطأ"
};

HELP_DATA["sprach2_exam35_3"] = {
    text: "brachte nun ans Licht",
    meaning: "كشف الآن النقاب عن",
    keywords: ["ans = إلى", "Licht = النور", "brachte = كشف"],
    simplified: "الدراسة كشفت أن تغير شكل الجسم هو السبب",
    imagine: "💡📋 مصباح وأوراق"
};

HELP_DATA["sprach2_exam35_4"] = {
    text: "weder den Kundinnen noch den Kunden passen",
    meaning: "لا تناسب العملاء ولا العميلات",
    keywords: ["weder...noch = لا...ولا", "passen = تناسب", "Kundinnen = عميلات"],
    simplified: "الأجسام تغيرت لكن المقاسات لم تتغير",
    imagine: "👥📈 مجموعة أشخاص ورسم بياني"
};

HELP_DATA["sprach2_exam35_5"] = {
    text: "müssen",
    meaning: "يجب (عليهم البحث)",
    keywords: ["müssen = يجب", "suchen = البحث", "Grund = سبب"],
    simplified: "مصنعو الملابس يتحملون مسؤولية تجاهل تغيرات الجسم",
    imagine: "🏭👖 مصنع وسروال"
};

HELP_DATA["sprach2_exam35_6"] = {
    text: "Da der Handel natürlich daran interessiert ist",
    meaning: "بما أن التجارة مهتمة بطبيعة الحال",
    keywords: ["Da = بما أن", "interessiert = مهتمة", "Handel = تجارة"],
    simplified: "صناعة الأزياء تريد حلولاً دقيقة لزيادة المبيعات",
    imagine: "💰👗 نقود وفستان"
};

HELP_DATA["sprach2_exam35_7"] = {
    text: "ein neues Projekt geplant, das Aufschluss darüber geben soll",
    meaning: "تم التخطيط لمشروع جديد من شأنه أن يعطي معلومات عن",
    keywords: ["das = الذي", "Aufschluss = معلومات", "geben = يعطي"],
    simplified: "تكنولوجيا المسح ثلاثي الأبعاد ستحدث ثورة في عالم الموضة",
    imagine: "📸👤 كاميرا وشخص"
};

HELP_DATA["sprach2_exam35_8"] = {
    text: "Diese dreidimensionalen Bilder sollen es ermöglichen",
    meaning: "هذه الصور ثلاثية الأبعاد ستجعل من الممكن",
    keywords: ["sollen = ست", "ermöglichen = تجعل من الممكن", "Bilder = صور"],
    simplified: "بيانات القياس الدقيقة ستؤدي إلى ملابس أفضل",
    imagine: "📐👔 زاوية وقميص"
};

HELP_DATA["sprach2_exam35_9"] = {
    text: "dürfen wir uns außerdem darauf freuen",
    meaning: "يمكننا أيضاً أن نتطلع إلى ذلك",
    keywords: ["dürfen = يمكننا", "freuen = نتطلع", "außerdem = أيضاً"],
    simplified: "الفوائد الجانبية للثورة التقنية تشمل المستهلكين أيضاً",
    imagine: "🎉😊 احتفال ووجه مبتسم"
};

HELP_DATA["sprach2_exam35_10"] = {
    text: "dass sich die Modefirmen vielleicht endlich dafür entscheiden",
    meaning: "أن تقرر شركات الأزياء أخيراً",
    keywords: ["dass = أن", "entscheiden = تقرر", "endlich = أخيراً"],
    simplified: "أحلم بيوم تصبح فيه مقاسات الملابس عالمية",
    imagine: "🌍👕 كرة أرضية وقميص"
};

// ============================================
// Exam 36 (exam36.json) - Maßgeschneidert nach Bodyscanning (معدل)
// ============================================

HELP_DATA["sprach2_exam36_1"] = {
    text: "darüber aufgeregt",
    meaning: "منزعج من ذلك",
    keywords: ["darüber = من ذلك", "aufgeregt = منزعج", "haben = كان"],
    simplified: "شعور الجميع عند تجربة ملابس لا تناسبهم",
    imagine: "👗😞 فستان ووجه حزين"
};

HELP_DATA["sprach2_exam36_2"] = {
    text: "fast nur noch in den falschen Größen",
    meaning: "تقريباً فقط بمقاسات خاطئة",
    keywords: ["nur = فقط", "falschen = خاطئة", "Größen = مقاسات"],
    simplified: "يبدو أن مقاسات الملابس الجاهزة لا تناسب أحداً",
    imagine: "📏❌ شريط قياس وعلامة خطأ"
};

HELP_DATA["sprach2_exam36_3"] = {
    text: "kam nun zu der folgenden Erkenntnis",
    meaning: "توصل الآن إلى الاستنتاج التالي",
    keywords: ["kam = توصل", "Erkenntnis = استنتاج", "folgenden = التالي"],
    simplified: "الدراسة كشفت فجوة خطيرة بين أنماط الأجسام الحالية والمقاسات",
    imagine: "🔬📄 معمل وورقة استنتاجات"
};

HELP_DATA["sprach2_exam36_4"] = {
    text: "weder den Kundinnen noch den Kunden passen",
    meaning: "لا تناسب العملاء ولا العميلات",
    keywords: ["weder...noch = لا...ولا", "passen = تناسب", "Kundinnen = عميلات"],
    simplified: "الأجسام تغيرت لكن المقاسات لم تتغير",
    imagine: "👥📈 مجموعة أشخاص ورسم بياني"
};

HELP_DATA["sprach2_exam36_5"] = {
    text: "habe zugenommen",
    meaning: "قد زادت",
    keywords: ["habe = قد", "zugenommen = زادت", "Länge = طول"],
    simplified: "الأذرع والأجساد أصبحت أطول وأكبر مع مرور الزمن",
    imagine: "📈⬆️ رسم بياني صاعد"
};

HELP_DATA["sprach2_exam36_6"] = {
    text: "Da man natürlich daran interessiert ist",
    meaning: "بما أن المرء مهتم بطبيعة الحال",
    keywords: ["Da = بما أن", "interessiert = مهتم", "natürlich = طبيعياً"],
    simplified: "صناعة الأزياء ترغب في حل مشكلة عدم تطابق المقاسات",
    imagine: "👗💡 فستان ومصباح"
};

HELP_DATA["sprach2_exam36_7"] = {
    text: "ein neues Verfahren entwickelt, das Männer und Frauen neu vermessen soll",
    meaning: "تم تطوير إجراء جديد من المفترض أن يقيس الرجال والنساء من جديد",
    keywords: ["das = الذي", "neu = من جديد", "vermissen = يقيس"],
    simplified: "تم ابتكار تقنية عالية الدقة لحل هذه المشكلة",
    imagine: "📏💻 شريط قياس وحاسوب"
};

HELP_DATA["sprach2_exam36_8"] = {
    text: "sollen es ermöglichen",
    meaning: "من المفترض أن تجعل من الممكن",
    keywords: ["sollen = من المفترض أن", "ermöglichen = تجعل من الممكن", "es = ذلك"],
    simplified: "سيتم رفع دقة القياسات إلى أقصى حد",
    imagine: "📊🎯 رسم بياني وهدف"
};

HELP_DATA["sprach2_exam36_9"] = {
    text: "dass sich die Modefirmen vielleicht endlich dafür entscheiden",
    meaning: "أن تقرر شركات الأزياء أخيراً",
    keywords: ["dass = أن", "entscheiden = تقرر", "endlich = أخيراً"],
    simplified: "أحلم بيوم تصبح فيه مقاسات الملابس عالمية",
    imagine: "🌍👕 كرة أرضية وقميص"
};

HELP_DATA["sprach2_exam36_10"] = {
    text: "gleich groß",
    meaning: "بنفس الحجم",
    keywords: ["gleich = نفس", "groß = حجم", "ist = يكون"],
    simplified: "التوحيد العالمي للمقاسات سيجعل التسوق أسهل للجميع",
    imagine: "🌍📏 كرة أرضية وشريط قياس"
};

// ============================================
// Exam 37 (exam37.json) - Im Restaurant
// ============================================

HELP_DATA["sprach2_exam37_1"] = {
    text: "gehören nicht auf den Tisch",
    meaning: "لا ينبغي أن تكون على الطاولة",
    keywords: ["gehören = تنتمي", "Tisch = طاولة", "nicht = لا"],
    simplified: "آداب المائدة تحظر وضع المرفقين على الطاولة",
    imagine: "🍽️🚫 طعام وعلامة منع"
};

HELP_DATA["sprach2_exam37_2"] = {
    text: "behält in jedem Fall an",
    meaning: "يبقيهما في كل الأحوال",
    keywords: ["behält = يبقي", "an = على", "Schuhe = حذاء"],
    simplified: "من غير اللائق خلع الحذاء في مطعم فاخر",
    imagine: "👞🚫 حذاء وعلامة منع"
};

HELP_DATA["sprach2_exam37_3"] = {
    text: "so mancher vor einem Problem",
    meaning: "كثير من الناس أمام مشكلة",
    keywords: ["mancher = كثير من الناس", "Problem = مشكلة", "vor = أمام"],
    simplified: "حتى الخدمة اللطيفة يمكن أن تسبب حرجاً عندما يتعلق الأمر بالتحدث مع النادل",
    imagine: "🙋‍♂️😕 نادل ووجه حائر"
};

HELP_DATA["sprach2_exam37_4"] = {
    text: "mit der Anrede 'Fräulein' an den Tisch zu rufen",
    meaning: "مناداتها بـ 'آنسة' إلى الطاولة",
    keywords: ["mit = بـ", "Anrede = مناداتها", "Fräulein = آنسة"],
    simplified: "بعض التسميات غير لائقة في عصر المساواة",
    imagine: "👩‍🦳❌ امرأة وعلامة منع"
};

HELP_DATA["sprach2_exam37_5"] = {
    text: "ist dagegen zwar korrekt",
    meaning: "هو على العكس صحيح",
    keywords: ["dagegen = على العكس", "zwar = صحيح", "korrekt = صحيح"],
    simplified: "كلمة 'نادل' صحيحة نحويًا لكنها قديمة الطراز",
    imagine: "📖✅ كتاب وعلامة صح"
};

HELP_DATA["sprach2_exam37_6"] = {
    text: "mit einem kleinen Wink mit der Hand den Kellner an den Tisch zu bitten",
    meaning: "لطلب النادل إلى الطاولة بإشارة صغيرة باليد",
    keywords: ["wink = إشارة", "Hand = يد", "kleinen = صغيرة"],
    simplified: "الإشارة الخفيفة هي أكثر الطرق تهذيباً لجذب الانتباه",
    imagine: "👋🤫 تلويح وصمت"
};

HELP_DATA["sprach2_exam37_7"] = {
    text: "Ist man mit dem Essen fertig",
    meaning: "إذا انتهى الشخص من الطعام",
    keywords: ["fertig = منتهياً", "Essen = طعام", "ist = كان"],
    simplified: "لغة الجسد في المطاعم: وضعية السكين والشوكة علامة",
    imagine: "🍴🔚 شوكة وسكين ونهاية"
};

HELP_DATA["sprach2_exam37_8"] = {
    text: "ist takt gefragt",
    meaning: "هناك حاجة إلى لباقة",
    keywords: ["takt = لباقة", "gefragt = مطلوبة", "ist = هناك"],
    simplified: "يتطلب عرض الدفع حساسية كبيرة لتجنب الإحراج",
    imagine: "💳🤝 بطاقة ائتمان ومصافحة"
};

HELP_DATA["sprach2_exam37_9"] = {
    text: "macht er dies dem Kellner klar",
    meaning: "يجعل هذا الأمر واضحاً للنادل",
    keywords: ["klar = واضحاً", "Kellner = نادل", "macht = يجعل"],
    simplified: "الإشارة الواضحة لمن يدفع تمنع الالتباس",
    imagine: "👆💵 إصبع指向 وورقة نقدية"
};

HELP_DATA["sprach2_exam37_10"] = {
    text: "was durchaus üblich ist",
    meaning: "وهو أمر شائع جداً",
    keywords: ["was = وهو", "üblich = شائع", "durchaus = جداً"],
    simplified: "الدفع المنفصل مقبول تماماً في ألمانيا",
    imagine: "💰💰 نقود ونقود"
};

// ============================================
// Exam 38 (exam38.json) - Im Restaurant (معدل)
// ============================================

HELP_DATA["sprach2_exam38_1"] = {
    text: "gehören nicht auf den Tisch",
    meaning: "لا ينبغي أن تكون على الطاولة",
    keywords: ["gehören = تنتمي", "Tisch = طاولة", "nicht = لا"],
    simplified: "آداب المائدة تحظر وضع المرفقين على الطاولة",
    imagine: "🍽️🚫 طعام وعلامة منع"
};

HELP_DATA["sprach2_exam38_2"] = {
    text: "behält in jedem Fall an",
    meaning: "يبقيهما في كل الأحوال",
    keywords: ["behält = يبقي", "an = على", "Schuhe = حذاء"],
    simplified: "من غير اللائق خلع الحذاء في مطعم فاخر",
    imagine: "👞🚫 حذاء وعلامة منع"
};

HELP_DATA["sprach2_exam38_3"] = {
    text: "bereitet so manchem Probleme",
    meaning: "تسبب المشاكل لكثير من الناس",
    keywords: ["manchem = كثير من الناس", "Probleme = مشاكل", "bereitet = تسبب"],
    simplified: "حتى الخدمة اللطيفة يمكن أن تسبب حرجاً عندما يتعلق الأمر بالتحدث مع النادل",
    imagine: "🙋‍♂️😕 نادل ووجه حائر"
};

HELP_DATA["sprach2_exam38_4"] = {
    text: "mit der Anrede 'Fräulein' an den Tisch zu rufen",
    meaning: "مناداتها بـ 'آنسة' إلى الطاولة",
    keywords: ["mit = بـ", "Anrede = مناداتها", "Fräulein = آنسة"],
    simplified: "بعض التسميات غير لائقة في عصر المساواة",
    imagine: "👩‍🦳❌ امرأة وعلامة منع"
};

HELP_DATA["sprach2_exam38_5"] = {
    text: "ist dagegen zwar korrekt",
    meaning: "هو على العكس صحيح",
    keywords: ["dagegen = على العكس", "zwar = صحيح", "korrekt = صحيح"],
    simplified: "كلمة 'نادل' صحيحة نحويًا لكنها قديمة الطراز",
    imagine: "📖✅ كتاب وعلامة صح"
};

HELP_DATA["sprach2_exam38_6"] = {
    text: "mit einem kleinen Wink mit der Hand den Kellner an den Tisch zu bitten",
    meaning: "لطلب النادل إلى الطاولة بإشارة صغيرة باليد",
    keywords: ["wink = إشارة", "Hand = يد", "kleinen = صغيرة"],
    simplified: "الإشارة الخفيفة هي أكثر الطرق تهذيباً لجذب الانتباه",
    imagine: "👋🤫 تلويح وصمت"
};

HELP_DATA["sprach2_exam38_7"] = {
    text: "Wenn man mit dem Essen fertig ist",
    meaning: "إذا انتهى الشخص من الطعام",
    keywords: ["fertig = منتهياً", "Essen = طعام", "ist = كان"],
    simplified: "لغة الجسد في المطاعم: وضعية السكين والشوكة علامة",
    imagine: "🍴🔚 شوكة وسكين ونهاية"
};

HELP_DATA["sprach2_exam38_8"] = {
    text: "ist taktgefühl wichtig",
    meaning: "اللباقة مهمة",
    keywords: ["taktgefühl = لباقة", "wichtig = مهمة", "ist = هناك"],
    simplified: "يتطلب عرض الدفع حساسية كبيرة لتجنب الإحراج",
    imagine: "💳🤝 بطاقة ائتمان ومصافحة"
};

HELP_DATA["sprach2_exam38_9"] = {
    text: "macht er dies dem Kellner klar",
    meaning: "يجعل هذا الأمر واضحاً للنادل",
    keywords: ["klar = واضحاً", "Kellner = نادل", "macht = يجعل"],
    simplified: "الإشارة الواضحة لمن يدفع تمنع الالتباس",
    imagine: "👆💵 إصبع指向 وورقة نقدية"
};

HELP_DATA["sprach2_exam38_10"] = {
    text: "was durchaus üblich ist",
    meaning: "وهو أمر شائع جداً",
    keywords: ["was = وهو", "üblich = شائع", "durchaus = جداً"],
    simplified: "الدفع المنفصل مقبول تماماً في ألمانيا",
    imagine: "💰💰 نقود ونقود"
};

// ============================================
// Exam 39 (exam39.json) - Lernen ist kein Privileg der Jugend
// ============================================

HELP_DATA["sprach2_exam39_1"] = {
    text: "Senioren sind heute höchst rege aktiv",
    meaning: "كبار السن نشيطون جداً اليوم",
    keywords: ["rege = نشيطون", "aktiv = نشيطون", "Senioren = كبار السن"],
    simplified: "كبار السن أكثر حيوية ونشاطاً من أي وقت مضى",
    imagine: "👴💪 رجل كبير وقوي"
};

HELP_DATA["sprach2_exam39_2"] = {
    text: "wie es an verschiedenen deutschen Universitäten angeboten wird",
    meaning: "كما هو معروض في جامعات ألمانية مختلفة",
    keywords: ["an = في", "angeboten = معروض", "Universitäten = جامعات"],
    simplified: "العديد من الجامعات تستقبل كبار السن كطلاب مستمعين",
    imagine: "🏛️👵 مبنى جامعي وامرأة مسنة"
};

HELP_DATA["sprach2_exam39_3"] = {
    text: "Allein in Trier waren über 130 Personen der Altersgruppe 50+ als Gasthörer eingeschrieben",
    meaning: "في ترير وحدها، كان أكثر من 130 شخصاً من الفئة العمرية 50+ مسجلين كطلاب مستمعين",
    keywords: ["Allein = وحدها", "als = كـ", "Gasthörer = طلاب مستمعين"],
    simplified: "أعداد كبيرة من المتقاعدين تملأ قاعات المحاضرات",
    imagine: "👥🏫 مجموعة أشخاص في قاعة محاضرات"
};

HELP_DATA["sprach2_exam39_4"] = {
    text: "Darauf folgten die neueren Sprach- und Literaturwissenschaften",
    meaning: "تبع ذلك علوم اللغة والأدب الحديثة",
    keywords: ["Darauf = بعد ذلك", "folgten = تبع", "neueren = الحديثة"],
    simplified: "مواد العلوم الإنسانية كانت الخيار الأول",
    imagine: "📖🏛️ كتاب ومبنى جامعي"
};

HELP_DATA["sprach2_exam39_5"] = {
    text: "Die Gründe dafür dürften sein",
    meaning: "الأسباب لذلك قد تكون",
    keywords: ["dürften = قد تكون", "Gründe = أسباب", "dafür = لذلك"],
    simplified: "تفسير لكثرة النساء بين الطلاب المسنين",
    imagine: "👩‍🎓❓ طالبة وعلامة استفهام"
};

HELP_DATA["sprach2_exam39_6"] = {
    text: "dass Frauen in ihren jüngeren Lebensjahren häufig auf eine berufliche Karriere verzichteten",
    meaning: "أن النساء في سنوات عمرهن الأصغر تخلىن غالباً عن مهنة",
    keywords: ["auf = عن", "verzichteten = تخلىن", "Karriere = مهنة"],
    simplified: "العديد من النساء قدمن أسرتهن على حساب طموحاتهن المهنية",
    imagine: "👩‍👧‍👦💼 أم وشنطة عمل"
};

HELP_DATA["sprach2_exam39_7"] = {
    text: "Stattdessen setzten sie sich für die Familie und insbesondere für ihre Kinder ein",
    meaning: "بدلاً من ذلك، كرّسن أنفسهن للعائلة وخاصة لأطفالهن",
    keywords: ["Stattdessen = بدلاً من ذلك", "setzten ein = كرّسن", "Familie = عائلة"],
    simplified: "تفانوا في رعاية الأسرة وتربية الأطفال",
    imagine: "🏠❤️ منزل وقلب"
};

HELP_DATA["sprach2_exam39_8"] = {
    text: "deren Einsatz in den 'Familienjahren' häufig zu kurz gekommen war",
    meaning: "الذي كان استخدامها في 'سنوات الأسرة' غالباً غير كافٍ",
    keywords: ["kurz = غير كافٍ", "Einsatz = استخدام", "Familienjahren = سنوات الأسرة"],
    simplified: "الآن حان الوقت لصقل تلك العقول المتعطشة للمعرفة",
    imagine: "🧠💡 عقل ومصباح"
};

HELP_DATA["sprach2_exam39_9"] = {
    text: "Aufgrund dessen sehen sie keine Veranlassung",
    meaning: "وبسبب ذلك لا يرون سبباً",
    keywords: ["Aufgrund dessen = بسبب ذلك", "Veranlassung = سبباً", "sehen = يرون"],
    simplified: "الرجال أقل اهتماماً بالدراسة بعد التقاعد",
    imagine: "👴📚 رجل كبير وكتاب"
};

HELP_DATA["sprach2_exam39_10"] = {
    text: "Er wird gespeist durch die Vitalität und die hohe Bildungsmotivation",
    meaning: "يتم تغذيته من خلال الحيوية والدافع التعليمي العالي",
    keywords: ["durch = من خلال", "Vitalität = حيوية", "Bildungsmotivation = دافع تعليمي"],
    simplified: "جوع كبار السن للمعرفة لا يشبع",
    imagine: "📚🔥 كتب ونار"
};

// ============================================
// Exam 40 (exam40.json) - Lernen ist kein Privileg der Jugend (معدل)
// ============================================

HELP_DATA["sprach2_exam40_1"] = {
    text: "nutzen vielfach die Chance",
    meaning: "يستغلون الفرصة كثيراً",
    keywords: ["nutzen = يستغلون", "Chance = فرصة", "vielfach = كثيراً"],
    simplified: "كبار السن يغتنمون الفرص لتحقيق أحلامهم المؤجلة",
    imagine: "🌟👴 نجمة ورجل كبير"
};

HELP_DATA["sprach2_exam40_2"] = {
    text: "wie es an verschiedenen deutschen Universitäten angeboten wird",
    meaning: "كما هو معروض في جامعات ألمانية مختلفة",
    keywords: ["angeboten = معروض", "Universitäten = جامعات", "an = في"],
    simplified: "جامعات كثيرة أصبحت ترحب بالطلاب المسنين",
    imagine: "🏛️👵 مبنى جامعي وامرأة مسنة"
};

HELP_DATA["sprach2_exam40_3"] = {
    text: "als Gasthörer eingeschrieben",
    meaning: "مسجلين كطلاب مستمعين",
    keywords: ["als = كـ", "Gasthörer = طلاب مستمعين", "eingeschrieben = مسجلين"],
    simplified: "ظاهرة الطلاب المسنين في ارتفاع مستمر",
    imagine: "📈👴 رسم بياني ورجل كبير"
};

HELP_DATA["sprach2_exam40_4"] = {
    text: "wurden dagegen weniger häufig gewählt",
    meaning: "على العكس، تم اختيارها بشكل أقل",
    keywords: ["dagegen = على العكس", "weniger = أقل", "häufig = بشكل"],
    simplified: "التخصصات العملية أقل جذباً لكبار السن",
    imagine: "⚖️📉 ميزان ورسم بياني هابط"
};

HELP_DATA["sprach2_exam40_5"] = {
    text: "Die Gründe dafür könnten sein",
    meaning: "الأسباب لذلك قد تكون",
    keywords: ["könnten = قد تكون", "Gründe = أسباب", "dafür = لذلك"],
    simplified: "تفسير لكثرة النساء بين الطلاب المسنين",
    imagine: "👩‍🎓❓ طالبة وعلامة استفهام"
};

HELP_DATA["sprach2_exam40_6"] = {
    text: "setzten sie sich für die Familie und ihre Kinder ein",
    meaning: "كرّسن أنفسهن للعائلة وأطفالهن",
    keywords: ["für = لـ", "setzten ein = كرّسن", "Familie = عائلة"],
    simplified: "تفانوا في رعاية الأسرة وتربية الأطفال",
    imagine: "🏠❤️ منزل وقلب"
};

HELP_DATA["sprach2_exam40_7"] = {
    text: "Wenn die Kinder erwachsen sind",
    meaning: "عندما يكبر الأطفال",
    keywords: ["erwachsen = كباراً", "Kinder = أطفال", "sind = يكونوا"],
    simplified: "بعد مغادرة الأبناء للمنزل، تبدأ رحلة الأم الجديدة",
    imagine: "👩‍👧‍👦➡️👩 أسرة ثم امرأة وحيدة"
};

HELP_DATA["sprach2_exam40_8"] = {
    text: "konnten häufiger während ihres Arbeitslebens",
    meaning: "تمكنوا غالباً خلال حياتهم العملية",
    keywords: ["während = خلال", "Arbeitslebens = حياة عملية", "häufiger = غالباً"],
    simplified: "الرجال حققوا ذواتهم مهنياً بينما كانت النساء في المنزل",
    imagine: "👔💼 رجل وحقيبة عمل"
};

HELP_DATA["sprach2_exam40_9"] = {
    text: "Daher sehen sie keine Veranlassung",
    meaning: "لذلك لا يرون سبباً",
    keywords: ["Daher = لذلك", "Veranlassung = سبباً", "sehen = يرون"],
    simplified: "الرجال أقل اهتماماً بالدراسة بعد التقاعد",
    imagine: "👴📚 رجل كبير وكتاب"
};

HELP_DATA["sprach2_exam40_10"] = {
    text: "neue Kompetenzen zu entwickeln",
    meaning: "لتطوير كفاءات جديدة",
    keywords: ["neue = جديدة", "Kompetenzen = كفاءات", "entwickeln = تطوير"],
    simplified: "جوع كبار السن للمعرفة لا يشبع",
    imagine: "📚🔥 كتب ونار"
};
// ============================================
// Exam 41 (exam41.json) - Wie TV-Bilder die Fantasie von Kindern prägen
// ============================================

HELP_DATA["sprach2_exam41_1"] = {
    text: "durch brutale, von Gewalt geprägte Medieninhalte",
    meaning: "من خلال محتوى إعلامي وحشي ومليء بالعنف",
    keywords: ["durch = من خلال", "brutale = وحشي", "Gewalt = عنف"],
    simplified: "الأطفال والمراهقون يتأثرون بالمشاهد العنيفة في وسائل الإعلام",
    imagine: "📺💥 تلفاز وانفجار"
};

HELP_DATA["sprach2_exam41_2"] = {
    text: "vor allem Jungen scheinen für extrem gewalttätige Bilder empfänglich zu sein",
    meaning: "يبدو أن الأولاد على وجه الخصوص قابلون للتأثر بالصور شديدة العنف",
    keywords: ["vor = على وجه الخصوص", "Jungen = أولاد", "empfänglich = قابلون للتأثر"],
    simplified: "الأولاد أكثر عرضة لتأثير العنف التلفزيوني",
    imagine: "👦💥 ولد وانفجار"
};

HELP_DATA["sprach2_exam41_3"] = {
    text: "welche Bilder in den Köpfen von Kindern herumgeistern",
    meaning: "أي صور تتردد في أذهان الأطفال",
    keywords: ["welche = أي", "Bilder = صور", "herumgeistern = تتردد"],
    simplified: "دراسة تكشف أنواع الصور الذهنية لدى الأطفال",
    imagine: "🧠🖼️ عقل وصورة"
};

HELP_DATA["sprach2_exam41_4"] = {
    text: "unterschieden sich deutlich",
    meaning: "اختلفت بشكل واضح",
    keywords: ["unterschieden = اختلفت", "deutlich = بشكل واضح", "sich = نفسها"],
    simplified: "خيالات الأولاد والبنات تختلف اختلافاً كبيراً",
    imagine: "👦⚔️👧 ولد وفتاة وسيف"
};

HELP_DATA["sprach2_exam41_5"] = {
    text: "ließen das Märchen dagegen meist gewaltfrei enden",
    meaning: "على العكس، جعلن القصة الخيالية تنتهي بدون عنف في الغالب",
    keywords: ["ließen = جعلن", "dagegen = على العكس", "gewaltfrei = بدون عنف"],
    simplified: "الفتيات يفضلن النهايات الرومانسية على العنيفة",
    imagine: "👧💕 فتاة وقلب"
};

HELP_DATA["sprach2_exam41_6"] = {
    text: "wie sehr Bilder aus den Medien die Vorstellungswelt von Jugendlichen prägen",
    meaning: "كم تشكل الصور الإعلامية عالم خيال المراهقين",
    keywords: ["wie = كم", "prägen = تشكل", "Vorstellungswelt = عالم خيال"],
    simplified: "التجربة تظهر تأثيراً عميقاً للتلفاز على خيال الطفل",
    imagine: "📺🧠 تلفاز وعقل"
};

HELP_DATA["sprach2_exam41_7"] = {
    text: "von Jugendlichen",
    meaning: "للمراهقين",
    keywords: ["von = لـ", "Jugendlichen = مراهقين", "Vorstellungswelt = عالم خيال"],
    simplified: "التلفاز يشكل عقل الجيل الجديد",
    imagine: "👦📺 ولد وتلفاز"
};

HELP_DATA["sprach2_exam41_8"] = {
    text: "mit dem man die Welt begreift",
    meaning: "الذي من خلاله يُفهم العالم",
    keywords: ["mit = من خلاله", "begreift = يُفهم", "Welt = عالم"],
    simplified: "المراهقون يشكلون مفرداتهم العاطفية من التلفاز",
    imagine: "📚❤️ كتاب وقلب"
};

HELP_DATA["sprach2_exam41_9"] = {
    text: "was Musik überhaupt ist",
    meaning: "ما هي الموسيقى أصلاً",
    keywords: ["was = ما", "Musik = موسيقى", "überhaupt = أصلاً"],
    simplified: "لا يمكنك فهم شيء لم تختبره من قبل",
    imagine: "🎵❓ موسيقى وعلامة استفهام"
};

HELP_DATA["sprach2_exam41_10"] = {
    text: "dann, wenn positive Alternativbilder fehlten",
    meaning: "عندها، عندما تفتقر إلى صور بديلة إيجابية",
    keywords: ["dann = عندها", "fehlten = تفتقر", "Alternativbilder = صور بديلة"],
    simplified: "غياب القدوة الحسنة يجعل الأطفال أكثر عرضة للخطر",
    imagine: "🖼️🚫 صورة وعلامة منع"
};

// ============================================
// Exam 42 (exam42.json) - Städte vor dem Infarkt
// ============================================

HELP_DATA["sprach2_exam42_1"] = {
    text: "davon geträumt",
    meaning: "حلموا بذلك",
    keywords: ["davon = بذلك", "geträumt = حلموا", "haben = كانوا"],
    simplified: "طالما حلم الناس بالتنقل بلا قيود",
    imagine: "💭🚗 حلم وسيارة"
};

HELP_DATA["sprach2_exam42_2"] = {
    text: "wer Auto fährt",
    meaning: "من يقود سيارة",
    keywords: ["wer = من", "fährt = يقود", "Auto = سيارة"],
    simplified: "السيارة رمز للمكانة الاجتماعية في كثير من الثقافات",
    imagine: "🚗👔 سيارة وربطة عنق"
};

HELP_DATA["sprach2_exam42_3"] = {
    text: "dass für so viele Fahrzeuge der Platz nicht mehr ausreicht",
    meaning: "أن المساحة لم تعد كافية لهذا العدد الكبير من المركبات",
    keywords: ["dass = أن", "Platz = مساحة", "nicht mehr = لم تعد"],
    simplified: "المدن القديمة لم تصمم لاستيعاب الكم الهائل من السيارات الحالي",
    imagine: "🏙️🚗🚗 مدينة وسيارات كثيرة"
};

HELP_DATA["sprach2_exam42_4"] = {
    text: "oft",
    meaning: "غالباً",
    keywords: ["oft = غالباً", "breit = واسعة", "genug = كفاية"],
    simplified: "الشوارع غالباً ليست واسعة بما يكفي",
    imagine: "🛣️📏 طريق وشريط قياس"
};

HELP_DATA["sprach2_exam42_5"] = {
    text: "als sie fahren",
    meaning: "أكثر مما هي متحركة",
    keywords: ["fahren = تتحرك", "länger = أطول", "stehen = تقف"],
    simplified: "السيارات الآن تقف لفترة أطول مما هي في حركة",
    imagine: "🚗⏱️ سيارة وساعة"
};

HELP_DATA["sprach2_exam42_6"] = {
    text: "denn die Zahl der Straßenfahrzeuge ist zu groß geworden",
    meaning: "لأن عدد المركبات على الطرق أصبح كبيراً جداً",
    keywords: ["denn = لأن", "Zahl = عدد", "zu groß = كبيراً جداً"],
    simplified: "شلل مروري بسبب كثرة السيارات",
    imagine: "🚦🚫 إشارة مرور وعلامة منع"
};

HELP_DATA["sprach2_exam42_7"] = {
    text: "führt dazu",
    meaning: "يؤدي إلى ذلك",
    keywords: ["dazu = إلى ذلك", "führt = يؤدي", "Erwärmung = احترار"],
    simplified: "انبعاثات السيارات تساهم بشكل كبير في تغير المناخ",
    imagine: "🌡️🚗 ميزان حرارة وسيارة"
};

HELP_DATA["sprach2_exam42_8"] = {
    text: "um dem Verkehrsinfarkt zuvorzukommen",
    meaning: "لمنع الشلل المروري",
    keywords: ["um = لـ", "zuvorzukommen = لمنع", "Verkehrsinfarkt = شلل مروري"],
    simplified: "مدن كثيرة تستثمر في وسائل النقل العام لتقليل الازدحام",
    imagine: "🚌🚊 حافلة وقطار"
};

HELP_DATA["sprach2_exam42_9"] = {
    text: "graben sich die Tunnel der U-Bahnen immer weiter durch das Erdreich",
    meaning: "أنفاق المترو تحفر نفسها أعمق في الأرض",
    keywords: ["graben = تحفر", "Tunnel = أنفاق", "U-Bahnen = مترو"],
    simplified: "شبكات المترو تتوسع تحت المدن الكبرى",
    imagine: "🚇🕳️ مترو وحفرة"
};

HELP_DATA["sprach2_exam42_10"] = {
    text: "kosten wird",
    meaning: "ستكلّف (جهداً كبيراً)",
    keywords: ["kosten = ستكلّف", "wird = سوف", "Überzeugungsarbeit = جهود إقناع"],
    simplified: "التخلص من الاعتماد على السيارات سيتطلب تغييراً كبيراً في الثقافة",
    imagine: "💪💰 جهد ونقود"
};

// ============================================
// Exam 43 (exam43.json) - Es ist erst 6 Uhr morgens
// ============================================

HELP_DATA["sprach2_exam43_1"] = {
    text: "doch in der riesigen, hell erleuchteten Halle",
    meaning: "لكن في القاعة الضخمة المضاءة بشكل ساطع",
    keywords: ["doch = لكن", "Halle = قاعة", "hell erleuchteten = مضاءة بشكل ساطع"],
    simplified: "في الداخل، العمل على قدم وساق رغم هدوء الخارج",
    imagine: "🏭💡 مصنع وأضواء"
};

HELP_DATA["sprach2_exam43_2"] = {
    text: "leitet einen Berliner Großmarkt",
    meaning: "يدير سوقاً كبيراً في برلين",
    keywords: ["leitet = يدير", "Großmarkt = سوق كبير", "Berliner = برليني"],
    simplified: "رجل مسؤول عن سوق الجملة في برلين",
    imagine: "👨‍💼🏪 مدير ومكتب"
};

HELP_DATA["sprach2_exam43_3"] = {
    text: "bis sie auf dem Großmarkt ankommt",
    meaning: "حتى تصل إلى السوق الكبير",
    keywords: ["ankommt = تصل", "Großmarkt = سوق كبير", "auf = إلى"],
    simplified: "الفواكه تأتي من جميع أنحاء العالم إلى السوق المركزي",
    imagine: "🗺️🍎 خريطة وتفاحة"
};

HELP_DATA["sprach2_exam43_4"] = {
    text: "nämlich auf dem Land-, Luft- oder Seeweg",
    meaning: "وهي عبر البر أو الجو أو البحر",
    keywords: ["nämlich = وهي", "Landweg = براً", "Seeweg = بحراً"],
    simplified: "الفواكه تُشحن بطرق متعددة للوصول طازجة إلى الأسواق",
    imagine: "🚢✈️🚛 سفينة وطائرة وشاحنة"
};

HELP_DATA["sprach2_exam43_5"] = {
    text: "darf das empfindliche Obst und Gemüse keinesfalls Schaden nehmen",
    meaning: "لا يجوز أن تتلف الفواكه والخضروات الحساسة بأي حال من الأحوال",
    keywords: ["darf = يجوز", "keinesfalls = بأي حال", "Schaden nehmen = تتلف"],
    simplified: "النقل السريع ضروري للحفاظ على المنتجات طازجة",
    imagine: "🍓⏱️ فراولة وساعة"
};

HELP_DATA["sprach2_exam43_6"] = {
    text: "Nichts ist schlimmer als verdorbene Ware",
    meaning: "لا شيء أسوأ من البضاعة الفاسدة",
    keywords: ["als = من", "verdorbene = فاسدة", "schlimmer = أسوأ"],
    simplified: "المنتج التالف يعني خسارة مالية للمورد",
    imagine: "🍌💸 موزة ونقود تطير"
};

HELP_DATA["sprach2_exam43_7"] = {
    text: "schauen sich die Käufer alles genau an",
    meaning: "يفحص المشترون كل شيء بدقة",
    keywords: ["genau = بدقة", "schauen an = يفحصون", "Käufer = مشترون"],
    simplified: "فحص الجودة إجراء صارم في السوق",
    imagine: "🔍🥬 عدسة مكبرة وخس"
};

HELP_DATA["sprach2_exam43_8"] = {
    text: "erwerben sie dagegen günstiger",
    meaning: "على العكس، يشترونها بسعر أقل",
    keywords: ["erwerben = يشترون", "dagegen = على العكس", "günstiger = بسعر أقل"],
    simplified: "الفواكه غير الكاملة تُباع بسعر مخفض للمصانع",
    imagine: "🥒💰 خيار ونقود"
};

HELP_DATA["sprach2_exam43_9"] = {
    text: "sondern direkt verarbeitet",
    meaning: "بل تُعالج مباشرة",
    keywords: ["sondern = بل", "direkt = مباشرة", "verarbeitet = تُعالج"],
    simplified: "الجمال ليس شرطاً للفواكه التي تذهب إلى السلطات الجاهزة",
    imagine: "🥗🏭 سلطة ومصنع"
};

HELP_DATA["sprach2_exam43_10"] = {
    text: "Wenn die Preisverhandlungen erfolgreich abgeschlossen sind",
    meaning: "عندما تنتهي مفاوضات الأسعار بنجاح",
    keywords: ["abgeschlossen = منتهية", "erfolgreich = بنجاح", "Preisverhandlungen = مفاوضات أسعار"],
    simplified: "بمجرد الاتفاق على السعر، تُحمل السلع وتُوزع",
    imagine: "🤝📦 مصافحة وصندوق"
};

// ============================================
// Exam 44 (exam44.json) - Die Katzen
// ============================================

HELP_DATA["sprach2_exam44_1"] = {
    text: "in der Lage",
    meaning: "قادرة",
    keywords: ["Lage = قدرة", "in der = في الـ"],
    simplified: "القطط تستطيع تمييز أسمائها",
    imagine: "🐱👂 قطة وأذن"
};

HELP_DATA["sprach2_exam44_2"] = {
    text: "Nach eigenen Angaben",
    meaning: "وفقاً لتصريحاتهم الخاصة",
    keywords: ["Angaben = تصريحات", "eigenen = خاصة", "nach = وفقاً لـ"],
    simplified: "الباحثون يقدمون أول دليل علمي على فهم القطط",
    imagine: "📄📑 مستندات"
};

HELP_DATA["sprach2_exam44_3"] = {
    text: "sondern eine fremde Person",
    meaning: "بل شخص غريب",
    keywords: ["sondern = بل", "fremde Person = شخص غريب", "nicht = ليس"],
    simplified: "تستجيب القطة حتى عندما يتحدث الغريب باسمها",
    imagine: "🐱🗣️ قطة وشخص يتكلم"
};

HELP_DATA["sprach2_exam44_4"] = {
    text: "von denen ihrer Artgenossen",
    meaning: "من تلك الخاصة بأفراد جنسها",
    keywords: ["denen = تلك", "Artgenossen = أفراد جنسها", "von = من"],
    simplified: "القطط في المنازل المتعددة تعرف أسماء بعضها البعض",
    imagine: "🐱🐱 قطتان"
};

HELP_DATA["sprach2_exam44_5"] = {
    text: "das Verhalten von 78 Katzen untersucht",
    meaning: "درس سلوك 78 قطة",
    keywords: ["Verhalten = سلوك", "untersucht = درس", "Katzen = قطط"],
    simplified: "طُلب من 78 قطة المشاركة في الاختبار",
    imagine: "📋🐱 قائمة وقطة"
};

HELP_DATA["sprach2_exam44_6"] = {
    text: "Zunächst spielten sie den Tieren vier japanische Wörter vom Band vor",
    meaning: "أولاً، قاموا بتشغيل أربع كلمات يابانية للحيوانات من شريط",
    keywords: ["Zunächst = أولاً", "vom Band = من شريط", "spielten vor = قاموا بتشغيل"],
    simplified: "لعب الباحثون كلمات متشابهة للقطط لاختبار ردود أفعالها",
    imagine: "📀🐱 قرص وقطة"
};

HELP_DATA["sprach2_exam44_7"] = {
    text: "nahm die Aufmerksamkeit der Katzen immer weiter ab",
    meaning: "انخفض انتباه القطط بشكل متزايد",
    keywords: ["weiter = بشكل متزايد", "ab = انخفض", "Aufmerksamkeit = انتباه"],
    simplified: "الملل يصيب القطط مع تكرار الكلمات غير المألوفة",
    imagine: "😴🐱 قطة نائمة"
};

HELP_DATA["sprach2_exam44_8"] = {
    text: "warum ist es bloß schwierig",
    meaning: "لماذا من الصعب فقط",
    keywords: ["bloß = فقط", "schwierig = صعب", "warum = لماذا"],
    simplified: "القطط ذكية لكن تدريبها صعب",
    imagine: "🤔🐱 تفكير وقطة"
};

HELP_DATA["sprach2_exam44_9"] = {
    text: "sofern sie bereit sind mitzumachen",
    meaning: "بشرط أن تكون مستعدة للمشاركة",
    keywords: ["sofern = بشرط أن", "bereit = مستعدة", "mitzumachen = للمشاركة"],
    simplified: "القطط تتعلم فقط عندما تكون في حالة مزاجية مناسبة",
    imagine: "😼🐱 قطة ماكرة"
};

HELP_DATA["sprach2_exam44_10"] = {
    text: "ist bekannt",
    meaning: "من المعروف",
    keywords: ["bekannt = معروف", "ist = هو", "aus = من"],
    simplified: "القطط تستجيب للإشارات البشرية مثل النقر والإيماءات",
    imagine: "👆🐱 إصبع وقطة"
};

// ============================================
// Exam 45 (exam45.json) - Teleshopping – nicht immer gut und günstig
// ============================================

HELP_DATA["sprach2_exam45_1"] = {
    text: "eher enttäuschend",
    meaning: "مخيبة إلى حد ما",
    keywords: ["eher = إلى حد ما", "enttäuschend = مخيبة", "Qualität = جودة"],
    simplified: "جودة منتجات التسوق المنزلي سيئة في الغالب",
    imagine: "📺👍 تلفاز وإبهام لأسفل"
};

HELP_DATA["sprach2_exam45_2"] = {
    text: "zog",
    meaning: "استخلص",
    keywords: ["zog = استخلص", "Fazit = خلاصة", "Stiftung = مؤسسة"],
    simplified: "تقرير المستهلك يشير إلى ضرورة الحذر",
    imagine: "📄✍️ ورقة وقلم"
};

HELP_DATA["sprach2_exam45_3"] = {
    text: "bei Beschwerdefällen",
    meaning: "في حالات الشكاوى",
    keywords: ["bei = في", "Beschwerdefällen = حالات شكاوى", "Erfahrungen = خبرات"],
    simplified: "العملاء يواجهون مشاكل متكررة مع عمالقة التسوق المنزلي",
    imagine: "📞😠 مكالمة ووجه غاضب"
};

HELP_DATA["sprach2_exam45_4"] = {
    text: "sondern es erfolgt nur eine Gutschrift",
    meaning: "بل يتم فقط إضافة رصيد",
    keywords: ["sondern = بل", "Gutschrift = إضافة رصيد", "nur = فقط"],
    simplified: "بدلاً من استرداد الأموال، تقدم الشركة رصيداً للتسوق فقط",
    imagine: "💰🔄 نقود وسهم دائري"
};

HELP_DATA["sprach2_exam45_5"] = {
    text: "in voller Höhe",
    meaning: "بالمبلغ الكامل",
    keywords: ["Höhe = مبلغ", "voller = كامل", "in = بـ"],
    simplified: "حتى الرصيد لا يُمنح كاملاً في كثير من الأحيان",
    imagine: "💸📉 نقود ورسم بياني هابط"
};

HELP_DATA["sprach2_exam45_6"] = {
    text: "Ganz abgesehen davon",
    meaning: "بصرف النظر تماماً عن ذلك",
    keywords: ["abgesehen = بصرف النظر", "davon = عن ذلك", "Ganz = تماماً"],
    simplified: "القانون الألماني يحمي المتسوقين حتى من الشركات الأجنبية",
    imagine: "⚖️🇩🇪 ميزان عدالة وعلم ألماني"
};

HELP_DATA["sprach2_exam45_7"] = {
    text: "an deutsche Verbraucher wenden",
    meaning: "يوجهون أنفسهم للمستهلكين الألمان",
    keywords: ["wenden = يوجهون", "an = إلى", "Verbraucher = مستهلكون"],
    simplified: "الشركات العالمية تصل للمستهلك الألماني عبر الشاشات الصغيرة",
    imagine: "📺💻 تلفاز وحاسوب"
};

HELP_DATA["sprach2_exam45_8"] = {
    text: "gilt sogar unbefristet",
    meaning: "ينطبق حتى بدون فترة محددة",
    keywords: ["sogar = حتى", "unbefristet = بدون فترة محددة", "gilt = ينطبق"],
    simplified: "حقوقك القانونية لا تنتهي أبداً",
    imagine: "📜🔏 مخطوطة وختم"
};

HELP_DATA["sprach2_exam45_9"] = {
    text: "genauso konsequent ihre Rechte durchzusetzen",
    meaning: "لإنفاذ حقوقهم بنفس الحزم",
    keywords: ["genauso = بنفس", "konsequent = بحزم", "Rechte = حقوق"],
    simplified: "على المشاهدين أن يطالبوا بحقوقهم بقوة",
    imagine: "✊💪 قبضة وعضلة"
};

HELP_DATA["sprach2_exam45_10"] = {
    text: "Dabei hilft die Verbraucherzentrale",
    meaning: "في ذلك تساعد مؤسسة حماية المستهلك",
    keywords: ["Dabei = في ذلك", "Verbraucherzentrale = مؤسسة حماية المستهلك", "hilft = تساعد"],
    simplified: "المنظمات الاستهلاكية موجودة لمساعدتك",
    imagine: "🏛️🤝 مبنى ومصافحة"
};

// ============================================
// نظام الطبقة المساعدة (منطق التشغيل)
// ============================================

let helpLayerActive = false;
let originalContentBackup = null;

// الأسئلة الصحيحة لكل امتحان (جميع الأجزاء)
function getCorrectQuestions(skill, examId) {
    const correctMap = {
        // Hören Teil 1
        'hoeren1_exam1': [2, 3], 'hoeren1_exam2': [3, 5], 'hoeren1_exam3': [2, 3, 5],
        'hoeren1_exam4': [1, 5], 'hoeren1_exam5': [2, 4], 'hoeren1_exam6': [2, 4],
        'hoeren1_exam7': [1, 2, 5], 'hoeren1_exam8': [3, 4, 5], 'hoeren1_exam9': [1, 2],
        'hoeren1_exam10': [1, 4], 'hoeren1_exam11': [1, 4], 'hoeren1_exam12': [1, 4],
        'hoeren1_exam13': [3, 4, 5], 'hoeren1_exam14': [1, 3], 'hoeren1_exam15': [2, 3],
        'hoeren1_exam16': [2, 3, 5], 'hoeren1_exam17': [4, 5], 'hoeren1_exam18': [1, 3, 5],
        'hoeren1_exam19': [1, 3, 5], 'hoeren1_exam20': [1, 3, 4], 'hoeren1_exam21': [3],
        'hoeren1_exam22': [1, 2, 5], 'hoeren1_exam23': [3, 5], 'hoeren1_exam24': [1, 3, 5],
        'hoeren1_exam25': [1, 2, 5], 'hoeren1_exam26': [1, 5], 'hoeren1_exam27': [1, 2],
        // Hören Teil 2
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
        // Hören Teil 3
        'hoeren3_exam1': [1], 'hoeren3_exam2': [1, 3], 'hoeren3_exam3': [1, 3],
        'hoeren3_exam4': [1, 4], 'hoeren3_exam5': [1, 4], 'hoeren3_exam6': [1, 5],
        'hoeren3_exam7': [1, 5], 'hoeren3_exam8': [1, 5], 'hoeren3_exam9': [1, 5],
        'hoeren3_exam10': [2, 5], 'hoeren3_exam11': [1, 2, 3], 'hoeren3_exam12': [3, 4],
        'hoeren3_exam13': [1, 2, 5], 'hoeren3_exam14': [1, 4, 5], 'hoeren3_exam15': [1, 2, 5],
        'hoeren3_exam16': [1, 3, 4, 5], 'hoeren3_exam17': [1, 3], 'hoeren3_exam18': [2, 3, 4],
        'hoeren3_exam19': [2, 4], 'hoeren3_exam20': [1, 3], 'hoeren3_exam21': [2],
        'hoeren3_exam22': [2, 4], 'hoeren3_exam23': [1, 5], 'hoeren3_exam24': [2],
        'hoeren3_exam25': [1, 3], 'hoeren3_exam26': [1, 3, 5], 'hoeren3_exam27': [1, 3],
            // Lesen Teil 1 (5 أسئلة لكل امتحان)
        'lesen1_exam1': [1, 2, 3, 4, 5], 'lesen1_exam2': [1, 2, 3, 4, 5],
        'lesen1_exam3': [1, 2, 3, 4, 5], 'lesen1_exam4': [1, 2, 3, 4, 5],
        'lesen1_exam5': [1, 2, 3, 4, 5], 'lesen1_exam6': [1, 2, 3, 4, 5],
        'lesen1_exam7': [1, 2, 3, 4, 5], 'lesen1_exam8': [1, 2, 3, 4, 5],
        'lesen1_exam9': [1, 2, 3, 4, 5], 'lesen1_exam10': [1, 2, 3, 4, 5],
        'lesen1_exam11': [1, 2, 3, 4, 5], 'lesen1_exam12': [1, 2, 3, 4, 5],
        'lesen1_exam13': [1, 2, 3, 4, 5], 'lesen1_exam14': [1, 2, 3, 4, 5],
        'lesen1_exam15': [1, 2, 3, 4, 5], 'lesen1_exam16': [1, 2, 3, 4, 5],
        'lesen1_exam17': [1, 2, 3, 4, 5], 'lesen1_exam18': [1, 2, 3, 4, 5],
        'lesen1_exam19': [1, 2, 3, 4, 5], 'lesen1_exam20': [1, 2, 3, 4, 5],
        'lesen1_exam21': [1, 2, 3, 4, 5], 'lesen1_exam22': [1, 2, 3, 4, 5],
        'lesen1_exam23': [1, 2, 3, 4, 5], 'lesen1_exam24': [1, 2, 3, 4, 5],
        'lesen1_exam25': [1, 2, 3, 4, 5], 'lesen1_exam26': [1, 2, 3, 4, 5],
        'lesen1_exam27': [1, 2, 3, 4, 5], 'lesen1_exam28': [1, 2, 3, 4, 5],
        'lesen1_exam29': [1, 2, 3, 4, 5], 'lesen1_exam30': [1, 2, 3, 4, 5],
        'lesen1_exam31': [1, 2, 3, 4, 5], 'lesen1_exam32': [1, 2, 3, 4, 5],
        'lesen1_exam33': [1, 2, 3, 4, 5], 'lesen1_exam34': [1, 2, 3, 4, 5],
        'lesen1_exam35': [1, 2, 3, 4, 5], 'lesen1_exam36': [1, 2, 3, 4, 5],
        'lesen1_exam37': [1, 2, 3, 4, 5], 'lesen1_exam38': [1, 2, 3, 4, 5],
        'lesen1_exam39': [1, 2, 3, 4, 5], 'lesen1_exam40': [1, 2, 3, 4, 5],
        'lesen1_exam41': [1, 2, 3, 4, 5], 'lesen1_exam42': [1, 2, 3, 4, 5],
        'lesen1_exam43': [1, 2, 3, 4, 5], 'lesen1_exam44': [1, 2, 3, 4, 5],
        'lesen1_exam45': [1, 2, 3, 4, 5], 'lesen1_exam46': [1, 2, 3, 4, 5],
        'lesen1_exam47': [1, 2, 3, 4, 5],
        // Lesen Teil 2 (5 أسئلة لكل امتحان)
        'lesen2_exam1': [1, 2, 3, 4, 5], 'lesen2_exam2': [1, 2, 3, 4, 5],
        'lesen2_exam3': [1, 2, 3, 4, 5], 'lesen2_exam4': [1, 2, 3, 4, 5],
        'lesen2_exam5': [1, 2, 3, 4, 5], 'lesen2_exam6': [1, 2, 3, 4, 5],
        'lesen2_exam7': [1, 2, 3, 4, 5], 'lesen2_exam8': [1, 2, 3, 4, 5],
        'lesen2_exam9': [1, 2, 3, 4, 5], 'lesen2_exam10': [1, 2, 3, 4, 5],
        'lesen2_exam11': [1, 2, 3, 4, 5], 'lesen2_exam12': [1, 2, 3, 4, 5],
        'lesen2_exam13': [1, 2, 3, 4, 5], 'lesen2_exam14': [1, 2, 3, 4, 5],
        'lesen2_exam15': [1, 2, 3, 4, 5], 'lesen2_exam16': [1, 2, 3, 4, 5],
        'lesen2_exam17': [1, 2, 3, 4, 5], 'lesen2_exam18': [1, 2, 3, 4, 5],
        'lesen2_exam19': [1, 2, 3, 4, 5], 'lesen2_exam20': [1, 2, 3, 4, 5],
        'lesen2_exam21': [1, 2, 3, 4, 5], 'lesen2_exam22': [1, 2, 3, 4, 5],
        'lesen2_exam23': [1, 2, 3, 4, 5], 'lesen2_exam24': [1, 2, 3, 4, 5],
        'lesen2_exam25': [1, 2, 3, 4, 5], 'lesen2_exam26': [1, 2, 3, 4, 5],
        'lesen2_exam27': [1, 2, 3, 4, 5], 'lesen2_exam28': [1, 2, 3, 4, 5],
        'lesen2_exam29': [1, 2, 3, 4, 5], 'lesen2_exam30': [1, 2, 3, 4, 5],
        'lesen2_exam31': [1, 2, 3, 4, 5], 'lesen2_exam32': [1, 2, 3, 4, 5],
        'lesen2_exam33': [1, 2, 3, 4, 5], 'lesen2_exam34': [1, 2, 3, 4, 5],
        'lesen2_exam35': [1, 2, 3, 4, 5], 'lesen2_exam36': [1, 2, 3, 4, 5],
        // Lesen Teil 3 (10 أسئلة لكل امتحان)
        'lesen3_exam1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam2': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam3': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam4': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam5': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam6': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam7': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam8': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam9': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam10': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam11': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam12': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam13': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam14': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam15': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam16': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam17': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam18': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam19': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam20': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam21': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam22': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam23': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam24': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam25': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam26': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam27': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam28': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam29': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam30': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam31': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam32': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam33': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam34': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'lesen3_exam35': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'lesen3_exam36': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        // Sprachbausteine Teil 1 (10 أسئلة لكل امتحان)
        'sprach1_exam1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam2': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam3': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam4': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam5': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam6': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam7': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam8': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam9': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam10': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam11': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam12': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam13': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam14': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam15': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam16': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam17': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam18': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam19': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam20': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam21': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam22': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam23': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam24': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam25': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam26': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam27': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam28': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam29': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam30': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam31': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam32': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam33': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam34': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam35': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam36': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam37': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam38': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach1_exam39': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach1_exam40': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        // Sprachbausteine Teil 2 (10 أسئلة لكل امتحان)
        'sprach2_exam1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam2': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam3': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam4': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam5': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam6': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam7': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam8': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam9': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam10': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam11': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam12': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam13': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam14': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam15': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam16': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam17': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam18': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam19': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam20': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam21': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam22': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam23': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam24': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam25': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam26': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam27': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam28': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam29': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam30': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam31': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam32': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam33': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam34': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam35': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam36': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam37': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam38': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam39': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam40': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam41': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam42': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam43': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'sprach2_exam44': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'sprach2_exam45': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    return correctMap[`${skill}_exam${examId}`] || [];
}
function getCurrentExamId() {
    if (window.currentExamId) return window.currentExamId;
    const title = document.getElementById('examTitle')?.textContent || '';
    const match = title.match(/Exam\s+(\d+)/i);
    return match ? parseInt(match[1]) : 1;
}

function getCurrentSkill() {
    if (document.getElementById('hoeren1')?.style.display === 'block') return 'hoeren1';
    if (document.getElementById('hoeren2')?.style.display === 'block') return 'hoeren2';
    if (document.getElementById('hoeren3')?.style.display === 'block') return 'hoeren3';
    
    if (document.getElementById('lesen1')?.style.display === 'block') return 'lesen1';
    if (document.getElementById('lesen2')?.style.display === 'block') return 'lesen2';
    if (document.getElementById('lesen3')?.style.display === 'block') return 'lesen3';
    
    if (document.getElementById('sprach1')?.style.display === 'block') return 'sprach1';
    if (document.getElementById('sprach2')?.style.display === 'block') return 'sprach2';
    
    return 'hoeren1';
}

function getActiveSection() {
    const sections = ['hoeren1', 'hoeren2', 'hoeren3', 'lesen1', 'lesen2', 'lesen3', 'sprach1', 'sprach2'];
    
    for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.style.display === 'block') {
            return el;
        }
    }
    return null;
}

function createHelpCard(questionNumber) {
    const examId = getCurrentExamId();
    const skill = getCurrentSkill();
    const helpKey = `${skill}_exam${examId}_q${questionNumber}`;
    const data = window.HELP_DATA ? HELP_DATA[helpKey] : null;
    
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
                ${questionNumber}️⃣ ${data.text}
            </div>
            <div style="margin-bottom:10px"><span style="color:#0056b3;font-weight:bold">📖 المعنى :</span> <span style="color:#333">${data.meaning}</span></div>
            ${keywordsHtml}
            <div style="margin-bottom:10px"><span style="color:#0056b3;font-weight:bold">✨ تبسيط :</span> <span style="color:#333">${data.simplified}</span></div>
            <div><span style="color:#0056b3;font-weight:bold">🎭 تخيل :</span> <span style="color:#333">${data.imagine}</span></div>
        `;
    } else {
        card.innerHTML = `<div style="text-align:center;padding:20px;color:#999">❓ لا يوجد شرح للسؤال ${questionNumber}</div>`;
    }
    return card;
}

function createHelpLayer() {
    const container = document.createElement('div');
    container.id = 'helpLayerContainer';
    container.style.cssText = 'background:#f8f9fa;border-radius:16px;padding:20px;margin:20px 0';
    
    const skill = getCurrentSkill();
    const examId = getCurrentExamId();
    const correctQuestions = getCorrectQuestions(skill, examId);
    
    if (correctQuestions.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:#666">📚 لا توجد أسئلة صحيحة في هذا الامتحان</div>';
        return container;
    }
    
    correctQuestions.forEach(questionNumber => {
        container.appendChild(createHelpCard(questionNumber));
    });
    return container;
}

function hideExamContent() {
    const hidden = [];
    const section = getActiveSection();
    if (!section) return hidden;
    for (let child of section.children) {
        if (child.id !== 'helpLayerContainer' && child.style.display !== 'none') {
            child.style.display = 'none';
            hidden.push(child);
        }
    }
    return hidden;
}

function hideButtons() {
    const hidden = [];
    document.querySelectorAll('button').forEach(btn => {
        const text = btn.textContent;
        if (text.includes('✅') || text.includes('تصحيح') || text.includes('Prüfen') || text.includes('↺') || text.includes('إعادة')) {
            if (btn.style.display !== 'none') {
                btn.style.display = 'none';
                hidden.push(btn);
            }
        }
    });
    return hidden;
}

function showElements(elements) {
    if (!elements) return;
    elements.forEach(el => { if (el) el.style.display = ''; });
}

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
        if (section && helpLayer.children.length > 0) {
            section.appendChild(helpLayer);
        }
        helpLayerActive = true;
    }
}

function addHelpButton() {
    if (document.getElementById('globalHelpButton')) return;
    const nav = document.getElementById('examNavButtons');
    if (!nav) return;
    
    const btn = document.createElement('button');
    btn.id = 'globalHelpButton';
    btn.textContent = '🧠 مساعدة ذكية للنجاح';
    btn.style.cssText = 'background:linear-gradient(135deg,#007bff,#0056b3);color:white;border:none;border-radius:30px;padding:8px 20px;font-size:14px;font-weight:bold;cursor:pointer;margin-left:10px;box-shadow:0 2px 5px rgba(0,0,0,0.2);transition:all 0.3s';
    
    btn.onmouseenter = () => {
        btn.style.transform = 'scale(1.02)';
        btn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    };
    btn.onmouseleave = () => {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
    };
    btn.onclick = (e) => {
        e.stopPropagation();
        toggleHelp();
    };
    nav.appendChild(btn);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHelpButton);
} else {
    addHelpButton();
}

console.log('✅ helpSystem.js يعمل بدون مشاكل');