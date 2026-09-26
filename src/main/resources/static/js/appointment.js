/* =========================================
   CAREPOINT APPOINTMENT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(
        'form[action="/appointment"]'
    );

    if (!form) {
        return;
    }


    /* =========================================
       ELEMENTS
    ========================================= */

    const dateInput =
        document.getElementById("date");

    const phoneInput =
        document.getElementById("phone");

    const message =
        document.getElementById("message");

    const doctor =
        document.getElementById("doctor");

    const appointmentType =
        document.getElementById("type");


    /* =========================================
       SET MINIMUM DATE
       Prevent booking in the past
    ========================================= */

    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        String(today.getMonth() + 1).padStart(2, "0");

    const day =
        String(today.getDate()).padStart(2, "0");

    const todayString =
        `${year}-${month}-${day}`;

    dateInput.min = todayString;


    /* =========================================
       PHONE VALIDATION
    ========================================= */

    phoneInput.addEventListener("input", function () {

        phoneInput.value =
            phoneInput.value.replace(/\D/g, "");

        if (phoneInput.value.length === 10) {

            phoneInput.style.borderColor = "#35a66f";

        } else {

            phoneInput.style.borderColor = "";

        }

    });


    /* =========================================
       MESSAGE CHARACTER COUNTER
    ========================================= */

    const counter = document.createElement("div");

    counter.style.textAlign = "right";
    counter.style.fontSize = "11px";
    counter.style.color = "#8a9aa8";
    counter.style.marginTop = "5px";

    message.parentElement.parentElement.appendChild(counter);


    message.addEventListener("input", function () {

        counter.textContent =
            `${message.value.length} characters`;

    });


    /* =========================================
       DOCTOR SELECTION
    ========================================= */

    doctor.addEventListener("change", function () {

        if (doctor.value !== "") {

            doctor.style.borderColor = "#35a66f";

        } else {

            doctor.style.borderColor = "";

        }

    });


    /* =========================================
       APPOINTMENT TYPE
    ========================================= */

    appointmentType.addEventListener(
        "change",
        function () {

            if (appointmentType.value !== "") {

                appointmentType.style.borderColor =
                    "#35a66f";

            } else {

                appointmentType.style.borderColor = "";

            }

        }
    );


    /* =========================================
       DATE SELECTION
    ========================================= */

    dateInput.addEventListener("change", function () {

        if (dateInput.value) {

            dateInput.style.borderColor = "#35a66f";

        }

    });


    /* =========================================
       TIME SELECTION
    ========================================= */

    const timeInputs =
        document.querySelectorAll(
            '.time-grid input[type="radio"]'
        );


    timeInputs.forEach(function (input) {

        input.addEventListener("change", function () {

            timeInputs.forEach(function (item) {

                const span =
                    item.nextElementSibling;

                if (item.checked) {

                    span.style.transform =
                        "scale(1.02)";

                } else {

                    span.style.transform =
                        "scale(1)";

                }

            });

        });

    });


    /* =========================================
       FORM VALIDATION
    ========================================= */

    form.addEventListener("submit", function (event) {

        /* Phone */

        if (phoneInput.value.length !== 10) {

            event.preventDefault();

            alert(
                "Please enter a valid 10-digit phone number."
            );

            phoneInput.focus();

            return;

        }


        /* Doctor */

        if (doctor.value === "") {

            event.preventDefault();

            alert("Please select a doctor.");

            doctor.focus();

            return;

        }


        /* Date */

        if (dateInput.value === "") {

            event.preventDefault();

            alert("Please select an appointment date.");

            dateInput.focus();

            return;

        }


        /* Date cannot be in past */

        if (dateInput.value < todayString) {

            event.preventDefault();

            alert(
                "Please select today or a future date."
            );

            dateInput.focus();

            return;

        }


        /* Appointment type */

        if (appointmentType.value === "") {

            event.preventDefault();

            alert(
                "Please select an appointment type."
            );

            appointmentType.focus();

            return;

        }


        /* Time */

        const selectedTime =
            document.querySelector(
                '.time-grid input[type="radio"]:checked'
            );


        if (!selectedTime) {

            event.preventDefault();

            alert(
                "Please select your preferred appointment time."
            );

            return;

        }


        /* =========================================
           SUBMIT LOADING
        ========================================= */

        const submitButton =
            form.querySelector(".submit-btn");

        if (submitButton) {

            submitButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Requesting Appointment...';

            submitButton.style.pointerEvents =
                "none";

            submitButton.style.opacity =
                "0.8";

        }

    });

});