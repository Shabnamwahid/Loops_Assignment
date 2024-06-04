// 1. Creating a Lesson Plan(Using for loop )
//create an empty array
const myWork: {name: string, status:boolean } [] = []
// Use a loop to create lessons
 for (let i=1; i <= 10; i++){
     let lesson = {
       name:`lesson ${i}`,
       status: i%2===1? true:false,
    }
     myWork.push(lesson)
 }
console.log (myWork);

// 2. Guessing Game (Using while loop )
const maxValue = 8;
const randomNumber = Math.floor(Math.random () * maxValue) +1

console.log(randomNumber);
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8]
let indexNumber: number = 0;
while(indexNumber < numberArray.length){
   let curruntGuess = numberArray[indexNumber]  
   if (curruntGuess === randomNumber){
      console.log("Wow!  you guess the correct number");
      
   }
     else if(curruntGuess < randomNumber){
        console.log(`Try again! Guess lower than ${curruntGuess}.`);
     }
      else {
      console.log(`Try again! Guess higher than ${curruntGuess}.`);
   }  
   indexNumber++;   
}

// 3. Counter Incrementer (Using do while loop )
let counter: number = 0;
let step = 2;
do{
    console.log(counter);
    counter += step
}
while (counter< 100);

// 4.Exploring Objects with for...in Loop
let myObject = {
    item1: "Handbag", 
    item2: "Braclet",
    item3: "Dress",
}
for(let x in  myObject){
console.log(`${x}: ${myObject[x]} `);

}

// 5.Exploring Arrays with Loops(Using loop )
const myArray : number[]= []
for(let i=1; i<= 10; i++){
    myArray.push(i)
    
}
console.log(myArray);
for(let i=0; i<myArray.length; i++){
    console.log(`Index:  ${i}, Value: ${myArray[i]}`);
    
}
for(let x of myArray ){
    console.log(`Value: ${x}`);
    
}