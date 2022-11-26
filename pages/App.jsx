import React, {useEffect, useState} from 'react'
import HeroSection from '../components/HeroSection'
import Works from '../components/Works';
import SideBar from '../components/SideBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SubmitWork from './SubmitWork';
import Notifications from './Notifications';
import Welcome from './Welcome';
import StudentView from './StudentView';
import Login from './Login';

function App() {
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
    <button type='button' onClick = {handleThemeSwitch} className = "fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md">
      {theme === 'dark' ? '🌙':'☀️'}
    </button>

        <>    
          <Routes>
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/login/*' element={<Login/>} />
            <Route path='/submitwork' element={<SubmitWork />} />
            <Route path='/studentview' element={<StudentView />} />
            <Route path='/' element={<Welcome />} />
          </Routes> 
          {/*Contains all the routes to different pages by default we stick to / which directs us to the welcome page*/}
        </> 
    </>
  )
}

export default App
