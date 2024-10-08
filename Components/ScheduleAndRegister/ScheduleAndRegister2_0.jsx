import "./ScheduleAndRegister2_0.css";
import ScheduleImage from "../../src/assets/CyberTEA-Schedule of the Workshop.jpg"; // Correct path for your schedule image
import Registration2 from "../Registration/Registration2";
import Registration1 from "../Registration/Registration1";
import { useLocation } from "react-router-dom";

const NewsSchedule2 = () => {
 
  return (
   <div id="NewsSchedule">
    <div id="schedule" className="NewsSchedule-container">
      <div className="NewsSchedule-header">
        <h1>Schedule</h1>
      </div>
      <div className="NewsSchedule-body">
        {/* <img src={ScheduleImage} alt="Workshop Schedule" /> */}
       Coming Soon
      </div>
    </div>
    <div id="news">
     <Registration2 />
    </div>
    </div>
  );
};

export default NewsSchedule2;
