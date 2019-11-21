import axiosWithAuth from '../utils/axiosWithAuth'

export const deleteTab = deleteId => {
  const id = localStorage.getItem('id')
  axiosWithAuth()
    .delete(`/tabs/${id}/${deleteId}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  return true
}
