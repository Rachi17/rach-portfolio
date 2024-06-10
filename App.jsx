
import styles from "./App.module.css";
import {Hero} from "./components/Navbar/Hero/Hero";
import {Navbar} from "./components/Navbar/Navbar";
import {Work} from "./components/Work/Work";
import {Contact} from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Work />
      <Contact />
      <Experience />
     </div>
  );
}

export default App;
