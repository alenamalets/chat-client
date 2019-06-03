import React from 'react';
import {connect} from 'react-redux'
import {sendMessage} from './action'

class App extends React.Component {
  state={
    name: '',
    body: ''
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value
    })
  }

  onSend = () => {
    this.props.sendMessage(this.state)
    this.setState({
      name: '',
      body: ''
    })
  }

  render () {
    // console.log('this.props.messages test:', this.props.messages)
    const paragraphs = this.props.messages.map((mes, index) => <p key={index}>{mes.name} said : {mes.body}</p>)
    return (
      <main>
        <h1>Messages:</h1>
        {paragraphs}
        <label>
               Name:
        <input type='text' onChange={this.onChange} name ='name' value={this.state.name}/>
        </label>
        <label>
               Comment:
        <input type='text' onChange={this.onChange} name ='body' value={this.state.body}/>
        </label>
        <button onClick={this.onSend}>send</button>
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

export default connect(mapStateToProps, {sendMessage}) (App);
