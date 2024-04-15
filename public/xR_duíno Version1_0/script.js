// Array para armazenar referências aos botões criados
let botoesCriados = [];

// Array para armazenar referências aos elementos de áudio gerados dinamicamente
var audiosGerados = [];


let audioEmExecucao = false; // Adicione essa variável fora das funções
//=====================================Botoes das notas e frequencias================
//#######################################Dó

// Função para criar um novo botão
function criarBotao() {
    const novoBotao = document.createElement("button");
    novoBotao.textContent = "Dó";
    document.getElementById("minhaDiv").appendChild(novoBotao);// adiciona o novo botao a pagina
    botoesCriados.push(novoBotao); // Adiciona o botão ao array
 // Aplica a classe CSS para estilizar o botão
    novoBotao.classList.add("botaoSom");
    // Adiciona um evento de clique ao botão
    novoBotao.addEventListener("click", function() {
        gerarNovoAudio();
    }); 
// Função para gerar um novo elemento de áudio e armazená-lo no array
function gerarNovoAudio() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
      audioEmExecucao = true; // Define que um áudio está em execução

      var novoAudio = document.createElement("audio");
      novoAudio.src = "public/Audio Piano/Piano_10_Segundos/1_Dó_261p63Hz.mp3";
      document.body.appendChild(novoAudio);
      audiosGerados.push(novoAudio);

      novoAudio.play();

      // Adiciona um evento de fim de reprodução para redefinir audioEmExecucao como falso
      novoAudio.addEventListener("ended", function() {
          audioEmExecucao = false;
      });
  }
}       
}
// Adiciona um evento de clique ao botão "criarBotao"
document.getElementById("botao2").addEventListener("click", criarBotao);
//##########################################

//###############################################Ré

// Função para criar um novo botão
function criarBotao2() {
    const novoBotao2 = document.createElement("button");
    novoBotao2.textContent = "Ré ";
    document.getElementById("minhaDiv").appendChild(novoBotao2);
    botoesCriados.push(novoBotao2); // Adiciona o botão ao array
 // Aplica a classe CSS para estilizar o botão
    novoBotao2.classList.add("botaoSom2");
    // Adiciona um evento de clique ao botão
    novoBotao2.addEventListener("click", function() {
      gerarNovoAudio2();
    });
  // Função para gerar um novo elemento de áudio e armazená-lo no array
function gerarNovoAudio2() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
      audioEmExecucao = true; // Define que um áudio está em execução

      var novoAudio2 = document.createElement("audio");
      novoAudio2.src = "public/Audio Piano/Piano_10_Segundos/2_Ré_293p66Hz.mp3";
      document.body.appendChild(novoAudio2);
      audiosGerados.push(novoAudio2);

      novoAudio2.play();

      // Adiciona um evento de fim de reprodução para redefinir audioEmExecucao como falso
      novoAudio2.addEventListener("ended", function() {
          audioEmExecucao = false;
      });
  }
}          
}
// Adiciona um evento de clique ao botão "criarBotao"
document.getElementById("botao3").addEventListener("click", criarBotao2);
//-------------------------------------------------------
//###############################################

//###############################################Mi
function criarBotao3() {
  const novoBotao3 = document.createElement("button");
  novoBotao3.textContent = "Mi ";
  document.getElementById("minhaDiv").appendChild(novoBotao3);
  botoesCriados.push(novoBotao3); // Adiciona o botão ao array
// Aplica a classe CSS para estilizar o botão
  novoBotao3.classList.add("botaoSom3");
  // Adiciona um evento de clique ao botão
  novoBotao3.addEventListener("click", function() {
    gerarNovoAudio3();
  });
 // Função para gerar um novo elemento de áudio e armazená-lo no array
function gerarNovoAudio3() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
      audioEmExecucao = true; // Define que um áudio está em execução

      var novoAudio3 = document.createElement("audio");
      novoAudio3.src = "public/Audio Piano/Piano_10_Segundos/3_Mi_329p63Hz.mp3";
      document.body.appendChild(novoAudio3);
      audiosGerados.push(novoAudio3);

      novoAudio3.play();

      // Adiciona um evento de fim de reprodução para redefinir audioEmExecucao como falso
      novoAudio3.addEventListener("ended", function() {
          audioEmExecucao = false;
      });
  }
}         
}
// Adiciona um evento de clique ao botão "criarBotao"
document.getElementById("botao4").addEventListener("click", criarBotao3);

