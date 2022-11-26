
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import * as FAIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { sidebardata} from '../data/sidebardata';

function SideBar() {

   const [sidebar, setSidebar] = useState(false)
   const showSidebar = () => setSidebar(!sidebar)

   
    return (

        <>
            
            <div className = "sidebar fixed lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-slate-300 dark:bg-slate-800"> {/* bars icon */}
            
                <Link to="#" className='menu-bars'>
                    <FAIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>

            <div>
            
            <nav className={sidebar ? 'sidebar fixed lg:left-0 p-2 w-[20px]  bg-gray-500': 'sidebar rounded-md fixed lg:left-0 p-2 w-[300px] bg-slate-300 dark:bg-slate-800'}>
            
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="sidebar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <h1 className = 'font-semibold sidebar fixed lg:left-0 p-5 w-[300px] overflow-y-auto text-center bg-slate-300 dark:bg-slate-800'> Artificial Intelligence Module Tabs
                    {sidebardata.map((item, index) =>{
                        return (
                            <div className = 
                            "p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 hover:-translate-y-2 transform transition">
                            <li key={index} className= {item.cName}>
                            
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            </div>
                        )
                    })}
                    </h1>
                </ul>
            </nav>
            </div>
    
        </>
        
        
       
    )
}

export default SideBar