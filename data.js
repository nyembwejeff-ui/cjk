/* =====================================================
   CJK – Données du site (modifiez ce fichier)
   Chaque activité a sa propre page : activite.html?id=...
   Pour ajouter une activité, copiez un bloc { ... } et changez l'id.
   ===================================================== */

// Numéro WhatsApp du centre : format international, sans "+" ni espaces
const WHATSAPP_NUMBER = "243850881102";
const WHATSAPP_DIRECT_LINK = "https://wa.me/message/H6JOUFJSLE2NL1";

const activities = [
  {
    id: "japonais",
    title: "Cours de japonais",
    category: "Formation",
    image: "apprentisssage des japonais.jpg",
    newsCategory: "langue-japonaise",
    summary: "Du niveau débutant au niveau avancé.",
    description: "Apprenez les bases du japonais, la conversation, la lecture et l’écriture avec un accompagnement progressif adapté à chaque niveau.",
    schedule: "Lundi, mercredi et vendredi – 17h30 à 19h00",
    price: "40 $ / mois"
  },
  {
    id: "cuisine-japonaise",
    title: "Atelier de cuisine japonaise",
    category: "Formation",
    // TODO: Remplacer par notre propre photo de cuisine japonaise ici.
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    summary: "Découvrez et préparez plusieurs plats emblématiques du Japon.",
    description: "Un atelier pratique pour découvrir les ingrédients, les techniques et les saveurs de la cuisine japonaise à travers plusieurs recettes.",
    schedule: "Dates à confirmer auprès du centre",
    price: "À confirmer",
    cuisineDishes: [
      {
        id: "sushi",
        titleKey: "activity.cuisine.sushi.title",
        descriptionKey: "activity.cuisine.sushi.description",
        // TODO: Remplacer par notre propre photo de sushis ici.
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "ramen",
        titleKey: "activity.cuisine.ramen.title",
        descriptionKey: "activity.cuisine.ramen.description",
        // TODO: Remplacer par notre propre photo de ramen ici.
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "takoyaki",
        titleKey: "activity.cuisine.takoyaki.title",
        descriptionKey: "activity.cuisine.takoyaki.description",
        // TODO: Remplacer par notre propre photo de takoyaki ici.
        image: "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "okonomiyaki",
        titleKey: "activity.cuisine.okonomiyaki.title",
        descriptionKey: "activity.cuisine.okonomiyaki.description",
        // TODO: Remplacer par notre propre photo d’okonomiyaki ici.
        image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "tempura",
        titleKey: "activity.cuisine.tempura.title",
        descriptionKey: "activity.cuisine.tempura.description",
        // TODO: Remplacer par notre propre photo de tempura ici.
        image: "https://images.unsplash.com/photo-1625938145744-e380515399bf?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  {
    id: "samedi-nippon",
    title: "Samedi Nippon",
    category: "Culture",
    image: "nippon.jpg",
    newsCategory: "samedi-nippon",
    newsDateKey: "samedi.nippon.regular.schedule",
    summary: "Un rendez-vous culturel autour du Japon et du partage.",
    description: "Le Samedi Nippon invite la communauté à découvrir la culture japonaise, à participer à des activités culturelles et à échanger.",
    schedule: "Chaque samedi – 14h00 à 16h00",
    price: "Gratuit"
  },
  {
    id: "samedi-nippon-echange-de-voeux",
    title: "Samedi Nippon : Échange de vœux",
    category: "Culture",
    image: "voeux.JPG",
    newsCategory: "samedi-nippon",
    newsDate: "2026-12-25",
    newsTitleKey: "samedi.nippon.special.echange_vœux.title",
    newsSummaryKey: "samedi.nippon.special.echange_vœux.summary",
    newsBodyKey: "samedi.nippon.special.echange_vœux.body",
    summary: "Une rencontre chaleureuse pour accueillir la nouvelle année et partager des vœux entre la communauté.",
    description: "Cette édition spéciale met l’accent sur les échanges de vœux, le partage de bonnes intentions et la convivialité qui caractérise la culture japonaise et les valeurs de proximité du centre.",
    schedule: "Date : 25 décembre 2026",
    price: "Gratuit"
  },
  {
    id: "samedi-nippon-saint-valentin",
    title: "Samedi Nippon : Saint-Valentin",
    category: "Culture",
    image: "valentin.jpg",
    newsCategory: "samedi-nippon",
    newsDate: "2027-02-14",
    newsTitleKey: "samedi.nippon.special.saint_valentin.title",
    newsSummaryKey: "samedi.nippon.special.saint_valentin.summary",
    newsBodyKey: "samedi.nippon.special.saint_valentin.body",
    summary: "Une célébration douce et créative autour de l’amour, du partage et de la culture.",
    description: "À l’occasion de la Saint-Valentin, le centre organise une édition spéciale pensée pour célébrer les liens humains, la gentillesse et les échanges artistiques.",
    schedule: "Date : 14 février 2027",
    price: "Gratuit"
  },
  {
    id: "samedi-nippon-white-days",
    title: "Samedi Nippon : White Days",
    category: "Culture",
    image: "days.jpeg",
    newsCategory: "samedi-nippon",
    newsDate: "2027-03-14",
    newsTitleKey: "samedi.nippon.special.white_days.title",
    newsSummaryKey: "samedi.nippon.special.white_days.summary",
    newsBodyKey: "samedi.nippon.special.white_days.body",
    summary: "Un moment festif inspiré du retour des cadeaux et des gestes attentionnés.",
    description: "Les White Days sont l’occasion de prolonger la magie des échanges, dans une ambiance conviviale et créative qui valorise le partage et la gratitude.",
    schedule: "Date : 14 mars 2027",
    price: "Gratuit"
  },
  {
    id: "samedi-nippon-halloween",
    title: "Samedi Nippon : Halloween",
    category: "Culture",
    image: "halloween.jpg",
    newsCategory: "samedi-nippon",
    newsDate: "2027-10-31",
    newsTitleKey: "samedi.nippon.special.halloween.title",
    newsSummaryKey: "samedi.nippon.special.halloween.summary",
    newsBodyKey: "samedi.nippon.special.halloween.body",
    summary: "Une édition festive, colorée et pleine d’énergie pour découvrir des codes culturels inspirants.",
    description: "L’Halloween au centre propose un cadre joyeux et dynamique autour des costumes, de la créativité et du partage entre participants.",
    schedule: "Date : 31 octobre 2027",
    price: "Gratuit"
  },
  {
    id: "samedi-nippon-shooting-photo",
    title: "Samedi Nippon : Shooting photo",
    category: "Culture",
    image: "shooting.jpg",
    newsCategory: "samedi-nippon",
    newsDateKey: "news.date.tbc",
    newsTitleKey: "samedi.nippon.special.photo.title",
    newsSummaryKey: "samedi.nippon.special.photo.summary",
    newsBodyKey: "samedi.nippon.special.photo.body",
    summary: "Une séance conviviale de portraits et de prises de vue inspirées par la culture japonaise.",
    description: "Cette édition met à l’honneur la créativité visuelle avec un shooting photo dans une ambiance lumineuse et artistique, ouvert à tous.",
    schedule: "Date à confirmer",
    price: "Gratuit"
  },
  {
    id: "sports",
    title: "Arts martiaux",
    category: "Sport",
    // TODO: Remplacer par votre photo dédiée du dossier images si vous en ajoutez une.
    image: "judo.jfif",
    newsCategory: "arts-martiaux",
    summary: "Judo, karaté, jiu-jitsu et aïkido pour tous les niveaux.",
    description: "Le Centre Japonais de Kinshasa propose des cours de judo, de karaté, de jiu-jitsu et d’aïkido, encadrés autour de la discipline, du respect et de la maîtrise technique.",
    programs: [
      { titleKey: "activity.sports.program.judo-karate", scheduleKey: "activity.sports.schedule.judo-karate" },
      { titleKey: "activity.sports.program.jiu-jitsu-aikido", scheduleKey: "activity.sports.schedule.jiu-jitsu-aikido" }
    ],
    // TODO: registrationFee: "20 $",
    // monthlyFee: "30 $ / mois"
  },
  {
    id: "kizuna",
    title: "Kizuna",
    category: "Culture",
    image: "kizuna.jpg",
    summary: "Une rencontre culturelle autour des liens et du partage.",
    description: "Kizuna est une occasion de découvrir la culture japonaise, de tisser des liens et de partager un moment avec la communauté.",
    scheduleKey: "activity.event.upcoming",
    dateKey: "activity.event.upcoming",
    price: "À confirmer"
  },
  {
    id: "tanabata",
    title: "Tanabata",
    category: "Culture",
    image: "tanabata.jpg",
    summary: "Découvrez la fête japonaise des étoiles et des souhaits.",
    description: "Tanabata célèbre les étoiles et les souhaits dans une fête japonaise traditionnelle, avec des activités culturelles et créatives.",
    scheduleKey: "activity.event.upcoming",
    dateKey: "activity.event.upcoming",
    price: "À confirmer"
  },
  {
    id: "kodomo-no-hi",
    title: "Kodomo no Hi",
    category: "Culture",
    image: "kodomo.jpeg",
    summary: "Une célébration japonaise dédiée aux enfants.",
    description: "Kodomo no Hi est une fête japonaise consacrée aux enfants, à leur bonheur et à leur épanouissement.",
    scheduleKey: "activity.event.upcoming",
    dateKey: "activity.event.upcoming",
    price: "À confirmer"
  }
];

/* ---------- Slider de la page d'accueil ----------
   Les photos du slider sont regroupées dans le dossier images/. */
const slides = [
  "images/IMG-20251115-WA0012.jpg",
  "images/IMG-20251116-WA0019.jpg",
  "images/IMG-20251116-WA0020.jpg",
  "images/IMG-20251116-WA0021.jpg",
  "images/IMG-20251116-WA0022.jpg",
  "images/IMG-20251116-WA0023.jpg",
  "images/IMG-20251116-WA0024.jpg",
  "images/IMG-20251116-WA0025.jpg",
  "images/IMG-20251116-WA0026.jpg",
  "images/IMG-20251116-WA0027.jpg",
  "images/IMG-20251116-WA0028.jpg",
  "images/IMG-20251116-WA0029.jpg",
  "images/IMG-20251116-WA0030.jpg",
  "images/IMG-20251116-WA0031.jpg",
  "images/IMG-20251116-WA0032.jpg",
  "images/IMG-20251116-WA0033.jpg",
  "images/IMG-20251116-WA0035.jpg",
  "images/IMG-20251116-WA0036.jpg",
  "images/IMG-20251116-WA0037.jpg",
  "images/IMG-20251116-WA0038.jpg",
  "images/IMG-20251116-WA0039.jpg",
  "images/IMG-20251116-WA0040.jpg",
  "images/IMG-20251116-WA0041.jpg",
  "images/IMG-20251116-WA0042.jpg",
  "images/IMG-20251116-WA0043.jpg",
  "images/IMG-20251116-WA0044.jpg",
  "images/IMG-20251116-WA0045.jpg",
  "images/IMG-20251116-WA0046.jpg",
  "images/IMG-20251116-WA0047.jpg",
  "images/IMG-20260118-WA0023.jpg",
  "images/IMG_20251115_101631_363@-607258452.jpg",
  "images/IMG_20260404_152846_150@1497205165.jpg",
  "images/IMG_20260524_191213_765@-1713865417.jpg",
  "images/IMG_20260524_191305_190@711937453.jpg",
  "images/IMG_20260524_191430_676@-1136382765.jpg",
  "images/IMG_20260524_192512_512@1500828600.jpg",
  "images/IMG_20260524_192722_154@-1428271405.jpg"
];
const SLIDE_DELAY = 5000; // temps entre deux photos, en millisecondes

/* ---------- Coordonnées du centre (utilisées sur toutes les pages) ---------- */
const contactInfo = {
  address: "Centre Japonais de Kinshasa, C/Lingwala, Réf. : Entrée du camp KOKOLO (entre l’UPC & le Commissariat général de la Police), 1 Av. du Palais du Peuple, Kinshasa, République démocratique du Congo",
  phone: "+243 850 881 102",
  email: "centrejaponaisdekinshasa@gmail.com",
  emailLink: "mailto:centrejaponaisdekinshasa@gmail.com",
  hours: ["Lundi – Vendredi : 08h00 – 17h00", "Samedi : 09h00 – 13h00"],
  whatsapp: "https://wa.me/message/H6JOUFJSLE2NL1",
  facebook: "https://www.facebook.com/CJKRDC",
  instagram: "https://www.instagram.com/centre_japonais_de_kinshasa?mdxt=d3hpdzc3cTlwN3My",
  tiktok: "https://vm.tiktok.com/ZS9UhQvwLNn89-NdOgU/",
  // Google Maps > Partager > Intégrer une carte : collez ici UNIQUEMENT l'adresse src="..."
  mapEmbed: "https://www.google.com/maps?q=Centre%20Japonais%20de%20Kinshasa%2C%20C%2FLingwala%2C%20R%C3%A9f.%20%3A%20Entr%C3%A9e%20du%20camp%20KOKOLO%20%28entre%20l%E2%80%99UPC%20%26%20le%20Commissariat%20g%C3%A9n%C3%A9ral%20de%20la%20Police%29%2C%201%20Av.%20du%20Palais%20du%20Peuple%2C%20Kinshasa%2C%20R%C3%A9publique%20d%C3%A9mocratique%20du%20Congo&output=embed"
};
