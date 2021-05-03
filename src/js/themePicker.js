const switchBtn = document.querySelector('#theme-switch-toggle');
const trackRef = document.querySelector('.theme-switch__track');
const bodyEl = document.querySelector('body');
switchBtn.addEventListener('change', choseTheme);

const localStorageTheme = window.localStorage.getItem('theme');
const localStorageToggle = window.localStorage.getItem('toggle');

function choseTheme() {
  if (this.checked) {
    bodyEl.classList.add('dark-theme');
    bodyEl.classList.remove('light-theme');
    window.localStorage.setItem('theme', 'dark-theme');
    window.localStorage.setItem('toggle', 'true');
  } else {
    bodyEl.classList.add('light-theme');
    bodyEl.classList.remove('dark-theme');
    window.localStorage.setItem('theme', 'light-theme');
    window.localStorage.removeItem('toggle');
  }
}
bodyEl.classList.add(localStorageTheme);
switchBtn.checked = localStorageToggle;
