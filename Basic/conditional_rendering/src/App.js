function App() {

  const time = new Date();
  const day = time.toLocaleString("en-us", {weekday: "long"});
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;

  if(day.toLowerCase() === "monday")
    dayMessage = `Happy ${day}`;
  else if(day.toLowerCase() === "tuesday")
      dayMessage = `=${day}, long way to weekend`;
  else if(day.toLowerCase() === "wednesday")
      dayMessage = `${day}, half way ther`;
  else if(day.toLowerCase() === "thursday")
      dayMessage = `${day}, still time left`;
  else if(day.toLowerCase() === "friday")
      dayMessage = `${day}, start planning for weekend`;
  else dayMessage = `It's your weekend enjoy!`
  
  

  return (
    <div>
      <h1>
        {dayMessage}
      </h1>
      {morning ? <h3>Have you had breakfast yet?</h3> : ''}
    </div>
  );
}

export default App;
