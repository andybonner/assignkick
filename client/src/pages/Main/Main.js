import React, { Component } from 'react';
import moment from "moment";
import { Calendar, Alert } from 'antd';
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
import "./Main.css";
import ClassSection from "../../components/ClassSection";
import courses from "../../courses.json";

class Main extends Component {
  // Initial states default to current date
  state = {
    value: moment(),
    selectedValue: moment(),
    courses
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

  render() {
    const { value, selectedValue } = this.state;

    console.log(courses);
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
            {
              courses.map(item =>(
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