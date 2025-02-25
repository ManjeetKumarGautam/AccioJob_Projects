let todos = JSON.parse(localStorage.getItem('todos')) || [];

function addTodo() {
    const itemName = document.getElementById('itemName').value;
    const deadline = document.getElementById('deadline').value;
    const priority = document.getElementById('priority').value;

    if (!itemName || !deadline) {
        alert('Please fill in all fields');
        return;
    }

    const todo = {
        id: Date.now(),
        name: itemName,
        deadline: deadline,
        priority: priority,
        completed: false
    };

    todos.push(todo);
    saveTodos();
    renderTodos();
    clearInputs();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function clearInputs() {
    document.getElementById('itemName').value = '';
    document.getElementById('deadline').value = '';
    document.getElementById('priority').value = 'High';
}

function renderTodos() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayTodos = document.getElementById('todayTodos');
    const futureTodos = document.getElementById('futureTodos');
    const completedTodos = document.getElementById('completedTodos');

    todayTodos.innerHTML = '<h2>Today\'s TodoList</h2>';
    futureTodos.innerHTML = '<h2>Future TodoList</h2>';
    completedTodos.innerHTML = '<h2>Completed TodoList</h2>';

    todos.forEach(todo => {
        const todoDate = new Date(todo.deadline);
        todoDate.setHours(0, 0, 0, 0);

        const todoElement = createTodoElement(todo);

        if (todo.completed) {
            completedTodos.appendChild(todoElement);
        } else if (todoDate.getTime() === today.getTime()) {
            todayTodos.appendChild(todoElement);
        } else if (todoDate > today) {
            futureTodos.appendChild(todoElement);
        }
    });
}

function createTodoElement(todo) {
    const div = document.createElement('div');
    div.className = `todo-item ${todo.completed ? 'completed' : ''}`;

    div.innerHTML = `
                <span>${todo.name}</span>
                <span>${formatDate(todo.deadline)}</span>
                <span>Priority: ${todo.priority}</span>
                <div class="todo-actions">
                    <button class="${todo.completed ? 'completedTask' : ' '}" onclick="toggleTodo(${todo.id})"><i class="fa-solid fa-circle-check"></i></button> 
                    <button onclick="deleteTodo(${todo.id})"><i class="fa-solid fa-trash"></i></button>
                
                </div>
            `;

    return div;
}

function formatDate(dateString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
}

// Initial render
renderTodos();
