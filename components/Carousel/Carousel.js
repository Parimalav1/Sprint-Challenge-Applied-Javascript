/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const fourthDiv = document.querySelector('.carousel-container');

function carouselMaker(picsList) {
  const carouselDiv = document.createElement('div');
  const lfButton = document.createElement('div');
  const imgDiv1 = document.createElement('img');
  const imgDiv2 = document.createElement('img');
  const rtButton = document.createElement('div');

  carouselDiv.appendChild(lfButton);
  carouselDiv.appendChild(imgDiv1);
  carouselDiv.appendChild(imgDiv2);
  carouselDiv.appendChild(rtButton);

  carouselDiv.classList.add('carousel');
  lfButton.classList.add('left-button');
  rtButton.classList.add('right-button');
  lfButton.textContent = '<';
  rtButton.textContent = '>';

  let currentIndex = 0;
  imgDiv1.src = picsList[currentIndex % picsList.length];
  imgDiv2.src = picsList[(currentIndex + 1) % picsList.length];

  rtButton.addEventListener('click', event => {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
      currentIndex = currentIndex + picsList.length;
    }
    imgDiv1.src = picsList[currentIndex % picsList.length];
    imgDiv2.src = picsList[(currentIndex + 1) % picsList.length];
    //console.log(`Now showing, currentIndex = ${currentIndex}, Images=${imgDiv1.src} and ${imgDiv2.src}`);
    })
  lfButton.addEventListener('click', event => {
    currentIndex = currentIndex + 1;
    imgDiv1.src = picsList[currentIndex % picsList.length];
    imgDiv2.src = picsList[(currentIndex + 1) % picsList.length];
    //console.log(`Now showing, currentIndex = ${currentIndex}, Images=${imgDiv1.src} and ${imgDiv2.src}`);
    })
  return carouselDiv;
}
const carouselpicsArray = [
  'assets/carousel/mountains.jpeg',
  'assets/carousel/computer.jpeg',
  'assets/carousel/trees.jpeg',
  'assets/carousel/turntable.jpeg'
];

const carousel = carouselMaker(carouselpicsArray);
fourthDiv.appendChild(carousel);
