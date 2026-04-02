import React from "react";
import './Contact.css';
import { useState } from "react";
import Btn from "../Commondesign/Btn.jsx";
import Feature from '../Featuremenu/Feature.jsx';

export default  function Contactpage(){
   const [formData, setFormData] = useState({
  fname: "",
  lname: "",
  email: "",
  subject: "",
  message: ""
});
    const [errors, setErrors] = useState({});

   const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value
  });
  setErrors({
    ...errors,
    [name]:""
  });
};
const handleSubmit=(e)=>{
    e.preventDefault();

       if(!formData.fname){
        alert("!enter firstname.......!");
      /* newErrors.fname = "First name is required";*/
       }
       if(!formData.lname){
        alert("!Enter lastname..........!");
         /*newErrors.lname = "Last name is required";*/
       }
        if(!formData.email){
        alert("!Enter email....!" );
        /*newErrors.email = "email is required";*/
       }
       if(!formData.subject){
        alert("!Select any one.....!");
        /*newErrors.subject = "select a subject";*/
       }
        if(!formData.message){
        alert("!Message is not filled why?......")
         /* newErrors.message = "Message is required";*/
       }
        console.log(formData);
        alert("Send a message is sucessful...happy ");

        setFormData({
              fname:"",
              lname:"",
              email:"",
              subject:"",
              message:""
            });
       /*if (Object.keys(newErrors).length === 0) {
    console.log(formData);
    alert("Form submitted successfully");
  }*/     
};
 return(  
    <section className="Contactsec2">
            <div className="heading">
                <h1>Get in Touch</h1>
                <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
            <div className="stn">
            <div className="leftsec1">
                <h1>Contact Information</h1>
                <p>Fill out the form and our team will get back to you within 24 hours.</p>
             <div className="contactinfo2">
             <div className="box">
                <div className="icons2">
                    <i class="bi bi-envelope-fill"></i>
                </div>
                <div className="content2">
                    <h3>Email</h3>
                    <p>hello@saasify.com</p>
                    <p>support@saasify.com</p>
                </div>
             </div>
             <div className="box">
                <div className="icons2">
                    <i class="bi bi-telephone-fill"></i>
                </div>
                <div className="content2">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri 9am-6pm EST</p>
                </div>
             </div>
             <div className="box">
                <div className="icons2">
                    <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div className="content2">
                    <h3>Office</h3>
                    <p>123 Innovation Drive</p>
                    <p>San Francisco, CA 94107</p>
                    <p>United States</p>
                </div>
             </div>
             <div className="follow">
                <h2>Follow us</h2>
                <div className="icon">
                 <i class="bi bi-twitter-x"></i>
                </div>
                <div className="icon">
                 <i class="bi bi-github"></i>
                </div>
                <div className="icon">
                 <i class="bi bi-linkedin"></i>
                </div>
                </div>
                
            </div>
             </div>
                  <div className="userinput">
                      <h1>Send us a Message </h1>
                    <form onSubmit={handleSubmit}>
                     <div className="name">
                    <div>
                         <label htmlFor="name">First Name</label>
                        <input type="text" name="fname" value={formData.fname}onChange={handleChange}/>
                        {errors.fname && <p className="error">{errors.fname}</p>}
                    </div>
                    <div>
                        <label htmlFor="name">Last Name</label>
                        <input type="text" name="lname" value={formData.lname}onChange={handleChange} />
                        {/*{errors.lname && <p className="error">{errors.lname}</p>}*/}
                    </div>
                    </div>
                    <div>
                          <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={formData.email}onChange={handleChange}/>
                        {/*{errors.email && <p className="error">{errors.email}</p>}*/}
                    </div>
                    <div>
                        <label htmlFor="subject">Subject</label>
                        <select name="subject" value={formData.subject} onChange={handleChange}>
                          <option value="">Select a Topic</option> 
                          <option value="sub">Saab</option>
                          <option value="sub">Sales inquiry</option>
                          <option value="sub">Technical Support</option>
                          <option value="sub">Other</option>
                        </select>
                    </div>
                    <div>
                      <label htmlFor="message">Message</label>
                        <textarea name="message" value={formData.message}onChange={handleChange}></textarea>
                        {/*{errors.message && <p className="error">{errors.message}</p>}*/}
                    </div>
                    <Btn Mybtn="Send as a message"/>
                    </form>
                 </div>* 
               </div>
                <hr></hr>
               <div className="feature">
      <div className="heading">
        <h1>Frequently Asked Questions</h1>
        <p>Can't find what you're looking for? Reach out to our support team.</p>
      </div>
      <div className="question">
        <div>
          <h2>How do I get started with SaaSify?</h2>
          <p>Simply sign up for a free 14-day trial. No credit card required. You'll have access to all features during the trial period.</p>
        </div>
        <div>
          <h2>What payment methods do you accept?</h2>
          <p>We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for enterprise customers.</p>
        </div>
        <div>
          <h2>Can I cancel my subscription anytime?</h2>
          <p>Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period</p>
        </div>
        <div>
          <h2>Do you offer refunds?</h2>
          <p>We offer a 30-day money-back guarantee. If you're not satisfied with SaaSify, contact us within 30 days for a full refund.</p>
        </div>
      </div>
    </div>
                
           </section>
    )
}