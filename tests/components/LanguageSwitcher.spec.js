import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { shallow } from 'vue-test-utils'

import LanguageSwitcher from '@/components/LanguageSwitcher'

Vue.use(VueI18n)

const i18n = new VueI18n()

describe('LanguageSwitcher Component', () => {

  it('should be a vue instance', () => {
    const wrapper = shallow(LanguageSwitcher, { i18n })

    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(LanguageSwitcher, { i18n })
    const $html = wrapper.vm.$el.outerHTML

    expect($html).toMatchSnapshot()
  })

  it('should set locale to "de" when user clicks on "DE"', () => {
    const wrapper = shallow(LanguageSwitcher, { i18n })
    const germanLink = wrapper.find(".language-switcher a:first-child")

    germanLink.trigger('click')

    expect(wrapper.vm.$i18n.locale).toBe('de')
  })

  it('should set locale to "en" when user clicks on "EN"', () => {
    const wrapper = shallow(LanguageSwitcher, { i18n })
    const englishLink = wrapper.find(".language-switcher a:last-child")

    englishLink.trigger('click')

    expect(wrapper.vm.$i18n.locale).toBe('en')
  })

})
