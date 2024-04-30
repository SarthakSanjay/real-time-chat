import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface UserProp {
    user : string
}
const User : React.FC<UserProp> = ({user}) => {
  return (
    <div className="h-15 hover:bg-gray-500/45 w-full py-2 px-3 rounded-lg flex gap-4 my-1">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1>{user}</h1>
    </div>
  );
};

export default User;
