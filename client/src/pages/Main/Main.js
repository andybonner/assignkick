import React, { Component } from 'react';
import moment from "moment";
import { Calendar, Alert, Modal, Button } from 'antd';
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
import "./Main.css";
import TableData from "../../components/TableData";
import TableHeader from '../../components/TableHeader';
import AssignForm from '../../components/Forms/AssignForm';
import {Table} from "react-materialize";
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
          <Alert style={{marginTop: 20}} message={`You selected date: ${selectedValue && selectedValue.format('ll')}`} />
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
              title="Assignment Registeration Form"
              className="text-center"
              onCancel={ this.handleCancel }
              footer={null}
            >
              <AssignForm
                regClass="formItems"
                inputClass="inputItems"
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