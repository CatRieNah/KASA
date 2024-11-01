import logo from "../assets/logo.png"
import { Link,useLocation } from "react-router-dom"
import { useState } from "react"

function Header(){
    const location = useLocation() // récupère l'URL actuelle
    const [activeLink, setActiveLink] = useState(location.pathname) //Etat pour le lien actif 
    const handleLinkClick = (path)=>{
        setActiveLink(path) //mettre à jour le lien actif
    }
    return(
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/" 
                    onClick={() => handleLinkClick("/")} 
                    style = {{textDecoration : activeLink === "/" ? "underline" : "none"}}
                >
                    Acceuil
                </Link>
                <Link to="/aboutPage"
                    onClick={() => handleLinkClick("/aboutPage")} 
                    style = {{textDecoration : activeLink === "/aboutPage" ? "underline" : "none"}}
                >
                    A propos
                </Link>
            </nav>
        </header>
    )
}
export default Header