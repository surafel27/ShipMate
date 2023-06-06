import React, {useState, useEffect, useRef} from 'react';
import Profile from '../assets/Profile.png';
//import Popup from './SinglePost.jsx'
import './PostStyle.css';
import NewPostCard from './NewPostCard';

const Post = () => {
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
  const [showPopup, setShowPopup] = useState(false);
  //const popupRef = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
    <div className="search-input">
          <form className="search-form">
          <input placeholder="DO YOU HAVE ANY PACKAGE TO BE DELIVERD?" type="text" id="NewPackage" name="NewPackage"/>
          <input placeholder="search for package" type="text" id="searchPackage" name="searchPackage"/>
          <button className='search-btn'>Search</button>
        </form>
    </div>
    <div className="home">
      <div className="package-card">
        {posts.map((post, index) => (
          <div className="post" key={post.postId} onClick={togglePopup}>
            {showPopup && (
            <div>
              <NewPostCard />
              </div>
              )}
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

export default Post;