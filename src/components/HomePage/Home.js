import React from 'react'
import "./Home.css"
import Img1 from "../../images/1.jpg"
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
function Home() {
    return (
        <div>
            <div className="container1">
                <div className="navbar">

                    <div className="logo">
                        <p>Islom<span>bek</span></p>
                    </div>

                    <div className="page">
                        <Link to='home' smooth duration={400}>
                            <div className="text_text">
                                Home
                                <div className='forhover'></div>

                            </div>
                        </Link>
                        <Link to='about' smooth duration={400}>
                            <div className="text_text">
                                About
                                <div className='forhover'></div>
                            </div>

                        </Link>
                        <Link to='services' smooth duration={400}>
                            <div className="text_text">
                                Services
                                <div className='forhover'></div>

                            </div>
                        </Link>
                        {/* <Link to='portfolio' smooth duration={400}>
                            Portfolio
                            <div className='forhover'></div>
                        </Link> */}
                        <Link to='contact' smooth duration={400}>
                            <div className="text_text">
                                Contact
                                <div className='forhover'></div>

                            </div>
                        </Link>

                    </div>
                </div>
                <div className="img1" name="home">
                    <img src={Img1} alt="" />
                </div>

                <div className="text1">
                    <h1>Hello My Name Is <span>Islombek</span></h1>
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Im Web Devoloper',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Java Script',
        1000,
        'React JS',
        1000,
        'Node JS',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2rem', display: 'inline-block' }}
      repeat={Infinity}
    />
                </div>

                <div className="main">

                </div>


            </div>
































        </div>
    )
}

export default Home