import axios from 'axios'

axios.defaults.baseURL = 'https://bugsters-api.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'application/json'

class Api {

  post (url, data) {
    return axios.post(url, data)
  }

}

export default new Api()
