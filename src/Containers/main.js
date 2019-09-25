import React from "react";
import AsideComponent from "../Components/aside"
export default class MainComponent extends React.Component{
constructor()
{
    super()
}

render(){
    return(
        <>
        <AsideComponent/>
        <div id="mainContent">
            <h1>Coming soon!</h1>
        </div>
        </>
    )
}
}