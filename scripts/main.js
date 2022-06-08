// zodiac array
const sign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

// tarot card image array
const tarotArray = ["6", "3", "2"];
const imgPath = "images/";

// card back
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');

const enterName = document.getElementById('name');
const userName = document.getElementById('user-name');
const userSign = document.getElementById('user-sign');
const reading = document.getElementById('tarot-reading');

const selectMonth = document.getElementById('bday-month');
const day = document.getElementById('bday-day');

// click function or card selection
card1.addEventListener("click", function(){
    const randomTarot = Math.floor(Math.random() * Math.floor(tarotArray.length));
    card1.src = imgPath + tarotArray[randomTarot] + ".svg";

    userName.innerHTML = enterName.value;

    if(selectMonth.options[selectMonth.selectedIndex].value === "March" && day.value >= 21) {
        userSign.innerHTML = sign[0];
    } else if(selectMonth.options[selectMonth.selectedIndex].value === "April" && day.value <= 19 ) {
        userSign.innerHTML = sign[0];
    } else if(selectMonth.options[selectMonth.selectedIndex].value === "April" && day.value >= 20) {
        userSign.innerHTML = sign[1];
    }

});

// var value = select.options[select.selectedIndex].value;
// console.log(value);

// var randomCard = Math.floor(Math.random() * Math.floor(cardArray.length));
//     	suite.src = imgPath + cardArray[randomCard] + ".svg";