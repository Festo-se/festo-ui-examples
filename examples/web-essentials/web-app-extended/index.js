import './style.css';

function onMobileNavigationClick() {
  const mobileNavlistContainer = document.querySelector(
    '.fwe-mobile-navlist-container'
  );
  if (mobileNavlistContainer != null) {
    const classList = mobileNavlistContainer.classList;
    if (classList.contains('fwe-opened')) {
      classList.remove('fwe-opened');
      classList.add('fwe-closed');
    } else {
      classList.remove('fwe-closed');
      classList.add('fwe-opened');
    }
  }
}

const navlistcontainer = document.getElementById('navlistcontainer');
const navbarbtn = document.getElementById('navbarbtn');
navlistcontainer.addEventListener('click', () => onMobileNavigationClick());
navbarbtn.addEventListener('click', () => onMobileNavigationClick());
