import React, { Component } from 'react';
import moment from "moment";
import { Modal, Button } from 'antd';
import SideNavAuth from "../../components/SideNavAuth";
import AssignForm from '../../components/Forms/AssignForm';
import { Table } from "react-materialize";
import axios from 'axios';
import BigCalendar from 'react-big-calendar';
import TableHeader from '../../components/TableHeader';
import { connect } from 'react-redux';
import * as actions from '../../actions';

// css
import "./Main.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment);

class Main extends Component {
  // inherit check for authenticated user
  constructor(props) {
    super(props);
    this.props.protectedTest();
  }

  renderContent() {
    if (this.props.content) {
      return (
        <div>
          <div>{this.props.content}</div>
        </div>
      );
    }
  }

  // Initial states default to current date
  state = {
    value: moment(),
    selectedValue: moment(),
    assignments: [],
    assignVisible: false,
    calendarFormattedAssignments: []
  }

  componentDidMount() {
    if (this.props.user) {
      this.loadAssignments();
    }
  }

  loadAssignments = () => {
    const userID = this.props.user._id;

    axios.get('/api/user-assignments/' + userID)
      .then(result => {
      console.log('result in Main:', result);
      const newResultData = result.data.assignments.map(item => {
          const newItem = {
            start: moment(item.start).add(1, 'days').format(),
            end: moment(item.end).add(1, 'days').format(),
            title: item.title
          }
          return newItem;
        });

        this.setState({
          assignments: result.data.assignments,
          calendarFormattedAssignments: newResultData
        });
      })
  }

  deleteAssignment = (id) => {
    axios.delete('/api/assignments/' + id)
      .then(result => {
        this.loadAssignments();
      })
  }

  showAssignModal = () => {
    this.setState({
      assignVisible: true,
    });
  }

  handleCancel = () => {
    this.setState({
      assignVisible: false
    });
    this.loadAssignments();
  }

  render() {
    const { assignVisible } = this.state;

    return (
      <div>
        <SideNavAuth />

        <BigCalendar
          {...this.props}
          events={this.state.calendarFormattedAssignments}
          timeslots={7}
          defaultView={'month'}
          defaultDate={new Date()}
          views={['month']}
          startAccessor='start'
          popup
          culture='en'
          endAccessor='end'
          className="mainCalendar" />
         
         <div className='table-header-main'>
            <h1 className="course-title">Courses
              <Button href="#add" onClick={this.showAssignModal} className='add-button' >
                Add Assignment
              </Button>
            </h1>
          </div>

        <div className="row"> 
          <div className="left-section">
            <Modal
              visible={ assignVisible }
              title="Assignment Registeration Form"
              className="text-center"
              footer={null} >
              <AssignForm
                regClass="formItems"
                inputClass="inputItems" />
            </Modal>

            <Table centered bordered hoverable className='table-section'>
              <TableHeader
                col1="School"
                col2="Teacher"
                col3="Course"
                col4="Assignment"
                col5="Deadline"
                col6="Delete Assignment" />

              <tbody>
                {
                  this.state.assignments.map(item =>(
                    <tr key={item._id} className='table-rows'>
                      <td className='table-cell'>{item.school}</td>
            
                      <td className='table-cell'>{item.teacher}</td>
            
                      <td className='table-cell'>{item.course}</td>
            
                      <td className='table-cell'>{item.title}</td>
            
                      <td className='table-cell'>{moment(item.end).add(1, 'days').format('ll')}</td>
            
                      <td><Button className='red' icon='delete' onClick={() => this.deleteAssignment(item._id)} /></td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        </div>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    content: state.auth.content,
    user: state.auth.user
  };
}

export default connect(mapStateToProps, actions)(Main);