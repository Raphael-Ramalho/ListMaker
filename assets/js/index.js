const submitButton = document.querySelector("[data-submit-button]")
const textInput = document.querySelector("[data-text-input]")


const item = textInput.value;

const teste = (event) => {
    event.preventDefault();
    console.log(item);
}

submitButton.addEventListener("click", teste)


