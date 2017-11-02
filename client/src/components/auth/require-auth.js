import React, { Component } from 'react';  
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {  
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if(!this.props.authenticated) {
        this.context.router.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.context.router.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    console.log('require-auth sez state is:', state)
    return {
      authenticated: state.auth.authenticated,
      user: state.auth.user
    }
  }

  return connect(mapStateToProps)(Authentication);
}