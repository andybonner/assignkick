import React from "react";
import moment from 'moment';
import "./TableData.css";

const TableData = props => 
  <tbody>
    {
      props.assignments.map(item =>(
        <tr key={item._id} className='table-rows'>
          <td className='table-cell'>{item.school}</td>

          <td className='table-cell'>{item.teacher}</td>

          <td className='table-cell'>{item.course}</td>

          <td className='table-cell'>{item.title}</td>

          <td className='table-cell'>{moment(item.end).add(1, 'days').format('ll')}</td>
        </tr>
      ))
    }
  </tbody>;

export default TableData;