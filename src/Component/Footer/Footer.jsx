import React from 'react'
import './Footer.css';
import Btn from '../Commondesign/Btn';
export default function Footer() {
  return (
    <footer>
         <div className="footerbox">
            <h1>Saas..</h1>
            <p>The modern platform for scaling your business</p>
            <div className="icons">
                <ul>
                    <li><a href='#'><i class="bi bi-instagram"></i></a></li>
                   <li><a href='#'><i class="bi bi-twitter-x"></i></a></li>
                   <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                 </ul>
            </div>
        </div>
        <div className="footerbox links">
            <h2>Product</h2>
            <div className="icons">
                <ul>
                    <li><a href='#'>Features</a></li>
                   <li><a href='#'>Pricing</a></li>
                   <li><a href="#">Integrations</a></li>
                   <li><a href="#">Changelogt</a></li>
                 </ul>
            </div>
        </div>
        <div className="footerbox links">
            <h2>Company</h2>
            <div className="icons">
                <ul>
                    <li><a href='#'>About</a></li>
                   <li><a href='#'>Blog</a></li>
                   <li><a href="#">Careers</a></li>
                   <li><a href="#">Contact</a></li>
                 </ul>
            </div>
        </div>
        <div className="footerbox links">
            <h2>Legal</h2>
            
            <div className="icons">
                <ul>
                    <li><a href='#'>Privacy</a></li>
                   <li><a href='#'>Terms</a></li>
                   <li><a href="#">Security</a></li>
                   <li><a href="#">Contact</a></li>
                 </ul>
            </div>
        </div>
         <div className="footerbox links">
            <h2>Stay updated</h2>
            <p>Get the latest news and updates delivered to your inbox.</p>
            <div className="icons">
                {/*<ul>
                    <li><a href='#'>Privacy</a></li>
                   <li><a href='#'>Terms</a></li>
                   <li><a href="#">Security</a></li>
                   <li><a href="#">Contact</a></li>
                 </ul>*/}
                 <input type='email'name="email"/>
                <Btn Mybtn="Subscribe"/>
            </div>
        </div>
      

    </footer>
  )
}
