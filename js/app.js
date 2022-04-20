let pe = document.getElementById('divCitation');
const MoreQuote = document.getElementById('addQuote');
const btnAdd = document.getElementById('addQuote');
const BtnUp = document.getElementById('up');
const BtnDown = document.getElementById('down');

async function textrandomcitation () {
    fetch("https://api.kanye.rest/")

    .then(response => response.json())

    .then((data) => {
        pe.textContent = data.quote;
    });
};


btnAdd.addEventListener('click', () => {
    let newDiv = document.createElement('div');
    newDiv.className = "divNew";
    textrandomcitation();    
});


// // Btn Move Up
// BtnUp.addEventListener('click', () => {

// });


// // Btn Move Down
// BtnDown.addEventListener('click', () => {

// });