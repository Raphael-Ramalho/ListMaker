export const doneButton = () =>{
    const doneButton = document.createElement("button")
    doneButton.classList.add("done")
    doneButton.innerText = "Done"
    doneButton.addEventListener("click", toggleDone)
    return doneButton
}

const toggleDone = (event) =>{

    const donebutton = event.target
    const buttonBlock = donebutton.parentNode
    const textItem = buttonBlock.parentNode.firstChild

    const armazenamento = JSON.parse(localStorage.getItem("tarefa")) || []

    const armazenamentoCopia = armazenamento.slice()

    const textItemValue = textItem.innerText

    for(let i = 0; i < armazenamento.length; i++){
        if(textItemValue == armazenamento[i].itemContent){
            armazenamentoCopia[i].done = !armazenamentoCopia[i].done  
            textItem.classList.toggle("completed")
            break
        }
    }

    localStorage.setItem("tarefa", JSON.stringify(armazenamentoCopia))
}


