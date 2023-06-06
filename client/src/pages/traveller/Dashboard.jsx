import React, { useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import Headers from '../../components/Header';
import Post from '../../components/Post';
const TravellerDashboard = () => {
    const Header = Headers.headerDashboard
    return(
        <>
        <Header />
       < Sidebar />
        <Post />
        </>
    )
}
export default TravellerDashboard;