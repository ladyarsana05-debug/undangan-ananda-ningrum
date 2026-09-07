document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       BUKA UNDANGAN
    ========================= */

    const openBtn = document.getElementById("openBtn");
    const opening = document.getElementById("opening");

    if (openBtn && opening) {

        openBtn.addEventListener("click", function () {

            console.log("Tombol Buka Undangan diklik");

            opening.style.display = "none";

            document.body.classList.remove("locked");

        });

    }


    /* =========================
       NAMA TAMU DARI LINK
    ========================= */

    const guestName = document.getElementById("guestName");

    const params = new URLSearchParams(
        window.location.search
    );

    const guest = params.get("to");

    if (guest && guestName) {

        guestName.textContent =
            guest.replace(/\+/g, " ");

    }


    /* =========================
       COUNTDOWN
    ========================= */

    const weddingDate = new Date(
        "September 13, 2026 09:00:00"
    ).getTime();


    function updateCountdown() {

        const now = new Date().getTime();

        const distance = weddingDate - now;


        const daysElement =
            document.getElementById("days");

        const hoursElement =
            document.getElementById("hours");

        const minutesElement =
            document.getElementById("minutes");

        const secondsElement =
            document.getElementById("seconds");


        if (
            !daysElement ||
            !hoursElement ||
            !minutesElement ||
            !secondsElement
        ) {
            return;
        }


        if (distance <= 0) {

            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

            return;

        }


        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60))
            / 1000
        );


        daysElement.textContent =
            String(days).padStart(2, "0");

        hoursElement.textContent =
            String(hours).padStart(2, "0");

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

        secondsElement.textContent =
            String(seconds).padStart(2, "0");

    }


    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* =========================
       COPY REKENING
    ========================= */

    window.copyText = function (text) {

        navigator.clipboard.writeText(text)
            .then(function () {

                alert("Nomor berhasil disalin!");

            })
            .catch(function () {

                alert("Nomor rekening: " + text);

            });

    };


    /* =========================
       LIGHTBOX GALERI
    ========================= */

    window.openImage = function (src) {

        const lightbox =
            document.getElementById("lightbox");

        const image =
            document.getElementById("lightbox-img");

        if (lightbox && image) {

            image.src = src;

            lightbox.style.display = "flex";

        }

    };


    window.closeImage = function () {

        const lightbox =
            document.getElementById("lightbox");

        if (lightbox) {

            lightbox.style.display = "none";

        }

    };

});
