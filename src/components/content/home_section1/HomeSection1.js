import "./homesection1.css";
import { useNavigate } from "react-router-dom";
import image1 from "../../../assets/images/image1.jpg";


export default function HomeSection1() {
  const navigate = useNavigate();

  const navigateToBlog = () => {
    navigate('/blog');
  }

    return (
      <section className="homeSection1">
        <div className="homesection1-two-column">
          <div className="homesection1-left-column">
            <div className="homesection1-left-column-content">
              <h1 className="homesection1-left-column-tagline">You should have a personal website!</h1>
              <p className="homesection1-left-column-text">
                A personal website tells the world who you are and gives you an edge in our competitive marketplace.
              </p>

              <button className="homesection1-left-column-call-to-action-button" onClick={navigateToBlog}>
                Website Development Steps &raquo;
              </button>

            </div>
          </div>
          <div className="homesection1-right-column">
            <div className="homesection1-right-column-image">
              <img className = "image1" src={image1} alt="personal website" />
            </div>
          </div>
        </div>
      </section>
    )
  }