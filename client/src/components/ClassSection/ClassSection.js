import React from "react";
import "./ClassSection.css";

const ClassSection = props => (

  
  <div className="card">
  
  <div class="card-block">
   

 
   <ul className="course-list">
    <li>
      <strong>ClassId:</strong> {props.id}
    </li>
    <li>
      <strong>Grade:</strong> {props.grade}
    </li>
    <li>
      <strong>Class:</strong> {props.course}
    </li>
    <li>
      <strong>Teacher:</strong> {props.teacher}
     </li>
     <li>
       <strong>School:</strong> {props.school}
      </li>
      </ul>
       
  </div>
 </div>
);

export default ClassSection;