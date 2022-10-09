import React from "react";
import classes from "./card.module.css"


const Card=(props)=>{
    console.log(props.className)
    return (

        // <React.Fragment>
            <div className={props.className+" "+classes.card}>{props.children}</div> 
        // </React.Fragment>
    )
}

export default Card;