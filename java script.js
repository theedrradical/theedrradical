const sprite = document.querySelector('.sprite');
const frames = parseInt(sprite.dataset.frames, 10);

sprite.style.setProperty('--frames', frames);
sprite.style.backgroundSize = `${frames * 100}% auto`;

// Hover for desktop
sprite.addEventListener('mouseenter', () => {
  sprite.classList.add('animate');
});
sprite.addEventListener('mouseleave', () => {
  sprite.classList.remove('animate');
});

// Tap for mobile
sprite.addEventListener('click', () => {
  sprite.classList.toggle('animate');
});
<script src="https://player.vimeo.com/api/player.js"></script>
<script>
  function playVideo() {
    // Hide the custom thumbnail
    document.querySelector('.custom-thumbnail').classList.add('hidden');
    // Show and play the video
    document.getElementById('vimeo-embed').classList.add('active');
  }
</script>