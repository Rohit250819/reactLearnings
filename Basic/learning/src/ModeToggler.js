function ModeToggler(){
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode on</h1>
    const lightMode = <h1>Light Mode on</h1>

    function handleClick(){
        darkModeOn = !darkModeOn;
        if(darkModeOn === true)
            console.log("Dark Mode is on");
        else
            console.log("Light Mode is on");
    }

    return(
        <div className="text-center">
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick} className="btn btn-primary">
                Click Me
            </button>
        </div>
    )
}

export default ModeToggler