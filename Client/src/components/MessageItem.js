import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import './MessageItem.css';
import DefaultImage from './default.jpg';

const MessageItem = (props) => {
  const {profileImageUrl, username, text, date} = props;
  return (
    <li className="list-group-item message-container">
      <Link to="/">
        <img
          src={profileImageUrl || DefaultImage}
          alt={`${username} profile`}
          className="timeline-image"
        />
      </Link>
      <div className="message-area">
        <Link to="/">@{username}</Link>
        <Moment className="text-muted" format="Do MMM YYYY">{date}</Moment>
        <p>{text}</p>
      </div>
    </li>
  );
}

export default MessageItem;
