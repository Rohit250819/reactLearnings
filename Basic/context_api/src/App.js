//for meals

// import MealsProvider from './providers/MealsProvider';
// import MealsList from './components/MealsList';
// import Counter from './components/Counter';

// function App() {
//   return (
//     <div className="App">
//       <MealsProvider>
//       <MealsList/>
//       <Counter/>
//       </MealsProvider>
//     </div>
//   );
// }

// export default App;

//for useReducer hook

import { useReducer } from 'react';

const reducer = (state, action) => {
  if(action.type === 'ride') return {money: state.money + 10};
  if(action.type === 'fuel') return {money: state.money - 30};
  return new Error();
}

function App(){
  const initialState = {money:100};
  const[state, dispatch] =useReducer(reducer, initialState);
  
  return(
    <div>
      <h1>
        Wallet: {state.money}
      </h1>
      <div>
        <button onClick={() => dispatch({type: 'ride'})}>A new customer!</button>
        <button onClick={() => dispatch({type: 'fuel'})}> Refill tank!</button>
      </div>

    </div>
  )
}

export default App;
