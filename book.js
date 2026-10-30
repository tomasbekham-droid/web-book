document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('flipbook');
  const flipAudio = document.getElementById('flipSound');

  // Браузер бұғаттауын шешу: алғашқы рет кез келген жерді басқанда аудионы белсендіру
  const enableAudio = () => {
    if (flipAudio) {
      flipAudio.play().then(() => {
        flipAudio.pause();
        flipAudio.currentTime = 0;
      }).catch(() => {});
    }
    document.removeEventListener('click', enableAudio);
  };
  document.addEventListener('click', enableAudio);

  // Беттерді HTML-ге құрастырып салу
  bookData.pages.forEach(page => {
    const pageEl = document.createElement('div');
    pageEl.className = 'page';
    pageEl.innerHTML = `
      <div class="page-content">
        <div>${page.content}</div>
        <div style="text-align: center; border-top: 1px solid #ccc; padding-top: 5px;">${page.num}</div>
      </div>
    `;
    container.appendChild(pageEl);
  });

  // PageFlip инициализациясы
  const pageFlip = new St.PageFlip(container, {
    width: 400,
    height: 550,
    size: 'fixed',
    minWidth: 300,
    maxWidth: 1000,
    minHeight: 400,
    maxHeight: 1350,
    maxShadowOpacity: 0.5,
    showCover: true
  });

  pageFlip.loadFromHTML(document.querySelectorAll('.page'));

  // Навигация батырмалары
  document.getElementById('prevBtn')?.addEventListener('click', () => pageFlip.flipPrev());
  document.getElementById('nextBtn')?.addEventListener('click', () => pageFlip.flipNext());

  // Бет аударылғанда дыбысты ойнату
  pageFlip.on('flip', (e) => {
    if (flipAudio) {
      flipAudio.currentTime = 0;
      flipAudio.play().catch(err => {
        console.log("Дыбыс ойнату шектеуі (браузер бұғаттады):", err);
      });
    }

    const pageInfo = document.getElementById('pageInfo');
    if (pageInfo) {
      pageInfo.innerText = `Бет: ${e.data + 1} / ${bookData.pages.length}`;
    }
  });
});