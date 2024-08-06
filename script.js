const caixaPrincipal = document.querySelector(".harry potter");
const caixaPerguntas = document.querySelector(".pedra filosofal");
const caixaAlternativas = document.querySelector(".camera secreta");
const caixaResultado = document.querySelector(".atraves do filme");
const textoResultado = document.querySelector(".atraves do filme");

const perguntas = [
    {
        enunciado: "Harry Potter é um jovem comum de 11 anos até que recebe uma carta para estudar na Escola de Magia e Bruxaria de Hogwarts, onde ele descobre ser, na verdade, um bruxo. Nela, o garoto conquista a amizade de Hagrid, além de Hermione e Ron.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                
            },
            {
                texto: "esse filme e interresante!",
                
            }
        ]
    },
    {
        enunciado: "esse filme nao me chamou a atençao",
        alternativas: [
            {
                texto: "Câmara Secreta é aberta, e o mal começa a assolar Hogwarts, alunos começam a ser petrificados e a escola pode ser fechada.",
                
            },
            {
                texto: "Harry é apresentado ao mundo dos bruxos e descobre que é muito famoso por ter sobrevivido ao ataque de Voldemort. 
        ]
    


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
