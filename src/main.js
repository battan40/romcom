

//Query Selectors

var randomCoverButton = document.querySelector('.random-cover-button');
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');

var makeYourOwnCoverButton = document.querySelector('.make-new-button');

var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var viewSavedCovers = document.querySelector('.view-saved-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');

var userCoverInputLine = document.querySelector('#cover');
var userTitleInputLine = document.querySelector('#title');
var userFirstDescriptor = document.querySelector('#descriptor1');
var userSecondDescriptor = document.querySelector('#descriptor2');
var makeMyBookButton = document.querySelector('make-new-button')

// Global Variables

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Event Listeners

randomCoverButton.addEventListener('click', makeNewRandomCover);
window.addEventListener('load', makeNewRandomCover);
makeYourOwnCoverButton.addEventListener('click', goToInputForm);
viewSavedCovers.addEventListener('click', goToSavedCovers);
homeButton.addEventListener('click', goHome)
makeMyBookButton.addEventListener('click', goToSavedCovers)

// Functions

function userMakeNewCover() {
  var userCover = userCoverInputLine.value;
  var userTitle = userTitleInputLine.value;
  var userDescriptorOne = userFirstDescriptor.value;
  var userDescriptorSecond = userSecondDescriptor.value;
}



function goToInputForm() {
  homeButton.classList.remove('hidden')
  formView.classList.remove('hidden')
  saveCoverButton.classList.add('hidden')
  homeView.classList.add('hidden')
  randomCoverButton.classList.add('hidden')

}

function goToSavedCovers() {
  homeButton.classList.remove('hidden')
  homeView.classList.add('hidden')
  savedView.classList.remove('hidden')
  saveCoverButton.classList.add('hidden')
  formView.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
}

function goHome() {
  homeButton.classList.add('hidden')
  randomCoverButton.classList.remove('hidden')
  formView.classList.add('hidden')
  homeView.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')

}

function makeNewRandomCover(){
  event.preventDefault();
var randomCover = covers[getRandomIndex(covers)];
var randomTitle = titles[getRandomIndex(titles)];
var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];

currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2)

coverImage.src = randomCover;
coverTitle.innerHTML = randomTitle;
taglineOne.innerHTML = randomDescriptor1;
taglineTwo.innerHTML = randomDescriptor2;
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
