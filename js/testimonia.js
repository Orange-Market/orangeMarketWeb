const slider = document.querySelector('.slider-const');

const leftArrow = document.querySelector('#left');

const rightArrow = document.querySelector('#right');

var sectionIndex = 0;
// leftArrow.style.backgroundColor = "#ffffff";
// leftArrow.style.Color = "lightgray";
leftArrow.addEventListener('click', function(){
    sectionIndex =(sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -33.3 + '%)';
        if(sectionIndex == 0){
            // rightArrow.style.backgroundColor = "#fffff";
            // rightArrow.style.Color = "lightgray";
    }else{
    // leftArrow.style.backgroundColor = "#BE3717";
    // leftArrow.style.Color = "#ffffff"
    }
});
var sectionIndex = 0;
rightArrow.addEventListener('click', function(){
    sectionIndex =(sectionIndex < 2) ? sectionIndex + 1 : 2;
    slider.style.transform = 'translate(' + (sectionIndex) * -33.3 + '%)';
});