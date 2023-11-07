const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("book");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value;

    // Construct the API URL for searching books
    const apiUrl = `https://openlibrary.org/search.json?q=${searchTerm}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display the search results
            displayResults(data);
            console.log(data)
        })
        .catch(error => {
            console.log("Error:", error);
            results.innerHTML = "An error occurred while fetching data.";
        });
});

function displayResults(data) {
    results.innerHTML = ""; // Clear previous results

    if (data.docs && data.docs.length > 0) {
        data.docs.forEach(book => {
            const title = book.title;
            const author = book.author_name ? book.author_name[0] : "Author not available";
            const year = book.first_publish_year ? book.first_publish_year : "Year not available";

            const bookInfo = document.createElement("div");
            bookInfo.innerHTML = `<h2>${title}</h2><p>Author: ${author}</p><p>Year: ${year}</p>`;
            results.appendChild(bookInfo);
        });
    } else {
        results.innerHTML = "No results found.";
    }
}
