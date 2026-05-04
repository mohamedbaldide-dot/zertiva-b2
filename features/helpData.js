// ============================================
// helpData.js - جميع شروحات المساعدة
// ============================================

const HELP_DATA = {};

// ============================================
// hören Teil 1 - الإجابات الصحيحة فقط
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
  imagine: "تخيل طائرة تعلق عليها لافتة 'مغلق' ✈️🚫"
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
// تصدير للاستخدام
// ============================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HELP_DATA;
}
