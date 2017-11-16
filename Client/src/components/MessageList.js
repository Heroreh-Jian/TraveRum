import React from 'react';
import MessageItem from './MessageItem';
import './MessageList.css';

const MessageList = ({messages}) => {
  let messageList = messages.map(m => (
    <MessageItem
      key={m.id}
      date={m.createdAt}
      username={m.username}
      text={m.text}
      profileImageUrl={m.profileImageUrl}
    />
  ));
  return (
    <div className="col-sm-8" id="home-aside">
      <ul className="list-group">
        <h3>Please list your ultimate travel desitination and explain why.
        </h3>
      </ul>
      <ul className="list-group">
        {messageList}
      </ul>
    </div>
  );
}

MessageList.defaultProps = {
  messages: []
}

export default MessageList;
