let searchBtn = document.querySelector(".searchBar button")

function toggleSearch() {
    var searchBar = document.getElementById("search");
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
    slidesPerGroup: 5.5,
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