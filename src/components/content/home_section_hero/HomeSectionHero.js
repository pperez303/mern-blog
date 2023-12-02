import "./homesectionhero.css";
import { useNavigate } from "react-router-dom";

export default function HomeSectionHero() {

    const navigate = useNavigate();

    const navigateToBlog = () => {
        navigate('/blog');
    }
    return (
      <section className="home-hero">
         <div className="home-hero-content">
    
            <h1 className="home-hero-title">
                Create a personal website!
            </h1>
            
            <h2 className="home-hero-subtitle">
                Showcase your expriences, creativity, and talents.
            </h2>
            
            <button className="home-hero-button" onClick={navigateToBlog}>
                Website Development Steps &raquo;
            </button>
        
        </div>
        {/*<div className="homesectionhero-two-column">
            <div className="homesectionhero-right-column">
                <div className="homesectionhero-right-column-image">
                <img className = "image1" src={image1} alt="personal website" />
                </div>
            </div>
    
            <div className="homesectionhero-left-column">
                <div className="homesectionhero-left-column-content">
                <h1 className="homesectionhero-left-column-tagline">You should have a personal website!</h1>
                <p className="homesectionhero-left-column-text">
                    A personal website tell the world who you are.  
                    At <b>newWebDev</b>, we will show people how to create websites to showcase their expriences, creativity, and talents.
                </p>

                <button className="homesectionhero-left-column-call-to-action-button">
                    <Link className="link" to="/contact">
                    Website Development Steps
                    </Link>
                </button>
                </div>
            </div>
    
        </div>
    */}
      </section>
    )
  }