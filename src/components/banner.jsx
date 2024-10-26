function Banner({ title, imageUrl }) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
            {/* Utilisation d'une évaluation conditionnelle pour afficher le titre */}
            {title ? <h1>{title}</h1> : null} 
            {/* Ou vous pouvez aussi utiliser la syntaxe suivante */}
            {/* title && <h1>{title}</h1> */}
        </div>
    );
}

export default Banner;