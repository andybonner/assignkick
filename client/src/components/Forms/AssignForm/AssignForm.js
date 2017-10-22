import React, { Component } from "react";
import { Form, Input, Button } from 'antd';
import axios from "axios";

// Import CSS
import "./AssignForm.css";

const FormItem = Form.Item;

// Registration Form Class
class AssignmentForm extends Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        console.log('Received values of form: ', values);
        axios.post('/api/add', values);
        
        // Resets fields in modal
        this.props.form.resetFields();
      }
    });
  }

  handleConfirmBlur = event => {
    const value = event.target.value;

    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;

    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    
    callback();
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
            rules: [{ required: true, message: 'Please a school!', whitespace: true }],
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
          {getFieldDecorator('assignment', {
            rules: [{
              required: true, message: 'Please enter an assignment!',
            }],
          })(
            <Input className={ this.props.inputClass } placeholder="Project 3" />
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="Assignment Due Date"
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('deadline', {
            rules: [{
              required: true, message: 'Please enter your assignment due date!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="date" onBlur={ this.handleConfirmBlur } className={ this.props.inputClass } placeholder="11/02/2017" />
          )}
        </FormItem>

        {/* Register */}
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

// Create AssignForm component
const AssignForm = Form.create()(AssignmentForm);

export default AssignForm;