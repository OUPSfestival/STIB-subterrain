const cards = document.querySelectorAll('.result-card');

cards.forEach(card => {

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
    card.style.transition = '0.25s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px)';
  });

});



function setupPopup(openId, popupId, closeId){

  const open = document.getElementById(openId);
  const popup = document.getElementById(popupId);
  const close = document.getElementById(closeId);

  if(!open || !popup || !close){
    console.log('Missing popup:', openId);
    return;
  }

  open.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  close.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  popup.addEventListener('click', (e) => {
    if(e.target === popup){
      popup.style.display = 'none';
    }
  });

}



/* POPUPS */

setupPopup(
  'openPopup',
  'popup',
  'closePopup'
);

setupPopup(
  'openPopupOpuntia',
  'popupOpuntia',
  'closePopupOpuntia'
);

setupPopup(
  'openPopupFlup',
  'popupFlup',
  'closePopupFlup'
);

setupPopup(
  'openPopupCalcite',
  'popupCalcite',
  'closePopupCalcite'
);

setupPopup(
  'openPopupNebula',
  'popupNebula',
  'closePopupNebula'
);

setupPopup(
  'openPopupBacteria',
  'popupBacteria',
  'closePopupBacteria'
);



/* SEARCH */

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', () => {

  const value = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll('.result-card');

  cards.forEach(card => {

    const searchable = card.dataset.search;

    if(searchable.includes(value)){
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }

  });

});



/* RANDOMIZE ARCHIVE ORDER */

const archiveGrid = document.querySelector('.archive-results-grid');

const cardsArray = Array.from(archiveGrid.children);

cardsArray.sort(() => Math.random() - 0.5);

cardsArray.forEach(card => {
  archiveGrid.appendChild(card);
});


/* POPUPS */

setupPopup(
  'openPopup',
  'popup',
  'closePopup'
);

setupPopup(
  'openPopupOpuntia',
  'popupOpuntia',
  'closePopupOpuntia'
);

setupPopup(
  'openPopupFlup',
  'popupFlup',
  'closePopupFlup'
);

setupPopup(
  'openPopupCalcite',
  'popupCalcite',
  'closePopupCalcite'
);

setupPopup(
  'openPopupNebula',
  'popupNebula',
  'closePopupNebula'
);

setupPopup(
  'openPopupBacteria',
  'popupBacteria',
  'closePopupBacteria'
);

setupPopup(
  'openPopupLove',
  'popupLove',
  'closePopupLove'
);

setupPopup(
  'openPopupAnt',
  'popupAnt',
  'closePopupAnt'
);
