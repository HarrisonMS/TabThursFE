export const GetTabArray = () => {
  useEffect(() => {
    axiosWithAuth().get("/")
    .then((res) => userTabsArray(res.data))
    .catch((err) => console.log(err.res));
  },[])}


import axiosWithAuth from '../utils/axiosWithAuth'
  const GetTabArray = () => {
    // const [userTabArray, setUserTabArray] = useState
    useEffect(() => {
      axiosWithAuth()
        .get("/")
        .then((res) => setUserTabArray(res.data))
        .catch((err) => console.log(err.res));
    }, [])}
    