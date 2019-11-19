import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserTabsContext } from '../../UserTabsContext'
import { H3, P, FlexContainer, H1 } from '../../EmoTools'
import { sortedTabs } from './HomeData'

const HomePage = () => {
  const { userTabArray } = useContext(UserTabsContext)
  return (
    <>
      <H1>All Saved Tabs</H1>
      {sortedTabs(userTabArray).map((tabObject, i) => (
        <FlexContainer key={i} mainColor fdc aic acc margin='20px'>
          <Link to={`/home/${tabObject.catName}`}>
            <H3>{tabObject.catName}</H3>
          </Link>
          {tabObject.tabName.map((tab, i) => (
            <P key={i}>{tab}</P>
          ))}
        </FlexContainer>
      ))}
    </>
  )
}

export default HomePage
