/* Code du site : pas besoin de modifier ce fichier. */

const LANGUAGES = [
  { code: "fr", name: "Français", native: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", native: "English", flag: "🇬🇧" },
  { code: "ja", name: "日本語", native: "日本語", flag: "🇯🇵" },
  { code: "es", name: "Español", native: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", native: "Deutsch", flag: "🇩🇪" },
  { code: "pt", name: "Português", native: "Português", flag: "🇵🇹" },
  { code: "ar", name: "العربية", native: "العربية", flag: "🇸🇦" },
  { code: "zh", name: "中文", native: "中文", flag: "🇨🇳" },
  { code: "ko", name: "한국어", native: "한국어", flag: "🇰🇷" },
  { code: "ru", name: "Русский", native: "Русский", flag: "🇷🇺" }
];

const TRANSLATIONS = {
  fr: {
    "nav.about": "À propos",
    "nav.history": "Histoire du centre",
    "about.title": "À propos du Centre Japonais de Kinshasa",
    "about.intro": "Le Centre Japonais de Kinshasa est un espace de rencontre et d’apprentissage qui rapproche la République démocratique du Congo et le Japon.",
    "about.mission.title": "Notre mission",
    "about.mission.text": "Promouvoir la connaissance du Japon et favoriser les échanges culturels, éducatifs et humains entre les communautés congolaise et japonaise.",
    "about.vision.title": "Notre vision",
    "about.vision.text": "Construire un pont durable entre la RDC et le Japon, fondé sur la compréhension mutuelle, le partage des savoirs et l’ouverture au monde.",
    "about.values.title": "Nos valeurs",
    "about.values.text": "Respect, dialogue, curiosité, apprentissage continu et partage sont au cœur de notre engagement.",
    "about.role.title": "Un lieu d’échanges culturels et éducatifs",
    "about.role.text": "À travers ses formations, ses activités culturelles et ses rencontres, le centre encourage les échanges, l’acquisition de compétences et la découverte réciproque des cultures congolaise et japonaise.",
    "history.title": "Histoire du centre",
    "history.intro": "Découvrez la vocation du Centre Japonais de Kinshasa et les grandes étapes de son développement.",
    "history.foundation.title": "La fondation",
    "history.foundation.text": "Le centre est né de la volonté de créer à Kinshasa un lieu de rapprochement entre la RDC et le Japon, où la culture et l’éducation favorisent le dialogue.",
    "history.timeline.title": "Étapes clés",
    "history.stage1.title": "Création du centre",
    "history.stage1.text": "Mise en place d’un espace dédié à la découverte du Japon et au renforcement des liens entre les deux pays.",
    "history.stage2.title": "Développement des activités",
    "history.stage2.text": "Élargissement des activités autour des formations, des pratiques culturelles et des occasions de rencontre.",
    "history.stage3.title": "Un lieu vivant d’échanges",
    "history.stage3.text": "Le centre poursuit sa mission en proposant aux publics de Kinshasa des occasions d’apprendre, de partager et de créer des liens.",
    "history.note": "Les dates précises des étapes pourront être ajoutées dès qu’elles auront été confirmées par le centre.",
    "nav.formations": "Formations",
    "nav.activities": "Activités",
    "nav.news": "Actualités",
    "nav.contact": "Contactez-nous",
    "formations.title": "Nos formations",
    "formations.intro": "Découvrez les parcours d’apprentissage proposés par le Centre Japonais de Kinshasa.",
    "activities.title": "Activités et rendez-vous",
    "activities.intro": "Retrouvez les activités sportives, culturelles et les rendez-vous qui font vivre le centre.",
    "home.kicker": "ようこそ",
    "home.discover": "Découvrir le centre",
    "home.history": "Histoire du centre",
    "home.history.text1": "Le Centre Japonais de Kinshasa a été créé pour renforcer les liens culturels, éducatifs et sociaux entre la République Démocratique du Congo et le Japon.",
    "home.history.text2": "Au fil des années, il est devenu un espace de rencontre, de formation, de culture et d’échange entre les communautés locales et internationales.",
    "home.activities.title": "Nos activités",
    "home.activities.muted": "Cliquez sur une activité pour ouvrir sa page.",
    "contact.title": "Contact",
    "contact.form.title": "Écrivez-nous",
    "contact.form.name": "Votre nom",
    "contact.form.message": "Votre message",
    "contact.form.submit": "Envoyer par WhatsApp",
    "contact.form.error": "Écrivez votre nom et votre message.",
    "contact.address": "Adresse",
    "contact.address_value": "Centre Japonais de Kinshasa, C/Lingwala, Réf. : Entrée du camp KOKOLO (entre l’UPC & le Commissariat général de la Police), 1 Av. du Palais du Peuple, Kinshasa, République démocratique du Congo",
    "contact.phone": "Téléphone et e-mail",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "Email",
    "contact.hours": "Horaires",
    "contact.hours_value1": "Lundi – Vendredi : 08h00 – 17h00",
    "contact.hours_value2": "Samedi : 09h00 – 13h00",
    "contact.write.whatsapp": "Écrire sur WhatsApp",
    "contact.socials": "Réseaux sociaux",
    "contact.map.title": "Carte du centre",
    "page.back": "Retour à l'accueil",
    "activity.open": "Ouvrir la page",
    "activity.presentation": "Présentation",
    "activity.schedule": "Horaires",
    "activity.price": "Tarif",
    "activity.registration_fee": "Frais d’inscription",
    "activity.monthly_fee": "Abonnement mensuel",
    "news.hero.kicker": "Actualités",
    "news.hero.title": "Actualités & Événements",
    "news.hero.text": "Suivez les ateliers, les festivals, les cours et les annonces du Centre Japonais de Kinshasa.",
    "news.search.placeholder": "Rechercher une actualité...",
    "news.filter.all": "Tous",
    "news.filter.samedi_nippon": "Samedi Nippon",
    "news.filter.arts-martiaux": "Arts martiaux",
    "news.date.tbc": "Date à confirmer",
    "samedi.nippon.regular.title": "Samedi Nippon régulier",
    "samedi.nippon.regular.kicker": "Samedi Nippon",
    "samedi.nippon.regular.free": "Entrée libre • chaque samedi",
    "samedi.nippon.regular.description": "Le rendez-vous hebdomadaire du centre : un moment simple, convivial et gratuit pour découvrir la culture japonaise, échanger et partager autour de la communauté.",
    "samedi.nippon.regular.schedule": "Chaque samedi • 14h00 à 16h00",
    "samedi.nippon.regular.price": "Gratuit",
    "samedi.nippon.specials.title": "Éditions spéciales du Samedi Nippon",
    "samedi.nippon.specials.subtitle": "Des rendez-vous thématiques à la hauteur des moments forts de l’année.",
    "samedi.nippon.special.echange_vœux.title": "Samedi Nippon : Échange de vœux",
    "samedi.nippon.special.echange_vœux.summary": "Une rencontre chaleureuse pour accueillir la nouvelle année et partager des vœux entre la communauté.",
    "samedi.nippon.special.echange_vœux.body": "Cette édition spéciale met l’accent sur les échanges de vœux, le partage de bonnes intentions et la convivialité qui caractérise la culture japonaise et les valeurs de proximité du centre.",
    "samedi.nippon.special.saint_valentin.title": "Samedi Nippon : Saint-Valentin",
    "samedi.nippon.special.saint_valentin.summary": "Une célébration douce et créative autour de l’amour, du partage et de la culture.",
    "samedi.nippon.special.saint_valentin.body": "À l’occasion de la Saint-Valentin, le centre organise une édition spéciale pensée pour célébrer les liens humains, la gentillesse et les échanges artistiques.",
    "samedi.nippon.special.white_days.title": "Samedi Nippon : White Days",
    "samedi.nippon.special.white_days.summary": "Un moment festif inspiré du retour des cadeaux et des gestes attentionnés.",
    "samedi.nippon.special.white_days.body": "Les White Days sont l’occasion de prolonger la magie des échanges, dans une ambiance conviviale et créative qui valorise le partage et la gratitude.",
    "samedi.nippon.special.halloween.title": "Samedi Nippon : Halloween",
    "samedi.nippon.special.halloween.summary": "Une édition festive, colorée et pleine d’énergie pour découvrir des codes culturels inspirants.",
    "samedi.nippon.special.halloween.body": "L’Halloween au centre propose un cadre joyeux et dynamique autour des costumes, de la créativité et du partage entre participants.",
    "samedi.nippon.special.photo.title": "Samedi Nippon : Shooting photo",
    "samedi.nippon.special.photo.summary": "Une séance conviviale de portraits et de prises de vue inspirées par la culture japonaise.",
    "samedi.nippon.special.photo.body": "Cette édition met à l’honneur la créativité visuelle avec un shooting photo dans une ambiance lumineuse et artistique, ouvert à tous.",
    "activities.culture.title": "Activités culturelles",
    "activities.culture.subtitle": "Des ateliers et rencontres culturelles inspirés par le Japon et les échanges artistiques.",
    "news.filter.judo": "Judo",
    "news.filter.informatique": "Informatique",
    "news.filter.langue_japonaise": "Langue Japonaise",
    "news.filter.langue_anglaise": "Langue Anglaise",
    "news.filter.rh": "Ressources Humaines",
    "news.card.read_more": "Lire la suite",
    "news.card.empty": "Aucune actualité ne correspond à votre recherche.",
    "news.category.samedi-nippon": "Samedi Nippon",
    "news.category.arts-martiaux": "Arts martiaux",
    "news.category.judo": "Judo",
    "news.category.informatique": "Informatique",
    "news.category.langue-japonaise": "Langue Japonaise",
    "news.category.langue-anglaise": "Langue Anglaise",
    "news.category.rh": "Ressources Humaines",
    "news.samedi_nippon.title": "Grand rendez-vous du Samedi Nippon",
    "news.samedi_nippon.summary": "Une rencontre culturelle et conviviale autour des traditions japonaises et des échanges citoyens.",
    "news.samedi_nippon.body": "Le Samedi Nippon réunit la communauté autour de moments de découverte, de pratique culturelle et d’échanges inspirés par la culture japonaise. C’est un rendez-vous incontournable pour apprendre, partager et célébrer la richesse de cette culture.",
    "news.judo.title": "Entraînement et valeurs du Judo au centre",
    "news.judo.summary": "Des séances de judo structurées pour renforcer la discipline, le respect et la confiance en soi.",
    "news.judo.body": "Les activités de judo du centre invitent les participants à développer la discipline, la concentration et le respect mutuel. Les entraînements sont conçus pour s’adapter à différents niveaux et encourager le développement personnel.",
    "news.informatique.title": "Formations en Informatique",
    "news.informatique.summary": "Des ateliers pratiques pour maîtriser les outils numériques, la bureautique et les usages du web.",
    "news.informatique.body": "Les formations en informatique visent à renforcer les compétences numériques des apprenants à travers des contenus adaptés à l’usage quotidien professionnel, éducatif et personnel.",
    "news.langue_japonaise.title": "Nouveaux sessions d'apprentissage du Japonais",
    "news.langue_japonaise.summary": "Des cours ouverts à tous pour progresser en japonais à travers des méthodes vivantes et adaptées.",
    "news.langue_japonaise.body": "Les nouveaux cours de japonais offrent un cadre dynamique pour améliorer la compréhension orale, la lecture et l’expression écrite. Les groupes sont conçus pour accompagner les apprenants selon leur niveau et leurs besoins.",
    "news.langue_anglaise.title": "Nouveaux sessions d'apprentissage de l'Anglais",
    "news.langue_anglaise.summary": "Des ateliers interactifs pour renforcer les compétences communicatives et professionnelles en anglais.",
    "news.langue_anglaise.body": "Les sessions d’anglais du centre abordent les compétences orales, écrites et professionnelles avec un accompagnement progressif. Elles sont particulièrement utiles pour les étudiants, les professionnels et les apprenants débutants.",
    "news.rh.title": "Ateliers et opportunités en Ressources Humaines",
    "news.rh.summary": "Des espaces d’échange autour du recrutement, du développement des talents et des compétences professionnelles.",
    "news.rh.body": "Les activités en ressources humaines permettent de développer des compétences utiles à la gestion des talents, au recrutement et au travail collaboratif. C’est une opportunité pour renforcer les méthodes de gestion et les compétences d’employabilité.",
    "activity.not_found": "Activité introuvable",
    "activity.not_found_text": "Cette activité n'existe pas.",
    "activity.see_all": "Voir toutes les activités",
    "activity.see_others": "Voir les autres activités",
    "activity.register": "S'inscrire par WhatsApp",
    "activity.category.formation": "Formation",
    "activity.category.sport": "Sport",
    "activity.category.culture": "Culture",
    "activity.japonais.title": "Cours de japonais",
    "activity.japonais.summary": "Du niveau débutant au niveau avancé.",
    "activity.cuisine-japonaise.title": "Atelier de cuisine japonaise",
    "activity.cuisine-japonaise.summary": "Découvrez et préparez plusieurs plats emblématiques du Japon.",
    "activity.anglais.title": "Formation en anglais",
    "activity.anglais.summary": "Cours d’anglais pour tous les niveaux.",
    "activity.informatique.title": "Formation en informatique",
    "activity.informatique.summary": "Bureautique, internet et bases de l’informatique.",
    "activity.judo.title": "Judo",
    "activity.judo.summary": "Pratique du judo pour enfants et adultes.",
    "activity.sports.title": "Arts martiaux",
    "activity.sports.summary": "Judo, karaté, jiu-jitsu et aïkido pour tous les niveaux.",
    "activity.culture.title": "Activités culturelles",
    "activity.culture.summary": "Ateliers et rencontres, notamment le samedi.",
    "activity.samedi-nippon.title": "Samedi Nippon",
    "activity.samedi-nippon.summary": "Un rendez-vous culturel autour du Japon et du partage.",
    "lang.search.placeholder": "Rechercher une langue",
    "lang.open": "Choisir une langue",
    "activity.open": "Ouvrir la page"
  },
  en: {
    "nav.about": "About",
    "nav.history": "Center history",
    "about.title": "About the Centre Japonais de Kinshasa",
    "about.intro": "The Centre Japonais de Kinshasa is a place for meeting and learning that brings the Democratic Republic of the Congo and Japan closer together.",
    "about.mission.title": "Our mission",
    "about.mission.text": "To promote knowledge of Japan and foster cultural, educational, and human exchanges between Congolese and Japanese communities.",
    "about.vision.title": "Our vision",
    "about.vision.text": "To build a lasting bridge between the DRC and Japan, founded on mutual understanding, shared knowledge, and openness to the world.",
    "about.values.title": "Our values",
    "about.values.text": "Respect, dialogue, curiosity, lifelong learning, and sharing are at the heart of our commitment.",
    "about.role.title": "A place for cultural and educational exchange",
    "about.role.text": "Through courses, cultural activities, and meetings, the centre encourages exchange, skills development, and mutual discovery of Congolese and Japanese cultures.",
    "history.title": "History of the centre",
    "history.intro": "Discover the purpose of the Centre Japonais de Kinshasa and the key stages in its development.",
    "history.foundation.title": "Foundation",
    "history.foundation.text": "The centre grew from the desire to create a place in Kinshasa that brings the DRC and Japan closer, where culture and education foster dialogue.",
    "history.timeline.title": "Key stages",
    "history.stage1.title": "Establishment of the centre",
    "history.stage1.text": "A space was created to introduce visitors to Japan and strengthen ties between the two countries.",
    "history.stage2.title": "Expansion of activities",
    "history.stage2.text": "Activities expanded to include courses, cultural practices, and opportunities to meet.",
    "history.stage3.title": "A living place of exchange",
    "history.stage3.text": "The centre continues its mission by offering people in Kinshasa opportunities to learn, share, and build connections.",
    "history.note": "Exact dates for these stages can be added once they have been confirmed by the centre.",
    "nav.formations": "Courses",
    "nav.activities": "Activities",
    "nav.news": "News",
    "nav.contact": "Contact us",
    "formations.title": "Our courses",
    "formations.intro": "Explore the learning programs offered by the Centre Japonais de Kinshasa.",
    "activities.title": "Activities and events",
    "activities.intro": "Discover the sports, cultural activities, and events that bring the centre to life.",
    "home.kicker": "Welcome",
    "home.discover": "Discover the center",
    "home.history": "Center history",
    "home.history.text1": "The Centre Japonais de Kinshasa was created to strengthen cultural, educational, and social ties between the Democratic Republic of the Congo and Japan.",
    "home.history.text2": "Over the years, it has become a space for meeting, training, culture, and exchange between local and international communities.",
    "home.activities.title": "Our activities",
    "home.activities.muted": "Click an activity to open its page.",
    "contact.title": "Contact",
    "contact.form.title": "Write to us",
    "contact.form.name": "Your name",
    "contact.form.message": "Your message",
    "contact.form.submit": "Send via WhatsApp",
    "contact.form.error": "Please enter your name and message.",
    "contact.address": "Address",
    "contact.address_value": "Centre Japonais de Kinshasa, C/Lingwala, Réf. : Entrée du camp KOKOLO (entre l’UPC & le Commissariat général de la Police), 1 Av. du Palais du Peuple, Kinshasa, République démocratique du Congo",
    "contact.phone": "Phone and email",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "Email",
    "contact.hours": "Hours",
    "contact.hours_value1": "Monday – Friday: 08:00 – 17:00",
    "contact.hours_value2": "Saturday: 09:00 – 13:00",
    "contact.write.whatsapp": "Write on WhatsApp",
    "contact.socials": "Social networks",
    "contact.map.title": "Center map",
    "page.back": "Back to home",
    "activity.open": "Open page",
    "activity.presentation": "Presentation",
    "activity.schedule": "Schedule",
    "activity.price": "Price",
    "news.hero.kicker": "News",
    "news.hero.title": "News & Events",
    "news.hero.text": "Follow the workshops, festivals, courses and announcements of the Centre Japonais de Kinshasa.",
    "news.search.placeholder": "Search for an article...",
    "news.filter.all": "All",
    "news.filter.samedi_nippon": "Saturday Nippon",
    "news.date.tbc": "Date to be confirmed",
    "samedi.nippon.regular.title": "Regular Saturday Nippon",
    "samedi.nippon.regular.kicker": "Saturday Nippon",
    "samedi.nippon.regular.free": "Free entry • every Saturday",
    "samedi.nippon.regular.description": "The weekly community meeting at the centre: a simple, friendly and free moment to discover Japanese culture, exchange ideas and share experiences.",
    "samedi.nippon.regular.schedule": "Every Saturday • 10:00 to 13:00",
    "samedi.nippon.regular.price": "Free",
    "samedi.nippon.specials.title": "Special Saturday Nippon editions",
    "samedi.nippon.specials.subtitle": "Seasonal events designed around memorable moments of the year.",
    "samedi.nippon.special.echange_vœux.title": "Saturday Nippon: New Year Wishes",
    "samedi.nippon.special.echange_vœux.summary": "A warm gathering to welcome the new year and share wishes within the community.",
    "samedi.nippon.special.echange_vœux.body": "This special edition focuses on exchanging greetings, kind wishes and community warmth inspired by Japanese culture and the centre's spirit of togetherness.",
    "samedi.nippon.special.saint_valentin.title": "Saturday Nippon: Valentine's Day",
    "samedi.nippon.special.saint_valentin.summary": "A gentle, creative celebration around love, sharing and culture.",
    "samedi.nippon.special.saint_valentin.body": "For Valentine's Day, the centre organizes a special edition dedicated to human connection, kindness and artistic exchange.",
    "samedi.nippon.special.white_days.title": "Saturday Nippon: White Day",
    "samedi.nippon.special.white_days.summary": "A festive moment inspired by thoughtful gifts and appreciation.",
    "samedi.nippon.special.white_days.body": "White Day offers a joyful and friendly atmosphere that celebrates gratitude, generosity and togetherness.",
    "samedi.nippon.special.halloween.title": "Saturday Nippon: Halloween",
    "samedi.nippon.special.halloween.summary": "A lively and colourful event inspired by festive creative culture.",
    "samedi.nippon.special.halloween.body": "Halloween at the centre creates a cheerful and dynamic space where costumes, creativity and sharing come together.",
    "samedi.nippon.special.photo.title": "Saturday Nippon: Photo Shoot",
    "samedi.nippon.special.photo.summary": "A friendly photo session inspired by Japanese visual culture.",
    "samedi.nippon.special.photo.body": "This edition celebrates creativity through a photo shoot in a warm artistic atmosphere open to everyone.",
    "activities.culture.title": "Cultural activities",
    "activities.culture.subtitle": "Workshops and cultural encounters inspired by Japan and artistic exchange.",
    "news.filter.judo": "Judo",
    "news.filter.arts-martiaux": "Martial arts",
    "news.filter.informatique": "IT",
    "news.filter.langue_japonaise": "Japanese Language",
    "news.filter.langue_anglaise": "English Language",
    "news.filter.rh": "Human Resources",
    "news.card.read_more": "Read more",
    "news.card.empty": "No news match your search.",
    "news.category.samedi-nippon": "Saturday Nippon",
    "news.category.arts-martiaux": "Martial arts",
    "news.category.judo": "Judo",
    "news.category.informatique": "IT",
    "news.category.langue-japonaise": "Japanese Language",
    "news.category.langue-anglaise": "English Language",
    "news.category.rh": "Human Resources",
    "news.samedi_nippon.title": "Grand Saturday Nippon gathering",
    "news.samedi_nippon.summary": "A cultural and friendly meeting around Japanese traditions and community exchange.",
    "news.samedi_nippon.body": "Saturday Nippon brings the community together for discovery, cultural practice and exchanges inspired by Japanese culture. It is a must-attend event for learning, sharing and celebrating this rich heritage.",
    "news.judo.title": "Judo training and values at the centre",
    "news.judo.summary": "Structured judo sessions to build discipline, respect and self-confidence.",
    "news.judo.body": "The centre's judo activities invite participants to develop discipline, concentration and mutual respect. Sessions are adapted to different levels and encourage personal growth.",
    "news.informatique.title": "IT training programs",
    "news.informatique.summary": "Hands-on workshops to master digital tools, office software and web usage.",
    "news.informatique.body": "The IT training courses aim to strengthen learners' digital skills through content adapted to everyday professional, educational and personal use.",
    "news.langue_japonaise.title": "New Japanese language learning sessions",
    "news.langue_japonaise.summary": "Open courses for progressing in Japanese through practical and engaging methods.",
    "news.langue_japonaise.body": "The new Japanese courses provide a dynamic environment to improve oral comprehension, reading and writing. The groups support learners according to their level and objectives.",
    "news.langue_anglaise.title": "New English learning sessions",
    "news.langue_anglaise.summary": "Interactive workshops to strengthen communication and professional skills in English.",
    "news.langue_anglaise.body": "The centre's English sessions cover oral, written and professional communication with progressive support. They are particularly useful for students, professionals and beginners.",
    "news.rh.title": "HR workshops and opportunities",
    "news.rh.summary": "Discussion spaces on recruitment, talent development and professional skills.",
    "news.rh.body": "Human resources activities help develop skills in talent management, recruitment and teamwork. They create opportunities to strengthen employability and organizational effectiveness.",
    "activity.not_found": "Activity not found",
    "activity.not_found_text": "This activity does not exist.",
    "activity.see_all": "See all activities",
    "activity.see_others": "See other activities",
    "activity.register": "Register via WhatsApp",
    "activity.category.formation": "Training",
    "activity.category.sport": "Sport",
    "activity.category.culture": "Culture",
    "activity.japonais.title": "Japanese course",
    "activity.japonais.summary": "From beginner to advanced level.",
    "activity.cuisine-japonaise.title": "Japanese cooking workshop",
    "activity.cuisine-japonaise.summary": "Discover and prepare several iconic Japanese dishes.",
    "activity.anglais.title": "English training",
    "activity.anglais.summary": "English courses for all levels.",
    "activity.informatique.title": "Computer training",
    "activity.informatique.summary": "Office tools, internet and basic computer skills.",
    "activity.judo.title": "Judo",
    "activity.judo.summary": "Judo practice for children and adults.",
    "activity.sports.title": "Martial arts",
    "activity.sports.summary": "Judo, karate, jiu-jitsu and aikido for all levels.",
    "activity.culture.title": "Cultural activities",
    "activity.culture.summary": "Workshops and meetings, especially on Saturdays.",
    "activity.samedi-nippon.title": "Saturday Nippon",
    "activity.samedi-nippon.summary": "A cultural gathering to discover Japan and share experiences.",
    "lang.search.placeholder": "Search for a language",
    "lang.open": "Choose a language",
    "activity.open": "Open page"
  },
  ja: {
    "nav.about": "センターについて",
    "nav.history": "センターの歴史",
    "about.title": "キンシャサ日本センターについて",
    "about.intro": "キンシャサ日本センターは、コンゴ民主共和国と日本をつなぐ交流と学びの場です。",
    "about.mission.title": "使命",
    "about.mission.text": "日本への理解を広め、コンゴと日本の人々の間で文化的・教育的・人的交流を促進します。",
    "about.vision.title": "ビジョン",
    "about.vision.text": "相互理解、知識の共有、世界への開かれた姿勢を基盤に、コンゴ民主共和国と日本の持続的な架け橋を築きます。",
    "about.values.title": "大切にする価値",
    "about.values.text": "尊重、対話、好奇心、継続的な学び、そして分かち合いを大切にしています。",
    "about.role.title": "文化・教育交流の場",
    "about.role.text": "講座、文化活動、交流会を通じて、学びと能力の向上を促し、コンゴと日本の文化を互いに知る機会をつくります。",
    "history.title": "センターの歴史",
    "history.intro": "キンシャサ日本センターの目的と発展の主な段階をご紹介します。",
    "history.foundation.title": "設立",
    "history.foundation.text": "文化と教育を通じて対話を促し、コンゴ民主共和国と日本をつなぐ場所をキンシャサにつくりたいという思いから、センターは生まれました。",
    "history.timeline.title": "主な歩み",
    "history.stage1.title": "センターの設立",
    "history.stage1.text": "日本を知り、両国のつながりを深めるための場が設けられました。",
    "history.stage2.title": "活動の発展",
    "history.stage2.text": "講座や文化活動、人々が出会う機会へと活動が広がりました。",
    "history.stage3.title": "交流が生まれる場",
    "history.stage3.text": "センターは、キンシャサの人々が学び、分かち合い、つながる機会を提供しながら活動を続けています。",
    "history.note": "各段階の正確な日付は、センターによる確認後に掲載できます。",
    "nav.formations": "講座",
    "nav.activities": "活動",
    "nav.news": "ニュース",
    "nav.contact": "お問い合わせ",
    "formations.title": "講座",
    "formations.intro": "キンシャサ日本センターが提供する学習プログラムをご紹介します。",
    "activities.title": "活動・イベント",
    "activities.intro": "センターを彩るスポーツ、文化活動、定期イベントをご覧ください。",
    "home.kicker": "ようこそ",
    "home.discover": "センターを見る",
    "home.history": "センターの歴史",
    "home.history.text1": "キンシャサ日本センターは、コンゴ民主共和国と日本の間の文化的、教育的、社会的なつながりを強化するために設立されました。",
    "home.history.text2": "年月を経るにつれて、地域社会と国際社会の交流、研修、文化の場として発展してきました。",
    "home.activities.title": "活動内容",
    "home.activities.muted": "活動をクリックしてページを開きます。",
    "contact.title": "お問い合わせ",
    "contact.form.title": "メッセージを送る",
    "contact.form.name": "お名前",
    "contact.form.message": "メッセージ",
    "contact.form.submit": "WhatsAppで送信",
    "contact.form.error": "お名前とメッセージを入力してください。",
    "contact.address": "住所",
    "contact.address_value": "Centre Japonais de Kinshasa, C/Lingwala, Réf. : Entrée du camp KOKOLO (entre l’UPC & le Commissariat général de la Police), 1 Av. du Palais du Peuple, Kinshasa, République démocratique du Congo",
    "contact.phone": "電話とメール",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "メール",
    "contact.hours": "営業時間",
    "contact.hours_value1": "月曜 – 金曜 : 08h00 – 17h00",
    "contact.hours_value2": "土曜 : 09h00 – 13h00",
    "contact.write.whatsapp": "WhatsAppで連絡",
    "contact.socials": "SNS",
    "contact.map.title": "センターマップ",
    "page.back": "ホームに戻る",
    "activity.open": "ページを開く",
    "activity.presentation": "紹介",
    "activity.schedule": "時間",
    "activity.price": "料金",
    "activity.not_found": "活動が見つかりません",
    "activity.not_found_text": "この活動は存在しません。",
    "activity.see_all": "すべての活動を見る",
    "activity.see_others": "他の活動を見る",
    "activity.register": "WhatsAppで申し込む",
    "activity.category.formation": "講座",
    "activity.category.sport": "スポーツ",
    "activity.category.culture": "文化",
    "activity.japonais.title": "日本語講座",
    "activity.japonais.summary": "初心者から上級者まで対応。",
    "activity.anglais.title": "英語講座",
    "activity.anglais.summary": "すべてのレベル向けの英語コース。",
    "activity.informatique.title": "情報技術講座",
    "activity.informatique.summary": "オフィスツール、インターネット、コンピュータの基礎。",
    "activity.judo.title": "柔道",
    "activity.judo.summary": "子どもから大人まで対応した柔道。",
    "activity.sports.title": "武道",
    "activity.sports.summary": "柔道、空手、柔術、合気道をあらゆるレベルで学べます。",
    "activity.culture.title": "文化活動",
    "activity.culture.summary": "特に土曜日に開催されるワークショップや交流会。",
    "activity.samedi-nippon.title": "サマディ・ニッポン",
    "activity.samedi-nippon.summary": "日本文化を知り、交流する文化イベントです。",
    "lang.search.placeholder": "言語を検索",
    "lang.open": "言語を選択",
    "activity.open": "ページを開く"
  },
  es: {
    "nav.about": "Acerca de",
    "nav.history": "Historia del centro",
    "about.title": "Acerca del Centro Japonés de Kinshasa",
    "about.intro": "El Centro Japonés de Kinshasa es un espacio de encuentro y aprendizaje que acerca a la República Democrática del Congo y Japón.",
    "about.mission.title": "Nuestra misión",
    "about.mission.text": "Promover el conocimiento de Japón y fomentar los intercambios culturales, educativos y humanos entre las comunidades congoleña y japonesa.",
    "about.vision.title": "Nuestra visión",
    "about.vision.text": "Construir un puente duradero entre la RDC y Japón, basado en el entendimiento mutuo, el intercambio de conocimientos y la apertura al mundo.",
    "about.values.title": "Nuestros valores",
    "about.values.text": "El respeto, el diálogo, la curiosidad, el aprendizaje continuo y el intercambio son la base de nuestro compromiso.",
    "about.role.title": "Un espacio de intercambio cultural y educativo",
    "about.role.text": "Mediante cursos, actividades culturales y encuentros, el centro fomenta el intercambio, el desarrollo de competencias y el conocimiento mutuo de las culturas congoleña y japonesa.",
    "history.title": "Historia del centro",
    "history.intro": "Descubra la vocación del Centro Japonés de Kinshasa y las principales etapas de su desarrollo.",
    "history.foundation.title": "Fundación",
    "history.foundation.text": "El centro nació del deseo de crear en Kinshasa un lugar que acercara a la RDC y Japón y donde la cultura y la educación favorecieran el diálogo.",
    "history.timeline.title": "Etapas clave",
    "history.stage1.title": "Creación del centro",
    "history.stage1.text": "Se creó un espacio dedicado a descubrir Japón y fortalecer los vínculos entre ambos países.",
    "history.stage2.title": "Desarrollo de las actividades",
    "history.stage2.text": "Las actividades se ampliaron para incluir cursos, prácticas culturales y oportunidades de encuentro.",
    "history.stage3.title": "Un espacio vivo de intercambio",
    "history.stage3.text": "El centro continúa su misión ofreciendo al público de Kinshasa oportunidades para aprender, compartir y crear vínculos.",
    "history.note": "Las fechas exactas de estas etapas podrán añadirse cuando el centro las confirme.",
    "nav.formations": "Cursos",
    "nav.news": "Noticias",
    "nav.activities": "Actividades",
    "nav.contact": "Contáctanos",
    "formations.title": "Nuestros cursos",
    "formations.intro": "Descubra los programas de aprendizaje que ofrece el Centro Japonés de Kinshasa.",
    "activities.title": "Actividades y eventos",
    "activities.intro": "Descubra las actividades deportivas y culturales y los encuentros que dan vida al centro.",
    "home.kicker": "Bienvenido",
    "home.discover": "Descubre el centro",
    "home.history": "Historia del centro",
    "home.history.text1": "El Centro Japonés de Kinshasa fue creado para fortalecer los lazos culturales, educativos y sociales entre la República Democrática del Congo y Japón.",
    "home.history.text2": "Con el paso de los años, se convirtió en un espacio de encuentro, formación, cultura e intercambio entre comunidades locales e internacionales.",
    "home.activities.title": "Nuestras actividades",
    "home.activities.muted": "Haz clic en una actividad para abrir su página.",
    "contact.title": "Contacto",
    "contact.form.title": "Escríbenos",
    "contact.form.name": "Tu nombre",
    "contact.form.message": "Tu mensaje",
    "contact.form.submit": "Enviar por WhatsApp",
    "contact.form.error": "Escribe tu nombre y tu mensaje.",
    "contact.address": "Dirección",
    "contact.address_value": "Centre Japonais de Kinshasa, C/Lingwala, Réf. : Entrée du camp KOKOLO (entre l’UPC & le Commissariat général de la Police), 1 Av. du Palais du Peuple, Kinshasa, République démocratique du Congo",
    "contact.phone": "Teléfono y correo",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "Correo",
    "contact.hours": "Horario",
    "contact.hours_value1": "Lunes – Viernes: 08:00 – 17:00",
    "contact.hours_value2": "Sábado: 09:00 – 13:00",
    "contact.write.whatsapp": "Escribir por WhatsApp",
    "contact.socials": "Redes sociales",
    "contact.map.title": "Mapa del centro",
    "page.back": "Volver al inicio",
    "activity.open": "Abrir página",
    "activity.presentation": "Presentación",
    "activity.schedule": "Horario",
    "activity.price": "Precio",
    "activity.not_found": "Actividad no encontrada",
    "activity.not_found_text": "Esta actividad no existe.",
    "activity.see_all": "Ver todas las actividades",
    "activity.see_others": "Ver otras actividades",
    "activity.register": "Inscribirse por WhatsApp",
    "activity.category.formation": "Formación",
    "activity.category.sport": "Deporte",
    "activity.category.culture": "Cultura",
    "activity.japonais.title": "Curso de japonés",
    "activity.japonais.summary": "Desde principiantes hasta niveles avanzados.",
    "activity.anglais.title": "Formación en inglés",
    "activity.anglais.summary": "Clases de inglés para todos los niveles.",
    "activity.informatique.title": "Formación en informática",
    "activity.informatique.summary": "Ofimática, internet y fundamentos de informática.",
    "activity.judo.title": "Judo",
    "activity.judo.summary": "Práctica de judo para niños y adultos.",
    "activity.sports.title": "Artes marciales",
    "activity.sports.summary": "Judo, karate, jiu-jitsu y aikido para todos los niveles.",
    "activity.culture.title": "Actividades culturales",
    "activity.culture.summary": "Talleres y encuentros, especialmente los sábados.",
    "activity.samedi-nippon.title": "Sábado Nippon",
    "activity.samedi-nippon.summary": "Un encuentro cultural para descubrir Japón y compartir.",
    "lang.search.placeholder": "Buscar un idioma",
    "lang.open": "Elegir un idioma",
    "activity.open": "Abrir página"
  },
  de: {
    "nav.about": "Über uns",
    "nav.history": "Geschichte des Zentrums",
    "about.title": "Über das Centre Japonais de Kinshasa",
    "about.intro": "Das Centre Japonais de Kinshasa ist ein Ort der Begegnung und des Lernens, der die Demokratische Republik Kongo und Japan einander näherbringt.",
    "about.mission.title": "Unsere Mission",
    "about.mission.text": "Wir fördern das Wissen über Japan und den kulturellen, bildungsbezogenen und menschlichen Austausch zwischen kongolesischen und japanischen Gemeinschaften.",
    "about.vision.title": "Unsere Vision",
    "about.vision.text": "Wir wollen eine dauerhafte Brücke zwischen der DR Kongo und Japan bauen, getragen von gegenseitigem Verständnis, Wissensaustausch und Offenheit gegenüber der Welt.",
    "about.values.title": "Unsere Werte",
    "about.values.text": "Respekt, Dialog, Neugier, lebenslanges Lernen und Teilen stehen im Mittelpunkt unseres Engagements.",
    "about.role.title": "Ein Ort des kulturellen und bildungsbezogenen Austauschs",
    "about.role.text": "Mit Kursen, kulturellen Aktivitäten und Begegnungen fördert das Zentrum Austausch, Kompetenzentwicklung und die gegenseitige Entdeckung kongolesischer und japanischer Kulturen.",
    "history.title": "Geschichte des Zentrums",
    "history.intro": "Entdecken Sie den Auftrag des Centre Japonais de Kinshasa und die wichtigsten Phasen seiner Entwicklung.",
    "history.foundation.title": "Gründung",
    "history.foundation.text": "Das Zentrum entstand aus dem Wunsch, in Kinshasa einen Ort zu schaffen, der die DR Kongo und Japan einander näherbringt und an dem Kultur und Bildung den Dialog fördern.",
    "history.timeline.title": "Wichtige Etappen",
    "history.stage1.title": "Gründung des Zentrums",
    "history.stage1.text": "Es entstand ein Ort, der Japan näherbringt und die Beziehungen zwischen beiden Ländern stärkt.",
    "history.stage2.title": "Ausbau der Aktivitäten",
    "history.stage2.text": "Das Angebot wurde um Kurse, kulturelle Aktivitäten und Begegnungsmöglichkeiten erweitert.",
    "history.stage3.title": "Ein lebendiger Ort des Austauschs",
    "history.stage3.text": "Das Zentrum setzt seine Arbeit fort und bietet den Menschen in Kinshasa Möglichkeiten zum Lernen, Teilen und Vernetzen.",
    "history.note": "Genaue Daten zu diesen Etappen können ergänzt werden, sobald das Zentrum sie bestätigt hat.",
    "nav.formations": "Kurse",
    "nav.news": "Nachrichten",
    "nav.activities": "Aktivitäten",
    "nav.contact": "Kontaktieren Sie uns",
    "formations.title": "Unsere Kurse",
    "formations.intro": "Entdecken Sie die Lernangebote des Centre Japonais de Kinshasa.",
    "activities.title": "Aktivitäten und Veranstaltungen",
    "activities.intro": "Entdecken Sie die Sport- und Kulturangebote sowie die regelmäßigen Treffen des Zentrums.",
    "home.kicker": "Willkommen",
    "home.discover": "Zentrum entdecken",
    "home.history": "Geschichte des Zentrums",
    "home.history.text1": "Das Centre Japonais de Kinshasa wurde gegründet, um die kulturellen, bildungsbezogenen und sozialen Beziehungen zwischen der Demokratischen Republik Kongo und Japan zu stärken.",
    "home.history.text2": "Im Laufe der Jahre wurde es zu einem Ort des Treffens, der Ausbildung, der Kultur und des Austauschs zwischen lokalen und internationalen Gemeinschaften.",
    "home.activities.title": "Unsere Aktivitäten",
    "home.activities.muted": "Klicke auf eine Aktivität, um ihre Seite zu öffnen.",
    "contact.title": "Kontakt",
    "contact.form.title": "Schreib uns",
    "contact.form.name": "Dein Name",
    "contact.form.message": "Deine Nachricht",
    "contact.form.submit": "Per WhatsApp senden",
    "contact.form.error": "Bitte gib deinen Namen und deine Nachricht ein.",
    "contact.address": "Adresse",
    "contact.address_value": "Centre Japonais de Kinshasa, C/Lingwala, Réf. : Entrée du camp KOKOLO (entre l’UPC & le Commissariat général de la Police), 1 Av. du Palais du Peuple, Kinshasa, République démocratique du Congo",
    "contact.phone": "Telefon und E-Mail",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "E-Mail",
    "contact.hours": "Öffnungszeiten",
    "contact.hours_value1": "Montag – Freitag: 08:00 – 17:00",
    "contact.hours_value2": "Samstag: 09:00 – 13:00",
    "contact.write.whatsapp": "Per WhatsApp schreiben",
    "contact.socials": "Soziale Medien",
    "contact.map.title": "Kartenlage",
    "page.back": "Zur Startseite",
    "activity.open": "Seite öffnen",
    "activity.presentation": "Präsentation",
    "activity.schedule": "Zeitplan",
    "activity.price": "Preis",
    "activity.not_found": "Aktivität nicht gefunden",
    "activity.not_found_text": "Diese Aktivität existiert nicht.",
    "activity.see_all": "Alle Aktivitäten sehen",
    "activity.see_others": "Andere Aktivitäten sehen",
    "activity.register": "Per WhatsApp anmelden",
    "activity.category.formation": "Ausbildung",
    "activity.category.sport": "Sport",
    "activity.category.culture": "Kultur",
    "activity.japonais.title": "Japanischkurs",
    "activity.japonais.summary": "Von Anfängern bis zum Fortgeschrittenen Niveau.",
    "activity.anglais.title": "Englischkurs",
    "activity.anglais.summary": "Englischkurse für alle Niveaus.",
    "activity.informatique.title": "Informatikkurs",
    "activity.informatique.summary": "Büroanwendungen, Internet und Grundlagen der Informatik.",
    "activity.judo.title": "Judo",
    "activity.judo.summary": "Judo für Kinder und Erwachsene.",
    "activity.sports.title": "Kampfsportarten",
    "activity.sports.summary": "Judo, Karate, Jiu-Jitsu und Aikido für alle Niveaus.",
    "activity.culture.title": "Kulturelle Aktivitäten",
    "activity.culture.summary": "Workshops und Treffen, besonders am Samstag.",
    "activity.samedi-nippon.title": "Samstag Nippon",
    "activity.samedi-nippon.summary": "Ein kulturelles Treffen, um Japan zu entdecken und Erfahrungen zu teilen.",
    "lang.search.placeholder": "Sprache suchen",
    "lang.open": "Sprache wählen",
    "activity.open": "Seite öffnen"
  },
  pt: {
    "nav.about": "Sobre",
    "nav.history": "História do centro",
    "about.title": "Sobre o Centre Japonais de Kinshasa",
    "about.intro": "O Centre Japonais de Kinshasa é um espaço de encontro e aprendizagem que aproxima a República Democrática do Congo e o Japão.",
    "about.mission.title": "Nossa missão",
    "about.mission.text": "Promover o conhecimento do Japão e incentivar intercâmbios culturais, educacionais e humanos entre as comunidades congolesa e japonesa.",
    "about.vision.title": "Nossa visão",
    "about.vision.text": "Construir uma ponte duradoura entre a RDC e o Japão, baseada na compreensão mútua, na partilha de conhecimentos e na abertura ao mundo.",
    "about.values.title": "Nossos valores",
    "about.values.text": "Respeito, diálogo, curiosidade, aprendizagem contínua e partilha estão no centro do nosso compromisso.",
    "about.role.title": "Um espaço de intercâmbio cultural e educacional",
    "about.role.text": "Por meio de cursos, atividades culturais e encontros, o centro incentiva o intercâmbio, o desenvolvimento de competências e a descoberta mútua das culturas congolesa e japonesa.",
    "history.title": "História do centro",
    "history.intro": "Conheça a vocação do Centre Japonais de Kinshasa e as principais etapas do seu desenvolvimento.",
    "history.foundation.title": "Fundação",
    "history.foundation.text": "O centro nasceu da vontade de criar em Kinshasa um espaço que aproximasse a RDC e o Japão, onde a cultura e a educação favorecessem o diálogo.",
    "history.timeline.title": "Etapas importantes",
    "history.stage1.title": "Criação do centro",
    "history.stage1.text": "Foi criado um espaço dedicado à descoberta do Japão e ao fortalecimento dos laços entre os dois países.",
    "history.stage2.title": "Desenvolvimento das atividades",
    "history.stage2.text": "As atividades se expandiram para incluir cursos, práticas culturais e oportunidades de encontro.",
    "history.stage3.title": "Um espaço vivo de intercâmbio",
    "history.stage3.text": "O centro continua sua missão, oferecendo ao público de Kinshasa oportunidades para aprender, compartilhar e criar laços.",
    "history.note": "As datas exatas dessas etapas poderão ser incluídas após a confirmação pelo centro.",
    "nav.formations": "Cursos",
    "nav.news": "Notícias",
    "nav.activities": "Atividades",
    "nav.contact": "Fale conosco",
    "formations.title": "Nossos cursos",
    "formations.intro": "Conheça os programas de aprendizagem oferecidos pelo Centre Japonais de Kinshasa.",
    "activities.title": "Atividades e eventos",
    "activities.intro": "Descubra as atividades esportivas e culturais e os encontros que dão vida ao centro.",
    "home.kicker": "Bem-vindo",
    "home.discover": "Descobrir o centro",
    "home.history": "História do centro",
    "home.history.text1": "O Centre Japonais de Kinshasa foi criado para fortalecer os laços culturais, educativos e sociais entre a República Democrática do Congo e o Japão.",
    "home.history.text2": "Ao longo dos anos, tornou-se um espaço de encontro, formação, cultura e troca entre comunidades locais e internacionais.",
    "home.activities.title": "Nossas atividades",
    "home.activities.muted": "Clique em uma atividade para abrir sua página.",
    "contact.title": "Contato",
    "contact.form.title": "Escreva-nos",
    "contact.form.name": "Seu nome",
    "contact.form.message": "Sua mensagem",
    "contact.form.submit": "Enviar por WhatsApp",
    "contact.form.error": "Digite seu nome e sua mensagem.",
    "contact.address": "Endereço",
    "contact.address_value": "Centre Japonais de Kinshasa, C/Lingwala, Réf. : Entrée du camp KOKOLO (entre l’UPC & le Commissariat général de la Police), 1 Av. du Palais du Peuple, Kinshasa, République démocratique du Congo",
    "contact.phone": "Telefone e e-mail",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "E-mail",
    "contact.hours": "Horário",
    "contact.hours_value1": "Segunda – Sexta: 08:00 – 17:00",
    "contact.hours_value2": "Sábado: 09:00 – 13:00",
    "contact.write.whatsapp": "Escrever no WhatsApp",
    "contact.socials": "Redes sociais",
    "contact.map.title": "Mapa do centro",
    "page.back": "Voltar para o início",
    "activity.open": "Abrir página",
    "activity.presentation": "Apresentação",
    "activity.schedule": "Horário",
    "activity.price": "Preço",
    "activity.not_found": "Atividade não encontrada",
    "activity.not_found_text": "Essa atividade não existe.",
    "activity.see_all": "Ver todas as atividades",
    "activity.see_others": "Ver outras atividades",
    "activity.register": "Inscrever-se por WhatsApp",
    "activity.category.formation": "Formação",
    "activity.category.sport": "Esporte",
    "activity.category.culture": "Cultura",
    "activity.japonais.title": "Curso de japonês",
    "activity.japonais.summary": "Do nível iniciante ao avançado.",
    "activity.anglais.title": "Treinamento em inglês",
    "activity.anglais.summary": "Aulas de inglês para todos os níveis.",
    "activity.informatique.title": "Curso de informática",
    "activity.informatique.summary": "Informática básica, internet e ferramentas de escritório.",
    "activity.judo.title": "Judô",
    "activity.judo.summary": "Prática de judô para crianças e adultos.",
    "activity.sports.title": "Artes marciais",
    "activity.sports.summary": "Judô, karatê, jiu-jitsu e aikido para todos os níveis.",
    "activity.culture.title": "Atividades culturais",
    "activity.culture.summary": "Oficinas e encontros, especialmente aos sábados.",
    "activity.samedi-nippon.title": "Sábado Nippon",
    "activity.samedi-nippon.summary": "Um encontro cultural para descobrir o Japão e compartilhar experiências.",
    "lang.search.placeholder": "Buscar idioma",
    "lang.open": "Escolher idioma",
    "activity.open": "Abrir página"
  },
  ar: {
    "nav.about": "من نحن",
    "nav.history": "تاريخ المركز",
    "about.title": "عن المركز الياباني في كينشاسا",
    "about.intro": "المركز الياباني في كينشاسا مساحة للقاء والتعلم تقرّب بين جمهورية الكونغو الديمقراطية واليابان.",
    "about.mission.title": "رسالتنا",
    "about.mission.text": "تعزيز المعرفة باليابان وتشجيع التبادل الثقافي والتعليمي والإنساني بين المجتمعين الكونغولي والياباني.",
    "about.vision.title": "رؤيتنا",
    "about.vision.text": "بناء جسر دائم بين جمهورية الكونغو الديمقراطية واليابان يقوم على التفاهم المتبادل وتبادل المعرفة والانفتاح على العالم.",
    "about.values.title": "قيمنا",
    "about.values.text": "الاحترام والحوار والفضول والتعلم المستمر والمشاركة هي أساس التزامنا.",
    "about.role.title": "مساحة للتبادل الثقافي والتعليمي",
    "about.role.text": "من خلال الدورات والأنشطة الثقافية واللقاءات، يشجع المركز التبادل وتنمية المهارات والتعرف المتبادل على الثقافتين الكونغولية واليابانية.",
    "history.title": "تاريخ المركز",
    "history.intro": "اكتشفوا رسالة المركز الياباني في كينشاسا والمراحل الرئيسية لتطوره.",
    "history.foundation.title": "التأسيس",
    "history.foundation.text": "نشأ المركز من الرغبة في إنشاء مساحة في كينشاسا تقرّب بين جمهورية الكونغو الديمقراطية واليابان، وتعزز فيها الثقافة والتعليم الحوار.",
    "history.timeline.title": "محطات رئيسية",
    "history.stage1.title": "إنشاء المركز",
    "history.stage1.text": "إنشاء مساحة مخصصة للتعرف على اليابان وتعزيز الروابط بين البلدين.",
    "history.stage2.title": "تطوير الأنشطة",
    "history.stage2.text": "توسعت الأنشطة لتشمل الدورات والممارسات الثقافية وفرص اللقاء.",
    "history.stage3.title": "مساحة حيوية للتبادل",
    "history.stage3.text": "يواصل المركز رسالته من خلال إتاحة فرص التعلم والمشاركة وبناء الروابط لسكان كينشاسا.",
    "history.note": "يمكن إضافة التواريخ الدقيقة لهذه المراحل بعد تأكيدها من المركز.",
    "nav.formations": "الدورات",
    "nav.news": "الأخبار",
    "nav.activities": "الأنشطة",
    "nav.contact": "تواصل معنا",
    "formations.title": "دوراتنا التدريبية",
    "formations.intro": "اكتشفوا برامج التعلم التي يقدمها المركز الياباني في كينشاسا.",
    "activities.title": "الأنشطة والفعاليات",
    "activities.intro": "اكتشفوا الأنشطة الرياضية والثقافية واللقاءات التي تبث الحياة في المركز.",
    "home.kicker": "أهلاً وسهلاً",
    "home.discover": "اكتشف المركز",
    "home.history": "تاريخ المركز",
    "home.history.text1": "تم إنشاء مركز كينشاسا الياباني لتعزيز الروابط الثقافية والتعليمية والاجتماعية بين جمهورية الكونغو الديمقراطية واليابان.",
    "home.history.text2": "مع مرور السنوات، أصبح مساحة للقاء والتدريب والثقافة والتبادل بين المجتمعات المحلية والدولية.",
    "home.activities.title": "أنشطتنا",
    "home.activities.muted": "انقر على نشاط لفتح صفحته.",
    "contact.title": "تواصل",
    "contact.form.title": "اكتب لنا",
    "contact.form.name": "اسمك",
    "contact.form.message": "رسالتك",
    "contact.form.submit": "إرسال عبر واتساب",
    "contact.form.error": "يرجى كتابة اسمك ورسالتك.",
    "contact.address": "العنوان",
    "contact.address_value": "Centre Japonais de Kinshasa, C/Lingwala, Réf. : Entrée du camp KOKOLO (entre l’UPC & le Commissariat général de la Police), 1 Av. du Palais du Peuple, Kinshasa, République démocratique du Congo",
    "contact.phone": "الهاتف والبريد",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "البريد الإلكتروني",
    "contact.hours": "مواعيد العمل",
    "contact.hours_value1": "الاثنين – الجمعة: 08:00 – 17:00",
    "contact.hours_value2": "السبت: 09:00 – 13:00",
    "contact.write.whatsapp": "كتابة عبر واتساب",
    "contact.socials": "الشبكات الاجتماعية",
    "contact.map.title": "خريطة المركز",
    "page.back": "العودة إلى الرئيسية",
    "activity.open": "فتح الصفحة",
    "activity.presentation": "العرض",
    "activity.schedule": "الجدول",
    "activity.price": "السعر",
    "activity.not_found": "النشاط غير موجود",
    "activity.not_found_text": "هذا النشاط غير موجود.",
    "activity.see_all": "عرض جميع الأنشطة",
    "activity.see_others": "عرض الأنشطة الأخرى",
    "activity.register": "التسجيل عبر واتساب",
    "activity.category.formation": "تدريب",
    "activity.category.sport": "رياضة",
    "activity.category.culture": "ثقافة",
    "activity.japonais.title": "دورة اللغة اليابانية",
    "activity.japonais.summary": "من المستوى المبتدئ إلى المستوى المتقدم.",
    "activity.anglais.title": "دورة اللغة الإنجليزية",
    "activity.anglais.summary": "دروس لغة إنجليزية لجميع المستويات.",
    "activity.informatique.title": "تدريب الحوسبة",
    "activity.informatique.summary": "الأدوات المكتبية والإنترنت وأساسيات الحوسبة.",
    "activity.judo.title": "الجودو",
    "activity.judo.summary": "ممارسة الجودو للأطفال والبالغين.",
    "activity.sports.title": "فنون قتالية",
    "activity.sports.summary": "الجودو والكاراتيه والجيوجيتسو والأيكيدو لجميع المستويات.",
    "activity.culture.title": "الأنشطة الثقافية",
    "activity.culture.summary": "ورش عمل ولقاءات، وخاصة يوم السبت.",
    "activity.samedi-nippon.title": "السبت الياباني",
    "activity.samedi-nippon.summary": "لقاء ثقافي لاكتشاف اليابان وتبادل الخبرات.",
    "lang.search.placeholder": "ابحث عن لغة",
    "lang.open": "اختر لغة",
    "activity.open": "فتح الصفحة"
  },
  zh: {
    "nav.about": "关于我们",
    "nav.history": "中心历史",
    "about.title": "关于金夏沙日本中心",
    "about.intro": "金夏沙日本中心是促进刚果民主共和国与日本相互了解的交流与学习空间。",
    "about.mission.title": "我们的使命",
    "about.mission.text": "推广对日本的了解，促进刚果社区与日本社区之间的文化、教育和人员交流。",
    "about.vision.title": "我们的愿景",
    "about.vision.text": "以相互理解、知识共享和开放的态度，在刚果民主共和国与日本之间建立持久的桥梁。",
    "about.values.title": "我们的价值观",
    "about.values.text": "尊重、对话、好奇心、持续学习与分享是我们工作的核心。",
    "about.role.title": "文化与教育交流空间",
    "about.role.text": "通过课程、文化活动和交流会，中心推动交流、技能培养以及对刚果和日本文化的相互了解。",
    "history.title": "中心历史",
    "history.intro": "了解金夏沙日本中心的宗旨及其发展的重要阶段。",
    "history.foundation.title": "创立",
    "history.foundation.text": "中心源于在金夏沙建立交流空间的愿望，旨在拉近刚果民主共和国与日本的距离，并以文化和教育促进对话。",
    "history.timeline.title": "重要阶段",
    "history.stage1.title": "中心成立",
    "history.stage1.text": "建立了一个介绍日本、加强两国联系的空间。",
    "history.stage2.title": "活动发展",
    "history.stage2.text": "活动逐步扩展到课程、文化实践和交流机会。",
    "history.stage3.title": "充满活力的交流空间",
    "history.stage3.text": "中心继续履行使命，为金夏沙民众提供学习、分享和建立联系的机会。",
    "history.note": "中心确认具体日期后，可补充各阶段的准确时间。",
    "nav.formations": "课程",
    "nav.news": "新闻",
    "nav.activities": "活动",
    "nav.contact": "联系我们",
    "formations.title": "我们的课程",
    "formations.intro": "了解金夏沙日本中心提供的学习课程。",
    "activities.title": "活动与精彩项目",
    "activities.intro": "了解为中心带来活力的体育、文化活动和定期交流项目。",
    "home.kicker": "欢迎",
    "home.discover": "发现中心",
    "home.history": "中心历史",
    "home.history.text1": "金夏沙日本中心是为加强刚果民主共和国与日本之间的文化、教育和社会联系而成立的。",
    "home.history.text2": "多年来，它已成为当地和国际社区交流、培训、文化和沟通的空间。",
    "home.activities.title": "我们的活动",
    "home.activities.muted": "点击活动即可打开页面。",
    "contact.title": "联系",
    "contact.form.title": "给我们留言",
    "contact.form.name": "你的名字",
    "contact.form.message": "你的留言",
    "contact.form.submit": "通过 WhatsApp 发送",
    "contact.form.error": "请输入你的名字和留言。",
    "contact.address": "地址",
    "contact.address_value": "Centre Japonais de Kinshasa, C/Lingwala, Réf. : Entrée du camp KOKOLO (entre l’UPC & le Commissariat général de la Police), 1 Av. du Palais du Peuple, Kinshasa, République démocratique du Congo",
    "contact.phone": "电话和邮箱",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "邮箱",
    "contact.hours": "营业时间",
    "contact.hours_value1": "周一 – 周五：08:00 – 17:00",
    "contact.hours_value2": "周六：09:00 – 13:00",
    "contact.write.whatsapp": "通过 WhatsApp 联系",
    "contact.socials": "社交媒体",
    "contact.map.title": "中心地图",
    "page.back": "返回首页",
    "activity.open": "打开页面",
    "activity.presentation": "介绍",
    "activity.schedule": "时间表",
    "activity.price": "价格",
    "activity.not_found": "未找到活动",
    "activity.not_found_text": "此活动不存在。",
    "activity.see_all": "查看所有活动",
    "activity.see_others": "查看其他活动",
    "activity.register": "通过 WhatsApp 报名",
    "activity.category.formation": "培训",
    "activity.category.sport": "体育",
    "activity.category.culture": "文化",
    "activity.japonais.title": "日语课程",
    "activity.japonais.summary": "从初学者到高级水平都有。",
    "activity.anglais.title": "英语培训",
    "activity.anglais.summary": "适合所有水平的英语课程。",
    "activity.informatique.title": "计算机培训",
    "activity.informatique.summary": "办公软件、互联网和计算机基础。",
    "activity.judo.title": "柔道",
    "activity.judo.summary": "适合儿童和成人的柔道训练。",
    "activity.sports.title": "武术",
    "activity.sports.summary": "面向各级学员的柔道、空手道、柔术和合气道课程。",
    "activity.culture.title": "文化活动",
    "activity.culture.summary": "工作坊和交流会，尤其是星期六。",
    "activity.samedi-nippon.title": "日本星期六",
    "activity.samedi-nippon.summary": "一场了解日本文化、分享交流的文化活动。",
    "lang.search.placeholder": "搜索语言",
    "lang.open": "选择语言",
    "activity.open": "打开页面"
  },
  ko: {
    "nav.about": "센터 소개",
    "nav.history": "센터 역사",
    "about.title": "킨샤사 일본 센터 소개",
    "about.intro": "킨샤사 일본 센터는 콩고민주공화국과 일본을 잇는 만남과 배움의 공간입니다.",
    "about.mission.title": "사명",
    "about.mission.text": "일본에 대한 이해를 높이고 콩고와 일본 공동체 사이의 문화·교육·인적 교류를 촉진합니다.",
    "about.vision.title": "비전",
    "about.vision.text": "상호 이해와 지식 공유, 세계를 향한 개방성을 바탕으로 콩고민주공화국과 일본 사이에 지속적인 가교를 만듭니다.",
    "about.values.title": "가치",
    "about.values.text": "존중, 대화, 호기심, 지속적인 배움과 나눔을 소중히 여깁니다.",
    "about.role.title": "문화·교육 교류의 장",
    "about.role.text": "강좌와 문화 활동, 만남을 통해 교류와 역량 개발을 장려하고 콩고와 일본 문화를 서로 알아가는 기회를 제공합니다.",
    "history.title": "센터의 역사",
    "history.intro": "킨샤사 일본 센터의 목적과 발전의 주요 단계를 소개합니다.",
    "history.foundation.title": "설립",
    "history.foundation.text": "문화와 교육을 통해 대화를 촉진하고 콩고민주공화국과 일본을 잇는 공간을 킨샤사에 만들고자 하는 뜻에서 센터가 시작되었습니다.",
    "history.timeline.title": "주요 단계",
    "history.stage1.title": "센터 설립",
    "history.stage1.text": "일본을 알리고 두 나라의 유대를 강화하기 위한 공간을 마련했습니다.",
    "history.stage2.title": "활동 확대",
    "history.stage2.text": "강좌와 문화 활동, 만남의 기회로 활동 범위를 넓혔습니다.",
    "history.stage3.title": "살아 있는 교류의 공간",
    "history.stage3.text": "센터는 킨샤사 시민에게 배우고 나누며 관계를 맺을 기회를 제공하며 사명을 이어가고 있습니다.",
    "history.note": "센터에서 확인한 뒤 각 단계의 정확한 날짜를 추가할 수 있습니다.",
    "nav.formations": "과정",
    "nav.news": "뉴스",
    "nav.activities": "활동",
    "nav.contact": "문의하기",
    "formations.title": "교육 과정",
    "formations.intro": "킨샤사 일본 센터에서 제공하는 학습 프로그램을 확인해 보세요.",
    "activities.title": "활동 및 행사",
    "activities.intro": "센터에 활기를 더하는 스포츠·문화 활동과 정기 모임을 만나 보세요.",
    "home.kicker": "환영합니다",
    "home.discover": "센터 알아보기",
    "home.history": "센터 소개",
    "home.history.text1": "킨샤사 일본 센터는 콩고 민주 공화국과 일본 사이의 문화적, 교육적, 사회적 연결을 강화하기 위해 설립되었습니다.",
    "home.history.text2": "수년 동안 지역 및 국제 커뮤니티 간의 만남, 교육, 문화, 교류의 공간으로 발전해 왔습니다.",
    "home.activities.title": "우리의 활동",
    "home.activities.muted": "활동을 클릭하면 해당 페이지가 열립니다.",
    "contact.title": "연락처",
    "contact.form.title": "문의하기",
    "contact.form.name": "이름",
    "contact.form.message": "메시지",
    "contact.form.submit": "WhatsApp로 보내기",
    "contact.form.error": "이름과 메시지를 입력해주세요.",
    "contact.address": "주소",
    "contact.address_value": "Centre Japonais de Kinshasa, C/Lingwala, Réf. : Entrée du camp KOKOLO (entre l’UPC & le Commissariat général de la Police), 1 Av. du Palais du Peuple, Kinshasa, République démocratique du Congo",
    "contact.phone": "전화 및 이메일",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "이메일",
    "contact.hours": "운영시간",
    "contact.hours_value1": "월요일 – 금요일: 08:00 – 17:00",
    "contact.hours_value2": "토요일: 09:00 – 13:00",
    "contact.write.whatsapp": "WhatsApp로 문의",
    "contact.socials": "소셜 미디어",
    "contact.map.title": "센터 지도",
    "page.back": "홈으로 돌아가기",
    "activity.open": "페이지 열기",
    "activity.presentation": "소개",
    "activity.schedule": "시간표",
    "activity.price": "가격",
    "activity.not_found": "활동을 찾을 수 없습니다",
    "activity.not_found_text": "해당 활동은 존재하지 않습니다.",
    "activity.see_all": "모든 활동 보기",
    "activity.see_others": "다른 활동 보기",
    "activity.register": "WhatsApp로 등록",
    "activity.category.formation": "교육",
    "activity.category.sport": "스포츠",
    "activity.category.culture": "문화",
    "activity.japonais.title": "일본어 과정",
    "activity.japonais.summary": "초급부터 고급까지 모두 가능합니다.",
    "activity.anglais.title": "영어 교육",
    "activity.anglais.summary": "모든 수준을 위한 영어 수업.",
    "activity.informatique.title": "컴퓨터 교육",
    "activity.informatique.summary": "사무용 도구, 인터넷, 컴퓨터 기초.",
    "activity.judo.title": "유도",
    "activity.judo.summary": "어린이와 성인을 위한 유도 수업.",
    "activity.sports.title": "무술",
    "activity.sports.summary": "모든 수준을 위한 유도, 가라테, 주짓수, 합기도 수업입니다.",
    "activity.culture.title": "문화 활동",
    "activity.culture.summary": "특히 토요일에 열리는 워크숍과 만남.",
    "activity.samedi-nippon.title": "사마디 닛폰",
    "activity.samedi-nippon.summary": "일본 문화를 알아보고 경험을 나누는 문화 모임입니다.",
    "lang.search.placeholder": "언어 검색",
    "lang.open": "언어 선택",
    "activity.open": "페이지 열기"
  },
  ru: {
    "nav.about": "О центре",
    "nav.history": "История центра",
    "about.title": "О Centre Japonais de Kinshasa",
    "about.intro": "Centre Japonais de Kinshasa — это пространство для встреч и обучения, сближающее Демократическую Республику Конго и Японию.",
    "about.mission.title": "Наша миссия",
    "about.mission.text": "Распространять знания о Японии и развивать культурный, образовательный и человеческий обмен между конголезским и японским сообществами.",
    "about.vision.title": "Наше видение",
    "about.vision.text": "Создать прочный мост между ДР Конго и Японией на основе взаимопонимания, обмена знаниями и открытости миру.",
    "about.values.title": "Наши ценности",
    "about.values.text": "Уважение, диалог, любознательность, постоянное обучение и обмен лежат в основе нашей работы.",
    "about.role.title": "Пространство культурного и образовательного обмена",
    "about.role.text": "Через курсы, культурные мероприятия и встречи центр развивает обмен, навыки и взаимное знакомство с конголезской и японской культурами.",
    "history.title": "История центра",
    "history.intro": "Узнайте о предназначении Centre Japonais de Kinshasa и основных этапах его развития.",
    "history.foundation.title": "Основание",
    "history.foundation.text": "Центр возник из стремления создать в Киншасе место, сближающее ДР Конго и Японию, где культура и образование способствуют диалогу.",
    "history.timeline.title": "Ключевые этапы",
    "history.stage1.title": "Создание центра",
    "history.stage1.text": "Было создано пространство для знакомства с Японией и укрепления связей между двумя странами.",
    "history.stage2.title": "Развитие деятельности",
    "history.stage2.text": "Деятельность расширилась и включила курсы, культурные практики и возможности для встреч.",
    "history.stage3.title": "Живое пространство для обмена",
    "history.stage3.text": "Центр продолжает свою миссию, предоставляя жителям Киншасы возможности учиться, делиться опытом и налаживать связи.",
    "history.note": "Точные даты этапов можно добавить после их подтверждения центром.",
    "nav.formations": "Курсы",
    "nav.news": "Новости",
    "nav.activities": "Мероприятия",
    "nav.contact": "Связаться с нами",
    "formations.title": "Наши курсы",
    "formations.intro": "Познакомьтесь с образовательными программами Centre Japonais de Kinshasa.",
    "activities.title": "Мероприятия и встречи",
    "activities.intro": "Откройте для себя спортивные и культурные мероприятия, а также регулярные встречи центра.",
    "home.kicker": "Добро пожаловать",
    "home.discover": "Узнать центр",
    "home.history": "История центра",
    "home.history.text1": "Центр японской культуры в Киншасе был создан для укрепления культурных, образовательных и социальных связей между Демократической Республикой Конго и Японией.",
    "home.history.text2": "С годами он стал местом встреч, обучения, культуры и обмена между местными и международными сообществами.",
    "home.activities.title": "Наши активности",
    "home.activities.muted": "Нажмите на активность, чтобы открыть страницу.",
    "contact.title": "Контакты",
    "contact.form.title": "Напишите нам",
    "contact.form.name": "Ваше имя",
    "contact.form.message": "Ваше сообщение",
    "contact.form.submit": "Отправить в WhatsApp",
    "contact.form.error": "Пожалуйста, укажите ваше имя и сообщение.",
    "contact.address": "Адрес",
    "contact.address_value": "Centre Japonais de Kinshasa, C/Lingwala, Réf. : Entrée du camp KOKOLO (entre l’UPC & le Commissariat général de la Police), 1 Av. du Palais du Peuple, Kinshasa, République démocratique du Congo",
    "contact.phone": "Телефон и электронная почта",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "Электронная почта",
    "contact.hours": "Часы работы",
    "contact.hours_value1": "Понедельник – Пятница: 08:00 – 17:00",
    "contact.hours_value2": "Суббота: 09:00 – 13:00",
    "contact.write.whatsapp": "Написать в WhatsApp",
    "contact.socials": "Социальные сети",
    "contact.map.title": "Карта центра",
    "page.back": "Вернуться на главную",
    "activity.open": "Открыть страницу",
    "activity.presentation": "Описание",
    "activity.schedule": "Расписание",
    "activity.price": "Цена",
    "activity.not_found": "Активность не найдена",
    "activity.not_found_text": "Эта активность не существует.",
    "activity.see_all": "Посмотреть все активности",
    "activity.see_others": "Посмотреть другие активности",
    "activity.register": "Записаться через WhatsApp",
    "activity.category.formation": "Обучение",
    "activity.category.sport": "Спорт",
    "activity.category.culture": "Культура",
    "activity.japonais.title": "Курс японского языка",
    "activity.japonais.summary": "От начального до продвинутого уровня.",
    "activity.anglais.title": "Курсы английского языка",
    "activity.anglais.summary": "Английские курсы для всех уровней.",
    "activity.informatique.title": "Курс информатики",
    "activity.informatique.summary": "Офисные инструменты, интернет и основы информатики.",
    "activity.judo.title": "Дзюдо",
    "activity.judo.summary": "Занятия дзюдо для детей и взрослых.",
    "activity.sports.title": "Боевые искусства",
    "activity.sports.summary": "Дзюдо, каратэ, джиу-джитсу и айкидо для всех уровней.",
    "activity.culture.title": "Культурные активности",
    "activity.culture.summary": "Мастерские и встречи, особенно по субботам.",
    "activity.samedi-nippon.title": "Самади Ниппон",
    "activity.samedi-nippon.summary": "Культурная встреча, посвящённая знакомству с Японией и обмену опытом.",
    "lang.search.placeholder": "Найти язык",
    "lang.open": "Выбрать язык",
    "activity.open": "Открыть страницу"
  }
};

const ACTIVITY_TRANSLATIONS = {
  fr: {
    "activity.japonais.description": "Apprenez les bases du japonais, la conversation, la lecture et l’écriture avec un accompagnement progressif adapté à chaque niveau.",
    "activity.cuisine-japonaise.description": "Un atelier pratique pour découvrir les ingrédients, les techniques et les saveurs de la cuisine japonaise à travers plusieurs recettes.",
    "activity.cuisine.catalog.title": "Catalogue des plats",
    "activity.cuisine.catalog.intro": "Sélectionnez un plat pour en découvrir la présentation.",
    "activity.cuisine.dish.discover": "Découvrir ce plat",
    "activity.cuisine.sushi.title": "Sushis",
    "activity.cuisine.sushi.description": "Apprenez à préparer des sushis avec du riz vinaigré, des légumes et des garnitures variées.",
    "activity.cuisine.ramen.title": "Ramen",
    "activity.cuisine.ramen.description": "Découvrez les nouilles ramen, leur bouillon savoureux et les garnitures qui composent ce plat populaire.",
    "activity.cuisine.takoyaki.title": "Takoyaki",
    "activity.cuisine.takoyaki.description": "Préparez ces boulettes japonaises dorées, traditionnellement garnies de poulpe et servies avec une sauce savoureuse.",
    "activity.cuisine.okonomiyaki.title": "Okonomiyaki",
    "activity.cuisine.okonomiyaki.description": "Réalisez cette galette japonaise garnie selon vos envies, à base de chou et d’une pâte légère.",
    "activity.cuisine.tempura.title": "Tempura",
    "activity.cuisine.tempura.description": "Apprenez à enrober et frire légumes ou fruits de mer dans une pâte légère et croustillante.",
    "activity.cuisine-japonaise.schedule": "Dates à confirmer auprès du centre",
    "activity.cuisine-japonaise.price": "À confirmer",
    "activity.anglais.description": "Des séances pratiques pour améliorer la compréhension orale, l’expression écrite et la communication quotidienne en anglais.",
    "activity.informatique.description": "Initiation et perfectionnement sur les outils bureautiques, la navigation web, les présentations et les usages numériques de base.",
    "activity.judo.description": "Des cours encadrés avec un travail sur la discipline, le respect, la technique et la confiance en soi.",
    "activity.sports.description": "Le centre propose des cours de judo, de karaté, de jiu-jitsu et d’aïkido, encadrés autour de la discipline, du respect et de la maîtrise technique.",
    "activity.culture.description": "Des ateliers culturels autour de la calligraphie, du cinéma, des échanges artistiques et des rencontres de culture japonaise.",
    "activity.japonais.schedule": "Lundi, mercredi et vendredi – 17h30 à 19h00",
    "activity.anglais.schedule": "Mardi et jeudi – 17h30 à 19h00",
    "activity.informatique.schedule": "Mercredi et samedi – 09h00 à 12h00",
    "activity.judo.schedule": "Lundi, mercredi et samedi – 15h00 à 18h00",
    "activity.sports.program.judo-karate": "Judo et Karaté",
    "activity.sports.schedule.judo-karate": "Lundi, mercredi et vendredi – 17h00 à 19h00",
    "activity.sports.program.jiu-jitsu-aikido": "Jiu-jitsu et Aïkido",
    "activity.sports.schedule.jiu-jitsu-aikido": "Mardi et jeudi – 17h00 à 19h00 ; samedi – 8h00 à 10h00",
    "activity.event.upcoming": "À venir",
    "activity.registration_fee": "Frais d’inscription",
    "activity.monthly_fee": "Abonnement mensuel",
    "activity.culture.schedule": "Tous les samedis – 10h00 à 13h00",
    "activity.japonais.price": "40 $ / mois",
    "activity.anglais.price": "35 $ / mois",
    "activity.informatique.price": "45 $ / mois",
    "activity.judo.price": "30 $ / mois",
    "activity.sports.registration_fee": "20 $",
    "activity.sports.monthly_fee": "30 $ / mois",
    "activity.culture.price": "20 $ / séance",
    "activity.samedi-nippon.description": "Le Samedi Nippon invite la communauté à découvrir la culture japonaise, à participer à des activités culturelles et à échanger.",
    "activity.samedi-nippon.schedule": "Chaque samedi – 14h00 à 16h00",
    "activity.samedi-nippon.price": "Gratuit",
    "activity.rh-atelier.title": "Atelier de ressources humaines",
    "activity.rh-atelier.summary": "Des échanges autour du recrutement, des talents et des compétences professionnelles.",
    "activity.rh-atelier.description": "Les ateliers de ressources humaines aident à développer les compétences en gestion des talents, recrutement et collaboration.",
    "activity.rh-atelier.schedule": "Dates à confirmer auprès du centre",
    "activity.rh-atelier.price": "Modalités à confirmer auprès du centre",
    "activity.samedi-nippon-echange-de-voeux.title": "Samedi Nippon : Échange de vœux",
    "activity.samedi-nippon-echange-de-voeux.summary": "Une rencontre chaleureuse pour accueillir la nouvelle année et partager des vœux entre la communauté.",
    "activity.samedi-nippon-echange-de-voeux.description": "Cette édition spéciale met l’accent sur les échanges de vœux, le partage de bonnes intentions et la convivialité qui caractérise la culture japonaise et les valeurs de proximité du centre.",
    "activity.samedi-nippon-echange-de-voeux.schedule": "Date : 25 décembre 2026",
    "activity.samedi-nippon-echange-de-voeux.price": "Gratuit",
    "activity.samedi-nippon-saint-valentin.title": "Samedi Nippon : Saint-Valentin",
    "activity.samedi-nippon-saint-valentin.summary": "Une célébration douce et créative autour de l’amour, du partage et de la culture.",
    "activity.samedi-nippon-saint-valentin.description": "À l’occasion de la Saint-Valentin, le centre organise une édition spéciale pensée pour célébrer les liens humains, la gentillesse et les échanges artistiques.",
    "activity.samedi-nippon-saint-valentin.schedule": "Date : 14 février 2027",
    "activity.samedi-nippon-saint-valentin.price": "Gratuit",
    "activity.samedi-nippon-white-days.title": "Samedi Nippon : White Days",
    "activity.samedi-nippon-white-days.summary": "Un moment festif inspiré du retour des cadeaux et des gestes attentionnés.",
    "activity.samedi-nippon-white-days.description": "Les White Days sont l’occasion de prolonger la magie des échanges, dans une ambiance conviviale et créative qui valorise le partage et la gratitude.",
    "activity.samedi-nippon-white-days.schedule": "Date : 14 mars 2027",
    "activity.samedi-nippon-white-days.price": "Gratuit",
    "activity.samedi-nippon-halloween.title": "Samedi Nippon : Halloween",
    "activity.samedi-nippon-halloween.summary": "Une édition festive, colorée et pleine d’énergie pour découvrir des codes culturels inspirants.",
    "activity.samedi-nippon-halloween.description": "L’Halloween au centre propose un cadre joyeux et dynamique autour des costumes, de la créativité et du partage entre participants.",
    "activity.samedi-nippon-halloween.schedule": "Date : 31 octobre 2027",
    "activity.samedi-nippon-halloween.price": "Gratuit",
    "activity.samedi-nippon-shooting-photo.title": "Samedi Nippon : Shooting photo",
    "activity.samedi-nippon-shooting-photo.summary": "Une séance conviviale de portraits et de prises de vue inspirées par la culture japonaise.",
    "activity.samedi-nippon-shooting-photo.description": "Cette édition met à l’honneur la créativité visuelle avec un shooting photo dans une ambiance lumineuse et artistique, ouvert à tous.",
    "activity.samedi-nippon-shooting-photo.schedule": "Date à confirmer",
    "activity.samedi-nippon-shooting-photo.price": "Gratuit",
    "activity.kizuna.title": "Kizuna",
    "activity.kizuna.summary": "Une rencontre culturelle autour des liens et du partage.",
    "activity.kizuna.description": "Kizuna est une occasion de découvrir la culture japonaise, de tisser des liens et de partager un moment avec la communauté.",
    "activity.kizuna.price": "À confirmer",
    "activity.tanabata.title": "Tanabata",
    "activity.tanabata.summary": "Découvrez la fête japonaise des étoiles et des souhaits.",
    "activity.tanabata.description": "Tanabata célèbre les étoiles et les souhaits dans une fête japonaise traditionnelle, avec des activités culturelles et créatives.",
    "activity.tanabata.price": "À confirmer",
    "activity.kodomo-no-hi.title": "Kodomo no Hi",
    "activity.kodomo-no-hi.summary": "Une célébration japonaise dédiée aux enfants.",
    "activity.kodomo-no-hi.description": "Kodomo no Hi est une fête japonaise consacrée aux enfants, à leur bonheur et à leur épanouissement.",
    "activity.kodomo-no-hi.price": "À confirmer"
  },
  en: {
    "activity.japonais.description": "Learn the basics of Japanese, conversation, reading and writing with gradual support adapted to each level.",
    "activity.cuisine-japonaise.description": "A hands-on workshop to discover Japanese ingredients, techniques and flavours through several recipes.",
    "activity.cuisine.catalog.title": "Dish catalogue",
    "activity.cuisine.catalog.intro": "Select a dish to discover more about it.",
    "activity.cuisine.dish.discover": "Discover this dish",
    "activity.cuisine.sushi.title": "Sushi",
    "activity.cuisine.sushi.description": "Learn to make sushi with seasoned rice, vegetables and a variety of toppings.",
    "activity.cuisine.ramen.title": "Ramen",
    "activity.cuisine.ramen.description": "Discover ramen noodles, their flavourful broth and the toppings that make this popular dish.",
    "activity.cuisine.takoyaki.title": "Takoyaki",
    "activity.cuisine.takoyaki.description": "Prepare these golden Japanese bites, traditionally filled with octopus and served with a savoury sauce.",
    "activity.cuisine.okonomiyaki.title": "Okonomiyaki",
    "activity.cuisine.okonomiyaki.description": "Make this Japanese savoury pancake with cabbage and a light batter, with toppings to suit your taste.",
    "activity.cuisine.tempura.title": "Tempura",
    "activity.cuisine.tempura.description": "Learn to coat and fry vegetables or seafood in a light, crisp batter.",
    "activity.cuisine-japonaise.schedule": "Dates to be confirmed with the centre",
    "activity.cuisine-japonaise.price": "To be confirmed",
    "activity.anglais.description": "Practical sessions to improve oral comprehension, written expression and everyday communication in English.",
    "activity.informatique.description": "Introduction and improvement in office tools, web browsing, presentations and basic digital skills.",
    "activity.judo.description": "Structured classes focused on discipline, respect, technique and self-confidence.",
    "activity.sports.description": "The centre offers judo, karate, jiu-jitsu and aikido classes focused on discipline, respect and technical skill.",
    "activity.culture.description": "Cultural workshops around calligraphy, cinema, artistic exchanges and meetings on Japanese culture.",
    "activity.japonais.schedule": "Monday, Wednesday and Friday – 5:30 PM to 7:00 PM",
    "activity.anglais.schedule": "Tuesday and Thursday – 5:30 PM to 7:00 PM",
    "activity.informatique.schedule": "Wednesday and Saturday – 9:00 AM to 12:00 PM",
    "activity.judo.schedule": "Monday, Wednesday and Saturday – 3:00 PM to 6:00 PM",
    "activity.sports.program.judo-karate": "Judo and Karate",
    "activity.sports.schedule.judo-karate": "Monday, Wednesday and Friday – 5:00 PM to 7:00 PM",
    "activity.sports.program.jiu-jitsu-aikido": "Jiu-jitsu and Aikido",
    "activity.sports.schedule.jiu-jitsu-aikido": "Tuesday and Thursday – 5:00 PM to 7:00 PM; Saturday – 8:00 AM to 10:00 AM",
    "activity.event.upcoming": "Coming soon",
    "activity.registration_fee": "Registration fee",
    "activity.monthly_fee": "Monthly subscription",
    "activity.culture.schedule": "Every Saturday – 10:00 AM to 1:00 PM",
    "activity.japonais.price": "$40 / month",
    "activity.anglais.price": "$35 / month",
    "activity.informatique.price": "$45 / month",
    "activity.judo.price": "$30 / month",
    "activity.sports.registration_fee": "$20",
    "activity.sports.monthly_fee": "$30 / month",
    "activity.culture.price": "$20 / session",
    "activity.samedi-nippon.description": "Saturday Nippon invites the community to discover Japanese culture, take part in cultural activities, and connect.",
    "activity.samedi-nippon.schedule": "Every Saturday – 2:00 PM to 4:00 PM",
    "activity.samedi-nippon.price": "Free",
    "activity.kizuna.title": "Kizuna",
    "activity.kizuna.summary": "A cultural gathering about connection and sharing.",
    "activity.kizuna.description": "Kizuna is an opportunity to discover Japanese culture, build connections and share a moment with the community.",
    "activity.kizuna.price": "To be confirmed",
    "activity.tanabata.title": "Tanabata",
    "activity.tanabata.summary": "Discover the Japanese festival of stars and wishes.",
    "activity.tanabata.description": "Tanabata celebrates the stars and wishes through a traditional Japanese festival with cultural and creative activities.",
    "activity.tanabata.price": "To be confirmed",
    "activity.kodomo-no-hi.title": "Kodomo no Hi",
    "activity.kodomo-no-hi.summary": "A Japanese celebration dedicated to children.",
    "activity.kodomo-no-hi.description": "Kodomo no Hi is a Japanese holiday dedicated to children's happiness and well-being.",
    "activity.kodomo-no-hi.price": "To be confirmed"
  },
  ja: {
    "activity.japonais.description": "各レベルに合わせた段階的な指導で、日本語の基礎、会話、読解、書き取りを学びます。",
    "activity.anglais.description": "英語の聞き取り、書き言葉、日常会話を向上させるための実践的な授業です。",
    "activity.informatique.description": "オフィスツール、ウェブ閲覧、プレゼンテーション、基本的なデジタル活用を学びます。",
    "activity.judo.description": "規律、礼儀、技術、自信を育む指導付きの授業です。",
    "activity.sports.description": "規律、礼儀、技術を重視した柔道、空手、柔術、合気道のクラスを提供しています。",
    "activity.culture.description": "書道、映画、芸術交流、日本文化の交流会を中心とした文化ワークショップです。",
    "activity.japonais.schedule": "月・水・金 – 17:30 ～ 19:00",
    "activity.anglais.schedule": "火・木 – 17:30 ～ 19:00",
    "activity.informatique.schedule": "水曜・土曜 – 09:00 ～ 12:00",
    "activity.judo.schedule": "月・水・土 – 15:00 ～ 18:00",
    "activity.sports.schedule": "金曜・土曜 – 15:00 ～ 18:00",
    "activity.culture.schedule": "毎土曜 – 10:00 ～ 13:00",
    "activity.japonais.price": "40 $ / 月",
    "activity.anglais.price": "35 $ / 月",
    "activity.informatique.price": "45 $ / 月",
    "activity.judo.price": "30 $ / 月",
    "activity.sports.price": "25 $ / 月",
    "activity.culture.price": "20 $ / 回",
    "activity.samedi-nippon.description": "サマディ・ニッポンでは、日本文化に触れ、文化活動に参加し、交流することができます。",
    "activity.samedi-nippon.schedule": "毎週土曜日 – 14:00～16:00",
    "activity.samedi-nippon.price": "無料"
  },
  es: {
    "activity.japonais.description": "Aprende lo básico del japonés, conversación, lectura y escritura con apoyo gradual adaptado a cada nivel.",
    "activity.anglais.description": "Sesiones prácticas para mejorar la comprensión oral, la expresión escrita y la comunicación diaria en inglés.",
    "activity.informatique.description": "Introducción y perfeccionamiento en herramientas ofimáticas, navegación web, presentaciones y usos digitales básicos.",
    "activity.judo.description": "Clases guiadas con trabajo de disciplina, respeto, técnica y confianza personal.",
    "activity.sports.description": "El centro ofrece clases de judo, karate, jiu-jitsu y aikido centradas en la disciplina, el respeto y la técnica.",
    "activity.culture.description": "Talleres culturales sobre caligrafía, cine, intercambios artísticos y encuentros de cultura japonesa.",
    "activity.japonais.schedule": "Lunes, miércoles y viernes – 17:30 a 19:00",
    "activity.anglais.schedule": "Martes y jueves – 17:30 a 19:00",
    "activity.informatique.schedule": "Miércoles y sábado – 09:00 a 12:00",
    "activity.judo.schedule": "Lunes, miércoles y sábado – 15:00 a 18:00",
    "activity.sports.schedule": "Viernes y sábado – 15:00 a 18:00",
    "activity.culture.schedule": "Todos los sábados – 10:00 a 13:00",
    "activity.japonais.price": "40 $ / mes",
    "activity.anglais.price": "35 $ / mes",
    "activity.informatique.price": "45 $ / mes",
    "activity.judo.price": "30 $ / mes",
    "activity.sports.price": "25 $ / mes",
    "activity.culture.price": "20 $ / sesión",
    "activity.samedi-nippon.description": "El Sábado Nippon invita a la comunidad a descubrir la cultura japonesa, participar en actividades culturales e intercambiar experiencias.",
    "activity.samedi-nippon.schedule": "Cada sábado – 14:00 a 16:00",
    "activity.samedi-nippon.price": "Gratis"
  },
  de: {
    "activity.japonais.description": "Lerne die Grundlagen des Japanischen, Konversation, Lesen und Schreiben mit einer schrittweisen Begleitung für jedes Niveau.",
    "activity.anglais.description": "Praktische Einheiten zur Verbesserung des mündlichen Verständnisses, der schriftlichen Ausdrucksfähigkeit und der alltäglichen Kommunikation auf Englisch.",
    "activity.informatique.description": "Einführung und Vertiefung in Bürotools, Webnavigation, Präsentationen und grundlegende digitale Fähigkeiten.",
    "activity.judo.description": "Strukturierte Kurse mit Fokus auf Disziplin, Respekt, Technik und Selbstvertrauen.",
    "activity.sports.description": "Das Zentrum bietet Judo-, Karate-, Jiu-Jitsu- und Aikido-Kurse mit Schwerpunkt auf Disziplin, Respekt und Technik.",
    "activity.culture.description": "Kulturelle Workshops rund um Kalligraphie, Film, künstlerische Austauschprogramme und Treffen zur japanischen Kultur.",
    "activity.japonais.schedule": "Montag, Mittwoch und Freitag – 17:30 bis 19:00",
    "activity.anglais.schedule": "Dienstag und Donnerstag – 17:30 bis 19:00",
    "activity.informatique.schedule": "Mittwoch und Samstag – 09:00 bis 12:00",
    "activity.judo.schedule": "Montag, Mittwoch und Samstag – 15:00 bis 18:00",
    "activity.sports.schedule": "Freitag und Samstag – 15:00 bis 18:00",
    "activity.culture.schedule": "Jeden Samstag – 10:00 bis 13:00",
    "activity.japonais.price": "40 $ / Monat",
    "activity.anglais.price": "35 $ / Monat",
    "activity.informatique.price": "45 $ / Monat",
    "activity.judo.price": "30 $ / Monat",
    "activity.sports.price": "25 $ / Monat",
    "activity.culture.price": "20 $ / Sitzung",
    "activity.samedi-nippon.description": "Samstag Nippon lädt die Gemeinschaft ein, die japanische Kultur kennenzulernen, an kulturellen Aktivitäten teilzunehmen und sich auszutauschen.",
    "activity.samedi-nippon.schedule": "Jeden Samstag – 14:00 bis 16:00 Uhr",
    "activity.samedi-nippon.price": "Kostenlos"
  },
  pt: {
    "activity.japonais.description": "Aprenda o básico do japonês, conversação, leitura e escrita com apoio gradual adaptado a cada nível.",
    "activity.anglais.description": "Sessões práticas para melhorar a compreensão oral, a expressão escrita e a comunicação diária em inglês.",
    "activity.informatique.description": "Introdução e aperfeiçoamento em ferramentas de escritório, navegação web, apresentações e usos digitais básicos.",
    "activity.judo.description": "Aulas estruturadas com foco em disciplina, respeito, técnica e autoconfiança.",
    "activity.sports.description": "O centro oferece aulas de judô, karatê, jiu-jitsu e aikido com foco na disciplina, no respeito e na técnica.",
    "activity.culture.description": "Oficinas culturais sobre caligrafia, cinema, intercâmbios artísticos e encontros de cultura japonesa.",
    "activity.japonais.schedule": "Segunda, quarta e sexta – 17h30 às 19h00",
    "activity.anglais.schedule": "Terça e quinta – 17h30 às 19h00",
    "activity.informatique.schedule": "Quarta e sábado – 09h00 às 12h00",
    "activity.judo.schedule": "Segunda, quarta e sábado – 15h00 às 18h00",
    "activity.sports.schedule": "Sexta e sábado – 15h00 às 18h00",
    "activity.culture.schedule": "Todos os sábados – 10h00 às 13h00",
    "activity.japonais.price": "40 $ / mês",
    "activity.anglais.price": "35 $ / mês",
    "activity.informatique.price": "45 $ / mês",
    "activity.judo.price": "30 $ / mês",
    "activity.sports.price": "25 $ / mês",
    "activity.culture.price": "20 $ / sessão",
    "activity.samedi-nippon.description": "O Sábado Nippon convida a comunidade a descobrir a cultura japonesa, participar de atividades culturais e trocar experiências.",
    "activity.samedi-nippon.schedule": "Todos os sábados – 14h00 às 16h00",
    "activity.samedi-nippon.price": "Gratuito"
  },
  ar: {
    "activity.japonais.description": "تعلم أساسيات اليابانية والمحادثة والقراءة والكتابة مع دعم تدريجي يناسب كل مستوى.",
    "activity.anglais.description": "جلسات عملية لتحسين الفهم الشفهي والتعبير الكتابي والتواصل اليومي باللغة الإنجليزية.",
    "activity.informatique.description": "مقدمة وتحسين في أدوات المكتب والتصفح الإلكتروني والعروض التقديمية والمهارات الرقمية الأساسية.",
    "activity.judo.description": "دروس منظمة تركز على الانضباط والاحترام والتقنية والثقة بالنفس.",
    "activity.sports.description": "يقدم المركز دروسًا في الجودو والكاراتيه والجيوجيتسو والأيكيدو تركّز على الانضباط والاحترام والتقنية.",
    "activity.culture.description": "ورش ثقافية حول الخط، السينما، التبادلات الفنية واللقاءات المتعلقة بالثقافة اليابانية.",
    "activity.japonais.schedule": "الإثنين والأربعاء والجمعة – 17:30 إلى 19:00",
    "activity.anglais.schedule": "الثلاثاء والخميس – 17:30 إلى 19:00",
    "activity.informatique.schedule": "الأربعاء والسبت – 09:00 إلى 12:00",
    "activity.judo.schedule": "الإثنين والأربعاء والسبت – 15:00 إلى 18:00",
    "activity.sports.schedule": "الجمعة والسبت – 15:00 إلى 18:00",
    "activity.culture.schedule": "كل يوم سبت – 10:00 إلى 13:00",
    "activity.japonais.price": "40 دولار / شهر",
    "activity.anglais.price": "35 دولار / شهر",
    "activity.informatique.price": "45 دولار / شهر",
    "activity.judo.price": "30 دولار / شهر",
    "activity.sports.price": "25 دولار / شهر",
    "activity.culture.price": "20 دولار / جلسة",
    "activity.samedi-nippon.description": "يدعو السبت الياباني المجتمع إلى اكتشاف الثقافة اليابانية والمشاركة في أنشطة ثقافية وتبادل الخبرات.",
    "activity.samedi-nippon.schedule": "كل يوم سبت – 14:00 إلى 16:00",
    "activity.samedi-nippon.price": "مجانًا"
  },
  zh: {
    "activity.japonais.description": "学习日语基础、会话、阅读和写作，并根据每个水平提供逐步支持。",
    "activity.anglais.description": "通过实践课程提高英语口语理解、写作表达和日常沟通能力。",
    "activity.informatique.description": "介绍和提升办公软件、网页浏览、演示文稿和基础数字技能。",
    "activity.judo.description": "结构化课程，注重纪律、尊重、技术和自信。",
    "activity.sports.description": "中心开设柔道、空手道、柔术和合气道课程，注重纪律、尊重和技术。",
    "activity.culture.description": "围绕书法、电影、艺术交流和日本文化交流的文化工作坊。",
    "activity.japonais.schedule": "周一、周三、周五 – 17:30 至 19:00",
    "activity.anglais.schedule": "周二、周四 – 17:30 至 19:00",
    "activity.informatique.schedule": "周三、周六 – 09:00 至 12:00",
    "activity.judo.schedule": "周一、周三、周六 – 15:00 至 18:00",
    "activity.sports.schedule": "周五、周六 – 15:00 至 18:00",
    "activity.culture.schedule": "每周六 – 10:00 至 13:00",
    "activity.japonais.price": "40 美元 / 月",
    "activity.anglais.price": "35 美元 / 月",
    "activity.informatique.price": "45 美元 / 月",
    "activity.judo.price": "30 美元 / 月",
    "activity.sports.price": "25 美元 / 月",
    "activity.culture.price": "20 美元 / 次",
    "activity.samedi-nippon.description": "日本星期六邀请社区了解日本文化、参加文化活动并交流分享。",
    "activity.samedi-nippon.schedule": "每周六 – 14:00 至 16:00",
    "activity.samedi-nippon.price": "免费"
  },
  ko: {
    "activity.japonais.description": "각 수준에 맞춘 단계별 지도를 통해 일본어 기초, 회화, 읽기, 쓰기를 배웁니다.",
    "activity.anglais.description": "영어 청해, 쓰기, 일상 회화를 향상시키는 실습 수업입니다.",
    "activity.informatique.description": "사무 도구, 웹 탐색, 발표, 기본 디지털 사용법을 배우고 향상시킵니다.",
    "activity.judo.description": "규율, 존중, 기술, 자신감을 중심으로 하는 체계적인 수업입니다.",
    "activity.sports.description": "센터는 규율, 존중, 기술에 중점을 둔 유도, 가라테, 주짓수, 합기도 수업을 제공합니다.",
    "activity.culture.description": "서예, 영화, 예술적 교류, 일본 문화 만남을 중심으로 한 문화 워크숍입니다.",
    "activity.japonais.schedule": "월·수·금 – 17:30 ~ 19:00",
    "activity.anglais.schedule": "화·목 – 17:30 ~ 19:00",
    "activity.informatique.schedule": "수·토 – 09:00 ~ 12:00",
    "activity.judo.schedule": "월·수·토 – 15:00 ~ 18:00",
    "activity.sports.schedule": "금·토 – 15:00 ~ 18:00",
    "activity.culture.schedule": "매주 토요일 – 10:00 ~ 13:00",
    "activity.japonais.price": "40 $ / 월",
    "activity.anglais.price": "35 $ / 월",
    "activity.informatique.price": "45 $ / 월",
    "activity.judo.price": "30 $ / 월",
    "activity.sports.price": "25 $ / 월",
    "activity.culture.price": "20 $ / 회",
    "activity.samedi-nippon.description": "사마디 닛폰은 일본 문화를 알아보고 문화 활동에 참여하며 교류할 수 있는 모임입니다.",
    "activity.samedi-nippon.schedule": "매주 토요일 – 14:00~16:00",
    "activity.samedi-nippon.price": "무료"
  },
  ru: {
    "activity.japonais.description": "Изучайте основы японского языка, разговорную речь, чтение и письмо с постепенной поддержкой для каждого уровня.",
    "activity.anglais.description": "Практические занятия для улучшения устного понимания, письменной речи и повседневного общения на английском языке.",
    "activity.informatique.description": "Введение и совершенствование в офисных инструментах, веб-серфинге, презентациях и базовых цифровых навыках.",
    "activity.judo.description": "Структурированные занятия, посвященные дисциплине, уважению, технике и уверенности в себе.",
    "activity.sports.description": "В центре проходят занятия дзюдо, каратэ, джиу-джитсу и айкидо с упором на дисциплину, уважение и технику.",
    "activity.culture.description": "Культурные мастерские по каллиграфии, кино, художественным обменам и встречам по японской культуре.",
    "activity.japonais.schedule": "Понедельник, среда и пятница – 17:30 до 19:00",
    "activity.anglais.schedule": "Вторник и четверг – 17:30 до 19:00",
    "activity.informatique.schedule": "Среда и суббота – 09:00 до 12:00",
    "activity.judo.schedule": "Понедельник, среда и суббота – 15:00 до 18:00",
    "activity.sports.schedule": "Пятница и суббота – 15:00 до 18:00",
    "activity.culture.schedule": "Каждую субботу – 10:00 до 13:00",
    "activity.japonais.price": "40 $ / месяц",
    "activity.anglais.price": "35 $ / месяц",
    "activity.informatique.price": "45 $ / месяц",
    "activity.judo.price": "30 $ / месяц",
    "activity.sports.price": "25 $ / месяц",
    "activity.culture.price": "20 $ / занятие",
    "activity.samedi-nippon.description": "Самади Ниппон приглашает всех познакомиться с японской культурой, принять участие в культурных мероприятиях и обменяться опытом.",
    "activity.samedi-nippon.schedule": "Каждую субботу – с 14:00 до 16:00",
    "activity.samedi-nippon.price": "Бесплатно"
  }
};

const ADDITIONAL_TRANSLATIONS = {
  fr: {
    "nav.main": "Navigation principale",
    "news.filters.aria": "Recherche et filtres des actualités",
    "home.choose_photo": "Choisir une photo",
    "home.slide": "Photo {number}",
    "activity.register.message": "Bonjour, je souhaite m'inscrire à : {title}.",
    "contact.whatsapp.info": "Bonjour, j'aimerais avoir des informations sur le centre.",
    "contact.whatsapp.form": "Bonjour, je suis {name}.\n{message}",
    "activity.sports.registration_fee.amount": "20 $",
    "activity.sports.monthly_fee.amount": "30 $ / mois"
  },
  en: {
    "nav.main": "Main navigation",
    "news.filters.aria": "Search and news filters",
    "home.choose_photo": "Choose a photo",
    "home.slide": "Photo {number}",
    "activity.register.message": "Hello, I would like to register for: {title}.",
    "contact.whatsapp.info": "Hello, I would like information about the centre.",
    "contact.whatsapp.form": "Hello, my name is {name}.\n{message}",
    "activity.sports.registration_fee.amount": "$20",
    "activity.sports.monthly_fee.amount": "$30 / month",
    "activity.cuisine-japonaise.schedule": "Dates to be confirmed with the centre",
    "activity.cuisine-japonaise.price": "To be confirmed",
    "activity.samedi-nippon-echange-de-voeux.schedule": "Date: December 25, 2026",
    "activity.samedi-nippon-saint-valentin.schedule": "Date: February 14, 2027",
    "activity.samedi-nippon-white-days.schedule": "Date: March 14, 2027",
    "activity.samedi-nippon-halloween.schedule": "Date: October 31, 2027",
    "activity.samedi-nippon-shooting-photo.schedule": "Date to be confirmed",
    "activity.samedi-nippon-echange-de-voeux.price": "Free",
    "activity.samedi-nippon-saint-valentin.price": "Free",
    "activity.samedi-nippon-white-days.price": "Free",
    "activity.samedi-nippon-halloween.price": "Free",
    "activity.samedi-nippon-shooting-photo.price": "Free",
    "activity.event.upcoming": "Coming soon",
    "activity.kizuna.price": "To be confirmed",
    "activity.tanabata.price": "To be confirmed",
    "activity.kodomo-no-hi.price": "To be confirmed",
    "activity.registration_fee": "Registration fee",
    "activity.monthly_fee": "Monthly subscription",
    "samedi.nippon.regular.free": "Free entry • every Saturday",
    "activity.samedi-nippon-echange-de-voeux.title": "Saturday Nippon: New Year Wishes",
    "activity.samedi-nippon-echange-de-voeux.summary": "A warm gathering to welcome the new year and share wishes within the community.",
    "activity.samedi-nippon-echange-de-voeux.description": "This special edition focuses on exchanging greetings, kind wishes and community warmth inspired by Japanese culture and the centre's spirit of togetherness.",
    "activity.samedi-nippon-saint-valentin.title": "Saturday Nippon: Valentine's Day",
    "activity.samedi-nippon-saint-valentin.summary": "A gentle, creative celebration around love, sharing and culture.",
    "activity.samedi-nippon-saint-valentin.description": "For Valentine's Day, the centre organizes a special edition dedicated to human connection, kindness and artistic exchange.",
    "activity.samedi-nippon-white-days.title": "Saturday Nippon: White Day",
    "activity.samedi-nippon-white-days.summary": "A festive moment inspired by thoughtful gifts and appreciation.",
    "activity.samedi-nippon-white-days.description": "White Day offers a joyful and friendly atmosphere that celebrates gratitude, generosity and togetherness.",
    "activity.samedi-nippon-halloween.title": "Saturday Nippon: Halloween",
    "activity.samedi-nippon-halloween.summary": "A lively and colourful event inspired by festive creative culture.",
    "activity.samedi-nippon-halloween.description": "Halloween at the centre creates a cheerful and dynamic space where costumes, creativity and sharing come together.",
    "activity.samedi-nippon-shooting-photo.title": "Saturday Nippon: Photo Shoot",
    "activity.samedi-nippon-shooting-photo.summary": "A friendly photo session inspired by Japanese visual culture.",
    "activity.samedi-nippon-shooting-photo.description": "This edition celebrates creativity through a photo shoot in a warm artistic atmosphere open to everyone."
  },
  ja: {
    "nav.main": "メインナビゲーション",
    "news.filters.aria": "ニュースの検索とカテゴリーフィルター",
    "home.choose_photo": "写真を選択",
    "home.slide": "写真 {number}",
    "activity.register.message": "こんにちは、{title}に申し込みたいです。",
    "contact.whatsapp.info": "こんにちは、センターについて詳しく知りたいです。",
    "contact.whatsapp.form": "こんにちは、{name}です。\n{message}",
    "activity.sports.registration_fee.amount": "20ドル",
    "activity.sports.monthly_fee.amount": "月額30ドル",
    "news.hero.kicker": "ニュース",
    "news.hero.title": "ニュース・イベント",
    "news.hero.text": "キンシャサ日本センターのワークショップ、イベント、講座のお知らせをご覧ください。",
    "news.search.placeholder": "ニュースを検索...",
    "news.filter.all": "すべて",
    "news.filter.samedi-nippon": "サタデー・ニッポン",
    "news.filter.arts-martiaux": "武道",
    "news.category.arts-martiaux": "武道",
    "activity.cuisine-japonaise.schedule": "日程はセンターにご確認ください",
    "activity.cuisine-japonaise.price": "要確認",
    "activity.samedi-nippon-echange-de-voeux.schedule": "日付：2026年12月25日",
    "activity.samedi-nippon-saint-valentin.schedule": "日付：2027年2月14日",
    "activity.samedi-nippon-white-days.schedule": "日付：2027年3月14日",
    "activity.samedi-nippon-halloween.schedule": "日付：2027年10月31日",
    "activity.samedi-nippon-shooting-photo.schedule": "日程は確認中です",
    "activity.samedi-nippon-echange-de-voeux.price": "無料",
    "activity.samedi-nippon-saint-valentin.price": "無料",
    "activity.samedi-nippon-white-days.price": "無料",
    "activity.samedi-nippon-halloween.price": "無料",
    "activity.samedi-nippon-shooting-photo.price": "無料",
    "activity.event.upcoming": "近日開催",
    "activity.sports.program.judo-karate": "柔道・空手",
    "activity.sports.schedule.judo-karate": "月・水・金 – 17:00～19:00",
    "activity.sports.program.jiu-jitsu-aikido": "柔術・合気道",
    "activity.sports.schedule.jiu-jitsu-aikido": "火・木 – 17:00～19:00、土 – 8:00～10:00",
    "activity.kizuna.price": "要確認",
    "activity.tanabata.price": "要確認",
    "activity.kodomo-no-hi.price": "要確認",
    "activity.registration_fee": "登録料",
    "activity.monthly_fee": "月額会費",
    "samedi.nippon.regular.free": "毎週土曜日・参加無料",
    "activity.cuisine-japonaise.title": "日本料理ワークショップ",
    "activity.cuisine-japonaise.summary": "日本を代表するさまざまな料理を発見し、作ってみましょう。",
    "activity.cuisine-japonaise.description": "日本料理の食材、調理法、味わいを、いくつかのレシピを通して学ぶ実践的なワークショップです。",
    "activity.samedi-nippon-echange-de-voeux.title": "土曜日の日本：新年のご挨拶",
    "activity.samedi-nippon-echange-de-voeux.summary": "新年を迎え、地域の人々とお祝いの言葉を交わす温かな集まりです。",
    "activity.samedi-nippon-echange-de-voeux.description": "この特別回では、新年の挨拶や思いやりの気持ちを分かち合い、日本文化とセンターの温かな交流を楽しみます。",
    "activity.samedi-nippon-saint-valentin.title": "土曜日の日本：バレンタインデー",
    "activity.samedi-nippon-saint-valentin.summary": "愛情、分かち合い、文化をテーマにした穏やかで創造的なお祝いです。",
    "activity.samedi-nippon-saint-valentin.description": "バレンタインデーに合わせ、人とのつながり、優しさ、芸術的な交流を祝う特別な催しを開催します。",
    "activity.samedi-nippon-white-days.title": "土曜日の日本：ホワイトデー",
    "activity.samedi-nippon-white-days.summary": "贈り物のお返しと思いやりの心を楽しむ、華やかなひとときです。",
    "activity.samedi-nippon-white-days.description": "ホワイトデーを祝い、感謝や寛大さ、仲間とのつながりを分かち合う、創造的で和やかな時間を過ごします。",
    "activity.samedi-nippon-halloween.title": "土曜日の日本：ハロウィン",
    "activity.samedi-nippon-halloween.summary": "色彩と活気にあふれた、文化や創造性を楽しむ祝祭です。",
    "activity.samedi-nippon-halloween.description": "センターのハロウィンでは、仮装や創作活動を通じて、参加者が楽しく交流し、分かち合える場をつくります。",
    "activity.samedi-nippon-shooting-photo.title": "土曜日の日本：写真撮影会",
    "activity.samedi-nippon-shooting-photo.summary": "日本文化に着想を得た、気軽に参加できるポートレート撮影会です。",
    "activity.samedi-nippon-shooting-photo.description": "明るく芸術的な雰囲気の中で、誰もが参加できる写真撮影会を開き、視覚表現の創造性を楽しみます。",
    "activity.kizuna.title": "絆",
    "activity.kizuna.summary": "人とのつながりと分かち合いをテーマにした文化交流会です。",
    "activity.kizuna.description": "絆は、日本文化を知り、人々とのつながりを育み、地域の仲間と時間を分かち合う機会です。",
    "activity.tanabata.title": "七夕",
    "activity.tanabata.summary": "星と願いを祝う日本の祭りを体験しましょう。",
    "activity.tanabata.description": "七夕は、星と願いを祝う日本の伝統行事です。文化的で創造的な活動を楽しめます。",
    "activity.kodomo-no-hi.title": "こどもの日",
    "activity.kodomo-no-hi.summary": "子どもたちのための日本のお祝いです。",
    "activity.kodomo-no-hi.description": "こどもの日は、子どもたちの幸せと健やかな成長を願う日本の祝日です。",
    "activity.cuisine.catalog.title": "料理カタログ",
    "activity.cuisine.catalog.intro": "料理を選んで、その紹介をご覧ください。",
    "activity.cuisine.dish.discover": "料理を見る",
    "activity.cuisine.sushi.title": "寿司",
    "activity.cuisine.sushi.description": "酢飯に野菜やさまざまな具材を合わせた寿司の作り方を学びます。",
    "activity.cuisine.ramen.title": "ラーメン",
    "activity.cuisine.ramen.description": "ラーメンの麺や風味豊かなスープ、人気のトッピングについて学びます。",
    "activity.cuisine.takoyaki.title": "たこ焼き",
    "activity.cuisine.takoyaki.description": "タコを入れて焼き、風味豊かなソースをかける日本の丸い軽食を作ります。",
    "activity.cuisine.okonomiyaki.title": "お好み焼き",
    "activity.cuisine.okonomiyaki.description": "キャベツを生地に混ぜ、お好みの具を加えて日本風のお好み焼きを作ります。",
    "activity.cuisine.tempura.title": "天ぷら",
    "activity.cuisine.tempura.description": "野菜や魚介類を軽い衣で包み、さくっと揚げる方法を学びます。",
    "activities.culture.title": "文化活動",
    "activities.culture.subtitle": "日本に着想を得た文化ワークショップや芸術交流をお楽しみください。",
    "samedi.nippon.specials.title": "土曜日の日本：特別イベント",
    "samedi.nippon.specials.subtitle": "一年の大切な節目を祝う、テーマ別の集まりです。"
  },
  es: {
    "nav.main": "Navegación principal",
    "news.filters.aria": "Búsqueda y filtros de noticias",
    "home.choose_photo": "Elegir una foto",
    "home.slide": "Foto {number}",
    "activity.register.message": "Hola, deseo inscribirme en: {title}.",
    "contact.whatsapp.info": "Hola, quisiera recibir información sobre el centro.",
    "contact.whatsapp.form": "Hola, soy {name}.\n{message}",
    "news.filter.langue-japonaise": "Idioma japonés",
    "news.card.read_more": "Leer más",
    "news.card.empty": "No hay noticias que coincidan con la búsqueda.",
    "news.category.samedi-nippon": "Sábado Nippon",
    "news.category.langue-japonaise": "Idioma japonés",
    "news.hero.kicker": "Actualidad",
    "news.hero.title": "Noticias y eventos",
    "news.hero.text": "Sigue los talleres, eventos y cursos del Centro Japonés de Kinshasa.",
    "news.search.placeholder": "Buscar noticias...",
    "news.filter.all": "Todos",
    "news.filter.samedi-nippon": "Sábado Nippon",
    "news.filter.arts-martiaux": "Artes marciales",
    "news.category.arts-martiaux": "Artes marciales",
    "activity.sports.registration_fee.amount": "20 $",
    "activity.sports.monthly_fee.amount": "30 $ / mes",
    "activity.cuisine-japonaise.schedule": "Fechas por confirmar con el centro",
    "activity.cuisine-japonaise.price": "Por confirmar",
    "activity.samedi-nippon-echange-de-voeux.schedule": "Fecha: 25 de diciembre de 2026",
    "activity.samedi-nippon-saint-valentin.schedule": "Fecha: 14 de febrero de 2027",
    "activity.samedi-nippon-white-days.schedule": "Fecha: 14 de marzo de 2027",
    "activity.samedi-nippon-halloween.schedule": "Fecha: 31 de octubre de 2027",
    "activity.samedi-nippon-shooting-photo.schedule": "Fecha por confirmar",
    "activity.samedi-nippon-echange-de-voeux.price": "Gratis",
    "activity.samedi-nippon-saint-valentin.price": "Gratis",
    "activity.samedi-nippon-white-days.price": "Gratis",
    "activity.samedi-nippon-halloween.price": "Gratis",
    "activity.samedi-nippon-shooting-photo.price": "Gratis",
    "activity.event.upcoming": "Próximamente",
    "activity.sports.program.judo-karate": "Judo y karate",
    "activity.sports.schedule.judo-karate": "Lunes, miércoles y viernes – 17:00 a 19:00",
    "activity.sports.program.jiu-jitsu-aikido": "Jiu-jitsu y aikido",
    "activity.sports.schedule.jiu-jitsu-aikido": "Martes y jueves – 17:00 a 19:00; sábado – 8:00 a 10:00",
    "activity.kizuna.price": "Por confirmar",
    "activity.tanabata.price": "Por confirmar",
    "activity.kodomo-no-hi.price": "Por confirmar",
    "activity.registration_fee": "Cuota de inscripción",
    "activity.monthly_fee": "Cuota mensual",
    "samedi.nippon.regular.free": "Entrada gratuita • cada sábado",
    "activity.cuisine-japonaise.title": "Taller de cocina japonesa",
    "activity.cuisine-japonaise.summary": "Descubre y prepara varios platos emblemáticos de Japón.",
    "activity.cuisine-japonaise.description": "Un taller práctico para descubrir ingredientes, técnicas y sabores de la cocina japonesa mediante varias recetas.",
    "activity.samedi-nippon-echange-de-voeux.title": "Sábado Nippon: Intercambio de buenos deseos",
    "activity.samedi-nippon-echange-de-voeux.summary": "Un encuentro cálido para recibir el año nuevo y compartir buenos deseos con la comunidad.",
    "activity.samedi-nippon-echange-de-voeux.description": "Esta edición especial celebra los saludos de año nuevo, los buenos deseos y la convivencia inspirada en la cultura japonesa y el espíritu del centro.",
    "activity.samedi-nippon-saint-valentin.title": "Sábado Nippon: San Valentín",
    "activity.samedi-nippon-saint-valentin.summary": "Una celebración dulce y creativa en torno al amor, la convivencia y la cultura.",
    "activity.samedi-nippon-saint-valentin.description": "Para San Valentín, el centro organiza una edición especial dedicada a los vínculos humanos, la amabilidad y el intercambio artístico.",
    "activity.samedi-nippon-white-days.title": "Sábado Nippon: White Day",
    "activity.samedi-nippon-white-days.summary": "Un momento festivo inspirado en los regalos de agradecimiento y los gestos atentos.",
    "activity.samedi-nippon-white-days.description": "White Day prolonga la alegría de compartir en un ambiente acogedor y creativo que celebra la gratitud y la generosidad.",
    "activity.samedi-nippon-halloween.title": "Sábado Nippon: Halloween",
    "activity.samedi-nippon-halloween.summary": "Una edición festiva, colorida y llena de energía para disfrutar de la cultura y la creatividad.",
    "activity.samedi-nippon-halloween.description": "Halloween en el centro ofrece un espacio alegre y dinámico para compartir disfraces, creatividad y buenos momentos.",
    "activity.samedi-nippon-shooting-photo.title": "Sábado Nippon: Sesión de fotos",
    "activity.samedi-nippon-shooting-photo.summary": "Una sesión amistosa de retratos inspirada en la cultura visual japonesa.",
    "activity.samedi-nippon-shooting-photo.description": "Esta edición celebra la creatividad visual con una sesión de fotos abierta a todos, en un ambiente luminoso y artístico.",
    "activity.kizuna.title": "Kizuna",
    "activity.kizuna.summary": "Un encuentro cultural sobre los vínculos y la convivencia.",
    "activity.kizuna.description": "Kizuna permite descubrir la cultura japonesa, crear vínculos y compartir un momento con la comunidad.",
    "activity.tanabata.title": "Tanabata",
    "activity.tanabata.summary": "Descubre la fiesta japonesa de las estrellas y los deseos.",
    "activity.tanabata.description": "Tanabata celebra las estrellas y los deseos con una fiesta tradicional japonesa y actividades culturales y creativas.",
    "activity.kodomo-no-hi.title": "Kodomo no Hi",
    "activity.kodomo-no-hi.summary": "Una celebración japonesa dedicada a los niños.",
    "activity.kodomo-no-hi.description": "Kodomo no Hi es una festividad japonesa dedicada a la felicidad y el bienestar de los niños.",
    "activity.cuisine.catalog.title": "Catálogo de platos",
    "activity.cuisine.catalog.intro": "Selecciona un plato para descubrirlo.",
    "activity.cuisine.dish.discover": "Descubrir este plato",
    "activity.cuisine.sushi.title": "Sushi",
    "activity.cuisine.sushi.description": "Aprende a preparar sushi con arroz avinagrado, verduras y distintos ingredientes.",
    "activity.cuisine.ramen.title": "Ramen",
    "activity.cuisine.ramen.description": "Descubre los fideos ramen, su sabroso caldo y los ingredientes de este plato popular.",
    "activity.cuisine.takoyaki.title": "Takoyaki",
    "activity.cuisine.takoyaki.description": "Prepara estas bolitas japonesas doradas, tradicionalmente rellenas de pulpo y servidas con salsa.",
    "activity.cuisine.okonomiyaki.title": "Okonomiyaki",
    "activity.cuisine.okonomiyaki.description": "Prepara esta tortilla japonesa de col y masa ligera con los ingredientes que prefieras.",
    "activity.cuisine.tempura.title": "Tempura",
    "activity.cuisine.tempura.description": "Aprende a rebozar y freír verduras o mariscos con una masa ligera y crujiente.",
    "activities.culture.title": "Actividades culturales",
    "activities.culture.subtitle": "Talleres y encuentros culturales inspirados en Japón y en el intercambio artístico.",
    "samedi.nippon.specials.title": "Ediciones especiales del Sábado Nippon",
    "samedi.nippon.specials.subtitle": "Encuentros temáticos para celebrar los momentos más especiales del año."
  },
  de: {
    "nav.main": "Hauptnavigation",
    "news.filters.aria": "Suche und Nachrichtenfilter",
    "home.choose_photo": "Foto auswählen",
    "home.slide": "Foto {number}",
    "activity.register.message": "Guten Tag, ich möchte mich für {title} anmelden.",
    "contact.whatsapp.info": "Guten Tag, ich hätte gern weitere Informationen über das Zentrum.",
    "contact.whatsapp.form": "Guten Tag, ich bin {name}.\n{message}",
    "news.filter.langue-japonaise": "Japanische Sprache",
    "news.card.read_more": "Weiterlesen",
    "news.card.empty": "Keine Nachrichten entsprechen Ihrer Suche.",
    "news.category.samedi-nippon": "Samstag Nippon",
    "news.category.langue-japonaise": "Japanische Sprache",
    "news.hero.kicker": "Nachrichten",
    "news.hero.title": "Nachrichten und Veranstaltungen",
    "news.hero.text": "Informieren Sie sich über Workshops, Veranstaltungen und Kurse des Centre Japonais de Kinshasa.",
    "news.search.placeholder": "Nachrichten suchen...",
    "news.filter.all": "Alle",
    "news.filter.samedi-nippon": "Samstag Nippon",
    "news.filter.arts-martiaux": "Kampfkünste",
    "news.category.arts-martiaux": "Kampfkünste",
    "activity.sports.registration_fee.amount": "20 $",
    "activity.sports.monthly_fee.amount": "30 $ / Monat",
    "activity.cuisine-japonaise.schedule": "Termine bitte beim Zentrum erfragen",
    "activity.cuisine-japonaise.price": "Noch zu bestätigen",
    "activity.samedi-nippon-echange-de-voeux.schedule": "Datum: 25. Dezember 2026",
    "activity.samedi-nippon-saint-valentin.schedule": "Datum: 14. Februar 2027",
    "activity.samedi-nippon-white-days.schedule": "Datum: 14. März 2027",
    "activity.samedi-nippon-halloween.schedule": "Datum: 31. Oktober 2027",
    "activity.samedi-nippon-shooting-photo.schedule": "Termin wird noch bestätigt",
    "activity.samedi-nippon-echange-de-voeux.price": "Kostenlos",
    "activity.samedi-nippon-saint-valentin.price": "Kostenlos",
    "activity.samedi-nippon-white-days.price": "Kostenlos",
    "activity.samedi-nippon-halloween.price": "Kostenlos",
    "activity.samedi-nippon-shooting-photo.price": "Kostenlos",
    "activity.event.upcoming": "Demnächst",
    "activity.sports.program.judo-karate": "Judo und Karate",
    "activity.sports.schedule.judo-karate": "Montag, Mittwoch und Freitag – 17:00 bis 19:00 Uhr",
    "activity.sports.program.jiu-jitsu-aikido": "Jiu-Jitsu und Aikido",
    "activity.sports.schedule.jiu-jitsu-aikido": "Dienstag und Donnerstag – 17:00 bis 19:00 Uhr; Samstag – 8:00 bis 10:00 Uhr",
    "activity.kizuna.price": "Noch zu bestätigen",
    "activity.tanabata.price": "Noch zu bestätigen",
    "activity.kodomo-no-hi.price": "Noch zu bestätigen",
    "activity.registration_fee": "Anmeldegebühr",
    "activity.monthly_fee": "Monatsbeitrag",
    "samedi.nippon.regular.free": "Eintritt frei • jeden Samstag",
    "activity.cuisine-japonaise.title": "Japanischer Kochworkshop",
    "activity.cuisine-japonaise.summary": "Entdecken und bereiten Sie mehrere typische japanische Gerichte zu.",
    "activity.cuisine-japonaise.description": "Ein praktischer Workshop, in dem Sie Zutaten, Techniken und Aromen der japanischen Küche anhand verschiedener Rezepte kennenlernen.",
    "activity.samedi-nippon-echange-de-voeux.title": "Samstag Nippon: Neujahrsgrüße",
    "activity.samedi-nippon-echange-de-voeux.summary": "Ein herzlicher Treffpunkt, um das neue Jahr zu begrüßen und Wünsche mit der Gemeinschaft zu teilen.",
    "activity.samedi-nippon-echange-de-voeux.description": "Diese Sonderausgabe widmet sich Neujahrsgrüßen, guten Wünschen und dem Miteinander, das von der japanischen Kultur und dem Geist des Zentrums geprägt ist.",
    "activity.samedi-nippon-saint-valentin.title": "Samstag Nippon: Valentinstag",
    "activity.samedi-nippon-saint-valentin.summary": "Ein sanftes, kreatives Fest rund um Liebe, Miteinander und Kultur.",
    "activity.samedi-nippon-saint-valentin.description": "Zum Valentinstag veranstaltet das Zentrum eine Sonderausgabe, die menschliche Verbundenheit, Freundlichkeit und künstlerischen Austausch feiert.",
    "activity.samedi-nippon-white-days.title": "Samstag Nippon: White Day",
    "activity.samedi-nippon-white-days.summary": "Ein festlicher Moment, inspiriert von kleinen Geschenken und aufmerksamen Gesten.",
    "activity.samedi-nippon-white-days.description": "White Day setzt die Freude am Austausch in einer freundlichen, kreativen Atmosphäre fort und würdigt Dankbarkeit und Großzügigkeit.",
    "activity.samedi-nippon-halloween.title": "Samstag Nippon: Halloween",
    "activity.samedi-nippon-halloween.summary": "Eine farbenfrohe, lebendige Ausgabe, die Kultur und Kreativität feiert.",
    "activity.samedi-nippon-halloween.description": "Halloween im Zentrum bietet einen fröhlichen und dynamischen Rahmen für Kostüme, Kreativität und gemeinsames Erleben.",
    "activity.samedi-nippon-shooting-photo.title": "Samstag Nippon: Fotoshooting",
    "activity.samedi-nippon-shooting-photo.summary": "Ein gemeinsames Porträt-Fotoshooting, inspiriert von der japanischen visuellen Kultur.",
    "activity.samedi-nippon-shooting-photo.description": "Diese Ausgabe würdigt visuelle Kreativität mit einem offenen Fotoshooting in einer hellen, künstlerischen Atmosphäre.",
    "activity.kizuna.title": "Kizuna",
    "activity.kizuna.summary": "Ein kulturelles Treffen über Verbundenheit und gemeinsames Erleben.",
    "activity.kizuna.description": "Kizuna bietet die Gelegenheit, japanische Kultur kennenzulernen, Beziehungen aufzubauen und Zeit mit der Gemeinschaft zu teilen.",
    "activity.tanabata.title": "Tanabata",
    "activity.tanabata.summary": "Entdecken Sie das japanische Fest der Sterne und Wünsche.",
    "activity.tanabata.description": "Tanabata feiert Sterne und Wünsche mit einem traditionellen japanischen Fest sowie kulturellen und kreativen Aktivitäten.",
    "activity.kodomo-no-hi.title": "Kodomo no Hi",
    "activity.kodomo-no-hi.summary": "Ein japanisches Fest für Kinder.",
    "activity.kodomo-no-hi.description": "Kodomo no Hi ist ein japanischer Feiertag, der dem Glück und Wohlergehen der Kinder gewidmet ist.",
    "activity.cuisine.catalog.title": "Speisekatalog",
    "activity.cuisine.catalog.intro": "Wählen Sie ein Gericht aus, um mehr darüber zu erfahren.",
    "activity.cuisine.dish.discover": "Gericht entdecken",
    "activity.cuisine.sushi.title": "Sushi",
    "activity.cuisine.sushi.description": "Lernen Sie, Sushi mit gewürztem Reis, Gemüse und verschiedenen Zutaten zuzubereiten.",
    "activity.cuisine.ramen.title": "Ramen",
    "activity.cuisine.ramen.description": "Entdecken Sie Ramennudeln, ihre aromatische Brühe und die Zutaten dieses beliebten Gerichts.",
    "activity.cuisine.takoyaki.title": "Takoyaki",
    "activity.cuisine.takoyaki.description": "Bereiten Sie die goldbraunen japanischen Bällchen zu, traditionell mit Oktopus gefüllt und mit würziger Sauce serviert.",
    "activity.cuisine.okonomiyaki.title": "Okonomiyaki",
    "activity.cuisine.okonomiyaki.description": "Bereiten Sie diesen japanischen Pfannkuchen aus Kohl und leichtem Teig mit Zutaten nach Wahl zu.",
    "activity.cuisine.tempura.title": "Tempura",
    "activity.cuisine.tempura.description": "Lernen Sie, Gemüse oder Meeresfrüchte in einem leichten, knusprigen Teig zu frittieren.",
    "activities.culture.title": "Kulturelle Aktivitäten",
    "activities.culture.subtitle": "Workshops und kulturelle Begegnungen, inspiriert von Japan und künstlerischem Austausch.",
    "samedi.nippon.specials.title": "Sonderausgaben von Samstag Nippon",
    "samedi.nippon.specials.subtitle": "Thematische Treffen zu den besonderen Momenten des Jahres."
  },
  pt: {
    "nav.main": "Navegação principal",
    "news.filters.aria": "Pesquisa e filtros de notícias",
    "home.choose_photo": "Escolher uma foto",
    "home.slide": "Foto {number}",
    "activity.register.message": "Olá, gostaria de me inscrever em: {title}.",
    "contact.whatsapp.info": "Olá, gostaria de receber informações sobre o centro.",
    "contact.whatsapp.form": "Olá, sou {name}.\n{message}",
    "news.filter.langue-japonaise": "Língua japonesa",
    "news.card.read_more": "Leia mais",
    "news.card.empty": "Nenhuma notícia corresponde à sua pesquisa.",
    "news.category.samedi-nippon": "Sábado Nippon",
    "news.category.langue-japonaise": "Língua japonesa",
    "news.hero.kicker": "Notícias",
    "news.hero.title": "Notícias e eventos",
    "news.hero.text": "Acompanhe as oficinas, os eventos e os cursos do Centro Japonês de Kinshasa.",
    "news.search.placeholder": "Buscar notícias...",
    "news.filter.all": "Todas",
    "news.filter.samedi-nippon": "Sábado Nippon",
    "news.filter.arts-martiaux": "Artes marciais",
    "news.category.arts-martiaux": "Artes marciais",
    "activity.sports.registration_fee.amount": "20 $",
    "activity.sports.monthly_fee.amount": "30 $ / mês",
    "activity.cuisine-japonaise.schedule": "Datas a confirmar com o centro",
    "activity.cuisine-japonaise.price": "A confirmar",
    "activity.samedi-nippon-echange-de-voeux.schedule": "Data: 25 de dezembro de 2026",
    "activity.samedi-nippon-saint-valentin.schedule": "Data: 14 de fevereiro de 2027",
    "activity.samedi-nippon-white-days.schedule": "Data: 14 de março de 2027",
    "activity.samedi-nippon-halloween.schedule": "Data: 31 de outubro de 2027",
    "activity.samedi-nippon-shooting-photo.schedule": "Data a confirmar",
    "activity.samedi-nippon-echange-de-voeux.price": "Gratuito",
    "activity.samedi-nippon-saint-valentin.price": "Gratuito",
    "activity.samedi-nippon-white-days.price": "Gratuito",
    "activity.samedi-nippon-halloween.price": "Gratuito",
    "activity.samedi-nippon-shooting-photo.price": "Gratuito",
    "activity.event.upcoming": "Em breve",
    "activity.sports.program.judo-karate": "Judô e caratê",
    "activity.sports.schedule.judo-karate": "Segunda, quarta e sexta – 17h às 19h",
    "activity.sports.program.jiu-jitsu-aikido": "Jiu-jítsu e aikidô",
    "activity.sports.schedule.jiu-jitsu-aikido": "Terça e quinta – 17h às 19h; sábado – 8h às 10h",
    "activity.kizuna.price": "A confirmar",
    "activity.tanabata.price": "A confirmar",
    "activity.kodomo-no-hi.price": "A confirmar",
    "activity.registration_fee": "Taxa de inscrição",
    "activity.monthly_fee": "Mensalidade",
    "samedi.nippon.regular.free": "Entrada gratuita • todos os sábados",
    "activity.cuisine-japonaise.title": "Oficina de culinária japonesa",
    "activity.cuisine-japonaise.summary": "Descubra e prepare vários pratos emblemáticos do Japão.",
    "activity.cuisine-japonaise.description": "Uma oficina prática para conhecer ingredientes, técnicas e sabores da culinária japonesa por meio de várias receitas.",
    "activity.samedi-nippon-echange-de-voeux.title": "Sábado Nippon: Troca de votos de feliz ano novo",
    "activity.samedi-nippon-echange-de-voeux.summary": "Um encontro acolhedor para celebrar o ano novo e compartilhar votos com a comunidade.",
    "activity.samedi-nippon-echange-de-voeux.description": "Esta edição especial destaca as saudações de ano novo, os bons desejos e a convivência inspirada na cultura japonesa e no espírito do centro.",
    "activity.samedi-nippon-saint-valentin.title": "Sábado Nippon: Dia dos Namorados",
    "activity.samedi-nippon-saint-valentin.summary": "Uma celebração delicada e criativa sobre amor, partilha e cultura.",
    "activity.samedi-nippon-saint-valentin.description": "No Dia dos Namorados, o centro organiza uma edição especial para celebrar os laços humanos, a gentileza e o intercâmbio artístico.",
    "activity.samedi-nippon-white-days.title": "Sábado Nippon: White Day",
    "activity.samedi-nippon-white-days.summary": "Um momento festivo inspirado em presentes de agradecimento e gestos atenciosos.",
    "activity.samedi-nippon-white-days.description": "O White Day prolonga a alegria da partilha em um ambiente acolhedor e criativo que valoriza a gratidão e a generosidade.",
    "activity.samedi-nippon-halloween.title": "Sábado Nippon: Halloween",
    "activity.samedi-nippon-halloween.summary": "Uma edição festiva, colorida e cheia de energia para celebrar cultura e criatividade.",
    "activity.samedi-nippon-halloween.description": "O Halloween no centro oferece um ambiente alegre e dinâmico para compartilhar fantasias, criatividade e bons momentos.",
    "activity.samedi-nippon-shooting-photo.title": "Sábado Nippon: Sessão de fotos",
    "activity.samedi-nippon-shooting-photo.summary": "Uma sessão descontraída de retratos inspirada na cultura visual japonesa.",
    "activity.samedi-nippon-shooting-photo.description": "Esta edição celebra a criatividade visual com uma sessão de fotos aberta a todos, em um ambiente luminoso e artístico.",
    "activity.kizuna.title": "Kizuna",
    "activity.kizuna.summary": "Um encontro cultural sobre laços e partilha.",
    "activity.kizuna.description": "Kizuna é uma oportunidade de descobrir a cultura japonesa, criar laços e compartilhar um momento com a comunidade.",
    "activity.tanabata.title": "Tanabata",
    "activity.tanabata.summary": "Descubra a festa japonesa das estrelas e dos desejos.",
    "activity.tanabata.description": "Tanabata celebra estrelas e desejos em uma festa tradicional japonesa com atividades culturais e criativas.",
    "activity.kodomo-no-hi.title": "Kodomo no Hi",
    "activity.kodomo-no-hi.summary": "Uma celebração japonesa dedicada às crianças.",
    "activity.kodomo-no-hi.description": "Kodomo no Hi é uma celebração japonesa dedicada à felicidade e ao bem-estar das crianças.",
    "activity.cuisine.catalog.title": "Catálogo de pratos",
    "activity.cuisine.catalog.intro": "Selecione um prato para conhecer sua apresentação.",
    "activity.cuisine.dish.discover": "Conhecer este prato",
    "activity.cuisine.sushi.title": "Sushi",
    "activity.cuisine.sushi.description": "Aprenda a preparar sushi com arroz temperado, legumes e diferentes acompanhamentos.",
    "activity.cuisine.ramen.title": "Ramen",
    "activity.cuisine.ramen.description": "Conheça o macarrão ramen, seu caldo saboroso e os acompanhamentos deste prato popular.",
    "activity.cuisine.takoyaki.title": "Takoyaki",
    "activity.cuisine.takoyaki.description": "Prepare estas bolinhas japonesas douradas, tradicionalmente recheadas com polvo e servidas com molho.",
    "activity.cuisine.okonomiyaki.title": "Okonomiyaki",
    "activity.cuisine.okonomiyaki.description": "Prepare esta panqueca japonesa de repolho e massa leve com os recheios de sua preferência.",
    "activity.cuisine.tempura.title": "Tempura",
    "activity.cuisine.tempura.description": "Aprenda a empanar e fritar legumes ou frutos do mar em uma massa leve e crocante.",
    "activities.culture.title": "Atividades culturais",
    "activities.culture.subtitle": "Oficinas e encontros culturais inspirados pelo Japão e pelo intercâmbio artístico.",
    "samedi.nippon.specials.title": "Edições especiais do Sábado Nippon",
    "samedi.nippon.specials.subtitle": "Encontros temáticos para celebrar momentos marcantes do ano."
  },
  ar: {
    "nav.main": "التنقل الرئيسي",
    "news.filters.aria": "البحث عن الأخبار وتصفيتها",
    "home.choose_photo": "اختر صورة",
    "home.slide": "الصورة {number}",
    "activity.register.message": "مرحبًا، أود التسجيل في: {title}.",
    "contact.whatsapp.info": "مرحبًا، أود الحصول على معلومات عن المركز.",
    "contact.whatsapp.form": "مرحبًا، أنا {name}.\n{message}",
    "news.filter.langue-japonaise": "اللغة اليابانية",
    "news.card.read_more": "اقرؤوا المزيد",
    "news.card.empty": "لا توجد أخبار تطابق بحثكم.",
    "news.category.samedi-nippon": "السبت الياباني",
    "news.category.langue-japonaise": "اللغة اليابانية",
    "news.hero.kicker": "الأخبار",
    "news.hero.title": "الأخبار والفعاليات",
    "news.hero.text": "تابعوا ورش العمل والفعاليات والدورات في المركز الياباني في كينشاسا.",
    "news.search.placeholder": "ابحثوا في الأخبار...",
    "news.filter.all": "الكل",
    "news.filter.samedi-nippon": "السبت الياباني",
    "news.filter.arts-martiaux": "الفنون القتالية",
    "news.category.arts-martiaux": "الفنون القتالية",
    "activity.sports.registration_fee.amount": "20 دولارًا",
    "activity.sports.monthly_fee.amount": "30 دولارًا / شهر",
    "activity.cuisine-japonaise.schedule": "يُرجى تأكيد المواعيد مع المركز",
    "activity.cuisine-japonaise.price": "يُرجى التأكيد",
    "activity.samedi-nippon-echange-de-voeux.schedule": "التاريخ: 25 ديسمبر 2026",
    "activity.samedi-nippon-saint-valentin.schedule": "التاريخ: 14 فبراير 2027",
    "activity.samedi-nippon-white-days.schedule": "التاريخ: 14 مارس 2027",
    "activity.samedi-nippon-halloween.schedule": "التاريخ: 31 أكتوبر 2027",
    "activity.samedi-nippon-shooting-photo.schedule": "التاريخ قيد التأكيد",
    "activity.samedi-nippon-echange-de-voeux.price": "مجانًا",
    "activity.samedi-nippon-saint-valentin.price": "مجانًا",
    "activity.samedi-nippon-white-days.price": "مجانًا",
    "activity.samedi-nippon-halloween.price": "مجانًا",
    "activity.samedi-nippon-shooting-photo.price": "مجانًا",
    "activity.event.upcoming": "قريبًا",
    "activity.sports.program.judo-karate": "الجودو والكاراتيه",
    "activity.sports.schedule.judo-karate": "الإثنين والأربعاء والجمعة – 17:00 إلى 19:00",
    "activity.sports.program.jiu-jitsu-aikido": "الجيوجيتسو والأيكيدو",
    "activity.sports.schedule.jiu-jitsu-aikido": "الثلاثاء والخميس – 17:00 إلى 19:00؛ السبت – 08:00 إلى 10:00",
    "activity.kizuna.price": "يُرجى التأكيد",
    "activity.tanabata.price": "يُرجى التأكيد",
    "activity.kodomo-no-hi.price": "يُرجى التأكيد",
    "activity.registration_fee": "رسوم التسجيل",
    "activity.monthly_fee": "الاشتراك الشهري",
    "samedi.nippon.regular.free": "الدخول مجاني • كل يوم سبت",
    "activity.cuisine-japonaise.title": "ورشة الطبخ الياباني",
    "activity.cuisine-japonaise.summary": "اكتشفوا وأعدّوا مجموعة من أشهر الأطباق اليابانية.",
    "activity.cuisine-japonaise.description": "ورشة تطبيقية للتعرّف على مكونات المطبخ الياباني وتقنياته ونكهاته من خلال وصفات متنوعة.",
    "activity.samedi-nippon-echange-de-voeux.title": "السبت الياباني: تبادل تهاني العام الجديد",
    "activity.samedi-nippon-echange-de-voeux.summary": "لقاء ودي لاستقبال العام الجديد وتبادل التهاني مع المجتمع.",
    "activity.samedi-nippon-echange-de-voeux.description": "تحتفي هذه النسخة الخاصة بتهاني العام الجديد وتمنيات الخير وروح الألفة المستوحاة من الثقافة اليابانية ورسالة المركز.",
    "activity.samedi-nippon-saint-valentin.title": "السبت الياباني: عيد الحب",
    "activity.samedi-nippon-saint-valentin.summary": "احتفال لطيف وإبداعي بالمحبة والتشارك والثقافة.",
    "activity.samedi-nippon-saint-valentin.description": "ينظم المركز بمناسبة عيد الحب فعالية خاصة للاحتفاء بالروابط الإنسانية واللطف والتبادل الفني.",
    "activity.samedi-nippon-white-days.title": "السبت الياباني: وايت داي",
    "activity.samedi-nippon-white-days.summary": "لحظة احتفالية مستوحاة من الهدايا المتبادلة واللفتات اللطيفة.",
    "activity.samedi-nippon-white-days.description": "يواصل وايت داي أجواء التبادل والبهجة في لقاء ودي وإبداعي يحتفي بالامتنان والكرم.",
    "activity.samedi-nippon-halloween.title": "السبت الياباني: هالووين",
    "activity.samedi-nippon-halloween.summary": "فعالية احتفالية مفعمة بالألوان والطاقة للاحتفاء بالثقافة والإبداع.",
    "activity.samedi-nippon-halloween.description": "يوفر هالووين في المركز أجواء مرحة وحيوية تجمع المشاركين حول الأزياء والإبداع والتواصل.",
    "activity.samedi-nippon-shooting-photo.title": "السبت الياباني: جلسة تصوير",
    "activity.samedi-nippon-shooting-photo.summary": "جلسة ودية لالتقاط الصور مستوحاة من الثقافة البصرية اليابانية.",
    "activity.samedi-nippon-shooting-photo.description": "تحتفي هذه الفعالية بالإبداع البصري عبر جلسة تصوير مفتوحة للجميع في أجواء مشرقة وفنية.",
    "activity.kizuna.title": "كيزونا",
    "activity.kizuna.summary": "لقاء ثقافي حول الروابط والتشارك.",
    "activity.kizuna.description": "كيزونا فرصة لاكتشاف الثقافة اليابانية وبناء الروابط ومشاركة لحظة مع المجتمع.",
    "activity.tanabata.title": "تاناباتا",
    "activity.tanabata.summary": "اكتشفوا المهرجان الياباني للنجوم والأمنيات.",
    "activity.tanabata.description": "يحتفي تاناباتا بالنجوم والأمنيات من خلال مهرجان ياباني تقليدي وأنشطة ثقافية وإبداعية.",
    "activity.kodomo-no-hi.title": "يوم الأطفال الياباني",
    "activity.kodomo-no-hi.summary": "احتفال ياباني مخصص للأطفال.",
    "activity.kodomo-no-hi.description": "كودومو نو هي عيد ياباني مخصص لسعادة الأطفال ورفاههم.",
    "activity.cuisine.catalog.title": "قائمة الأطباق",
    "activity.cuisine.catalog.intro": "اختاروا طبقًا للتعرّف على تفاصيله.",
    "activity.cuisine.dish.discover": "اكتشف هذا الطبق",
    "activity.cuisine.sushi.title": "سوشي",
    "activity.cuisine.sushi.description": "تعلّموا إعداد السوشي بالأرز المتبّل والخضروات ومكونات متنوعة.",
    "activity.cuisine.ramen.title": "رامن",
    "activity.cuisine.ramen.description": "اكتشفوا نودلز الرامن ومرقها الغني ومكونات هذا الطبق الشهير.",
    "activity.cuisine.takoyaki.title": "تاكوياكي",
    "activity.cuisine.takoyaki.description": "أعدّوا كرات العجين اليابانية الذهبية المحشوة تقليديًا بالأخطبوط والمقدمة مع صلصة لذيذة.",
    "activity.cuisine.okonomiyaki.title": "أوكونومياكي",
    "activity.cuisine.okonomiyaki.description": "أعدّوا هذه الفطيرة اليابانية من الملفوف والعجين الخفيف مع الحشوات التي تفضلونها.",
    "activity.cuisine.tempura.title": "تمبورا",
    "activity.cuisine.tempura.description": "تعلّموا تغليف الخضروات أو المأكولات البحرية بعجين خفيف ومقرمش ثم قليها.",
    "activities.culture.title": "الأنشطة الثقافية",
    "activities.culture.subtitle": "ورش ولقاءات ثقافية مستوحاة من اليابان والتبادل الفني.",
    "samedi.nippon.specials.title": "إصدارات خاصة من السبت الياباني",
    "samedi.nippon.specials.subtitle": "لقاءات موضوعية للاحتفاء بأهم مناسبات العام."
  },
  zh: {
    "nav.main": "主导航",
    "news.filters.aria": "新闻搜索和分类筛选",
    "home.choose_photo": "选择照片",
    "home.slide": "照片 {number}",
    "activity.register.message": "您好，我想报名参加：{title}。",
    "contact.whatsapp.info": "您好，我想了解中心的相关信息。",
    "contact.whatsapp.form": "您好，我是{name}。\n{message}",
    "news.filter.langue-japonaise": "日语",
    "news.card.read_more": "阅读更多",
    "news.card.empty": "没有符合搜索条件的新闻。",
    "news.category.samedi-nippon": "日本星期六",
    "news.category.langue-japonaise": "日语",
    "news.hero.kicker": "新闻",
    "news.hero.title": "新闻与活动",
    "news.hero.text": "了解金沙萨日本中心的工作坊、活动和课程信息。",
    "news.search.placeholder": "搜索新闻...",
    "news.filter.all": "全部",
    "news.filter.samedi-nippon": "日本星期六",
    "news.filter.arts-martiaux": "武道",
    "news.category.arts-martiaux": "武道",
    "activity.sports.registration_fee.amount": "20美元",
    "activity.sports.monthly_fee.amount": "每月30美元",
    "activity.cuisine-japonaise.schedule": "日期请向中心确认",
    "activity.cuisine-japonaise.price": "待确认",
    "activity.samedi-nippon-echange-de-voeux.schedule": "日期：2026年12月25日",
    "activity.samedi-nippon-saint-valentin.schedule": "日期：2027年2月14日",
    "activity.samedi-nippon-white-days.schedule": "日期：2027年3月14日",
    "activity.samedi-nippon-halloween.schedule": "日期：2027年10月31日",
    "activity.samedi-nippon-shooting-photo.schedule": "日期待确认",
    "activity.samedi-nippon-echange-de-voeux.price": "免费",
    "activity.samedi-nippon-saint-valentin.price": "免费",
    "activity.samedi-nippon-white-days.price": "免费",
    "activity.samedi-nippon-halloween.price": "免费",
    "activity.samedi-nippon-shooting-photo.price": "免费",
    "activity.event.upcoming": "即将举行",
    "activity.sports.program.judo-karate": "柔道与空手道",
    "activity.sports.schedule.judo-karate": "星期一、三、五 – 17:00 至 19:00",
    "activity.sports.program.jiu-jitsu-aikido": "柔术与合气道",
    "activity.sports.schedule.jiu-jitsu-aikido": "星期二、四 – 17:00 至 19:00；星期六 – 8:00 至 10:00",
    "activity.kizuna.price": "待确认",
    "activity.tanabata.price": "待确认",
    "activity.kodomo-no-hi.price": "待确认",
    "activity.registration_fee": "报名费",
    "activity.monthly_fee": "月费",
    "samedi.nippon.regular.free": "每周六免费入场",
    "activity.cuisine-japonaise.title": "日本料理工作坊",
    "activity.cuisine-japonaise.summary": "探索并制作多种日本代表性料理。",
    "activity.cuisine-japonaise.description": "通过多道食谱，亲身了解日本料理的食材、技巧与风味。",
    "activity.samedi-nippon-echange-de-voeux.title": "日本星期六：新年祝福交流",
    "activity.samedi-nippon-echange-de-voeux.summary": "温馨的聚会，迎接新年并与社区分享祝福。",
    "activity.samedi-nippon-echange-de-voeux.description": "本次特别活动围绕新年问候、美好祝愿与友好交流展开，体现日本文化和中心的亲切精神。",
    "activity.samedi-nippon-saint-valentin.title": "日本星期六：情人节",
    "activity.samedi-nippon-saint-valentin.summary": "以爱、分享和文化为主题的温馨创意庆祝活动。",
    "activity.samedi-nippon-saint-valentin.description": "情人节期间，中心举办特别活动，庆祝人与人之间的情谊、友善和艺术交流。",
    "activity.samedi-nippon-white-days.title": "日本星期六：白色情人节",
    "activity.samedi-nippon-white-days.summary": "以回赠礼物和贴心举动为灵感的节日时光。",
    "activity.samedi-nippon-white-days.description": "白色情人节延续分享的喜悦，在友好而有创意的氛围中赞颂感恩与慷慨。",
    "activity.samedi-nippon-halloween.title": "日本星期六：万圣节",
    "activity.samedi-nippon-halloween.summary": "充满色彩与活力的节庆活动，感受文化与创意。",
    "activity.samedi-nippon-halloween.description": "中心的万圣节活动营造欢乐活跃的氛围，让参与者通过服装、创意和交流共度时光。",
    "activity.samedi-nippon-shooting-photo.title": "日本星期六：摄影活动",
    "activity.samedi-nippon-shooting-photo.summary": "一场受日本视觉文化启发的轻松人像摄影活动。",
    "activity.samedi-nippon-shooting-photo.description": "本次活动以明亮而富有艺术感的摄影体验，邀请大家共同感受视觉创作的乐趣。",
    "activity.kizuna.title": "羁绊",
    "activity.kizuna.summary": "围绕情谊与分享展开的文化交流活动。",
    "activity.kizuna.description": "Kizuna让大家有机会了解日本文化、建立联系，并与社区分享美好时光。",
    "activity.tanabata.title": "七夕",
    "activity.tanabata.summary": "了解日本庆祝星星与愿望的节日。",
    "activity.tanabata.description": "七夕是庆祝星星与愿望的日本传统节日，并设有文化和创意活动。",
    "activity.kodomo-no-hi.title": "儿童节",
    "activity.kodomo-no-hi.summary": "一个专为儿童举办的日本节日。",
    "activity.kodomo-no-hi.description": "儿童节是日本的节日，旨在祝愿孩子们幸福健康地成长。",
    "activity.cuisine.catalog.title": "料理目录",
    "activity.cuisine.catalog.intro": "选择一道料理，了解它的介绍。",
    "activity.cuisine.dish.discover": "了解这道料理",
    "activity.cuisine.sushi.title": "寿司",
    "activity.cuisine.sushi.description": "学习用调味米饭、蔬菜和多种配料制作寿司。",
    "activity.cuisine.ramen.title": "拉面",
    "activity.cuisine.ramen.description": "了解拉面、鲜美的汤底以及这道 popular 料理中的配料。",
    "activity.cuisine.takoyaki.title": "章鱼烧",
    "activity.cuisine.takoyaki.description": "制作金黄的日本小丸子，传统做法加入章鱼并搭配风味酱汁。",
    "activity.cuisine.okonomiyaki.title": "大阪烧",
    "activity.cuisine.okonomiyaki.description": "用卷心菜和轻盈面糊制作日式煎饼，并加入自己喜欢的配料。",
    "activity.cuisine.tempura.title": "天妇罗",
    "activity.cuisine.tempura.description": "学习用轻薄酥脆的面衣包裹蔬菜或海鲜并进行油炸。",
    "activities.culture.title": "文化活动",
    "activities.culture.subtitle": "以日本文化和艺术交流为灵感的工作坊与文化聚会。",
    "samedi.nippon.specials.title": "日本星期六特别活动",
    "samedi.nippon.specials.subtitle": "围绕一年中的重要时刻举办主题聚会。"
  },
  ko: {
    "nav.main": "주요 탐색",
    "news.filters.aria": "소식 검색 및 카테고리 필터",
    "home.choose_photo": "사진 선택",
    "home.slide": "사진 {number}",
    "activity.register.message": "안녕하세요, {title}에 등록하고 싶습니다.",
    "contact.whatsapp.info": "안녕하세요, 센터에 대한 정보를 알고 싶습니다.",
    "contact.whatsapp.form": "안녕하세요, 저는 {name}입니다.\n{message}",
    "news.filter.langue-japonaise": "일본어",
    "news.card.read_more": "더 읽기",
    "news.card.empty": "검색 결과와 일치하는 소식이 없습니다.",
    "news.category.samedi-nippon": "사메디 닛폰",
    "news.category.langue-japonaise": "일본어",
    "news.hero.kicker": "소식",
    "news.hero.title": "소식 및 행사",
    "news.hero.text": "킨샤사 일본 센터의 워크숍, 행사와 강좌 소식을 확인하세요.",
    "news.search.placeholder": "소식 검색...",
    "news.filter.all": "전체",
    "news.filter.samedi-nippon": "사메디 닛폰",
    "news.filter.arts-martiaux": "무술",
    "news.category.arts-martiaux": "무술",
    "activity.sports.registration_fee.amount": "20달러",
    "activity.sports.monthly_fee.amount": "월 30달러",
    "activity.cuisine-japonaise.schedule": "일정은 센터에 문의해 주세요",
    "activity.cuisine-japonaise.price": "확인 예정",
    "activity.samedi-nippon-echange-de-voeux.schedule": "날짜: 2026년 12월 25일",
    "activity.samedi-nippon-saint-valentin.schedule": "날짜: 2027년 2월 14일",
    "activity.samedi-nippon-white-days.schedule": "날짜: 2027년 3월 14일",
    "activity.samedi-nippon-halloween.schedule": "날짜: 2027년 10월 31일",
    "activity.samedi-nippon-shooting-photo.schedule": "일정 확인 중",
    "activity.samedi-nippon-echange-de-voeux.price": "무료",
    "activity.samedi-nippon-saint-valentin.price": "무료",
    "activity.samedi-nippon-white-days.price": "무료",
    "activity.samedi-nippon-halloween.price": "무료",
    "activity.samedi-nippon-shooting-photo.price": "무료",
    "activity.event.upcoming": "예정",
    "activity.sports.program.judo-karate": "유도와 가라테",
    "activity.sports.schedule.judo-karate": "월·수·금 – 17:00~19:00",
    "activity.sports.program.jiu-jitsu-aikido": "주짓수와 합기도",
    "activity.sports.schedule.jiu-jitsu-aikido": "화·목 – 17:00~19:00; 토 – 8:00~10:00",
    "activity.kizuna.price": "확인 예정",
    "activity.tanabata.price": "확인 예정",
    "activity.kodomo-no-hi.price": "확인 예정",
    "activity.registration_fee": "등록비",
    "activity.monthly_fee": "월 회비",
    "samedi.nippon.regular.free": "매주 토요일 무료 입장",
    "activity.cuisine-japonaise.title": "일본 요리 워크숍",
    "activity.cuisine-japonaise.summary": "일본을 대표하는 여러 요리를 발견하고 직접 만들어 봅니다.",
    "activity.cuisine-japonaise.description": "다양한 조리법을 통해 일본 요리의 재료와 기술, 풍미를 배우는 실습 워크숍입니다.",
    "activity.samedi-nippon-echange-de-voeux.title": "사메디 닛폰: 새해 인사 나누기",
    "activity.samedi-nippon-echange-de-voeux.summary": "새해를 맞이하며 지역사회와 따뜻한 인사를 나누는 모임입니다.",
    "activity.samedi-nippon-echange-de-voeux.description": "이번 특별 행사는 새해 인사와 좋은 소망을 나누며 일본 문화와 센터의 따뜻한 공동체 정신을 기념합니다.",
    "activity.samedi-nippon-saint-valentin.title": "사메디 닛폰: 발렌타인데이",
    "activity.samedi-nippon-saint-valentin.summary": "사랑과 나눔, 문화를 주제로 한 따뜻하고 창의적인 축하 행사입니다.",
    "activity.samedi-nippon-saint-valentin.description": "발렌타인데이를 맞아 센터에서 사람 사이의 유대와 친절, 예술 교류를 기념하는 특별 행사를 엽니다.",
    "activity.samedi-nippon-white-days.title": "사메디 닛폰: 화이트데이",
    "activity.samedi-nippon-white-days.summary": "답례 선물과 따뜻한 배려에서 영감을 얻은 축제의 시간입니다.",
    "activity.samedi-nippon-white-days.description": "화이트데이에는 감사와 너그러움을 기념하며 친근하고 창의적인 분위기 속에서 나눔의 기쁨을 이어갑니다.",
    "activity.samedi-nippon-halloween.title": "사메디 닛폰: 할로윈",
    "activity.samedi-nippon-halloween.summary": "문화와 창의성을 즐기는 다채롭고 활기찬 축제입니다.",
    "activity.samedi-nippon-halloween.description": "센터의 할로윈 행사는 의상과 창의성, 교류를 함께 즐기는 유쾌하고 활기찬 자리입니다.",
    "activity.samedi-nippon-shooting-photo.title": "사메디 닛폰: 사진 촬영회",
    "activity.samedi-nippon-shooting-photo.summary": "일본의 시각 문화에서 영감을 얻은 편안한 인물 사진 촬영회입니다.",
    "activity.samedi-nippon-shooting-photo.description": "밝고 예술적인 분위기의 사진 촬영회로 시각적 창의성을 기념하며 누구나 참여할 수 있습니다.",
    "activity.kizuna.title": "키즈나",
    "activity.kizuna.summary": "유대와 나눔을 주제로 한 문화 모임입니다.",
    "activity.kizuna.description": "키즈나는 일본 문화를 알아보고 유대를 쌓으며 지역사회와 시간을 나누는 기회입니다.",
    "activity.tanabata.title": "타나바타",
    "activity.tanabata.summary": "별과 소원을 기념하는 일본 축제를 만나보세요.",
    "activity.tanabata.description": "타나바타는 별과 소원을 기념하는 일본의 전통 축제로 문화 및 창작 활동이 함께합니다.",
    "activity.kodomo-no-hi.title": "어린이날",
    "activity.kodomo-no-hi.summary": "어린이를 위한 일본의 기념일입니다.",
    "activity.kodomo-no-hi.description": "코도모노히는 어린이의 행복과 건강한 성장을 기원하는 일본의 기념일입니다.",
    "activity.cuisine.catalog.title": "요리 목록",
    "activity.cuisine.catalog.intro": "요리를 선택해 소개를 확인해 보세요.",
    "activity.cuisine.dish.discover": "요리 알아보기",
    "activity.cuisine.sushi.title": "스시",
    "activity.cuisine.sushi.description": "양념한 밥과 채소, 다양한 재료로 스시를 만드는 방법을 배웁니다.",
    "activity.cuisine.ramen.title": "라멘",
    "activity.cuisine.ramen.description": "라멘 면과 풍미 있는 국물, 인기 있는 고명을 알아봅니다.",
    "activity.cuisine.takoyaki.title": "타코야키",
    "activity.cuisine.takoyaki.description": "전통적으로 문어를 넣고 맛있는 소스를 곁들이는 일본식 구운 경단을 만들어 봅니다.",
    "activity.cuisine.okonomiyaki.title": "오코노미야키",
    "activity.cuisine.okonomiyaki.description": "양배추와 가벼운 반죽으로 일본식 부침 요리를 만들고 원하는 재료를 더해 봅니다.",
    "activity.cuisine.tempura.title": "덴푸라",
    "activity.cuisine.tempura.description": "채소나 해산물에 가벼운 튀김옷을 입혀 바삭하게 튀기는 방법을 배웁니다.",
    "activities.culture.title": "문화 활동",
    "activities.culture.subtitle": "일본 문화와 예술 교류에서 영감을 얻은 워크숍과 만남입니다.",
    "samedi.nippon.specials.title": "사메디 닛폰 특별 행사",
    "samedi.nippon.specials.subtitle": "한 해의 특별한 순간을 기념하는 주제별 모임입니다."
  },
  ru: {
    "nav.main": "Основная навигация",
    "news.filters.aria": "Поиск новостей и фильтры категорий",
    "home.choose_photo": "Выбрать фотографию",
    "home.slide": "Фото {number}",
    "activity.register.message": "Здравствуйте, я хотел(а) бы записаться на занятие «{title}».",
    "contact.whatsapp.info": "Здравствуйте, я хотел(а) бы получить информацию о центре.",
    "contact.whatsapp.form": "Здравствуйте, меня зовут {name}.\n{message}",
    "news.filter.langue-japonaise": "Японский язык",
    "news.card.read_more": "Подробнее",
    "news.card.empty": "По вашему запросу ничего не найдено.",
    "news.category.samedi-nippon": "Суббота Ниппон",
    "news.category.langue-japonaise": "Японский язык",
    "news.hero.kicker": "Новости",
    "news.hero.title": "Новости и события",
    "news.hero.text": "Следите за мастер-классами, событиями и курсами Центра японской культуры в Киншасе.",
    "news.search.placeholder": "Поиск новостей...",
    "news.filter.all": "Все",
    "news.filter.samedi-nippon": "Суббота Ниппон",
    "news.filter.arts-martiaux": "Боевые искусства",
    "news.category.arts-martiaux": "Боевые искусства",
    "activity.sports.registration_fee.amount": "20 $",
    "activity.sports.monthly_fee.amount": "30 $ / месяц",
    "activity.cuisine-japonaise.schedule": "Даты уточняйте в центре",
    "activity.cuisine-japonaise.price": "Уточняется",
    "activity.samedi-nippon-echange-de-voeux.schedule": "Дата: 25 декабря 2026 года",
    "activity.samedi-nippon-saint-valentin.schedule": "Дата: 14 февраля 2027 года",
    "activity.samedi-nippon-white-days.schedule": "Дата: 14 марта 2027 года",
    "activity.samedi-nippon-halloween.schedule": "Дата: 31 октября 2027 года",
    "activity.samedi-nippon-shooting-photo.schedule": "Дата уточняется",
    "activity.samedi-nippon-echange-de-voeux.price": "Бесплатно",
    "activity.samedi-nippon-saint-valentin.price": "Бесплатно",
    "activity.samedi-nippon-white-days.price": "Бесплатно",
    "activity.samedi-nippon-halloween.price": "Бесплатно",
    "activity.samedi-nippon-shooting-photo.price": "Бесплатно",
    "activity.event.upcoming": "Скоро",
    "activity.sports.program.judo-karate": "Дзюдо и карате",
    "activity.sports.schedule.judo-karate": "Понедельник, среда и пятница – 17:00–19:00",
    "activity.sports.program.jiu-jitsu-aikido": "Джиу-джитсу и айкидо",
    "activity.sports.schedule.jiu-jitsu-aikido": "Вторник и четверг – 17:00–19:00; суббота – 8:00–10:00",
    "activity.kizuna.price": "Уточняется",
    "activity.tanabata.price": "Уточняется",
    "activity.kodomo-no-hi.price": "Уточняется",
    "activity.registration_fee": "Регистрационный взнос",
    "activity.monthly_fee": "Ежемесячная оплата",
    "samedi.nippon.regular.free": "Вход свободный • каждую субботу",
    "activity.cuisine-japonaise.title": "Мастер-класс по японской кухне",
    "activity.cuisine-japonaise.summary": "Познакомьтесь и приготовьте несколько знаменитых японских блюд.",
    "activity.cuisine-japonaise.description": "Практический мастер-класс, посвящённый японским ингредиентам, техникам и вкусам на примере разных рецептов.",
    "activity.samedi-nippon-echange-de-voeux.title": "Суббота Ниппон: обмен новогодними поздравлениями",
    "activity.samedi-nippon-echange-de-voeux.summary": "Тёплая встреча, чтобы встретить Новый год и поделиться пожеланиями с сообществом.",
    "activity.samedi-nippon-echange-de-voeux.description": "Этот специальный выпуск посвящён новогодним поздравлениям, добрым пожеланиям и дружескому общению, вдохновлённому японской культурой и духом центра.",
    "activity.samedi-nippon-saint-valentin.title": "Суббота Ниппон: День святого Валентина",
    "activity.samedi-nippon-saint-valentin.summary": "Тёплый творческий праздник любви, общения и культуры.",
    "activity.samedi-nippon-saint-valentin.description": "Ко Дню святого Валентина центр проводит специальную встречу, посвящённую человеческим связям, доброте и творческому обмену.",
    "activity.samedi-nippon-white-days.title": "Суббота Ниппон: Уайт-дэй",
    "activity.samedi-nippon-white-days.summary": "Праздничная встреча, вдохновлённая ответными подарками и внимательными жестами.",
    "activity.samedi-nippon-white-days.description": "Уайт-дэй продолжает радость общения в дружеской творческой атмосфере, посвящённой благодарности и щедрости.",
    "activity.samedi-nippon-halloween.title": "Суббота Ниппон: Хэллоуин",
    "activity.samedi-nippon-halloween.summary": "Яркий и энергичный праздник культуры и творчества.",
    "activity.samedi-nippon-halloween.description": "Хэллоуин в центре — это весёлая и динамичная встреча с костюмами, творчеством и общением.",
    "activity.samedi-nippon-shooting-photo.title": "Суббота Ниппон: фотосъёмка",
    "activity.samedi-nippon-shooting-photo.summary": "Дружеская фотосессия, вдохновлённая японской визуальной культурой.",
    "activity.samedi-nippon-shooting-photo.description": "Этот выпуск посвящён визуальному творчеству: всех ждёт открытая фотосессия в светлой художественной атмосфере.",
    "activity.kizuna.title": "Кидзуна",
    "activity.kizuna.summary": "Культурная встреча, посвящённая связям и общению.",
    "activity.kizuna.description": "Кидзуна — возможность познакомиться с японской культурой, наладить связи и провести время вместе с сообществом.",
    "activity.tanabata.title": "Танабата",
    "activity.tanabata.summary": "Откройте для себя японский праздник звёзд и желаний.",
    "activity.tanabata.description": "Танабата — традиционный японский праздник звёзд и желаний с культурными и творческими мероприятиями.",
    "activity.kodomo-no-hi.title": "Кодомо-но-хи",
    "activity.kodomo-no-hi.summary": "Японский праздник, посвящённый детям.",
    "activity.kodomo-no-hi.description": "Кодомо-но-хи — японский праздник, посвящённый счастью и благополучию детей.",
    "activity.cuisine.catalog.title": "Каталог блюд",
    "activity.cuisine.catalog.intro": "Выберите блюдо, чтобы узнать о нём подробнее.",
    "activity.cuisine.dish.discover": "Узнать о блюде",
    "activity.cuisine.sushi.title": "Суши",
    "activity.cuisine.sushi.description": "Научитесь готовить суши с рисом, приправленным уксусом, овощами и разнообразными начинками.",
    "activity.cuisine.ramen.title": "Рамен",
    "activity.cuisine.ramen.description": "Познакомьтесь с лапшой рамен, насыщенным бульоном и добавками этого популярного блюда.",
    "activity.cuisine.takoyaki.title": "Такояки",
    "activity.cuisine.takoyaki.description": "Приготовьте золотистые японские шарики, обычно с осьминогом внутри и ароматным соусом.",
    "activity.cuisine.okonomiyaki.title": "Окономияки",
    "activity.cuisine.okonomiyaki.description": "Приготовьте японскую лепёшку из капусты и лёгкого теста с начинкой по вкусу.",
    "activity.cuisine.tempura.title": "Тэмпура",
    "activity.cuisine.tempura.description": "Научитесь обжаривать овощи или морепродукты в лёгком хрустящем кляре.",
    "activities.culture.title": "Культурные мероприятия",
    "activities.culture.subtitle": "Мастер-классы и культурные встречи, вдохновлённые Японией и творческим обменом.",
    "samedi.nippon.specials.title": "Специальные выпуски Субботы Ниппон",
    "samedi.nippon.specials.subtitle": "Тематические встречи, посвящённые важным событиям года."
  }
};

function esc(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function whatsappLink(message) {
  const base = contactInfo.whatsapp || WHATSAPP_DIRECT_LINK || `https://wa.me/${WHATSAPP_NUMBER}`;
  return `${base}${base.includes("?") ? "&" : "?"}text=${encodeURIComponent(message)}`;
}

function getCurrentLanguage() {
  const saved = localStorage.getItem("cjk-language");
  if (saved && TRANSLATIONS[saved]) return saved;
  return document.body.dataset.lang || "fr";
}

function translateText(key, lang = getCurrentLanguage()) {
  const dictionary = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  const fallback = TRANSLATIONS.en || TRANSLATIONS.fr;
  const activityDictionary = ACTIVITY_TRANSLATIONS[lang] || ACTIVITY_TRANSLATIONS.fr || {};
  const translated = dictionary[key] || ADDITIONAL_TRANSLATIONS[lang]?.[key] || activityDictionary[key];
  if (translated) return translated;

  const linkedActivity = activities.find((activity) =>
    activity.newsTitleKey === key || activity.newsSummaryKey === key || activity.newsBodyKey === key
  );
  if (linkedActivity) {
    const field = linkedActivity.newsTitleKey === key
      ? "title"
      : linkedActivity.newsSummaryKey === key ? "summary" : "description";
    return translateText(`activity.${linkedActivity.id}.${field}`, lang);
  }

  const regularSaturdayKeys = {
    "samedi.nippon.regular.title": `activity.samedi-nippon.title`,
    "samedi.nippon.regular.kicker": `activity.samedi-nippon.title`,
    "samedi.nippon.regular.description": `activity.samedi-nippon.description`,
    "samedi.nippon.regular.schedule": `activity.samedi-nippon.schedule`,
    "samedi.nippon.regular.price": `activity.samedi-nippon.price`
  };
  if (regularSaturdayKeys[key]) return translateText(regularSaturdayKeys[key], lang);
  return fallback[key] || ACTIVITY_TRANSLATIONS.en?.[key] || ACTIVITY_TRANSLATIONS.fr?.[key] || TRANSLATIONS.fr[key] || key;
}

function updateLanguageTrigger(lang) {
  const selected = LANGUAGES.find((item) => item.code === lang) || LANGUAGES[0];
  const triggerCode = document.getElementById("langTriggerCode");
  const triggerCodeInline = document.querySelector(".lang-switcher__trigger .lang-switcher__code");
  if (triggerCode) triggerCode.textContent = selected.code.toUpperCase();
  if (triggerCodeInline) triggerCodeInline.textContent = selected.code.toUpperCase();
  const triggerButton = document.querySelector(".lang-switcher__trigger");
  if (triggerButton) triggerButton.setAttribute("aria-label", `${selected.native} (${selected.code.toUpperCase()})`);
}

function applyTranslations() {
  const currentLang = getCurrentLanguage();
  const dictionary = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  document.body.dataset.lang = currentLang;
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n], [data-translate]").forEach((el) => {
    const key = el.dataset.i18n || el.dataset.translate;
    const text = translateText(key, currentLang);
    if (text) el.textContent = text;
    el.setAttribute("data-lang", currentLang);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const text = translateText(key, currentLang);
    if (text) el.setAttribute("placeholder", text);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    const text = translateText(key, currentLang).replace("{number}", el.dataset.slideNumber || "");
    if (text) el.setAttribute("aria-label", text);
  });

  document.querySelectorAll("[data-activity-whatsapp]").forEach((el) => {
    const activityId = el.dataset.activityWhatsapp;
    const title = translateText(`activity.${activityId}.title`, currentLang);
    const message = translateText("activity.register.message", currentLang).replace("{title}", title);
    el.setAttribute("href", whatsappLink(message));
  });

  document.querySelectorAll("[data-whatsapp-info]").forEach((el) => {
    el.setAttribute("href", whatsappLink(translateText("contact.whatsapp.info", currentLang)));
  });

  document.querySelectorAll("[data-translate-value]").forEach((el) => {
    const key = el.dataset.translateValue;
    const text = translateText(key, currentLang);
    if (text) el.textContent = text;
  });

  const searchInput = document.getElementById("langSearch");
  if (searchInput) {
    searchInput.placeholder = translateText("lang.search.placeholder", currentLang);
  }

  const page = document.body.dataset.page;
  const pageTitleKeys = {
    actualites: "news.hero.title",
    activites: "activities.title",
    formations: "formations.title",
    "a-propos": "about.title",
    histoire: "history.title",
    contact: "contact.title"
  };
  if (page === "activite") {
    const activityId = new URLSearchParams(location.search).get("id");
    const activity = activities.find((item) => item.id === activityId);
    if (activity) document.title = `${translateText(`activity.${activity.id}.title`, currentLang)} – Centre Japonais de Kinshasa`;
  } else if (pageTitleKeys[page]) {
    document.title = `${translateText(pageTitleKeys[page], currentLang)} – Centre Japonais de Kinshasa`;
  }

  updateLanguageTrigger(currentLang);

  const buttons = document.querySelectorAll(".lang-option");
  buttons.forEach((btn) => {
    const isSelected = btn.dataset.langCode === currentLang;
    btn.classList.toggle("is-selected", isSelected);
    btn.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderLanguageOptions(search = "") {
  const list = document.getElementById("langSwitchList");
  if (!list) return;

  const query = search.trim().toLowerCase();
  const languages = LANGUAGES.filter((language) => {
    if (!query) return true;
    return [language.name, language.native, language.code].some((value) => value.toLowerCase().includes(query));
  });

  list.innerHTML = languages.map((language) => {
    const current = getCurrentLanguage();
    const isSelected = language.code === current;
    return `
      <button type="button" class="lang-option${isSelected ? " is-selected" : ""}" data-lang-code="${language.code}" aria-pressed="${String(isSelected)}">
        <span class="lang-option__left">
          <span class="lang-option__flag" aria-hidden="true">${language.flag}</span>
          <span class="lang-option__meta">${language.code.toUpperCase()}</span>
        </span>
        <span class="lang-option__label">${language.name}</span>
        <span class="lang-option__check">${isSelected ? "✓" : ""}</span>
      </button>
    `;
  }).join("");
}

function setupLanguageSwitcher() {
  const trigger = document.querySelector(".lang-switcher__trigger");
  const switcher = document.querySelector(".lang-switcher");
  const panel = document.getElementById("langSwitchPanel");
  const searchInput = document.getElementById("langSearch");
  if (!trigger || !switcher || !panel || !searchInput) return;

  renderLanguageOptions();
  applyTranslations();

  trigger.addEventListener("click", () => {
    const isOpen = switcher.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) searchInput.focus();
  });

  searchInput.addEventListener("input", (event) => {
    renderLanguageOptions(event.target.value);
  });

  panel.addEventListener("click", (event) => {
    const option = event.target.closest(".lang-option");
    if (!option) return;
    const nextLang = option.dataset.langCode;
    localStorage.setItem("cjk-language", nextLang);
    switcher.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    applyTranslations();
    renderLanguageOptions();
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { language: nextLang } }));
  });

  document.addEventListener("click", (event) => {
    if (!switcher.contains(event.target)) {
      switcher.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

function updateActiveNav() {
  const links = document.querySelectorAll(".topbar__nav a");
  if (!links.length) return;

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const destination = new URL(href, window.location.href);
    const destinationPath = destination.pathname.split("/").pop();
    const isActive = destinationPath === currentPath
      || currentPath === "activite.html" && destinationPath === "activites.html";

    link.classList.toggle("is-active", isActive);
  });
}

const page = document.body.dataset.page;

function renderActivityCards(items) {
  const t = (key) => translateText(key);
  return items.map((activity) => {
    const categoryKey = `activity.category.${activity.category.toLowerCase() === "formation" ? "formation" : activity.category.toLowerCase() === "culture" ? "culture" : "sport"}`;
    const titleKey = `activity.${activity.id}.title`;
    const summaryKey = `activity.${activity.id}.summary`;
    return `
      <a class="card" href="activite.html?id=${encodeURIComponent(activity.id)}">
        <!-- TODO: Remplacer ou insérer les photos des cartes dans la propriété image de data.js. -->
        ${activity.image ? `<img class="card__image" src="${esc(activity.image)}" alt="${esc(activity.title)}" loading="lazy">` : ""}
        <div class="card__content">
          <span class="tag" data-translate="${categoryKey}">${esc(t(categoryKey))}</span>
          <h2 data-translate="${titleKey}">${esc(t(titleKey))}</h2>
          <p data-translate="${summaryKey}">${esc(t(summaryKey))}</p>
          ${activity.dateKey ? `<span class="card__schedule" data-translate="${activity.dateKey}">${esc(t(activity.dateKey))}</span>` : ""}
          <span class="card__link" data-translate="activity.open">${esc(t("activity.open"))}</span>
        </div>
      </a>`;
  }).join("");
}

function renderCuisineCatalog(dishes) {
  if (!dishes || !dishes.length) return "";
  const t = (key) => translateText(key);
  return `
    <section class="cuisine-catalog" aria-labelledby="cuisineCatalogTitle">
      <h2 id="cuisineCatalogTitle" data-translate="activity.cuisine.catalog.title">${esc(t("activity.cuisine.catalog.title"))}</h2>
      <p data-translate="activity.cuisine.catalog.intro">${esc(t("activity.cuisine.catalog.intro"))}</p>
      <div class="cuisine-catalog__grid">
        ${dishes.map((dish) => `
          <article class="cuisine-dish">
            <!-- TODO: Remplacer les URL de photos par nos propres images de plats dans data.js. -->
            <img class="cuisine-dish__image" src="${esc(dish.image)}" alt="${esc(t(dish.titleKey))}" loading="lazy">
            <div class="cuisine-dish__content">
              <h3 data-translate="${dish.titleKey}">${esc(t(dish.titleKey))}</h3>
              <button type="button" class="cuisine-dish__toggle" data-cuisine-toggle aria-expanded="false" aria-controls="cuisine-dish-${esc(dish.id)}" data-translate="activity.cuisine.dish.discover">${esc(t("activity.cuisine.dish.discover"))}</button>
              <p id="cuisine-dish-${esc(dish.id)}" data-translate="${dish.descriptionKey}" hidden>${esc(t(dish.descriptionKey))}</p>
            </div>
          </article>`).join("")}
      </div>
    </section>`;
}

/* ============ PAGE D'ACCUEIL ============ */
if (page === "home") {
  const discover = document.getElementById("discover");
  document.getElementById("trainingGrid").innerHTML = renderActivityCards(
    activities.filter((activity) => activity.category === "Formation")
  );
  document.getElementById("activityGrid").innerHTML = renderActivityCards(
    activities.filter((activity) => activity.category !== "Formation")
  );

  // Affiche la partie "Histoire + activités" puis descend jusqu'à elle
  function reveal(targetId) {
    discover.hidden = false;
    const target = document.getElementById(targetId || "histoire");
    // petit délai pour que le navigateur affiche la section avant de défiler
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  document.getElementById("discoverBtn").addEventListener("click", () => reveal("histoire"));

  document.querySelectorAll("[data-reveal]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      reveal(link.dataset.reveal);
      updateActiveNav();
    });
  });

  // Si on arrive depuis une autre page avec #histoire ou #activites
  if (location.hash === "#histoire" || location.hash === "#activites") {
    reveal(location.hash.slice(1));
  }

  updateActiveNav();
}

