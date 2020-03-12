import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import 'bootstrap/dist/css/bootstrap.css'
import CreateTable from './CreateTable.js'
import Comms from './services/server_communication.js'
import SubmitPage from './SubmitPage'
import FormWizard from './FormWizard'
import { useAuth0 } from "./react-auth0-spa"
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";
import ExternalApi from "./view/ExternalApi";
import SocialLogin from 'react-social-login'
import SocialButton from './SocialButton'



const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const App = () => {
  const [forms, setForms] = useState([])

  const onSuccess = (user) => {
    console.log(user)
  }
   
  const onFailure = (err) => {
    console.error(err)
  }

  useEffect(() => {
    Comms.readAll()
      .then((forms) => {
        setForms(forms)
      })
      .catch(error => console.log(error))
  }, [])

  const padding = { padding: 5 }

  const history = createBrowserHistory()



  function addFormArr (form) {
    setForms(forms.concat(form))
  }

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="container-lg">
      <Router history={history}>

        <div className="col">
        {/* {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )} */}
          <Link style={padding} to="/table">Form List</Link>|
          <Link style={padding} to="/wizard">Form Builder</Link>

          {/*The new lib I tried to use, too late, providing redirect to the server*/}
          {/* On the previous lib I used, which is now on command, You can see the user can input login for Github, it will redirect the
          request back to the server*/}
            <SocialButton
              provider='github'
              appId='470b3166c3ce49ee90cd'
              onLoginSuccess={onSuccess}
              onLoginFailure={onFailure}
              redirect='http://localhost:3001'
            >
            Login with Github
            </SocialButton>
          <Route path="/table" render={() => <CreateTable forms={forms}/>}/>
          <Route path="/wizard" render={() => <FormWizard forms={forms} setForms={addFormArr}/>}/>
          <Route path="/submit/:id" render={({ match }) => <SubmitPage fields={forms[match.params.id].fields}
                                              formName={forms[match.params.id].name}  id={forms[match.params.id]._id}/>}/>

        </div>
      </Router>

    </div>
  )
}

ReactDOM.render(<Router>
<Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    audience={config.audience}
    onRedirectCallback={onRedirectCallback}
  >
  <App /></Auth0Provider></Router>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
