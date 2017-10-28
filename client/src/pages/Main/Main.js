import React, { Component } from 'react';
import moment from "moment";
import { Alert, Modal, Button } from 'antd';
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
import TableData from "../../components/TableData";
import TableHeader from '../../components/TableHeader';
import AssignForm from '../../components/Forms/AssignForm';
import { Table } from "react-materialize";
import axios from 'axios';
import BigCalendar from 'react-big-calendar';

// css
import "./Main.css";
import "react-big-calendar/lib/css/react-big-calendar.css";


BigCalendar.momentLocalizer(moment);


class Main extends Component {
  state = {
    value: moment(),
    selectedValue: moment(),
    assignments: [],
    assignVisible: false
  }

  componentDidMount() {
    this.loadAssignments();
  }

  loadAssignments = () => {
    axios.get('/api/assignments/')
    .then(result=> {      
      this.setState({
        assignments: result.data
      });
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
        <SideNav />

        <BigCalendar
          {...this.props}
          events={this.state.assignments}
          timeslots={7}
          defaultView='month'
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
              onCancel={ this.handleCancel }
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
              <TableData assignments={this.state.assignments} />
            </Table>
          </div>
        </div>

        <Footer />
        
      </div>
    );
  }
}

export default Main;