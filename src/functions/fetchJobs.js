import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

const fetchJobData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/jobs`)
    const data = response.data

    return data
  } catch (error) {
    console.error('error fetching jobs', error)
    return error
  }
}
export default fetchJobData
