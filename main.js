//          Переключатель кнопки мода

const btnDarkMode = document.querySelector(".dark-mode");

// ОПРЕДЕЛЯЕМ ПОСЛЕДОВАТЕЛЬНОСТЬ ПРОВЕРОК

// 1. КОГДА ПОЛЬЗОВАТЕЛЬ ВПЕРВЫЕ ЗАШЕЛ - ПРОВЕРКА ЕГО СИСТЕМНЫХ НАСТОЕК


// Проверка темной темы на уровне системных настроек (если пользователь включил темную тему для всего
// в качестве настройки по умолчанию в системе виндовс)

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)  {
    // check im sys Dark Mode
        // добавление темной темі на страниці сайта}
btnDarkMode.classList.add("dark-mode--active");
document.body.classList.add("dark");
}

// 2. КОГДА ПОЛЬЗОВАТЕЛЬ ВКЛЮЧИЛ НА САЙТЕ ТЕМУ В РАЗРЕЗ СИСТЕМ НАСТРОНК

// Проверка локального хранилище на значение темы 
if (localStorage.getItem("darkMode") === ("dark")) {  // если в хранилище класс ДАРК - добавляться темная
    // добавление темной темі на страниці сайта}
btnDarkMode.classList.add("dark-mode--active");
document.body.classList.add("dark"); 
} else if (localStorage.getItem("darkMode") === ("light")) { //discline datk mode
    btnDarkMode.classList.remove("dark-mode--active");
    document.body.classList.remove("dark");
}



// Если меняются системніе настройки (например по времени суток) = меняется тема
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("chamge", (event) => {
const newColorScheme = event.matches ? "dark" : "light"; 

if (newColorScheme === "dark") {
btnDarkMode.classList.add("dark-mode--active");
document.body.classList.add("dark");
localStorage.setItem("darkMode", "dark")
} else {
    btnDarkMode.classList.remove("dark-mode--active");
document.body.classList.remove("dark");
localStorage.setItem("darkMode", "light")
}
} )



// Включение ночного режима по клику на кнопку
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode--active");
    const isDark = document.body.classList.toggle("dark");


    // передача в локальное хранилище (кєш) заданного пользователем темы
    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};
