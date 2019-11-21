import { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

export const GetTabArray = () => {
  const id = localStorage.getItem('id')
  const [newTabsArray, setNewTabsArray] = useState({tabs: []})
  useEffect(() => {
    axiosWithAuth()
      .get(`/tabs/${id}`)
      .then(res => setNewTabsArray(res.data))
      .catch(err => console.log(err.res))
  }, [])
  return newTabsArray
}
