# Fetch_api

This is a simple website built using HTML, CSS, and JavaScript. It utilizes the Fetch API to retrieve image data from Pixabay.com and display it as a gallery.

## Features

- **Fetch API**: Retrieves images from Pixabay.com.
- **HTML/CSS**: Simple and clean layout.
- **JavaScript**: Handles API requests and dynamically updates the gallery with images.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Rishu18D/Fetch_api.git
    ```

2. Navigate to the project directory:

    ```sh
    cd Fetch_api
    ```

## Usage

1. Open the `index.html` file in your browser to view the website.

## Project Structure

`├── index.html
├── script.js
└── styles.css`


- **index.html**: The main HTML file that contains the structure of the webpage.
- **script.js**: The JavaScript file that fetches images from Pixabay and updates the gallery.
- **styles.css**: The CSS file that styles the webpage.

## Fetching Images

The website uses the Pixabay API to fetch images. The API request is handled in the `script.js` file. To use the API, you need to sign up for an API key at [Pixabay](https://pixabay.com/api/docs/).

Example fetch request in `script.js`:

```javascript
const apiKey = 'YOUR_PIXABAY_API_KEY';
const url = `https://pixabay.com/api/?key=${apiKey}&q=YOUR_SEARCH_QUERY`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Handle the fetched data and update the gallery
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });



Replace `YOUR_PIXABAY_API_KEY` and `YOUR_SEARCH_QUERY` in the `script.js` example with your actual API key and search query. This `README.md` provides a basic overview of your project, its structure, and how to get started with it.


