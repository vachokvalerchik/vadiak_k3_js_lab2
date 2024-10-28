const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
const todoInput = document.getElementById('todo-input'); 
let todoCount = 0;
let uncheckedCount = 0;

function newTodo() {
  
  const todoName = todoInput.value.trim();

  if (!todoName) {
    alert("Будьласка введіть назву TODO");
    return;
  }

  const todoItem = document.createElement('li');
  todoItem.className = classNames.TODO_ITEM;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      uncheckedCount--;
    } else {
      uncheckedCount++;
    }
    updateCounts();
  });

  const todoText = document.createElement('span');
  todoText.className = classNames.TODO_TEXT;
  todoText.textContent = todoName;

  const deleteButton = document.createElement('button');
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = 'Видалити';
  deleteButton.addEventListener('click', function() {
    list.removeChild(todoItem);
    todoCount--;
    if (!checkbox.checked) {
      uncheckedCount--;
    }
    updateCounts();
  });

  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);

  list.appendChild(todoItem);

  todoInput.value = '';

  todoCount++;
  uncheckedCount++;
  updateCounts();
}

function updateCounts() {
  itemCountSpan.textContent = todoCount;

  uncheckedCountSpan.textContent = uncheckedCount;
}