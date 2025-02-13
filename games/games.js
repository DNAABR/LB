
// Search functionality for the game library
document.getElementById("gameSearch").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    document.querySelectorAll(".game-card").forEach((card) => {
        const gameTitle = card.querySelector("h3").innerText.toLowerCase();
        if (gameTitle.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
