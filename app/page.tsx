"use client";

import { useEffect, useState } from "react";

const venues = [
  { n: "01", name: "Лофт", cap: "до 600 гостей", img: "/loft-winter-generated.webp", tags: ["250 банкет", "400 конференция", "600 фуршет"], occasions: ["Корпоратив", "Презентация", "Family day", "Автопрезентация", "After party", "Конференция"], price: "500 000 ₽", note: "аренда площадки" },
  { n: "02", name: "Мадагаскар", cap: "камерный формат", img: "/madagascar-exterior.jpg", tags: ["55 банкет", "100 фуршет"], occasions: ["Камерный корпоратив", "Юбилей", "День рождения", "Новый год", "Тимбилдинг"], price: "10 000 ₽/ч", note: "минимум 4 часа" },
  { n: "03", name: "Базилик", cap: "для большой компании", img: "/basilik-banquet.jpg", tags: ["80 банкет", "150 фуршет"], occasions: ["Корпоратив", "День рождения", "Тренинг", "Новый год", "Тимбилдинг"], price: "20 000 ₽/ч", note: "минимум 4 часа" },
  { n: "04", name: "Тёплые беседки", cap: "до 50 гостей", img: "/gazebo-winter-insulated.webp", tags: ["30 банкет", "50 фуршет", "всего 4 беседки"], occasions: ["День рождения", "Семейный праздник", "Камерное мероприятие"], price: "3 000 ₽/ч", note: "минимум 4 часа" },
];

const prices = [
  ["Лофт", "Аренда", "500 000 ₽"], ["Лофт", "Световое оборудование", "50 000 ₽"], ["Лофт", "LED-экран", "от 120 000 ₽*"],
  ["Беседки", "Аренда, минимум 4 часа", "3 000 ₽/ч"], ["Беседки", "Депозит кухни и бара на 4 часа", "30 000 ₽"],
  ["Мадагаскар", "Аренда, минимум 4 часа", "10 000 ₽/ч"], ["Мадагаскар", "Депозит кухни и бара", "100 000 ₽"], ["Мадагаскар", "Установка музыкального оборудования", "50 000 ₽"],
  ["Базилик", "Аренда, минимум 4 часа", "20 000 ₽/ч"], ["Базилик", "Депозит кухни и бара", "250 000 ₽"], ["Базилик", "Установка музыкального оборудования", "50 000 ₽"],
  ["Весь парк", "Закрытие парка", "от 2,5 млн ₽"], ["Весь парк", "Каток", "от 200 000 ₽/ч"], ["Весь парк", "Тюбинговая горка", "от 30 000 ₽/ч"], ["Весь парк", "Катание на хасках", "от 80 000 ₽/ч"],
];

const food = ["Глинтвейн б/а", "Облепихово-апельсиновый чай", "Чай с малиной и мятой", "Чурросы с топпингами", "Яблоки в карамели", "Трдельники", "Пончики с пудрой"];

