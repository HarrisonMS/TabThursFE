import React, { useContext } from 'react'
import { H1, FlexContainer, H2, P } from '../../EmoTools'
import { UserTabsContext } from '../../UserTabsContext'
import MicroLinkPreviews from '../utils/MicroLinkPreviews'

const TabCategory = props => {
  const { userTabArray } = useContext(UserTabsContext)
  const categoryTabs = userTabArray.tabs.filter(
    tab => tab.category === props.match.params.id
  )
  return (
    <>
      <H1>{props.match.params.id}</H1>
      {categoryTabs.map(tab => (
        <FlexContainer margin='20px auto' width='498px'>
          <FlexContainer fdc>
            <H2 margin='20px 10px 10px'>{tab.name}</H2>
            <P margin='10px'>{tab.notes}</P>
          </FlexContainer>
          <MicroLinkPreviews address={tab.url} />
        </FlexContainer>
      ))}
    </>
  )
}

export default TabCategory
