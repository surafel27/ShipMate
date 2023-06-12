import React, { useContext} from 'react';
import Sidebar from '../../components/Sidebar.jsx';
import Headers from '../../components/Header';
import Post from '../../components/Post';

const SenderDashboard = () => {
    const Header =Headers.headerDashboard
    const PostSender = Post.sender;
    return (
        <>
         <Header />
        < Sidebar />
         <PostSender />
         </>
    )
}
export default SenderDashboard;