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
    cards.forEach(function(card, index){
        if (index === 0) return;
        let innerTitle = card.getElementsByClassName("card-title")
        let innerDetails = card.getElementsByClassName("card-details")
        console.log(innerTitle)
        // the below doesn't work, Inner Text returns undefined
        if (innerDetails.innerText === 'Nothing here yet...') {
            innerTitle.innerText = title;
            innerDetails.innerText = details;
            }
    })  
})