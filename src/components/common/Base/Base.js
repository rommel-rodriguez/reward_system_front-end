import React from 'react'; 
import UpperBar from '../UpperBar/UpperBar';
import SideBar from '../SideBar/SideBar';

function Base({children}) {
    
    const handleToggleSidebar = () => {

    };

    return (
        <div className="App" >
            <UpperBar></UpperBar>
                {children}
            <SideBar></SideBar>
        </div>
    );

}

export default Base;