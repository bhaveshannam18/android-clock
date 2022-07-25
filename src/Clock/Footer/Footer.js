import Button from "../Shared/Component/Button/Button";
import "./Footer.css";
function Footer(){
    return (<>
        <div className="footerContainer">
            <Button text={"Alarm"} className={"alarm btn btnSelected"}/>
            <Button text={"Stop Watch"} className={"stopWatch btn"}/>
            <Button text={"Countdown"} className={"countDown btn"}/>
            <Button text={"Clock"} className={"clock btn"}/>            
        </div>
    </>);
}

export default Footer;