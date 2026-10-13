const hamburger = document.getElementById("hamburger");
const menuMobile = document.getElementById("menuMobile");
const overlay = document.getElementById("overlay");

function toggleMenu() {
    const isActive = menuMobile.classList.toggle("active");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");

    document.body.style.overflow = isActive ? "hidden" : "auto";
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

menuMobile.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menuMobile.classList.remove("active");
        hamburger.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";
    });
});

function sendWhats(e) {
    e.preventDefault();

    const nome = document.getElementById("name").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const url = `https://wa.me/351968750240?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}


function abrirModalEmpresa(imgSrc) {
    const modal = document.getElementById("modal-empresa");
    const modalImg = document.getElementById("modal-img");

    modalImg.src = imgSrc;
    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}

function fecharModal() {
    const modal = document.getElementById("modal-empresa");

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}

document.querySelector(".close-modal").onclick = fecharModal;

window.onclick = (e) => {
    if (e.target === document.getElementById("modal-empresa")) {
        fecharModal();
    }
};