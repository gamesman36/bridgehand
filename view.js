updateView();
function updateView(){
    html = /*html*/`
    ${displayCards()}
    <br /><br />
    <input type="text" oninput="answer = this.value"> 
    <button onclick="checkAnswer()">Check answer</button>
    <br /><br />
    <b>Score: ${score}</b>
    `;

    app.innerHTML = html;
}

function displayCards(){
    sortedCards = spades.concat(hearts, clubs, diamonds);
    let y = "";
    for(let x of sortedCards){
        y += `<img src='images/${x}.png'>`;
    }
    sortedCards.length = 0;
    return y;
}