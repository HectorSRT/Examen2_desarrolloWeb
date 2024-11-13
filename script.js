function addTask() {
    const container = document.querySelector(".main-container");
    const taskInput = document.getElementById("taskInput");
    const prioridad = document.getElementById("prioridad");
    const seleccionado = prioridad.value;

    if (taskInput.value.trim()) {
        const card = document.createElement("div");

        if (seleccionado === "alta") {
            card.classList.add("cardAlta");
        } else if (seleccionado === "media") {
            card.classList.add("cardMedia");
        } else if (seleccionado === "baja") {
            card.classList.add("cardBaja");
        }

        const text = document.createElement("p");
        text.textContent = taskInput.value;

        const deleteBin = document.createElement("button");
        deleteBin.textContent = "Eliminar";

        deleteBin.onclick = function () {
            if (seleccionado === "alta") {
                if (confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
                    container.removeChild(card);
                }
            } else {
                container.removeChild(card);
            }
        }

        card.appendChild(text);
        card.appendChild(deleteBin);
        container.appendChild(card);

        taskInput.value = "";
    }
}
