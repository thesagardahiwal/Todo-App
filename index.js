let addTaskBtn = document.querySelector('button');
let delBtns = document.querySelectorAll('.delete');
let taskBox = document.querySelector('ul');
let taskInp = document.querySelector('input');


addTaskBtn.addEventListener('click', function (){
    let task = document.createElement('li');
    let delBtn = document.createElement('button');

    delBtn.innerText = "delete";
    delBtn.classList.add('delete');
    task.innerText = taskInp.value;
    task.appendChild(delBtn);
    taskBox.appendChild(task);
    taskInp.value = "";
})
taskBox.addEventListener('click', function(event) {
    let listItem = event.target.parentElement;
    listItem.remove();
})
