const submitButton = document.querySelector("[data-submit-button]")
const textInput = document.querySelector("[data-text-input]")
const itemsList = document.querySelector("[data-list]")
const doneButton = document.querySelector("[data-done-button]")
const deleteButton = document.querySelector("[data-delete-button]")



const createElement = (event) => {
    event.preventDefault();

    const itemBlock = document.createElement("li")

    itemBlock.classList.add("item")

    const itemContent = textInput.value;

    itemBlock.innerHTML = `<p>${itemContent}</p>
    <div class="buttons">
    <button class="done" data-done-button>Done</button>
    <button class="delete">Delete</button>
    </div>` 

    itemsList.appendChild(itemBlock)

    console.log(itemsList)

}

submitButton.addEventListener("click", createElement)


