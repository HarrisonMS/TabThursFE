import React, { useContext } from 'react'
import { UserTabsContext } from '../../UserTabsContext'
import { H3, P, FlexContainer } from '../../EmoTools'
import { sortedTabs } from './HomeData'

const HomePage = () => {
  const { userTabArray } = useContext(UserTabsContext)
  console.log(sortedTabs(userTabArray))
  return (
    <>
      {sortedTabs(userTabArray).map((tabObject, i) => (
        <FlexContainer 
        key={i}
        mainColor
        fdc
        aic
        acc
        margin='20px'
        >
          <H3>{tabObject.catName}</H3>
          {tabObject.tabName.map((tab, i) => (
            <P key={i}>{tab}</P>
          ))}
        </FlexContainer>
      ))}
    </>
  )
}

export default HomePage
