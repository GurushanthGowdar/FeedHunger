import React from "react";
import classes from "./Navs.module.css"


const Navs=(props)=>{
return (
    <div className={classes.menu}><span className={classes.aboutUs}>About us</span>
    <span className={classes.signIn}>Sign In</span>
    <span className={classes.LogIn}>LogIN</span>
    <span className={classes.contacUs}>Contact us</span>
    <span className={classes.dumy}>Dumy_filed</span>
    </div>  
)
}


export default Navs;