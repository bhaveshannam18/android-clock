import { useState } from "react";
import "./WorldClock.css";

function WorldClock(){
    const [currentTime,setCurrentTime] = useState("...loading");

    let addZeroToTime = (digit)=>{
        if(digit < 10){
            digit = "0" + digit;
        }
        return digit;
    }

    setInterval(()=>{
        var timeObj = new Date();
        let hours = addZeroToTime((timeObj.getHours())%12);
        let mins = addZeroToTime(timeObj.getMinutes());
        let secs = addZeroToTime(timeObj.getSeconds());
        let finalTime = hours + " : " + mins + " : " + secs;
        setCurrentTime(finalTime);
    },1000);

    return (<>
        <div className="worldClockContainer">
            <h1>Current Time</h1>
            <h1>{currentTime}</h1>
        </div>
    </>);
}

export default WorldClock;