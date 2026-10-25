const track = document.querySelector('.slider-track');
if (track) {
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    track.style.cursor = 'grabbing';
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = x - startX;
    track.scrollLeft = scrollLeft - walk;
  });

  document.addEventListener('mouseleave', () => {
    isDragging = false;
    track.style.cursor = 'grab';
  });
}
