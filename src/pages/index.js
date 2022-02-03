// import '../pages/index.css';
import '../pages/index.scss';

//theme switch
const themeSwitch = document.querySelector('#theme-switcher');

const handleThemeSwitch = isChecked => {
  if (isChecked) {
    document.body.setAttribute('light', '');
  } else {
    document.body.removeAttribute('light', '');
  }
};

themeSwitch.onclick = evt => {
  handleThemeSwitch(evt.target.checked);
};
