let pe = document.getElementById('divCitation');
const MoreQuote = document.getElementById('addQuote');
const btnAdd = document.getElementById('addQuote');
const BtnUp = document.getElementById('up');
const BtnDown = document.getElementById('down');
let Double = [""];



async function textrandomcitation () {
    fetch("https://api.kanye.rest/")

    .then(response => response.json())

    .then((data) => {
        pe.textContent = data.quote;
    });
    // if (Double.includes(data.quote)) {
    //     textrandomcitation();  
    // } else {
    //     let newDiv = document.createElement('div');
    //     newDiv.className = "divNew";
    // } 
};




btnAdd.addEventListener('click', () => {
    textrandomcitation();  
});


// // Btn Move Up
// BtnUp.addEventListener('click', () => {

// });


// // Btn Move Down
// BtnDown.addEventListener('click', () => {

// });

//.includes for test if this are in double in array 