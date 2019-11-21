import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserTabsContext } from '../../contexts/UserTabsContext'
import { FlexContainer, H1, H2, H3 } from '../../emotionalThings/EmoTools'
import { sortedTabs } from './HomeData'
import SignedInNavBar from '../navigation/SignedInNavBar'

const HomePage = () => {
  const { userTabArray } = useContext(UserTabsContext)
  console.log(userTabArray)
  return (
    <>
      <SignedInNavBar />
      <FlexContainer fdc aic acc mainColor m='20px 0'>
        <H1>All Saved Tabs</H1>
        {sortedTabs(userTabArray).map((tabObject, i) => (
          <FlexContainer key={i} mainColor fdc aic acc m='20px'>
            <Link to={`/home/${tabObject.catName}`}>
              <H2 m='10px 0 15px'>{tabObject.catName}</H2>
            </Link>
            {tabObject.catTabs.map((tab, i) => (
              <H3 key={i}>{tab.name}</H3>
            ))}
          </FlexContainer>
        ))}
      </FlexContainer>
    </>
  )
}
export default HomePage
