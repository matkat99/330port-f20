import datePicker from "../week5/datepicker.js";
/*
add new todo
remove or delete task
complete task
sort tasks
filter tasks
complete by date

retrieve todos from data store
save todos to data store
remove todo from data store

display todo list
    get list element
    retrieve todos from data store
    for each todo...build out html
    add todo to list

*/
import { qs, saveToLS } from "./utilities.js";
const todos = [];
function saveTodos(key) {
  saveToLS(key, todos);
}
class Todo {
  constructor(parentId, key) {
    this.listElement = qs(parentId);
    this.key = key;
    this.listTodos();
  }
  addNewTodo(text) {
    const newTodo = {
      id: new Date(),
      text: text,
      completed: false
    };
    todos.push(newTodo);
    saveTodos(this.key);
  }
  completeTodo(todo) {}
  listTodos() {}
  getTodos() {
    return todos;
  }
}

export default Todo;
