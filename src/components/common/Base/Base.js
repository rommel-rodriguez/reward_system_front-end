import React from 'react'; 
import UpperBar from '../UpperBar/UpperBar';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';

function Base({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        console.log(`Toggling the sidebar: ${sidebarOpen}`)
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="App" >
            <UpperBar handleMenuIconClick={handleToggleSidebar}></UpperBar>
            <SideBar isOpen={sidebarOpen}></SideBar>
            {children}
        </div>
    );

}

export default Base;