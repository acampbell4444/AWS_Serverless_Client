import React 					   from 'react'
import {render} 				   from 'react-dom'
import { Provider } 		   	   from 'react-redux'
import { ConnectedRouter } 		   from 'connected-react-router' 
import * as serviceWorker   	   from './serviceWorker'
import Amplify 					   from 'aws-amplify'
import config 					   from './config'
import store					   from './store'
import Routes 					   from './Routes'
import history from './history'
import './index.css'

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
})

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
  	  <Routes />
  	</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
