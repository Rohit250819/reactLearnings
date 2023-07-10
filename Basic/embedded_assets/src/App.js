// import bridge from "./assets/bridge.jpeg";

function App() {

  const randomImgURL = "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg"

  return (
    <div className="text-center my-4">
      <h1>Some heart loving scenes to eyes</h1>
      {/* works with importing  image */}
      {/* <img src={bridge} alt="An image of bride in a natural place" className="my-4"/><br/> */}
      {/* works without importing  image */}
      <img 
      src={require("./assets/bridge.jpeg")} 
      height={200}
      alt="image of beauty" 
      className="my-4"
      />

      <br/>
      <img 
      src={randomImgURL} 
      height={200}
      alt="image of sexiest laptop" 
      className="my-4"
      />

    </div>
  );
}

export default App;

