let final = document.getElementById("first-card");
let newCard = document.getElementById("new-card");
final.addEventListener('click', (e) => {
    document.getElementById("add-msg").innerHTML = "";
    newCard.style.display = "flex";
})