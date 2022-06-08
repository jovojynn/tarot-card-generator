const sign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const tarotArray = ["6", "3", "2"];
// const reading = tarot[2] + ".svg";
const imgPath = "images/";

const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');

const enterName = document.getElementById('name');
const userName = document.getElementById('user-name');
const userSign = document.getElementById('user-sign');
const reading = document.getElementById('tarot-reading');

card1.addEventListener("click", function(){
    const randomTarot = Math.floor(Math.random() * Math.floor(tarotArray.length));
    card1.src = imgPath + tarotArray[randomTarot] + ".svg";

    userName.innerHTML = enterName.value;

});


// console.log(cardClick);

// var randomCard = Math.floor(Math.random() * Math.floor(cardArray.length));
//     	suite.src = imgPath + cardArray[randomCard] + ".svg";