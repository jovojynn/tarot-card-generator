/*
|===================
| VARIABLES & ARRAYS
|===================*/
var resultGiven = false;

// == Zodiac Array ==
const sign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

// == Tarot Card Array & Path ==
// Demo Array
const tarotArray = ["17", "18", "19"];

// Full Array:
// const tarotArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"];

const imgPath = "images/";

// == Tarot Card Readings ==


// == Card Back ==
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');

// == USER INPUT ==
const enterName = document.getElementById('name');
const selectMonth = document.getElementById('bday-month');
const day = document.getElementById('bday-day');

// == OUTPUT ==
const userName = document.getElementById('user-name');
const userSign = document.getElementById('user-sign');
const tarotName = document.getElementById('card-name');
const reading = document.getElementById('tarot-reading');



// Card Clicked
card1.addEventListener("click", function(){

    if(resultGiven) return;
    var cardData = [
        {
            "cardNumber": 17,
            "cardName":  "The Star" + "<br>" + "17",
            "cardDesc": "Today will be filled with energies of inspiration, motivation and renewal. A very good day to start new creative projects or hobbies."
        },
        {
            "cardNumber": 18,
            "cardName": "The Moon" + "<br>" + "18",
            "cardDesc": "Everything today is not exactly as they seem. Be aware of possible misconceptions about the people you meet or your personal beliefs by trusting what your intuition is saying."
        },
        {
            "cardNumber": 19,
            "cardName": "The Sun" + "<br>" + "19",
            "cardDesc": "Positivity, success, and good luck are in abundance today. Enjoy what the universe has to offer you like the warm rays of sunlight on a clear day."
        }
    ];

    /*
    |==================
    | CARD RANDOMIZER
    |================== */
    
    const randomTarot = Math.floor(Math.random() * Math.floor(cardData.length));
    card1.src = imgPath + cardData[randomTarot].cardNumber + ".svg";
    // console.log(cardData[randomTarot].cardDesc);

    /*
    |==================
    | USER'S NAME
    |================== */
    userName.innerHTML = enterName.value;

    /*
    |==================
    | ZODIAC SIGNS
    |================== */

    // == ARIES ==
    if(selectMonth.value === "March" && day.value >= 21) {
        userSign.innerHTML = sign[0];
    } else if(selectMonth.value === "April" && day.value <= 19 ) {
        userSign.innerHTML = sign[0];
    // == TAURUS ==
    } else if(selectMonth.value === "April" && day.value >= 20) {
        userSign.innerHTML = sign[1];
    } else if(selectMonth.value === "May" && day.value <= 20) {
        userSign.innerHTML = sign[1];
    // == GEMINI == 
    } else if(selectMonth.value === "May" && day.value >= 21) {
        userSign.innerHTML = sign[2];
    } else if(selectMonth.value === "June" && day.value <= 20) {
        userSign.innerHTML = sign[2]; 
    // == CANCER ==   
    } else if(selectMonth.value === "June" && day.value >= 21) {
        userSign.innerHTML = sign[3];
    } else if(selectMonth.value === "July" && day.value <= 22) {
        userSign.innerHTML = sign[3];
    // == LEO == 
    } else if(selectMonth.value === "July" && day.value >= 23) {
        userSign.innerHTML = sign[4];
    } else if(selectMonth.value === "August" && day.value <= 22) {
        userSign.innerHTML = sign[4];
    // == VIRGO == 
    } else if(selectMonth.value === "August" && day.value >= 23) {
        userSign.innerHTML = sign[5];
    } else if(selectMonth.value === "September" && day.value <= 22) {
        userSign.innerHTML = sign[5];
    // == LIBRA == 
    } else if(selectMonth.value === "September" && day.value >= 23) {
        userSign.innerHTML = sign[6];
    } else if(selectMonth.value === "October" && day.value <= 22) {
        userSign.innerHTML = sign[6];
    // == SCORPIO ==
    } else if(selectMonth.value === "October" && day.value >= 23) {
        userSign.innerHTML = sign[7];
    } else if(selectMonth.value === "November" && day.value <= 21) {
        userSign.innerHTML = sign[7];
    // == SAGITTARIUS ==
    } else if(selectMonth.value === "November" && day.value >= 22) {
        userSign.innerHTML = sign[8];
    } else if(selectMonth.value === "December" && day.value <= 21) {
        userSign.innerHTML = sign[8];
    // == CAPRICORN ==
    } else if(selectMonth.value === "December" && day.value >= 22) {
        userSign.innerHTML = sign[9];
    } else if(selectMonth.value === "January" && day.value <= 20) {
        userSign.innerHTML = sign[9];
    // == AQUARIUS ==
    } else if(selectMonth.value === "January" && day.value >= 21) {
        userSign.innerHTML = sign[10];
    } else if(selectMonth.value === "February" && day.value <= 18) {
        userSign.innerHTML = sign[10];
    // == PISCES ==
    } else if(selectMonth.value === "February" && day.value >= 19) {
        userSign.innerHTML = sign[11];
    } else if(selectMonth.value === "March" && day.value <= 20) {
        userSign.innerHTML = sign[11];
    }
    

    tarotName.innerHTML = cardData[randomTarot].cardName;
    reading.innerHTML = cardData[randomTarot].cardDesc;

    resultGiven = true;
});

