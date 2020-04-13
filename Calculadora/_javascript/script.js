let display_buffer = ``;                         // Buffer da tela 
let numero = ``;                                 //Bufferr número 
let termo = [undefined, undefined, undefined];   // Vetor que recebe a operação
let resultado = undefined;                       // Resultado -> operação com os números

function pressNum(num){                          // Se o número for pressionado, ele é enviando buffer de númeroe mostrado na tela
    numero = numero.concat(num.innerHTML);       // concact -- concatena valores 
    showDisplay(num.innerHTML);                  // Passando o valor dentro do botão -- evita dupla concatenação
}

function pressOperator(op){
    if(termo[1] == undefined){                  // Se houver a tentativa de adicionar mais um operador, nada irá acontecer.
        termo[0] = numero;                      // Se operador e pressionado o primeiro termo recebe o buffer número.
        termo[1] = op.innerHTML;                // O segundo termo recebe o conteúdo do botão - parâmetro
        showDisplay(op.innerHTML);              // Exibindo o operador na tela 
        numero = ``;                            // Não utilizei a function clearALL, pois ela estava conflitando com as outras 
    }                                           // com as outras funções --> limpando o buffer de número manualmente.
    // Nada acontece
}

function pressEqual(){
    if (termo[0] != undefined && termo[1] != undefined && numero != ``){   //Primeiro termo, operador e buffer numero -> termo 3
        termo[2] = numero;
        let keepResult;                                                    //variável para guarda o resultado
        
        switch(termo[1]){  // termo[1] = operador
            case '+':
                resultado = Number(termo[0]) + Number(termo[2]);
                break;
            
            case '-':
                resultado = Number(termo[0]) - Number(termo[2]);  
                break;
            
            case '*':
                resultado = Number(termo[0]) * Number(termo[2]);
                break;
            
            case '/':
                resultado = Number(termo[0]) / Number(termo[2]);
                break;    

        }

        keepResult = resultado; // guardando o resultado

        clearDisplay();         // limpando a tela 
        showDisplay(resultado); // exibindo o resultado
        clearMemory();          // Limpando o buffer geral para evitar conflitos ou bugs

        numero = String(keepResult);  // Manda uma string para o buffer de número, se enviar apenas o número, a vírgula não ooncatena.
    }

    // Nada acontece
    
}


function clearMemory(){                          //Limpa todos os buffers (número, resultado, termos)
    numero = ``;
    resultado = undefined;
    termo = [undefined, undefined, undefined];
          
}

function clearDisplay(){
    display_buffer = ``;                                       //Limpa o buffer do display diplay 
    let tela = document.querySelector(`textarea#display`);
    tela.value = display_buffer;
    
}

function clearAll(){                                                
    clearMemory();
    clearDisplay();
}

function showDisplay(conteudo){                                  // Recebe o conteúdo do botão 
    display_buffer = display_buffer.concat(conteudo);            // Buffer da tela recebe o conteúdo (concatenado)
    let tela = document.querySelector(`textarea#display`);
    tela.value = display_buffer;                                 // Buffer da tela é inserido no html
}





