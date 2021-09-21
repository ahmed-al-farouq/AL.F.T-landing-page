/*Start vanbar*/
let  navbar = document.getElementById("navbar");

document.addEventListener('scroll', () => {
    if(window.pageYOffset >= 120){
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }else{
        navbar.style.backgroundColor = "rgb(0, 0, 0)";
    }
});


/*Start tabs*/
let tab1     = document.getElementById("tab1");
let tab2     = document.getElementById("tab2");
let tab3     = document.getElementById("tab3");
let tab1Text = document.getElementById("tab1-text");
let tab2Text = document.getElementById("tab2-text");
let tab3Text = document.getElementById("tab3-text");

tab1.addEventListener('click', () => {
    tab1.classList.add("active");
    tab2.classList.remove("active");
    tab3.classList.remove("active");
    tab1Text.classList.remove("d-none");
    tab2Text.classList.add("d-none");
    tab3Text.classList.add("d-none");
});

tab2.addEventListener('click', () => {
    tab2.classList.add("active");
    tab1.classList.remove("active");
    tab3.classList.remove("active");
    tab1Text.classList.add("d-none");
    tab3Text.classList.add("d-none");
    tab2Text.classList.remove("d-none");
});

tab3.addEventListener('click', () => {
    tab3.classList.add("active");
    tab2.classList.remove("active");
    tab1.classList.remove("active");
    tab3Text.classList.remove("d-none");
    tab2Text.classList.add("d-none");
    tab1Text.classList.add("d-none");
});

/*Start Scroll Up*/
let  scrollUp = document.getElementById("up");

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 1000){
        scrollUp.classList.remove("d-none");
    } else {
        scrollUp.classList.add("d-none");
    }
});

scrollUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
});