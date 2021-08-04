import React from "react";
import {ExhibitionWrapper,Image} from "../styles/exhibition"
import exhib from "../assets/exhib.png"
const Exhibition= props => {
    return(
        <ExhibitionWrapper> 
          <h2>Solo Exhibition</h2>  
          <Image src={exhib}/>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="footer">
          Zach Prochnik &#169;{new Date().getFullYear()}
        </div>
        </ExhibitionWrapper>
            
    )
};
export default Exhibition;