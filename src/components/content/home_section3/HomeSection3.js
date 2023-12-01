import "./homesection3.css";


export default function HomeSection3() {
    return (
      <section className="homesection3">
        <div className="homesection3-two-column">
          <h1 className="homesection3-title">Website Development Steps</h1>
          <div className="homesection3-four-column">
              <div className="homesection3-column1">
                <h3 className="homesection3-column1-header">Plan</h3>
                <div className="homesection3-column1-text">
                  <li>Define the website's purpose.</li>
                  <li>Draft the content for the website.</li>
                  <li>Design the website layout and colors.</li>
                  <li>Create your implementation plan.</li>
                </div>
              </div>

              <div className="homesection3-column2">
                <h3 className="homesection3-column2-header">Do</h3>
                <p className="homesection3-column2-text">
                  <li>Learn basic website design principles.</li>
                  <li>Use nubeWebDev step by step instructions.</li>
                  <li>Develop the website with your content.</li>
                  <li>Keep your content up-to-date and fresh.</li>
                </p>
              </div>

              <div className="homesection3-column3">
                <h3 className="homesection3-column3-header">Check</h3>
                <p className="homesection3-column3-text">
                  <li>Analyze the website development results.</li>
                  <li>Look for improvement opportunities and issues.</li>
                  <li>Repeat the Do and Check steps.</li>
                </p>
              </div>

              <div className="homesection3-column4">
                <h3 className="homesection3-column4-header">Act</h3>
                <p className="homesection3-column4-text">
                  <li>Deloy the website to a hosting platform.</li>
                  <li>Return to the Planning step to the next version.</li>
                </p>
              </div>
            </div>
            <a className='what-is-pdca' href="https://blog.hubspot.com/marketing/pdca-cycle-model">What is PDCA?</a>
          </div>
{/*}
          <div className="homesection3-column2">
            <div className="homesection3-column2-image">
                <img className="image3" src={image3} alt="plan do check act" />
            </div>
          </div>
         
          <div className="homesection3-column3">
            <div className="homesection3-column3-two-cells">
              <div className="homesection3-column3-cell1">
                <h3>Do</h3>
                <p className="homesection3-cell-text">
                  Develop opensource website applications and step-by-step directions on cloning the applications for personal use.
                </p>
              </div>

              <div className="homesection3-column3-cell2">
                <h3>Study</h3>
                <ul className="homesection3-cell-text">
                  <li>hello</li>
                </ul>
              </div>
              
            </div>
          </div>
    */}

      </section>
    )
  }