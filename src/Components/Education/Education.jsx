import React from 'react'
import "../Education/education.css"
import school from "../../img/school.png"
import college from "../../img/college.png"
import degree from "../../img/higher-college.jpg"

const Education = () => {
  return (
    <div>

<section id="education">
        <h2>Education</h2>
        <div className="education">
            <div className="box">
                <div className="image-holder">
                    <img src={school} alt="school" className="school"/>
                </div>
                <p>Samata International school</p>
                <p>10<sup>th</sup> - 90%</p>
                <p>2015-2018</p>
            </div>

            <div className="box">
                <div className="image-holder">
                    <img src={college} alt="college" className="school"/>
                </div>
                <p>Pune Vidhyarthi Ghruha</p>
                <p>12<sup>th</sup> - 87.88%</p>
                <p>2018-2020</p>
            </div>

            <div className="box">
                <div className="image-holder">
                    <img src={degree} alt="higher-college" className="school"/>
                </div> 
                <p>Vellore Institute of Technology</p>
                <p>B.Tech(CGPA) = 7.8</p>
                <p>2020-Present</p>
            </div>
        </div>
    </section>
        
    </div>
  )
}

export default Education