'use strict';

// List from https://github.com/sansumbrella/Processing-ObliqueStrategies/blob/master/src/com/sansumbrella/StrategyList.java
const strategies = [ 
  //From David
  { strategy: "Turn it over.", hint: "turn" },
  { strategy: "Switch the axes." },
  { strategy: "Think about color." },
  { strategy: "Make it black and white." },
  { strategy: "Use the tangents." },
  { strategy: "Move across the room." },
  { strategy: "Restart." },
  { strategy: "Make it ridiculous." },
  { strategy: "Stop making sense." },
  { strategy: "Emphasize the side effects." },
  { strategy: "Turn it into a game." },
  { strategy: "More semicolons." },
  { strategy: "A => AB, B => B." },
  { strategy: "Apply the Sieve of Eratosthenes." },
  { strategy: "0,1,1 => 0,0,0." },
  { strategy: "1,0,1 => 0,1,0." },
  //with Chandler
  { strategy: "Maybe you should use %" },
  { strategy: "Block, Beehive, Loaf, Boat." },
  { strategy: "Blinker, Toad, Beacon, Pulsar." },
  { strategy: "Glider, LWSS." },
  { strategy: "The R pentomino." },
  { strategy: "Make the model the view." },
  { strategy: "Change your controller." },
  //From origina l
  { strategy: "Try faking it." },
  { strategy: "State the problem in words as clearly as possible." },
  { strategy: "Only one element of each kind." },
  { strategy: "What would your closest friend do?" },
  { strategy: "What to increase? What to reduce?" },
  { strategy: "Are there sections? Consider transitions." },
  //from Casey
  { strategy: "Don't think. Do." },
  { strategy: "But, does it float?" },
  { strategy: "Remove half." },
  { strategy: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597..." },
  { strategy: "3.1415926535897932384626433832795028..." },
  { strategy: "Double the main element." },
  //from original deck (Brian Eno)
  { strategy: "Abandon normal instruments." },
  { strategy: "Accept advice." },
  { strategy: "Accretion." },
  { strategy: "A line has two sides." },
  { strategy: "Balance the consistency principle with the inconsistency principle." },
  { strategy: "Be dirty." },
  { strategy: "Breathe more deeply." },
  { strategy: "Bridges -build -burn." },
  { strategy: "Cascades." },
  { strategy: "Cluster analysis." },
  { strategy: "Consider different fading systems." },
  { strategy: "Courage!" },
  { strategy: "Cut a vital connection." },
  { strategy: "Decorate, decorate." },
  { strategy: "Define an area as 'safe' and use it as an anchor." },
  { strategy: "Destroy the most important thing." },
  { strategy: "Discard an axiom." },
  { strategy: "Disconnect from desire." },
  { strategy: "Discover the recipes you are using and abandon them." },
  { strategy: "Distorting time." },
  { strategy: "Don't be afraid of things because they're easy to do." },
  { strategy: "Don't be frightened of cliches." },
  { strategy: "Don't be frightened to display your talents." },
  { strategy: "Don't stress one thing more than another." },
  { strategy: "Do something boring." },
  { strategy: "Do the washing up." },
  { strategy: "Do the words need changing?" },
  { strategy: "Do we need holes?" },
  { strategy: "Emphasize differences." },
  { strategy: "Emphasize repetitions." },
  { strategy: "Emphasize the flaws." },
  { strategy: "Get your neck massaged." },
  { strategy: "Give way to your worst impulse." },
  { strategy: "Go slowly all the way round the outside." },
  { strategy: "Honor thy error as a hidden intention." },
  { strategy: "How would you have done it?" },
  { strategy: "Humanize something free of error." },
  { strategy: "Infinitesimal gradations." },
  { strategy: "Into the impossible." },
  { strategy: "Is it finished?" },
  { strategy: "Is there something missing?" },
  { strategy: "Just carry on." },
  { strategy: "Left channel, right channel, centre channel." },
  { strategy: "Look at a very small object, look at its centre." },
  { strategy: "Look at the order in which you do things." },
  { strategy: "Look closely at the most embarrassing details and amplify them." },
  { strategy: "Make a blank valuable by putting it in an exquisite frame." },
  { strategy: "Make an exhaustive list of everything you might do and do the last thing on the list." },
  { strategy: "Make a sudden, destructive unpredictable action; incorporate." },
  { strategy: "Only one element of each kind." },
  { strategy: "Remember those quiet evenings." },
  { strategy: "Remove ambiguities and convert to specifics." },
  { strategy: "Remove specifics and convert to ambiguities." },
  { strategy: "Repetition is a form of change." },
  { strategy: "Reverse." },
  { strategy: "Simple subtraction." },
  { strategy: "Spectrum analysis." },
  { strategy: "Take a break." },
  { strategy: "Take away the elements in order of apparent non-importance." },
  { strategy: "Tidy up." },
  { strategy: "Turn it upside down." },
  { strategy: "Twist the spine." },
  { strategy: "Use an old idea." },
  { strategy: "Use an unacceptable color." },
  { strategy: "Water." },
  { strategy: "What are you really thinking about just now? Incorporate." },
  { strategy: "What is the reality of the situation?" },
  { strategy: "What mistakes did you make last time?" },
  { strategy: "What wouldn't you do?" },
  { strategy: "Work at a different speed." },
  // From Pete
  { strategy: "Take a walk." }, 
  { strategy: "Take a shower." },
  { strategy: "Look to Nature." }, 
  { strategy: "Talk it through with a friend." },
  { strategy: "Who's my audience." },
  { strategy: "Forget the money, make it cool." }
];

function randomStrategy() {
  return strategies[Math.floor(Math.random() * strategies.length)].strategy; 
}

// function getGif(gifTag) {
//   return new Promise(function(resolve, reject) {
//     let req = new XMLHttpRequest();
//     let url = "https://api.giphy.com/v1/gifs/random?tag=" + gifTag + "&api_key=" + CONFIG.key;
//     req.open('GET', url);
//     req.onload = function() {
//       if (req.status == 200) {
//         resolve(req.response);
//       } else {
//         reject(Error(req.statusText));
//       };
//     };
//     req.onerror = function() {
//       reject(Error('Network Error'));
//     };
//   })
// }


function getGif(gifTag) {
  let url = "https://api.giphy.com/v1/gifs/random?tag=" + gifTag + "&api_key=" + CONFIG.key;
  fetch(url);
}


getGif('cat').then(console.log('Success')).catch(console.log(Error));

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