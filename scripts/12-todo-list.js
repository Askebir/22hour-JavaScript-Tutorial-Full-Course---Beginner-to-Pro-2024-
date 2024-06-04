const todoList  = [{name:'make dinner',
                    dueDate:'2022-12-22'},
                     {name:'wash dishes',
                        dueDate:'2022-12-22'
                     } ]
renderTodoList()


todoList.forEach(function(todoObject,index ){
 
    const {name, dueDat} = todoObject;
    const html = 
    `<div>${name}</div>
     <div>${dueDate}</div>
    <button  onClick="
       
      todoList.splice(${index}, 1);
      renderTodoList()
    "
   class="delete-todo-button" >Delete</button>
    `;
    todoListHTML +=html
    
})

function renderTodoList(){
    let todoListHTML = '';



document.querySelector('.js-todo-list').innerHTML = todoListHTML;


}




function addTodo(){
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-data-input');

    const dueDate = dateInputElement.value;


    todoList.push(
        //name:name,
        //dueDate:dueDate,
        name,
        dueDate
    )

    inputElement.value = '';
    renderTodoList()
}