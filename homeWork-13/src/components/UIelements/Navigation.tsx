import styled from 'styled-components'
import { ReactComponent as Test3Logo } from '../../assets/icons/test3.svg'
import { ReactComponent as ProfileLogo } from '../../assets/icons/profile.svg'


const Header = styled.header`
display: flex;
justify-content: space-between;
aligh-items: center;
box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
background: var(--white);
box-sizing: border-box;
font-family: 'Avenir';
font-weight: 500;
font-size: 14px;
color: var(--dark-grey);
width: 1440px;
height: 80px;
padding: 16px 51px;
`
const Profile = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 110px;
color: var(--dark-grey);
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
`
export const Navigation = () => {
  return (
    <Header>
      <Test3Logo />
      <Profile>John Smith<ProfileLogo /></Profile>
    </Header>
  )
}