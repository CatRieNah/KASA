import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/aboutPage">A propos</Link>
            </nav>
        </header>
    )
}
export default Header