import React from 'react'
import Header from '../components/Header'
import OptForm from '../components/opt-form'
import OptFormContainer from './OptFormContainer'

function HeaderContainer() {
  return (
    <Header>
        <Header.Section>
            <Header.Logo>Logo</Header.Logo>
            <Header.SubSection>
                English
                <Header.Button>Sign In</Header.Button>
            </Header.SubSection>
        </Header.Section>
        <Header.Section style={{flexDirection: 'column'}}>
            <Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
            <Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>
            <OptFormContainer />
        </Header.Section>
    </Header>
  )
}

export default HeaderContainer