import './App.css';
import React from 'react';

const Alert = ({children}) => {
  return(
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

const DeleteButton = () =>{
  return <Button>Delete</Button>
}

const Button = ({children}) => {
    return <button className='btn btn-danger' >{children}</button>;
}

function App() {
  return (
    <div className="App">
      <header>
      <h2>
      Guru ka restaurant🍽️
      </h2>
        </header>
      <Alert>
        <h2>Delete Account</h2>
        <p>
          feeling bad after knowing you wanna leave<br/>
          Do you really wanna proceed?
        </p>
        <DeleteButton/>
      </Alert>
    </div>
  );
}

export default App;
