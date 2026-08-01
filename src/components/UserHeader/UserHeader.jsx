// UserHeader.jsx
import React from 'react';
import './UserHeader.css'


const UserHeader = ({ name, timeAgo }) => {
  const postDate = new Date(timeAgo).toLocaleDateString()
  return (
    <div className="user-header-container">
        {/* For now make a rounded gray circle to simulate */}
      <div className='avatar-img'></div> 
      
      <div className="">
        <h4 className="user-name">
          {name}
        </h4>
        <div className="timestamp">
          <span>Posted {postDate}</span>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;