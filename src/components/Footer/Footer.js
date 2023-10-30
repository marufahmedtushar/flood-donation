import React from 'react'
import './Footer.css';
const Footer = () => {
return (
<div>

    <footer>
        <div className="container p-5">

            <div className="footer-element">
                <div className="title">
                    <h3 className="fw-bold text-center">Humanity Lies in Helping Others</h3>

                </div>
                <div className="owner-details">
                <p className="pb-2">We should help others, if they are in need</p>
                    <p>Follow Us</p>
                </div>
                <div className="social d-flex justify-content-center">
                    <ul className="sociallist">
                        <li>
                            <a href="">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        
                        <li>
                            <a href="">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pborder mt-2">
                <div className="cborder"></div>
            </div>
        </div>
        
    </footer>


    <div className=" text-center text-light" style={{backgroundColor: '#000000',padding: '10px'}}>
            <p>Easy Donate © 2023</p>
        </div>
  
</div>
)
}
export default Footer