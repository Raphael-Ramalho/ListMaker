const submitButton = document.querySelector("[data-submit-button]")
const textInput = document.querySelector("[data-text-input]")



const teste = (event) => {
    const item = textInput.value;
    event.preventDefault();
    console.log(item);
}

submitButton.addEventListener("click", teste)


