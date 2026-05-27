const cards = document.querySelectorAll('.result-card');

cards.forEach(card => {

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
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

setupPopup(
  'openPopupHuman',
  'popupHuman',
  'closePopupHuman'
);

setupPopup(
  'openPopupCave',
  'popupCave',
  'closePopupCave'
);

setupPopup(
  'openPopupAlien',
  'popupAlien',
  'closePopupAlien'
);


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


const archiveGrid = document.querySelector('.archive-results-grid');

const cardsArray = Array.from(archiveGrid.children);

cardsArray.sort(() => Math.random() - 0.5);

cardsArray.forEach(card => {
  archiveGrid.appendChild(card);
});
