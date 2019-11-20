const BubblePage = () => {
  useEffect(() => {
    axiosWithAuth().get("/")
    .then((res) => userTabsArray(res.data))
    .catch((err) => console.log(err.res));
  },[])}