if (page === "formations" || page === "activites") {
  const grid = document.getElementById("programGrid");
  const visibleActivities = page === "formations"
    ? activities.filter((activity) => activity.category === "Formation")
    : activities.filter((activity) => activity.category !== "Formation");
  grid.innerHTML = renderActivityCards(visibleActivities);
}

/* ============ PAGE D'UNE ACTIVITÉ ============ */
if (page === "activite") {
  const id = new URLSearchParams(location.search).get("id");
  const a = activities.find((item) => item.id === id);
  const root = document.getElementById("activityPage");
  const t = (key) => translateText(key);

  if (!a) {
    root.innerHTML = `
      <h1 data-translate="activity.not_found">${esc(t("activity.not_found"))}</h1>
      <p><span data-translate="activity.not_found_text">${esc(t("activity.not_found_text"))}</span> <a class="inline" href="activites.html" data-translate="activity.see_all">${esc(t("activity.see_all"))}</a></p>`;
  } else {
    const categoryKey = `activity.category.${a.category.toLowerCase() === "formation" ? "formation" : a.category.toLowerCase() === "culture" ? "culture" : "sport"}`;
    const titleKey = `activity.${a.id}.title`;
    const summaryKey = `activity.${a.id}.summary`;
    const descriptionKey = `activity.${a.id}.description`;
    const scheduleKey = a.scheduleKey || `activity.${a.id}.schedule`;
    const priceKey = `activity.${a.id}.price`;
    const title = t(titleKey) || a.title;
    const summary = t(summaryKey) || a.summary;
    const description = t(descriptionKey) || a.description || "";
    const schedule = t(scheduleKey) || a.schedule || "";
    const price = t(priceKey) || a.price || "";
    const programHtml = (a.programs || []).map((program) => `
      <div class="activity-program">
        <h3 data-translate="${program.titleKey}">${esc(t(program.titleKey))}</h3>
        <p data-translate="${program.scheduleKey}">${esc(t(program.scheduleKey))}</p>
      </div>`).join("");
    const priceHtml = a.id === "samedi-nippon"
      ? `<h2 data-translate="activity.price">${esc(t("activity.price"))}</h2><p data-translate="${priceKey}">${esc(price)}</p>`
      : "";
    const message = t("activity.register.message").replace("{title}", title);
    // TODO: Remplacer la photo de couverture de la formation cuisine dans data.js.
    const activityHero = a.image ? `<div class="activity-hero"><img src="${esc(a.image)}" alt="${esc(title)}" loading="eager"></div>` : "";
    const cuisineCatalog = renderCuisineCatalog(a.cuisineDishes);
    document.title = `${title} – Centre Japonais de Kinshasa`;
    root.innerHTML = `
      ${activityHero}
      <span class="tag" data-translate="${categoryKey}">${esc(t(categoryKey))}</span>
      <h1 data-translate="${titleKey}">${esc(title)}</h1>
      <p class="lead" data-translate="${summaryKey}">${esc(summary)}</p>
      ${cuisineCatalog}
      <div class="info-grid">
        <div class="panel"><h2 data-translate="activity.presentation">${esc(t("activity.presentation"))}</h2><p data-translate="${descriptionKey}">${esc(description)}</p></div>
        <div class="panel">
          <h2 data-translate="activity.schedule">${esc(t("activity.schedule"))}</h2>${programHtml || `<p data-translate="${scheduleKey}">${esc(schedule)}</p>`}
          ${priceHtml}
          <a class="btn btn--gold" href="${whatsappLink(message)}" target="_blank" rel="noopener" data-activity-whatsapp="${a.id}" data-translate="activity.register">${esc(t("activity.register"))}</a>
        </div>
      </div>
      <p><a class="inline" href="${a.category === "Formation" ? "formations.html" : "activites.html"}" data-translate="${a.category === "Formation" ? "nav.formations" : "activity.see_others"}">${esc(t(a.category === "Formation" ? "nav.formations" : "activity.see_others"))}</a></p>`;

    root.addEventListener("click", (event) => {
      const toggle = event.target.closest("[data-cuisine-toggle]");
      if (!toggle || !root.contains(toggle)) return;
      const description = document.getElementById(toggle.getAttribute("aria-controls"));
      if (!description) return;
      const expanded = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(expanded));
      description.hidden = !expanded;
    });
  }
}

