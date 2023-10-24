# API Endpoints

- covers: https://covers.openlibrary.org/b/ID/{cover_id}-{size}.jpg
- url: https://openlibrary.org
- Get Books by subject: url/subjects/{subject}.json
- Get books by book name anf author: url/search.json?q={search_value}


Note: To encode the search value properly, use
```js
encodeURLComponent(search_value);
```