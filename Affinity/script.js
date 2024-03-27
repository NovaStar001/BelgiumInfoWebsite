document.addEventListener('DOMContentLoaded', () => {
  const animatedBoxes = document.querySelectorAll('.animated-box');

  window.addEventListener('scroll', () => {
    animatedBoxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (boxTop < windowHeight * 0.8) {
        box.classList.add('animated');
      }
    });
  });
});
