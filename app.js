'use strict';

const strategies = [ 
  { strategy: "Try faking it.", hint: "fake" },
  { strategy: "State the problem in words<br>as clearly as possible.", hint: "words" },
  { strategy: "Only one element of each kind.", hint: "element" },
  { strategy: "What would your closest friend do?", hint: "friend" },
  { strategy: "What to increase? What to reduce?", hint: "increase" },
  { strategy: "Are there sections? Consider transitions.", hint: "transition" },
  { strategy: "Abandon normal instruments.", hint: "strange" },
  { strategy: "Accept advice.", hint: "advice" },
  { strategy: "Accretion.", hint: "accretion" },
  { strategy: "A line has two sides.", hint: "line" },
  { strategy: "Balance the consistency principle<br>with the inconsistency principle.", hint: "balance" },
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
  { strategy: "Discover the recipes you are using<br>and abandon them.", hint: "recipe" },
  { strategy: "Distorting time.", hint: "time" },
  { strategy: "Don't be afraid of things<br>because they're easy to do.", hint: "easy" },
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
  { strategy: "Look closely at the most embarrassing details<br>and amplify them.", hint: "embarass" },
  { strategy: "Make a blank valuable by putting it<br>in an exquisite frame.", hint: "frame" },
  { strategy: "Make an exhaustive list of everything you<br>might do and do the last thing on the list.", hint: "last" },
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
  { strategy: "Take away the elements in order<br>of apparent non-importance.", hint: "trivia" },
  { strategy: "Tidy up.", hint: "clean" },
  { strategy: "Turn it upside down.", hint: "flip" },
  { strategy: "Twist the spine.", hint: "twist" },
  { strategy: "Use an old idea.", hint: "old" },
  { strategy: "Use an unacceptable color.", hint: "garish" },
  { strategy: "Water.", hint: "water" },
  { strategy: "What are you really thinking about just now?<br>Incorporate.", hint: "think" },
  { strategy: "What is the reality of the situation?", hint: "reality" },
  { strategy: "What mistakes did you make last time?", hint: "mistake" },
  { strategy: "What wouldn't you do?", hint: "gross" },
  { strategy: "Work at a different speed.", hint: "fall" },
];

function randomStrategy() {
  return strategies[Math.floor(Math.random() * strategies.length)]; 
}

function getGif(gifTag) {
  
  let url = ''
  if (document.getElementById('dadaist').classList.contains('true')) {
    // If dadaist mode is enabled - no limits! Random gif and pg rating!
    url = "https://api.giphy.com/v1/gifs/random?" + "&rating=pg" + "&api_key=" + CONFIG.key  
  } else {
    url = "https://api.giphy.com/v1/gifs/random?tag=" + gifTag + "&rating=g" + "&api_key=" + CONFIG.key;  
  }
  fetch(url).then(function(responseObj){
    return responseObj.json();
  }).then(function(jsonObj) {
    // Update URL here
    document.getElementById("gif").src = jsonObj.data.images.original.url;
  }).catch(function() {
    document.getElementById("cardTitle").innerHTML = "Gif overload! Please wait and try again."
    document.getElementById("gif").src = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
  });
}

function makeCard() {
  let card = randomStrategy();
  let cardTitle = card.strategy;
  document.getElementById("cardTitle").innerHTML = cardTitle;
  // Get a gif "related" to the strtegy
  getGif(card.hint);
}

document.getElementById('dadaist').addEventListener('click', function(event) {
  this.classList.toggle('true');
  this.classList.toggle('hover:bg-blue');
  this.classList.toggle('hover:text-blue-lightest');
});


document.getElementById('reload').addEventListener('click', function(event){
  this.classList.toggle('spin');
  makeCard();
  setTimeout(() => {
    this.classList.remove('spin');
  }, 750);
});


makeCard();