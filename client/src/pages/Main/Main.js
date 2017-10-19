import React, { Component } from 'react';
import moment from "moment";
import { Calendar, Alert } from 'antd';
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
import "./Main.css";

class Main extends Component {
  // Initial states default to current date
  state = {
    value: moment(),
    selectedValue: moment(),
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
    return (
      <div>
        <SideNav />

        <div className="mainContainer">
          <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
          <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Main;