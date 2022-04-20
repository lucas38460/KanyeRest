let pe = document.getElementById('divCitation');
const MoreQuote = document.getElementById('addQuote');


async function textrandomcitation () {
    fetch("https://api.kanye.rest/")

    .then(response => response.json())

    .then((data) => {
        pe.textContent = data.quote;
    });
};

textrandomcitation();