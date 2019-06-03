import React, {Component} from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import App from './App';
import Auth from './Auth';


class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App-header'>
        <div>
        {!this.props.authenticated &&
            <Switch>
                <Route path="/login" component={Auth} />
                <Route path="" render={() => <Redirect to="/login" />} />
            </Switch>}

        {this.props.authenticated &&
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/ads/:id" component={App} />
                <Route path="" render={() => <Redirect to="/" />} />
            </Switch>}
    </div>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
    authenticated: !!state.login
})

// export default Main;
export default withRouter(connect(mapStateToProps)(Main))
