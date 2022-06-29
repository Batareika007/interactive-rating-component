// target submut button
const submit = document.getElementById('btn');

// target thanku card
const thankUCard = document.querySelector('.thanku');

// target text result star
const starResult = document.getElementById('star_result');

// target form 
const mainForm = document.getElementById('myform');


function thankU() {
    let selected = document.querySelector('input[type=radio]:checked');
    thankUCard.classList.add('active');
    starResult.innerText = selected.value;
    return false;
}