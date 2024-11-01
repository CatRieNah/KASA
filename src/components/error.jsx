import errorImage from "../assets/404.png"
import { Link } from "react-router-dom"
function Error(){
    return (
        <div className="error">
            <img src={errorImage} alt=" erreur 404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}
export default Error 