// The Game of Black is to have a hand that totals higher than the dealers.
// Create two function for the computer and the user. The user is given two numbers(cards) at random from the array, 
// the computer is given two numbers but only shows one.
// Create a function called Deck that lines up all the cards (Spades Hearts Clover Diamond)
// Create a function called Shuffle that randomly places the deck array elements in different positions
// create a function called Start that call all the other function to begin the game.
// create a function called Hit that gives you two random cards to add in your and the ai decks
// create a function called Stand that checks to see if the ai has an amount least or equal to 17 and returns their deck.
// Create a function called Status that keeps track of the number of wins,loses, and ties


var Suits = ["Clover", "Hearts", "Spade", "Diamonds"];
var Faces = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10", "10", "10"];
var deck = new Array();
//let count = 0;
let lose = 0;
let win = 0;
let ties = 0;
let player_amount = 0;
let ai_amount = 0;

let player_hand = [];
let ai_hand = [];

function Draw_Card()
{
  player_hand = [];
  ai_hand = [];
}

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


function Start()
{
    Deck();
    Shuffle(Deck());
    // deal_out_cards();
    player_hand = Hit();
    ai_hand = Hit();
    //let hand = play_one_hand();
    //console.log(hand);
    //determine_outcome(hand);
    
    //if()

} 

 

function Hit ()
{
    let randomCard = deck[0];
    let randomCard2 = deck[1];
    let randomCard3 = deck[2];
    let randomCard4 = deck[3];
    player_hand.push(randomCard);
    player_hand.push(randomCard2);
    ai_hand.push(randomCard3);
    ai_hand.push(randomCard4);
    player_amount = randomCard2.Value + randomCard.Value;
    if(player_amount > 21)
    {
        lose++;
        console.log("You lose. Your number of loses is: "+ lose);

    }
    else
    {
        deck.shift();
        deck.shift();
        console.log(player_amount);
        return randomCard.Value;
    }
}


function Stand(array)
{
  if (ai_amount >= 17)
  {
    return array;
  }
  else
  {
    Hit();
  }

}

function Reset ()
{
    player_hand = [];
    ai_hand = [];
    Shuffle(Deck());
    player_amount = 0;
    ai_amount = 0;
}

function Status()
{
    if (player_amount > ai_amount && player_amount <= 21)
    {
        win++;
        console.log("You win. Your number of wins is: "+ win);
    }
    else if (player_amount < ai_amount &&  ai_amount <= 21)
    {
        lose++;
        console.log("Dealer win. Your number of loses is: "+ lose);
    }
    else
    {
        ties++;
        console.log("It's a tie. The number of ties is: "+ties)
    }
}

