import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/navigation/NavBar'
import EmoGlobal from './EmoGlobal'
import { UserTabsContext } from './UserTabsContext'
import FormikSignUp from './components/signUp/FormikSignUp'
import FormikLogin from './components/login/FormikLogin'
import HomePage from './components/homePage/HomePage'
import TabCategory from './components/tabCategory/TabCategory'

//adding Private route
import PrivateRoute from "./components/privateRoute/PrivateRoute"

function App() {
  const [userTabArray, setUserTabArray] = useState({
    tabs: [
      {
        id: 12,
        url: 'https://www.youtube.com',
        name: 'YouTube',
        notes: 'My Favourite Video Site',
        user_id: 2,
        category_id: 1,
        category: 'Entertainment',
      },
    ],
  })
  return (
    <>
      <EmoGlobal />
      <UserTabsContext.Provider value={{ userTabArray, setUserTabArray }}>
        <NavBar />
        <Route exact path='/' component={FormikSignUp} />
        <Route path='/login' component={FormikLogin} />
        <PrivateRoute exact path='/home' component={HomePage} />
        <PrivateRoute path='/home/:id' component={TabCategory} />
      </UserTabsContext.Provider>
    </>
  )
}

export default App
