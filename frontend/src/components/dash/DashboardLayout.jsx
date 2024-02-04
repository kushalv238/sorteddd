import React from 'react'
import { Outlet } from 'react-router-dom'
import DashLeftPanel from './DashLeftPanel'

import { useEffect, useState } from 'react'

import './../../stylesheets/dash.css'

import scrollToTop from '../../utility/scrollToTop'

const DashboardLayout = () => {
    const [pathname, setPathname] = useState(0)

    useEffect(()=>{
        let path = 0
        if(window.location.pathname === '/dash/vote') path = 1;
        else if(window.location.pathname === '/dash/guidelines') path = 2;

        setPathname(path)
        
        scrollToTop()
    }, [pathname])

    return (
        <div className='flex flex-wrap relative entireDashPage'>
            <DashLeftPanel pathname={pathname} setPathname={setPathname} />

            {/* panel spacer */}
            <div className='w-1/5 h-screen'></div>

            <Outlet />
        </div>
    )
}

export default DashboardLayout