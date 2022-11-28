import React from 'react'
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useRef, useState, useEffect} from 'react';
import StudentView from '../pages/StudentView';
import DropDownSearch from '../components/DropDownSearch';

import emailjs from '@emailjs/browser';



function SignUp() {


  
    //const emailRef = useRef();
    const userRef = useRef();
    const errRef = useRef();
  
    const [institution, setInstitution] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [repwd, setRePwd] = useState('');
    //data from the login form
  
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false); //temporary: always sets account login as success, however needs to be altered to check DB first

    
  
    useEffect(() => {userRef.current.focus();}, [])
    useEffect(() => {setErrMsg('');}, [user,pwd])
    
    const handleSubmit = async (e) => { e.preventDefault();

      {/* gmail service */}
      emailjs.sendForm('service_awsfb8e', 'template_n35f2mi', e.target, 'jBQKDXy824tIJnH8b') //form.current
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    console.log(user, pwd, institution);
    //Debug: displays form data in console
  
    let userData = {username: user, pass: pwd}
    
    setSuccess(true);

    setInstitution('');
    setUser('');
    setPwd('');
    //clears form data
  }

    return (
        <>
        <div className = "sidebar text-slate-200 dark:text-slate-700 border-slate-200 fixed lg:left-0 p-2 w-[600px] h-[900px] overflow-y-auto text-left bg-slate-900 dark:bg-zinc-200"> {/* bars icon */}
          Welcome to Peer App. You can sign in on the right, if your institution's admin team has added your account details to PeerApp's system.
          <br></br><br></br>
          To use our services <Link to="/register" className="text-indigo-600">Register here</Link> to create an Admin account!
         </div>
         {/*Code for displaying left box, containing link to sign up page */}
        {/*success variable will determine whether the next page (admin/teacher/student view) will be displayed or if false, display the login page */}

        {success ? (
             
             <div className= 'dark:bg-zinc-900'>
              <div className='max-w-xl mx-auto w-3/12 h-[900px]'>
                <h1 className= 'py-20 text-6xl w-[1200px] text-slate-600 font-semibold dark:text-white rounded-md'>Verify your PeerApp account</h1> 
                {/*Title for account confirm*/}
                <div className= 'bg-indigo-100 ml-20 px-5 mt-32 rounded text-center py-10 border-2 border-indigo-900'>
                  We've sent a verification email to: {email}
                  <br></br><br></br>
                  <button className ="px-5 border-2 rounded border-indigo-900 bg-indigo-200 hover:bg-indigo-300 ">Resend</button>
                
                </div>
              </div>   
           </div>           
             
        ):( 
        <>
                
      <div className= 'dark:bg-zinc-900'>
        <div className='max-w-xl mx-auto w-3/12 h-[900px]'>
          <h1 className= 'py-20 text-7xl w-[1200px] text-slate-600 font-semibold dark:text-white rounded-md'> Register to PeerApp</h1> 
           {/*Title and form display*/}
  

          <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="md:w-0 ml-32">
          
          
          Institution
          {/*email*/}
          <div className=" md:flex md:items-center">
            
              <div className="md:w-1/3">
              <DropDownSearch setInstitution ={setInstitution}></DropDownSearch>
              </div>
              
              
              <div className=" md:w-1/3 mt-10">
            Email
                <input
                  onChange = {(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  required 
                  className=" bg-slate-100 appearance-none border-2 border-slate-200 rounded w-100 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="email" type="text" placeholder="E-mail">
            
                </input>
              </div>
            </div>
            <div className= "mt-2 pl-40">  
          </div> 
          </div>
        
            {/*Username input*/}
            <div className="md:flex md:items-center mb-6">
              
              <div className="md:w-1/3">
                
              </div>
              <div className="md:w-2/3"> Username
              <div className = "flex flex-wrap z-50">
             
              </div>
            <input
              ref={userRef} 
              onChange = {(e) => setUser(e.target.value)}
             value={user}
             name="username"
              required 
            className="bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="username" type="text" placeholder="Username">
            </input>

            </div>
          </div>

          {/*password input*/}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">    
            </div>
          <div className="md:w-2/3"> Password
            <input 
              onChange = {(e) => setPwd(e.target.value)}
              value={pwd}
              required 
              className="bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="password" type="password" placeholder="Password"> 
            </input>
          </div>
          </div>
           {/*re password input*/}
           <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">    
            </div>
          <div className="md:w-2/3">
            <input 
              onChange = {(e) => setRePwd(e.target.value)}
              value={repwd}
              required 
              className="bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="password" type="password" placeholder="Re-Password"> 
            </input>
          </div>
          </div>
          
          

        {/*submit button */}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button type="submit" className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                Create Account
                </button>
              </div>   
            </div>
          </form>

    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    </section>
    {/* Error Message ^ */}

  </div>
</div>

</>
)}
{/*bottom section menu*/}
  <div className= 'py-5 h-[69px] bg-slate-800 dark:bg-zinc-800 text-gray-300'>
        
         <Link to="/" className = 'pr-64 pl-64 first-line:inset-y-0 left-0'>Home</Link>
         <span className = 'pr-64 pl-64 inset-y-0 right-0'>Terms of Service</span>
         <span className = 'pr-64 pl-64 inset-y-0 right-0'>Privacy Policy</span>
         <p className='text-xs mt-2 text-white '>© COMPEER {new Date().getFullYear()}. All rights reserved
        
        </p>
 </div>
</>
    )
}
export default SignUp