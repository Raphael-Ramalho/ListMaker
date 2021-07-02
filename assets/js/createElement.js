import { createList } from "./createList.js";


export const createElement = () => {
    const listArea = document.querySelector("[data-list-area]")
    const textInput = document.querySelector("[data-text-input]")
    const itemContent = textInput.value;

    listArea.innerHTML = ""


    const valoresArmazenados = {
        itemContent
    }

    const armazenamento = JSON.parse(localStorage.getItem("tarefa")) || []
    armazenamento.push(valoresArmazenados)
    localStorage.setItem("tarefa", JSON.stringify(armazenamento))


    listArea.appendChild(createList())

    textInput.value = ""
}