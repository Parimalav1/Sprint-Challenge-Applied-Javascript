// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.

//  Each tab should look like this:
//    <div class="tab">topic here</div>

function getTabs() {
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(response => {
            console.log('This is tab info');
            console.log(response);

            const tabInfo = response.data.topics;
            tabInfo.forEach(x => {
                const tab = tabMaker(x);
                const thirdDiv = document.querySelector('.topics');
                thirdDiv.appendChild(tab);
            })
        })
        .catch(error => {
            console.error('Error, change the code.');
        })
        .finally(() => {
            console.log('Done');
        })
}
getTabs();

function tabMaker(item) {
    const topicDiv = document.createElement('div');

    topicDiv.classList.add('tab');

    topicDiv.textContent = item;

    return topicDiv;
}


