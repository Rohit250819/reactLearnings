// import "./App.css";
// import {useState} from "react";
// function App() {

//   const[name, setName] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setName("");
//     console.log("form submitted!");
//   }

//   return (
//     <div className="App my-3">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <div className="Field">
//             <label htmlFor="name">
//             Name:
//             </label>
//               <input id="name" type="text" placeholder= "name" name="name" value={name} onChange={e => setName(e.target.value)}/>
//           </div>
//           <button disabled={!name} className="btn btn-primary my-3">Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default App;

//feedback form
import { useState } from "react";
import "./App.css";

export default function App() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(Number(score) <= 5 && comment.length <= 10){
      alert("could you please tell us how we can improve our food?")
      return
    }

    console.log("form submitted!");
    setComment("");
    setScore("10");

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <label htmlFor="">Score: {score}⭐</label>
            <br/>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="">Comment:</label>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
