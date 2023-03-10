let cardDeck=[]
let player1cards=[]
let player2cards=[]
let player1sum=0;
let player2sum=0;
let message = "";
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
let p1sumEl = document.getElementById("player1sum-el")
let p2sumEl = document.getElementById("player2sum-el")
let p1cardEl = document.getElementById("player1cards-el")
let p2cardEl = document.getElementById("player2cards-el")
let turn = document.getElementById("turn-el")
let p1cards="";
let p2cards="";

function StartGame(){
    cardDeck=[
        ["2OfDiamonds", 2], ["2OfClubs", 2], ["2OfHearts", 2], ["2OfSpades", 2],["3OfDiamonds", 3], ["3OfClubs", 3], ["3OfHearts", 3], ["3OfSpades", 3],
        ["4OfDiamonds", 4], ["4OfClubs", 4], ["4OfHearts", 4], ["4OfSpades", 4],["5OfDiamonds", 5], ["5OfClubs", 5], ["5OfHearts", 2], ["5OfSpades", 5],
        ["6OfDiamonds", 6], ["6OfClubs", 6], ["6OfHearts", 6], ["6OfSpades", 6],["7OfDiamonds", 7], ["7OfClubs", 7], ["7OfHearts", 7], ["7OfSpades", 7],
        ["8OfDiamonds", 8], ["8OfClubs", 8], ["8OfHearts", 8], ["8OfSpades", 8],["9OfDiamonds", 9], ["9OfClubs", 9], ["9OfHearts", 9], ["9OfSpades", 9],
        ["10OfDiamonds", 10], ["10OfClubs", 10], ["10OfHearts", 10], ["10OfSpades", 10], ["JackOfDiamonds", 10], ["JackOfClubs", 10], ["JackOfHearts", 10], ["JackOfSpades", 10],
        ["QueenOfDiamonds", 10], ["QueenOfClubs", 10], ["QueenOfHearts", 10], ["QueenOfSpades", 10], ["KingOfDiamonds", 10], ["KingOfClubs", 10], ["KingOfHearts", 10], ["KingOfSpades", 10],
        ["AceOfDiamonds", 11], ["AceOfClubs", 11], ["AceOfHearts", 11], ["AceOfSpades", 11]
    ]
    player1sum=0;
    player2sum=0;
    player1cards=[]
    player2cards=[]
    p1cards="";
    p2cards="";
    hasBlackJack = false;
    isAlive = true;
    message = "";
    messageEl.textContent = message;
    document.getElementById("player1_new_card").disabled=false;
    document.getElementById("player2_new_card").disabled=true;
    document.getElementById("player1_stand").disabled=false;
    document.getElementById("player2_stand").disabled=true;
    turn.textContent = "Turn: Player1" 
    DealCards();
}

function DealCards(){
    let firstCard;
    for(let i=0; i<2; i++){
        firstCard = Math.floor(Math.random()*cardDeck.length);
        player1cards.push(cardDeck[firstCard][0]);
        p1cards+=cardDeck[firstCard][0]+" ";
        player1sum+=cardDeck[firstCard][1];
        cardDeck.splice(firstCard, 1)
        firstCard = Math.floor(Math.random()*cardDeck.length);
        player2cards.push(cardDeck[firstCard][0]);
        p2cards+=cardDeck[firstCard][0]+" ";
        player2sum+=cardDeck[firstCard][1]
        cardDeck.splice(firstCard, 1)
    }
    console.log(p2cards)
    p1sumEl.textContent = "Player 1 Sum: " + player1sum;
    p2sumEl.textContent = "Player 2 Sum: " + player2sum;
    p1cardEl.textContent = "Player 1 Cards: " + p1cards;
    p2cardEl.textContent = "Player 2 Cards: " + p2cards;

}


function NewCard(player){
    if(player==="1"){
        let firstCard = Math.floor(Math.random()*cardDeck.length);
        player1cards.push(cardDeck[firstCard][0])
        p1cards+=cardDeck[firstCard][0]+" ";
        player1sum +=cardDeck[firstCard][1];
        cardDeck.splice(firstCard, 1)
        if(player1sum<21){
            message="Draw another card?"
        }

        else if(player1sum===21){
            message="Blackjack. Player 1 Wins."
            hasBlackJack=true;
            document.getElementById("player1_new_card").disabled=true;
            document.getElementById("player1_stand").disabled=true;
        }

        else {
            message="Bust. Player 2 Wins."
            isAlive = false
            document.getElementById("player1_new_card").disabled=true;
            document.getElementById("player1_stand").disabled=true;
        }
        messageEl.textContent = message;
        p1sumEl.textContent = "Sum: " + player1sum;
        p1cardEl.textContent = "Cards: " + p1cards;
    }
    else{
        let firstCard = Math.floor(Math.random()*cardDeck.length);
        player2cards.push(cardDeck[firstCard][0])
        p2cards+=cardDeck[firstCard][0]+" ";
        player2sum +=cardDeck[firstCard][1];
        cardDeck.splice(firstCard, 1)
        if(player2sum>21){
            message="Bust. Player 1 Wins."
            isAlive = false
            document.getElementById("player2_new_card").disabled=true;
            document.getElementById("player2_stand").disabled=true;
        }
        else if(player2sum>player1sum){
            message="Player 2 Wins."
            document.getElementById("player2_new_card").disabled=true;
            document.getElementById("player2_stand").disabled=true;

        }
        else if(player2sum<21){
            message="Draw another card?"
        }

        else if(player2sum===21){
            message="Blackjack. Player 2 Wins."
            hasBlackJack=true;
            document.getElementById("player2_new_card").disabled=true;
            document.getElementById("player2_stand").disabled=true;
        }
        messageEl.textContent = message;
        p2sumEl.textContent = "Sum: " + player2sum;
        p2cardEl.textContent = "Cards: " + p2cards;
    }
}

function Stand(player){
    if(player==='1'){
        document.getElementById("player1_new_card").disabled=true;
        document.getElementById("player2_new_card").disabled=false;
        document.getElementById("player1_stand").disabled=true;
        document.getElementById("player2_stand").disabled=false;
        turn.textContent = "Turn: Player 2"
    }
    else{
        document.getElementById("player1_new_card").disabled=false;
        document.getElementById("player2_new_card").disabled=true; 
        document.getElementById("player1_stand").disabled=false;
        document.getElementById("player2_stand").disabled=true;
        turn.textContent = "Turn: Player 1"       
    }
}
