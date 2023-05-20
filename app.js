let quotes = [];

async function logJSONData() {
  const response = await fetch("https://type.fit/api/quotes");
  quotes = await response.json();
}

const btn = document.getElementById("btnGenerator");
const quoteEl = document.getElementById("quote");
const author = document.getElementById("author");
// aside
const menu = document.querySelector(".menu");
const exit = document.querySelector(".close");
const sidebar = document.querySelector("aside");
const ul = document.getElementById("recentQuotes");
const button = document.getElementById("twitter");

const random = async () => {
  await logJSONData()
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.innerHTML = random.text;
  author.innerHTML = random.author;

  // create list
  const li = document.createElement("li");
  ul.appendChild(li);
  li.setAttribute("id", "recentQuote");

  // add the quote in li
  li.innerHTML = `${random.text} — ${random.author}`;

  // aside
  const recentTitle = document.getElementById("recentTitle");

  if (li > 1) {
    console.log("hello");
  }

  button.href = `https://twitter.com/intent/tweet?text=${random.text} - ${random.author}`;
};

logJSONData()
random();

// event listners
btn.addEventListener("click", () => {
  random();
});

menu.addEventListener("click", () => {
  console.log("open");
  sidebar.classList.add("open");
});

exit.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
