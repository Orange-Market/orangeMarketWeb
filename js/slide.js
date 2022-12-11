// const slideContainer = document.querySelector('.scontainer');
// const slide = document.querySelector('.slides');
// const interval = 3000;

// let slides = document.querySelectorAll('.slide');
// let index = 1;
// let slideId;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

// slide.append(firstClone);
// slide.prepend(lastClone);

// const slideWidth = slides[index].clientWidth;

// slide.style.transform = `translateX(${-slideWidth * index}px)`;

// const startSlide = ()=>{
//     slideId = setInterval(() =>{
//         index++;
//         slide.style.transform = `translateX(${-slideWidth * index}px)`;
//         slide.style.transition = '.7s';
//     },interval);
// }
// slide.addEventListener('transitionend', ()=> {
//     slides = document.querySelectorAll('.slide');
//     if (slides[index].id === firstClone.id) {
//         slide.style.transition = 'none';
//         index = 1;
//         slide.style.transform = `translateX(${-slideWidth * index}px)`;
//     }
// })
// slideContainer.addEventListener('mouseenter',()=>{
//     clearInterval(slideId);
// })
// slideContainer.addEventListener('mouseleave', startSlide);

// startSlide();
//"use strict";

// function carousel(){
//     let carouselSlider = document.querySelector(".carousel__slide");
//     let list = document.querySelector(".carousel__list");
//     let item = document.querySelectorAll(".carousel__item");
//     let list2;


//     const speed = 1;
//     const width = list.offsetWidth;
//     let x = 0;
//     let x2 = width;

//     function clone() {
//         list2 = list.cloneNode(true);
//         carouselSlider.appendChild(list2);
//         list2.style.left = `${width}px`;
//     }

//     function moveFirst(){
//         x2 -= speed;
//         if(width >= Math.abs(x)) {
//             list.style.left = `${x}px`;
//         }else{
//             x = width;
//         }
//     }
//     function moveSecond(){
//         x2 -= speed;
//         if(list2.offsetWidth >= Math.abs(x2)){
//             list2.style.left = `${x2}px`;
//         }else{
//             x2 = width;
//         }
//     }
//     function hover(){
//         clearInterval(a);
//         clearInterval(b);
//     }
//     function unhover(){
//         clearInterval(moveFirst, 10);
//         clearInterval(moveSecond, 10);

//     }

//     clone();

//     let a = setInterval(moveFirst, 10);
//     let b = setInterval(moveSecond, 10);
// }

// carousel();