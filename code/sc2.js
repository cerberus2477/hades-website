var faj = "terran";
function theme(f) {
    document.getElementById("leiras").dataset.faj = f;
    document.getElementById("nav").dataset.faj = f;
    if (f == "terran") {
        document.body.style.backgroundImage = "linear-gradient(rgba(0 0 0 /0.2), var(--clr-1)), url('../pics/sc2/terran-bg.jpg')"
    } else if (f == "zerg") {
        document.body.style.backgroundImage = "linear-gradient(rgba(0 0 0 /0.2), var(--clr-1)), url('../pics/sc2/zerg-bg.png')"
    } else if (f == "protoss") {
        document.body.style.backgroundImage = "linear-gradient(rgba(0 0 0 /0.2), var(--clr-1)), url('../pics/sc2/protoss-bg.jpg')"
    }
    
}