import React from 'react'
import { Input } from './ui/input'

const MessageInputBar = () => {
  return (
    <Input className='bg-transparent border w-[60vw]' type="text" placeholder="message" />
  )
}

export default MessageInputBar