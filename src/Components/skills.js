import React from "react";
import { Progress } from 'reactstrap';
import { Parallax} from 'react-parallax';
import aboutMeBackground from "../Images/aboutMeBackground.jpg";

export default class Skills extends React.Component {
    render() {
        return (
            <>
             <Parallax
            // blur={2}
            bgImage={aboutMeBackground}
            bgImageAlt="the cat"
            // strength={200}
        >
                <section style={{color:"white"}}>
                    <h1>HERE ARE SOME OF MY SKILLS</h1>
                </section>
                <div style={{fontWeight:"bolder",fontSize:"120%"}}>
                    <Progress   color="info" value={80}>HTML5</Progress><br/>
                    <Progress   color="info" value={75}>CSS3</Progress><br/>
                    <Progress   color="info" value={70}>BootStrap</Progress><br/>
                    <Progress   color="info" value={85}>Materialize CSS</Progress><br/>  
                    <Progress   color="info" value={85}>ES5</Progress><br/>  
                    <Progress   color="info" value={75}>ES6</Progress><br/>  
                    <Progress   color="info" value={50}>PWA</Progress><br/> 
                    <Progress   color="info" value={75}>React.JS</Progress><br/> 
                    <Progress   color="info" value={80}>Matrial UI</Progress><br/> 
                    <Progress   color="info" value={80}>ReactStrap</Progress><br/> 
                    <Progress   color="info" value={50}>Redux</Progress><br/> 
                    <Progress   color="info" value={75}>Firebase DB</Progress><br/> 
                    <Progress   color="info" value={85}>Firebase Auth</Progress><br/> 
                    <Progress   color="info" value={70}>Firebase Storage</Progress><br/> 
                    <Progress   color="info" value={65}>Desktop App Dev</Progress><br/> 
                </div></Parallax>
            </>
        )
    }
}