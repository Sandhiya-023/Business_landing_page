import React from 'react'
import './Home.css'
import Addimg from "../../Assest/banner.avif";
export default function Homeadsec() {
  return (
    <section className='homeadsec'>
      <div className="countpart">
        <div className="countbox">
          <h2>10k+</h2>
          <p>Active users</p>
        </div>
        <div className="countbox">
          <h2>99.9%</h2>
          <p>Uptime SLA</p>
        </div>
        <div className="countbox">
          <h2>50+</h2>
          <p>Integrations</p>
        </div>
        <div className="countbox">
          <h2>4.9★</h2>
          <p>User ratings</p>
        </div>
      </div>
      <div className="addimg">
        <img src={Addimg} alt='imgleft'/>
      </div>

    </section>
  )
}
