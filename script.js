/* SEARCH */

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cards = document.querySelectorAll('.result-card');

function runSearch(){

  const value = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {

    const searchable = card.dataset.search.toLowerCase();

    if(searchable.includes(value) || value === ''){
      card.style.display = 'block';
    }
    else{
      card.style.display = 'none';
    }

  });

}

searchInput.addEventListener('input', runSearch);
searchButton.addEventListener('click', runSearch);


/* RANDOM GRID ORDER */

const archiveGrid = document.querySelector('.archive-results-grid');
const cardsArray = Array.from(archiveGrid.children);

cardsArray.sort(() => Math.random() - 0.5);

cardsArray.forEach(card => {
  archiveGrid.appendChild(card);
});


/* POPUP SYSTEM */

const popupCards = document.querySelectorAll('.result-card');
const allPopups = document.querySelectorAll('.popup-overlay');

popupCards.forEach(card => {

  card.addEventListener('click', () => {

    const popupId = card.dataset.popup;
    const popup = document.getElementById(popupId);

    if(popup){
      popup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

  });

});


allPopups.forEach(popup => {

  const closeButton = popup.querySelector('.close-popup');

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  });


  popup.addEventListener('click', (e) => {

    if(e.target === popup){
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

  });

});


/* ESC KEY CLOSE */

window.addEventListener('keydown', (e) => {

  if(e.key === 'Escape'){

    allPopups.forEach(popup => {
      popup.style.display = 'none';
    });

    imageViewer.style.display = 'none';

    document.body.style.overflow = 'auto';
  }

});


/* FULLSCREEN IMAGE VIEWER */

const imageViewer = document.getElementById('imageViewer');
const imageViewerImg = document.getElementById('imageViewerImg');

const popupImages = document.querySelectorAll('.popup-image img');

popupImages.forEach(img => {

  img.addEventListener('click', () => {

    imageViewer.style.display = 'flex';
    imageViewerImg.src = img.src;

  });

});


imageViewer.addEventListener('click', () => {
  imageViewer.style.display = 'none';
});
```

