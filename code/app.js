// function toggle_theme() {
//     let theme = document.getElementsByTagName('link')[0];
//     let themeBtn = document.getElementById("themeBtn");
//     const path = "../styles/"
//     const fname1 = "base.css"
//     const fname2 = "KAOSZ.css"

//     if (theme.getAttribute("href") == path + fname1) {
//         theme.setAttribute("href", path + fname2);
//         themeBtn.setAttribute("value", "Normál");
//     } else {
//         theme.setAttribute("href", path + fname1);
//         themeBtn.setAttribute("value", "Káosz mód");
//     }
// }


//TÉMAVÁLTÁS
const path = "../styles/";
const link = document.getElementById("theme_link");

const toggle_theme = (name) => {
    let fname = path + name + '.css';

    console.log(fname)
    if (link.getAttribute("href") == fname) {
        link.setAttribute("href", "");
    } else {
        link.setAttribute("href", fname);
    }
}


//SLIDES
let active_index = 0;
const SLIDES = document.getElementsByClassName("slide");

const prev_slide = () => {
    let prev_index = active_index - 1 >= 0 ? active_index - 1 : SLIDES.length - 1;

    let current_slide = SLIDES[active_index];
    let prev_slide = SLIDES[prev_index];

    current_slide.dataset.status = "after";
    prev_slide.dataset.status = "before-to-active";

    setTimeout(() => {
        prev_slide.dataset.status = "active";
        active_index = prev_index;
    });
}

const next_slide = () => {
    let next_index = active_index + 1 <= SLIDES.length - 1 ? active_index + 1 : 0;

    let current_slide = SLIDES[active_index];
    let next_slide = SLIDES[next_index];

    current_slide.dataset.status = "before";
    next_slide.dataset.status = "after-to-active";

    setTimeout(() => {
        next_slide.dataset.status = "active";
        active_index = next_index;
    });
}


//LENYÍLÓ NAV
const nav = document.getElementsByTagName("nav")[0];
const toggle_nav = () => {
    if (nav.dataset.state == "closed") {
        nav.dataset.state = "open";
    } else if (nav.dataset.state == "open") {
        nav.dataset.state = "closed";
    }
}


//CERBERUS
const cerberus = () => {
    let hearts = document.getElementsByClassName("heart");

    Array.from(hearts).forEach((heart) => {
        heart.classList.add("heart-animation");
    });

    setInterval(function() {
        Array.from(hearts).forEach((heart) => {
            heart.classList.remove("heart-animation");
        });
    }, 2900);
};