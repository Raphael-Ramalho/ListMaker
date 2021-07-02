import { deleteButton } from "./deleteButton.js"
import { doneButton } from "./doneButton.js"

export const createList = () => {
    const armazenamento = JSON.parse(localStorage.getItem("tarefa")) || []
    const list = document.createElement("ul")
    
    for(let i = 0; i <  armazenamento.length; i++){
        const itemBlock = document.createElement("li")
        const buttonBlock = document.createElement("div")
        buttonBlock.classList.add("buttons")
        itemBlock.classList.add("item")
        itemBlock.innerHTML = `<p>${armazenamento[i].itemContent}</p>` 
        itemBlock.appendChild(buttonBlock)
        list.appendChild(itemBlock)
        buttonBlock.appendChild(doneButton())
        buttonBlock.appendChild(deleteButton())
    }
    return list
}