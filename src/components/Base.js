import React from "react";
import classes from "./Base.module.css"
import Headers from "./Headers";
import Footer from "./footer";

const BaseTemplate=(props)=>{
    return (
        <div className={classes.body}>
            <Headers></Headers>
            <Footer></Footer>
       </div>
    )
}


export default BaseTemplate;