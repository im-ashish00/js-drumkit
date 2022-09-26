console.log('%cHello there, play with me.. 🥁', 'font-size: 13px; color:#999');

document.addEventListener('keydown', (e) => {
  const pressedKey = document.querySelector(
    `.key[data-key="${e.key.toUpperCase()}"`
  );
  const audio = document.querySelector(
    `audio[data-key="${e.key.toUpperCase()}"`
  );
  if (pressedKey == null) return; // won't execute if key isn't there.
  pressedKey.classList.add('playing');
  audio.currentTime = 0; // before firing the event making audio restart.
  audio.play(); // playing the audio.
});

// Removing the class on transitionend
const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return; // only works for transform
    key.classList.remove('playing');
  });
});
