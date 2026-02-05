const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".movie-card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // active state
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const genre = button.dataset.genre;

    cards.forEach(card => {
      if (genre === "all" || card.dataset.genre.includes(genre)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
