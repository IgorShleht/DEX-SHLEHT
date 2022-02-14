import styled from 'styled-components'
import { ReactComponent as GroupPic } from '../../assets/images/groupSignIn.svg'
import { ReactComponent as CloseEye } from '../../assets/icons/close_eye.svg'
import { Link } from '../UIelements/Links'
import { Login, Input } from '../UIelements/Inputs'
import { BtnSignIn } from '../UIelements/Buttons'

const SignInMain = styled.div`
display: flex;
width: 100wh;
height: 100vh;
`
const Data = styled.div`
background: #FFFFFF;
display: flex;
width: 42%;
height: 100%;
`
const Sign = styled.div`
width: 366px;
box-sizing: border-box;
margin: auto;
`
const Header = styled.div`
height: 50px;
font-family: Avenir;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 49px;
color: var(--blue);
margin-bottom: 32px;
`
const Authorization = styled.div`

`
const Footer = styled.div`
text-align: center;
margin-top: 24px;
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: var(--grey);
`
const Pictures = styled.div`
display: flex;
background: var(--light-blue);
width: 58%;
height: 100%;
`
const Pic = styled.div`
margin: auto;
`
const Password = styled.div`
display: flex;
position: absolutle;
`
const Logo = styled.span`
position: relative;
top: 12px;
right: 27px;
width: 0px;
`
export const SignIn = () => {
  return (
    <SignInMain>
      <Data>
        <Sign>
          <Header>Sign In</Header>
          <Authorization>
            <Login>Login<Input type='input' /></Login>
            <Login>Password<Password><Input type='password' /><Logo><CloseEye /></Logo></Password></Login>
            <BtnSignIn>Sign In</BtnSignIn>
          </Authorization>
          <Footer>Not a member yet? <Link>Sign up</Link></Footer>
        </Sign>
      </Data>
      <Pictures><Pic><GroupPic /></Pic></Pictures>
    </SignInMain>
  )
}