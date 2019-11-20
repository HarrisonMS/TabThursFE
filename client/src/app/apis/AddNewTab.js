import axiosWithAuth from "../utils/axiosWithAuth";

const AddNewTab = e => {
  e.preventDefault();
  axiosWithAuth()
    .put(`/api/tabs/${id}`, ToEdit)
    .then((res) => {
      // setEditing(false);
    })
    .catch((err) => console.log(err));
};
