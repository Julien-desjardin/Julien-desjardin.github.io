import React, { Suspense } from 'react'
import './header.css';
// import ai from '../../assets/ai.png';
import { Canvas } from '@react-three/fiber';
import Space from '../../components/Space/Space';
import {OrbitControls} from '@react-three/drei';
import { MaxEquation } from 'three';

const Header = () => {
  return (
    
    <div className='portfolio__header section__padding' id='home'>
      <div className='portfolio__header-content'>
        <h1 className='gradient__text'>Welcome to the portfolio of Julien Desjardin</h1>
        <p>to receive my CV, thank youi to enter your email address below, in some minutes, you'll gonna receive my cv by email.</p>

        <div className='portfolio__header-content__input'>
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Receive</button>
        </div>

        <div className='portfolio__header-content__people'>
          <p>1500 people requested my CV last 24 hours</p>
        </div>
        
   
        <div className='portfolio__header-image'>
          <div className='canvas' >
            <Canvas camera={{zoom: 4, position: [15,20,15]}}>
              <ambientLight intensity={0.5}/>
              <pointLight position={[35, 35, 0]} intensity={0.4}/>
              <pointLight position={[-35, 35, 0]} intensity={0.4}/>
              <Suspense fallback={null}>
                <Space />
                </Suspense>
                <OrbitControls minDistance={6} maxDistance={7}/>
                 </Canvas>
                 </div>
                 </div>
       
      </div>
    </div>

  )
}

// function Header() {
//   return (
//     <>

//     <div className='portfolio__header section__padding' id='home'>
//       <div className='portfolio__header-content'>
//         <h1 className='gradient__text'>Welcome to the portfolio of Julien Desjardin</h1>
//         <p>to receive my CV, thank youi to enter your email address below, in some minutes, you'll gonna receive my cv by email.</p>

//         <div className='portfolio__header-content__input'>
//           <input type="email" placeholder='Your Email Address'/>
//           <button type='button'>Receive</button>
//         </div>

//         <div className='portfolio__header-content__people'>
//           <p>1500 people requested my CV last 24 hours</p>
//         </div>
        
   
//         <div className='portfolio__header-image'>
//         <div style={{width: "100%", height: "80vh"}}>
//     <Canvas camera={{zoom: 5, position: [15,20,15]}}>
//       <ambientLight intensity={0.5}/>

    
//       <pointLight position={[35, 35, 0]} intensity={0.4}/>
//       <pointLight position={[-35, 35, 0]} intensity={0.4}/>
//       <Suspense fallback={null}>
//         <Space />
//         </Suspense>
//         <OrbitControls maxZoom={10}/>
        
            
//           </Canvas>
//     </div>
//         </div>
        
//       </div>
//     </div>

//     </>
//   )
// }

export default Header


// Model Information:
// * title:	A Windy Day
// * source:	https://sketchfab.com/3d-models/a-windy-day-fb78f4cc938144e6902dd5cff354d525
// * author:	Loïc Norgeot (https://sketchfab.com/norgeotloic)

// Model License:
// * license type:	CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
// * requirements:	Author must be credited. Commercial use is allowed.

// If you use this 3D model in your project be sure to copy paste this credit wherever you share it:
// This work is based on "A Windy Day" (https://sketchfab.com/3d-models/a-windy-day-fb78f4cc938144e6902dd5cff354d525) by Loïc Norgeot (https://sketchfab.com/norgeotloic) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)