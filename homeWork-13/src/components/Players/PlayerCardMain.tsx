import styled from 'styled-components'
import { ReactComponent as CreateIcon } from '../../assets/icons/create.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'
import PlayerPic from '../../assets/images/playerMain.png'

const PlayerCardMainForm = styled.div`
width: 1140px;
height: 594px;
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
height: 525px;
box-sizing: border-box;
border-radius: 0px 0px 10px 10px;
background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
`
const Pictures = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
width: 588px;
`
const Information = styled.div`
width: 552px;
`
const PlayerName = styled.div`
margin-top: 65px;
font-family: Avenir;
font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 49px;
color: var(--white);
`
const PlayerInfo = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
`
const PlayerInfoBlock = styled.div`
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
const NumberPlayer = styled.span`
color: var(--light-red);
`
export const PlayerCardMain = () => {
    return (
        <PlayerCardMainForm>
            <Header>
                <Wrap>Players <Path>/</Path> Greg Whittington</Wrap>
                <Button>
                    <CreateIcon />
                    <DeleteIcon />
                </Button>
            </Header>
            <Body>
                <Pictures><img src={PlayerPic} /></Pictures>
                <Information>
                    <PlayerName>Greg Whittington <NumberPlayer>#22</NumberPlayer></PlayerName>
                    <PlayerInfo>
                        <PlayerInfoBlock>
                            <Title>Position</Title>
                            <Text>Forward</Text>
                        </PlayerInfoBlock>
                        <PlayerInfoBlock>
                            <Title>Team</Title>
                            <Text>Denver Nuggets</Text>
                        </PlayerInfoBlock>
                        <PlayerInfoBlock>
                            <Title>Height</Title>
                            <Text>206 cm</Text>
                        </PlayerInfoBlock>
                        <PlayerInfoBlock>
                            <Title>Weight</Title>
                            <Text>95 kg</Text>
                        </PlayerInfoBlock>
                        <PlayerInfoBlock>
                            <Title>Age</Title>
                            <Text>27</Text>
                        </PlayerInfoBlock>
                    </PlayerInfo>
                </Information>
            </Body>
        </PlayerCardMainForm>
    )
}