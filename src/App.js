import Box from '@mui/material/Box';
import NavDrawer from './Components/NavDrawer';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <NavDrawer>
      <Box className="App" sx={{p: '5rem'}}>
        <LandingPage/>
      </Box>
    </NavDrawer>
  );
}

export default App;
