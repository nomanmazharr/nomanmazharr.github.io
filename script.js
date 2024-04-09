document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('nav ul li a');

    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });
});