//###############################################

//###############################################Fá
function criarBotao4() {
  const novoBotao4 = document.createElement("button");
  novoBotao4.textContent = "Fá ";
  document.getElementById("minhaDiv").appendChild(novoBotao4);
  botoesCriados.push(novoBotao4); // Adiciona o botão ao array
// Aplica a classe CSS para estilizar o botão
  novoBotao4.classList.add("botaoSom4");
  // Adiciona um evento de clique ao botão
  novoBotao4.addEventListener("click", function() {
    gerarNovoAudio4();
  });
 // Função para gerar um novo elemento de áudio e armazená-lo no array
function gerarNovoAudio4() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
      audioEmExecucao = true; // Define que um áudio está em execução

      var novoAudio4 = document.createElement("audio");
      novoAudio4.src = "public/Audio Piano/Piano_10_Segundos/4_Fá_349p23Hz.mp3";
      document.body.appendChild(novoAudio4);
      audiosGerados.push(novoAudio4);

      novoAudio4.play();

      // Adiciona um evento de fim de reprodução para redefinir audioEmExecucao como falso
      novoAudio4.addEventListener("ended", function() {
          audioEmExecucao = false;
      });
  }
}         
}
// Adiciona um evento de clique ao botão "criarBotao"
document.getElementById("botao5").addEventListener("click", criarBotao4);


//###############################################

//###############################################Sol
function criarBotao5() {
  const novoBotao5 = document.createElement("button");
  novoBotao5.textContent = "Sol ";
  document.getElementById("minhaDiv").appendChild(novoBotao5);
  botoesCriados.push(novoBotao5); // Adiciona o botão ao array
// Aplica a classe CSS para estilizar o botão
  novoBotao5.classList.add("botaoSom5");
  // Adiciona um evento de clique ao botão
  novoBotao5.addEventListener("click", function() {
    gerarNovoAudio5();
  });
// Função para gerar um novo elemento de áudio e armazená-lo no array
function gerarNovoAudio5() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
      audioEmExecucao = true; // Define que um áudio está em execução

      var novoAudio5 = document.createElement("audio");
      novoAudio5.src = "public/Audio Piano/Piano_10_Segundos/5_Sol_392Hz.mp3";
      document.body.appendChild(novoAudio5);
      audiosGerados.push(novoAudio5);

      novoAudio5.play();

      // Adiciona um evento de fim de reprodução para redefinir audioEmExecucao como falso
      novoAudio5.addEventListener("ended", function() {
          audioEmExecucao = false;
      });
  }
}        
}
// Adiciona um evento de clique ao botão "criarBotao"
document.getElementById("botao6").addEventListener("click", criarBotao5);

//###############################################

//###############################################Lá
function criarBotao6() {
  const novoBotao6 = document.createElement("button");
  novoBotao6.textContent = "Lá ";
  document.getElementById("minhaDiv").appendChild(novoBotao6);
  botoesCriados.push(novoBotao6); // Adiciona o botão ao array
// Aplica a classe CSS para estilizar o botão
  novoBotao6.classList.add("botaoSom6");
  // Adiciona um evento de clique ao botão
  novoBotao6.addEventListener("click", function() {
    gerarNovoAudio6();
  });
  // Função para gerar um novo elemento de áudio e armazená-lo no array
function gerarNovoAudio6() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
      audioEmExecucao = true; // Define que um áudio está em execução

      var novoAudio6 = document.createElement("audio");
      novoAudio6.src = "public/Audio Piano/Piano_10_Segundos/6_Lá_440Hz.mp3";
      document.body.appendChild(novoAudio6);
      audiosGerados.push(novoAudio6);

      novoAudio6.play();

      // Adiciona um evento de fim de reprodução para redefinir audioEmExecucao como falso
      novoAudio6.addEventListener("ended", function() {
          audioEmExecucao = false;
      });
  }
}      
}
// Adiciona um evento de clique ao botão "criarBotao"
document.getElementById("botao7").addEventListener("click", criarBotao6);
//###############################################

