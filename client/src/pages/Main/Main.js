import React, { Component } from 'react';
import moment from "moment";
import { Form, Calendar, Alert, Modal, Button } from 'antd';
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
import "./Main.css";
import TableData from "../../components/TableData";
import TableHeader from '../../components/TableHeader';
import AssignForm from '../../components/Forms/AssignForm';
import {Table} from "react-materialize";
import axios from 'axios';
import BigCalendar from 'react-big-calendar';

import "react-big-calendar/lib/css/react-big-calendar.css";

const FormItem = Form.Item;

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Main extends Component {
  // Initial states default to current date
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
      console.log(result.data);
      
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

  handleOk = () => {
		this.setState({ 
			loading: true 
		});
		
    setTimeout(() => {
      this.setState({ 
				loading: false, 
				assignVisible: false 
			});
    }, 3000);
	}

  handleCancel = () => {
    this.setState({ 
			assignVisible: false 
		});
	}

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  }

  onPanelChange = (value) => {
    this.setState({ value });
  }

  onChange = event => {
    this.loadAssignments();
  }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   this.props.form.validateFieldsAndScroll((error, values) => {
  //     if (!error) {
  //       console.log('Received values of form: ', values);

  //       axios.post('/api/add', values);
        
  //       // Resets fields in modal
  //       this.props.form.resetFields();
  //     }
  //   });
  // }

  render() {
    const { value, selectedValue, assignVisible } = this.state;

    return (
      <div>
        <SideNav />

        <BigCalendar
          {...this.props}
          events={this.state.assignments}
          step={25}
          timeslots={8}
          defaultView='month'
          defaultDate={new Date()}
          views={['month']}
          className="mainCalendar"
        />
         
        <div className="row"> 
          {/* Courses */}
          <div className="left-section">
            <h1 className="course-title">Courses</h1>

            <Button href="#add" onClick={this.showAssignModal} className="editable-add-btn" >
              Add
            </Button>

            <Modal
              visible={ assignVisible }
              title="Assignment Registeration Form"
              className="text-center"
              onCancel={ this.handleCancel }
              footer={null}
            >
              <AssignForm
                regClass="formItems"
                inputClass="inputItems"
                /* handleSubmit={this.handleSubmit} */
              />
            </Modal>

          <Table centered bordered hoverable>
            <TableHeader
              col1="School"
              col2="Teacher"
              col3="Course"
              col4="Assignment"
              col5="Deadline"
            />

            <TableData
              assignments={this.state.assignments}
            />
          </Table>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;