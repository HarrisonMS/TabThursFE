import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserTabsContext } from '../../UserTabsContext'
import { FlexContainer, H1, H2, H3 } from '../../EmoTools'
import { sortedTabs } from './HomeData'

const HomePage = () => {
  const { userTabArray } = useContext(UserTabsContext)
  console.log(userTabArray)
  console.log(sortedTabs(userTabArray))
  return (
    <>
      <H1>All Saved Tabs</H1>
      {sortedTabs(userTabArray).map((tabObject, i) => (
        <FlexContainer key={i} mainColor fdc aic acc margin='20px'>
          <Link to={`/home/${tabObject.catName}`}>
            <H2 margin='10px 0 15px'>{tabObject.catName}</H2>
          </Link>
          {tabObject.catTabs.map((tab, i) => (
            <H3 key={i}>{tab.name}</H3>
          ))}
        </FlexContainer>
      ))}
    </>
  )
}

export default HomePage
