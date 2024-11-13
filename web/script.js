let ViewMode;

console.log(sessionStorage.getItem("ViewMode"))

if (sessionStorage.getItem("ViewMode") == null) {
   ViewMode = 0

} else {
   ViewMode = parseInt(sessionStorage.getItem("ViewMode"));
}


const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const overlayMenu = document.querySelector(".overlay");
const btnHero = document.querySelector(".btn-hero");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 992) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
         overlayMenu.classList.remove("is-active");
      }
   }
});



// Dark and Light Mode on Switch Click

document.addEventListener("DOMContentLoaded", () => {
   const darkSwitch = document.getElementById("switch");
   const timeline = document.getElementById("timeline");
   const btnCloses = document.querySelectorAll(".btn-close");
   const modalContents = document.querySelectorAll(".modal-content");

   if (ViewMode == 1) {
      document.documentElement.classList.toggle("darkmode");
      document.body.classList.toggle("darkmode");

      modalContents.forEach(modal => {
         modal.style.backgroundColor = "#0b1423";
      })

      btnCloses.forEach(btn => {
         btn.classList.add("btn-close-white")
      });
   } else {
      modalContents.forEach(modal => {
         modal.style.backgroundColor = "#fff";
      })
   }

   darkSwitch.addEventListener("click", () => {

      if (ViewMode == 0) {
         ViewMode = 1;
         sessionStorage.setItem("ViewMode", ViewMode);
      } else {
         ViewMode = 0;
         sessionStorage.setItem("ViewMode", ViewMode);
      }

      document.documentElement.classList.toggle("darkmode");

      btnCloses.forEach(btn => {
         btn.classList.add("btn-close-white")
      });

      document.body.classList.toggle("darkmode");
      //timeline.classList.toggle("text-white");
   });
});

//Cooike

function checkCookieConsent() {
   if (localStorage.getItem('cookieConsent') !== 'accepted') {
       const popup = document.getElementById('cookie-popup');
       popup.style.display = 'flex';
       setTimeout(() => {
           popup.style.opacity = '1';
           popup.style.transform = 'translateY(0)';
       }, 1);
   }
}

function acceptCookies() {
   localStorage.setItem('cookieConsent', 'accepted');
   const popup = document.getElementById('cookie-popup');
   popup.style.opacity = '0';
   popup.style.transform = 'translateY(20px)';
   setTimeout(() => {
       popup.style.display = 'none';
   }, 1);
}

window.onload = checkCookieConsent;