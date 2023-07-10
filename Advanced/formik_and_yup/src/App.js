import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import ContactMeSection from './ContactMeSection';

function App() {
  return (
    <ChakraProvider>
    {/* <AlertProvider> */}
      <main>
        {/* <Header/> */}
        {/* <LandingSection/> */}
        {/* <ProjectsSection/> */}
        <ContactMeSection/>
        {/* <Footer/> */}
        {/* <Alert/> */}
      </main>
    {/* </AlertProvider> */}
    </ChakraProvider>
  );
}

export default App;
