// ═══════════════════════════════════════════════════════════════
//  KINO.OK — main.js
// ═══════════════════════════════════════════════════════════════

// ── MOVIE DATA ──────────────────────────────────────────────────
const MOVIES = [
  {
    id:1, title:"Начало", orig:"Inception", year:2010,
    genres:["Фантастика","Триллер","Боевик"], rating:8.8,
    poster:"https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    back:"https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    desc:"Кобб — вор, способный проникать в сны людей и похищать их тайны. Ему предлагают уникальную задачу: не украсть идею, а внедрить её в разум человека.",
    trailer:"YoHD9XEInc0", country:"США", dur:"148 мин", dir:"Кристофер Нолан",
    trending:1, top:1, featured:1
  },
  {
    id:2, title:"Тёмный рыцарь", orig:"The Dark Knight", year:2008,
    genres:["Боевик","Триллер","Криминал"], rating:9.0,
    poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    back:"https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsncoDy6pk.jpg",
    desc:"Бэтмен поднимает ставки в войне с преступностью, когда Джокер — безумный преступный гений — начинает сеять хаос в Готэм-Сити.",
    trailer:"EXeTwQWrcwY", country:"США", dur:"152 мин", dir:"Кристофер Нолан",
    trending:1, top:1
  },
  {
    id:3, title:"Интерстеллар", orig:"Interstellar", year:2014,
    genres:["Фантастика","Драма","Приключения"], rating:8.6,
    poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    back:"https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    desc:"Экспедиция астронавтов отправляется через червоточину в поисках пригодной для жизни планеты, чтобы спасти человечество от вымирания.",
    trailer:"zSWdZVtXT7E", country:"США", dur:"169 мин", dir:"Кристофер Нолан",
    top:1, scifi:1
  },
  {
    id:4, title:"Матрица", orig:"The Matrix", year:1999,
    genres:["Фантастика","Боевик"], rating:8.7,
    poster:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    back:"https://image.tmdb.org/t/p/original/l4QHerTSbMI7qgvasqxP36pqjN6.jpg",
    desc:"Хакер Нео узнаёт, что мир — иллюзия, созданная машинами. Настоящая реальность скрыта от людей, ставших батарейками для искусственного интеллекта.",
    trailer:"vKQi3bBA1y8", country:"США", dur:"136 мин", dir:"Лана Вачовски",
    top:1, scifi:1
  },
  {
    id:5, title:"Криминальное чтиво", orig:"Pulp Fiction", year:1994,
    genres:["Криминал","Драма","Комедия"], rating:8.9,
    poster:"https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNtSxQ.jpg",
    back:"https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    desc:"Три переплетённые истории о гангстерах, мелких преступниках и случайных людях в преступном мире Лос-Анджелеса.",
    trailer:"s7EdQ4FqbhY", country:"США", dur:"154 мин", dir:"Квентин Тарантино",
    top:1, drama:1
  },
  {
    id:6, title:"Бойцовский клуб", orig:"Fight Club", year:1999,
    genres:["Триллер","Драма"], rating:8.8,
    poster:"https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    back:"https://image.tmdb.org/t/p/original/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
    desc:"Офисный работник создаёт подпольный бойцовский клуб вместе с харизматичным мыловаром. Клуб постепенно перерастает в нечто совершенно иное.",
    trailer:"qtRKdVHc-cE", country:"США", dur:"139 мин", dir:"Дэвид Финчер",
    top:1, drama:1
  },
  {
    id:7, title:"Побег из Шоушенка", orig:"The Shawshank Redemption", year:1994,
    genres:["Драма"], rating:9.3,
    poster:"https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
    back:"https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    desc:"Банкир Энди Дюфрейн осуждён за убийство. В тюрьме Шоушенк он сближается с заключённым Редом и доказывает, что надежду нельзя заключить за решётку.",
    trailer:"6hB3S9bIaco", country:"США", dur:"142 мин", dir:"Фрэнк Дарабонт",
    top:1, drama:1
  },
  {
    id:8, title:"Форрест Гамп", orig:"Forrest Gump", year:1994,
    genres:["Драма","Комедия","Мелодрама"], rating:8.8,
    poster:"https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    back:"https://image.tmdb.org/t/p/original/qdIMHd4sEoAOMBh0sXw6YEfHGEz.jpg",
    desc:"История необычного человека, который невольно оказывается причастен ко всем ключевым событиям американской истории второй половины XX века.",
    trailer:"bLvqoHBptjg", country:"США", dur:"142 мин", dir:"Роберт Земекис",
    top:1, drama:1
  },
  {
    id:9, title:"Крёстный отец", orig:"The Godfather", year:1972,
    genres:["Криминал","Драма"], rating:9.2,
    poster:"https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLegHnDmfw2.jpg",
    back:"https://image.tmdb.org/t/p/original/tmU7GeKVPlhBKqjeCCaRlnfVHoN.jpg",
    desc:"Дон Вито Корлеоне передаёт бизнес сыну Майклу. Семейные войны и предательства угрожают разрушить мафиозную империю Корлеоне.",
    trailer:"sY1S34973zA", country:"США", dur:"175 мин", dir:"Фрэнсис Форд Коппола",
    top:1, drama:1
  },
  {
    id:10, title:"Гладиатор", orig:"Gladiator", year:2000,
    genres:["Боевик","Драма","Приключения"], rating:8.5,
    poster:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    back:"https://image.tmdb.org/t/p/original/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
    desc:"Римский полководец Максимус становится рабом и гладиатором после предательства. Его единственная цель — месть злодею, убившему его семью.",
    trailer:"owK1qxDselE", country:"США", dur:"155 мин", dir:"Ридли Скотт",
    trending:1, action:1
  },
  {
    id:11, title:"Дюна", orig:"Dune", year:2021,
    genres:["Фантастика","Приключения","Драма"], rating:8.0,
    poster:"https://image.tmdb.org/t/p/w500/d5NXSklpcvksHQZ4o7MEG9VGFo.jpg",
    back:"https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
    desc:"Юный Пол Атрейдес прибывает на пустынную планету Арракис — единственный источник ценнейшей в галактике субстанции.",
    trailer:"8g18jFHCLXk", country:"США", dur:"155 мин", dir:"Дени Вильнёв",
    trending:1, scifi:1
  },
  {
    id:12, title:"Оппенгеймер", orig:"Oppenheimer", year:2023,
    genres:["Биография","Драма","История"], rating:8.3,
    poster:"https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    back:"https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    desc:"История создателя атомной бомбы Роберта Оппенгеймера — триумф науки и невыносимая тяжесть моральной ответственности за судьбу человечества.",
    trailer:"uYPbbksJxIg", country:"США", dur:"180 мин", dir:"Кристофер Нолан",
    trending:1, fresh:1, drama:1
  },
  {
    id:13, title:"Топ Ган: Мэверик", orig:"Top Gun: Maverick", year:2022,
    genres:["Боевик","Драма"], rating:8.3,
    poster:"https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    back:"https://image.tmdb.org/t/p/original/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    desc:"Мэверик возвращается тренировать новых лётчиков для секретной миссии. Среди курсантов — сын его погибшего лучшего друга.",
    trailer:"qSqVVswa420", country:"США", dur:"130 мин", dir:"Джозеф Косински",
    trending:1, fresh:1, action:1
  },
  {
    id:14, title:"Человек-паук: Нет пути домой", orig:"Spider-Man: No Way Home", year:2021,
    genres:["Боевик","Фантастика","Приключения"], rating:8.2,
    poster:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    back:"https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    desc:"Питер Паркер просит Доктора Стрэнджа сотворить заклинание забвения, но что-то идёт не так — и мультивселенная начинает рушиться.",
    trailer:"JfVOs4VSpmA", country:"США", dur:"148 мин", dir:"Джон Уоттс",
    trending:1, action:1
  },
  {
    id:15, title:"Бэтмен", orig:"The Batman", year:2022,
    genres:["Боевик","Криминал","Триллер"], rating:7.8,
    poster:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    back:"https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    desc:"Второй год Бэтмена. Загадочный убийца оставляет зашифрованные послания, втягивая Брюса Уэйна в расследование тайн самого Готэма.",
    trailer:"mqqft2x_Aa4", country:"США", dur:"176 мин", dir:"Мэтт Ривз",
    fresh:1, action:1
  },
  {
    id:16, title:"Барби", orig:"Barbie", year:2023,
    genres:["Комедия","Фэнтези","Приключения"], rating:6.9,
    poster:"https://image.tmdb.org/t/p/w500/iuFNMS8vlbZxOkIGEV7HDBnOKly.jpg",
    back:"https://image.tmdb.org/t/p/original/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
    desc:"Идеальная Барби начинает думать о смерти и отправляется из Барбиленда в реальный мир. Кен едет следом.",
    trailer:"pBk4NYhWNMM", country:"США", dur:"114 мин", dir:"Грета Гервиг",
    trending:1, fresh:1, comedy:1
  },
  {
    id:17, title:"Джон Уик 4", orig:"John Wick: Chapter 4", year:2023,
    genres:["Боевик","Триллер"], rating:7.7,
    poster:"https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    back:"https://image.tmdb.org/t/p/original/xVMtv55caCEvBaGXOkWbuNBsyhW.jpg",
    desc:"Джон Уик разыскивает способ разорвать контракт с Высокой Таблицей, путешествуя по всему миру среди старых союзников и новых врагов.",
    trailer:"qEVUtrk8_B4", country:"США", dur:"169 мин", dir:"Чад Стахелски",
    trending:1, fresh:1, action:1
  },
  {
    id:18, title:"Мстители: Финал", orig:"Avengers: Endgame", year:2019,
    genres:["Боевик","Фантастика","Приключения"], rating:8.4,
    poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    back:"https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    desc:"Оставшиеся Мстители отправляются в путешествие во времени, чтобы победить Таноса и вернуть половину всей жизни во вселенной.",
    trailer:"TcMBFSGVi1c", country:"США", dur:"181 мин", dir:"Братья Руссо",
    top:1, action:1
  },
  {
    id:19, title:"Аватар", orig:"Avatar", year:2009,
    genres:["Фантастика","Приключения","Боевик"], rating:7.8,
    poster:"https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    back:"https://image.tmdb.org/t/p/original/Yc9q6QuWrMp9nuDm5R8ExNqbEqU.jpg",
    desc:"Парализованный морпех управляет телом инопланетянина на далёкой Пандоре, где неожиданно встаёт на сторону аборигенов против людей-захватчиков.",
    trailer:"5PSNL1qE6VY", country:"США", dur:"162 мин", dir:"Джеймс Кэмерон",
    scifi:1
  },
  {
    id:20, title:"Титаник", orig:"Titanic", year:1997,
    genres:["Мелодрама","Драма","История"], rating:7.9,
    poster:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    back:"https://image.tmdb.org/t/p/original/wd5nQkMjCuqiPAOvQyiUJCQEOb1.jpg",
    desc:"Молодой художник влюбляется в девушку из высшего общества на борту крупнейшего корабля в истории во время его трагического первого рейса.",
    trailer:"kVrqfYjkTdQ", country:"США", dur:"195 мин", dir:"Джеймс Кэмерон",
    top:1, drama:1
  },
  {
    id:21, title:"Всё везде и сразу", orig:"Everything Everywhere All at Once", year:2022,
    genres:["Фантастика","Комедия","Боевик"], rating:7.8,
    poster:"https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    back:"https://image.tmdb.org/t/p/original/tQvuh5oHsPOIhJklkbqz8Xl6kHt.jpg",
    desc:"Хозяйка прачечной получает способность проживать жизни из параллельных вселенных и должна спасти реальность, сражаясь с нигилистической силой.",
    trailer:"wxN1T1uxQ2g", country:"США", dur:"139 мин", dir:"Дэниэл Кван, Дэниэл Шайнерт",
    fresh:1, comedy:1
  },
  {
    id:22, title:"Дюна: Часть вторая", orig:"Dune: Part Two", year:2024,
    genres:["Фантастика","Приключения","Боевик"], rating:8.5,
    poster:"https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    back:"https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    desc:"Пол Атрейдес объединяется с Чани и фрименами против дома Харконненов. Пророчество о мессии набирает силу.",
    trailer:"Way9Dexny3w", country:"США", dur:"166 мин", dir:"Дени Вильнёв",
    trending:1, fresh:1, scifi:1
  },
  {
    id:23, title:"Волк с Уолл-стрит", orig:"The Wolf of Wall Street", year:2013,
    genres:["Биография","Криминал","Комедия"], rating:8.2,
    poster:"https://image.tmdb.org/t/p/w500/certXpAYHpBB7adKz7rZDNe5iBg.jpg",
    back:"https://image.tmdb.org/t/p/original/lEqFMoBHCBCc3Thq3kXqTFl2rrX.jpg",
    desc:"Восхождение и падение Джордана Белфорта — биржевого брокера, чья жизнь превратилась в нескончаемую оргию денег, наркотиков и мошенничества.",
    trailer:"iszwuX1AK6A", country:"США", dur:"180 мин", dir:"Мартин Скорсезе",
    top:1, comedy:1
  },
  {
    id:24, title:"Паразиты", orig:"Parasite", year:2019,
    genres:["Драма","Триллер","Комедия"], rating:8.5,
    poster:"https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    back:"https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    desc:"Бедная корейская семья проникает в жизнь богатой семьи, постепенно занимая в ней всё больше места. История о классовом неравенстве.",
    trailer:"isOGD_7hNIY", country:"Корея", dur:"132 мин", dir:"Пон Чжун Хо",
    top:1, drama:1
  }
];

