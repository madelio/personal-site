import { useRef } from 'react';
import NavDrawer from './Components/NavDrawer';
import LandingPage from './Components/LandingPage';
import AboutMe from './Components/PageContent/AboutMe';
import Credentials from './Components/PageContent/Credentials';
import WorkWithMe from './Components/PageContent/WorkWithMe';

function App() {
  const landingPageRef = useRef();
  const aboutMeRef = useRef();
  const credentialsRef = useRef();
  const workWithMeRef = useRef();
  const navRef = useRef();

  const listItems = [
    { title: "Landing Page", ref: landingPageRef },
    { title: "About Me", ref: aboutMeRef },
    { title: "Credentials", ref: credentialsRef },
    { title: "Work with Me", ref: workWithMeRef },
  ]
const scrollTo = (ref) => {
    window.scrollTo({
        top: ref?.current?.offsetTop - navRef?.current?.clientHeight,
        behavior: 'smooth' 
    })
}

  return (
    <>
      <NavDrawer
        navRef={navRef}
        listItems={listItems}
        onItemClick={(selectedRef) => scrollTo(selectedRef)}
      />
      <LandingPage 
        titleRef={landingPageRef}
        onButtonClick={() => scrollTo(workWithMeRef)}
      />
      <AboutMe titleRef={aboutMeRef}/>
      <Credentials titleRef={credentialsRef}/>
      <WorkWithMe titleRef={workWithMeRef}/>
    </>
  );
}

export default App;
