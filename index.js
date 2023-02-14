
//let firstCard = Math.floor(Math.random()*11+2);
//let secondCard = Math.floor(Math.random()*11+2);
let cardDeck=[]
let player1Cards=[]
let player2card=[]
let sum=0;
let message = "";
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let cards="";

function StartGame(){
    cardDeck=[
        ["2OfDiamonds", 2], ["2OfClubs", 2], ["2OfHearts", 2], ["2OfSpades", 2],["3OfDiamonds", 3], ["3OfClubs", 3], ["3OfHearts", 3], ["3OfSpades", 3],
        ["4OfDiamonds", 4], ["4OfClubs", 4], ["4OfHearts", 4], ["4OfSpades", 4],["5OfDiamonds", 5], ["5Clubs", 5], ["5OfHearts", 2], ["5OfSpades", 5],
        ["6OfDiamonds", 6], ["6OfClubs", 6], ["6OfHearts", 6], ["6OfSpades", 6],["7OfDiamonds", 7], ["7OfClubs", 7], ["7OfHearts", 7], ["7OfSpades", 7],
        ["8OfDiamonds", 8], ["8OfClubs", 8], ["8OfHearts", 8], ["8OfSpades", 8],["9OfDiamonds", 9], ["9OfClubs", 9], ["9OfHearts", 9], ["9OfSpades", 9],
        ["10OfDiamonds", 10], ["10OfClubs", 10], ["10OfHearts", 10], ["10OfSpades", 10], ["JackOfDiamonds", 10], ["JackOfClubs", 10], ["JackOfHearts", 10], ["JackOfSpades", 10],
        ["QueenOfDiamonds", 10], ["QueenOfClubs", 10], ["QueenOfHearts", 10], ["QueenOfSpades", 10], ["KingOfDiamonds", 10], ["KingOfClubs", 10], ["KingOfHearts", 10], ["KingOfSpades", 10],
        ["AceOfDiamonds", 11], ["AceOfClubs", 11], ["AceOfHearts", 11], ["AceOfSpades", 11]
    ]
    sum=0;
    cards="";
    hasBlackJack = false;
    isAlive = true;
    message = "";
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " + cards;
    document.getElementById("new_card").disabled=false;

}

function NewCard(player){
    let firstCard = Math.floor(Math.random()*11+2);
    sum +=firstCard;
    cards+=firstCard + " ";
    if(sum<21){
        message="Draw another card?"
    }

    else if(sum===21){
        message="Blackjack"
        hasBlackJack=true;
        document.getElementById("new_card").disabled=true;
    }

    else {
        message="Lost"
        isAlive = false
        document.getElementById("new_card").disabled=true;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " + cards;
}