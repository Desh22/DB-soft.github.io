const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
