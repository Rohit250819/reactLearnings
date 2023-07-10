import React from 'react'
import ReactPlayer from "react-player";

function App(){

  const palyerContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
  }


  const vidUrl = "https://www.youtube.com/watch?v=xQQmVAyvHJk"

  return(
    <div className='text-center'>
      <h1 className='my-4'>
        Your React Player is here!
      </h1>
      <div style={palyerContainer}>
      <ReactPlayer
        url={vidUrl}
        playing={false}
        volume={0.3}
      />
      </div>
      
    </div>
  );
}

export default App;
