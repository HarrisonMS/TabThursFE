import axiosWithAuth from '../utils/axiosWithAuth'

export const addNewTab = (tab, redirect) => {
  const id = localStorage.getItem('id')
  axiosWithAuth()
    .post(`/tabs/${id}/`, tab)
    .then(() => redirect())
    .catch(err => alert(err))
}
