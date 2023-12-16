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
        </section>
    )

  }