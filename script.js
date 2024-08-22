const caixaPrincipal = document.querySelector(".caixa-principal");
    
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    
    const caixaResultado = document.querySelector(".caixa-resultado");
    
    const textoResultado = document.querySelector(".texto-resultado");
    
    const perguntas = [
    {
    enunciado: "Pergunta 1",
    alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
    enunciado: "Pergunta 2",
    alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    ];
    let atual = 0;
    let perguntaAtual;
    function mostraPergunta() {
    if (atual >= perguntas.length) {
            mostraResultado();
            return;
            }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraPergunta();
    mostraAlternativas();
    }
    function mostraResultado() {
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }
    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document
            .createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", function () =>
respostaSelecionada(alternativa));{
    atual++;
    mostraPergunta();
    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmação;
        historiaFinal = afirmacoes + " ";
        atual++;
        mostraPergunta();
    }
    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";
caixaAlternativas.appendChild(botaoAlternativas);
    const caixaPerguntas = document.querySelector}
    (".caixa-alternativas");
(".caixa-perguntas");}
{
    enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
     alternativas: [
    texto: "Isso é assustador!",
    afirmacao: "Isso é maravilhoso!"
    ]
    }
    const perguntas = [
        {
        enunciado: "Insira o enunciado da Pergunta 1”,
        alternativas: ["Alternativa 1”, “Alternativa 2”],
        },
        {
            texto: “Alternativa 2”,
            afirmação: “Afirmação da alternativa 2”
            }
            ]
            },
            (...continuam as próximas perguntas)