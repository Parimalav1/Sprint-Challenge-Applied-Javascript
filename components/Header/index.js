// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const theBody = document.querySelector('body');
const secondDiv = document.querySelector('.header-container');

function headerMaker(data) {
    const headerdiv = document.createElement('header');
    const dateSpan = document.createElement('span');
    const heading = document.createElement('h1');
    const tempSpan = document.createElement('span');

    headerdiv.appendChild(dateSpan);
    headerdiv.appendChild(heading);
    headerdiv.appendChild(tempSpan);

    headerdiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    dateSpan.textContent = data.date;
    heading.textContent = data.title;
    tempSpan.textContent = data.temperature;

    return headerdiv;
}
// const header = headerMaker(data);
// secondDiv.appendChild(header);
// theBody.appendChild(secondDiv);