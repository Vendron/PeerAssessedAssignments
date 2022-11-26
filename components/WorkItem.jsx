import React from 'react'
//import { MdTableChart } from 'react-icons/md'

function WorkItem({imgUrl, title, tech, workUrl, dueDate, setDate}) {
    return (

        <a href={workUrl} target="_blank" rel="noreferrer" className='bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden w-full'>
            <img src={imgUrl} alt={title} className="w-full h-3 md:h-5 object-cover"/>
           <div className='text-gray-600 dark:text-gray-300 p-2 w-full'>
                <h3 className ='text-lg md:text-xl mb-2 md:mb-1 font-semibold'>{title}</h3>
                <p className=' text-right text-base'>Set: {setDate}</p>
            
            <p className='flex flex-initial gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                {tech.map(item=> (
                    <span key={item} className='inline-block px-2 py-3 bg-slate-100 dark:bg-slate-900 hover:-translate-y-1 transform transition'>
                        {item}
                    </span>
                ))}
                <p className='text-right text-gray-600 dark:text-gray-300 p-2 w-full text-base '>Due: {dueDate}</p>
                
            </p>
            
           </div>
        </a>
    )
}
export default WorkItem