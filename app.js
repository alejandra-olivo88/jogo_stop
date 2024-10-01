const categories = [
    "Apelidos que a gente já se deu",
    "Pessoas que a gente não gosta",
    "Palavras que a Carla mais fala",
    "Comidas que a gente gosta",
    "Cidades que a gente quer visitar",
    "Partes do corpo que a gente gosta de pegar",
    "Palavras da bíblia que a Emily mais repete",
    "Coisas que a gente gostava e já não"
];

// Função para gerar letra aleatória
function getRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
}

// Função para gerar categorias aleatórias
function getRandomCategories() {
    let shuffled = categories.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5); // Retorna 5 categorias aleatórias
}

// Referências aos elementos HTML
const letterDisplay = document.getElementById("letter-display");
const categoriesDisplay = document.getElementById("categories");
const generateLetterButton = document.getElementById("generate-letter");
const timerDisplay = document.getElementById("timer");

let timer;

// Função para iniciar o cronômetro
function startTimer(duration) {
    let timeRemaining = duration;
    timerDisplay.textContent = timeRemaining;
    
    timer = setInterval(() => {
        timeRemaining--;
        timerDisplay.textContent = timeRemaining;
        
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert("Tempo acabou!");
        }
    }, 1000);
}

// Ação ao clicar no botão
generateLetterButton.addEventListener("click", () => {
    const letter = getRandomLetter();
    const randomCategories = getRandomCategories();

    // Exibir a letra
    letterDisplay.textContent = letter;

    // Limpar categorias anteriores e exibir as novas
    categoriesDisplay.innerHTML = "";
    randomCategories.forEach(category => {
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category");
        
        const categoryLabel = document.createElement("p");
        categoryLabel.textContent = category;
        
        const input = document.createElement("input");
        input.type = "text";
        
        categoryContainer.appendChild(categoryLabel);
        categoryContainer.appendChild(input);
        categoriesDisplay.appendChild(categoryContainer);
    });

    // Iniciar o cronômetro de 60 segundos
    clearInterval(timer); // Limpa o cronômetro anterior, se existir
    startTimer(60);
});

