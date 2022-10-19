/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
const saveBtn = document.getElementById("save");
const inputTitle = document.getElementById("recipient-name");
const priorityform = document.getElementById("priority");
const statusform = document.getElementById('status');
let recipientDate = document.getElementById('recipient-date');
let message = document.getElementById('message-text');
saveBtn.addEventListener("click", saveTask);





function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form

}

function saveTask() {
    // Recuperer task attributes a partir les champs input


    // Créez task object

    const objectTask = {
        title: inputTitle.value,
        type: document.querySelector(".form-check-input:checked").value,
        priority: priorityform.value,
        status: statusform.value,
        date: recipientDate.value,
        description: message.value,

    }
    console.log(objectTask)

    // Ajoutez object au Array
    tasks.push(objectTask);

    // refresh tasks

}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}