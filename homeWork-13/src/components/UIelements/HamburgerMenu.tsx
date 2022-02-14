import styled from 'styled-components'
import { ReactComponent as Teams } from '../../assets/icons/hamburger_teams.svg'
import { ReactComponent as Players } from '../../assets/icons/hamburger_players.svg'
import { ReactComponent as SignOut } from '../../assets/icons/hamburger_out.svg'

const Hamburger = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
height: 992px;
width: 140px;
padding: 32px 0px;
`
const Header = styled.header`
display: flex;
flex-direction: column;
align-items: center;
`
const List = styled.div`
height: 70px;
width: 70px;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
`
const Icons = styled.div`
width: 24px;
height: 24px;
`
const Text = styled.div`
margin-top: 4px;
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 150%;
color: var(--light-grey);
`
const Footern = styled.footer`
display: flex;
flex-direction: column;
cursor: pointer;
height: 45px;
`
const Player = styled.span`
color: var(--red)
`
const Sign = styled.span`
color: var(--lightest-red)
`
export const HamburgerMenu = () => {
  return (
    <Hamburger>
      <Header>
        <List>
          <Icons><Teams /></Icons>
          <Text>Teams</Text>
        </List>
        <List>
          <Icons><Players /></Icons>
          <Text><Player>Players</Player></Text>
        </List>
      </Header>
      <Footern>
        <List>
          <Icons><SignOut /></Icons>
          <Text><Sign>Sign out</Sign></Text>
        </List>
      </Footern>
    </Hamburger>
  )
}