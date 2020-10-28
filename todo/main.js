import { qs, setClick } from "./utilities.js";
import Todo from "./todo.js";

const myTodo = new Todo("#todoList", "todos");
const myOtherTodo = new Todo("#otherTodoList", "other");

function addButton(ev) {
  const inputValue = qs("#todoInput").value;
  myTodo.addNewTodo(inputValue);
}

setClick("#addButton", addButton);
// qs("#addButton").addEventListener("touchend", addButton);
