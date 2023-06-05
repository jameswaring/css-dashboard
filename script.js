let final = document.getElementById('first-card');
let newCard = document.getElementById('new-card');
let projects = document.getElementById('projects');
let taskTitle = document.getElementById('task-title');
let taskDetails = document.getElementById('task-details');

final.addEventListener('click', (e) => {
  document.getElementById('add-msg').innerHTML = '';
  newCard.style.display = 'flex';
});

newCard.addEventListener('submit', (e) => {
  e.preventDefault();
  let [title, text] = e.target;

  const id = Math.random();

  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
      <div class="card-title">${title.value}</div>
      <div class="card-text">${text.value}</div>
      <div class="card-icons">
        <img src="images/share.svg" width="20px" height="20px">
      </div>
      <button class="button" id="${id}">Delete</button>
  `;
  projects.appendChild(card);

  const button = document.getElementById(id);
  button.addEventListener('click', (e) => button.parentElement.remove());

  taskTitle.value = '';
  taskDetails.value = '';
});
