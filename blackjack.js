// The Game of Black is to have a hand that totals higher than the dealers.
// In the main function, put 2 thru 10, "Ace", "Jack", "Queen", "King" inside an array called Deck. 
// The user is given two numbers(cards) at random from the array, the computer is given two numbers but only shows one.
// Create a function called Deck that lines up all the cards (Spades Hearts Clover Diamond)
// create a function called Bust that takes a parameter has an if card amount is greater than 21 "it's a Bust you lose" end Game else continue
// create a function called Hit that gives you a random card to add in your deck
// create a function called Stand that returns your deck


var Suits = ["Clover", "Hearts", "Spade", "Diamonds"];
var Faces = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var deck = new Array();
let count;
let array = [];
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

}
 //console.log(Deck());

 
function Bust (count)
{
    if (count > 21)
    {
        console.log("it's a Bust you lose");
        break;
    }
    return 0;
}

function Hit ()
{
    let randomCard = Math.floor(Math.random() * deck.length);
    return randomCard;
}

function Stand(array)
{
    return array;
}

    