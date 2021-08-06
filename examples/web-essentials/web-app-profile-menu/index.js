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

let profileVisibility = true;

const profilemenubtn = document.getElementById('profilemenubtn');
const profilemenu = document.getElementById('profilemenu');
profilemenubtn.addEventListener('click', event => {
  event.stopPropagation();
  profileVisibility = !profileVisibility;
  if (profileVisibility) {
    profilemenu.style.display = 'flex';
  } else {
    profilemenu.style.display = 'none';
  }
});
profilemenu.addEventListener('click', event => {
  event.stopPropagation();
  event.preventDefault();
});

document.addEventListener('click', event => {
  profileVisibility = false;
  profilemenu.style.display = 'none';
});

const navlistcontainer = document.getElementById('navlistcontainer');
const navbarbtn = document.getElementById('navbarbtn');
navlistcontainer.addEventListener('click', () => onMobileNavigationClick());
navbarbtn.addEventListener('click', () => onMobileNavigationClick());
