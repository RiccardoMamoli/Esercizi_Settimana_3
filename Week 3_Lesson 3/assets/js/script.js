// Dichiarazione Variabili 

const myList = document.getElementById('myToDoList');
const insertTask = document.getElementById('insertTaskArea');
const btnInsert = document.getElementById('btnInsert');
const newTaskContainer = document.getElementById('newTaskContainer');


// Funzioni 

btnInsert.addEventListener('click', function (e) {
    e.preventDefault();
    newTaskCreation();
});

function newTaskCreation() {
    const newTask = document.createElement('div');
    newTask.classList.add('new-task');
    if (insertTask.value === '') {
        alert('Devi scrivere qualcosa')
        return;
    } else (
        newTask.innerText = insertTask.value
    );
    newTaskContainer.appendChild(newTask);
    insertTask.value = '';


    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fa-solid fa-delete-left fa-lg" style="color: #ff0000;"></i>';
    newTask.appendChild(deleteButton);
    deleteButton.addEventListener('click', function () {
        newTaskContainer.removeChild(newTask);
    });

    return;

};





