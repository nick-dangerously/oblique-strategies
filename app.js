'use strict';

const strategies = [ 
  //From David
  { strategy: "Turn it over.", hint: "turn" },
  { strategy: "Switch the axes.", hint: "axes" },
  { strategy: "Think about color.", hint: "color" },
  { strategy: "Make it black and white.", hint: "monochrome" },
  { strategy: "Use the tangents.", hint: "tangent" },
  { strategy: "Move across the room.", hint: "room" },
  { strategy: "Restart.", hint: "restart" },
  { strategy: "Make it ridiculous.", hint: "ridiculous" },
  { strategy: "Stop making sense.", hint: "sense" },
  { strategy: "Emphasize the side effects.", hint: "effects" },
  { strategy: "Turn it into a game.", hint: "game" },
  { strategy: "More semicolons.", hint: "semicolon" },
  { strategy: "A => AB, B => B.", hint: "logic" },
  { strategy: "Apply the Sieve of Eratosthenes.", hint: "math" },
  { strategy: "0,1,1 => 0,0,0.", hint: "simplify" },
  { strategy: "1,0,1 => 0,1,0.", hint: "arrange" },
  //with Chandler
  { strategy: "Maybe you should use %", hint: "mod" },
  { strategy: "Block, Beehive, Loaf, Boat.", hint: "boat" },
  { strategy: "Blinker, Toad, Beacon, Pulsar.", hint: "bacon" },
  { strategy: "Glider, LWSS.", hint: "glider" },
  { strategy: "The R pentomino.", hint: "automata" },
  { strategy: "Make the model the view.", hint: "view" },
  { strategy: "Change your controller.", hint: "controller" },
  //From origina l
  { strategy: "Try faking it.", hint: "fake" },
  { strategy: "State the problem in words as clearly as possible.", hint: "words" },
  { strategy: "Only one element of each kind.", hint: "element" },
  { strategy: "What would your closest friend do?", hint: "friend" },
  { strategy: "What to increase? What to reduce?", hint: "increase" },
  { strategy: "Are there sections? Consider transitions.", hint: "transition" },
  //from Casey
  { strategy: "Don't think. Do.", hint: "nike" },
  { strategy: "But, does it float?", hint: "float" },
  { strategy: "Remove half.", hint: "half" },
  { strategy: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597...", hint: "fibonacci" },
  { strategy: "3.1415926535897932384626433832795028...", hint: "pi" },
  { strategy: "Double the main element.", hint: "double" },
  //from original deck (Brian Eno)
  { strategy: "Abandon normal instruments.", hint: "strange" },
  { strategy: "Accept advice.", hint: "advice" },
  { strategy: "Accretion.", hint: "accretion" },
  { strategy: "A line has two sides.", hint: "line" },
  { strategy: "Balance the consistency principle with the inconsistency principle.", hint: "balance" },
  { strategy: "Be dirty.", hint: "dirty" },
  { strategy: "Breathe more deeply.", hint: "breathe" },
  { strategy: "Bridges -build -burn.", hint: "bridges" },
  { strategy: "Cascades.", hint: "cascade" },
  { strategy: "Cluster analysis.", hint: "cluster" },
  { strategy: "Consider different fading systems.", hint: "fade" },
  { strategy: "Courage!", hint: "courage" },
  { strategy: "Cut a vital connection.", hint: "connection" },
  { strategy: "Decorate, decorate.", hint: "decorate" },
  { strategy: "Define an area as 'safe' and use it as an anchor.", hint: "safe" },
  { strategy: "Destroy the most important thing.", hint: "destroy" },
  { strategy: "Discard an axiom.", hint: "discard" },
  { strategy: "Disconnect from desire.", hint: "disconnect" },
  { strategy: "Discover the recipes you are using and abandon them.", hint: "recipe" },
  { strategy: "Distorting time.", hint: "time" },
  { strategy: "Don't be afraid of things because they're easy to do.", hint: "easy" },
  { strategy: "Don't be frightened of cliches.", hint: "cliche" },
  { strategy: "Don't be frightened to display your talents.", hint: "talent" },
  { strategy: "Don't stress one thing more than another.", hint: "stres" },
  { strategy: "Do something boring.", hint: "boring" },
  { strategy: "Do the washing up.", hint: "wish" },
  { strategy: "Do the words need changing?", hint: "words" },
  { strategy: "Do we need holes?", hint: "hole" },
  { strategy: "Emphasize differences.", hint: "different" },
  { strategy: "Emphasize repetitions.", hint: "repitition" },
  { strategy: "Emphasize the flaws.", hint: "flaw" },
  { strategy: "Get your neck massaged.", hint: "neck" },
  { strategy: "Give way to your worst impulse.", hint: "impulse" },
  { strategy: "Go slowly all the way round the outside.", hint: "outside" },
  { strategy: "Honor thy error as a hidden intention.", hint: "hidden" },
  { strategy: "How would you have done it?", hint: "done" },
  { strategy: "Humanize something free of error.", hint: "human" },
  { strategy: "Infinitesimal gradations.", hint: "smooth" },
  { strategy: "Into the impossible.", hint: "impossible" },
  { strategy: "Is it finished?", hint: "finish" },
  { strategy: "Is there something missing?", hint: "missing" },
  { strategy: "Just carry on.", hint: "carry" },
  { strategy: "Left channel, right channel, centre channel.", hint: "channel" },
  { strategy: "Look at a very small object, look at its centre.", hint: "tiny" },
  { strategy: "Look at the order in which you do things.", hint: "order" },
  { strategy: "Look closely at the most embarrassing details and amplify them.", hint: "embarass" },
  { strategy: "Make a blank valuable by putting it in an exquisite frame.", hint: "frame" },
  { strategy: "Make an exhaustive list of everything you might do and do the last thing on the list.", hint: "last" },
  { strategy: "Make a sudden, destructive unpredictable action; incorporate.", hint: "destroy" },
  { strategy: "Only one element of each kind.", hint: "unique" },
  { strategy: "Remember those quiet evenings.", hint: "quiet" },
  { strategy: "Remove ambiguities and convert to specifics.", hint: "specific" },
  { strategy: "Remove specifics and convert to ambiguities.", hint: "general" },
  { strategy: "Repetition is a form of change.", hint: "repeat" },
  { strategy: "Reverse.", hint: "reverse" },
  { strategy: "Simple subtraction.", hint: "subtract" },
  { strategy: "Spectrum analysis.", hint: "spectrum" },
  { strategy: "Take a break.", hint: "break" },
  { strategy: "Take away the elements in order of apparent non-importance.", hint: "trivia" },
  { strategy: "Tidy up.", hint: "clean" },
  { strategy: "Turn it upside down.", hint: "flip" },
  { strategy: "Twist the spine.", hint: "twist" },
  { strategy: "Use an old idea.", hint: "old" },
  { strategy: "Use an unacceptable color.", hint: "garish" },
  { strategy: "Water.", hint: "water" },
  { strategy: "What are you really thinking about just now? Incorporate.", hint: "think" },
  { strategy: "What is the reality of the situation?", hint: "reality" },
  { strategy: "What mistakes did you make last time?", hint: "mistake" },
  { strategy: "What wouldn't you do?", hint: "gross" },
  { strategy: "Work at a different speed.", hint: "fall" },
  // From Pete
  { strategy: "Take a walk.", hint: "walk" }, 
  { strategy: "Take a shower.", hint: "shower" },
  { strategy: "Look to Nature.", hint: "nature" }, 
  { strategy: "Talk it through with a friend.", hint: "talk" },
  { strategy: "Who's my audience.", hint: "audience" },
  { strategy: "Forget the money, make it cool.", hint: "cool" }
];

function randomStrategy() {
  return strategies[Math.floor(Math.random() * strategies.length)]; 
}

function getGifUrl(gifTag) {
  let url = "https://api.giphy.com/v1/gifs/random?tag=" + gifTag + "&rating=g" + "&api_key=" + CONFIG.key;
  fetch(url).then(function(responseObj){
    console.log('status: ', responseObj.status);
    return responseObj.json();
  }).then(function(jsonObj) {
    console.log(jsonObj.data.embed_url);    
    // Upate URl here
    document.getElementById("gif").src = jsonObj.data.embed_url;
  });
}

let card = randomStrategy();
let cardTitle = card.strategy;
document.getElementById("cardTitle").innerHTML = cardTitle;
// Get a gif "related" to the strtegy
getGifUrl(card.hint);



const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      // return 'You liked this.';
      return randomStrategy();
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);