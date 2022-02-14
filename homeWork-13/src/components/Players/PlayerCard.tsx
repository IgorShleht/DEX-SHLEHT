import styled from 'styled-components'
import PlayerPhotoS from '../../assets/images/playerPhoto.png'

const PlayerCardForm = styled.div`
width: 364px;
height: 380px;
box-sizing: border-box;
`
const Logo = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
width: 364px;
height: 280px;
background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
border-radius: 4px 4px 0px 0px;
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
const PlayerName = styled.span`
color: white;
font-size: 18px;
`
const PlayerTeam = styled.span`
color: var(--light-grey);
font-size: 14px;
margin-top: 12px;
`
const NumberPlayer = styled.span`
color: var(--light-red);
`

export const PlayerCard = () => {
  return (
    <PlayerCardForm>
      <Logo>
        <img src={PlayerPhotoS} />
      </Logo>
      <TeamInfo>
        <Information>
          <PlayerName>Jaylen Adams <NumberPlayer>#10</NumberPlayer></PlayerName>
          <PlayerTeam>Portland trail blazers</PlayerTeam>
        </Information>
      </TeamInfo>
    </PlayerCardForm>

  )
}