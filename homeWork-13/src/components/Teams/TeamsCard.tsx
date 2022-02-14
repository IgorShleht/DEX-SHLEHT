import styled from 'styled-components'
import { ReactComponent as TeamPic } from '../../assets/images/team.svg'

const TeamsCardForm = styled.div`
width: 364px;
height: 380px;
box-sizing: border-box;
`
const TeamLogo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 364px;
height: 280px;
background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
border-radius: 4px 4px 0px 0px;
`
const Logo = styled.div`
width: 150px;
height: 150px;
`
const TeamInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--dark-grey);
width: 364px;
height: 100px;
border-radius: 0px 0px 4px 4px;
`
const Information = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 172px;
height: 52px;
margin: 24px 96px;
`
const TeamName = styled.span`
color: var(--white);
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 25px;
`
const TeamFoundation = styled.span`
color: var(--light-grey);
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
margin-top: 8px;
`
export const TeamsCard = () => {
    return (
        <TeamsCardForm>
            <TeamLogo><Logo><TeamPic /></Logo></TeamLogo>
            <TeamInfo>
                <Information>
                    <TeamName>Portland trail blazers</TeamName>
                    <TeamFoundation>Year of foundation: 1970</TeamFoundation>
                </Information>
            </TeamInfo>
        </TeamsCardForm>
    )
}