function goToConfess() {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "nembak.html";
  }, 800);
}

function nextPage(pageNumber) {
  const current = document.querySelector(".page.active");
  const next = document.getElementById("page" + pageNumber);

  if (current) {
    current.classList.remove("active");
  }

  setTimeout(() => {
    next.classList.add("active");
  }, 200);
}

function restart() {
  const current = document.querySelector(".page.active");
  current.classList.remove("active");
  document.getElementById("page1").classList.add("active");
}

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  // Ganti bunga sesuai selera: 🌸 🌷 🌺
  flower.innerHTML = "💐";

  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";
  flower.style.fontSize = 15 + Math.random() * 20 + "px";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

// Interval muncul bunga
setInterval(createFlower, 300);

function createLove() {
  const love = document.createElement("div");
  love.classList.add("love");

  love.innerHTML = "❤";

  love.style.left = Math.random() * window.innerWidth + "px";
  love.style.animationDuration = 6 + Math.random() * 4 + "s";
  love.style.fontSize = 14 + Math.random() * 18 + "px";
  love.style.color = "rgba(255, 0, 80, 0.8)";

  document.body.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 10000);
}

// Interval love (lebih jarang biar elegan)
setInterval(createLove, 1200);
