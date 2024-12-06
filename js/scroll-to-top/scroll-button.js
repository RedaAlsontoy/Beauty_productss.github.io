
let scrollButton = document.createElement("span");
let scrollButtoni = document.createElement("span");
let scrollButtonText = document.createTextNode(`^`);

scrollButton.id = "scrollTop";
scrollButton.setAttribute("title", "for top");
scrollButton.appendChild(scrollButtonText);
scrollButton.appendChild(scrollButtoni);
document.body.appendChild(scrollButton);

scrollButton.onclick = function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
window.onscroll = function () {
    if (window.scrollY >= (2000)) {
        scrollButton.style.display = 'flex';
    } else {
        scrollButton.style.display = 'none';
    }
}