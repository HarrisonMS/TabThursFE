import React, { useState } from 'react'
import NavBar from './components/navigation/NavBar'
import EmoGlobal from './EmoGlobal'
import { UserTabsContext } from './UserTabsContext'

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
      </UserTabsContext.Provider>
    </>
  )
}

export default App
