var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    said: "― Oscar Wilde",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    said: "― Mark Twain",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    said: "― Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    said: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    said: "― Bernard M. Baruch",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    said: "― Dr. Seuss",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    said: "― Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    said: "― Mahatma Gandhi",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    said: "― Robert Frost",
  },
];

var random = Math.trunc(Math.random() * quotes.length); //2
//console.log(random);
var showQuote = document.getElementById("quote");
var showSaid = document.getElementById("said");

function generateRandomQuote() {
  var newRandom = Math.trunc(Math.random() * quotes.length); //2
  //console.log(newRandom);
  if (newRandom == random) {
    generateRandomQuote();
  } else {
    setCalss();

    showQuote.innerHTML = quotes[newRandom].quote;
    showSaid.innerHTML = quotes[newRandom].said;
    //console.log(showQuote);
    random = newRandom;
    //console.log(random);
    finishAction(removeClass);
  }
}
function setCalss() {
  showQuote.setAttribute(
    "class",
    "animate__animated animate__bounceInLeft animate__fast"
  );
  showSaid.setAttribute(
    "class",
    "animate__animated animate__bounceInRight animate__fast"
  );
}
function finishAction(callback) {
  setTimeout(() => {
    callback();
  }, 800);
}

function removeClass() {
  showQuote.removeAttribute("class");
  showSaid.removeAttribute("class");
}

document.getElementById("run").onclick = generateRandomQuote;
