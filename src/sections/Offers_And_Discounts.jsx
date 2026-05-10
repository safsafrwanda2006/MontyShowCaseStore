import "../sections/Offers_And_Discounts.css"; 
import React from 'react';

function Offers_And_Discounts() {
  return (
    <div className='Dicounts_section'>
      <div className="Container">
         <h3><span>%</span> عروض وخصومات 💰</h3>
         <div className="Offers_flex">
          <div className="Offer_card1">
            <p className="em">🎁</p>
            <h4>اشتري 2 واحصل على خصم 15%</h4>
            <p>عرض لفترة محدودة على كل المنتجات</p>
            <button className="btn1">اطلب الآن</button>
            
          </div>
          <div className="Offer_card2">
            <p className="em">🚚</p>
            <h4>توصيل مجاني</h4>
            <p >على الطلبات فوق 30,000 ج.س داخل الخرطوم</p>
            <button className="btn2">تسوق الآن</button>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Offers_And_Discounts
