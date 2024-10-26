import Header from "../../components/header"
import Banner from "../../components/banner"
import bannerImage from "../../assets/bannerHome.png"
import ApartList from "../../components/apartList"
import Footer from "../../components/footer"

function Home(){
    return (
        <>
            <Header />
            <main>
                <Banner title="Chez vous,partout et ailleurs " imageUrl={bannerImage} />
                <div className="apartList">
                    <ApartList />
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Home