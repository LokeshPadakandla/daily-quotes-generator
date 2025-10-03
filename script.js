const quotes = {
  motivation: [
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Unknown" }
  ],
  funny: [
    { text: "I'm not lazy, I'm on energy saving mode.", author: "Unknown" },
    { text: "My bed is a magical place I suddenly remember everything I had to do.", author: "Unknown" }
  ],
  wisdom: [
    { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" }
  ]
};

function getQuote() {
  const category = document.getElementById("category").value;
  let list = [];

  if (category === "all") {
    list = [...quotes.motivation, ...quotes.funny, ...quotes.wisdom];
  } else {
    list = quotes[category];
  }

  const random = list[Math.floor(Math.random() * list.length)];
  document.getElementById("quote").innerText = `"${random.text}"`;
  document.getElementById("author").innerText = `- ${random.author}`;
  changeBackground();
}

function changeBackground() {
  const colors = ["#f9f871", "#fbc2eb", "#a1c4fd", "#ffd6a5", "#b9fbc0"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function readQuote() {
  const quote = document.getElementById("quote").innerText;
  const author = document.getElementById("author").innerText;
  const utterance = new SpeechSynthesisUtterance(`${quote} by ${author}`);
  speechSynthesis.speak(utterance);
}

function copyQuote() {
  const quote = document.getElementById("quote").innerText;
  const author = document.getElementById("author").innerText;
  navigator.clipboard.writeText(`${quote} ${author}`);
  alert("Quote copied to clipboard!");
}
