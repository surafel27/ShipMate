import React, {useState, useEffect, useRef} from 'react';
import Profile from '../assets/profile.png';
//import Popup from './SinglePost.jsx'
import './PostStyle.css';
import NewPostCard from './NewPostCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostSender = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get("http://localhost:8800/api/package/packages");
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
                <p>{post.postTime}</p>
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



const PostTraveller = () => {
  const posts = [
    {
      postId: 1,
      img: Profile,
      fullName: 'Surafel Fekadu Megiso',
      postTime: 'posted 1hr ago',
      packageRouteFrom: 'Addis Abab',
      packageRouteTo: 'Hawassa',
      detailStory:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: '500',
      packageWight: '10 kg',
      dateToDelivery: 'Fir',
      monthToDelivery: 'May',
      yearToDelivery: '2023',
    },
    {
      postId: 2,
      img: Profile,
      fullName: 'Surafel Fekadu Megiso',
      postTime: 'posted 1hr ago',
      packageRouteFrom: 'Addis Abab',
      packageRouteTo: 'Hawassa',
      detailStory:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: '500',
      packageWight: '10 kg',
      dateToDelivery: 'Fir',
      monthToDelivery: 'May',
      yearToDelivery: '2023',
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
          <div className="post" key={post.postId}>
            
            <div className="user-header">
              <div className="user-photo">
                <img src={post.img} alt="User" />
                <h3>{post.fullName}</h3>
                <p>{post.postTime}</p>
              </div>
              <div className="card-icon">
                <div className="filter">
                  <h3>...</h3>
                </div>
              </div>
            </div>
            <div className="package-destination">
              <h3>
                Package Route [{post.packageRouteFrom} - {post.packageRouteTo}]
              </h3>
              <h5>
                Fixed-Price: {post.price} birr | Package-Wight: {post.packageWight} | Date:{' '}
                {post.dateToDelivery}, {post.monthToDelivery}, {post.yearToDelivery}
              </h5>
              <p>{post.detailStory}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

const Post = {
  sender: PostSender,
  traveller: PostTraveller
}
export default Post;
