// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
// import './App.css';
// import avatar from './avatar.png';
// import Btn from './Btn';
// import ModeToggler from './ModeToggler';
// import Child from './Child';
import React, { useState} from 'react';
import Header from './components/Header';




// function Logo(props){
//   const userPic = <img src = {avatar} />;
//   return userPic;
// }
function App() {

  // const date = new Date();
  const [word, setWord] = React.useState('Eat')

  function handleClick(){
    setWord('Drink');
  }

  return (
    <div className='text-center'>
      {/* <h1>Hello World</h1>
      <Logo/> */}
      {/* <Btn/> */}
      {/* <ModeToggler/> */}
      {/* <Child message={date.toLocaleTimeString()} /> */}
      <Header message={word + " at Taj Hotel"} />
      <button onClick={handleClick} className='btn btn-primary my-2'>Change state</button>
    </div>
  );
}

export default App;
