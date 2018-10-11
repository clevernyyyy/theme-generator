import 'colour-pickr/assets/index.css';
import React, { Component } from 'react';
import './App.scss';
import ColorPicker from 'colour-pickr';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }
  componentWillMount() {
    document.documentElement.style.color = '#1a9e32';
  }
  changeHandler = (c) => {
    console.log('new color', c);
    document.documentElement.style.color = c.color;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header background">
          <h1 className="App-title">Welcome to</h1>
          <div className='title-slide'>Theme Generator 2000</div>
        </header>
        <div className='pckr'>
          <p className="App-intro" style={{'color': 'currentcolor'}}>
            To get started, choose a color to find your theme.
          </p>
          <div style={{ margin: '20px 20px 20px', textAlign: 'center' }}>
            <ColorPicker
              animation="slide-up"
              color={'#1a9e32'}
              onChange={this.changeHandler}
            />
          </div>
        </div>

        <div className='color-area container'>
          <h4 className='sub-title'>Primary Colors</h4>
          <div id="primary-colors" className='prim-box'>
            <div className="demo-box dark-original-color">
              <p className="demo-box-text fg-light-text">$dark-original-color</p>
            </div>
            <div className="demo-box muted-original-color">
              <p className="demo-box-text fg-light-text">$muted-original-color</p>
            </div>
            <div className="demo-box original-color">
              <p className="demo-box-text fg-light-text">$original-color</p>
            </div>
            <div className="demo-box light-original-color">
              <p className="demo-box-text fg-light-text">$light-original-color</p>
            </div>
            <div className="demo-box bright-original-color">
              <p className="demo-box-text fg-dark-text">$bright-original-color</p>
            </div>


            <div className="demo-box adjusted-color-90">
              <p className="demo-box-text fg-light-text">$adjusted-color-90</p>
            </div>
            <div className="demo-box adjusted-color-60">
              <p className="demo-box-text fg-light-text">$adjusted-color-60</p>
            </div>
            <div className="demo-box adjusted-color-30">
              <p className="demo-box-text fg-light-text">$adjusted-color-30</p>
            </div>
            <div className="demo-box contrast-original-color">
              <p className="demo-box-text fg-light-text">$contrast-original-color</p>
            </div>
            <div className="demo-box highlight-color">
              <p className="demo-box-text fg-light-text">$highlight-color</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
