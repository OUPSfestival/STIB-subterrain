/* =========================
   HOVER EFFECT (CARDS)
========================= */

const searchCards = document.querySelectorAll('.result-card');

searchCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
    card.style.transition = '0.25s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px)';
  });
});


/* =========================
   POPUP SYSTEM (FIXED)
========================= */

const popups = document.querySelectorAll('.popup-overlay');

/* OPEN POPUP */
document.querySelectorAll('.result-card').forEach(card => {
  card.addEventListener('click', () => {

    const id = card.id.replace('openPopup', 'popup');
    const popup = document.getElementById(id);

    if (popup) {
      popup.style.display = 'flex';
    }

  });
});

/* CLOSE BUTTON */
document.querySelectorAll('.close-popup').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.popup-overlay').style.display = 'none';
  });
});

/* CLICK OUTSIDE POPUP */
popups.forEach(popup => {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});


/* =========================
   SEARCH FUNCTION
========================= */

const searchInput = document.getElementById('searchInput');

function runSearch() {
  const value = searchInput.value.toLowerCase().trim();

  searchCards.forEach(card => {
    const searchable = (card.dataset.search || "").toLowerCase();

    if (value === "" || searchable.includes(value)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// live search
searchInput.addEventListener('input', runSearch);

// button search
document.querySelector('.search-container button')
  .addEventListener('click', runSearch);


/* =========================
   RANDOMIZER (ARCHIVE ORDER)
========================= */

const archiveGrid = document.querySelector('.archive-results-grid');

if (archiveGrid) {
  const cardsArray = Array.from(archiveGrid.children);

  cardsArray.sort(() => Math.random() - 0.5);

  cardsArray.forEach(card => {
    archiveGrid.appendChild(card);
  });
}
