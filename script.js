
document.querySelector("a.btn").addEventListener("click", () => {
  document.body.style.transition = "opacity 1s";
  document.body.style.opacity = "0";
});

function goBack() {
  window.history.back();
}

function refreshPage() {
  window.location.reload();
}

function openSettings() {
  alert("Settings panel here!");
}


document.querySelector("img").src
