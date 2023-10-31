import React from 'react'
import './Header.css';
const Header = () => {
return (

      <nav class="navbar navbar-light navbar-expand-lg bg-light fixed-top p-2 shadow">
      {/*Nav Section*/}
     <div class="container-fluid px-5">
        <a class="navbar-brand fw-bold" href="#">Easy Donate</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
             <li class="nav-item">
              <a class="nav-link fw-bold" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#donate">Donate Now</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link fw-bold" href="#plan">Our Plan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold " href="#success">Success</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold " href="#gallary">Gallary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold " href="#about">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold " href="#faq">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold " href="#contact">Contact Us</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
)
}
export default Header