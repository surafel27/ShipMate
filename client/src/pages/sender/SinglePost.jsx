import React, { useContext} from 'react';
import Sidebar from '../../components/Sidebar.jsx';
import Headers from '../../components/Header';
import Single from '../../components/SinglePost.jsx';


const SinglePackage = () => {
    const Header =Headers.headerDashboard
    return (
        <>
         <Header />
        < Sidebar />
         <Single />
         </>
    )
}
export default SinglePackage;