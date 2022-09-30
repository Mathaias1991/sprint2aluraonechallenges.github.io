//Funcion para dibujar la horca
function drawCanvas(){
    board.lineWidth = 8;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "black";
    board.strokeStyle = "#8A3871";

    //Base
    board.fillRect(0,0,1440,1024);
    board.beginPath();                           //indica un nuevo camino de un dibujo
    board.strokeStyle = "red";                      
    board.moveTo(580, 600);
    board.lineTo(850, 600);
    board.stroke();
    board.closePath();                     //indica el final del camino de un dibujo 
       
    //Poste
    board.beginPath();
    board.strokeStyle = "red";                    
    board.moveTo(630, 600); 
    board.lineTo(630, 150);
    board.lineTo(760, 150);
    board.lineTo(760, 200);
    board.stroke();
    
 
}


// Guion para cada letra de la palabra a averiguar
    function drawLine(){
    board.beginPath()
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "black";
    board.strokeStyle = "white";
    

    let width = 600/secretWord.length;
    for (let i = 0; i < secretWord.length; i++){
        board.moveTo(420 + (width*i), 790);
        board.lineTo(445 + (width*i), 790);      
          
    }  
   board.stroke()
}

//Funcion que dibuja las letras sobre los guiones corespondientes
function writeCorrectLetter(index){
    board.font = "bold 60px Inter";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "white";
   
    let width = 600/secretWord.length
    board.fillText(secretWord[index],415+(width*index),770)
    board.stroke()
}

function writeWrongLetter(letter, mistakesLeft){
    board.font = "bold 40px Inter";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "red";
    board.fillText(letter, 430+(40*(10-mistakesLeft)), 920,40)
}

function drawHanged(score) {
    board.lineWidth = 8;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "black";
    board.strokeStyle = "white";
    
    //CABEZA
    if(score===8){
        board.moveTo(808,240)
        board.arc(760,250,50,0,Math.PI*2)
    }
    //CUERPO
    if(score===7){
        board.moveTo(760,410)
        board.lineTo(760,300)
    }
    //PIERNA IZQUIERDA
    if(score===6){
        board.moveTo(710,490)
        board.lineTo(760,410)
    }
    //PIERNA DERECHA
    if(score===5){
        board.moveTo(810,490)
        board.lineTo(760,410)
    }
    //MANO IZQUIERDA
    if(score===4){
        board.moveTo(730,340)
        board.lineTo(760,300)
    }
    //MANO DERECHA
    if(score===3){
        board.moveTo(790,340)
        board.lineTo(760,300)
    }
    //PIE IZQUIERDO
    if(score===2){
        board.moveTo(685,500)
        board.lineTo(710,490)
    }
    //PIE DERECHO
    if(score===1){
        
        board.moveTo(835,500)
        board.lineTo(810,490)
        
    }
    if(score===0){
       
        board.moveTo(730,240)
        board.lineTo(750,240)
        board.moveTo(790,240)
        board.lineTo(770,240)

    }
    board.stroke()
    board.closePath()
}

function youLost() {
    board.font = "bold 45px Inter";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "orange";
    board.fillText("Fin del juego!!", 80,350) 
    board.fillText("Vamos intentalo de nuevo!!", 80,400)  
    board.fillText("Tu puedes lograrlo!!", 80,450) 
    setTimeout(recharge , 2000)
}

function youWin() {
    board.font = "bold 45px Inter";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "green";
    board.fillText("Felicidades has ganado!!", 90,350) 
    board.fillText("Eres lo maximo!!", 95,410)  
    setTimeout (recharge , 2000)
}

function recharge() {
    location.reload();
}