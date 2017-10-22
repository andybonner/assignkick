import React, { Component } from 'react';
import moment from "moment";
import { Calendar, Alert, Modal, Button } from 'antd';
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
import "./Main.css";
import ClassSection from "../../components/ClassSection";
import AssignForm from '../../components/Forms/AssignForm';
import axios from 'axios';


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

  render() {
    const { value, selectedValue, assignVisible } = this.state;

    return (
      <div>
        <SideNav />

        <div className="mainContainer">
          <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
          <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} fullscreen={false} /> 
        </div>
         
        <div className="row"> 
          {/* Courses */}
          <div className="left-section">
            <h1 className="course-title">Courses</h1>

            <Button href="#add" onClick={this.showAssignModal} className="editable-add-btn" >
              Add
            </Button>

            <Modal
              visible={ assignVisible }
              title="Register Form"
              onCancel={ this.handleCancel }
              footer={null}
            >
              <AssignForm
                regClass="formItems"
                inputClass="inputItems"
              />
            </Modal>

            {
              this.state.assignments.map(item =>(
              <ClassSection
                id={item.id}
                school={item.school}
                teacher={item.teacher}
                course={item.course}
                key={item.id}
                assignment={item.assignment}
                deadline={item.deadline}
              />
              ))
            }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;