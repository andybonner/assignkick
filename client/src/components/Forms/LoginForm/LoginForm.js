import React, { Component } from "react";
import { Form, Icon, Input, Button } from 'antd';
import { Link } from "react-router-dom";

// Import CSS
import "./LoginForm.css";

const FormItem = Form.Item;

// Registration Form Class
class CustomLoginForm extends Component {
  handleSubmit = event => {
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

    // Resets fields in modal
    this.props.form.resetFields();
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;

    // Styles for Login input fields
    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        offset: 4
      },
    };

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {/* Username */}
        <FormItem
          {...formItemLayout}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 15 }} />} placeholder="Username" className="loginInput" />
          )}
        </FormItem>

        {/* Password */}
        <FormItem
          {...formItemLayout}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 15}} />} type="password" placeholder="Password" className="loginInput" />
          )}
        </FormItem>

        {/* Login Button or Register */}
        <FormItem>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>

          <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
          </Button>
          
          <br />

          Or <Link to="/#submit">register now!</Link>
        </FormItem>
      </Form>
    );
  }
}

// Create LoginForm component
const LoginForm = Form.create()(CustomLoginForm);

export default LoginForm;