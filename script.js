const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
    .then(response => response.json())
    .then(data => {
        displayQuote(data.data.content, data.data.author);
    })
    .catch( error => {
        displayQuote('Something went wrong', 'Please try again later');
        console.error('Error:', error);
    });
});

function displayQuote(quote, author) {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    quoteElement.textContent = quote;
    authorElement.textContent = author;
}
