import Header from "../../components/header"
import Footer from "../../components/footer"
import ApartList from "../../components/apartList"
function Home(){
    return (
        <>
            <Header />
            <main>
                <div className="title">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <div className="apartList">
                    <ApartList />
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Home