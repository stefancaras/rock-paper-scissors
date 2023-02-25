const $ = (query) => document.querySelector(query);
const array = [
  ["r", "p", "s"],
  ["p", "r"],
  [0, 0],
];
const msg = {
  r: "Rock crushes scissors.",
  p: "Paper covers rock.",
  s: "Scissors cut paper.",
};

$(".main-div").addEventListener("click", (e) => {
  if (e.target.id) {
    array[1][0] = e.target.id;
    array[1][1] = array[0][Math.floor(Math.random() * 3)];
    $(".img-user").innerHTML = `<img src="./img/${array[1][0]}.png" />`;
    $(".img-comp").innerHTML = `<img src="./img/${array[1][1]}.png" />`;
    const choices = array[1].join("");
    if (choices === "rs" || choices === "sp" || choices === "pr") {
      $(".message").innerHTML = `<p class="greenBg">You won</p>`;
      $(".message2").textContent = msg[array[1][0]];
      array[2][0]++;
    } else if (choices === "sr" || choices === "ps" || choices === "rp") {
      $(".message").innerHTML = `<p class="redBg">The computer won</p>`;
      $(".message2").textContent = msg[array[1][1]];
      array[2][1]++;
    } else {
      $(".message").innerHTML = `<p class="yellowBg">It's a tie, try again</p>`;
      $(".message2").textContent = "";
    }
    $("#user-score").textContent = array[2][0];
    $("#comp-score").textContent = array[2][1];
  }
});
