const arrowEl = document.getElementById("arrow-up");

        window.addEventListener('scroll', ()=> {
            if(window.scrollY >= 400){
                arrowEl.style.opacity = "1";
            }
            else{
                arrowEl.style.opacity = "0";
            }
        });