import SectionScroll from './directives/sectionScroll'

const install = function (Vue) {
  Vue.directive('SectionScroll', SectionScroll)
}

SectionScroll.install = install

export default SectionScroll
