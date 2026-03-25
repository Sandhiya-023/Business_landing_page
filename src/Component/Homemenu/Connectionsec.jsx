import React from 'react'
import './Home.css';
import Btn from "../Commondesign/Btn.jsx";
import Btn2 from "../Commondesign/Btn2.jsx";
export default function Connectionsec() {
  return (
    <section className='connectionsec'>
        <div className="connection">
          <h1>Ready to transform your workflow?</h1>
          <p>Join thousands of teams already using SaaSify to build better products, faster.</p>
          <Btn2 Mybtn={"Start Free Trial"}/>
          <button>Contact Sales</button>
        </div>
    </section>
  )
}
