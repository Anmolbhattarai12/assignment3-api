const btn = document.getElementById("loadCat");
const catImage = document.getElementById("catImage");
const infoBox = document.getElementById("info");

const API_KEY = "DEMO-API-KEY";  
// Demo Key

btn.addEventListener("click", getCat);

async function getCat() {
  const url = "https://api.thecatapi.com/v1/images/search";

  const response = await fetch(url, {
    headers: {
      "x-api-key": API_KEY
    }
  });

  const data = await response.json();
  console.log(data);

  const cat = data[0];

  // For Displaying Images of cat
  catImage.src = cat.url;

 
  if (cat.breeds && cat.breeds.length > 0) {
    const breed = cat.breeds[0];
    infoBox.innerHTML = `
      <h2>${breed.name}</h2>
      <p><strong>Origin:</strong> ${breed.origin}</p>
      <p><strong>Temperament:</strong> ${breed.temperament}</p>
      <p><strong>Description:</strong> ${breed.description}</p>
    `;
  } else {
    infoBox.innerHTML = "<p>No breed information available.</p>";
  }
}

// For the Auto-load
getCat();
