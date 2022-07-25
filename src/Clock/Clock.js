import Footer from "./Footer/Footer";
import "./Clock.css";
import { useState } from "react";
import Alarm from "./Alarm/Alarm";
import Countdown from "./Countdown/Countdown";
import WorldClock from "./WorldClock/WorldClock";
import Stopwatch from "./Stopwatch/Stopwatch";

function Clock(){
    const [selectedOption , changeSelectedOption] = useState(2);
    return (<>
        <div className="clockContainer">
            <div className="displayArea">
                {selectedOption === 0 && (<Alarm />)}
                {selectedOption === 1 && (<Countdown />)}
                {selectedOption === 2 && (<Stopwatch />)}
                {selectedOption === 3 && (<WorldClock />)}
            </div>
            <Footer />
        </div>

    </>);
}

export default Clock;