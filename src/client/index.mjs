import ReactDOM from 'react-dom'
const { BrowserRouter } = require('react-router-dom')

import e from './utils/e.mjs'
import Routes from './Routes.mjs'

// console.log(BrowserRouter)

ReactDOM.hydrate(e(BrowserRouter, {}, e(Routes)), document.querySelector(`#root`))