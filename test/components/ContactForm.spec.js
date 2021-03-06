import VeeValidate, { Validator } from 'vee-validate'
import { shallow, createLocalVue, mount } from 'vue-test-utils'

import ContactForm from '@/components/ContactForm'

const localVue = createLocalVue()
localVue.use(VeeValidate)

describe('ContactForm component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(ContactForm, {
      localVue,
      provide: {
        $validator: new Validator()
      }
    })

    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should call handleSubmit when clicking the send button', () => {
    const wrapper = shallow(ContactForm, {
      localVue,
      provide: { $validator: new Validator() }
    })
    let spy = jest.spyOn(wrapper.vm, 'handleSubmit')

    const submitButton = wrapper.find('button[type=submit]')
    submitButton.trigger('click')

    expect(spy).toHaveBeenCalledWith('contact-form')
  })

  it('should emit "submit" event with contact details', async () => {
    const wrapper = shallow(ContactForm, {
      localVue,
      provide: { $validator: new Validator() }
    })
    let spy = jest.spyOn(wrapper.vm, '$emit')

    const contactDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      subject: 'Danger Zone',
      message: 'This is an awesome message'
    }

    wrapper.setData(contactDetails)

    await wrapper.vm.handleSubmit('contact-form')

    expect(spy).toHaveBeenCalledWith('submit', contactDetails)
  })

  it('should not emit "submit" event if the form has errors', async () => {
    const wrapper = shallow(ContactForm, {
      localVue,
      provide: { $validator: new Validator() }
    })
    let spy = jest.spyOn(wrapper.vm, '$emit')

    const invalidContactDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      subject: 'Danger Subject',
      message: ''
    }

    wrapper.setData(invalidContactDetails)

    await wrapper.vm.handleSubmit('contact-form')

    expect(spy).not.toHaveBeenCalled()
  })

  it('snapshot', () => {
    const wrapper = mount(ContactForm, {
      localVue,
      provide: {
        $validator: new Validator()
      }
    })
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('snapshot with form error', () => {
    const wrapper = mount(ContactForm, {
      localVue,
      provide: {
        $validator: new Validator()
      }
    })

    wrapper.setData({ hasError: true })

    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
