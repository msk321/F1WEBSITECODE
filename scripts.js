document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("header nav ul li a");
    const scrollDown = document.querySelector(".scroll-down");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            if (link.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                document.querySelector(link.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    if (scrollDown) {
        scrollDown.addEventListener("click", function() {
            document.querySelector("#about").scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});
