import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./WorkCard.module.css";

export const WorkCard = ({project}) => {
    return ( <div className={styles.container}>
    <h3 className={styles.title}>{project.title}</h3>
    <img src ={getImageUrl (project.imageSrc)} alt={project.title} className={styles.image}/>
    <p className={styles.description}>{project.description}</p>
    </div>
    ); 
}
export default WorkCard;