import React, {useEffect, useState} from 'react'
import SubmitWork from './SubmitWork'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App'

function Welcome() {
  const [theme, setTheme] = useState(null);
  useEffect(()=> {
      if (window.matchMedia('(prefer-color-scheme: dark)').matches){
          setTheme('dark');
      }
      else{
          setTheme('light');
      }
  }, []);
  // [] at the end makes it run only once
  useEffect(() => {
      if (theme === 'dark'){
          document.documentElement.classList.add('dark');
      }
      else{
          document.documentElement.classList.remove('dark');
      }
  }), [theme];
  //theme dependancy added here. that means everytime we change the theme, this function will be invoked

  const handleThemeSwitch = () => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  //function for theme switch ^
  
  
  return (
   
    
     <>
    
    {/* Theme switch */}
     <button type='button' onClick = {handleThemeSwitch} className = "fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md">
      {theme === 'dark' ? '🌙':'☀️'}
    </button>
     
        {/* left side section (containing link to sign up) */}
         <div className = "sidebar text-slate-200 dark:text-slate-700 fixed lg:left-0 p-2 w-[600px] h-[900px] overflow-y-auto text-left bg-slate-900 dark:bg-gray-100"> {/* bars icon */}
          Welcome to Peer App. You can sign in on the right, if your institution's admin team has added your account details to PeerApp's system.
          <br></br><br></br>
          To use our services <Link className="text-indigo-600">Register here</Link> to create an Admin account!
         </div>
         
      {/* buttons sign in*/}

      <div className= 'dark:bg-zinc-900'>
        <div className='max-w-xl mx-auto w-3/12 h-[900px]'>
           
          <h1 className= 'py-20 text-8xl w-[1200px] text-slate-600 font-semibold dark:text-white rounded-md'> Welcome to PeerApp!</h1> 

           {/* login by google account (not yet implemented) */}
          <Link to="/google-login" className="btn btn-primary rounded-full px-70 py-3 mb-4 h-8 w-3/4 text-white dark:text-[#4285F4] bg-[#4285F4] dark:bg-white hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm px-5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2">
           <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
             Sign in with Google
             
          </Link>

            {/* login by apple account (not yet implemented) */}
          <Link to="/apple-login" className="btn btn-primary rounded-full px-70 py-3 mb-4 h-8 w-3/4 text-white bg-[#050708] dark:bg-white dark:text-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 text-center inline-flex items-center dark:focus:ring-[#A8ADAC]/50  mr-2">
           <svg class="mr-2 -ml-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
          Sign in with Apple
         </Link>

        {/* login by university account */}
          <div class="border-t w-80 mx-4 mb-4 border-t-slate-400 "></div> 
          <Link to="/login" className='btn btn-primary rounded-full inline-block border border-slate-300 dark:border-[#4285F4] dark:bg-[#4285F4] px-70 py-1 mb-4 h-8 w-3/4 text-center bg-slate-100 hover:-translate-y-1 transform transition'>
                   Sign in with University account
          </Link>

          

         </div>
    </div>
         
    {/* bottom menu section */}
    <div className= 'py-5 h-[69px] bg-slate-800 dark:bg-zinc-800 text-gray-300'>
        
        <span className = 'pr-64 pl-64 first-line:inset-y-0 left-0'>Home</span>
        <span className = 'pr-64 pl-64 inset-y-0 right-0'>Terms of Service</span>
        <span className = 'pr-64 pl-64 inset-y-0 right-0'>Privacy Policy</span>
        <p className='text-xs mt-2 text-white '>© COMPEER {new Date().getFullYear()}. All rights reserved
       
       </p>
          </div>
            
     </>
     
    )
}

export default Welcome