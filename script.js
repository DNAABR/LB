// Play sound effect on logo hover
function playSound() {
    const audio = new Audio('click-sound.mp3');
    audio.play();
  }
  
  // Add hints for microinteractions
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseclick', () => {
      alert('Click me to get started!');
    });
  });
  
  // Slide-in animation for cards
  document.querySelectorAll('.card').forEach((card, index) => {
    setTimeout(() => {
      card.style.animation = 'slideIn 1s forwards';
    }, index * 300);
  });