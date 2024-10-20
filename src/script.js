const lineElement = document.querySelector('[data-line]');
const nextButton = document.querySelector('[data-next]');
const prevButton = document.querySelector('[data-prev]');
const progressBars = document.querySelectorAll('.progress-bar');
let idx =0;
nextButton.addEventListener('click',()=>{
    const currWidth = lineElement.computedStyleMap().get('width').value;
    if(currWidth+25 >= 110) return;
    idx++;
    progressBars[idx].style.backgroundColor = '#05ffc3';
    lineElement.style.width = `${currWidth+25}%`;
})