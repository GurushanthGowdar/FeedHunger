import React,{useState,useEffect} from "react";
import classes from "./Base.module.css"
import Headers from "./Headers";
import Footer from "./footer";
import ImageData from "./ImageData";
import ContentQuote from "./ContentQuote";

const BaseTemplate=(props)=>{
   const [ImageSlider,setImageSlider]=useState(ImageData[1])
   useEffect(() => {
    const interval = setInterval(() => {
      let i=Math.floor(Math.random()*4);
      console.log(i)  
      setImageSlider(ImageData[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, [ImageSlider]);

    return (
        <div className={classes.container}>
            <Headers></Headers>
            <div className={classes.imageDiv}>
            <img  className={classes.image} src={ImageSlider.Image} alt="Testing"></img>
            </div>
            <ContentQuote ></ContentQuote>
            <section className={classes.StativImageDiv}>
            <img className={classes.staticImage} src={ImageData[1].Image} alt="static image"></img>
            </section>
            <Footer></Footer>
       </div>
    )
}


export default BaseTemplate;