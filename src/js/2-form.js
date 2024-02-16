const form = document.querySelector(".feedback-form")

form.addEventListener('input', saveFormState)
const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedState) {
    form.elements.email.value = savedState.email;
    form.elements.message.value = savedState.message;
}
function saveFormState() {
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
form.addEventListener("submit", onSubmit);
function onSubmit(evt){
    evt.preventDefault()
    const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
    
    if(form.elements.email.value === "" || form.elements.message.value === "") {
    alert("всі поля мають бути заповненими")
    return
    }
    console.log(savedState )
    form.reset()
    localStorage.removeItem('feedback-form-state');

}
