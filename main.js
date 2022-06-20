let menuBar = document.getElementById("menu_underline");
let menuBarList = document.querySelectorAll("nav:first-child a");

function horizontalIndicator2(e) {
    //console.log(e.offsetLeft + ", " + e.offsetWidth +", " + e.offsetTop + ",  " + e.offsetHeight + ", hello world");
    menuBar.style.left = e.offsetLeft + "px";
    menuBar.style.width = e.offsetWidth + "px";
    menuBar.style.top = e.offsetTop + e.offsetHeight + "px";
}
  
menuBarList.forEach((menu) =>
menu.addEventListener("click", (e) => horizontalIndicator2(e.currentTarget))
);


//git remote add origin https://github.com/SeoyunBae/Project2022.git