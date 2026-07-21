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
