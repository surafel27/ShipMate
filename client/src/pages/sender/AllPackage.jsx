import React, { useContext} from 'react';
import Sidebar from '../../components/Sidebar.jsx';
import Headers from '../../components/Header';
import AllMyPacakge from '../../components/Post';

const myPackage = () => {
    const Header =Headers.headerDashboard
    const MySenderPackage = AllMyPacakge.sender;
    return (
        <>
         <Header />
        < Sidebar />
         <MySenderPackage />
         </>
    )
}
export default myPackage;