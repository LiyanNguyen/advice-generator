let getNewQuoteButton = document.querySelector('#dice-img');
let quoteText = document.querySelector('#quote');
let quoteIDText = document.querySelector('#quoteID');

getNewQuoteButton.onclick = () => {
  fetch("https://api.adviceslip.com/advice?t=" + Math.random())
    .then((response) => {
      // get the promise JSON
      return response.json();
    })
    .then((adviceData) => {
      // get the JSON object
      let adviceObject = adviceData.slip;
      quoteIDText.innerText = `${adviceObject.id}`;
      quoteText.innerText = `‟${adviceObject.advice}”`;
    })
    .catch((error) => {
      // in case API server have problems
      alert(error);
    });
};