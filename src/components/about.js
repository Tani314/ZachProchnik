import React from "react";
import {AboutWrapper,Image, GrpOne,GrpTwo, AbtContent,Content,Para} from "../styles/about"
import bio from "../assets/bio.jpg"
const About = props => {
    return (
        <AboutWrapper>
            <h2>ABOUT</h2>

            <AbtContent>
              <Content>
                <Image src={bio}/>
                <GrpOne>
                <h3>Biography</h3>
                <Para>
                  Hi, I am Zach Prochnik.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Para>
                </GrpOne>
                </Content>
          
            <Content>
                <GrpTwo>
                <h3>My Work</h3>
                <Para>
                    Working as a paramedic during this tragedy left me with a lot to process and without any structure to turn to.
                    So I started creating paintings with what materials I found lying around, many soon to be trash.
                    Newspapers, magazines, broken door knobs, pallets of wood, plastic bags, or whatever other odds and ends I found interesting.
                    I soon discovered that breathing life into these forgotten objects gave me comfort.
                    I was helpless as I watched Covid leave so many gasping for air in a world that was either indifferent or incompetent.
                    My work to help others through EMS fell victim to faulty systems and I found myself as a frontline witness to this disaster.
                    I don’t know what role art can play in fixing our broken society but I know creating it helped me feel less broken.
                    I welcome all to come, heal, and celebrate life together with me.
              </Para>
              </GrpTwo>
              <Image src={bio}/>
            </Content>

            </AbtContent>
            <div className="footer">
          Zach Prochnik &#169;{new Date().getFullYear()}
        </div>

        </AboutWrapper>
    );
};
export default About;