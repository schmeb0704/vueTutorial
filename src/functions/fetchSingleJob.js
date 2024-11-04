import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

const fetchSingleJobData = async (jobId) => {
  try {
    const response = await axios.get(`${BASE_URL}/jobs/${jobId}`)
    const data = response.data
    console.log(data)

    return data
  } catch (error) {
    console.error('error fetching jobs', error)
    return error
  }
}
export default fetchSingleJobData
