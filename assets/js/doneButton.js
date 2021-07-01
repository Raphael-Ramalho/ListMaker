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
    textItem.classList.toggle("completed")
}