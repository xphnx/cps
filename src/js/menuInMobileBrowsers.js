export function fixViewportUnits() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export function manageMenuBehavior() {
  const burger = document.querySelector('.rounded-button--icon--burger');
  const closeButtons = document.querySelectorAll('.rounded-button--icon--close');
  const menu = document.querySelector('.menu');
  const modalFeedback = document.querySelector('.modal__feedback')
  const modalCallBack = document.querySelector('.modal__callback');
  const wrapper = document.querySelector('.main');
  const buttonsCallBack = document.querySelectorAll('.rounded-button--icon--callback');
  const buttonsMessage = document.querySelectorAll('.rounded-button--icon--message');

  function toggleModal(toggle, modal) {
    const element = chooseModal(modal);

    wrapper.classList[toggle](`${modal}-opened`);
    document.body.classList[toggle]('overflow-hidden');
    element.classList[toggle](`${modal}--opened`);
  }

  function chooseModal(modal) {
    return modal === 'menu' ? menu
      : modal === 'modal__feedback' ? modalFeedback : modalCallBack;
  }

  function manageCloseSequence() {
    let element = 'menu';

    if (wrapper.classList.contains('modal__feedback-opened')) {
      element = 'modal__feedback';
    } else if (wrapper.classList.contains('modal__callback-opened')) {
      element = 'modal__callback';
    }
    return element;
  }

  burger.addEventListener('click', () => toggleModal('add', 'menu'));

  buttonsCallBack.forEach(button => {
    button.addEventListener('click', () => toggleModal('add', 'modal__feedback'))
  });

  buttonsMessage.forEach(button => {
    button.addEventListener('click', () => toggleModal('add', 'modal__callback'))
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => toggleModal('remove', manageCloseSequence()));
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleModal('remove', manageCloseSequence());
  });

  wrapper.addEventListener('click', () => toggleModal('remove', manageCloseSequence()));
}