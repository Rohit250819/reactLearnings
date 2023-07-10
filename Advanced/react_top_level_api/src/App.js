import * as React from 'react';
import './App.css';

const Row = ({children, spacing}) => {

  const childStyle =  {
    marginLeft: `${spacing}px`,
  };

  return(
    <div className='Row' >
      {React.Children.map(children, (child, index) =>{
        return React.cloneElement(child,{
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle: {}),
          },
        });
      })}
    </div>
  );
};

function LiveOrders() {
  return (
    <div className='App'>
      <Row spacing={32} >
        <p>Chole-kulche</p>
        <p>1</p>
        <p>₹50</p>
        <p>12:10 am</p>
        <p>Rohit Kumar</p>
      </Row>
    </div>
  );
}

export default LiveOrders;
