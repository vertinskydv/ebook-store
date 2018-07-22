import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import IndexPage from './components/IndexPage';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.message }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    console.log(body);
    return body;
  };

  onLogInClick = (e) => {
    debugger;

  }

  render() {
    return (
      <IndexPage/>
    );
  }
}

export default App;
