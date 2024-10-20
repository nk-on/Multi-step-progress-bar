const lineElement = document.querySelector('[data-line]');
const nextButton = document.querySelector('[data-next]');
const prevButton = document.querySelector('[data-prev]');
const progressBars = document.querySelectorAll('.progress-bar');
function increaseProgressLine() {
  let idx = 0;
  return () => {
    const currWidth = lineElement.computedStyleMap().get('width').value;
    if (idx === progressBars.length - 1){
        idx = 0;
        return;
    }
    idx++;
    progressBars[idx].style.backgroundColor = '#05ffc3';
    lineElement.style.width = `${currWidth + 25}%`;
  };
}
function decreaseProgressLine() {
  let idx = progressBars.length - 1;
  return () => {
    const currWidth = lineElement.computedStyleMap().get('width').value;
    if (idx === 0) {
      idx = progressBars.length - 1;
      return;
    }
    progressBars[idx].style.backgroundColor = '#fff';
    idx--;
    lineElement.style.width = `${currWidth - 25}%`;
  };
}
const increaseProgress = increaseProgressLine();
const decreaseProgress = decreaseProgressLine();
nextButton.addEventListener('click', () => {
  increaseProgress();
});
prevButton.addEventListener('click', () => {
  decreaseProgress();
});
