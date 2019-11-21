import React, { useContext } from 'react'
import { H1, FlexContainer, H2, P, EmoLink } from '../../emotionalThings/EmoTools'
import { UserTabsContext } from '../../contexts/UserTabsContext'
import MicroLinkPreviews from './MicroLinkPreviews'
import SignedInNavBar from '../navigation/SignedInNavBar'
import { Delete, Edit, ButtonHolder, Hack } from './EmoTabCategory'
import Modal from '../tabDelete/modal/Modal'
import useModal from '../tabDelete/modal/useModal'
import { EditTabContext } from '../../contexts/EditTabContext'


const TabCategory = props => {
  const { userTabArray } = useContext(UserTabsContext)
  const { setTab } = useContext(EditTabContext)
  const { visible, showHideModal, deleteId } = useModal()
  const categoryTabs = userTabArray.tabs.filter(
    tab => tab.category === props.match.params.id
  )
  return (
    <>
      <SignedInNavBar />
      <FlexContainer fdc aic acc mainColor m='20px 0' p='10px'>
        <H1>{props.match.params.id}</H1>
        <Modal deleteId={deleteId} visible={visible} close={showHideModal} />
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
              <Delete m='0 10px 0 0' value={tab.id} onClick={showHideModal}>
                Delete
              </Delete>
              <EmoLink to='/edit'><Edit onClick={e => setTab(tab)}>Edit</Edit></EmoLink>
            </ButtonHolder>
            <FlexContainer maxWidth='85vw' m='auto'>
              <MicroLinkPreviews address={tab.url} />
            </FlexContainer>
          </FlexContainer>
        ))}
      </FlexContainer>
      <Hack>{deleteId}</Hack>
    </>
  )
}

export default TabCategory
