import React from "react";
import {WorkWrapper,Image} from "../styles/work"
import home from "../assets/home.png"

const Work = props => {
    return(
        <WorkWrapper>
           <h2>WORK</h2> 
         
           <Image src={home}/>
           <Image src={home}/>
           <Image src={home}/>
           <Image src={home}/>
           <div className="footer">
          Zach Prochnik &#169;{new Date().getFullYear()}
        </div>
        </WorkWrapper>
    )
};
export default Work;