// ── STATE ───────────────────────────────────────────────────────
const S = {
  page: 'home',
  movie: null,
  prevPage: 'home',
  prevMovie: null,
  q: '',
  genre: 'Все',
  favs: JSON.parse(localStorage.getItem('kino_ok_favs') || '[]'),
  history: JSON.parse(localStorage.getItem('kino_ok_hist') || '[]'),
  user: JSON.parse(localStorage.getItem('kino_ok_user') || 'null'),
  loginTab: 'login'
};

// ── NAVIGATION ──────────────────────────────────────────────────
function go(page, movieId) {
  S.prevPage = S.page;
  S.prevMovie = S.movie;
  S.page = page;
  S.movie = movieId ? MOVIES.find(m => m.id === movieId) : null;
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  syncNavLinks();
  syncAuthArea();
}

function goBack() {
  if (S.prevMovie) go(S.prevPage, S.prevMovie.id);
  else go(S.prevPage || 'home');
}

function syncNavLinks() {
  ['home','catalog','search'].forEach(p => {
    const el = document.getElementById('nl-' + p);
    if (el) el.classList.toggle('active', S.page === p);
  });
  const favIcon = document.getElementById('fav-icon');
  if (favIcon) favIcon.textContent = S.favs.length > 0 ? '♥' : '♡';
}

