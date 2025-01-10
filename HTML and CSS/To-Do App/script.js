const taskNameInput = document.getElementById("task-name-input");
const taskDateInput = document.getElementById("task-date-input");
const taskPriorityInput = document.getElementById("task-priority-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todayTasks = document.getElementById("today-tasks");
const futureTasks = document.getElementById("future-tasks");
const completedTasks = document.getElementById("completed-tasks");

// Initialize tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];



// Add a task
addTaskBtn.addEventListener("click", () => {
    const taskName = taskNameInput.value;
    const taskDate = taskDateInput.value;
    const taskPriority = taskPriorityInput.value;

    if (!taskName || !taskDate) {
        alert("Please fill in all fields!");
        return;
    }

    const newTask = {
        name: taskName,
        date: taskDate,
        priority: taskPriority,
        completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();

    // Clear inputs
    taskNameInput.value = "";
    taskDateInput.value = "";
    taskPriorityInput.value = "high";
});

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// Render tasks into their respective sections
function renderTasks() {
    todayTasks.innerHTML = "";
    futureTasks.innerHTML = "";
    completedTasks.innerHTML = "";

    const today = new Date().toISOString().split("T")[0];

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            
            <p class="task-name">${task.name}</p>
            <p class="task-date">${task.date}</p>
            <p class="task-priority">${task.priority}</p>
            <div class="icons">
                <a href="#" class="icon complete-btn"><i class="fa-solid fa-circle-check"></i></a>
                <a href="#" class="icon delete-btn"><i class="fa-solid fa-trash"></i></a>
            </div>
            
        `;

        // Add event listeners
        taskItem.querySelector(".complete-btn").addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });

        taskItem.querySelector(".delete-btn").addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        // Append tasks to respective sections
        if (task.completed) {
            completedTasks.appendChild(taskItem);
        } else if (task.date === today) {
            todayTasks.appendChild(taskItem);
        } else {
            futureTasks.appendChild(taskItem);
        }
    });
}
// Render tasks on load
renderTasks();