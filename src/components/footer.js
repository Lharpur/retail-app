import React from 'react'
import { AiFillPhone, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLinks">
        <li>Terms Of Use</li>
        <li>Privacy Policy</li>
      </div>
      <div className="footerContacts">
        <a href="tel:+12345678">
          <AiFillPhone
            style={{ color: 'black', width: '30px', height: '30px' }}
          />
        </a>
        <a href="mailto: fakeemailaddress@test.com">
          <MdEmail style={{ color: 'black', width: '30px', height: '30px' }} />
        </a>
        <a href="https://www.instagram.com">
          <AiFillInstagram
            style={{ color: 'black', width: '30px', height: '30px' }}
          />
        </a>
        <a href="https://www.facebook.com">
          <AiFillFacebook
            style={{ color: 'black', width: '30px', height: '30px' }}
          />
        </a>
      </div>
    </div>
  )
}

export default Footer
