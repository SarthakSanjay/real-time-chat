import ChatWindow from "@/components/ChatWindow";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-black h-screen w-screen flex text-white">
    <Sidebar />
    <ChatWindow />
   </div>
  );
}
