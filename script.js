let searchForm = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick = ()=>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-icon').onclick = ()=>{
    shoppingCart.classList.toggle('active');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#user-icon').onclick = ()=>{
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

let navBar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()=>{
    navBar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = ()=>{
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    slidesPerView:1,
    spaceBetween: 20,
    autoplay:{
          delay:7500,
          disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
 
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    slidesPerView:1,
    spaceBetween: 20,
    autoplay:{
          delay:7500,
          disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
 
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });