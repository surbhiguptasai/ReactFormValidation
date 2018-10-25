import React, { Component } from 'react'
import FieldLevelValidationForm from './FieldLevelValidationForm'
// import { Field, reduxForm } from 'redux-form'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="heading-center">Form Validations</h1>
        <FieldLevelValidationForm />
      </div>
    )
  }
}
