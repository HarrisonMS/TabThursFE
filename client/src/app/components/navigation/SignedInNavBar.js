import React, { useContext } from 'react'
import { EmoNavLink, SignOut } from './EmoNavigation'
import { FlexContainer, EmoLink } from '../../emotionalThings/EmoTools'
import { UserTabsContext } from '../../contexts/UserTabsContext'

const SignedInNavBar = () => {
  const { setUserTabArray } = useContext(UserTabsContext)
  const handleClick = () => {
    setUserTabArray({"tabs": []})
    localStorage.removeItem('token')
    localStorage.removeItem('id')

  }
  return (
    <nav>
      <FlexContainer>
        <FlexContainer width='30%' acfe>
          <EmoLink to='/'>
            <SignOut onClick={handleClick} m='12px 0px 10px 10px'>
              Sign Out
            </SignOut>
          </EmoLink>
        </FlexContainer>
        <FlexContainer width='70%' jcfe>
          <EmoNavLink
            activeStyle={{ fontWeight: 'bold', color: 'black' }}
            to='/save'
          >
            Save Tab
          </EmoNavLink>
          <EmoNavLink
            exact
            activeStyle={{ fontWeight: 'bold', color: 'black' }}
            to='/home'
          >
            Home
          </EmoNavLink>
        </FlexContainer>
      </FlexContainer>
    </nav>
  )
}

export default SignedInNavBar
