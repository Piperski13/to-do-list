// When loading the page, load from localStorage.

// const todoList = [{
//   name: 'make dinner',
//   dueDate: '2022-12-22'
// }, {
//   name: 'wash dishes',
//   dueDate: '2022-12-22'
// }];

const todoList = JSON.parse(localStorage.getItem('todoList')) || [{}];

renderTodoList();

function renderTodoList(){ 

let todoListHTML = ''; 


todoList.forEach((todoObject,index) => {
  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate;
  const {name,dueDate} = todoObject; // Destructor, same as the comented code above
  
  const html = `
  <div>
    <input type="checkbox" id="item_${index}" class="done">
    <label for="item_${index}" class="item_${index}">
    ${name}
    </label>
  </div> 
  <div class="center-date">
    <label for="date_${index}" class="date_${index}">
    ${dueDate}
    </label>
  </div>
  <button class="delete-todo-button js-delete-todo-button">Delete</button>  
  `;
  todoListHTML += html;
});
document.querySelector('.js-todo-list').innerHTML = todoListHTML;

// here (bellow) forEach loops trough 'array' of delte buttons, stores its value to delteButton 
// and its index in index, and then gives each delete button a eventlistener where it deletes 
// button based on which index is being pressed

document.querySelectorAll('.js-delete-todo-button')
  .forEach((delteButton,index)=>{
    delteButton.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderTodoList();
    })
});

// added checkbox feature, when checked cross name , when unchecked uncross name
document.querySelectorAll('.done')
  .forEach((checkbox,index)=>{
    checkbox.addEventListener('click',()=>{
      let checkID = document.querySelector(`.item_${index}`);

      if(checkID.classList.contains('crossed')){
        checkID.classList.remove('crossed');
        
      }
      else{
      checkID.classList.add('crossed');
      }
    })
});

// added checkbox feature, when checked cross date , when unchecked uncross date
document.querySelectorAll('.done')
  .forEach((checkbox,index)=>{
    checkbox.addEventListener('click',()=>{
      let checkID = document.querySelector(`.date_${index}`);

      if(checkID.classList.contains('crossed')){
        checkID.classList.remove('crossed');
        
      }
      else{
      checkID.classList.add('crossed');
      }
    })
});


localStorage.setItem('todoList',JSON.stringify(todoList)); // seting object to a string
  
};

const addTodoElement = document.querySelector('.js-add-todo');
addTodoElement.addEventListener('click',()=>{
  addTodo();
})

//gets name and date values and stores it localy and prints it on screen;
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name, // same as coment above, short hand
    dueDate
  });
  
  renderTodoList();
  inputElement.value = '';
}