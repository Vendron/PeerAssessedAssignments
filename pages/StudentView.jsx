import React, {useEffect, useState} from 'react'
import HeroSection from '../components/HeroSection'
import SideBar from '../components/SideBar';
import SubmitWork from './SubmitWork';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function StudentView() {
    const [toggle, setToggle] = useState(true);
    const [isShown, setIsShown] = useState(false);

    const toggleClass = <SubmitWork/>;


    return(
        <>

          <div className = 'font-Dosis bg:white dark:bg-slate-900'>
            <div className='max-w-5xl mx-auto w-11/12'>
              <HeroSection></HeroSection> 
              <>
                <SideBar> </SideBar>
              </>
            </div>
        </div>
        <Routes> <Route path='/submitwork' element={<SubmitWork />} /></Routes>
        {/* adds a route to redirect to submitwork page */}
      </>
    )

    
}
export default StudentView