import React from "react";
import "./Course.css";
import Assignments from "../Assignments"

import {Col, Collapsible, CollapsibleItem, Header, Icon, l,  } from 'react-materialize'

// SideNav component
const Course = () =>(
<section className="course-container">
    

<div className="row">
      <div className="col-sm-8">
      <h5 className="course-header">course</h5>
   <Collapsible>
    <CollapsibleItem header='Javascript 101' icon='list'>
       <Assignments />
           </CollapsibleItem>

    <CollapsibleItem header='react 101' icon='list'>
     <Assignments />
    </CollapsibleItem>
    <CollapsibleItem header='Angular 101.' icon='list'>
         <Assignments />
    </CollapsibleItem>
</Collapsible>
</div>
</div>

</section>

  );

export default Course;