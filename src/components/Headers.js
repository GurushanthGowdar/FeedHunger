import React from "react";
import classes from "./Headers.module.css"
import Navs from "./Navs";

const Headers=(props)=>{
    return (
        <div>
        <header className={classes.header}>
         <span className={classes.qoute}>There are people in the world so hungry, that God cannot appear</span>   
         <Navs title="SignIn"></Navs>
        </header>  
        </div>
    )
}


export default Headers;