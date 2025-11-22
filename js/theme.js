// Функция переключения темы
function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
    }
    
    // Сохраняем выбор в localStorage
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Проверяем сохраненную тему или системные настройки
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        html.classList.add('dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        html.classList.remove('dark');
        if (themeToggle) themeToggle.textContent = '🌙';
    }
    
    // Добавляем обработчик на кнопку
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

// Инициализируем тему при загрузке страницы
document.addEventListener('DOMContentLoaded', initTheme);
