// import {
//   useRef, useState
// } from "react";

// function App() {
//   const inputRef = useRef(null);
//   const resultRef = useRef(null);
//   const [result, setResult] = useState(0);

//   const plus = (e) => {
//     e.preventDefault();
//     setResult((result) => result + Number(inputRef.current.value));
//     // setResult((result) => result + inputRef.current.value);//just adds as string
//   };

//   const minus = (e) => {
//     e.preventDefault();
//     setResult((result) => result - Number(inputRef.current.value));
//   };

//   const times = (e) => {
//     e.preventDefault();
//     setResult((result) => result * Number(inputRef.current.value));
//   };

//   const divide = (e) => {
//     e.preventDefault();
//     setResult((result) => result / Number(inputRef.current.value));
//   };
//   const resetInput = (e) => {
//     e.preventDefault();
//     inputRef.current.value = 0;
//   };

//   const resetResult = (e) => {
//     e.preventDefault();
//     setResult((prevVal) => prevVal * 0);
//   };

//   const btnStyle = {
//     backgroundColor : "#F85C3B"
//   }
//   return (
//     <div className="App text-center">
//     <div>
//       <h1>Calculator</h1>
//     </div>
//     <form >
//     <p ref = {resultRef}>{result}</p>
//     <input 
//     pattern="[0-9]"
//     ref = {inputRef}
//     type="number"
//     placeholder="Enter number"
//     />
//     <br />
//     <div className="my-4">
//     <button onClick={plus} className="btn btn-primary my-3 ml-2" >add</button>
//     <button onClick={minus} className="btn btn-primary my-3 ml-2" >subtract</button>
//     <button onClick={times} className="btn btn-primary my-3 ml-2" >times</button>
//     <button onClick={divide} className="btn btn-primary my-3 ml-2" >divide</button>
//     <button onClick={resetInput} className="btn  my-3 ml-2" style={btnStyle}>reset Input</button>
//     <button onClick={resetResult} className="btn  my-3 ml-2" style={btnStyle}>reset Result</button>
//     </div>
//     </form>
//     </div>
//   );
// }

// export default App;

console.log("hello world");
