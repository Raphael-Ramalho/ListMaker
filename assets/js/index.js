import { createList } from "./createList.js"
import { createNewTask } from "./createNewTask.js"

const submitButton = document.querySelector("[data-submit-button]")
const listArea = document.querySelector("[data-list-area]")


listArea.appendChild(createList())


submitButton.addEventListener("click", createNewTask)

  