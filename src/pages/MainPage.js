import React from 'react';

import Sidebar from '../layouts/Sidebar';
// import SidePanel from '../containers/SidePanel/SidePanel';
// import ChatWindow from '../containers/ChatWindow/ChatWindow';

import classes from './MainPage.module.css';

const mainPage = () => {
    return (<>
        {/* <div className={classes.mainPage}> */}
             <Sidebar/>
            {/* <ChatWindow/> */}
         {/* </div> */}
        </>
    );
}

export default mainPage;