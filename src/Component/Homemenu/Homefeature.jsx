import React from 'react'
import './Home.css';
import FeatureBox from '../Commondesign/FeatureBox';
import Featurpart from '../Commondesign/Featurpart';
export default function Homefeature() {
  // const featureInfo =[
  //   {id:1, ficon:`<i class="bi bi-lightning-charge"/>`, ftitle:"ganapathi", fpara:"asdfghjk"},
  //   {},
  //   {}]

  return (
    <section className='homefeature'>
       
      <div className="heading">
        <h4>Feature</h4>
        <h1>Everything you need to ship faster</h1>
        <p>Powerful tools designed to streamline your workflow and boost team productivity.</p>
      </div>
      {/*<FeatureBox Featuretitle="Workflow Automation" Featurepara="Automate repetitive tasks and focus on what matters. Set up triggers, actions, and conditions without code."/>*/}
      <div className="features">

      <Featurpart featureIcon={<i class="bi bi-lightning-charge"/>} featureTitle={" Workflow Automations"} featurePara={"Automate repetitive tasks and focus on what matters.Set up triggers, actions, and conditions without code."}/>
      <Featurpart featureIcon={ <i class="bi bi-people-fill"></i>} featureTitle={" Real-time Collaboration"} featurePara={"Work together seamlessly with live cursors, comments, and instant sync across all devices."}/>
      <Featurpart featureIcon={ <i class="bi bi-bar-chart-fill"></i>} featureTitle={"Advanced Analytics"} featurePara={"Get deep insights into your team's performance with customizable dashboards and reports."}/>
      <Featurpart featureIcon={<i class="bi bi-shield-fill-check"></i>} featureTitle={"Enterprise Security"} featurePara={"Bank-grade encryption, SSO, audit logs, and compliance certifications for peace of mind."}/>
       <Featurpart featureIcon={ <i class="bi bi-puzzle-fill"></i>} featureTitle={"API & Integrations"} featurePara={"Connect with 50+ tools you already use. REST API and webhooks for custom integrations."}/>
        <Featurpart featureIcon={ <i class="bi bi-clock-fill"></i>} featureTitle={"24/7 Support"} featurePara={"Get help when you need it with our dedicated support team and comprehensive documentation."}/>
    {/* {
      featureInfo.map((F)=>{
        <Featurpart key={F.id} ficon={F.ficon} ></Featurpart>
      })
    } */}

{/* 

        <div className="featurebox">
         <div className="featureicon">
           <i class="bi bi-lightning-charge"/>
         </div>
         <div className="featurecontent">
          <h3> Workflow Automations</h3>
          <p>Automate repetitive tasks and focus on what matters. 
            Set up triggers, actions, and conditions without code.</p>
         </div>
        </div>
        <div className="featurebox">
         <div className="featureicon">
           <i class="bi bi-people-fill"></i>
         </div>
         <div className="featurecontent">
          <h3> Real-time Collaboration</h3>
          <p>Work together seamlessly with live cursors, comments, and instant sync across all devices.</p>
         </div>
        </div>
        <div className="featurebox">
         <div className="featureicon">
           <i class="bi bi-bar-chart-fill"></i>
         </div>
         <div className="featurecontent">
          <h3> Advanced Analytics</h3>
          <p>Get deep insights into your team's performance with customizable dashboards and reports.</p>
         </div>
         </div>
        <div className="featurebox">
         <div className="featureicon">
          <i class="bi bi-shield-fill-check"></i>
         </div>
         <div className="featurecontent">
          <h3>Enterprise Security</h3>
          <p>Enterprise Security</p>
         </div>
        </div>
        <div className="featurebox">
         <div className="featureicon">
          <i class="bi bi-puzzle-fill"></i>
         </div>
         <div className="featurecontent">
          <h3>API & Integrations</h3>
          <p>Connect with 50+ tools you already use. REST API and webhooks for custom integrations.</p>
         </div>
        </div>
        <div className="featurebox">
         <div className="featureicon">
         <i class="bi bi-clock-fill"></i>
         </div>
         <div className="featurecontent">
          <h3>24/7 Support</h3>
          <p>Get help when you need it with our dedicated support team and comprehensive documentation.</p>
         </div>
        </div>*/}
      </div> 
    </section>
        
  )
}
