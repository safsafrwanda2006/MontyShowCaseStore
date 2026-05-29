import React from 'react'
import "../sections/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className='Footer_section'>
      <div className="Container">
        <div className="footer_content">
          <div className="first_one">
            <h3>مونتي ShowCase</h3>
            <p>ستايلك... بطريقتك</p>
          </div>
          <div className="second_one">
            <h3>تواصل معنا</h3>
            <p> <FiMessageCircle/> +249 11 068 3002 </p>
            <p> <IoCallOutline />+249 11 068 3002 </p>
          </div>
          <div className="third_one">
            <h3>تابعنا</h3>
            <div className="logos">
              <a href="https://www.instagram.com/taza.092011/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/mntsr.khmys.651069" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
            </div>
          </div>
        </div>
        <hr />
        <p className='copy'>© 2026 مونتي ستور - جميع الحقوق محفوظة</p>
      </div>
    </div>
  )
}

export default Footer
