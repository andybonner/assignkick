import React, { Component } from "react";
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import TableCell from '../TableCell';
import "./ClassSection.css";

class ClassSection extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'Course',
      dataIndex: 'course',
      width: '30%',
      render: (text, record) => (
        <TableCell
          value={text}
          onChange={this.onCellChange(record.key, 'name')}
        />
      ),
    }, {
      title: 'School',
      dataIndex: 'school',
      width: '20%'
    }, {
      title: 'Assignment',
      dataIndex: 'assignment',
      width: '30%'
    }, {
      title: 'Deadline',
      dataIndex: 'deadline',
      width: '10%'
    },{
      title: 'Operation',
      dataIndex: 'operation',
      width: '10%',
      render: (text, record) => {
        return (
          this.state.dataSource.length > 1 ?
          (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
              <a href="#">Delete</a>
            </Popconfirm>
          ) : null
        );
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        course: props.course,
        school: props.school,
        teacher: props.teacher,
        assignment: props.assignment,
        deadline: props.deadline
      }],
      count: 1,
    };
  }

  onCellChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }

  onDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }
  
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default ClassSection;