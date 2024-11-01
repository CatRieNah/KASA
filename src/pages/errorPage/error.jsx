import Header from "../../components/header"
import Footer from "../../components/footer"
import Error from "../../components/error"
function ErrorPage(){
    return (
        <>
            <Header />
            <main>
                <Error />
            </main>
            <Footer />
        </>
    )
}
export default ErrorPage