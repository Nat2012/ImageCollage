function fullScreen(idName) {
    elem = document.getElementById(idName);
    container = document.getElementsByClassName("fullScreen");
    container[0].style.visibility = "visible";
    container[0].appendChild(elem)
    elem.style.zIndex == 15;
    elem.style.opacity == 1;
    elem.style.width = "1250px";
    elem.style.height = "1250px";
    elem.classList.add("expand");
}

function reset() {
    location.reload()
}