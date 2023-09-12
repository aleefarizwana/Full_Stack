//we have to fetch data from https://type.fit/api/quotes

function fetchQuote() {

  fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => {
      // Get a random quote from the response data
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      const quote_ele = document.querySelector('.quote');
      quote_ele.innerHTML = `<p>${randomQuote.text}</p>`;
      if (randomQuote.author) {
        quoteElement.innerHTML += `<p>- ${randomQuote.author}</p>`;
      }
    })
    .catch((error) => {
      console.error('Error occured while fetching quote:', error);
    });
}
const newQBut= document.getElementById('new-quote-btn');
newQBut.addEventListener('click', fetchQuote);

fetchRandomQuote();


