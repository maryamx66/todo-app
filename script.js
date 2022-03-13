import { renderTasks } from "./renderTasks.js";
import { randomId } from "./randomId.js";
import { saveToStorage, loadFromStorage } from "./storage.js";

export const STORAGE_KEY = "Mary";

const list = document.querySelector("#list");

let todos = loadFromStorage(STORAGE_KEY);
if (todos == null) {
  todos = [];
  saveToStorage(STORAGE_KEY, todos);
}

renderTasks(todos, list);

const inputField = document.querySelector("#item");
const submitButton = document.querySelector("#submitbutton");

submitButton.addEventListener("click", () => {
  if (inputField.value !== "") {
    let newTask = {
      name: inputField.value,
      id: randomId(),
      isCompleted: false,
    };
    todos.push(newTask);
    inputField.value = "";
    renderTasks(todos, list);
    saveToStorage(STORAGE_KEY, todos);
  }
});
