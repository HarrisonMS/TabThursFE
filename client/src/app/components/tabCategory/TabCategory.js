import React, { useContext } from 'react'
import { H1, FlexContainer, H2, P } from '../../emotionalThings/EmoTools'
import { UserTabsContext } from '../../contexts/UserTabsContext'
import MicroLinkPreviews from './MicroLinkPreviews'
import SignedInNavBar from '../navigation/SignedInNavBar'
import { Delete, Edit, ButtonHolder } from './EmoTabCategory'
import Modal from '../modal/Modal'
import useModal from '../modal/useModal'

const TabCategory = props => {
  const { userTabArray } = useContext(UserTabsContext)
  const { visible, showHideModal } = useModal()
  const categoryTabs = userTabArray.tabs.filter(
    tab => tab.category === props.match.params.id
  )
  return (
    <>
      <SignedInNavBar />
      <FlexContainer fdc aic acc mainColor m='20px 0' p='10px'>
        <H1>{props.match.params.id}</H1>
        {categoryTabs.map((tab, i) => (
          <FlexContainer
            key={i}
            m='20px auto'
            p='20px'
            br='2px'
            maxWidth='550px'
            shadow='y'
          >
            <FlexContainer fdc maxWidth='100%'>
              <H2 width='calc(100% - 149px)' m='0 0 10px 10px'>
                {tab.name}
              </H2>
              <P m='10px 10px'>{tab.notes}</P>
            </FlexContainer>
            <ButtonHolder>
              <Delete m='0 10px 0 0' onClick={showHideModal}>
                Delete
              </Delete>
              <Modal visible={visible} close={showHideModal} />
              <Edit>Edit</Edit>
            </ButtonHolder>
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
