import React, {useState, useEffect, useRef, useContext} from 'react';
import Profile from '../assets/profile.png';
//import Popup from './SinglePost.jsx'
import './PostStyle.css';
import NewPostCard from './NewPostCard';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const reloadPage = () => {
  window.location.reload();
}


const MySenderPackage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get("http://localhost:8800/api/package/my_packages");
        setPosts(res.data);
      } catch(err) {
        console.log(err)
      }
    };
    fetchData();
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (!currentUser) {
      navigate('/account/Identity/sender');
    }
  }, []);

  return (
    <>
    <div className="search-input">
          <div className="search-form">
          <input onClick={togglePopup} placeholder="DO YOU HAVE ANY PACKAGE TO BE DELIVERD?" type="text" id="NewPackage" name="NewPackage"/>
            {isOpen && (
            <div>
              <NewPostCard isOpen={isOpen} togglePopup={togglePopup} />
              </div>
              )}
        <input placeholder="search for package" type="text" id="searchPackage" name="searchPackage"/>
          <button className='search-btn'>Search</button>
        </div>
    </div>
    <div className="home">
      <div className="package-card">
        {posts.map((post, index) => (
          
          <div className="post" key={post.packageId}>
            
            <div className="user-header">
              <div className="user-photo">
                <img src={Profile} alt="User" />
                <h3>{post.fullName}</h3>
                <p>Posted {moment(post.created_at).fromNow()}</p>
              </div>
              <div className="card-icon">
                <div className="filter">
                  <h3>...</h3>
                </div>
              </div>
            </div>
            <Link className='link' to={`/package/${post.packageId}`}>
            <div className="package-destination">
              <h3>
                Package Route [{post.packageFrom} - {post.packageTo}]
              </h3>
              <h5>
                Fixed-Price: {post.packagePrice} birr | Package-Wight: {post.packageWeight} kg | Date:{post.packageDate}
              </h5>
              <p>{post.packageDesc}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};


const MyTravellerPackage = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`http://localhost:8800/api/package/my_packages`);
        setPosts(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (!currentUser) {
      navigate('/account/Identity/traveller');
    }
  }, []);
  return (
    <>
    <div className="search-input">
        <div className="search-form">
          <input placeholder="search for package" type="text" id="searchPackage" name="searchPackage"/>
          <button className='search-btn'>Search</button>
        </div>
    </div>
    <div className="home">
      <div className="package-card">
        {posts.map((post, index) => (
          
          <div className="post" key={post.packageId}>
            
            <div className="user-header">
              <div className="user-photo">
                <img src={Profile} alt="User" />
                <h3>{post.fullName}</h3>
                <p>Posted {moment(post.created_at).fromNow()}</p>
              </div>
              <div className="card-icon">
                <div className="filter">
                  <h3>...</h3>
                </div>
              </div>
            </div>
            <Link className='link' to={`/package/${post.packageId}`}>
            <div className="package-destination">
              <h3>
                Package Route [{post.packageFrom} - {post.packageTo}]
              </h3>
              <h5>
                Fixed-Price: {post.packagePrice} birr | Package-Wight: {post.packageWeight} kg | Date:{post.packageDate}
              </h5>
              <p>{post.packageDesc}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

const AllMyPacakge = {
  sender: MySenderPackage,
  traveller: MyTravellerPackage,
  reloadPg: reloadPage
}
export default AllMyPacakge;
