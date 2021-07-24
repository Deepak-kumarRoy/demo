import React from "react";

const MyMessage = ({message}) => {
  if(message?.attachments?.length>0){
  return(
      <img 
          src={message.attachments[0].file}
          alt="message-attachments"
          className="message-image"
          styles={{ float: 'right'}}
          />
  )
}
      return(
        <div className="message" style={{ float: 'right', margin: '18px', color: 'white', backgroundcolor: '#3B2A50'}}>
          {message.text}
        </div>
      );
}

export default MyMessage;