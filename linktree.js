const cards = document.querySelectorAll('.content-card');
const standImages = document.querySelectorAll('.stand-rotator img');

function showSection(targetId) {
  cards.forEach((card) => card.classList.toggle('is-active', card.id === targetId));
}

function rotateStand(view) {
  standImages.forEach((img) => {
    img.classList.toggle('is-visible', img.dataset.view === view);
  });
}

document.querySelectorAll('[data-target]').forEach((button) => {
  button.addEventListener('click', () => {
    showSection(button.dataset.target);
    rotateStand(button.dataset.rotation || 'front');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
