const submitButton = document.querySelector("[data-submit-button]")



const createElement = (event) => {
    event.preventDefault()
    const textInput = document.querySelector("[data-text-input]")
    const itemsList = document.querySelector("[data-list]")
    const itemBlock = document.createElement("li")
    const buttonBlock = document.createElement("div")
    buttonBlock.classList.add("buttons")
    const itemContent = textInput.value;

    itemBlock.classList.add("item")
    itemBlock.setAttribute("data-item","")
    itemBlock.innerHTML = `<p data-item-text>${itemContent}</p>` 
    itemBlock.appendChild(buttonBlock)
    itemsList.appendChild(itemBlock)
    buttonBlock.appendChild(doneButton())
    buttonBlock.appendChild(deleteButton())

    textInput.value = ""
}

const doneButton = () =>{
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

const deleteButton = () =>{
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
    itemBlock.remove()
}



submitButton.addEventListener("click", createElement)


