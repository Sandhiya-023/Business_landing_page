import React from 'react';
import './Home.css';
import Pricingpart from '../Commondesign/Pricingpart';
import Btn from '../Commondesign/Btn';
export default function Pricingsec() {
  return (
    <section className='pricing'>
      <div className="heading">
        <h4>Pricing</h4>
        <h1>Simple, transparent pricing</h1>
        <p>Choose the plan that fits your needs. All plans include a 14-day free trial.</p>
      </div>
      {/*<div className='analyse'>
        <div className='monthbtn'>
          <h5>Monthly</h5>
          <i class="bi bi-circle"></i>
        <div>
            <p>Yearly <span>save 20%</span></p>
        </div>
        </div>
      </div>*/}
      <div className='box'>
      <Pricingpart
        head={<h3>Starter</h3>}
        subhead={<p>Perfect for small teams getting started</p>}
        number={<h1>$29 <span>/month</span></h1>}
        bill={<p>Billed monthly</p>}
        list={
        <ul>
         <li><i class="bi bi-check-lg"></i>Up to 5 team members</li>
         <li><i class="bi bi-check-lg"></i>Basic analytics</li>
         <li><i class="bi bi-check-lg"></i>10 GB storage</li>
         <li><i class="bi bi-x"></i>Up to 5 team members</li>
         <li><i class="bi bi-x"></i>Up to 5 team members</li>
         <li><i class="bi bi-x"></i>Up to 5 team members</li>
         </ul>
        }
        button={<Btn Mybtn="Get Started" />}/>
        <div className='button'>
          <Btn Mybtn="Most Popular"/>
        <Pricingpart
        head={<h3>Pro</h3>}
        subhead={<p>For growing teams that need more</p>}
        number={<h1>$79 <span>/month</span></h1>}
        bill={<p>Billed monthly</p>}
        list={
        <ul>
         <li><i class="bi bi-check-lg"></i>Up to 20 team members</li>
         <li><i class="bi bi-check-lg"></i>Advanced analytics</li>
         <li><i class="bi bi-check-lg"></i>100 GB storage</li>
         <li><i class="bi bi-check-lg"></i>Priority support</li>
         <li><i class="bi bi-check-lg"></i>API access</li>
         <li><i class="bi bi-x"></i>Custom integration</li>
         </ul>
        }
        button={<Btn Mybtn="Get Started" />}/>
        </div>
        <Pricingpart
        head={<h3>Enterprise</h3>}
        subhead={<p>For large organizations</p>}
        number={<h1>$199 <span>/month</span></h1>}
        bill={<p>Billed monthly</p>}
        list={
        <ul>
         <li><i class="bi bi-check-lg"></i>Unlimited team members</li>
         <li><i class="bi bi-check-lg"></i>Custom analytics</li>
         <li><i class="bi bi-check-lg"></i>Unlimited storage</li>
          <li><i class="bi bi-check-lg"></i>24/7 dedicated support</li>
           <li><i class="bi bi-check-lg"></i>API access</li>
            <li><i class="bi bi-check-lg"></i>Custom integrations</li>
         
         
         </ul>
        }
        button={<Btn Mybtn="Get Started" />}/>
        </div>
         {/*<div className="head">
           <h3>Starter</h3>
           {}
         </div>
         <div className='subhead'>
          <p>Perfect for small teams getting started</p>
         </div>
         <div className='number'>
          <h1>$29<span>/month</span></h1>
         </div>
         <div className='bill'>
          <p>Billed monthly</p>
         </div>
         <div className="list">
          <ul>
            <li><i class="bi bi-check-lg"></i>Up to 5 team members</li>
            <li><i class="bi bi-check-lg"></i></i>Basic analytics</li>
            <li><i class="bi bi-check-lg"></i>10 GB storage</li>
            <li><i class="bi bi-x"></i>Up to 5 team members</li>
            <li><i class="bi bi-x"></i>Up to 5 team members</li>
            <li><i class="bi bi-x"></i>Up to 5 team members</li>
          </ul>
           < Btn Mybtn="Get started"/>
         </div>
    
      </div>*/}
    </section>
  )
}
