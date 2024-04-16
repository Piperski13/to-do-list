// on click generate <section> element inside of <main>

document.querySelector('.js-new-todo').addEventListener('click',()=>{
  let newSection = document.createElement('section');
  newSection.classList.add('grid-element')
  document.getElementById('main').appendChild(newSection);

  document.querySelectorAll('main > section').forEach((section,index)=>{
    if(index < 1){
      return;
    }
    section.classList.add(`js-section-${index}`); 
    section.innerHTML = `
    <div class="header-flex">
      <p class="header-paragraph">Todo List Practice</p>
      <button class="header-button js-new-delete-">Delete</button>
    </div>
    <div class="todo-input-grid">
      <input class="js-name-input name-input" placeholder="Todo name">
      <input class="js-due-date-input due-date-input" type="date">
      
      <button class="add-todo-button js-add-todo">Add</button>
    </div>
    <div class="js-todo-list todo-grid">test</div>`;
  }); 
});

