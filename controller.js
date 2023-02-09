prepareDeck();
function prepareDeck(){
    for(let i=2; i<54; i++){
        deck.push(i);
    }
}

function pickCard(){
    selectedCard = deck[Math.floor(Math.random() * deck.length)];
    dealtCards.push(selectedCard);
    let index = deck.indexOf(selectedCard);
    if(index > -1){
        deck.splice(index, 1);
    }
    updateView();
}

deal();
function deal(){
    reset();
    prepareDeck();
    updateView();
    for(let i=0; i<13; i++){
        pickCard();
    }
    countHighCardPts();
    whatSuit();
    updateView();
}

function whatSuit(){
    for(let x of dealtCards){
        if(x>1 && x<15){
            clubs.push(x);
            highLowSort(clubs);
        }
        else if(x>14 && x<28){
            diamonds.push(x);
            highLowSort(diamonds);
        }
        else if(x>27 && x<41){
            hearts.push(x);
            highLowSort(hearts);
        }
        else {
            spades.push(x);
            highLowSort(spades);
        }
    } 
}

function highLowSort(arr){
    arr.sort(function(a,b){return b-a});
}

function countHighCardPts(){
    for(let x of dealtCards){
        if(x === 14 || x === 27 || x === 40 || x == 53) points += 4;
        if(x === 13 || x === 26 || x === 39 || x == 52) points += 3;
        if(x === 12 || x === 25 || x === 38 || x == 51) points += 2;
        if(x === 11 || x === 24 || x === 37 || x == 50) points += 1;     
    }
}

function checkAnswer(){
    if(answer == points){
        score++;
    }
    else {
        score--;
    }
    deal();
}

function reset(){
    deck.length = 0;
    dealtCards.length = 0;
    spades.length = 0;
    hearts.length = 0;
    clubs.length = 0;
    diamonds.length = 0;
    points = 0;
}