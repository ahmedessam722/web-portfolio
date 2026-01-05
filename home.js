let icon = document.querySelector('.menu-icon')
let list = document.querySelector('.list')

icon.addEventListener('click',()=>{
    icon.classList.toggle('new');
    list.classList.toggle('add')
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 6,   
  spaceBetween: 10,  
  slidesPerGroup: 1, 
  loop: true,
  grabCursor: true,   
  freeMode: true, 
  breakpoints: {
    320: {   
      slidesPerView: 1,
      spaceBetween: 5,
    },
    480: {   
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {   
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {  
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {  
      slidesPerView: 6,
      spaceBetween: 10,
    },
  }
});