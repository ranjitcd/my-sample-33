document
  .getElementById("watch-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch("http://127.0.0.1:8000/api/watches/create/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Watch added successfully!");
        displayWatches();
      })
      .catch((error) => console.error("Error:", error));
  });

  const baseUrl = "http://localhost:8000"; // Replace with your Django server URL

  function displayWatches() {
    fetch("http://127.0.0.1:8000/api/watches/")
      .then((response) => response.json())
      .then((data) => {
        const container = document.getElementById("watches-container");
        container.innerHTML = "";
        data.forEach((watch) => {
          const imageUrl = baseUrl + watch.image; // Construct the full image URL
          const watchCard = `
              <div class="watch-list" id="watch-list">
                  <div class="watch">
                  <img src="${imageUrl}" width="50px" height="50px"  alt="${watch.name}"/>
                  <p class="watch-name">Watch Name: ${watch.name}</p>
                  <p class="watch-model">Watch Model: ${watch.brand}</p>
                  <p class="watch-price">Price:$${watch.price}</p>
                  </div>
              </div>
              `;
          container.innerHTML += watchCard;
        });
      })
      .catch((error) => console.error("Error:", error));
  }
  
  document.addEventListener("DOMContentLoaded", displayWatches);
  
