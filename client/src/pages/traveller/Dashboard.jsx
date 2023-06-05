import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Sidebar from '../../components/Sidebar';
const TravellerDashboard = () => {
    const { currentUser } = useContext(AuthContext);
    return(
        < Sidebar />
    )
}
export default TravellerDashboard;