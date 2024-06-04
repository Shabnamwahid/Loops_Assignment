// 1. Creating a Lesson Plan(Using for loop )
//create an empty array
var myWork = [];
// Use a loop to create lessons
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "lesson ".concat(i),
        status: i % 2 === 1 ? true : false,
    };
    myWork.push(lesson);
}
console.log(myWork);
// 2. Guessing Game (Using while loop )
var maxValue = 8;
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(randomNumber);
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
var indexNumber = 0;
while (indexNumber < numberArray.length) {
    var curruntGuess = numberArray[indexNumber];
    if (curruntGuess === randomNumber) {
        console.log("Wow!  you guess the correct number");
    }
    else if (curruntGuess < randomNumber) {
        console.log("Try again! Guess lower than ".concat(curruntGuess, "."));
    }
    else {
        console.log("Try again! Guess higher than ".concat(curruntGuess, "."));
    }
    indexNumber++;
}
// 3. Counter Incrementer (Using do while loop )
var counter = 0;
var step = 2;
do {
    console.log(counter);
    counter += step;
} while (counter < 100);
// 4.Exploring Objects with for...in Loop
var myObject = {
    item1: "Handbag",
    item2: "Braclet",
    item3: "Dress",
};
for (var x in myObject) {
    console.log("".concat(x, ": ").concat(myObject[x], " "));
}
// 5.Exploring Arrays with Loops(Using loop )
var myArray = [];
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(myArray);
for (var i = 0; i < myArray.length; i++) {
    console.log("Index:  ".concat(i, ", Value: ").concat(myArray[i]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var x = myArray_1[_i];
    console.log("Value: ".concat(x));
}