/* ============ CONTACT (accueil + page contact) ============ */
function contactHtml() {
  const t = (key) => translateText(key);
  return `
    <h2 data-translate="contact.address">${esc(t("contact.address"))}</h2>
    <p data-translate-value="contact.address_value">${esc(t("contact.address_value"))}</p>
    <h2 data-translate="contact.phone">${esc(t("contact.phone"))}</h2>
    <p>
      <span data-translate-value="contact.phone_value">${esc(t("contact.phone_value"))}</span><br>
      <a href="${esc(contactInfo.emailLink || `mailto:${contactInfo.email}`)}">${esc(contactInfo.email)}</a>
    </p>
    <h2 data-translate="contact.hours">${esc(t("contact.hours"))}</h2>
    <p>
      <span data-translate-value="contact.hours_value1">${esc(t("contact.hours_value1"))}</span><br>
      <span data-translate-value="contact.hours_value2">${esc(t("contact.hours_value2"))}</span>
    </p>
    <div class="socials" aria-label="${esc(t("contact.socials"))}">
      <a class="socials__link socials__link--wa" href="${esc(contactInfo.whatsapp)}" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="images/icon%20whatsapp%20G.jfif" alt="WhatsApp"></a>
      <a class="socials__link socials__link--img" href="${esc(contactInfo.facebook)}" target="_blank" rel="noopener" aria-label="Facebook"><img src="images/icon%20Facebook.jfif" alt="Facebook"></a>
      <a class="socials__link socials__link--img" href="${esc(contactInfo.emailLink || `mailto:${contactInfo.email}`)}" target="_blank" rel="noopener" aria-label="Gmail"><img src="images/icon%20gmail.jfif" alt="Gmail"></a>
      <a class="socials__link socials__link--img" href="${esc(contactInfo.instagram)}" target="_blank" rel="noopener" aria-label="Instagram"><img src="images/icon%20instragram.jfif" alt="Instagram"></a>
      <a class="socials__link socials__link--img" href="${esc(contactInfo.tiktok)}" target="_blank" rel="noopener" aria-label="TikTok"><img src="images/icon%20tiktok.jfif" alt="TikTok"></a>
    </div>
  `;
}

