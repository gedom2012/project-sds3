import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DS-Sales</h1>
                    <p className="lead">Analisys the sales performance by different perspectives</p>
                    <hr />
                    <p>This application consist in the show the dashboard from data given by API constructed with Spring Boot.</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Access Dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home;