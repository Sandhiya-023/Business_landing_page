import React from 'react'
import './Common.css';
import Btn from './Btn';
export default function pricingpart({head,subhead,number,bill,list,button}) {
  return (
        <div className='box'>
        <div className="pricingbox">
            <div className="head">
             {/*<h3>Starter</h3>*/}
                {head}
            </div>
            <div className='subhead'>
             {/*<p>Perfect for small teams getting started</p>*/}
             {subhead}
            </div>
            <div className='number'>
             {/*<h1>$29<span>/month</span></h1>*/}
             {number}
            </div>
            <div className='bill'>
             {/*<p>Billed monthly</p>*/}
             {bill}
            </div>
            <div className="list">
             {/*<ul>
               <li><i class="bi bi-check-lg"></i>Up to 5 team members</li>
               <li><i class="bi bi-check-lg"></i>Basic analytics</li>
               <li><i class="bi bi-check-lg"></i>10 GB storage</li>
               <li><i class="bi bi-x"></i>Up to 5 team members</li>
               <li><i class="bi bi-x"></i>Up to 5 team members</li>
               <li><i class="bi bi-x"></i>Up to 5 team members</li>
             </ul>*/}
             {list}
             {button}
              {/*<Btn Mybtn="Get started"/>*/}
            </div>
        </div>
        </div>
        
  )
}
