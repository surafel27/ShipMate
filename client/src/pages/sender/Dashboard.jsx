import React, { useContext} from 'react';
import { AuthContext } from '../../context/authContext';
import Sidebar from '../../components/Sidebar.jsx';
import Headers from '../../components/Header';
import Post from '../../components/Post';

const SenderDashboard = () => {
    const Header =Headers.headerDashboard
    const { currentUser } = useContext(AuthContext);
    
    return (
        <>
         <Header />
        < Sidebar />
         <Post />
         </>
    )
}
export default SenderDashboard;