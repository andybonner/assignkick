import React from "react";
import "./Assignments.css";

import {Col, Collapsible, CollapsibleItem, Header, Icon, l, Style, } from 'react-materialize'

// SideNav component
const Assignments = () =>(
<section className="Assignments-container">
    

<div className="row">
      <div className="col-sm-12">
      <h5 className="Assignments-header">Assignments</h5>
   <Collapsible>
    <CollapsibleItem header='assignments1' icon='list' Style="width: 50%;">
        add assignments here.
    </CollapsibleItem>
    <CollapsibleItem header='assignments2' icon='list'>
        add assignments here.
    </CollapsibleItem>
    <CollapsibleItem header='assignments3' icon='list'>
        add assignments here.
    </CollapsibleItem>
</Collapsible>
</div>
</div>

</section>

  );

export default Assignments;