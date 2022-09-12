import logo from './logo.svg';
import './App.css';
import YoutubeEmbed from "./YoutubeEmbed";
import {STLLoader} from "three/examples/jsm/loaders/STLLoader";
import { createRoot } from 'react-dom/client'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; 
import * as THREE from "three";
import { Suspense } from 'react'
/*import vlamp from './vlamp.stl'/*
/*import Model from './model.js'*/


/*
const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
     () => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
     },
     [camera, gl]
  );
  return null;
}; */

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Box2(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <coneGeometry args={[1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function App() {
  return (
    <div className="App">
      <body>
        <header className="header">
          <div className='topnav'>
            <div className='topnav-centered'>
              <a class="active" href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#involved">Get Involved</a>
              <a href="#contact">Contact Us</a>
              <a href="#apply">Apply Online</a>
              <a href="#donate">Donate Now</a>
            </div>
          </div>
        </header>        
        <div id="fp-content">
          <div id="stl-example" className='fp-single'>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[-1.2, 0, 0]} />
              <Box2 position={[1.2, 0, 0]} />
              <Box position={[0, 0, 0]} />
            </Canvas>
          </div>
          <div class="wrapper">
            
          </div>
          <div id="mission" className='fp-double'>
            <h1 class="front-page-title">Title for Header</h1>
            <p className="front-page-description">A community vision built on environmental justice.</p>
            
            <div className='fp-double-a'>
              <div className="video-container">
                <YoutubeEmbed embedId="rokGy0huYEA" />
              </div>
            </div>
            <div className='fp-double-b'>
              <h1 class="front-page-title">Title for Header</h1>
              <p className="front-page-description">A community vision built on environmental justice.</p>
            </div>
          </div>
          <div id="about-slide" className='fp-double'>
            <div className='fp-double-a'>
              <h1 class="front-page-title">Problems</h1>
              <p className="front-page-description">A community vision built on environmental justice.</p>
              <hr></hr>
              <div className='issues'>
                <p>
                  <span>
                    Reason #1
                  </span>
                </p>
                <p class="italic">Local residents aren't benefitting from community investments.</p>
              </div>
              <div className='issues'>
                <p>
                  <span>
                    Reason #2
                  </span>
                </p>
                <p class="italic">Opportunists are driving up the cost of living in North Charleston.</p>
                </div>
              <div className='issues'>
                <p>
                  <span>
                    Reason #3
                  </span>
                </p>
                <p class="italic">Affordable housing is limited in North Charleston.</p>
              </div>
            </div>
            <div className='fp-double-b'>
              <h1 class="front-page-title">Solutions</h1>
              <p className="front-page-description">A community vision built on environmental justice.</p>
              <hr></hr>
              <div className='solutions'>
                <p>
                  <span>
                    Reason #1
                  </span>
                </p>
                <p class="italic">Local residents aren't benefitting from community investments.</p>
              </div>
              <div className='solutions'>
                <p>
                  <span>
                    Reason #2
                  </span>
                </p>
                <p class="italic">Opportunists are driving up the cost of living in North Charleston.</p>
              </div>
              <div className='solutions'>
                <p>
                  <span>
                    Reason #3
                  </span>
                </p>
                <p class="italic">Affordable housing is limited in North Charleston.</p>
              </div>
            </div>
          </div>
          <div id="map-slide" className='fp-single'>
            <h1 class="front-page-title">Areas We Serve</h1>
            <p class="front-page-description">Accabee | Chicora/Cherokee | Five Mile | Howard Heights | Liberty Hill | Union Heights | Windsor</p>
            <img id="imgStyle" alt="Map" src="https://gisgeography.com/wp-content/uploads/2020/06/Charleston-Road-Map.jpg" width="304" height="228"></img>
          </div>
          <div id="get-involved" className='fp-single'>
          <h1 class="front-page-title">Get Invovled</h1>
            <p class="front-page-description">Help us create a brighter future.</p>
            <hr></hr>
            <a href=''>
              <button>Donate</button>
            </a>
            <a href=''>
              <button>Apply Now</button>
            </a>
          </div>
        </div>
        <div id="footer">
        <div id="footer-info">
          <h2>Company Name ©</h2>
          <p>P.O. Box 00000, North Charleston, SC 29415</p>
          <p>info@companyname.org</p>
          <p>843-555-5555</p>
        </div>
          <div id="social-icons">
            <a href="https://twitter.com/"><img alt="twitter" src=""></img>
             
            </a>
            <img alt="alignable" src=""></img>
            <a href="https://www.instagram.com/"><img alt="instagram" src=""></img></a>
            <a href="https://www.facebook.com/"><img alt="facebook" src=""></img></a>
          </div>
          <div id="donor">
            <p>Website made possible by a <a target="blank" href="https://www.mrbf.org/">Mary Reynolds Babcock Foundation</a> grant.</p>
          </div>
        </div>
        </body>
    </div>
    
  );
}

export default App;
