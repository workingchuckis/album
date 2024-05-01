const siteNav = document.querySelector('.js-site-nav')
const menu = document.querySelector('.js-menu')
const menuButton = document.querySelector('.js-menu-button')
const navCurtain = document.querySelector('.js-nav-curtain')

function mobileNavToggler() {
  const state = {
    isOpen: false,
  }

  function showMenu() {
    siteNav.classList.add('site-nav--is-open')
    menu.classList.remove('fade-out')
    menu.classList.add('fade-in')
  }

  function hideMenu() {
    siteNav.classList.remove('site-nav--is-open')
    menu.classList.remove('fade-in')
    menu.classList.add('fade-out')
  }

  function curtainUp() {
    navCurtain.classList.remove('curtain-down')
    navCurtain.classList.add('curtain-up')
  }

  function curtainDown() {
    navCurtain.classList.remove('curtain-up')
    navCurtain.classList.add('curtain-down')
  }

  function unfocusButton(event) {
    menuButton.classList.remove('menu-button__lines--open')
    menuButton.setAttribute('aria-expanded', 'false')
  }

  function focusButton(event) {
    menuButton.classList.add('menu-button__lines--open')
    menuButton.setAttribute('aria-expanded', 'true')
  }

  function handleMenuButtonClick() {
    if (state.isOpen) {
      hideMenu()
      unfocusButton()
      curtainDown()
      state.isOpen = false
      return
    }

    focusButton()
    curtainUp()
    state.isOpen = true
  }

  function handleCurtainAnimationEnd() {
    if (state.isOpen) {
      showMenu()
    }
  }

  return {
    handleEvent(event) {
      if (event.type === 'click') {
        handleMenuButtonClick()
        return
      }

      if (event.type === 'animationend') {
        handleCurtainAnimationEnd()
      }
    },

    init() {
      menuButton.addEventListener('click', this)
      navCurtain.addEventListener('animationend', this)
    },
  }
}

mobileNavToggler().init()
