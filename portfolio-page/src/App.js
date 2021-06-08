import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Background from './media/background-media-2.png';
import Button from '@material-ui/core/Button';

class App extends Component{
  render(){
    return(
      <div className="container">
          <h1>Hello! My Name is Will</h1>
          <h1>I am a Software Engineer</h1>

          <Button variant="contained" color="secondary" style={{paddingLeft: "10px"}}>
            My works
          </Button>
     </div>
    )
  }
}

export default App; 