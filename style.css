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



/* CEREUS */
setupPopup(
  'openPopup',
  'popup',
  'closePopup'
);


/* OPUNTIA */
setupPopup(
  'openPopupOpuntia',
  'popupOpuntia',
  'closePopupOpuntia'
);


/* GREEN FLUP */
setupPopup(
  'openPopupFlup',
  'popupFlup',
  'closePopupFlup'
);


/* CALCITE */
setupPopup(
  'openPopupCalcite',
  'popupCalcite',
  'closePopupCalcite'
);


/* NEBULA */
setupPopup(
  'openPopupNebula',
  'popupNebula',
  'closePopupNebula'
);


/* BACTERIA */
setupPopup(
  'openPopupBacteria',
  'popupBacteria',
  'closePopupBacteria'
);
