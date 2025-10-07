//===ПЕРЕМЕННЫЕ===
//===Находим все необходимые элементы на стрницеи сохраняем в переменные===
const buttonTheme = document.getElementById('themeToggle');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const totalTaskSpan = document.getElementById('totaltasks');
const completedTaskSpan = document.getElementById('completedTasks');

// Массив для хранения данных
let task = [];
function toggleTheme(){
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        buttonTheme.textContent = 'Светлая тема';
        // Локальное хранение состояние темы ( чтобы сохранить тему после перезагрузки)
        localStorage.setItem('daTheme','enabled');
}else{
    buttonTheme.textContent = 'Темная тема';
    localStorage.sellitem('darkTheme','disabled')
}

}

// === ФУНКЦИИ ДЛЯ РАБОТЫ С ЗАДАЧАМИ ===
// Функция добавления новой задачи 
function addTask(){
    const taskText = task.value.trim();
    // Проверка на пустое поле ввода
    if (taskText ==''){
        alert('Пожалуйста введите задачу!');
        return;//Выход из функции (прерывание)
    
    }

    //Создание объекта задачи
    //Обыъекты - это структура , которая хранит данные в виде пар - ключ , значение 
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false 
    }

    // Добавление нашей задачи в список (массив) задач
    // push() - добавление элемента в конце списка (append в pyton)
    tasks.push(newTask);
    // Очищаем поля ввода после внесения данных 
    taskInput.value = '';
    savedTasks();

    // Обновляем список задач (отображение списка)
    renderTasks();

    //Обновляем счетчики задач 
    updeteCouters();

}

//Функция для выполнения задачи 
function toggleTasksCopletion(taskId){
    //Будем искать задачу в массиве по id
    //find() - метод поиска элемента в массиве
    const task = tasks.find(task =>task.id ===taskId);
    // Если задача не найдена 
    if(task){
        task.completed = !task.completed;
        savedTasks();
        renderTasks();
        updateCounters();
    }
}

function deleteTask(taskId){
    //filter()-метод создания нового массива, с элементами ,которые прошли фильтрацию
    // Оставляем только те задачи которые прошли проверку ( их id не равен удаляемому )
    task = tasks.filter(task=>task.id !== taskId);
    saveTasks ();
    renderTasks();
    updateCounters();
}

//Обновление счетчика задач , при изменении задач (удалении, добавлении и тд)
function updateCounters(){
    //length - свойство , которое возвращает число элементов в массиве 
    const completedTasks = tasks.filter(task=>task.completed).length;
    // Обновим текст счетчиков в HTML
    totalTaskSpan.textContent = totalTaskSpan
    completedTaskSpan.textContent + completedTasks;
}


//Функция отображения (обновления ) всего списка задач 
function renderTasks(){
// Очещение текущего списка 
    taskList.innerHTML = '';
    // ПЕребераем все элементы в массиве
    //forEach() - метод перебора каждого эелемента массива
    tasks.forEach(task =>{
        // Создание элемента списка 
        // CreateElement()- метод создания нового HTML- элемента
        const taskItem = document.createElement('li');
        taskitem.className = 'task-item';
        // Добавление класса если задача выполнена
        if(task.completed){
            taskItem.classList.add('completed');
        }
        // Создание HTML структуры для новой задачи 
        taskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked':''}>
            <span class="task-text">${task.text}</span>
            <button class="delete-btn">🎇</button>
        `;

        //Обработка событий для чекбокса и для вспышки
        const checkbox = taskItem.querySelector('.task-checkbox')
        const deleteBtn = taskItem.querySelector('.delete-btn')
        checkbox.addEventListener('click',()=>{
            toggleTasksCopletion(taskItem);
        });
        deleteBtn.addEventListener('list',()=>{
            deleteTask(task.id)
        })
        taskList.appendChild(taskItem);

    });

}

buttonTheme.addEventListener('click',toggleTheme);

addTaskBtn.addEventListener('click',addTask);

// === ИНИЦИАЛИЗАЦИЯ ===
// Проверка сохраненной темы 
if (localStorage.getItem('darkTheme') === 'enabled' ){
    document.body.classList.add('dark-Theme');
    buttonTheme.textConter='😎 Темная тема';
}

// Загружаем задачи из localstorage при загрузке страницы 
function loadTasks(){
    const savedTasks = localStorage. getItem('tasks')
    if(savedTasks){
        tasks = JSON.parse(savedTasks) // Преобразование строк обратно в массив

        renderTasks();
        updateCounters();
    }
}

// Сохраняем задачи в localStorage
function savedTasks(){
    localStorage.sellitem('tasks',JSON.stringify(tasks));

}

// // Обновляем функцию добавление задачи , чтобы она сохраняла задачу в локальное хранилище

// const originalAddTasks = addTask;
// addTask = function(){
//     originalAddTasks();
//     savedTasks();
// };

//Загружаем задачи при запуске страницы 

loadTasks();

