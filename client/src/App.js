import React, { useState } from 'react'
import {Route} from 'react-router-dom'
import NavBar from './components/navigation/NavBar'
import EmoGlobal from './EmoGlobal'
import { UserTabsContext } from './UserTabsContext'
import FormikSignUp from './components/signUp/FormikSignUp'
import FormikLogin from './components/login/FormikLogin'
import HomePage from './components/homePage/HomePage'
import TabCategory from './components/tabCategory/TabCategory'

function App() {
  const [userTabArray, setUserTabArray] = useState({
    tabs: [
      {
        id: 1,
        url: 'https://google.com/',
        name: 'googly',
        notes: 'find stuff',
        user_id: 1,
        category_id: 1,
        category: 'misc',
      },
      {
        id: 2,
        url: 'https://youtube.com/',
        name: 'youtube-y',
        notes: 'watch stuff',
        user_id: 1,
        category_id: 2,
        category: 'media',
      },
      {
        id: 3,
        url: 'https://bing.com/',
        name: 'bingy',
        notes: 'find stuff',
        user_id: 1,
        category_id: 1,
        category: 'misc',
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
        <Route exact path='/home' component={HomePage} />
        <Route path='/home/:id' component={TabCategory} />
      </UserTabsContext.Provider>
    </>
  )
}

export default App
