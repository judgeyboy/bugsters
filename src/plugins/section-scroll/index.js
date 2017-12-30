import SectionScroll from './directives/sectionScroll'
import ScrollMenu from './directives/ScrollMenu'

const install = function (Vue) {
  Vue.directive(SectionScroll.name, SectionScroll)
  Vue.directive(ScrollMenu.name, ScrollMenu)
}

SectionScroll.install = install

export default SectionScroll
