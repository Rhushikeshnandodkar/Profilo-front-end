import React from 'react'
import gridImage from '../../assets/grid.svg'
import Navbar from '../Molecules/Navbar'
import { LandingpageStyle } from './Common.style'
function Landingpage() {
  return (
    <div>
        <Navbar/>

      <LandingpageStyle>
      <div className="header-section">
        <div className="background-image">
          <img src={gridImage} alt="" />
        </div>
        <div className="text-section">
          <h1>Effortlessly Sync Your Job Profile Across Multiple Platforms</h1>
          <p>Tired of filling out the same information on every job portal  Sync your profile across multiple platforms with a single click</p>
          <button className="btn">See Demo</button>
        </div>
      </div>
      </LandingpageStyle>


    </div>
  )
}

export default Landingpage
