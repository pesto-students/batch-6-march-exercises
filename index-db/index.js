const allTodos = [];
let DATABASE;

const getListRef = () => document.getElementById('list-todo');
const getTodos = () => allTodos;

const addTodo = (todo) => {
  const elem = document.createElement('li');
  elem.innerText = String(todo);
  getListRef().appendChild(elem);
};

const renderList = (list) => {
  for (const item of list) {
    addTodo(item);
  }
};

function addClickHandler() {
  const inpRef = document.getElementById('add-todo');
  const todo = inpRef.value;
  if (todo.length === 0) {
    return;
  }
  const todos = getTodos();
  if (todos.includes(todo)) {
    window.alert('TODO already present in the list');
  } else {
    todos.push(todo);
    addTodo(todo);
    inpRef.value = '';
  }
}

function initialize() {
  if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.");
  }
  const request = window.indexedDB.open('TodoDB');
  request.onerror = (error) => {
    window.alert(`Some error occured. ErrorCode ${error.errorCode}`);
  };

  request.onupgradeneeded = function (event) {
    DATABASE = event.target.result;
    OBJECT_STORE = DATABASE.createObjectStore('todos', { autoIncrement : true });
  }

  request.onsuccess = (event) => {
  };
  renderList(getTodos());
}

initialize();