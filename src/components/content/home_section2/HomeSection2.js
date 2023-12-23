import "./homesection2.css";
import image2 from "../../../assets/images/image2.jpg";

export default function HomeSection2() {
    return (
      <section className="homesection2">
        <div className="homesection2-two-column">
            <div className="homesection2-left-column">
                {/*<h2 className="logo">nubeWebDev</h2>*/}
                
                <div className="homesection2-left-column-image">
                    <img className="image2" src={image2} alt="personal website" />
                </div>
            
            </div>
            <div className="homesection2-right-column">
                <div className="homesection2-right-column-content">

                    <h1 className="homesection2-right-column-vision">Vision</h1>
                    <p className="homesection2-right-column-vision-text">
                        Empower people to learn and create personal websites for free or low cost of entry.
                    </p>

                    <h1 className="homesection2-right-column-mission">Mission</h1>
                    <p className="homesection2-right-column-mission-text">
                        Develop opensource website applications and step-by-step customization instructions.
                    </p>
                </div>
            </div>
        </div>
      </section>
    )
  }