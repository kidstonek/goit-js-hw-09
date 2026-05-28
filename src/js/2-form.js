const formData = {
    email: "",
    message: ""
}

const MYKEY = "feedback-form-state";


const myForm = document.querySelector('.feedback-form');


document.addEventListener("DOMContentLoaded", () => {
    const myTemp = loadJson()
    myForm.elements.email.value = myTemp?.email || '';
    myForm.elements.message.value = myTemp?.message || '';
})


myForm.addEventListener('input', (e) => {
    e.preventDefault();
    const myEmail = myForm.elements.email.value.trim();
    const myMessage = myForm.elements.message.value.trim();
    formData.email = myEmail;
    formData.message = myMessage;
    saveJson(formData);
})


function saveJson (myObj) {
    const json = JSON.stringify(myObj);
    localStorage.setItem(MYKEY, json);
}
 

function loadJson() {
    try {
        const myStorage = JSON.parse(localStorage.getItem(MYKEY));
        return myStorage || formData;
    } catch {
        return formData
    }
    
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((myForm.elements.email.value.trim() === '') || (myForm.elements.message.value.trim() === '')) {
        alert("All form fields must be filled in");
        return;
    }
    console.log(formData);
    localStorage.removeItem(MYKEY);
    myForm.reset();
})