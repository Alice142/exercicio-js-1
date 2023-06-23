const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function() {

    if (imagemAtual === imagens.length - 1){
        return;
    }
    
    esconderImagemAbertas();

    imagemAtual++;

    imagens[imagemAtual].classList.add("mostrar");

    mostraOuEsconderSetas();
    
})

setaVoltar.addEventListener("click", function() {

    if  (imagemAtual == 0){
        return;
    }

    esconderImagemAbertas();

    imagemAtual--;

    imagens[imagemAtual].classList.add("mostrar");

    mostraOuEsconderSetas();

})

function esconderImagemAbertas() {
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar")
}

function mostraOuEsconderSetas() {
    const naoEhAprimeiraImagem = imagemAtual !== 0;
    if (naoEhAprimeiraImagem) {
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade");
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (chegouNaUltimaImagem) {
        setaAvancar.classList.add("opacidade");
    } else {
        setaAvancar.classList.remove("opacidade");
    }
}