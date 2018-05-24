const videoFile = document.querySelector('.player__video');

const slider = document.querySelectorAll('.player__slider');
const volumeSlider = slider[0];
const speedSlider = slider[1];

const playerButtons = document.querySelectorAll('.player__button');
const playPause = playerButtons[0];
const timerBack = playerButtons[1];
const timerForw = playerButtons[2];


function toggleVideo() {
  const videoClasses = [...videoFile.classList];
  if (!videoClasses.includes('playing')) {
    videoFile.play();
    videoFile.classList.add('playing');
  } else {
    videoFile.pause();
    videoFile.classList.remove('playing');
  }
  // console.log(videoFile.currentTime);
}

function changeVolume(e) {
  newVolume = e.target.value;
  videoFile.volume = newVolume;
  // console.log(videoFile.volume);
}

// function timerButtonsChange(e) {
//   const timeChange = e.target.dataset.skip;
//   const actualTime = videoFile.currentTime;

//   let newTime = actualTime + timeChange;
//   // if (actualTime < 5 && timeChange == -5) {
//   //   newTime = 0;
//   // }

//   videoFile.currentTime = newTime;
//   console.log(timeChange);
// }

videoFile.addEventListener('click', toggleVideo);
playPause.addEventListener('click', toggleVideo);

volumeSlider.addEventListener('change', changeVolume);
volumeSlider.addEventListener('mouseover', changeVolume);

// timerBack.addEventListener('click', timerButtonsChange);
// timerForw.addEventListener('click', timerButtonsChange);
// console.dir(videoFile);