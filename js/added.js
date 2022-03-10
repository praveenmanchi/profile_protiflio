let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let displayingCards = document.getElementById("displayingCards");
let displayOnClickingCards1 = document.getElementById("displayOnClickingCards1");
let displayOnClickingCards2 = document.getElementById("displayOnClickingCards2");
let displayOnClickingCards3 = document.getElementById("displayOnClickingCards3");
let displayOnClickingCards4 = document.getElementById("displayOnClickingCards4");
let backButton1 = document.getElementById("backButton1");
let backButton2 = document.getElementById("backButton2");
let backButton3 = document.getElementById("backButton3");
let backButton4 = document.getElementById("backButton4");
let bannerSection = document.getElementById("home");


function displayingCardsPage() {
    displayingCards.classList.remove("display");
    bannerSection.classList.remove("display");
    displayOnClickingCards1.classList.add("display");
    displayOnClickingCards2.classList.add("display");
    displayOnClickingCards3.classList.add("display");
    displayOnClickingCards4.classList.add("display");
}



backButton1.addEventListener('click', displayingCardsPage);
backButton2.addEventListener('click', displayingCardsPage);
backButton3.addEventListener('click', displayingCardsPage);
backButton4.addEventListener('click', displayingCardsPage);


function displayOtherSectionOfImage1() {
  
    bannerSection.classList.add("display");
    displayingCards.classList.toggle("display");
    displayOnClickingCards1.classList.toggle("display");
}

function displayOtherSectionOfImage2() {
    bannerSection.classList.add("display");
    displayingCards.classList.toggle("display");
    displayOnClickingCards2.classList.toggle("display");
}

function displayOtherSectionOfImage3() {
    bannerSection.classList.add("display");
    displayingCards.classList.toggle("display");
    displayOnClickingCards3.classList.toggle("display");
}

function displayOtherSectionOfImage4() {
    bannerSection.classList.add("display");
    displayingCards.classList.toggle("display");
    displayOnClickingCards4.classList.toggle("display");
}
image1.addEventListener('click', displayOtherSectionOfImage1);
image2.addEventListener('click', displayOtherSectionOfImage2);
image3.addEventListener('click', displayOtherSectionOfImage3);
image4.addEventListener('click', displayOtherSectionOfImage4);