function syncAuthArea() {
  const el = document.getElementById('auth-area');
  if (!el) return;
  if (S.user) {
    el.innerHTML = `<div class="user-chip" onclick="go('profile')">
      <div class="user-avatar">${S.user.name[0].toUpperCase()}</div>
      <span>${S.user.name}</span>
    </div>`;
  } else {
    el.innerHTML = `<button class="btn-red" onclick="go('login')" style="padding:7px 18px;font-size:13px;">Войти</button>`;
  }
}

// ── FAVORITES ───────────────────────────────────────────────────
function toggleFav(id, e) {
  if (e) { e.stopPropagation(); e.preventDefault(); }
  const i = S.favs.indexOf(id);
  if (i === -1) { S.favs.push(id); toast('Добавлено в избранное', 'ok', '♥'); }
  else          { S.favs.splice(i, 1); toast('Удалено из избранного', 'err', '♡'); }
  localStorage.setItem('kino_ok_favs', JSON.stringify(S.favs));
  document.querySelectorAll('.heart-btn').forEach(b => {
    const mid = parseInt(b.dataset.id);
    const fav = S.favs.includes(mid);
    b.classList.toggle('on', fav);
    b.textContent = fav ? '♥' : '♡';
  });
  const favIcon = document.getElementById('fav-icon');
  if (favIcon) favIcon.textContent = S.favs.length > 0 ? '♥' : '♡';
  if (S.page === 'favorites') renderApp();
}
const isFav = id => S.favs.includes(id);

