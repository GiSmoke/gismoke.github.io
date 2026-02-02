function loadProjectImages() {
  document.querySelectorAll('.project-media').forEach(container => {
    if (container.dataset.loaded) return;

    const path = container.dataset.path;
    if (!path) return;

    container.dataset.loaded = 'true';

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
}

/* retry finché i project non sono caricati */
const interval = setInterval(() => {
  if (document.querySelector('.project-media')) {
    loadProjectImages();
    clearInterval(interval);
  }
}, 100);
