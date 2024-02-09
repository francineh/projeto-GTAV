// aqui encontramos uma constante que seleciona o botão da plataforma e nos proporciona o efeito de onclik do projeto.
const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});


