import React, { useContext } from 'react'
import { UserTabsContext } from '../../UserTabsContext'
import { H3, P } from '../../EmoTools'

const HomePage = () => {
  const {userTabArray, setUserTabArray} = useContext(UserTabsContext)

  console.log(userTabArray)

  const sortedTabs = Array.from(
    new Set(userTabArray.tabs.map(tab => tab.category_id))
  )
    .map(catID => userTabArray.tabs.filter(tab => catID === tab.category_id))
    .map(array => (
      <>
        <H3>{array[0].category}</H3>
        {array.map(tab => (
          <P>{tab.name}</P>
        ))}
      </>
    ))

  return <>{sortedTabs}</>
}

export default HomePage
