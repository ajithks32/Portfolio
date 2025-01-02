import React from 'react';
import './About.css'; // Import the CSS file
import Footer from './Footer';

const About = () => {
    return (
        <>
            <section className="about-container" id="about">
                <div className="container">
                    {/* Title */}
                    <h2 className="about-title orangecolour">ABOUT ME</h2>

                    {/* About Content */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-12 col-md-6">
                            <div className="about-card1">
                                <p className="about-text">
                                    Hello! I’m Ajith, a passionate Front-End Developer with a knack for creating beautiful, functional, and user-friendly websites and applications. I specialize in using modern JavaScript frameworks like React to build responsive, performant, and accessible web applications. I enjoy solving problems and continuously learning new technologies to stay ahead in this dynamic field. Let’s build something amazing together!
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="about-card2">
                                <p className="about-text">
                                    I believe that good design and user experience are key to making a lasting impact. I strive to create websites that are not only visually appealing but also intuitive and easy to navigate. When I'm not coding, you can find me exploring new technologies, reading books, or enjoying some music. Feel free to check out my projects and get in touch if you have any questions!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Personal Details */}
                    <div className="personal-details ">
                        <h3 className="details-title">PERSONAL DETAILS</h3>
                        <ul className="details-list">
                            <li><strong>Name:</strong> Ajith</li>
                            <li><strong>Gender:</strong> Male</li>
                            <li><strong>Date of Birth:</strong> 31.12.2002</li>
                            <li><strong>Degree:</strong> B.Tech IT</li>
                            <li><strong>Address:</strong> Pudukkottai</li>
                            <li><strong>Year of Passing:</strong> 2024</li>
                        </ul>
                    </div>
                </div>
            </section>
           
           <div>
            <Footer/>
           </div>
        </>
    );
};

export default About;
