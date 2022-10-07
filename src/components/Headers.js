import React from "react";
import classes from "./Headers.module.css"
import Navs from "./Navs";

const Headers=(props)=>{
    return (
        <React.Fragment>
        <header className={classes.header}>
         <Navs title="SignIn"></Navs>
        </header>  
        </React.Fragment>
    )
}


export default Headers;