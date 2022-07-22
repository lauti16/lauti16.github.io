// Se seleccionan todos los elementos a traves de su id de html
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

// task container: contenedor tomado de html donde se van a ir mostrando las tareas
const tasksContainer = document.getElementById("tasksContainer");

// Funcion de seteado que va a ir mostrando las fechas
const setDate = () => {
  // se crea date usando la clase Date de Js que ya viene incluida
  const date = new Date();
  // Se modifican los contenidos html (textContent), para ir mostrando las fechas.
  // toLocaleDateString, devuele la fecha correspondiente al host
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

const AddNewTask = event => {
    event.preventDefault();
    // Toma el valor del input
    const {value} = event.target.taskText;
    // pregunta no hay algo en el input
    if(!value) return;
    // crea un div
    const task = document.createElement("div");
    // le agrega dos clases
    task.classList.add("task", "roundBorder");
    // Cuando hace click se ejecuta esa funcion
    task.addEventListener("click", changeTaskState);
    task.textContent = value;
    // agrega el div task al principio del container
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event =>{
    event.target.classList.toggle("done");
};

const order = () => {
    const done = [];
    const toDo = [];

    tasksContainer.childNodes.forEach(el =>{
        el.classList.contains("done")? done.push(el) : toDo.push(el);
    })
    return [...toDo, ...done];
}

const renderOrderedTask = () => {
    order().forEach(el => tasksContainer.appendChild(el));
}

setDate();
