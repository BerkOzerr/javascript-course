let todoList = [
    {name : 'berk',dueDate : '2022-12-22'},
    {name: 'emre' ,dueDate : '2023-11-11'}
];

todoListLoad();
function todoListLoad(){
  
  let todoListHtml = '';
  
  todoList.forEach((tempObject,index)=>{
    const {name , dueDate} =  tempObject;
    const html =`
    <div>${name}</div><div>${dueDate}</div>
    <button class="todo-list-delete-button js-todo-list-delete-button"
    >Delete</button>`;
    todoListHtml += html;
    document.querySelector('.js-todo-list').innerHTML = 
    todoListHtml;
    document.querySelectorAll('.js-todo-list-delete-button')
      .forEach((deleteButton, index)=>{
        deleteButton.addEventListener
        ('click',()=>{
          todoList.splice(index,1);
         todoListLoad();
        });
      });
    
   
  });
 
  // for(let i = 0;  i < todoList.length ; i++){
  //   const tempObject = todoList[i];
  //   //const name =  tempObject.name;
  //   //const dueDate = tempObject.dueDate;
  //   const {name , dueDate} =  tempObject;
  //   const html =`
  //   <div>${name}</div><div>${dueDate}</div>
  //   <button class="todo-list-delete-button"
  //   onclick= " 
  //    todoList.splice(${i},1);
  //    todoListLoad();
  //   ">Delete</button>`;
  //   todoListHtml += html;
  //   document.querySelector('.js-todo-list').innerHTML = 
  //   todoListHtml;
    
  // }
}

document.querySelector('.js-todo-list-add-button').addEventListener
('click',()=>{
  addTodo();
});

function addTodo(){

  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value;
  const dateInputElement = document.querySelector
('.js-due-date-input');
const dueDate = dateInputElement.value;
  todoList.push({name , dueDate});
  nameInputElement.value= '';
  todoListLoad();

}
