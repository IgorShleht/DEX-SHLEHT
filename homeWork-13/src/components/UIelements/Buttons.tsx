import styled from 'styled-components'
import { ReactComponent as PlusLogo } from '../../assets/icons/plus.svg'

export const BtnSignIn = styled.button`
width: 366px;
height: 40px;
background: var(--red);
border-radius: 4px;
border: none;
outline: none;
color: var(--white);
cursor: pointer;
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 24px;
:hover {
  background: var(--light-red);
}
:active {
  background: var(--dark-red);
}
:disabled {
  background: var(--lightest-grey1);
  color: var(--lightest-grey);
}
`
const BtnAdd = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 104px;
height: 40px;
background: var(--red);
border-radius: 4px;
border: none;
outline: none;
color: var(--white);
cursor: pointer;
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 24px;
:hover {
  background: var(--light-red);
}
:active {
  background: var(--dark-red);
}
:disabled {
  background: var(--lightest-grey1);
  color: var(--lightest-grey);
}
`
const Logo = styled.span`
margin-left: 8px;
width: 16px;
height: 16px;
color: var(--white);
`
const BtnCancel = styled.button`
width: 171px;
height: 40px;
background-color: var(--white);
padding: 8px 24px;
color: #9c9c9c;
border: 1px solid var(--light-grey);
box-sizing: border-box;
border-radius: 4px;
cursor: pointer;
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 24px;
:hover {
  background: var(--lightest-grey);
}
:active {
  background: var(--light-grey);
  color: var(--grey);
  border: 1px solid var(--grey);
}
:disabled {
  background: var(--lightest-grey1);
  color: var(--lightest-grey);
}
`

export const Buttons = () => {
  return (
    <div>
      <BtnSignIn>Sign In</BtnSignIn><br />
      <BtnSignIn disabled>Sign In</BtnSignIn><br />
      <BtnAdd>Add<Logo><PlusLogo /></Logo></BtnAdd><br />
      <BtnAdd disabled>Add<Logo><PlusLogo /></Logo></BtnAdd><br />
      <BtnCancel>Cancel</BtnCancel><br />
      <BtnCancel disabled>Cancel</BtnCancel><br />
    </div>
  )
}