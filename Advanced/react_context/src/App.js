import React from "react";
import './App.css';
import { UserProvider , useUser} from "./UserContext";

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>
      Hello <span className='Username'>{user.name}</span>
      {/* Hello <span className='Username'></span> */}
    </p>
  )
}

const Header = () => {
  return(
    <header>
      <h2>Blogs</h2>
      <LoggedInUser/>
    </header>
  )
}


const Page = () => {
  const {user} = useUser();
  return(
    <div>
      <h2>What is ranting?</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident consectetur est nemo dolor, modi quae ratione. Suscipit     sapiente sequi itaque dignissimos placeat, corrupti consequuntur provident maxime voluptatem velit veniam eius odit autem?
      </p>
      <p>Written by {user.name} </p>
      {/* <p>Written by </p> */}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Page/>
    </div>
  );
}

function Root() {
  return(
    <UserProvider>
      <App/>
    </UserProvider>
  );
}

export default Root;
// export default App;