function mapHtml() {
  const t = (key) => translateText(key);
  return contactInfo.mapEmbed
    ? `<iframe src="${esc(contactInfo.mapEmbed)}" title="${esc(t("contact.map.title"))}" loading="lazy"></iframe>`
    : `[${esc(t("contact.map.title"))}]`;
}

if (page === "contact") {
  const t = (key) => translateText(key);
  const wa = whatsappLink(t("contact.whatsapp.info"));
  document.getElementById("contactPanel").innerHTML =
    contactHtml() + `<a class="btn btn--gold" href="${wa}" target="_blank" rel="noopener" data-whatsapp-info data-translate="contact.write.whatsapp">${esc(t("contact.write.whatsapp"))}</a>`;
  document.getElementById("contactMap").innerHTML = mapHtml();
}

if (page === "home") {
  document.getElementById("contactDetails").innerHTML = contactHtml();
  document.getElementById("contactMap").innerHTML = mapHtml();

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nom = document.getElementById("cNom").value.trim();
    const msg = document.getElementById("cMsg").value.trim();
    const error = document.getElementById("contactError");
    const t = (key) => translateText(key);
    if (!nom || !msg) {
      error.textContent = t("contact.form.error");
      return;
    }
    error.textContent = "";
    const message = t("contact.whatsapp.form")
      .replace("{name}", nom)
      .replace("{message}", msg);
    window.open(whatsappLink(message), "_blank", "noopener");
  });

  /* ============ SLIDER AUTOMATIQUE ============ */
  const slider = document.getElementById("slider");
  const dots = document.getElementById("sliderDots");
  slider.innerHTML = slides.map((src, i) =>
    `<div class="slide${i === 0 ? " is-active" : ""}" style="background-image:url('${src}')"></div>`).join("");
  // Les contrôles peuvent être masqués en CSS sur mobile sans interrompre le défilement automatique.
  dots.innerHTML = slides.map((_, i) =>
    `<button type="button" data-i18n-aria-label="home.slide" data-slide-number="${i + 1}" data-i="${i}" class="${i === 0 ? "is-active" : ""}" aria-label="${translateText("home.slide").replace("{number}", i + 1)}"></button>`).join("");
  applyTranslations();

  const slideEls = slider.querySelectorAll(".slide");
  const dotEls = dots.querySelectorAll("button");
  let current = 0;
  let timer = null;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slideEls.forEach((el, i) => el.classList.toggle("is-active", i === current));
    dotEls.forEach((el, i) => el.classList.toggle("is-active", i === current));
  }

  function startSlider() {
    stopSlider();
    // pas de défilement automatique si la personne a demandé moins d'animations
    if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer = setInterval(() => showSlide(current + 1), SLIDE_DELAY);
  }
  function stopSlider() { clearInterval(timer); timer = null; }

  dots.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    showSlide(Number(btn.dataset.i));
    startSlider();
  });
  document.addEventListener("visibilitychange", () => (document.hidden ? stopSlider() : startSlider()));
  startSlider();
}

setupLanguageSwitcher();
updateActiveNav();
window.addEventListener("hashchange", updateActiveNav);
