import NavDrawer from './Components/NavDrawer';
import LandingPage from './Components/LandingPage';
import AboutMe from './Components/PageContent/AboutMe';
import Credentials from './Components/PageContent/Credentials';

function App() {

  return (
    <NavDrawer>
      <LandingPage/>
      <AboutMe/>
      <Credentials/>
    </NavDrawer>
  );
}

export default App;
