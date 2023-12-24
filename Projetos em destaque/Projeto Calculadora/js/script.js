const OperacaoAnteriorTexto = document.getElementById("OperacaoAnterior")
const OperacaoAtualTexto = document.getElementById("OperacaoAtual")
const Botoes = document.querySelectorAll("#botoes button")
const BotaoResultado = document.getElementById("resultado")

//Percorrendo todos os botões colocando o evento de click
    Botoes.forEach(clicar => {
        clicar.addEventListener('click',(e)=>{
            const valor = e.target.innerText //Pegando o valor de todos os botões que forem clicados
            
            if(valor >= 0 || valor === "." || valor === "+" || valor === "-" || valor === "x" || valor === "÷"){
                if(!(valor >= 0) && !(OperacaoAtualTexto.innerText.slice(-1) >= 0)){ //Checagem que impede que simbolos fiquem juntos //Se não for um número e se o valor anterior também não for um número o botão não adciona nada
                    return
                } else if(valor === "." && OperacaoAtualTexto.innerText.includes(".")){ //limitando a um caractere de ponto
                    return
                } else{
                    OperacaoAtualTexto.innerText = OperacaoAtualTexto.innerText + valor //Colocando digitos na tela  
                }      
            } else if(valor === "CE"){ //CE limpa apenas a operacao atual
                OperacaoAtualTexto.innerText = ""
            } else if(valor === "C"){ //C limpa tudo
                OperacaoAtualTexto.innerText = ""
                OperacaoAnteriorTexto.innerText = ""
            } else if(valor === "DEL"){ //Apaga o ultimo caractere da operação atual
                OperacaoAtualTexto.innerText = OperacaoAtualTexto.innerText.substring(0, OperacaoAtualTexto.innerText.length - 1);
            }
        })
    });

//Calculando
    BotaoResultado.addEventListener('click', function(){ //Ao clicar no botão "="
        var Operacao = OperacaoAtualTexto.innerText //Temos que concertar o vezes e o dividir que viram da string da tela
        Operacao = Operacao.replace(/x/g, "*") //concertando o vezes
        Operacao = Operacao.replace(/÷/g, "/") //concertando o dividir

        Operacao = eval(Operacao) //realizando a operação //metodo eval consegue fazer operação mesmo sendo uma strings
        OperacaoAnteriorTexto.innerText = OperacaoAtualTexto.innerText //Jogando operação atual para a operação anterior
        OperacaoAtualTexto.innerText = Operacao //Fazendo com que o valor da tela tenha o valor do resultado
    })
