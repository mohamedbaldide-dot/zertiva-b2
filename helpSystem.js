// ============================================
// helpSystem.js - نظام المساعدة المتكامل (نسخة نهائية وجاهزة)
// ============================================

// ============================================
// جميع البيانات (HELP_DATA)
// ============================================
const HELP_DATA = {};

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
// نظام الطبقة المساعدة (منطق التشغيل)
// ============================================

let helpLayerActive = false;
let originalContentBackup = null;

// الأسئلة الصحيحة لكل امتحان
function getCorrectQuestions(skill, examId) {
    const correctMap = {
        'hoeren1_exam1': [2, 3], 'hoeren1_exam2': [3, 5], 'hoeren1_exam3': [2, 3, 5],
        'hoeren1_exam4': [1, 5], 'hoeren1_exam5': [2, 4], 'hoeren1_exam6': [2, 4],
        'hoeren1_exam7': [1, 2, 5], 'hoeren1_exam8': [3, 4, 5], 'hoeren1_exam9': [1, 2],
        'hoeren1_exam10': [1, 4], 'hoeren1_exam11': [1, 4], 'hoeren1_exam12': [1, 4],
        'hoeren1_exam13': [3, 4, 5], 'hoeren1_exam14': [1, 3], 'hoeren1_exam15': [2, 3],
        'hoeren1_exam16': [2, 3, 5], 'hoeren1_exam17': [4, 5], 'hoeren1_exam18': [1, 3, 5],
        'hoeren1_exam19': [1, 3, 5], 'hoeren1_exam20': [1, 3, 4], 'hoeren1_exam21': [3],
        'hoeren1_exam22': [1, 2, 5], 'hoeren1_exam23': [3, 5], 'hoeren1_exam24': [1, 3, 5],
        'hoeren1_exam25': [1, 2, 5], 'hoeren1_exam26': [1, 5], 'hoeren1_exam27': [1, 2],
        'hoeren2_exam1': [3, 4, 8, 9, 10], 'hoeren3_exam1': [1], 'hoeren3_exam2': [1, 3],
        'hoeren3_exam3': [1, 3], 'hoeren3_exam4': [1, 4], 'hoeren3_exam5': [1, 4],
        'hoeren3_exam6': [1, 5], 'hoeren3_exam7': [1, 5], 'hoeren3_exam8': [1, 5],
        'hoeren3_exam9': [1, 5], 'hoeren3_exam10': [2, 5], 'hoeren3_exam11': [1, 2, 3],
        'hoeren3_exam12': [3, 4], 'hoeren3_exam13': [1, 2, 5], 'hoeren3_exam14': [1, 4, 5],
        'hoeren3_exam15': [1, 2, 5], 'hoeren3_exam16': [1, 3, 4, 5], 'hoeren3_exam17': [1, 3],
        'hoeren3_exam18': [2, 3, 4], 'hoeren3_exam19': [2, 4], 'hoeren3_exam20': [1, 3],
        'hoeren3_exam21': [2], 'hoeren3_exam22': [2, 4], 'hoeren3_exam23': [1, 5],
        'hoeren3_exam24': [2], 'hoeren3_exam25': [1, 3], 'hoeren3_exam26': [1, 3, 5],
        'hoeren3_exam27': [1, 3]
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
    return 'hoeren1';
}

function getActiveSection() {
    if (document.getElementById('hoeren1')?.style.display === 'block') return document.getElementById('hoeren1');
    if (document.getElementById('hoeren2')?.style.display === 'block') return document.getElementById('hoeren2');
    if (document.getElementById('hoeren3')?.style.display === 'block') return document.getElementById('hoeren3');
    return null;
}

function createHelpCard(questionNumber) {
    const examId = getCurrentExamId();
    const skill = getCurrentSkill();
    const helpKey = `${skill}_exam${examId}_q${questionNumber}`;
    const data = HELP_DATA[helpKey];
    
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
    
    correctQuestions.forEach(q => {
        container.appendChild(createHelpCard(q));
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
        if (section && helpLayer.children.length > 0) section.appendChild(helpLayer);
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
    btn.onmouseenter = () => { btn.style.transform = 'scale(1.02)'; btn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'; };
    btn.onmouseleave = () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)'; };
    btn.onclick = (e) => { e.stopPropagation(); toggleHelp(); };
    nav.appendChild(btn);
}

// بدء التشغيل
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHelpButton);
} else {
    addHelpButton();
}

console.log('✅ helpSystem.js تم التحميل بنجاح');
