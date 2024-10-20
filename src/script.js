const lineElement = document.querySelector('[data-line]');
const nextButton = document.querySelector('[data-next]');
const prevButton = document.querySelector('[data-prev]');
const progressBars = document.querySelectorAll('.progress-bar');
nextButton.addEventListener('click',()=>{
    const currWidth = lineElement.computedStyleMap().get('width').value;
    console.log(currWidth)
    if(currWidth+25 >= 110) return
    lineElement.style.width = `${currWidth+25}%`;
})