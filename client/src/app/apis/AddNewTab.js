import axiosWithAuth from '../utils/axiosWithAuth'

export const addNewTab = tab => {
  const id = localStorage.getItem('id')
  axiosWithAuth()
    .post(`/tabs/${id}/`, tab)
    .then(() =>
      alert('Success! Add another tab or click Home to view your tabs!')
    )
    .catch(() => alert('Uh oh! Something went wrong! Please try again.'))
}
