import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import User from './User'

const Sidebar = () => {
    let tempuser = [
        "Sharko",
        "Marko",
        "Spiderman",
        "Ironman",
        "Captian America",
        "Hulk",
        "Thor",
        "Wanda"
    ]
  return (
    <ScrollArea className="h-full w-[30vw] rounded-md border p-2">
        {/* <User /> */}
        {
            tempuser.map((user)=>{
                return <User user={user} />
            })
        }
    </ScrollArea>
  )
}

export default Sidebar