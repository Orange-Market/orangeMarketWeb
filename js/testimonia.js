const slider = document.querySelector('.slider-const');

const leftArrow = document.querySelector('#left');

const rightArrow = document.querySelector('#right');

var sectionIndex = 0;
leftArrow.addEventListener('click', function(){
    sectionIndex =(sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -33.3 + '%)';
    // if(sectionIndex == 0){
    //     leftArrow.style.backgroundcolor = "#FF9C41";
    // }else{
    //     leftArrow.style.backgroundcolor = "lightgray";
    // }
});
var sectionIndex = 0;
rightArrow.addEventListener('click', function(){
    sectionIndex =(sectionIndex < 2) ? sectionIndex + 1 : 2;
    slider.style.transform = 'translate(' + (sectionIndex) * -33.3 + '%)';
});