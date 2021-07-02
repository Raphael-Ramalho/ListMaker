export const deleteButton = () =>{
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete")
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener("click", deleteItem)
    return deleteButton
}

const deleteItem = (event) => {
    const deleteButton = event.target
    const buttonBlock = deleteButton.parentNode
    const itemBlock = buttonBlock.parentNode
    const textItem = buttonBlock.parentNode.firstChild

    
    const armazenamento = JSON.parse(localStorage.getItem("tarefa")) || []
    const armazenamentoCopia = armazenamento.slice()
    const textItemValue = textItem.innerText
    for(let i = 0; i < armazenamento.length; i++){
        if(textItemValue == armazenamento[i].itemContent){         
            armazenamentoCopia.splice(i,1)
            itemBlock.remove()
            break
        }
    }

    localStorage.setItem("tarefa", JSON.stringify(armazenamentoCopia))
}

