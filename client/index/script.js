document.onscroll = _ => {
    if(window.scrollY < 850) {
        let val = window.scrollY / window.innerHeight * 50 - 10
        document.getElementsByClassName("top")[0].style.top = val + "vh";
    }
    if(window.scrollY < 350) {
        let val = Math.min(window.scrollY / window.innerHeight * 250 - 80, 0);
        document.getElementsByClassName("navigation")[0].style.top = val + "px";
    }
}

window.onload = _ => window.scrollTo(0, 0);