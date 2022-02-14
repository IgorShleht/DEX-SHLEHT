import styled from 'styled-components'

const Notification = styled.div`
width: 470px;
height: 40px;
padding: 8px 16px;
background: var(--light-red);
color: var(--white);
box-sizing: border-box;
border-radius: 4px;
text-align: center;
vertical-align: middle;
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
`
export const Notifications = () => {
    return (
        <Notification>User with the specified username / password was not found.</Notification>
    )
}