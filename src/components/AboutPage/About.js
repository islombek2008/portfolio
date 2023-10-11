import React from 'react'
import "./About.css"
import Img2 from "../../images/2.jpg"

function About() {
    return (
        <div name="about">

            <div className="container2">
                <div className="img2">
                    <img src={Img2} alt="" />
                </div>

                <div className="text2">
                    <h1>About Me</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab enim architecto fugiat quod porro consectetur nulla reiciendis. Quo, quia dolore illum eaque veritatis quaerat ut eligendi repellat aliquid enim maiores possimus iure dolores doloremque autem vero error officiis nobis aliquam rem soluta minus commodi ea sequi! Pariatur, aut repellat.</p>

                    <div className="text_1">
                        <p>Skillis
                            <div className="hover"></div>
                        </p>
                        <p>Exprinice
                            <div className="hover"></div>
                        </p>
                        <p>Education
                            <div className="hover"></div>
                        </p>
                    </div>

                    <div className="text_2">
                        <div className="p">
                            <p>ul / ux</p>
                            <span>Dessign Web / App interfaces</span>
                        </div>
                        <div className="p">
                            <p>Web Development</p>
                            <span>Web app development</span>
                        </div>
                        <div className="p">
                            <p>Web Development</p>
                            <span>Building Android / IOS apps</span>
                        </div>
                    </div>

                </div>





            </div>

































        </div>
    )
}

export default About