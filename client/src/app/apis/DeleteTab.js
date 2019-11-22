import axiosWithAuth from '../utils/axiosWithAuth'

export const deleteTab = deleteId => {
  const id = localStorage.getItem('id')
  axiosWithAuth()
    .delete(`/tabs/${id}/${deleteId}`)
    .catch(() => alert('Something went wrong, please try again!'))
}
