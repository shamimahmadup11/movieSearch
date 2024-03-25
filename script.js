const cards = document.querySelector('.cards');

async function fetchData() {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1ce70ba8`);
    const data = await response.json();
    console.log(data);
    showData(data.Search); // Pass the 'Search' array to the showData function
}

fetchData();

function showData(searchResults) { // Receive the 'Search' array as searchResults
    if (!searchResults) {
        console.error("No search results found.");
        return;
    }

    cards.innerHTML = "";
    searchResults.forEach(element => { // Iterate over the search results
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${element.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.Title}</h5>
                <p class="card-text">${element.Plot}</p>
                <p class="card-text"><small class="text-muted">Release Date: ${element.Released}</small></p>
            </div>
        `;
        cards.appendChild(card);
    });
}
