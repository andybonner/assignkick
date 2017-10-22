import React, { Component } from "react";
import { Table, Popconfirm } from 'antd';
import TableCell from '../TableCell';
import moment from 'moment';
import "./ClassSection.css";

class ClassSection extends Component {
  constructor(props) {
    super(props);
    this.columns = [{

      title: 'Assignment',
      dataIndex: 'assignment',
      width: '25%'
    }, {
      title: 'Course',
      dataIndex: 'course',
      width: '20%',
    }, {
      title: 'School',
      dataIndex: 'school',
      width: '20%'
    }, {
      title: 'Deadline',
      dataIndex: 'deadline',
      width: '15%'
    },{
      title: 'Remove Assignment',
      dataIndex: 'operation',
      width: '20%',
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
        deadline: moment(props.deadline).format('ll')
      }],
      count: 1,
    };
  }

  onDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;

    return (
      <div>
        <Table bordered dataSource={dataSource}  pagination={false} columns={columns}  />
      </div>
    );
  }
}

export default ClassSection;