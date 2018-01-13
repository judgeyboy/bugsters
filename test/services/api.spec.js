import axios from 'axios'
import sinon from 'sinon'

import api from '@/services/api'

describe('API Service', () => {
  it('axios should be configured correctly', () => {
    expect(axios.defaults.baseURL).toBe('https://bugsters-api.herokuapp.com')
    expect(axios.defaults.headers.post['Content-Type']).toBe('application/json')
  })

  it('Post function should call POST request correctly', async () => {
    let axiosStub = sinon.stub(axios, 'post').resolves()

    const url = 'mail/contact'
    const contactDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      subject: 'Top Secret'
    }

    await api.post(url, contactDetails)

    sinon.assert.calledWith(axiosStub, url, contactDetails)
  })
})
