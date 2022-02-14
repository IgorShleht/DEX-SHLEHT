import { TeamsCard } from "./components/Teams/TeamsCard";
import { PlayerCardMain } from "./components/Players/PlayerCardMain";
import { TeamsCardMain } from './components/Teams/TeamsCardMain'
import { PlayerCard } from './components/Players/PlayerCard'
import { Inputs } from './components/UIelements/Inputs'
import { Buttons } from './components/UIelements/Buttons'
import { HamburgerMenu } from './components/UIelements/HamburgerMenu'
import { Checkboxs } from './components/UIelements/Checkboxs'
import { Notifications } from './components/UIelements/Notifications'
import { Links } from './components/UIelements/Links'
import { Navigation } from './components/UIelements/Navigation'
import { SignIn } from './components/Sign/SignIn';
import { SignUp } from './components/Sign/SignUp';


export const App = () => {
  return (
    <div className="App">
      <TeamsCardMain />
      <PlayerCardMain />
      <TeamsCard />
      <PlayerCard />
      <SignIn />
      <SignUp />
      <Inputs />
      <Buttons />
      <Checkboxs />
      <Notifications />
      <Links />
      <Navigation />
      <HamburgerMenu />
    </div>
  )
}

export default App;