// ── TOAST ───────────────────────────────────────────────────────
function toast(msg, type = 'ok', icon = '✓') {
  const c = document.getElementById('toasts');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="ti">${icon}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 2800);
}

// ── NAVBAR SCROLL ───────────────────────────────────────────────
let _scrollHandler = null;
function setupNavScroll() {
  const nb = document.getElementById('navbar');
  if (!nb) return;
  if (_scrollHandler) window.removeEventListener('scroll', _scrollHandler);
  _scrollHandler = () => nb.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', _scrollHandler, { passive: true });
  _scrollHandler();
}

// ── NAVBAR SEARCH ───────────────────────────────────────────────
function navSearch(v) {
  if (!v.trim()) return;
  S.q = v.trim();
  S.page = 'search';
  S.movie = null;
  renderApp();
  syncNavLinks();
}

// ── ROW SCROLL ──────────────────────────────────────────────────
function scrollRow(id, d) {
  const el = document.getElementById('r-' + id);
  if (el) el.scrollBy({ left: d * 580, behavior: 'smooth' });
}

// ── GENRE FILTER ────────────────────────────────────────────────
function setGenre(g) { S.genre = g; renderApp(); }

// ── RENDER APP ──────────────────────────────────────────────────
function renderApp() {
  const app = document.getElementById('app');
  const nb  = document.getElementById('navbar');
  if (nb) nb.style.display = S.page === 'watch' ? 'none' : 'flex';

  switch (S.page) {
    case 'home':      app.innerHTML = renderHome();       break;
    case 'catalog':   app.innerHTML = renderCatalog();    break;
    case 'movie':     app.innerHTML = renderMoviePage();  break;
    case 'watch':     app.innerHTML = renderWatchPage();  break;
    case 'search':    app.innerHTML = renderSearchPage(); break;
    case 'login':     app.innerHTML = renderLoginPage();  break;
    case 'profile':   app.innerHTML = S.user ? renderProfile() : renderLoginPage(); break;
    case 'favorites': app.innerHTML = renderFavoritesPage(); break;
    default:          app.innerHTML = renderHome();
  }
  setupNavScroll();
}

