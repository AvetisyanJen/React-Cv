import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import './Header.css';
import git from './git.png'


const Header = () => {
    const [color, setColor] = useState(false)
    const changecolor = () => {
        if (window.scrollY >= 80) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", changecolor)
    return (<>
        <nav className={color ? "header headerchange" : "header"}>

            <div className="logo"><h1>Avetisyan Jhenya</h1></div>
            <ul className="navul">
                <li className="navLi">
                    <Link smooth to="#home" className="hashlink">Home</Link>

                </li>
                <li className="navLi">
                    <Link smooth to="#about">About</Link>
                </li>
                <li>
                    <a href="https://github.com/AvetisyanJen">
                       <img className="gitimg" src={git}/>
                    </a>
                </li>
            </ul>
        </nav>
    </>)
}
export default Header