const input = document.getElementById("todo-input");
const submitBtn = document.getElementById("submit");
const todoLists = document.getElementById("todo-lists");

submitBtn.addEventListener("click", addTodo);

function addTodo() {
  if (input.value.trim() === "") return;

  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.value = input.value;
  textInput.classList.add("todo-text");
  textInput.setAttribute("readonly", "readonly");

  const actions = document.createElement("div");
  actions.classList.add("action-items");

  const check = document.createElement("i");
  check.className = "fa-solid fa-check";

  const edit = document.createElement("i");
  edit.className = "fa-solid fa-pen-to-square";

  const trash = document.createElement("i");
  trash.className = "fa-solid fa-trash";

  actions.append(check, edit, trash);
  todoItem.append(textInput, actions);
  todoLists.append(todoItem);

  input.value = "";

  check.addEventListener("click", () => {
    textInput.classList.toggle("completed");
  });

  edit.addEventListener("click", () => {
    if (textInput.hasAttribute("readonly")) {
      textInput.removeAttribute("readonly");
      textInput.focus();
    } else {
      textInput.setAttribute("readonly", "readonly");
    }
  });

  trash.addEventListener("click", () => {
    todoItem.remove();
  });
}
