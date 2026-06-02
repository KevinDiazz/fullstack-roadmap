let tareas = [];
let completed = [];
let eliminadas = [];
const btnTarea = document.querySelector(".btnAddTarea");
const btnAddTarea = document.querySelector("#tareaAdd");
const tareaAddContainer = document.querySelector(".TareaAddContainer");
const listaTareas = document.querySelector("#listaTareas");
const tareasCompletadas = document.querySelector(".completedTask");
const tareasCompletadasContainer = document.querySelector(".tareasCompletadas");
const tareasEliminadas = document.querySelector(".eliminadasTask");
const tareasEliminadasContainer = document.querySelector(".tareasEliminadas");
const doneButton = document.querySelector(".doneButton");
const eliminatedButton = document.querySelector(".eliminatedButton");
doneButton.addEventListener("click", () => {
  if (tareasCompletadasContainer.style.display === "block") {
    tareasCompletadasContainer.style.display = "none";
    tareasEliminadasContainer.style.display = "none";
  } else {
    tareasCompletadasContainer.style.display = "block";
    tareaAddContainer.style.display = "none";
    tareasEliminadasContainer.style.display = "none";
  }
  renderCompletadas();
});

eliminatedButton.addEventListener("click", () => {
  if (tareasEliminadasContainer.style.display === "block") {
    tareasCompletadasContainer.style.display = "none";
    tareasEliminadasContainer.style.display = "none";
  } else {
    tareasCompletadasContainer.style.display = "none";
    tareaAddContainer.style.display = "none";
    tareasEliminadasContainer.style.display = "block";
  }
  renderEliminadas();
});

function handleClickTarea(event) {
  const button = event.target;
  const tareaAddContainer = document.querySelector(".TareaAddContainer");
  if (tareaAddContainer.style.display === "block") {
    tareaAddContainer.style.display = "none";
  } else {
    tareaAddContainer.style.display = "block";
    tareasCompletadasContainer.style.display = "none";
    tareasEliminadasContainer.style.display = "none";
  }
}

function render() {
  const listaTareas = document.querySelector("#listaTareas");
  let listaHtml = (listaTareas.innerHTML = "");
  tareas.forEach((element) => {
    const nuevoElemento = createTareaElement(element);
    listaTareas.appendChild(nuevoElemento);
  });
}

function renderCompletadas() {
  if (!completed.length < 1) {
    tareasCompletadas.innerHTML = "";
    completed.forEach((element) => {
      const nuevoElement = document.createElement("li");
      nuevoElement.textContent = element;
      tareasCompletadas.appendChild(nuevoElement);
    });
  }
}
function renderEliminadas() {
  if (!eliminadas.length < 1) {
    tareasEliminadas.innerHTML = "";
    eliminadas.forEach((element) => {
      const nuevoElement = document.createElement("li");
      nuevoElement.textContent = element;
      tareasEliminadas.appendChild(nuevoElement);
    });
  }
}

function createTareaElement(text) {
  const nuevoElement = document.createElement("li");
  const nuevoEditButon = document.createElement("button");
  const nuevoDeleteButon2 = document.createElement("button");
  const nuevoDoneButon3 = document.createElement("button");
  nuevoEditButon.textContent = "Editar";
  nuevoDeleteButon2.textContent = "Eliminar";
  nuevoDoneButon3.textContent = "Hecho";
  nuevoElement.textContent = text;
  nuevoEditButon.addEventListener("click", () => updateTarea(text));
  nuevoDeleteButon2.addEventListener("click", () => {
    deleteTarea(text);
  });
  nuevoDoneButon3.addEventListener("click", () => doneTarea(text));
  nuevoElement.appendChild(nuevoEditButon);
  nuevoElement.appendChild(nuevoDeleteButon2);
  nuevoElement.appendChild(nuevoDoneButon3);
  return nuevoElement;
}

function addTarea(event) {
  const inputTarea = document.querySelector(".tareaInfo");
  tareas.push(inputTarea.value);
  const nuevoElemento = createTareaElement(inputTarea.value);
  listaTareas.appendChild(nuevoElemento);
  inputTarea.value = "";
  tareaAddContainer.style.display = "none";
  render()
}

function deleteTarea(text) {
  tareas = tareas.filter((tarea) => tarea !== text);
  eliminadas.push(text);
  render();
}

function doneTarea(text) {
  tareas = tareas.filter((tarea) => tarea !== text);
  completed.push(text);
  render();
}
function updateTarea(text) {
  const nuevoTexto = prompt(`Editar Tarea ${text}:`);
  tareas = tareas.filter((tarea) => tarea !== text);
  if (nuevoTexto) {
    tareas.push(nuevoTexto);
    render();
  }
}

btnTarea.addEventListener("click", handleClickTarea);
btnAddTarea.addEventListener("click", addTarea);
