import React from 'react'

interface MessageProp {
    message: {
        message: string ,
        user :string
    }
}
const Message : React.FC<MessageProp>= ({message}) => {
  return (
    <div className={`h-10 w-max ${message.user === 'sharko' ? 'bg-sky-500' : 'bg-sky-800'}  px-4 my-3 flex justify-center items-center
    rounded-2xl`}>{message.message}</div>
  )
}

export default Message