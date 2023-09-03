function solution(event) {
  event.preventDefault();
  var userInput = document.getElementById("userinput").value;
  var userForm = document.getElementById("userForm");
  if (isNaN(parseInt(userInput))) {
    alert("Enter a number");
    userForm.reset();
  } else if (typeof parseInt(userInput) == "number") {
    document.getElementById("partone").innerText = `Proving 1 = ${parseInt(
      userInput
    )}`;
    answerOne(userInput);
  } else {
    alert("Only numbers allowed");
  }
}

function answerOne(userInput) {
  if (parseInt(userInput) < 1) {
    document.getElementById(
      "partfour"
    ).innerHTML = `<p>I appreciate your curiosity, but why not try any positive number first? The same logic you can apply with negative numbers too 😊</p>
    <h3>Interested in source code?<button class="button-confirm" onclick=codeLink()>See Code →</button></h3>`;
  } else if (parseInt(userInput) == 1) {
    document.getElementById(
      "partfour"
    ).innerHTML = `<p>Wait a second... Isn't 1 = 1 already proved? 🤔</p>
    <h3>Interested in source code?<button class="button-confirm" onclick=codeLink()>See Code →</button></h3>`;
  } else {
    document.getElementById("answer").style.display = "";
    for (let i = 2; i < parseInt(userInput); i++) {
      document.getElementById("partthree").innerHTML += `
    <p>Adding '1' on both the sides of the above equation, we get:
        <br>
        1 + 1 = ${i} + 1
        <br>
        2 = ${i + 1}
        <br>
        Since, (1 = 2) & (2 = ${i + 1}), we get
        <br>
        1 = ${i + 1} ...... (${i + 3})
    </p>
    `;
    }
    document.getElementById(
      "partfour"
    ).innerHTML = `<p>Hurray! 🥳 We have proved 1 = ${parseInt(
      userInput
    )} 😉</p>
    <h3>Interested in source code?<button class="button-confirm" onclick=codeLink()>See Code →</button></h3>`;
  }
}

function startOver() {
  location.reload();
}

function codeLink() {
  window.open("https://google.com", "_blank");
}
