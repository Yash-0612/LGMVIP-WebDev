import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const App = () => (
  <main role="main" className="container p-5 my-3 bg-success text-black">
    <div className="clearfix"><br/><br/><br/></div>
    <div className="jumbotron">
        <h2>Cameras and audio</h2>
        <p>In 1936, Olympus introduced its first camera, the Semi-Olympus I, fitted with the first Zuiko-branded lens. The Olympus Chrome Six was a series of folding cameras made by Takachiho, and later Olympus, from 1948 to 1956, for 6×4.5 cm or 6×6 cm exposures on 120 film.</p>
        <h3>Medical and surgical</h3>
        <p>Olympus manufactures endoscopic, ultrasound, electrocautery, endotherapy, and cleaning and disinfection equipment. The first flexible Endoscope in the world was co-developed and manufactured by Olympus in Tokyo. On 28 September 2012, Olympus and Sony announced that the two companies will establish a joint venture to develop new surgical endoscopes with 4K resolution (or higher) and 3D capability.</p>
        <h3>Industrial</h3>
        <p>Olympus manufactures and sells industrial scanners, flaw detectors, probes and transducers, thickness gages, digital cameras, image analysis software, industrial videoscopes, fiberscopes, light sources, XRF and XRD analyzers, and high-speed video cameras.</p>
        <p>
          <Link target="_blank"><Button bsStyle="danger">Overview &raquo;</Button></Link>
        </p>
    </div>
  </main>
)

export default App
