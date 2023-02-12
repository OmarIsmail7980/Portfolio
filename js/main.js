// Menu show&hide
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
//remove menu when clicked
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLinks.forEach((link) => link.addEventListener("click", linkAction));

// swiper
const swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
});

//change header backkground

const changeColor = () => {
  const header = document.getElementById("header");
  const scrollY = window.pageYOffset;
  if (scrollY) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};
window.addEventListener("scroll", changeColor);

// Dark light theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(darkTheme) ? "uil-moon" : "uil-sun";

if(selectedTheme){
    document.body.classList[selectedTheme==='dark' ? "add":"remove"](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? "add":"remove"](iconTheme);
}

themeButton.addEventListener("click",()=>{
    //add/remove dark theme & icon
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // save theme to localStorage
    localStorage.setItem("selected-theme",getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})


// send Email
function sendEmail(){
  console.log("hello")
  let params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_f8bvcaj", "template_te9tsg2", params)
    .then((message) => {
      alert("Message sent Succesfully!");
      console.log(message);
    })
    .catch((e) => {
      console.log(e);
    });
}

// const submitBtn = document.getElementById("submitForm");
// submitBtn.addEventListener("click", sendEmail);
