import React from 'react'
import './feature.css';
import Scene from './Scene';

const Feature = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
    <sphereBufferGeometry args={[3, 32, 64]} attach="geometry" />
    <meshLambertMaterial attach="material" color={0x58B6ED} wireframe/>
  </mesh>
  )
}

export default Feature

