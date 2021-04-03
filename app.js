const body = document.body
const label = document.querySelector('.c-header__label')
const input = document.querySelector('.c-header__input')

const changeTheme = event => {
  const clickedElement = event.target

  if (clickedElement.checked) {
    body.classList.add('dark')
    label.classList.add('c-header__label--dark')
    return
  }

  body.classList.remove('dark')
  label.classList.remove('c-header__label--dark')
}

input.addEventListener('click', changeTheme)