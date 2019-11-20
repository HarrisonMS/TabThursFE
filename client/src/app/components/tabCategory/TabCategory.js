import React, { useContext } from 'react'
import { H1, FlexContainer, H2, P } from '../../emotionalThings/EmoTools'
import { UserTabsContext } from '../../contexts/UserTabsContext'
import MicroLinkPreviews from './MicroLinkPreviews'
import SignedInNavBar from '../navigation/SignedInNavBar'

const TabCategory = props => {
  const { userTabArray } = useContext(UserTabsContext)
  const categoryTabs = userTabArray.tabs.filter(
    tab => tab.category === props.match.params.id
  )
  return (
    <>
      <SignedInNavBar />
      <FlexContainer fdc aic acc mainColor m='20px 0' p='10px'>
        <H1>{props.match.params.id}</H1>
        {categoryTabs.map((tab, i) => (
          <FlexContainer key={i} m='20px auto' p='20px' br='2px' maxWidth='550px' shadow='y'>
            <FlexContainer fdc maxWidth='85vw'>
              <H2 m='0 2vw 10px'>{tab.name}</H2>
              <P m='10px 2vw'>{tab.notes}</P>
            </FlexContainer>
            <FlexContainer maxWidth='85vw' m='auto'>
            <MicroLinkPreviews address={tab.url} />
            </FlexContainer>
          </FlexContainer>
        ))}
      </FlexContainer>
    </>
  )
}

export default TabCategory
