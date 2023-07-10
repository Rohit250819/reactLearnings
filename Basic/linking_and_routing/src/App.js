import Homepage from './Homepage';
import AboutMe from './AboutMe';
import { Routes, Route , Link } from 'react-router-dom';

function App(){
  return(
<div className='App'>
  <nav className='nav'>
    <Link to="/" className='nav-item mr-3 ml -3'>
      Homepage
    </Link>
    <Link to="/about-me" className='nav-item mr-3'>
      About Me
    </Link>
  </nav>

  <Routes>
    <Route path='/'  element={<Homepage/>} />
    <Route path='/about-me' element={<AboutMe/>} />
  </Routes>
  
</div>
  );
}

export default App;