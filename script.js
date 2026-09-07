const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

/* =========================
BUKA UNDANGAN
========================= */

openBtn.addEventListener("click", function () {

    opening.style.opacity = "0";

    setTimeout(function () {

        opening.style.display = "none";

        document.body.classList.remove("locked");

    }, 500);


    /* PUTAR MUSIK */

    music.play()
        .then(() => {

            musicBtn.style.display = "block";

        })
        .catch(() => {

            console.log("Musik tidak dapat diputar otomatis");

        });

});


/* =========================
MUSIC BUTTON
========================= */

musicBtn.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "♫";

    } else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

});


/* =========================
COUNTDOWN
========================= */

const weddingDate = new Date("September 13, 2026 09:00:00").getTime();

setInterval(function () {

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


}, 1000);


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

    navigator.clipboard.writeText(text);

    alert("Nomor berhasil disalin!");

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

    document.getElementById("guestName").innerHTML =
        guest.replace(/\+/g, " ");

}