//###############################################Si
function criarBotao7() {
  const novoBotao7 = document.createElement("button");
  novoBotao7.textContent = "Sí ";
  document.getElementById("minhaDiv").appendChild(novoBotao7);
  botoesCriados.push(novoBotao7); // Adiciona o botão ao array
// Aplica a classe CSS para estilizar o botão
  novoBotao7.classList.add("botaoSom7");
  // Adiciona um evento de clique ao botão
  novoBotao7.addEventListener("click", function() {
    gerarNovoAudio7();
  });
 // Função para gerar um novo elemento de áudio e armazená-lo no array
function gerarNovoAudio7() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
      audioEmExecucao = true; // Define que um áudio está em execução

      var novoAudio7 = document.createElement("audio");
      novoAudio7.src = "public/Audio Piano/Piano_10_Segundos/7_Sí_493p88Hz.mp3";
      document.body.appendChild(novoAudio7);
      audiosGerados.push(novoAudio7);

      novoAudio7.play();

      // Adiciona um evento de fim de reprodução para redefinir audioEmExecucao como falso
      novoAudio7.addEventListener("ended", function() {
          audioEmExecucao = false;
      });
  }
}         
}
// Adiciona um evento de clique ao botão "criarBotao"
document.getElementById("botao8").addEventListener("click", criarBotao7);

//###############################################

//###############################################dó
function criarBotao8() {
  const novoBotao8 = document.createElement("button");
  novoBotao8.textContent = "dó ";
  document.getElementById("minhaDiv").appendChild(novoBotao8);
  botoesCriados.push(novoBotao8); // Adiciona o botão ao array
// Aplica a classe CSS para estilizar o botão
  novoBotao8.classList.add("botaoSom8");
  // Adiciona um evento de clique ao botão
  novoBotao8.addEventListener("click", function() {
    gerarNovoAudio8();
  });
// Função para gerar um novo elemento de áudio e armazená-lo no array
function gerarNovoAudio8() {
  if (!audioEmExecucao) { // Verifica se não há áudio em execução
      audioEmExecucao = true; // Define que um áudio está em execução

      var novoAudio8 = document.createElement("audio");
      novoAudio8.src = "public/Audio Piano/Piano_10_Segundos/8_dó_523p25.mp3";
      document.body.appendChild(novoAudio8);
      audiosGerados.push(novoAudio8);

      novoAudio8.play();

      // Adiciona um evento de fim de reprodução para redefinir audioEmExecucao como falso
      novoAudio8.addEventListener("ended", function() {
          audioEmExecucao = false;
      });
  }
}         
}
// Adiciona um evento de clique ao botão "criarBotao"
document.getElementById("botao9").addEventListener("click", criarBotao8);
//###############################################






// ======================Função para apagar o último botão criado=====================
function apagarUltimoBotao() {
    if (botoesCriados.length > 0) {
        const ultimoBotao = botoesCriados.pop(); // Remove o último botão do array
        ultimoBotao.parentNode.removeChild(ultimoBotao); // Remove o botão do DOM
    }
}
// Adiciona um evento de clique ao botão "apagarBotao"
document.getElementById("botaoApagar1").addEventListener("click", apagarUltimoBotao);
//============================================================================

//================================parar audios===============================
// Função para parar todos os áudios em reprodução
function pararTodosOsAudios() {
  // Itera sobre cada elemento de áudio gerado e para sua reprodução
  audiosGerados.forEach(function(audio) {
      audio.pause(); // Pausa a reprodução do áudio
      audio.currentTime = 0; // Define o tempo de reprodução como zero para reiniciar o áudio, se necessário
  });
}
// Adiciona um evento de clique ao botão "botaoParar"
document.getElementById("botaoParar").addEventListener("click", function() {
  pararTodosOsAudios(); // Chama a função para parar todos os áudios
  audioEmExecucao = false;
});
//=============================================================================

