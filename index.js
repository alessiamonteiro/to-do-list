const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const contadorWrapper = document.querySelector("#taskCount");
const container = document.querySelector(".taskContainer");
let  count = 0;

addButton.addEventListener("click", () => {
  if (taskInput.value.trim() === "") {
    alert("Tarefa vazia");
    return;
  }

  const taskContainer = document.createElement("div");
  const input = document.createElement("input");
  const text = document.createElement("label");

  input.setAttribute("type", "checkbox");
  input.onchange = (e)=> handleCounter(e);
  text.style = "margin-left: 8px;";

  container.appendChild(taskContainer);
  taskContainer.appendChild(input);
  taskContainer.appendChild(text);

  text.innerHTML = taskInput.value;
  taskInput.value = "";
  contadorWrapper.innerHTML = ++count;

});

function handleCounter(e) {
  if (!e.target.checked) {
    contadorWrapper.innerHTML = ++count
    return;
  }
  contadorWrapper.innerHTML = --count;
}
