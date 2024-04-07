const timeSlider = document.getElementById('timeSlider');
const timeLabel = document.getElementById('timeLabel');
const torontoImageDay = document.getElementById('torontoImageDay');
const torontoImageNight = document.getElementById('torontoImageNight');

timeSlider.addEventListener('input', () => {
  const minutes = parseInt(timeSlider.value);
  updateTimeLabel(minutes);
  updateImage(minutes);
});

function updateTimeLabel(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMins = mins.toString().padStart(2, '0');
  timeLabel.textContent = `Time: ${formattedHours}:${formattedMins} ${period}`;
}

function updateImage(minutes) {
  if (minutes >= 920 && minutes < 940) {
    // During solar eclipse
    torontoImageDay.style.opacity = 0;
    torontoImageNight.style.opacity = 1;
  } else if (minutes >= 1200 || minutes < 360) {
    // Nighttime
    torontoImageDay.style.opacity = 0;
    torontoImageNight.style.opacity = 1;
  } else {
    // Daytime
    torontoImageDay.style.opacity = 1;
    torontoImageNight.style.opacity = 0;
  }
}
