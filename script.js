let final = document.getElementById("first-card");
let newCard = document.getElementById("new-card");
final.addEventListener('click', (e) => {
    document.getElementById("add-msg").innerHTML = "";
    newCard.style.display = "flex";
})

let submit = document.getElementById("task-btn");
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let title = document.getElementById("task-title").value;
    let details = document.getElementById("task-details").value;
    var cards = document.querySelectorAll('.project-card');
    for (let i = 1; i < cards.length; i++) {
        let innerTitle = cards[i].getElementsByClassName("task-title")[i]
        let innerDetails = cards[i].getElementsByClassName("task-details")[i]
        if (innerDetails.innerHTML === 'Nothing here yet...') {
            innerTitle.html = title;
            innerDetails.innerHTML = details;
            break;
            }
    }
})