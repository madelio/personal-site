import Box from '@mui/material/Box';
import NavDrawer from './Components/NavDrawer';
import LandingPage from './Components/LandingPage';
import AboutMe from './Components/PageContent/AboutMe';
import Credentials from './Components/PageContent/Credentials';

function App() {
  return (
    <NavDrawer>
      <Box className="App" sx={{mx: '5rem'}}>
        <LandingPage/>
        <Credentials/>
        <AboutMe/>
      </Box>
    </NavDrawer>
  );
}

export default App;
