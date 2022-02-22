/*!
* Start Bootstrap - Modern Business v5.0.5 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/

// date in top left
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];       
var today = new Date();
today.setTime(today.getTime());       
document.getElementById("spanDate").innerHTML = months[today.getMonth()] + " " + today.getDate()+ ", " + today.getFullYear();
document.getElementById("spanDateClone").innerHTML = months[today.getMonth()] + " " + today.getDate()+ ", " + today.getFullYear();

// header dis/appear code
if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
  let observer = new IntersectionObserver(entries => {
    if (entries[0].boundingClientRect.y < 0) {
      document.getElementById("nav-bar").classList.add("sticky-top");
      document.getElementById("nav-bar").classList.add("shadow-sm");
      document.getElementById("scroll-appear-title").classList.add("d-block");
      document.getElementById("scroll-appear-title").classList.remove("d-none");  
        
    } else {
      document.getElementById("nav-bar").classList.remove("sticky-top");
      document.getElementById("nav-bar").classList.remove("shadow-sm");
      document.getElementById("scroll-appear-title").classList.remove("d-block");    
      document.getElementById("scroll-appear-title").classList.add("d-none");    
    }
  });
  observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
}