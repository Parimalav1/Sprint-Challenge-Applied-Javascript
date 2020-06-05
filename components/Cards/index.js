// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
function getCards() {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
            console.log('This is article info');
            console.log(response);
            let articleList = [];
            for (let key in response.data.articles) {
                articleList = articleList.concat(response.data.articles[key])
            }
            articleList.forEach(x => {
                const article = articleMaker(x);
                const fifthDiv = document.querySelector('.cards-container');
                fifthDiv.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error, change the code.');
        })
        .finally(() => {
            console.log('Done');
        })
}
getCards();

function articleMaker(item) {
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorSpan = document.createElement('span');

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(authorImg);
    authorDiv.appendChild(authorSpan);

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    headlineDiv.textContent = item.headline;
    authorImg.src = item.authorPhoto;
    authorSpan.textContent = item.authorName;

    return cardDiv;
}

