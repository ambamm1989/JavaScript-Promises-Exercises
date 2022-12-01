$(function(): void {
    let baseURL : string = "https://deckofcardsapi.com/api/deck";

$.getJSON(`${baseURL}/new/draw/`).then(data => {
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase}`);
});

let firstCard : any = null;
$.getJSON(`${baseURL}/new/draw/`)
    .then(data : any => {
        firstCard = data.cards[0];
        let deckId : any = data.deck_id;
        return $.getJSON(`${baseURL}/${deckId}/draw/`);
    })
    .then(data : any => {
        let secondCard : any = data.cards[0];
        [firstCard, secondCard].forEach((function(card : any) :void {
            console.log(
                `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
            );
        });
    });

let deckId : any = null;
let $btn : any = $('button');
let $cardArea : any = $('#card-area');

$.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    deckId = data.deck_id;
    $btn.show();
});

$btn.on('click', function() : void {
    $.getJSON(`${baseURL}/${deckId}/draw`).then(data => {
        let cardSrc : any = data.cards[0].image
        let angle : number = Math.random() * 90 - 45;
        let randomX : number = Math.random() * 40 - 20;
        let randomY : number = Math.random() * 40 - 20;
        $cardArea.append(
            $(`<img>`, {
                src: cardSrc,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle} deg)`
                }
            })
        );
        if (data.remaining === 0) $btn.remove();
    });
});
});