// ── HOME ────────────────────────────────────────────────────────
function renderHome() {
  const f       = MOVIES.find(m => m.featured) || MOVIES[0];
  const trending = MOVIES.filter(m => m.trending);
  const top      = MOVIES.filter(m => m.top);
  const fresh    = MOVIES.filter(m => m.fresh);
  const scifi    = MOVIES.filter(m => m.scifi);
  const drama    = MOVIES.filter(m => m.drama);
  const comedy   = MOVIES.filter(m => m.comedy);
  const action   = MOVIES.filter(m => m.action);

  return `
    <div class="hero">
      <div class="hero-bg" style="background-image:url('${f.back}')"></div>
      <div class="hero-vignette"></div>
      <div class="hero-content">
        <div class="hero-badge">В эфире сейчас</div>
        <div class="hero-title">${f.title}</div>
        <div class="hero-meta">
          <span class="rnk">★ ${f.rating}</span>
          <span class="dot-sep"></span>
          <span>${f.year}</span>
          <span class="dot-sep"></span>
          <span>${f.dur}</span>
          <span class="dot-sep"></span>
          <span>${f.genres.join(' · ')}</span>
        </div>
        <div class="hero-desc">${f.desc}</div>
        <div class="hero-btns">
          <button class="btn-red"   onclick="go('watch',${f.id})">▶ Смотреть</button>
          <button class="btn-ghost" onclick="go('movie',${f.id})">ℹ Подробнее</button>
        </div>
      </div>
    </div>
    <div style="position:relative;z-index:1;margin-top:-48px;">
      ${renderRow('🔥 В тренде',    trending, 'tr')}
      ${renderRow('⭐ Топ рейтинга', top,      'tp')}
      ${fresh.length  ? renderRow('🆕 Новинки',   fresh,  'fr') : ''}
      ${scifi.length  ? renderRow('🚀 Фантастика', scifi,  'sf') : ''}
      ${drama.length  ? renderRow('🎭 Драмы',      drama,  'dr') : ''}
      ${comedy.length ? renderRow('😂 Комедии',    comedy, 'co') : ''}
      ${action.length ? renderRow('💥 Боевики',    action, 'ac') : ''}
    </div>
    ${renderFooter()}
  `;
}

// ── ROW ─────────────────────────────────────────────────────────
function renderRow(label, movies, rowId) {
  if (!movies.length) return '';
  return `
    <section class="section">
      <div class="section-head">
        <div class="section-title"><div class="red-dot"></div>${label}</div>
        <a class="see-all" onclick="go('catalog')">Смотреть все →</a>
      </div>
      <div class="row-wrap">
        <button class="row-arrow lft" onclick="scrollRow('${rowId}',-1)">‹</button>
        <div class="row-scroll" id="r-${rowId}">
          ${movies.map(m => renderCard(m)).join('')}
        </div>
        <button class="row-arrow rgt" onclick="scrollRow('${rowId}',1)">›</button>
      </div>
    </section>
  `;
}

// ── CARD ────────────────────────────────────────────────────────
function renderCard(m) {
  const fav = isFav(m.id);
  return `
    <div class="card" onclick="go('movie',${m.id})">
      <div class="card-img">
        <img src="${m.poster}" alt="${m.title}" loading="lazy"
             onerror="this.src='https://placehold.co/158x237/1a1a28/7878a0?text=${encodeURIComponent(m.title.slice(0,8))}'">
        <div class="card-hover-layer">
          <div class="card-play-btn" onclick="event.stopPropagation();go('watch',${m.id})">▶</div>
          <div class="card-hover-rating">★ ${m.rating}</div>
        </div>
        <button class="heart-btn ${fav?'on':''}" data-id="${m.id}" onclick="toggleFav(${m.id},event)">${fav?'♥':'♡'}</button>
      </div>
      <div class="card-body">
        <div class="card-name">${m.title}</div>
        <div class="card-sub"><span class="gold-star">★</span>${m.rating} <span style="color:var(--dim)">•</span> ${m.year}</div>
      </div>
    </div>
  `;
}

// ── CATALOG ─────────────────────────────────────────────────────
function renderCatalog() {
  const allGenres = ['Все', ...new Set(MOVIES.flatMap(m => m.genres))];
  const filtered  = S.genre === 'Все' ? MOVIES : MOVIES.filter(m => m.genres.includes(S.genre));
  return `
    <div class="page-wrap fade-in">
      <div class="page-title">🎬 Каталог фильмов</div>
      <div class="chips">
        ${allGenres.map(g => `<button class="chip ${S.genre===g?'on':''}" onclick="setGenre('${g}')">${g}</button>`).join('')}
      </div>
      <div style="font-size:13px;color:var(--muted);margin-bottom:20px;">
        Найдено фильмов: <b style="color:var(--text)">${filtered.length}</b>
      </div>
      <div class="grid">${filtered.map(m => renderCard(m)).join('')}</div>
    </div>
    ${renderFooter()}
  `;
}

