import './App.css';
import React from 'react';

const withMousePosition = (WrappedComponent) => {
    return (props) =>{

      const [mousePosition, setMousePosition] = React.useState({
        x: 0,
        y: 0
      })

      React.useEffect(() =>{

        const handleMousePositionChange = (e) => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }

        window.addEventListener("mousemove", handleMousePositionChange);

        return () => {
          window.removeEventListener("mousemove", handleMousePositionChange);
        }
      },[])

      return(
        <WrappedComponent {...props} mousePosition={mousePosition} />
      )
    }
}

const PanelMouseLogger = ({mousePosition}) => {
    if(!mousePosition) return null;

    return(
      <div className='mousePanel'>
        <p>Mouse Position:</p>
        <div className='row' >
          <span>x: {mousePosition.x}</span>
          <span>y: {mousePosition.y}</span>
        </div>
      </div>
    )
}

const PointMouseLogger = ({mousePosition}) => {
  if(!mousePosition) return null;

  return(
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {
  return (
    <div className="App">
      <header className="h2">
        RK softwares💻
      </header>
      <PanelMouseTracker  />
      <PointMouseTracker/>
    </div>
  );
}

export default App;
