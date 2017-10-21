import React, { Component } from "react";
import { Form, Input, Tooltip, Icon, Checkbox, Button } from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";

// Import CSS
import "./RegForm.css";

const FormItem = Form.Item;

// Registration Form Class
class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        console.log('Received values of form: ', values);
        axios.post('/auth/register', values)
        .then(results => {
          console.log(results);
        });

        this.props.form.resetFields();
      }
    });
  }

  handleConfirmBlur = event => {
    const value = event.target.value;

    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;

    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } 
    else {
      callback();
    }
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

        {/* First Name */}
        <FormItem
          {...formItemLayout}
          label="First Name"
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
          })(
            <Input className={ this.props.inputClass } placeholder="John" />
          )}
        </FormItem>

        {/* Last Name */}
        <FormItem
          {...formItemLayout}
          label="Last Name"
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
          })(
            <Input className={ this.props.inputClass } placeholder="Smith" />
          )}
        </FormItem>

        {/* Nickname */}
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want other to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input className={ this.props.inputClass } placeholder="Johnny" />
          )}
        </FormItem>

        {/* Email */}
        <FormItem
          {...formItemLayout}
          label="E-mail"
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input className={ this.props.inputClass } placeholder="abc@123.com" />
          )}
        </FormItem>

        {/* Password */}
        <FormItem
          {...formItemLayout}
          label="Password"
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" className={ this.props.inputClass } placeholder="Secret" />
          )}
        </FormItem>

        {/* Password validation */}
        <FormItem
          {...formItemLayout}
          label="Confirm Password"
          hasFeedback
          className={ this.props.regClass }
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" onBlur={ this.handleConfirmBlur } className={ this.props.inputClass } placeholder="Secret" />
          )}
        </FormItem>

        {/* Terms of Agreement */}
        <FormItem 
          {...tailFormItemLayout} 
          style={{ marginBottom: 8 }}
          className={ this.props.regClass }
        >
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <Link to="/">agreement</Link></Checkbox>
          )}
        </FormItem>

        {/* Register */}
        <FormItem 
          {...tailFormItemLayout}
          className={ this.props.regClass }
        >
          <Button type="primary" htmlType="submit" style={{ marginBottom: 20 }}>Register</Button>
          
          <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
          </Button>
        </FormItem>
      </Form>
    );
  }
}

// Create RegForm component
const RegForm = Form.create()(RegistrationForm);

export default RegForm;