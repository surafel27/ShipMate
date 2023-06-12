import React, { useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import Headers from '../../components/Header';
import Post from '../../components/Post';
const TravellerDashboard = () => {
    const Header = Headers.headerDashboard
    const PostTraveller = Post.traveller
    return(
        <>
        <Header />
        <Sidebar />
        <PostTraveller />
        </>
    )
}
export default TravellerDashboard;