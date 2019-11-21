import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import EmoGlobal from './emotionalThings/EmoGlobal'
import { UserTabsContext } from './contexts/UserTabsContext'
import { EditTabContext } from './contexts/EditTabContext'
import FormikSignUp from './components/signUp/FormikSignUp'
import FormikLogin from './components/login/FormikLogin'
import HomePage from './components/homePage/HomePage'
import TabCategory from './components/tabCategory/TabCategory'
import PrivateRoute from './privateRoute/PrivateRoute'
import FormikTabSave from './components/tabSave/FormikTabSave'
import FormikTabEdit from './components/tabEdit/FormikTabEdit'
import EditPrivateRoute from './privateRoute/EditPrivateRoute'


function App() {
  const [userTabArray, setUserTabArray] = useState({ tabs: [] })
  const [tab, setTab] = useState({})
  return (
    <>
      <EmoGlobal />
      <UserTabsContext.Provider value={{ userTabArray, setUserTabArray }}>
        <EditTabContext.Provider value={{ tab, setTab }}>
          <Route exact path='/' component={FormikSignUp} />
          <Route path='/login' component={FormikLogin} />
          <PrivateRoute exact path='/home' component={HomePage} />
          <PrivateRoute path='/save' component={FormikTabSave} />
          <EditPrivateRoute path='/edit' component={FormikTabEdit} />
          <PrivateRoute path='/home/:id' component={TabCategory} />
        </EditTabContext.Provider>
      </UserTabsContext.Provider>
    </>
  )
}

export default App
