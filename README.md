# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
-----------
## I have done the following steps to develop the Game and It also tells how game runs.
+ I had downloaded the skeleton project from GitHub link, provided by Udacity in rubric structure.
+ After that I extracted the downloaded zip file, then I understood that most of the modifications would be in `app.js`.
+ I observed the `shuffle` function provided by stackoverflow in `app.js`. and created array for listing the cards used, and named as cList.
+ I had used spread operator `([...])s` to convert HTMLcollection into array.
+ After setting the `cList` array as parameter in `shuffle` function.
+ I have created a deck of cards that shuffles when `renew` is clicked.
+ To each card  I added `click` EventListener.
+ `Warrior` flips the card using `click` to view the content and then flips another card inorder to known whether they are matched or not.
+ if both cards are matched the both cards stays opened in green color.
+ if both cards are not mathched  then cards are flipped back after blinking with pink color
+ I created a counter named as `moves` to count the number of moves made by the `warrior`.
+ Besides, I have given `performance` as number of star, which was decided by number of moves.
+ I derived timer function in `viewCard` function to know the duration of play.
+ I have created a sweet alert when `Warrior` ends the game.
+ Finally the game ends when all cards are mathched.
