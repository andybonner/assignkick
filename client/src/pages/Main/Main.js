import React, { Component } from 'react';
import moment from "moment";
import { Calendar, Alert, Modal, Button } from 'antd';
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
import "./Main.css";
import TableData from "../../components/TableData";
import AssignForm from '../../components/Forms/AssignForm';
import { Table } from "react-materialize";
import axios from 'axios';
// from tutorial
import { connect } from 'react-redux';
import * as actions from '../../actions';


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

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }

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
      .then(result => {
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
              visible={assignVisible}
              title="Register Form"
              onCancel={this.handleCancel}
              footer={null}
            >
              <AssignForm
                regClass="formItems"
                inputClass="inputItems"
              />
            </Modal>

            <Table centered bordered hoverable>
              <thead>
                <tr>
                  <th data-field="school">School</th>
                  <th data-field="teacher">Teacher</th>
                  <th data-field="course">Course</th>
                  <th data-field="assignment">Assignment</th>
                  <th data-field="deadline">Deadline</th>
                </tr>
              </thead>

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

function mapStateToProps(state) {
  return { content: state.auth.content };
}

export default connect(mapStateToProps, actions)(Main);