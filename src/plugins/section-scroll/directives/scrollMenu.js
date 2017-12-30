let menuItems = []

function updateMenu () {
  let windowPosition = document.documentElement.scrollTop || document.body.scrollTop

  for (let item of menuItems) {
    let sectionPosition = document.getElementById(item).offsetTop
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
  menuItemsNodeList.forEach(element => {
    menuItems.push(element.getAttribute('location'))
  })

  return menuItems
}

const ScrollMenu = {
  name: 'ScrollMenu',

  inserted (el) {
    menuItems = getMenuItems()
    window.addEventListener('scroll', updateMenu)
  },

  unbind (el) {
    window.removeEventListener('scroll', updateMenu)
  }
}

export default ScrollMenu
