import React from 'react'
import './Home.css';
import '../../frontend/style.css';
const Home = () => {
return (
<div>
  {/*Home Section*/}
  <section class="section1" id="home">
    <div class="container-fluid p-0">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/donation0.jpg" class="rounded-3 img-fluid  w-100" alt="..."/>
            
            <div class="carousel-caption d-md-block d-flex justify-content-center align-items-center px-5">
              <h1 class="text-center">Let’s Help Those Who Are More In Need</h1>
              <p class="text-center">Due to excessive rainfall, when rivers and canals overflow their banks and make a huge loss to crops and property, flood occurs and it is a great devil for us in Bangladesh.</p>
              <a href="#donate" class="button btn text-light py-3 px-5">Donte Now</a>
            </div>
          </div>
          
          <div class="carousel-item">
            <img src="images/donation11.jpg" class="rounded-3 img-fluid  w-100" alt="..."/>
            
            <div class="carousel-caption d-md-block d-flex justify-content-center align-items-center px-5">
              <h1 class="text-center">Let’s Help Those Who Are More In Need</h1>
              <p class="text-center">Due to excessive rainfall, when rivers and canals overflow their banks and make a huge loss to crops and property, flood occurs and it is a great devil for us in Bangladesh.</p>
              <a href="#donate" class=" new-btn btn text-light py-3 px-5">Donte Now</a>
            </div>
          </div>
          
          <div class="carousel-item">
            <img src="images/donation12.png" class="rounded-3 img-fluid  w-100" alt="..."/>
            
            <div class="carousel-caption d-md-block d-flex justify-content-center align-items-center px-5">
              <h1 class="text-center">Let’s Help Those Who Are More In Need</h1>
              <p class="text-center">Due to excessive rainfall, when rivers and canals overflow their banks and make a huge loss to crops and property, flood occurs and it is a great devil for us in Bangladesh.</p>
              <a href="#donate" class="button btn text-light py-3 px-5">Donte Now</a>
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
  {/*Donate now Section*/}
  <section class="section2" id="donate">
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
  {/*Our plan Section*/}
  <section class="section3" id="plan">
    <div className="container">
      <div class="plan-heading">
      <h1 className="text-center fw-bold">Our Plan</h1>
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
  {/*Success Section*/}
  <section class="done container-fluid" id="success">
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
  {/*Gallary Section*/}
  <section className="gallary container pb-4" id="gallary">
    <div className="gallary-elements">
      <div class="gallary-heading">
        <h1 className="fw-bold text-center">Gallary</h1>
      </div>
      <div class="gallary-details">
        <p className="text-center">The moments</p>
      </div>
    </div>

    <div class="gallery">
        <div class="gallery-item">
            <img src="images/donation1.jpg" alt="Image 1"/>
        </div>
        <div class="gallery-item">
            <img src="images/donation2.jpg" alt="Image 2"/>
        </div>
        <div class="gallery-item">
            <img src="images/donation3.jpg" alt="Image 3"/>
        </div>
        <div class="gallery-item">
            <img src="images/donation4.jpg" alt="Image 4"/>
        </div>
        <div class="gallery-item">
            <img src="images/donation6.jpg" alt="Image 5"/>
        </div>
        <div class="gallery-item">
            <img src="images/donation7.jpg" alt="Image 6"/>
        </div>
        <div class="gallery-item">
            <img src="images/donation8.jpg" alt=""/>
        </div>
        <div class="gallery-item">
            <img src="images/donation9.jpg" alt=""/>
        </div>
        <div class="gallery-item">
            <img src="images/donation10.jpg" alt=""/>
        </div>
        <div class="gallery-item">
            <img src="images/donation13.jpg" alt=""/>
        </div>
        <div class="gallery-item">
            <img src="images/donation14.webp" alt=""/>
        </div>
    </div>
  </section>
  {/*About Us Section*/}
  <section className="about container" id="about">
    <div className="about-elements">
      <div class="about-heading">
        <h1 className="fw-bold text-center">About Us</h1>
      </div>
      <div class="about-details">
        <p className="text-center">Know what we do</p>
      </div>
    </div>

    <div class="card mb-3 border-0">
        <div class="row g-0">
          <div class="col-md-6 col-lg-4 ">
            <img src="images/logo.png" class="img-fluid h-100 rounded-start" alt="..."/>
          </div>
          <div class="col-md-6  col-lg-8 py-5 px-4">
            <div class="card-body py-5 px-4">
              <p class="ellipsis card-text text-secondary">At <span className="fw-bold">Easy Donate</span>, we are dedicated to making a positive impact in the face of disaster. Our mission is to provide relief and support to communities affected by devastating floods. We understand the immense challenges and hardships that flood victims endure, and we believe in the power of collective action to bring about change.</p>
              <p class="ellipsis card-text text-secondary"><span className="fw-bold">Easy Donate</span> was founded by a group of passionate individuals who wanted to make a difference in the lives of those affected by floods. Inspired by the spirit of compassion and unity, we embarked on a journey to create a platform that could harness the generosity of people from all walks of life to help those in need.</p>
              <p class="ellipsis card-text text-secondary">Our platform serves as a bridge between donors and flood-affected communities. We facilitate the collection of donations, both monetary and in-kind, and ensure that they reach the hands of those who need them the most. We partner with established relief organizations and local authorities to ensure efficient and transparent distribution of aid.</p>
              <p class="ellipsis card-text text-secondary">Floods are among the most devastating natural disasters, affecting millions of people worldwide. We believe that everyone deserves a helping hand during their most challenging times. By donating through <span className="fw-bold">Easy Donate</span>, you become a part of a larger effort to provide hope and support to flood victims. Together, we can make a significant impact and help these communities recover and rebuild.</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>

  
  {/*FAQ Section*/}
  <section class="section6" id="faq">
    <div class="container d-flex justify-content-center align-items-center flex-column">
      <div class="qs-elements d-flex justify-content-center align-items-center flex-column text-center pb-4">
        <h1 class="fw-bold">Frequently Asked Questions</h1>
        <p class="text-secondary">The frequently asked questions by the people.</p>
      </div>
      <div class="qs d-flex justify-content-center w-50">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is Easy Donate?
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                 <p class="text-secondary"><span className="fw-bold"> Easy Donate </span> is a platform dedicated to facilitating donations and support for flood victims. We connect donors with organizations and individuals in need to provide relief during and after flood disasters.</p>
                
              </div>
            </div>
          </div>
          <div class="accordion-item my-2 border">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             How can I donate through Easy Donate?
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p class="text-secondary">Donating through <span className="fw-bold"> Easy Donate </span> is simple. Just visit our homepage and browse the current flood relief campaigns. Choose the campaign you'd like to support and click on the "Donate Now" button. You can make a one-time donation or set up a recurring donation, depending on your preference.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item my-2 border">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Is my donation secure on Easy Donate?
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p class="text-secondary">Yes, we take security seriously. We use encryption and secure payment processors to protect your financial information. Your donation goes directly to the intended recipients and is transparently tracked.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item my-2 border">
            <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
             Are my donations tax-deductible?
            </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p class="text-secondary">Many donations through <span className="fw-bold"> Easy Donate </span> are tax-deductible, but it depends on the specific campaign and organization you're supporting. Check the campaign details for information on tax deductibility, and consult your tax advisor for guidance.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item my-2 border">
            <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Can I donate goods or services instead of money?
            </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p class="text-secondary">In some cases, you may have the option to donate goods or services. Check the campaign details to see if this is available. Be aware that monetary donations are often more flexible and can be allocated where needed most.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

{/*Contact Us Section*/}
<section class="section7" id="contact">
    <div class="container">
     <div className="contact-elements text-light">
      <div class="contact-heading">
        <h1 className="fw-bold text-center">Contact</h1>
      </div>
      <div class="contact-details">
        <p className="text-center">Please contact us using this form below.</p>
      </div>
    </div>
          <div id="contact" class="contact-main container-fluid py-lg-5 py-sm-0">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6">
            
            <div class="contact-details py-lg-3 py-sm-0">
              <p class="text-left text-white">Thank you for your interest in <span className="fw-bold">Easy Donate</span>.</p>
            </div>
            <div class="cborder"></div>
            <div class="contact-address py-5">
              <span><i class="fa-solid fa-location-dot"></i><p>241 CDBFER,FGHRRTRG</p></span>
              <span><i class="fa-solid fa-phone"></i><p>+001122334455</p></span>
              <span><i class="fa-solid fa-envelope"></i><p>ABCD@gmail.com</p></span>
            </div>
          </div>
          <div class="col-md-6">
            
            <div class="cborder"></div>
            <div class="contact-form py-lg-5 py-sm-2">
              <form>
                <div class="form-group">
                  
                  <input type="text" class="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Name"/>
                  
                </div>
                <div class="form-group">
                  
                  <input type="email" class="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                  
                </div>
                <div class="form-group">
                  
                  <input type="text" class="form-control mt-3" id="exampleInputPassword1" placeholder="Subject"/>
                </div>
                <div class="form-group">
                  <textarea class="form-control mt-3" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                </div>
                
                <button type="submit" class="mt-3 btn3 btn btn-primary font-weight-bold">Submit</button>
              </form>
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