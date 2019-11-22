import axiosWithAuth from '../utils/axiosWithAuth'

export const editTab = (tab, redirect) => {
  const id = localStorage.getItem('id')
  axiosWithAuth()
    .put(`/tabs/${id}/${tab.id}`, tab)
    .then(() => redirect())
    .catch(() => alert('Something went wrong, please try again!'))
}
