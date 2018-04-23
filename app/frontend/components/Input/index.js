/**
 * Input
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../InputErrorMessage';
import Validation from '../InputValidation';
import Label from '../Label';
import StyledInput from './StyledInput';

class Input extends Component {
  render() {
    return (
      <Fragment>
        <StyledInput
          border={this.props.border}
          className={this.props.error !== '' && 'error'}
          defaultValue={this.props.defaultValue}
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          required={this.props.required}
        />

        {this.props.error && <ErrorMessage text={this.props.error} />}

        <Validation
          showValid={this.props.showValid}
          loading={this.props.loading}
          valid={this.props.valid}
        />
      </Fragment>
    );
  }
}

Input.propTypes = {
  border: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  inputType: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  maxChars: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

Input.defaultProps = {
  label: '',
  maxChars: '0'
};

export default Input;