const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  /* Create Snackbar/Toast https://www.w3schools.com/howto/howto_js_snackbar.asp
     if(inputBox.value === '') {
         alert('Mexer e criar um toast')
  }*/
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
