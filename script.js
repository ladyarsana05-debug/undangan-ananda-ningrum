document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.getElementById("openBtn");
    const opening = document.getElementById("opening");
    const music = document.getElementById("music");
    const musicBtn = document.getElementById("musicBtn");


    if (openBtn) {

        openBtn.addEventListener("click", function () {

            /* HILANGKAN COVER */

            opening.style.opacity = "0";

            setTimeout(function () {

                opening.style.display = "none";

                document.body.classList.remove("locked");

            }, 600);


            /* PUTAR MUSIK */

            if (music) {

                music.play()
                    .then(function () {

                        if (musicBtn) {
                            musicBtn.style.display = "block";
                        }

                    })
                    .catch(function (error) {

                        console.log("Musik tidak dapat diputar:", error);

                    });

            }

        });


/* =========================
COUNTDOWN
========================= */

const weddingDate = new Date("September 13, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
LIGHTBOX GALERI
========================= */

function openImage(src) {

    const lightbox =
        document.getElementById("lightbox");

    const image =
        document.getElementById("lightbox-img");

    image.src = src;

    lightbox.classList.add("active");

}


function closeImage() {

    const lightbox =
        document.getElementById("lightbox");

    lightbox.classList.remove("active");

}


/* =========================
COPY REKENING
========================= */

function copyText(text) {

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Nomor berhasil disalin!");
        })
        .catch(() => {
            alert("Gagal menyalin nomor.");
        });

}


/* =========================
SCROLL ANIMATION
========================= */

const reveals =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    reveals.forEach(function (element) {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("visible");

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


if (guest) {

    const guestName =
        document.getElementById("guestName");

    if (guestName) {

        guestName.innerHTML =
            guest.replace(/\+/g, " ");

    }

}
