const mainDiv = document.querySelector(".main-div")
const imgUser = document.querySelector(".img-user")
const imgComp = document.querySelector(".img-comp")
const message = document.querySelector(".message")
const userScoreSpan = document.querySelector("#user-score")
const compScoreSpan = document.querySelector("#comp-score")

const array = ["r", "p", "s"]
let userChoice, compChoice
let userScore = 0
let compScore = 0

message.textContent = `Choose:`
imgUser.innerHTML = `<img src="./img/${array[Math.floor(Math.random() * 3)]}.png" />`

const randomImg = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  compChoice = array[randomNumber]
  imgComp.innerHTML = `<img src="./img/${compChoice}.png" />`
}
randomImg()

const logic = () => {
  if ((userChoice === "r" && compChoice === "s") ||
    (userChoice === "s" && compChoice === "p") ||
    (userChoice === "p" && compChoice === "r")) {
    message.textContent = `You won`
    userScore++
  } else if ((userChoice === "s" && compChoice === "r") ||
    (userChoice === "p" && compChoice === "s") ||
    (userChoice === "r" && compChoice === "p")) {
    message.textContent = `The computer won`
    compScore++
  } else if (userChoice === compChoice) {
    message.textContent = `It's a tie, try again`
  }
  userScoreSpan.textContent = userScore
  compScoreSpan.textContent = compScore
}

mainDiv.addEventListener("click", (e) => {
  if (e.target.id) {
    userChoice = e.target.id
    imgUser.innerHTML = `<img src="./img/${userChoice}.png" />`
    randomImg()
    logic()
  }
})