// ── MOVIE DETAIL ────────────────────────────────────────────────
function renderMoviePage() {
  const m = S.movie;
  if (!m) return '<div class="page-wrap"><p>Фильм не найден</p></div>';
  const fav     = isFav(m.id);
  const similar = MOVIES.filter(f => f.id !== m.id && f.genres.some(g => m.genres.includes(g))).slice(0, 8);
  return `
    <div class="fade-in">
      <button class="back-btn" onclick="goBack()">← Назад</button>
      <div class="backdrop-wrap">
        <img class="backdrop-img" src="${m.back}" alt="${m.title}"
             onerror="this.src='https://placehold.co/1920x800/10101a/404060?text=.'">
        <div class="backdrop-fade"></div>
      </div>
      <div class="movie-layout">
        <div class="big-poster">
          <img src="${m.poster}" alt="${m.title}"
               onerror="this.src='https://placehold.co/230x345/1a1a28/7878a0?text=${encodeURIComponent(m.title.slice(0,8))}'">
        </div>
        <div class="movie-info-col">
          <div class="genre-pills">${m.genres.map(g => `<span class="gpill">${g}</span>`).join('')}</div>
          <div class="movie-main-title">${m.title}</div>
          <div class="movie-orig">${m.orig} · ${m.year}</div>
          <div class="stats-row">
            <div class="stat"><span class="stat-lbl">Рейтинг</span><span class="stat-val gold">★ ${m.rating}</span></div>
            <div class="stat"><span class="stat-lbl">Год</span><span class="stat-val">${m.year}</span></div>
            <div class="stat"><span class="stat-lbl">Длина</span><span class="stat-val">${m.dur}</span></div>
            <div class="stat"><span class="stat-lbl">Страна</span><span class="stat-val">${m.country}</span></div>
            <div class="stat"><span class="stat-lbl">Режиссёр</span><span class="stat-val">${m.dir}</span></div>
          </div>
          <div class="movie-desc">${m.desc}</div>
          <div class="movie-btns">
            <button class="btn-red" onclick="go('watch',${m.id})">▶ Смотреть трейлер</button>
            <button class="btn-ghost" id="fav-movie-btn"
              onclick="toggleFavMovie(${m.id})"
              style="${fav ? 'border-color:var(--accent);color:var(--accent)' : ''}">
              ${fav ? '♥ В избранном' : '♡ В избранное'}
            </button>
          </div>
        </div>
      </div>
      <div class="trailer-section">
        <div class="trailer-title"><div class="red-dot"></div>Официальный трейлер</div>
        <div class="player-wrap">
          <iframe src="https://www.youtube.com/embed/${m.trailer}?rel=0&modestbranding=1"
                  title="${m.title}" allowfullscreen
                  allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture">
          </iframe>
        </div>
      </div>
      ${similar.length ? `<div style="padding:0 16px;">${renderRow('Похожие фильмы', similar, 'sim')}</div>` : ''}
      ${renderFooter()}
    </div>
  `;
}

function toggleFavMovie(id) {
  toggleFav(id, null);
  const btn = document.getElementById('fav-movie-btn');
  if (btn) {
    const fav = isFav(id);
    btn.textContent = fav ? '♥ В избранном' : '♡ В избранное';
    btn.style.borderColor = fav ? 'var(--accent)' : '';
    btn.style.color       = fav ? 'var(--accent)' : '';
  }
}

