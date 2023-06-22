import React, { useContext} from 'react';
import Sidebar from '../../components/Sidebar.jsx';
import Headers from '../../components/Header';
import Chekout from '../../components/Profile.jsx';


const SinglePackage = () => {
    const Header =Headers.headerDashboard
    return (
        <>
         <Header />
         <Sidebar />
         <Chekout />
         </>
    )
}
export default SinglePackage;