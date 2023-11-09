const bookTask = document.getElementById('book');
const taskContainer = document.querySelector('.task__container');
const scheduleContainer = document.querySelector('.schedule__container');

let selectedColor, active;

//Event Listeners
taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);

// Tasks click  (3)
function selectTask (e){
    resetTasks()

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'book':
            activeTask(bookTask, taskColor);
            icon = '<i class="fas fa-x"></i>';
            break
    }

};

// Set colors for schedule (4)
function setColors (e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
};

function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

function resetTasks(){
    const allTasks = document.querySelectorAll('.task__name');

    allTasks.forEach((item)=>{
        item.className = 'task__name';
    })
}

// Find the Confirm button by its id
const confirmButton = document.getElementById('confirm-button');

// Add an event listener to the button
confirmButton.addEventListener('click', function() {
    // Redirect to the booking.html page
    window.location.href = 'booking.html';
});
