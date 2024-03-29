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

todoList.forEach(function(todoObject,index) {
  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate;
  const {name,dueDate} = todoObject; // Destructor, same as the comented code above

  const html = `
  <div>${name}</div> 
  <div>${dueDate}</div>
  <button onclick="
  todoList.splice(${index},1);
  renderTodoList();
  " class="delete-todo-button">Delete</button>  
  `;
  todoListHTML += html;
});
document.querySelector('.js-todo-list').innerHTML = todoListHTML;

localStorage.setItem('todoList',JSON.stringify(todoList)); // seting object to a string
  
};
// We use forEach insted of for loop

// for (let i = 0; i < todoList.length; i++) {
//   const todoObject = todoList[i];

//   // const name = todoObject.name;
//   // const dueDate = todoObject.dueDate;
//   const {name,dueDate} = todoObject; // Destructor, same as the comented code above

//   const html = `
//   <div>${name}</div> 
//   <div>${dueDate}</div>
//   <button onclick="
//   todoList.splice(${i},1);
//   renderTodoList();
//   " class="delete-todo-button">Delete</button>  
//   `;
//   todoListHTML += html;
// }
// document.querySelector('.js-todo-list').innerHTML = todoListHTML;

// localStorage.setItem('todoList',JSON.stringify(todoList)); // seting object to a string
// }


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