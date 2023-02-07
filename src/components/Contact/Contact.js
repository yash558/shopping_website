import React from 'react'
import './Contact.css';
import location from '../../assets/location.png';
import phone from '../../assets/phone.png';
import mail from '../../assets/email.png';

const Contact = () => {
    return (
        <div className="contact">
            <span className="big-circle"></span>
            <div className="form">
                <div className="contact-info">
                    <h3 className='title'>Let's get in touch</h3>
                    <p className='text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae, natus autem dolor eius quas voluptates magnam minima quidem quibusdam?
                    </p>
                    <div className="info">
                        <div className="information">
                            <img src={location} alt="" className='icon' />
                            <p>Mumbai, India</p>
                        </div>
                        <div className="information">
                            <img src={mail} alt="" className='icon' />
                            <p>abc@gmail.com</p>
                        </div>
                        <div className="information">
                            <img src={phone} alt="" className='icon' />
                            <p>+91-7828389289</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <p>Connect with us:</p>
                        <div className="social-icons">
                            <a href="/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="contact_form">
                    <span className="circle one"></span>
                    <span className="circle two"></span>

                    <form action="">
                        <h3 className="title">Contact Us</h3>
                        <div className='input-container'>
                            <input type='' name='' className='input' placeholder='UserName' />

                           

                        </div>
                        <div className='input-container '>
                            <input type='' name='' className='input' placeholder='email' />
                            
                        </div>
                        <div className='input-container '>
                            <input type='' name='' className='input' placeholder="Phone No" />
                           
                        </div>
                        <div className='input-container '>
                            <input type='' name='' className='input' placeholder="Type of User" />
                           
                        </div>
                        <div className='input-container textarea'>
                            <textarea name="message" id="" cols="30" rows="10" className='input' placeholder='message...'></textarea>
                            

                        </div>
                        <input type="submit" value="send" className="btn" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact