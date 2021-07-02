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


    let valorUnico = true
    for(let i = 0; i < armazenamento.length; i++){
        if (itemContent == armazenamento[i].itemContent){
            valorUnico = false 
            break
        } 
    }


    if(itemContent && valorUnico){
        armazenamento.push(valoresArmazenados)
        localStorage.setItem("tarefa", JSON.stringify(armazenamento))
    }

    
    listArea.appendChild(createList())

    textInput.value = ""
}