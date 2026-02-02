document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-media').forEach(container => {
    const path = container.dataset.path;
    if (!path) return;

    const MAX = 40;

    for (let i = 1; i <= MAX; i++) {
      const num = String(i).padStart(2, '0');
      const img = new Image();
      img.src = `${path}/${num}.jpg`;

      img.onload = () => {
        img.className = 'project-image';
        container.appendChild(img);
      };
    }
  });
});
