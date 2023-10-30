import React from 'react'
import './Header.css';
const Header = () => {
return (
    <nav class="navbar navbar-expand-lg fixed-top bg-light p-2 shadow">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">Easy Donate</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#donate">Donate now</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#plan">Our plan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#success">Success</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#gallary">Gallary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#about">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#faq">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#contact">Contact Us</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
)
}
export default Header