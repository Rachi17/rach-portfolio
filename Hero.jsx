import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <secion className={styles.container}>
    
        <div className={styles.content}>
            <h1 className={styles.name}>Hello! I AM RACHEL SOARES</h1>
            <p className={styles.discription}> It is a hebrew origin name meaning LAMB. I'm a student at Vidylankar Polytechnic, studing Computer Engineering. I have been learning JavaScrip and Python. Backend interests me more but I'm good at frontend too :) When free I like playing Basketball.  </p>
            
            
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero.png")}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    

    
        </secion> 
    
    )
};