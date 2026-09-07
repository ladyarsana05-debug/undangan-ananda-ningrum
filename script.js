document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       BUKA UNDANGAN
    ========================= */

    const openBtn =
        document.getElementById("openBtn");

    const opening =
        document.getElementById("opening");


    if (openBtn && opening) {

        openBtn.addEventListener(
            "click",
            function () {

                /* Hilangkan cover */

                opening.style.opacity = "0";

                opening.style.transition =
                    "opacity 0.6s ease";


                setTimeout(function () {

                    opening.style.display =
                        "none";

                    document.body.classList.remove(
                        "locked"
                    );

                }, 600);


                /* Putar musik */

                const music =
                    document.getElementById(
                        "music"
                    );

                const musicBtn =
                    document.getElementById(
                        "musicBtn"
                    );


                if (music) {

                    music.play()
                        .then(function () {

                            if (musicBtn) {

                                musicBtn.style.display =
                                    "block";

                            }

                        })
                        .catch(function () {

                            console.log(
                                "Musik belum dapat diputar."
                            );

                        });

                }

            }

        );

    }


    /* =========================
       MUSIC BUTTON
    ========================= */

    const music =
        document.getElementById("music");

    const musicBtn =
        document.getElementById("musicBtn");


    if (musicBtn && music) {

        musicBtn.addEventListener(
            "click",
            function () {

                if (music.paused) {

                    music.play();

                    musicBtn.innerHTML = "♫";

                } else {

                    music.pause();

                    musicBtn.innerHTML = "🔇";

                }

            }

        );

    }


    /* =========================
       NAMA TAMU DARI URL
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


    if (guest && guestName) {

        guestName.textContent =
            guest;

    }


    /* =========================
       COUNTDOWN
    ========================= */

    const weddingDate =
        new Date(
            "September 13, 2026 09:00:00"
        ).getTime();


    function updateCountdown() {

        const now =
            new Date().getTime();


        const distance =
            weddingDate - now;


        const days =
            document.getElementById("days");

        const hours =
            document.getElementById("hours");

        const minutes =
            document.getElementById("minutes");

        const seconds =
            document.getElementById("seconds");


        if (
            !days ||
            !hours ||
            !minutes ||
            !seconds
        ) {

            return;

        }


        if (distance <= 0) {

            days.textContent = "00";

            hours.textContent = "00";

            minutes.textContent = "00";

            seconds.textContent = "00";

            return;

        }


        const dayValue =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hourValue =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60 * 24)
                )
                /
                (1000 * 60 * 60)
            );


        const minuteValue =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60)
                )
                /
                (1000 * 60)
            );


        const secondValue =
            Math.floor(
                (
                    distance %
                    (1000 * 60)
                )
                /
                1000
            );


        days.textContent =
            String(dayValue).padStart(
                2,
                "0"
            );


        hours.textContent =
            String(hourValue).padStart(
                2,
                "0"
            );


        minutes.textContent =
            String(minuteValue).padStart(
                2,
                "0"
            );


        seconds.textContent =
            String(secondValue).padStart(
                2,
                "0"
            );

    }


    updateCountdown();


    setInterval(
        updateCountdown,
        1000
    );


    /* =========================
       LIGHTBOX GALERI
    ========================= */

    window.openImage =
        function (src) {

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

                lightbox.style.display =
                    "flex";

            }

        };


    window.closeImage =
        function () {

            const lightbox =
                document.getElementById(
                    "lightbox"
                );


            if (lightbox) {

                lightbox.style.display =
                    "none";

            }

        };


    /* =========================
       COPY NOMOR REKENING
    ========================= */

    window.copyText =
        function (text) {

            if (
                navigator.clipboard
            ) {

                navigator.clipboard
                    .writeText(text)

                    .then(function () {

                        alert(
                            "Nomor berhasil disalin!"
                        );

                    })

                    .catch(function () {

                        alert(
                            "Nomor rekening: " +
                            text
                        );

                    });

            } else {

                alert(
                    "Nomor rekening: " +
                    text
                );

            }

        };


    /* =========================
       SCROLL ANIMATION
    ========================= */

    const reveals =
        document.querySelectorAll(
            ".reveal"
        );


    function revealOnScroll() {

        reveals.forEach(
            function (element) {

                const position =
                    element
                    .getBoundingClientRect()
                    .top;


                const windowHeight =
                    window.innerHeight;


                if (
                    position <
                    windowHeight - 80
                ) {

                    element.classList.add(
                        "visible"
                    );

                }

            }

        );

    }


    window.addEventListener(
        "scroll",
        revealOnScroll
    );


    revealOnScroll();


});
