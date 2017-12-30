import SectionScroll from './directives/sectionScroll'
import ScrollMenu from './directives/scrollMenu'

const install = function (Vue) {
  Vue.directive(SectionScroll.name, SectionScroll)
  Vue.directive(ScrollMenu.name, ScrollMenu)
}

SectionScroll.install = install

export default SectionScroll
