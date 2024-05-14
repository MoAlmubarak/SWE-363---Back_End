import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import email_icon from '../../assets/email_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import loc_icon from '../../assets/loc_icon.png'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
        <h3>Contact us <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below</p>
        <ul>
            <li><img src={email_icon} alt="" />givehub.kfupm@gmail.com</li>
            <li><img src={phone_icon} alt="" />+966562801270</li>
            <li><img src={loc_icon} alt="" />KFUPM, Bulding 22</li>
        </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your name</label>
                <input type="text" name = 'name' placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type="tel" name = 'phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact
