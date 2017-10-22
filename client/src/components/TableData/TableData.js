import React from "react";
import moment from 'moment';
import "./TableData.css";

const TableData = props => 
  <tbody>
    {
      props.assignments.map(item =>(
        <tr key={item._id}>
          <td>{item.school}</td>

          <td>{item.teacher}</td>

          <td>{item.course}</td>

          <td>{item.assignment}</td>

          <td>{moment(item.deadline).format('ll')}</td>
        </tr>
      ))
    }
  </tbody>;

export default TableData;