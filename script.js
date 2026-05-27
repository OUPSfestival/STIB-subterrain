// HOVER EFFECT
document.querySelectorAll('.result-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px)';
  });
});


// POPUP SYSTEM
function setupPopup(openId, popupId, closeId){

  const open = document.getElementById(openId);
  const popup = document.getElementById(popupId);
  const close = document.getElementById(closeId);

  if(!open || !popup || !close) return;

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


// POPUPS INIT
setupPopup('openPopupHuman', 'popupHuman', 'closePopupHuman');
setupPopup('openPopupAlien', 'popupAlien', 'closePopupAlien');


// SEARCH
const searchInput = document.getElementById('searchInput');

if(searchInput){
  searchInput.addEventListener('keyup', () => {

    const value = searchInput.value.toLowerCase();

    document.querySelectorAll('.result-card').forEach(card => {
      const searchable = card.dataset.search || '';
      card.style.display = searchable.includes(value) ? 'block' : 'none';
    });

  });
}
