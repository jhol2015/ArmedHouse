$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(" .navbar ").addClass("sticky");
        } else {
            $(" .navbar ").removeClass("sticky");
        }
    });
    // Toggle Menu/NavBar Script
    $(" .menu-btn").click(function () {
        $(" .navbar .menu").toggleClass("active");
        $(" .menu-btn i").toggleClass("active");
    });

    /* Typing Animation Script */
    var typed = new Typed(".typing", {
        strings: ["Assessoria Armamentista", "Consultoria"],
        typeSpeed: 130,
        backSpeed: 80,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["House", "and safe"],
        typeSpeed: 130,
        backSpeed: 80,
        loop: true
    });
    /* End Typing Animation Script */
});
