import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import MessageInputBar from './MessageInputBar'
import { Button } from './ui/button'
import Message from './Message'

const ChatWindow = () => {
  const messageData = [
    {user : "sharko" , message : 'hello'},
    {user : "marko" , message : 'what'},
    {user : "sharko" , message : 'nothing'},
    {user : "marko" , message : 'so'},
    {user : "sharko" , message : 'I dont know'},
    {user : "sharko" , message : 'wow'},
  ]
  return (
    <ScrollArea className="h-full w-full rounded-md border px-10">
        Chat window
        {
          messageData.map((message)=>{
            return <div className={`w-full flex items-center
              ${message.user === "sharko" ? "justify-end" : "justify-start"}
            `}>

              <Message message={message} />
            </div> 
          })
        }
        <div className='absolute bottom-10 w-full flex justify-center'>
          <MessageInputBar />
          <Button className='bg-transparent text-white' variant={'outline'}>Send</Button>
        </div>
    </ScrollArea>
  )
}

export default ChatWindow