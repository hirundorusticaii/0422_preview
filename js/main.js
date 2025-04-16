document.addEventListener("DOMContentLoaded", function () {
    const pagetopButton = document.querySelector(".arrow-button");

    window.addEventListener("scroll", function () {
        const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            pagetopButton.style.opacity = "1";
            pagetopButton.style.pointerEvents = "auto"; 
        } else {
            pagetopButton.style.opacity = "0";
            pagetopButton.style.pointerEvents = "none"; 
        }
    });

    pagetopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});