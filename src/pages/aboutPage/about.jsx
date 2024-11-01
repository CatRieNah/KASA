import Header from "../../components/header"
import Banner from "../../components/banner"
import Footer from "../../components/footer"
import bannerAbout from "../../assets/bannerApropos.png"
import DropDown from "../../components/dropDown"
import data from "../../datas/dropDownData.json"
function About(){
    return (
        <>
            <Header />
            <main>
                <Banner imageUrl={bannerAbout} />
                <div>
            {data.map((item, index) => (
                <DropDown key={index} title={item.title} content={item.content} />
            ))}
        </div>            </main>
            <Footer />
        </>
    )
}
export default About