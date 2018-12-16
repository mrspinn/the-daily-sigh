import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.nytimes.com/svc/topstories/v2',
  params: { 'api-key': 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' }

})

export default instance
