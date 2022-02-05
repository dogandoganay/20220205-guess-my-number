# 20220205-guess-my-number
Warming up to start coding

Functions to be used:
1. document.getElementById(“id given”): document.getElementById() is used to fetch an element from the HTML page having the id as provided (specified) by the user.
“.value” is used to access the value of the HTML element accessed.

2. Math.random() : The random() function is used to generate a random number between 0 (inclusive) and 1 (exclusive). This generated number is then multiplied with 10 and added 1 to generate numbers from 1 – 10. (if you only want to play in the range of 1-10. Later, game range can be decided object guessRange.min and guessRange.max)

Beginning of the game: There is no highscore yet. 
![screely-1644100147978](https://user-images.githubusercontent.com/17750127/152661122-14095020-5c18-4b94-a424-a68c261ea77d.png)

We started guessing with 12, but it says it is low. Lets put a higher number
![screely-1644100165693](https://user-images.githubusercontent.com/17750127/152661124-fd11d14f-d50a-47e0-9190-d8e409417f67.png)

And now 16 is higher. Must be between 12 and 16. But watch out for the score. Every time a guess made, score decrases
![screely-1644100183692](https://user-images.githubusercontent.com/17750127/152661126-cea568a4-c172-405a-9190-35c0ecc8fb9e.png)

Hooray, we got the number correct. New highscore is now our score (since there was no prior). There is a button called "Again" which sets everything up and running again, but does not reset the highscore and keep it. 
![screely-1644100207396](https://user-images.githubusercontent.com/17750127/152661127-5b3e8cfd-0a92-4f11-ae9f-dafb8164ffe2.png)

New game ready, with the highscore maintained. Enjoy playing!
![screely-1644100218964](https://user-images.githubusercontent.com/17750127/152661128-1b11a37b-cd77-4d97-8e94-e85a1bede135.png)
