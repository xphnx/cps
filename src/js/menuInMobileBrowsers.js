export function fixViewportUnits() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export function manageMenuBehavior() {
  const openButton = document.querySelector('.rounded-button--icon--burger');
  const closeButton = document.querySelector('.rounded-button--icon--close-menu');
  const menu = document.querySelector('.menu');
  const wrapper = document.querySelector('.main');

  function toggleMenu(toggle) {
    wrapper.classList[toggle]('menu-opened');
    document.body.classList[toggle]('overflow-hidden');
    menu.classList[toggle]('menu--opened');
  }

  openButton.addEventListener('click', () => toggleMenu('add'));
  closeButton.addEventListener('click',() =>  toggleMenu('remove'));
  document.addEventListener('keydown', e => e.key === 'Escape' ? toggleMenu('remove') : '');
  wrapper.addEventListener('click', () => toggleMenu('remove'));
}
