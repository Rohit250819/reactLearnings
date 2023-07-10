// import './App.css';
// import { useState } from "react";

// function App() {

//   const [restaurantName, setRestaurantName] = useState("Nawabo ka Khana");
//   //this can be also used
//   // function updateRestaurantName(){
//   //   setRestaurantName("Punjab da Dhaba")
//   // }

//   return (
//     <div className="App my-4">
//       <h1>{restaurantName}</h1>
//       <button 
//       className='btn border border-3 my-2'
//       onClick={() => setRestaurantName("Desh ka Khana")} >
//         Other restaurant
//       </button>
//     </div>
//   );
// }

// export default App;

//Goals app
import React from "react";
import {useState} from "react";

function GoalForm(props){
  const [formData, setFormData] = useState({goal: "", by: ""});

  function changeHandler(e){
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function submitHandler(e){
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal: "", by: ""});
  }

  return(
    <div>
      <h1>My career Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
        <input type="text" name="by" placeholder="By.." value={formData.by} onChange={changeHandler} />
        <button>Submit Goal</button>
      </form>
    </div>
  )
}

function ListOfGoals(props){
  return(
    <ul>
      {props.allGoals.map((g) =>(
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  )
}


export default function App(){
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) { updateAllGoals([...allGoals, goal]);}

  return(
    <div>
      <GoalForm  onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  )
}
