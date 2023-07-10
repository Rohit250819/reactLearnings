import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {
  const meals = useMealsListContext();

  return (
    <div className="text-center">
      <h1>Meals List using Context API</h1>
      {meals.map((meal, index) => (
        <div style={{ margin: "0 auto", width: "fit-content" }}>
        <p
          key={index}
          style={{ border: "2px solid grey", padding: "10px", width: "100px"}}
        >
          {meal}
        </p></div>
      ))}
    </div>
  );
};

export default MealsList;
