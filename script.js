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
    let completed = false
    cards.forEach(function(card, index){
        if(completed === false){
            if (index === 0) return;
            let innerTitle = card.getElementsByClassName("card-title")
            console.log(innerTitle[0].innerHTML)
            let innerDetails = card.getElementsByClassName("card-text")
            console.log(innerDetails[0].innerHTML)
            if (innerDetails[0].innerHTML === 'Nothing here yet...') {
                innerTitle[0].innerHTML = title;
                innerDetails[0].innerHTML = details;
                completed = true;
                }
            }
    })  
})