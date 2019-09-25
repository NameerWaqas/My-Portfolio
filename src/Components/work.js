import React from "react";
import byNameer from "../Images/bynameer.jpg" 
import webApp from "../Images/webApp.jpg" 
export default class Work extends React.Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1 style={{fontSize:"250%"}}>MY WORK</h1>
                <a href="https://webappbynameer.firebaseapp.com"><span id="imageFrame"><img id="workImg"  src={webApp}/></span></a>
                <a href="https://bynameer.firebaseapp.com"><span id="imageFrame"><img id="workImg" src={byNameer}/></span></a>
                {/* <span><a ><img /></a></span>
                <span><a><img /></a></span> */}

            </div>
        )
    }
}