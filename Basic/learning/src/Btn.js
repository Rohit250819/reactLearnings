// function Btn(){
//     const whenClicked = () => console.log("clicked");
//     return(
//         <div className="text-center">
//             <button onClick={whenClicked} className="btn btn-primary my-4">
//             Click Me
//         </button>
//         </div>
        
//     );
// }

// export default Btn;


function Btn(){
    const whenClicked = () => console.log("mouse over");
    return(
        <div className="text-center">
            <button onMouseOver={whenClicked} className="btn btn-primary my-4">
            Click Me
        </button>
        </div>
        
    );
}

export default Btn;