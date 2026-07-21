const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-up").forEach((el) => {
    observer.observe(el);
});
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkBtn.innerHTML = "☀️ Light Mode";
    }else{
        darkBtn.innerHTML = "🌙 Dark Mode";
    }
});
window.addEventListener("load", function(){

    document.getElementById("loader").style.display="none";

});
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function changeTitle() {
    document.getElementById("mainTitle").innerHTML =
    "🚀 Welcome to NovaNest Technologies";
}
function changeColor() {
    document.body.style.backgroundColor = "#dbeafe";
    document.getElementById("mainTitle").style.color = "#2563eb";
}
