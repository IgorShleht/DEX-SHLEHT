import styled from 'styled-components'
import { ReactComponent as SearchLogo } from '../../assets/icons/search.svg'


export const Login = styled.div`
display: flex;
flex-direction: column;
width: 366px;
height: 92px;
color: var(--grey);
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
`
export const Input = styled.input`
width: 366px;
height: 40px;
box-sizing: border-box;
background: var(--lightest-grey1);
border-radius: 4px;
border: none;
outline: none;
:hover {
  background: var(--lightest-grey);
}
:focus {
  background: var(--lightest-grey1);
  box-shadow: 0px 0px 5px #d9d9d9;
}
:disabled {
  background: var(--lightest-grey1);
  color: var(--lightest-grey);
}
`
const InputError = styled.input`
width: 366px;
  height: 40px;
  background: #var(--lightest-grey1);
  border: 1px solid #ff768e;
  border-radius: 4px;
  outline: none;
`
const Search = styled.div`
position: relative;
`
const Logo = styled.span`
position: relative;
bottom: 0;
right: 25px;
top: 3px;
width: 16px;
height: 16px;
`
const InputSearch = styled.input`
width: 366px;
height: 40px;
background: var(--white);
color: var(--dark-grey);
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
border: 0.5px solid var(--lightest-grey);
box-sizing: border-box;
border-radius: 4px;
outline: none;
`
const Error = styled.div`
font-size: 12px;
color: var(--lightest-red);
`
export const Inputs = () => {
  return (
    <div>
      <Login>Login<Input type='input' /></Login><br />
      <Login>Login<InputError type='input' /><Error>Required</Error></Login><br />
      <Search><InputSearch type='input' placeholder="Search..." />
        <Logo>
          <SearchLogo />
        </Logo>
      </Search>

    </div>
  )
}