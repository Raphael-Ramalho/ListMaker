import { createList } from "./createList.js";


export const createNewTask = (event) => {
    event.preventDefault()
    const listArea = document.querySelector("[data-list-area]")
    const textInput = document.querySelector("[data-text-input]")
    const itemContent = textInput.value;

    listArea.innerHTML = ""


    const valoresArmazenados = {
        done: false,
        itemContent
    }

    const armazenamento = JSON.parse(localStorage.getItem("tarefa")) || []

    armazenamento.push(valoresArmazenados)
    localStorage.setItem("tarefa", JSON.stringify(armazenamento))


    listArea.appendChild(createList())

    textInput.value = ""
}