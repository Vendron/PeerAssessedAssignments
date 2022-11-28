import React from 'react'
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useRef, useState, useEffect} from 'react';
import StudentView from '../pages/StudentView';
import SignUp from '../pages/SignUp';



function Login() {

  const userRef = useRef();
  const errRef = useRef();

  const [accType, setAccType] = useState('');
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  //data from the login form

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false); //temporary: always sets account login as success, however needs to be altered to check DB first

  useEffect(() => {userRef.current.focus();}, [])
  useEffect(() => {setErrMsg('');}, [accType,user,pwd])
  
  const handleSubmit = async (e) => { e.preventDefault();
  console.log(accType, user, pwd);
  //Debug: displays form data in console

  let userData = {accountType: accType, username: user, pass: pwd}
  
  setSuccess(true);
  //TEMPORARY always allows submit to be valid but this needs to be replaced by a DB check before setting valid

  //creates a session with user login info as data
  sessionStorage.setItem("loginSessionData", JSON.stringify(userData));

  let outputData = sessionStorage.getItem('loginSessionData');
  outputData = JSON.parse(outputData);
  console.log("Session: " + outputData.accountType + " "+ outputData.username + " " + outputData.pass);
  //Dubug: displays session data in console

  setAccType('');
  setUser('');
  setPwd('');
  //clears form data
  }

  return (
    <>
        {/*success variable will determine whether the next page (admin/teacher/student view) will be displayed or if false, display the login page */}
        {success ? (
             <StudentView/>
             
        ):(  
        <>
         <div className = "sidebar text-slate-200 dark:text-slate-700 border-slate-200 fixed lg:left-0 p-2 w-[600px] h-[900px] overflow-y-auto text-left bg-slate-900 dark:bg-zinc-200"> {/* bars icon */}
          Welcome to Peer App. You can sign in on the right, if your institution's admin team has added your account details to PeerApp's system.
          <br></br><br></br>
          To use our services <Link to="/register" className="text-indigo-600">Register here</Link> to create an Admin account!
         </div>
         {/*Code for displaying left box, containing link to sign up page */}
         
      
      <div className= 'dark:bg-zinc-900'>
        <div className='max-w-xl mx-auto w-3/12 h-[900px]'>
          <h1 className= 'py-20 text-7xl w-[1200px] text-slate-600 font-semibold dark:text-white rounded-md'> Login to PeerApp</h1> 
           {/*Title and form display*/}
  

          <form onSubmit={handleSubmit} className="w-full max-w-sm">
    
            <div className="inline-flex pl-32 pb-8 rounded-md" role="group">

              {/*Account type buttons (Student or staff)*/}
              <ul onChange = {(e) => setAccType(e.target.value)} className="grid w-full md:grid-cols-2">
              <li>
                <input type="radio" id="studentAccount" name="account" value="studentAccount" className="hidden peer" required />
                <label for="studentAccount" className="rounded-l-full inline-flex justify-between items-center p-5 w-full h-5 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <div className="block">
                  <div className="w-full text-lg font-semibold">Students</div>              
                </div>
              </label>
            </li>

            <li>
              <input type="radio" id="staffAccount" name="account" value="staffAccount" className="hidden peer" />
              <label for="staffAccount" className=" rounded-r-full inline-flex justify-between items-center p-5 w-full h-5 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="block">
                <div className="w-full text-lg font-semibold">Staff</div>
                </div>  
               </label>
           </li>
            </ul>

            </div>

            {/*Username input*/}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
              </div>
              <div className="md:w-2/3">

            <input
              ref={userRef} 
              onChange = {(e) => setUser(e.target.value)}
             value={user}
              required 
            className="bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="username" type="text" placeholder="Username">
            </input>

            </div>
          </div>

          {/*password input*/}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">    
            </div>
          <div className="md:w-2/3">
            <input 
              onChange = {(e) => setPwd(e.target.value)}
              value={pwd}
              required 
              className="bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="password" type="password" placeholder="Password"> 
            </input>
          </div>
          </div>

          {/*forgotten password link*/}
          <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>

          <Link className="text-sm text-blue-500">
           Forgot Password?
          </Link>
          </div>

        {/*submit button */}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button type="submit" className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                Sign In
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

{/*bottom section menu*/}
<div className= 'py-5 h-[69px] bg-slate-800 dark:bg-zinc-800 text-gray-300'>
        
         <Link to="/" className = 'pr-64 pl-64 first-line:inset-y-0 left-0'>Home</Link>
         <span className = 'pr-64 pl-64 inset-y-0 right-0'>Terms of Service</span>
         <span className = 'pr-64 pl-64 inset-y-0 right-0'>Privacy Policy</span>
         <p className='text-xs mt-2 text-white '>© COMPEER {new Date().getFullYear()}. All rights reserved
        
        </p>
           </div>
</>
)}
</>
    ) 
}

export default Login