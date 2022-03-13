import { STORAGE_KEY } from "./script.js";
import { saveToStorage } from "./storage.js";

/**
 *
 * @param {HTMLUListElement} listElement
 */
export function renderTasks(tasks, listElement) {
  listElement.replaceChildren();
  for (const task of tasks) {
    let listItem = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.addEventListener("change", () => {
      task.isComplete = input.checked;
    });
    let omit = document.createElement("button");
    omit.setAttribute("class", "delete");
    omit.textContent = "Delete";
    omit.addEventListener("click", () => {
      const filteredTasks = tasks.filter((t) => t.id !== task.id);
      saveToStorage(STORAGE_KEY, filteredTasks);
      renderTasks(filteredTasks, listElement);
    });
    listItem.append(input, task.name, omit);
    listElement.append(listItem);
  }
}
