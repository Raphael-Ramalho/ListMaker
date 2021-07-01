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
    itemBlock.remove()
}