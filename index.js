import 'babel-core/polyfill'

import React from 'react'
import { render } from 'react-dom'
import RootView from './view/rootView'

render(
  <RootView />,
  document.getElementById('root')
)
