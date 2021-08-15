

const navOpen = document.querySelector(".nav__hamburger");
const menu = document.querySelector(".header-max");

navOpen.addEventListener("click", () => {
  const navLeft = menu.getBoundingClientRect().left;

  if(navLeft < 0 ){
    menu.style.left = 0;
    document.body.classList.add("active");
  } else {
    menu.style.left = "-40rem";
    document.body.classList.remove("active");
  }
});




