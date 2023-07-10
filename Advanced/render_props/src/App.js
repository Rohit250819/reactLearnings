import React from 'react';

const DataFetcher = ({render, url}) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if(url.includes("desserts")){
      setData(["kheer", "rabdi", "halwa","mithai"]);
    }else{
      setData(["water", "shikanji", "juice"]);
    }
  },[])

  return render(data);
}

const DessertCount = () => {
  return(
    <DataFetcher
      url ="https://shahi/desserts"
      render = {(data) => <h3>{data.length} Desserts</h3>}
    />
  )
}

const DrinksCount = () => {
  return(
    <DataFetcher
      url = "https://shahi/drinks"
      render = {(data) => <h3>{data.length} Drinks</h3>}
    />
  )
}

function App() {
  return (
    <div className="text-center">
      <header className="h1">
        Shahi restaurant 👑
      </header>
      <DessertCount/>
      <DrinksCount/>
    </div>
  );
}

export default App;
