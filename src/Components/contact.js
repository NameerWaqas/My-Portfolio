import React from "react";
import fbLogo from "../Images/fbLogo.png"
import gmailLogo from "../Images/gmailLogo.png"
import linkedInLogo from "../Images/linkedInLogo.png"



export default class Contact extends React.Component{
    render(){
        return(
            <div id="contactComponentDiv">
            <h1>CONTACT ME</h1>
            <a class="logoBtns"><img src={fbLogo}/></a><br/>
            <a class="logoBtns" href="mailto:nameerwaqas321@gmail.com"><img src={gmailLogo}/></a><br/>
            <a class="logoBtns" href="https://www.linkedin.com/in/nameerwaqas/"><img src={linkedInLogo}/></a>
            </div>
        )
    }
}
