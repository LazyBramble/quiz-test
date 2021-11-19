import React, { useState } from 'react'
import FilterWindow from "./FilterWindow";
import img1 from "./Images/1.jpg";
import img2 from "./Images/2.jpg";
const MainPage =() => {
   const [modalActive, setModalActive] = useState(false);
   return (
       <div>
           <div className = "global">
               <div className = "global-head">Коты-воители: Квизы</div>
               <div className = "buttons_frame">
                   <div className = "buttons">
                       <button className="filter_btn" onClick={() => setModalActive(true)}>Фильтры</button>
                       <FilterWindow active={modalActive} setActive={setModalActive}>Фильтры</FilterWindow>
                   </div>
                   <div className = "buttons">Случайный квиз</div>
               </div>
               <div className="quiz-frame">
                   <button className="quiz"><img src={img1} height="200"/></button>
                   <button className="quiz"><img src={img2} height="200"/></button>

               </div>

           </div>
       </div>
   )
}

export default MainPage;
