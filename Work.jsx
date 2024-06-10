import React from "react";
import work from "../dataa/work.json";
import WorkCard from "./WorkCard";
import styles from "./Work.module.css";
export const Work = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>PROJECTS</h2>
            <h2>I'm still learning and exploirng different things. I would like to learn more in this journey. Have had a little coding expirence in college by taking part in hackathons. Was the lead of my team, learnt team work too. </h2>
            <div className={styles.projects}>
                {work.map((project, id) => {
                       return (
                        <WorkCard key={id} project={project} />
                       );
                    })
                }
            </div>
        </section>
    )
};

//export default Work;