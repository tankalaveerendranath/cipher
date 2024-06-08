document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'taskItem';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button>Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    function removeTask(e) {
        if (e.target.tagName === 'BUTTON') {
            const taskItem = e.target.parentElement;
            taskList.removeChild(taskItem);
        }
    }
});
