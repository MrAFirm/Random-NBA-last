NBA = ['LeBron', 'Kobe', 'Jordan', 'Magic', 'Hakeem', 'Kareem', 'Shaq'];

function lastLetter(player) {
  return player[player.length - 1]; // Get the last letter
}

// Pick a random player using JavaScript's built-in Math.random()
const randomIndex = Math.floor(Math.random() * NBA.length);
const randomPlayer = NBA[randomIndex];

// Execute the lastLetter function
const lastLetterOfName = lastLetter(randomPlayer);

console.log("Random player:", randomPlayer);
console.log("Last letter of their name:", lastLetterOfName);
