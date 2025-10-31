const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const sliderScrollbar = document.querySelector(
    ".container .slider-scrollbar"
  );
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  const scrollAmount = imageList.clientWidth * 0.2; // scroll speed here

  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      let newPosition = imageList.scrollLeft + scrollAmount * direction;

      if (newPosition < 0) {
        newPosition = maxScrollLeft;
      } else if (newPosition > maxScrollLeft) {
        newPosition = 0;
      }

      imageList.scroll({
        left: newPosition,
        behavior: "smooth",
      });
    });
  });

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    // handleSlideButtons();
  });
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

// courses carousel

const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let counter = 0;
const slideWidth = images[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -slideWidth * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  counter++;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -slideWidth * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -slideWidth * counter + "px)";
});

const instSlider = () => {
  const imageList = document.querySelector(".inst-slider .inst-img-list");
  const slideButtons = document.querySelectorAll(".inst-slider-btn");
  const sliderScrollbar = document.querySelector(".inst-slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".inst-scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  const scrollAmount = imageList.clientWidth * 0.2; // scroll speed here

  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      let newPosition = imageList.scrollLeft + scrollAmount * direction;

      if (newPosition < 0) {
        newPosition = maxScrollLeft;
      } else if (newPosition > maxScrollLeft) {
        newPosition = 0;
      }

      imageList.scroll({
        left: newPosition,
        behavior: "smooth",
      });
    });
  });

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
  });
};

window.addEventListener("resize", instSlider);
window.addEventListener("load", instSlider);

// end instructors carousel

// handle courses list click

document.addEventListener("DOMContentLoaded", function () {
  const courses = document.querySelector(".courses");
  const coursesList = document.querySelector(".courses-list");
  const coursesListExtra = document.querySelector(".courses .before");
  document.addEventListener("click", function (event) {
    if (coursesList.style.display === "block" && event.target !== courses) {
      coursesList.style.display = "none";
      coursesListExtra.style.display = "none";
    }
  });

  courses.addEventListener("click", function (event) {
    event.stopPropagation();
    if (coursesList.style.display === "block") {
      coursesList.style.display = "none";
      coursesListExtra.style.display = "none";
    } else {
      coursesList.style.display = "block";
      coursesListExtra.style.display = "block";
    }
  });
});

// handle dark mode switcher

let darkSwitcher = document.querySelector(".dark-mode");
darkSwitcher.addEventListener("click", () => {
  if (darkSwitcher.classList.contains("dark")) {
    darkSwitcher.classList.remove("dark");
    darkSwitcher.classList.add("light");
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
    document.querySelector(".navBar").style.backgroundColor = "#fff";
    document.querySelector(".footer").style.backgroundColor = "#fff";
    document.querySelector(".courses-list").style.backgroundColor = "#eee";
    document.querySelector(".rights").style.backgroundColor = "#eee";
    document.querySelector(".courses .before").style.color = "#eee";
    var texts = document.querySelectorAll(".switch-color");
    texts.forEach(function (text) {
      text.style.color = "#000";
    });
    var cards = document.querySelectorAll(".colored-card");
    cards.forEach(function (card) {
      card.style.backgroundColor = "#fff";
      card.style.color = "#000";
    });
    var switchers = document.querySelectorAll(".switcher");
    switchers.forEach(function (switcher) {
      switcher.style.backgroundColor = "#fff";
      switcher.style.color = "#000";
    });
  } else if (darkSwitcher.classList.contains("light")) {
    darkSwitcher.classList.remove("light");
    darkSwitcher.classList.add("dark");
    document.getElementsByTagName("body")[0].style.backgroundColor = "";
    document.querySelector(".navBar").style.backgroundColor = "";
    document.querySelector(".footer").style.backgroundColor = "";
    document.querySelector(".courses-list").style.backgroundColor = "";
    document.querySelector(".rights").style.backgroundColor = "";
    document.querySelector(".courses .before").style.color = "";
    var texts = document.querySelectorAll(".switch-color");
    texts.forEach(function (text) {
      text.style.color = "";
    });
    var cards = document.querySelectorAll(".colored-card");
    cards.forEach(function (card) {
      card.style.backgroundColor = "";
      card.style.color = "";
    });
    var switchers = document.querySelectorAll(".switcher");
    switchers.forEach(function (switcher) {
      switcher.style.backgroundColor = "";
      switcher.style.color = "";
    });
  }
});

// handle search toggle icon

const toggleSearchIcon = document.querySelector(".toggle-search");
const toggleSearchLayer = document.querySelector(".search-layer");

toggleSearchLayer.addEventListener("click", () => {
  if (!event.target.closest(".toggle-group")) {
    toggleSearchLayer.style.display = "none";
    document.body.style.overflowY = "auto";
  }
});

toggleSearchIcon.addEventListener("click", () => {
  scrollToTop();
  toggleSearchLayer.style.display = "flex";
  document.body.style.overflowY = "hidden";
});

// handle toggle navbar layer

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

let toggleNavIcon = document.querySelector(".toggle-navbar");
toggleNavIcon.addEventListener("click", () => {
  scrollToTop();
  let navLayer = document.querySelector(".toggle-navbar-layer");
  navLayer.style.display = "flex";
  document.body.style.overflow = "hidden";
});

