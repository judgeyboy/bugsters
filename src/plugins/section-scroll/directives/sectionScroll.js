function scrollToSection (clickEvent) {
  const sectionName = clickEvent.target.getAttribute('location')
  document.getElementById(sectionName).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const SectionScroll = {
  inserted (el) {
    el.addEventListener('click', scrollToSection)
  },

  unbind (el) {
    el.removeEventListener('click', scrollToSection)
  }
}

export default SectionScroll
