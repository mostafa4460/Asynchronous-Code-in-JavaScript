const card = axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1');

card
    .then(res => console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`))
    .catch(err => console.log(err));

const card2 = axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=2');

card2
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
        console.log(`${res.data.cards[1].value} of ${res.data.cards[1].suit}`);
    })
    .catch(err => console.log(err));

const $drawBtn = $('.btn');
const $card = $('#card');

$(function() {
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => {
            const deck_id = res.data.deck_id;
            $drawBtn.show();
            $drawBtn.click(() => {
                axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
                    .then(res => {
                        $card.attr("src", res.data.cards[0].image);
                        if (res.data.remaining === 0) {
                            $drawBtn.attr("disabled", true);
                            $drawBtn.addClass("disabled");
                        }
                    })
                    .catch(err => console.log(err));    
            })        
        })
        .catch(err => console.log(err));    
});