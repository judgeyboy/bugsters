let menuItems = []

function updateMenu () {
  let windowPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

  for (let item of menuItems) {
    let sectionPosition = document.getElementById(item).offsetTop - 78
    let sectionHeight = document.getElementById(item).clientHeight
    let navigationItem = document.querySelector('a[location=' + item + ']').parentNode
    navigationItem.classList.remove('active')

    if (windowPosition + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
      const lastMenuItem = menuItems[menuItems.length - 1]
      const lastNavigationItem = document.querySelector('a[location=' + lastMenuItem + ']').parentNode
      lastNavigationItem.classList.add('active')
    } else if (windowPosition >= sectionPosition && windowPosition < (sectionPosition + sectionHeight)) {
      navigationItem.classList.add('active')
    } else {
      navigationItem.classList.remove('active')
    }
  }
}

function getMenuItems () {
  const menuItemsNodeList = document.querySelectorAll('.nav-item a[location]')
  let menuItems = []

  for (let i = 0; i < menuItemsNodeList.length; i++) {
    let element = menuItemsNodeList[i]
    menuItems.push(element.getAttribute('location'))
  }

  return menuItems
}

const ScrollMenu = {
  name: 'ScrollMenu',

  inserted () {
    menuItems = getMenuItems()
    window.addEventListener('scroll', updateMenu)
  },

  unbind () {
    window.removeEventListener('scroll', updateMenu)
  }
}

export default ScrollMenu
