const nav = document.getElementById("nav-bar");
const arrowEl = document.getElementById("arrow-up");

window.addEventListener('scroll', ()=> {

    if(window.scrollY >= 50){  //For nav bar
        nav.classList.add('active-nav');
    } else{
        nav.classList.remove('active-nav');
    }

    if(window.scrollY >= 300){  //For up arrow
        arrowEl.style.opacity = "1";
    }
    else{
        arrowEl.style.opacity = "0";
    }
});
