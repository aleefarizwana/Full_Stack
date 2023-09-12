 // Call the fetchRandomCountryData function when the page loads, new data will be overwritten
function fetchRandomCountryData() {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);   // to Select a random country from the list
        const randomC = data[randomIndex];
        const countryInfoElement = document.querySelector('.country-info');
        countryInfoElement.innerHTML = `
          <h2>${randomC.name.common}</h2>
          <p>sub region :${randomC.subregion}</p>
          <p>region :${randomC.region}</p>
          <p>Capital: ${randomC.capital}</p>
          <p>landlocked: ${randomC.landlocked}</p>
          <p>status :${randomC.status}</p>
          <!-- Add more data as needed -->
        `;
      })

      .catch(error => {
        console.error("Unable to fetch data:", error);
      });
  }
  
  
  window.onload = fetchRandomCountryData;

 
