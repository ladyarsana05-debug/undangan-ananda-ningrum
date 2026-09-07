const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");

openBtn.onclick = function () {

    opening.style.display = "none";

    document.body.classList.remove("locked");

};
