import React, { useContext, useEffect, useState} from 'react';
import './SinglePostStyle.css'
import Profile from '../assets/Profile.png';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Single = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState([]);
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);
  const packageId = location.pathname.split("/")[2];
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/package/${packageId}`, {
          withCredentials: true,
        });
        setPost(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  }, [packageId]);

  useEffect(() => {
    if (!currentUser) {
      navigate('/account/login');
    }
  }, []);

  const handleDelete = async () => {
    const packageId = location.pathname.split("/")[2];
    try {
       await axios.delete(`http://localhost:8800/api/package/${packageId}`, {
        withCredentials: true,
      });
      navigate('/user/account/sender/dashboard');
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="popup-container">
      <div className="package-card">
        <div className="post">
          <div className="user-header">
            <div className="user-photo">
              <img src={Profile} alt="User"/>
              <h3>{post.fullName}</h3>
              <p>Posted {moment(post.created_at).fromNow()}</p>
            </div>
            <div className="card-icon">
              <div className="filter">
                <h3>...</h3>
              </div>
            </div>
          </div>
          <div className="package-destination">
            <h3>
              Package Route [{post.packageFrom} - {post.packageTo}]
            </h3>
            <h5>
              Fixed-Price: {post.packagePrice} birr | Package-Wight: {post.packageWeight} | Date:{post.packageDate}
            </h5>
            <p>{post.packageDesc}</p>
          </div>
          <hr />
        </div>
        { !currentUser.fullName === post.fullName &&
        <div className='post-btn'>
          <button>SEND PROPOSAL</button>
        </div>
        }
        {currentUser.fullName === post.fullName &&
          <div className='edit'>
            <Link to={`/write?edit=2`}> <button className='btn-edit'>Edit</button></Link>
            <button onClick={handleDelete} className='btn-danger'>Delete</button>
          </div>
        }
      </div>
    </div>
  );
};
export default Single;