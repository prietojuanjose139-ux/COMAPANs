
document.addEventListener("DOMContentLoaded", function () {

    // ACTUALIZAR EL AÑO DEL PIE DE PÁGINA
    const year = document.querySelector(".year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // MENÚ PARA CELULARES
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {

            const opened = nav.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(opened));
            menuToggle.textContent = opened ? "✕" : "☰";

        });
    }

    // FECHA MÍNIMA PARA RESERVAS
    const reserveDate = document.getElementById("reserveDate");

    if (reserveDate) {
        const now = new Date();

        const localDate = new Date(
            now.getTime() - now.getTimezoneOffset() * 60000
        ).toISOString().slice(0, 10);

        reserveDate.min = localDate;
    }

    // FORMULARIO DE RESERVAS
    const reservationForm = document.getElementById("reservationForm");

    if (reservationForm) {
        reservationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const message = document.getElementById("reservationMessage");

            if (message) {
                message.textContent =
                    "¡Gracias! Tu solicitud quedó registrada en esta demostración. Recuerda que aún no se envía a un servidor.";
            }

            reservationForm.reset();

        });
    }

    // FORMULARIO DE CONTACTO
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const message = document.getElementById("formMessage");

            if (message) {
                message.textContent =
                    "¡Gracias por escribirnos! Este formulario es una demostración y no envía correos.";
            }

            contactForm.reset();

        });
    }

});
