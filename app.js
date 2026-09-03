let timeLeft = 30;
let selected = false;
let xp = 0;
let totalVotes = 0;

const options = [
"Castle",
"City",
"Space Station",
"Giant Statue"
];

function showPage(page) {

document.querySelectorAll(".page").forEach(section => {
section.classList.remove("active");
});

document.getElementById(page).classList.add("active");

}

function vote(choice) {

if (selected) {
return;
}

selected = true;
totalVotes++;

document.querySelectorAll(".vote-option").forEach(button => {
button.style.opacity = "0.5";
});

document.querySelectorAll(".vote-option")[choice].style.opacity = "1";
document.querySelectorAll(".vote-option")[choice].style.borderColor = "#6578d9";

xp += 10;

if (xp > 100) {
xp = 100;
}

document.getElementById("xp").textContent = xp;
document.getElementById("progressBar").style.width = xp + "%";

document.getElementById("decisions").textContent = totalVotes;

document.getElementById("voteMessage").textContent =
"✅ Vote submitted! The internet is deciding...";

}

function newDecision() {

timeLeft = 30;
selected = false;

document.getElementById("timer").textContent = timeLeft;

document.getElementById("voteMessage").textContent = "";

document.querySelectorAll(".vote-option").forEach(button => {
button.style.opacity = "1";
button.style.borderColor = "#252b45";
});

}

setInterval(() => {

timeLeft--;

document.getElementById("timer").textContent = timeLeft;

if (timeLeft <= 0) {

```
document.getElementById("voteMessage").textContent =
  "🏆 Voting closed! The universe is changing...";

setTimeout(newDecision, 3000);
```

}

}, 1000);
