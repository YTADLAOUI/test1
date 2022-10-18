/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
const saveBtn = document.getElementById("save");
const inputTitle= document.getElementById("recipient-name");


saveBtn.addEventListener("click",saveTask)





function createTask() {
    // initialiser task form
    
    // Afficher le boutton save
    
    // Ouvrir modal form
    
}

function saveTask() {
    // Recuperer task attributes a partir les champs input
    
    
    // Créez task object
    
    const objectTask =
        {
            title         :   inputTitle.value,
            type          :   document.querySelector(".form-check-input:checked" ).value,
            priority      :   'High',
            status        :   'Done',
            date         :   '2022-10-08',
            description   :   `of the person that reported the bug. This will not always be possible, but in some cases it might be advantageous and most effective if a developer can have a chat with a person that actually experienced the bug, especially if the steps to reproduce a problem are not deterministic.`,
        };
    console.log(objectTask)

    

    // Ajoutez object au Array


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