import styled from 'styled-components'

export const Link = styled.a`
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 19px;
color: var(--red);
text-decoration: underline;
cursor: pointer;
`
export const Links = () => {
  return (
    <Link>Link</Link>
  )
}