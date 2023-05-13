// HAMBURGER MENU
const hamburgerEl = document.querySelector(".hamburger-menu");
const ulEl = document.querySelector("ul");

hamburgerEl.addEventListener("click", () => {
    ulEl.classList.toggle("open-hamburger");
    hamburgerEl.classList.toggle("rotate-hamburger");
})

ulEl.addEventListener("click", () => {
    ulEl.classList.remove("open-hamburger");
    hamburgerEl.classList.remove("rotate-hamburger");
})

// CONTACT SECTION 
// VALIDATE USER INPUT
const firstnameEl = document.querySelector("#first-name");
const fnerrorEl = document.querySelector("#fn-error");
const lnerrorEl = document.querySelector("#ln-error");
const lastnameEl = document.querySelector("#last-name");
const emailEl = document.querySelector("#email");
const emerrorEl = document.querySelector("#em-error");
const numberEl = document.querySelector("#number");
const numerrorEl = document.querySelector("#num-error");
const formEl = document.querySelector("#form");
const textareaEl = document.querySelector("#text-area");
const teerrorEl = document.querySelector("#ta-error");
let isValid = true;

const formValidation = () => {
    firstnameEl.value = firstnameEl.value.replace(/[^a-zA-Z]/g, '');
    lastnameEl.value = lastnameEl.value.replace(/[^a-zA-Z]/g, '');
    emailEl.value = emailEl.value.replace(/\s/g, '');
    textareaEl.value = textareaEl.value.trim();
    
    if (firstnameEl.value.length === 0) {
        fnerrorEl.style.display = 'block';
        fnerrorEl.style.color = 'red';
        firstnameEl.style.borderColor = 'red';
        fnerrorEl.textContent = "Name space cannot be empty";
        isValid = false;
    }
    else if (firstnameEl.value.length < 4) {
        fnerrorEl.style.display = 'block';
        fnerrorEl.style.color = 'red';
        firstnameEl.style.borderColor = 'red';
        fnerrorEl.textContent = 'Please enter at least 3 letters';
        isValid = false;
    
    } else {
        fnerrorEl.style.display = 'block';
        fnerrorEl.style.color = 'green';
        firstnameEl.style.borderColor = 'green';
        fnerrorEl.textContent = " ";
    }
    
    if (lastnameEl.value.length === 0) {
        lnerrorEl.style.display = 'block';
        lnerrorEl.style.color = 'red';
        lastnameEl.style.borderColor = 'red';
        lnerrorEl.textContent = "Name space cannot be empty";
        isValid = false;
    }
    else if (lastnameEl.value.length < 4) {
        lnerrorEl.style.display = 'block';
        lnerrorEl.style.color = 'red';
        lastnameEl.style.borderColor = 'red';
        lnerrorEl.textContent = 'Please enter at least 3 letters';
        isValid = false;
    
    } else {
        lnerrorEl.style.display = 'block';
        lnerrorEl.style.color = 'green';
        lastnameEl.style.borderColor = 'green';
        lnerrorEl.textContent = " ";
    }

    const emailFormat = /^\S+@\S+\.com$/;
    if (emailEl.value.length === 0) {
        emerrorEl.style.display = 'block';
        emerrorEl.style.color = 'red';
        emailEl.style.borderColor = 'red';
        emerrorEl.textContent = "Email space cannot be empty";
        isValid = false;
    }

    else if (!emailFormat.test(emailEl.value)) {
        emerrorEl.style.display = 'block';
        emerrorEl.style.color = 'red';
        emailEl.style.borderColor = 'red';
        emerrorEl.textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    else {
        emerrorEl.style.display = 'block';
        emerrorEl.style.color = 'green';
        emailEl.style.borderColor = 'green';
        emerrorEl.textContent = " ";
    }

    if (numberEl.value.length === 0) {
        numerrorEl.style.display = 'block';
        numerrorEl.style.color = 'red';
        numberEl.style.borderColor = 'red';
        numerrorEl.textContent = "Number space cannot be empty";
        isValid = false;
    }
    else if (numberEl.value.length < 4) {
        numerrorEl.style.display = 'block';
        numerrorEl.style.color = 'red';
        numberEl.style.borderColor = 'red';
        numerrorEl.textContent = 'Please enter at least 4 numbers';
        isValid = false;
    
    } else {
        numerrorEl.style.display = 'block';
        numerrorEl.style.color = 'green';
        numberEl.style.borderColor = 'green';
        numerrorEl.textContent = " ";
    }

    if (textareaEl.value.length === 0) {
        teerrorEl.style.display = 'block';
        teerrorEl.style.color = 'red';
        textareaEl.style.borderColor = 'red';
        teerrorEl.textContent = "Text space cannot be empty";
        isValid = false;
    }
    else if (textareaEl.value.length < 6) {
        teerrorEl.style.display = 'block';
        teerrorEl.style.color = 'red';
        textareaEl.style.borderColor = 'red';
        teerrorEl.textContent = 'Please enter at least 6 letters';
        isValid = false;
    
    } else {
        teerrorEl.style.display = 'block';
        teerrorEl.style.color = 'green';
        textareaEl.style.borderColor = 'green';
        teerrorEl.textContent = " ";
    }
}

// TO LINK USERS TO MY MAIL
formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    formValidation()
    if(isValid === false){
    }
    else{
        form.action = "https://formspree.io/f/mwkjyzeo";
        form.method = "POST";
        form.submit();
    }
})

// CAPITALIZE FITST LETTER OF TEXT AREA INPUT AT THE BEGINING OF THE SENTENCE & AFTER EVERY FULLSTOP 
textareaEl.addEventListener("input", () => {
  const currentValue = textareaEl.value;
  const sentences = currentValue.split(/(?<=[.?!])\s+/);
  const capitalizedSentences = sentences.map(sentence => {
    const firstChar = sentence.charAt(0);
    return sentence.replace(firstChar, firstChar.toUpperCase());
  });
  textareaEl.value = capitalizedSentences.join(' ');
});