//################################ sobre os botões de texto #################
let linhasDeTexto = [];
// adiciona ouvintes de evento de clique aos botões
mensagem.addEventListener("click", function() {
    // adiciona o texto ao array, juntamente com o índice da linha
    linhasDeTexto.push({texto: ("console.log('O programador Rafael Silva diz:Bons estudos para todos! Espero que este programa possa ajudar todos que precisarem de uma ferramenta de manipulação de frequências sonoras. O uso é simples e instintivo, basta clicar nas notas musicais, e preencher os formulários de tempo e salvar as sequencias de notas clicando no botão gravar! A frequência gerada pode ser ouvida clicando no botão gerado no formulário, o botão Break sound serve para parar a execução de audios que estão sendo ouvidos. Você poderá montar uma sequência lógica de blocos para gravar em um pendrive e usar no seu xR_duíno! Além dos botões das notas,ouvir frequência, break sound e gravar existe o botão apagar blocos, que serve para apagar sequências criadas! Este programa ainda precisa de muitas atualizações e melhorias!! mas acredito que um bom estudante poderá superar as falhas dessa versão inicial, deixei um repositório público no git hub!! Espero vocês por lá!! Deixem seus comentários e opniões!!<br><br>Agora clique em apagar e boa sorte!"), indice: linhasDeTexto.length});
    // atualiza o conteúdo da div
    atualizarDiv();
  });//hello do programador
  // adiciona ouvintes de evento de clique aos botões
  botao1.addEventListener("click", function() {
    // adiciona o texto ao array, juntamente com o índice da linha
    linhasDeTexto.push({texto: ("O QUE É O xR_duíno???<br>Pode se dizer que é um Arduino caseiro feito com qualquer caixinha de som, com leitor de pendrive, um pendrive, e um drive na configuração de relé sônica...<br>LÓGICA:<br>No pendrive,grava-se as notas musicais em suas devidas frequências, no formato mp3; Ao reproduzir as notas musicais na caixa de som o fone deverá ser removido(ou não), para que as ondas das frequências do pendrive com as gravações de audio sejam usadas para manipular outros circuitos...Driver de relé sônica deve ser configurado para manipulações de aparelhos ou mesmo portas lógicas... etc...Considerando que a configuração de hardware funcione perfeitamente a ideia seguinte será programar os audios na IDE de manipulação de dados para facilitar o manuseio de comandos...Dentro da lógica de programação em blocos, a IDE deve fornecer um menu de audios, nas devidas frequências em formato mp3 para serem organizados numa area de trabalho, possibilitando tambem gravações de audio. Ao organizar a sequência de audios em frequencias desejadas a mesma deve ser salva no pendrive para ser executado no xR_duíno. Esta Tecnologia é nova no mercado, portanto drivers plug and play para dispositivos sonoros ainda não estão acessiveis no mercado restando as alternativas de importação do drive ou mesmo a fabricação do mesmo!! No momento a lightPage informa que a tecnologia ainda está na fase da prototipagem, no entanto estamos abertos a comentários e sugestões e possiveis negociações..."), indice: linhasDeTexto.length});
    // atualiza o conteúdo da div
    atualizarDiv();
  });//hello world
const botaoApagarLinha = document.querySelector("#botaoApagar1");
// seleciona a div pelo ID
const minhaDiv = document.querySelector("#minhaDivTexto");
 botaoApagarLinha.addEventListener("click", function() {
    // verifica se há linhas de texto
    if (linhasDeTexto.length > 0) {
      // remove a última linha do array
      linhasDeTexto.splice(linhasDeTexto.length - 1, 1);
      // atualiza o conteúdo da div
      atualizarDiv();
    }
  });
  // função para atualizar o conteúdo da div
  function atualizarDiv() {
    // define o conteúdo da div como vazio
    minhaDiv.innerHTML = "";
    // itera sobre o array de linhas de texto, do último para o primeiro
    for (let i = linhasDeTexto.length - 1; i >= 0; i--) {
      // adiciona cada linha de texto à div, com uma quebra de linha
      minhaDiv.innerHTML += linhasDeTexto[i].texto + "<br>";
    }
  }

