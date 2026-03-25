import React from 'react'
import './Home.css'
import Btn from '../Commondesign/Btn'
import Btn2 from '../Commondesign/Btn2'
export default function Herosection() {
  return (
    <section className='herosection'>
       <div className="herocontent">
        <h4>Now with Ai-Powered automation</h4>
        <h1>Build better Products,Faster than ever</h1>
        <p>The all-in-one platform that helps teams ship quality software.
           Automate workflows, collaborate seamlessly, and scale with confidence.
        </p>
        
        <Btn Mybtn="Free trial ->"/>
        <Btn2 Mybtn="Watch demo"/>

       </div>
    </section>
  )
}
