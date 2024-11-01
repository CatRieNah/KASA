import { useState } from "react";

function DropDown({ title, content }) {
    const [openIndex, setOpenIndex] = useState(null); // null par défaut pour qu'aucun élément ne soit ouvert

    const toggleOpen = (index) => {
        setOpenIndex(previousIndex => (previousIndex === index ? null : index));
    };

    return (
        <div className="dropDown-container">
            <div className="dropDown">
                <div className="dropDown-title">
                    <h2>{title}</h2>
                    <button onClick={() => toggleOpen(0)}> {/* On n'a qu'un seul dropdown ici */}
                        <i className={`fa-solid fa-chevron-down ${openIndex === 0 ? 'rotated' : ''}`}></i>
                    </button>
                </div>
                {/* Afficher le contenu en tant que liste si c'est un tableau */}
                {openIndex === 0 && (
                    <div>
                        {Array.isArray(content) ? ( // Vérifie si le contenu est un tableau
                            <ul>
                                {content.map((item, index) => (
                                    <li key={index}>{item}</li> // Affiche chaque équipement dans une liste
                                ))}
                            </ul>
                        ) : (
                            <p>{content}</p> // Si ce n'est pas un tableau, l'affiche comme un texte
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default DropDown;