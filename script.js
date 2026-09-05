document.addEventListener("DOMContentLoaded", function () {

  const opening = document.getElementById("opening");
  const main = document.getElementById("mainContent");
  const openBtn = document.getElementById("openInvitation");
  const music = document.getElementById("music");
  const musicToggle = document.getElementById("musicToggle");

  if (openBtn) {
    openBtn.addEventListener("click", function () {

      if (opening) {
        opening.style.opacity = "0";

        setTimeout(function () {
          opening.style.display = "none";
        }, 700);
      }

      if (main) {
        main.classList.remove("hidden");
        main.style.display = "block";
        main.style.opacity = "1";
      }

      document.body.classList.remove("locked");
      document.body.style.overflow = "auto";

      if (music) {
        music.play().catch(function () {});
      }

      if (musicToggle) {
        musicToggle.style.display = "flex";
      }

      window.scrollTo(0, 0);

    });
  }

  if (musicToggle && music) {
    musicToggle.addEventListener("click", function () {

      if (music.paused) {
        music.play().catch(function () {});
        musicToggle.innerHTML = "♫";
      } else {
        music.pause();
        musicToggle.innerHTML = "Ⅱ";
      }

    });
  }

});
