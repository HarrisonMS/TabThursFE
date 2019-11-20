
import  {UserTabsContext } from "../../UserTabsContext"
import React, { useContext } from 'react'


const { userTabArray } = useContext(UserTabsContext)
const deleteColor = tabs => {
  console.log(tabs);
  axiosWithAuth()
    .delete(`${tabs.id}`)
    .then(res => {
      console.log(res);
      updateColors(tabs.filter(el => el.id !== tabs.id));
    })
    .catch(err => console.log(err));
  }



// import  {UserTabsContext } from "../../UserTabsContext"
// import React, { useContext } from 'react'

// // const { userTabArray } = useContext(UserTabsContext)
// // console.log(userTabArray)
// // // axiosWithAuth()
// // //       .delete(`${tabs.id}`)
// // //       .then(res => {
// // //         console.log(res);
// // //         updateColors(tabs.filter(el => el.id !== color.id));
// // //       })
// // //       .catch(err => console.log(err));

// const DeleteTab = () =>{ 
//   const { userTabArray } = useContext(UserTabsContext)
// console.log(userTabArray)
// }