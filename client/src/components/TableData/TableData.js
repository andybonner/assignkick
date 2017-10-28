import React, { Component } from "react";
import { Button } from 'react-materialize';
import moment from 'moment';
import "./TableData.css";

class TableData extends Component {
  render() {
    return (
      <tbody>
        {
          this.props.assignments.map(item =>(
            <tr key={item._id} className='table-rows'>
              <td className='table-cell'>{item.school}</td>
    
              <td className='table-cell'>{item.teacher}</td>
    
              <td className='table-cell'>{item.course}</td>
    
              <td className='table-cell'>{item.title}</td>
    
              <td className='table-cell'>{moment(item.end).add(1, 'days').format('ll')}</td>
    
              <td><Button floating className='red' waves='light' icon='delete' /></td>
            </tr>
          ))
        }
      </tbody>
    )
  }
}

export default TableData;