const NEWS_ARTICLES = [
  {
    id: "judo-centre",
    category: "arts-martiaux",
    sourceId: "sports",
    date: "2026-09-18",
    image: "judo.jpg",
    titleKey: "news.judo.title",
    summaryKey: "news.judo.summary",
    bodyKey: "news.judo.body"
  },
  {
    id: "langue-japonaise",
    category: "langue-japonaise",
    sourceId: "japonais",
    date: "2026-10-14",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    titleKey: "news.langue_japonaise.title",
    summaryKey: "news.langue_japonaise.summary",
    bodyKey: "news.langue_japonaise.body"
  },
];

const NEWS_TRANSLATIONS = {
  fr: {
    "news.hero.kicker": "Actualités",
    "news.hero.title": "Actualités & Événements",
    "news.hero.text": "Suivez les ateliers, les événements et les formations du Centre Japonais de Kinshasa.",
    "news.search.placeholder": "Rechercher une actualité...",
    "news.filter.all": "Tous",
    "news.filter.samedi-nippon": "Samedi Nippon",
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
    "news.filter.langue-japonaise": "Langue Japonaise",
    "news.filter.langue-anglaise": "Langue Anglaise",
    "news.filter.rh": "Ressources Humaines",
    "news.card.read_more": "Lire la suite",
    "news.card.empty": "Aucune actualité ne correspond à votre recherche.",
    "news.category.samedi-nippon": "Samedi Nippon",
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
    "news.modal.close": "Fermer"
  },
  en: {
    "news.hero.kicker": "News",
    "news.hero.title": "News & Events",
    "news.hero.text": "Follow the workshops, events and training sessions at the Centre Japonais de Kinshasa.",
    "news.search.placeholder": "Search an article...",
    "news.filter.all": "All",
    "news.filter.samedi-nippon": "Saturday Nippon",
    "samedi.nippon.regular.title": "Regular Saturday Nippon",
    "samedi.nippon.regular.kicker": "Saturday Nippon",
    "samedi.nippon.regular.free": "Free entry • every Saturday",
    "samedi.nippon.regular.description": "The weekly community gathering at the centre: a simple, friendly and free moment to discover Japanese culture, exchange ideas and share experiences.",
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
    "news.filter.informatique": "IT",
    "news.filter.langue-japonaise": "Japanese Language",
    "news.filter.langue-anglaise": "English Language",
    "news.filter.rh": "Human Resources",
    "news.card.read_more": "Read more",
    "news.card.empty": "No article matches your search.",
    "news.category.samedi-nippon": "Saturday Nippon",
    "news.category.judo": "Judo",
    "news.category.informatique": "IT",
    "news.category.langue-japonaise": "Japanese Language",
    "news.category.langue-anglaise": "English Language",
    "news.category.rh": "Human Resources",
    "news.samedi_nippon.title": "Grand Saturday Nippon gathering",
    "news.samedi_nippon.summary": "A warm cultural gathering around Japanese traditions and community exchange.",
    "news.samedi_nippon.body": "Saturday Nippon brings people together around Japanese culture through discovery, practice, sharing and celebration. It is a must-attend event for learning and building community ties.",
    "news.judo.title": "Judo training and values at the centre",
    "news.judo.summary": "Structured judo sessions to strengthen discipline, respect and self-confidence.",
    "news.judo.body": "The centre's judo activities help participants improve discipline, focus and mutual respect. Sessions are adapted to different levels and encourage personal growth.",
    "news.informatique.title": "IT training courses",
    "news.informatique.summary": "Hands-on workshops to develop digital skills, office tools and web usage.",
    "news.informatique.body": "The IT courses aim to strengthen digital skills with practical content adapted to everyday professional, educational and personal needs.",
    "news.langue_japonaise.title": "New Japanese language learning sessions",
    "news.langue_japonaise.summary": "Open courses to progress in Japanese through dynamic and practical learning methods.",
    "news.langue_japonaise.body": "The new Japanese-language courses improve listening, reading and writing skills in a dynamic environment. Groups are organized to meet each learner’s level and goals.",
    "news.langue_anglaise.title": "New English learning sessions",
    "news.langue_anglaise.summary": "Interactive workshops to strengthen communication and professional skills in English.",
    "news.langue_anglaise.body": "The English sessions cover oral, written and professional communication with progressive support. They are especially useful for students, professionals and beginners.",
    "news.rh.title": "Human resources workshops and opportunities",
    "news.rh.summary": "Spaces for exchange on recruitment, talent development and professional skills.",
    "news.rh.body": "Human resources activities help develop skills in talent management, recruitment and collaboration. They are a great opportunity to strengthen employability and career readiness.",
    "news.modal.close": "Close"
  },
  ja: {
    "news.hero.kicker": "ニュース",
    "news.hero.title": "ニュース & イベント",
    "news.hero.text": "キンシャサ日本センターのワークショップ、イベント、研修をお楽しみください。",
    "news.search.placeholder": "記事を検索...",
    "news.filter.all": "すべて",
    "news.filter.samedi-nippon": "サタデー ニッポン",
    "news.filter.judo": "柔道",
    "news.filter.informatique": "情報技術",
    "news.filter.langue-japonaise": "日本語",
    "news.filter.langue-anglaise": "英語",
    "news.filter.rh": "人事・人材",
    "news.card.read_more": "続きを読む",
    "news.card.empty": "検索に一致する記事はありません。",
    "news.category.samedi-nippon": "サタデー ニッポン",
    "news.category.judo": "柔道",
    "news.category.informatique": "情報技術",
    "news.category.langue-japonaise": "日本語",
    "news.category.langue-anglaise": "英語",
    "news.category.rh": "人事・人材",
    "news.samedi_nippon.title": "サタデー ニッポンの大集会",
    "news.samedi_nippon.summary": "日本の伝統と地域交流を楽しむ親しみやすい文化イベントです。",
    "news.samedi_nippon.body": "サタデー ニッポンでは、日本文化に触れながら交流を深めるためのイベントが開催されます。学び、共有し、文化を祝う重要な機会です。",
    "news.judo.title": "センターでの柔道の訓練と価値",
    "news.judo.summary": "規律、尊敬、自信を育てるための柔道の実習です。",
    "news.judo.body": "センターの柔道活動は、集中力、規律、相互尊重を高めることを目的としています。さまざまなレベルに対応し、自己成長を支えます。",
    "news.informatique.title": "情報技術研修",
    "news.informatique.summary": "デジタルスキル、オフィス活用、Web利用を学ぶ実践的な講座です。",
    "news.informatique.body": "情報技術の講座では、仕事や学習の現場で役立つデジタル能力を実践的に向上させます。",
    "news.langue_japonaise.title": "新しい日本語学習セッション",
    "news.langue_japonaise.summary": "日本語の理解と表現を伸ばすためのダイナミックな講座です。",
    "news.langue_japonaise.body": "新しい日本語講座では、聞く力、読む力、書く力を着実に伸ばすことができます。学習者の目標に合わせて進めます。",
    "news.langue_anglaise.title": "新しい英語学習セッション",
    "news.langue_anglaise.summary": "コミュニケーション力と職業能力を高める対話型の英語研修です。",
    "news.langue_anglaise.body": "英語講座では、話す力・書く力・職業的なコミュニケーションを段階的に育みます。学生や社会人、初学者に役立ちます。",
    "news.rh.title": "人事・人材に関するワークショップ",
    "news.rh.summary": "採用、才能の育成、職業スキルに関する交流の場です。",
    "news.rh.body": "人事・人材活動は、採用、育成、チームワークの力を伸ばし、就業力とキャリア形成を支えます。",
    "news.modal.close": "閉じる"
  }
};

