const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
      randomString = length => Array.from(Array(length)).map(randomChar).join("");

const cards = document.querySelectorAll(".card");

const handleOnMove = (card, e) => {
  const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  const letters = card.querySelector(".card-letters");
  letters.style.setProperty("--x", `${x}px`);
  letters.style.setProperty("--y", `${y}px`);

  letters.innerText = randomString(1000);    
}

cards.forEach(card => {
  card.onmousemove = e => handleOnMove(card, e);
  card.ontouchmove = e => handleOnMove(card, e.touches[0]);
});