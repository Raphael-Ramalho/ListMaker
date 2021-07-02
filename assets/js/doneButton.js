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
    //console.log(textItem.innerText)
    textItem.classList.toggle("completed")

    const armazenamento = JSON.parse(localStorage.getItem("tarefa")) || []

    const textItemValue = textItem.innerText

    for(let i = 0; i < armazenamento.length; i++){
        
        if(textItemValue == armazenamento[i].itemContent){
           console.log(armazenamento[i].itemContent)
           console.log(armazenamento[i].done)
            if(armazenamento[i].done == false){
                armazenamento[i].done = true
                console.log("opa")
            } else {
                armazenamento[i].done = false
            }
        }
    }
}


