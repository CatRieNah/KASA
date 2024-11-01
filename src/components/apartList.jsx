import { Link } from "react-router-dom";
import data from "../datas/logements.json";

function ApartList() {
    return (
        <ul className="apart-container">
            {data.map((apart) => (
                <li key={apart.id} className="apart">
                    <Link to={`/logements/${apart.id}`}>
                        <img src={apart.cover} alt={apart.title} />
                        <h2>{apart.title}</h2>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ApartList;