//Selectores
let btnNewGame = document.getElementById("start-game-horca");
let btnCancel = document.getElementById("cancel-horca");
let btnSaveWord = document.getElementById("start-game-new-word");



var words = ["MUNDIAL", "TIERRA", "VIENTO", "FUEGO", "JAVASCRIPT","MUGIBARA","GOKU","UNIVERSO", "ABUNDANCIA", "PROSPERIDAD","AVATAR", "ALURA", "HUMANIDAD", "EMPERADOR", "TERMO", "MILLONARIO", "DESARROLLADOR", "PROGRAMADOR", "CONSCIENCIA", "INCONSCIENCIA", "AFORTUNADO", "PYTHON", "GOLAND", "LUNA", "ROCIO", "VOLCAN", "JET", "NAPOLITANO", "TALENTO", "ORACLE", "DESAFIO", "SENTIMIENTO", "ALMA", "ESTRALLA", "METAFISICA" ];
let board = document.getElementById('horca').getContext('2d');            
let secretWord = "";
let letters = [];
let correctWord = "";
let mistakes = 8;
let wrongLetter = [];
let numberOfMistakes = 8
let ChosenLetter = [];

//Eventos
//Permite empezar el juego al hacer clic en el boton "Comienza el desafio"
document.getElementById("start-game-horca").onclick = () => {
    startGame();
}
//Permite resetear la pantalla al dar clic en el boton "cancel"
document.getElementById("cancel-horca").onclick = () => {
    recharge();
}

//Permite capturar y guardar la nueva palabra escrita por el usuario
document.getElementById("start-game-new-word").onclick = () => {
    saveWord();
}


//

//Funcion escojer palabra secreta
function chooseSecretWord(){    
    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    console.log(word) 
    return word   

}

//Funcion que verifica cual es la letra en que el usuario hizo clic
function verifyClickedLetter(key) {
    if (letters.length < 1 || letters.indexOf(key) < 0) {
        letters.push(key)
        return false
    }else{
        letters.push(key)
        return true
    }
}

//Funcion que agrega la letra correcta
function addCorrectLetter(i) {
    correctWord += secretWord[i].toUpperCase()
}

//Funcion que agrega la letra incorrecta
function addWrongLetter(letter){
    if(secretWord.indexOf(letter) <= 0){
        mistakes -= 1
    }  
}

//Funcion que verisfica el fin del juego
function checkGameEnd(letter) {
    //Chequea si la letra ha sido incluida en el array de las letras correctas
    if(ChosenLetter.length < secretWord.length) {
        //Incluye las letras ya digitadas en el array
        wrongLetter.push(letter);

        //Valida si el usuario cometio el numero maximo de errores
        if(wrongLetter.length > numberOfMistakes) {
            youLost()
        } else if (ChosenLetter.length < secretWord.length) {
            addWrongLetter(letter)
            writeWrongLetter(letter,mistakes)
        }
    }
}

//Funcion que impide que teclas como shift, ctrl y otras, sean escritas. Las considera nulas. 
function verifyLetter (keyCode){
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
        return true;
    } else {
        return false;
    }
}

//Funcion que verifica si el usuario ha ganado el desafio
function verifyWinner(letter){
    ChosenLetter.push(letter.toUpperCase());
    if (ChosenLetter.length == secretWord.length){
        youWin()
    }
}

//Guardar la palabra que el usuario desea agregar
function saveWord() {
    //Captura lo que el usuario ha ingresado
    let newWord = document.getElementById('input-textarea-new-word').value;
    //Incluye la palabra que el usuario digito dentro del array de las palabras que seran sorteadas
    if(newWord !== ""){
        words.push(newWord.toUpperCase());
        alert("La palabra ha sido guardada correctamente");
      
    }else{
        alert("Ninguna palabra ha sido agregada")
    }
}
 
//Funcion que inicia el juego
function startGame(){

    chooseSecretWord();
    drawCanvas();
    drawLine()
   
    //Captura la letra que el usuario escribio
    document.onkeydown = (e) => {
        // Pone la letra en letra mayuscula
        let letter = e.key.toUpperCase()
        // Verifica si el usario todavia no ha perdido
        if (wrongLetter.length <= numberOfMistakes) {
            if (!verifyClickedLetter(e.key) && verifyLetter(e.keyCode)){
                if (secretWord.includes(letter)){
                    addCorrectLetter(secretWord.indexOf(letter))
                    for(let i = 0; i < secretWord.length; i++){
                        if(secretWord[i] === letter){
                            writeCorrectLetter(i)
                            verifyWinner(letter)
                        
                }
            }
        } else {
            if(!verifyClickedLetter(e.key) && !verifyWinner(letter)) return
            drawHanged(mistakes)
            checkGameEnd(letter)        
        }       
    }
} else {
    alert ("HAS ALCANZADO EL LIMITE DE LETRAS INCORRECTAS")
        }
    }
}