export default function Home() {
  const [filter, setFilter] = useState("Все");
  const [calc, setCalc] = useState({ venue: "Лофт", guests: 100, hours: 4, food: "Фуршет", light: true, led: false, program: false, rink: false, tubing: false, huskies: false });
  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("seen")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  const shown = prices.filter(p => filter === "Все" || p[0] === filter);
  const venueCost: Record<string, number> = { "Лофт": 500000, "Беседки": 3000 * Math.max(4, calc.hours) + 30000, "Мадагаскар": 10000 * Math.max(4, calc.hours) + 100000, "Базилик": 20000 * Math.max(4, calc.hours) + 250000, "Весь парк": 2500000 };
  const foodCost: Record<string, number> = { "Без питания": 0, "Банкет": 5500, "Фуршет": 3500, "Стрит-фуд": 2000 };
  const extras = (calc.light ? 50000 : 0) + (calc.led ? 120000 : 0) + (calc.program ? 6000 * calc.guests : 0) + (calc.rink ? 200000 * calc.hours : 0) + (calc.tubing ? 30000 * calc.hours : 0) + (calc.huskies ? 80000 * calc.hours : 0);
  const total = venueCost[calc.venue] + foodCost[calc.food] * calc.guests + extras;
  const money = (n:number) => new Intl.NumberFormat("ru-RU").format(n) + " ₽";

  return <main>
    <nav className="nav"><a className="brand" href="#top"><span>ПАРК</span> СКАЗКА</a><div className="navlinks"><a href="#venues">Площадки</a><a href="#play">Развлечения</a><a href="#price">Стоимость</a></div><a className="pill small" href="#contact">Обсудить событие <b>↗</b></a></nav>

    <header id="top" className="hero">
      <div className="heroImage" /> <div className="noise" />
      <div className="snow s1">✦</div><div className="snow s2">•</div><div className="snow s3">✦</div>
      <div className="heroCopy">
        <p className="eyebrow"><i /> ЗИМНИЕ КОРПОРАТИВНЫЕ СОБЫТИЯ</p>
        <h1>ЗИМА,<br/><span>КОТОРУЮ</span><br/>ЗАПОМНЯТ</h1>
        <div className="heroBottom"><p>Создаём события любого масштаба —<br/>от тёплого ужина до целого парка<br/>только для вашей команды.</p><a className="pill" href="#venues">Выбрать площадку <b>↓</b></a></div>
      </div>
      <div className="heroStat"><strong>10 000</strong><span>гостей<br/>в одном парке</span></div>
      <div className="scroll">SCROLL <i /></div>
    </header>

    <section className="marquee"><div>КАТОК 2 000 М² <b>✦</b> 30+ АТТРАКЦИОНОВ <b>✦</b> ХАСКИ <b>✦</b> ТЮБИНГОВАЯ ГОРКА <b>✦</b>&nbsp;</div></section>

    <section id="venues" className="section venues">
      <div className="sectionHead reveal"><p className="eyebrow dark"><i /> ПРОСТРАНСТВА</p><h2>ВАШ ФОРМАТ.<br/><span>НАША ПЛОЩАДКА.</span></h2><p>Четыре пространства и весь парк под закрытие. Соберём конфигурацию под задачу, программу и число гостей.</p></div>
      <div className="venueGrid">{venues.map((v,i)=><article className="venueCard reveal" key={v.name} style={{transitionDelay:`${i*.08}s`}}><div className="venuePhoto" style={{backgroundImage:`linear-gradient(0deg,#0b1114cc,transparent),url('${v.img}')`}}/><div className="cardTop"><span>{v.n}</span><em>{v.cap}</em></div><h3>{v.name}</h3><div className="tags">{v.tags.map(t=><span key={t}>{t}</span>)}</div>{v.occasions.length>0&&<div className="occasions"><small>ПОДХОДИТ ДЛЯ</small><div>{v.occasions.map(x=><span key={x}>{x}</span>)}</div></div>}<div className="cardPrice"><small>{v.note}</small><strong>{v.price}</strong></div></article>)}</div>
      <article className="parkCard reveal"><div><p className="eyebrow"><i/> МАКСИМАЛЬНЫЙ МАСШТАБ</p><h3>ВЕСЬ ПАРК.<br/>ТОЛЬКО ВАШ.</h3><div className="parkOccasions"><span>Family day</span><span>Корпоратив</span><span>Фестиваль</span><span>Концерт</span></div></div><div className="bigNum"><strong>10 000</strong><span>человек</span></div><div><p>Закрытие парка под событие вашей компании: аттракционы, сцена, звук и полное брендирование пространства.</p><strong>от 2,5 млн ₽</strong></div></article>
    </section>

    <section className="gallery section"><div className="galleryTitle reveal"><p className="eyebrow"><i/> РЕАЛЬНЫЕ ПРОСТРАНСТВА</p><h2>ПОСМОТРИТЕ,<br/>КАК ЭТО <span>ВЫГЛЯДИТ.</span></h2></div><div className="photoRail reveal"><figure><img src="/loft-lawn.jpg" alt="Территория у Лофта"/><figcaption>Лофт · территория</figcaption></figure><figure><img src="/basilik-wide.jpg" alt="Интерьер Базилика"/><figcaption>Базилик · зал</figcaption></figure><figure><img src="/madagascar-wide.jpeg" alt="Интерьер Мадагаскара"/><figcaption>Мадагаскар · зал</figcaption></figure><figure><img src="/loft-night.jpg" alt="Лофт вечером"/><figcaption>Лофт · вечер</figcaption></figure></div></section>

    <section id="play" className="section darkSection">
      <div className="sectionHead reveal"><p className="eyebrow"><i/> ЗИМНИЙ ДРАЙВ</p><h2>ВЫХОДИМ<br/><span>ИЗ ОФИСА.</span></h2></div>
      <div className="playGrid reveal"><article className="ice"><span className="metric">2 000 <small>м²</small></span><h3>Каток под открытым небом</h3><p>Музыка, свет и лёд для общего старта вечера.</p></article><article className="tubing"><span className="symbol">↘</span><h3>Тюбинговая<br/>горка</h3><p>8 тюбингов · 21 × 5,88 м<br/>высота 5,6 м</p></article><article className="huskies"><span className="symbol">●●</span><h3>Катание<br/>на хасках</h3><p>Для взрослых и детей</p></article><article className="wheel"><span className="metric">30+</span><h3>Зимних<br/>локаций</h3><p>Колесо обозрения, аттракционы и программы*</p></article></div>
      <p className="footnote">* Часть активностей зависит от снежного покрова и погодных условий.</p>
    </section>

    <section className="section food">
      <div className="sectionHead reveal"><p className="eyebrow dark"><i/> ТЕПЛО ВНУТРИ</p><h2>ВКУС ЗИМНЕГО<br/><span>ПРАЗДНИКА.</span></h2></div>
      <div className="foodLayout reveal"><div className="menus"><div><small>БАНКЕТ</small><strong>от 5 500 ₽</strong><span>на человека</span></div><div><small>ФУРШЕТ</small><strong>от 3 500 ₽</strong><span>на человека</span></div><div><small>СТРИТ-ФУД</small><strong>от 2 000 ₽</strong><span>на человека</span></div></div><div className="treats"><p>СПЕЦИАЛЬНЫЕ ЗИМНИЕ ВКУСНЯШКИ</p>{food.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}<b>↗</b></div>)}</div></div>
    </section>

    <section className="section equipment"><div className="eqIntro reveal"><p className="eyebrow"><i/> ВСЁ УЖЕ ЗДЕСЬ</p><h2>ТЕХНИКА.<br/>СВЕТ. СЦЕНА.</h2><p>Парк готов к большим сценариям, а Лофт — к постановке события под ключ.</p></div><div className="eqCols reveal"><div><small>В ПАРКЕ</small><p>Звуковое оборудование</p><p>Сцена</p><p>Брендирование локаций</p></div><div><small>В ЛОФТЕ</small><p>Сцена и гардероб</p><p>Звуковое и световое оборудование</p><p>LED-экран</p><p>Гримерная</p></div></div></section>

    <section className="clients section"><div className="clientsHead reveal"><p className="eyebrow dark"><i/> НАМ ДОВЕРЯЮТ</p><h2>НАШИ<br/><span>КЛИЕНТЫ.</span></h2><p>Команды, для которых мы уже создавали события и впечатления.</p></div><div className="logoGrid reveal"><div className="logo vk">VK</div><div className="logo sber"><b>◉</b> СБЕР</div><div className="logo avito"><b>●●●●</b> avito</div><div className="logo tbank">Т-БАНК</div><div className="logo rosneft"><b>◆</b> РОСНЕФТЬ</div><div className="logo mail">@ mail.ru</div><div className="logo kasp">KASPERSKY</div></div></section>

    <section id="price" className="section pricing"><div className="sectionHead reveal"><p className="eyebrow dark"><i/> ОРИЕНТИР ПО БЮДЖЕТУ</p><h2>РАССЧИТАЙТЕ<br/><span>ВАШЕ СОБЫТИЕ.</span></h2><p>Соберите предварительную конфигурацию. Финальная смета зависит от даты, сценария и технического задания.</p></div>
      <div className="calculator reveal"><div className="calcForm">
        <label><span>01 · Площадка</span><select value={calc.venue} onChange={e=>setCalc({...calc,venue:e.target.value})}>{["Лофт","Беседки","Мадагаскар","Базилик","Весь парк"].map(x=><option key={x}>{x}</option>)}</select></label>
        <div className="calcPair"><label><span>02 · Гостей</span><input type="number" min="10" max="10000" value={calc.guests} onChange={e=>setCalc({...calc,guests:Math.max(0,+e.target.value)})}/></label><label><span>03 · Часов</span><input type="number" min="1" max="24" value={calc.hours} onChange={e=>setCalc({...calc,hours:Math.max(1,+e.target.value)})}/></label></div>
        <label><span>04 · Питание</span><select value={calc.food} onChange={e=>setCalc({...calc,food:e.target.value})}>{["Без питания","Банкет","Фуршет","Стрит-фуд"].map(x=><option key={x}>{x}</option>)}</select></label>
        <div className="calcOptions"><span>05 · Дополнительно</span>{[["light","Световое оборудование"],["led","LED-экран"],["program","Развлекательная программа"],["rink","Аренда катка"],["tubing","Тюбинговая горка"],["huskies","Катание на хасках"]].map(([key,label])=><label key={key}><input type="checkbox" checked={Boolean(calc[key as keyof typeof calc])} onChange={e=>setCalc({...calc,[key]:e.target.checked})}/><i/>{label}</label>)}</div>
      </div><aside className="calcTotal"><p>ПРЕДВАРИТЕЛЬНЫЙ БЮДЖЕТ</p><strong>{money(total)}</strong><div><span>Площадка</span><b>{money(venueCost[calc.venue])}</b></div><div><span>Питание</span><b>{money(foodCost[calc.food]*calc.guests)}</b></div><div><span>Опции</span><b>{money(extras)}</b></div><small>Расчёт не является публичной офертой. Депозиты по кухне и бару включены для соответствующих площадок.</small><a className="pill" href="#contact">Получить точную смету <b>↗</b></a></aside></div>
      <div className="detailHead"><p>ДЕТАЛИЗАЦИЯ СТОИМОСТИ</p><div className="filters">{["Все","Лофт","Беседки","Мадагаскар","Базилик","Весь парк"].map(x=><button className={filter===x?"active":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div></div><div className="priceList reveal">{shown.map((p,i)=><div key={p.join("")+i}><span>{p[0]}</span><p>{p[1]}</p><strong>{p[2]}</strong></div>)}</div><p className="priceNote">* Стоимость LED-экрана с 10 по 31 декабря зависит от выбранной даты. Клининг / гардеробщик: 10 000 ₽ за человека, смена 8 часов. Развлекательные программы — от 6 000 ₽ на человека.</p></section>

    <section id="contact" className="contact section"><p className="eyebrow"><i/> ВАША ЗИМА НАЧИНАЕТСЯ ЗДЕСЬ</p><h2>ДАВАЙТЕ<br/>ПРИДУМАЕМ<br/><span>СОБЫТИЕ.</span></h2><p>Оставьте заявку — предложим площадку,<br/>сценарий и предварительный расчёт.</p><a className="pill light" href="mailto:event@parkskazka.com">Получить предложение <b>↗</b></a><div className="contactLinks"><a href="tel:+74951336560"><small>ДЛЯ ЗВОНКОВ</small><strong>+7 495 133-65-60</strong></a><a href="mailto:event@parkskazka.com"><small>ПОЧТА</small><strong>event@parkskazka.com</strong></a><a href="tel:+79912916400"><small>МЕССЕНДЖЕРЫ</small><strong>+7 991 291-64-00</strong></a></div><div className="orb" aria-hidden="true" /></section>
    <footer><a className="brand" href="#top"><span>ПАРК</span> СКАЗКА</a><p>Москва · Крылатская, 18</p><a href="tel:+74951336560">+7 495 133-65-60</a><a href="mailto:event@parkskazka.com">event@parkskazka.com</a><p>© 2026 · Зимние корпоративные события</p></footer>
  </main>;
}
