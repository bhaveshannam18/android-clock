import Footer from "./Footer/Footer";
import "./Clock.css";
import { useState } from "react";
import Alarm from "./Alarm/Alarm";
import Countdown from "./Countdown/Countdown";
import WorldClock from "./WorldClock/WorldClock";
import Stopwatch from "./Stopwatch/Stopwatch";

function Clock(){
    const [selectedOption , changeSelectedOption] = useState(0);
    return (<>
        <div className="clockContainer">
            <div className="displayArea">
                {selectedOption === 0 && (<Alarm />)}
                {selectedOption === 1 && (<Stopwatch />)}
                {selectedOption === 2 && (<Countdown />)}
                {selectedOption === 3 && (<WorldClock />)}
            </div>
            <Footer 
            selectedTab = {selectedOption}
            selectScreen = {(screen)=>{changeSelectedOption(screen)}}
            />
        </div>

    </>);
}

export default Clock;