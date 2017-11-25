import { shallow } from 'vue-test-utils'
import ScrollLink from './ScrollLink'

describe('ScrollLink component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(ScrollLink, { props: { location: '#about' }, slots: { default: [{ text: 'Read More' }] }})
  })

  it('should be a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should have a scrollTo function', () => {
    expect(wrapper.vm.scrollTo).toBeDefined()
  })

  it('should call scrollTo function if link is clicked', () => {
    const spy = jest.spyOn(wrapper.vm, 'scrollTo')

    const link = wrapper.find('a')
    link.trigger('click')

    expect(spy).toHaveBeenCalled()
  })

})
