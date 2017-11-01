import React, { Component } from "react";
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import axios from "axios";

// css
import "./AssignForm.css";

const FormItem = Form.Item;

class AssignmentForm extends Component {

  state = {
    confirmDirty: false,
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        // add user id 
        values.user = this.props.user._id;
        // create assignment
        axios.post('/api/add', values)
        .then(response => {
          // user is response.data.user
          // assignment is response.data._id
          // find that user, and update "assignments" property with id of this assignment
          axios.put('/api/user-update/' + response.data.user, {assignmentID: response.data._id});

        });
        // update user with returned id of new assignment
        
        // Resets fields in modal
        this.props.form.resetFields();
      }
    });
  }

  handleConfirmBlur = event => {
    const value = event.target.value;

    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  handleReset = () => this.props.form.resetFields();

  render() {
    const { getFieldDecorator } = this.props.form;

    // Font styles for the form inputs
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    // Font styles for the Agreement and Register button
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 8,
        },
      },
    };

    return (
      <Form onSubmit={ this.handleSubmit }>

        <FormItem
          {...formItemLayout}
          label="School"
          hasFeedback
          className={ this.props.regClass } 
        >
          {getFieldDecorator('school', {
            rules: [{ required: true, message: 'Please enter a school!', whitespace: true }],
          })(
            <Input className={ this.props.inputClass } placeholder="UNC - Chapel Hill" />
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="Teacher"
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('teacher', {
            rules: [{ required: true, message: 'Please enter your teacher!', whitespace: true }],
          })(
            <Input className={ this.props.inputClass } placeholder="Alper G." />
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="Course"
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('course', {
            rules: [{
              required: true, message: 'Please enter your course name!',
            }],
          })(
            <Input className={ this.props.inputClass } placeholder="Coding Boot Camp" />
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="Assignment"
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('title', {
            rules: [{
              required: true, message: 'Please enter an assignment!',
            }],
          })(
            <Input className={ this.props.inputClass } placeholder="Project 3" />
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="Assignment Start Date"
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('start', {
            rules: [{
              required: true, message: 'Please enter your assignment start date!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="date" onBlur={ this.handleConfirmBlur } className={ this.props.inputClass } placeholder="11/02/2017" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Assignment Due Date"
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('end', {
            rules: [{
              required: true, message: 'Please enter your assignment due date!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="date" onBlur={ this.handleConfirmBlur } className={ this.props.inputClass } placeholder="11/02/2017" />
          )}
        </FormItem>

        <FormItem 
          {...tailFormItemLayout}
          className={ this.props.regClass }
        >
          <Button type="primary" htmlType="submit" style={{ marginBottom: 20 }} >Add Assignment</Button>
          
          <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
          </Button>
        </FormItem>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.auth.user }
}

const AssignForm = Form.create()(AssignmentForm);

export default connect(mapStateToProps)(AssignForm);
