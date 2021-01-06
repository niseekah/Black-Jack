// The Game of Black is to have a hand that totals higher than the dealers.
// Create two function for the computer and the user. The user is given two numbers(cards) at random from the array, 
// the computer is given two numbers but only shows one.
// Create a function called Deck that lines up all the cards (Spades Hearts Clover Diamond)
// create a function called Bust that takes a parameter has an if card amount is greater than 21 "it's a Bust you lose" end Game else continue
// create a function called Hit that gives you a random card to add in your deck
// create a function called Stand that returns your deck


var Suits = ["Clover", "Hearts", "Spade", "Diamonds"];
var Faces = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var deck = new Array();
let count = 0;
let lose = 0;

function Deck()
{
  deck = new Array();
  for(let i = 0; i < Suits.length; i++)
  {
    for(let j = 0; j < Faces.length; j++)
    {
      var card = { Face: Suits[i], Value: Faces[j]};
      deck.push(card)
    }
  }
  return deck;
}
 //console.log(Deck());

 function Shuffle (deck)
{
    let index;
    let temp;
    for(let i = 0; i < deck.length; i++)
    {
        index = Math.floor(Math.random()* deck.length);
        temp = deck[index];
        deck[index] = deck[i];
        deck[i] = temp;
    }

}

//console.log(Shuffle(Deck()))

/*
function start()
{

    deal_out_cards();
    let hand = play_one_hand();
    console.log(hand);
    determine_outcome(hand);
} 
*/
 

function Hit ()
{
    let randomCard = deck[0];
    let randomCard2 = deck[1];
    let total = randomCard.Value+ randdomCard2.Value;
    if(total > 21)
    {
        lose++;
        console.log("You lose. Your number of loses is: "+ lose);

    }
    return deck[randomCard];
}

function Stand(array)
{
    return array;
}
