import React from "react";
import moment from 'moment';

const TableHeader = props => 
  <thead>
    <tr>
      <th data-field={(props.col1).toLowerCase()}>{props.col1}</th>
      <th data-field={(props.col2).toLowerCase()}>{props.col2}</th>
      <th data-field={(props.col3).toLowerCase()}>{props.col3}</th>
      <th data-field={(props.col4).toLowerCase()}>{props.col4}</th>
      <th data-field={(props.col5).toLowerCase()}>{props.col5}</th>
    </tr>
  </thead>;

export default TableHeader;