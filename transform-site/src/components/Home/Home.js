import React from 'react';
import './Home.scss';
import '../Contact/Contact.scss';

import SVGsection from '../SVG/SVG.js';
import aboutImg from '../../images/wheel.png'
import wholeImg from '../../images/wholeistic.jpg'
import testImg from '../../images/train-partners-circle.jpg'
import zenImg from '../../images/zen-rocks.jpg'
// import {Email} from 'https://smtpjs.com/v3/smtp.js'
let emailSendTo = "dowell2transform@gmail.com"
function sendEmail(data) {
  let link = `mailto:${emailSendTo}?subject=${data.name}'s Inquiry&body=${data.message}`
  link = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailSendTo}&su=${data.name}'s Inquiry&body=${data.message}`
    // window.scrollTo(0,0)
    window.open(link, "_blank");
}
function handleSessionClick(link='/#contact') {
  let behavior = 'smooth';
  if(link.includes('/#')){
      document.getElementById(link.split('/#')[1]).scrollIntoView({ behavior: behavior});
    }else{
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
    }
}

function Home(props) {
    function buttonPress(link) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
        props.history.push(link)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      let data = {};
      let myForm = new FormData(document.getElementById('contanctForm'))
      for (var pair of myForm.entries()) {
        data[pair[0]] = pair[1]
    }
    //   console.log(event,myForm.entries().length)
    //   alert(`The name you entered was: ${''}`)
      sendEmail(data)
      
    }
  

    return (
        <div id="home">
  <section id="home-container">
    <div class="hero">
      <h1>Do Well 2 Transform</h1>
      <SVGsection />
      <p>Unlock your physical potential and discover the power of your subconscious mind.</p>
      <a onClick={()=>{ handleSessionClick();}} class="btn">Book a Session</a>
    </div>
  </section>

  <section id="about">
    <div class="about-container">
    <img src={aboutImg} alt="Hypnotherapist"/>
      <div><h2>About</h2>
      <p>Do Well 2 Transform® features transformational support coaching services & hypnosis for the Mind, Body and Spirit.   A coaching collaboration for those who seek meaningful change.  We begin with an understanding of your goals and desired outcomes -  and through hypnosis and wellness coaching - support your journey to peak performance.   We construct opportunities to make positive, powerful change leaving behind limiting beliefs, unproductive patterned thoughts and inefficient behaviors that distract and detract from a person's full potential and full enjoyment of life endeavors. </p>
      </div>
      
    </div>
  </section>

  <section id="services">
    <div class="services-container">
      <h2>Services</h2>
      <ul>
        <li>Personal Trainer</li>
        <li>Work-life Balance</li>
        <li>Hypnotherapist</li>
        <li>Spirituality</li>
      </ul>
      <p>Choose a service that suits your needs and take the first step towards positive change.</p>
    </div>
  </section>
  

  <section id="testimonials">
    <div class="testimonials-container">
    
      <div>
        <h2>Testimonials</h2>
        <div class="testimonial">
          {/* <img src={testImg} alt="Client"/> */}
          <p>Exceptional expertise, the fitness training and mindfulness advice i received from coach Dotty for my players greatly impacted their ability to get to the next level!</p>
          <p class="client-name">- Sue Stricker, softball coach</p>
        </div>
        <div class="testimonial">
          {/* <img src="client2.jpg" alt="Client"> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut risus non ante vulputate tincidunt.
            Maecenas sit amet ante at enim malesuada faucibus.</p>
            <p class="client-name">- Jane Smith</p>*/}
        </div>
      </div>
      <div class="testimonial-image"><img src={testImg} alt="training-group"/> </div>
    </div>
  </section>
  <section id="wholeistic">
    <div class="wholeistic-container">
    {/* <img src={wholeImg} alt="wholistict image"/> */}
    <div class="zen-image-container"><img src={zenImg} alt="zen rocks image"/></div>
    <div class="zen-empty"></div>
  </div>
  </section>
  <section id="contact">
    
    <div class="contact-container">
      <h2>Contact</h2>
      <p>Ready to transform your life? Contact us to book a session or for any inquiries.</p>
      <div className='contact-section'>
      <div className='contact-info'>
          <p className='label'>Send an email:</p>
          <a href={emailSendTo} >Email</a>
          <input type="text" className='data' id='mailInput' value={emailSendTo} readOnly={true} />
      </div>
      <div className='contact-info'>
          <p className='label'>Call or Text:</p>
          <input type="text" className='data' value='630-669-8809' readOnly={true} />
      </div>
    </div>
      <form id="contanctForm" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" required />
        {/* <input name="email" type="email" placeholder="Email" required /> */}
        <textarea rows="5" name="message" placeholder="Message" required></textarea>
        <button type="submit" class="btn send-btn">Send Message</button>
      </form>
    </div>
  </section>

  
  </div>
    );
}

export default Home;