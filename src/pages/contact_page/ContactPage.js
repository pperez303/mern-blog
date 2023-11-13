import "./contactpage.css";
import neo from "../../assets/images/neo.jpg"

// Components
import Sidebar from "../../components/common/sidebar/Sidebar";
import Header from "../../components/common/header/Header";

function Contact () {  
    return (
    <>
        <Header />
        <main className="contactArea">
            <div className="contactInfo">
                <header className="contactHeader">
                    <img className = "contactImg" src={neo} alt="" />
                    <div className="contactName">
                        <h3>Peter Perez</h3>
                        <p>Technical Project Manager</p>
                    </div>
                </header>
                <p className="contactPhone">
                    phone: 1-702-468-8204
                </p>
                <p className="contactEmail">
                    email: peteperez.lv@gmail.com
                </p>
            </div>

            <Sidebar className="sidebar" />
        </main>
    </>
    )
}  
export default Contact;  