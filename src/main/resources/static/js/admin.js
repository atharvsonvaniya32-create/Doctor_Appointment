document.addEventListener("DOMContentLoaded", function () {

    // ============================
    // CURRENT DATE
    // ============================

    const dateElement = document.getElementById("currentDate");

    if (dateElement) {

        const today = new Date();

        dateElement.textContent =
            today.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric"
            });
    }


    // ============================
    // APPOINTMENT SEARCH
    // ============================

    const appointmentSearch =
        document.getElementById("appointmentSearch");

    if (appointmentSearch) {

        appointmentSearch.addEventListener("input", function () {

            const search =
                this.value.toLowerCase();

            const rows =
                document.querySelectorAll(
                    "#appointmentTable tbody tr"
                );

            rows.forEach(function (row) {

                const text =
                    row.textContent.toLowerCase();

                row.style.display =
                    text.includes(search)
                        ? ""
                        : "none";
            });

        });
    }


    // ============================
    // PATIENT SEARCH
    // ============================

    const patientSearch =
        document.getElementById("patientSearch");

    if (patientSearch) {

        patientSearch.addEventListener("input", function () {

            const search =
                this.value.toLowerCase();

            const rows =
                document.querySelectorAll(
                    "#patientTable tbody tr"
                );

            rows.forEach(function (row) {

                const text =
                    row.textContent.toLowerCase();

                row.style.display =
                    text.includes(search)
                        ? ""
                        : "none";
            });

        });
    }


    // ============================
    // NAVIGATION
    // ============================

    const navItems =
        document.querySelectorAll(".nav-item");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navItems.forEach(function (nav) {
                nav.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

});