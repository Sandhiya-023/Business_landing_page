import React from 'react'
import Herosection from "./Herosection";
import Homeadsec from './Homeadsec';
import Pricingsec from './Pricingsec';
import Homefeature from "./Homefeature"; 
import Testtemonialsec from './Testtemonialsec';
import Connectionsec from './Connectionsec';

export default function Home() {
  return (
    <div>
      <Herosection/>
      <Homeadsec/>
      <Homefeature/>
       <Pricingsec/>
       <Testtemonialsec/>
       <Connectionsec/>
    </div> 
    )
}
