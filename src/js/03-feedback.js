import throttle from "lodash.throttle";
LOCAL_KEY = 'feedback-form-state'; 

let formData = {};

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea")
};


refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

savedText();

function savedText() {
    let data = localStorage.getItem(LOCAL_KEY);
    
    if (data) {
        
        formData = JSON.parse(data);
    refs.input.value = formData.email || '';
    refs.textarea.value = formData.message || '';
    }
}

function onFormSubmit(evt) {

    console.log(formData);
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
}

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
    
}