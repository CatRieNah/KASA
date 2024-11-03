import { useParams } from 'react-router-dom';
import data from "../../datas/logements.json";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Carrousel from "../../components/carroussel";
import PropertyInfo from '../../components/propertyInfo';
import DropDown from '../../components/dropDown';

function Apartement({pictures,title,location,tags,host,}) {
    const { id } = useParams(); // Récupérer l'id de l'URL
    const item = data.find(element => element.id === id);
    console.log(item); // Vérifiez le contenu de l'item
    console.log(item.equipements); // Vérifiez le contenu des équipements
    
    return (
        <>
            <Header />
            <main>
                {item &&(
                    <>
                        <Carrousel pictures = {item.pictures} />
                        <PropertyInfo 
                            title = {item.title}
                            location = {item.location}
                            tags = {item.tags}
                            host = {item.host}
                        />
                        <DropDown 
                            title="Description" 
                            content={item.description} 
                        />
                        <DropDown 
                            title="Équipements" 
                            content={item.equipments} // Passez le tableau directement
                        />
                    </>
                )}
            </main>
            <Footer />
        </>
    );
}

export default Apartement;