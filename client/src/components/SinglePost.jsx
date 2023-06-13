import React, { useContext, useEffect, useState } from 'react';
import './SinglePostStyle.css'
import Profile from '../assets/Profile.png';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import  moment from 'moment';
import { AuthContext } from '../context/authContext';

const Single = () => {
  const [post, setPost] = useState ([]);
  const location = useLocation();
  const {currentUser} = useContext(AuthContext);
  const packageId = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`http://localhost:8800/api/package/${packageId}`, {
          withCredentials: true,
        });
        setPost(res.data);
      } catch(err) {
        console.log(err)
      }
    };
    fetchData();
  }, [packageId]);

  return (
    <div className="popup-container">
      <div className="popup-content">
      </div>
      <div className="package-card">
          <div className="post">
            <div className="user-header">
              <div className="user-photo">
                <img src={Profile} alt="User" />
                <h3>{post.fullName}</h3>
                <p>Posted {moment(post.createdAt).fromNow()}</p>
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
        <div className='post-btn'>
        <button>SEND PROPOSAL</button>
        </div>
        {currentUser.fullName === post.fullName &&
        <div className='edit'>
          <Link to={`/write?edit=2`} >
            <button>Edit</button>
          </Link>
          <button className='btn-danger'>Delete</button>
        </div>
        }
      </div>
    </div>
  );
};
export default Single;