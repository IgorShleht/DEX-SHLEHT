import styled from 'styled-components'
import { ReactComponent as CreateIcon } from '../../assets/icons/create.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'
import TeamIcon from '../../assets/images/teamMain.png'

const TeamsCardMainForm = styled.div`
width: 1140px;
height: 473px;
box-sizing: border-box;
`
const Header = styled.header`
display: flex;
justify-content: space-between;
aligh-items: center;
padding: 24px 32px;
width: 1140px;
height: 69px;
box-sizing: border-box;
border-radius: 10px 10px 0px 0px;
border: 0.5px solid var(--light-grey);
background: var(--white);
color: var(--red);
`
const Wrap = styled.div`
display: flex;
align-items: center;
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
cursor: pointer;
`
const Path = styled.div`
color: var(--light-grey);
margin: 5px;
`
const Button = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 60px
`
const Body = styled.div`
display: flex;
width: 1140px;
height: 404px;
box-sizing: border-box;
border-radius: 0px 0px 10px 10px;
background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
`
const Pictures = styled.div`
display: flex;
width: 502px;
`
const TeamLogo = styled.div`
width: 210px;
height: 210px;
margin: auto;
`
const Information = styled.div`
width: 638px;
`
const TeamName = styled.div`
margin-top: 65px;
font-family: Avenir;
font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 49px;
color: var(--white);
`
const TeamInfo = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
`
const TeamInfoBlock = styled.div`
margin-top: 40px;
margin-bottom: 20px;
width: 296px;
`
const Title = styled.div`
font-family: Avenir;
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 33px;
color: var(--white);
margin-bottom: 8px;
`
const Text = styled.div`
font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 25px;
color: var(--white);
`
export const TeamsCardMain = () => {
    return (
        <TeamsCardMainForm>
            <Header>
                <Wrap>Teams <Path>/</Path> Denver Nuggets</Wrap>
                <Button>
                    <CreateIcon />
                    <DeleteIcon />
                </Button>
            </Header>
            <Body>
                <Pictures><TeamLogo><img src={TeamIcon} /></TeamLogo></Pictures>
                <Information>
                    <TeamName>Denver Nuggets</TeamName>
                    <TeamInfo>
                        <TeamInfoBlock>
                            <Title>Year of foundation</Title>
                            <Text>1976</Text>
                        </TeamInfoBlock>
                        <TeamInfoBlock>
                            <Title>Division</Title>
                            <Text>Northwestern</Text>
                        </TeamInfoBlock>
                        <TeamInfoBlock>
                            <Title>Conference</Title>
                            <Text>Western</Text>
                        </TeamInfoBlock>
                    </TeamInfo>
                </Information>
            </Body>
        </TeamsCardMainForm>
    )
}