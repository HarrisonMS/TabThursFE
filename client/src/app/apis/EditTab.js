const saveEdit = e => {
  e.preventDefault();
  axiosWithAuth()
    .put(`/tabs/${id}/'${colorToEdit.id}`, colorToEdit)
    .then((res) => {
      // setEditing(false);
    })
    .catch((err) => console.log(err));
};
