import { shallow } from 'vue-test-utils'
import ScrollLink from './ScrollLink'

describe('ScrollLink component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(ScrollLink, {
      props: {
        location: '#about'
      },
      slots: {
        default: '<span>Read More</span>'
      }
    })
  })

  it('should be a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should contain the inner text', () => {
    const spanElement = wrapper.find('span')
    expect(spanElement.text()).toBe('Read More')
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
