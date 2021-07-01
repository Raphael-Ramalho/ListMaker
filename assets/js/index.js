import { deleteButton } from "./deleteButton.js"
import { doneButton } from "./doneButton.js"


const submitButton = document.querySelector("[data-submit-button]")


const createElement = (event) => {
    event.preventDefault()
    const textInput = document.querySelector("[data-text-input]")
    const itemsList = document.querySelector("[data-list]")
    const itemBlock = document.createElement("li")
    const buttonBlock = document.createElement("div")
    buttonBlock.classList.add("buttons")
    const itemContent = textInput.value;


    //armazenamentFunction(itemContent)
    const armazenamento = JSON.parse(localStorage.getItem("tarefa")) || []
    const valoresArmazenados = {
        itemContent
    }
    armazenamento.push(valoresArmazenados)

    localStorage.setItem("tarefa", JSON.stringify(armazenamento))
    //

    

    itemBlock.classList.add("item")
    itemBlock.setAttribute("data-item","")
    itemBlock.innerHTML = `<p data-item-text>${itemContent}</p>` 
    itemBlock.appendChild(buttonBlock)
    itemsList.appendChild(itemBlock)
    buttonBlock.appendChild(doneButton())
    buttonBlock.appendChild(deleteButton())

    textInput.value = ""
}



submitButton.addEventListener("click", createElement)


