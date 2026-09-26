/* =========================================
   CAREPOINT REGISTRATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");

    if (!form) {
        return;
    }


    /* =========================================
       ELEMENTS
    ========================================= */

    const password =
        document.getElementById("password");

    const confirmPassword =
        document.getElementById("confirmPassword");

    const phone =
        document.getElementById("phone");

    const dob =
        document.getElementById("dob");


    /* =========================================
       PASSWORD STRENGTH
    ========================================= */

    const strengthBox = document.createElement("div");

    strengthBox.style.fontSize = "11px";
    strengthBox.style.marginTop = "6px";
    strengthBox.style.fontWeight = "600";

    password.parentElement.appendChild(strengthBox);


    password.addEventListener("input", function () {

        const value = password.value;

        let strength = "";
        let message = "";

        if (value.length === 0) {

            strengthBox.textContent = "";

        }

        else if (value.length < 6) {

            strength = "weak";
            message = "Password is too short";

            strengthBox.textContent = message;
            strengthBox.style.color = "#e05252";

        }

        else if (
            value.length >= 6 &&
            !/[A-Z]/.test(value)
        ) {

            message = "Add an uppercase letter";

            strengthBox.textContent = message;
            strengthBox.style.color = "#d58b27";

        }

        else if (
            value.length >= 6 &&
            !/[0-9]/.test(value)
        ) {

            message = "Add a number for stronger security";

            strengthBox.textContent = message;
            strengthBox.style.color = "#d58b27";

        }

        else if (
            value.length >= 8 &&
            /[A-Z]/.test(value) &&
            /[0-9]/.test(value) &&
            /[^A-Za-z0-9]/.test(value)
        ) {

            message = "Strong password ✓";

            strengthBox.textContent = message;
            strengthBox.style.color = "#2f9b68";

        }

        else {

            message = "Good password";

            strengthBox.textContent = message;
            strengthBox.style.color = "#2f9b68";

        }

    });


    /* =========================================
       PASSWORD MATCH
    ========================================= */

    confirmPassword.addEventListener("input", function () {

        if (confirmPassword.value === "") {

            confirmPassword.style.borderColor = "";

            return;
        }

        if (password.value === confirmPassword.value) {

            confirmPassword.style.borderColor = "#35a66f";

        } else {

            confirmPassword.style.borderColor = "#e05252";

        }

    });


    /* =========================================
       PHONE VALIDATION
    ========================================= */

    phone.addEventListener("input", function () {

        phone.value = phone.value.replace(/\D/g, "");

        if (phone.value.length === 10) {

            phone.style.borderColor = "#35a66f";

        } else {

            phone.style.borderColor = "";

        }

    });


    /* =========================================
       DATE OF BIRTH
    ========================================= */

    const today = new Date();

    const year = today.getFullYear();
    const month =
        String(today.getMonth() + 1).padStart(2, "0");
    const day =
        String(today.getDate()).padStart(2, "0");

    dob.max = `${year}-${month}-${day}`;


    /* =========================================
       FORM SUBMISSION
    ========================================= */

    form.addEventListener("submit", function (event) {

        /* Password check */

        if (password.value !== confirmPassword.value) {

            event.preventDefault();

            alert("Passwords do not match.");

            confirmPassword.focus();

            return;

        }


        /* Phone check */

        if (phone.value.length !== 10) {

            event.preventDefault();

            alert("Please enter a valid 10-digit phone number.");

            phone.focus();

            return;

        }


        /* Loading state */

        const submitButton =
            form.querySelector(".submit");

        if (submitButton) {

            submitButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';

            submitButton.style.pointerEvents = "none";

        }

    });

});