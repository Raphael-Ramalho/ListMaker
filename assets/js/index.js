const submitButton = document.querySelector("[data-submit-button]")
const textInput = document.querySelector("[data-text-input]")

//const doneButton = document.querySelector("[data-done-button]")
//const deleteButton = document.querySelector("[data-delete-button]")



const createElement = () => {

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
    buttonBlock.appendChild(completed())


    //const botaoConclui = document.createElement("button");
}

const completed = () =>{
    //const textItem = document.querySelector("[data-item-text]")
    // textItem.classList.toggle("completed")

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



// const deleteItem = () =>{
//     const item = document.querySelectorAll("[data-item]")
//     item[numUltimoItem].remove()
// }


submitButton.addEventListener("click", createElement)



{/* <li>
<p data-item-text>dsfgsdgsd</p>
<div class="buttons">
<button class="done" data-done-button>Done</button>
<button class="delete" data-delete-button>Delete</button>
</div> 
</li> */}