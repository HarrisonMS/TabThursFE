import axiosWithAuth from '../utils/axiosWithAuth'
const saveEdit = e => {
  e.preventDefault();
  axiosWithAuth()
    .put(`/tabs/${id}/'${id}`, cb)
    .then((res) => {
      redirect(home)
    })
    .catch((err) => console.log(err));
};
