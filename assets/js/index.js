const submitButton = document.querySelector("[data-submit-button]")
const textInput = document.querySelector("[data-text-input]")
const itemsList = document.querySelector("[data-list]")
const doneButton = document.querySelectorAll("[data-done-button]")
const deleteButton = document.querySelectorAll("[data-delete-button]")
const item = document.querySelectorAll("[data-item]")



const createElement = (event) => {
    event.preventDefault();

    const itemBlock = document.createElement("li")

    itemBlock.classList.add("item")

    const itemContent = textInput.value;

    itemBlock.innerHTML = `<p data-item>${itemContent}</p>
    <div class="buttons">
    <button class="done" data-done-button>Done</button>
    <button class="delete">Delete</button>
    </div>` 

    itemsList.appendChild(itemBlock)

    console.log(itemsList)

}

const completed = () =>{
    item.classList.toggle("completed")
}

submitButton.addEventListener("click", createElement)
doneButton.addEventListener("click", completed)


