import React from 'react'
import "./Contact.css"
import { FaTelegramPlane } from "react-icons/fa"
import { ImMobile } from "react-icons/im"
import { AiFillFacebook } from "react-icons/ai"
import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"

function Contact() {
    return (
        <div name="contact">
            <div className="container5">

                <div className="left">

                    <div className="text5">
                        <h1>Contact Me</h1>
                    </div>

                    <div className="logo5">
                        <div className="logo11">
                            <a href="#"><FaTelegramPlane /></a>
                            <p>@islombek.com</p>
                        </div>
                        <div className="logo22">
                            <a href="#"><ImMobile /></a>
                            <p>+998 93 407 58 52</p>
                        </div>
                    </div>

                    <div className="icon">
                        <a href=""><AiFillFacebook /></a>
                        <a href=""><FaTwitterSquare /></a>
                        <a href=""><FaInstagramSquare /></a>
                        <a href=""><AiFillLinkedin /></a>


                    </div>

                    <div className="box10">
                        <button>Dowland CV</button>
                    </div>

                </div>

                <div className="right">

                    <div className="input">
                        <div className="input1">
                            <input type="text" placeholder='Your Name'/>
                        </div>

                        <div className="input2">
                        <input type="text" placeholder='Your Email'/>
                        </div>

                        <div className="input3">
                            <input type="text" placeholder='Your Message'/>
                        </div>
                    </div>

                    <div className="submit">
                        <button>Submit</button>
                    </div>
                </div>

<div className="footer">
    <p>Copyright @ Islombek. Made wtih by Easy Turtorials</p>
</div>



























            </div>
        </div>
    )
}

export default Contact