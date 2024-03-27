document.addEventListener('DOMContentLoaded', () => {
  const shapes = document.querySelectorAll('.shape');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    shapes.forEach((shape, index) => {
      const translateY = (scrollY / (index + 1)) + 'px';
      shape.style.transform = `translateY(${translateY})`;
    });
  });
});
