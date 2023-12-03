import "./contactpage.css";
import neo from "../../assets/images/neo.jpg";
import businesscard from "../../assets/images/business-card1.png";

// Components
import Sidebar from "../../components/common/sidebar/Sidebar";
import Header from "../../components/common/header/Header";

function Contact () {  
    return (
    <>
        <div className="contact-page">
            <div>
                <Header />
            </div>

            {/*<!-- The front is based on of my SVG link hover effect https://codepen.io/Zeaklous/pen/kyGqm --> */}
            <div className="container">
                <div className="card">
                    
                    <div className="front side">
                        <h1 className="logo">Peter Perez</h1>
                    </div>
                    
                    <div className="back side">
                        <h3 className="name">Peter Perez</h3>
                        <div>IT Project Manager</div>      
                        <div className="info">
                            <p><span className="property">Email: </span>peteperez.lv@gmail.com</p>
                            <p><span className="property">Linkedin: </span>https://www.linkedin.com/in/pete-perez-6941324/</p>
                            <p><span className="property">Phone: </span>(702) 468-8204</p>
                            <p><span className="property">Website: </span>nubeWebDev.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

{/*<main className="contactArea">
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
            <div className="contactSidebar">
                 <Sidebar/>
            </div>
           
        </main>
    */}
    </>
    )
}  
export default Contact;  