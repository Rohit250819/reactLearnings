import './App.css';

const Button = ({type,children, ...buttonProps}) => {
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return(
      <button className={`Button ${className}` }  {...buttonProps}>
        {children}
      </button>
    );
}

const LoginButton = ({type, children, ...buttonProps}) => {
  return(
    <Button
    type = "secondary"
      {...buttonProps}
      onClick = {() => {
        alert("Logging in");
      }}
    >
      {children}
    </Button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="Header">
      <h2>Rose Restaurant🏵️</h2>
      </header>
      <Button type="primary" onClick={() => alert("Signing up!")} >
        Sign up
      </Button>
      <LoginButton  type="secodary" onClick={() => alert("Signing up!")}  >
        Login
      </LoginButton>
    </div>
  );
}

export default App;
