import React from 'react';
import Data from './Data'

const ChatApp = () => {
  console.log(Data.chats);

  const MappedUsernames = Data.chats.map(function(chat, index) {
    return (
      <div key={index}>
        <h3>{chat.username}</h3>
        <p>{chat.chat}</p>
      </div>
    )
  })


  return (
    <div>
      <h1>{"Let's look at the chats!"}</h1>
      <div className="chat-container">
        <ul>
          {MappedUsernames}
        </ul>
      </div>
    </div>
  )
}

export default ChatApp;
