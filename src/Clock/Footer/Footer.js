import Button from "../Shared/Component/Button/Button";
import "./Footer.css";
function Footer(props){
    return (<>
        <div className="footerContainer">
            <Button 
            text={"Alarm"} 
            className={props.selectedTab === 0 ? "alarm btn btnSelected":"alarm btn"}
            handleClick={()=>{props.selectScreen(0)}}
            />
            <Button 
            text={"Stop Watch"} 
            className={props.selectedTab === 1 ? "stopWatch btn btnSelected":"stopWatch btn"}
            handleClick={()=>{props.selectScreen(1)}}
            />
            <Button 
            text={"Countdown"} 
            className={props.selectedTab === 2 ? "countDown btn btnSelected":"countDown btn"}
            handleClick={()=>{props.selectScreen(2)}}
            />
            <Button 
            text={"Clock"} 
            className={props.selectedTab === 3 ? "clock btn btnSelected":"clock btn"}
            handleClick={()=>{props.selectScreen(3)}}
            />            
        </div>
    </>);
}

export default Footer;