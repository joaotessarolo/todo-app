const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function activeToast() {
  const x = document.getElementById("toast-failed");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function addTask() {
  if (inputBox.value === "") {
    activeToast();
  }

  if (inputBox.value) {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  storageData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      storageData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      storageData();
    }
  },
  false
);

function storageData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
