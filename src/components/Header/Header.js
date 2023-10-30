import React from 'react'
import './Header.css';
const Header = () => {
return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Easy Donate</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Donate now</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link">Our plan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">Success</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">Gallary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">Contact Us</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
)
}
export default Header