// ── WATCH PAGE ──────────────────────────────────────────────────
function renderWatchPage() {
  const m = S.movie;
  if (!m) return '<div class="page-wrap"><p>Фильм не найден</p></div>';
  if (!S.history.includes(m.id)) {
    S.history.unshift(m.id);
    if (S.history.length > 20) S.history.pop();
    localStorage.setItem('kino_ok_hist', JSON.stringify(S.history));
  }
  return `
    <div class="watch-page">
      <div class="watch-bar">
        <div class="watch-logo" onclick="go('home')">KINO<span>.</span>OK</div>
        <div style="width:1px;height:22px;background:var(--border)"></div>
        <div class="watch-movie-title">${m.title}</div>
        <div style="margin-left:auto;display:flex;gap:10px;">
          <button class="btn-ghost" onclick="go('movie',${m.id})" style="padding:7px 16px;font-size:13px;">← К фильму</button>
        </div>
      </div>
      <div class="watch-frame">
        <div class="watch-player">
          <div class="watch-player-inner">
            <iframe src="https://www.youtube.com/embed/${m.trailer}?autoplay=1&rel=0&modestbranding=1&controls=1"
                    title="${m.title}" allowfullscreen
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share">
            </iframe>
          </div>
        </div>
        <div class="watch-meta">
          <div>
            <div class="watch-info-title">${m.title}</div>
            <div class="watch-info-sub">${m.orig} · ${m.genres.join(' · ')} · ${m.year} · ${m.dur} · Режиссёр: ${m.dir}</div>
          </div>
          <div class="watch-actions">
            <button class="btn-ghost" onclick="toggleFav(${m.id},event)" style="padding:9px 18px;font-size:13px;">
              ${isFav(m.id) ? '♥ В избранном' : '♡ В избранное'}
            </button>
            <button class="btn-red" onclick="go('catalog')" style="padding:9px 18px;font-size:13px;">Все фильмы</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ── SEARCH ──────────────────────────────────────────────────────
function renderSearchPage() {
  const results = getSearchResults(S.q);
  return `
    <div class="page-wrap fade-in">
      <div class="search-hero-area">
        <div class="search-hero-title">🔍 Поиск</div>
        <div class="search-hero-sub">Название фильма, жанр или режиссёр</div>
        <div class="search-big">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input type="text" placeholder="Начните вводить…" value="${S.q}"
                 oninput="liveSearch(this.value)" id="main-q" autofocus>
          ${S.q ? `<button class="search-clear" onclick="clearSearch()">✕</button>` : ''}
        </div>
      </div>
      <div id="s-results">${renderSearchResults(S.q, results)}</div>
    </div>
    ${renderFooter()}
  `;
}

function getSearchResults(q) {
  if (!q) return [];
  const lq = q.toLowerCase();
  return MOVIES.filter(m =>
    m.title.toLowerCase().includes(lq) ||
    m.orig.toLowerCase().includes(lq) ||
    m.genres.some(g => g.toLowerCase().includes(lq)) ||
    m.dir.toLowerCase().includes(lq)
  );
}

function renderSearchResults(q, results) {
  if (!q) return `
    <div class="empty-state">
      <div class="empty-icon">🎬</div>
      <div class="empty-title">Введите название фильма</div>
      <div class="empty-sub">Поиск по названию, жанру или режиссёру</div>
    </div>`;
  if (!results.length) return `
    <div class="empty-state">
      <div class="empty-icon">😕</div>
      <div class="empty-title">Ничего не найдено</div>
      <div class="empty-sub">Попробуйте другой запрос</div>
    </div>`;
  return `
    <div style="font-size:13px;color:var(--muted);margin-bottom:20px;">
      По запросу «${q}» найдено: <b style="color:var(--text)">${results.length}</b>
    </div>
    <div class="grid">${results.map(m => renderCard(m)).join('')}</div>
  `;
}

function liveSearch(v) {
  S.q = v;
  const results   = getSearchResults(v);
  const container = document.getElementById('s-results');
  if (container) container.innerHTML = renderSearchResults(v, results);
  const input = document.getElementById('main-q');
  if (!input) return;
  const existing = input.parentElement.querySelector('.search-clear');
  if (v && !existing) {
    const btn = document.createElement('button');
    btn.className = 'search-clear'; btn.textContent = '✕';
    btn.onclick = clearSearch;
    input.parentElement.appendChild(btn);
  } else if (!v && existing) existing.remove();
}

function clearSearch() {
  S.q = '';
  const input = document.getElementById('main-q');
  if (input) { input.value = ''; input.focus(); }
  liveSearch('');
}

// ── LOGIN / REGISTER ────────────────────────────────────────────
function renderLoginPage() {
  const isLogin  = S.loginTab === 'login';
  const posters  = MOVIES.slice(0, 12).map(m => `<img src="${m.poster}" alt="" onerror="this.style.opacity=0">`).join('');
  return `
    <div class="login-page">
      <div class="login-poster-grid">${posters}</div>
      <div class="login-dim"></div>
      <div class="login-box">
        <div class="login-logo">KINO<span>.</span>OK</div>
        <div class="login-tagline">${isLogin ? 'Войдите для полного доступа' : 'Создайте аккаунт бесплатно'}</div>
        ${!isLogin ? `<div class="fld"><label>Имя</label><input id="rn" type="text" placeholder="Ваше имя"></div>` : ''}
        <div class="fld"><label>Email</label>
          <input id="em" type="email" placeholder="email@example.com"
                 onkeydown="if(event.key==='Enter')${isLogin?'doLogin()':'doRegister()'}">
        </div>
        <div class="fld"><label>Пароль</label>
          <input id="pw" type="password" placeholder="••••••••"
                 onkeydown="if(event.key==='Enter')${isLogin?'doLogin()':'doRegister()'}">
        </div>
        <button class="btn-login" onclick="${isLogin?'doLogin()':'doRegister()'}">
          ${isLogin ? 'Войти' : 'Зарегистрироваться'}
        </button>
        <div class="switch-mode">
          ${isLogin
            ? `Нет аккаунта? <a onclick="S.loginTab='register';renderApp()">Зарегистрироваться</a>`
            : `Уже есть аккаунт? <a onclick="S.loginTab='login';renderApp()">Войти</a>`
          }
        </div>
      </div>
    </div>
  `;
}

function doLogin() {
  const em = document.getElementById('em')?.value?.trim();
  const pw = document.getElementById('pw')?.value;
  if (!em || !pw) { toast('Заполните все поля', 'err', '⚠'); return; }
  if (pw.length < 4) { toast('Пароль слишком короткий', 'err', '⚠'); return; }
  const user = { name: em.split('@')[0], email: em };
  S.user = user;
  localStorage.setItem('kino_ok_user', JSON.stringify(user));
  toast('Добро пожаловать, ' + user.name + '! 🎬', 'ok', '✓');
  go('home');
}

function doRegister() {
  const rn = document.getElementById('rn')?.value?.trim();
  const em = document.getElementById('em')?.value?.trim();
  const pw = document.getElementById('pw')?.value;
  if (!rn || !em || !pw) { toast('Заполните все поля', 'err', '⚠'); return; }
  if (pw.length < 4) { toast('Пароль слишком короткий (мин. 4 символа)', 'err', '⚠'); return; }
  const user = { name: rn, email: em };
  S.user = user;
  localStorage.setItem('kino_ok_user', JSON.stringify(user));
  toast('Аккаунт создан! Добро пожаловать 🎉', 'ok', '✓');
  go('home');
}

function doLogout() {
  S.user = null;
  localStorage.removeItem('kino_ok_user');
  toast('До свидания!', 'info', '👋');
  go('home');
}

// ── PROFILE ─────────────────────────────────────────────────────
function renderProfile() {
  const u          = S.user;
  const favMovies  = MOVIES.filter(m => S.favs.includes(m.id));
  const histMovies = S.history.map(id => MOVIES.find(m => m.id === id)).filter(Boolean);
  return `
    <div class="page-wrap fade-in">
      <div class="profile-banner">
        <div class="p-avatar">${u.name[0].toUpperCase()}</div>
        <div>
          <div class="p-name">${u.name}</div>
          <div class="p-email">${u.email}</div>
          <div class="p-stats">${favMovies.length} в избранном · ${histMovies.length} просмотров</div>
        </div>
        <button class="logout-btn" onclick="doLogout()">Выйти →</button>
      </div>
      <div class="section-title" style="font-size:20px;margin-bottom:20px;"><div class="red-dot"></div>Избранное</div>
      ${favMovies.length
        ? `<div class="grid" style="margin-bottom:48px;">${favMovies.map(m => renderCard(m)).join('')}</div>`
        : `<div style="padding:32px 0;color:var(--muted);font-size:14px;margin-bottom:48px;">Ещё ничего не добавлено. Нажимайте ♡ на карточках фильмов.</div>`
      }
      <div class="section-title" style="font-size:20px;margin-bottom:20px;"><div class="red-dot"></div>История просмотров</div>
      ${histMovies.length
        ? `<div class="grid">${histMovies.map(m => renderCard(m)).join('')}</div>`
        : `<div style="padding:32px 0;color:var(--muted);font-size:14px;">Вы ещё ничего не смотрели.</div>`
      }
    </div>
    ${renderFooter()}
  `;
}

// ── FAVORITES PAGE ───────────────────────────────────────────────
function renderFavoritesPage() {
  const favMovies = MOVIES.filter(m => S.favs.includes(m.id));
  return `
    <div class="page-wrap fade-in">
      <div class="page-title">♥ Избранное</div>
      ${favMovies.length
        ? `<div class="grid">${favMovies.map(m => renderCard(m)).join('')}</div>`
        : `<div class="empty-state">
            <div class="empty-icon">🎬</div>
            <div class="empty-title">Список пуст</div>
            <div class="empty-sub" style="margin-bottom:24px;">Добавляйте фильмы, нажимая на ♡</div>
            <button class="btn-red" onclick="go('catalog')">Перейти в каталог</button>
          </div>`
      }
    </div>
    ${renderFooter()}
  `;
}

// ── FOOTER ──────────────────────────────────────────────────────
function renderFooter() {
  return `
    <footer>
      <div class="footer-top">
        <div>
          <div class="footer-logo">KINO<span>.</span>OK</div>
          <div class="footer-tagline">Смотри лучшее кино онлайн</div>
        </div>
        <div class="footer-links">
          <div class="fcol">
            <h4>Навигация</h4>
            <a onclick="go('home')">Главная</a>
            <a onclick="go('catalog')">Каталог</a>
            <a onclick="go('search')">Поиск</a>
            <a onclick="go('favorites')">Избранное</a>
          </div>
          <div class="fcol">
            <h4>Жанры</h4>
            <a onclick="S.genre='Фантастика';go('catalog')">Фантастика</a>
            <a onclick="S.genre='Драма';go('catalog')">Драмы</a>
            <a onclick="S.genre='Боевик';go('catalog')">Боевики</a>
            <a onclick="S.genre='Комедия';go('catalog')">Комедии</a>
            <a onclick="S.genre='Триллер';go('catalog')">Триллеры</a>
          </div>
          <div class="fcol">
            <h4>Аккаунт</h4>
            <a onclick="go('profile')">Профиль</a>
            <a onclick="go('login')">Войти / Регистрация</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 KINO.OK — Учебный проект</p>
        <p>Все трейлеры принадлежат их правообладателям</p>
      </div>
    </footer>
  `;
}

// ── INIT ────────────────────────────────────────────────────────
syncAuthArea();
renderApp();
