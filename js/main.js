function getELE(id) {
  return document.getElementById(id);
}
$('.caroseul-main').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
$('.carousel-list-car').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar")[0].style.top = "0";
  } else {
    document.getElementsByClassName("navbar")[0].style.top = "-115px";
  }
  prevScrollpos = currentScrollPos;
}

getELE("vehicles").addEventListener("click", function () {
  getELE("dropdown-content").style.display = "block";
})
getELE("btnClose").addEventListener("click", function () {
  getELE("dropdown-content").style.display = "none";
})

function noScroll() {
  window.scrollTo(0, 0);
}

function ScrollforCarousel() {
  window.scrollTo(2125, 0);
}
$(document).ready(function () {

  $(".hamburger-icon").click(function (event) {
    event.preventDefault();
    $(".menu-overlay").toggleClass("open");
    $(".menu").toggleClass("open");
  });

});

getELE("navbar-active-button").addEventListener("click", function () {
  getELE("show-navbar-item4").style.display = "block";
});
getELE("btnclose-bottom").addEventListener("click", function () {
  getELE("show-navbar-item4").style.display = "none";
});
getELE("vehicle").addEventListener("click", function () {
  getELE("one-content").style.display = "none";
  getELE("two-content").style.display = "block";
  getELE("overlay-menu-one").style.backgroundColor = "white";
  getELE("overlay-menu-one").style.height = "2325px";
  getELE("overlay-menu-one").addEventListener("scroll", ScrollforCarousel)
  getELE("navbar-rs--menulink").style.backgroundColor = "black";
});
getELE("btn--return").addEventListener("click", function () {
  getELE("one-content").style.display = "block";
  getELE("two-content").style.display = "none";
  getELE("overlay-menu-one").style.backgroundColor = "black";

});