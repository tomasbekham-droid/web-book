function generateBookPages(count) {
  const pages = [
    {
      num: 1,
      title: "Мұқаба",
      content: "<h1>WEB БАҒДАРЛАМАЛАУ</h1><h3>Электрондық оқу-әдістемелік кешен</h3><p style='margin-top:40px;'>Бастау үшін кейінгі бетке өтіңіз ➔</p>"
    },
    {
      num: 2,
      title: "Мазмұны",
      content: `
        <h2>МАЗМҰНЫ</h2>
        <ul style="line-height: 1.8; margin-top: 15px;">
          <li>Дәріс №1. Web-технологиялар негіздері .......... 3-бет</li>
          <li>Дәріс №2. HTML тілінің құрылымы .......... 4-бет</li>
          <li>Дәріс №3. CSS стилдер кестесі .......... 5-бет</li>
          <li>... (Барлығы 100 беттен тұратын толық оқулық)</li>
        </ul>
      `
    }
  ];

  // 3-беттен бастап 100-бетке дейін авто-генерация
  for (let i = 3; i <= count; i++) {
    pages.push({
      num: i,
      title: `ДӘРІС №${i - 2}`,
      content: `
        <h2>ДӘРІС №${i - 2}. Web-технологиялар бөлімі (${i}-бет)</h2>
        <p style="margin-top: 10px;">Бұл электрондық оқулықтың ${i}-ші беті.</p>
        <p style="margin-top: 15px;">Веб-бағдарламалау бойынша дәріс мәтіндері, зертханалық тапсырмалар мен бақылау сұрақтары осы бөлімде орналасады.</p>
        <div style="margin-top: 30px; padding: 15px; background: #f0f4f8; border-left: 4px solid #007bff;">
          <strong>Тапсырма:</strong> Өтілген тақырып бойынша практиқалық тапсырмаларды орындаңыз.
        </div>
      `
    });
  }

  return pages;
}

const TOTAL_PAGES = 100; // Бет санын осы жерден өзгертуге болады

const bookData = {
  totalPages: TOTAL_PAGES,
  pages: generateBookPages(TOTAL_PAGES)
};