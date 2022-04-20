let pe = document.getElementById('divCitation');
const MoreQuote = document.getElementById('addQuote');
const btnAdd = document.getElementById('addQuote');

async function textrandomcitation () {
    fetch("https://api.kanye.rest/")

    .then(response => response.json())

    .then((data) => {
        pe.textContent = data.quote;
    });
};


btn.addEventListener('click', () => {
    document.createElement('li');
    textrandomcitation();    
});