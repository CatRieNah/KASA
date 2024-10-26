import Header from "../../components/header"
import Banner from "../../components/banner"
import Footer from "../../components/footer"
import bannerAbout from "../../assets/bannerApropos.png"
import DropDown from "../../components/dropDown"
function About(){
    return (
        <>
            <Header />
            <main>
                <Banner imageUrl={bannerAbout} />
                <DropDown />
            </main>
            <Footer />
        </>
    )
}
export default About