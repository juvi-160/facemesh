// Install Dependencies DONE
// import dependencies
// set up webcam and canvas
// define refrences to those 
// load facemesh 
// detect function
// drawing utilities
// load triangulation
// setup triangle path 
// setup point drawing
// add drawMesh to detect function

import React, {useRef} from 'react';
// import logo from './logo.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/facemesh';
import Webcam from 'react-webcam';

function App() {

  // set up webcam and canvas
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
      <Webcam ref={webcamRef} style={
        {
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480
        }
      }/>
      <canvas ref={canvasRef} style= {
        {
          position:"absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480
        }
      }></canvas>
      </header>
    </div>
  );
}

export default App;
