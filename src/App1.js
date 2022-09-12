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

export const Model = ({url}) => {
  const geom = useLoader(STLLoader, url);

  const ref = useRef();
  const {camera} = useThree();
  useEffect(() => {
      camera.lookAt(ref.current.position);
  });

  return (
      <>
          <mesh ref={ref}>
              <primitive object={geom} attach="geometry"/>
              <meshStandardMaterial color={"orange"}/>
          </mesh>
          <ambientLight/>
          <pointLight position={[10, 10, 10]}/>
      </>
  );
};
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
        <header className="App-header">
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

        <body>
          <div className='slide'>
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
          <div className='slide'>
            <div className="video-container">
              <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
          </div>
          <div className='slide'>
            <img id="imgStyle" src="https://gisgeography.com/wp-content/uploads/2020/06/Charleston-Road-Map.jpg" alt="Map" width="304" height="228"></img>
          </div>
          <div className='slide'>
          <Canvas camera={{ position: [0, 10, 100] }}>
          <Suspense fallback={null}>
               
          </Suspense>
           <OrbitControls /> 
     </Canvas>
          </div>
          <div className='container'>
          </div>
          <div className="slide dark"></div>
        </body>
      </div>
    
  );
}

export default App;
