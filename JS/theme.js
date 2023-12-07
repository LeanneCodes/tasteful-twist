const localStorageTheme = localStorage.getItem('theme');
const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');
function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  if (systemSettingDark.matches) {
    return 'dark';
  }
  return 'light';
}
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});
// target the button using the data attribute we added earlier
const button = document.querySelector('[data-theme-toggle]');
button.addEventListener('click', () => {
  const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';
  // update the button text
  const newCta =
    newTheme === 'dark' ? 'Change to light theme' : 'Change to dark theme';
  button.innerText = newCta;
  // use an aria-label if you are omitting text on the button
  // and using sun/moon icons, for example
  button.setAttribute('aria-label', newCta);
  // update theme attribute on HTML to switch theme in CSS
  document.querySelector('html').setAttribute('data-theme', newTheme);
  // update in local storage
  localStorage.setItem('theme', newTheme);
  // update the currentThemeSetting in memory
  currentThemeSetting = newTheme;
});
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const heroSection = document.querySelector('.bg-off-white');
  heroSection.classList.remove('.light-theme', '.dark-theme');
  heroSection.classList.add(`${theme}-theme`);

  const heroText = document.querySelector('.heroText');
  heroText.classList.remove('light-theme', 'dark-theme');
  heroText.classList.add(`${theme}-theme`);

  const navText = document.querySelector('.nav-item');
  navText.classList.remove('light-theme', 'dark-theme');
  navText.classList.add(`${theme}-theme`);

  const footerText = document.querySelector('.copyright');
  footerText.classList.remove('light-theme', 'dark-theme');
  footerText.classList.add(`${theme}-theme`);
}
// Apply the theme when the page loads
applyTheme(localStorageTheme);
