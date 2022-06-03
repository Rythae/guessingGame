let points = 0
let nextStage = 1
let guessdRandomNum;
let min = 1
let max = 2
let randomValue =  Math.floor(Math.random() * (max - min + 1) + min)

let username = prompt("Enter a username")
  console.log(username)

const guessNumber = () => {
  guessdRandomNum = +prompt(`Hi ${username} Guess a random number between ${min} and ${max}`)
   if (guessdRandomNum == randomValue) {
      max++
      points++
      nextStage = nextStage + 1
      console.log("Correct")
      console.log(`You earn ${points} point(s) and hereby promoted to stage ${nextStage}`)
      console.log(guessdRandomNum)
      console.log(randomValue)
      guessNumber()

    } 
    else if (guessdRandomNum != randomValue){
      console.log("Incorrect") 
      console.log("Game over") 
       console.log(guessdRandomNum)
      console.log(randomValue)
      return 
    } else {
      return "Game over"
    }
}

 guessNumber()


const increment = () => {
  while (guessdRandomNum == randomValue) {
      console.log("Ran", randomValue)
      //ask again for new guess
      guessNumber()
  return
  }
}

const randomInt = increment()
console.log(randomInt)