const state = {
  filter: "all",
  query: ""
};

function getNewsLanguage() {
  if (typeof getCurrentLanguage === "function") {
    return getCurrentLanguage();
  }
  return localStorage.getItem("cjk-language") || "fr";
}

function translateNews(key) {
  const lang = getNewsLanguage();
  const dict = NEWS_TRANSLATIONS[lang] || {};
  const translated = dict[key]
    || (typeof translateText === "function" ? translateText(key, lang) : "");
  if (translated && translated !== key) return translated;
  return NEWS_TRANSLATIONS.fr[key] || translated || key;
}

function escapeNewsHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function formatEventDate(event) {
  if (event.dateKey) return translateNews(event.dateKey);
  if (!event.date || !/^\d{4}-\d{2}-\d{2}$/.test(event.date)) return event.date || "";
  return new Intl.DateTimeFormat(getNewsLanguage(), {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(`${event.date}T12:00:00`));
}

function getActivityNewsItem(activity, fallback = {}) {
  return {
    id: fallback.id || activity.id,
    sourceId: activity.id,
    category: activity.newsCategory,
    date: activity.newsDate || fallback.date || "",
    dateKey: activity.newsDateKey || fallback.dateKey,
    image: activity.image || fallback.image || "",
    titleKey: activity.newsTitleKey || `activity.${activity.id}.title`,
    summaryKey: activity.newsSummaryKey || `activity.${activity.id}.summary`,
    bodyKey: activity.newsBodyKey || `activity.${activity.id}.description`,
    source: activity
  };
}

function getBaseNewsItems() {
  return NEWS_ARTICLES.map((article) => {
    const source = activities.find((activity) => activity.id === article.sourceId);
    return source ? getActivityNewsItem(source, article) : article;
  });
}

function getSaturdayNewsItems() {
  return activities
    .filter((activity) => activity.newsCategory === "samedi-nippon")
    .map((activity) => getActivityNewsItem(activity));
}

function getLatestNewsItems(items) {
  const latestByCategory = new Map();
  items.forEach((item) => {
    const previous = latestByCategory.get(item.category);
    const itemDate = item.date && /^\d{4}-\d{2}-\d{2}$/.test(item.date)
      ? new Date(`${item.date}T12:00:00`).getTime()
      : Number.NEGATIVE_INFINITY;
    const previousDate = previous && previous.date && /^\d{4}-\d{2}-\d{2}$/.test(previous.date)
      ? new Date(`${previous.date}T12:00:00`).getTime()
      : Number.NEGATIVE_INFINITY;
    if (!previous || itemDate > previousDate) latestByCategory.set(item.category, item);
  });
  return Array.from(latestByCategory.values());
}

function getVisibleArticles() {
  const term = state.query.trim().toLocaleLowerCase(getNewsLanguage());
  const baseItems = getBaseNewsItems();
  const saturdayItems = getSaturdayNewsItems();
  const halloween = saturdayItems.find((article) => article.sourceId === "samedi-nippon-halloween");
  const items = state.query.trim()
    ? baseItems.concat(saturdayItems)
    : getLatestNewsItems(baseItems).concat(halloween ? [halloween] : []);

  return items.filter((article) => {
    const matchesFilter = state.filter === "all" || article.category === state.filter;
    const source = article.source || activities.find((activity) => activity.id === article.sourceId);
    const searchableText = [
      article.category,
      article.id,
      source && source.title,
      source && source.summary,
      source && source.description,
      translateNews(article.titleKey),
      translateNews(article.summaryKey),
      translateNews(article.bodyKey)
    ].join(" ").toLocaleLowerCase(getNewsLanguage());
    return matchesFilter && (!term || searchableText.includes(term));
  });
}

function renderNewsCards() {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;

  const visible = getVisibleArticles();
  if (!visible.length) {
    grid.innerHTML = `<div class="news-empty">${escapeNewsHtml(translateNews("news.card.empty"))}</div>`;
    return;
  }

  grid.innerHTML = visible.map((article) => {
    const categoryLabel = translateNews(`news.category.${article.category}`);
    const title = translateNews(article.titleKey);
    const summary = translateNews(article.summaryKey);
    const href = `activite.html?id=${encodeURIComponent(article.sourceId || article.id)}`;
    const date = formatEventDate(article);

    return `
      <a class="news-card" data-category="${escapeNewsHtml(article.category)}" href="${href}">
        <img src="${escapeNewsHtml(article.image)}" alt="${escapeNewsHtml(title)}" loading="lazy">
        <div class="news-card__body">
          <div class="news-card__meta">
            <span class="news-badge news-badge--${escapeNewsHtml(article.category)}">${escapeNewsHtml(categoryLabel)}</span>
            <time${article.date && /^\d{4}-\d{2}-\d{2}$/.test(article.date) ? ` datetime="${escapeNewsHtml(article.date)}"` : ""}>${escapeNewsHtml(date)}</time>
          </div>
          <h3>${escapeNewsHtml(title)}</h3>
          <p>${escapeNewsHtml(summary)}</p>
          <span class="news-card__button">${escapeNewsHtml(translateNews("news.card.read_more"))}</span>
        </div>
      </a>
    `;
  }).join("");
}

function renderFilters() {
  document.querySelectorAll(".news-filter").forEach((button) => {
    const key = `news.filter.${button.dataset.filter}`;
    button.textContent = translateNews(key);
    button.classList.toggle("is-active", button.dataset.filter === state.filter);
  });
}

function updatePageLanguage() {
  if (typeof applyTranslations === "function") {
    applyTranslations();
  }

  renderFilters();
  renderNewsCards();

  const searchInput = document.getElementById("newsSearch");
  if (searchInput) {
    searchInput.placeholder = translateNews("news.search.placeholder");
  }
}

document.addEventListener("languagechange", () => {
  updatePageLanguage();
});

function initNewsPage() {
  const searchInput = document.getElementById("newsSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.query = event.target.value;
      renderNewsCards();
    });
  }

  document.querySelectorAll(".news-filter").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter || "all";
      renderFilters();
      renderNewsCards();
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".lang-option")) {
      updatePageLanguage();
    }
  });

  if (typeof contactHtml === "function") {
    const contactDetails = document.getElementById("contactDetails");
    if (contactDetails) {
      contactDetails.innerHTML = contactHtml();
    }
  }

  if (typeof mapHtml === "function") {
    const contactMap = document.getElementById("contactMap");
    if (contactMap) {
      contactMap.innerHTML = mapHtml();
    }
  }

  updatePageLanguage();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNewsPage, { once: true });
} else {
  initNewsPage();
}
