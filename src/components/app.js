import React, { Component } from 'react'
import FieldLevelValidationForm from './FieldLevelValidationForm'
// import { Field, reduxForm } from 'redux-form'
import showResults from './shiowResults'
import { Values } from 'redux-form-website-template'
export default class App extends Component {
  render() {
    return (
      // <div>
      //   <h1 className="heading-center">Form Validations</h1>
      //   <FieldLevelValidationForm onSubmit={showResults} />

      // </div>
      <div className="formvalues">
        <div className=" col-xs-12 col-md-8">
          <h2>Field-Level Validation</h2>
          <FieldLevelValidationForm onSubmit={showResults} />
        </div>
        <div className="col-xs-12 col-md-3 w3-card w3-pink val">
          <Values className="" form="fieldLevelValidation" />
        </div>
      </div>
    )
  }
}
