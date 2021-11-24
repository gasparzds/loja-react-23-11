import './style.css';
import imgbrand1 from "../../assets/images/brand1.png"
import imgbrand2 from "../../assets/images/brand2.png"
import imgbrand3 from "../../assets/images/brand3.png"
import imgbrand4 from "../../assets/images/brand4.png"
import imgbrand5 from "../../assets/images/brand5.png"



export function Brand(){
    return (
        <div className="brands">
        <ul>
            <li><img src={imgbrand1} /></li>
            <li><img src={imgbrand2} /></li>
            <li><img src={imgbrand3} /></li>
            <li><img src={imgbrand4} /></li>
            <li><img src={imgbrand5} /></li>
        </ul>
    </div>     
    )
}