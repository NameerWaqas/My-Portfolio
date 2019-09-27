import React from "react";
import byNameer from "../Images/bynameer.jpg" 
import webApp from "../Images/webApp.jpg"; 
import work3 from "../Images/work3.png"; 
import work4 from "../Images/work4.png"; 
import work5 from "../Images/work5.png"; 
import work6 from "../Images/work6.png"; 
import work7 from "../Images/work7.png"; 
import work8 from "../Images/work8.png"; 
export default class Work extends React.Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1 style={{fontSize:"250%"}}>MY WORK</h1>
                <a href="https://webappbynameer.firebaseapp.com" target="_blank"><span id="imageFrame"><img id="workImg"  src={webApp}/></span></a>
                <a href="https://bynameer.firebaseapp.com" target="_blank"><span id="imageFrame"><img id="workImg" src={byNameer}/></span></a>
                <a ><span id="imageFrame"><img id="workImg" src={work3}/></span></a>
                <a ><span id="imageFrame"><img id="workImg" src={work4}/></span></a>               
                <a href="https://drive.google.com/open?id=1-Wvww5FWja5USzb8nz4EZUqu1y40fpgF" target="_blank"><span id="imageFrame"><img id="workImg" src={work5}/></span></a>               
                <a href="https://drive.google.com/open?id=1-gk-O9H4OuSXYFfYE2AiubWJc62zU3zK" target="_blank"><span id="imageFrame"><img id="workImg" src={work6}/></span></a>               
                <a href="https://drive.google.com/open?id=12Y3o3m5muf1EMdZaj47nqyhAbqJHf4SK" target="_blank"><span id="imageFrame"><img id="workImg" src={work7}/></span></a>               
                <a href="https://drive.google.com/open?id=1-LXGrTmlbjf17Ior7ZL1oJ-AWNqUO-Ce" target="_blank"><span id="imageFrame"><img id="workImg" src={work8}/></span></a>               
                           
                {/* <a ><span id="imageFrame"><img id="workImg" src={work4}/></span></a>                */}

            </div>
        )
    }
}