const btnAdd = document.getElementById("addQuote");
let Double = [""];

const ulMain = document.getElementById("UlMain");

async function textrandomcitation() {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())

    .then((data) => {
      if (Double.includes(data.quote)) {
        textrandomcitation();
      } else {
        let newDiv = document.createElement("li");
        // newDiv.className = "divNew";
        newDiv.textContent = data.quote;
        const BtnUp = document.createElement("button");
        BtnUp.textContent = "up";
        const BtnDown = document.createElement("button");
        BtnDown.textContent = "down";

        newDiv.appendChild(BtnUp);
        newDiv.appendChild(BtnDown);

        UlMain.appendChild(newDiv);

        Double.push(data.quote);

        // Btn Move Up

        BtnUp.addEventListener("click", (arg) => {
            console.log("Move Up");
            BtnUp.parentElement.previousElementSibling.insertElementAdjacentHTML('beforebegin', newDiv.parentElement);
        });

        // Btn Move Down
        BtnDown.addEventListener("click", () => {
            console.log("move Down");
            newDiv.parentElement.previousElementSibling.insertElementAdjacentHTML('afterend', newDiv.parentElement);
            
        });
      }
    });
}

btnAdd.addEventListener("click", () => {
  textrandomcitation();
});
