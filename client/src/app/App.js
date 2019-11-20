import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import EmoGlobal from './emotionalThings/EmoGlobal'
import { UserTabsContext } from './contexts/UserTabsContext'
import FormikSignUp from './components/signUp/FormikSignUp'
import FormikLogin from './components/login/FormikLogin'
import HomePage from './components/homePage/HomePage'
import TabCategory from './components/tabCategory/TabCategory'
import PrivateRoute from './privateRoute/PrivateRoute'
import FormikTabSave from './components/tabSave/FormikTabSave'

function App() {
  const [userTabArray, setUserTabArray] = useState({
    tabs: [
      {
        id: 12,
        url: 'https://www.youtube.com',
        name: 'YouTube is a Website That Exists',
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
        <Route exact path='/' component={FormikSignUp} />
        <Route path='/login' component={FormikLogin} />
        <PrivateRoute exact path='/home' component={HomePage} />
        <PrivateRoute path='/save' component={FormikTabSave} />
        <PrivateRoute path='/home/:id' component={TabCategory} />
      </UserTabsContext.Provider>
    </>
  )
}

export default App
