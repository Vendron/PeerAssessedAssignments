import React from 'react'

import WorkItem from './WorkItem'
import works from '../data/works'

function Works() {
    return (
        <div className = 'py-12 dark:bg-slate-900'>
          {
            }
            <div className='pr-80 pl-80 grid grid-cols-1 gap-3'>
                {works.map(work => (
                    <WorkItem key={work.title}
                              imgUrl={work.imgUrl}
                              title={work.title}
                              tech={work.tech}
                              workUrl={work.workUrl}
                              dueDate={work.dueDate}
                              setDate={work.setDate}>
                             
                              

                    </WorkItem>
                ))}
            </div>
        </div>
    )
}
export default Works