card2.addEventListener("click", function(){

    if(resultGiven) return;
    var cardData = [
        {
            "cardNumber": 17,
            "cardName":  "The Star" + "<br>" + "17",
            "cardDesc": "Today will be filled with energies of inspiration, motivation and renewal. A very good day to start new creative projects or hobbies."
        },
        {
            "cardNumber": 18,
            "cardName": "The Moon" + "<br>" + "18",
            "cardDesc": "Everything today is not exactly as they seem. Be aware of possible misconceptions about the people you meet or your personal beliefs by trusting what your intuition is saying."
        },
        {
            "cardNumber": 19,
            "cardName": "The Sun" + "<br>" + "19",
            "cardDesc": "Positivity, success, and good luck are in abundance today. Enjoy what the universe has to offer you like the warm rays of sunlight on a clear day."
        }
    ];

    /*
    |==================
    | CARD RANDOMIZER
    |================== */
    
    const randomTarot = Math.floor(Math.random() * Math.floor(cardData.length));
    card2.src = imgPath + cardData[randomTarot].cardNumber + ".svg";

    /*
    |==================
    | USER'S NAME
    |================== */
    userName.innerHTML = enterName.value;

    /*
    |==================
    | ZODIAC SIGNS
    |================== */

    // == ARIES ==
    if(selectMonth.value === "March" && day.value >= 21) {
        userSign.innerHTML = sign[0];
    } else if(selectMonth.value === "April" && day.value <= 19 ) {
        userSign.innerHTML = sign[0];
    // == TAURUS ==
    } else if(selectMonth.value === "April" && day.value >= 20) {
        userSign.innerHTML = sign[1];
    } else if(selectMonth.value === "May" && day.value <= 20) {
        userSign.innerHTML = sign[1];
    // == GEMINI == 
    } else if(selectMonth.value === "May" && day.value >= 21) {
        userSign.innerHTML = sign[2];
    } else if(selectMonth.value === "June" && day.value <= 20) {
        userSign.innerHTML = sign[2]; 
    // == CANCER ==   
    } else if(selectMonth.value === "June" && day.value >= 21) {
        userSign.innerHTML = sign[3];
    } else if(selectMonth.value === "July" && day.value <= 22) {
        userSign.innerHTML = sign[3];
    // == LEO == 
    } else if(selectMonth.value === "July" && day.value >= 23) {
        userSign.innerHTML = sign[4];
    } else if(selectMonth.value === "August" && day.value <= 22) {
        userSign.innerHTML = sign[4];
    // == VIRGO == 
    } else if(selectMonth.value === "August" && day.value >= 23) {
        userSign.innerHTML = sign[5];
    } else if(selectMonth.value === "September" && day.value <= 22) {
        userSign.innerHTML = sign[5];
    // == LIBRA == 
    } else if(selectMonth.value === "September" && day.value >= 23) {
        userSign.innerHTML = sign[6];
    } else if(selectMonth.value === "October" && day.value <= 22) {
        userSign.innerHTML = sign[6];
    // == SCORPIO ==
    } else if(selectMonth.value === "October" && day.value >= 23) {
        userSign.innerHTML = sign[7];
    } else if(selectMonth.value === "November" && day.value <= 21) {
        userSign.innerHTML = sign[7];
    // == SAGITTARIUS ==
    } else if(selectMonth.value === "November" && day.value >= 22) {
        userSign.innerHTML = sign[8];
    } else if(selectMonth.value === "December" && day.value <= 21) {
        userSign.innerHTML = sign[8];
    // == CAPRICORN ==
    } else if(selectMonth.value === "December" && day.value >= 22) {
        userSign.innerHTML = sign[9];
    } else if(selectMonth.value === "January" && day.value <= 20) {
        userSign.innerHTML = sign[9];
    // == AQUARIUS ==
    } else if(selectMonth.value === "January" && day.value >= 21) {
        userSign.innerHTML = sign[10];
    } else if(selectMonth.value === "February" && day.value <= 18) {
        userSign.innerHTML = sign[10];
    // == PISCES ==
    } else if(selectMonth.value === "February" && day.value >= 19) {
        userSign.innerHTML = sign[11];
    } else if(selectMonth.value === "March" && day.value <= 20) {
        userSign.innerHTML = sign[11];
    }
    

    tarotName.innerHTML = cardData[randomTarot].cardName;
    reading.innerHTML = cardData[randomTarot].cardDesc;

    resultGiven = true;
});





