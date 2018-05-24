const video = document.querySelector('.viewer');
const sliders = document.querySelectorAll('.player__slider');
const toggle = document.querySelector('.player__button');
const skipButtons = document.querySelectorAll('[data-skip]');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  updateToggleButton();
}

function updateToggleButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function changeSliderHandle() {
  property = this.name;
  newVal = this.value;

  video[property] = newVal;
}

function skip() {
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const touched = e.offsetX;
  const newTime = (touched / this.offsetWidth) * video.duration;
  video.currentTime = newTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

sliders.forEach(slider => slider.addEventListener('change', changeSliderHandle));
sliders.forEach(slider => slider.addEventListener('mousemove', changeSliderHandle));

skipButtons.forEach(button => button.addEventListener('click', skip));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
