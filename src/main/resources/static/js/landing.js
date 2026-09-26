/* =========================================
   CAREPOINT LANDING PAGE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {
            navbar.style.boxShadow =
                "0 8px 30px rgba(20, 70, 110, 0.08)";
        } else {
            navbar.style.boxShadow = "none";
        }

    });


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       REVEAL ANIMATION
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".service-card, .stat, .section-heading, .cta"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


    /* =========================================
       BUTTON CLICK FEEDBACK
    ========================================= */

    const buttons = document.querySelectorAll(
        ".primary-btn, .secondary-btn, .register-btn, .cta-button"
    );

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(.97)";

            setTimeout(function () {
                button.style.transform = "";
            }, 120);

        });

    });

});