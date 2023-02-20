let cardDeck=[]
let player1cards=[]
let player2cards=[]
let player1sum=0;
let player2sum=0;
let message = "";
let hasBlackJack = false;
let isAlive = true;
let startEl = document.getElementById("start");
let messageEl = document.getElementById("message-el");
let p1sumEl = document.getElementById("player1sum-el")
let p2sumEl = document.getElementById("player2sum-el")
let p1cardEl = document.getElementById("player1cards-el")
let p2cardEl = document.getElementById("player2cards-el")
let p1cards="";
let p2cards="";
let chips=1000;
let chipsRemaining=document.getElementById("bet")
let max_amount=document.getElementById("amount")
let chips_rem=document.getElementById("chips-remaining");
let current_bet;

function StartGame(){
    cardDeck=[
        ["2 Of Diamonds", 2], ["2 Of Clubs", 2], ["2 Of Hearts", 2], ["2 Of Spades", 2],["3 Of Diamonds", 3], ["3 Of Clubs", 3], ["3 Of Hearts", 3], ["3 Of Spades", 3],
        ["4 Of Diamonds", 4], ["4 Of Clubs", 4], ["4 Of Hearts", 4], ["4 Of Spades", 4],["5 Of Diamonds", 5], ["5 Of Clubs", 5], ["5 Of Hearts", 2], ["5 Of Spades", 5],
        ["6 Of Diamonds", 6], ["6 Of Clubs", 6], ["6 Of Hearts", 6], ["6 Of Spades", 6],["7 Of Diamonds", 7], ["7 Of Clubs", 7], ["7 Of Hearts", 7], ["7 Of Spades", 7],
        ["8 Of Diamonds", 8], ["8 Of Clubs", 8], ["8 Of Hearts", 8], ["8 Of Spades", 8],["9 Of Diamonds", 9], ["9 Of Clubs", 9], ["9 Of Hearts", 9], ["9 Of Spades", 9],
        ["10 Of Diamonds", 10], ["10 Of Clubs", 10], ["10 Of Hearts", 10], ["10 Of Spades", 10], ["Jack Of Diamonds", 10], ["Jack Of Clubs", 10], ["Jack Of Hearts", 10], ["Jack Of Spades", 10],
        ["Queen Of Diamonds", 10], ["Queen Of Clubs", 10], ["Queen Of Hearts", 10], ["Queen Of Spades", 10], ["King Of Diamonds", 10], ["King Of Clubs", 10], ["King Of Hearts", 10], ["King Of Spades", 10],
        ["Ace Of Diamonds", 11], ["Ace Of Clubs", 11], ["Ace Of Hearts", 11], ["Ace Of Spades", 11]
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
    document.getElementById("player1_new_card").disabled=true;
    document.getElementById("player1_stand").disabled=true;
    p1sumEl.textContent = "Player 1 Sum: " + player1sum;
    p2sumEl.textContent = "Dealer Sum: " + player2sum;
    p1cardEl.textContent = "Player 1 Cards: " + p1cards;
    p2cardEl.textContent = "Dealer Cards: " + p2cards;
    document.getElementById("start").disabled=true;
    document.getElementById("place_bet").disabled=false;
    EnterAmount();
}

function EnterAmount(){
    console.log(chips)

    //chips_rem.innerHTML = chips;
    chipsRemaining.innerText = "Chips Left: " + chips;
    max_amount.max = chips

}

function PlaceBet(){
    let final_bet=max_amount.value
    if(chips-final_bet>=0){
        chips-=final_bet;
        chipsRemaining.innerText = "Chips Left: " + chips;
        current_bet=final_bet
        document.getElementById("player1_new_card").disabled=false;
        document.getElementById("player1_stand").disabled=false;
        document.getElementById("place_bet").disabled=true;
        DealCards();
    }   

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
    p1sumEl.textContent = "Player 1 Sum: " + player1sum;
    p2sumEl.textContent = "Dealer Sum: " + player2sum;
    p1cardEl.textContent = "Player 1 Cards: " + p1cards;
    p2cardEl.textContent = "Dealer Cards: " + p2cards;
}

function NewCard(){
        let firstCard = Math.floor(Math.random()*cardDeck.length);
        player1cards.push(cardDeck[firstCard][0])
        p1cards+=cardDeck[firstCard][0]+" ";
        player1sum +=cardDeck[firstCard][1];
        cardDeck.splice(firstCard, 1)
        if(player1sum<21){
            message="Draw another card?"
            messageEl.textContent = message;
            p1sumEl.textContent = "Sum: " + player1sum;
            p1cardEl.textContent = "Cards: " + p1cards;
            chipsRemaining.innerText = "Chips Left: " + chips;
        }
        else if(player1sum===21){
            if(player2sum===21){
                message="Tie. Play Another Round?"
                chips+=current_bet               
            }
            else{
                message="Blackjack. You Win. Play Another Round?"
                chips+=(2*current_bet)
                hasBlackJack=true;
                document.getElementById("player1_new_card").disabled=true;
                document.getElementById("player1_stand").disabled=true;
                messageEl.textContent = message;
                p1sumEl.textContent = "Sum: " + player1sum;
                p1cardEl.textContent = "Cards: " + p1cards;
                chipsRemaining.innerText = "Chips Left: " + chips;
                StartNewRound();
            }
        }

        else {
            if(chips==0){
                document.getElementById("player1_new_card").disabled=true;
                document.getElementById("player1_stand").disabled=true;
                messageEl.textContent = message;
                p1sumEl.textContent = "Sum: " + player1sum;
                p1cardEl.textContent = "Cards: " + p1cards;
                chipsRemaining.innerText = "Chips Left: " + chips;
                EndGame();
            }
            else{
                message="Bust. Play Another Round?"
                isAlive = false
                document.getElementById("player1_new_card").disabled=true;
                document.getElementById("player1_stand").disabled=true;
                messageEl.textContent = message;
                p1sumEl.textContent = "Sum: " + player1sum;
                p1cardEl.textContent = "Cards: " + p1cards;
                chipsRemaining.innerText = "Chips Left: " + chips;
                StartNewRound();
            }
        }
}

function Stand(){
        document.getElementById("player1_new_card").disabled=true;
        document.getElementById("player1_stand").disabled=true;
        DealerCards()
}

function DealerCards(){
    while(player2sum<17){
        firstCard = Math.floor(Math.random()*cardDeck.length);
        player2cards.push(cardDeck[firstCard][0])
        p2cards+=cardDeck[firstCard][0]+" ";
        player2sum +=cardDeck[firstCard][1];
        cardDeck.splice(firstCard, 1)
        p2sumEl.textContent = "Sum: " + player2sum;
        p2cardEl.textContent = "Cards: " + p2cards;
    }
    if(player1sum===player2sum){
        message="Tie. Play Another Round?"
        chips+=current_bet
    }
    else if(player2sum>21){
        message="You win. Play Another Round?"
        chips+=(2*current_bet)
        isAlive = false
    }
    else if(player2sum>player1sum){
        message="You lose. Play Another Round?"
    }
    else if(player2sum<player1cards){
        message="You win. Play Another Round?"
        chips+=(2*current_bet)
    }
    messageEl.textContent = message;

    chipsRemaining.innerText = "Chips Left: " + chips;
    if(chips==0){
        EndGame();
    }
    else{
        StartNewRound()
    }
}

function StartNewRound(){
    document.getElementById("start").disabled=false;

}

function EndGame(){
    message="You are out of chips. Play again?"
    messageEl=message;
    chips=1000
}
