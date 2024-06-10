import React , {useState} from "react";
import  styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>

            <a className={styles.title} href="/"> My Portfolio</a>

            <div className={styles.menu}>
                <img className={styles.menuBtn} src={ menuOpen 
                ? getImageUrl("menu.png")
                : getImageUrl("menu.png")
                } alt="menu-button"
                onClick={() => setMenuOpen (!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={()=> setMenuOpen(false)}>
                    <li><a href= "#projects">PROJECTS</a></li>
                    <li><a href= "#contact">CONTACT</a></li>
                    <li><a href= "#experience">EXPRIENCE</a></li>
                </ul>
            </div>

        </nav>
    );
}

