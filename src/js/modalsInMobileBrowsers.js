export function fixViewportUnits() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export function manageModalBehavior() {
  const burger = document.querySelector('.rounded-button--icon--burger');
  const closeButtons = document.querySelectorAll('.rounded-button--icon--close');
  const menu = document.querySelector('.menu');
  const modalFeedback = document.querySelector('.modal--feedback')
  const modalCallBack = document.querySelector('.modal--callback');
  const wrapper = document.querySelector('.main');
  const buttonsCallBack = document.querySelectorAll('.rounded-button--icon--callback');
  const buttonsMessage = document.querySelectorAll('.rounded-button--icon--message');

  function toggleModal(toggle, modal) {
    const element = chooseModal(modal);

    if (wrapper.classList.length !== 3) document.body.classList[toggle]('overflow-hidden');
    wrapper.classList[toggle](`${modal}-opened`);
    element.classList[toggle](`${modal}--opened`);
  }

  function chooseModal(modal) {
    return modal === 'menu' ? menu
      : modal === 'modal--feedback' ? modalFeedback : modalCallBack;
  }

  function manageCloseSequence() {
    let element = 'menu';

    if (wrapper.classList.contains('modal--feedback-opened')) {
      element = 'modal--feedback';
    } else if (wrapper.classList.contains('modal--callback-opened')) {
      element = 'modal--callback';
    }
    return element;
  }

  burger.addEventListener('click', () => toggleModal('add', 'menu'));

  buttonsCallBack.forEach(button => {
    button.addEventListener('click', () => toggleModal('add', 'modal--feedback'))
  });

  buttonsMessage.forEach(button => {
    button.addEventListener('click', () => toggleModal('add', 'modal--callback'))
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => toggleModal('remove', manageCloseSequence()));
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleModal('remove', manageCloseSequence());
  });

  wrapper.addEventListener('click', () => toggleModal('remove', manageCloseSequence()));
}
