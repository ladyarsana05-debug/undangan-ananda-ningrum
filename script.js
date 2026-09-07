document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENT
    ========================= */

    const openBtn = document.getElementById("openBtn");
    const opening = document.getElementById("opening");
    const music = document.getElementById("music");
    const musicBtn = document.getElementById("musicBtn");


    /* =========================
       BUKA UNDANGAN
    ========================= */

    if (openBtn && opening) {

        openBtn.addEventListener("click", function () {

            // Putar musik
            if (music) {

                music.volume = 0.7;

                music.play()
                    .then(function () {

                        console.log("Musik berhasil diputar");

                        if (musicBtn) {
                            musicBtn.style.display = "flex";
                            musicBtn.innerHTML = "♫";
                        }

                    })
                    .catch(function (error) {

                        console.log("Musik tidak dapat diputar:", error);

                        // Tombol musik tetap muncul agar bisa diputar manual
                        if (musicBtn) {
                            musicBtn.style.display = "flex";
                        }

                    });

            }


            // Animasi tutup halaman pembuka
            opening.style.opacity = "0";
            opening.style.pointerEvents = "none";


            setTimeout(function () {

                opening.style.display = "none";

                document.body.classList.remove("locked");

                // Pastikan halaman kembali bisa di-scroll
                document.body.style.overflow = "auto";

            }, 600);

        });

    }


    /* =========================
       TOMBOL MUSIK
    ========================= */

    if (musicBtn && music) {

        musicBtn.addEventListener("click", function () {

            if (music.paused) {

                music.play()
                    .then(function () {

                        musicBtn.innerHTML = "♫";

                    })
                    .catch(function (error) {

                        console.log("Gagal memutar musik:", error);

                    });

            } else {

                music.pause();

                musicBtn.innerHTML = "🔇";

            }

        });

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

            daysElement.innerHTML = "00";
            hoursElement.innerHTML = "00";
            minutesElement.innerHTML = "00";
            secondsElement.innerHTML = "00";

            return;

        }


        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );


        const hours = Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


        const minutes = Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


        const seconds = Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );


        daysElement.innerHTML =
            String(days).padStart(2, "0");

        hoursElement.innerHTML =
            String(hours).padStart(2, "0");

        minutesElement.innerHTML =
            String(minutes).padStart(2, "0");

        secondsElement.innerHTML =
            String(seconds).padStart(2, "0");

    }


    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* =========================
       ANIMASI SCROLL
    ========================= */

    const reveals =
        document.querySelectorAll(".reveal");


    function revealOnScroll() {

        reveals.forEach(function (element) {

            const windowHeight =
                window.innerHeight;

            const elementTop =
                element.getBoundingClientRect().top;


            if (
                elementTop <
                windowHeight - 80
            ) {

                element.classList.add(
                    "visible"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        revealOnScroll
    );


    revealOnScroll();


    /* =========================
       NAMA TAMU DARI LINK
    ========================= */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const guest =
        params.get("to");


    const guestName =
        document.getElementById(
            "guestName"
        );


    if (
        guest &&
        guestName
    ) {

        guestName.textContent =
            guest.replace(
                /\+/g,
                " "
            );

    }


});


/* =========================
   LIGHTBOX GALERI
========================= */

function openImage(src) {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const image =
        document.getElementById(
            "lightbox-img"
        );


    if (
        lightbox &&
        image
    ) {

        image.src = src;

        lightbox.classList.add(
            "active"
        );

    }

}


function closeImage() {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    if (lightbox) {

        lightbox.classList.remove(
            "active"
        );

    }

}


/* =========================
   COPY NOMOR REKENING
========================= */

function copyText(text) {

    if (navigator.clipboard) {

        navigator.clipboard
            .writeText(text)
            .then(function () {

                alert(
                    "Nomor berhasil disalin!"
                );

            })
            .catch(function () {

                alert(
                    "Gagal menyalin nomor."
                );

            });

    } else {

        // Cadangan untuk browser lama

        const textarea =
            document.createElement(
                "textarea"
            );


        textarea.value = text;

        document.body.appendChild(
            textarea
        );


        textarea.select();

        document.execCommand(
            "copy"
        );


        document.body.removeChild(
            textarea
        );


        alert(
            "Nomor berhasil disalin!"
        );

    }

}