let navLayerExit = document.querySelector(".layer-close");
navLayerExit.addEventListener("click", () => {
  let navLayer = document.querySelector(".toggle-navbar-layer");
  navLayer.style.display = "none";
  document.body.style.overflow = "auto";
});

// handle login & signup popup

const loginButton = document.getElementById("loginButton");
const loginPopup = document.getElementById("loginPopup");
const signupButton = document.getElementById("signup-btn");
const signupPopup = document.getElementById("signupPopup");
const loginToggleButton = document.getElementById("login-toggle-btn");
const signupToggleButton = document.getElementById("signup-toggle-btn");
const layer = document.getElementById("layer");

// Disable scroll
function disableScroll() {
  // Get the current scroll position
  var scrollPosition = [
    self.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft,
    self.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop,
  ];
  // Keep the scroll position by setting the scroll to the current position
  var html = document.querySelector("html");
  html.style.overflow = "hidden";
  html.style.position = "fixed";
  html.style.top = "-" + scrollPosition[1] + "px";
}

// Enable scroll
function enableScroll() {
  var html = document.querySelector("html");
  html.style.overflow = "";
  html.style.position = "";
  html.style.top = "";
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

loginButton.addEventListener("click", function () {
  disableScroll();
  loginPopup.style.display = "block";
  layer.style.display = "block";
  document.body.style.overflow = "hidden";
});

signupButton.addEventListener("click", function () {
  disableScroll();
  signupPopup.style.display = "block";
  layer.style.display = "block";
  document.body.style.overflow = "hidden";
});

document.addEventListener("click", function (event) {
  enableScroll();
  if (!loginPopup.contains(event.target) && event.target !== loginButton) {
    loginPopup.style.display = "none";
    layer.style.display = "none";
    document.body.style.overflowY = "auto";
  }

  if (!signupPopup.contains(event.target) && event.target !== signupButton) {
    signupPopup.style.display = "none";
    layer.style.display = "none";
    document.body.style.overflowY = "auto";
  }
});
layer.addEventListener("click", () => {
  loginPopup.style.display = "none";
  signupPopup.style.display = "none";
  layer.style.display = "none";
  document.body.style.overflowY = "auto";
});

// handle login & sign up toggle btns

loginToggleButton.addEventListener("click", () => {
  let navLayer = document.querySelector(".toggle-navbar-layer");
  navLayer.style.display = "none";
  loginPopup.style.display = "block";
  layer.style.display = "block";
  document.body.style.overflow = "hidden";
  na;
});

signupToggleButton.addEventListener("click", function () {
  let navLayer = document.querySelector(".toggle-navbar-layer");
  navLayer.style.display = "none";
  signupPopup.style.display = "block";
  layer.style.display = "block";
  document.body.style.overflow = "hidden";
});

// handle toggle dark mode switcher

let toggleDarkSwitcher = document.getElementById("toggle-dark-mode");
toggleDarkSwitcher.addEventListener("click", () => {
  if (toggleDarkSwitcher.classList.contains("dark")) {
    toggleDarkSwitcher.classList.remove("dark");
    toggleDarkSwitcher.classList.add("light");
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
    document.querySelector(".navBar").style.backgroundColor = "#fff";
    document.querySelector(".footer").style.backgroundColor = "#fff";
    document.querySelector(".courses-list").style.backgroundColor = "#eee";
    document.querySelector(".rights").style.backgroundColor = "#eee";
    document.querySelector(".courses .before").style.color = "#eee";
    var texts = document.querySelectorAll(".switch-color");
    texts.forEach(function (text) {
      text.style.color = "#000";
    });
    var cards = document.querySelectorAll(".colored-card");
    cards.forEach(function (card) {
      card.style.backgroundColor = "#fff";
      card.style.color = "#000";
    });
    var switchers = document.querySelectorAll(".switcher");
    switchers.forEach(function (switcher) {
      switcher.style.backgroundColor = "#fff";
      switcher.style.color = "#000";
    });
  } else if (toggleDarkSwitcher.classList.contains("light")) {
    toggleDarkSwitcher.classList.remove("light");
    toggleDarkSwitcher.classList.add("dark");
    document.getElementsByTagName("body")[0].style.backgroundColor = "";
    document.querySelector(".navBar").style.backgroundColor = "";
    document.querySelector(".footer").style.backgroundColor = "";
    document.querySelector(".courses-list").style.backgroundColor = "";
    document.querySelector(".rights").style.backgroundColor = "";
    document.querySelector(".courses .before").style.color = "";
    var texts = document.querySelectorAll(".switch-color");
    texts.forEach(function (text) {
      text.style.color = "";
    });
    var cards = document.querySelectorAll(".colored-card");
    cards.forEach(function (card) {
      card.style.backgroundColor = "";
      card.style.color = "";
    });
    var switchers = document.querySelectorAll(".switcher");
    switchers.forEach(function (switcher) {
      switcher.style.backgroundColor = "";
      switcher.style.color = "";
    });
  }
});
