import React from "react";
import './Header.css';
import logotop from '../../Assest/logo.jpg';
import Mybtn from '../Commondesign/Btn';
import { Link } from "react-router-dom";

class Navbars extends React.Component{
    render(){
        return(
             <header>
                <div className="logo">
                <div className="logoimgleft"> <img src={logotop} alt="logo"/></div>
                 <div className="toggle"><i class="bi bi-list"></i></div>
                </div>
                <div className="navbar">
                    <ul>
                        <li><Link to={"/"} >Home</Link></li>
                        {/*<li><Link to={"/About"}>About</Link></li>
                        <li><link to={"/Services"}>Services</link></li>*/}
                        <li><Link to={"/Feature"}>Features</Link></li>
                         <li><Link to="/Pricing">Pricing</Link></li>
                        <li className="Supernav"><a href="#">Resources</a>
                          <ul className="Subnav">
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Bolg</a></li>
                            <li><a href="#">Help Center</a></li>
                          </ul>
                        </li>
                      
                        <li><Link to={"/Contactpage"}>Contact</Link></li>
                        

                    </ul>
                </div>
                <div className="contentright">
                    <ul>
                        <li><a href="#"><i class="bi bi-moon"></i></a></li>
                        <li><button className="btn">Get Started</button></li>

                    </ul>
                </div>
             </header>
        )
    }
};
export default Navbars;