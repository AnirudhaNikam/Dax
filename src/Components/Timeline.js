import "./Timeline.css"
import ui1 from "./ui1.jpg"
function Timeline(){
    return (
        <>
         <h1 style={{color:"#f15a24",textSize:"1px",paddingTop:"5%"}}>--Time Line--</h1>
         <div className="timeline-container">
      <div className="timeline-header">
        <h1>Where innovation will inspire you</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis.
        </p>
      </div>

      <div className="timeline-content">
        <div className="timeline-image">
          <img 
            src={`${ui1}`}alt="Modern Architecture" />
        </div>

        <div className="timeline-details">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-info">
              <p className="timeline-date">Spring 2020</p>
              <p className="timeline-event">Building permit</p>
            </div>
          </div>

          <div className="timeline-item active">
            <div className="timeline-dot active-dot"></div>
            <div className="timeline-info">
              <p className="timeline-date">Summer 2021</p>
              <p className="timeline-event">Beginning of construction</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-info">
              <p className="timeline-date">December 2022</p>
              <p className="timeline-event">Completion of construction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );



         </>
    );
}
export default Timeline;