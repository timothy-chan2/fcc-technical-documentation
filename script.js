/*To make the menu disappear when scrolling down*/

let lastScrollTop = 0;

window.addEventListener("scroll", () => {  
  if (window.innerWidth < 1000) {
    let st = window.pageYOffset || document.documentElement.scrollTop;  
    if (st > lastScrollTop){
      document.getElementById("navbar").style.top = "-100%";
    } else {
      document.getElementById("navbar").style.top = "0";
    }
    lastScrollTop = st;
}});

/* To prevent navbar from disappearing when it's retracted and window resized to big window view */

const expand = () => {
  if (window.innerWidth > 1000) {
    if (document.getElementById("navbar").style.top === "-100%") {
      document.getElementById("navbar").style.top = "0"; 
    }
  } 
}

window.addEventListener("resize", expand);