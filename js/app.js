const pe = document.getElementById('divCitation');

async function textrandom () {
    fetch("https://api.kanye.rest/")

    .then(response => response.json())

    .then((data) => {
        baveu.textContent = data.content;
    });
};

textrandom();
