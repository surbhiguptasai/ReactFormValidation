import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Dropzone from 'react-dropzone'

const required = value => (value ? undefined : 'Required')
const FILE_FIELD_NAME = 'files'
const renderDropzoneInput = field => {
  const files = field.input.value
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
        accept="image/jpeg,image/jpg,image/png"
      >
        <div>
          Try dropping some files here, or click to select files to upload.
        </div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error && <span className="error">{field.meta.error}</span>}
      {files &&
        Array.isArray(files) && (
          <ul>
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
        )}
    </div>
  )
}
const letter = value =>
  value && !/[a-zA-Z]$/.test(value) ? 'Must be letters' : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
// const imageUrl = value =>
//   value && !/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i.test(value)
//     ? 'Invalid format of image'
//     : undefined

const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined

const renderField = ({
  input,
  label,
  type,
  value,

  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const FieldLevelValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstname"
        type="text"
        component={renderField}
        label="First Name"
        validate={[required, maxLength15, letter]}
      />
      <Field
        name="lastname"
        type="text"
        component={renderField}
        label="Last Name"
        validate={[required, maxLength15, letter]}
      />
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required, maxLength15, alphaNumeric]}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={email}
        warn={aol}
      />
      <Field
        name="age"
        type="number"
        component={renderField}
        label="Age"
        validate={[required, number, minValue18]}
      />
      <Field
        name="phone"
        type="number"
        component={renderField}
        label="Phone"
        validate={[required, number, phoneNumber]}
      />
      {/* <Field
        name="uploadimage"
        type="file"
        component="input"
        label="Image"
        value={null}
        validate={[required]}
      /> */}
      <div>
        <label htmlFor={FILE_FIELD_NAME}>Files</label>
        <Field name={FILE_FIELD_NAME} component={renderDropzoneInput} />
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation', // a unique identifier for this form
})(FieldLevelValidationForm)
