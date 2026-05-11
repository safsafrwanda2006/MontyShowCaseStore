import React from 'react'
import ownerImg from '../assets/ines ruhengeri.jpeg';
import './About_Owner_Section.css';
import "../index.css";
import { FiMessageCircle } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";

function About_Owner_Section() {
  return (
    <div className='About_Section'>
      <div className="Container">
        <div className="title_part">
          <div className="owner_word_flex">
            <img src={ownerImg} alt="-owner" />
            <div className="content_word">
              <h3>كلمة صاحب المحل</h3>
              <p className='content'>السلام عليكم يا شباب! أنا أحمد، وأنا هنا عشان أقدم ليكم أفضل الملابس الكاجوال بأسعار معقولة. مونتي ستور بدأت من حب الموضة والستايل، وكل قطعة بنختارها بعناية عشان تكون مميزة وتناسب ذوقكم. ثقتكم فينا هي الأهم، ووعدنا ليكم جودة عالية وخدمة ممتازة.</p>
              <p className='sig'>أحمد محمد، مؤسس مونتي ستور</p>
            </div>
          </div>
        </div>
        <div className="how_to_order_part">
           <div className="title">
              <h2>كيف تطلب؟</h2>
              <p>الطلب سهل ومباشر - اختار المنتج وتواصل معنا</p>
           </div>
           <div className="steps">
              <div className="step">
                <span>1</span>
                <h3>اختار المنتج</h3>
                <p>تصفح واختار القطعة اللي عاجبتك</p>
              </div>
              <div className="step">
                <span>2</span>
                <h3>أضف إلى السلة🛒</h3>
                <p>اضغط على زر إضافة إلى السلة داخل صفحة المنتج</p>
              </div>
              <div className="step">
                <span>3</span>
                <h3>أكمل الطلب </h3>
                <p>اضغط شراء الآن أو أضف منتجات أخرى إلى السلة ثم أتمم الشراء</p>
              </div>
           </div>
           <div className="contacts_buttons">
              <a href="#" ><button className='but_green'> <FiMessageCircle /> تواصل عبر واتساب </button></a>
              <a href="#"><button className='but_orange'><IoCallOutline />اتصل بنا </button></a>
           </div>
        </div>
      </div>
    </div>
  )
}

export default About_Owner_Section
