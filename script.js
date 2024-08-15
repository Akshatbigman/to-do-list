const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const textNode = document.createTextNode(todoText);
        todoItem.appendChild(textNode);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTodo);
        todoItem.appendChild(deleteBtn);

        todoList.appendChild(todoItem);

        todoInput.value = '';

        todoItem.addEventListener('click', toggleComplete);
    }
}

function deleteTodo() {
    this.parentElement.remove();
}

function toggleComplete() {
    this.classList.toggle('completed');
}
