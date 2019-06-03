import React from 'react';
import {connect} from 'react-redux'
import {login, sendUser} from './action'

class Auth extends React.Component {
  state={
    email: '',
    password: '',
    email2: '',
    password2: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value
    })
  }

  onSend = () => {
    this.props.sendUser(this.state)
    this.setState({
      email: '',
      password: ''
    })
  }
  onChange2 = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value
    })
  }

  onSend2 = () => {
    this.props.login(this.state.email2, this.state.password2)
    this.setState({
      email2: '',
      password2: ''
    })
  }


  render () {
    return (
      <main>
        <h1>LOGIN:</h1>
        <label>
               Email:
        <input type='text' onChange={this.onChange2} name ='email2' value={this.state.email2}/>
        </label>
        <label>
               Password:
        <input type='text' onChange={this.onChange2} name ='password2' value={this.state.password2}/>
        </label>
        <button onClick={this.onSend2}>confirm</button>
        <h1>SIGN UP:</h1>
        <label>
               Email:
        <input type='text' onChange={this.onChange} name ='email' value={this.state.email}/>
        </label>
        <label>
               Password:
        <input type='text' onChange={this.onChange} name ='password' value={this.state.password}/>
        </label>
        <button onClick={this.onSend}>save</button>
      </main>
    )
  }
 
}

function mapStateToProps (state) {
  return {
    messages: state.messages,
    sent: state.sent
  }
}

export default connect(mapStateToProps, {login, sendUser}) (Auth);
