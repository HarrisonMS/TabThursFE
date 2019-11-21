import axiosWithAuth from '../utils/axiosWithAuth'

export const addNewTab = tab => {
  const id = localStorage.getItem('id')
  axiosWithAuth()
  .post(`/tabs/${id}/`, tab)
  .then(res => console.log(res))
  .catch(err => console.log(err))
}
