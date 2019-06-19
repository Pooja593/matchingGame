"use strict";
var parentBlock = document.getElementById("deck");
/*
 * Create a list that holds all of your cards
 */
var children = document.getElementsByClassName("card");
var cList = Array.prototype.slice.call(children);
// declaration of time varaiable
let timeFlag = false;
// getting time class
var timeArea = document.getElementById("time");
// intialising moves with 0
var moves = 0;
// getting moves class
var movesSec = document.getElementById("moves");
var cards = [];
var starValue = 3;
// declaration of time varaiables
var time;
var secs;
var mins;
var hours;
var t = 0;
var starsSec = [].slice.call(document.getElementsByClassName("fa-star"));
var matchCards = document.getElementsByClassName("match");
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
//for refreshing
function reload() {
	document.location.reload();
}
window.onload = startGame();
//for appending all childs to parentBlock
function startGame() {
	var manipulatedCards = shuffle(cList);
	while (t < manipulatedCards.length) {
		parentBlock.appendChild(manipulatedCards[t]);
		t++;
	}
}
//adding EventListener
cList.forEach((card) => {
	card.addEventListener("click", viewCard);
})
//showing cards
function viewCard() {
	if (timeFlag == false) {
		startTimer();
		timeFlag = true;
	}
	this.classList.add("card", "open", "show");
	cards.push(this);
	if (cards.length == 2) {
		moves = moves + 1;
		movesSec.innerHTML = moves;
		//calling starRating
		performance();
		//when cards are mathched
		if (cards[0].children[0].classList.item(1) == cards[1].children[0].classList.item(1)) {
			console.log("mathched");
			cards[0].classList.add("match", "disable");
			cards[1].classList.add("match", "disable");
			if (matchCards.length == 16) {
				clearInterval(time);
				//pop-up window
				Swal.fire({
					title: "Applause!!",
					html: 'you have earned <strong style="color:#ff9f33; text-shadow:3px 3px 3px #ddd">' + starValue + '<i class="fa fa-star"></i></strong> <br> You completed this game within <br>' + hours + ' hours :' + mins + 'minutes:' + secs + 'seconds <br>' + moves + 'no of moves',
					confirmButtonText: '<i class="fa fa-thumbs-up"></i> Replay',
				}).then(() => {
					window.reload();
				});
			}
			cards = [];
		} else {
			console.log("notmathched");
			cards[0].classList.add("unmatch");
			cards[1].classList.add("unmatch");
			console.log(cards[0]);
			//when cards are unmatched
			cards.map((clickedCard) => {
				setTimeout(() => {
					clickedCard.classList.remove("unmatch", "open", "show", "disable");
				}, 200);
			})
			cards = [];
		}
	}
}
//Timer functionality
function startTimer() {
	secs = 0;
	mins = 0;
	hours = 0;
	time = setInterval(() => {
		secs = secs + 1;
		if (secs == 60) {
			secs = 0;
			mins = mins + 1;
		}
		if (mins == 60) {
			mins = 0;
			hours = hours + 1;
		}
		timeArea.innerHTML = hours + ":" + mins + ":" + secs;
	}, 1000)
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
// starRating function
function performance() {
	if (moves >= 15 && moves <= 20) {
		starValue = 2;
		starsSec[2].style.display = "none";
	}
	if (moves >= 20) {
		starValue = 1;
		starsSec[1].style.display = "none";
	}
}
