import React from 'react'
import './Home.css';
import '../../frontend/style.css';
const Home = () => {
return (
<div>
  <section class="section1" id="slider">
    <div class="container-fluid p-0">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/donation0.jpg" class="rounded-3 img-fluid  w-100" alt="..."/>
            
            <div class="carousel-caption d-md-block d-flex justify-content-center align-items-center px-5">
              <h1 class="text-center">Let’s Help Those Who Are More In Need</h1>
              <p class="text-center">Due to excessive rainfall, when rivers and canals overflow their banks and make a huge loss to crops and property, flood occurs and it is a great devil for us in Bangladesh.</p>
              <a href="" class="button btn text-light py-3 px-5">Get Started</a>
            </div>
          </div>
          
          <div class="carousel-item">
            <img src="images/donation11.jpg" class="rounded-3 img-fluid  w-100" alt="..."/>
            
            <div class="carousel-caption d-md-block d-flex justify-content-center align-items-center px-5">
              <h1 class="text-center">Let’s Help Those Who Are More In Need</h1>
              <p class="text-center">Due to excessive rainfall, when rivers and canals overflow their banks and make a huge loss to crops and property, flood occurs and it is a great devil for us in Bangladesh.</p>
              <a href="" class="button btn text-light py-3 px-5">Get Started</a>
            </div>
          </div>
          
          <div class="carousel-item">
            <img src="images/donation12.png" class="rounded-3 img-fluid  w-100" alt="..."/>
            
            <div class="carousel-caption d-md-block d-flex justify-content-center align-items-center px-5">
              <h1 class="text-center">Let’s Help Those Who Are More In Need</h1>
              <p class="text-center">Due to excessive rainfall, when rivers and canals overflow their banks and make a huge loss to crops and property, flood occurs and it is a great devil for us in Bangladesh.</p>
              <a href="" class="button btn text-light py-3 px-5">Get Started</a>
            </div>
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
  <section class="section2">
    <div className="container">
      <div className="donate">
        <h1 className="fw-bold text-center">Donate Today</h1>
      </div>
      <div class="donate-details">
        <p>Floods can destroy properties and cars but that is unavoidable. Additionally, losing many possessions to a flood adds financial strains to families.
        So if you want to  help  them donate  now.</p>
      </div>
      
      
      <div class="block">
        <div ><h4>100tk</h4></div>
        <div id="tk"><h4>200tk</h4></div>
        <div ><h4>500tk</h4></div>
        <div ><h4>1000tk</h4></div>
        <div ><h4>5000tk</h4></div>
      </div>
      <div class="form">
        <form>
          <div class="input">
            <input type="text"
            name="" placeholder="Other Amount (Taka)
            "/>
          </div>
          
        </form>
        <a class="button1" href="">Donte Now</a>
      </div>
    </div>
    
  </section>
  <section class="section3">
    <div className="container">
      <div class="plan-heading">
      <h1 className="text-center fw-bold">Our Donation Plan</h1>
    </div>
    <div class="plan-details">
      <p>We want to help them as fast as it is possible that's we are raising funds.<br/><span>
      So we could help them.</span></p>
    </div>

    <div className="plans row">
      <div className="col-md-4">
        <div id="food">
        <i class="fa-solid fa-bowl-food fa-3x text-light"></i>
        <h4>Food</h4>
        <p>We will provide food for those people very fast so the affected people could remain alive with their families.</p>
      </div>
      </div>
      <div className="col-md-4">
        <div id="shelter">
        <i class="fa-solid fa-house fa-3x text-light"></i>
        <h4>Shelter</h4>
        <p>After flood we will make shelter for those people for their safty.And we have quite good experiences on it.</p>
      </div>
      </div>
      <div className="col-md-4">
         <div id="education">
        <i class="fa-solid fa-school fa-3x text-light"></i>
        <h4>Education</h4>
        <p>We will provide education those child and build schools and colleges for them with this fund.</p>
      </div>
      </div>
    </div>
    <div className="plans row">
      <div className="col-md-4">
        <div id="shelter">
        <i class="fa-solid fa-hospital-user fa-3x text-light"></i>
        <h4>Medicine</h4>
        <p>In the time of flood we will provide medicine for those affected people very as fast as we can.</p>
      </div>
      </div>
      <div className="col-md-4">
        <div id="education">
       <i class="fa-solid fa-list fa-3x text-light"></i>
        <h4>Necessary Things</h4>
        <p>We will provide cloths to all necessary things to  those people. So that they could start a new life.</p>
      </div>
      </div>
      <div className="col-md-4">
         <div id="shelter">
       <i class="fa-solid fa-people-group fa-3x text-light"></i>
        <h4>Long Term Impact</h4>
        <p>Your monthly donation allows us to take a planned, long term approch for helping those affected people.</p>
      </div>
      </div>
    </div>
    </div>
  </section>
  <section class="done container-fluid">
    <div className="done-elements">
      <div class="done-heading">
        <h1 className="fw-bold text-center">What we have done</h1>
      </div>
      <div class="done-details">
        <p className="text-center">We have done so many beautiful things by your contribution. If you want to become a part of this, donate Today.</p>
      </div>
    </div>
    <img src="images/donation5.jpg" class="rounded-3 img-fluid  w-100" alt="..."/>
    
    <div class="done-accessories">
      
      
      <div class="boxes">
        <div class="total-raised">
          <h2><span>BDT</span> 190,982</h2>
          <p>Total Raised</p>
        </div>
        <div class="donors">
          <h2>153</h2>
          <p>Donors</p>
        </div>
        <div class="fundraisers">
          <h2>18</h2>
          <p>Fundraisers</p>
        </div>
        <div class="experiences">
          <h2>2 Years</h2>
          <p>Experiences</p>

        </div>
      </div>
      
    </div>
  </section>
  <section class="section4">
    <div class="need-heading">
      <h1>They need us
      to surive</h1>
    </div>
    <div class="need-divider">
      <div class="need-accessories">
        <div class="need">
          <img src="images/donation1.jpg"/>
        </div>
        <div class="need-details">
          <p>Your small support could help them a lot.<br/><span>
          Remember that people need support in the days, months, and even years following natural disasters.</span></p>
        </div>
      </div>
      <div class="donate1">
        <a class="button1" href="">Donate Now</a>
      </div>
    </div>
    <div class="need-divider">
      
      <div class="donate1">
        <a class="button1" href="">Donate Now</a>
      </div>
      <div class="need-accessories">
        <div class="need">
          <img src="images/donation2.jpg"/>
        </div>
        <div class="need-details">
          <p>Be a good listener and remember that sometimes its best to just listen and not offer your own opinions or<br/><span>
          solutions without being asked for them.</span></p>
        </div>
      </div>
    </div>
    
    
  </section>
  
  <section class="section5">
    <div class="update-heading">
      <h1>Get Our Updates</h1>
    </div>
    <div class="update-details">
      <p>You can contact us by mail,if you want to help those affected people<br/><span>with your ideas and other things.
      </span></p>
    </div>
    <div class="input1">
      <input type="text" name="" placeholder="  Email"/>
      <a href="">Subscribe</a>
    </div>
  </section>

    <section class="section6 pt-5">
    <div class="container d-flex justify-content-center align-items-center flex-column">
      <div class="qs-elements d-flex justify-content-center align-items-center flex-column text-center pb-4">
        <h1 class="fw-bold">Frequently Asked Questions</h1>
        <p class="text-secondary">The frequently asked questions<br/> by students.</p>
      </div>
      <div class="qs d-flex justify-content-center w-50">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is the difference between flex and grid?
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                 <p class="text-secondary">Grid and flexbox. The basic difference between CSS Grid Layout and CSS Flexbox Layout is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time.</p>
                
              </div>
            </div>
          </div>
          <div class="accordion-item my-2 border">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            What is Semantic tag?
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p class="text-secondary">The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item my-2 border">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            What is css box model?
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p class="text-secondary">In web development, the CSS box model refers to how HTML elements are modeled in browser engines and how the dimensions of those HTML elements are derived from CSS properties. It is a fundamental concept for the composition of HTML webpages.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item my-2 border">
            <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            What is the difference between bootstrap and tailwind?
            </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p class="text-secondary">The main difference between TailwindCSS and Bootstrap is that Tailwind CSS is not a UI kit. Unlike UI kits such as Bootstrap, Bulma, and Foundation, Tailwind CSS doesn't have a default theme or built-in UI components. Instead, it comes with predesigned widgets you can use to build your site from scratch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>
)
}
export default Home