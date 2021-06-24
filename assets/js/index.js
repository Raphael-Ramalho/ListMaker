const submitButton = document.querySelector("[data-submit-button]")
const textInput = document.querySelector("[data-text-input]")
const itemsList = document.querySelector("[data-list]")




const createElement = (event) => {
    event.preventDefault();

    const itemBlock = document.createElement("li")
    const itemContent = textInput.value;

    itemBlock.classList.add("item")
    itemBlock.setAttribute("data-item","")
    itemBlock.innerHTML = `<p data-item-text>${itemContent}</p>
    <div class="buttons">
    <button class="done" data-done-button>Done</button>
    <button class="delete" data-delete-button>Delete</button>
    </div>` 
    itemsList.appendChild(itemBlock)

    //Bloco para marcar item como concluido
    const doneButton = document.querySelectorAll("[data-done-button]")
    const numUltimoItem = doneButton.length - 1; //numUltimoItem é o numero do ultimo item criado no nodelist doneButton

    const completed = () =>{
        const textItem = document.querySelectorAll("[data-item-text]")
        textItem[numUltimoItem].classList.toggle("completed")
    }

    doneButton[numUltimoItem].addEventListener("click", completed)

    //Bloco para deletar item
    const deleteButton = document.querySelectorAll("[data-delete-button]")

    const deleteItem = () =>{
        const item = document.querySelectorAll("[data-item]")
        item[numUltimoItem].remove()
    }

    deleteButton[numUltimoItem].addEventListener("click", deleteItem)

}


submitButton.addEventListener("click", createElement)



