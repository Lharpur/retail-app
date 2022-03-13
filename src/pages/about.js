import React from 'react'
import { AiFillPhone, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const About = () => {
  return (
    <div className="aboutPage">
      <div className="storeInfo">
        <h3>Trading Hours</h3>
        <li>
          <span>Mon-Fri:</span> 9am-9pm
        </li>
        <li>
          <span>Sat:</span> 9am-4pm
        </li>
        <li>
          <span>Sun/Public Holidays:</span> Closed
        </li>
        <h3>Contact Us</h3>
        <div className="contactIcons">
          <a href="tel:+12345678">
            <AiFillPhone
              style={{ color: 'black', width: '50px', height: '50px' }}
            />
          </a>
          <a href="mailto: fakeemailaddress@test.com">
            <MdEmail
              style={{ color: 'black', width: '50px', height: '50px' }}
            />
          </a>
          <a href="https://www.instagram.com">
            <AiFillInstagram
              style={{ color: 'black', width: '50px', height: '50px' }}
            />
          </a>
          <a href="https://www.facebook.com">
            <AiFillFacebook
              style={{ color: 'black', width: '50px', height: '50px' }}
            />
          </a>
        </div>
        <h3>Who Are We?</h3>
        <p>
          Launching in 2015, Heliacal Records looks to pass on the gift of
          physical music to a new generation by selling a variety of albums from
          well renowned artists.
        </p>
        <h3>Location</h3>
        <p>
          Our store is conveniently located on the corner of Fake street and
          Pretend road.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7079.925629073977!2d153.01867277969075!3d-27.47041701240078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a045cf620bb%3A0x502a35af3de84c0!2sBrisbane%20City%20QLD%204000!5e0!3m2!1sen!2sau!4v1647062236187!5m2!1sen!2sau"
          width="600"
          height="450"
          title="location"
        ></iframe>
      </div>
    </div>
  )
}

export default About
