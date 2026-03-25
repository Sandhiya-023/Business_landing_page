import React from 'react'
import './Common.css';
export default function Featurpart({featureIcon,featureTitle,featurePara}) {
  return (
    <div>
            <div className="featurebox">
         <div className="featureicon">
           {featureIcon}
         </div>
         <div className="featurecontent">
          <h3>{featureTitle}</h3>
          <p>{featurePara}</p>
         </div>
        </div>
        
    </div>
  )
}
