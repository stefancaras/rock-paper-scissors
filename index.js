const $ = query => document.querySelector(query)
const array = [["r", "p", "s"], ["p", "r"], [0, 0]]

$(".main-div").addEventListener("click", (e) => {
  if (e.target.id) {
    array[1][0] = e.target.id
    array[1][1] = array[0][Math.floor(Math.random() * 3)]
    $(".img-user").innerHTML = `<img src="./img/${array[1][0]}.png" />`
    $(".img-comp").innerHTML = `<img src="./img/${array[1][1]}.png" />`
    const choices = array[1].join("")
    if (choices === "rs" || choices === "sp" || choices === "pr") {
      $(".message").textContent = `You won`
      array[2][0]++
    } else if (choices === "sr" || choices === "ps" || choices === "rp") {
      $(".message").textContent = `The computer won`
      array[2][1]++
    } else $(".message").textContent = `It's a tie, try again`
    $("#user-score").textContent = array[2][0]
    $("#comp-score").textContent = array[2][1]
  }
})
