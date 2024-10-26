import data from "../datas/logements.json"
function ApartList(){
    return(
        <ul className="apart-container">
            {data.map((apart)=>(
                <li key = {apart.id} className="apart">
                    <img src={apart.cover} alt="apart.title" />
                    <h2>{apart.title}</h2>
                </li>
            ))}
        </ul>
    )
}
export default ApartList