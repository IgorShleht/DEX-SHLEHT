import styled from 'styled-components'

const Label = styled.label`
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: var(--grey);
`
const Checkbox = styled.input`
// position: absolute;
// -webkit-appearance: none;
`
const Check = styled.span`
// display: inline-block;
// width: 16px;
// height: 16px;
// border: 1px solid var(--grey);
// box-sizing: border-box;
// border-radius: 2px;
// vertical-align: middle;
// :hover {
//   border: 1px solid var(--red);
// }
// :active {
//   background-color: var(--red);
// }
`

export const Checkboxs = () => {
  return (
    <Label><Checkbox type='checkbox' /><Check></Check></Label>

  )
}