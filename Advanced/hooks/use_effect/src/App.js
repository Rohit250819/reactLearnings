import './App.css';
import React from "react";


function App() {

  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () =>{
    setToggle(!toggle);
  }

  React.useEffect(() =>{
    document.title = toggle ? "Indian Kitchen" : "useEffect"
  },[toggle])

  return (
    <div className="App">
      <h1>Using useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle message
      </button>
      {toggle && <h2>Welcome to Indian Kitchen</h2>}
    </div>
  );
}

export default App;
