import React from "react";

function Header(props){
    // console.log(props);
    // return <h1>How are you? {props.name} ,looking good in {props.color}</h1>

    return <h1>{props.message}</h1>
}

export default Header;