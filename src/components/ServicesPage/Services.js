import React from 'react'
import "./Services.css"
import Img21 from "../../images/21.webp"
import Img22 from "../../images/22.webp"
import Img23 from "../../images/23.jpg"
import Img24 from "../../images/24.jpg"
import Img25 from "../../images/25.jpg"
import Img26 from "../../images/26.png"
import Img27 from "../../images/27.png"
import Img28 from "../../images/28.png"
import Img29 from "../../images/29.png"
import Img30 from "../../images/30.png"
import Img31 from "../../images/31.png"


function Services() {
    return (
        <div name="services">

            <div className="container3">




                <div className="box">
                    <div className="box1">
                        {/* <img src={Img23} alt="" /> */}
                        <img src={Img21} alt="" />
                        <img src={Img22} alt="" />
                        <div className="flex">
                            <img src={Img24} alt="" />
                        </div>
                    </div>

                    <div className="box2">
                        <img src={Img25} alt="" />
                        <div className="flex">
                            <img src={Img26} alt="" />
                        </div>
                    </div>

                    <div className="box3">
                        <img src={Img27} alt="" />
                        <img src={Img29} alt="" />
                        <div className="flex">
                            <img src={Img28} alt="" />
                        </div>

                        {/* <img src={Img30} alt="" /> */}
                        {/* <img src={Img31} alt="" /> */}
                    </div>

                </div>

                <div className="text3">
                    <h1>My Services</h1>
                </div>

                <div className="text4">
                    <p>My Main Working <span>Web Programming</span> Languages</p>
                </div>


















            </div>






        </div>
    )
}




export default Services