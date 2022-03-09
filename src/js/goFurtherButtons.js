export function manageGoFurtherButtonsBehavior() {
  const buttons = document.querySelectorAll('.go-further');

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      const wrapper = e.target.parentElement.firstElementChild;
      wrapper.classList.toggle('go-further-opened');
      if (wrapper.classList.contains('go-further-opened')) {
        e.target.textContent = 'Скрыть'
      } else {
        e.target.textContent = e.target.classList.contains('go-further--brands') ? 'Показать всё' : 'Читать далее'
      }
    });
  })
}
