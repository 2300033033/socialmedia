import React, { useState } from 'react';
import '../styles/MyFriends.css';

const Myfriends = () => {
  const initialFriends = [
    { name: "Angelin Daisy", image: "/images/pp1.png", isFollowing: true },
    { name: "Yasaswini", image: "/images/pp2.png", isFollowing: true },
    { name: "Pallavi", image: "/images/pp3.png", isFollowing: true },
    { name: "Vedha Sree", image: "/images/pp4.png", isFollowing: true },
    { name: "Mokshitha", image: "/images/pp5.png", isFollowing: true },
  ];

  const [friends, setFriends] = useState(initialFriends);

  const toggleFollow = (index) => {
    const updatedFriends = [...friends];
    updatedFriends[index].isFollowing = !updatedFriends[index].isFollowing;
    setFriends(updatedFriends);
  };

  const removeFriend = (index) => {
    const updatedFriends = friends.filter((_, i) => i !== index);
    setFriends(updatedFriends);
  };

  return (
    <div>
      <div className='parent'>
        {/* Header */}
        <div className='header'>
          <div className="header_image">
            <img src="/images/logo.png" alt="Voxora Logo" height="70px" width="250px" />
          </div>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search Voxora" />
            <button className="search-icon"><i className="fa fa-search"></i></button>
          </div>
          <section className="header_menu">
            <a href="/login">Login</a>
          </section>
        </div>

        {/* Left Menu */}
        <div className='leftmenu'>
          <section className="menu_bar">
            <a href="/"><i className="fa fa-home"></i><br />Home</a>
            <a href="/trending"><i className="fa fa-fire"></i><br />Trending</a>
            <a href="/myfriends"><i className="fa fa-user-friends"></i><br />My Friends</a>
            <a href="/ping"><i className="fa fa-comment"></i><br />Ping</a>
            <a href="/populargroups"><i className="fa fa-star"></i><br />Popular Groups</a>
            <a href="/profile"><i className="fa fa-user-circle"></i><br />Profile</a>
            <a href="/settings"><i className="fa fa-cogs"></i><br />Settings</a>
          </section>
        </div>

        {/* Main Body */}
        <div className='body1'>
          <div className='pp'>
            {friends.map((friend, index) => (
              <div className='friend-row' key={index}>
                <div className='friend-info'>
                  <img src={friend.image} alt={friend.name} />
                  <p>{friend.name}</p>
                </div>
                <div className='friend-actions'>
                  <button onClick={() => toggleFollow(index)}>
                    {friend.isFollowing ? 'Following' : 'Follow'}
                  </button>
                  <button onClick={() => removeFriend(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myfriends;