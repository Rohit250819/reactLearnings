import React from "react";


function Sidebar(props){
    const sideStyle = {
        backgroud: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px"
    }
    return (
        <aside style ={sideStyle}
        className= "sidebar-component">
            <h1>{props.greet} from this Side</h1>
        </aside>
    
    )
}

export default Sidebar;