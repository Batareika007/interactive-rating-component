// target submut button
let submit = document.getElementById('btn');

// target thanku card
let onSubmit = document.querySelector('.thanku');

// target text result star
let starResult = document.getElementById('star_result');

// target form 
let starForm = document.getElementById('myform');

// document.getElementById("btn").addEventListener('submit', thankU);
// document.getElementById("myform").addEventListener("submit", thankU);
// starForm.addEventListener("submit", thankU);
// starForm.addEventListener("submit", thankU)

function thankU() {
    let selected = document.querySelector('input[type=radio]:checked');
    onSubmit.classList.add('active');
    starResult.innerText = selected.value;
    // alert(selected.value);
    return false;
}