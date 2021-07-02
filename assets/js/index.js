import { createList } from "./createList.js"
import { createElement } from "./createElement.js"

const submitButton = document.querySelector("[data-submit-button]")
const listArea = document.querySelector("[data-list-area]")


listArea.appendChild(createList())


submitButton.addEventListener("click", createElement)

