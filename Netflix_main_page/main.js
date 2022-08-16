let searchBtn = document.querySelector(".searchBar button")
let myNav = document.getElementById('myNav');

//navBar change background color when scrolling start//
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav");
    } 
    else {
        myNav.classList.add("nav");
        myNav.classList.remove("nav-colored");
    }
};

function toggleSearch() {
   let searchBar = document.getElementById("search");
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "block";
    }
    console.log("worked!")
}

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 5,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });