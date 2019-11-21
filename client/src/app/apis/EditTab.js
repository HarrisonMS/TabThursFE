import axiosWithAuth from '../utils/axiosWithAuth'

export const editTab = (tab, redirect) => {
  const id = localStorage.getItem('id')
  axiosWithAuth()
    .put(`/tabs/${id}/${tab.id}`, tab)
    .then(res => {
      console.log(res)
      redirect()
    })
    .catch(err => console.log(err))
}