import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import zeeshan from "./zeeshanPic.jpeg"
import github from "./github.svg"
import whatsapp from "./whatsapp.png"
import mail from "./mail.png"
import linkedin from "./linkedin-icon-svg-1.jpg"

function Hi() {

  return <div className="main">
    <div className="contact">

      <img className="pic" width={75} src={zeeshan}></img>

      <h2 className="name">Mohammad Zeeshan Shafiq

      </h2>
      <div className="content"> "I am a MERN Stack Developer with a passion for crafting efficient and user-centric web applications. Proficient in the entire software development lifecycle, from concept to delivery, with a focus on creating robust and maintainable code.I strive to create seamless and intuitive user experiences."</div>
      <div className="icons"> 
        <a href="https://www.linkedin.com/in/zeeshan-khan-42b436251/" >
          <img width={30} height={30} src={linkedin}></img>
        </a>

        <a href="mailto:zeeshanchishti33@gmail.com" >
          <img width={30} height={30} src={mail}></img>
        </a>


        <a href="https://github.com/zeeshanshafiq84" >
          <img width={30} height={30} src={github}></img>
        </a>

        <a href="https://wa.me/923333229744" >
          <img width={30} height={30} src={whatsapp}></img>
        </a>
 
 
      </div>
    
    </div>
    <div className="info"> 
      <h2> <u>FORMAL EDUCATION</u></h2>
      <ul className="edu">
        <li>WEB DEV & MOB APP (SMIT)</li>
        <li>BACHELOR OF ARTS</li>
        <li>INTERMEDIATE</li>
        <li>MATRICULATION</li>
        <li>MICROSOFT UNLIMITED POTENTIAL
          CURRICULUM</li>
      </ul> 
      
      <h2 ><u>PROFESSIONAL EXPERIENCE</u></h2>
      <ul className="exp">
        <li>KAI TECH</li>
        <li>I.N.C.L JANG & GEO GROUP</li>
        <li>MAAZA PAKISTAN (PVT) LTD.</li>
      </ul>

      <h2><u>SKILLS</u></h2>
      <ul className="skills">
        <li>HTML, CSS, JAVASCRIPT</li>
        <li>NODE JS, EXPRESS JS, MONGODB, REACTJS</li>
        <li>BOOTSTRAP, TAILWIND, FIREBASE, GOOGLE CLOUD</li>
      </ul>

      <h3 className="pro">Portfolio: </h3>
            <a className="a1" href="https://github.com/zeeshanshafiq84"></a> 
            <a href="https://www.behance.net/zeeshankhan173"></a>

      </div>

  </div>
}

ReactDOM.render(<Hi />, document.querySelector("#root"));  