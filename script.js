let final = document.getElementsByClassName("final-card")[0];
let newCard = document.getElementById("new-card");
final.addEventListener('click', (e) => {
    document.getElementById("add-msg").innerHTML = "";
    newCard.style.display = "block";
})