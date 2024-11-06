import axios from 'axios'

const BASE_URL = '/listings'
// const BASE_URL = import.meta.env.VITE_BASE_URL
console.log(BASE_URL)

const fetchJobData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`)
    const data = response.data
    // console.log(data)

    return data
  } catch (error) {
    console.error('error fetching jobs', error)
    return error
  }
}
export default fetchJobData
