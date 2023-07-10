import "./App.css";
import { useReducer } from "react";

function App() {
  const reducer = (state, action) => {
    if (action.type === "buy_ingredients") return { money: state.money - 10 };
    if (action.type === "sell_a_meal") return { money: state.money + 20 };
    if(action.type === "celebrity_visit") return {money: state.money + 3000};
    return state;
  };

  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  // const[state, dispatch] = useReducer(initialState,reducer);

  return (
    <div className="App">
      <h1>Wallet : {state.money} </h1>
      <div>
        <button onClick={() => dispatch({ type: "buy_ingredients" })}>
          Shopping for veggies!
        </button>
        <button  onClick={() => dispatch({ type: "sell_a_meal" })}>
          Serving a meal to the customer
        </button>
        <button onClick={() => dispatch({type: "celebrity_visit"})} >
          Celebrity visited
        </button>
      </div>
    </div>
  );
}

export default App;
