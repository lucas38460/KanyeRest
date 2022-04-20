let pe = document.getElementById('divCitation');

async function textrandomcitation () {
    fetch("https://api.kanye.rest/")

    .then(response => response.json())

    .then((data) => {
        pe.textContent = data.content;
    });
};

textrandomcitation();