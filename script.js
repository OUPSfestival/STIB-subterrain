const cards = document.querySelectorAll('.archive-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.borderColor = '#9d7177';
  });

  card.addEventListener('mouseleave', () => {
    card.style.borderColor = '#c9beb7';
  });
});

const voices = document.querySelectorAll('.voice-card');

voices.forEach((voice, index) => {
  voice.style.opacity = '0';
  voice.style.transform = 'translateY(20px)';

  setTimeout(() => {
    voice.style.transition = '0.6s ease';
    voice.style.opacity = '1';
    voice.style.transform = 'translateY(0px)';
  }, index * 150);
});
