document.getElementById("meuBotao").addEventListener("click", function () {
    const destino = document.getElementById("parte02").offsetTop;
    window.scrollTo({
        top: destino,
        behavior: "smooth"
    });
});