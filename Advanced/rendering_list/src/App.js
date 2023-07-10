// const data = [
//   {
//     id : "1",
//     title: "Chole-Bhature",
//     description: "Best lunch for the office people",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiIZVDu71CzydkST5lCtmOLZK9gKg4TYC_sc1NVXVn&s",
//     price: "₹50"
//   },
//   {
//     id: "2",
//     title: "Jalebi",
//     description: "go to sweet",
//     image: "https://i.pinimg.com/originals/62/dd/4a/62dd4a613e9b00de1c117bc104dc1061.jpg",
//     price:"₹40"
//   },
//   {
//     id: "3",
//     title: "Rajma-Chawal",
//     description: "Satifying home food",
//     image: "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg",
//     price: "₹70"
//   },
//   {
//     id: "4",
//     title: "Mango-shake",
//     description: "Refershing",
//     image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-milkshake-recipe.jpg",
//     price: "₹40"
//   },
// ];

// export default function App() {
//   const listItems = data.map(item => {
//   const itemText = `${item.title} - ${item.price}`;
//   return <li>{itemText}</li>
// })
//   return(
//     <div>
//       <ul>
//         {listItems}
//       </ul>
//     </div>
//   );
// }

//todos List

import { useState } from "react";

const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function App() {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "23:30",
    },
    {
      id: "todo2",
      createdAt: "20:45",
    },
  ]);

  const reverseOrder = () => {
    //making an copy of original array and then reversing it
    setTodos([...todos].reverse());
  };

  return (
    <div className="text-center position-absolute top-50 start-50 translate-middle">
      <button 
      className="btn btn-primary btn-sm my-3"
      onClick={reverseOrder}
      >Reverse</button>
      <table className="">
        <tbody>
          {todos.map((todo, index) => (
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
