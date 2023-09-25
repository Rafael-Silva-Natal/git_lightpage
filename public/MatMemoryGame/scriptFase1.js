const images = [
    { id: 1, type: "pergunta", src: "./images1/pergunta1.png", matched: false },
    { id: 2, type: "pergunta", src: "./images1/pergunta2.png", matched: false },
    { id: 3, type: "pergunta", src: "./images1/pergunta3.png", matched: false },
    { id: 4, type: "pergunta", src: "./images1/pergunta4.png", matched: false },

    { id: 5, type: "resposta", src: "./images1/resposta1.png", questionId: 1, matched: false },
    { id: 6, type: "resposta", src: "./images1/resposta2.png", questionId: 2, matched: false },
    { id: 7, type: "resposta", src: "./images1/resposta3.png", questionId: 3, matched: false },
    { id: 8, type: "resposta", src: "./images1/resposta4.png", questionId: 4, matched: false },

    { id: 9, type: "pergunta", src: "./images1/pergunta5.png", matched: false },
    { id: 10, type: "pergunta", src: "./images1/pergunta6.png", matched: false },
    { id: 11, type: "pergunta", src: "./images1/pergunta7.png", matched: false },
    { id: 12, type: "pergunta", src: "./images1/pergunta8.png", matched: false },
    
    { id: 13, type: "resposta", src: "./images1/resposta5.png", questionId: 9, matched: false },
    { id: 14, type: "resposta", src: "./images1/resposta6.png", questionId: 10, matched: false },
    { id: 15, type: "resposta", src: "./images1/resposta7.png", questionId: 11, matched: false },
    { id: 16, type: "resposta", src: "./images1/resposta8.png", questionId: 12, matched: false }
  ];


//implementação do código:


let cards = [];
let flippedCards = [];
let canFlip = true;
let matchedPairsCount = 0;

function createCard(image) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.imageId = image.id;
  card.dataset.type = image.type;
  card.dataset.matched = image.matched;

  card.addEventListener("click", () => flipCard(card));

  return card;
}

function flipCard(card) {
  if (!canFlip || flippedCards.length >= 2 || card === flippedCards[0] || card.dataset.matched === "true") return;

  const image = images.find(img => img.id.toString() === card.dataset.imageId);

  card.style.backgroundImage = `url(${image.src})`;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    document.getElementById("checkButton").removeAttribute("disabled");
  }
}

// colagem até check cards ...


  
  // Restante do código permanece o mesmo até a função checkCards()
  
 /* function checkCards() {
    // Restante da função permanece o mesmo
  }
*/
// código original sugerido peo gpt...


// repetição da função sugerida pelo código acima:

function checkCards() {
  const [card1, card2] = flippedCards;
  const image1 = images.find(img => img.id.toString() === card1.dataset.imageId);
  const image2 = images.find(img => img.id.toString() === card2.dataset.imageId);

  if (image1.type === "pergunta" && image2.type === "resposta" && image1.id === image2.questionId) {
    // Cartas correspondem
    image1.matched = true;
    image2.matched = true;

    card1.dataset.matched = "true";
    card2.dataset.matched = "true";

    flippedCards = [];
    document.getElementById("checkButton").setAttribute("disabled", "true");
    matchedPairsCount++;

    alert(`Par encontrado! Você completou ${matchedPairsCount} par(es).`);

    if (matchedPairsCount === images.length / 2) {
      alert("Parabéns! Você encontrou todos os pares!");
      //document.getElementById("restartButton").style.display = "block";// parte do código removido em teste


      // tentaviva de atualização automática para sanar a falha
        // Adicione o comando para recarregar a página
        window.location.reload();

    }


    
  } else {
    // Cartas não correspondem
    setTimeout(() => {
      card1.style.backgroundImage = `url(./images1/verso.png)`;
      card2.style.backgroundImage = `url(./images1/verso.png)`;
      flippedCards = [];
      document.getElementById("checkButton").setAttribute("disabled", "true");
    }, 1000);
  }
  canFlip = true;
}


// colagem da sugestão...



  
  function initGame() {
    matchedPairsCount = 0;
    canFlip = true;
    flippedCards = [];
    
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = "";
    
    setupCards();
    
    startButton.textContent = "Reiniciar Jogo";
  }
  
  function setupCards() {
    const shuffledQuestions = images.filter(image => image.type === "pergunta");
    const shuffledAnswers = images.filter(image => image.type === "resposta");
    
    shuffleArray(shuffledQuestions);
    shuffleArray(shuffledAnswers);
    
    const shuffledImages = [];
    
    for (let i = 0; i < shuffledQuestions.length; i++) {
      shuffledImages.push(shuffledQuestions[i], shuffledAnswers[i]);
    }
    
    shuffledImages.forEach(image => {
      const card = createCard(image);
      gameBoard.appendChild(card);
    });
    
    const checkButton = document.getElementById("checkButton");
    checkButton.addEventListener("click", checkCards);
  }
  
  // Função para embaralhar um array utilizando o algoritmo Fisher-Yates
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", initGame);
  
  const checkButton = document.getElementById("checkButton");
  checkButton.addEventListener("click", checkCards);


     // Função para redirecionar a pagina
     function redirecionar1() {
      // Altere o URL abaixo para a página desejada
      window.location.href = "https://rafael-silva-natal.github.io/git_lightpage/";// preencher a URL da light page aqui!!!
  }

  // Obtém o elemento do botão por seu ID
  var botao = document.getElementById("meuBotao1");

  // Adiciona um ouvinte de evento ao botão
  botao.addEventListener("click", redirecionar1);