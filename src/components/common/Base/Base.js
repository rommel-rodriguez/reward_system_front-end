import React from 'react'; 
import UpperBar from '../UpperBar/UpperBar';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';

function Base({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    console.info("Is sidebar open?: ", sidebarOpen);

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        // <IdentityProvider>
            <div className="App" >
                <UpperBar handleMenuIconClick={handleToggleSidebar}></UpperBar>
                <SideBar isOpen={sidebarOpen} toggleDrawerOpen={handleToggleSidebar}></SideBar>
                {children}
            </div>
        // </IdentityProvider>
    );

}

export default Base;