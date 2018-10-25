import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { Values } from 'redux-form-website-template'
import store from './reducers'
// import showResults from './components/shiowResults'
// import FieldLevelValidationForm from './components/FieldLevelValidationForm'
import App from './components/app'
import './validation.css'
// import { Router } from 'react-router-dom'
//import * as serviceWorker from './serviceWorker'

// const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
//serviceWorker.unregister()
